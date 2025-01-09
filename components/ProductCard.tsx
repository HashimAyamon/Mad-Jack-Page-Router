import Image from "next/image";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cart.slice";
import styles from "../styles/ProductCard.module.css";

interface Product {
  id: string;
  product: string;
  category: string;
  price: number;
  image: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className={styles.card}>
      <Image
        src={product.image}
        height={300}
        width={220}
        alt={`${product.product} image`}
      />
      <h4 className={styles.title}>{product.product}</h4>
      <h5 className={styles.category}>{product.category}</h5>
      <p>$ {product.price}</p>
      <button
        onClick={() => dispatch(addToCart(product))}
        style={{
          background: "linear-gradient(135deg, #00c6ff, #0072ff)",
          color: "white",
          border: "none",
          padding: "10px 20px",
          borderRadius: "5px",
          cursor: "pointer",
          transition: "background 0.3s ease",
        }}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
