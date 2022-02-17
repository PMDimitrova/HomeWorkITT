import Product from "./Product";
import {useEffect, useState} from "react";
import styles from "./ProductsPage.module.css";

export default function ProductsPage(props){

    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts([{name : "BWM", description : "old baraka"},
            {name : "Mercedes", description : "new baraka"},
            {name : "Opel", description : "the lightning"},
            {name : "VW", description : "prehistoric baraka"}])
    }, []);

    return(
        <>
            <h3>Products page</h3>
            <div className={styles.productsContainer}>
                {
                    products.map(prod => (
                        <Product name={prod.name} description={prod.description}/>
                    ))
                }
            </div>


        </>
    )
}