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

// browser-route-module:routes/Contact.jsx?browser
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();

// app/routes/Contact.jsx
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();

// app/components/Contacto.jsx
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
var Form = newStyled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    padding: 1rem 0;
    
`;
var Input = newStyled.input`
    border: 0;
    border-radius: 5px;
    padding: 15px 5px;    
    &::placeholder{
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        text-transform: uppercase;
        color: darkgrey;
    }
`;
var ContentInput = newStyled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: start;

`;
var Contacto = ({ data }) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Divider, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Div, { style: { padding: "0 3rem" }, direction: "row", color: "transparent", alto: "100vh", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: "Ingresa tus datos para contactarte" }, void 0, false, {
      fileName: "app/components/Contacto.jsx",
      lineNumber: 66,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ContentInput, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "", children: "Nombres" }, void 0, false, {
          fileName: "app/components/Contacto.jsx",
          lineNumber: 69,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { type: "text", placeholder: "Agrega tus Nombres" }, void 0, false, {
          fileName: "app/components/Contacto.jsx",
          lineNumber: 70,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Contacto.jsx",
        lineNumber: 68,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ContentInput, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "", children: "Apellidos" }, void 0, false, {
          fileName: "app/components/Contacto.jsx",
          lineNumber: 73,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { type: "text", placeholder: "Agrega tus Apellidos" }, void 0, false, {
          fileName: "app/components/Contacto.jsx",
          lineNumber: 74,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Contacto.jsx",
        lineNumber: 72,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ContentInput, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "", children: "Email" }, void 0, false, {
          fileName: "app/components/Contacto.jsx",
          lineNumber: 77,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { type: "email", placeholder: "Agrega tu EMAIL" }, void 0, false, {
          fileName: "app/components/Contacto.jsx",
          lineNumber: 78,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Contacto.jsx",
        lineNumber: 76,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ContentInput, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "", children: "Celular" }, void 0, false, {
          fileName: "app/components/Contacto.jsx",
          lineNumber: 81,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { type: "phone", placeholder: "Agrega tu Numero" }, void 0, false, {
          fileName: "app/components/Contacto.jsx",
          lineNumber: 82,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Contacto.jsx",
        lineNumber: 80,
        columnNumber: 25
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Contacto.jsx",
      lineNumber: 67,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      Button_default,
      {
        children: "Enviar",
        styleBtn: "primary",
        to: "/Contact"
      },
      void 0,
      false,
      {
        fileName: "app/components/Contacto.jsx",
        lineNumber: 87,
        columnNumber: 21
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/components/Contacto.jsx",
    lineNumber: 65,
    columnNumber: 17
  }, this) }, void 0, false, {
    fileName: "app/components/Contacto.jsx",
    lineNumber: 64,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/components/Contacto.jsx",
    lineNumber: 63,
    columnNumber: 9
  }, this);
};
var Contacto_default = Contacto;

// app/routes/Contact.jsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
var meta = () => {
  return [
    { title: "Contact" },
    { name: "description", content: "Insert you information on form" }
  ];
};
var Contact = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Contacto_default, {}, void 0, false, {
    fileName: "app/routes/Contact.jsx",
    lineNumber: 11,
    columnNumber: 3
  }, this);
};
var Contact_default = Contact;
export {
  Contact_default as default,
  meta
};
//# sourceMappingURL=/build/routes/Contact-PKF3MTAI.js.map
