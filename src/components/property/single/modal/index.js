import React from 'react'
import Modal from 'react-modal'

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)'
    }
};

Modal.setAppElement('#___gatsby')

export default ({
    isOpen,
    title,
    handleClose,
    unit
}) => {
    return (
        <Modal
            isOpen={isOpen}
            style={customStyles}
            contentLabel={title}
            onRequestClose={handleClose}
            shouldCloseOnOverlayClick={true}
        >
            {unit.unit_name}
        </Modal>
    )
}
