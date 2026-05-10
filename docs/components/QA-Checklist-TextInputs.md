# QA Checklist - TextInput & Textarea

Accessibility
- [ ] Labels correctly associated using `for` / `htmlFor` and `id`.
- [ ] `aria-invalid` present on error states.
- [ ] `aria-describedby` points to helper/error text when present.
- [ ] Keyboard navigation: tab order logical and focus visible.

Visual / UX
- [ ] Focus ring visible and consistent with token color.
- [ ] Hover/focus/disabled/error/success styles match spec.
- [ ] Small and Large sizes reflect padding and font-size tokens.

Functional
- [ ] Disabled and ReadOnly behave correctly (no input, correct styling).
- [ ] Loading shows spinner and prevents input if required.
- [ ] Textarea counter works and updates while typing.

Performance
- [ ] No unnecessary rerenders in React usage (memoize where needed).

Notes:
- Run contrast checks on helper/error text colors.
- Manually test on mobile and desktop viewports for responsive layout.
