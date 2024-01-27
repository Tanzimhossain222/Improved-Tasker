import HeroSection from "./components/HeroSection";
import TaskBoard from "./components/Task/TaskBoard";
import Layout from "./layout/Layout";

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
