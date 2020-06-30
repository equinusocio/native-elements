module.exports = [
  {
    'name': '--ne-global-background',
    'tokenValue': 'var(--ne-global-background, hsl(220, 43%, 99%))',
    'defaultValue': 'hsl(220, 43%, 99%)',
    'domain': 'document',
    'type': 'color',
    'element': null
  }
  ,{
    'name': '--ne-global-foreground',
    'tokenValue': 'var(--ne-global-foreground, hsl(0, 0%, 0%))',
    'defaultValue': 'hsl(0, 0%, 0%)',
    'domain': 'document',
    'type': 'color',
    'element': null
  }
  ,{
    'name': '--ne-body-font-family',
    'tokenValue': 'var(--ne-body-font-family, sans-serif)',
    'defaultValue': 'sans-serif',
    'domain': 'document',
    'type': 'text',
    'element': null
  }
  ,{
    'name': '--ne-root-font-size',
    'tokenValue': 'var(--ne-root-font-size, 100%)',
    'defaultValue': '100%',
    'domain': 'document',
    'type': 'unit',
    'element': null
  }
  ,{
    'name': '--ne-body-font-size',
    'tokenValue': 'var(--ne-body-font-size, 1.125rem)',
    'defaultValue': '1.125rem',
    'domain': 'document',
    'type': 'unit',
    'element': null
  }
  ,{
    'name': '--ne-vertical-leading',
    'tokenValue': 'var(--ne-vertical-leading, 1.5em)',
    'defaultValue': '1.5em',
    'domain': 'document',
    'type': 'unit',
    'element': null
  }
  ,{
    'name': '--ne-selection-foreground',
    'tokenValue': 'var(--ne-selection-foreground, hsl(0, 0%, 100%))',
    'defaultValue': 'hsl(0, 0%, 100%)',
    'domain': 'document',
    'type': 'color',
    'element': null
  }
  ,{
    'name': '--ne-global-box-sizing',
    'tokenValue': 'var(--ne-global-box-sizing, border-box)',
    'defaultValue': 'border-box',
    'domain': 'document',
    'type': 'text',
    'element': null
  }
  ,{
    'name': '--ne-selection-background',
    'tokenValue': 'var(--ne-selection-background, hsl(233, 64%, 72%))',
    'defaultValue': 'hsl(233, 64%, 72%)',
    'domain': 'document',
    'type': 'color',
    'element': null
  }
  ,{
    'name': '--ne-outline-width',
    'tokenValue': 'var(--ne-outline-width, 2px)',
    'defaultValue': '2px',
    'domain': 'document',
    'type': 'unit',
    'element': null
  }
  ,{
    'name': '--ne-outline-color',
    'tokenValue': 'var(--ne-outline-color, hsl(0, 0%, 0%))',
    'defaultValue': 'hsl(0, 0%, 0%)',
    'domain': 'document',
    'type': 'color',
    'element': null
  }

  /**
   * Typography domain properties
   */
  ,{
    'name': '--ne-basic-line-height',
    'tokenValue': 'var(--ne-basic-line-height, 1.5)',
    'defaultValue': '1.5',
    'domain': 'typography',
    'type': 'unit',
    'element': null
  }
  ,{
    'name': '--ne-headings-scale',
    'tokenValue': 'var(--ne-headings-scale, 1.25)',
    'defaultValue': '1.25',
    'domain': 'typography',
    'type': 'unit',
    'element': null
  }
  ,{
    'name': '--ne-quote-font-size',
    'tokenValue': 'var(--ne-quote-font-size, 2rem)',
    'defaultValue': '2rem',
    'domain': 'typography',
    'type': 'unit',
    'element': null
  }
  ,{
    'name': '--ne-cite-foreground',
    'tokenValue': 'var(--ne-cite-foreground, hsl(220, 100%, 50%))',
    'defaultValue': 'hsl(220, 100%, 50%)',
    'domain': 'typography',
    'type': 'color',
    'element': null
  }
  ,{
    'name': '--ne-cite-font-size',
    'tokenValue': 'var(--ne-cite-font-size, 1rem)',
    'defaultValue': '1rem',
    'domain': 'typography',
    'type': 'unit',
    'element': null
  }
  ,{
    'name': '--ne-cite-start-sign',
    'tokenValue': 'var(--ne-cite-start-sign, \'—\')',
    'defaultValue': '\'—\'',
    'domain': 'typography',
    'type': 'text',
    'element': null
  }
  ,{
    'name': '--ne-links-foreground',
    'tokenValue': 'var(--ne-links-foreground, hsl(220, 100%, 50%))',
    'defaultValue': 'hsl(220, 100%, 50%)',
    'domain': 'typography',
    'type': 'color',
    'element': null
  }
  ,{
    'name': '--ne-links-active-foreground',
    'tokenValue': 'var(--ne-links-active-foreground, hsl(233, 64%, 52%))',
    'defaultValue': 'hsl(233, 64%, 52%)',
    'domain': 'typography',
    'type': 'color',
    'element': null
  }
  ,{
    'name': '--ne-del-foreground',
    'tokenValue': 'var(--ne-del-foreground, hsl(337, 74%, 31%))',
    'defaultValue': 'hsl(337, 74%, 31%)',
    'domain': 'typography',
    'type': 'color',
    'element': null
  }
  ,{
    'name': '--ne-del-background',
    'tokenValue': 'var(--ne-del-background, hsl(0, 100%, 94%))',
    'defaultValue': 'hsl(0, 100%, 94%)',
    'domain': 'typography',
    'type': 'color',
    'element': null
  }
  ,{
    'name': '--ne-ins-foreground',
    'tokenValue': 'var(--ne-ins-foreground, hsl(161, 98%, 18%))',
    'defaultValue': 'hsl(161, 98%, 18%)',
    'domain': 'typography',
    'type': 'color',
    'element': null
  }
  ,{
    'name': '--ne-ins-background',
    'tokenValue': 'var(--ne-ins-background, hsl(138, 100%, 88%))',
    'defaultValue': 'hsl(138, 100%, 88%)',
    'domain': 'typography',
    'type': 'color',
    'element': null
  }
  ,{
    'name': '--ne-kbd-color',
    'tokenValue': 'var(--ne-kbd-color, hsl(233, 34%, 96%))',
    'defaultValue': 'hsl(233, 34%, 96%)',
    'domain': 'typography',
    'type': 'color',
    'element': null
  }
  ,{
    'name': '--ne-kbd-border-radius',
    'tokenValue': 'var(--ne-kbd-border-radius, 4px)',
    'defaultValue': '4px',
    'domain': 'typography',
    'type': 'unit',
    'element': null
  }
  ,{
    'name': '--ne-mark-foreground',
    'tokenValue': 'var(--ne-mark-foreground, hsl(20, 100%, 26%))',
    'defaultValue': 'hsl(20, 100%, 26%)',
    'domain': 'typography',
    'type': 'color',
    'element': null
  }
  ,{
    'name': '--ne-mark-background',
    'tokenValue': 'var(--ne-mark-background, hsl(57, 100%, 60%))',
    'defaultValue': 'hsl(57, 100%, 60%)',
    'domain': 'typography',
    'type': 'color',
    'element': null
  }
  ,{
    'name': '--ne-inline-code-border-radius',
    'tokenValue': 'var(--ne-inline-code-border-radius, 2px)',
    'defaultValue': '2px',
    'domain': 'typography',
    'type': 'unit',
    'element': null
  }
  ,{
    'name': '--ne-inline-code-background',
    'tokenValue': 'var(--ne-inline-code-background, hsl(220, 10%, 95%))',
    'defaultValue': 'hsl(220, 10%, 95%)',
    'domain': 'typography',
    'type': 'color',
    'element': null
  }
];
