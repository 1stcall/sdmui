const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.7c1aa097.js","app":"_app/immutable/entry/app.1ec1179d.js","imports":["_app/immutable/entry/start.7c1aa097.js","_app/immutable/chunks/scheduler.ff2daed6.js","_app/immutable/chunks/singletons.a0917e66.js","_app/immutable/entry/app.1ec1179d.js","_app/immutable/chunks/scheduler.ff2daed6.js","_app/immutable/chunks/index.61e6c943.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./chunks/0-7270424e.js')),
			__memo(() => import('./chunks/1-96d591e9.js')),
			__memo(() => import('./chunks/2-86ee548a.js')),
			__memo(() => import('./chunks/3-cd5dc5b4.js')),
			__memo(() => import('./chunks/4-26576d54.js')),
			__memo(() => import('./chunks/5-de2b9e01.js')),
			__memo(() => import('./chunks/6-9c5d8135.js')),
			__memo(() => import('./chunks/7-bf10966d.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/oslist",
				pattern: /^\/oslist\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/oslist/[slug]",
				pattern: /^\/oslist\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/switches",
				pattern: /^\/switches\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();

const prerendered = new Set([]);

export { manifest, prerendered };
//# sourceMappingURL=manifest.js.map
