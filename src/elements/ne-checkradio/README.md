# Check & Radio - Native Elements
> by [Native Elements](https://github.com/equinusocio/native-elements)

Native HTML `<input type="checkbox">` & `<input type="radio">` elements with **CSS API** that give you superpowers. 🕶

<!-- TOC -->

- [Check & Radio - Native Elements](#check--radio---native-elements)
  - [Example](#example)
  - [CSS API](#css-api)

<!-- /TOC -->

---

## Example

```html
  <input type="checkbox">
  <input type="radio" class="SpecialInput">
```

```css
:root {
  --ne-checkradio-shadow: none;
}

.SpecialInput {
  --ne-checkradio-animation-duration: 0;
}
```

Check the [live demo](https://ne-checkradio.stackblitz.io/)


## CSS API

```css
* {
  --ne-checkradio-shadow: 1px 1px rgba(0, 0, 0, 0.2); /* shadow */
  --ne-checkradio-animation-duration: 0.8s; /* time */
}
```
