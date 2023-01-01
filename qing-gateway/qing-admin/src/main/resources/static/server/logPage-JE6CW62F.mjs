import {
  getLogs
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

// style-handler-namespace:D:\MainProject\Qing_Gateway\ice-app\src\pages\logPage\index.module.css
var require_index_module = __commonJS({
  "style-handler-namespace:D:\\MainProject\\Qing_Gateway\\ice-app\\src\\pages\\logPage\\index.module.css"(exports, module) {
    module.exports = {
      "headContainer": "headContainer--QAOIlv7n",
      "button": "button--TvpC9zyn"
    };
  }
});

// src/pages/logPage/index.tsx
import { jsx as _jsx, jsxs as _jsxs } from "@ice/runtime/jsx-runtime";
import { useEffect } from "react";
var import_index_module = __toESM(require_index_module());
var { Column } = table_default;
var { Search } = input_default;
function LogPage() {
  const { data, loading, request: getLogList } = hooks_default(getLogs, {});
  const params = {
    pageNum: 1,
    pageSize: 10,
    content: ""
  };
  useEffect(() => {
    (async function() {
      await getLogList(params);
    })();
  }, []);
  const debounce = (fn, delay) => {
    let timer = null;
    return (e) => {
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => {
        fn.call(this, e);
      }, delay);
    };
  };
  return /* @__PURE__ */ _jsxs("div", {
    children: [
      /* @__PURE__ */ _jsx("div", {
        className: import_index_module.default.headContainer,
        children: /* @__PURE__ */ _jsx(Search, {
          placeholder: "\u8BF7\u8F93\u5165\u6E90IP",
          onSearch: async (value) => {
            params.content = value;
            await getLogList(params);
          },
          onChange: debounce(async (e) => {
            console.log(e);
            params.content = e.target.value;
            await getLogList(params);
          }, 500),
          style: {
            width: 200
          }
        })
      }),
      /* @__PURE__ */ _jsxs(table_default, {
        dataSource: data == null ? void 0 : data.data,
        loading,
        rowKey: (record) => record.id,
        pagination: {
          defaultCurrent: 1,
          total: data == null ? void 0 : data.total,
          pageSize: data == null ? void 0 : data.pageSize,
          async onChange(page, pageSize) {
            await getLogList({
              pageNum: page,
              pageSize,
              content: ""
            });
          }
        },
        children: [
          /* @__PURE__ */ _jsx(Column, {
            title: "\u6E90IP",
            dataIndex: "originIP",
            align: "center"
          }, "originIP"),
          /* @__PURE__ */ _jsx(Column, {
            title: "\u6E90\u8BBF\u95EE\u8DEF\u5F84",
            dataIndex: "originuri",
            align: "center"
          }, "originuri"),
          /* @__PURE__ */ _jsx(Column, {
            title: "\u4EE3\u7406uri",
            dataIndex: "proxyuri",
            align: "center"
          }, "proxyuri"),
          /* @__PURE__ */ _jsx(Column, {
            title: "\u8DEF\u7531\u65AD\u8A00",
            dataIndex: "routeName",
            align: "center"
          }, "routeName"),
          /* @__PURE__ */ _jsx(Column, {
            title: "\u76EE\u6807\u670D\u52A1",
            dataIndex: "targetService",
            align: "center"
          }, "targetService"),
          /* @__PURE__ */ _jsx(Column, {
            title: "\u76EE\u6807\u670D\u52A1\u5B9E\u4F8B",
            dataIndex: "serviceInstance",
            align: "center"
          }, "serviceInstance"),
          /* @__PURE__ */ _jsx(Column, {
            title: "\u521B\u5EFA\u65F6\u95F4",
            dataIndex: "createdTime",
            align: "center"
          }, "createdTime")
        ]
      })
    ]
  });
}
var logPage_default = LogPage;
export {
  logPage_default as default
};
