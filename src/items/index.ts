export interface ItemTemplate {
  name: Record<string, string>;
  description: Record<string, string>;
  icon: string;
  stack?: number;
}

const items: Record<string, ItemTemplate> = {
  // 货币类
  "coin": {
    name: { "en": "Coin", "zh": "金币" },
    description: { "en": "Common currency used for trading", "zh": "用于交易的通用货币" },
    icon: "🪙",
    stack: 999
  },
  
  // 消耗品类
  "small_health_potion": {
    name: { "en": "Small Health Potion", "zh": "小型生命药水" },
    description: { "en": "Restores a small amount of health", "zh": "恢复少量生命值" },
    icon: "🧪",
    stack: 10
  },
  
  "large_health_potion": {
    name: { "en": "Large Health Potion", "zh": "大型生命药水" },
    description: { "en": "Restores a large amount of health", "zh": "恢复大量生命值" },
    icon: "🔮",
    stack: 5
  },
  
  "bread": {
    name: { "en": "Bread", "zh": "面包" },
    description: { "en": "Freshly baked bread, restores satiety", "zh": "新鲜烤制的面包，恢复饱食度" },
    icon: "🍞",
    stack: 20
  },
  
  "energy_drink": {
    name: { "en": "Energy Drink", "zh": "能量饮料" },
    description: { "en": "Restores energy quickly", "zh": "快速恢复能量" },
    icon: "🥤",
    stack: 8
  },
  
  // 材料类
  "herb": {
    name: { "en": "Medicinal Herb", "zh": "药草" },
    description: { "en": "Common herb used in alchemy", "zh": "炼金术中常用的草药" },
    icon: "🌿",
    stack: 50
  },
  
  "rare_herb": {
    name: { "en": "Rare Herb", "zh": "稀有草药" },
    description: { "en": "Rare herb with magical properties", "zh": "具有魔法特性的稀有草药" },
    icon: "🍀",
    stack: 20
  },
  
  "iron_ore": {
    name: { "en": "Iron Ore", "zh": "铁矿石" },
    description: { "en": "Unrefined iron ore", "zh": "未精炼的铁矿石" },
    icon: "🪨",
    stack: 30
  },
  
  "magic_crystal": {
    name: { "en": "Magic Crystal", "zh": "魔法水晶" },
    description: { "en": "Crystal infused with magical energy", "zh": "充满魔法能量的水晶" },
    icon: "💎",
    stack: 5
  },
  
  // 装备类（不可堆叠）
  "wooden_sword": {
    name: { "en": "Wooden Sword", "zh": "木剑" },
    description: { "en": "Beginner's training sword", "zh": "初学者训练用剑" },
    icon: "⚔️"
  },
  
  "iron_sword": {
    name: { "en": "Iron Sword", "zh": "铁剑" },
    description: { "en": "Standard iron sword", "zh": "标准铁剑" },
    icon: "🗡️"
  },
  
  "leather_armor": {
    name: { "en": "Leather Armor", "zh": "皮甲" },
    description: { "en": "Basic protective leather armor", "zh": "基础防护皮甲" },
    icon: "🛡️"
  },
  
  "magic_amulet": {
    name: { "en": "Magic Amulet", "zh": "魔法护身符" },
    description: { "en": "Amulet that enhances spiritual power", "zh": "增强精神力量的护身符" },
    icon: "📿"
  },
  
  // 任务物品
  "ancient_artifact": {
    name: { "en": "Ancient Artifact", "zh": "古代神器" },
    description: { "en": "Mysterious artifact from ancient times", "zh": "来自古代的神秘神器" },
    icon: "🏺"
  },
  
  "letter": {
    name: { "en": "Sealed Letter", "zh": "密封的信件" },
    description: { "en": "Important sealed letter", "zh": "重要的密封信件" },
    icon: "✉️"
  },
  
  // 农业相关
  "wheat_seeds": {
    name: { "en": "Wheat Seeds", "zh": "小麦种子" },
    description: { "en": "Seeds for planting wheat", "zh": "用于种植小麦的种子" },
    icon: "🌾",
    stack: 100
  },
  
  "carrot": {
    name: { "en": "Carrot", "zh": "胡萝卜" },
    description: { "en": "Fresh carrot, can be eaten or used in cooking", "zh": "新鲜胡萝卜，可以食用或用于烹饪" },
    icon: "🥕",
    stack: 40
  },
  
  // 炼金相关
  "empty_bottle": {
    name: { "en": "Empty Bottle", "zh": "空瓶子" },
    description: { "en": "Empty glass bottle for potion making", "zh": "用于制作药剂的空玻璃瓶" },
    icon: "🍶",
    stack: 25
  },
  
  "mana_potion": {
    name: { "en": "Mana Potion", "zh": "法力药水" },
    description: { "en": "Restores spiritual energy", "zh": "恢复精神能量" },
    icon: "🔵",
    stack: 8
  },
  
  // 新增一些有趣物品
  "key": {
    name: { "en": "Old Key", "zh": "旧钥匙" },
    description: { "en": "A rusty old key, might open something important", "zh": "生锈的旧钥匙，可能能打开重要的东西" },
    icon: "🔑"
  },
  
  "map": {
    name: { "en": "Treasure Map", "zh": "藏宝图" },
    description: { "en": "Map that leads to hidden treasure", "zh": "指向隐藏宝藏的地图" },
    icon: "🗺️"
  },
  
  "fishing_rod": {
    name: { "en": "Fishing Rod", "zh": "钓鱼竿" },
    description: { "en": "Basic fishing rod for catching fish", "zh": "用于钓鱼的基础钓竿" },
    icon: "🎣"
  },
  
  "apple": {
    name: { "en": "Apple", "zh": "苹果" },
    description: { "en": "Fresh red apple, nutritious and delicious", "zh": "新鲜的红苹果，营养又美味" },
    icon: "🍎",
    stack: 30
  }
}

export default items
