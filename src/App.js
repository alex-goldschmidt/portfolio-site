import "./App.css";
import Project from "./components/Project/index";

const App = () => {
  return (
    <div className="App">
      <h1>Projects</h1>
      <div className="ProjectContainer">
        <Project />
        <Project />
        <Project />
      </div>
    </div>
  );
};

export default App;
