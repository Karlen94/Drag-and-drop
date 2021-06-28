import React, { useState } from "react";
import TypesModal from "../Modal/TypesModal";
import { Button } from "react-bootstrap";
import styles from "./main.module.css";

const Main = () => {
  const [boards, setBoards] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  const toggleModal = () => {
    setOpenModal({
      openModal: !openModal,
    });
  };

  const addProprties = () => {
    setOpenModal({
      openModal: !openModal,
    });
  };

  return (
    <div className={styles.container}>
      <div>
        <Button onClick={toggleModal} />
      </div>
      {boards.map(() => {
        <div className={styles.board}></div>;
      })}

      {openModal && (
        <TypesModal addProprties={addProprties} onClose={toggleModal} />
      )}
    </div>
  );
};

export default Main;
