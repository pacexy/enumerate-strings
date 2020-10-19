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
  charset?: string[]
  regex?: RegExp
}
```
