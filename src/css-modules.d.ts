// For CSS modules
declare module '*.module.css' {
  const classes: { readonly [key: string]: string }
  export default classes
}

// For regular CSS
declare module '*.css' {
  const content: { [className: string]: string }
  export default content
}
