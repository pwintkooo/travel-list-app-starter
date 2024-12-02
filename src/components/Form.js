import React, { useState } from 'react';

export default function Form({handleAddItems}) {

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