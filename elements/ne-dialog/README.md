# Dialog - Native Elements (experimental 👨‍🔬)
> by [Native Elements](https://github.com/equinusocio/native-elements)

Native HTML `<dialog>` element with **CSS API** that give you superpowers. 🕶

- [Dialog - Native Elements (experimental 👨‍🔬)](#dialog---native-elements-experimental-%F0%9F%91%A8%E2%80%8D%F0%9F%94%AC)
  - [Example](#example)
  - [CSS API](#css-api)
  - [Install](#install)
  - [Usage](#usage)
    - [PostCSS](#postcss)

---

## Example

```html
  <dialog>
    <header><h1>Dialog Header</h1></header>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus minus aut laborum eum, obcaecati odit  accusantium enim tempore, nam suscipit cumque repellendus at. Repellendus molestias ea labore error iste dicta.
    </p>
    <footer>
      <button>Yeah, confirm</button>
      <button>Cancel</button>
    </footer>
  </dialog>
```

```css
:root {
  --ne-dialog-background: #F5F5F5;
}

.WarningDialog {
  --ne-dialog-background: #FFF;
  --ne-dialog-border: 2px solid red;
}
```

Check the [live demo](https://ne-dialog.stackblitz.io/)


## CSS API

```css
* {
  /* Border API */
  --ne-dialog-border: 0; /* border */

  /* Background API */
  --ne-dialog-background: #FFF; /* background */

  /* Misc API */
  --ne-dialog-radius: 5px; /*  border-radius */
  --ne-dialog-y-padding: 2rem; /* unit */
  --ne-dialog-x-padding: 2rem; /* unit */
  --ne-dialog-shadow: 0 10px 30px rgba(0, 0, 0, 0.3); /* box-shadow */
  --ne-dialog-max-width: 40rem; /* unit */

  /* Backdrop API */
  --ne-dialog-backdrop: rgba(0, 0, 0, 0.3); /* background */
  --ne-dialog-backdrop-filter: blur(10px); /* backdrop-filter */
}
```

## Install

You can just install it with **npm** by running:
```shell
yarn add -D @native-elements/ne-dialog
```


## Usage
Just import the css inside your project from the **node_modules**.
```css
@import '@native-elements/ne-dialog/dist/ne-dialog.css';
```

### PostCSS
If you are inside a postCSS environment you can also import the `.pcss` source file and build it with your build process:
```css
@import '@native-elements/ne-dialog/src/ne-dialog.pcss';
```

_**NOTE:** You need some PostCSS plugins to build Native Elements components._