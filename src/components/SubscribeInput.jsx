import { useState } from 'react'
import subscribe from '../images/subscribe.svg'
import Modal from './UI/Modal'

const SubscribeInput = () => {
    const [mail, setMail] = useState('')
    const [modal, showModal] = useState(false)
    const [mailIsExist, setMailIsExist] = useState(false)
    const submitForm = (e) => {
        e.preventDefault();
        console.log(`Mail to subscribe: ${mail}`);
        let mailData = JSON.parse(localStorage.getItem('mail')) || []
        if (mailData.find(item => item === mail)) {
            setMailIsExist(true)
        } else {
            console.log(mailData.find(item => item === mail))
            setMailIsExist(false)
            mailData.push(mail)
            localStorage.setItem('mail', JSON.stringify(mailData));
        }
        showModal(true)
        setMail('')
    }
    return (
        <>
            <form className="subscribe__form" onSubmit={submitForm}>
                <input 
                    className="subscribe__input" 
                    type="email" 
                    placeholder="Enter your email addres" 
                    value={mail}
                    onChange={(e) => setMail(e.target.value)}
                    required
                />
                <button className="subscribe__button" type="submit">
                    <img src={subscribe} alt="" />Subscribe
                </button>
            </form>
            {modal && 
                <Modal className='subscribe__modal' closeModal={() => showModal(false)}>
                    <div className="modal__title subscribe__modal-title">{mailIsExist ? 'Oops! This email address already exists!' : 'Thanks for your subscription!'}</div>
                </Modal>
            }
        </>
    )
}

export default SubscribeInput