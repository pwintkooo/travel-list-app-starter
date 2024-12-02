export default function Stats({items}) {
    let totalItems = items.length;
    let totalPackedItems = items.filter(item => item.packed).length;
    let packedPercentage = totalItems === 0 ? 0 : Math.round((totalPackedItems / totalItems) * 100);
    return (
      <footer className="stats">
        <em>
            {packedPercentage === 100 ?
            "You got everything!" :
            `You have ${totalItems} items in the list. You already packed ${totalPackedItems} (${packedPercentage}%).`}
          </em>
      </footer>
    );
  }