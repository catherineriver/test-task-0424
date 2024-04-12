import React from "react";
import ProductsCarousel from "@/app/components/products-carousel/products-carousel";
import useFormatPrice from "@/app/hooks/useFormatPrice";
import styles from './products-card.module.css'
import {ProductType} from "@/app/types";
import Link from "next/link";

interface ProductCardProps {
    data: ProductType
}

export const ProductCard: React.FC<ProductCardProps> = ({
    data,
}) => {
    const { name, price, original_price, url} = data;
    const { formatPrice } = useFormatPrice();

    return (
        <div className={styles.card}>
            <ProductsCarousel data={data.images}/>
            <div className={styles.main}>
                <h2 className={styles.name}>{name}</h2>
            </div>

            <div className={styles.footer}>
                <div className={styles.priceBlock}>
                    <p className={styles.originalPrice}>{formatPrice(original_price)}</p>
                    <p className={styles.price}>{formatPrice(price)}</p>
                </div>

                <Link href={'/success-page'} className={styles.link}>Buy now</Link>
            </div>

        </div>
    );
};
