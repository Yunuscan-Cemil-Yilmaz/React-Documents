import { NavLink } from "react-router-dom";

const ProductList = () => {
    let productId1 = 12;
    let productId2 = 23;
    let productId3 = 43;
    let productId4 = 11;
    let productId5 = 29;

    return (
        <>
            <h2>product page</h2>
            <ul>
                <li>
                    <NavLink to={`/product/${productId1}`}>Product</NavLink>
                </li>
                <li>
                    <NavLink to={`/product/${productId2}`}>Product</NavLink>
                </li>
                <li>
                    <NavLink to={`/product/${productId3}`}>Product</NavLink>
                </li>
                <li>
                    <NavLink to={`/product/${productId4}`}>Product</NavLink>
                </li>
                <li>
                    <NavLink to={`/product/${productId5}`}>Product</NavLink>
                </li>
            </ul>
        </>
    )
}

export default ProductList;