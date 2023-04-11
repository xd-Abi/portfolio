import React from "react";
import Head from "@/components/Head";
import Container from "@/components/Container";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <React.Fragment>
      <Head
        title="xd Abi | Software Developer"
        description="I am a software developer who specializes in game development and enjoys working on a variety of fun projects."
      />
      <main>
        <Hero />
      </main>
    </React.Fragment>
  );
}
