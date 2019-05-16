# Details - Native Elements
> by [Native Elements](https://github.com/equinusocio/native-elements)

Native HTML `<details>` and `<summary>` elements with **CSS API** that give you superpowers. 🕶

- [Details - Native Elements](#details---native-elements)
  - [Example](#example)
  - [CSS API](#css-api)

---

## Example

```html
  <details>
    <summary>My folding summary</summary>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus provident saepe deserunt veritatis? Totam, corrupti. Dolor quos, numquam totam quae ea enim maiores sequi et? Optio harum adipisci neque nemo.</p>
  </details>

  <!-- Grouped folding -->
  <section ne-details-group>
    <details>
      <summary>My folding summary</summary>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus provident saepe deserunt veritatis? Totam, corrupti. Dolor quos, numquam totam quae ea enim maiores sequi et? Optio harum adipisci neque nemo.</p>
    </details>
    <details>
      <summary>My folding summary</summary>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus provident saepe deserunt veritatis? Totam, corrupti. Dolor quos, numquam totam quae ea enim maiores sequi et? Optio harum adipisci neque nemo.</p>
    </details>
  </section>
```

```css
:root {
  --ne-details-background: deeppink;
}

.SpecialFolding {
  --ne-details-summary-font-weight: 400;
}
```

Check the [live demo](https://ne-details.stackblitz.io/)


## CSS API

```css
* {
  /* Border API */
  --ne-details-separator: 1px solid rgba(0, 0, 0, 0.05); /* border */

  /* Background API */
  ---ne-details-background: #FFF; /* background */
  ---ne-details-summary-background: #FFF; /* background */

  /* Foreground API */
  --ne-details-summary-font-size: initial; /* font-size */
  --ne-details-summary-font-weight: 700; /* font-weight */
  --ne-details-summary-open-color: hsl(233, 64%, 62%); /* color */

  /* Misc API */
  --ne-details-max-height: 300px; /* height */
  --ne-details-border-radius: 4px; /* border-radius */
  --ne-details-outline-color: hsl(233, 64%, 85%); /* color */
  --ne-details-outline-width: 0.2rem; /* unit */
  --ne-details-summary-padding: 16px; /* padding */
  --ne-details-shadow: 0 1px 2px rgba(0, 0, 0, 0.16); /* box-shadow */
}
```
