import React, {useState } from "react";

function Logo() {
  return <h1>My Travel List</h1>;
}

function Form({handleAddItems}) {

  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;

    const newItem = {
      id: Date.now(),
      description: description,
      quantity: quantity,
      packed: false
    };

    handleAddItems(newItem);
    setDescription('');
    setQuantity(1);
  }

  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState(1);

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need to pack?</h3>
      <select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
        <option value='1'>1</option>
        <option value='2'>2</option>
        <option value='3'>3</option>
      </select>
      <input placeholder="Item..." value={description} onChange={(e) => setDescription(e.target.value)}/>
      <button>ADD</button>
    </form>
  );
}

function PackingList({items}) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item item={item} key={item.id}/>
        ))}
      </ul>
    </div>
  );
}

function Item({item}) {
  return(
    <li style={{textDecoration: item.packed ? "line-through" : "none"}}>
      {item.description} ({item.quantity})
    </li>
  )
}

function Stats() {
  return (
    <footer className="stats">
      <em>You have X items in the list. You already packed Y (Z%).</em>
    </footer>
  );
}

function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((prevItems) => [...prevItems, item])
  }

  return (
    <div className="app">
      <Logo />
      <Form handleAddItems = {handleAddItems}/>
      <PackingList items={items}/>
      <Stats />
    </div>
  );
}

export default App;
