import React, { useState } from "react";

const Forms = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [address, setAddress] = useState('');
    const [programming, setProgramming] = useState('');


    const onSubmit = (event) => {
        event.preventDefault();
        setName(event.target[0].value);
        setEmail(event.target[1].value);
        setPassword(event.target[2].value);
        setAddress(event.target[3].value);
        setProgramming(event.target[4].value);
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type="text" placeholder="Name" /><br />
                <input type="email" placeholder="Email" /><br />
                <input type="password" placeholder="Password" /><br />
                <input type="text" placeholder="Address" /><br />
                <select name="programming" defaultValue="Select Programming Language" >
                    <option value="Select Programming Language" disabled>Select Programming Language</option>
                    <option value="C++">C++</option>
                    <option value="Java">Java</option>
                    <option value="Python">Python</option>
                    <option value="JavaScript">JavaScript</option>
                </select>
                <button type="submit">Submit</button>
            </form>
            <p>
                Name: {name} <br />
                Email: {email} <br />
                Password: {password} <br />
                Address: {address} <br />
                Programming Language: {programming} <br />
                <br />
            </p>
        </div>
    )
}

export default Forms;