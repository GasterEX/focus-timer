import React, {Component} from "react";
import './App.css';
import Article from "./components/Article";

function App() {
  return (
    <div className="App">
      <Article
        title={"Focus Timer"}
        description={["Focus Timer - 勉強に集中するための専用タイマー","時間の速さを実感。効率的に集中できるポモドーロ・テクニックを採用。"]}
        lap = {"LAP"}
        skip ={"NEXT"}
         time = {1500} //60*25
      />
    </div>
  );
}

export default App;
