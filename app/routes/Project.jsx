import Projects from "../components/Projects";
export const meta = () => {
  return [
    { title: "Project" },
    { name: "description", content: "it's projects and working develop" },
  ];
};
const data = {
  "title":"Desliza y observa mis proyectos",
  "description":"En esta seccion encontrarar detallado los proyectos que e desarrollado a lo largo de mi vida.. espero puedas valorar mis conocimientos con ellos"

}
const Project = () => {

  return (
  <Projects
    data = {data}
  />
  )
}

export default Project