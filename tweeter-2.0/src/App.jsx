import { Container } from "@mantine/core";
import CreateTweet from "./components/CreateTweet.jsx";
import TweetsList from "./components/TweetsList.jsx";
import "./App.css";

function App() {
  return (
    <Container size="sm" mt="md">
      <CreateTweet />
      <TweetsList />
    </Container>
  );
}

export default App;
