'use client';
import styles from "../page.module.css";
import React from "react";
import {useRouter} from "next/navigation";

export default function Page() {
    const router = useRouter();

    const continueShopping = () => {
        const newPath = `/`
        window.history.replaceState(null, '', newPath)
        router.push('/')
    };
    return (
        <main className={styles.main}>
            <div className={styles.container}>
                <div className={styles.title}>
                    <span>✅</span>
                    Success!
                </div>
                <div className={styles.message}>
                    Product has been added to your cart
                </div>

                <button className={styles.button} onClick={continueShopping}>
                    Continue Shopping
                </button>
            </div>
        </main>
    );
}

