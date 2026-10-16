const spells = [
  {
    name: "Guidance",
    level: "Cantrip",
    action: "Action",
    castingTime: "1 Action",
    category: ["Buff"],
    range: "Touch",
    duration: "Concentration, up to 1 minute",
    concentration: true,
    components: "V, S",
    description:
      "触碰一名自愿生物并选择一项技能。法术持续期间，目标使用该技能进行能力检定时，可将 1d4 加到检定结果。需要专注。",
    prepared: true,
    always: true,
  },
  {
    name: "Light",
    level: "Cantrip",
    action: "Action",
    category: ["Utility"],
    range: "Touch",
    duration: "1 hour",
    concentration: false,
    components: "V, M",
    description: "Thaumaturge 额外学会的牧师戏法。触碰一个物件，使其发出光亮。",
    known: true,
    always: true,
  },
  {
    name: "Mending",
    level: "Cantrip",
    action: "Action",
    castingTime: "1 minute",
    category: ["Utility"],
    range: "Touch",
    duration: "Instantaneous",
    concentration: false,
    components: "V, S, M",
    description: "修复物件上的一个破损或裂口；修复范围与限制以规则书为准。",
    known: false,
  },
  {
    name: "Resistance",
    level: "Cantrip",
    action: "Action",
    castingTime: "1 Action",
    category: ["Buff"],
    range: "Touch",
    duration: "Concentration, up to 1 minute",
    concentration: true,
    components: "V, S",
    description:
      "触碰一名自愿生物并选择 Acid、Cold、Fire、Lightning 或 Thunder 伤害类型。目标受到该类型伤害时，可将该次伤害减少 1d4；触发后法术结束。需要专注。",
    prepared: true,
    always: true,
  },
  {
    name: "Sacred Flame",
    level: "Cantrip",
    action: "Action",
    category: ["Attack"],
    range: "60 ft",
    duration: "Instantaneous",
    concentration: false,
    components: "V, S",
    save: "Dexterity",
    description:
      "目标进行Dexterity豁免，失败受到 2d8 Radiant 伤害（角色等级 5–10）；成功则无伤害。",
    prepared: true,
    always: true,
  },
  {
    name: "Spare the Dying",
    level: "Cantrip",
    action: "Bonus Action",
    castingTime: "1 Bonus Action (Grave Domain feature)",
    category: ["Healing"],
    range: "30 ft",
    duration: "Instantaneous",
    concentration: false,
    components: "V, S",
    description:
      "Grave Domain 的 Circle of Mortality 特性使你可以用 Bonus Action 施放此戏法，射程为 30 ft。选择一个生命值为 0、尚未死亡的生物，使其稳定。此处按角色使用的 Grave Domain 特性版本处理；通用法术本身通常为 Action、Touch。",
    prepared: true,
    always: true,
  },
  {
    name: "Thaumaturgy",
    level: "Cantrip",
    action: "Action",
    category: ["Utility"],
    range: "30 ft",
    duration: "Up to 1 minute",
    concentration: false,
    components: "V",
    description:
      "产生神迹般的声音、火焰、震动或其他效果；具体效果按选项与规则文本。",
    known: false,
  },
  {
    name: "Toll the Dead",
    level: "Cantrip",
    action: "Action",
    category: ["Attack"],
    range: "60 ft",
    duration: "Instantaneous",
    concentration: false,
    components: "V, S",
    save: "Wisdom",
    description:
      "目标进行Wisdom豁免；失败受到 2d8 Necrotic，若目标缺失 HP 则为 2d12（等级 5–10）。",
    prepared: true,
    always: true,
  },
  {
    name: "Word of Radiance",
    level: "Cantrip",
    action: "Action",
    category: ["Attack"],
    range: "自身 (5-ft emanation)",
    duration: "Instantaneous",
    concentration: false,
    components: "V",
    save: "Constitution",
    known: false,
    description:
      "你周围 5 尺范围内的生物进行Constitution豁免；失败时受到 Radiant 伤害。当前未学习，按角色卡状态为准.",
  },
  {
    name: "Bane",
    level: "1st",
    action: "Action",
    category: ["Debuff"],
    range: "30 ft",
    duration: "Concentration, up to 1 minute",
    concentration: true,
    components: "V, S, M",
    save: "Charisma",
    description:
      "最多 3 个目标进行Charisma豁免；失败者在攻击检定或豁免检定上减 d4（按适用规则）。",
    upcast:
      "使用高于 1 环的法术位时，每高一环可多影响 1 个目标（核对你使用的 2024 文本）。",
  },
  {
    name: "Bless",
    level: "1st",
    action: "Action",
    category: ["Buff"],
    range: "30 ft",
    duration: "Concentration, up to 1 minute",
    concentration: true,
    components: "V, S, M",
    description: "最多 3 个生物在攻击检定与豁免检定上加 d4。",
    upcast:
      "使用高于 1 环的法术位时，每高一环可多影响 1 个目标（核对你使用的 2024 文本）。",
    prepared: true,
  },
  {
    name: "Command",
    level: "1st",
    action: "Action",
    castingTime: "1 Action",
    category: ["Debuff"],
    range: "60 ft",
    duration: "Instantaneous",
    concentration: false,
    components: "V",
    save: "Wisdom",
    description:
      "目标进行Wisdom豁免；失败时遵从一个简短命令。命令必须符合目标可理解的指令限制；依命令内容决定其行动。对不死生物无效。",
    upcast: "使用高于 1 环的法术位时，每高一环可多影响 1 个目标。",
    prepared: true,
  },
  {
    name: "Detect Evil and Good",
    level: "1st",
    action: "Action",
    category: ["Utility"],
    range: "自身",
    duration: "Concentration, up to 10 minutes",
    concentration: true,
    components: "V, S",
    description: "探测指定类型的异界存在及受影响的地点或物件。",
    prepared: true,
    always: true,
  },
  {
    name: "False Life",
    level: "1st",
    action: "Action",
    castingTime: "1 Action",
    category: ["Buff"],
    range: "自身",
    duration: "Instantaneous",
    concentration: false,
    components: "V, S, M",
    description:
      "获得 2d4 + 4 点临时生命值。使用高于 1 环的法术位时，每高一环额外获得 5 点临时生命值。临时生命值按通常规则处理，不会叠加。",
    prepared: true,
    always: true,
  },
  {
    name: "Guiding Bolt",
    level: "1st",
    action: "Action",
    category: ["Attack"],
    range: "120 ft",
    duration: "1 round (攻击优势效果)",
    concentration: false,
    components: "V, S",
    attack: "Ranged spell attack",
    description:
      "命中造成 4d6 Radiant 伤害，并使下一次针对目标的攻击检定获得优势（在持续窗口内）。",
    upcast: "每高于 1 环一环，伤害增加 1d6。",
    prepared: true,
  },
  {
    name: "Healing Word",
    level: "1st",
    action: "Bonus Action",
    category: ["Healing"],
    range: "60 ft",
    duration: "Instantaneous",
    concentration: false,
    components: "V",
    description:
      "远程恢复目标 HP，基础治疗为 2d4 + 施法属性调整值（以 2024 规则文本核对）。",
    upcast: "每高于 1 环一环，治疗增加 1d4。",
    prepared: true,
  },
  {
    name: "Aid",
    level: "2nd",
    action: "Action",
    category: ["Healing"],
    range: "30 ft",
    duration: "8 hours",
    concentration: false,
    components: "V, S, M",
    description: "强化最多 3 个生物的当前与最大 HP；不是临时 HP。",
    upcast:
      "使用高于 2 环的法术位时，每高一环，受影响生物的当前与最大 HP 增加值再提高 5。",
    prepared: true,
  },
  {
    name: "Blindness/Deafness",
    level: "2nd",
    action: "Action",
    category: ["Debuff"],
    range: "120 ft",
    duration: "1 minute",
    concentration: false,
    components: "V",
    save: "Constitution",
    description: "使目标失明或失聪；目标可依规则重复豁免。",
    prepared: true,
  },
  {
    name: "Gentle Repose",
    level: "2nd",
    action: "Action",
    category: ["Utility"],
    range: "Touch",
    duration: "10 days",
    concentration: false,
    components: "V, S, M",
    description: "保护尸体，延缓腐败并延长复活相关时间窗口。",
    prepared: true,
    always: true,
  },
  {
    name: "Ray of Enfeeblement",
    level: "2nd",
    action: "Action",
    castingTime: "1 Action",
    category: ["Debuff"],
    range: "60 ft",
    duration: "Concentration, up to 1 minute",
    concentration: true,
    components: "V, S",
    save: "Constitution",
    description:
      "目标进行Constitution豁免；豁免失败时，目标使用Strength进行的攻击检定具有劣势，且使用Strength进行的能力检定具有劣势。目标在其每个回合结束时可重复豁免，成功则法术结束。需要专注。请以角色卡所选版本的完整正文为准。",
    prepared: true,
    always: true,
  },
  {
    name: "Spiritual Weapon",
    level: "2nd",
    action: "Bonus Action",
    castingTime: "1 Bonus Action",
    category: ["Attack"],
    range: "60 ft",
    duration: "Concentration, up to 1 minute",
    concentration: true,
    components: "V, S",
    description:
      "施放时召唤灵体武器，并可立即对 5 ft 内的生物进行一次近战法术攻击。之后每回合可用 Bonus Action 将武器移动至多 20 ft，并重复攻击。使用 2024 版本时需要专注。",
    upcast: "使用高于 2 环的法术位时，每高一环伤害增加 1d8。",
    prepared: true,
  },
  {
    name: "Dispel Magic",
    level: "3rd",
    action: "Action",
    category: ["Utility"],
    range: "120 ft",
    duration: "Instantaneous",
    concentration: false,
    components: "V, S",
    description: "结束目标上的法术效果；更高环或检定规则按目标法术等级处理。",
    prepared: true,
  },
  {
    name: "Mass Healing Word",
    level: "3rd",
    action: "Bonus Action",
    category: ["Healing"],
    range: "60 ft",
    duration: "Instantaneous",
    concentration: false,
    components: "V",
    description:
      "最多 6 个可见生物各恢复 2d4 + 施法属性调整值 HP（以 2024 规则文本核对）。",
    prepared: true,
  },
  {
    name: "Revivify",
    level: "3rd",
    action: "Action",
    castingTime: "1 Action",
    category: ["Healing"],
    range: "Touch",
    duration: "Instantaneous",
    concentration: false,
    components: "V, S, M",
    description:
      "触碰一个在过去 1 分钟内死亡的生物，使其恢复 1 HP。不能恢复因年老而死亡的生物；消耗价值至少 300 gp 的钻石。",
    prepared: true,
    always: true,
  },
  {
    name: "Spirit Guardians",
    level: "3rd",
    action: "Action",
    category: ["Attack"],
    range: "自身 (15-ft emanation)",
    duration: "Concentration, up to 10 minutes",
    concentration: true,
    components: "V, S, M",
    save: "Wisdom",
    description:
      "召唤环绕自身的灵体守卫，形成 15 ft Emanation，持续专注至多 10 分钟。敌人进入该区域、该区域进入敌人所在空间，或敌人在区域内结束回合时，进行Wisdom豁免，对抗你的 Spell Save DC；失败受到 3d8 光耀或黯蚀伤害（施放时选择），成功受到一半伤害。此法术不进行法术攻击检定，不需要掷 d20 + Spell Attack。使用高于 3 环的法术位时，每高一环伤害增加 1d8。",
    prepared: true,
  },
  {
    name: "Vampiric Touch",
    level: "3rd",
    action: "Action",
    category: ["Attack"],
    range: "自身",
    duration: "Concentration, up to 1 minute",
    concentration: true,
    components: "V, S",
    attack: "Melee spell attack",
    description:
      "近战法术攻击命中造成 3d6 Necrotic，并恢复相当于所造成 Necrotic 伤害一半的 HP。",
    prepared: true,
    always: true,
  },
  {
    name: "Core Cleric Traits",
    level: "Feature",
    action: "Other",
    category: ["Utility"],
    range: "自身",
    duration: "被动",
    description:
      "职业基础信息：牧师技能熟练包括 Medicine 与 Religion。角色卡另列有 Spellcasting、Channel Divinity（3 次/长休，短休恢复 1 次）及 Grave Domain。法术豁免 DC 15。",
    always: true,
    nonSelectable: true,
    triggerOnly: true,
  },
  {
    name: "Divine Order: Thaumaturge",
    level: "Feature",
    action: "Other",
    category: ["Utility"],
    range: "自身",
    duration: "被动",
    description:
      "你额外学会一个牧师戏法（本角色选择 Light）；Arcana 与 Religion 检定获得 +4 加值。",
    always: true,
    nonSelectable: true,
    triggerOnly: true,
  },
  {
    name: "Circle of Mortality: Return to Life",
    level: "Feature",
    action: "Other",
    category: ["Healing"],
    range: "30 ft (Spare the Dying)",
    duration: "被动",
    description:
      "Grave Domain：你可以用 Bonus Action 施放 Spare the Dying（本角色法术卡已设为 Bonus Action、30 ft）。此外，当你用法术或 Channel Divinity 治疗一个 HP 为 0 的生物，若通常要掷一个或多个治疗骰，则每颗骰子都改为取最大值。",
    always: true,
    nonSelectable: true,
    triggerOnly: true,
  },
  {
    name: "Kenku Species Traits",
    level: "Feature",
    action: "Other",
    category: ["Utility"],
    range: "自身",
    duration: "被动",
    description:
      "种族信息：Creature Type 为 Humanoid；体型 Small；步行速度 30 ft；语言为 Common 与 Infernal。",
    always: true,
    nonSelectable: true,
    triggerOnly: true,
  },
  {
    name: "Expert Duplication",
    level: "Feature",
    action: "Other",
    category: ["Utility"],
    range: "自身",
    duration: "被动",
    description:
      "当你复制自己或他人创作的文字或手工制品时，进行精确复制的能力检定具有优势。",
    always: true,
    nonSelectable: true,
    triggerOnly: true,
  },
  {
    name: "Mimicry",
    level: "Feature",
    action: "Other",
    category: ["Utility"],
    range: "听觉范围",
    duration: "被动",
    description:
      "你可以准确模仿听过的声音（包括说话声）。听到声音的生物可以进行 DC 13 Insight 检定来判断那是模仿。",
    always: true,
    nonSelectable: true,
    triggerOnly: true,
  },
  {
    name: "Skill Proficiencies",
    level: "Feature",
    action: "Other",
    category: ["Utility"],
    range: "自身",
    duration: "被动",
    description:
      "当前角色卡列出的技能熟练：Medicine、Religion（Cleric）；Stealth、Deception（Kenku Recall/种族选择）；Acrobatics、Insight、Animal Handling（Skilled）。Thaumaturge 另使 Arcana 与 Religion 检定获得 +4 加值。",
    always: true,
    nonSelectable: true,
    triggerOnly: true,
  },
  {
    name: "Ability Score Improvement",
    level: "Feature",
    action: "Other",
    category: ["Utility"],
    range: "自身",
    duration: "角色构建信息",
    description:
      "PHB-2024 牧师职业等级提升选项：一项属性 +2，或两项属性各 +1。你提供的 D&D Beyond 页面在两个选择栏都显示 Wisdom Score；请确认角色属性总值是否已按两次 +1（等效于 Wisdom +2）计入。此项是角色构建记录，不是战斗动作。",
    always: true,
    nonSelectable: true,
    triggerOnly: true,
  },
  {
    name: "Skilled Feat",
    level: "Feature",
    action: "Other",
    category: ["Utility"],
    range: "自身",
    duration: "被动",
    description:
      "来自 Noble 背景的 Skilled 专长：获得三项自选技能或工具熟练。本角色选择 Acrobatics、Insight、Animal Handling。",
    always: true,
    nonSelectable: true,
    triggerOnly: true,
  },
  {
    name: "Path to the Grave",
    level: "Feature",
    action: "Bonus Action",
    category: ["Debuff"],
    range: "30 ft",
    duration: "Until start of next turn",
    concentration: false,
    components: "—",
    description:
      "Channel Divinity：以 Bonus Action 展示圣徽，消耗一次 Channel Divinity，诅咒你能看见的一个 30 ft 内生物，直到你下回合开始。被诅咒目标的攻击检定和豁免检定具有劣势。",
    resource: "Channel Divinity",
    always: true,
    nonSelectable: true,
  },
  {
    name: "Divine Spark",
    level: "Feature",
    action: "Action",
    category: ["Attack"],
    range: "30 ft",
    duration: "Instantaneous",
    concentration: false,
    components: "—",
    save: "Constitution DC 15",
    description:
      "Channel Divinity：指向你能看见的 30 ft 内一个生物，选择其一：恢复 1d8+4 HP；或令目标进行 DC 15 Constitution豁免，失败受到 1d8+4 Radiant 或 Necrotic 伤害（你选择），成功则受到一半伤害。消耗一次 Channel Divinity。",
    resource: "Channel Divinity",
    always: true,
    nonSelectable: true,
  },
  {
    name: "Turn Undead",
    level: "Feature",
    action: "Action",
    category: ["Debuff"],
    range: "30 ft",
    duration: "Up to 1 minute",
    concentration: false,
    components: "—",
    save: "Wisdom DC 15",
    description:
      "Channel Divinity：展示圣徽，30 ft 内由你选择的每个不死生物都必须进行 DC 15 Wisdom豁免。失败时获得 Frightened 与 Incapacitated 状态，持续 1 分钟，并在自己的回合尽可能远离你。若目标受到伤害、你陷入 Incapacitated 或你死亡，效果提前结束。消耗一次 Channel Divinity。",
    resource: "Channel Divinity",
    always: true,
    nonSelectable: true,
  },
  {
    name: "Sear Undead",
    level: "Feature",
    action: "Action",
    category: ["Attack"],
    range: "30 ft",
    duration: "Instantaneous",
    concentration: false,
    components: "—",
    save: "Wisdom DC 15",
    description:
      "被动增强：当你使用 Turn Undead 时，任何豁免失败的不死生物额外受到 4d8 Radiant 伤害；这项伤害不会结束 Turn Undead 的效果。它不额外消耗 Channel Divinity。",
    always: true,
    nonSelectable: true,
    triggerOnly: true,
  },
  {
    name: "Sentinel at Death’s Door",
    level: "Feature",
    action: "Reaction",
    category: ["Defense"],
    range: "60 ft",
    duration: "Instantaneous",
    concentration: false,
    components: "—",
    description:
      "每次长休可使用 4 次。当你或你能看见的、处于 Bloodied 状态的生物在 60 ft 内被攻击检定命中时，你可以使用 Reaction 将该次攻击伤害减半（向下取整）。若触发攻击是 Critical Hit，则取消所有由暴击触发的效果。",
    usesPerLongRest: 4,
    always: true,
    nonSelectable: true,
  },
  {
    name: "Opportunity Attack",
    level: "Feature",
    action: "Reaction",
    category: ["Attack"],
    range: "Melee reach",
    duration: "Instantaneous",
    concentration: false,
    components: "—",
    description:
      "当符合条件的敌人离开你的触及范围时，可用 Reaction 进行一次近战攻击。",
  },
  {
    name: "Unarmed Strike",
    level: "Feature",
    action: "Action",
    category: ["Attack"],
    range: "5 ft (Reach)",
    duration: "Instantaneous",
    concentration: false,
    components: "—",
    description:
      "徒手打击有三种选项：Damage：进行近战攻击检定，命中造成 1 + Strength调整值的 Bludgeoning 伤害；Grapple：目标选择进行Strength或Dexterity豁免，失败则获得 Grappled；Shove：目标选择进行Strength或Dexterity豁免，失败则被推开 5 ft 或倒地。Grapple/Shove 的豁免 DC = 8 + 熟练加值 + Strength调整值。",
    always: true,
    nonSelectable: true,
  },
  {
    name: "Create or Destroy Water",
    level: "1st",
    action: "Action",
    category: ["Utility"],
    range: "30 ft",
    duration: "Instantaneous",
    concentration: false,
    components: "V, S, M",
    description: "创造或摧毁一定数量的水；具体体积按当前法术文本。",
  },
  {
    name: "Cure Wounds",
    level: "1st",
    action: "Action",
    category: ["Healing"],
    range: "Touch",
    duration: "Instantaneous",
    concentration: false,
    components: "V, S",
    description:
      "触碰一个生物，恢复生命值；按当前法术文本掷治疗骰并加施法属性调整值。",
  },
  {
    name: "Detect Magic",
    level: "1st",
    action: "Action",
    category: ["Utility"],
    range: "自身",
    duration: "Concentration, up to 10 minutes",
    concentration: true,
    components: "V, S",
    description: "探测附近魔法的存在；具体感知范围按当前法术文本。",
  },
  {
    name: "Detect Poison and Disease",
    level: "1st",
    action: "Action",
    category: ["Utility"],
    range: "自身",
    duration: "Concentration, up to 10 minutes",
    concentration: true,
    components: "V, S",
    description: "探测指定范围内的毒素、毒物或疾病；按当前法术文本。",
  },
  {
    name: "Inflict Wounds",
    level: "1st",
    action: "Action",
    castingTime: "1 Action",
    category: ["Attack"],
    range: "Touch",
    duration: "Instantaneous",
    concentration: false,
    components: "V, S",
    save: "Constitution",
    description:
      "目标进行Constitution豁免。失败受到 2d10 Necrotic 伤害，成功则受到一半伤害。使用高于 1 环的法术位时，每高一环伤害增加 1d10。",
  },
  {
    name: "Protection from Evil and Good",
    level: "1st",
    action: "Action",
    category: ["Buff"],
    range: "Touch",
    duration: "Concentration, up to 10 minutes",
    concentration: true,
    components: "V, S, M",
    description:
      "保护一个自愿生物，使其受到特定类型异界生物影响时获得防护；按当前法术文本。",
  },
  {
    name: "Purify Food and Drink",
    level: "1st",
    action: "Action",
    category: ["Utility"],
    range: "10 ft",
    duration: "Instantaneous",
    concentration: false,
    components: "V, S",
    description: "净化范围内非魔法食物与饮水；具体范围和数量按当前法术文本。",
  },
  {
    name: "Sanctuary",
    level: "1st",
    action: "Bonus Action",
    castingTime: "1 Bonus Action",
    category: ["Buff"],
    range: "30 ft",
    duration: "1 minute",
    concentration: false,
    components: "V, S, M",
    save: "Wisdom",
    description:
      "保护射程内一个生物，持续 1 分钟。任何以该目标为攻击目标或施放有害法术的生物，必须先通过Wisdom豁免，否则必须选择新目标或失去攻击/法术。受保护生物若攻击、施放造成伤害的法术或造成伤害，法术结束。",
  },
  {
    name: "Shield of Faith",
    level: "1st",
    action: "Bonus Action",
    category: ["Buff"],
    range: "60 ft",
    duration: "Concentration, up to 10 minutes",
    concentration: true,
    components: "V, S, M",
    description: "一个生物的 AC 获得 +2 加值。",
  },
  {
    name: "Wardaway",
    level: "1st",
    action: "Action",
    castingTime: "1 Action",
    category: ["Buff"],
    range: "60 ft",
    duration: "Instantaneous",
    concentration: false,
    components: "V, S",
    save: "Constitution",
    damageType: "Force",
    description:
      "D&D Beyond 列表字段：60 ft、即时、Constitution豁免、Force 伤害。由于尚未核实扩展来源的完整正文，伤害骰、豁免结果和额外效果暂不推断；施放前请查看原始法术文本。",
    source: "Expanded Rules",
  },
  {
    name: "Augury",
    level: "2nd",
    action: "Action",
    castingTime: "1 minute",
    category: ["Utility"],
    range: "自身",
    duration: "Instantaneous",
    concentration: false,
    components: "V, S, M",
    description: "从超自然来源获得对计划行动结果的征兆；依当前法术文本判定。",
  },
  {
    name: "Calm Emotions",
    level: "2nd",
    action: "Action",
    category: ["Control"],
    range: "60 ft",
    duration: "Concentration, up to 1 minute",
    concentration: true,
    components: "V, S",
    save: "Charisma",
    description: "尝试压制区域内生物的强烈情绪或敌意；效果按当前法术文本。",
  },
  {
    name: "Continual Flame",
    level: "2nd",
    action: "Action",
    category: ["Utility"],
    range: "Touch",
    duration: "Until dispelled",
    concentration: false,
    components: "V, S, M",
    description: "在物件上创造持续的无热火焰；直到被解除。",
  },
  {
    name: "Deryan’s Helpful Homunculi",
    level: "2nd",
    action: "Action",
    castingTime: "待核对原文",
    category: ["Utility"],
    range: "待核对",
    duration: "待核对",
    concentration: false,
    components: "待核对",
    description:
      "扩展规则法术。尚未核实完整正文，因此不推断施法范围、持续时间、成分或效果；请打开 D&D Beyond 原始条目后再用于战斗决策。",
    source: "Expanded Rules",
  },
  {
    name: "Dueling Ground",
    level: "2nd",
    action: "Action",
    category: ["Buff"],
    range: "See description",
    duration: "See description",
    concentration: false,
    components: "See description",
    description: "扩展规则法术 Dueling Ground；当前助手未录入完整规则文本。",
    source: "Expanded Rules",
  },
  {
    name: "Enhance Ability",
    level: "2nd",
    action: "Action",
    category: ["Buff"],
    range: "Touch",
    duration: "Concentration, up to 1 hour",
    concentration: true,
    components: "V, S, M",
    description: "赋予一个生物所选属性相关的增强效果；按当前法术文本选择属性。",
  },
  {
    name: "Find Traps",
    level: "2nd",
    action: "Action",
    category: ["Utility"],
    range: "120 ft",
    duration: "Instantaneous",
    concentration: false,
    components: "V, S",
    description: "感知视线范围内符合该法术定义的陷阱；按当前法术文本。",
  },
  {
    name: "Hold Person",
    level: "2nd",
    action: "Action",
    category: ["Control"],
    range: "60 ft",
    duration: "Concentration, up to 1 minute",
    concentration: true,
    components: "V, S, M",
    save: "Wisdom",
    description:
      "目标进行Wisdom豁免；失败时陷入麻痹状态，并按法术文本重复豁免。",
  },
  {
    name: "Lesser Restoration",
    level: "2nd",
    action: "Bonus Action",
    category: ["Healing"],
    range: "Touch",
    duration: "Instantaneous",
    concentration: false,
    components: "V, S",
    description: "结束一个目标身上的指定疾病或状态；以当前法术文本为准。",
  },
  {
    name: "Locate Object",
    level: "2nd",
    action: "Action",
    category: ["Utility"],
    range: "自身",
    duration: "Concentration, up to 10 minutes",
    concentration: true,
    components: "V, S, M",
    description: "感知指定物件的方向；限制与范围按当前法术文本。",
  },
  {
    name: "Prayer of Healing",
    level: "2nd",
    action: "Action",
    castingTime: "10 minutes",
    category: ["Healing"],
    range: "30 ft",
    duration: "Instantaneous",
    concentration: false,
    components: "V",
    save: null,
    description:
      "施法时间为 10 分钟。选择范围内最多 6 个生物；每个目标恢复 2d8 + 施法属性调整值的 HP。目标在短休结束时还可获得短休的额外益处（依 2024 规则正文）。此法术不是战斗中可即时完成的治疗。",
  },
  {
    name: "Protection from Poison",
    level: "2nd",
    action: "Action",
    category: ["Healing"],
    range: "Touch",
    duration: "1 hour",
    concentration: false,
    components: "V, S",
    description: "中和目标身上的毒素，并提供对毒素的防护；按当前法术文本。",
  },
  {
    name: "Silence",
    level: "2nd",
    action: "Action",
    category: ["Control"],
    range: "120 ft",
    duration: "Concentration, up to 10 minutes",
    concentration: true,
    components: "V, S",
    description: "创造静音区域，阻止其中产生或通过的声音；按当前法术文本。",
  },
  {
    name: "Warding Bond",
    level: "2nd",
    action: "Action",
    category: ["Buff"],
    range: "Touch",
    duration: "1 hour",
    concentration: false,
    components: "V, S, M",
    description:
      "在施法者与目标之间建立守护纽带；抗性、AC 加值和伤害分担按当前法术文本。",
  },
  {
    name: "Zone of Truth",
    level: "2nd",
    action: "Action",
    category: ["Control"],
    range: "60 ft",
    duration: "10 minutes",
    concentration: false,
    components: "V, S",
    save: "Charisma",
    description:
      "区域内生物进行Charisma豁免；失败者无法故意说谎，具体限制按当前法术文本。",
  },
  {
    name: "Animate Dead",
    level: "3rd",
    action: "Action",
    castingTime: "1 minute",
    category: ["Utility"],
    range: "10 ft",
    duration: "Instantaneous",
    concentration: false,
    components: "V, S, M",
    description: "创造或重新控制不死仆从；具体目标与控制期限按当前法术文本。",
  },
  {
    name: "Aura of Vitality",
    level: "3rd",
    action: "Bonus Action",
    category: ["Healing"],
    range: "自身",
    duration: "Concentration, up to 1 minute",
    concentration: true,
    components: "V",
    description:
      "形成治疗灵气，并可在持续时间内以 Bonus Action 治疗范围内生物；数值按当前法术文本。",
  },
  {
    name: "Beacon of Hope",
    level: "3rd",
    action: "Action",
    category: ["Buff"],
    range: "30 ft",
    duration: "Concentration, up to 1 minute",
    concentration: true,
    components: "V, S",
    description:
      "为范围内生物带来希望与坚韧；治疗和豁免相关效果按当前法术文本。",
  },
  {
    name: "Bestow Curse",
    level: "3rd",
    action: "Action",
    category: ["Debuff"],
    range: "Touch",
    duration: "Concentration, up to 1 minute",
    concentration: true,
    components: "V, S",
    save: "Wisdom",
    description:
      "目标进行Wisdom豁免；失败时受到诅咒，具体效果按选择与当前法术文本。",
  },
  {
    name: "Clairvoyance",
    level: "3rd",
    action: "Action",
    castingTime: "10 minutes",
    category: ["Utility"],
    range: "1 mile",
    duration: "Concentration, up to 10 minutes",
    concentration: true,
    components: "V, S, M",
    description: "在熟悉地点或可见地点创造不可见感官；按当前法术文本。",
  },
  {
    name: "Create Food and Water",
    level: "3rd",
    action: "Action",
    category: ["Utility"],
    range: "30 ft",
    duration: "Instantaneous",
    concentration: false,
    components: "V, S",
    description: "创造食物和饮水；数量与品质按当前法术文本。",
  },
  {
    name: "Daylight",
    level: "3rd",
    action: "Action",
    category: ["Utility"],
    range: "60 ft",
    duration: "1 hour",
    concentration: false,
    components: "V, S",
    description: "物件散发明亮光线；范围和与魔法黑暗的互动按当前法术文本。",
  },
  {
    name: "Feign Death",
    level: "3rd",
    action: "Action",
    category: ["Buff"],
    range: "Touch",
    duration: "1 hour",
    concentration: false,
    components: "V, S, M",
    description: "使自愿生物进入类似死亡的僵直状态；具体效果按当前法术文本。",
  },
  {
    name: "Glyph of Warding",
    level: "3rd",
    action: "Action",
    castingTime: "1 hour",
    category: ["Control"],
    range: "Touch",
    duration: "Until dispelled or triggered",
    concentration: false,
    components: "V, S, M",
    description:
      "施法时间为 1 小时，消耗价值至少 200 gp 的钻石粉。刻制符文并选择爆炸符文或法术符文及触发条件；移动被刻符文的物件超过 10 ft 会破坏符文。该法术不适合在通常战斗回合内即时施放。具体分支效果以规则正文为准。",
  },
  {
    name: "Laeral’s Silver Lance",
    level: "3rd",
    action: "Action",
    castingTime: "待核对原文",
    category: ["Attack"],
    range: "待核对",
    duration: "待核对",
    concentration: false,
    components: "待核对",
    description:
      "扩展规则法术。尚未核实完整正文，因此不推断攻击方式、豁免、伤害骰、范围或升级效果；请打开 D&D Beyond 原始条目后再用于战斗决策。",
    source: "Expanded Rules",
  },
  {
    name: "Magic Circle",
    level: "3rd",
    action: "Action",
    castingTime: "1 minute",
    category: ["Control"],
    range: "10 ft",
    duration: "1 hour",
    concentration: false,
    components: "V, S, M",
    description: "创造针对特定类型异界生物的不透明魔法圆环；按当前法术文本。",
  },
  {
    name: "Meld into Stone",
    level: "3rd",
    action: "Action",
    category: ["Utility"],
    range: "Touch",
    duration: "8 hours",
    concentration: false,
    components: "V, S",
    description: "施法者进入一块石头中；具体限制按当前法术文本。",
  },
  {
    name: "Protection from Energy",
    level: "3rd",
    action: "Action",
    category: ["Buff"],
    range: "Touch",
    duration: "Concentration, up to 1 hour",
    concentration: true,
    components: "V, S",
    description: "目标获得对所选一种伤害类型的抗性。",
  },
  {
    name: "Remove Curse",
    level: "3rd",
    action: "Action",
    category: ["Healing"],
    range: "Touch",
    duration: "Instantaneous",
    concentration: false,
    components: "V, S",
    description: "结束目标或物件上的诅咒；具体限制按当前法术文本。",
  },
  {
    name: "Sending",
    level: "3rd",
    action: "Action",
    castingTime: "1 Action",
    category: ["Utility"],
    range: "Unlimited",
    duration: "Instantaneous",
    concentration: false,
    components: "V, S, M",
    description:
      "向你熟悉的生物发送最多 25 个字的心灵讯息。目标会在心中听到讯息，并可立即以类似方式回复。跨位面通讯有 5% 概率无法送达。",
  },
  {
    name: "Speak with Dead",
    level: "3rd",
    action: "Action",
    category: ["Utility"],
    range: "10 ft",
    duration: "10 minutes",
    concentration: false,
    components: "V, S, M",
    description: "允许尸体回答若干问题；限制按当前法术文本。",
  },
  {
    name: "Tongues",
    level: "3rd",
    action: "Action",
    category: ["Utility"],
    range: "Touch",
    duration: "1 hour",
    concentration: false,
    components: "V, M",
    description: "使目标理解并能被理解地进行口头交流；按当前法术文本。",
  },
  {
    name: "Water Walk",
    level: "3rd",
    action: "Action",
    castingTime: "1 Action",
    category: ["Utility"],
    range: "30 ft",
    duration: "1 hour",
    concentration: false,
    components: "V, S, M",
    description:
      "选择最多 10 个自愿生物，使其能够在液体表面移动，如水、酸、泥、雪、流沙或熔岩；熔岩仍会造成伤害。目标在持续时间内可在液体表面行走。此法术可作为仪式施放。",
  },
  {
    name: "Attack",
    level: "Feature",
    action: "Action",
    category: ["Attack"],
    range: "依武器/攻击选项",
    duration: "Instantaneous",
    description:
      "Actions in Combat：进行一次攻击。具体攻击方式、命中加值、伤害和触及范围取决于装备与角色数据。",
    combatAction: true,
  },
  {
    name: "Dash",
    level: "Feature",
    action: "Action",
    category: ["Utility"],
    range: "自身",
    duration: "本回合",
    description: "Actions in Combat：本回合额外获得等于你速度的移动。",
    combatAction: true,
  },
  {
    name: "Disengage",
    level: "Feature",
    action: "Action",
    category: ["Defense"],
    range: "自身",
    duration: "本回合",
    description: "Actions in Combat：你的移动在本回合不会引发机会攻击。",
    combatAction: true,
  },
  {
    name: "Dodge",
    level: "Feature",
    action: "Action",
    category: ["Defense"],
    range: "自身",
    duration: "直到你下回合开始",
    description:
      "Actions in Combat：你看得见的攻击者对你的攻击检定具有劣势；若你能看见攻击者，其对你的Dexterity豁免具有优势。你处于 Incapacitated 或速度为 0 时不能使用。",
    combatAction: true,
  },
  {
    name: "Grapple",
    level: "Feature",
    action: "Action",
    category: ["Control"],
    range: "5 ft (Reach)",
    duration: "Until grapple ends",
    description:
      "Actions in Combat / Unarmed Strike：目标选择进行Strength或Dexterity豁免，失败则获得 Grappled。豁免 DC = 8 + 熟练加值 + Strength调整值。",
    combatAction: true,
  },
  {
    name: "Help",
    level: "Feature",
    action: "Action",
    category: ["Utility"],
    range: "依情境",
    duration: "通常到你下回合开始",
    description:
      "Actions in Combat：协助另一个生物完成任务，或协助其对某个生物进行下一次攻击；需符合相应距离与情境要求。",
    combatAction: true,
  },
  {
    name: "Hide",
    level: "Feature",
    action: "Action",
    category: ["Utility"],
    range: "自身",
    duration: "依隐藏规则",
    description:
      "Actions in Combat：尝试躲藏；需满足遮蔽/隐蔽等条件，并按隐匿检定与当前规则判定。",
    combatAction: true,
  },
  {
    name: "Improvise",
    level: "Feature",
    action: "Action",
    category: ["Utility"],
    range: "依情境",
    duration: "即时",
    description:
      "Actions in Combat：执行规则未列出的特殊动作，由 DM 根据情境判定。",
    combatAction: true,
  },
  {
    name: "Influence",
    level: "Feature",
    action: "Action",
    category: ["Utility"],
    range: "依情境",
    duration: "即时",
    description:
      "Actions in Combat：尝试影响一个生物的态度或行为；由 DM 根据目标和情境决定所需检定。",
    combatAction: true,
  },
  {
    name: "Magic",
    level: "Feature",
    action: "Action",
    category: ["Utility"],
    range: "施放法术",
    duration: "按法术决定",
    description:
      "Actions in Combat：施放施法时间为 Action 的法术。选择具体法术，确认射程、目标、成分与持续时间，并支付相应法术位；若法术需要专注，施放后会维持该专注。",
    combatAction: true,
  },
  {
    name: "Ready",
    level: "Feature",
    action: "Action",
    category: ["Utility"],
    range: "自身",
    duration: "直到触发或你下回合开始",
    description:
      "Actions in Combat：预先指定一个可感知的触发条件和一个行动或移动；触发时用 Reaction 执行。若准备的是法术，通常需要专注并消耗法术位。",
    combatAction: true,
  },
  {
    name: "Search",
    level: "Feature",
    action: "Action",
    category: ["Utility"],
    range: "依情境",
    duration: "即时",
    description:
      "Actions in Combat：专注寻找某物或生物；通常进行Wisdom检定，具体技能由 DM 决定。",
    combatAction: true,
  },
  {
    name: "Shove",
    level: "Feature",
    action: "Action",
    category: ["Control"],
    range: "5 ft (Reach)",
    duration: "Instantaneous",
    description:
      "Actions in Combat / Unarmed Strike：目标选择进行Strength或Dexterity豁免，失败则被推开 5 ft 或倒地。豁免 DC = 8 + 熟练加值 + Strength调整值。",
    combatAction: true,
  },
  {
    name: "Study",
    level: "Feature",
    action: "Action",
    category: ["Utility"],
    range: "依情境",
    duration: "即时",
    description:
      "Actions in Combat：仔细观察或回忆信息；通常进行Intelligence检定，由 DM 决定适用技能。",
    combatAction: true,
  },
  {
    name: "Utilize",
    level: "Feature",
    action: "Action",
    category: ["Utility"],
    range: "依物件",
    duration: "即时",
    description:
      "Actions in Combat：使用需要 Action 的物件或互动选项，具体效果取决于物件规则。",
    combatAction: true,
  },
  {
    name: "Two-Weapon Fighting",
    level: "Feature",
    action: "Bonus Action",
    category: ["Attack"],
    range: "依两把武器",
    duration: "Instantaneous",
    description:
      "Bonus Action：在满足双持攻击条件时，使用另一把符合条件的武器进行额外攻击；具体伤害加值依角色能力与武器规则。",
    combatAction: true,
  },
  {
    name: "Interact with an Object",
    level: "Feature",
    action: "Action",
    category: ["Utility"],
    range: "Touch",
    duration: "Instantaneous",
    description:
      "与一个物件互动，例如打开门、拔出物品或操作简单装置。某些互动或物件使用需要 Utilize Action。",
    combatAction: true,
  },
  {
    name: "Gentle Repose (Ritual)",
    level: "Feature",
    action: "Action",
    category: ["Utility"],
    range: "Touch",
    duration: "10 days",
    description:
      "仪式施法快捷项：Gentle Repose 是 2 环法术。仪式施法需额外花费 10 分钟且不消耗法术位；须符合角色的仪式施法规则与准备条件。",
    combatAction: true,
    triggerOnly: true,
  },
  {
    name: "Kenku Recall",
    level: "Feature",
    action: "Other",
    category: ["Buff"],
    range: "自身",
    duration: "能力检定",
    description:
      "你获得自选两项技能的熟练。进行你已熟练的技能检定时，可在掷 d20 前获得优势；每次长休可使用 3 次。",
    usesPerLongRest: 3,
    always: true,
    nonSelectable: true,
  },
  {
    name: "Path to the Grave: End Curse",
    level: "Feature",
    action: "Other",
    category: ["Attack"],
    range: "被诅咒目标",
    duration: "即时",
    description:
      "无动作（No Action）：当你或一名盟友以攻击检定命中被 Path to the Grave 诅咒的目标时，可提前结束诅咒，使该次攻击额外造成 6 点 Necrotic 或 Radiant 伤害（选择其一）。这不是额外的 Channel Divinity 使用。",
    always: true,
    nonSelectable: true,
    triggerOnly: true,
  },
  {
    name: "Pull of Death",
    level: "Feature",
    action: "Other",
    category: ["Attack"],
    range: "依触发攻击/法术",
    duration: "被动",
    description:
      "被动能力：每回合一次，当你用法术造成伤害或以攻击检定命中一个缺失任意 HP 的生物时，该生物额外受到 1d4 Necrotic 伤害。牧师达到 11 级时，额外伤害提升至 1d6。",
    always: true,
    nonSelectable: true,
    triggerOnly: true,
  },
];
const defaults = {
  clericLevel: 6,
  wisdom: 4,
  proficiency: 3,
  round: 1,
  hp: 42,
  maxHp: 42,
  tempHp: 0,
  ac: 18,
  spellSlotCastThisTurn: false,
  slots: { "1st": 4, "2nd": 3, "3rd": 3 },
  maxSlots: { "1st": 4, "2nd": 3, "3rd": 3 },
  channelDivinity: 3,
  featureUses: {},
  concentration: null,
  effects: [],
  resources: {
    Action: false,
    "Bonus Action": false,
    Reaction: false,
    Movement: false,
  },
  preparedSpells: [
    "Guidance",
    "Resistance",
    "Sacred Flame",
    "Toll the Dead",
    "Bless",
    "Command",
    "Guiding Bolt",
    "Healing Word",
    "Aid",
    "Blindness/Deafness",
    "Spiritual Weapon",
    "Dispel Magic",
    "Mass Healing Word",
    "Spirit Guardians",
  ],
  knownCantrips: [
    "Guidance",
    "Light",
    "Resistance",
    "Sacred Flame",
    "Spare the Dying",
    "Toll the Dead",
  ],
  usedFeatures: [],
  notes: "",
};

