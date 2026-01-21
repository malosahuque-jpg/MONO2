export enum ViewMode {
  PREVIEW = 'PREVIEW',
  CODE = 'CODE',
}

export interface LiquidFile {
  path: string;
  title: string;
  description: string;
  code: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export enum CollectionType {
  SEIKO = 'Seiko Mod',
  VINTAGE = 'Vintage',
  LUXE = 'Luxe',
}