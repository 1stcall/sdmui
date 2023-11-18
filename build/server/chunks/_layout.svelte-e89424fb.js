import { c as create_ssr_component, v as validate_component, b as createEventDispatcher, d as add_attribute, e as escape$1 } from './ssr-7f369224.js';

/*! js-cookie v3.0.5 | MIT */
/* eslint-disable no-var */
function assign (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
      target[key] = source[key];
    }
  }
  return target
}
/* eslint-enable no-var */

/* eslint-disable no-var */
var defaultConverter = {
  read: function (value) {
    if (value[0] === '"') {
      value = value.slice(1, -1);
    }
    return value.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent)
  },
  write: function (value) {
    return encodeURIComponent(value).replace(
      /%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,
      decodeURIComponent
    )
  }
};
/* eslint-enable no-var */

/* eslint-disable no-var */

function init (converter, defaultAttributes) {
  function set (name, value, attributes) {
    if (typeof document === 'undefined') {
      return
    }

    attributes = assign({}, defaultAttributes, attributes);

    if (typeof attributes.expires === 'number') {
      attributes.expires = new Date(Date.now() + attributes.expires * 864e5);
    }
    if (attributes.expires) {
      attributes.expires = attributes.expires.toUTCString();
    }

    name = encodeURIComponent(name)
      .replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent)
      .replace(/[()]/g, escape);

    var stringifiedAttributes = '';
    for (var attributeName in attributes) {
      if (!attributes[attributeName]) {
        continue
      }

      stringifiedAttributes += '; ' + attributeName;

      if (attributes[attributeName] === true) {
        continue
      }

      // Considers RFC 6265 section 5.2:
      // ...
      // 3.  If the remaining unparsed-attributes contains a %x3B (";")
      //     character:
      // Consume the characters of the unparsed-attributes up to,
      // not including, the first %x3B (";") character.
      // ...
      stringifiedAttributes += '=' + attributes[attributeName].split(';')[0];
    }

    return (document.cookie =
      name + '=' + converter.write(value, name) + stringifiedAttributes)
  }

  function get (name) {
    if (typeof document === 'undefined' || (arguments.length && !name)) {
      return
    }

    // To prevent the for loop in the first place assign an empty array
    // in case there are no cookies at all.
    var cookies = document.cookie ? document.cookie.split('; ') : [];
    var jar = {};
    for (var i = 0; i < cookies.length; i++) {
      var parts = cookies[i].split('=');
      var value = parts.slice(1).join('=');

      try {
        var found = decodeURIComponent(parts[0]);
        jar[found] = converter.read(value, found);

        if (name === found) {
          break
        }
      } catch (e) {}
    }

    return name ? jar[name] : jar
  }

  return Object.create(
    {
      set,
      get,
      remove: function (name, attributes) {
        set(
          name,
          '',
          assign({}, attributes, {
            expires: -1
          })
        );
      },
      withAttributes: function (attributes) {
        return init(this.converter, assign({}, this.attributes, attributes))
      },
      withConverter: function (converter) {
        return init(assign({}, this.converter, converter), this.attributes)
      }
    },
    {
      attributes: { value: Object.freeze(defaultAttributes) },
      converter: { value: Object.freeze(converter) }
    }
  )
}

init(defaultConverter, { path: '/' });

