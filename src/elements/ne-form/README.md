# Form - Native Elements
> by [Native Elements](https://github.com/equinusocio/native-elements)

Native HTML `<fieldset>, <legend>, <label>, <output>` form elements with **CSS API** that give you superpowers. 🕶

<!-- TOC -->

- [Form - Native Elements](#form---native-elements)
  - [Example](#example)
  - [CSS API](#css-api)

<!-- /TOC -->

---

## Example

```html
  <fieldset>
    <legend>Fieldset legend</legend>

    <label>Label</label>
    <label>Label 2</label>
  </fieldset>
```

```css
:root {
  --ne-form-legend-margin: none;
}

.SpecialFieldset {
  --ne-form-legend-weight: 300;
}
```

Check the [live demo](https://ne-form.stackblitz.io/)


## CSS API

```css
* {
  /* Foreground API */
  --ne-form-legend-weight: 600; /* font-weight */

  /* Misc API */
  --ne-form-legend-margin: 0 0 0.5rem; /* margin */
}
```
