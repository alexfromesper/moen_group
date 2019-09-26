import React from 'react'
import Modal from 'react-modal'

// Components
import Header from './header'
import Body from './body'

const customStyles = {
    content: {
      top: '7rem',
      left: '0',
      right: '0',
      bottom: 'auto',
      margin: '0 auto',
      transform: '',
      border: 'none',
      width: 'calc(100% - 1.5rem)',
      maxWidth: '25rem',
      overflow: 'hidden',
      padding: '0',
      borderRadius: '0.25rem'
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.35)'
    }
};

Modal.setAppElement('#___gatsby')

export default ({
    isOpen,
    title,
    handleClose,
    unit
}) => {
    const features = [
        { Bedroom: unit.unit_bedroom },
        { Bathroom: unit.unit_bathroom },
        { Cooling: unit.unit_cooling },
        { Heating: unit.unit_heating },
        { Laundry: unit.unit_laundry },
        { Parking: unit.unit_parking },
        { Pets: unit.unit_pets }
    ]
    return (
        <Modal
            isOpen={isOpen}
            style={customStyles}
            contentLabel={title}
            onRequestClose={handleClose}
            shouldCloseOnOverlayClick={true}
        >
            <Header
                title={unit.unit_name}
            />
            <Body
                features={features}
                amenities={unit.unit_amenities}
                floorPlans={unit.floor_plans ? unit.floor_plans : false}
            />
        </Modal>
    )
}
