module.exports = [
  /**
   * Document domain properties
   */
  {
    "name": "--ne-global-background",
    "defaultValue": "var(--ne-global-background, hsl(0, 0%, 100%))",
    "domain": "document",
    "type": "color",
    "element": null
  }
  ,{
    "name": "--ne-global-foreground",
    "defaultValue": "var(--ne-global-foreground, hsl(0, 0%, 0%))",
    "domain": "document",
    "type": "color",
    "element": null
  }
  ,{
    "name": "--ne-root-font-size",
    "defaultValue": "var(--ne-root-font-size, 100%)",
    "domain": "document",
    "type": "unit",
    "element": null
  }
  ,{
    "name": "--ne-body-font-size",
    "defaultValue": "var(--ne-body-font-size, 1.125rem)",
    "domain": "document",
    "type": "unit",
    "element": null
  }
  ,{
    "name": "--ne-selection-foreground",
    "defaultValue": "var(--ne-selection-foreground, hsl(0, 0%, 100%))",
    "domain": "document",
    "type": "color",
    "element": null
  }
  ,{
    "name": "--ne-selection-background",
    "defaultValue": "var(--ne-selection-background, hsl(233, 64%, 72%))",
    "domain": "document",
    "type": "color",
    "element": null
  }
  ,{
    "name": "--ne-outline-width",
    "defaultValue": "var(--ne-outline-width, 2px)",
    "domain": "document",
    "type": "unit",
    "element": null
  }
  ,{
    "name": "--ne-outline-color",
    "defaultValue": "var(--ne-outline-color, hsl(220, 100%, 50%))",
    "domain": "document",
    "type": "color",
    "element": null
  }

  /**
   * Typography domain properties
   */
  ,{
    "name": "--ne-basic-line-height",
    "defaultValue": "var(--ne-basic-line-height, 1.5)",
    "domain": "typography",
    "type": "unit",
    "element": null
  }
  ,{
    "name": "--ne-headings-scale",
    "defaultValue": "var(--ne-headings-scale, 1.25)",
    "domain": "typography",
    "type": "unit",
    "element": null
  }
  ,{
    "name": "--ne-quote-font-size",
    "defaultValue": "var(--ne-quote-font-size, 2rem)",
    "domain": "typography",
    "type": "unit",
    "element": null
  }
  ,{
    "name": "--ne-cite-foreground",
    "defaultValue": "var(--ne-cite-foreground, hsl(220, 100%, 50%))",
    "domain": "typography",
    "type": "color",
    "element": null
  }
  ,{
    "name": "--ne-cite-font-size",
    "defaultValue": "var(--ne-cite-font-size, 1rem)",
    "domain": "typography",
    "type": "unit",
    "element": null
  }
  ,{
    "name": "--ne-cite-start-sign",
    "defaultValue": "var(--ne-cite-start-sign, \"—\")",
    "domain": "typography",
    "type": "unit",
    "element": null
  }
  ,{
    "name": "--ne-links-foreground",
    "defaultValue": "var(--ne-links-foreground, hsl(220, 100%, 50%))",
    "domain": "typography",
    "type": "color",
    "element": null
  }
  ,{
    "name": "--ne-links-active-foreground",
    "defaultValue": "var(--ne-links-active-foreground, hsl(233, 64%, 52%))",
    "domain": "typography",
    "type": "color",
    "element": null
  }
  ,{
    "name": "--ne-del-foreground",
    "defaultValue": "var(--ne-del-foreground, hsl(337, 74%, 31%))",
    "domain": "typography",
    "type": "color",
    "element": null
  }
  ,{
    "name": "--ne-del-background",
    "defaultValue": "var(--ne-del-background, hsl(0, 100%, 94%))",
    "domain": "typography",
    "type": "color",
    "element": null
  }
  ,{
    "name": "--ne-ins-foreground",
    "defaultValue": "var(--ne-ins-foreground, hsl(161, 98%, 18%))",
    "domain": "typography",
    "type": "color",
    "element": null
  }
  ,{
    "name": "--ne-ins-background",
    "defaultValue": "var(--ne-ins-background, hsl(138, 100%, 88%))",
    "domain": "typography",
    "type": "color",
    "element": null
  }
  ,{
    "name": "--ne-kbd-color",
    "defaultValue": "var(--ne-kbd-color, hsl(233, 34%, 96%))",
    "domain": "typography",
    "type": "color",
    "element": null
  }
  ,{
    "name": "--ne-kbd-border-radius",
    "defaultValue": "var(--ne-kbd-border-radius, 4px)",
    "domain": "typography",
    "type": "unit",
    "element": null
  }
  ,{
    "name": "--ne-mark-foreground",
    "defaultValue": "var(--ne-mark-foreground, hsl(20, 100%, 26%))",
    "domain": "typography",
    "type": "color",
    "element": null
  }
  ,{
    "name": "--ne-mark-background",
    "defaultValue": "var(--ne-mark-background, hsl(57, 100%, 60%))",
    "domain": "typography",
    "type": "color",
    "element": null
  }
  ,{
    "name": "--ne-inline-code-border-radius",
    "defaultValue": "var(--ne-inline-code-border-radius, 2px)",
    "domain": "typography",
    "type": "unit",
    "element": null
  }
  ,{
    "name": "--ne-inline-code-background",
    "defaultValue": "var(--ne-inline-code-background, hsl(220, 10%, 95%))",
    "domain": "typography",
    "type": "color",
    "element": null
  }

  /**
   * Elements domain properties
   * @Button
   */
  ,{
    "name": "--ne-button-border",
    "defaultValue": "var(--ne-button-border, 0)",
    "domain": "elements",
    "type": "border",
    "element": "Button"
  }
  ,{
    "name": "--ne-button-hover-border",
    "defaultValue": "var(--ne-button-hover-border, 0)",
    "domain": "elements",
    "type": "border",
    "element": "Button"
  }
  ,{
    "name": "--ne-button-active-border",
    "defaultValue": "var(--ne-button-active-border, 0)",
    "domain": "elements",
    "type": "border",
    "element": "Button"
  }
  ,{
    "name": "--ne-button-disabled-border",
    "defaultValue": "var(--ne-button-disabled-border, 0)",
    "domain": "elements",
    "type": "border",
    "element": "Button"
  }
  ,{
    "name": "--ne-button-background",
    "defaultValue": "var(--ne-button-background, hsl(220, 100%, 50%))",
    "domain": "elements",
    "type": "color",
    "element": "Button"
  }
  ,{
    "name": "--ne-button-hover-background",
    "defaultValue": "var(--ne-button-hover-background, hsl(233, 64%, 52%))",
    "domain": "elements",
    "type": "color",
    "element": "Button"
  }
  ,{
    "name": "--ne-button-active-background",
    "defaultValue": "var(--ne-button-active-background, hsl(233, 64%, 32%))",
    "domain": "elements",
    "type": "color",
    "element": "Button"
  }
  ,{
    "name": "--ne-button-disabled-background",
    "defaultValue": "var(--ne-button-disabled-background, hsl(233, 34%, 96%))",
    "domain": "elements",
    "type": "color",
    "element": "Button"
  }
  ,{
    "name": "--ne-button-foreground",
    "defaultValue": "var(--ne-button-foreground, hsl(0, 0%, 100%))",
    "domain": "elements",
    "type": "color",
    "element": "Button"
  }
  ,{
    "name": "--ne-button-hover-foreground",
    "defaultValue": "var(--ne-button-hover-foreground, hsl(0, 0%, 100%))",
    "domain": "elements",
    "type": "color",
    "element": "Button"
  }
  ,{
    "name": "--ne-button-active-foreground",
    "defaultValue": "var(--ne-button-active-foreground, hsl(0, 0%, 100%))",
    "domain": "elements",
    "type": "color",
    "element": "Button"
  }
  ,{
    "name": "--ne-button-disabled-foreground",
    "defaultValue": "var(--ne-button-disabled-foreground, hsl(233, 24%, 72%))",
    "domain": "elements",
    "type": "color",
    "element": "Button"
  }
  ,{
    "name": "--ne-button-icon-margin",
    "defaultValue": "var(--ne-button-icon-margin, 1em)",
    "domain": "elements",
    "type": "unit",
    "element": "Button"
  }
  ,{
    "name": "--ne-button-border-radius",
    "defaultValue": "var(--ne-button-border-radius, 5px)",
    "domain": "elements",
    "type": "unit",
    "element": "Button"
  }
  ,{
    "name": "--ne-button-font-size",
    "defaultValue": "var(--ne-button-font-size, inherit)",
    "domain": "elements",
    "type": "unit",
    "element": "Button"
  }
  ,{
    "name": "--ne-button-y-padding",
    "defaultValue": "var(--ne-button-y-padding, 1em)",
    "domain": "elements",
    "type": "unit",
    "element": "Button"
  }
  ,{
    "name": "--ne-button-x-padding",
    "defaultValue": "var(--ne-button-x-padding, 2em)",
    "domain": "elements",
    "type": "unit",
    "element": "Button"
  }
  ,{
    "name": "--ne-button-shadow",
    "defaultValue": "var(--ne-button-shadow, 0 1px 2px rgba(0, 0, 0, 0.16))",
    "domain": "elements",
    "type": "box-shadow",
    "element": "Button"
  }
]
