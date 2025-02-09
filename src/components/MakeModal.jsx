import Modal from "./UI/Modal"

const MakeModal = ({modalState}) => {
    const [modal, openModal] = modalState

    return (
        <>
        {modal && 
            <Modal closeModal={() => {openModal('')}} className="modal__notification">
                <div className="modal__title">Please! Log in to access this feature</div>
            </Modal>
        }
        </>
    )
}

export default MakeModal