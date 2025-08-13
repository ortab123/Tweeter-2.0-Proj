import { Group, Anchor, Box } from "@mantine/core";
import { Link } from "react-router-dom";

export default function Navbar() {
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
      <Group position="apart">
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
    </Box>
  );
}
