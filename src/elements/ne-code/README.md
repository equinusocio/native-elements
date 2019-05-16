# Code - Native Elements
> by [Native Elements](https://github.com/equinusocio/native-elements)

Native HTML `<pre>` and `<code>` elements with **CSS API** that give you superpowers. 🕶

<!-- TOC -->

- [Code - Native Elements](#code---native-elements)
  - [Example](#example)
  - [CSS API](#css-api)

<!-- /TOC -->

---

## Example

```html
<pre>P R E F O R M A T T E D T E X T
! " # $ % &amp; ' ( ) * + , - . /
0 1 2 3 4 5 6 7 8 9 : ; &lt; = &gt; ?
@ A B C D E F G H I J K L M N O
P Q R S T U V W X Y Z [ \ ] ^ _
` a b c d e f g h i j k l m n o
p q r s t u v w x y z { | } ~ </pre>

<pre><code>ReactDOM.render(
    &lt;h1&gt;Hello, world!&lt;/h1&gt;,
    document.getElementById('root')
);</code></pre>

<code>ReactDOM.render(
    &lt;h1&gt;Hello, world!&lt;/h1&gt;,
    document.getElementById('root')
);</code>
```

```css
:root {
  --ne-code-background: pink;
}

.SpecialCode {
  --ne-code-background: tomato;
}
```

Check the [live demo](https://ne-code.stackblitz.io/)


## CSS API

```css
* {
  --ne-code-border: 1px solid hsl(0, 0%, 89%); /* border */

  /* Background API */
  --ne-code-background: transparent; /* background */

  /* Foreground API */
  --ne-code-foreground: hsl(220, 10%, 60%); /* color */

  /* Misc API */
  --ne-code-border-radius: 5px; /* border-radius */
  --ne-code-font-size: 0.875rem; /* font-size */
  --ne-code-y-padding: 1.25rem; /* unit */
  --ne-code-x-padding: 1.5rem; /* unit */
}
```
