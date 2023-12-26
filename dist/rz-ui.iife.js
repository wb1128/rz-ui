var RzUI = function(exports, vue) {
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
  exports.RzButton = RzButton;
  exports.default = entry;
  Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
  return exports;
}({}, Vue);
