declare module 'netlify-cms' {
  export function registerPreviewTemplate(name: string, component: any): void
  
  export interface CmsEntry {
    getIn<T>(path: string[]): T
  }

  export interface CmsPagePreview {
    entry: CmsEntry
    widgetFor(value: string): any
  }
}
