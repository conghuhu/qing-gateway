import {
  PlusCircleOutlined_default
} from "./chunk-RKIYV4QL.mjs";
import {
  addRouteList,
  deleteRuleList,
  getRuleList,
  getServiceList,
  updateRouteList
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
  switch_default,
  table_default,
  tag_default
} from "./chunk-IQAM3D37.mjs";
import "./chunk-QYT7L57C.mjs";
import {
  __commonJS,
  __toESM
} from "./chunk-NISNRQWT.mjs";

// style-handler-namespace:D:\MainProject\Qing_Gateway\ice-app\src\pages\route\index.module.css
var require_index_module = __commonJS({
  "style-handler-namespace:D:\\MainProject\\Qing_Gateway\\ice-app\\src\\pages\\route\\index.module.css"(exports, module) {
    module.exports = {
      "headContainer": "headContainer--KDLGKrGo",
      "button": "button--ZCxSMfC1"
    };
  }
});

// src/pages/route/index.tsx
import { jsx as _jsx3, jsxs as _jsxs3 } from "@ice/runtime/jsx-runtime";
var import_index_module = __toESM(require_index_module());
import { useEffect as useEffect3, useState } from "react";

// src/components/AddRouteForm/index.tsx
import { jsx as _jsx, jsxs as _jsxs } from "@ice/runtime/jsx-runtime";
import { useEffect } from "react";
var AddRouteForm = ({ setVisible, refresh }) => {
  const { data, request: getList } = hooks_default(getServiceList, {
    onSuccess: (data2) => {
      console.log(data2[0]);
    }
  });
  const { request: addRoute, loading } = hooks_default(addRouteList, {
    manual: true,
    onSuccess: (data2) => {
      message_default.success("\u6DFB\u52A0\u6210\u529F");
    }
  });
  const [form] = form_default.useForm();
  useEffect(() => {
    (async function() {
      await getList();
    })();
  }, []);
  function onChange(value) {
    console.log("changed", value);
  }
  const handleOk = () => {
    form.validateFields().then(async (values) => {
      let message = await addRoute(values);
      await refresh();
      setVisible(false);
      form.resetFields();
    }).catch((info) => {
      console.log("Validate Failed:", info);
    });
  };
  return /* @__PURE__ */ _jsx(modal_default, {
    title: "\u6DFB\u52A0\u8DEF\u7531",
    open: true,
    okText: "\u786E\u8BA4\u6DFB\u52A0",
    cancelText: "\u53D6\u6D88",
    onCancel: () => setVisible(false),
    onOk: () => handleOk(),
    confirmLoading: loading,
    children: /* @__PURE__ */ _jsxs(form_default, {
      layout: "vertical",
      labelAlign: "right",
      form,
      children: [
        /* @__PURE__ */ _jsx(form_default.Item, {
          label: "\u9009\u62E9\u670D\u52A1\u540D\u79F0",
          name: "serviceName",
          rules: [
            {
              required: true,
              message: "\u8BF7\u9009\u62E9\u670D\u52A1\u540D\u79F0"
            }
          ],
          children: /* @__PURE__ */ _jsx(select_default, {
            children: data == null ? void 0 : data.map((item) => /* @__PURE__ */ _jsx(select_default.Option, {
              value: item.serviceName,
              children: item.serviceName
            }, item.id))
          })
        }),
        /* @__PURE__ */ _jsx(form_default.Item, {
          label: "\u8F93\u5165\u670D\u52A1\u4F18\u5148\u7EA7\u5927\u5C0F",
          name: "priority",
          rules: [
            {
              required: true,
              message: "\u8BF7\u8F93\u5165\u6570\u5B57!"
            }
          ],
          children: /* @__PURE__ */ _jsx(input_number_default, {
            placeholder: "\u8BF7\u8F93\u51650-100\u4E2D\u7684\u4E00\u4E2A\u6570\u5B57",
            min: 0,
            max: 100,
            onChange,
            style: {
              width: "100%"
            }
          })
        }),
        /* @__PURE__ */ _jsx(form_default.Item, {
          label: "\u8F93\u5165\u8DEF\u7531\u65AD\u8A00",
          name: "predicates",
          rules: [
            {
              required: true,
              message: "\u8BF7\u8F93\u5165\u8DEF\u7531\u65AD\u8A00\uFF01"
            }
          ],
          children: /* @__PURE__ */ _jsx(input_default, {
            placeholder: ""
          })
        })
      ]
    })
  });
};
var AddRouteForm_default = AddRouteForm;

