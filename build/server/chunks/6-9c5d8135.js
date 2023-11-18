import { e as error } from './index-2b68e648.js';
import { d as data } from './pios_list-6db0b0c9.js';

function load({ params }) {
  const os = data.find((data2) => data2.slug === params.slug);
  if (!os)
    throw error(404);
  return {
    os
  };
}

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 6;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-b3fd2a69.js')).default;
const server_id = "src/routes/oslist/[slug]/+page.server.js";
const imports = ["_app/immutable/nodes/6.eb254485.js","_app/immutable/chunks/scheduler.ff2daed6.js","_app/immutable/chunks/index.61e6c943.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=6-9c5d8135.js.map
