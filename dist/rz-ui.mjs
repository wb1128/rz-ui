import { defineComponent, createVNode, createTextVNode } from "vue";
const RzButton = /* @__PURE__ */ defineComponent({
  name: "RzButton",
  render() {
    return createVNode("button", null, [createTextVNode("jsx button")]);
  }
});
const entry = {
  install(app) {
    app.component(RzButton.name, RzButton);
  }
};
export {
  RzButton,
  entry as default
};
