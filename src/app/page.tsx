'use client';
import styles from "./page.module.css";
import React, {useEffect, useRef, useState} from "react";
import { Modal } from "@/app/components/modal/modal";
import { ButtonType, ProductType } from "@/app/types";
import { Button } from '@/app/components/button/button'
import { CSSTransition, TransitionGroup } from 'react-transition-group';

export default function Home() {
    const [buttons, setButtons] = useState<ButtonType[]>([]);
    const [modalData, setModalData] = useState<ProductType>();
    const [errorMessage, setErrorMessage] = useState<string>();
    const [showModal, setShowModal] = useState(false)
    const nodeRef = useRef(null);

    useEffect(() => {
        fetch('https://63fcc095677c415873130587.mockapi.io/api/v1/button')
            .then((res) => { return res.json()})
            .then((data) => { setButtons(data) })
            .catch((error) => console.error('Error:', error));
    }, []);

    async function handleOpenModal(productId: number) {
        try {
            const response = await fetch('https://63fcc095677c415873130587.mockapi.io/api/v1/product/' + productId);
            if (!response.ok) {
                setErrorMessage('Data not loaded')
            }
            setShowModal(true);
            const data = await response.json();
            setModalData(data);
        } catch (error) {
            console.error('An error occurred:', error);
        }
    }

    const closeModal = () => {
        setShowModal(false);
    }

  return (
    <main className={styles.main}>
        <div className={styles.container}>
            <div className={styles.buttonsRow}>
              {buttons.map((item) => {
                  return (
                      <Button
                          key={item.id}
                          onClick={() => handleOpenModal(item.product_id)}
                          data={item}
                      />
                  )
              })}
            </div>
        </div>
        <CSSTransition
            timeout={{ enter: 200, exit: 200 }}
            unmountOnExit
            nodeRef={nodeRef}
            in={showModal}
            classNames={{
                enter: styles.modalEnter,
                enterActive: styles.modalEnterActive,
                exit: styles.modalExit,
                exitActive: styles.modalExitActive,
            }}>
            <div ref={nodeRef}>
                <Modal
                    errorMessage={errorMessage}
                    data={modalData}
                    closeModal={closeModal} />
            </div>
        </CSSTransition>
    </main>
  );
}

