import { createContext, useState } from "react";
import { useEffect } from "react";
const Context = createContext();
const { Provider } = Context;

const ContextProvider = (props) => {
  const [data, setData] = useState([]);

  function getProducts(path = "products") {
    useEffect(() => {
      fetch(`https://fakestoreapi.com/${path}`)
        .then((res) => res.json())
        .then((data) => setData(data));
    }, []);
  }

  return <Provider value={{ data, getProducts }}>{props.children}</Provider>;
};

export { ContextProvider, Context };
