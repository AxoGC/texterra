export interface ItemTemplate {
  name: Record<string, string>;
  stack?: number;
}

const items: Record<string, ItemTemplate> = {}

export default items
