import React from "react";
import styles from './button.module.css'
import {ButtonType} from "@/app/types";
import useFormatPrice from "@/app/hooks/useFormatPrice";

interface ButtonProps {
    onClick?: () => void;
    data: ButtonType
}

export const Button: React.FC<ButtonProps> = ({
    onClick,
    data
}) => {
    const {id, product_id, custom_text, price, color} = data;
    const { formatPrice } = useFormatPrice();
    const DEFAULT_TEXT = 'Buy now';
    return (
        <button
            className={styles.button}
            style={{backgroundColor: color}}
            onClick={onClick}
        >
            <span className={styles.buttonTitle}>{custom_text ? custom_text : DEFAULT_TEXT}</span>
            {price && <span className={styles.buttonPrice}>{formatPrice(price)}</span>}

            <style jsx>{`
                .${styles.buttonTitle} {
                    background-color: ${color};
                    box-shadow: inset 0 0 0 2px ${color};
                }
                .${styles.buttonPrice} {
                    background-color: #fff;
                    box-shadow: inset 0 0 0 2px ${color};
                    color: ${color};
                }
            `}</style>
        </button>
    );
};
