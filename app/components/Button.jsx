import styled from "@emotion/styled"


const Btn = styled.a`
    position: relative;
    top:1rem;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 0;
    border-radius: 0.5rem;
    text-decoration: none;

    &.btn-primary{
    font-family: 'Press Start 2P', cursive;
    font-family: 'Titillium Web', sans-serif;
    color: aliceblue;
    font-weight: 700;
    font-size: 1.4rem;
    background-color: rgba(57, 40, 24, 0.863);
    transition: all 1s ease-out;
    animation-duration: 3s;
    animation-name: BtnPrimary;
    animation-iteration-count: infinite;
    }
    
    @keyframes BtnPrimary { 
    50% {
      color: #463630c6;
        box-shadow: 0 0 15px 0;
      } 
  }
`




const Button = ({ styleBtn, children, to }) => {

  return (
    <Btn className={`btn-` + styleBtn} href={to} >{children}</Btn>
  )
}

export default Button