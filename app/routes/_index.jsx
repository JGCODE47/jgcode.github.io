import Contenedor from '../components/Home'



export const meta = () => {
  return [
    { title: "Portafolio" },
    { name: "description", content: "Soy el portafolio de JGCODE" },
  ];
};

const data = {
  "title": "!Hola... me necesitas", 
  "description": "Si en algun momento quieres hablar conmigo puedes contactarme sin ningun problema, te ayudare lo mejor posible"
}

export default function Index() {

  return (
    
      <>
      <Contenedor
        data={data}
      />
  
      </>
    
  );
}
