import {
  getGatewayNodeList
} from "./chunk-BN2KOWVI.mjs";
import {
  hooks_default,
  input_default,
  table_default
} from "./chunk-IQAM3D37.mjs";
import "./chunk-QYT7L57C.mjs";
import {
  __commonJS,
  __toESM
} from "./chunk-NISNRQWT.mjs";

// style-handler-namespace:D:\MainProject\Qing_Gateway\ice-app\src\pages\gatewayNode\index.module.css
var require_index_module = __commonJS({
  "style-handler-namespace:D:\\MainProject\\Qing_Gateway\\ice-app\\src\\pages\\gatewayNode\\index.module.css"(exports, module) {
    module.exports = {
      "headContainer": "headContainer--T1OLlaLq",
      "button": "button--OLTjcHw8"
    };
  }
});

// src/pages/gatewayNode/index.tsx
import { jsx as _jsx, jsxs as _jsxs } from "@ice/runtime/jsx-runtime";
var import_index_module = __toESM(require_index_module());
import { useEffect } from "react";
var { Search } = input_default;
function GatewayNode() {
  const { data, loading, request: getList } = hooks_default(getGatewayNodeList);
  useEffect(() => {
    (async function() {
      await getList();
    })();
  }, []);
  const columns = [
    {
      title: "\u4E3B\u673AIP",
      dataIndex: "ip",
      key: "ip",
      align: "center"
    },
    {
      title: "websocket URI",
      dataIndex: "uri",
      key: "uri",
      align: "center"
    },
    {
      title: "\u662F\u5426\u542F\u7528",
      dataIndex: "enabled",
      key: "enabled",
      align: "center",
      render: (enabled) => enabled ? /* @__PURE__ */ _jsx("span", {
        children: "\u5F00"
      }) : /* @__PURE__ */ _jsx("span", {
        children: "\u5173"
      })
    },
    {
      title: "\u662F\u5426\u5728\u7EBF",
      dataIndex: "status",
      key: "status",
      align: "center",
      render: (status) => status ? /* @__PURE__ */ _jsx("span", {
        children: "\u662F"
      }) : /* @__PURE__ */ _jsx("span", {
        children: "\u5426"
      })
    },
    {
      title: "BeanName",
      dataIndex: "beanName",
      key: "beanName",
      align: "center"
    },
    {
      title: "\u521B\u5EFA\u65F6\u95F4",
      dataIndex: "createdTime",
      key: "createdTime",
      align: "center"
    }
  ];
  return /* @__PURE__ */ _jsxs("div", {
    children: [
      /* @__PURE__ */ _jsx("div", {
        className: import_index_module.default.headContainer,
        children: /* @__PURE__ */ _jsx(Search, {
          placeholder: "\u8BF7\u8F93\u5165\u4E3B\u673AIP",
          onSearch: () => {
          },
          style: {
            width: 200
          }
        })
      }),
      /* @__PURE__ */ _jsx(table_default, {
        columns,
        dataSource: data,
        loading,
        rowKey: (item) => item.id
      })
    ]
  });
}
export {
  GatewayNode as default
};
