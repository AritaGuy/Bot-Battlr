import React, {useState, useEffect} from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  //start here with your code for step one
  const[bots, setBots]=useState([])
  const[botArmy, setBotArmy]=useState([])
  useEffect(()=>{
    fetch('http://localhost:8002/bots')
    .then((r)=>r.json())
    .then((bot)=>setBots(bot))
  }, [])

  function handleGet(bot){
    setBotArmy([...botArmy, bot])
  }
  console.log(botArmy)
  
  function removeBot(bot){
    const botArmyList = botArmy.filter((botSoilder)=> botSoilder !== bot)
    setBotArmy(botArmyList)
  }

  return (
    <div>
      <YourBotArmy army={botArmy}  onGetItem={removeBot}/>
      <BotCollection collection={bots} onGetItem={handleGet}/>
    </div>
  )
}

export default BotsPage;
