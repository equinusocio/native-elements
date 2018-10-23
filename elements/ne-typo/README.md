# Typography - Native Elements
> by [Native Elements](https://github.com/equinusocio/native-elements)

Native HTML typography elements with **CSS API** that give you superpowers. 🕶

- [Typography - Native Elements](#typography---native-elements)
  - [Example](#example)
  - [CSS API](#css-api)
  - [Install](#install)
  - [Usage](#usage)
    - [PostCSS](#postcss)

---

## Example

```html
  <h1 ne-typo>My beautiful heading</h1>
  <p ne-typo>I'm a beautiful piece of typo</p>
```

```css
:root {
}

.MySpecialTitle {
}
```

Check the [live demo](https://ne-typo.stackblitz.io/)


## CSS API

```css
* {

}
```

## Install

You can just install it with **npm** by running:
```shell
yarn add -D @native-elements/ne-typo
```


## Usage
Just import the css inside your project from the **node_modules**.
```css
@import '@native-elements/ne-typo/dist/ne-typo.css';
```

### PostCSS
If you are inside a postCSS environment you can also import the `.pcss` source file and build it with your build process:
```css
@import '@native-elements/ne-typo/src/ne-typo.pcss';
```

_**NOTE:** You need some PostCSS plugins to build Native Elements components._