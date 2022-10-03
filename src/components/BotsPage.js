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

  function handlePermanentDelete(bot){
    const botArmyList = botArmy.filter((botSoilder)=> botSoilder !== bot)
    setBotArmy(botArmyList)

    fetch(`http://localhost:8002/bots/${bot.id}`, {
        method: "DELETE"})

  }

  return (
    <div>
      <YourBotArmy army={botArmy}  onGetItem={removeBot} onDeleteItem={handlePermanentDelete}/>
      <BotCollection collection={bots} onGetItem={handleGet}/>
    </div>
  )
}

export default BotsPage;
