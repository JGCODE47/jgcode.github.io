import{a as r}from"/build/_shared/chunk-W4B7DFIU.js";import{c as s,d as t,e,f as o,g as i,h as n,j as l}from"/build/_shared/chunk-5XCBIPQZ.js";t();e();o();n();i();t();e();o();n();i();t();e();o();n();i();t();e();o();n();i();var h=s(l()),P=r.button`
    cursor: pointer;
    padding: 1rem 2rem;
    border: 0;
    border-radius: 0.5rem;

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
`,k=({styleBtn:m,children:x})=>(0,h.jsx)(P,{className:"btn-"+m,children:x}),g=k;var a=s(l()),B=r.div`
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
`,w=r.div`
    position: relative;
    z-index: 2;
    height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: aliceblue;
    gap: 1rem;
`,z=r.h1`
  text-align: center;
`,D=r.p`
font-family: 'Press Start 2P', cursive;
font-family: 'Titillium Web', sans-serif;
font-weight: 700;
font-size: 1.3rem;
padding: 0 2rem;
`,S=({data:m})=>(0,a.jsx)(B,{children:(0,a.jsxs)(w,{children:[(0,a.jsx)(z,{children:m.title}),(0,a.jsx)(D,{children:m.description}),(0,a.jsx)(g,{styleBtn:"primary",children:"Contactame aqui"})]})}),y=S;var c=s(l()),T=()=>[{title:"Portafolio"},{name:"description",content:"Soy el portafolio de JGCODE"}],C={title:"!Hola... me necesitas",description:"Si en algun momento quieres hablar conmigo puedes contactarme sin ningun problema, te ayudare lo mejor posible"};function v(){return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(y,{data:C})})}export{v as default,T as meta};
