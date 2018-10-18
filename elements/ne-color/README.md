# Color - Native Elements
> by [Native Elements](https://github.com/equinusocio/native-elements)

Native HTML `<input type="color">` element with **CSS API** that give you superpowers. 🕶

- [Color - Native Elements](#color---native-elements)
  - [Example](#example)
  - [CSS API](#css-api)
  - [Install](#install)
  - [Usage](#usage)
    - [PostCSS](#postcss)

---

## Example

```html
  <input type="color" value="#FF00FF">
```

```css
:root {
  --ne-color-radius: 50%;
}

.SpecialColorpicker {
  --ne-color-radius: 0;
}
```

Check the [live demo](https://ne-color.stackblitz.io/)


## CSS API

```css
* {
  /* Border API */
  --ne-color-border: 0; /* border */

  /* Misc API */
  --ne-color-radius: 100%; /* border-radius */
  --ne-color-shadow: 0 1px 2px rgba(0, 0, 0, 0.16); /* box-shadow */
  --ne-color-outline-color: hsl(233, 64%, 85%); /* color */
  --ne-color-outline-width: 0.2rem; /* unit */
}
```

## Install

You can just install it with **npm** by running:
```
yarn add -D @native-elements/ne-color
```


## Usage
Just import the css inside your project from the **node_modules**.
```css
@import '@native-elements/ne-color/dist/ne-color.css';
```

### PostCSS
If you are inside a postCSS environment you can also import the `.pcss` source file and build it with your build process:
```css
@import '@native-elements/ne-color/src/ne-color.pcss';
```

_**NOTE:** You need some PostCSS plugins to build Native Elements components._