export default function Item({item, onDeleteItem, onUpdateItem}) {
    return(
      <li>
        <input type="checkbox" checked={item.packed} onChange={() => onUpdateItem(item.id)}/>
        <span style={{textDecoration: item.packed ? 'line-through' : 'none'}}>
          {item.description} ({item.quantity})
        </span>
        <button onClick={() => onDeleteItem(item.id)}>❌</button>
      </li>
    )
  }