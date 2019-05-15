# Select - Native Elements
> by [Native Elements](https://github.com/equinusocio/native-elements)

Native HTML `<select>` element with **CSS API** that give you superpowers. 🕶

<!-- TOC -->

- [Select - Native Elements](#select---native-elements)
  - [Example](#example)
  - [CSS API](#css-api)
  - [Install](#install)
  - [Usage](#usage)
    - [PostCSS](#postcss)

<!-- /TOC -->

---

## Example

```html
<select name="select">
  <option selected hidden>Pick an option</option>
  <optgroup label="Option Group">
    <option selected>Option 1</option>
    <option>Option 2</option>
    <option>Option 3</option>
  </optgroup>
</select>

<select multiple id="multi-select">
  <optgroup label="Option Group">
    <option>Option 1</option>
    <option>Option 2</option>
  </optgroup>
  <optgroup label="Option Group 2">
    <option>Option 3</option>
    <option>Option 4</option>
  </optgroup>
</select>
```

```css
:root {
  --ne-select-border-color: #000;
}

.SpecialSelect {
  --ne-select-padding: 10px;
}
```

Check the [live demo](https://ne-select.stackblitz.io/)


## CSS API

```css
* {
  /* Border API */
  --ne-select-border: 1px solid hsl(0, 0%, 89%); /* border */
  --ne-select-hover-border: 1px solid hsl(0, 0%, 89%); /* border */
  --ne-select-focus-border: 1px solid hsl(233, 64%, 62%); /* border */
  --ne-select-disabled-border: 1px solid hsl(220, 10%, 95%); /* border */

  /* Background API */
  --ne-select-background: #FFF; /* background */
  --ne-select-hover-background: var(--ne-select-background); /* background */
  --ne-select-focus-background: var(--ne-select-background); /* background */
  --ne-select-disabled-background: hsl(220, 10%, 95%); /* background */
  --ne-select-option-checked-background: hsl(233, 64%, 62%); /* background */

  /* Foreground API */
  --ne-select-color: hsl(0, 0%, 13%); /* color */
  --ne-select-hover-color: var(--ne-select-color); /* color */
  --ne-select-focus-color: var(--ne-select-color); /* color */
  --ne-select-disabled-color: hsl(220, 10%, 55%); /* color */
  --ne-select-option-checked-color: #FFF; /* color */

  /* Misc API */
  --ne-select-radius: 5px; /* unit */
  --ne-select-width: 100%; /* unit */
  --ne-select-height: 2.5rem; /* unit */
  --ne-select-padding: 0.75rem; /* unit */
  --ne-select-outline-color: hsl(233, 64%, 85%); /* color */
  --ne-select-outline-width: 0.2rem; /* unit */
  --ne-select-selection-background: hsl(233, 64%, 90%); /* color */
  --ne-select-selection-foreground: hsl(0, 0%, 13%); /* color */
  --ne-select-arrow-icon: <svg...></svg>; /* background */
  --ne-select-arrow-size: 0.9rem; /* unit */
  --ne-select-shadow: 0 1px 2px rgba(0, 0, 0, 0.06); /* box-shadow */
}
```

## Install

You can just install it with **npm** by running:
```
yarn add -D @native-elements/ne-select
```


## Usage
Just import the css inside your project from the **node_modules**.
```css
@import '@native-elements/ne-select/dist/ne-select.css';
```

### PostCSS
If you are inside a postCSS environment you can also import the `.pcss` source file and build it with your build process:
```css
@import '@native-elements/ne-select/src/ne-select.pcss';
```

_**NOTE:** You need some PostCSS plugins to build Native Elements components._
