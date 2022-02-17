import styles from './Product.module.css';
import {useState} from "react";
import {Link} from "react-router-dom";


export default function Product(props){
    const [favorite, setFavorite] = useState(false)

    const handleAddToFavorites = () => {
        setFavorite(!favorite);
    }

    return(
        <div className={styles.productContainer}>
            <h3>Product: {props.name}</h3>
            <p>Description: {props.description}</p>
            {
                favorite ? (<button onClick={handleAddToFavorites}>I like this</button>)
                        : (<button onClick={handleAddToFavorites}>Don't like it</button>)
            }
            <Link to="/cart">Buy</Link>
        </div>
    )
}