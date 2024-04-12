import React, {useRef, useState} from "react";
import styles from './modal.module.css'
import {ProductType} from "@/app/types";
import {ProductCard} from "@/app/components/product-card/product-card";


interface ModalProps {
    data?: ProductType
    closeModal: () => void
    errorMessage?: string
}

export const Modal: React.FC<ModalProps> = ({
    data,
    closeModal,
    errorMessage
}) => {
    const stopPropagation = (e: React.MouseEvent) => {
        e.stopPropagation();
    }

    return (
        <div className={styles.backdrop} onClick={closeModal}>
            <div className={styles.modal} onClick={stopPropagation}>
                <button className={styles.close} onClick={closeModal}></button>
                {!errorMessage && data ? <ProductCard data={data} /> : <p>{errorMessage}</p>}
            </div>
        </div>
    );
};
