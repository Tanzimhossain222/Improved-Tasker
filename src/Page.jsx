import HeroSection from "./components/HeroSection";
import ModalOverlay from "./components/ModalOverlay";
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
