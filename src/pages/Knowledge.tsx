import Navbar from "@/components/Navbar";
import KnowledgeHub from "@/components/KnowledgeHub";
import Footer from "@/components/Footer";

const Knowledge = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-16">
        <KnowledgeHub />
      </div>
      <Footer />
    </div>
  );
};

export default Knowledge;
