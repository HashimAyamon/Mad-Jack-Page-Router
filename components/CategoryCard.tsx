import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/CategoryCard.module.css';

interface CategoryCardProps {
  image: string;
  name: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ image, name }) => {
  return (
    <div className={styles.card}>
      <Image 
        className={styles.image} 
        src={image} 
        height={500} 
        width={500} 
        alt={`${name} category image`} 
      />
      <Link href={`/category/${name.toLowerCase()}`}>
        <div className={styles.info}>
          <h3>{name}</h3>
          <p>SHOP NOW</p>
        </div>
      </Link>
    </div>
  );
};

export default CategoryCard;
