import { c as create_ssr_component } from './ssr-7f369224.js';

const css = {
  code: "@media(min-width: 640px){.layout.svelte-1ubx6uq{display:grid;gap:2em;grid-template-columns:1fr 16em}}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="layout svelte-1ubx6uq"><main>${slots.default ? slots.default({}) : ``}</main> </div>`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-5e26e9a9.js.map
