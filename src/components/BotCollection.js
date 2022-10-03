import React from "react";
import BotCard from "./BotCard";

function BotCollection({collection}) {
  // Your code here
  console.log(collection)
  return (
    <div className="ui four column grid">
      <div className="row">
        {/*...and here..*/
        collection.map((colle)=><BotCard key={colle.id} bot={colle}/>)}
        Collection of all bots
      </div>
    </div>
  );
}

export default BotCollection;
