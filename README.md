<img width="16px" alt="Google Chrome" src="https://goo.gl/U987PH"><img width="16px" alt="Firefox" src="https://bit.ly/35SKj4D"><img width="16px" alt="Safari" src="https://goo.gl/S1vPDZ"><img width="16px" alt="Edge" src="https://bit.ly/2MnqnyS">

# Native Elements

**🚧 Work in progress**
> This project is under development, use at your own risk.

- [Native Elements](#native-elements)
  - [Install](#install)
  - [Installation](#installation)
    - [With a bundler](#with-a-bundler)
    - [Inside HTML](#inside-html)
  - [Customize elements](#customize-elements)
  - [Live Demo](#live-demo)

## Install

Install the package with your package manager:

```bash
yarn add @native-elements/core
```

## Installation

To enable your HTML superpowers, import the main, bundled css file in your project:

### With a bundler

```js
import '@native-elements/core'
```

### Inside HTML

```html
<link rel="stylesheet" href="https://unpkg.com/@native-elements/core/dist/native-elements.css">
```

## Customize elements

Currently we provide a basic theme with all the custom properties used by the handled elements. To customize things, copy the [theme file](/theme.css) to your application `:root {}` selector, and change the variables you want.

**⚠️ NOTE:** The `--accent-color` property has been added just to simplify the accent color customization. You are able to add your own color palettes and apply them to the Native Elements properties bay replacing their default value.

pick the properties you want to change from the [theme file](/theme.css) file and add them to your `:root {}` selector:

```css
:root {
  /* Custom palette */
  --accent-color: hotpink;
  --secondary-color: rebeccapurple;

  --ne-hr-background: var(--secondary-color);
}
```



## [Live Demo](https://native-elements.stackblitz.io/)
