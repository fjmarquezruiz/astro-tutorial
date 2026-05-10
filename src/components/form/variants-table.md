# Variants Table: TextInput & Textarea

Cada componente: 8 estados × 2 tamaños × 2 orientaciones = 32 variantes

Props: State | Size | Orientation

States:
- Default
- Hover
- Focus
- Disabled
- Error
- Success
- ReadOnly
- Loading

Sizes:
- Small
- Large

Orientation:
- Horizontal
- Vertical

Ejemplo de filas (CSV style):

component,state,size,orientation
TextInput,Default,Small,Horizontal
TextInput,Default,Small,Vertical
TextInput,Default,Large,Horizontal
TextInput,Default,Large,Vertical
... (y así para cada combinación)
