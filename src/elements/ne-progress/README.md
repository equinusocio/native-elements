# Progress - Native Elements
> by [Native Elements](https://github.com/equinusocio/native-elements)

Native HTML `<progress>` element with **CSS API** that give you superpowers. 🕶

<!-- TOC -->

- [Progress - Native Elements](#progress---native-elements)
  - [Example](#example)
  - [CSS API](#css-api)

<!-- /TOC -->

---

## Example

```html
<progress value="50" max="100">Text</progress>
<progress class="SpecialProgress" value="50" max="100">progress</progress>
```

```css
:root {
  --ne-progress-border-color: #000;
}

.SpecialProgress {
  --ne-progress-height: 10px;
}
```

Check the [live demo](https://ne-progress.stackblitz.io/)


## CSS API

```css
* {
  /* Border API */
  --ne-progress-border-color: hsl(0, 0%, 89%); /* color */

  /* Background API */
  --ne-progress-background: hsl(220, 10%, 95%); /* color */
  --ne-progress-filled-color: hsl(233, 64%, 62%); /* color */

  /* Stripes API */
  --ne-progress-stripe-size: 16px; /* unit */
  --ne-progress-stripe-colors: rgba(255, 255, 255, 0.4); /* color */

  /* Misc API */
  --ne-progress-height: 5px; /* unit */
  --ne-progress-radius: 10px; /* border-radius */
}
```
