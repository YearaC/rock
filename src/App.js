import { useState } from "react";
import "./App.css";
import Box from "./component/Box";
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


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
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [result, setResult] = useState("");
  const [isInitial, setIsInitial] = useState(true); 
  
  const play = (userChoice) => {
    setIsInitial(false); 

    setUserSelect(choice[userChoice]);
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);
    setResult(judgement(choice[userChoice], computerChoice));
  };

  const randomChoice = () => {
    let itemArray = Object.keys(choice); 
    console.log("item array", itemArray);
    let randomItem = Math.floor(Math.random() * itemArray.length);
    console.log("random value", randomItem);
    let final = itemArray[randomItem];
    return choice[final];
  };
  const judgement = (user, computer) => {
    console.log("user", user, "computer", computer);


    if (user.name === computer.name) {
      return "draw";
    } else if (user.name === "Rock")
      return computer.name === "Scissors" ? "win" : "lose";
    else if (user.name === "Scissors")
      return computer.name === "Paper" ? "win" : "lose";
    else if (user.name === "Paper")
      return computer.name === "Rock" ? "win" : "lose";
  };

  return (
    <Container className="text-center">
      <Row className="justify-content-center my-4">
        <Col xs={12} md={10} lg={6}>
        <div className={`main d-flex flex-column flex-md-row justify-content-center ${isInitial ? 'initial-padding' : ''}`}>

            <Box title="You" item={userSelect} result={result} />
            <Box title="Computer" item={computerSelect} result={result} />
          </div>
          <div className="my-4">
            <button className="btn btn-primary mx-2" onClick={() => play("scissors")}>가위</button>
            <button className="btn btn-primary mx-2" onClick={() => play("rock")}>바위</button>
            <button className="btn btn-primary mx-2" onClick={() => play("paper")}>보</button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;