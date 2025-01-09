import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from "../redux/cart.slice";
import styles from "../styles/CartPage.module.css";
import { FaPlus, FaMinus, FaTrashAlt } from "react-icons/fa";

interface CartItem {
  id: string;
  product: string;
  price: number;
  quantity: number;
  image: string;
}

interface RootState {
  cart: CartItem[];
}

const CartPage: React.FC = () => {
  const cart = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  const getTotalPrice = (): number => {
    return cart.reduce(
      (accumulator, item) => accumulator + item.quantity * item.price,
      0
    );
  };

  return (
    <div className={styles.container}>
      {cart.length === 0 ? (
        <h1
          style={{ fontSize: "3rem", fontWeight: "bold", textAlign: "center" }}
        >
          Your Cart is Empty!😀
        </h1>
      ) : (
        <>
          <div className={styles.header}>
            <div>Image</div>
            <div>Product</div>
            <div>Price</div>
            <div>Quantity</div>
            <div>Actions</div>
            <div>Total Price</div>
          </div>
          {cart.map((item) => (
            <div className={styles.body} key={item.id}>
              <div className={styles.image}>
                <Image
                  src={item.image}
                  height={90}
                  width={120}
                  alt={item.product}
                />
              </div>
              <p>{item.product}</p>
              <p>$ {item.price}</p>
              <p>{item.quantity}</p>

              <div className={styles.buttons}>
                <button onClick={() => dispatch(incrementQuantity(item.id))}>
                  <FaPlus /> 
                </button>
                <button onClick={() => dispatch(decrementQuantity(item.id))}>
                  <FaMinus />
                </button>
                <br />
                <button onClick={() => dispatch(removeFromCart(item.id))}>
                  <FaTrashAlt />
                </button>
              </div>
              <p>$ {(item.quantity * item.price).toFixed(2)}</p>
            </div>
          ))}
          <h2>Grand Total: $ {getTotalPrice().toFixed(2)}</h2>
        </>
      )}
    </div>
  );
};

export default CartPage;
