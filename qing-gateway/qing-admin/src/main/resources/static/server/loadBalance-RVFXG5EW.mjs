import {
  changeLoadBalance,
  getCurrentLoadBalance,
  getLoadBalance
} from "./chunk-BN2KOWVI.mjs";
import {
  badge_default,
  card_default,
  col_default,
  hooks_default,
  popconfirm_default,
  row_default
} from "./chunk-IQAM3D37.mjs";
import "./chunk-QYT7L57C.mjs";
import "./chunk-NISNRQWT.mjs";

// src/pages/loadBalance/index.tsx
import { jsx as _jsx } from "@ice/runtime/jsx-runtime";
import { useEffect } from "react";
function LoadBalance() {
  const { data, loading, request: getBalance } = hooks_default(getLoadBalance);
  const { data: select, request: selectBalance } = hooks_default(getCurrentLoadBalance);
  const { request: changeBalance } = hooks_default(changeLoadBalance, {
    onSuccess: (data2) => {
      console.log(data2);
    }
  });
  const handle = async (item) => {
    await changeBalance(item);
    await selectBalance();
  };
  useEffect(() => {
    (async () => {
      await Promise.all([
        getBalance(),
        selectBalance()
      ]);
    })();
  }, []);
  return /* @__PURE__ */ _jsx("div", {
    className: "site-card-wrapper",
    children: /* @__PURE__ */ _jsx(row_default, {
      gutter: 16,
      children: data == null ? void 0 : data.map((item, index) => /* @__PURE__ */ _jsx(col_default, {
        span: 8,
        children: item === select ? /* @__PURE__ */ _jsx(badge_default.Ribbon, {
          text: "\u5F53\u524D\u9009\u62E9\u7684\u7B56\u7565",
          color: "blue",
          children: /* @__PURE__ */ _jsx(card_default, {
            title: item,
            bordered: true,
            hoverable: true,
            style: {
              overflow: "hidden"
            },
            loading,
            children: "random"
          })
        }) : /* @__PURE__ */ _jsx(popconfirm_default, {
          title: "\u4F60\u786E\u5B9A\u8981\u66F4\u6539\u7B56\u7565\u5417",
          onConfirm: () => handle(item),
          okText: "Yes",
          cancelText: "No",
          children: /* @__PURE__ */ _jsx(card_default, {
            title: item,
            bordered: true,
            hoverable: true,
            style: {
              overflow: "hidden"
            },
            loading,
            children: "random"
          })
        })
      }, index))
    })
  });
}
var loadBalance_default = LoadBalance;
export {
  loadBalance_default as default
};
