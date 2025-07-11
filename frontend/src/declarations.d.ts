declare module '*.svg' {
  import * as React from 'react';
  export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}

// Vite environment variables
interface IImportMetaEnv {
  readonly VITE_API_URL?: string;
  readonly DEV: boolean;
  readonly PROD: boolean;
}

interface IImportMeta {
  readonly env: IImportMetaEnv;
} 