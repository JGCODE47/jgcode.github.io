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
  require_jsx_dev_runtime
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
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Divider, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Div, { style: { padding: "0 3rem" }, direction: "row", color: "transparent", alto: "100vh", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Title, { children: data2.title }, void 0, false, {
      fileName: "app/components/Projects.jsx",
      lineNumber: 53,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(P, { children: data2.description }, void 0, false, {
      fileName: "app/components/Projects.jsx",
      lineNumber: 54,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Projects.jsx",
    lineNumber: 52,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/components/Projects.jsx",
    lineNumber: 51,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/Projects.jsx",
    lineNumber: 50,
    columnNumber: 5
  }, this) }, void 0, false, {
    fileName: "app/components/Projects.jsx",
    lineNumber: 49,
    columnNumber: 4
  }, this);
};
var Projects_default = Projects;

// app/routes/Project.jsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
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
//# sourceMappingURL=/build/routes/Project-UF623ZZP.js.map
