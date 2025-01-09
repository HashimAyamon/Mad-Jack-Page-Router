import Link from "next/link";
import Image from "next/image"; 
import { useSelector } from "react-redux";
import styles from "../styles/Navbar.module.css";
import { FaShoppingCart } from "react-icons/fa";
import BackButton from "./BackButton";

interface CartItem {
  id: string;
  quantity: number;
}

interface RootState {
  cart: CartItem[];
}

const Navbar: React.FC = () => {
  const cart = useSelector((state: RootState) => state.cart);

  const getItemsCount = (): number => {
    return cart.reduce((accumulator, item) => accumulator + item.quantity, 0);
  };

  return (
    <nav className={styles.navbar}>
  
      <div className={styles.logo}>
        <Image
          src="/logo.webp"
          alt="Logo"
          width={99} 
          height={50} 
          style={{ borderRadius: "8px" }}
        />
      </div>

      <ul className={styles.links}>
        <li className={styles.navlink}>
          <Link href="/">Home</Link>
        </li>
        <li className={styles.navlink}>
          <Link href="/shop">Shop</Link>
        </li>
        <li className={styles.navlink}>
          <Link href="/about-us">About Us</Link>
        </li>
        <li className={styles.navlink}>
          <Link href="/contact-us">Contact Us</Link>
        </li>
        <li>
          <BackButton />
        </li>
        <li className={styles.navlink}>
          <Link href="/cart">
            <FaShoppingCart style={{ fontSize: "24px", marginRight: "8px" }} />(
            {getItemsCount()})
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
