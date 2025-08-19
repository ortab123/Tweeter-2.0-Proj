import { Card, Text, Stack, Group, Loader, Center, Alert } from "@mantine/core";
import { useTweets } from "../context/TweetsContext.jsx";
import { useAuth } from "../context/AuthContext.jsx";

export default function TweetsList() {
  const { user } = useAuth();

  const { tweets, loading, error } = useTweets();

  if (!user) {
    return (
      <Center style={{ minHeight: 200 }}>
        <Text color="gray" size="lg">
          Please log in to view tweets.
        </Text>
      </Center>
    );
  }

  if (loading) {
    return (
      <Center mih={200}>
        <Loader />
      </Center>
    );
  }

  if (error) {
    return (
      <Stack p="md" style={{ maxWidth: 500, margin: "0 auto" }}>
        <Alert color="red" title="Failed to load tweets">
          {error}
        </Alert>
      </Stack>
    );
  }

  return (
    <Stack p="md" style={{ maxWidth: 500, margin: "0 auto" }}>
      {tweets.map((tweet) => (
        <Card
          key={tweet.id ?? tweet.date}
          shadow="sm"
          padding="lg"
          radius="md"
          withBorder
          style={{
            backgroundColor: "#343a40",
            borderRadius: 12,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            minHeight: 120,
          }}
        >
          <Group
            position="apart"
            mb="xs"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text fw={500} style={{ color: "white" }}>
              {tweet.userName}
            </Text>
            <Text size="xs" style={{ color: "#ccc" }}>
              {new Date(tweet.date).toLocaleString()}
            </Text>
          </Group>
          <Text
            style={{
              color: "white",
              alignSelf: "center",
              marginTop: "auto",
            }}
          >
            {tweet.content}
          </Text>
        </Card>
      ))}
    </Stack>
  );
}
