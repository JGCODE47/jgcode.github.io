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

// app/components/Button.jsx
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var Btn = newStyled.a`
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
`;
var Button = ({ styleBtn, children, to }) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Btn, { className: `btn-` + styleBtn, href: to, children }, void 0, false, {
    fileName: "app/components/Button.jsx",
    lineNumber: 40,
    columnNumber: 5
  }, this);
};
var Button_default = Button;

export {
  Button_default
};
//# sourceMappingURL=/build/_shared/chunk-CKGWLONN.js.map
