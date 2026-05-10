Form components: TextInput & Textarea

Location: `src/components/form/`

Files:
- `tokens.json`: design tokens used by the components
- `TextInput.jsx`: React component implementation
- `Textarea.jsx`: React component implementation
- `form.css`: CSS styles for the components
- `variants-table.md`: table of variants created

Usage example:

```jsx
import TextInput from './components/form/TextInput';

function Demo() {
  return (
    <div>
      <TextInput id="name" label="Nombre" placeholder="Escribe tu nombre" />
      <Textarea id="bio" label="Biografía" placeholder="Escribe una bio" />
    </div>
  )
}
```

Notes:
- These components are simple examples to match the Figma variants. You can adapt for your framework (Astro, React) and add TypeScript types if needed.
- For production, convert styles to CSS Modules, Tailwind tokens, or CSS-in-JS as appropriate.
