import { useState } from "react";
import Hero from "./components/Hero/Hero";
import Nav from "./components/Nav/Nav";
import { list, otherList } from "./components/Cards/lists";
import ListOfCards from "./components/Cards/ListOfCards";
import Footer from "./components/Footer/Footer";

function App() {
  const [selectedOption, setSelectedOption] = useState(0);
  const [showMap, setShowMap] = useState(false);

  return (
    <div className="relative">
      <Nav />
      <Hero
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
      />

      {!showMap ? (
        selectedOption == 0 ? (
          <ListOfCards list={list} />
        ) : (
          <ListOfCards list={otherList} />
        )
      ) : (
        <div className="h-[75vh] border md:px-24 flex items-center justify-center">
          {" "}
          Map will be shown here. Payment needs to be made for Google maps API
          key.
        </div>
      )}

      <p
        className="border rounded-full absolute bottom-20 left-2/4 bg-black text-white py-2 px-3 cursor-pointer z-[1100] "
        onClick={() => setShowMap(!showMap)}
      >
        {!showMap ? "Show Map" : "Show Lists"}
      </p>

      <Footer />
    </div>
  );
}

export default App;
