import { Container } from "./style";
import { useState } from "react"
/** Use state treinando...
 * https://www.youtube.com/watch?v=keEUn64Ceig&t=227s 
 */
export function Login(){
    const [usuario, setusuario] = useState();
    const [senha, setSenha] = useState();

    function handleLogin(e){
        e.preventDefault()

        console.log("Estou logando ... aguarde ...")
        console.log(" Usuário: " + usuario + "\n Senha: " + senha) ;

        if( usuario === "admin" & senha === "123"){
            console.log("Usuário: Administrador")
        }else{
            console.log("Usuário: não encontrado :(")
        }
    }
    return(
        <Container>
            <h1>Login</h1>
            <form onSubmit={handleLogin} className="form">
                <div className="input-group">
                    <label>Usuario</label>
                    <input 
                        type="text"
                        placeholder="usuário cadastrado"
                        onChange={ (e) => setusuario(e.target.value) }
                    />
                </div>
                <div className="input-group">
                    <label>Senha</label>
                    <input 
                        type="password"
                        placeholder="*****************"
                        onChange={ (e) => setSenha(e.target.value) }    
                    />
                </div>
                <div className="input-group">
                    <button>Entrar</button>
                </div>

            </form>
        </Container>
    )
}