import React from 'react'
import './style.css'

function Form(props){
    
    return (
        <>
        <form className="grid-container"> 
            <div className="grid-x grid-padding-x"> 
                <div className="cell small-6 mb-3">
                    <input type="text" id="firstName" name="firstName" placeholder="First name" value={props.formObject.firstName} onChange={props.handleInputChange}/>
                </div>
                <div className="cell small-6 mb-3">
                    <input type="text" name='lastName' id="lastName" placeholder="Last name" value={props.formObject.lastName} onChange={props.handleInputChange}/>
                </div>
            </div> 

            <div className="form-group"> 
                <input type="text" name="email" id="contactEmail" placeholder="example@email.com" required value={props.formObject.email} onChange={props.handleInputChange}/>
            </div>
            
            <div className="form-group"> 
                <textarea id="contactTextInput" name='message' placeholder="Write me something ...." value={props.formObject.message} onChange={props.handleInputChange}></textarea>
            </div>
            
            <button type="submit" className="button expanded" onClick={props.handleFormSubmit}>Send</button>

            
        </form>
        </>
    )
}

export default Form;