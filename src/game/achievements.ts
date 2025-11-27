
export interface Achievement {
  id: string;
  icon: string;
  name: Record<string, string>;
  description: Record<string, string>;
}

const achievements: Achievement[] = [
  {
    id: 'sample1',
    icon: 'sample1.ico',
    name: { zh: '示例成就1' },
    description: { zh: '示例成就1的描述' },
  },
  {
    id: 'sample2',
    icon: 'sample2.ico',
    name: { zh: '示例成就2' },
    description: { zh: '示例成就2的描述' },
  },
  {
    id: 'sample3',
    icon: 'sample3.ico',
    name: { zh: '示例成就3' },
    description: { zh: '示例成就3的描述' },
  },
]

export default achievements
