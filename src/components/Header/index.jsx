import { Container } from "./style";
import { Link } from "react-router-dom"
import { FaHome, FaSignInAlt, FaUserAlt } from "react-icons/fa"

export function Header(){
    return(
        <Container>
            <Link to="/" >
                <FaHome size={30} />
            </Link>
            <Link to="/login" >
                <FaUserAlt size={30}/> 
            </Link>
            <Link to="/register" >
                <FaSignInAlt size={30}/>
            </Link>
        </Container>
    )
}