const PREPARED_LIMIT_BY_LEVEL = {
  1: 4,
  2: 5,
  3: 6,
  4: 7,
  5: 9,
  6: 10,
  7: 11,
  8: 12,
  9: 14,
  10: 15,
  11: 16,
  12: 16,
  13: 17,
  14: 17,
  15: 18,
  16: 18,
  17: 19,
  18: 20,
  19: 21,
  20: 22,
};
function preparedSpellLimit() {
  return (
    PREPARED_LIMIT_BY_LEVEL[
      Math.max(1, Math.min(20, Number(state.clericLevel) || 6))
    ] || 10
  );
}
function countsAgainstPreparedLimit(s) {
  return (
    !!s &&
    s.level !== "Cantrip" &&
    s.level !== "Feature" &&
    !s.always &&
    s.resource !== "Channel Divinity"
  );
}
function preparedSpellCount() {
  return new Set(
    (state.preparedSpells || []).filter((n) =>
      countsAgainstPreparedLimit(spells.find((s) => s.name === n)),
    ),
  ).size;
}
function normalizePreparedSpells() {
  for (const s of spells) {
    if (isAlwaysPreparedSpell(s)) {
      state.preparedSpells = state.preparedSpells || [];
      if (!state.preparedSpells.includes(s.name))
        state.preparedSpells.push(s.name);
    }
  }
  const seen = new Set(),
    out = [];
  for (const name of state.preparedSpells || []) {
    const s = spells.find((x) => x.name === name);
    if (
      !s ||
      s.resource === "Channel Divinity" ||
      (s.level === "Cantrip" && !isCantripKnown(s)) ||
      seen.has(name)
    )
      continue;
    seen.add(name);
    out.push(name);
  }
  state.preparedSpells = out;
}

