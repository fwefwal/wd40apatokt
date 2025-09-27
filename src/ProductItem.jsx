import React from "react";
import classes from './ProductItem.module.css'

export default function ProductItem({ item, onIncrement, onDecrement, onRemove }) {
  return (
    <div
      // style={{ border: "1px solid black", padding: "15px", margin: "15px", width: "200px", textAlign: "center" }}
      style={{ border: "1px solid black", padding: "15px", margin: "10px", width: "222px", textAlign: "center", }}
      // className="classes.mob"
      // className="djs"
      onDoubleClick={() => onRemove(item.id)}
    >
      <h3>{item.name}</h3>
      <p>Price: {item.price}</p>
      <div>
        <button onClick={() => onDecrement(item.id)} style={{ cursor: "pointer", padding: 3 }}>-</button>
        <span style={{ margin: "0 10px" }}>{item.count}</span>
        <button onClick={() => onIncrement(item.id)} style={{ cursor: "pointer", padding: 3 }}>+</button>
      </div>
    </div>
  );
}