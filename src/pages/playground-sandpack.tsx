import React from "react";
import { Sandpack } from "@codesandbox/sandpack-react";
import { Container } from "@mui/material";

export default function SandPack() {
  return (
    <Container sx={{p: 3}}>
      <Sandpack template="react"
        // You can change these examples!
        // Try uncommenting any of these lines
        // theme="dark"
        // template="react"
      />
    </Container>
  );
}