import { createContext, useState } from "react";
import { useEffect } from "react";
const Context = createContext()
const {Provider, Consumer} = Context;

const ContextProvider = (props) => {

    const [data, setData] = useState([])
    for (let i = 0; i < img.length; i++) {
        imgs.push()
    }

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/categories')
            .then(res =>res.json())
            .then(data => setData(data))
    }, [])

    return (
        <Provider value={''}>
            {props.children}
        </Provider>
    );
}
 
export {ContextProvider, Consumer};