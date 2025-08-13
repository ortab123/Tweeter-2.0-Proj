import { useState, useEffect } from "react";
import { Box, TextInput, Button, Text } from "@mantine/core";

const LOCAL_STORAGE_KEY = "currentUsername";

export default function ProfilePage() {
  const [username, setUsername] = useState("");

  useEffect(() => {
    const stored = localStorage.getItem(LOCAL_STORAGE_KEY) || "AviRon";
    setUsername(stored);
  }, []);

  const handleSave = () => {
    localStorage.setItem(LOCAL_STORAGE_KEY, username);
    alert("Username updated!");
  };

  return (
    <Box style={{ maxWidth: 500, margin: "0 auto", marginTop: 40 }}>
      <Text size="xl" weight={500} mb="md">
        Profile
      </Text>
      <TextInput
        label="Username"
        value={username}
        onChange={(e) => setUsername(e.currentTarget.value)}
        mb="md"
      />
      <Button onClick={handleSave}>Save Username</Button>
    </Box>
  );
}