// src/components/EditRouteForm/index.tsx
import { jsx as _jsx2, jsxs as _jsxs2 } from "@ice/runtime/jsx-runtime";
import { useEffect as useEffect2 } from "react";
var EditRouteForm = ({ currentRecord, setEditVisible, refresh }) => {
  const { data: serviceList, request: getList } = hooks_default(getServiceList);
  const { loading, request: update } = hooks_default(updateRouteList);
  const [form] = form_default.useForm();
  useEffect2(() => {
    form.setFieldsValue({
      ...currentRecord,
      serviceName: currentRecord.service.serviceName
    });
    (async function() {
      await getList();
    })();
  }, []);
  return /* @__PURE__ */ _jsx2(modal_default, {
    title: "\u66F4\u6539\u8DEF\u7531",
    open: true,
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
    children: /* @__PURE__ */ _jsxs2(form_default, {
      layout: "vertical",
      labelAlign: "right",
      form,
      children: [
        /* @__PURE__ */ _jsx2(form_default.Item, {
          label: "\u9009\u62E9\u670D\u52A1\u540D\u79F0",
          name: "serviceName",
          rules: [
            {
              required: true,
              message: "\u8BF7\u9009\u62E9\u670D\u52A1\u540D\u79F0"
            }
          ],
          children: /* @__PURE__ */ _jsx2(select_default, {
            children: serviceList == null ? void 0 : serviceList.map((item) => /* @__PURE__ */ _jsx2(select_default.Option, {
              value: item.serviceName,
              children: item.serviceName
            }, item.id))
          })
        }),
        /* @__PURE__ */ _jsx2(form_default.Item, {
          label: "\u8F93\u5165\u670D\u52A1\u4F18\u5148\u7EA7\u5927\u5C0F",
          name: "priority",
          rules: [
            {
              required: true,
              message: "\u8BF7\u8F93\u5165\u6570\u5B57"
            }
          ],
          children: /* @__PURE__ */ _jsx2(input_number_default, {
            placeholder: "\u8BF7\u8F93\u51650-100\u4E2D\u7684\u4E00\u4E2A\u6570\u5B57",
            min: 0,
            max: 100,
            style: {
              width: "100%"
            }
          })
        }),
        /* @__PURE__ */ _jsx2(form_default.Item, {
          label: "\u8F93\u5165\u8DEF\u7531\u65AD\u8A00",
          name: "predicates",
          rules: [
            {
              required: true,
              message: "\u8BF7\u8F93\u5165\u8DEF\u7531\u65AD\u8A00"
            }
          ],
          children: /* @__PURE__ */ _jsx2(input_default, {
            placeholder: ""
          })
        }),
        /* @__PURE__ */ _jsx2(form_default.Item, {
          label: "\u662F\u5426\u542F\u7528",
          name: "enabled",
          valuePropName: "checked",
          children: /* @__PURE__ */ _jsx2(switch_default, {})
        })
      ]
    })
  });
};
var EditRouteForm_default = EditRouteForm;

// src/pages/route/index.tsx
var { Search } = input_default;
function Route() {
  const [visible, setVisible] = useState(false);
  const [editVisible, setEditVisible] = useState(false);
  const [currentRecord, setCurrentRecord] = useState();
  const onSearch = (value) => console.log(value);
  const { data, error, loading, request: getList } = hooks_default(getRuleList, {
    onSuccess: (data2) => {
      console.log(data2);
    }
  });
  useEffect3(() => {
    (async function() {
      await getList();
    })();
  }, []);
  const { request: deleteRoute } = hooks_default(deleteRuleList, {
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
      title: "\u670D\u52A1\u540D\u79F0",
      dataIndex: "service",
      key: "service",
      align: "center",
      render: (service) => /* @__PURE__ */ _jsx3("a", {
        children: service.serviceName
      })
    },
    {
      title: "\u8DEF\u7531\u65AD\u8A00",
      key: "predicates",
      align: "center",
      dataIndex: "predicates"
    },
    {
      title: "\u4F18\u5148\u7EA7",
      key: "priority",
      dataIndex: "priority",
      align: "center",
      render: (priority) => /* @__PURE__ */ _jsx3(tag_default, {
        color: "green",
        children: priority
      })
    },
    {
      title: "\u662F\u5426\u542F\u7528",
      dataIndex: "enabled",
      key: "enabled",
      align: "center",
      render: (enabled) => enabled ? /* @__PURE__ */ _jsx3("span", {
        children: "\u5F00"
      }) : /* @__PURE__ */ _jsx3("span", {
        children: "\u5173"
      })
    },
    {
      title: "\u521B\u5EFA\u65F6\u95F4",
      dataIndex: "createdTime",
      key: "createdTime",
      align: "center"
    },
    {
      title: "\u64CD\u4F5C",
      key: "action",
      align: "center",
      render: (text, record) => /* @__PURE__ */ _jsxs3(space_default, {
        size: "middle",
        children: [
          /* @__PURE__ */ _jsx3("a", {
            onClick: () => {
              setCurrentRecord(record);
              setEditVisible(true);
            },
            children: "\u7F16\u8F91"
          }),
          /* @__PURE__ */ _jsx3(popconfirm_default, {
            title: "\u4F60\u786E\u5B9A\u8981\u5220\u9664\u5417\uFF1F",
            okText: "\u786E\u5B9A",
            cancelText: "\u53D6\u6D88",
            onConfirm: () => confirm(text),
            children: /* @__PURE__ */ _jsx3(button_default, {
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
  return /* @__PURE__ */ _jsx3("div", {
    children: error ? /* @__PURE__ */ _jsxs3("div", {
      children: [
        "request error: ",
        error.message
      ]
    }) : /* @__PURE__ */ _jsxs3("div", {
      children: [
        /* @__PURE__ */ _jsxs3("div", {
          className: import_index_module.default.headContainer,
          children: [
            /* @__PURE__ */ _jsx3(Search, {
              placeholder: "\u8BF7\u8F93\u5165\u670D\u52A1\u540D\u6216\u8DEF\u7531\u65AD\u8A00",
              onSearch,
              style: {
                width: 200
              }
            }),
            /* @__PURE__ */ _jsx3(button_default, {
              type: "primary",
              className: import_index_module.default.button,
              icon: /* @__PURE__ */ _jsx3(PlusCircleOutlined_default, {}),
              onClick: showModal,
              children: "\u65B0\u589E\u89C4\u5219"
            })
          ]
        }),
        visible && /* @__PURE__ */ _jsx3(AddRouteForm_default, {
          setVisible,
          refresh: getList
        }),
        /* @__PURE__ */ _jsx3(table_default, {
          columns,
          dataSource: data,
          loading,
          rowKey: (item) => item.id
        }),
        editVisible && currentRecord && /* @__PURE__ */ _jsx3(EditRouteForm_default, {
          currentRecord,
          setEditVisible,
          refresh: getList
        })
      ]
    })
  });
}
export {
  Route as default
};
