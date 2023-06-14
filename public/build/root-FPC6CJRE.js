import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "/build/_shared/chunk-J4WBSHAY.js";
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

// browser-route-module:root.jsx?browser
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();

// app/root.jsx
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();

// app/Assets/css/style.css
var style_default = "/build/_assets/style-PHVIFIO5.css";

// app/components/Navbar.jsx
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var Nav = newStyled.nav`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1050;
    width: 100%;
    display: flex;
    flex-direction: row;
    background: rgba(28, 25, 25, 0.605);
    justify-content: space-around;
    align-items: center;
    @media(max-width:590px){
        position: relative;
        flex-direction: column;
        height: 10vh;
        justify-content: center;
    }
`;
var Ul = newStyled.ul`
    display: flex;
    flex-direction:row;

`;
var Li = newStyled.li`
     list-style: none;
    font-size: 0.8rem;
    padding: 0 5px;
`;
var Anc = newStyled.a`
      color: aliceblue;
    text-decoration: none;
    list-style: none;
    transition: all 1s ease-out;
    &:hover{
        color: red;
    }
`;
var Navbar = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Nav, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "logo", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Anc, { href: "/", children: `<JGCODE>` }, void 0, false, {
      fileName: "app/components/Navbar.jsx",
      lineNumber: 44,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/Navbar.jsx",
      lineNumber: 43,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Ul, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Li, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Anc, { href: "/", children: "Inicio" }, void 0, false, {
        fileName: "app/components/Navbar.jsx",
        lineNumber: 48,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/Navbar.jsx",
        lineNumber: 47,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Li, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Anc, { href: "/Profile", children: "Perfil" }, void 0, false, {
        fileName: "app/components/Navbar.jsx",
        lineNumber: 51,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/Navbar.jsx",
        lineNumber: 50,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Li, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Anc, { href: "/Project", children: "Proyectos" }, void 0, false, {
        fileName: "app/components/Navbar.jsx",
        lineNumber: 54,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/Navbar.jsx",
        lineNumber: 53,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Li, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Anc, { href: "/Contact", children: "Contacto" }, void 0, false, {
        fileName: "app/components/Navbar.jsx",
        lineNumber: 57,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/Navbar.jsx",
        lineNumber: 56,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Navbar.jsx",
      lineNumber: 46,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Navbar.jsx",
    lineNumber: 42,
    columnNumber: 2
  }, this);
};
var Navbar_default = Navbar;

// app/components/Footer.jsx
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();

// public/favicon.ico
var favicon_default = "/build/_assets/favicon-U32CTLWT.ico";

// app/components/Footer.jsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
var ContentFooter = newStyled.footer`  
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    background-color: rgb(27, 14, 14);
    color: white;
    height: 30vh;
    align-items: center;
    justify-content: center;
    & ::before{
        content: "";
        width: 100%;
    }
`;
var Content = newStyled.div`
    display: flex;
    text-align: center;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.2rem;
    padding: 1rem 0;
    width: 100%;
`;
var Div = newStyled.div`
    width: 100%;
    font-size: 0%.7rem;

`;
var ImgLogo = newStyled.img`
    width: 8%;
`;
var TitleLeg = newStyled.h4`
    font-size: 0.8rem;
    font-weight: 900;
`;
var Footer = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ContentFooter, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Content, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Div, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ImgLogo, { src: favicon_default, alt: "My logo" }, void 0, false, {
        fileName: "app/components/Footer.jsx",
        lineNumber: 46,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/components/Footer.jsx",
        lineNumber: 45,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Div, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(TitleLeg, { children: "Hola" }, void 0, false, {
          fileName: "app/components/Footer.jsx",
          lineNumber: 49,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { style: { fontSize: "0.5rem" }, children: "Lorem ipsum dolor sit amet consectetur." }, void 0, false, {
          fileName: "app/components/Footer.jsx",
          lineNumber: 50,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Footer.jsx",
        lineNumber: 48,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Footer.jsx",
      lineNumber: 44,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Content, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Div, { style: { textAlign: "start" }, children: "Redes Sociales" }, void 0, false, {
        fileName: "app/components/Footer.jsx",
        lineNumber: 54,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Div, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("nav", { style: {}, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("ul", { style: { display: "flex", flexDirection: "column", gap: "0.7rem", textAlign: "start" }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { style: { listStyle: "none", fontSize: "0.9rem" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { style: { textDecoration: "none", color: "white" }, href: "#", children: "Facebook" }, void 0, false, {
          fileName: "app/components/Footer.jsx",
          lineNumber: 60,
          columnNumber: 79
        }, this) }, void 0, false, {
          fileName: "app/components/Footer.jsx",
          lineNumber: 60,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { style: { listStyle: "none", fontSize: "0.9rem" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { style: { textDecoration: "none", color: "white" }, href: "#", children: "Instagram" }, void 0, false, {
          fileName: "app/components/Footer.jsx",
          lineNumber: 61,
          columnNumber: 79
        }, this) }, void 0, false, {
          fileName: "app/components/Footer.jsx",
          lineNumber: 61,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { style: { listStyle: "none", fontSize: "0.9rem" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { style: { textDecoration: "none", color: "white" }, href: "#", children: "Linkeding" }, void 0, false, {
          fileName: "app/components/Footer.jsx",
          lineNumber: 62,
          columnNumber: 79
        }, this) }, void 0, false, {
          fileName: "app/components/Footer.jsx",
          lineNumber: 62,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { style: { listStyle: "none", fontSize: "0.9rem" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { style: { textDecoration: "none", color: "white" }, href: "#", children: "Whatsapp" }, void 0, false, {
          fileName: "app/components/Footer.jsx",
          lineNumber: 63,
          columnNumber: 79
        }, this) }, void 0, false, {
          fileName: "app/components/Footer.jsx",
          lineNumber: 63,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Footer.jsx",
        lineNumber: 59,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/components/Footer.jsx",
        lineNumber: 58,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/components/Footer.jsx",
        lineNumber: 57,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Footer.jsx",
      lineNumber: 53,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Content, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Div, { style: { textAlign: "start" }, children: "Tu interes" }, void 0, false, {
        fileName: "app/components/Footer.jsx",
        lineNumber: 69,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Div, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("nav", { style: {}, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("ul", { style: { display: "flex", flexDirection: "column", gap: "0.7rem", textAlign: "start" }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { style: { listStyle: "none", fontSize: "0.9rem" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { style: { textDecoration: "none", color: "white" }, href: "#", children: "Inicio" }, void 0, false, {
          fileName: "app/components/Footer.jsx",
          lineNumber: 75,
          columnNumber: 79
        }, this) }, void 0, false, {
          fileName: "app/components/Footer.jsx",
          lineNumber: 75,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { style: { listStyle: "none", fontSize: "0.9rem" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { style: { textDecoration: "none", color: "white" }, href: "#", children: "Perfil" }, void 0, false, {
          fileName: "app/components/Footer.jsx",
          lineNumber: 76,
          columnNumber: 79
        }, this) }, void 0, false, {
          fileName: "app/components/Footer.jsx",
          lineNumber: 76,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { style: { listStyle: "none", fontSize: "0.9rem" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { style: { textDecoration: "none", color: "white" }, href: "#", children: "Proyectos" }, void 0, false, {
          fileName: "app/components/Footer.jsx",
          lineNumber: 77,
          columnNumber: 79
        }, this) }, void 0, false, {
          fileName: "app/components/Footer.jsx",
          lineNumber: 77,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { style: { listStyle: "none", fontSize: "0.9rem" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { style: { textDecoration: "none", color: "white" }, href: "#", children: "Contacto" }, void 0, false, {
          fileName: "app/components/Footer.jsx",
          lineNumber: 78,
          columnNumber: 79
        }, this) }, void 0, false, {
          fileName: "app/components/Footer.jsx",
          lineNumber: 78,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Footer.jsx",
        lineNumber: 74,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/components/Footer.jsx",
        lineNumber: 73,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/components/Footer.jsx",
        lineNumber: 72,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Footer.jsx",
      lineNumber: 68,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Footer.jsx",
    lineNumber: 43,
    columnNumber: 9
  }, this);
};
var Footer_default = Footer;

// app/root.jsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
function links() {
  return [{ rel: "stylesheet", href: style_default }];
}
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("meta", { charSet: "utf-8" }, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 25,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 26,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Meta, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 27,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Links, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 28,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.jsx",
      lineNumber: 24,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Navbar_default, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 31,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Outlet, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 32,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Footer_default, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 33,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ScrollRestoration, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 34,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Scripts, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 35,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(LiveReload, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 36,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.jsx",
      lineNumber: 30,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/root.jsx",
    lineNumber: 23,
    columnNumber: 5
  }, this);
}
export {
  App as default,
  links
};
//# sourceMappingURL=/build/root-FPC6CJRE.js.map
