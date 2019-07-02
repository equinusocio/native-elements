# Text fields - Native Elements
> by [Native Elements](https://github.com/equinusocio/native-elements)

Native HTML `<input ...>` and `<textarea>` elements with **CSS API** that give you superpowers. 🕶

<!-- TOC -->

- [Text fields - Native Elements](#Text-fields---Native-Elements)
  - [Example](#Example)
  - [CSS API](#CSS-API)

<!-- /TOC -->

---

## Example

```html
  <input type="text">
  <input type="password">
  <input type="url">
  <input type="email">
  <input type="tel">
  <input type="search">
  <input type="number">
  <input type="date">
  <input type="time">
  <input type="month">
  <input type="week">
  <input type="datetime-local">
  <textarea class="SpecialTextfield"></textarea>
```

```css
:root {
  --ne-textfield-background: pink;
}

.SpecialTextfield {
  --ne-textfield-background: cyan;
}
```

Check the [live demo](https://ne-textfield.stackblitz.io/)


## CSS API

```css
* {
  /* Border API */
  --ne-textfield-border: 1px solid hsl(0, 0%, 89%); /* border */
  --ne-textfield-hover-border: 1px solid hsl(0, 0%, 89%); /* border */
  --ne-textfield-focus-border: 1px solid hsl(235, 100%, 60%); /* border */
  --ne-textfield-disabled-border: 1px solid hsl(220, 10%, 95%); /* border */
  --ne-textfield-readonly-border: 1px dashed hsl(0, 0%, 89%); /* border */
  --ne-textfield-readonly-focus-border: 1px dashed hsl(235, 100%, 60%); /* border */
  --ne-textfield-vaild-border: 1px solid hsl(155, 73%, 47%); /* border */
  --ne-textfield-invaild-border: 1px solid hsl(354, 100%, 65%); /* border */

  /* Background API */
  --ne-textfield-background: #FFF; /* background */
  --ne-textfield-hover-background: var(--ne-textfield-background); /* background */
  --ne-textfield-focus-background: var(--ne-textfield-background); /* background */
  --ne-textfield-disabled-background: hsl(220, 10%, 95%); /* background */
  --ne-textfield-valid-background: var(--ne-textfield-background); /* background */
  --ne-textfield-invalid-background: var(--ne-textfield-background); /* background */

  /* Foreground API */
  --ne-textfield-color: hsl(0, 0%, 13%); /* color */
  --ne-textfield-hover-color: var(--ne-textfield-color); /* color */
  --ne-textfield-focus-color: var(--ne-textfield-color); /* color */
  --ne-textfield-disabled-color: hsl(0, 0%, 55%); /* color */
  --ne-textfield-readonly-color: var(--ne-textfield-color); /* color */
  --ne-textfield-valid-color: var(--ne-textfield-color); /* color */
  --ne-textfield-invalid-color: var(--ne-textfield-color); /* color */
  --ne-textfield-placeholder-color: hsl(0, 0%, 85%); /* color */
  --ne-textfield-hover-placeholder-color: var(--ne-textfield-placeholder-color); /* color */
  --ne-textfield-focus-placeholder-color: var(--ne-textfield-hover-placeholder-color); /* color */
  --ne-textfield-disabled-placeholder-color: hsl(0, 0%, 60%); /* color */

  /* Misc API */
  --ne-textfield-radius: 5px; /* border-radius */
  --ne-textfield-width: 100%; /* width */
  --ne-textfield-height: 2.5rem; /* height */
  --ne-textfield-y-padding: 0.5rem; /* unit */
  --ne-textfield-x-padding: 0.75rem; /* unit */
  --ne-textfield-outline-color: hsl(233, 64%, 85%); /* color */
  --ne-textfield-valid-outline-color: hsl(155, 73%, 87%); /* color */
  --ne-textfield-invalid-outline-color: hsl(354, 100%, 90%);/* color */
  --ne-textfield-outline-width: 0.2rem; /* unit */
  --ne-textfield-selection-background: hsl(233, 64%, 90%); /* color */
  --ne-textfield-selection-foreground: hsl(0, 0%, 13%); /* color */
  --ne-textfield-resize: vertical; /* resize */
}
```
