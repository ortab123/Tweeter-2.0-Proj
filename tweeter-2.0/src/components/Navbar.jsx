import { Group, Anchor, Box, Button } from "@mantine/core";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <Box
      style={{
        width: "100%",
        position: "sticky",
        top: 0,
        zIndex: 1000,
        backgroundColor: "#343a40",
        padding: "10px 20px",
      }}
    >
      <Group justify="space-between">
        <Group spacing="md">
          <Anchor
            component={Link}
            to="/"
            style={{ color: "white", fontWeight: 500 }}
          >
            Home
          </Anchor>
          <Anchor
            component={Link}
            to="/profile"
            style={{ color: "white", fontWeight: 500 }}
          >
            Profile
          </Anchor>
        </Group>
        <Group spacing="md">
          {user ? (
            <Button variant="subtle" color="gray" onClick={logout}>
              Logout
            </Button>
          ) : (
            <Anchor
              component={Link}
              to="/login"
              style={{ color: "white", fontWeight: 500 }}
            >
              Login
            </Anchor>
          )}
        </Group>
      </Group>
    </Box>
  );
}
