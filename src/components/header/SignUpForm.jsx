import { useState } from "react"
import Button from "../UI/Button"

const SignUpForm = () => {
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');

    const submitForm = () => {
        console.log(`login: ${mail}, password: ${password}`)
    }
    return (
        <form className="modal__form" onSubmit={submitForm}>
            <input 
                className="modal__input" 
                type="email" 
                placeholder="Your email addres" 
                value={mail} 
                onChange={(e) => setMail(e.target.value)} 
                required
            />
            <input 
                className="modal__input" 
                type="password" 
                placeholder="Password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            <Button className="modal__button">Sign in</Button>
        </form>
    )
}

export default SignUpForm