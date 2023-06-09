import ProfileP from "../components/ProfileP";
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
    "img": "https://media.istockphoto.com/id/1279133399/es/foto/top-por-encima-de-la-vista-de-%C3%A1ngulo-alto-retrato-de-su-%C3%A9l-agradable-atractivo-enfocado.jpg?s=612x612&w=0&k=20&c=zut_6TclL8yZZedQD9n6t5suCuPI_D3y713IHceTW8Y="
  }
  return (
    <ProfileP 
      data = {ProfilePersonal}

    />
  )
}

export default Profile