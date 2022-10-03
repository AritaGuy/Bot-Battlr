import React, { useState } from "react";
import BotCard from "./BotCard";

function YourBotArmy({army, onGetItem}) {
  //your bot army code here...
  console.log(army)
  const card = army
  function handleClick(){
    // console.log('hello world')
  }
  
  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {card.map((data)=><BotCard key={data.id} bot={data} onGetItemy={handleClick} />)}
          Your Bot Army
          
        </div>
      </div>
    </div>
  )
}

export default YourBotArmy;
