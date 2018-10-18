# Upload - Native Elements
> by [Native Elements](https://github.com/equinusocio/native-elements)

Native HTML `<input type="file">` element with **CSS API** that give you superpowers. 🕶

- [Upload - Native Elements](#upload---native-elements)
    - [Example](#example)
    - [CSS API](#css-api)
    - [Install](#install)
    - [Usage](#usage)
        - [PostCSS](#postcss)

---

## Example

```html
<label ne-upload data-text="Pick a file to upload...">
    <input type="file">
</label>
```

```css
:root {
  --ne-upload-background: hotpink;
}

.MySpecialUpload {
  --ne-upload-background: aquamarine;
}
```

Check the [live demo](https://ne-upload.stackblitz.io/)


## CSS API

```css
* {
  /* Border API */
  --ne-upload-border: 2px dashed hsl(233, 64%, 85%); /* border */

  /* Background API */
  --ne-upload-background: transparent; /* background */

  /* Foreground */
  --ne-upload-label-weight: 700; /*  font-weight */
  --ne-upload-label-font-size: 1.2rem; /* unit */

  /* Misc API */
  --ne-upload-y-padding: 32px; /* unit */
  --ne-upload-x-padding: 56px; /* unit */
  --ne-upload-radius: 8px; /* border-radius  */
  --uploadImage: <svg...></svg>;  /* background-image */
  --ne-upload-outline-color: hsl(233, 64%, 85%);
  --ne-upload-outline-width: 0.2rem; /* unit */
}
```

## Install

You can just install it with **npm** by running:
```shell
yarn add -D @native-elements/ne-upload
```


## Usage
Just import the css inside your project from the **node_modules**.
```css
@import '@native-elements/ne-upload/dist/ne-upload.css';
```

### PostCSS
If you are inside a postCSS environment you can also import the `.pcss` source file and build it with your build process:
```css
@import '@native-elements/ne-upload/src/ne-upload.pcss';
```

_**NOTE:** You need some PostCSS plugins to build Native Elements components._