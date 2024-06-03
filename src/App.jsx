import Hero from "./components/Hero";
const itemObj = {
  name: "rohan",
  age: 23,
  place: "Ishurdi",
};

const App = () => {
  return (
    <div>
      <Hero
        item={itemObj}
        title="how to props drill"
        des="yooooooooooo nice bitch"
      />
    </div>
  );
};
export default App;
