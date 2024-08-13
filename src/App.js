import  {useState } from "react";
import "./App.css";
import Box from "./component/Box";

const choice = {
  rock: {
    name: "Rock",
    img: "https://wrpsa.com/wp-content/uploads/2021/08/rock.png"
  },
  scissors: {
    name: "Scissors",
    img: "https://wrpsa.com/wp-content/uploads/2021/08/scissors.png"

  },
  paper: {
    name: "Paper",
    img: "https://wrpsa.com/wp-content/uploads/2021/08/paper.png"
  }
};

function App() {
  
  const [userSelect,setUSerSelect] = useState(null);

  const play = (userChoice) => {
    setUSerSelect(choice[userChoice]);

  }

  return (
    <div className="entire">
      <div className='main'>
        <Box title="You" item = {userSelect} />
        {/* <Box title="Computer" /> */}
      </div>
      <div className='main'>
        <button onClick={() => play("rock")}>Rock</button>
        <button onClick={() => play("scissors")}>Scissors</button>
        <button onClick={() => play("paper")}>Paper</button>
      </div>
    </div>

  );
}

export default App;
