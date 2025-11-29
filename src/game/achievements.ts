export interface Achievement {
  id: string;
  icon: string;
  name: Record<string, string>;
  description: Record<string, string>;
  rarity: 'common' | 'rare' | 'epic';
  category: 'combat' | 'agriculture' | 'alchemy' | 'exploration' | 'achievement' | 'collection';
  reward?: {
    money?: number;
    attributes?: Record<string, number>;
  };
}

const achievements: Achievement[] = [
  // ==================== 战斗类 (Combat) ====================
  {
    id: 'first_blood',
    icon: '⚔️',
    name: { zh: '初显身手', en: 'First Blood' },
    description: { zh: '赢得第一场战斗胜利', en: 'Win your first combat battle' },
    rarity: 'common',
    category: 'combat',
    reward: { money: 50, attributes: { 'strength': 1 } }
  },
  {
    id: 'warrior_spirit',
    icon: '🛡️',
    name: { zh: '战士精神', en: 'Warrior Spirit' },
    description: { zh: '赢得10场战斗胜利', en: 'Win 10 combat battles' },
    rarity: 'rare',
    category: 'combat',
    reward: { money: 200, attributes: { 'strength': 3 } }
  },
  {
    id: 'epic_fighter',
    icon: '🐉',
    name: { zh: '传奇战士', en: 'Legendary Fighter' },
    description: { zh: '赢得50场战斗胜利', en: 'Win 50 combat battles' },
    rarity: 'epic',
    category: 'combat',
    reward: { money: 1000, attributes: { 'strength': 10, 'agility': 5 } }
  },
  {
    id: 'dragon_slayer',
    icon: '🐲',
    name: { zh: '屠龙者', en: 'Dragon Slayer' },
    description: { zh: '击败龙族boss', en: 'Defeat the dragon boss' },
    rarity: 'epic',
    category: 'combat',
    reward: { money: 5000, attributes: { 'strength': 20 } }
  },

  // ==================== 农业类 (Agriculture) ====================
  {
    id: 'green_thumb',
    icon: '🌱',
    name: { zh: '绿手指', en: 'Green Thumb' },
    description: { zh: '种植第一批作物', en: 'Plant your first crops' },
    rarity: 'common',
    category: 'agriculture',
    reward: { money: 30, attributes: { 'agriculture': 1 } }
  },
  {
    id: 'master_farmer',
    icon: '🌾',
    name: { zh: '农业大师', en: 'Master Farmer' },
    description: { zh: '收获100份作物', en: 'Harvest 100 crops' },
    rarity: 'rare',
    category: 'agriculture',
    reward: { money: 300, attributes: { 'agriculture': 5 } }
  },
  {
    id: 'bountiful_harvest',
    icon: '🚜',
    name: { zh: '丰收时节', en: 'Bountiful Harvest' },
    description: { zh: '一次收获50份作物', en: 'Harvest 50 crops at once' },
    rarity: 'epic',
    category: 'agriculture',
    reward: { money: 800, attributes: { 'agriculture': 10 } }
  },
  {
    id: 'agricultural_excellence',
    icon: '🏆',
    name: { zh: '农业卓越', en: 'Agricultural Excellence' },
    description: { zh: '拥有所有种类的作物', en: 'Own all types of crops' },
    rarity: 'epic',
    category: 'agriculture',
    reward: { money: 3000, attributes: { 'agriculture': 15 } }
  },

  // ==================== 炼金类 (Alchemy) ====================
  {
    id: 'alchemist_apprentice',
    icon: '🧪',
    name: { zh: '炼金学徒', en: 'Alchemist Apprentice' },
    description: { zh: '制作第一瓶药剂', en: 'Craft your first potion' },
    rarity: 'common',
    category: 'alchemy',
    reward: { money: 40, attributes: { 'alchemy': 1 } }
  },
  {
    id: 'potion_master',
    icon: '🧬',
    name: { zh: '药剂大师', en: 'Potion Master' },
    description: { zh: '制作50瓶药剂', en: 'Craft 50 potions' },
    rarity: 'rare',
    category: 'alchemy',
    reward: { money: 250, attributes: { 'alchemy': 5 } }
  },
  {
    id: 'universal_antidote',
    icon: '⚗️',
    name: { zh: '万能解药', en: 'Universal Antidote' },
    description: { zh: '制作所有基础药剂类型', en: 'Craft all basic potion types' },
    rarity: 'epic',
    category: 'alchemy',
    reward: { money: 900, attributes: { 'alchemy': 12, 'spirit': 5 } }
  },
  {
    id: 'elixir_of_life',
    icon: '💧',
    name: { zh: '生命长生药', en: 'Elixir of Life' },
    description: { zh: '制作传奇长生药', en: 'Craft the epic Elixir of Life' },
    rarity: 'epic',
    category: 'alchemy',
    reward: { money: 4000, attributes: { 'alchemy': 20, 'spirit': 15 } }
  },

  // ==================== 探索类 (Exploration) ====================
  {
    id: 'first_steps',
    icon: '👣',
    name: { zh: '初出茅庐', en: 'First Steps' },
    description: { zh: '探索3个地点', en: 'Explore 3 locations' },
    rarity: 'common',
    category: 'exploration',
    reward: { money: 50, attributes: { 'agility': 1 } }
  },
  {
    id: 'world_explorer',
    icon: '🗺️',
    name: { zh: '世界探险家', en: 'World Explorer' },
    description: { zh: '探索20个地点', en: 'Explore 20 locations' },
    rarity: 'rare',
    category: 'exploration',
    reward: { money: 400, attributes: { 'agility': 5, 'appearance': 3 } }
  },
  {
    id: 'cartographer',
    icon: '🧭',
    name: { zh: '制图师', en: 'Cartographer' },
    description: { zh: '探索所有隐藏地点', en: 'Explore all hidden locations' },
    rarity: 'epic',
    category: 'exploration',
    reward: { money: 1200, attributes: { 'agility': 10 } }
  },
  {
    id: 'dimensional_traveler',
    icon: '🌌',
    name: { zh: '次元旅行者', en: 'Dimensional Traveler' },
    description: { zh: '发现异世界入口', en: 'Discover the entrance to another dimension' },
    rarity: 'epic',
    category: 'exploration',
    reward: { money: 5000, attributes: { 'spirit': 20, 'agility': 10 } }
  },

  // ==================== 成就类 (Achievement) ====================
  {
    id: 'money_hoarder',
    icon: '💰',
    name: { zh: '财富收藏家', en: 'Money Hoarder' },
    description: { zh: '拥有1000金币', en: 'Own 1000 coins' },
    rarity: 'common',
    category: 'achievement',
    reward: { money: 100 }
  },
  {
    id: 'rich_merchant',
    icon: '💎',
    name: { zh: '富商', en: 'Rich Merchant' },
    description: { zh: '拥有10000金币', en: 'Own 10000 coins' },
    rarity: 'rare',
    category: 'achievement',
    reward: { money: 500 }
  },
  {
    id: 'attribute_master',
    icon: '📊',
    name: { zh: '属性大师', en: 'Attribute Master' },
    description: { zh: '任意属性达到50点', en: 'Reach 50 points in any attribute' },
    rarity: 'epic',
    category: 'achievement',
    reward: { money: 800 }
  },
  {
    id: 'epic_hero',
    icon: '👑',
    name: { zh: '传奇英雄', en: 'Legendary Hero' },
    description: { zh: '解锁所有传奇成就', en: 'Unlock all epic achievements' },
    rarity: 'epic',
    category: 'achievement',
    reward: { money: 10000, attributes: { 'spirit': 30 } }
  },

  // ==================== 收集类 (Collection) ====================
  {
    id: 'collector_beginner',
    icon: '📦',
    name: { zh: '收集家新手', en: 'Collector Beginner' },
    description: { zh: '收集10种不同物品', en: 'Collect 10 different items' },
    rarity: 'common',
    category: 'collection',
    reward: { money: 60 }
  },
  {
    id: 'item_enthusiast',
    icon: '🎁',
    name: { zh: '物品爱好者', en: 'Item Enthusiast' },
    description: { zh: '收集30种不同物品', en: 'Collect 30 different items' },
    rarity: 'rare',
    category: 'collection',
    reward: { money: 350, attributes: { 'spirit': 3 } }
  },
  {
    id: 'complete_collection',
    icon: '📚',
    name: { zh: '完整收集', en: 'Complete Collection' },
    description: { zh: '收集所有物品', en: 'Collect all items' },
    rarity: 'epic',
    category: 'collection',
    reward: { money: 1500, attributes: { 'appearance': 5 } }
  },
  {
    id: 'artifact_guardian',
    icon: '🏺',
    name: { zh: '遗物守护者', en: 'Artifact Guardian' },
    description: { zh: '拥有所有传奇物品', en: 'Own all epic items' },
    rarity: 'epic',
    category: 'collection',
    reward: { money: 6000, attributes: { 'spirit': 20, 'appearance': 15 } }
  },
]

export default achievements
