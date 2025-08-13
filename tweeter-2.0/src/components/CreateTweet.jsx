import { useState } from "react";
import { Textarea, Button, Group, Box } from "@mantine/core";
import { useTweets } from "../context/TweetsContext.jsx";

export default function CreateTweet() {
  const [text, setText] = useState("");
  const { addTweet } = useTweets();

  const MAX_LENGTH = 140;
  const isTooLong = text.length > MAX_LENGTH;

  const handleTweet = () => {
    if (!isTooLong && text.trim()) {
      addTweet(text.trim());
      setText("");
    }
  };

  console.log(addTweet);
  return (
    <Box
      style={{
        width: 500,
        margin: "0 auto",
        position: "relative",
      }}
    >
      <div style={{ width: 500 }}>
        <Textarea
          placeholder="What you have in mind..."
          value={text}
          onChange={(e) => setText(e.currentTarget.value)}
          autosize={false}
          rows={8}
          style={{ borderRadius: 12, width: "100%" }}
          error={
            isTooLong
              ? `The tweet can't contain more than ${MAX_LENGTH} characters!`
              : null
          }
        />
      </div>
      <Button
        onClick={handleTweet}
        disabled={isTooLong || !text.trim()}
        style={{
          backgroundColor: "#027bff",
          position: "absolute",
          right: 10,
          bottom: 10,
          borderRadius: 8,
        }}
      >
        Tweet
      </Button>
    </Box>
  );
}
