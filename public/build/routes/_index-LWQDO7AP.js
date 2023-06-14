import {
  Button_default
} from "/build/_shared/chunk-CKGWLONN.js";
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

// browser-route-module:routes/_index.jsx?browser
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();

// app/routes/_index.jsx
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();

// app/components/Home.jsx
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
    height: 90vh;
    display: flex;
    flex-direction: column;
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
var Home = ({ data: data2 }) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Divider, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Div, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Title, { children: data2.title }, void 0, false, {
      fileName: "app/components/Home.jsx",
      lineNumber: 50,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(P, { children: data2.description }, void 0, false, {
      fileName: "app/components/Home.jsx",
      lineNumber: 51,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      Button_default,
      {
        styleBtn: "primary",
        children: "Contactame aqui",
        to: "/Contact"
      },
      void 0,
      false,
      {
        fileName: "app/components/Home.jsx",
        lineNumber: 52,
        columnNumber: 9
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/components/Home.jsx",
    lineNumber: 49,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/Home.jsx",
    lineNumber: 48,
    columnNumber: 5
  }, this);
};
var Home_default = Home;

// app/routes/_index.jsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
var meta = () => {
  return [
    { title: "Portafolio" },
    { name: "description", content: "Soy el portafolio de JGCODE" }
  ];
};
var data = {
  "title": "!Hola... me necesitas",
  "description": "Si en algun momento quieres hablar conmigo puedes contactarme sin ningun problema, te ayudare lo mejor posible"
};
function Index() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
    Home_default,
    {
      data
    },
    void 0,
    false,
    {
      fileName: "app/routes/_index.jsx",
      lineNumber: 22,
      columnNumber: 7
    },
    this
  ) }, void 0, false, {
    fileName: "app/routes/_index.jsx",
    lineNumber: 21,
    columnNumber: 7
  }, this);
}
export {
  Index as default,
  meta
};
//# sourceMappingURL=/build/routes/_index-LWQDO7AP.js.map
