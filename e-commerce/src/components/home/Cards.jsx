import { useContext } from "react";
import { Context } from "../../context/MainContext";

const Cards = () => {

    const {data} = useContext(Context)

    const cards = data.map((product) => {
        return (
            <div className="card" id={product.id}>
                <img src={product.image} className="card-img-top w-25" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title product-title">{product.title}</h5>
                    {/* <p className="card-text product-description">{product.description}</p> */}
                    <p className="card-price product-price">$   {product.price}</p>
                    <p className="product-category">{product.category}</p>
                </div>
            </div>   
        )
    })  
    
    return ( 
        <div className="cards">
            {cards}
        </div>
     );
}
 
export default Cards;