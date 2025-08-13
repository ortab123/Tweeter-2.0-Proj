import { createContext, useContext, useReducer, useEffect } from "react";

const USERNAME = "JohnDoe";

function loadTweets() {
  const data = localStorage.getItem("tweets");
  return data ? JSON.parse(data) : [];
}

function saveTweets(tweets) {
  localStorage.setItem("tweets", JSON.stringify(tweets));
}

function tweetsReducer(state, action) {
  switch (action.type) {
    case "ADD_TWEET":
      return [action.payload, ...state];
    default:
      return state;
  }
}

export const TweetsContext = createContext();

export function TweetsProvider({ children }) {
  const [tweets, dispatch] = useReducer(tweetsReducer, [], loadTweets);

  useEffect(() => {
    saveTweets(tweets);
  }, [tweets]);

  const addTweet = (text) => {
    const newTweet = {
      id: Date.now(),
      username: USERNAME,
      text,
      createdAt: new Date().toISOString(),
    };
    dispatch({ type: "ADD_TWEET", payload: newTweet });
  };

  return (
    <TweetsContext.Provider value={{ tweets, addTweet }}>
      {children}
    </TweetsContext.Provider>
  );
}

export function useTweets() {
  return useContext(TweetsContext);
}
