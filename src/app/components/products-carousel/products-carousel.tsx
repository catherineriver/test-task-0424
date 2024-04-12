import React, { useEffect, useState } from "react";
import styles from "./products-carousel.module.css";
import {ProductType} from "@/app/types";

interface ProductCarouselProps {
    data: ProductType[]
}

export default function ProductsCarousel({ data }: ProductCarouselProps) {
    const [currentImage, setCurrentImage] = useState(0);

    const nextImage = () => {
        if (data && currentImage < data.length - 1) {
            setCurrentImage(currentImage + 1);
        }
    };

    const prevImage = () => {
        if (currentImage > 0) {
            setCurrentImage(currentImage - 1);
        }
    };

    return (
        <main className={styles.carousel}>
            <div className={styles.wrapper}>
                {currentImage > 0 && (
                    <div
                        className={`${styles.buttonContainer} ${styles.prev}`}
                        onClick={prevImage}
                    >
                        <button className={styles.button} />
                    </div>
                )}
                <div className={styles.imageWrapper}>
                    <div
                        className={styles.image}
                        style={{ backgroundImage: `url(${data[currentImage]})` }}
                    />
                </div>
                {currentImage < data.length - 1 && (
                    <div
                        className={`${styles.buttonContainer} ${styles.next}`}
                        onClick={nextImage}
                    >
                        <button className={styles.button} />
                    </div>
                )}
            </div>
        </main>
    );
}
