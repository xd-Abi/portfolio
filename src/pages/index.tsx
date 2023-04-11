import React from "react";
import Head from "@/components/Head";
import Hero from "@/components/Hero";
import SocialPanel from "@/components/SocialPanel";

export default function Home() {
  return (
    <React.Fragment>
      <Head
        title="xd Abi | Software Developer"
        description="I am a software developer who specializes in game development and enjoys working on a variety of fun projects."
      />
      <main>
        <SocialPanel />
        <Hero />
      </main>
    </React.Fragment>
  );
}
