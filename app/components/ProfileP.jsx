import styled from "@emotion/styled"
import Coffy from '../Assets/img/bmc-icon.svg'

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

    @media (max-width:560px) {
      flex-direction: ${props => props.directionxs};
    }
`
const Img = styled.img`
    width: 50vh;
    height: 50vh;
    border-radius: 50%;
`
const Title = styled.h1`
  text-align: center;
`
const P = styled.p`
font-family: 'Press Start 2P', cursive;
font-family: 'Titillium Web', sans-serif;
font-weight: 700;
font-size: 1.3rem;
padding: 0 2rem;
`
const Divtec = styled.div`
  display: flex;
  flex-direction: row;
  gap:4rem;
  align-items: center;
  justify-content: center;
`
const ProfileP = ({ data }) => {
  return (
    <Divider>
      <Div style={{padding:"0 3rem"}} direction="row" directionxs="column" color="transparent" alto="100vh">
        <div>
          <Img style={{boxShadow:"0 0 10px 0", color:"darkblue"}} src={data.img} alt="JGCODE" />
        </div>
        <div>
          <Title>{data.title}</Title>
          <P>{data.description}</P>
        </div>
      </Div>
      <Div direction="row" color="rgba(0, 0, 0, 0.87)" alto="30vh">
        <div>
          <Title>Tecnologias</Title>
          <Divtec>
            <img style={{ width: '5%' }} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="" />
            <img style={{ width: '5%' }} src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png" alt="" />
            <img style={{ width: '5%' }} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="" />
            <img style={{ width: '5%' }} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg" alt="" />
            <img style={{ width: '5%' }} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" alt="" />
            <img style={{ width: '5%' }} src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" alt="" />
            <img style={{ width: '5%' }} src="https://raw.githubusercontent.com/prplx/svg-logos/5585531d45d294869c4eaab4d7cf2e9c167710a9/svg/materialize.svg" alt="" />
            <img style={{ width: '5%' }} src="https://www.vectorlogo.zone/logos/zapier/zapier-icon.svg" alt="" />
            <img style={{ width: '5%' }} src="https://cdn.worldvectorlogo.com/logos/adobe-xd.svg" alt="" />

          </Divtec>
        </div>

      </Div>
      <Div direction="column" color="rgba(44, 43, 43, 0.799)" alto="30vh">
        <img style={{ width: '100%', fontSize:"2rem" }} src={Coffy} alt="" />
       <div style={{textAlign:"center"}}>
       <Title>Si te nace doname un cafesito </Title>
        <a href="https://bmc.link/JGCODE" target="_black">Aqui</a>
       </div>

      </Div>

    </Divider>
  )
}

export default ProfileP
