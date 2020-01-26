module.exports = {
  /* Border API */
  '--selectBorder': 'var(--ne-select-border, 1px solid hsl(0, 0%, 89%))',
  '--selectHoverBorder': 'var(--ne-select-hover-border, var(--ne-select-border, 1px solid hsl(0, 0%, 89%)))',
  '--selectFocusBorder': 'var(--ne-select-focus-border, var(--ne-select-border, 1px solid hsl(235, 100%, 60%)))',
  '--selectDisabledBorder': 'var(--ne-select-disabled-border, 1px solid hsl(233, 34%, 96%))',

  /* Background API */
  '--selectBackground': 'var(--ne-select-background, var(--ne-global-background, #FFF))',
  '--selectHoverBackground': 'var(--ne-select-hover-background, var(--ne-select-background, #FFF))',
  '--selectFocusBackground': 'var(--ne-select-focus-background, var(--ne-select-background, #FFF))',
  '--selectDisabledBackground': 'var(--ne-select-disabled-background, hsl(233, 34%, 96%))',
  '--selectOptionCheckedBackground': 'var(--ne-select-option-checked-background, hsl(235, 100%, 60%))',

  /* Foreground API */
  '--selectForeground': 'var(--ne-select-color, var(--ne-global-foreground, hsl(0, 0%, 13%)))',
  '--selectHoverForeground': 'var(--ne-select-hover-color, var(--ne-select-color, hsl(0, 0%, 13%)))',
  '--selectFocusForeground': 'var(--ne-select-focus-color, var(--ne-select-color, hsl(0, 0%, 13%)))',
  '--selectDisabledForeground': 'var(--ne-select-disabled-color, hsl(233, 14%, 72%))',
  '--selectOptionCheckedForeground': 'var(--ne-select-option-checked-color, #FFF)',

  /* Misc API */
  '--selectBorderRadius': 'var(--ne-select-radius, 5px)',
  '--selectWidth': 'var(--ne-select-width, 100%)',
  '--selectPadding': 'var(--ne-select-padding, 0.5em)',
  '--selectArrowIcon': 'var(--ne-select-arrow-icon, url(data:image/svg+xml;utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M7 8l5-5 5 5m0 8l-5 5-5-5" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" fill="none" stroke="currentColor" stroke-miterlimit="10"/></svg>))',
  '--selectArrowSize': 'var(--ne-select-arrow-size, 1rem)',
  '--selectShadow': 'var(--ne-select-shadow, 0 1px 2px rgba(0, 0, 0, 0.06))',
};
