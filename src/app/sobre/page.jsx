import React, { useState } from 'react';
import ModalInserir from "./modal"


    function exemplo(){
        useClient();
        const [estado, setEstado] = useState(valorInicial)
    }

const Modal = ({ isOpen, closeModal }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <span onClick={closeModal} className="close-button">X</span>
        <h2>Modal Content</h2>
        <p>This is the content of the modal.</p>
      </div>
    </div>
  );
};

export default function SobrePage(){
    {open ? <ModalInserir open={open} setOpen={setOpen}/> : ""}

    <Link onClick={()=> setOpen(true)}>Cadastro de Produtos</Link>
};
