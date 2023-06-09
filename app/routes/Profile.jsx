import ProfileP from "../components/ProfileP";
import JGCODE from '../Assets/img/jgcode.jpg'
export const meta = () => {
  return [
    { title: "Profile" },
    { name: "description", content: "my profile is" },
  ];
};

const Profile = () => {
  const ProfilePersonal = {
    "title": "Ingeniero de sistemas",
    "description": "Soy un apasionado programador web fullstack con experiencia en desarrollo de aplicaciones utilizando tecnologías como PHP, JavaScript, React, MySQL y bases de datos no relacionales. He trabajado en diversos proyectos que abarcan desde el diseño y desarrollo de aplicaciones web interactivas hasta la implementación de bases de datos robustas y escalables. Mi enfoque principal es crear soluciones eficientes y centradas en el usuario, utilizando las mejores prácticas de desarrollo.",
    "img":  JGCODE
  }
  return (
    <ProfileP 
      data = {ProfilePersonal}

    />
  )
}

export default Profile