import React, {useState} from 'react'
import Form from '../components/Form'

function Contact() {
    const [formObject, setformObject] = useState({
        firstName:'',
        lastName:'',
        email:'',
        message:''
    })
    const handleInputChange = (e) => {
        setformObject({...formObject, [e.target.name]:e.target.value})
        
    }
    const handleFormSubmit = (e) => {
        e.preventDefault();

        setformObject({
            firstName:'',
            lastName:'',
            email:'',
            message:''
        })
    }
    return (
        <>
        <main className="grid-container">
        <div className="grid-x">
            <div className="cell">
                <h2 className="mb-5">Reach out</h2>
            </div>
            <div className="cell">
                <p className="mb-5">I look forward to hearing from you!</p>
            </div>
        </div>
        <Form handleInputChange ={handleInputChange} handleFormSubmit={handleFormSubmit} formObject={formObject}/>
    </main>
        </>
    )
}

export default Contact;