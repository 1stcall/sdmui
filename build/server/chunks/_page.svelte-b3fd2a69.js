import { c as create_ssr_component, d as add_attribute, e as escape } from './ssr-7f369224.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<h1><img${add_attribute("src", data.os.icon, 0)} alt="${"Icon for " + escape(data.os.name, true) + " "}"> ${escape(data.os.os_name)}</h1> <div><p>${escape(data.os.description)}</p> <a${add_attribute("href", data.os.download_url, 0)}>download</a></div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-b3fd2a69.js.map
