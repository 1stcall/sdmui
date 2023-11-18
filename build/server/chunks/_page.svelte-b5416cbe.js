import { c as create_ssr_component, h as each, d as add_attribute, e as escape } from './ssr-7f369224.js';

const css = {
  code: ".switches.svelte-1wp0dc{display:table;max-width:100%}.row.svelte-1wp0dc{display:table-row}.col.svelte-1wp0dc{display:table-cell;padding-top:10px}.firstcol.svelte-1wp0dc{display:table-cell;white-space:nowrap;padding-top:10px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<h1 data-svelte-h="svelte-elugta">Switches list</h1> <p data-svelte-h="svelte-wpwm9">This is the Switches list page for sdmui.</p> <form class="switches svelte-1wp0dc">${each(data.switches, ({ name, description, selected, editable, hasArgument, argumentType, argumentValue }) => {
    return `<div class="row svelte-1wp0dc"><td class="firstcol svelte-1wp0dc"><label${add_attribute("for", name, 0)}>${escape(name)}</label></td> <td class="col svelte-1wp0dc"><input${add_attribute("id", name, 0)} type="checkbox" ${!editable ? "disabled" : ""}${add_attribute("checked", selected, 1)}></td> ${hasArgument == true ? `<td class="col svelte-1wp0dc">${argumentType == "text" ? `<input type="text" ${!selected ? "disabled" : ""}${add_attribute("value", argumentValue, 0)}>` : `${argumentType == "file" ? `<input type="file" ${!selected ? "disabled" : ""}>` : `${argumentType == "ipAddress" ? `<input type="text" ${!selected ? "disabled" : ""} minlength="7" maxlength="15" size="15" pattern="${"^((\\d" + escape(2, true) + "|1\\d\\d|2[0-4]\\d|25[0-5])\\.)" + escape(3, true) + "(\\d" + escape(2, true) + "|1\\d\\d|2[0-4]\\d|25[0-5])$"}"${add_attribute("value", argumentValue, 0)}>` : `${argumentType == "multiFile" ? `<input type="file" ${!selected ? "disabled" : ""} multiple>` : ``}`}`}`} </td>` : `<td data-svelte-h="svelte-171oj0u"></td>`} <p>${escape(description)}</p> </div>`;
  })} </form>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-b5416cbe.js.map
