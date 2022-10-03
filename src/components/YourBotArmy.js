import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({army, onGetItem, onDeleteItem}) {
  //your bot army code here...
  console.log(army)
  const card = army
  function handleClick(bot){
    onGetItem(bot)
  }
  
  function handleDelete(bot){
    onDeleteItem(bot)
  }

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {card.map((data)=><BotCard key={data.id} bot={data} onGetItemy={handleClick} clickDelete={handleDelete}/>)}
          Your Bot Army
          
        </div>
      </div>
    </div>
  )
}

export default YourBotArmy;
