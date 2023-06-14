import styled from "@emotion/styled";
import Logo from '../../public/favicon.ico'

const ContentFooter = styled.footer`    
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    background-color: rgb(27, 14, 14);
    color: white;
    height: 30vh;
    align-items: center;
    justify-content: center;
    & ::before{
        content: "";
        width: 100%;
    }
`
const Content = styled.div`
    display: flex;
    text-align: center;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.2rem;
    padding: 1rem 0;
    width: 100%;
`
const Div = styled.div`
    width: 100%;
    font-size: 0%.7rem;

`
const ImgLogo = styled.img`
    width: 8%;
`
const TitleLeg = styled.h4`
    font-size: 0.8rem;
    font-weight: 900;
`

const Footer = () => {
    return (
        <ContentFooter>
            <Content>
                <Div>
                    <ImgLogo src={Logo} alt="My logo" />
                </Div>
                <Div>
                    <TitleLeg>Hola</TitleLeg>
                    <p style={{fontSize:"0.5rem"}}>Lorem ipsum dolor sit amet consectetur.</p>
                </Div>
            </Content>
            <Content>
                <Div style={{textAlign:"start"}}>
                    Redes Sociales
                </Div>
                <Div>
                <nav style={{}}>
                        <ul style={{display:"flex", flexDirection:"column", gap:"0.7rem", textAlign:"start"}}>
                            <li style={{listStyle:"none", fontSize:"0.9rem"}}><a style={{textDecoration:"none", color:"white"}} href="#">Facebook</a></li>
                            <li style={{listStyle:"none", fontSize:"0.9rem"}}><a style={{textDecoration:"none", color:"white"}} href="#">Instagram</a></li>
                            <li style={{listStyle:"none", fontSize:"0.9rem"}}><a style={{textDecoration:"none", color:"white"}} href="#">Linkeding</a></li>
                            <li style={{listStyle:"none", fontSize:"0.9rem"}}><a style={{textDecoration:"none", color:"white"}} href="#">Whatsapp</a></li>
                        </ul>
                    </nav>
                </Div>
            </Content>
            <Content>
                <Div style={{textAlign:"start"}}>
                    Tu interes
                </Div>
                <Div>
                    <nav style={{}}>
                        <ul style={{display:"flex", flexDirection:"column", gap:"0.7rem", textAlign:"start"}}>
                            <li style={{listStyle:"none", fontSize:"0.9rem"}}><a style={{textDecoration:"none", color:"white"}} href="#">Inicio</a></li>
                            <li style={{listStyle:"none", fontSize:"0.9rem"}}><a style={{textDecoration:"none", color:"white"}} href="#">Perfil</a></li>
                            <li style={{listStyle:"none", fontSize:"0.9rem"}}><a style={{textDecoration:"none", color:"white"}} href="#">Proyectos</a></li>
                            <li style={{listStyle:"none", fontSize:"0.9rem"}}><a style={{textDecoration:"none", color:"white"}} href="#">Contacto</a></li>
                        </ul>
                    </nav>
                </Div>
            </Content>
        </ContentFooter>
    )
}

export default Footer