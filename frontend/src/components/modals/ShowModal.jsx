import React from "react";
import Modal from "react-modal";
import '../styling/Modal.css'

Modal.setAppElement("#root");

const Options = (props) => {
  const {
    isModalOpen,
    handleShowModal,
    handleSelected,
    optionsList,
  } = props;

  

  return (
    <div >
      <Modal
        isOpen={isModalOpen}
        onRequestClose={handleShowModal}
        contentLabel="select option"

        className="modal-content"
        overLayClassName="modal-overlay"
      >
        <ul>
          <div className="heading-modal" style={{padding:'1rem'}}>
            <h2 style={{textAlign:'center',marginBottom:'.5rem'}} className="heading-modal">Select Option</h2>
          </div>
          {optionsList.map((item) => {
            return <li key={item} onClick={()=>{handleSelected(item); handleShowModal()}} className="list-item-modal">{item}</li>;
          })}
        </ul>
      </Modal>
    </div>
  );
};

export default Options;
