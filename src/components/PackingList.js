import React, {useState} from "react";
import Item from "./Item.js";

export default function PackingList({items, onDeleteItem, onUpdateItem, onClearAll}) {
  const [isSorted, setIsSorted] = useState(false);

  const handleSortItems = () => {
    setIsSorted(!isSorted);
  };

  const displayedItems = isSorted
    ? [...items].sort((a, b) => a.description.localeCompare(b.description))
    : items;
  return (
    <div className="list">
      <div style={{flexDirection: "row"}}>
        <button onClick={handleSortItems}>Sort Items</button>
        <button onClick={onClearAll}>Clear All</button>
      </div>
      <ul>
        {displayedItems.map((item) => (
          <Item item={item} 
          key={item.id}
          onDeleteItem={onDeleteItem}
          onUpdateItem={onUpdateItem}
          />
        ))}
      </ul>
    </div>
  );
}