import styled from "@emotion/styled"

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

const Projects = ({ data }) => {
  return (
    <Divider>
      <Div style={{padding:"0 3rem"}} direction="row" color="transparent" alto="100vh">
        <div>
          <Title>{data.title}</Title>
          <P>{data.description}</P>
        </div>
      </Div>     
     

    </Divider>
  )
}

export default Projects
