import styled from "@emotion/styled"
import Button from "./Button"

const Divider = styled.div`
    position: relative;
    background: url('https://st.depositphotos.com/1438688/3547/i/450/depositphotos_35476539-stock-photo-codejavascript-in-text-editor.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 100vh;
    margin: auto;
    &::before {
    content: "";
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 100vh;
    background-color: rgba(27, 3, 3, 0.708);
}
`;

const Div = styled.div`
    position: relative;
    z-index: 2;
    height: ${props => props.alto};
    display: flex;
    flex-direction: ${props => props.direction};
    background:${props => props.color};
    align-items: center;
    justify-content: center;
    color: aliceblue;
    gap: 1rem;
`

const Form = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    padding: 1rem 0;
    
`

const Input = styled.input`
    border: 0;
    border-radius: 5px;
    padding: 15px 5px;    
    &::placeholder{
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        text-transform: uppercase;
        color: darkgrey;
    }
`
const ContentInput = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: start;

`

const Contacto = ({ data }) => {
    return (
        <Divider>
            <Div style={{ padding: "0 3rem" }} direction="row" color="transparent" alto="100vh">
                <div>
                    <h1>Ingresa tus datos para contactarte</h1>
                    <Form>
                        <ContentInput>
                            <label htmlFor="">Nombres</label>
                            <Input type="text" placeholder="Agrega tus Nombres" />
                        </ContentInput>
                        <ContentInput>
                            <label htmlFor="">Apellidos</label>
                            <Input type="text" placeholder="Agrega tus Apellidos" />
                        </ContentInput>
                        <ContentInput>
                            <label htmlFor="">Email</label>
                            <Input type="email" placeholder="Agrega tu EMAIL" />
                        </ContentInput>
                        <ContentInput>
                            <label htmlFor="">Celular</label>
                            <Input type="phone" placeholder="Agrega tu Numero" />
                        </ContentInput>
               
                    </Form>

                    <Button 
                    children="Enviar"
                    styleBtn="primary"
                    to="/Contact"
                    />
                </div>
            </Div>


        </Divider>
    )
}

export default Contacto
