<h1 align="center"><img aria-label="Native Element" width="100%" src="https://user-images.githubusercontent.com/10454741/79691718-7683a900-8261-11ea-841e-3ca7b0cb6d51.png"></h1>

<p align="center">
<b>🚧 Work in progress</b><br>
This project is under development, use at your own risk.
<br><br>
Built for modern technologies: <img width="16px" alt="Google Chrome" src="https://goo.gl/U987PH"> <img width="16px" alt="Firefox" src="https://bit.ly/35SKj4D"> <img width="16px" alt="Safari" src="https://goo.gl/S1vPDZ"> <img width="16px" alt="Edge" src="https://bit.ly/2MnqnyS">
</p>


## Demo

Here some live demo to check:

[Demo 1](https://native-elements.stackblitz.io/) — [Demo 2](https://xity-starter.netlify.com) — [Demo 3](https://equinusocio.dev)

## Install

Install the package with your package manager:

```bash
yarn add @native-elements/core
```

## Installation

To enable your HTML superpowers, import the main, bundled CSS file in your project:

### With a bundler

```js
import '@native-elements/core'
```

### Inside HTML

```html
<link rel="preconnect" href="https://cdn.jsdelivr.net">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@native-elements/core/dist/native-elements.min.css">
```

## Customize elements

Currently we provide a basic theme with all the custom properties used by the handled elements. To customize things, copy the [theme file](/theme.css) to your application `:root {}` selector, and change the variables you want.

```css
:root {
  /* Custom palette */
  --accent-color: hotpink;
  --secondary-color: rebeccapurple;

  /* Native Elements settings */
  --ne-hr-background: var(--secondary-color);
  --ne-links-foreground: var(--accent-color);
}
```

Check the full [theme file](/theme.css)

**⚠️ NOTE: The `--accent-color` property has been added to the theme just to simplify the accent color customization. By default elements don't use this property**

## About outline

Native Elements adds by default the outline indicator to any link elements when they are on `:focus` state.

Since the outline is useful for the keyboard navigation, you should never completely hide it. We strongly suggest to control when to hide the outline, for example using [`what-input`](https://github.com/ten1seven/what-input) you can do this by including it in your JavaScript file, then add this CSS snippet:

```css
[data-whatintent='mouse'] a:focus,
[data-whatintent='mouse'] a:visited:focus {
  outline: none;
}
```

By this way the outline indicator will be visible only when the users is using the keyboard as input to navigate through the page.
