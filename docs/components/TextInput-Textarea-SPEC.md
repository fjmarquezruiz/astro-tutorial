# Especificación: TextInput y Textarea

Este documento define los componentes `TextInput` y `Textarea` para el design system "Manteca-Colora-DS".

## Resumen
Objetivo: crear dos Component Sets en Figma (TextInput y Textarea) con todas las variantes de estado, dos tamaños y dos orientaciones (horizontal/vertical). Además extraer tokens mínimos y documentar la API y accesibilidad.

## Propiedad del componente
- Nombre: TextInput
- Nombre: Textarea
- Ubicación sugerida en Figma: `components/form-controls` o `components/inputs`

## Variantes requeridas
Propiedades del Component Set (Figma):
- State: Default, Hover, Focus, Disabled, Error, Success, ReadOnly, Loading
- Size: Small, Large
- Orientation: Horizontal, Vertical

Combinaciones mínimas por componente: 8 estados × 2 tamaños × 2 orientaciones = 32 variantes.

### Variantes extra (opcional)
- WithLabel: Yes/No
- WithPrefix: Icon/Text
- WithSuffix: Icon/Text
- WithCounter (textarea)
- HelperText: Yes/No

## Tokens mínimos a extraer
- Colors:
  - color.input.bg: #FFFFFF
  - color.input.text: #0B0B0B
  - color.input.placeholder: #8A8A8A
  - color.input.border: #E3E5E8
  - color.input.borderHover: #C9CDD1
  - color.input.borderFocus: #6EA8FE
  - color.input.error: #E04E4E
  - color.input.success: #16A34A
  - color.input.disabledBg: #F5F6F7
  - color.input.disabledText: #9CA3AF
- Typography:
  - font.input.family: Inter, system
  - font.input.size.small: 14px
  - font.input.size.large: 16px
  - font.input.lineHeight: 20px
- Spacing & Layout:
  - spacing.input.padding.small: 8px 12px
  - spacing.input.padding.large: 12px 16px
  - spacing.labelGap: 8px
  - radius.input: 8px
- Effects:
  - focusRing.width: 2px
  - focusRing.color: color.input.borderFocus

> Notas: Los valores arriba son ejemplos. Reemplazar por los tokens reales del archivo Figma o del sistema de diseño.

## API / Props (pseudocódigo)
Common props (both components):
- id?: string
- name?: string
- label?: string
- placeholder?: string
- value?: string
- defaultValue?: string
- onChange?: (value: string) => void
- size: 'small' | 'large'
- orientation: 'horizontal' | 'vertical'
- state: 'default' | 'hover' | 'focus' | 'disabled' | 'error' | 'success' | 'readOnly' | 'loading'
- helperText?: string
- errorText?: string
- prefix?: ReactNode
- suffix?: ReactNode
- className?: string
Textarea extras:
- rows?: number
- maxLength?: number
- showCounter?: boolean

## HTML / ARIA
- Use <label for={id}> para etiquetar
- Input attributes:
  - aria-invalid="true" when state === 'error'
  - aria-describedby="id-of-helper-or-error" when helper/error text exists
  - readonly attribute when state === 'readOnly'
  - disabled attribute when state === 'disabled'
- For loading state, provide role="status" on a visually hidden element or aria-live region if content changes

## Diseño visual por estado
- Default: border: color.input.border; background: color.input.bg; text: color.input.text
- Hover: border: color.input.borderHover
- Focus: border: color.input.borderFocus + focus ring (focusRing.width + color.input.borderFocus)
- Disabled: background: color.input.disabledBg; text: color.input.disabledText; border: transparent
- Error: border: color.input.error; show errorText en rojo y icono de error
- Success: border: color.input.success; show success icon (opcional)
- ReadOnly: background: color.input.disabledBg; cursor: default
- Loading: show spinner en sufijo y estado visual acorde

## Comportamiento y UX
- Labels: si orientation === 'horizontal', mostrar label a la izquierda con ancho fijo (ej. 120px) y align middle. Si orientation === 'vertical', label encima del input.
- Auto layout: use Figma Auto Layout con padding tokenizado. Para horizontal, Auto Layout row con gap tokenizado.
- Helper text y error text debajo del input; mostrar errorText cuando state === 'error'.

## Figma: pasos prácticos para crear los Component Sets
1. Crear page `components/form-controls`.
2. Crear text styles y color styles basados en tokens.
3. Crear frame base `TextInput/Base`:
   - Auto Layout vertical (label + input frame + helper row)
   - input frame: Auto Layout horizontal (prefix | input area | suffix)
   - aplicar padding según size
4. Duplicar base para `Textarea/Base` (ajustar height y rows)
5. Convertir en Variants (Combine as Variants) y añadir propiedades: State, Size, Orientation.
6. Para cada variante, ajustar visual (border, icons, helper text).
7. Añadir ejemplos de uso (stories) en la misma página.

## Checklist de QA (accesibilidad y visual)
- [ ] Focus visible y cumple especificaciones de keyboard navigation
- [ ] aria-invalid y aria-describedby correctos en error
- [ ] Contraste de texto y placeholders >= AA (4.5:1) donde aplique
- [ ] Estados hover/focus comprobados en prototipo
- [ ] Tamaños small/large reflejados en padding y line-height

## Snippets de código (ejemplo rápido)
HTML - TextInput (vertical, default, large):

```html
<label for="name">Nombre</label>
<input id="name" name="name" type="text" placeholder="Escribe tu nombre" />
<small id="name-helper">Puedes usar tu nombre real</small>
```

React (pseudocódigo):

```jsx
function TextInput({ id, label, size='large', orientation='vertical', state='default', ...props }) {
  return (
    <div className={`input input--${size} input--${orientation} input--${state}`}>
      {label && <label htmlFor={id}>{label}</label>}
      <div className="input__field">
        <input id={id} {...props} />
      </div>
    </div>
  )
}
```

## Entregables
- Documento de especificación (este archivo)
- Tokens mínimos en JSON (se puede generar)
- Guía paso a paso para crear componentes en Figma
- Snippets de ejemplo HTML/React

---

### Próximo paso: implementación
He marcado la tarea de crear la especificación como "in-progress". Si confirmas, la marco como completada y puedo proceder con la siguiente tarea: "Aprobar lista de estados y tamaños" o crear los componentes en Figma (necesitaré link de selección o permisos).