import {
  PlusCircleOutlined_default
} from "./chunk-RKIYV4QL.mjs";
import {
  addLimitRuleList,
  deleteLimitRuleList,
  getLimitRuleList,
  updateLimitRuleList
} from "./chunk-BN2KOWVI.mjs";
import {
  button_default,
  form_default,
  hooks_default,
  input_default,
  input_number_default,
  message_default,
  modal_default,
  popconfirm_default,
  select_default,
  space_default,
  table_default,
  tag_default
} from "./chunk-IQAM3D37.mjs";
import "./chunk-QYT7L57C.mjs";
import {
  __commonJS,
  __toESM
} from "./chunk-NISNRQWT.mjs";

// style-handler-namespace:D:\MainProject\Qing_Gateway\ice-app\src\pages\limit\index.module.css
var require_index_module = __commonJS({
  "style-handler-namespace:D:\\MainProject\\Qing_Gateway\\ice-app\\src\\pages\\limit\\index.module.css"(exports, module) {
    module.exports = {
      "headContainer": "headContainer--W3XSuanu",
      "button": "button--WZdCuMLa"
    };
  }
});

// src/pages/limit/index.tsx
import { jsx as _jsx, jsxs as _jsxs } from "@ice/runtime/jsx-runtime";
import { useEffect, useState } from "react";
var import_index_module = __toESM(require_index_module());
var { Search } = input_default;
var AddRouterForm = ({ setVisible, refreshData }) => {
  const [select, setSelect] = useState("ip");
  const [timetype, setTimeType] = useState("\u79D2");
  const [form] = form_default.useForm();
  const { loading, request: add } = hooks_default(addLimitRuleList);
  const data = [
    {
      id: 1,
      type: "ip"
    },
    {
      id: 2,
      type: "interface"
    }
  ];
  const time = [
    {
      id: 1,
      timeunit: "second"
    },
    {
      id: 2,
      timeunit: "minute"
    }
  ];
  return /* @__PURE__ */ _jsx(modal_default, {
    title: "\u6DFB\u52A0\u9650\u6D41\u89C4\u5219",
    open: true,
    okText: "\u786E\u8BA4\u6DFB\u52A0",
    cancelText: "\u53D6\u6D88",
    onCancel: () => setVisible(false),
    onOk: async () => {
      form.validateFields().then(async (values) => {
        console.log(values);
        await add(values);
        await refreshData();
        setVisible(false);
      });
    },
    confirmLoading: loading,
    children: /* @__PURE__ */ _jsxs(form_default, {
      layout: "vertical",
      labelAlign: "right",
      form,
      children: [
        /* @__PURE__ */ _jsx(form_default.Item, {
          label: "\u7C7B\u578B\u9009\u62E9",
          name: "type",
          rules: [
            {
              required: true,
              message: "\u8BF7\u9009\u62E9\u7C7B\u578B"
            }
          ],
          initialValue: select,
          children: /* @__PURE__ */ _jsx(select_default, {
            onSelect: (select2) => {
              setSelect(select2);
            },
            children: data.map((item) => /* @__PURE__ */ _jsx(select_default.Option, {
              value: item.type
            }, item.id))
          })
        }),
        /* @__PURE__ */ _jsx(form_default.Item, {
          label: select === "ip" ? "\u9650\u5236ip" : "\u9650\u5236\u63A5\u53E3",
          name: "limitKey",
          rules: [
            {
              required: true,
              message: "\u8BF7\u8F93\u5165key"
            }
          ],
          children: /* @__PURE__ */ _jsx(input_default, {})
        }),
        /* @__PURE__ */ _jsx(form_default.Item, {
          label: "\u9650\u6D41\u65F6\u95F4\u7EA7",
          name: "timeunit",
          rules: [
            {
              required: true,
              message: "\u8BF7\u9009\u62E9\u5355\u4F4D"
            }
          ],
          children: /* @__PURE__ */ _jsx(select_default, {
            onSelect: (select2) => {
              console.log(select2);
              setTimeType(select2);
            },
            children: time.map((item) => /* @__PURE__ */ _jsx(select_default.Option, {
              value: item.timeunit,
              children: item.timeunit === "second" ? "\u79D2" : "\u5206"
            }, item.id))
          })
        }),
        /* @__PURE__ */ _jsx(form_default.Item, {
          label: timetype === "second" ? "qps" : "qpm",
          name: timetype === "second" ? "qps" : "qpm",
          rules: [
            {
              required: true,
              message: "\u8BF7\u8F93\u5165\u9650\u5236\u91CF\uFF01"
            }
          ],
          children: /* @__PURE__ */ _jsx(input_number_default, {
            style: {
              width: "100%"
            }
          })
        })
      ]
    })
  });
};
var EditRouteForm = ({ currentRecord, setEditVisible, refresh }) => {
  const data = [
    {
      id: 1,
      type: "ip"
    },
    {
      id: 2,
      type: "interface"
    }
  ];
  const time = [
    {
      id: 1,
      timeunit: "second"
    },
    {
      id: 2,
      timeunit: "minute"
    }
  ];
  const [select, setSelect] = useState("");
  const { loading, request: update } = hooks_default(updateLimitRuleList);
  const [form] = form_default.useForm();
  useEffect(() => {
    form.setFieldsValue({
      ...currentRecord
    });
  }, []);
  return /* @__PURE__ */ _jsx(modal_default, {
    title: "\u66F4\u6539\u9650\u6D41\u89C4\u5219",
    visible: true,
    okText: "\u66F4\u6539",
    cancelText: "\u53D6\u6D88",
    onCancel: () => setEditVisible(false),
    confirmLoading: loading,
    onOk: async () => {
      await update({
        ...form.getFieldsValue(),
        id: currentRecord.id
      });
      message_default.success("\u66F4\u65B0\u8DEF\u7531\u89C4\u5219\u6210\u529F");
      await refresh();
      setEditVisible(false);
    },
    mask: true,
    children: /* @__PURE__ */ _jsxs(form_default, {
      layout: "vertical",
      labelAlign: "right",
      form,
      children: [
        /* @__PURE__ */ _jsx(form_default.Item, {
          label: "\u9009\u62E9\u9650\u6D41\u7C7B\u578B",
          name: "type",
          rules: [
            {
              required: true,
              message: "\u8BF7\u9009\u62E9\u9650\u6D41\u7C7B\u578B"
            }
          ],
          children: /* @__PURE__ */ _jsx(select_default, {
            children: data.map((item) => /* @__PURE__ */ _jsx(select_default.Option, {
              value: item.type
            }, item.id))
          })
        }),
        /* @__PURE__ */ _jsx(form_default.Item, {
          label: "key",
          name: "limitKey",
          rules: [
            {
              required: true,
              message: "\u8BF7\u8F93\u5165key"
            }
          ],
          children: /* @__PURE__ */ _jsx(input_default, {})
        }),
        /* @__PURE__ */ _jsx(form_default.Item, {
          label: "\u9650\u6D41\u65F6\u95F4\u7EA7",
          name: "timeunit",
          rules: [
            {
              required: true,
              message: "\u8BF7\u9009\u62E9\u9650\u6D41\u65F6\u95F4\u7EA7"
            }
          ],
          children: /* @__PURE__ */ _jsx(select_default, {
            onSelect: (e) => {
              setSelect(e);
            },
            children: time.map((item) => /* @__PURE__ */ _jsx(select_default.Option, {
              value: item.timeunit,
              children: item.timeunit === "second" ? "\u79D2" : "\u5206"
            }, item.id))
          })
        }),
        /* @__PURE__ */ _jsx(form_default.Item, {
          label: select === "second" ? "qps" : "qpm",
          name: select === "second" ? "qps" : "qpm",
          rules: [
            {
              required: true,
              message: "\u8BF7\u9009\u62E9\u9650\u6D41\u65F6\u95F4\u7EA7"
            }
          ],
          children: /* @__PURE__ */ _jsx(input_number_default, {})
        })
      ]
    })
  });
};
function Limit() {
  const [visible, setVisible] = useState(false);
  const [editVisible, setEditVisible] = useState(false);
  const [currentRecord, setCurrentRecord] = useState();
  const onSearch = (value) => console.log(value);
  const { data, error, loading, request: getList } = hooks_default(getLimitRuleList, {
    onSuccess: (data2) => {
      console.log(data2);
    }
  });
  useEffect(() => {
    (async function() {
      await getList();
    })();
  }, []);
  const { request: deleteRoute } = hooks_default(deleteLimitRuleList, {
    manual: true,
    onSuccess: (data2) => {
      message_default.success("\u5220\u9664\u6210\u529F");
    }
  });
  const confirm = async (item) => {
    await deleteRoute(item.id);
    await getList();
  };
  const columns = [
    {
      title: "\u7C7B\u578B",
      dataIndex: "type",
      key: "type",
      align: "center",
      render: (type) => /* @__PURE__ */ _jsx("a", {
        children: type
      })
    },
    {
      title: "key",
      key: "limitKey",
      align: "center",
      dataIndex: "limitKey",
      render: (key) => /* @__PURE__ */ _jsx(tag_default, {
        children: key
      })
    },
    {
      title: "\u9650\u6D41\u65F6\u95F4\u7EA7",
      key: "time",
      dataIndex: "timeunit",
      align: "center",
      render: (timeunit) => timeunit === "second" ? /* @__PURE__ */ _jsx(tag_default, {
        color: "blue",
        children: "\u79D2"
      }) : /* @__PURE__ */ _jsx(tag_default, {
        color: "green",
        children: "\u5206"
      })
    },
    {
      title: "\u6700\u5927\u8BF7\u6C42\u6570\u91CF",
      dataIndex: "qpm",
      key: "enabled",
      align: "center",
      render: (qpm, all, index) => qpm === null ? all.qps : qpm
    },
    {
      title: "\u64CD\u4F5C",
      key: "action",
      align: "center",
      render: (text, record) => /* @__PURE__ */ _jsxs(space_default, {
        size: "middle",
        children: [
          /* @__PURE__ */ _jsx("a", {
            onClick: () => {
              setCurrentRecord(record);
              setEditVisible(true);
            },
            children: "\u7F16\u8F91"
          }),
          /* @__PURE__ */ _jsx(popconfirm_default, {
            title: "\u4F60\u786E\u5B9A\u8981\u5220\u9664\u5417\uFF1F",
            okText: "\u786E\u5B9A",
            cancelText: "\u53D6\u6D88",
            onConfirm: () => confirm(text),
            children: /* @__PURE__ */ _jsx(button_default, {
              type: "link",
              danger: true,
              children: "\u5220\u9664"
            })
          })
        ]
      })
    }
  ];
  const showModal = () => {
    setVisible(true);
  };
  return /* @__PURE__ */ _jsx("div", {
    children: error ? /* @__PURE__ */ _jsxs("div", {
      children: [
        "request error: ",
        error.message
      ]
    }) : /* @__PURE__ */ _jsxs("div", {
      children: [
        /* @__PURE__ */ _jsxs("div", {
          className: import_index_module.default.headContainer,
          children: [
            /* @__PURE__ */ _jsx(Search, {
              placeholder: "\u8BF7\u8F93\u5165\u670D\u52A1\u540D\u6216\u8DEF\u7531\u65AD\u8A00",
              onSearch,
              style: {
                width: 200
              }
            }),
            /* @__PURE__ */ _jsx(button_default, {
              type: "primary",
              icon: /* @__PURE__ */ _jsx(PlusCircleOutlined_default, {}),
              onClick: showModal,
              className: import_index_module.default.button,
              children: "\u65B0\u589E\u89C4\u5219"
            })
          ]
        }),
        visible && /* @__PURE__ */ _jsx(AddRouterForm, {
          setVisible,
          refreshData: getList
        }),
        /* @__PURE__ */ _jsx(table_default, {
          columns,
          dataSource: data,
          loading,
          rowKey: (item) => item.id
        }),
        editVisible && currentRecord && /* @__PURE__ */ _jsx(EditRouteForm, {
          currentRecord,
          setEditVisible,
          refresh: getList
        })
      ]
    })
  });
}
export {
  Limit as default
};
