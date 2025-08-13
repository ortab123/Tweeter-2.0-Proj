import { Card, Text, Stack, Group } from "@mantine/core";
import { useTweets } from "../context/TweetsContext.jsx";

export default function TweetsList() {
  const { tweets } = useTweets();
  console.log(tweets);

  return (
    <Stack p="md" style={{ maxWidth: 500, margin: "0 auto" }}>
      {tweets.map((tweet) => (
        <Card
          key={tweet.id}
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
            <Text weight={500} style={{ color: "white" }}>
              {tweet.username}
            </Text>
            <Text size="xs" style={{ color: "#ccc" }}>
              {new Date(tweet.createdAt).toLocaleString()}
            </Text>
          </Group>
          <Text
            style={{
              color: "white",
              alignSelf: "flex-start",
              marginTop: "auto",
            }}
          >
            {tweet.text}
          </Text>
        </Card>
      ))}
    </Stack>
  );
}