let state = loadState();
normalizePreparedSpells();
if (!Array.isArray(state.turnStartEffects))
  state.turnStartEffects = JSON.parse(JSON.stringify(state.effects || []));
if (!state.turnStartSlots || typeof state.turnStartSlots !== "object")
  state.turnStartSlots = { ...state.slots };
let activeTab = "Action",
  activeFilter = "All";
let completedPhases = new Set(
  Array.isArray(state.completedPhases) ? state.completedPhases : [],
);
function loadState() {
  try {
    const saved = JSON.parse(
      localStorage.getItem("clericCompanionState") || "{}",
    );
    const merged = {
      ...defaults,
      ...saved,
      featureUses: {
        ...(defaults.featureUses || {}),
        ...(saved.featureUses || {}),
      },
      knownCantrips: Array.isArray(saved.knownCantrips)
        ? saved.knownCantrips
        : [...defaults.knownCantrips],
    };
    if (saved.spellSetupVersion !== 4) {
      merged.preparedSpells = [
        "Guidance",
        "Resistance",
        "Sacred Flame",
        "Toll the Dead",
        "Bless",
        "Command",
        "Guiding Bolt",
        "Healing Word",
        "Aid",
        "Blindness/Deafness",
        "Spiritual Weapon",
        "Dispel Magic",
        "Mass Healing Word",
        "Spirit Guardians",
      ];
      merged.spellSetupVersion = 4;
    }
    return merged;
  } catch (e) {
    return structuredClone(defaults);
  }
}
function editClericLevel() {
  const current = Number.isSafeInteger(Number(state.clericLevel))
    ? Number(state.clericLevel)
    : 6;
  const raw = prompt("牧师等级：", String(current));
  if (raw === null) return;
  const textValue = raw.trim();
  if (!/^(?:[1-9]|1[0-9]|20)$/.test(textValue)) {
    alert("输入无效：等级必须是 1–20 之间的整数，不能输入小数或字母。");
    return;
  }
  state.clericLevel = Number(textValue);
  save();
}
function save() {
  state.spellSetupVersion = 4;
  localStorage.setItem("clericCompanionState", JSON.stringify(state));
  render();
}
function esc(s) {
  return String(s ?? "").replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ],
  );
}
function toast(s) {
  const t = document.getElementById("toast");
  t.textContent = s;
  t.style.display = "block";
  setTimeout(() => (t.style.display = "none"), 1900);
}
function tag(s, cls = "") {
  return `<span class="pill ${cls}">${esc(s)}</span>`;
}
function renderSlotBoxes() {
  const levels = ["1st", "2nd", "3rd"];
  return levels
    .map((level) => {
      const max = Math.max(
        0,
        Number(
          state.maxSlots?.[level] ?? { "1st": 4, "2nd": 3, "3rd": 3 }[level],
        ) || 0,
      );
      const remaining = Math.max(
        0,
        Math.min(max, Number(state.slots?.[level]) || 0),
      );
      const boxes = Array.from(
        { length: max },
        (_, i) =>
          `<span class="slot-box ${i < remaining ? "available" : "spent"}" title="${i < remaining ? "可用" : "已消耗"}"></span>`,
      ).join("");
      return `<div class="slot-level slot-level-${level[0]}"><span class="slot-level-label">${level}</span><div class="slot-boxes">${boxes || `<span class="slot-empty">—</span>`}</div></div>`;
    })
    .join("");
}
function cleanEffectNote(note) {
  return String(note || "")
    .replace(
      /(?:。|；|;)?\s*(?:需要专注|需专注|本法术需要专注|持续时间[：:]?[^。；;]*)[。；;]?/g,
      "",
    )
    .replace(/\s{2,}/g, " ")
    .trim();
}
function cleanSpellDescription(description) {
  return String(description || "")
    .replace(/^\s*Actions in Combat(?:\s*\/\s*[^：:]+)?[：:]\s*/i, "")
    .trim();
}
function effectDisplayText(effect, spell) {
  const parts = [];
  const description = cleanSpellDescription(spell && spell.description);
  if (description) parts.push(description);
  let note = String((effect && effect.note) || "").trim();
  const duration = String((spell && spell.duration) || "").trim();
  if (duration && note.toLowerCase().startsWith(duration.toLowerCase())) {
    note = note
      .slice(duration.length)
      .replace(/^[\s；;，]+/, "")
      .trim();
  }
  note = cleanEffectNote(note);
  if (note && note !== description) parts.push(note);
  return parts.join(" ");
}
function effectDescriptionHtml(effect) {
  const spell = spells.find((s) => s.name === effect.name);
  const text = effectDisplayText(effect, spell);
  return text ? `<p>${esc(text)}</p>` : "";
}
function getComputedStats() {
  const wisdom = Number.isSafeInteger(Number(state.wisdom))
    ? Number(state.wisdom)
    : 4;
  const proficiency = Number.isSafeInteger(Number(state.proficiency))
    ? Number(state.proficiency)
    : 3;
  return {
    wisdom,
    proficiency,
    spellAttack: wisdom + proficiency,
    spellSaveDC: 8 + wisdom + proficiency,
  };
}
function render() {
  const computedStats = getComputedStats();
  const levelValue = document.getElementById("clericLevelValue");
  if (levelValue) {
    const level = Number.isSafeInteger(Number(state.clericLevel))
      ? Number(state.clericLevel)
      : 6;
    levelValue.textContent = String(level);
  }
  const wisdomText = document.getElementById("wisdomText");
  if (wisdomText)
    wisdomText.textContent = `${computedStats.wisdom >= 0 ? "+" : ""}${computedStats.wisdom}`;
  const proficiencyText = document.getElementById("proficiencyText");
  if (proficiencyText)
    proficiencyText.textContent = `${computedStats.proficiency >= 0 ? "+" : ""}${computedStats.proficiency}`;
  const spellAttackText = document.getElementById("spellAttackText");
  if (spellAttackText)
    spellAttackText.textContent = `${computedStats.spellAttack >= 0 ? "+" : ""}${computedStats.spellAttack}`;
  const spellSaveDCText = document.getElementById("spellSaveDCText");
  if (spellSaveDCText)
    spellSaveDCText.textContent = String(computedStats.spellSaveDC);
  const counter = document.getElementById("preparedCounter");
  if (counter)
    counter.innerHTML = `准备法术：${preparedSpellCount()}/${preparedSpellLimit()}`;
  document.getElementById("roundNum").textContent = state.round;
  document.getElementById("hpCurrentText").textContent = state.hp;
  document.getElementById("hpMaxText").textContent = state.maxHp;
  document.getElementById("tempHpInline").textContent =
    ` + ${state.tempHp || 0}`;
  document.getElementById("acText").textContent = `Armor Class ${state.ac}`;
  document.getElementById("spellSaveDCText").textContent =
    getComputedStats().spellSaveDC ?? 15;
  const spellAttack = Number.isSafeInteger(
    Number(getComputedStats().spellAttack),
  )
    ? Number(getComputedStats().spellAttack)
    : 7;
  document.getElementById("spellAttackText").textContent =
    `${spellAttack >= 0 ? "+" : ""}${spellAttack}`;
  document.getElementById("slotsText").innerHTML = renderSlotBoxes();
  const concentrationEffect = state.concentration
    ? state.effects.find((e) => e.name === state.concentration.name)
    : null;
  const otherEffects = state.effects
    .map((e, i) => ({ e, i }))
    .filter(
      (x) => !state.concentration || x.e.name !== state.concentration.name,
    );
  const concentrationRemaining =
    concentrationEffect && concentrationEffect.rounds !== null
      ? `剩余 ${concentrationEffect.rounds} 回合`
      : "剩余时间未追踪";
  const concentrationCard = state.concentration
    ? `<div class="effect concentration-effect"><div class="effect-top concentration-effect-top"><div class="effect-name-row"><strong>${esc(state.concentration.name)}</strong><span class="effect-remaining ${concentrationEffect && concentrationEffect.rounds !== null && concentrationEffect.rounds <= 1 ? "urgent" : ""}">${esc(concentrationRemaining)}</span></div><div class="concentration-controls"><span class="pill concentration-card-pill concentration-pill">专注中</span><button class="small danger" onclick="clearConcentration()">结束专注</button></div></div>${concentrationEffect ? effectDescriptionHtml(concentrationEffect) : ""}</div>`
    : "";
  const otherEffectsHtml = otherEffects
    .map(
      ({ e, i }) =>
        `<div class="effect"><div class="effect-top effect-active-top"><div class="effect-name-row"><strong>${esc(e.name)}</strong><span class="effect-remaining ${e.rounds !== null && e.rounds <= 1 ? "urgent" : ""}">${e.rounds === null ? "剩余时间未追踪" : `剩余 ${e.rounds} 回合`}</span></div><div class="effect-remove-control"><button class="small danger" onclick="removeEffect(${i})">移除效果</button></div></div>${effectDescriptionHtml(e)}</div>`,
    )
    .join("");
  document.getElementById("effects").innerHTML =
    concentrationCard + otherEffectsHtml ||
    `<div class="empty">还没有登记生效效果。施放法术后可在这里添加。</div>`;
  renderPhaseTabs();
  renderDecision();
  renderSpells();
}
function isCantripKnown(s) {
  if (!s || s.level !== "Cantrip") return false;
  if (Array.isArray(state.knownCantrips))
    return state.knownCantrips.includes(s.name);
  return s.known !== false;
}
function isAlwaysPreparedSpell(s) {
  if (!s || s.level === "Feature") return false;
  if (s.level === "Cantrip") return isCantripKnown(s);
  return !!s.always;
}
function spellCard(s, selectable = false, phaseKey = null) {
  const isPrepared = (state.preparedSpells || []).includes(s.name);
  const isAlwaysPrepared = isAlwaysPreparedSpell(s);
  const titleLevel = tag(
    {
      Cantrip: "Cantrip",
      "1st": "1st",
      "2nd": "2nd",
      "3rd": "3rd",
      "4th": "4th",
      "5th": "5th",
      "6th": "6th",
      "7th": "7th",
      "8th": "8th",
      "9th": "9th",
    }[s.level] || s.level,
    {
      Cantrip: "teal",
      "1st": "spell-level-1",
      "2nd": "spell-level-2",
      "3rd": "spell-level-3",
      "4th": "spell-level-4",
      "5th": "spell-level-5",
      "6th": "spell-level-6",
      "7th": "spell-level-7",
      "8th": "spell-level-8",
      "9th": "spell-level-9",
    }[s.level] || "spell-level-1",
  );
  const rangeText = String(s.range || "");
  const emanationMatch = rangeText.match(
    /(?:^|\b)(5|15)(?:\s*-\s*ft|\s*-\s*foot|\s*ft|\s*foot)\s+emanation\b/i,
  );
  const translatedRange = emanationMatch
    ? `自身 ${emanationMatch[1]} ft 球型`
    : null;
  const cardRange =
    s.combatAction && /^依/.test(String(s.range || ""))
      ? ""
      : translatedRange ||
        {
          Touch: "接触",
          自身: "自身",
          "自身 (15-foot cone)": "自身（15尺锥形）",
          "自身 (30-foot cone)": "自身（30尺锥形）",
          "自身 (60-foot line)": "自身（60尺直线）",
          "自身 (10-foot radius)": "自身（10尺半径）",
          "自身 (5-foot radius)": "自身（5尺半径）",
          "5-ft emanation": "5 ft 球型",
          "5-foot emanation": "5 ft 球型",
          "5 ft emanation": "5 ft 球型",
          "5 foot emanation": "5 ft 球型",
          "15-ft emanation": "15 ft 球型",
          "15-foot emanation": "15 ft 球型",
          "15 ft emanation": "15 ft 球型",
          "15 foot emanation": "15 ft 球型",
        }[s.range] ||
        s.range ||
        "未注明";
  const cardDuration =
    s.combatAction && /^依/.test(String(s.duration || ""))
      ? ""
      : s.duration
        ? {
            Instantaneous: "即时",
            "1 round": "1回合",
            "1 round (攻击优势效果)": "1回合（攻击优势效果）",
            "1 minute": "1分钟",
            "up to 1 minute": "最长1分钟",
            "Up to 1 minute": "最长1分钟",
            "10 minutes": "10分钟",
            "1 hour": "1小时",
            "8 hours": "8小时",
            "24 hours": "24小时",
            "10 days": "10天",
            "Until dispelled": "直到被解除",
            "Concentration, up to 1 minute": "最长1分钟",
            "Concentration, up to 10 minutes": "最长10分钟",
            "Concentration, up to 1 hour": "最长1小时",
            "Concentration, up to 1 hour (ritual)": "最长1小时",
          }[s.duration] ||
          String(s.duration)
            .replace(/^Concentration,?\\s*/i, "")
            .replace(/^专注[，]?\\s*/, "")
            .replace(/^up to\\s+1\\s+minute$/i, "最长1分钟")
            .replace(/^10\\s+days?$/i, (m) =>
              m.toLowerCase() === "10 days" ? "10天" : "10天",
            )
            .replace(/^1\\s*round\\b/i, "1回合")
        : "";
  const displayCardDuration =
    /until start of next turn|直到你下回合开始|通常到你下回合开始|本回合/i.test(
      String(s.duration || ""),
    )
      ? "1回合"
      : cardDuration;
  const usageHint =
    s.resource === "Channel Divinity"
      ? ` · 剩余次数 ${Math.max(0, Math.min(3, Number(state.channelDivinity) || 0))}`
      : s.usesPerLongRest
        ? ` · 剩余次数 ${Math.max(0, s.usesPerLongRest - Number(state.featureUses?.[s.name] || 0))}`
        : "";
  const levelText = `<div class="spell-card-title"><strong>${esc(s.name)}</strong>${titleLevel}${s.concentration ? tag("专注", "concentration-card-pill") : ""}</div><div class="meta spell-card-hint">${cardRange ? `<span>${esc(cardRange)}</span>` : ""}${displayCardDuration ? `<span>${cardRange ? "· " : ""}${esc(displayCardDuration)}</span>` : ""}${usageHint ? `<span>${cardRange || cardDuration ? "· " : ""}${esc(usageHint.replace(/^\s*·\s*/, ""))}</span>` : ""}</div>`;
  const escapedName = s.name.replace(/'/g, "\\'");
  if (selectable) {
    const cardClass = `spell library-selectable${isAlwaysPrepared ? " always-prepared-card" : ""}${isPrepared ? " prepared-selected" : ""}`;
    return `<button class="${cardClass}" aria-pressed="${isPrepared}" onclick="showSpell('${escapedName}','library')">${levelText}</button>`;
  }
  const cardClass = `spell${isAlwaysPrepared ? " always-prepared-card" : ""}`;
  if (phaseKey) {
    return `<button class="${cardClass}" onclick="showDecisionSpell('${escapedName}','${phaseKey}')">${levelText}</button>`;
  }
  return `<button class="${cardClass}" ${isAlwaysPrepared ? 'title="常备法术"' : ""} onclick="${isAlwaysPrepared ? "notifyAlwaysPrepared()" : `showSpell(\'${escapedName}\')`}">${levelText}</button>`;
}
function renderDecision() {
  const list = spells.filter(
    (s) =>
      !s.triggerOnly &&
      (s.action === activeTab ||
        (activeTab === "Movement" &&
          ["Movement", "Other"].includes(s.action))) &&
      s.resource !== "Channel Divinity" &&
      ((state.preparedSpells || []).includes(s.name) ||
        s.always ||
        s.combatAction ||
        (s.level === "Cantrip" && isCantripKnown(s))),
  );
  list.sort((a, b) => Number(!!a.combatAction) - Number(!!b.combatAction));
  const channelOptions = spells.filter(
    (s) => s.resource === "Channel Divinity" && s.action === activeTab,
  );
  const groups = [
    ["攻击", (s) => !s.combatAction && s.category[0] === "Attack"],
    ["治疗", (s) => !s.combatAction && s.category[0] === "Healing"],
    ["Buff", (s) => !s.combatAction && s.category[0] === "Buff"],
    ["Debuff / 控制", (s) => !s.combatAction && s.category[0] === "Debuff"],
    [
      "其他 / 功能",
      (s) =>
        !s.combatAction &&
        !["Attack", "Healing", "Buff", "Debuff"].includes(s.category[0]),
    ],
    ["Actions in Combat", (s) => s.combatAction],
  ];
  const el = document.getElementById("decisionContent");
  const resourceUsed =
    state.resources[activeTab] === true || completedPhases.has(activeTab);
  const actionWarning = resourceUsed
    ? `<div class="effect status-card" style="border-color:#c06d78"><strong>⚠ 本阶段已使用行动</strong></div>`
    : `<div class="effect status-card" style="border-color:#5a9e7e"><strong>✓ 本阶段可使用行动</strong></div>`;
  const spellSlotWarning = state.spellSlotCastThisTurn
    ? `<div class="effect status-card spell-slot-status" style="border-color:#c06d78"><strong>✕ 本回合已施放法术</strong></div>`
    : `<div class="effect status-card spell-slot-status" style="border-color:#5a9e7e"><strong>✓ 本回合未施放法术</strong></div>`;
  const concentrationWarning = state.concentration
    ? `<div class="effect status-card concentration-status" style="border-color:#9277c4"><strong>专注中：${esc(state.concentration.name)}</strong></div>`
    : `<div class="effect status-card concentration-status status-placeholder" aria-hidden="true"></div>`;
  const cdRemaining = Math.max(
    0,
    Math.min(3, Number(state.channelDivinity) || 0),
  );
  const channelSection = channelOptions.length
    ? `<div class="category"><div class="category-head"><h3>Channel Divinity · 神圣引导</h3></div><div class="spell-list">${channelOptions.map((spell) => spellCard(spell, false, activeTab)).join("")}</div>${cdRemaining === 0 ? `<div class="effect"><p>本次休息周期的 Channel Divinity 次数已用完。短休恢复 1 次，长休恢复至 3 次。</p></div>` : ""}</div>`
    : "";
  const regularSections = list.length
    ? groups
        .map(([title, pred]) => {
          let a = list.filter(pred);
          return a.length
            ? `<div class="category"><div class="category-head"><h3>${title}</h3></div><div class="spell-list">${a.map((spell) => spellCard(spell, false, activeTab)).join("")}</div></div>`
            : "";
        })
        .join("")
    : "";
  el.innerHTML =
    `<div class="decision-status-row">${actionWarning}${spellSlotWarning}${concentrationWarning}</div>` +
    channelSection +
    (regularSections ||
      (!channelSection
        ? `<div class="empty">这个阶段暂时没有已录入的选项。你可以在下方技能库查看所有技能。</div>`
        : ""));
}
function togglePrepared(name) {
  const s = spells.find((x) => x.name === name);
  if (!s || s.resource === "Channel Divinity") return;
  if (s.known === false) {
    toast(`${name} 尚未学习，不能加入本回合决策`);
    return;
  }
  const prepared = new Set(state.preparedSpells || []);
  if (prepared.has(name)) {
    prepared.delete(name);
  } else {
    if (
      countsAgainstPreparedLimit(s) &&
      preparedSpellCount() >= preparedSpellLimit()
    ) {
      toast(
        `已达到 ${state.clericLevel} 级牧师的准备法术上限（${preparedSpellLimit()} 个）。请先取消准备一个法术。`,
      );
      return;
    }
    prepared.add(name);
  }
  state.preparedSpells = [...prepared];
  save();
  toast(prepared.has(name) ? `${name} 已设为已准备` : `${name} 已取消准备`);
}
function renderSpells() {
  const q = (document.getElementById("search").value || "").toLowerCase();
  const list = spells.filter((s) => {
    if (s.triggerOnly) return false;
    const text = [
      s.name,
      s.level,
      s.action,
      s.range,
      s.duration,
      s.description,
      ...s.category,
    ]
      .join(" ")
      .toLowerCase();
    const levelOk =
      activeFilter === "All" ||
      (activeFilter === "Attack" && s.category.includes("Attack")) ||
      (activeFilter === "Healing" && s.category.includes("Healing")) ||
      (activeFilter === "Buff" && s.category.includes("Buff")) ||
      s.level === activeFilter;
    return levelOk && text.includes(q);
  });
  document.getElementById("allSpells").innerHTML =
    list.map((s) => spellCard(s, true)).join("") ||
    `<div class="empty">没有匹配项目。</div>`;
}
function spellSlotOptions(s) {
  if (s.level === "Cantrip" || s.level === "Feature")
    return `<div class="effect"><strong>不消耗法术位</strong><p>戏法 / 职业能力不使用法术位。</p></div>`;
  const levels = ["1st", "2nd", "3rd"];
  const base = levels.indexOf(s.level);
  const choices = levels.slice(base).filter((l) => (state.slots[l] || 0) > 0);
  if (!choices.length)
    return `<div class="effect"><strong>法术位不足</strong><p>${esc(s.level)} 及更高环级都没有剩余法术位。</p></div>`;
  const canUpcast = levels.indexOf(s.level) < levels.length - 1;
  const options = choices
    .map(
      (l) =>
        `<option value="${l}" ${l === s.level ? "selected" : ""}>${l}${l === s.level ? "（基础环级）" : "（升环）"} · 剩余 ${state.slots[l]}</option>`,
    )
    .join("");
  return `<div class="field"><label for="castSlot">施放环级 / 升环选项</label><select id="castSlot">${options}</select></div>${canUpcast ? `<div class="effect"><strong>升环说明</strong><p>${esc(s.upcast || "可以选择更高环级施放；此法术的具体升环收益请查阅法术文本。")}</p></div>` : ""}`;
}
function selectedSlotFor(s) {
  if (s.level === "Cantrip" || s.level === "Feature") return null;
  return document.getElementById("castSlot")?.value || s.level;
}
function renderPhaseTabs() {
  const order = ["Action", "Bonus Action", "Reaction", "Movement"];
  const labels = {
    Action: "Action",
    "Bonus Action": "Bonus Action",
    Reaction: "Reaction",
    Movement: "Movement / Other",
  };
  document.querySelectorAll("#tabs .tab").forEach((b) => {
    const k = b.dataset.tab;
    b.textContent = labels[k];
    b.classList.toggle("phase-completed", completedPhases.has(k));
    b.classList.toggle("active", k === activeTab);
  });
}
function markPhaseDone(k) {
  completedPhases.add(k);
  state.completedPhases = [...completedPhases];
}
function endCurrentPhase() {
  markPhaseDone(activeTab);
  save();
  toast(`${activeTab} 阶段已手动结束`);
}
function phaseLabel(k) {
  return k === "Movement" ? "Movement / Other" : k;
}
function phaseAlreadyUsed(k) {
  return !!state.resources?.[k] || completedPhases.has(k);
}
function showDecisionSpell(name, phase) {
  const s = spells.find((x) => x.name === name);
  const actualPhase = s ? phaseForSpell(s) : phase;
  if (actualPhase !== phase) {
    toast(`请切换到 ${phaseLabel(actualPhase)} 阶段使用该技能`);
    return;
  }
  // Always open the spell page for inspection. If the phase or spell-slot
  // limit has already been used, the Cast button will be dimmed with feedback.
  showSpell(name);
}
function phaseForSpell(s) {
  if (["Action", "Bonus Action", "Reaction", "Movement"].includes(s.action))
    return s.action;
  return activeTab === "Movement" ? "Movement" : s.action;
}
function advanceAfterPhaseUse(phase) {
  state.resources[phase] = true;
  markPhaseDone(phase);
  return `${phaseLabel(phase)} 阶段已使用`;
}
function notifyAlwaysPrepared() {
  if (typeof toast === "function") {
    toast("本技能为常备技能，或取消准备。");
    return;
  }
  if (typeof showToast === "function") {
    showToast("本技能为常备技能，或取消准备。");
    return;
  }
  if (typeof notify === "function") {
    notify("本技能为常备技能，或取消准备。");
    return;
  }
  window.alert("本技能为常备技能，或取消准备。");
}
function usesSpellSlot(s) {
  return (
    !!s &&
    s.level !== "Cantrip" &&
    s.level !== "Feature" &&
    s.resource !== "Channel Divinity"
  );
}
function blockedSpellCast(name) {
  const s = spells.find((x) => x.name === name);
  if (s) {
    const phase = phaseForSpell(s);
    if (phaseAlreadyUsed(phase)) {
      toast(`${phaseLabel(phase)} 阶段已使用行动`);
      return;
    }
    if (usesSpellSlot(s) && state.spellSlotCastThisTurn) {
      toast("本回合已施放法术");
      return;
    }
  }
  toast("该技能当前不可施放");
}
function spellRollInfo(s) {
  const desc = String(s.description || "");
  const saveMatch = String(s.save || "").match(
    /^(Strength|Dexterity|Constitution|Intelligence|Wisdom|Charisma)(?:\s+DC\s+(\d+))?$/i,
  );
  let saveAbility = saveMatch ? saveMatch[1] : "";
  if (!saveAbility) {
    const cn = desc.match(
      /(Strength|Dexterity|Constitution|Intelligence|Wisdom|Charisma)豁免/i,
    );
    const en = desc.match(
      /(Strength|Dexterity|Constitution|Intelligence|Wisdom|Charisma) saving throw/i,
    );
    saveAbility = cn ? cn[1] : en ? en[1] : "";
  }
  const abilityNames = {
    Strength: "Strength",
    Dexterity: "Dexterity",
    Constitution: "Constitution",
    Intelligence: "Intelligence",
    Wisdom: "Wisdom",
    Charisma: "Charisma",
  };
  const saveName = abilityNames[saveAbility] || saveAbility;
  const explicitDC = saveMatch && saveMatch[2] ? Number(saveMatch[2]) : null;
  const dc =
    explicitDC !== null
      ? explicitDC
      : Number(getComputedStats().spellSaveDC) || 15;
  const diceMatches = desc.match(/\b\d*d\d+(?:\s*[+-]\s*\d+)?\b/gi) || [];
  const damageDice = /伤害|damage/i.test(desc)
    ? [...new Set(diceMatches.map((x) => x.replace(/\s+/g, "")))].join(" / ")
    : "";
  const effectiveDamageDice =
    s.name === "Spirit Guardians" ? "3d8" : damageDice;
  const damageTypeNames = {
    Acid: "Acid",
    Bludgeoning: "Bludgeoning",
    Cold: "Cold",
    Fire: "Fire",
    Force: "Force",
    Lightning: "Lightning",
    Necrotic: "Necrotic",
    Piercing: "Piercing",
    Poison: "Poison",
    Psychic: "Psychic",
    Radiant: "Radiant",
    Slashing: "Slashing",
    Thunder: "Thunder",
  };
  const damageTypeAliases = [
    [/\bacid(?:\s+damage)?\b|酸蚀伤害|酸液伤害/i, "Acid"],
    [/\bbludgeoning(?:\s+damage)?\b|钝击伤害/i, "Bludgeoning"],
    [/\bcold(?:\s+damage)?\b|寒冷伤害/i, "Cold"],
    [/\bfire(?:\s+damage)?\b|火焰伤害/i, "Fire"],
    [/\bforce(?:\s+damage)?\b|力场伤害/i, "Force"],
    [/\blightning(?:\s+damage)?\b|闪电伤害/i, "Lightning"],
    [/\bnecrotic(?:\s+damage)?\b|黯蚀伤害|死灵伤害/i, "Necrotic"],
    [/\bpiercing(?:\s+damage)?\b|穿刺伤害/i, "Piercing"],
    [/\bpoison(?:\s+damage)?\b|毒素伤害|毒性伤害/i, "Poison"],
    [/\bpsychic(?:\s+damage)?\b|心灵伤害/i, "Psychic"],
    [/\bradiant(?:\s+damage)?\b|光耀伤害|神圣伤害/i, "Radiant"],
    [/\bslashing(?:\s+damage)?\b|挥砍伤害/i, "Slashing"],
    [/\bthunder(?:\s+damage)?\b|雷鸣伤害/i, "Thunder"],
  ];
  let detectedTypes = [];
  if (s.damageType) {
    const rawTypes = Array.isArray(s.damageType)
      ? s.damageType
      : [s.damageType];
    detectedTypes = rawTypes.map((t) => String(t).trim()).filter(Boolean);
  }
  if (!detectedTypes.length) {
    detectedTypes = damageTypeAliases
      .filter(([pattern]) => pattern.test(desc))
      .map(([, type]) => type);
  }
  if (s.name === "Spirit Guardians") detectedTypes = ["Radiant", "Necrotic"];
  const uniqueTypes = [...new Set(detectedTypes)];
  const damageTypeText = uniqueTypes.length
    ? uniqueTypes.map((t) => damageTypeNames[t] || t).join(" / ")
    : "";
  const saveText = saveAbility
    ? `${saveName} · DC ${dc}${effectiveDamageDice ? ` · 伤害骰 ${effectiveDamageDice}` : ""}`
    : "—";
  const attackType = String(s.attack || "");
  const attackBonus = Number.isSafeInteger(
    Number(getComputedStats().spellAttack),
  )
    ? Number(getComputedStats().spellAttack)
    : 7;
  const attackText = attackType
    ? `Wisdom ${attackBonus >= 0 ? "+" : ""}${attackBonus}（d20 ${attackBonus >= 0 ? "+ " : "− "}${Math.abs(attackBonus)}）${effectiveDamageDice ? ` · 命中伤害 ${effectiveDamageDice}` : ""}`
    : "—";
  return { saveText, attackText, damageTypeText };
}
function showSpell(name, mode = "cast") {
  const s = spells.find((x) => x.name === name);
  if (!s) return;
  const libraryMode = mode === "library";
  const modalType = document.getElementById("modalType");
  modalType.textContent = "";
  const modalTitle = document.getElementById("modalTitle");
  const modalInfo = spellRollInfo(s);
  const modalDamageType = modalInfo.damageTypeText;
  const modalLevel = s.level === "Cantrip" ? "Cantrip" : s.level;
  modalTitle.innerHTML = `${esc(s.name)} <span class="modal-title-meta">${esc(modalLevel)}${modalDamageType ? ` · ${esc(modalDamageType)}` : ""}</span>`;
  const currentConcentrationEffect = state.concentration
    ? state.effects.find((e) => e.name === state.concentration.name)
    : null;
  const currentConcentrationTime = state.concentration
    ? `${esc(state.concentration.duration || "持续时间未记录")}${currentConcentrationEffect && currentConcentrationEffect.rounds !== null ? ` · 剩余 ${currentConcentrationEffect.rounds} 回合` : ""}`
    : "";
  const breaksConcentration = !!(
    s.concentration &&
    state.concentration &&
    state.concentration.name !== s.name
  );
  const concentrationNotice = breaksConcentration
    ? `<div class="concentration-break-warning"><strong>⚠ 施放后会打断当前专注</strong><p><strong>当前专注：</strong>${esc(state.concentration.name)}</p><p><strong>当前持续时间：</strong>${currentConcentrationTime}</p></div>`
    : "";
  const rollInfo = spellRollInfo(s);
  const details = `<div class="details"><div class="detail"><small>射程</small><strong>${esc(s.range)}</strong></div><div class="detail"><small>持续时间</small><strong>${esc(s.duration)}</strong></div><div class="detail"><small>专注</small><strong>${s.concentration ? "是" : "否"}</strong></div><div class="detail"><small>成分</small><strong>${esc(s.components || "—")}</strong></div><div class="detail"><small>豁免</small><strong>${esc(rollInfo.saveText)}</strong></div><div class="detail"><small>攻击</small><strong>${esc(rollInfo.attackText)}</strong></div></div><p>${esc(cleanSpellDescription(s.description))}</p><div class="inline">${s.concentration ? tag("专注", "purple") : ""}</div>${s.resource && s.resource !== "Channel Divinity" ? `<p class="sub">资源：${esc(s.resource)}</p>` : ""}`;
  if (libraryMode) {
    let actions = "";
    if (s.level === "Cantrip") {
      const known = isCantripKnown(s);
      actions = `<button class="primary" onclick="toggleCantripLearningFromLibrary('${s.name.replace(/'/g, "\\'")}')">${known ? "取消学习" : "学习"}</button><button onclick="closeModal()">关闭</button>`;
    } else if (s.level === "Feature") {
      actions = `<button onclick="closeModal()">关闭</button>`;
    } else if (isAlwaysPreparedSpell(s)) {
      actions = `<button class="primary" disabled>常备法术</button><button onclick="closeModal()">关闭</button>`;
    } else {
      const prepared = (state.preparedSpells || []).includes(s.name);
      actions = `<button class="primary" onclick="togglePreparedFromLibrary('${s.name.replace(/'/g, "\\'")}')">${prepared ? "取消准备" : "准备"}</button><button onclick="closeModal()">关闭</button>`;
    }
    document.getElementById("modalBody").innerHTML =
      `${details}<div class="rule"></div><div class="spell-modal-actions">${actions}</div>`;
  } else {
    const castBlockedPhase = phaseForSpell(s);
    const phaseBlocked = phaseAlreadyUsed(castBlockedPhase);
    const slotBlocked = usesSpellSlot(s) && state.spellSlotCastThisTurn;
    const castButton = s.triggerOnly
      ? `<button onclick="closeModal()">关闭</button>`
      : phaseBlocked || slotBlocked
        ? `<button class="primary spell-cast-blocked" aria-disabled="true" title="${phaseBlocked ? `${phaseLabel(castBlockedPhase)} 阶段已使用行动` : "本回合已施放法术"}" onclick="blockedSpellCast('${s.name.replace(/'/g, "\\'")}')">施放</button>`
        : `<button class="primary" onclick="applySpell('${s.name.replace(/'/g, "\\'")}')">施放</button>`;
    document.getElementById("modalBody").innerHTML =
      `${details}<div class="rule"></div>${spellSlotOptions(s)}${concentrationNotice}<div class="spell-modal-actions">${castButton}${s.triggerOnly ? "" : `<button onclick="closeModal()">取消</button>`}</div>`;
  }
  document.getElementById("modalBackdrop").classList.add("open");
}
function togglePreparedFromLibrary(name) {
  togglePrepared(name);
  closeModal();
}
function toggleCantripLearningFromLibrary(name) {
  const s = spells.find((x) => x.name === name);
  if (!s || s.level !== "Cantrip") return;
  const known = new Set(
    Array.isArray(state.knownCantrips)
      ? state.knownCantrips
      : spells
          .filter((x) => x.level === "Cantrip" && x.known !== false)
          .map((x) => x.name),
  );
  if (known.has(name)) {
    known.delete(name);
    state.preparedSpells = (state.preparedSpells || []).filter(
      (n) => n !== name,
    );
    toast(`${name} 已取消学习`);
  } else {
    known.add(name);
    if (!(state.preparedSpells || []).includes(name))
      state.preparedSpells.push(name);
    toast(`${name} 已学会并设为常备技能`);
  }
  state.knownCantrips = [...known];
  save();
  closeModal();
}
function closeModal() {
  document.getElementById("modalBackdrop").classList.remove("open");
}
function automaticEffectRounds(s) {
  const d = String(s.duration || "")
    .toLowerCase()
    .trim();
  if (!d || ["instantaneous", "instant", "即时", "即时"].includes(d))
    return null;
  // 本回合/到下回合开始、Until start/end of next turn 等效果统一按 1 回合追踪。
  if (
    /\b1\s*round\b/.test(d) ||
    /1\s*轮/.test(d) ||
    /本回合/.test(d) ||
    /下回合开始/.test(d) ||
    /\b(?:until\s+)?(?:the\s+)?(?:start|end)\s+of\s+(?:your\s+)?next\s+turn\b/.test(
      d,
    ) ||
    /\buntil\s+(?:start|end)\s+of\s+next\s+turn\b/.test(d) ||
    /\bthis\s+turn\b/.test(d)
  )
    return 1;
  const tenMinutes = /10\s*minutes?/.test(d) || /10\s*分钟/.test(d);
  if (tenMinutes) return 100;
  const oneMinute = /\b1\s*minute\b/.test(d) || /1\s*分钟/.test(d);
  if (oneMinute) return 10;
  const nMinutes =
    d.match(/(?:up to\s*)?(?:最长\s*)?(\d+)\s*分钟/) ||
    d.match(/(?:up to\s*)?(\d+)\s*minutes?/);
  if (nMinutes) {
    const minutes = Number(nMinutes[1]);
    if (minutes > 0) return minutes * 10;
  }
  // Hour-long and longer effects are kept active without combat-round countdown.
  return null;
}
function applySpell(name) {
  const s = spells.find((x) => x.name === name);
  if (!s) return;
  if (usesSpellSlot(s) && state.spellSlotCastThisTurn) {
    toast("本回合已施放法术");
    return;
  }
  if (s.resource === "Channel Divinity" && state.channelDivinity <= 0) {
    alert("Channel Divinity 次数已用完。");
    return;
  }
  if (s.usesPerLongRest) {
    const used = Number(state.featureUses?.[s.name] || 0);
    if (used >= s.usesPerLongRest) {
      alert(`${s.name} 的长休次数已用完（${used}/${s.usesPerLongRest}）。`);
      return;
    }
  }
  // A phase can only be used once in the current turn. Do not open/use another skill from a spent phase.
  const phase = phaseForSpell(s);
  if (phaseAlreadyUsed(phase)) {
    closeModal();
    toast(`${phaseLabel(phase)} 阶段已使用行动`);
    return;
  }
  // The modal warns about concentration replacement before the user clicks Cast.
  // Once confirmed by clicking Cast, replace the current concentration without a second popup.
  if (
    s.concentration &&
    state.concentration &&
    state.concentration.name !== s.name
  ) {
    state.effects = state.effects.filter(
      (e) => e.name !== state.concentration.name,
    );
    state.concentration = null;
  }
  // Spend the selected slot, which may be higher than the spell's base level.
  const castSlot = selectedSlotFor(s);
  if (castSlot) {
    const order = ["1st", "2nd", "3rd"];
    if (order.indexOf(castSlot) < order.indexOf(s.level)) {
      alert("不能使用低于法术基础环级的法术位。");
      return;
    }
    if ((state.slots[castSlot] || 0) <= 0) {
      alert(`${castSlot} 法术位已用完。`);
      return;
    }
    state.slots[castSlot]--;
    state.spellSlotCastThisTurn = true;
  }
  // Concentration spells automatically become the active concentration after replacing any previous concentration.
  if (s.concentration) {
    state.concentration = { name: s.name, duration: s.duration };
  }
  // Remove stale combat-action entries (for example Dash) left in effects by older versions.
  // Combat actions are not ongoing spell effects and must never appear in the active-effects list.
  state.effects = state.effects.filter(
    (e) =>
      !spells.some(
        (x) =>
          x.name === e.name &&
          x.combatAction &&
          !/本回合|this turn/i.test(String(x.duration || "")),
      ),
  );
  // Automatically track spells with a non-instantaneous duration; never track combat-action features.
  // Replace an existing effect of the same name instead of creating duplicates.
  if (s.name === "Spirit Guardians") {
    state.effects = state.effects.filter((e) => e.name !== s.name);
    state.effects.push({
      name: s.name,
      rounds: 10,
      note: "法术持续时间最长 10 分钟；战斗中按 10 回合追踪。敌对生物进入区域或在其中开始回合时，检查豁免/伤害。每回合提醒处理。",
    });
  } else if (
    s.duration &&
    !/^(instantaneous|instant)$/i.test(String(s.duration).trim()) &&
    s.resource !== "Channel Divinity" &&
    ((!s.combatAction && s.level !== "Feature") ||
      /本回合|this turn/i.test(String(s.duration)))
  ) {
    state.effects = state.effects.filter((e) => e.name !== s.name);
    const rounds = automaticEffectRounds(s);
    const note = [
      s.duration,
      s.name === "Spiritual Weapon"
        ? "后续回合可用 Bonus Action 移动并攻击。"
        : "",
      castSlot && castSlot !== s.level
        ? `升环施放：使用 ${castSlot} 法术位`
        : "",
    ]
      .filter(Boolean)
      .join("；");
    state.effects.push({ name: s.name, rounds, note });
  }
  const phaseMessage = advanceAfterPhaseUse(phase);
  if (s.resource === "Channel Divinity")
    state.channelDivinity = Math.max(0, state.channelDivinity - 1);
  if (s.usesPerLongRest) {
    state.featureUses = state.featureUses || {};
    state.featureUses[s.name] = Number(state.featureUses[s.name] || 0) + 1;
  }
  save();
  closeModal();
  toast(`${s.name} 已施放`);
}
function spendSlot(level) {
  if (state.slots[level] > 0) {
    state.slots[level]--;
    save();
    toast(`已消耗 ${level} 法术位`);
  } else toast(`${level} 法术位不足`);
}
function toggleResource(k) {
  state.resources[k] = !state.resources[k];
  save();
}
let pendingConfirmationAction = null;
function showFullScreenConfirmation(title, message, confirmLabel, onConfirm) {
  const backdrop = document.getElementById("resetConfirmBackdrop");
  document.getElementById("resetConfirmTitle").textContent = title;
  document.getElementById("resetConfirmMessage").textContent = message;
  document.getElementById("confirmResetTurn").textContent = confirmLabel;
  pendingConfirmationAction = onConfirm;
  if (backdrop) backdrop.classList.add("open");
}
function requestResetTurn() {
  showFullScreenConfirmation(
    "确认重置回合？",
    "本回合的资源使用状态、法术位变化及新增战斗效果将按回合开始状态重置。",
    "确认重置",
    resetTurn,
  );
}
function requestStartTurn() {
  showFullScreenConfirmation(
    `确认开始第${state.round + 1}回合？`,
    `确认后将进入第${state.round + 1}回合，并推进所有按回合计时的战斗效果。请确认当前回合的行动已经结束。`,
    "开始回合",
    nextTurn,
  );
}
function requestShortRest() {
  showFullScreenConfirmation(
    "确认开始短休？",
    "确认后将进行短休：恢复 1 次 Channel Divinity，并结束按回合计时的战斗效果。随后可以输入通过生命骰恢复的 HP 总量。",
    "开始短休",
    shortRest,
  );
}
function requestLongRest() {
  showFullScreenConfirmation(
    "确认开始长休？",
    "确认后将进行长休：恢复 HP、全部法术位和 Channel Divinity，结束当前专注，并清除有回合计时的战斗效果。",
    "开始长休",
    longRest,
  );
}
function cancelResetTurn() {
  const backdrop = document.getElementById("resetConfirmBackdrop");
  if (backdrop) backdrop.classList.remove("open");
  pendingConfirmationAction = null;
}
function confirmResetTurn() {
  const action = pendingConfirmationAction;
  cancelResetTurn();
  if (typeof action === "function") action();
}
function resetTurn() {
  state.spellSlotCastThisTurn = false;
  state.effects = JSON.parse(JSON.stringify(state.turnStartEffects || []));
  state.slots = { ...(state.turnStartSlots || state.slots) };
  if (
    state.concentration &&
    !state.effects.some((e) => e.name === state.concentration.name)
  ) {
    state.concentration = null;
  }
  state.resources = {
    Action: false,
    "Bonus Action": false,
    Reaction: false,
    Movement: false,
  };
  completedPhases = new Set();
  state.completedPhases = [];
  activeTab = "Action";
  save();
  toast("本回合资源、法术位与新增效果已重置");
}
function shortRest() {
  state.spellSlotCastThisTurn = false;
  const heal = askNonNegativeInteger(
    "短休期间通过生命骰恢复的 HP 总量（没有就输入 0）",
    0,
    0,
  );
  if (heal === null) return;
  state.hp = Math.min(state.maxHp, state.hp + heal);
  state.channelDivinity = Math.min(3, state.channelDivinity + 1);
  state.effects = state.effects.filter((e) => e.rounds === null);
  state.concentration = null;
  state.turnStartEffects = JSON.parse(JSON.stringify(state.effects));
  state.turnStartSlots = { ...state.slots };
  state.resources = {
    Action: false,
    "Bonus Action": false,
    Reaction: false,
    Movement: false,
  };
  completedPhases = new Set();
  state.completedPhases = [];
  activeTab = "Action";
  save();
  toast(
    `短休完成：Channel Divinity ${state.channelDivinity}/3${heal ? ` · 恢复 ${heal} HP` : ""}`,
  );
}
function longRest() {
  state.hp = state.maxHp;
  state.tempHp = 0;
  state.spellSlotCastThisTurn = false;
  state.slots = { ...state.maxSlots };
  state.channelDivinity = 3;
  state.featureUses = {};
  state.effects = state.effects.filter((e) => e.rounds === null);
  state.concentration = null;
  state.turnStartEffects = JSON.parse(JSON.stringify(state.effects));
  state.turnStartSlots = { ...state.slots };
  state.resources = {
    Action: false,
    "Bonus Action": false,
    Reaction: false,
    Movement: false,
  };
  completedPhases = new Set();
  state.completedPhases = [];
  activeTab = "Action";
  state.round = 1;
  save();
  toast("长休完成：HP、法术位和 Channel Divinity 已恢复");
}
function nextTurn() {
  state.spellSlotCastThisTurn = false;
  const before = state.effects
    .filter((e) => e.rounds !== null)
    .map((e) => `${e.name}：${e.rounds} → ${Math.max(0, e.rounds - 1)} 回合`);
  state.round++;
  state.resources = {
    Action: false,
    "Bonus Action": false,
    Reaction: false,
    Movement: false,
  };
  completedPhases = new Set();
  state.completedPhases = [];
  const expired = [];
  state.effects = state.effects.filter((e) => {
    if (e.rounds === null) return true;
    if (!Number.isSafeInteger(Number(e.rounds)) || Number(e.rounds) <= 0) {
      expired.push(e.name);
      return false;
    }
    e.rounds = Math.max(0, Number(e.rounds) - 1);
    if (e.rounds === 0) {
      expired.push(e.name);
      return false;
    }
    return true;
  });
  if (state.concentration && expired.includes(state.concentration.name))
    state.concentration = null;
  state.turnStartEffects = JSON.parse(JSON.stringify(state.effects));
  state.turnStartSlots = { ...state.slots };
  save();
  toast(`已开始第${state.round}回合`);
}

function askNonNegativeInteger(label, defaultValue, minimum = 0) {
  const raw = prompt(`${label}：`, String(defaultValue ?? 0));
  if (raw === null) return null;
  const valueText = raw.trim();
  if (!/^(0|[1-9][0-9]*)$/.test(valueText)) {
    alert("输入无效：只能输入非负整数，不能包含字母、小数或负号。");
    return null;
  }
  const value = Number(valueText);
  if (!Number.isSafeInteger(value) || value < minimum) {
    alert(`输入无效：必须是不小于 ${minimum} 的有效整数。`);
    return null;
  }
  return value;
}
function setConcentration() {
  const name = prompt("当前专注的法术名称：", state.concentration?.name || "");
  if (name && name.trim()) {
    state.concentration = { name: name.trim(), duration: "手动追踪" };
    save();
  }
}
function clearConcentration() {
  if (state.concentration) {
    const name = state.concentration.name;
    state.effects = state.effects.filter((e) => e.name !== name);
  }
  state.concentration = null;
  save();
  toast("已结束专注");
}
function addEffect() {
  const name = prompt("效果名称（法术 / Buff / Debuff）：");
  if (name === null || !name.trim()) return;
  const roundsInput = prompt("剩余回合数：");
  if (roundsInput === null) return;
  const roundsText = roundsInput.trim();
  if (!/^[1-9][0-9]*$/.test(roundsText)) {
    alert("时长无效：必须输入大于 0 的整数，例如 1、2、10。未添加效果。");
    return;
  }
  const rounds = Number(roundsText);
  if (!Number.isSafeInteger(rounds) || rounds <= 0) {
    alert("时长无效：必须是大于 0 的有效整数。未添加效果。");
    return;
  }
  const note = prompt("备注（可选）：") || "";
  state.effects.push({ name: name.trim(), rounds: rounds, note });
  save();
  render();
}
function removeEffect(i) {
  state.effects.splice(i, 1);
  save();
}
function changeEffect(i, n) {
  if (
    state.effects[i].rounds === null ||
    !Number.isSafeInteger(Number(state.effects[i].rounds))
  ) {
    toast("该效果时长无效，请重新添加效果");
    return;
  }
  state.effects[i].rounds = Math.max(0, Number(state.effects[i].rounds) + n);
  if (state.effects[i].rounds === 0) {
    if (confirm(`${state.effects[i].name} 已到期，移除效果？`))
      state.effects.splice(i, 1);
  }
  save();
}
function tickEffects() {
  state.effects = state.effects.filter((e) => {
    if (e.rounds === null) return true;
    e.rounds = Math.max(0, e.rounds - 1);
    return e.rounds > 0;
  });
  save();
  toast("已减少 1 回合");
}
function editRound() {
  const value = askNonNegativeInteger("当前是第几回合", state.round, 1);
  if (value === null) return;
  state.round = value;
  save();
}
function editCurrentHP() {
  const hp = askNonNegativeInteger("当前 HP", state.hp, 0);
  if (hp === null) return;
  state.hp = Math.min(state.maxHp, hp);
  save();
}
function editMaxHP() {
  const max = askNonNegativeInteger("最大 HP", state.maxHp, 1);
  if (max === null) return;
  state.maxHp = max;
  state.hp = Math.min(state.hp, state.maxHp);
  save();
}
function editTempHP() {
  const temp = askNonNegativeInteger(
    "临时 HP（Temporary HP）",
    state.tempHp || 0,
    0,
  );
  if (temp === null) return;
  state.tempHp = temp;
  save();
}
function adjustHPByInput(direction) {
  const input = document.getElementById("hpAmount");
  const amount = Math.max(0, Math.floor(Number(input?.value) || 0));
  if (amount <= 0) {
    toast("数值必须大于 0");
    return;
  }
  if (direction < 0) {
    const fromTemp = Math.min(state.tempHp || 0, amount);
    state.tempHp = Math.max(0, (state.tempHp || 0) - fromTemp);
    const remaining = amount - fromTemp;
    state.hp = Math.max(0, state.hp - remaining);
  } else {
    state.hp = Math.min(state.maxHp, state.hp + amount);
  }
  save();
}
function editStat(key, label) {
  const val = askNonNegativeInteger(label, state[key], 0);
  if (val === null) return;
  state[key] = val;
  save();
}
function editSignedStat(key, label) {
  const current = Number.isSafeInteger(Number(state[key]))
    ? Number(state[key])
    : 0;
  const raw = prompt(`${label} 加值：`, String(current));
  if (raw === null) return;
  const textValue = raw.trim();
  if (!/^[+-]?(0|[1-9][0-9]*)$/.test(textValue)) {
    alert("输入无效：只能输入整数，可为负数；不能输入小数或字母。");
    return;
  }
  const value = Number(textValue);
  if (!Number.isSafeInteger(value) || value < -99 || value > 99) {
    alert("输入无效：必须是 -99 到 99 之间的整数。");
    return;
  }
  state[key] = value;
  save();
}

function editSlotLevel(level) {
  const max = askNonNegativeInteger(
    `${level} 法术位最大数量`,
    state.maxSlots[level],
    0,
  );
  if (max === null) return;
  const remaining = askNonNegativeInteger(
    `${level} 法术位剩余数量`,
    state.slots[level],
    0,
  );
  if (remaining === null) return;
  state.maxSlots[level] = max;
  state.slots[level] = Math.min(max, remaining);
  save();
}
function exportData() {
  const blob = new Blob([JSON.stringify(state, null, 2)], {
    type: "application/json",
  });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "cleric-companion-save.json";
  a.click();
  URL.revokeObjectURL(a.href);
}
function importData(file) {
  const r = new FileReader();
  r.onload = () => {
    try {
      state = { ...defaults, ...JSON.parse(r.result) };
      save();
      toast("数据已导入");
    } catch (e) {
      alert("无法读取该 JSON 文件");
    }
  };
  r.readAsText(file);
}
document.querySelectorAll("#tabs .tab").forEach((b) =>
  b.addEventListener("click", () => {
    activeTab = b.dataset.tab;
    render();
  }),
);
document.querySelectorAll("#filterTabs .tab").forEach((b) =>
  b.addEventListener("click", () => {
    document
      .querySelectorAll("#filterTabs .tab")
      .forEach((x) => x.classList.remove("active"));
    b.classList.add("active");
    activeFilter = b.dataset.filter;
    renderSpells();
  }),
);
document.getElementById("search").addEventListener("input", renderSpells);
function toggleAllSpells() {
  const panel = document.getElementById("allSpellsPanel");
  const header = document.getElementById("toggleAllSpells");
  const expanded = panel.hidden;
  panel.hidden = !expanded;
  header.setAttribute("aria-expanded", String(expanded));
}
document
  .getElementById("toggleAllSpells")
  .addEventListener("click", toggleAllSpells);
document.getElementById("toggleAllSpells").addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    toggleAllSpells();
  }
});

