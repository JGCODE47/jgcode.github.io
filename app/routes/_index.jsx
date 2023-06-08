
export const meta = () => {
  return [
    { title: "Portafolio" },
    { name: "description", content: "Soy el portafolio de JGCODE" },
  ];
};

export default function Index() {
  return (
    <section className="Profile">
      <div className="content-profile">
        <div>
          <h1>Lorem, ipsum.</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos necessitatibus alias recusandae quisquam. Voluptatum corrupti eaque nam dolor sunt doloribus impedit, quo dolorem facere sed quisquam earum autem sint. Qui.
          </p>
        </div>
      </div>
    </section>
  );
}
