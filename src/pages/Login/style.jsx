import styled from "styled-components";

export const Container = styled.div`
        height: 100vh;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;

        > form{
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;

            background: #fff;

            .input-group{
                padding: 20px;
            }

            input{
                padding: 10px;
                background-color: red;
                color: #fff;
                font-weight: 500;
                font-size: 1.2em;
                border-radius: 7px;
                border:none;
                outline: none;
            }
            input::placeholder{
                color: #fff;
            }
            input[type="text"]{
                width: 100%;
                height: 52px;
                box-sizing: border-box;
            }
            input[type="password"]{
                width: 100%;
                padding-top: 20px;
                text-align: center;
            }
            button{
                width: 250px;
                border: none;
                height: 52px;
                color: #fff;
                border-radius: 7px;
                background: darkviolet;
                cursor: pointer;
                transition: .5;
            }
            button:hover {
                opacity: .9;
            }
        }
`;