import { Container } from "./style";

export function Login(){
    function handleLogin(e){
        e.preventDefault()
        
        console.log("Estou logando ... aguarde ...")
    }
    return(
        <Container>
            <h1>Login</h1>

            <form onSubmit={handleLogin}>
                <div className="group-input">
                    <label htmlFor="usuario">Usuario</label>
                    <input type="text" id="usuario" />
                </div>
                <div className="group-input">
                <label htmlFor="senha">Senha</label>
                    <input type="password" id="senha" />
                </div>
                <div className="group-input">
                    <button>Entrar</button>
                </div>

            </form>
        </Container>
    )
}