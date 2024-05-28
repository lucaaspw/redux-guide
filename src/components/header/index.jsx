import { useMemo, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { userLogin, userLogOut } from "../../redux/user/actions"
// Components
import Cart from "../cart/index";

// Styles
import * as Styles from "./styles";

function Header() {
  const [cartIsVisible, setCartIsVisible] = useState(false);

  const { currentUser } = useSelector(rootReducer => rootReducer.userReducer);
  const { products } = useSelector(rootReducer => rootReducer.cartReducer);
  const dispatch = useDispatch();


  const handleCartClick = () => {
    setCartIsVisible(true);
  };

  const productsCount = useMemo(() => {
    return products.reduce((acc, curr) => acc + curr.quantity, 0)
  }, [products])

  const handleLoginClick = () => {
    dispatch(userLogin({ name: "Lucas", email: "lucas@gon.com" }))
  }

  const handleLogOutClick = () => {
    dispatch(userLogOut())
  }

  return (
    <Styles.Container>
      <div className="contentHeader">
        <Styles.Logo>Redux Shopping</Styles.Logo>
        <Styles.Buttons>
          {
            currentUser ? (
              <div onClick={handleLogOutClick}>{currentUser.name}</div>
            ) :
              (<div onClick={handleLoginClick}>Login</div>)
          }
          <div className="countCartContainer" onClick={handleCartClick}>
            Carrinho ({productsCount}) 
          </div>
        </Styles.Buttons>

        <Cart isVisible={cartIsVisible} setIsVisible={setCartIsVisible} />
      </div>

    </Styles.Container>
  );
}

export default Header;
