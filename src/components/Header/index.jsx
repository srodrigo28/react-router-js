import { Container } from "./style";
import { Link } from "react-router-dom"
import { FaHome, FaSignInAlt, FaUserAlt } from "react-icons/fa"
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

export function Header(){
    const notify = () => toast("Hello Beautiful");

    function handleClick(e){
        e.preventDefault()

        // alert('Saindo do sistema ....')
        notify();
    }
    return(
        <Container>
            <Link to="/" >
                <FaHome size={30} />
            </Link>
            <Link to="/login">
                <FaUserAlt size={30}/> 
            </Link>
            <Link to="/register">
                <FaSignInAlt size={30}/>
            </Link>
            <button onClick={handleClick}>Entrar</button>
            <ToastContainer />
        </Container>
    )
}