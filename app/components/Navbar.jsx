import styled from "@emotion/styled"

const Nav = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1050;
    width: 100%;
    display: flex;
    flex-direction: row;
    background: rgba(28, 25, 25, 0.605);
    justify-content: space-around;
    align-items: center;
    @media(max-width:590px){
        position: relative;
        flex-direction: column;
        height: 10vh;
        justify-content: center;
    }
`
const Ul = styled.ul`
    display: flex;
    flex-direction:row;

`
const Li = styled.li`
     list-style: none;
    font-size: 0.8rem;
    padding: 0 5px;
`
const Anc = styled.a`
      color: aliceblue;
    text-decoration: none;
    list-style: none;
    transition: all 1s ease-out;
    &:hover{
        color: red;
    }
`
const Navbar = () => {
    return (
 <Nav>
      <div className="logo">
        <Anc href="/">{`<JGCODE>`}</Anc>
      </div>
      <Ul>
        <Li>
          <Anc href="/">Inicio</Anc>
        </Li>
        <Li>
          <Anc href="/Profile">Perfil</Anc>
        </Li>
        <Li>
          <Anc href="/Project">Proyectos</Anc>
        </Li>
        <Li>
          <Anc href="/Contact">Contacto</Anc>
        </Li>
      </Ul>
    </Nav>
    )
}

export default Navbar
