import { useSelector } from "react-redux";
import Header from "../../components/Header";
import Product from "../../components/Product";
import {
    CartCard,
    CartTotalCost,
    MainContainer,
    TotalPriceTitle,
    TotalPrice,
    TotalProductList,
} from "./styles";

const Cart = () => {
    const cart = useSelector((store) => store.cart);    

    const totalCost = cart?.reduce((total, product) => {
        return Number(total) + Number(product.price);
    }, 0);

    return (
        <>
            <Header />

            <MainContainer>
                <CartTotalCost>
                    <TotalPriceTitle>TOTAL: </TotalPriceTitle>
                    <TotalPrice>
                        R${totalCost.toFixed(2).replace(".", ",")}
                    </TotalPrice>
                    
                    {cart.map((product) => (
                        <TotalProductList key={product.id}>
                            <p>{product.name}</p>
                            <p>
                                R$ {product.price.toFixed(2).replace(".", ",")}
                            </p>
                        </TotalProductList>                        
                    ))}
                </CartTotalCost>

                {
                    <CartCard showShadow={cart[0]}>
                        {cart.map((product) => (
                            <Product
                                key={product.id}
                                product={product}
                                isRemovable
                            />
                        ))}
                    </CartCard>
                }
            </MainContainer>
        </>
    );
};

export default Cart;
