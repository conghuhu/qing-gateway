import {
  getCurrentConfig,
  reset
} from "./chunk-BN2KOWVI.mjs";
import {
  form_default,
  hooks_default,
  input_default,
  input_number_default,
  popconfirm_default
} from "./chunk-IQAM3D37.mjs";
import "./chunk-QYT7L57C.mjs";
import "./chunk-NISNRQWT.mjs";

// src/pages/config/index.tsx
import { jsx as _jsx, jsxs as _jsxs } from "@ice/runtime/jsx-runtime";
import { useEffect } from "react";
function Config() {
  const { loading, request: getConfig } = hooks_default(getCurrentConfig, {
    onSuccess: (data) => {
      const IP = data.nacosInfo.address.split(":")[0];
      const PORT = data.nacosInfo.address.split(":")[1];
      form.setFieldsValue({
        IP,
        PORT
      });
    }
  });
  const { request: resetInfo } = hooks_default(reset);
  const [form] = form_default.useForm();
  useEffect(() => {
    getConfig();
  }, []);
  const confirm = async () => {
    form.validateFields().then(async (values) => {
      const data = {
        nacosServerAddr: `${values.IP}:${values.PORT}`,
        websocketUriList: values.websocketUriList.map((item) => `ws://${item}`)
      };
      await resetInfo(data);
      await getConfig();
    });
  };
  return /* @__PURE__ */ _jsxs("div", {
    children: [
      /* @__PURE__ */ _jsxs(form_default, {
        layout: "vertical",
        labelAlign: "right",
        form,
        children: [
          /* @__PURE__ */ _jsx(form_default.Item, {
            label: "\u66F4\u6539nacos\u5730\u5740",
            name: "IP",
            rules: [
              {
                required: true,
                message: "\u8BF7\u8F93\u5165\u6709\u6548IP!",
                pattern: /^(1\d{2}|2[0-4]\d|25[0-5]|[1-9]\d|[0-9])\.((1\d{2}|2[0-4]\d|25[0-5]|[1-9]\d|\d)\.){2}(1\d{2}|2[0-4]\d|25[0-5]|[1-9]\d|\d)$/
              }
            ],
            children: /* @__PURE__ */ _jsx(input_default, {
              addonBefore: "IP:",
              style: {
                width: "30%"
              }
            })
          }),
          /* @__PURE__ */ _jsx(form_default.Item, {
            name: "PORT",
            rules: [
              {
                required: true,
                message: "\u8BF7\u8F93\u5165PORT!"
              }
            ],
            children: /* @__PURE__ */ _jsx(input_number_default, {
              addonBefore: "PORT:",
              min: 0,
              max: 65535,
              style: {
                width: "30%"
              }
            })
          })
        ]
      }),
      /* @__PURE__ */ _jsx(popconfirm_default, {
        title: "\u4F60\u786E\u5B9A\u8981\u66F4\u6539\u5417",
        onConfirm: confirm,
        okText: "Yes",
        cancelText: "No",
        children: /* @__PURE__ */ _jsx("a", {
          href: "#",
          children: "\u786E\u8BA4\u66F4\u6539"
        })
      })
    ]
  });
}
export {
  Config as default
};