document
  .getElementById("shortRestBtn")
  .addEventListener("click", requestShortRest);
document
  .getElementById("longRestBtn")
  .addEventListener("click", requestLongRest);
document.getElementById("nextTurn").addEventListener("click", requestStartTurn);
document
  .getElementById("resetTurn")
  .addEventListener("click", requestResetTurn);
document
  .getElementById("cancelResetTurn")
  .addEventListener("click", cancelResetTurn);
document
  .getElementById("confirmResetTurn")
  .addEventListener("click", confirmResetTurn);
document
  .getElementById("resetConfirmBackdrop")
  .addEventListener("click", (e) => {
    if (e.target.id === "resetConfirmBackdrop") cancelResetTurn();
  });
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") cancelResetTurn();
});
document.getElementById("modalBackdrop").addEventListener("click", (e) => {
  if (e.target.id === "modalBackdrop") closeModal();
});
document.getElementById("hpAmount").addEventListener("input", (e) => {
  const v = e.target.value;
  if (v !== "" && !/^(0|[1-9][0-9]*)$/.test(v))
    e.target.setCustomValidity("必须是非负整数");
  else e.target.setCustomValidity("");
});
document.getElementById("hpAmount").addEventListener("change", (e) => {
  const el = e.target;
  if (
    el.value === "" ||
    !/^(0|[1-9][0-9]*)$/.test(el.value) ||
    !Number.isSafeInteger(Number(el.value)) ||
    Number(el.value) < 1
  ) {
    el.value = "1";
    el.setCustomValidity("必须是大于 0 的整数");
    el.reportValidity();
  } else el.setCustomValidity("");
});
render();
