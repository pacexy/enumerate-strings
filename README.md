# enumerate-strings
Enumerate strings that meet certain restrictions

### Usage
```typescript
const strings: string[] = enumerateStrings(options: Options)
```

### Options
```typescript
interface Options {
  length: number
  max: number
  min: number
  meaningful: boolean
  startsWith: string
  contain: string
  endsWith: string
}
```
