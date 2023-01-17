import { createContext, useState } from "react";
import { useEffect } from "react";
const Context = createContext()
const {Provider, Consumer} = Context;

const ContextProvider = (props) => {

    const [data, setData] = useState([])
<<<<<<< HEAD


    for (let i = 0; i < img.length; i++) {
        img .push()
    }
=======
>>>>>>> 40fe456e66f668c8a6574e49434ac48f238ebbac

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res =>res.json())
            .then(data => setData(data))
    }, [])

    return (
<<<<<<< HEAD
        <Provider value={data}>
=======
        <Provider value={{data}}>
>>>>>>> 40fe456e66f668c8a6574e49434ac48f238ebbac
            {props.children}
        </Provider>
    );
}
 
export {ContextProvider, Context};