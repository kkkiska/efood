import { useState } from 'react'
import subscribe from '../images/subscribe.svg'

const SubscribeInput = () => {
    const [mail, setMail] = useState('')

    const submitForm = (e) => {
        e.preventDefault();
        console.log(`Mail to subscribe: ${mail}`);
    }
    return (
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
    )
}

export default SubscribeInput