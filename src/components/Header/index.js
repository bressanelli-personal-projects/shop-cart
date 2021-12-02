import { Link } from "react-router-dom";
import { HeaderBody, MainTitle, CartContentQty } from "./styles";
import { BsCartCheck } from "react-icons/bs";
import { AiOutlineHome } from "react-icons/ai";
import { useSelector } from "react-redux";

const Header = () => {
    const cart = useSelector((store) => store.cart);

    return (
        <HeaderBody>
            <nav>
                <ul>
                    <li>
                        <Link to="/">
                            <AiOutlineHome /> home
                        </Link>
                    </li>

                    <li>
                        <Link to="/cart">
                            <BsCartCheck /> carrinho
                        </Link>
                    </li>
                </ul>
            </nav>
            {cart.length > 0 && <CartContentQty>{cart.length}</CartContentQty>}
            <MainTitle>Car Shop</MainTitle>
        </HeaderBody>
    );
};

export default Header;
