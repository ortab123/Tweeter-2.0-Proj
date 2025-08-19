import { Container } from "@mantine/core";
import { Routes, Route } from "react-router-dom";
import CreateTweet from "./components/CreateTweet.jsx";
import TweetsList from "./components/TweetsList.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import Navbar from "./components/Navbar.jsx";
import Login from "./components/LoginPage.jsx";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Container size="sm" mt="md">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <CreateTweet />
                <TweetsList />
              </>
            }
          />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
