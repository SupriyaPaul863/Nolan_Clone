import React from "react";
import HeroSection from "../components/HeroSection";
import FeatureCard from "../components/FeatureCard";
import EthicalAISection from "../components/EthicalAISection";
import Page from "../components/Page";
import SecureSection from "../components/SecureSection";
import Action from "../components/Action";
import Tabs from "../components/Tabs";
import ProductivitySection from "../components/ProductivitySection";
import TestimonialSection from "../components/TestimonialSection";
import ChatGPTChat from "../components/ChatGptChat";
// import Footer from "../components/Footer";
import { PiggyBank, PenTool, Crown, BarChart2, Languages, FileText } from "lucide-react";


const features = [
  {
    icon: <PiggyBank className="w-6 h-6 text-white" />,
    title: "AI Budgeting",
    description:
      "Generate accurate film budgets with AI-powered analysis. NolanAI reviews your script to identify cost drivers.",
  },
  {
    icon: <PenTool className="w-6 h-6 text-white" />,
    title: "AI Co-Pilot Editor",
    description:
      "Overcome writer’s block with AI-driven prompts and suggestions for seamless writing.",
  },
  {
    icon: <Crown className="w-6 h-6 text-white" />,
    title: "AI Pitch Deck",
    description:
      "Create compelling pitch decks with ready-made templates. Extract key details to visualize your story.",
  },
  {
    icon: <BarChart2 className="w-6 h-6 text-white" />,
    title: "Analytics",
    description: "Leverage analytics to improve storytelling decisions with performance-driven insights.",
  },
  {
    icon: <Languages className="w-6 h-6 text-white" />,
    title: "Multilingual",
    description: "Write and translate your scripts in multiple languages seamlessly.",
  },
  {
    icon: <FileText className="w-6 h-6 text-white" />,
    title: "Automated Breakdown",
    description:
      "Get automatic scene breakdowns and suggestions for characters, props, and settings.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0c0c14] to-[#121622] text-white font-sans">
      <HeroSection />


      <section className="px-6 py-16 grid gap-12 md:grid-cols-3 text-white">
    
        {features.map((feature, i) => (
          <FeatureCard key={i} {...feature} />
        ))}
      </section>
        <EthicalAISection />
        <Page/>
        <SecureSection/>
        <Action/>
        <Tabs/>
        <ProductivitySection/>
        <TestimonialSection/>
        <ChatGPTChat/>
    </div>
  );
}
