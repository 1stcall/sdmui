import { d as data } from './pios_list-6db0b0c9.js';

function load() {
  return {
    summaries: data.map((os) => ({
      slug: os.slug,
      name: os.os_name,
      description: os.description
    }))
  };
}

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 5;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-9dae2848.js')).default;
const server_id = "src/routes/oslist/+page.server.js";
const imports = ["_app/immutable/nodes/5.3ea67cbd.js","_app/immutable/chunks/scheduler.ff2daed6.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/index.61e6c943.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=5-de2b9e01.js.map
