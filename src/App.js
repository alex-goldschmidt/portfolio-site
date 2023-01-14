import "./App.css";
import Project from "./components/Project/index";
import OrderBookPicture from "./Images/OrderBookPicture.png";
import SimplyNewsPicture from "./Images/SimplyNewsPicture.png";
import MemoryCardsPicture from "./Images/MemoryCardsPicture.png";

const App = () => {
  return (
    <div className="App">
      <h1>Projects</h1>
      <div className="ProjectContainer">
        <Project
          ProjectTitle="Order Book"
          ProjectDescription="React-based app that utilizes Coinbase WebSocket feed to display real-time bid 
          and ask prices for 4 cryptocurrencies. Implemented reusable components and 100% test coverage."
          link="https://alex-goldschmidt.github.io/order-book/"
          repository="https://github.com/alex-goldschmidt/order-book"
          ButtonLinkContent="Link"
          ButtonRepositoryContent="Repository"
          image={OrderBookPicture}
        />
        <Project
          ProjectTitle="Simply News"
          ProjectDescription="React-based news reader that sources news from 80,000 sources, allows users to read news from 3 
          perspectives, and has real-time breaking news feature."
          repository="https://github.com/alex-goldschmidt/simply-news"
          ButtonLinkContent=""
          ButtonRepositoryContent="Repository"
          image={SimplyNewsPicture}
        />
        <Project
          ProjectTitle="Memory Cards"
          ProjectDescription="Developed Memory Cards game, a React-based app that simulates the classic memory game using 8 cards. 
          Utilized React and implemented game logic to allow users to flip and match cards in order to play and test their memory skills."
          link="https://alex-goldschmidt.github.io/Memory-Cards/"
          repository="https://github.com/alex-goldschmidt/Memory-Cards"
          ButtonLinkContent="Link"
          ButtonRepositoryContent="Repository"
          image={MemoryCardsPicture}
        />
      </div>
    </div>
  );
};

export default App;
