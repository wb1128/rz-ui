(function(global, factory) {
  typeof exports === "object" && typeof module !== "undefined" ? factory(exports, require("vue")) : typeof define === "function" && define.amd ? define(["exports", "vue"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, factory(global.RzUI = {}, global.Vue));
})(this, function(exports2, vue) {
  "use strict";
  const RzButton = /* @__PURE__ */ vue.defineComponent({
    name: "RzButton",
    render() {
      return vue.createVNode("button", null, [vue.createTextVNode("jsx button")]);
    }
  });
  const entry = {
    install(app) {
      app.component(RzButton.name, RzButton);
    }
  };
  exports2.RzButton = RzButton;
  exports2.default = entry;
  Object.defineProperties(exports2, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
});
