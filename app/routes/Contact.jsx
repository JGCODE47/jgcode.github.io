import Contacto from "../components/Contacto";
export const meta = () => {
  return [
    { title: "Contact" },
    { name: "description", content: "Insert you information on form" },
  ];
};

const Contact = () => {
  return (
  <Contacto />
  )
}

export default Contact