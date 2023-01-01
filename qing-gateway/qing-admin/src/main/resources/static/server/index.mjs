import {
  Links,
  Main,
  Meta,
  Scripts,
  Title,
  createAxiosInstance,
  defineAppConfig,
  history,
  message_default,
  runtime_default,
  setAxiosInstance
} from "./chunk-IQAM3D37.mjs";
import "./chunk-QYT7L57C.mjs";
import {
  __export
} from "./chunk-NISNRQWT.mjs";

// .ice/env.server.ts
process.env.ICE_CORE_MODE = "production";
process.env.ICE_CORE_ROUTER = "true";
process.env.ICE_CORE_ERROR_BOUNDARY = "false";
process.env.ICE_CORE_INITIAL_DATA = "true";
process.env.ICE_CORE_DEV_PORT = "undefined";

// .ice/entry.server.ts
import * as runtime2 from "@ice/runtime/server";

// node_modules/.pnpm/@ice+plugin-request@1.0.0_biqbaboplfbrettd7655fr4n2y/node_modules/@ice/plugin-request/esm/runtime.js
var EXPORT_NAME = "requestConfig";
var runtime = async ({ appContext }) => {
  const { appExport } = appContext;
  const exported = appExport[EXPORT_NAME];
  const requestConfig2 = (typeof exported === "function" ? await exported() : exported) || {};
  if (Array.isArray(requestConfig2)) {
    requestConfig2.forEach((requestItem) => {
      const instanceName = requestItem.instanceName ? requestItem.instanceName : "default";
      if (instanceName) {
        const axiosInstance = createAxiosInstance(instanceName)[instanceName];
        setAxiosInstance(requestItem, axiosInstance);
      }
    });
  } else {
    const axiosInstance = createAxiosInstance().default;
    setAxiosInstance(requestConfig2, axiosInstance);
  }
};
var runtime_default2 = runtime;

// .ice/runtimeModules.ts
var statics = [
  runtime_default2
];
var commons = [
  runtime_default
];

// src/app.ts
var app_exports = {};
__export(app_exports, {
  default: () => app_default,
  requestConfig: () => requestConfig
});

// node_modules/.pnpm/@ice+plugin-request@1.0.0_biqbaboplfbrettd7655fr4n2y/node_modules/@ice/plugin-request/esm/types.js
function defineRequestConfig(configOrDefineConfig) {
  if (typeof configOrDefineConfig === "function") {
    return configOrDefineConfig();
  }
  return configOrDefineConfig;
}

// src/app.ts
var app_default = defineAppConfig(() => ({
  app: {
    rootId: "ice-container"
  },
  router: {
    type: "hash"
  }
}));
var requestConfig = defineRequestConfig({
  baseURL: "http://localhost:8081",
  interceptors: {
    request: {
      onConfig: (config) => {
        const token = localStorage.getItem("token") || "";
        if (token) {
          config.headers = {
            ...config.headers,
            Authorization: `Bearer ${token}`
          };
        }
        return config;
      },
      onError: (error) => {
        return Promise.reject(error);
      }
    },
    response: {
      onConfig: (response) => {
        if (!response.data.success) {
          message_default.warning(response.data.message);
          return Promise.reject(response.data.message);
        }
        return {
          ...response,
          data: response.data.result
        };
      },
      onError: (error) => {
        var _a, _b, _c;
        if ((_a = error.response) == null ? void 0 : _a.data.message) {
          console.error(error.response);
          message_default.error(error.response.data.message);
        }
        if (((_b = error.response) == null ? void 0 : _b.status) === 401) {
          (_c = history) == null ? void 0 : _c.push("/login");
        }
        return Promise.reject(error);
      }
    }
  }
});

// src/document.tsx
import { jsx as _jsx, jsxs as _jsxs } from "@ice/runtime/jsx-runtime";
function Document() {
  return /* @__PURE__ */ _jsxs("html", {
    children: [
      /* @__PURE__ */ _jsxs("head", {
        children: [
          /* @__PURE__ */ _jsx("meta", {
            charSet: "utf-8"
          }),
          /* @__PURE__ */ _jsx("title", {
            children: "qing-gateway"
          }),
          /* @__PURE__ */ _jsx("meta", {
            name: "description",
            content: "qing-gateway"
          }),
          /* @__PURE__ */ _jsx("link", {
            rel: "icon",
            href: "/favicon.ico"
          }),
          /* @__PURE__ */ _jsx("meta", {
            name: "viewport",
            content: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
          }),
          /* @__PURE__ */ _jsx(Meta, {}),
          /* @__PURE__ */ _jsx(Title, {}),
          /* @__PURE__ */ _jsx(Links, {})
        ]
      }),
      /* @__PURE__ */ _jsxs("body", {
        children: [
          /* @__PURE__ */ _jsx(Main, {}),
          /* @__PURE__ */ _jsx(Scripts, {})
        ]
      })
    ]
  });
}

