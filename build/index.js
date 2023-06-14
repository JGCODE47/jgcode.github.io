var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.jsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_node_stream = require("node:stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.jsx",
          lineNumber: 47,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.jsx",
          lineNumber: 90,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          console.error(error), responseStatusCode = 500;
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.jsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links
});

// app/Assets/css/style.css
var style_default = "/build/_assets/style-PHVIFIO5.css";

// app/components/Navbar.jsx
var import_styled = __toESM(require("@emotion/styled")), import_jsx_dev_runtime2 = require("react/jsx-dev-runtime"), Nav = import_styled.default.nav`
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
`, Ul = import_styled.default.ul`
    display: flex;
    flex-direction:row;

`, Li = import_styled.default.li`
     list-style: none;
    font-size: 0.8rem;
    padding: 0 5px;
`, Anc = import_styled.default.a`
      color: aliceblue;
    text-decoration: none;
    list-style: none;
    transition: all 1s ease-out;
    &:hover{
        color: red;
    }
`, Navbar = () => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Nav, { children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "logo", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Anc, { href: "/", children: "<JGCODE>" }, void 0, !1, {
    fileName: "app/components/Navbar.jsx",
    lineNumber: 44,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/components/Navbar.jsx",
    lineNumber: 43,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Ul, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Li, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Anc, { href: "/", children: "Inicio" }, void 0, !1, {
      fileName: "app/components/Navbar.jsx",
      lineNumber: 48,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/components/Navbar.jsx",
      lineNumber: 47,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Li, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Anc, { href: "/Profile", children: "Perfil" }, void 0, !1, {
      fileName: "app/components/Navbar.jsx",
      lineNumber: 51,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/components/Navbar.jsx",
      lineNumber: 50,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Li, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Anc, { href: "/Project", children: "Proyectos" }, void 0, !1, {
      fileName: "app/components/Navbar.jsx",
      lineNumber: 54,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/components/Navbar.jsx",
      lineNumber: 53,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Li, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Anc, { href: "/Contact", children: "Contacto" }, void 0, !1, {
      fileName: "app/components/Navbar.jsx",
      lineNumber: 57,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/components/Navbar.jsx",
      lineNumber: 56,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Navbar.jsx",
    lineNumber: 46,
    columnNumber: 7
  }, this)
] }, void 0, !0, {
  fileName: "app/components/Navbar.jsx",
  lineNumber: 42,
  columnNumber: 2
}, this), Navbar_default = Navbar;

// app/components/Footer.jsx
var import_styled2 = __toESM(require("@emotion/styled"));

// public/favicon.ico
var favicon_default = "/build/_assets/favicon-U32CTLWT.ico";

// app/components/Footer.jsx
var import_jsx_dev_runtime3 = require("react/jsx-dev-runtime"), ContentFooter = import_styled2.default.footer`  
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
`, Content = import_styled2.default.div`
    display: flex;
    text-align: center;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.2rem;
    padding: 1rem 0;
    width: 100%;
`, Div = import_styled2.default.div`
    width: 100%;
    font-size: 0%.7rem;

`, ImgLogo = import_styled2.default.img`
    width: 8%;
`, TitleLeg = import_styled2.default.h4`
    font-size: 0.8rem;
    font-weight: 900;
`, Footer = () => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ContentFooter, { children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Content, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Div, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ImgLogo, { src: favicon_default, alt: "My logo" }, void 0, !1, {
      fileName: "app/components/Footer.jsx",
      lineNumber: 46,
      columnNumber: 21
    }, this) }, void 0, !1, {
      fileName: "app/components/Footer.jsx",
      lineNumber: 45,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Div, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(TitleLeg, { children: "Hola" }, void 0, !1, {
        fileName: "app/components/Footer.jsx",
        lineNumber: 49,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { style: { fontSize: "0.5rem" }, children: "Lorem ipsum dolor sit amet consectetur." }, void 0, !1, {
        fileName: "app/components/Footer.jsx",
        lineNumber: 50,
        columnNumber: 21
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Footer.jsx",
      lineNumber: 48,
      columnNumber: 17
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Footer.jsx",
    lineNumber: 44,
    columnNumber: 13
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Content, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Div, { style: { textAlign: "start" }, children: "Redes Sociales" }, void 0, !1, {
      fileName: "app/components/Footer.jsx",
      lineNumber: 54,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Div, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("nav", { style: {}, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("ul", { style: { display: "flex", flexDirection: "column", gap: "0.7rem", textAlign: "start" }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { style: { listStyle: "none", fontSize: "0.9rem" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { style: { textDecoration: "none", color: "white" }, href: "#", children: "Facebook" }, void 0, !1, {
        fileName: "app/components/Footer.jsx",
        lineNumber: 60,
        columnNumber: 79
      }, this) }, void 0, !1, {
        fileName: "app/components/Footer.jsx",
        lineNumber: 60,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { style: { listStyle: "none", fontSize: "0.9rem" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { style: { textDecoration: "none", color: "white" }, href: "#", children: "Instagram" }, void 0, !1, {
        fileName: "app/components/Footer.jsx",
        lineNumber: 61,
        columnNumber: 79
      }, this) }, void 0, !1, {
        fileName: "app/components/Footer.jsx",
        lineNumber: 61,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { style: { listStyle: "none", fontSize: "0.9rem" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { style: { textDecoration: "none", color: "white" }, href: "#", children: "Linkeding" }, void 0, !1, {
        fileName: "app/components/Footer.jsx",
        lineNumber: 62,
        columnNumber: 79
      }, this) }, void 0, !1, {
        fileName: "app/components/Footer.jsx",
        lineNumber: 62,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { style: { listStyle: "none", fontSize: "0.9rem" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { style: { textDecoration: "none", color: "white" }, href: "#", children: "Whatsapp" }, void 0, !1, {
        fileName: "app/components/Footer.jsx",
        lineNumber: 63,
        columnNumber: 79
      }, this) }, void 0, !1, {
        fileName: "app/components/Footer.jsx",
        lineNumber: 63,
        columnNumber: 29
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Footer.jsx",
      lineNumber: 59,
      columnNumber: 25
    }, this) }, void 0, !1, {
      fileName: "app/components/Footer.jsx",
      lineNumber: 58,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/components/Footer.jsx",
      lineNumber: 57,
      columnNumber: 17
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Footer.jsx",
    lineNumber: 53,
    columnNumber: 13
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Content, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Div, { style: { textAlign: "start" }, children: "Tu interes" }, void 0, !1, {
      fileName: "app/components/Footer.jsx",
      lineNumber: 69,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Div, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("nav", { style: {}, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("ul", { style: { display: "flex", flexDirection: "column", gap: "0.7rem", textAlign: "start" }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { style: { listStyle: "none", fontSize: "0.9rem" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { style: { textDecoration: "none", color: "white" }, href: "#", children: "Inicio" }, void 0, !1, {
        fileName: "app/components/Footer.jsx",
        lineNumber: 75,
        columnNumber: 79
      }, this) }, void 0, !1, {
        fileName: "app/components/Footer.jsx",
        lineNumber: 75,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { style: { listStyle: "none", fontSize: "0.9rem" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { style: { textDecoration: "none", color: "white" }, href: "#", children: "Perfil" }, void 0, !1, {
        fileName: "app/components/Footer.jsx",
        lineNumber: 76,
        columnNumber: 79
      }, this) }, void 0, !1, {
        fileName: "app/components/Footer.jsx",
        lineNumber: 76,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { style: { listStyle: "none", fontSize: "0.9rem" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { style: { textDecoration: "none", color: "white" }, href: "#", children: "Proyectos" }, void 0, !1, {
        fileName: "app/components/Footer.jsx",
        lineNumber: 77,
        columnNumber: 79
      }, this) }, void 0, !1, {
        fileName: "app/components/Footer.jsx",
        lineNumber: 77,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { style: { listStyle: "none", fontSize: "0.9rem" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { style: { textDecoration: "none", color: "white" }, href: "#", children: "Contacto" }, void 0, !1, {
        fileName: "app/components/Footer.jsx",
        lineNumber: 78,
        columnNumber: 79
      }, this) }, void 0, !1, {
        fileName: "app/components/Footer.jsx",
        lineNumber: 78,
        columnNumber: 29
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Footer.jsx",
      lineNumber: 74,
      columnNumber: 25
    }, this) }, void 0, !1, {
      fileName: "app/components/Footer.jsx",
      lineNumber: 73,
      columnNumber: 21
    }, this) }, void 0, !1, {
      fileName: "app/components/Footer.jsx",
      lineNumber: 72,
      columnNumber: 17
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Footer.jsx",
    lineNumber: 68,
    columnNumber: 13
  }, this)
] }, void 0, !0, {
  fileName: "app/components/Footer.jsx",
  lineNumber: 43,
  columnNumber: 9
}, this), Footer_default = Footer;

// app/root.jsx
var import_react2 = require("@remix-run/react"), import_jsx_dev_runtime4 = require("react/jsx-dev-runtime");
function links() {
  return [{ rel: "stylesheet", href: style_default }];
}
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 25,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 26,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react2.Meta, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 27,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react2.Links, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 28,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 24,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Navbar_default, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 31,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react2.Outlet, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 32,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Footer_default, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 33,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react2.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 34,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react2.Scripts, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 35,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react2.LiveReload, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 36,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 30,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.jsx",
    lineNumber: 23,
    columnNumber: 5
  }, this);
}

// app/routes/Contact.jsx
var Contact_exports = {};
__export(Contact_exports, {
  default: () => Contact_default,
  meta: () => meta
});

// app/components/Contacto.jsx
var import_styled4 = __toESM(require("@emotion/styled"));

// app/components/Button.jsx
var import_styled3 = __toESM(require("@emotion/styled")), import_jsx_dev_runtime5 = require("react/jsx-dev-runtime"), Btn = import_styled3.default.a`
    position: relative;
    top:1rem;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 0;
    border-radius: 0.5rem;
    text-decoration: none;

    &.btn-primary{
    font-family: 'Press Start 2P', cursive;
    font-family: 'Titillium Web', sans-serif;
    color: aliceblue;
    font-weight: 700;
    font-size: 1.4rem;
    background-color: rgba(57, 40, 24, 0.863);
    transition: all 1s ease-out;
    animation-duration: 3s;
    animation-name: BtnPrimary;
    animation-iteration-count: infinite;
    }
    
    @keyframes BtnPrimary { 
    50% {
      color: #463630c6;
        box-shadow: 0 0 15px 0;
      } 
  }
`, Button = ({ styleBtn, children, to }) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Btn, { className: "btn-" + styleBtn, href: to, children }, void 0, !1, {
  fileName: "app/components/Button.jsx",
  lineNumber: 40,
  columnNumber: 5
}, this), Button_default = Button;

// app/components/Contacto.jsx
var import_jsx_dev_runtime6 = require("react/jsx-dev-runtime"), Divider = import_styled4.default.div`
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
`, Div2 = import_styled4.default.div`
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
`, Form = import_styled4.default.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    padding: 1rem 0;
    
`, Input = import_styled4.default.input`
    border: 0;
    border-radius: 5px;
    padding: 15px 5px;    
    &::placeholder{
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        text-transform: uppercase;
        color: darkgrey;
    }
`, ContentInput = import_styled4.default.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: start;

`, Contacto = ({ data: data3 }) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Divider, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Div2, { style: { padding: "0 3rem" }, direction: "row", color: "transparent", alto: "100vh", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h1", { children: "Ingresa tus datos para contactarte" }, void 0, !1, {
    fileName: "app/components/Contacto.jsx",
    lineNumber: 66,
    columnNumber: 21
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Form, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(ContentInput, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("label", { htmlFor: "", children: "Nombres" }, void 0, !1, {
        fileName: "app/components/Contacto.jsx",
        lineNumber: 69,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Input, { type: "text", placeholder: "Agrega tus Nombres" }, void 0, !1, {
        fileName: "app/components/Contacto.jsx",
        lineNumber: 70,
        columnNumber: 29
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Contacto.jsx",
      lineNumber: 68,
      columnNumber: 25
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(ContentInput, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("label", { htmlFor: "", children: "Apellidos" }, void 0, !1, {
        fileName: "app/components/Contacto.jsx",
        lineNumber: 73,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Input, { type: "text", placeholder: "Agrega tus Apellidos" }, void 0, !1, {
        fileName: "app/components/Contacto.jsx",
        lineNumber: 74,
        columnNumber: 29
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Contacto.jsx",
      lineNumber: 72,
      columnNumber: 25
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(ContentInput, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("label", { htmlFor: "", children: "Email" }, void 0, !1, {
        fileName: "app/components/Contacto.jsx",
        lineNumber: 77,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Input, { type: "email", placeholder: "Agrega tu EMAIL" }, void 0, !1, {
        fileName: "app/components/Contacto.jsx",
        lineNumber: 78,
        columnNumber: 29
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Contacto.jsx",
      lineNumber: 76,
      columnNumber: 25
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(ContentInput, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("label", { htmlFor: "", children: "Celular" }, void 0, !1, {
        fileName: "app/components/Contacto.jsx",
        lineNumber: 81,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Input, { type: "phone", placeholder: "Agrega tu Numero" }, void 0, !1, {
        fileName: "app/components/Contacto.jsx",
        lineNumber: 82,
        columnNumber: 29
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Contacto.jsx",
      lineNumber: 80,
      columnNumber: 25
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Contacto.jsx",
    lineNumber: 67,
    columnNumber: 21
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
    Button_default,
    {
      children: "Enviar",
      styleBtn: "primary",
      to: "/Contact"
    },
    void 0,
    !1,
    {
      fileName: "app/components/Contacto.jsx",
      lineNumber: 87,
      columnNumber: 21
    },
    this
  )
] }, void 0, !0, {
  fileName: "app/components/Contacto.jsx",
  lineNumber: 65,
  columnNumber: 17
}, this) }, void 0, !1, {
  fileName: "app/components/Contacto.jsx",
  lineNumber: 64,
  columnNumber: 13
}, this) }, void 0, !1, {
  fileName: "app/components/Contacto.jsx",
  lineNumber: 63,
  columnNumber: 9
}, this), Contacto_default = Contacto;

// app/routes/Contact.jsx
var import_jsx_dev_runtime7 = require("react/jsx-dev-runtime"), meta = () => [
  { title: "Contact" },
  { name: "description", content: "Insert you information on form" }
], Contact = () => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Contacto_default, {}, void 0, !1, {
  fileName: "app/routes/Contact.jsx",
  lineNumber: 11,
  columnNumber: 3
}, this), Contact_default = Contact;

// app/routes/Profile.jsx
var Profile_exports = {};
__export(Profile_exports, {
  default: () => Profile_default,
  meta: () => meta2
});

// app/components/ProfileP.jsx
var import_styled5 = __toESM(require("@emotion/styled"));

// app/Assets/img/bmc-icon.svg
var bmc_icon_default = "/build/_assets/bmc-icon-67ROOZLU.svg";

// app/components/ProfileP.jsx
var import_jsx_dev_runtime8 = require("react/jsx-dev-runtime"), Divider2 = import_styled5.default.div`
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
`, Div3 = import_styled5.default.div`
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
`, Img = import_styled5.default.img`
    width: 50vh;
    height: 50vh;
    border-radius: 50%;
`, Title = import_styled5.default.h1`
  text-align: center;
`, P = import_styled5.default.p`
font-family: 'Press Start 2P', cursive;
font-family: 'Titillium Web', sans-serif;
font-weight: 700;
font-size: 1.3rem;
padding: 0 2rem;
`, Divtec = import_styled5.default.div`
  display: flex;
  flex-direction: row;
  gap:4rem;
  align-items: center;
  justify-content: center;
`, ProfileP = ({ data: data3 }) => /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_jsx_dev_runtime8.Fragment, { children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Divider2, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Div3, { style: { padding: "0 3rem" }, direction: "row", color: "transparent", alto: "100vh", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Img, { src: data3.img, alt: "JGCODE" }, void 0, !1, {
      fileName: "app/components/ProfileP.jsx",
      lineNumber: 62,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/components/ProfileP.jsx",
      lineNumber: 61,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Title, { children: data3.title }, void 0, !1, {
        fileName: "app/components/ProfileP.jsx",
        lineNumber: 65,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(P, { children: data3.description }, void 0, !1, {
        fileName: "app/components/ProfileP.jsx",
        lineNumber: 66,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/ProfileP.jsx",
      lineNumber: 64,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/ProfileP.jsx",
    lineNumber: 60,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/components/ProfileP.jsx",
    lineNumber: 59,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Div3, { direction: "row", color: "rgba(0, 0, 0, 0.87)", alto: "30vh", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Title, { children: "Tecnologias" }, void 0, !1, {
      fileName: "app/components/ProfileP.jsx",
      lineNumber: 73,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Divtec, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("img", { style: { width: "5%" }, src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg", alt: "" }, void 0, !1, {
        fileName: "app/components/ProfileP.jsx",
        lineNumber: 75,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("img", { style: { width: "5%" }, src: "https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png", alt: "" }, void 0, !1, {
        fileName: "app/components/ProfileP.jsx",
        lineNumber: 76,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("img", { style: { width: "5%" }, src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg", alt: "" }, void 0, !1, {
        fileName: "app/components/ProfileP.jsx",
        lineNumber: 77,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("img", { style: { width: "5%" }, src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg", alt: "" }, void 0, !1, {
        fileName: "app/components/ProfileP.jsx",
        lineNumber: 78,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("img", { style: { width: "5%" }, src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg", alt: "" }, void 0, !1, {
        fileName: "app/components/ProfileP.jsx",
        lineNumber: 79,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("img", { style: { width: "5%" }, src: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg", alt: "" }, void 0, !1, {
        fileName: "app/components/ProfileP.jsx",
        lineNumber: 80,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("img", { style: { width: "5%" }, src: "https://raw.githubusercontent.com/prplx/svg-logos/5585531d45d294869c4eaab4d7cf2e9c167710a9/svg/materialize.svg", alt: "" }, void 0, !1, {
        fileName: "app/components/ProfileP.jsx",
        lineNumber: 81,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("img", { style: { width: "5%" }, src: "https://www.vectorlogo.zone/logos/zapier/zapier-icon.svg", alt: "" }, void 0, !1, {
        fileName: "app/components/ProfileP.jsx",
        lineNumber: 82,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("img", { style: { width: "5%" }, src: "https://cdn.worldvectorlogo.com/logos/adobe-xd.svg", alt: "" }, void 0, !1, {
        fileName: "app/components/ProfileP.jsx",
        lineNumber: 83,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/ProfileP.jsx",
      lineNumber: 74,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/ProfileP.jsx",
    lineNumber: 72,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/components/ProfileP.jsx",
    lineNumber: 71,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Div3, { direction: "column", color: "rgba(44, 43, 43, 0.799)", alto: "30vh", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("img", { style: { width: "100%", fontSize: "2rem" }, src: bmc_icon_default, alt: "" }, void 0, !1, {
      fileName: "app/components/ProfileP.jsx",
      lineNumber: 90,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { style: { textAlign: "center" }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Title, { children: "Si te nace doname un cafesito " }, void 0, !1, {
        fileName: "app/components/ProfileP.jsx",
        lineNumber: 92,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("a", { href: "https://bmc.link/JGCODE", target: "_black", children: "Aqui" }, void 0, !1, {
        fileName: "app/components/ProfileP.jsx",
        lineNumber: 93,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/ProfileP.jsx",
      lineNumber: 91,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/ProfileP.jsx",
    lineNumber: 89,
    columnNumber: 7
  }, this)
] }, void 0, !0, {
  fileName: "app/components/ProfileP.jsx",
  lineNumber: 58,
  columnNumber: 5
}, this), ProfileP_default = ProfileP;

// app/routes/Profile.jsx
var import_jsx_dev_runtime9 = require("react/jsx-dev-runtime"), meta2 = () => [
  { title: "Profile" },
  { name: "description", content: "my profile is" }
], Profile = () => /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
  ProfileP_default,
  {
    data: {
      title: "Ingeniero de sistemas",
      description: "Soy un apasionado programador web fullstack con experiencia en desarrollo de aplicaciones utilizando tecnolog\xEDas como PHP, JavaScript, React, MySQL y bases de datos no relacionales. He trabajado en diversos proyectos que abarcan desde el dise\xF1o y desarrollo de aplicaciones web interactivas hasta la implementaci\xF3n de bases de datos robustas y escalables. Mi enfoque principal es crear soluciones eficientes y centradas en el usuario, utilizando las mejores pr\xE1cticas de desarrollo.",
      img: "https://media.istockphoto.com/id/1279133399/es/foto/top-por-encima-de-la-vista-de-%C3%A1ngulo-alto-retrato-de-su-%C3%A9l-agradable-atractivo-enfocado.jpg?s=612x612&w=0&k=20&c=zut_6TclL8yZZedQD9n6t5suCuPI_D3y713IHceTW8Y="
    }
  },
  void 0,
  !1,
  {
    fileName: "app/routes/Profile.jsx",
    lineNumber: 16,
    columnNumber: 5
  },
  this
), Profile_default = Profile;

// app/routes/Project.jsx
var Project_exports = {};
__export(Project_exports, {
  default: () => Project_default,
  meta: () => meta3
});

// app/components/Projects.jsx
var import_styled7 = __toESM(require("@emotion/styled"));

// app/components/Galery.jsx
var import_styled6 = __toESM(require("@emotion/styled")), import_react3 = require("react"), import_jsx_dev_runtime10 = require("react/jsx-dev-runtime"), GalleryWrapper = import_styled6.default.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 10px;
`, GalleryItem = import_styled6.default.div`
  position: relative;
  overflow: hidden;
`, GalleryImage = import_styled6.default.img`
  width: 100%;
  height: auto;
  transition: transform 0.3s;

  ${GalleryItem}:hover & {
    transform: scale(1.1);
  }
`, InfoContainer = import_styled6.default.div`
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
`, Galery = () => {
  let [activeIndex, setActiveIndex] = (0, import_react3.useState)(null), toggleActive = (index) => {
    setActiveIndex((prevIndex) => prevIndex === index ? null : index);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(GalleryWrapper, { children: [
    { image: "../Assers/img/gm.jpg", info: "Informaci\xF3n adicional 1" },
    { image: "imagen2.jpg", info: "Informaci\xF3n adicional 2" }
    // Agrega más elementos de la galería aquí
  ].map((item, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
    GalleryItem,
    {
      className: activeIndex === index ? "active" : "",
      onClick: () => toggleActive(index),
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(GalleryImage, { src: item.image, alt: `Imagen ${index + 1}` }, void 0, !1, {
          fileName: "app/components/Galery.jsx",
          lineNumber: 68,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(InfoContainer, { children: item.info }, void 0, !1, {
          fileName: "app/components/Galery.jsx",
          lineNumber: 69,
          columnNumber: 13
        }, this)
      ]
    },
    index,
    !0,
    {
      fileName: "app/components/Galery.jsx",
      lineNumber: 63,
      columnNumber: 11
    },
    this
  )) }, void 0, !1, {
    fileName: "app/components/Galery.jsx",
    lineNumber: 61,
    columnNumber: 9
  }, this);
}, Galery_default = Galery;

// app/components/Projects.jsx
var import_jsx_dev_runtime11 = require("react/jsx-dev-runtime"), Divider3 = import_styled7.default.div`
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
`, Div4 = import_styled7.default.div`
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
`, Title2 = import_styled7.default.h1`
  text-align: center;
`, P2 = import_styled7.default.p`
font-family: 'Press Start 2P', cursive;
font-family: 'Titillium Web', sans-serif;
font-weight: 700;
font-size: 1.3rem;
padding: 0 2rem;
`, Projects = ({ data: data3 }) => /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(Divider3, { children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(Div4, { style: { padding: "0 3rem" }, direction: "row", color: "transparent", alto: "100vh", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(Title2, { children: data3.title }, void 0, !1, {
      fileName: "app/components/Projects.jsx",
      lineNumber: 52,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(P2, { children: data3.description }, void 0, !1, {
      fileName: "app/components/Projects.jsx",
      lineNumber: 53,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Projects.jsx",
    lineNumber: 51,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/components/Projects.jsx",
    lineNumber: 50,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(Galery_default, {}, void 0, !1, {
    fileName: "app/components/Projects.jsx",
    lineNumber: 56,
    columnNumber: 7
  }, this)
] }, void 0, !0, {
  fileName: "app/components/Projects.jsx",
  lineNumber: 49,
  columnNumber: 5
}, this), Projects_default = Projects;

// app/routes/Project.jsx
var import_jsx_dev_runtime12 = require("react/jsx-dev-runtime"), meta3 = () => [
  { title: "Project" },
  { name: "description", content: "it's projects and working develop" }
], data = {
  title: "Desliza y observa mis proyectos",
  description: "En esta seccion encontrarar detallado los proyectos que e desarrollado a lo largo de mi vida.. espero puedas valorar mis conocimientos con ellos"
}, Project = () => /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
  Projects_default,
  {
    data
  },
  void 0,
  !1,
  {
    fileName: "app/routes/Project.jsx",
    lineNumber: 16,
    columnNumber: 3
  },
  this
), Project_default = Project;

// app/routes/_index.jsx
var index_exports = {};
__export(index_exports, {
  default: () => Index,
  meta: () => meta4
});

// app/components/Home.jsx
var import_styled8 = __toESM(require("@emotion/styled"));
var import_jsx_dev_runtime13 = require("react/jsx-dev-runtime"), Divider4 = import_styled8.default.div`
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
`, Div5 = import_styled8.default.div`
    position: relative;
    z-index: 2;
    height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: aliceblue;
    gap: 1rem;
`, Title3 = import_styled8.default.h1`
  text-align: center;
`, P3 = import_styled8.default.p`
font-family: 'Press Start 2P', cursive;
font-family: 'Titillium Web', sans-serif;
font-weight: 700;
font-size: 1.3rem;
padding: 0 2rem;
`, Home = ({ data: data3 }) => /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(Divider4, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(Div5, { children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(Title3, { children: data3.title }, void 0, !1, {
    fileName: "app/components/Home.jsx",
    lineNumber: 50,
    columnNumber: 9
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(P3, { children: data3.description }, void 0, !1, {
    fileName: "app/components/Home.jsx",
    lineNumber: 51,
    columnNumber: 9
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
    Button_default,
    {
      styleBtn: "primary",
      children: "Contactame aqui",
      to: "/Contact"
    },
    void 0,
    !1,
    {
      fileName: "app/components/Home.jsx",
      lineNumber: 52,
      columnNumber: 9
    },
    this
  )
] }, void 0, !0, {
  fileName: "app/components/Home.jsx",
  lineNumber: 49,
  columnNumber: 7
}, this) }, void 0, !1, {
  fileName: "app/components/Home.jsx",
  lineNumber: 48,
  columnNumber: 5
}, this), Home_default = Home;

// app/routes/_index.jsx
var import_jsx_dev_runtime14 = require("react/jsx-dev-runtime"), meta4 = () => [
  { title: "Portafolio" },
  { name: "description", content: "Soy el portafolio de JGCODE" }
], data2 = {
  title: "!Hola... me necesitas",
  description: "Si en algun momento quieres hablar conmigo puedes contactarme sin ningun problema, te ayudare lo mejor posible"
};
function Index() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_jsx_dev_runtime14.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
    Home_default,
    {
      data: data2
    },
    void 0,
    !1,
    {
      fileName: "app/routes/_index.jsx",
      lineNumber: 22,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "app/routes/_index.jsx",
    lineNumber: 21,
    columnNumber: 7
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-ZQFYYJB3.js", imports: ["/build/_shared/chunk-J4WBSHAY.js", "/build/_shared/chunk-M3PKG3MC.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-FPC6CJRE.js", imports: ["/build/_shared/chunk-MCRCYZNY.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/Contact": { id: "routes/Contact", parentId: "root", path: "Contact", index: void 0, caseSensitive: void 0, module: "/build/routes/Contact-PKF3MTAI.js", imports: ["/build/_shared/chunk-CKGWLONN.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/Profile": { id: "routes/Profile", parentId: "root", path: "Profile", index: void 0, caseSensitive: void 0, module: "/build/routes/Profile-CLTSRDQ7.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/Project": { id: "routes/Project", parentId: "root", path: "Project", index: void 0, caseSensitive: void 0, module: "/build/routes/Project-NB5MX3RS.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-LWQDO7AP.js", imports: ["/build/_shared/chunk-CKGWLONN.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, cssBundleHref: void 0, version: "a78ab818", hmr: void 0, url: "/build/manifest-A78AB818.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public\\build", future = { unstable_dev: !1, unstable_postcss: !1, unstable_tailwind: !1, v2_errorBoundary: !0, v2_meta: !0, v2_normalizeFormMethod: !0, v2_routeConvention: !0 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/Contact": {
    id: "routes/Contact",
    parentId: "root",
    path: "Contact",
    index: void 0,
    caseSensitive: void 0,
    module: Contact_exports
  },
  "routes/Profile": {
    id: "routes/Profile",
    parentId: "root",
    path: "Profile",
    index: void 0,
    caseSensitive: void 0,
    module: Profile_exports
  },
  "routes/Project": {
    id: "routes/Project",
    parentId: "root",
    path: "Project",
    index: void 0,
    caseSensitive: void 0,
    module: Project_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
