import React from "react";
import InfoSection from "./InfoSection";

const Page = () => {
  return (
    <>
      <InfoSection
        title="Save time"
        highlight="cutting down on trivial tasks"
        description="Revolutionizing the filmmaking process for producers: cutting costs and resources by automating script analysis. Helping create outstanding pitch decks resonating with your project."
        buttonText="NolanAI for Producers"
        buttonLink="#"
        imageSrc="/writer.webp"
        reverse={false}
      />
      <InfoSection
        title="Boost efficiency"
        highlight="with smart automation"
        description="Automate mundane tasks, enhance creativity, and accelerate project development. Experience smarter filmmaking with advanced AI tools."
        buttonText="Explore Tools"
        buttonLink="#"
        imageSrc="/producer.webp"
        reverse={true}
      />
      <InfoSection
        title="Focus on storytelling"
        highlight="leave the rest to us"
        description="NolanAI supports your vision by handling the technical groundwork. Let your ideas flourish while we take care of the rest."
        buttonText="Get Started"
        buttonLink="#"
        imageSrc="/director.webp"
        reverse={false}
      />
    </>
  );
};

export default Page;


