import {
  logo_default
} from "./chunk-RF3W5OQH.mjs";
import {
  __commonJS,
  __toESM
} from "./chunk-NISNRQWT.mjs";

// style-handler-namespace:D:\MainProject\Qing_Gateway\ice-app\src\pages\index.module.css
var require_index_module = __commonJS({
  "style-handler-namespace:D:\\MainProject\\Qing_Gateway\\ice-app\\src\\pages\\index.module.css"(exports, module) {
    module.exports = {
      "app": "app--ytiVkHV_",
      "link": "link--ANro_tOR",
      "button": "button--rHatrGmt"
    };
  }
});

// src/pages/index.tsx
import { jsx as _jsx, jsxs as _jsxs } from "@ice/runtime/jsx-runtime";
import { useState } from "react";
var import_index_module = __toESM(require_index_module());
function Home() {
  const [count, setCount] = useState(1);
  const updateCount = () => setCount((c) => c + 1);
  return /* @__PURE__ */ _jsxs("div", {
    className: import_index_module.default.app,
    children: [
      /* @__PURE__ */ _jsxs("header", {
        children: [
          /* @__PURE__ */ _jsx("img", {
            src: logo_default,
            alt: "logo"
          }),
          /* @__PURE__ */ _jsx("p", {
            children: "Welcome to Qing Gateway"
          })
        ]
      }),
      /* @__PURE__ */ _jsx("main", {
        children: /* @__PURE__ */ _jsxs("button", {
          className: import_index_module.default.button,
          type: "button",
          onClick: updateCount,
          children: [
            "\u{1F44D}\u{1F3FB} ",
            count
          ]
        })
      })
    ]
  });
}
export {
  Home as default
};
