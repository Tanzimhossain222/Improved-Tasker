import React from "react";
import HeroSection from "./components/HeroSection";
import Layout from "./layout/Layout";
import TaskBoard from "./components/Task/TaskBoard";

const Page = () => {
  return (
    <>
      <Layout>
        <HeroSection />
        <TaskBoard />
      </Layout>
    </>
  );
};

export default Page;
