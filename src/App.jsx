import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Programs from "./Components/Programs/Programs";
import Title from "./Components/Title/Title";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle="Our Program" title="What We Offer"/>
        <Programs />
      </div>
    </>
  );
}


export default App;