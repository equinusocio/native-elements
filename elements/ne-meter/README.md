# Meter - Native Elements
> by [Native Elements](https://github.com/equinusocio/native-elements)

Native HTML `<meter>` element with **CSS API** that give you superpowers. 🕶

<!-- TOC -->

- [Meter - Native Elements](#meter---native-elements)
  - [Example](#example)
  - [CSS API](#css-api)
  - [Install](#install)
  - [Usage](#usage)
    - [PostCSS](#postcss)

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

## Install

You can just install it with **npm** by running:
```
yarn add -D @native-elements/ne-meter
```


## Usage
Just import the css inside your project from the **node_modules**.
```css
@import '@native-elements/ne-meter/dist/ne-meter.css';
```

### PostCSS
If you are inside a postCSS environment you can also import the `.pcss` source file and build it with your build process:
```css
@import '@native-elements/ne-meter/src/ne-meter.pcss';
```

_**NOTE:** You need some PostCSS plugins to build Native Elements components._