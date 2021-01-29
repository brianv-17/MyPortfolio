import React, { useState } from 'react'
import axios from 'axios';
export default () => {
    //keep track of what is being typed via useState hook
    const [firstName, setFirstName] = useState(""); 
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [organization, setOrganization] = useState("");
    const [message, setMessage] = useState("");
    const [errors, setErrors] = useState([]); 

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/contact', {
            firstName,
            lastName,
            email,
            organization,
            message
        })
            .then(res=>console.log(res))
            .catch(err=>{
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
            })
    }
    //onChange to update firstName and lastName
    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <div style={{ color: "darkred" }}>
                {errors.map((err, index) => <p key={index}>{err}</p>)}
                </div>
                <p>
                    <label>First Name</label><br/>
                    <input type="text" onChange = {(e)=>setFirstName(e.target.value)}/>
                </p>
                <p>
                    <label>Last Name</label><br/>
                    <input type="text" onChange = {(e)=>setLastName(e.target.value)}/>
                </p>
                <p>
                    <label>Email</label><br/>
                    <input type="email" onChange = {(e)=>setEmail(e.target.value)}/>
                </p>
                <p>
                    <label>Organization</label><br/>
                    <input type="text" onChange = {(e)=>setOrganization(e.target.value)}/>
                </p>
                <p>
                    <label>Message</label><br/>
                    <input type="text" onChange = {(e)=>setMessage(e.target.value)}/>
                </p>
                <input type="submit"/>
            </form>
        </div>
    )
}