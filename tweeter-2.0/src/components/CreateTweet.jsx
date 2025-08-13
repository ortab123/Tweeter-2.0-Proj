import { useState } from "react";
import { Textarea, Button, Box, Alert } from "@mantine/core";
import { useTweets } from "../context/TweetsContext.jsx";

export default function CreateTweet() {
  const [text, setText] = useState("");
  const { addTweet, posting, postError, clearPostError } = useTweets();

  const MAX_LENGTH = 140;
  const isTooLong = text.length > MAX_LENGTH;

  const handleTweet = async () => {
    if ((isTooLong && !text.trim()) || posting) return;

    if (postError) clearPostError();
    await addTweet(text.trim());
    setText("");
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
      {postError && (
        <Alert color="red" mb="sm" title="Server error">
          {postError}
        </Alert>
      )}
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
