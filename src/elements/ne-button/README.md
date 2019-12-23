# Button - Native Elements

> by [Native Elements](https://github.com/equinusocio/native-elements)

Native HTML `<button>` element with **CSS API** that give you superpowers. 🕶

<!-- TOC -->

- [Button - Native Elements](#button---native-elements)
  - [Example](#example)
  - [CSS API](#css-api)
  - [HTML API](#html-api)

<!-- /TOC -->

---

## Example

```html
<button>Text</button>
<button class="SpecialButton">
  <i>←</i>
  Text
</button>
<button dir="rtl" class="SpecialButton">
  <i>←</i>
  Text
</button>
```

```css
:root {
  --ne-button-background: #000;
  --ne-button-color: #fff;
}

.SpecialButton {
  --ne-button-background: rebeccapurple;
  --ne-button-radius: 4px;
}
```

Check the [live demo](https://ne-button.stackblitz.io/)

## CSS API

```css
* {
  /* Border API */
  --ne-button-border: 0; /*  border */
  --ne-button-hover-border: var(--ne-button-border); /*  border */
  --ne-button-focus-border: var(--ne-button-border); /*  border */
  --ne-button-active-border: var(--ne-button-border); /*  border */
  --ne-button-disabled-border: var(--ne-button-border); /*  border */

  /* Background API */
  --ne-button-background: hsl(235, 100%, 60%); /*  background  */
  --ne-button-hover-background: hsl(233, 64%, 52%); /*  background  */
  --ne-button-focus-background: var(
    --ne-button-hover-background
  ); /*  background  */
  --ne-button-active-background: hsl(233, 64%, 32%); /*  background  */
  --ne-button-disabled-background: hsl(233, 64%, 96%); /*  background  */

  /* Foreground API */
  --ne-button-foreground: #fff; /*  color */
  --ne-button-hover-color: var(--ne-button-color); /*  color */
  --ne-button-focus-color: var(--ne-button-color); /*  color */
  --ne-button-active-color: var(--ne-button-color); /*  color */
  --ne-button-disabled-color: hsl(233, 34%, 72%); /*  color */

  /* Icon API */
  --ne-button-icon-margin: calc(2rem / 2.2); /*  unit */
  --ne-button-icon-separator: rgba(255, 255, 255, 0.3); /*  color */
  --ne-button-disabled-icon-separator: rgba(143, 150, 163, 0.3); /*  color */

  /* Misc API */
  --ne-button-radius: 5px; /*  border-radius */
  --ne-button-font-weight: 700; /*  font-weight */
  --ne-button-font-size: inherit; /*  font-size */
  --ne-button-y-padding: 1rem; /* unit */
  --ne-button-x-padding: 2rem; /* unit */
  --ne-button-shadow: 0 1px 2px rgba(0, 0, 0, 0.16); /* box-shadow */
}
```

## HTML API

> dir="rtl"

Adding this html attribute the icon inside the button will change the position without changing the DOM. The style will be automatically fixed.
