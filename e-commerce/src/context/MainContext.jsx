import { createContext, useState } from "react";
import { useEffect } from "react";
const Context = createContext();
const { Provider } = Context;

const ContextProvider = (props) => {

  const [data, setData] = useState([]);

  function getProducts(path = 'products') {
    useEffect(() => {
      fetch(`https://fakestoreapi.com/${path}`)
      
        .then((res) => res.json())
        .then((data) => setData(data))
    }, []);
  }

  function getActiveItem(itemsArray) {
    itemsArray.forEach((child) => {
      child.addEventListener( "click" , (e) => {
        itemsArray.forEach((child) => {
          child.classList.remove("active");
        });
        e.currentTarget.classList.add("active");
      });
    });
  }

  return (
    <Provider value={{ data, getActiveItem, getProducts}}>
      {props.children}
    </Provider>
  );
};

export { ContextProvider, Context };
