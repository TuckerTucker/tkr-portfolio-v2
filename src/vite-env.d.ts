/// <reference types="vite/client" />

// Declare module for raw YAML imports
declare module '*.yml?raw' {
  const content: string
  export default content
}

declare module '*.yaml?raw' {
  const content: string
  export default content
}