// asset-manifest:virtual:assets-manifest.json
var virtual_assets_manifest_default = { publicPath: "/", entries: { main: ["js/framework.js", "js/69.js", "css/main.css", "js/main.js"] }, pages: { layout: ["js/407.js", "js/707.js", "js/437.js", "js/515.js", "js/70.js", "js/450.js", "js/470.js", "js/999.js", "js/876.js", "js/267.js", "js/262.js", "js/849.js", "js/p_layout.js"], "serviceandinstance-index": ["js/407.js", "js/707.js", "js/437.js", "js/515.js", "js/70.js", "js/450.js", "js/733.js", "js/193.js", "js/470.js", "js/999.js", "js/431.js", "css/p_serviceandinstance-index.css", "js/p_serviceandinstance-index.js"], "gatewaynode-index": ["js/407.js", "js/707.js", "js/437.js", "js/515.js", "js/70.js", "js/733.js", "js/193.js", "css/p_gatewaynode-index.css", "js/p_gatewaynode-index.js"], "loadbalance-index": ["js/407.js", "js/707.js", "js/515.js", "js/267.js", "js/382.js", "js/p_loadbalance-index.js"], "logpage-index": ["js/407.js", "js/707.js", "js/437.js", "js/515.js", "js/70.js", "js/733.js", "js/193.js", "css/p_logpage-index.css", "js/p_logpage-index.js"], "config-index": ["js/407.js", "js/707.js", "js/437.js", "js/450.js", "js/470.js", "js/p_config-index.js"], "limit-index": ["js/407.js", "js/707.js", "js/437.js", "js/515.js", "js/70.js", "js/450.js", "js/733.js", "js/193.js", "js/470.js", "js/999.js", "js/737.js", "css/p_limit-index.css", "js/p_limit-index.js"], "login-index": ["js/407.js", "js/707.js", "js/437.js", "js/450.js", "js/733.js", "css/p_login-index.css", "js/p_login-index.js"], "route-index": ["js/407.js", "js/707.js", "js/437.js", "js/515.js", "js/70.js", "js/450.js", "js/733.js", "js/193.js", "js/470.js", "js/999.js", "js/737.js", "css/p_route-index.css", "js/p_route-index.js"], menuconfig: ["js/262.js", "js/p_menuconfig.js"], index: ["css/p_index.css", "js/p_index.js"], $: ["js/407.js", "js/876.js", "js/p_$.js"] }, assets: { "src/assets/login4.svg": "d3cff117" } };

