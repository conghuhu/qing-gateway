import {
  button_default,
  history,
  result_default
} from "./chunk-IQAM3D37.mjs";
import "./chunk-QYT7L57C.mjs";
import "./chunk-NISNRQWT.mjs";

// src/pages/$.tsx
import { jsx as _jsx } from "@ice/runtime/jsx-runtime";
var NotFoundPage = () => /* @__PURE__ */ _jsx(result_default, {
  status: "404",
  title: "404",
  subTitle: "\u4F60\u8BBF\u95EE\u7684\u9875\u9762\u4E0D\u5B58\u5728",
  extra: /* @__PURE__ */ _jsx(button_default, {
    type: "primary",
    onClick: () => {
      var _a;
      return (_a = history) == null ? void 0 : _a.push("/");
    },
    children: "\u8FD4\u56DE"
  })
});
var __default = NotFoundPage;
export {
  __default as default
};
