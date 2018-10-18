# Check & Radio - Native Elements
> by [Native Elements](https://github.com/equinusocio/native-elements)

Native HTML `<input type="checkbox">` & `<input type="radio">` elements with **CSS API** that give you superpowers. 🕶

<!-- TOC -->

- [Check & Radio - Native Elements](#check--radio---native-elements)
  - [Example](#example)
  - [CSS API](#css-api)
  - [Install](#install)
  - [Usage](#usage)
    - [PostCSS](#postcss)

<!-- /TOC -->

---

## Example

```html
  <input ne-checkradio type="checkbox">
  <input ne-checkradio type="radio" class="SpecialInput">
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

## Install

You can just install it with **npm** by running:
```
yarn add -D @native-elements/ne-checkradio
```


## Usage
Just import the css inside your project from the **node_modules**.
```css
@import '@native-elements/ne-checkradio/dist/ne-checkradio.css';
```

### PostCSS
If you are inside a postCSS environment you can also import the `.pcss` source file and build it with your build process:
```css
@import '@native-elements/ne-checkradio/src/ne-checkradio.pcss';
```

_**NOTE:** You need some PostCSS plugins to build Native Elements components._