// .ice/routes.ts
var routes_default = [
  {
    path: "",
    load: () => import(
      /* webpackChunkName: "p_layout" */
      "./layout-NBHEMTK3.mjs"
    ),
    componentName: "layout",
    index: void 0,
    id: "layout",
    exact: true,
    exports: [
      "default"
    ],
    layout: true,
    children: [
      {
        path: "serviceAndInstance",
        load: () => import(
          /* webpackChunkName: "p_serviceandinstance-index" */
          "./serviceAndInstance-YWPL5647.mjs"
        ),
        componentName: "serviceandinstance-index",
        index: true,
        id: "serviceAndInstance/index",
        exact: true,
        exports: [
          "default"
        ]
      },
      {
        path: "gatewayNode",
        load: () => import(
          /* webpackChunkName: "p_gatewaynode-index" */
          "./gatewayNode-V7A5VRCP.mjs"
        ),
        componentName: "gatewaynode-index",
        index: true,
        id: "gatewayNode/index",
        exact: true,
        exports: [
          "default"
        ]
      },
      {
        path: "loadBalance",
        load: () => import(
          /* webpackChunkName: "p_loadbalance-index" */
          "./loadBalance-RVFXG5EW.mjs"
        ),
        componentName: "loadbalance-index",
        index: true,
        id: "loadBalance/index",
        exact: true,
        exports: [
          "default"
        ]
      },
      {
        path: "logPage",
        load: () => import(
          /* webpackChunkName: "p_logpage-index" */
          "./logPage-JE6CW62F.mjs"
        ),
        componentName: "logpage-index",
        index: true,
        id: "logPage/index",
        exact: true,
        exports: [
          "default"
        ]
      },
      {
        path: "config",
        load: () => import(
          /* webpackChunkName: "p_config-index" */
          "./config-AED4AQWJ.mjs"
        ),
        componentName: "config-index",
        index: true,
        id: "config/index",
        exact: true,
        exports: [
          "default"
        ]
      },
      {
        path: "limit",
        load: () => import(
          /* webpackChunkName: "p_limit-index" */
          "./limit-X5FRNSSR.mjs"
        ),
        componentName: "limit-index",
        index: true,
        id: "limit/index",
        exact: true,
        exports: [
          "default"
        ]
      },
      {
        path: "login",
        load: () => import(
          /* webpackChunkName: "p_login-index" */
          "./login-JUVWP7FZ.mjs"
        ),
        componentName: "login-index",
        index: true,
        id: "login/index",
        exact: true,
        exports: [
          "default"
        ]
      },
      {
        path: "route",
        load: () => import(
          /* webpackChunkName: "p_route-index" */
          "./route-NISLGHET.mjs"
        ),
        componentName: "route-index",
        index: true,
        id: "route/index",
        exact: true,
        exports: [
          "default"
        ]
      },
      {
        path: "menuConfig",
        load: () => import(
          /* webpackChunkName: "p_menuconfig" */
          "./menuConfig-5QG5HWGI.mjs"
        ),
        componentName: "menuconfig",
        index: void 0,
        id: "menuConfig",
        exact: true,
        exports: [
          "asideMenuConfig"
        ]
      },
      {
        path: "",
        load: () => import(
          /* webpackChunkName: "p_index" */
          "./pages-DHGE5ZM5.mjs"
        ),
        componentName: "index",
        index: true,
        id: "index",
        exact: true,
        exports: [
          "default"
        ]
      },
      {
        path: "*",
        load: () => import(
          /* webpackChunkName: "p_$" */
          "./$-N74AODT3.mjs"
        ),
        componentName: "$",
        index: void 0,
        id: "$",
        exact: true,
        exports: [
          "default"
        ]
      }
    ]
  }
];

// .ice/routes-config.bundle.mjs
var routes_config_default = {};

// .ice/entry.server.ts
var runtimeModules = {
  commons,
  statics
};
var getRouterBasename = () => {
  var _a, _b, _c;
  const appConfig = runtime2.getAppConfig(app_exports);
  return (_c = (_b = (_a = appConfig == null ? void 0 : appConfig.router) == null ? void 0 : _a.basename) != null ? _b : "/") != null ? _c : "";
};
var setRuntimeEnv = (renderMode) => {
  if (renderMode === "SSG") {
    process.env.ICE_CORE_SSG = "true";
  } else {
    process.env.ICE_CORE_SSR = "true";
  }
};
async function renderToHTML2(requestContext, options = {}) {
  const { documentOnly, renderMode = "SSR", basename, serverOnlyBasename, routePath, disableFallback } = options;
  setRuntimeEnv(renderMode);
  return await runtime2.renderToHTML(requestContext, {
    app: app_exports,
    assetsManifest: virtual_assets_manifest_default,
    routes: routes_default,
    runtimeModules,
    Document,
    serverOnlyBasename,
    basename: basename || getRouterBasename(),
    documentOnly,
    renderMode,
    routePath,
    disableFallback,
    routesConfig: routes_config_default
  });
}
async function renderToResponse2(requestContext, options = {}) {
  const { documentOnly, renderMode = "SSR", basename, serverOnlyBasename, disableFallback } = options;
  setRuntimeEnv(options);
  runtime2.renderToResponse(requestContext, {
    app: app_exports,
    assetsManifest: virtual_assets_manifest_default,
    routes: routes_default,
    runtimeModules,
    Document,
    serverOnlyBasename,
    basename: basename || getRouterBasename(),
    documentOnly,
    renderMode,
    disableFallback,
    routesConfig: routes_config_default
  });
}
export {
  renderToHTML2 as renderToHTML,
  renderToResponse2 as renderToResponse
};
