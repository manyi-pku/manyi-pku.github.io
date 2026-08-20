# Editing Notes

This deck is written in Quarto Markdown and rendered as reveal.js slides.

## Add A Slide

Use a level-2 heading. The class controls the footer progress state:

```markdown
## New Motivation Slide {.motivation-slide}

Your content here.
```

Available section classes:

- `.motivation-slide`
- `.model-slide`
- `.results-slide`
- `.summary-slide`

The footer progress bar is inserted automatically by `progress.js`; do not copy
or paste progress-bar HTML into individual slides.

## Common Quarto Patterns

Use fenced divs for layout blocks:

```markdown
::: {.model-layout}

Left or right content here.

:::
```

Use span classes for inline styling:

```markdown
[important term]{.key-term}
```

Images can receive classes directly:

```markdown
![](assets/spheroid_model.svg){.model-figure}
```
