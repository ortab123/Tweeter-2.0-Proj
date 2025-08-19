import { createContext, useContext, useReducer, useEffect } from "react";
import * as api from "../lib/api";
import { useAuth } from "./AuthContext.jsx";

const initialState = {
  tweets: [],
  loading: true,
  error: null,
  posting: false,
  postError: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "FETCH_START":
      return { ...state, loading: true, error: null };
    case "FETCH_SUCCESS":
      return { ...state, loading: false, tweets: action.payload };
    case "FETCH_ERROR":
      return { ...state, loading: false, error: action.payload };

    case "ADD_START":
      return { ...state, posting: true, postError: null };
    case "ADD_SUCCESS":
      return {
        ...state,
        posting: false,
        tweets: [action.payload, ...state.tweets],
      };
    case "ADD_ERROR":
      return { ...state, posting: false, postError: action.payload };

    case "CLEAR_POST_ERROR":
      return { ...state, postError: null };

    default:
      return state;
  }
}

export const TweetsContext = createContext();

export function TweetsProvider({ children }) {
  const { user } = useAuth();
  const [tweets, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    let ignore = false;
    async function load() {
      dispatch({ type: "FETCH_START" });
      try {
        const data = await api.fetchTweets();
        if (!ignore) dispatch({ type: "FETCH_SUCCESS", payload: data });
      } catch (err) {
        if (!ignore)
          dispatch({
            type: "FETCH_ERROR",
            payload: err.message || String(err),
          });
      }
    }
    load();
    return () => {
      ignore = true;
    };
  }, []);

  const addTweet = async (text) => {
    if (!user) return;

    dispatch({ type: "ADD_START" });
    try {
      const newTweet = await api.createTweet({
        content: text,
        userName: user.email,
        date: new Date().toISOString(),
      });

      dispatch({ type: "ADD_SUCCESS", payload: newTweet });
    } catch (err) {
      dispatch({ type: "ADD_ERROR", payload: err.message || String(err) });
    }
  };

  const clearPostError = () => dispatch({ type: "CLEAR_POST_ERROR" });

  return (
    <TweetsContext.Provider
      value={{
        tweets: tweets.tweets,
        loading: tweets.loading,
        error: tweets.error,
        posting: tweets.posting,
        postError: tweets.postError,
        addTweet,
        clearPostError,
      }}
    >
      {children}
    </TweetsContext.Provider>
  );
}

export function useTweets() {
  return useContext(TweetsContext);
}