const Banner = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let choicesMerged;
  let choicesArr;
  createEventDispatcher();
  let { cookieName = null } = $$props;
  let { canRejectCookies = false } = $$props;
  let { showEditIcon = true } = $$props;
  let { acceptLabel = "Accept cookies" } = $$props;
  let { rejectLabel = "Reject cookies" } = $$props;
  let { settingsLabel = "Cookie settings" } = $$props;
  let { closeLabel = "Close settings" } = $$props;
  let { editLabel = "Edit cookie settings" } = $$props;
  let { visible = true } = $$props;
  let shown = false;
  let { heading = "GDPR Notice" } = $$props;
  let { description = "We use cookies to offer a better browsing experience, analyze site traffic, personalize content, and serve targeted advertisements. Please review our privacy policy & cookies information page. By clicking accept, you consent to our privacy policy & use of cookies." } = $$props;
  let { cookieConfig = {} } = $$props;
  let { choices = {} } = $$props;
  const choicesDefaults = {
    necessary: {
      label: "Necessary cookies",
      description: "Used for cookie control. Can't be turned off.",
      value: true
    },
    tracking: {
      label: "Tracking cookies",
      description: "Used for advertising purposes.",
      value: true
    },
    analytics: {
      label: "Analytics cookies",
      description: "Used to control Google Analytics, a 3rd party tool offered by Google to track user behavior.",
      value: true
    },
    marketing: {
      label: "Marketing cookies",
      description: "Used for marketing data.",
      value: true
    }
  };
  function show() {
    shown = visible;
  }
  if ($$props.cookieName === void 0 && $$bindings.cookieName && cookieName !== void 0)
    $$bindings.cookieName(cookieName);
  if ($$props.canRejectCookies === void 0 && $$bindings.canRejectCookies && canRejectCookies !== void 0)
    $$bindings.canRejectCookies(canRejectCookies);
  if ($$props.showEditIcon === void 0 && $$bindings.showEditIcon && showEditIcon !== void 0)
    $$bindings.showEditIcon(showEditIcon);
  if ($$props.acceptLabel === void 0 && $$bindings.acceptLabel && acceptLabel !== void 0)
    $$bindings.acceptLabel(acceptLabel);
  if ($$props.rejectLabel === void 0 && $$bindings.rejectLabel && rejectLabel !== void 0)
    $$bindings.rejectLabel(rejectLabel);
  if ($$props.settingsLabel === void 0 && $$bindings.settingsLabel && settingsLabel !== void 0)
    $$bindings.settingsLabel(settingsLabel);
  if ($$props.closeLabel === void 0 && $$bindings.closeLabel && closeLabel !== void 0)
    $$bindings.closeLabel(closeLabel);
  if ($$props.editLabel === void 0 && $$bindings.editLabel && editLabel !== void 0)
    $$bindings.editLabel(editLabel);
  if ($$props.visible === void 0 && $$bindings.visible && visible !== void 0)
    $$bindings.visible(visible);
  if ($$props.heading === void 0 && $$bindings.heading && heading !== void 0)
    $$bindings.heading(heading);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.cookieConfig === void 0 && $$bindings.cookieConfig && cookieConfig !== void 0)
    $$bindings.cookieConfig(cookieConfig);
  if ($$props.choices === void 0 && $$bindings.choices && choices !== void 0)
    $$bindings.choices(choices);
  if ($$props.show === void 0 && $$bindings.show && show !== void 0)
    $$bindings.show(show);
  choicesMerged = Object.assign({}, choicesDefaults, choices);
  choicesArr = Object.values(choicesMerged).map((item, index) => {
    return Object.assign({}, item, { id: Object.keys(choicesMerged)[index] });
  });
  choicesArr.reduce(
    (result, item) => {
      result[item.id] = item.value ? item.value : false;
      return result;
    },
    {}
  );
  choicesArr.reduce(
    (result, item) => {
      result[item.id] = item.id === "necessary";
      return result;
    },
    {}
  );
  return `  ${showEditIcon ? `<button class="cookieConsentToggle" part="toggle"${add_attribute("aria-label", editLabel, 0)}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor"><path d="M510.52 255.82c-69.97-.85-126.47-57.69-126.47-127.86-70.17
        0-127-56.49-127.86-126.45-27.26-4.14-55.13.3-79.72 12.82l-69.13
        35.22a132.221 132.221 0 0 0-57.79 57.81l-35.1 68.88a132.645 132.645 0 0
        0-12.82 80.95l12.08 76.27a132.521 132.521 0 0 0 37.16 72.96l54.77
        54.76a132.036 132.036 0 0 0 72.71 37.06l76.71 12.15c27.51 4.36 55.7-.11
        80.53-12.76l69.13-35.21a132.273 132.273 0 0 0
        57.79-57.81l35.1-68.88c12.56-24.64 17.01-52.58 12.91-79.91zM176
        368c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32
        32zm32-160c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33
        32-32 32zm160 128c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32
        32-14.33 32-32 32z"></path></svg></button>` : ``} ${shown ? `<div class="cookieConsentWrapper" part="wrapper"><div class="cookieConsent" part="consent"><div class="cookieConsent__Left" part="consent--left"><div class="cookieConsent__Content" part="consent--content"><p class="cookieConsent__Title" part="consent--title">${escape$1(heading)}</p> <p class="cookieConsent__Description" part="consent--description"><!-- HTML_TAG_START -->${description}<!-- HTML_TAG_END --></p></div></div> <div class="cookieConsent__Right" part="consent--right"><button type="button" class="cookieConsent__Button" part="button"${add_attribute("aria-label", settingsLabel, 0)}>${escape$1(settingsLabel)}</button> ${canRejectCookies ? `<button type="submit" class="cookieConsent__Button" part="button"${add_attribute("aria-label", rejectLabel, 0)}>${escape$1(rejectLabel)}</button>` : ``} <button type="submit" class="cookieConsent__Button" part="button"${add_attribute("aria-label", acceptLabel, 0)}>${escape$1(acceptLabel)}</button></div></div></div>` : ``} ${``}`;
});
const css = {
  code: ".page.svelte-ijw9hp.svelte-ijw9hp{background:wheat}.nav.svelte-ijw9hp ul.svelte-ijw9hp{list-style-type:none;margin:0;padding:0;overflow:hidden;background-color:#333}.nav.svelte-ijw9hp ul li.svelte-ijw9hp{float:left;border-left:none;border-right:1px solid #bbb}.nav.svelte-ijw9hp ul li.svelte-ijw9hp:last-child{border-right:none;border-left:1px solid #bbb}.nav.svelte-ijw9hp ul li a.svelte-ijw9hp{display:block;color:white;text-align:center;padding:14px 16px;text-decoration:none}.nav.svelte-ijw9hp ul li a.svelte-ijw9hp:hover{background-color:#111}.nav.svelte-ijw9hp ul li.right.svelte-ijw9hp{float:right}@media screen and (max-width: 600px){.nav.svelte-ijw9hp ul li.right.svelte-ijw9hp,.nav.svelte-ijw9hp ul li.svelte-ijw9hp{float:none}}.header.svelte-ijw9hp.svelte-ijw9hp{left:0.5rem;right:0.5rem;top:0rem;text-align:center;position:-webkit-sticky;position:sticky;background:wheat 0 }.footer.svelte-ijw9hp.svelte-ijw9hp{left:0.5rem;right:0.5rem;bottom:0rem;text-align:center;position:fixed;background:wheat;border-top:1px solid #bbb;height:4.5rem;vertical-align:bottom}.clear.svelte-ijw9hp.svelte-ijw9hp{clear:both;height:4.5rem}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(Banner, "GdprBanner").$$render(
    $$result,
    {
      heading: "GDPR Cookie Notice",
      cookieName: "AnotherCookie",
      description: "Please let me store cookies on yor computer."
    },
    {},
    {}
  )} <div class="page svelte-ijw9hp"><div class="header svelte-ijw9hp" data-svelte-h="svelte-9yrhea"><h1>1stcall&#39;s sdm command line generator</h1> <nav class="nav svelte-ijw9hp"><ul class="svelte-ijw9hp"><li class="svelte-ijw9hp"><a href="/" class="svelte-ijw9hp">home</a></li> <li class="svelte-ijw9hp"><a href="/oslist" class="svelte-ijw9hp">OS list</a></li> <li class="svelte-ijw9hp"><a href="/switches" class="svelte-ijw9hp">switches</a></li> <li class="right svelte-ijw9hp"><a href="/about" class="svelte-ijw9hp">about</a></li></ul></nav></div> <div class="content">${slots.default ? slots.default({}) : ``}</div> <div class="clear svelte-ijw9hp"></div> <div class="footer svelte-ijw9hp" data-svelte-h="svelte-g9o3zw"><p>Copyright © 2023 1stcall Information Technology.  All rights researved.</p></div></div> <meta name="viewport" content="width=device-width, initial-scale=1.0">`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-e89424fb.js.map
