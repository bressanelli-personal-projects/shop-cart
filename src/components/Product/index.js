import { useDispatch } from "react-redux";
import {
    ProductContainer,
    ProductCard,
    ImageContainer,
    ButtonAddProduct,
    ButtonDelProduct,
} from "./styles";

import { BsCartPlus, BsCartX } from "react-icons/bs";
import { addToCartThunk, removeFromCartThunk } from "../../store/modules/cart/thunks";

const Product = ({ product, isRemovable = false }) => {
    const dispatch = useDispatch();

    const { id, name, price, img } = product;

    return (
        <ProductContainer>
            <ProductCard>
                <h3>{name}</h3>
                {!isRemovable && (
                    <h3>R$ {price.toFixed(2).replace(".", ",")}</h3>
                )}
                <ImageContainer>
                    <img src={img} alt="name" />
                </ImageContainer>
            </ProductCard>

            {isRemovable ? (
                <ButtonDelProduct onClick={() => dispatch(removeFromCartThunk(id))}>
                    <BsCartX />
                </ButtonDelProduct>
            ) : (
                <ButtonAddProduct onClick={() => dispatch(addToCartThunk(product))}>
                    <BsCartPlus />
                </ButtonAddProduct>
            )}
        </ProductContainer>
    );
};

export default Product;
