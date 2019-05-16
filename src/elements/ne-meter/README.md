# Meter - Native Elements
> by [Native Elements](https://github.com/equinusocio/native-elements)

Native HTML `<meter>` element with **CSS API** that give you superpowers. 🕶

<!-- TOC -->

- [Meter - Native Elements](#meter---native-elements)
  - [Example](#example)
  - [CSS API](#css-api)

<!-- /TOC -->

---

## Example

```html
  <input type="password" value="342567rt">
  <meter min="0" max="100" low="25" high="75" optimum="100" value="10"></meter>
  <meter class="SpecialMeter" min="0" max="100" low="25" high="75" optimum="100" value="10"></meter>
```

```css
:root {
  --ne-meter-border-color: transparent;
}

.SpecialMeter {
  --ne-meter-border-color: green;
}
```

Check the [live demo](https://ne-meter.stackblitz.io/)


## CSS API

```css
* {
  /* Border API */
  --ne-meter-border-color: hsl(0, 0%, 89%); /* color */

  /* Background API */
  --ne-meter-background: hsl(220, 10%, 95%); /* color */
  --ne-meter-filled-color-strong: hsl(67, 78%, 52%); /* color */
  --ne-meter-filled-color-good: hsl(41, 100%, 60%); /* color */
  --ne-meter-filled-color-weak: hsl(354, 100%, 65%); /* color */

  /* Misc API */
  --ne-meter-radius: 5px; /* border-radius */
  --ne-meter-width: 30px; /* unit */
  --ne-meter-height: 3px; /* unit */
}
```
