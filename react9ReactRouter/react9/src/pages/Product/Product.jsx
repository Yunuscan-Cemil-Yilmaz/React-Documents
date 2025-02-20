import { useParams } from "react-router-dom";

const Product = () => {
    let { productId } = useParams();
    return (
        <>
            <h2>product list</h2>
            <p>product id: {productId}</p>
        </>
    )
}

export default Product;