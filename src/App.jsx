// import { useState } from "react";
// import WidgetQuote from "./widgets/widget-quote/WidgetQuote";
// import WidgetPooltime from "./widgets/widget-pooltime/WidgetPooltime";
// import WidgetSmartdesk from "./widgets/widget-smartdesk/WidgetSmartdesk";
// import WidgetMenu from "./widgets/widget-menu/WidgetMenu";
// import WidgetBadday from "./widgets/widget-badday/WidgetBadday";
// import WidgetLogin from "./widgets/widget-login/WidgetLogin";

// import homeIcon from "./assets/icons/home-3.svg";

// import classes from "./App.module.css";

// function Layout(props) {
//   return (
//     <>
//       <button
//         className={classes.button}
//         type="button"
//         onClick={() => props.setPage("menu")}
//       >
//         <img src={homeIcon} alt="home" className={classes.button__icon} />
//       </button>
//       {props.children}
//     </>
//   );
// }

// export default function App() {
//   const [user, setUser] = useState(null);
//   const [page, setPage] = useState(!user ? "login" : "menu");

//   const publicPages = {
//     login: <WidgetLogin />,
//     menu: <WidgetMenu setPage={setPage} />,
//   };

//   const protectedPages = {
//     quote: <WidgetQuote />,
//     pooltime: <WidgetPooltime />,
//     smartdesk: <WidgetSmartdesk />,
//     badday: <WidgetBadday />,
//   };

//   if (page in publicPages) {
//     return publicPages[page];
//   }

//   return <Layout setPage={setPage}>{protectedPages[page]}</Layout>;
// }
import classes from './ProductItem.module.css'
import React, { useState } from "react";
import ProductItem from "./ProductItem";

const initialData = [ 
  {id: 1, name: 'Велосипед', price: 1000, count: 1}, 
  {id: 2, name: 'Самокат', price: 700, count: 1}, 
  {id: 3, name: 'Ролики', price: 1300, count: 2}, 
  {id: 4, name: 'Сноуборд', price: 19000, count: 4}
];

export default function App() {
  const [products, setProducts] = useState(initialData);

  const addProduct = () => {
    const names = ["Велосипед", "Самокат", "Ролики", "Сноуборд", "Коньки"];
    const newProduct = {
      id: Date.now(),
      name: names[Math.floor(Math.random() * names.length)],
      price: Math.floor(Math.random() * 20000) + 500,
      count: Math.floor(Math.random() * 5) + 1
    };
    setProducts([...products, newProduct]);
  };

  const increment = (id) => {
    setProducts(products.map(p =>
      p.id === id && p.count < 25 ? {...p, count: p.count + 1} : p
    ));
  };

  const decrement = (id) => {
    setProducts(products.map(p =>
      p.id === id ? {...p, count: p.count - 1} : p
    ).filter(p => p.count > 0));
  };

  const remove = (id) => {
    setProducts(products.filter(p => p.id !== id));
  };

  return (
    <div style={{ padding: "20px" }}>
      <button onClick={addProduct} style={{ cursor: "pointer" }} 
        // className='classes.mob2'
        >Добавить новый товар</button>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {products.map(item => (
          <ProductItem 
            key={item.id} 
            item={item} 
            onIncrement={increment} 
            onDecrement={decrement} 
            onRemove={remove} 
          />
        ))}
      </div>
    </div>
  );
}
