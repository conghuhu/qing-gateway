import {
  getServiceInstanceList,
  getServiceList,
  updateInstance
} from "./chunk-BN2KOWVI.mjs";
import {
  button_default,
  form_default,
  hooks_default,
  input_default,
  input_number_default,
  modal_default,
  popconfirm_default,
  space_default,
  table_default,
  typography_default
} from "./chunk-IQAM3D37.mjs";
import "./chunk-QYT7L57C.mjs";
import {
  __commonJS,
  __toESM
} from "./chunk-NISNRQWT.mjs";

// style-handler-namespace:D:\MainProject\Qing_Gateway\ice-app\src\pages\serviceAndInstance\index.module.css
var require_index_module = __commonJS({
  "style-handler-namespace:D:\\MainProject\\Qing_Gateway\\ice-app\\src\\pages\\serviceAndInstance\\index.module.css"(exports, module) {
    module.exports = {
      "headContainer": "headContainer--gHf_zzpS",
      "button": "button--V7zr6NSx",
      "editable-row": "editable-row--XzwjOClS",
      "ant-form-item-explain": "ant-form-item-explain--A5MBVyZv"
    };
  }
});

// src/pages/serviceAndInstance/index.tsx
import { jsx as _jsx, jsxs as _jsxs } from "@ice/runtime/jsx-runtime";
import { useEffect, useState } from "react";
var import_index_module = __toESM(require_index_module());
var { Column } = table_default;
var { Search } = input_default;
var EditableCell = ({ editing, dataIndex, title, inputType, record, index, children, ...restProps }) => {
  const inputNode = inputType === "number" ? /* @__PURE__ */ _jsx(input_number_default, {
    min: 0,
    max: 100
  }) : /* @__PURE__ */ _jsx(input_default, {});
  return /* @__PURE__ */ _jsx("td", {
    ...restProps,
    children: editing ? /* @__PURE__ */ _jsx(form_default.Item, {
      name: dataIndex,
      style: {
        margin: 0
      },
      rules: [
        {
          required: true,
          message: `Please Input ${title}!`
        }
      ],
      children: inputNode
    }) : children
  });
};
var ServiceInstanceModal = ({ serviceId, serviceName, setVisible }) => {
  const { data, loading, request: getServiceInstanceListRequest } = hooks_default(getServiceInstanceList);
  const { request: update } = hooks_default(updateInstance);
  const [form] = form_default.useForm();
  const [editingKey, setEditingKey] = useState("");
  useEffect(() => {
    (async function() {
      await getServiceInstanceListRequest(serviceId);
    })();
  }, []);
  const columns = [
    {
      title: "IP",
      dataIndex: "ip",
      key: "ip",
      align: "center"
    },
    {
      title: "\u7AEF\u53E3",
      dataIndex: "port",
      key: "port",
      align: "center"
    },
    {
      title: "\u534F\u8BAE",
      dataIndex: "protocol",
      key: "protocal",
      align: "center",
      editable: true
    },
    {
      title: "\u7248\u672C\u53F7",
      dataIndex: "version",
      key: "version",
      align: "center",
      editable: true
    },
    {
      title: "\u96C6\u7FA4\u540D\u79F0",
      dataIndex: "clustername",
      key: "clustername",
      align: "center",
      editable: true
    },
    {
      title: "\u6743\u91CD",
      dataIndex: "weight",
      key: "weight",
      align: "center",
      editable: true
    },
    {
      title: "\u521B\u5EFA\u65F6\u95F4",
      dataIndex: "createdTime",
      key: "createdTime",
      align: "center"
    },
    {
      title: "\u64CD\u4F5C",
      dataIndex: "operation",
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? /* @__PURE__ */ _jsxs("div", {
          style: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column"
          },
          children: [
            /* @__PURE__ */ _jsx(typography_default.Link, {
              onClick: () => save(record.id),
              style: {
                marginRight: 8
              },
              children: "\u4FDD\u5B58"
            }),
            /* @__PURE__ */ _jsx(popconfirm_default, {
              title: "\u786E\u5B9A\u8981\u53D6\u6D88\u7F16\u8F91\u5417?",
              onConfirm: cancel,
              children: /* @__PURE__ */ _jsx(button_default, {
                danger: true,
                size: "small",
                type: "link",
                children: "\u53D6\u6D88"
              })
            })
          ]
        }) : /* @__PURE__ */ _jsx(typography_default.Link, {
          disabled: editingKey !== "",
          onClick: () => edit(record),
          children: /* @__PURE__ */ _jsx(button_default, {
            danger: true,
            size: "small",
            type: "link",
            children: "\u7F16\u8F91"
          })
        });
      }
    }
  ];
  const cancel = () => {
    setEditingKey("");
  };
  const isEditing = (record) => {
    return record.id === editingKey;
  };
  const edit = (record) => {
    form.setFieldsValue({
      ...record
    });
    setEditingKey(record.id);
  };
  const save = async (key) => {
    try {
      const row = await form.validateFields();
      const newData = [
        ...data
      ];
      const index = newData.findIndex((item) => key === item.id);
      if (index > -1) {
        const item = newData[index];
        delete item.createdTime;
        delete item.id;
        delete item.serviceId;
        await update({
          ...item,
          ...row,
          serviceName,
          clusterName: item.clustername
        });
        await getServiceInstanceListRequest(serviceId);
        setEditingKey("");
      }
    } catch (errInfo) {
      console.log("Validate Failed:", errInfo);
    }
  };
  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record) => ({
        record,
        inputType: col.dataIndex === "weight" ? "number" : "text",
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record)
      })
    };
  });
  return /* @__PURE__ */ _jsx(modal_default, {
    width: 1e3,
    title: `${serviceName}\u670D\u52A1\u5B9E\u4F8B\u5217\u8868`,
    open: true,
    onCancel: () => setVisible(false),
    footer: null,
    children: /* @__PURE__ */ _jsx(form_default, {
      form,
      children: /* @__PURE__ */ _jsx(table_default, {
        dataSource: data,
        loading,
        rowKey: (record) => record.id,
        columns: mergedColumns,
        bordered: true,
        rowClassName: import_index_module.default["editable-row"],
        components: {
          body: {
            cell: EditableCell
          }
        }
      })
    })
  });
};
function ServiceAndInstance() {
  const { data, loading, request: getList } = hooks_default(getServiceList);
  const [visible, setVisible] = useState(false);
  const [serviceName, setServiceName] = useState("");
  const [serviceId, setServiceId] = useState(-1);
  useEffect(() => {
    (async function() {
      await getList();
    })();
  }, []);
  const columns = [
    {
      title: "\u670D\u52A1\u540D\u79F0",
      dataIndex: "serviceName",
      key: "serviceName",
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
      title: "\u63CF\u8FF0",
      dataIndex: "description",
      key: "description",
      align: "center"
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
      render: (text, record) => /* @__PURE__ */ _jsx(space_default, {
        size: "middle",
        children: /* @__PURE__ */ _jsx(button_default, {
          className: import_index_module.default.button,
          type: "primary",
          onClick: () => {
            setServiceName(record.serviceName);
            setServiceId(record.id);
            setVisible(true);
          },
          children: "\u670D\u52A1\u5B9E\u4F8B"
        })
      })
    }
  ];
  return /* @__PURE__ */ _jsxs("div", {
    children: [
      /* @__PURE__ */ _jsx("div", {
        className: import_index_module.default.headContainer,
        children: /* @__PURE__ */ _jsx(Search, {
          placeholder: "\u8BF7\u8F93\u5165\u670D\u52A1\u540D",
          onSearch: () => {
          },
          style: {
            width: 200
          }
        })
      }),
      visible && /* @__PURE__ */ _jsx(ServiceInstanceModal, {
        serviceId,
        serviceName,
        setVisible
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
  ServiceAndInstance as default
};
