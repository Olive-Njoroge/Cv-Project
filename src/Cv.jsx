import React, {useState} from 'react'
function Cv(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");

    const addName = (e) => {
        setName(e.target.value)
    }

    const addEmail = (e) => {
        setEmail(e.target.value)
    }

    const addPhoneNumber = (e) => {
        setNumber(e.target.value)
    }

    return(
        <>
        <div>
            <input type='text' value={name} onChange={addName}/>
            <p>Name: {name}</p>
            <input type="email" value={email} onChange={addEmail}/>
            <p>Email: {email}</p>
            <input value={number} onChange={addPhoneNumber}/>
            <p>Phone Number: {number}</p>
        </div>
        </>
    )

}
export default Cv