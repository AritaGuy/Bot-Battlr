import React from "react";
import BotCard from "./BotCard";

function BotCollection({collection, onGetItem}) {
  // Your code here
  
  function handleClick(bot){
    onGetItem(bot)
  }
  return (
    <div className="ui four column grid">
      <div className="row">
        {/*...and here..*/
        collection.map((colle)=><BotCard key={colle.id} bot={colle} onGetItemy={handleClick}/>)}
        Collection of all bots
      </div>
    </div>
  );
}

export default BotCollection;
