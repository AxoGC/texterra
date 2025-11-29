export interface Quest {
  name: Record<string, string>;
  description: Record<string, string>;
  steps: Record<string, QuestStep>;
}

export interface QuestStep {
  next: string[];
  name: Record<string, string>;
  description: Record<string, string>;
}

const quests: Record<string, Quest> = {
  // 新手引导任务 - 线性任务
  "tutorial": {
    name: {
      "zh": "新手引导",
      "en": "Tutorial"
    },
    description: {
      "zh": "学习游戏的基本操作和功能",
      "en": "Learn the basic operations and functions of the game"
    },
    steps: {
      "start": {
        next: ["explore"],
        name: {
          "zh": "开始冒险",
          "en": "Start Adventure"
        },
        description: {
          "zh": "欢迎来到游戏世界！让我们开始你的第一次冒险。",
          "en": "Welcome to the game world! Let's start your first adventure."
        }
      },
      "explore": {
        next: ["collect"],
        name: {
          "zh": "探索周围",
          "en": "Explore Surroundings"
        },
        description: {
          "zh": "在村庄周围走走，熟悉环境。点击不同的地点进行探索。",
          "en": "Walk around the village and familiarize yourself with the environment. Click on different locations to explore."
        }
      },
      "collect": {
        next: ["complete"],
        name: {
          "zh": "收集资源",
          "en": "Collect Resources"
        },
        description: {
          "zh": "收集5个木材和3个石头。这些是制作基础工具的材料。",
          "en": "Collect 5 wood and 3 stone. These are materials for making basic tools."
        }
      },
      "complete": {
        next: [],
        name: {
          "zh": "完成任务",
          "en": "Complete Quest"
        },
        description: {
          "zh": "恭喜！你已经完成了新手引导。现在你可以自由探索这个世界了。",
          "en": "Congratulations! You have completed the tutorial. Now you can freely explore the world."
        }
      }
    }
  },

  // 分支任务 - 展示多种选择
  "mysterious_forest": {
    name: {
      "zh": "神秘森林的谜题",
      "en": "Mysterious Forest Puzzle"
    },
    description: {
      "zh": "探索神秘的古老森林，解开其中的谜题",
      "en": "Explore the mysterious ancient forest and solve its puzzles"
    },
    steps: {
      "enter_forest": {
        next: ["find_artifact", "help_trader"],
        name: {
          "zh": "进入森林",
          "en": "Enter the Forest"
        },
        description: {
          "zh": "你来到了神秘森林的入口。前方有两条路：一条通往古老的遗迹，另一条路上有一个需要帮助的商人。",
          "en": "You have arrived at the entrance of the mysterious forest. There are two paths ahead: one leads to an ancient ruin, the other has a merchant in need of help."
        }
      },
      "find_artifact": {
        next: ["solve_puzzle"],
        name: {
          "zh": "寻找古代遗物",
          "en": "Find Ancient Artifact"
        },
        description: {
          "zh": "你选择了探索遗迹的道路。在废墟中寻找传说中的古代遗物。",
          "en": "You chose the path to explore the ruins. Search for the legendary ancient artifact in the debris."
        }
      },
      "help_trader": {
        next: ["deliver_goods"],
        name: {
          "zh": "帮助商人",
          "en": "Help the Merchant"
        },
        description: {
          "zh": "商人的马车坏了，需要帮助修理。收集修理材料并帮助他继续旅程。",
          "en": "The merchant's carriage is broken and needs repair. Collect repair materials and help him continue his journey."
        }
      },
      "solve_puzzle": {
        next: ["final_reward"],
        name: {
          "zh": "解开古老谜题",
          "en": "Solve Ancient Puzzle"
        },
        description: {
          "zh": "你找到了遗物，但需要解开石台上的古老谜题才能获得它。",
          "en": "You found the artifact, but you need to solve the ancient puzzle on the stone platform to obtain it."
        }
      },
      "deliver_goods": {
        next: ["trader_reward"],
        name: {
          "zh": "运送货物",
          "en": "Deliver Goods"
        },
        description: {
          "zh": "帮助商人修理好马车后，他请求你帮忙将货物运送到附近的村庄。",
          "en": "After helping the merchant repair his carriage, he asks you to help deliver goods to a nearby village."
        }
      },
      "final_reward": {
        next: [],
        name: {
          "zh": "获得遗物奖励",
          "en": "Receive Artifact Reward"
        },
        description: {
          "zh": "你成功解开了谜题，获得了强大的古代遗物！",
          "en": "You successfully solved the puzzle and obtained the powerful ancient artifact!"
        }
      },
      "trader_reward": {
        next: [],
        name: {
          "zh": "商人的感谢",
          "en": "Merchant's Gratitude"
        },
        description: {
          "zh": "商人非常感谢你的帮助，给了你丰厚的报酬和珍贵的物品。",
          "en": "The merchant is very grateful for your help and gives you generous rewards and precious items."
        }
      }
    }
  },

  // 日常任务 - 简单重复性任务
  "daily_errands": {
    name: {
      "zh": "日常杂务",
      "en": "Daily Errands"
    },
    description: {
      "zh": "帮助村民们完成日常的杂务任务",
      "en": "Help villagers complete daily chores"
    },
    steps: {
      "accept_chores": {
        next: ["gather_supplies", "deliver_items"],
        name: {
          "zh": "接受任务",
          "en": "Accept Tasks"
        },
        description: {
          "zh": "村庄公告板上贴满了需要帮助的请求。选择你想要完成的任务。",
          "en": "The village bulletin board is filled with requests for help. Choose the tasks you want to complete."
        }
      },
      "gather_supplies": {
        next: ["report_gather"],
        name: {
          "zh": "收集物资",
          "en": "Gather Supplies"
        },
        description: {
          "zh": "为村民们收集他们需要的物资：10个苹果、5捆柴火、3瓶清水。",
          "en": "Gather supplies needed by the villagers: 10 apples, 5 bundles of firewood, 3 bottles of clean water."
        }
      },
      "deliver_items": {
        next: ["report_deliver"],
        name: {
          "zh": "配送物品",
          "en": "Deliver Items"
        },
        description: {
          "zh": "将物品配送给村庄里的3个不同家庭。",
          "en": "Deliver items to 3 different families in the village."
        }
      },
      "report_gather": {
        next: ["complete_daily"],
        name: {
          "zh": "汇报收集情况",
          "en": "Report Gathering"
        },
        description: {
          "zh": "将收集到的物资交给需要的村民。",
          "en": "Hand over the gathered supplies to the villagers in need."
        }
      },
      "report_deliver": {
        next: ["complete_daily"],
        name: {
          "zh": "汇报配送情况",
          "en": "Report Delivery"
        },
        description: {
          "zh": "确认所有物品都已正确配送。",
          "en": "Confirm that all items have been delivered correctly."
        }
      },
      "complete_daily": {
        next: [],
        name: {
          "zh": "完成日常任务",
          "en": "Complete Daily Tasks"
        },
        description: {
          "zh": "你成功完成了今天的日常任务！村民们都很感谢你的帮助。",
          "en": "You have successfully completed today's daily tasks! The villagers are grateful for your help."
        }
      }
    }
  },

  // 长期任务 - 多步骤复杂任务
  "master_alchemist": {
    name: {
      "zh": "炼金术大师之路",
      "en": "Path to Master Alchemist"
    },
    description: {
      "zh": "通过学习炼金术知识和制作高级药剂，成为一名炼金术大师",
      "en": "Become a master alchemist by learning alchemical knowledge and crafting advanced potions"
    },
    steps: {
      "begin_study": {
        next: ["gather_ingredients"],
        name: {
          "zh": "开始学习",
          "en": "Begin Studies"
        },
        description: {
          "zh": "拜访炼金术导师，开始你的炼金术学习之旅。",
          "en": "Visit the alchemy mentor to begin your journey of learning alchemy."
        }
      },
      "gather_ingredients": {
        next: ["craft_basic"],
        name: {
          "zh": "收集基础材料",
          "en": "Gather Basic Ingredients"
        },
        description: {
          "zh": "收集炼金术的基础材料：月光草x10、火焰花x5、清水x20。",
          "en": "Gather basic alchemical ingredients: Moonlight Grass x10, Flame Flower x5, Clean Water x20."
        }
      },
      "craft_basic": {
        next: ["learn_advanced"],
        name: {
          "zh": "制作基础药剂",
          "en": "Craft Basic Potions"
        },
        description: {
          "zh": "学习制作3种基础药剂：治疗药水、能量药剂、力量药水。",
          "en": "Learn to craft 3 basic potions: Healing Potion, Energy Elixir, Strength Potion."
        }
      },
      "learn_advanced": {
        next: ["gather_rare"],
        name: {
          "zh": "学习高级配方",
          "en": "Learn Advanced Formulas"
        },
        description: {
          "zh": "向导师学习高级炼金术配方，包括复活药水和隐身药剂。",
          "en": "Learn advanced alchemical formulas from the mentor, including Resurrection Potion and Invisibility Elixir."
        }
      },
      "gather_rare": {
        next: ["craft_masterpiece"],
        name: {
          "zh": "收集稀有材料",
          "en": "Gather Rare Materials"
        },
        description: {
          "zh": "寻找制作高级药剂所需的稀有材料：龙之泪、凤凰羽毛、星辰碎片。",
          "en": "Search for rare materials needed for advanced potions: Dragon's Tear, Phoenix Feather, Star Fragment."
        }
      },
      "craft_masterpiece": {
        next: ["final_test"],
        name: {
          "zh": "制作杰作",
          "en": "Craft Masterpiece"
        },
        description: {
          "zh": "使用稀有材料制作一瓶传说级的炼金术杰作。",
          "en": "Use rare materials to craft a legendary alchemical masterpiece."
        }
      },
      "final_test": {
        next: ["become_master"],
        name: {
          "zh": "最终考验",
          "en": "Final Test"
        },
        description: {
          "zh": "在炼金术公会的监督下完成最终的炼金术考验。",
          "en": "Complete the final alchemical test under the supervision of the Alchemist Guild."
        }
      },
      "become_master": {
        next: [],
        name: {
          "zh": "成为大师",
          "en": "Become a Master"
        },
        description: {
          "zh": "恭喜！你已成功通过所有考验，正式成为一名炼金术大师！",
          "en": "Congratulations! You have successfully passed all tests and officially become a Master Alchemist!"
        }
      }
    }
  }
}

export default quests
