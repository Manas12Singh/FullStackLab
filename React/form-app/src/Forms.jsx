import React, { useState } from "react";

const Forms=() => {
    const [firstname, setName] = useState('');
    const [firstnameonsubmit,setFullName]=useState('');
    const [lastname,setLastName]=useState('');

    const inputEvent=(event)=>{
        setName(event.target.value);
    }
    const onSubmit=(event)=>{
        event.preventDefault();
        setFullName(firstname);
    }
    const inputEventSecond=(event)=>{
        setLastName(event.target.value);
    }
    return(
        <form onSubmit={onSubmit}>
            <div>
                <h1>Hello {firstname} {lastname}</h1>
                <input type="text" placeholder="Enter your first name" onChange={inputEvent} value={firstname} />
                <input type="text" placeholder="Enter your last name" onChange={inputEventSecond} value={lastname} />
                <button type="submit">Submit</button>
            </div>
        </form>
    )
}

export default Forms;