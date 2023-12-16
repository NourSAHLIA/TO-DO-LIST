import { useNavigate } from "react-router-dom";

export default function Contact(){
    const navigator=useNavigate()
    function backToHome(){
        navigator('/')
    }
    return <div><p>thanks for contacting us</p>
    <button onClick={backToHome}>home</button></div>;
};