import React from "react";
import { Container, Cover, Head } from "@/components";

export default function Home() {
  return (
    <React.Fragment>
      <Head
        title="xd Abi | Software Developer"
        description="I am a software developer who specializes in game development and enjoys working on a variety of fun projects."
      />
      <Container>
        <Cover />
      </Container>
    </React.Fragment>
  );
}
