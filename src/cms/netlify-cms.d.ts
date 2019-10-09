declare module 'netlify-cms' {  
  export interface CmsEntry {
    getIn<T>(path: string[]): T
  }

  export interface CmsPagePreview {
    entry: CmsEntry
    widgetFor(value: string): any
  }
}
