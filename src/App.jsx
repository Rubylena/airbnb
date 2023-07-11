import { useState } from "react";
import Hero from "./components/Hero/Hero";
import Nav from "./components/Nav/Nav";
import { list, otherList } from "./components/Cards/lists";
import ListOfCards from "./components/Cards/ListOfCards";
import Footer from "./components/Footer/Footer";

function App() {
  const [selectedOption, setSelectedOption] = useState(0);

  return (
    <>
      <Nav />
      <Hero
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
      />
      {selectedOption == 0 ? (
        <ListOfCards list={list} />
      ) : (
        <ListOfCards list={otherList} />
      )}
      <Footer />
    </>
  );
}

export default App;
