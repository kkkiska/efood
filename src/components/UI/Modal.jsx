import crossImg from "../../images/cross.svg";
const Modal = ({children, className = '', closeModal}) => {
    return (
        <div className="modal-bg" onClick={(e) => {e.target.classList.contains('modal-bg') && closeModal()}}>
                <div className={`modal ${className}`}>
                    <button className="modal-close" onClick={closeModal}>
                        <img src={crossImg} alt="" />
                    </button>
                    {children}
                </div>
        </div>
    )
}

export default Modal;