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

// browser-route-module:routes/Profile.jsx?browser
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();

// app/routes/Profile.jsx
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();

// app/components/ProfileP.jsx
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();

// app/Assets/img/bmc-icon.svg
var bmc_icon_default = "/build/_assets/bmc-icon-67ROOZLU.svg";

// app/components/ProfileP.jsx
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
var Img = newStyled.img`
    width: 50vh;
    height: 50vh;
    border-radius: 50%;
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
var Divtec = newStyled.div`
  display: flex;
  flex-direction: row;
  gap:4rem;
  align-items: center;
  justify-content: center;
`;
var ProfileP = ({ data }) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Divider, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Div, { style: { padding: "0 3rem" }, direction: "row", color: "transparent", alto: "100vh", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Img, { src: data.img, alt: "JGCODE" }, void 0, false, {
        fileName: "app/components/ProfileP.jsx",
        lineNumber: 61,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/ProfileP.jsx",
        lineNumber: 60,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Title, { children: data.title }, void 0, false, {
          fileName: "app/components/ProfileP.jsx",
          lineNumber: 64,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(P, { children: data.description }, void 0, false, {
          fileName: "app/components/ProfileP.jsx",
          lineNumber: 65,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/ProfileP.jsx",
        lineNumber: 63,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/ProfileP.jsx",
      lineNumber: 59,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Div, { direction: "row", color: "rgba(0, 0, 0, 0.87)", alto: "30vh", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Title, { children: "Tecnologias" }, void 0, false, {
        fileName: "app/components/ProfileP.jsx",
        lineNumber: 70,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Divtec, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { style: { width: "5%" }, src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg", alt: "" }, void 0, false, {
          fileName: "app/components/ProfileP.jsx",
          lineNumber: 72,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { style: { width: "5%" }, src: "https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png", alt: "" }, void 0, false, {
          fileName: "app/components/ProfileP.jsx",
          lineNumber: 73,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { style: { width: "5%" }, src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg", alt: "" }, void 0, false, {
          fileName: "app/components/ProfileP.jsx",
          lineNumber: 74,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { style: { width: "5%" }, src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg", alt: "" }, void 0, false, {
          fileName: "app/components/ProfileP.jsx",
          lineNumber: 75,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { style: { width: "5%" }, src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg", alt: "" }, void 0, false, {
          fileName: "app/components/ProfileP.jsx",
          lineNumber: 76,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { style: { width: "5%" }, src: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg", alt: "" }, void 0, false, {
          fileName: "app/components/ProfileP.jsx",
          lineNumber: 77,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { style: { width: "5%" }, src: "https://raw.githubusercontent.com/prplx/svg-logos/5585531d45d294869c4eaab4d7cf2e9c167710a9/svg/materialize.svg", alt: "" }, void 0, false, {
          fileName: "app/components/ProfileP.jsx",
          lineNumber: 78,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { style: { width: "5%" }, src: "https://www.vectorlogo.zone/logos/zapier/zapier-icon.svg", alt: "" }, void 0, false, {
          fileName: "app/components/ProfileP.jsx",
          lineNumber: 79,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { style: { width: "5%" }, src: "https://cdn.worldvectorlogo.com/logos/adobe-xd.svg", alt: "" }, void 0, false, {
          fileName: "app/components/ProfileP.jsx",
          lineNumber: 80,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/ProfileP.jsx",
        lineNumber: 71,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/ProfileP.jsx",
      lineNumber: 69,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/ProfileP.jsx",
      lineNumber: 68,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Div, { direction: "column", color: "rgba(44, 43, 43, 0.799)", alto: "30vh", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { style: { width: "100%", fontSize: "2rem" }, src: bmc_icon_default, alt: "" }, void 0, false, {
        fileName: "app/components/ProfileP.jsx",
        lineNumber: 87,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: { textAlign: "center" }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Title, { children: "Si te nace doname un cafesito " }, void 0, false, {
          fileName: "app/components/ProfileP.jsx",
          lineNumber: 89,
          columnNumber: 8
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "https://bmc.link/JGCODE", target: "_black", children: "Aqui" }, void 0, false, {
          fileName: "app/components/ProfileP.jsx",
          lineNumber: 90,
          columnNumber: 9
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/ProfileP.jsx",
        lineNumber: 88,
        columnNumber: 8
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/ProfileP.jsx",
      lineNumber: 86,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/ProfileP.jsx",
    lineNumber: 58,
    columnNumber: 5
  }, this);
};
var ProfileP_default = ProfileP;

// app/routes/Profile.jsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
var meta = () => {
  return [
    { title: "Profile" },
    { name: "description", content: "my profile is" }
  ];
};
var Profile = () => {
  const ProfilePersonal = {
    "title": "Ingeniero de sistemas",
    "description": "Soy un apasionado programador web fullstack con experiencia en desarrollo de aplicaciones utilizando tecnolog\xEDas como PHP, JavaScript, React, MySQL y bases de datos no relacionales. He trabajado en diversos proyectos que abarcan desde el dise\xF1o y desarrollo de aplicaciones web interactivas hasta la implementaci\xF3n de bases de datos robustas y escalables. Mi enfoque principal es crear soluciones eficientes y centradas en el usuario, utilizando las mejores pr\xE1cticas de desarrollo.",
    "img": "https://media.istockphoto.com/id/1279133399/es/foto/top-por-encima-de-la-vista-de-%C3%A1ngulo-alto-retrato-de-su-%C3%A9l-agradable-atractivo-enfocado.jpg?s=612x612&w=0&k=20&c=zut_6TclL8yZZedQD9n6t5suCuPI_D3y713IHceTW8Y="
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
    ProfileP_default,
    {
      data: ProfilePersonal
    },
    void 0,
    false,
    {
      fileName: "app/routes/Profile.jsx",
      lineNumber: 16,
      columnNumber: 5
    },
    this
  );
};
var Profile_default = Profile;
export {
  Profile_default as default,
  meta
};
//# sourceMappingURL=/build/routes/Profile-4CAS2JDM.js.map
