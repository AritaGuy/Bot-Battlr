import React, {useState, useEffect} from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  //start here with your code for step one
  const[bots, setBots]=useState([])
  useEffect(()=>{
    fetch('http://localhost:8002/bots')
    .then((r)=>r.json())
    .then((bot)=>setBots(bot))
  }, [])
  

  return (
    <div>
      <YourBotArmy />
      <BotCollection collection={bots}/>
    </div>
  )
}

export default BotsPage;
