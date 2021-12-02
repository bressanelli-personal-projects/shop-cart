import { useSelector } from "react-redux";
import Header from "../../components/Header";
import Product from "../../components/Product";
import { ProductCardContainer } from "./styles";

const Home = () => {
    const products = useSelector((store) => store.products);

    return (
        <>
            <Header />

            <ProductCardContainer>
                {products.map((product) => (
                    <Product key={product.id} product={product} />
                ))}
            </ProductCardContainer>
        </>
    );
};

export default Home;
