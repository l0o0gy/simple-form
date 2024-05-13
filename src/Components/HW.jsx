import { useState } from "react";
import InputFileld from './InputField'
import TextAreaFiled from "./TextAreaFiled";
function HW() {
    const[name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [message,setMessage]=useState("");
    const handleForm = (e) => {
        e.preventDefault();
        console.log('Submitting:', { name, email, message });
      };
    const alart = () => {
        alert(
          `name: ${name}
           email: ${email}
           message:${message}`
        );
    }
    return (
        <form onSubmit={handleForm} className="HW">
            <InputFileld
             label="Name"
             type ="text"
             value ={name}
             onChange={(e) => setName(e.target.value)}
             requierd
             />
            <InputFileld
             label="Email"
             type ="email"
             value ={email}
             onChange={(e) => setEmail(e.target.value)}
             requierd
             />
            <TextAreaFiled
             label="Message"
             value ={message}
             onChange={(e) => setMessage(e.target.value)}
             requierd
            />
            <button type="submit" onClick={alart}>Submit</button>
        </form>
    );
  }
  export default HW;