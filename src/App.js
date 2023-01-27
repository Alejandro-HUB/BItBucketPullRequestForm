import { useState } from 'react';
import React from "react";
import './App.css';
import FormInput from './Components/FormInput';

const App = () => {

    const usernameRef = React.useRef();

    console.log(usernameRef);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(usernameRef);
    }

    return <div className="app">
        <form onSubmit={handleSubmit}>
            <FormInput refer={usernameRef} placeholder="Username" />
            <FormInput placeholder="Email" />
            <FormInput placeholder="Full Name" />
            <FormInput placeholder="Password" />
            <button>Submit</button>
        </form>
    </div>;
};

export default App;


// const [username, setUsername] = useState(""); - Re renders component each time the state changes
{/* <FormInput placeholder="Username" setUsername={setUsername} /> used for state  */ }
