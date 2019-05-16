# Range - Native Elements
> by [Native Elements](https://github.com/equinusocio/native-elements)

Native HTML `<input type="range">` element with **CSS API** that give you superpowers. 🕶

<!-- TOC -->

- [Range - Native Elements](#range---native-elements)
  - [Example](#example)
  - [CSS API](#css-api)

<!-- /TOC -->

---

## Example

```html
  <input type="range">
  <input type="range" class="SpecialRange">
```

```css
:root {
  --ne-range-background: #000;
}

.SpecialRange {
  --ne-range-border-color: transparent;
  --ne-range-thumb-background: red;
}
```

Check the [live demo](https://ne-range.stackblitz.io/)


## CSS API

```css
:root {
  /* Border API */
  --ne-range-border-color: rgba(0, 0, 0, 0.1); /* color */
  --ne-range-disabled-border-color: rgba(0, 0, 0, 0); /* color */
  --ne-range-border-width: 1px; /* unit */

  /* Background API */
  --ne-range-background: hsl(220, 10%, 95%); /* color */
  --ne-range-active-background: var(--ne-range-background); /* color */
  --ne-range-focus-background: var(--ne-range-background); /* color */

  /* Thumb API */
  --ne-range-stripes-color: hsl(233, 64%, 62%); /* color */
  --ne-range-thumb-background: #FFF; /* color */
  --ne-range-thumb-active-background: hsl(233, 64%, 62%); /* color */
  --ne-range-thumb-disabled-background: hsl(0, 0%, 98%); /* color */
  --ne-range-thumb-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.16); /* box-shadow */
  --ne-range-thumb-width: 22px; /* unit */
  --ne-range-thumb-height: 24px; /* unit */
  --ne-range-thumb-radius: 5px; /* border-radius */

  /* Misc API */
  --ne-range-width: 100%; /* unit */
  --ne-range-height: 5px; /* unit */
  --ne-range-radius: 10px; /* border-radius */
  --ne-range-outline-color: hsl(233, 64%, 85%); /* color */
  --ne-range-outline-width: 0.2rem; /* unit */
}
```
