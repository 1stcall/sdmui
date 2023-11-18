import { c as create_ssr_component, h as each, e as escape } from './ssr-7f369224.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<h1 data-svelte-h="svelte-w7vg44">OS list</h1> <p data-svelte-h="svelte-1h9u9ir">This is the OS list page for sdmui.</p> <ul>${each(data.summaries, ({ slug, name, description }) => {
    return `<li><a href="${"/oslist/" + escape(slug, true)}">${escape(name)}</a></li> <p style="text-indent: 2em;">${escape(description)}</p>`;
  })}</ul>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-9dae2848.js.map
