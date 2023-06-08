
export const meta = () => {
  return [
    { title: "Profile" },
    { name: "description", content: "my profile is" },
  ];
};

const Profile = () => {
  const ProfilePersonal = {
    "Titulo": "Ingeniero de sistemas",
    "Descripcion": ""
  }
  return (
    <section className="Profile">
      <div className="content-profile">
        <div>
          <img src="https://media.istockphoto.com/id/1279133399/es/foto/top-por-encima-de-la-vista-de-%C3%A1ngulo-alto-retrato-de-su-%C3%A9l-agradable-atractivo-enfocado.jpg?s=612x612&w=0&k=20&c=zut_6TclL8yZZedQD9n6t5suCuPI_D3y713IHceTW8Y=" alt="Prog" />
          <p>Soy JGCODE</p>
        </div>
        <div>
          <h1>Lorem, ipsum.</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos necessitatibus alias recusandae quisquam. Voluptatum corrupti eaque nam dolor sunt doloribus impedit, quo dolorem facere sed quisquam earum autem sint. Qui.
          </p>
        </div>
      </div>
    </section>)
}

export default Profile