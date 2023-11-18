const switches = [
  {
    "switch": "1piboot",
    description: "Specify a 1piboot.conf file to use instead of the one in /usr/local/sdm/1piboot/1piboot.conf.",
    selected: false,
    editable: true,
    hasArgument: true,
    argumentType: "file",
    argumentValue: ""
  },
  {
    "switch": "aptcache",
    description: "Use APT caching. The argument is the IP address of the apt-cacher-ng server",
    selected: false,
    editable: true,
    hasArgument: true,
    argumentType: "ipAddress",
    argumentValue: ""
  },
  {
    "switch": "apt-dist-upgrade",
    description: "Some RasPiOS Bullseye images have a strange software configuration, which causes apt-get upgrade to fail. This switch forces sdm to use apt-get --dist-upgrade which updates correctly. [In the 2021-10-30 set of images, the 'with Desktop' versions have a set of problematic VLC modules installed.]",
    selected: true,
    editable: true,
    hasArgument: false
  },
  {
    "switch": "autologin",
    description: "Cause the user to autologin when the system (re)starts.",
    selected: true,
    editable: true,
    hasArgument: false
  },
  {
    "switch": "b0script",
    description: "Call the function do_b0script in script when burning. script will be called after the output has been burned, and operates in effectively a Phase 0 environment.",
    selected: false,
    editable: true,
    hasArgument: true,
    argumentType: "file",
    argumentValue: ""
  },
  {
    "switch": "b1script",
    description: "Like --b0script, but is called in an nspawn container.",
    selected: false,
    editable: true,
    hasArgument: true,
    argumentType: "file",
    argumentValue: ""
  },
  {
    "switch": "batch",
    description: "Do not provide an interactive command prompt inside the nspawn container.",
    selected: true,
    editable: false,
    hasArgument: false
  },
  {
    "switch": "bootscripts",
    description: "Directs sdm-firstboot to run the boot scripts in /usr/local/sdm/1piboot/0*-*.sh. If --bootscripts is specified when creating the sdm-enhanced IMG, every SD Card burned will run the boot scripts on First Boot. If not specified on IMG creation, it can be also be specified when burning the SD Card to run the boot scripts on that SD Card.",
    selected: false,
    editable: true,
    hasArgument: true,
    argumentType: "multiFile",
    argumentValue: ""
  },
  {
    "switch": "bupdate",
    description: "Used only on --burn command. item can be plugin: Check and update plugins",
    selected: false,
    editable: false,
    hasArgument: true,
    argumentType: "file",
    argumentValue: ""
  },
  {
    "switch": "chroot",
    description: "By default sdm uses systemd-nspawn to enter the container in Phase 1/post-install phases. Some (likely older) host OSes may have issues with that. If systemd-nspawn fails with an execve error, retry the command and add --chroot.",
    selected: false,
    editable: true,
    hasArgument: false
  },
  {
    "switch": "cscript",
    description: "Specifies the path to your Custom Phase Script, which will be run as described in the Custom Phase Script section below.",
    selected: false,
    editable: true,
    hasArgument: true,
    argumentType: "file",
    argumentValue: ""
  },
  {
    "switch": "csrc",
    description: "A source directory string that can be used in your Custom Phase Script. One use for this is to have a directory tree where all your customizations are kept, and pass in the directory tree to sdm with --csrc.",
    selected: false,
    editable: false,
    hasArgument: true,
    argumentType: "directory",
    argumentValue: ""
  }
];
function load() {
  return {
    switches: switches.map((switches2) => ({
      name: switches2.switch,
      description: switches2.description,
      selected: switches2.selected,
      editable: switches2.editable,
      hasArgument: switches2.hasArgument,
      argumentType: switches2.argumentType,
      argumentValue: switches2.argumentValue
    }))
  };
}

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 7;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-b5416cbe.js')).default;
const server_id = "src/routes/switches/+page.server.js";
const imports = ["_app/immutable/nodes/7.6aa1d2e0.js","_app/immutable/chunks/scheduler.ff2daed6.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/index.61e6c943.js"];
const stylesheets = ["_app/immutable/assets/7.75669a07.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=7-bf10966d.js.map
