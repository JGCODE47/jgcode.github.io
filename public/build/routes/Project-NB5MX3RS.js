import {
  newStyled
} from "/build/_shared/chunk-MCRCYZNY.js";
import {
  __toESM,
  init_buffer,
  init_dirname,
  init_filename,
  init_global,
  init_process,
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-M3PKG3MC.js";

// browser-route-module:routes/Project.jsx?browser
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();

// app/routes/Project.jsx
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();

// app/components/Projects.jsx
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();

// app/components/Galery.jsx
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var GalleryWrapper = newStyled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 10px;
`;
var GalleryItem = newStyled.div`
  position: relative;
  overflow: hidden;
`;
var GalleryImage = newStyled.img`
  width: 100%;
  height: auto;
  transition: transform 0.3s;

  ${GalleryItem}:hover & {
    transform: scale(1.1);
  }
`;
var InfoContainer = newStyled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotateY(-90deg);
  transition: transform 0.3s;
  opacity: 0;

  ${GalleryItem}.active & {
    transform: rotateY(0deg);
    opacity: 1;
  }
`;
var Galery = () => {
  const [activeIndex, setActiveIndex] = (0, import_react.useState)(null);
  const toggleActive = (index) => {
    setActiveIndex((prevIndex) => prevIndex === index ? null : index);
  };
  const galleryItems = [
    { image: "../Assers/img/gm.jpg", info: "Informaci\xF3n adicional 1" },
    { image: "imagen2.jpg", info: "Informaci\xF3n adicional 2" }
    // Agrega más elementos de la galería aquí
  ];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GalleryWrapper, { children: galleryItems.map((item, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    GalleryItem,
    {
      className: activeIndex === index ? "active" : "",
      onClick: () => toggleActive(index),
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GalleryImage, { src: item.image, alt: `Imagen ${index + 1}` }, void 0, false, {
          fileName: "app/components/Galery.jsx",
          lineNumber: 68,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InfoContainer, { children: item.info }, void 0, false, {
          fileName: "app/components/Galery.jsx",
          lineNumber: 69,
          columnNumber: 13
        }, this)
      ]
    },
    index,
    true,
    {
      fileName: "app/components/Galery.jsx",
      lineNumber: 63,
      columnNumber: 11
    },
    this
  )) }, void 0, false, {
    fileName: "app/components/Galery.jsx",
    lineNumber: 61,
    columnNumber: 9
  }, this);
};
var Galery_default = Galery;

// app/components/Projects.jsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
var Divider = newStyled.div`
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
`;
var Div = newStyled.div`
    position: relative;
    z-index: 2;
    height: ${(props) => props.alto};
    display: flex;
    flex-direction: ${(props) => props.direction};
    background:${(props) => props.color};
    align-items: center;
    justify-content: center;
    color: aliceblue;
    gap: 1rem;
`;
var Title = newStyled.h1`
  text-align: center;
`;
var P = newStyled.p`
font-family: 'Press Start 2P', cursive;
font-family: 'Titillium Web', sans-serif;
font-weight: 700;
font-size: 1.3rem;
padding: 0 2rem;
`;
var Projects = ({ data: data2 }) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Divider, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Div, { style: { padding: "0 3rem" }, direction: "row", color: "transparent", alto: "100vh", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Title, { children: data2.title }, void 0, false, {
        fileName: "app/components/Projects.jsx",
        lineNumber: 52,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(P, { children: data2.description }, void 0, false, {
        fileName: "app/components/Projects.jsx",
        lineNumber: 53,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Projects.jsx",
      lineNumber: 51,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/Projects.jsx",
      lineNumber: 50,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Galery_default, {}, void 0, false, {
      fileName: "app/components/Projects.jsx",
      lineNumber: 56,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Projects.jsx",
    lineNumber: 49,
    columnNumber: 5
  }, this);
};
var Projects_default = Projects;

// app/routes/Project.jsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
var meta = () => {
  return [
    { title: "Project" },
    { name: "description", content: "it's projects and working develop" }
  ];
};
var data = {
  "title": "Desliza y observa mis proyectos",
  "description": "En esta seccion encontrarar detallado los proyectos que e desarrollado a lo largo de mi vida.. espero puedas valorar mis conocimientos con ellos"
};
var Project = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
    Projects_default,
    {
      data
    },
    void 0,
    false,
    {
      fileName: "app/routes/Project.jsx",
      lineNumber: 16,
      columnNumber: 3
    },
    this
  );
};
var Project_default = Project;
export {
  Project_default as default,
  meta
};
//# sourceMappingURL=/build/routes/Project-NB5MX3RS.js.map
