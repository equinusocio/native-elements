# Form - Native Elements
> by [Native Elements](https://github.com/equinusocio/native-elements)

Native HTML `<fieldset>, <legend>, <label>, <output>` form elements with **CSS API** that give you superpowers. 🕶

<!-- TOC -->

- [Form - Native Elements](#form---native-elements)
  - [Example](#example)
  - [CSS API](#css-api)
  - [Install](#install)
  - [Usage](#usage)
    - [PostCSS](#postcss)

<!-- /TOC -->

---

## Example

```html
  <fieldset ne-form>
    <legend ne-form>Fieldset legend</legend>

    <label ne-form>Label</label>
    <label ne-form>Label 2</label>
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

## Install

You can just install it with **npm** by running:
```
yarn add -D @native-elements/ne-form
```


## Usage
Just import the css inside your project from the **node_modules**.
```css
@import '@native-elements/ne-form/dist/ne-form.css';
```

### PostCSS
If you are inside a postCSS environment you can also import the `.pcss` source file and build it with your build process:
```css
@import '@native-elements/ne-form/src/ne-form.pcss';
```

_**NOTE:** You need some PostCSS plugins to build Native Elements components._