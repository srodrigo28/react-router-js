import { Container } from "./style"
import { useContext } from "react"
import { ThemeContext } from "./../../services/ThemeContext"

export function Home(){
    const { theme, toggleTheme } = useContext(ThemeContext);

    return(
        <Container className="home-class">
            <h1>Home</h1>
            <p> o tema atual é:  {theme} </p>
            <button onClick={toggleTheme}>Tema</button>
        </Container>
    )
}