const characters = [
  {
    img: 'https://loremflickr.com/640/480/rogue?lock=4447791795404800',
    name: 'Ferne Kuhn',
    gender: 'Demigender',
    class_type: 'rogue',
    age: 46,
    hit_points: { max: 5, current: 5 },
    race: 'human',
    alignment_desc:
      'Humans tend toward no particular alignment. The best and the worst are found among them.',
    alignment: 'neutral-good',
    speed: { walk: 30 },
    age_desc:
      'Humans reach adulthood in their late teens and live less than a century.',
    size: 'Medium',
    size_desc:
      'Humans vary widely in height and build, from barely 5 feet to well over 6 feet tall. Regardless of your position in that range, your size is Medium.',
    traits: [],
    proficiencies: [
      {
        index: 'skill-deception',
        name: 'Skill: Deception',
        url: '/api/proficiencies/skill-deception',
      },
      {
        index: 'skill-intimidation',
        name: 'Skill: Intimidation',
        url: '/api/proficiencies/skill-intimidation',
      },
      {
        index: 'skill-perception',
        name: 'Skill: Perception',
        url: '/api/proficiencies/skill-perception',
      },
      {
        index: 'skill-investigation',
        name: 'Skill: Investigation',
        url: '/api/proficiencies/skill-investigation',
      },
      {
        index: 'light-armor',
        name: 'Light Armor',
        url: '/api/proficiencies/light-armor',
      },
      {
        index: 'simple-weapons',
        name: 'Simple Weapons',
        url: '/api/proficiencies/simple-weapons',
      },
      {
        index: 'longswords',
        name: 'Longswords',
        url: '/api/proficiencies/longswords',
      },
      { index: 'rapiers', name: 'Rapiers', url: '/api/proficiencies/rapiers' },
      {
        index: 'shortswords',
        name: 'Shortswords',
        url: '/api/proficiencies/shortswords',
      },
      {
        index: 'hand-crossbows',
        name: 'Hand crossbows',
        url: '/api/proficiencies/hand-crossbows',
      },
      {
        index: 'thieves-tools',
        name: "Thieves' Tools",
        url: '/api/proficiencies/thieves-tools',
      },
      {
        index: 'saving-throw-dex',
        name: 'Saving Throw: DEX',
        url: '/api/proficiencies/saving-throw-dex',
      },
      {
        index: 'saving-throw-int',
        name: 'Saving Throw: INT',
        url: '/api/proficiencies/saving-throw-int',
      },
    ],
    languages: [
      { index: 'common', name: 'Common', url: '/api/languages/common' },
      { index: 'gnomish', name: 'Gnomish', url: '/api/languages/gnomish' },
    ],
    language_desc:
      'You can speak, read, and write Common and one extra language of your choice. Humans typically learn the languages of other peoples they deal with, including obscure dialects. They are fond of sprinkling their speech with words borrowed from other tongues: Orc curses, Elvish musical expressions, Dwarvish military phrases, and so on.',
    strength: 12,
    dexterity: 13,
    constitution: 9,
    intelligence: 19,
    wisdom: 11,
    charisma: 9,
    features: [
      {
        index: 'rogue-expertise-1',
        name: 'Expertise',
        url: '/api/features/rogue-expertise-1',
      },
      {
        index: 'sneak-attack',
        name: 'Sneak Attack',
        url: '/api/features/sneak-attack',
      },
      {
        index: 'thieves-cant',
        name: "Thieves' Cant",
        url: '/api/features/thieves-cant',
      },
    ],
    equipment: [
      {
        name: 'Rapier',
        index: 'rapier',
        quantity: 1,
        url: '/api/equipment/rapier',
      },
      {
        index: 'shortbow',
        name: 'Shortbow',
        url: '/api/equipment/shortbow',
        quantity: 1,
      },
      {
        index: 'arrow',
        name: 'Arrow',
        url: '/api/equipment/arrow',
        quantity: 20,
      },
      {
        name: "Explorer's Pack",
        index: 'explorers-pack',
        quantity: 1,
        url: '/api/equipment/explorers-pack',
      },
      {
        index: 'leather-armor',
        name: 'Leather Armor',
        url: '/api/equipment/leather-armor',
        quantity: 1,
      },
      {
        index: 'dagger',
        name: 'Dagger',
        url: '/api/equipment/dagger',
        quantity: 2,
      },
      {
        index: 'thieves-tools',
        name: "Thieves' Tools",
        url: '/api/equipment/thieves-tools',
        quantity: 1,
      },
    ],
    spells: [],
    level: 1,
    saving_throws: [
      { index: 'dex', name: 'DEX', url: '/api/ability-scores/dex' },
      { index: 'int', name: 'INT', url: '/api/ability-scores/int' },
    ],
    hit_die: 8,
    constitution_modifier: -3,
    ability_score_bonuses: 0,
    prof_bonus: 2,
    class_specific: { sneak_attack: { dice_count: 1, dice_value: 6 } },
    experience_points: 57,
  },
  {
    img: 'https://loremflickr.com/640/480/rogue?lock=8233124141989888',
    name: 'Missouri Schmeler',
    gender: 'Genderflux',
    class_type: 'rogue',
    age: 52,
    hit_points: { max: 5, current: 5 },
    race: 'human',
    alignment_desc:
      'Humans tend toward no particular alignment. The best and the worst are found among them.',
    alignment: 'chaotic-good',
    speed: { walk: 30 },
    age_desc:
      'Humans reach adulthood in their late teens and live less than a century.',
    size: 'Medium',
    size_desc:
      'Humans vary widely in height and build, from barely 5 feet to well over 6 feet tall. Regardless of your position in that range, your size is Medium.',
    traits: [],
    proficiencies: [
      {
        index: 'skill-insight',
        name: 'Skill: Insight',
        url: '/api/proficiencies/skill-insight',
      },
      {
        index: 'skill-athletics',
        name: 'Skill: Athletics',
        url: '/api/proficiencies/skill-athletics',
      },
      {
        index: 'skill-acrobatics',
        name: 'Skill: Acrobatics',
        url: '/api/proficiencies/skill-acrobatics',
      },
      {
        index: 'skill-performance',
        name: 'Skill: Performance',
        url: '/api/proficiencies/skill-performance',
      },
      {
        index: 'light-armor',
        name: 'Light Armor',
        url: '/api/proficiencies/light-armor',
      },
      {
        index: 'simple-weapons',
        name: 'Simple Weapons',
        url: '/api/proficiencies/simple-weapons',
      },
      {
        index: 'longswords',
        name: 'Longswords',
        url: '/api/proficiencies/longswords',
      },
      { index: 'rapiers', name: 'Rapiers', url: '/api/proficiencies/rapiers' },
      {
        index: 'shortswords',
        name: 'Shortswords',
        url: '/api/proficiencies/shortswords',
      },
      {
        index: 'hand-crossbows',
        name: 'Hand crossbows',
        url: '/api/proficiencies/hand-crossbows',
      },
      {
        index: 'thieves-tools',
        name: "Thieves' Tools",
        url: '/api/proficiencies/thieves-tools',
      },
      {
        index: 'saving-throw-dex',
        name: 'Saving Throw: DEX',
        url: '/api/proficiencies/saving-throw-dex',
      },
      {
        index: 'saving-throw-int',
        name: 'Saving Throw: INT',
        url: '/api/proficiencies/saving-throw-int',
      },
    ],
    languages: [
      { index: 'common', name: 'Common', url: '/api/languages/common' },
      { index: 'sylvan', name: 'Sylvan', url: '/api/languages/sylvan' },
    ],
    language_desc:
      'You can speak, read, and write Common and one extra language of your choice. Humans typically learn the languages of other peoples they deal with, including obscure dialects. They are fond of sprinkling their speech with words borrowed from other tongues: Orc curses, Elvish musical expressions, Dwarvish military phrases, and so on.',
    strength: 13,
    dexterity: 15,
    constitution: 17,
    intelligence: 17,
    wisdom: 13,
    charisma: 16,
    features: [
      {
        index: 'rogue-expertise-1',
        name: 'Expertise',
        url: '/api/features/rogue-expertise-1',
      },
      {
        index: 'sneak-attack',
        name: 'Sneak Attack',
        url: '/api/features/sneak-attack',
      },
      {
        index: 'thieves-cant',
        name: "Thieves' Cant",
        url: '/api/features/thieves-cant',
      },
    ],
    equipment: [
      {
        name: 'Shortsword',
        index: 'shortsword',
        quantity: 1,
        url: '/api/equipment/shortsword',
      },
      {
        index: 'shortbow',
        name: 'Shortbow',
        url: '/api/equipment/shortbow',
        quantity: 1,
      },
      {
        index: 'arrow',
        name: 'Arrow',
        url: '/api/equipment/arrow',
        quantity: 20,
      },
      {
        name: "Dungeoneer's Pack",
        index: 'dungeoneers-pack',
        quantity: 1,
        url: '/api/equipment/dungeoneers-pack',
      },
      {
        index: 'leather-armor',
        name: 'Leather Armor',
        url: '/api/equipment/leather-armor',
        quantity: 1,
      },
      {
        index: 'dagger',
        name: 'Dagger',
        url: '/api/equipment/dagger',
        quantity: 2,
      },
      {
        index: 'thieves-tools',
        name: "Thieves' Tools",
        url: '/api/equipment/thieves-tools',
        quantity: 1,
      },
    ],
    spells: [],
    level: 1,
    saving_throws: [
      { index: 'dex', name: 'DEX', url: '/api/ability-scores/dex' },
      { index: 'int', name: 'INT', url: '/api/ability-scores/int' },
    ],
    hit_die: 8,
    constitution_modifier: -3,
    ability_score_bonuses: 0,
    prof_bonus: 2,
    class_specific: { sneak_attack: { dice_count: 1, dice_value: 6 } },
    experience_points: 206,
  },
  {
    img: 'https://loremflickr.com/640/480/rogue?lock=4953745077043200',
    name: 'Baylee Howell',
    gender: 'male',
    class_type: 'rogue',
    age: 101,
    hit_points: { max: 13, current: 13 },
    race: 'gnome',
    alignment_desc:
      'Gnomes are most often good. Those who tend toward law are sages, engineers, researchers, scholars, investigators, or inventors. Those who tend toward chaos are minstrels, tricksters, wanderers, or fanciful jewelers. Gnomes are good-hearted, and even the tricksters among them are more playful than vicious.',
    alignment: 'lawful-neutral',
    speed: { walk: 25 },
    age_desc:
      'Gnomes mature at the same rate humans do, and most are expected to settle down into an adult life by around age 40. They can live 350 to almost 500 years.',
    size: 'Small',
    size_desc:
      'Gnomes are between 3 and 4 feet tall and average about 40 pounds. Your size is Small.',
    traits: [
      {
        index: 'darkvision',
        name: 'Darkvision',
        url: '/api/traits/darkvision',
        desc: 'You have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You cannot discern color in darkness, only shades of gray.',
      },
      {
        index: 'gnome-cunning',
        name: 'Gnome Cunning',
        url: '/api/traits/gnome-cunning',
        desc: 'You have advantage on all Intelligence, Wisdom, and Charisma saving throws against magic.',
      },
    ],
    proficiencies: [
      {
        index: 'skill-sleight-of-hand',
        name: 'Skill: Sleight of Hand',
        url: '/api/proficiencies/skill-sleight-of-hand',
      },
      {
        index: 'skill-intimidation',
        name: 'Skill: Intimidation',
        url: '/api/proficiencies/skill-intimidation',
      },
      {
        index: 'skill-athletics',
        name: 'Skill: Athletics',
        url: '/api/proficiencies/skill-athletics',
      },
      {
        index: 'skill-sleight-of-hand',
        name: 'Skill: Sleight of Hand',
        url: '/api/proficiencies/skill-sleight-of-hand',
      },
      {
        index: 'light-armor',
        name: 'Light Armor',
        url: '/api/proficiencies/light-armor',
      },
      {
        index: 'simple-weapons',
        name: 'Simple Weapons',
        url: '/api/proficiencies/simple-weapons',
      },
      {
        index: 'longswords',
        name: 'Longswords',
        url: '/api/proficiencies/longswords',
      },
      { index: 'rapiers', name: 'Rapiers', url: '/api/proficiencies/rapiers' },
      {
        index: 'shortswords',
        name: 'Shortswords',
        url: '/api/proficiencies/shortswords',
      },
      {
        index: 'hand-crossbows',
        name: 'Hand crossbows',
        url: '/api/proficiencies/hand-crossbows',
      },
      {
        index: 'thieves-tools',
        name: "Thieves' Tools",
        url: '/api/proficiencies/thieves-tools',
      },
      {
        index: 'saving-throw-dex',
        name: 'Saving Throw: DEX',
        url: '/api/proficiencies/saving-throw-dex',
      },
      {
        index: 'saving-throw-int',
        name: 'Saving Throw: INT',
        url: '/api/proficiencies/saving-throw-int',
      },
    ],
    languages: [
      { index: 'common', name: 'Common', url: '/api/languages/common' },
      { index: 'gnomish', name: 'Gnomish', url: '/api/languages/gnomish' },
    ],
    language_desc:
      'You can speak, read, and write Common and Gnomish. The Gnomish language, which uses the Dwarvish script, is renowned for its technical treatises and its catalogs of knowledge about the natural world.',
    intelligence: 15,
    features: [
      {
        index: 'rogue-expertise-1',
        name: 'Expertise',
        url: '/api/features/rogue-expertise-1',
      },
      {
        index: 'sneak-attack',
        name: 'Sneak Attack',
        url: '/api/features/sneak-attack',
      },
      {
        index: 'thieves-cant',
        name: "Thieves' Cant",
        url: '/api/features/thieves-cant',
      },
      {
        index: 'cunning-action',
        name: 'Cunning Action',
        url: '/api/features/cunning-action',
      },
    ],
    equipment: [
      {
        name: 'Rapier',
        index: 'rapier',
        quantity: 1,
        url: '/api/equipment/rapier',
      },
      {
        name: 'Shortsword',
        index: 'shortsword',
        quantity: 1,
        url: '/api/equipment/shortsword',
      },
      {
        name: "Burglar's Pack",
        index: 'burglars-pack',
        quantity: 1,
        url: '/api/equipment/burglars-pack',
      },
      {
        index: 'leather-armor',
        name: 'Leather Armor',
        url: '/api/equipment/leather-armor',
        quantity: 1,
      },
      {
        index: 'dagger',
        name: 'Dagger',
        url: '/api/equipment/dagger',
        quantity: 2,
      },
      {
        index: 'thieves-tools',
        name: "Thieves' Tools",
        url: '/api/equipment/thieves-tools',
        quantity: 1,
      },
    ],
    spells: [],
    strength: 14,
    dexterity: 8,
    constitution: 13,
    wisdom: 10,
    charisma: 5,
    level: 2,
    saving_throws: [
      { index: 'dex', name: 'DEX', url: '/api/ability-scores/dex' },
      { index: 'int', name: 'INT', url: '/api/ability-scores/int' },
    ],
    hit_die: 8,
    constitution_modifier: -3,
    ability_score_bonuses: 0,
    prof_bonus: 2,
    class_specific: { sneak_attack: { dice_count: 1, dice_value: 6 } },
    experience_points: 337,
  },
  {
    img: 'https://loremflickr.com/640/480/wizard?lock=8354091119935488',
    name: 'Marina Wehner',
    gender: 'male',
    class_type: 'wizard',
    age: 107,
    hit_points: { max: 15, current: 15 },
    race: 'halfling',
    alignment_desc:
      'Most halflings are lawful good. As a rule, they are good-hearted and kind, hate to see others in pain, and have no tolerance for oppression. They are also very orderly and traditional, leaning heavily on the support of their community and the comfort of their old ways.',
    alignment: 'lawful-good',
    speed: { walk: 25 },
    age_desc:
      'A halfling reaches adulthood at the age of 20 and generally lives into the middle of his or her second century.',
    size: 'Small',
    size_desc:
      'Halflings average about 3 feet tall and weigh about 40 pounds. Your size is Small.',
    traits: [
      {
        index: 'brave',
        name: 'Brave',
        url: '/api/traits/brave',
        desc: 'You have advantage on saving throw against being frightened.',
      },
      {
        index: 'halfling-nimbleness',
        name: 'Halfling Nimbleness',
        url: '/api/traits/halfling-nimbleness',
        desc: 'You can move through the space of any creature that is of a size larger than yours.',
      },
      {
        index: 'lucky',
        name: 'Lucky',
        url: '/api/traits/lucky',
        desc: 'When you roll a 1 on the d20 for an attack roll, ability check, or saving throw, you can reroll the die and must use the new roll.',
      },
    ],
    proficiencies: [
      {
        index: 'skill-arcana',
        name: 'Skill: Arcana',
        url: '/api/proficiencies/skill-arcana',
      },
      {
        index: 'skill-religion',
        name: 'Skill: Religion',
        url: '/api/proficiencies/skill-religion',
      },
      { index: 'daggers', name: 'Daggers', url: '/api/proficiencies/daggers' },
      { index: 'darts', name: 'Darts', url: '/api/proficiencies/darts' },
      { index: 'slings', name: 'Slings', url: '/api/proficiencies/slings' },
      {
        index: 'quarterstaffs',
        name: 'Quarterstaffs',
        url: '/api/proficiencies/quarterstaffs',
      },
      {
        index: 'crossbows-light',
        name: 'Crossbows, light',
        url: '/api/proficiencies/crossbows-light',
      },
      {
        index: 'saving-throw-int',
        name: 'Saving Throw: INT',
        url: '/api/proficiencies/saving-throw-int',
      },
      {
        index: 'saving-throw-wis',
        name: 'Saving Throw: WIS',
        url: '/api/proficiencies/saving-throw-wis',
      },
    ],
    languages: [
      { index: 'common', name: 'Common', url: '/api/languages/common' },
      { index: 'halfling', name: 'Halfling', url: '/api/languages/halfling' },
    ],
    language_desc:
      "You can speak, read, and write Common and Halfling. The Halfling language isn't secret, but halflings are loath to share it with others. They write very little, so they don't have a rich body of literature. Their oral tradition, however, is very strong. Almost all halflings speak Common to converse with the people in whose lands they dwell or through which they are traveling.",
    dexterity: 18,
    features: [
      {
        index: 'spellcasting-wizard',
        name: 'Spellcasting: Wizard',
        url: '/api/features/spellcasting-wizard',
      },
      {
        index: 'arcane-recovery',
        name: 'Arcane Recovery',
        url: '/api/features/arcane-recovery',
      },
      {
        index: 'arcane-tradition',
        name: 'Arcane Tradition',
        url: '/api/features/arcane-tradition',
      },
    ],
    equipment: [
      {
        name: 'Quarterstaff',
        index: 'quarterstaff',
        quantity: 1,
        url: '/api/equipment/quarterstaff',
      },
      {
        name: 'Component pouch',
        index: 'component-pouch',
        quantity: 1,
        url: '/api/equipment/component-pouch',
      },
      {
        name: "Explorer's Pack",
        index: 'explorers-pack',
        quantity: 1,
        url: '/api/equipment/explorers-pack',
      },
      {
        index: 'spellbook',
        name: 'Spellbook',
        url: '/api/equipment/spellbook',
        quantity: 1,
      },
    ],
    spells: [
      {
        index: 'poison-spray',
        name: 'Poison Spray',
        level: 0,
        url: '/api/spells/poison-spray',
      },
      {
        index: 'shocking-grasp',
        name: 'Shocking Grasp',
        level: 0,
        url: '/api/spells/shocking-grasp',
      },
      {
        index: 'dancing-lights',
        name: 'Dancing Lights',
        level: 0,
        url: '/api/spells/dancing-lights',
      },
      {
        index: 'protection-from-evil-and-good',
        name: 'Protection from Evil and Good',
        level: 1,
        url: '/api/spells/protection-from-evil-and-good',
      },
      {
        index: 'color-spray',
        name: 'Color Spray',
        level: 1,
        url: '/api/spells/color-spray',
      },
      {
        index: 'fog-cloud',
        name: 'Fog Cloud',
        level: 1,
        url: '/api/spells/fog-cloud',
      },
      {
        index: 'expeditious-retreat',
        name: 'Expeditious Retreat',
        level: 1,
        url: '/api/spells/expeditious-retreat',
      },
      {
        index: 'arcanists-magic-aura',
        name: "Arcanist's Magic Aura",
        level: 2,
        url: '/api/spells/arcanists-magic-aura',
      },
      {
        index: 'darkness',
        name: 'Darkness',
        level: 2,
        url: '/api/spells/darkness',
      },
    ],
    strength: 13,
    constitution: 15,
    intelligence: 6,
    wisdom: 12,
    charisma: 15,
    level: 3,
    saving_throws: [
      { index: 'int', name: 'INT', url: '/api/ability-scores/int' },
      { index: 'wis', name: 'WIS', url: '/api/ability-scores/wis' },
    ],
    hit_die: 6,
    constitution_modifier: -3,
    cantrips_known: 3,
    spell_slots_level_1: 4,
    spell_slots_level_2: 2,
    spell_slots_level_3: 0,
    spell_slots_level_4: 0,
    spell_slots_level_5: 0,
    spell_slots_level_6: 0,
    spell_slots_level_7: 0,
    spell_slots_level_8: 0,
    spell_slots_level_9: 0,
    ability_score_bonuses: 0,
    prof_bonus: 2,
    class_specific: { arcane_recovery_levels: 2 },
    spellcasting: {
      level: 1,
      spellcasting_ability: {
        index: 'int',
        name: 'INT',
        url: '/api/ability-scores/int',
      },
      info: [
        {
          name: 'Cantrips',
          desc: [
            'At 1st level, you know three cantrips of your choice from the wizard spell list. You learn additional wizard cantrips of your choice at higher levels, as shown in the Cantrips Known column of the Wizard table.',
          ],
        },
        {
          name: 'Spellbook',
          desc: [
            'At 1st level, you have a spellbook containing six 1st- level wizard spells of your choice. Your spellbook is the repository of the wizard spells you know, except your cantrips, which are fixed in your mind.',
          ],
        },
        {
          name: 'Preparing and Casting Spells',
          desc: [
            "The Wizard table shows how many spell slots you have to cast your spells of 1st level and higher. To cast one of these spells, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish a long rest.",
            'You prepare the list of wizard spells that are available for you to cast. To do so, choose a number of wizard spells from your spellbook equal to your Intelligence modifier + your wizard level (minimum of one spell). The spells must be of a level for which you have spell slots.',
            "For example, if you're a 3rd-level wizard, you have four 1st-level and two 2nd-level spell slots. With an Intelligence of 16, your list of prepared spells can include six spells of 1st or 2nd level, in any combination, chosen from your spellbook. If you prepare the 1st-level spell magic missile, you can cast it using a 1st-level or a 2nd-level slot. Casting the spell doesn't remove it from your list of prepared spells.",
            'You can change your list of prepared spells when you finish a long rest. Preparing a new list of wizard spells requires time spent studying your spellbook and memorizing the incantations and gestures you must make to cast the spell: at least 1 minute per spell level for each spell on your list.',
          ],
        },
        {
          name: 'Spellcasting Ability',
          desc: [
            'Intelligence is your spellcasting ability for your wizard spells, since you learn your spells through dedicated study and memorization. You use your Intelligence whenever a spell refers to your spellcasting ability. In addition, you use your Intelligence modifier when setting the saving throw DC for a wizard spell you cast and when making an attack roll with one.',
            'Spell save DC = 8 + your proficiency bonus + your Intelligence modifier.',
            'Spell attack modifier = your proficiency bonus + your Intelligence modifier.',
          ],
        },
        {
          name: 'Ritual Casting',
          desc: [
            "You can cast a wizard spell as a ritual if that spell has the ritual tag and you have the spell in your spellbook. You don't need to have the spell prepared.",
          ],
        },
        {
          name: 'Spellcasting Focus',
          desc: [
            'You can use an arcane focus as a spellcasting focus for your wizard spells.',
          ],
        },
      ],
    },
    experience_points: 882,
  },
  {
    img: 'https://loremflickr.com/640/480/ranger?lock=2788320759250944',
    name: 'Dorothea Smith',
    gender: 'M2F',
    class_type: 'ranger',
    age: 16,
    hit_points: { max: 33, current: 33 },
    race: 'half-orc',
    alignment_desc:
      'Half-orcs inherit a tendency toward chaos from their orc parents and are not strongly inclined toward good. Half-orcs raised among orcs and willing to live out their lives among them are usually evil.',
    alignment: 'chaotic-evil',
    speed: { walk: 30 },
    age_desc:
      'Half-orcs mature a little faster than humans, reaching adulthood around age 14. They age noticeably faster and rarely live longer than 75 years.',
    size: 'Medium',
    size_desc:
      'Half-orcs are somewhat larger and bulkier than humans, and they range from 5 to well over 6 feet tall. Your size is Medium.',
    traits: [
      {
        index: 'darkvision',
        name: 'Darkvision',
        url: '/api/traits/darkvision',
        desc: 'You have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You cannot discern color in darkness, only shades of gray.',
      },
      {
        index: 'savage-attacks',
        name: 'Savage Attacks',
        url: '/api/traits/savage-attacks',
        desc: "When you score a critical hit with a melee weapon attack, you can roll one of the weapon's damage dice one additional time and add it to the extra damage of the critical hit.",
      },
      {
        index: 'relentless-endurance',
        name: 'Relentless Endurance',
        url: '/api/traits/relentless-endurance',
        desc: 'When you are reduced to 0 hit points but not killed outright, you can drop to 1 hit point instead. you cannot use this feature again until you finish a long rest.',
      },
      {
        index: 'menacing',
        name: 'Menacing',
        url: '/api/traits/menacing',
        desc: 'You gain proficiency in the Intimidation skill.',
      },
    ],
    proficiencies: [
      {
        index: 'skill-intimidation',
        name: 'Skill: Intimidation',
        url: '/api/proficiencies/skill-intimidation',
        desc: [
          'When you attempt to influence someone through overt threats, hostile actions, and physical violence, the GM might ask you to make a Charisma (Intimidation) check. Examples include trying to pry information out of a prisoner, convincing street thugs to back down from a confrontation, or using the edge of a broken bottle to convince a sneering vizier to reconsider a decision.',
        ],
        ability_score: {
          index: 'cha',
          name: 'CHA',
          url: '/api/ability-scores/cha',
        },
      },
      {
        index: 'skill-insight',
        name: 'Skill: Insight',
        url: '/api/proficiencies/skill-insight',
      },
      {
        index: 'skill-survival',
        name: 'Skill: Survival',
        url: '/api/proficiencies/skill-survival',
      },
      {
        index: 'skill-stealth',
        name: 'Skill: Stealth',
        url: '/api/proficiencies/skill-stealth',
      },
      {
        index: 'light-armor',
        name: 'Light Armor',
        url: '/api/proficiencies/light-armor',
      },
      {
        index: 'medium-armor',
        name: 'Medium Armor',
        url: '/api/proficiencies/medium-armor',
      },
      { index: 'shields', name: 'Shields', url: '/api/proficiencies/shields' },
      {
        index: 'simple-weapons',
        name: 'Simple Weapons',
        url: '/api/proficiencies/simple-weapons',
      },
      {
        index: 'martial-weapons',
        name: 'Martial Weapons',
        url: '/api/proficiencies/martial-weapons',
      },
      {
        index: 'saving-throw-dex',
        name: 'Saving Throw: DEX',
        url: '/api/proficiencies/saving-throw-dex',
      },
      {
        index: 'saving-throw-str',
        name: 'Saving Throw: STR',
        url: '/api/proficiencies/saving-throw-str',
      },
    ],
    languages: [
      { index: 'common', name: 'Common', url: '/api/languages/common' },
      { index: 'orc', name: 'Orc', url: '/api/languages/orc' },
    ],
    language_desc:
      'You can speak, read, and write Common and Orc. Orc is a harsh, grating language with hard consonants. It has no script of its own but is written in the Dwarvish script.',
    strength: 17,
    constitution: 16,
    charisma: 13,
    features: [
      {
        index: 'favored-enemy-1-type',
        name: 'Favored Enemy (1 type)',
        url: '/api/features/favored-enemy-1-type',
      },
      {
        index: 'natural-explorer-1-terrain-type',
        name: 'Natural Explorer (1 terrain type)',
        url: '/api/features/natural-explorer-1-terrain-type',
      },
      {
        index: 'ranger-fighting-style',
        name: 'Fighting Style',
        url: '/api/features/ranger-fighting-style',
      },
      {
        index: 'spellcasting-ranger',
        name: 'Spellcasting: Ranger',
        url: '/api/features/spellcasting-ranger',
      },
      {
        index: 'ranger-archetype',
        name: 'Ranger Archetype',
        url: '/api/features/ranger-archetype',
      },
      {
        index: 'primeval-awareness',
        name: 'Primeval Awareness',
        url: '/api/features/primeval-awareness',
      },
    ],
    equipment: [
      {
        name: 'Leather Armor',
        index: 'leather-armor',
        quantity: 1,
        url: '/api/equipment/leather-armor',
      },
      {
        name: 'Shortsword',
        index: 'shortsword',
        quantity: 2,
        url: '/api/equipment/shortsword',
      },
      {
        name: "Explorer's Pack",
        index: 'explorers-pack',
        quantity: 1,
        url: '/api/equipment/explorers-pack',
      },
      {
        index: 'longbow',
        name: 'Longbow',
        url: '/api/equipment/longbow',
        quantity: 1,
      },
      {
        index: 'arrow',
        name: 'Arrow',
        url: '/api/equipment/arrow',
        quantity: 20,
      },
    ],
    spells: [
      {
        index: 'hunters-mark',
        name: "Hunter's Mark",
        level: 1,
        url: '/api/spells/hunters-mark',
      },
      {
        index: 'goodberry',
        name: 'Goodberry',
        level: 1,
        url: '/api/spells/goodberry',
      },
      {
        index: 'fog-cloud',
        name: 'Fog Cloud',
        level: 1,
        url: '/api/spells/fog-cloud',
      },
    ],
    dexterity: 13,
    intelligence: 15,
    wisdom: 10,
    level: 3,
    saving_throws: [
      { index: 'str', name: 'STR', url: '/api/ability-scores/str' },
      { index: 'dex', name: 'DEX', url: '/api/ability-scores/dex' },
    ],
    hit_die: 10,
    constitution_modifier: 3,
    spells_known: 3,
    spell_slots_level_1: 3,
    spell_slots_level_2: 0,
    spell_slots_level_3: 0,
    spell_slots_level_4: 0,
    spell_slots_level_5: 0,
    ability_score_bonuses: 0,
    prof_bonus: 2,
    class_specific: { favored_enemies: 1, favored_terrain: 1 },
    spellcasting: {
      level: 2,
      spellcasting_ability: {
        index: 'wis',
        name: 'WIS',
        url: '/api/ability-scores/wis',
      },
      info: [
        {
          name: 'Spell Slots',
          desc: [
            "The Ranger table shows how many spell slots you have to cast your spells of 1st level and higher. To cast one of these spells, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish a long rest.",
            'For example, if you know the 1st-level spell animal friendship and have a 1st-level and a 2nd-level spell slot available, you can cast animal friendship using either slot.',
          ],
        },
        {
          name: 'Spells Known of 1st Level and Higher',
          desc: [
            'You know two 1st-level spells of your choice from the ranger spell list.',
            'The Spells Known column of the Ranger table shows when you learn more ranger spells of your choice. Each of these spells must be of a level for which you have spell slots. For instance, when you reach 5th level in this class, you can learn one new spell of 1st or 2nd level.',
            'Additionally, when you gain a level in this class, you can choose one of the ranger spells you know and replace it with another spell from the ranger spell list, which also must be of a level for which you have spell slots.',
          ],
        },
        {
          name: 'Spellcasting Ability',
          desc: [
            'Wisdom is your spellcasting ability for your ranger spells, since your magic draws on your attunement to nature. You use your Wisdom whenever a spell refers to your spellcasting ability. In addition, you use your Wisdom modifier when setting the saving throw DC for a ranger spell you cast and when making an attack roll with one.',
            'Spell save DC = 8 + your proficiency bonus + your Wisdom modifier.',
            'Spell attack modifier = your proficiency bonus + your Wisdom modifier.',
          ],
        },
      ],
    },
    experience_points: 885,
  },
  {
    img: 'https://loremflickr.com/640/480/sorcerer?lock=7022263975018496',
    name: 'Christ Orn',
    gender: 'Man',
    class_type: 'sorcerer',
    age: 96,
    hit_points: { max: 15, current: 15 },
    race: 'half-elf',
    alignment_desc:
      "Half-elves share the chaotic bent of their elven heritage. They value both personal freedom and creative expression, demonstrating neither love of leaders nor desire for followers. They chafe at rules, resent others' demands, and sometimes prove unreliable, or at least unpredictable.",
    alignment: 'chaotic-evil',
    speed: { walk: 30 },
    age_desc:
      'Half-elves mature at the same rate humans do and reach adulthood around the age of 20. They live much longer than humans, however, often exceeding 180 years.',
    size: 'Medium',
    size_desc:
      'Half-elves are about the same size as humans, ranging from 5 to 6 feet tall. Your size is Medium.',
    traits: [
      {
        index: 'darkvision',
        name: 'Darkvision',
        url: '/api/traits/darkvision',
        desc: 'You have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You cannot discern color in darkness, only shades of gray.',
      },
      {
        index: 'fey-ancestry',
        name: 'Fey Ancestry',
        url: '/api/traits/fey-ancestry',
        desc: 'You have advantage on saving throws against being charmed, and magic cannot put you to sleep.',
      },
      {
        index: 'skill-versatility',
        name: 'Skill Versatility',
        url: '/api/traits/skill-versatility',
        desc: 'You gain proficiency in two skills of your choice.',
      },
    ],
    proficiencies: [
      {
        index: 'skill-athletics',
        name: 'Skill: Athletics',
        url: '/api/proficiencies/skill-athletics',
      },
      {
        index: 'skill-investigation',
        name: 'Skill: Investigation',
        url: '/api/proficiencies/skill-investigation',
      },
      {
        index: 'skill-religion',
        name: 'Skill: Religion',
        url: '/api/proficiencies/skill-religion',
      },
      {
        index: 'skill-deception',
        name: 'Skill: Deception',
        url: '/api/proficiencies/skill-deception',
      },
      { index: 'daggers', name: 'Daggers', url: '/api/proficiencies/daggers' },
      { index: 'darts', name: 'Darts', url: '/api/proficiencies/darts' },
      { index: 'slings', name: 'Slings', url: '/api/proficiencies/slings' },
      {
        index: 'quarterstaffs',
        name: 'Quarterstaffs',
        url: '/api/proficiencies/quarterstaffs',
      },
      {
        index: 'crossbows-light',
        name: 'Crossbows, light',
        url: '/api/proficiencies/crossbows-light',
      },
      {
        index: 'saving-throw-con',
        name: 'Saving Throw: CON',
        url: '/api/proficiencies/saving-throw-con',
      },
      {
        index: 'saving-throw-cha',
        name: 'Saving Throw: CHA',
        url: '/api/proficiencies/saving-throw-cha',
      },
    ],
    languages: [
      { index: 'common', name: 'Common', url: '/api/languages/common' },
      { index: 'elvish', name: 'Elvish', url: '/api/languages/elvish' },
      {
        index: 'primordial',
        name: 'Primordial',
        url: '/api/languages/primordial',
      },
    ],
    language_desc:
      'You can speak, read, and write Common, Elvish, and one extra language of your choice.',
    ability_bonuses: [
      {
        ability_score: {
          index: 'wis',
          name: 'WIS',
          url: '/api/ability-scores/wis',
        },
        bonus: 1,
      },
    ],
    charisma: 10,
    wisdom: 14,
    features: [
      {
        index: 'spellcasting-sorcerer',
        name: 'Spellcasting: Sorcerer',
        url: '/api/features/spellcasting-sorcerer',
      },
      {
        index: 'sorcerous-origin',
        name: 'Sorcerous Origin',
        url: '/api/features/sorcerous-origin',
      },
      {
        index: 'font-of-magic',
        name: 'Font of Magic',
        url: '/api/features/font-of-magic',
      },
      {
        index: 'flexible-casting-creating-spell-slots',
        name: 'Flexible Casting: Creating Spell Slots',
        url: '/api/features/flexible-casting-creating-spell-slots',
      },
      {
        index: 'flexible-casting-converting-spell-slot',
        name: 'Flexible Casting: Converting Spell Slot',
        url: '/api/features/flexible-casting-converting-spell-slot',
      },
      {
        index: 'metamagic-1',
        name: 'Metamagic',
        url: '/api/features/metamagic-1',
      },
    ],
    equipment: [
      {
        index: 'crossbow-light',
        name: 'Crossbow, light',
        url: '/api/equipment/crossbow-light',
        quantity: 1,
      },
      {
        index: 'crossbow-bolt',
        name: 'Crossbow bolt',
        url: '/api/equipment/crossbow-bolt',
        quantity: 20,
      },
      {
        name: 'Component pouch',
        index: 'component-pouch',
        quantity: 1,
        url: '/api/equipment/component-pouch',
      },
      {
        name: "Dungeoneer's Pack",
        index: 'dungeoneers-pack',
        quantity: 1,
        url: '/api/equipment/dungeoneers-pack',
      },
      {
        index: 'dagger',
        name: 'Dagger',
        url: '/api/equipment/dagger',
        quantity: 2,
      },
    ],
    spells: [
      {
        index: 'minor-illusion',
        name: 'Minor Illusion',
        level: 0,
        url: '/api/spells/minor-illusion',
      },
      {
        index: 'fire-bolt',
        name: 'Fire Bolt',
        level: 0,
        url: '/api/spells/fire-bolt',
      },
      { index: 'light', name: 'Light', level: 0, url: '/api/spells/light' },
      {
        index: 'mending',
        name: 'Mending',
        level: 0,
        url: '/api/spells/mending',
      },
      {
        index: 'expeditious-retreat',
        name: 'Expeditious Retreat',
        level: 1,
        url: '/api/spells/expeditious-retreat',
      },
      {
        index: 'burning-hands',
        name: 'Burning Hands',
        level: 1,
        url: '/api/spells/burning-hands',
      },
      {
        index: 'silent-image',
        name: 'Silent Image',
        level: 1,
        url: '/api/spells/silent-image',
      },
      {
        index: 'magic-missile',
        name: 'Magic Missile',
        level: 1,
        url: '/api/spells/magic-missile',
      },
      {
        index: 'invisibility',
        name: 'Invisibility',
        level: 2,
        url: '/api/spells/invisibility',
      },
      {
        index: 'mirror-image',
        name: 'Mirror Image',
        level: 2,
        url: '/api/spells/mirror-image',
      },
    ],
    strength: 9,
    dexterity: 16,
    constitution: 15,
    intelligence: 14,
    level: 3,
    saving_throws: [
      { index: 'con', name: 'CON', url: '/api/ability-scores/con' },
      { index: 'cha', name: 'CHA', url: '/api/ability-scores/cha' },
    ],
    hit_die: 6,
    constitution_modifier: -3,
    cantrips_known: 4,
    spells_known: 4,
    spell_slots_level_1: 4,
    spell_slots_level_2: 2,
    spell_slots_level_3: 0,
    spell_slots_level_4: 0,
    spell_slots_level_5: 0,
    spell_slots_level_6: 0,
    spell_slots_level_7: 0,
    spell_slots_level_8: 0,
    spell_slots_level_9: 0,
    ability_score_bonuses: 0,
    prof_bonus: 2,
    class_specific: {
      sorcery_points: 3,
      metamagic_known: 2,
      creating_spell_slots: [
        { spell_slot_level: 1, sorcery_point_cost: 2 },
        { spell_slot_level: 2, sorcery_point_cost: 3 },
        { spell_slot_level: 3, sorcery_point_cost: 5 },
        { spell_slot_level: 4, sorcery_point_cost: 6 },
        { spell_slot_level: 5, sorcery_point_cost: 7 },
      ],
    },
    spellcasting: {
      level: 1,
      spellcasting_ability: {
        index: 'cha',
        name: 'CHA',
        url: '/api/ability-scores/cha',
      },
      info: [
        {
          name: 'Cantrips',
          desc: [
            'At 1st level, you know four cantrips of your choice from the sorcerer spell list. You learn additional sorcerer cantrips of your choice at higher levels, as shown in the Cantrips Known column of the Sorcerer table.',
          ],
        },
        {
          name: 'Spell Slots',
          desc: [
            "The Sorcerer table shows how many spell slots you have to cast your spells of 1st level and higher. To cast one of these sorcerer spells, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish a long rest.",
            'For example, if you know the 1st-level spell burning hands and have a 1st-level and a 2nd-level spell slot available, you can cast burning hands using either slot.',
          ],
        },
        {
          name: 'Spells Known of 1st Level and Higher',
          desc: [
            'You know two 1st-level spells of your choice from the sorcerer spell list.',
            'The Spells Known column of the Sorcerer table shows when you learn more sorcerer spells of your choice. Each of these spells must be of a level for which you have spell slots. For instance, when you reach 3rd level in this class, you can learn one new spell of 1st or 2nd level. ',
            'Additionally, when you gain a level in this class, you can choose one of the sorcerer spells you know and replace it with another spell from the sorcerer spell list, which also must be of a level for which you have spell slots.',
          ],
        },
        {
          name: 'Spellcasting Ability',
          desc: [
            'Charisma is your spellcasting ability for your sorcerer spells, since the power of your magic relies on your ability to project your will into the world. You use your Charisma whenever a spell refers to your spellcasting ability. In addition, you use your Charisma modifier when setting the saving throw DC for a sorcerer spell you cast and when making an attack roll with one.',
            'Spell save DC = 8 + your proficiency bonus + your Charisma modifier.',
            'Spell attack modifier = your proficiency bonus + your Charisma modifier.',
          ],
        },
        {
          name: 'Spellcasting Focus',
          desc: [
            'You can use an arcane focus as a spellcasting focus for your sorcerer spells.',
          ],
        },
      ],
    },
    experience_points: 802,
  },
  {
    img: 'https://loremflickr.com/640/480/bard?lock=5482154662297600',
    name: 'London Bailey',
    gender: 'Intersex woman',
    class_type: 'bard',
    age: 498,
    hit_points: { max: 15, current: 15 },
    race: 'elf',
    alignment_desc:
      "Elves love freedom, variety, and self-expression, so they lean strongly toward the gentler aspects of chaos. They value and protect others' freedom as well as their own, and they are more often good than not.",
    alignment: 'chaotic-neutral',
    speed: { walk: 30 },
    age_desc:
      'Although elves reach physical maturity at about the same age as humans, the elven understanding of adulthood goes beyond physical growth to encompass worldly experience. An elf typically claims adulthood and an adult name around the age of 100 and can live to be 750 years old.',
    size: 'Medium',
    size_desc:
      'Elves range from under 5 to over 6 feet tall and have slender builds. Your size is Medium.',
    traits: [
      {
        index: 'darkvision',
        name: 'Darkvision',
        url: '/api/traits/darkvision',
        desc: 'You have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You cannot discern color in darkness, only shades of gray.',
      },
      {
        index: 'fey-ancestry',
        name: 'Fey Ancestry',
        url: '/api/traits/fey-ancestry',
        desc: 'You have advantage on saving throws against being charmed, and magic cannot put you to sleep.',
      },
      {
        index: 'trance',
        name: 'Trance',
        url: '/api/traits/trance',
        desc: 'Elves do not need to sleep. Instead, they meditate deeply, remaining semiconscious, for 4 hours a day. (The Common word for such meditation is "trance.") While meditating, you can dream after a fashion; such dreams are actually mental exercises that have become reflexive through years of practice. After resting this way, you gain the same benefit that a human does from 8 hours of sleep.',
      },
      {
        index: 'keen-senses',
        name: 'Keen Senses',
        url: '/api/traits/keen-senses',
        desc: 'You have proficiency in the Perception skill.',
      },
    ],
    proficiencies: [
      {
        index: 'skill-perception',
        name: 'Skill: Perception',
        url: '/api/proficiencies/skill-perception',
        desc: [
          'Your Wisdom (Perception) check lets you spot, hear, or otherwise detect the presence of something. It measures your general awareness of your surroundings and the keenness of your senses. For example, you might try to hear a conversation through a closed door, eavesdrop under an open window, or hear monsters moving stealthily in the forest. Or you might try to spot things that are obscured or easy to miss, whether they are orcs lying in ambush on a road, thugs hiding in the shadows of an alley, or candlelight under a closed secret door.',
        ],
        ability_score: {
          index: 'wis',
          name: 'WIS',
          url: '/api/ability-scores/wis',
        },
      },
      {
        index: 'skill-investigation',
        name: 'Skill: Investigation',
        url: '/api/proficiencies/skill-investigation',
      },
      {
        index: 'skill-arcana',
        name: 'Skill: Arcana',
        url: '/api/proficiencies/skill-arcana',
      },
      {
        index: 'skill-investigation',
        name: 'Skill: Investigation',
        url: '/api/proficiencies/skill-investigation',
      },
      {
        index: 'light-armor',
        name: 'Light Armor',
        url: '/api/proficiencies/light-armor',
      },
      {
        index: 'simple-weapons',
        name: 'Simple Weapons',
        url: '/api/proficiencies/simple-weapons',
      },
      {
        index: 'longswords',
        name: 'Longswords',
        url: '/api/proficiencies/longswords',
      },
      { index: 'rapiers', name: 'Rapiers', url: '/api/proficiencies/rapiers' },
      {
        index: 'shortswords',
        name: 'Shortswords',
        url: '/api/proficiencies/shortswords',
      },
      {
        index: 'hand-crossbows',
        name: 'Hand crossbows',
        url: '/api/proficiencies/hand-crossbows',
      },
      {
        index: 'saving-throw-dex',
        name: 'Saving Throw: DEX',
        url: '/api/proficiencies/saving-throw-dex',
      },
      {
        index: 'saving-throw-cha',
        name: 'Saving Throw: CHA',
        url: '/api/proficiencies/saving-throw-cha',
      },
    ],
    languages: [
      { index: 'common', name: 'Common', url: '/api/languages/common' },
      { index: 'elvish', name: 'Elvish', url: '/api/languages/elvish' },
    ],
    language_desc:
      'You can speak, read, and write Common and Elvish. Elvish is fluid, with subtle intonations and intricate grammar. Elven literature is rich and varied, and their songs and poems are famous among other races. Many bards learn their language so they can add Elvish ballads to their repertoires.',
    dexterity: 14,
    wisdom: 16,
    features: [
      {
        index: 'spellcasting-bard',
        name: 'Spellcasting: Bard',
        url: '/api/features/spellcasting-bard',
      },
      {
        index: 'bardic-inspiration-d6',
        name: 'Bardic Inspiration (d6)',
        url: '/api/features/bardic-inspiration-d6',
      },
      {
        index: 'jack-of-all-trades',
        name: 'Jack of All Trades',
        url: '/api/features/jack-of-all-trades',
      },
      {
        index: 'song-of-rest-d6',
        name: 'Song of Rest (d6)',
        url: '/api/features/song-of-rest-d6',
      },
    ],
    equipment: [
      {
        name: 'Longsword',
        index: 'longsword',
        quantity: 1,
        url: '/api/equipment/longsword',
      },
      {
        name: "Diplomat's Pack",
        index: 'diplomats-pack',
        quantity: 1,
        url: '/api/equipment/diplomats-pack',
      },
      { name: 'Lute', index: 'lute', quantity: 1, url: '/api/equipment/lute' },
      {
        index: 'leather-armor',
        name: 'Leather Armor',
        url: '/api/equipment/leather-armor',
        quantity: 1,
      },
      {
        index: 'dagger',
        name: 'Dagger',
        url: '/api/equipment/dagger',
        quantity: 1,
      },
    ],
    spells: [
      {
        index: 'mending',
        name: 'Mending',
        level: 0,
        url: '/api/spells/mending',
      },
      {
        index: 'minor-illusion',
        name: 'Minor Illusion',
        level: 0,
        url: '/api/spells/minor-illusion',
      },
      {
        index: 'charm-person',
        name: 'Charm Person',
        level: 1,
        url: '/api/spells/charm-person',
      },
      {
        index: 'identify',
        name: 'Identify',
        level: 1,
        url: '/api/spells/identify',
      },
      {
        index: 'unseen-servant',
        name: 'Unseen Servant',
        level: 1,
        url: '/api/spells/unseen-servant',
      },
    ],
    strength: 5,
    constitution: 8,
    intelligence: 17,
    charisma: 9,
    level: 2,
    saving_throws: [
      { index: 'dex', name: 'DEX', url: '/api/ability-scores/dex' },
      { index: 'cha', name: 'CHA', url: '/api/ability-scores/cha' },
    ],
    hit_die: 8,
    constitution_modifier: -1,
    cantrips_known: 2,
    spells_known: 5,
    spell_slots_level_1: 3,
    spell_slots_level_2: 0,
    spell_slots_level_3: 0,
    spell_slots_level_4: 0,
    spell_slots_level_5: 0,
    spell_slots_level_6: 0,
    spell_slots_level_7: 0,
    spell_slots_level_8: 0,
    spell_slots_level_9: 0,
    ability_score_bonuses: 0,
    prof_bonus: 2,
    class_specific: {
      bardic_inspiration_die: 6,
      song_of_rest_die: 6,
      magical_secrets_max_5: 0,
      magical_secrets_max_7: 0,
      magical_secrets_max_9: 0,
    },
    spellcasting: {
      level: 1,
      spellcasting_ability: {
        index: 'cha',
        name: 'CHA',
        url: '/api/ability-scores/cha',
      },
      info: [
        {
          name: 'Cantrips',
          desc: [
            'You know two cantrips of your choice from the bard spell list. You learn additional bard cantrips of your choice at higher levels, as shown in the Cantrips Known column of the Bard table.',
          ],
        },
        {
          name: 'Spell Slots',
          desc: [
            "The Bard table shows how many spell slots you have to cast your spells of 1st level and higher. To cast one of these spells, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish a long rest.",
            'For example, if you know the 1st-level spell cure wounds and have a 1st-level and a 2nd-level spell slot available, you can cast cure wounds using either slot.',
          ],
        },
        {
          name: 'Spells Known of 1st Level and Higher',
          desc: [
            'You know four 1st-level spells of your choice from the bard spell list.',
            'The Spells Known column of the Bard table shows when you learn more bard spells of your choice.',
            'Each of these spells must be of a level for which you have spell slots, as shown on the table. For instance, when you reach 3rd level in this class, you can learn one new spell of 1st or 2nd level.',
            'Additionally, when you gain a level in this class, you can choose one of the bard spells you know and replace it with another spell from the bard spell list, which also must be of a level for which you have spell slots.',
          ],
        },
        {
          name: 'Spellcasting Ability',
          desc: [
            'Charisma is your spellcasting ability for your bard spells. Your magic comes from the heart and soul you pour into the performance of your music or oration. You use your Charisma whenever a spell refers to your spellcasting ability. In addition, you use your Charisma modifier when setting the saving throw DC for a bard spell you cast and when making an attack roll with one.',
            'Spell save DC = 8 + your proficiency bonus + your Charisma modifier.',
            'Spell attack modifier = your proficiency bonus + your Charisma modifier.',
          ],
        },
        {
          name: 'Ritual Casting',
          desc: [
            'You can cast any bard spell you know as a ritual if that spell has the ritual tag.',
          ],
        },
        {
          name: 'Spellcasting Focus',
          desc: [
            'You can use a musical instrument (see Equipment) as a spellcasting focus for your bard spells.',
          ],
        },
      ],
    },
    experience_points: 381,
  },
  {
    img: 'https://loremflickr.com/640/480/bard?lock=1325166695022592',
    name: 'Emie Berge',
    gender: 'Female to male transsexual man',
    class_type: 'bard',
    age: 57,
    hit_points: { max: 5, current: 5 },
    race: 'dragonborn',
    alignment_desc:
      'Dragonborn tend to extremes, making a conscious choice for one side or the other in the cosmic war between good and evil. Most dragonborn are good, but those who side with evil can be terrible villains.',
    alignment: 'lawful-good',
    speed: { walk: 30 },
    age_desc:
      'Young dragonborn grow quickly. They walk hours after hatching, attain the size and development of a 10-year-old human child by the age of 3, and reach adulthood by 15. They live to be around 80.',
    size: 'Medium',
    size_desc:
      'Dragonborn are taller and heavier than humans, standing well over 6 feet tall and averaging almost 250 pounds. Your size is Medium.',
    traits: [
      {
        index: 'draconic-ancestry',
        name: 'Draconic Ancestry',
        url: '/api/traits/draconic-ancestry',
        desc: 'You have draconic ancestry. Choose one type of dragon from the Draconic Ancestry table. Your breath weapon and damage resistance are determined by the dragon type, as shown in the table.',
      },
      {
        index: 'breath-weapon',
        name: 'Breath Weapon',
        url: '/api/traits/breath-weapon',
        desc: 'You can use your action to exhale destructive energy. Your draconic ancestry determines the size, shape, and damage type of the exhalation.',
      },
      {
        index: 'damage-resistance',
        name: 'Damage Resistance',
        url: '/api/traits/damage-resistance',
        desc: 'You have resistance to the damage type associated with your draconic ancestry.',
      },
    ],
    proficiencies: [
      {
        index: 'skill-athletics',
        name: 'Skill: Athletics',
        url: '/api/proficiencies/skill-athletics',
      },
      {
        index: 'skill-survival',
        name: 'Skill: Survival',
        url: '/api/proficiencies/skill-survival',
      },
      {
        index: 'skill-intimidation',
        name: 'Skill: Intimidation',
        url: '/api/proficiencies/skill-intimidation',
      },
      {
        index: 'light-armor',
        name: 'Light Armor',
        url: '/api/proficiencies/light-armor',
      },
      {
        index: 'simple-weapons',
        name: 'Simple Weapons',
        url: '/api/proficiencies/simple-weapons',
      },
      {
        index: 'longswords',
        name: 'Longswords',
        url: '/api/proficiencies/longswords',
      },
      { index: 'rapiers', name: 'Rapiers', url: '/api/proficiencies/rapiers' },
      {
        index: 'shortswords',
        name: 'Shortswords',
        url: '/api/proficiencies/shortswords',
      },
      {
        index: 'hand-crossbows',
        name: 'Hand crossbows',
        url: '/api/proficiencies/hand-crossbows',
      },
      {
        index: 'saving-throw-dex',
        name: 'Saving Throw: DEX',
        url: '/api/proficiencies/saving-throw-dex',
      },
      {
        index: 'saving-throw-cha',
        name: 'Saving Throw: CHA',
        url: '/api/proficiencies/saving-throw-cha',
      },
    ],
    languages: [
      { index: 'common', name: 'Common', url: '/api/languages/common' },
      { index: 'draconic', name: 'Draconic', url: '/api/languages/draconic' },
    ],
    language_desc:
      'You can speak, read, and write Common and Draconic. Draconic is thought to be one of the oldest languages and is often used in the study of magic. The language sounds harsh to most other creatures and includes numerous hard consonants and sibilants.',
    strength: 11,
    charisma: 16,
    features: [
      {
        index: 'spellcasting-bard',
        name: 'Spellcasting: Bard',
        url: '/api/features/spellcasting-bard',
      },
      {
        index: 'bardic-inspiration-d6',
        name: 'Bardic Inspiration (d6)',
        url: '/api/features/bardic-inspiration-d6',
      },
    ],
    equipment: [
      {
        name: "Entertainer's Pack",
        index: 'entertainers-pack',
        quantity: 1,
        url: '/api/equipment/entertainers-pack',
      },
      { name: 'Lute', index: 'lute', quantity: 1, url: '/api/equipment/lute' },
      {
        index: 'leather-armor',
        name: 'Leather Armor',
        url: '/api/equipment/leather-armor',
        quantity: 1,
      },
      {
        index: 'dagger',
        name: 'Dagger',
        url: '/api/equipment/dagger',
        quantity: 1,
      },
      { index: 'javelin', name: 'Javelin', url: '/api/equipment/javelin' },
    ],
    spells: [
      {
        index: 'message',
        name: 'Message',
        level: 0,
        url: '/api/spells/message',
      },
      {
        index: 'message',
        name: 'Message',
        level: 0,
        url: '/api/spells/message',
      },
      {
        index: 'comprehend-languages',
        name: 'Comprehend Languages',
        level: 1,
        url: '/api/spells/comprehend-languages',
      },
      { index: 'bane', name: 'Bane', level: 1, url: '/api/spells/bane' },
    ],
    dexterity: 4,
    constitution: 15,
    intelligence: 7,
    wisdom: 12,
    level: 1,
    saving_throws: [
      { index: 'dex', name: 'DEX', url: '/api/ability-scores/dex' },
      { index: 'cha', name: 'CHA', url: '/api/ability-scores/cha' },
    ],
    hit_die: 8,
    constitution_modifier: -3,
    cantrips_known: 2,
    spells_known: 4,
    spell_slots_level_1: 2,
    spell_slots_level_2: 0,
    spell_slots_level_3: 0,
    spell_slots_level_4: 0,
    spell_slots_level_5: 0,
    spell_slots_level_6: 0,
    spell_slots_level_7: 0,
    spell_slots_level_8: 0,
    spell_slots_level_9: 0,
    ability_score_bonuses: 0,
    prof_bonus: 2,
    class_specific: {
      bardic_inspiration_die: 6,
      song_of_rest_die: 0,
      magical_secrets_max_5: 0,
      magical_secrets_max_7: 0,
      magical_secrets_max_9: 0,
    },
    spellcasting: {
      level: 1,
      spellcasting_ability: {
        index: 'cha',
        name: 'CHA',
        url: '/api/ability-scores/cha',
      },
      info: [
        {
          name: 'Cantrips',
          desc: [
            'You know two cantrips of your choice from the bard spell list. You learn additional bard cantrips of your choice at higher levels, as shown in the Cantrips Known column of the Bard table.',
          ],
        },
        {
          name: 'Spell Slots',
          desc: [
            "The Bard table shows how many spell slots you have to cast your spells of 1st level and higher. To cast one of these spells, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish a long rest.",
            'For example, if you know the 1st-level spell cure wounds and have a 1st-level and a 2nd-level spell slot available, you can cast cure wounds using either slot.',
          ],
        },
        {
          name: 'Spells Known of 1st Level and Higher',
          desc: [
            'You know four 1st-level spells of your choice from the bard spell list.',
            'The Spells Known column of the Bard table shows when you learn more bard spells of your choice.',
            'Each of these spells must be of a level for which you have spell slots, as shown on the table. For instance, when you reach 3rd level in this class, you can learn one new spell of 1st or 2nd level.',
            'Additionally, when you gain a level in this class, you can choose one of the bard spells you know and replace it with another spell from the bard spell list, which also must be of a level for which you have spell slots.',
          ],
        },
        {
          name: 'Spellcasting Ability',
          desc: [
            'Charisma is your spellcasting ability for your bard spells. Your magic comes from the heart and soul you pour into the performance of your music or oration. You use your Charisma whenever a spell refers to your spellcasting ability. In addition, you use your Charisma modifier when setting the saving throw DC for a bard spell you cast and when making an attack roll with one.',
            'Spell save DC = 8 + your proficiency bonus + your Charisma modifier.',
            'Spell attack modifier = your proficiency bonus + your Charisma modifier.',
          ],
        },
        {
          name: 'Ritual Casting',
          desc: [
            'You can cast any bard spell you know as a ritual if that spell has the ritual tag.',
          ],
        },
        {
          name: 'Spellcasting Focus',
          desc: [
            'You can use a musical instrument (see Equipment) as a spellcasting focus for your bard spells.',
          ],
        },
      ],
    },
    experience_points: 27,
  },
  {
    img: 'https://loremflickr.com/640/480/fighter?lock=7959325995696128',
    name: 'Tanner Gerlach',
    gender: 'male',
    class_type: 'fighter',
    age: 389,
    hit_points: { max: 17, current: 17 },
    race: 'elf',
    alignment_desc:
      "Elves love freedom, variety, and self-expression, so they lean strongly toward the gentler aspects of chaos. They value and protect others' freedom as well as their own, and they are more often good than not.",
    alignment: 'chaotic-good',
    speed: { walk: 30 },
    age_desc:
      'Although elves reach physical maturity at about the same age as humans, the elven understanding of adulthood goes beyond physical growth to encompass worldly experience. An elf typically claims adulthood and an adult name around the age of 100 and can live to be 750 years old.',
    size: 'Medium',
    size_desc:
      'Elves range from under 5 to over 6 feet tall and have slender builds. Your size is Medium.',
    traits: [
      {
        index: 'darkvision',
        name: 'Darkvision',
        url: '/api/traits/darkvision',
        desc: 'You have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You cannot discern color in darkness, only shades of gray.',
      },
      {
        index: 'fey-ancestry',
        name: 'Fey Ancestry',
        url: '/api/traits/fey-ancestry',
        desc: 'You have advantage on saving throws against being charmed, and magic cannot put you to sleep.',
      },
      {
        index: 'trance',
        name: 'Trance',
        url: '/api/traits/trance',
        desc: 'Elves do not need to sleep. Instead, they meditate deeply, remaining semiconscious, for 4 hours a day. (The Common word for such meditation is "trance.") While meditating, you can dream after a fashion; such dreams are actually mental exercises that have become reflexive through years of practice. After resting this way, you gain the same benefit that a human does from 8 hours of sleep.',
      },
      {
        index: 'keen-senses',
        name: 'Keen Senses',
        url: '/api/traits/keen-senses',
        desc: 'You have proficiency in the Perception skill.',
      },
    ],
    proficiencies: [
      {
        index: 'skill-perception',
        name: 'Skill: Perception',
        url: '/api/proficiencies/skill-perception',
        desc: [
          'Your Wisdom (Perception) check lets you spot, hear, or otherwise detect the presence of something. It measures your general awareness of your surroundings and the keenness of your senses. For example, you might try to hear a conversation through a closed door, eavesdrop under an open window, or hear monsters moving stealthily in the forest. Or you might try to spot things that are obscured or easy to miss, whether they are orcs lying in ambush on a road, thugs hiding in the shadows of an alley, or candlelight under a closed secret door.',
        ],
        ability_score: {
          index: 'wis',
          name: 'WIS',
          url: '/api/ability-scores/wis',
        },
      },
      {
        index: 'skill-insight',
        name: 'Skill: Insight',
        url: '/api/proficiencies/skill-insight',
      },
      {
        index: 'skill-history',
        name: 'Skill: History',
        url: '/api/proficiencies/skill-history',
      },
      {
        index: 'all-armor',
        name: 'All armor',
        url: '/api/proficiencies/all-armor',
      },
      { index: 'shields', name: 'Shields', url: '/api/proficiencies/shields' },
      {
        index: 'simple-weapons',
        name: 'Simple Weapons',
        url: '/api/proficiencies/simple-weapons',
      },
      {
        index: 'martial-weapons',
        name: 'Martial Weapons',
        url: '/api/proficiencies/martial-weapons',
      },
      {
        index: 'saving-throw-str',
        name: 'Saving Throw: STR',
        url: '/api/proficiencies/saving-throw-str',
      },
      {
        index: 'saving-throw-con',
        name: 'Saving Throw: CON',
        url: '/api/proficiencies/saving-throw-con',
      },
    ],
    languages: [
      { index: 'common', name: 'Common', url: '/api/languages/common' },
      { index: 'elvish', name: 'Elvish', url: '/api/languages/elvish' },
    ],
    language_desc:
      'You can speak, read, and write Common and Elvish. Elvish is fluid, with subtle intonations and intricate grammar. Elven literature is rich and varied, and their songs and poems are famous among other races. Many bards learn their language so they can add Elvish ballads to their repertoires.',
    dexterity: 10,
    wisdom: 15,
    features: [
      {
        index: 'fighter-fighting-style',
        name: 'Fighting Style',
        url: '/api/features/fighter-fighting-style',
      },
      {
        index: 'second-wind',
        name: 'Second Wind',
        url: '/api/features/second-wind',
      },
      {
        index: 'action-surge-1-use',
        name: 'Action Surge (1 use)',
        url: '/api/features/action-surge-1-use',
      },
    ],
    equipment: [
      {
        name: 'Chain Mail',
        index: 'chain-mail',
        quantity: 1,
        url: '/api/equipment/chain-mail',
      },
      {
        index: 'crossbow-light',
        name: 'Crossbow, light',
        url: '/api/equipment/crossbow-light',
        quantity: 1,
      },
      {
        index: 'crossbow-bolt',
        name: 'Crossbow bolt',
        url: '/api/equipment/crossbow-bolt',
        quantity: 20,
      },
      {
        name: "Dungeoneer's Pack",
        index: 'dungeoneers-pack',
        quantity: 1,
        url: '/api/equipment/dungeoneers-pack',
      },
      { index: 'halberd', name: 'Halberd', url: '/api/equipment/halberd' },
    ],
    spells: [],
    strength: 15,
    constitution: 11,
    intelligence: 10,
    charisma: 17,
    level: 2,
    saving_throws: [
      { index: 'str', name: 'STR', url: '/api/ability-scores/str' },
      { index: 'con', name: 'CON', url: '/api/ability-scores/con' },
    ],
    hit_die: 10,
    constitution_modifier: -3,
    ability_score_bonuses: 0,
    prof_bonus: 2,
    class_specific: { action_surges: 1, indomitable_uses: 0, extra_attacks: 0 },
    experience_points: 312,
  },
  {
    img: 'https://loremflickr.com/640/480/druid?lock=1939276266733568',
    name: 'Sidney Rempel',
    gender: 'male',
    class_type: 'druid',
    age: 37,
    hit_points: { max: 22, current: 22 },
    race: 'tiefling',
    alignment_desc:
      'Tieflings might not have an innate tendency toward evil, but many of them end up there. Evil or not, an independent nature inclines many tieflings toward a chaotic alignment.',
    alignment: 'chaotic-evil',
    speed: { walk: 30 },
    age_desc:
      'Tieflings mature at the same rate as humans but live a few years longer.',
    size: 'Medium',
    size_desc:
      'Tieflings are about the same size and build as humans. Your size is Medium.',
    traits: [
      {
        index: 'darkvision',
        name: 'Darkvision',
        url: '/api/traits/darkvision',
        desc: 'You have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You cannot discern color in darkness, only shades of gray.',
      },
      {
        index: 'hellish-resistance',
        name: 'Hellish Resistance',
        url: '/api/traits/hellish-resistance',
        desc: 'You have resistance to fire damage.',
      },
      {
        index: 'infernal-legacy',
        name: 'Infernal Legacy',
        url: '/api/traits/infernal-legacy',
        desc: 'You know the thaumaturgy cantrip. When you reach 3rd level, you can cast the hellish rebuke spell as a 2nd-level spell once with this trait and regain the ability to do so when you finish a long rest. When you reach 5th level, you can cast the darkness spell once with this trait and regain the ability to do so when you finish a long rest. Charisma is your spellcasting ability for these spells.',
      },
    ],
    proficiencies: [
      {
        index: 'skill-nature',
        name: 'Skill: Nature',
        url: '/api/proficiencies/skill-nature',
      },
      {
        index: 'skill-perception',
        name: 'Skill: Perception',
        url: '/api/proficiencies/skill-perception',
      },
      {
        index: 'light-armor',
        name: 'Light Armor',
        url: '/api/proficiencies/light-armor',
      },
      {
        index: 'medium-armor',
        name: 'Medium Armor',
        url: '/api/proficiencies/medium-armor',
      },
      { index: 'shields', name: 'Shields', url: '/api/proficiencies/shields' },
      { index: 'clubs', name: 'Clubs', url: '/api/proficiencies/clubs' },
      { index: 'daggers', name: 'Daggers', url: '/api/proficiencies/daggers' },
      {
        index: 'javelins',
        name: 'Javelins',
        url: '/api/proficiencies/javelins',
      },
      { index: 'maces', name: 'Maces', url: '/api/proficiencies/maces' },
      {
        index: 'quarterstaffs',
        name: 'Quarterstaffs',
        url: '/api/proficiencies/quarterstaffs',
      },
      { index: 'sickles', name: 'Sickles', url: '/api/proficiencies/sickles' },
      { index: 'spears', name: 'Spears', url: '/api/proficiencies/spears' },
      { index: 'darts', name: 'Darts', url: '/api/proficiencies/darts' },
      { index: 'slings', name: 'Slings', url: '/api/proficiencies/slings' },
      {
        index: 'scimitars',
        name: 'Scimitars',
        url: '/api/proficiencies/scimitars',
      },
      {
        index: 'herbalism-kit',
        name: 'Herbalism Kit',
        url: '/api/proficiencies/herbalism-kit',
      },
      {
        index: 'saving-throw-int',
        name: 'Saving Throw: INT',
        url: '/api/proficiencies/saving-throw-int',
      },
      {
        index: 'saving-throw-wis',
        name: 'Saving Throw: WIS',
        url: '/api/proficiencies/saving-throw-wis',
      },
    ],
    languages: [
      { index: 'common', name: 'Common', url: '/api/languages/common' },
      { index: 'infernal', name: 'Infernal', url: '/api/languages/infernal' },
    ],
    language_desc: 'You can speak, read, and write Common and Infernal.',
    intelligence: 18,
    charisma: 18,
    features: [
      {
        index: 'spellcasting-druid',
        name: 'Spellcasting: Druid',
        url: '/api/features/spellcasting-druid',
      },
      { index: 'druidic', name: 'Druidic', url: '/api/features/druidic' },
      {
        index: 'wild-shape-cr-1-4-or-below-no-flying-or-swim-speed',
        name: 'Wild Shape (CR 1/4 or below, no flying or swim speed)',
        url: '/api/features/wild-shape-cr-1-4-or-below-no-flying-or-swim-speed',
      },
      {
        index: 'druid-circle',
        name: 'Druid Circle',
        url: '/api/features/druid-circle',
      },
    ],
    equipment: [
      {
        name: 'Shield',
        index: 'shield',
        quantity: 1,
        url: '/api/equipment/shield',
      },
      {
        name: 'Scimitar',
        index: 'scimitar',
        quantity: 1,
        url: '/api/equipment/scimitar',
      },
      {
        index: 'leather-armor',
        name: 'Leather Armor',
        url: '/api/equipment/leather-armor',
        quantity: 1,
      },
      {
        index: 'explorers-pack',
        name: "Explorer's Pack",
        url: '/api/equipment/explorers-pack',
        quantity: 1,
      },
      { index: 'totem', name: 'Totem', url: '/api/equipment/totem' },
    ],
    spells: [
      {
        index: 'mending',
        name: 'Mending',
        level: 0,
        url: '/api/spells/mending',
      },
      {
        index: 'mending',
        name: 'Mending',
        level: 0,
        url: '/api/spells/mending',
      },
      {
        index: 'detect-poison-and-disease',
        name: 'Detect Poison and Disease',
        level: 1,
        url: '/api/spells/detect-poison-and-disease',
      },
      {
        index: 'speak-with-animals',
        name: 'Speak with Animals',
        level: 1,
        url: '/api/spells/speak-with-animals',
      },
      {
        index: 'animal-friendship',
        name: 'Animal Friendship',
        level: 1,
        url: '/api/spells/animal-friendship',
      },
      {
        index: 'create-or-destroy-water',
        name: 'Create or Destroy Water',
        level: 1,
        url: '/api/spells/create-or-destroy-water',
      },
      {
        index: 'protection-from-poison',
        name: 'Protection from Poison',
        level: 2,
        url: '/api/spells/protection-from-poison',
      },
      {
        index: 'find-traps',
        name: 'Find Traps',
        level: 2,
        url: '/api/spells/find-traps',
      },
    ],
    strength: 15,
    dexterity: 14,
    constitution: 6,
    wisdom: 7,
    level: 3,
    saving_throws: [
      { index: 'int', name: 'INT', url: '/api/ability-scores/int' },
      { index: 'wis', name: 'WIS', url: '/api/ability-scores/wis' },
    ],
    hit_die: 8,
    constitution_modifier: -2,
    cantrips_known: 2,
    spell_slots_level_1: 4,
    spell_slots_level_2: 2,
    spell_slots_level_3: 0,
    spell_slots_level_4: 0,
    spell_slots_level_5: 0,
    spell_slots_level_6: 0,
    spell_slots_level_7: 0,
    spell_slots_level_8: 0,
    spell_slots_level_9: 0,
    ability_score_bonuses: 0,
    prof_bonus: 2,
    class_specific: {
      wild_shape_max_cr: 0.25,
      wild_shape_swim: false,
      wild_shape_fly: false,
    },
    spellcasting: {
      level: 1,
      spellcasting_ability: {
        index: 'wis',
        name: 'WIS',
        url: '/api/ability-scores/wis',
      },
      info: [
        {
          name: 'Cantrips',
          desc: [
            'At 1st level, you know two cantrips of your choice from the druid spell list. You learn additional druid cantrips of your choice at higher levels, as shown in the Cantrips Known column of the Druid table.',
          ],
        },
        {
          name: 'Preparing and Casting Spells',
          desc: [
            "The Druid table shows how many spell slots you have to cast your spells of 1st level and higher. To cast one of these druid spells, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish a long rest.",
            'You prepare the list of druid spells that are available for you to cast, choosing from the druid spell list. When you do so, choose a number of druid spells equal to your Wisdom modifier + your druid level (minimum of one spell). The spells must be of a level for which you have spell slots.',
            "For example, if you are a 3rd-level druid, you have four 1st-level and two 2nd-level spell slots. With a Wisdom of 16, your list of prepared spells can include six spells of 1st or 2nd level, in any combination. If you prepare the 1st-level spell cure wounds, you can cast it using a 1st-level or 2nd-level slot. Casting the spell doesn't remove it from your list of prepared spells.",
            'You can also change your list of prepared spells when you finish a long rest. Preparing a new list of druid spells requires time spent in prayer and meditation: at least 1 minute per spell level for each spell on your list.',
          ],
        },
        {
          name: 'Spellcasting Ability',
          desc: [
            'Wisdom is your spellcasting ability for your druid spells, since your magic draws upon your devotion and attunement to nature. You use your Wisdom whenever a spell refers to your spellcasting ability. In addition, you use your Wisdom modifier when setting the saving throw DC for a druid spell you cast and when making an attack roll with one.',
            'Spell save DC = 8 + your proficiency bonus + your Wisdom modifier.',
            'Spell attack modifier = your proficiency bonus + your Wisdom modifier.',
          ],
        },
        {
          name: 'Ritual Casting',
          desc: [
            'You can cast a druid spell as a ritual if that spell has the ritual tag and you have the spell prepared.',
          ],
        },
        {
          name: 'Spellcasting Focus',
          desc: [
            'You can use a druidic focus (see chapter 5, "Equipment") as a spellcasting focus for your druid spells.',
          ],
        },
      ],
    },
    experience_points: 797,
  },
  {
    img: 'https://loremflickr.com/640/480/paladin?lock=7609078547218432',
    name: 'Blaise Orn',
    gender: 'Transexual female',
    class_type: 'paladin',
    age: 21,
    hit_points: { max: 17, current: 17 },
    race: 'human',
    alignment_desc:
      'Humans tend toward no particular alignment. The best and the worst are found among them.',
    alignment: 'neutral-evil',
    speed: { walk: 30 },
    age_desc:
      'Humans reach adulthood in their late teens and live less than a century.',
    size: 'Medium',
    size_desc:
      'Humans vary widely in height and build, from barely 5 feet to well over 6 feet tall. Regardless of your position in that range, your size is Medium.',
    traits: [],
    proficiencies: [
      {
        index: 'skill-intimidation',
        name: 'Skill: Intimidation',
        url: '/api/proficiencies/skill-intimidation',
      },
      {
        index: 'skill-insight',
        name: 'Skill: Insight',
        url: '/api/proficiencies/skill-insight',
      },
      {
        index: 'all-armor',
        name: 'All armor',
        url: '/api/proficiencies/all-armor',
      },
      { index: 'shields', name: 'Shields', url: '/api/proficiencies/shields' },
      {
        index: 'simple-weapons',
        name: 'Simple Weapons',
        url: '/api/proficiencies/simple-weapons',
      },
      {
        index: 'martial-weapons',
        name: 'Martial Weapons',
        url: '/api/proficiencies/martial-weapons',
      },
      {
        index: 'saving-throw-wis',
        name: 'Saving Throw: WIS',
        url: '/api/proficiencies/saving-throw-wis',
      },
      {
        index: 'saving-throw-cha',
        name: 'Saving Throw: CHA',
        url: '/api/proficiencies/saving-throw-cha',
      },
    ],
    languages: [
      { index: 'common', name: 'Common', url: '/api/languages/common' },
      { index: 'infernal', name: 'Infernal', url: '/api/languages/infernal' },
    ],
    language_desc:
      'You can speak, read, and write Common and one extra language of your choice. Humans typically learn the languages of other peoples they deal with, including obscure dialects. They are fond of sprinkling their speech with words borrowed from other tongues: Orc curses, Elvish musical expressions, Dwarvish military phrases, and so on.',
    strength: 11,
    dexterity: 14,
    constitution: 11,
    intelligence: 5,
    wisdom: 16,
    charisma: 10,
    features: [
      {
        index: 'divine-sense',
        name: 'Divine Sense',
        url: '/api/features/divine-sense',
      },
      {
        index: 'lay-on-hands',
        name: 'Lay on Hands',
        url: '/api/features/lay-on-hands',
      },
      {
        index: 'paladin-fighting-style',
        name: 'Fighting Style',
        url: '/api/features/paladin-fighting-style',
      },
      {
        index: 'spellcasting-paladin',
        name: 'Spellcasting: Paladin',
        url: '/api/features/spellcasting-paladin',
      },
      {
        index: 'divine-smite',
        name: 'Divine Smite',
        url: '/api/features/divine-smite',
      },
    ],
    equipment: [
      {
        index: 'shield',
        name: 'Shield',
        url: '/api/equipment/shield',
        quantity: 1,
      },
      {
        name: 'Javelin',
        index: 'javelin',
        quantity: 5,
        url: '/api/equipment/javelin',
      },
      {
        name: "Explorer's Pack",
        index: 'explorers-pack',
        quantity: 1,
        url: '/api/equipment/explorers-pack',
      },
      {
        index: 'chain-mail',
        name: 'Chain Mail',
        url: '/api/equipment/chain-mail',
        quantity: 1,
      },
      { index: 'halberd', name: 'Halberd', url: '/api/equipment/halberd' },
      {
        index: 'reliquary',
        name: 'Reliquary',
        url: '/api/equipment/reliquary',
      },
    ],
    spells: [
      {
        index: 'command',
        name: 'Command',
        level: 1,
        url: '/api/spells/command',
      },
      {
        index: 'divine-favor',
        name: 'Divine Favor',
        level: 1,
        url: '/api/spells/divine-favor',
      },
    ],
    level: 2,
    saving_throws: [
      { index: 'wis', name: 'WIS', url: '/api/ability-scores/wis' },
      { index: 'cha', name: 'CHA', url: '/api/ability-scores/cha' },
    ],
    hit_die: 10,
    constitution_modifier: -3,
    spell_slots_level_1: 2,
    spell_slots_level_2: 0,
    spell_slots_level_3: 0,
    spell_slots_level_4: 0,
    spell_slots_level_5: 0,
    ability_score_bonuses: 0,
    prof_bonus: 2,
    class_specific: { aura_range: 0 },
    spellcasting: {
      level: 2,
      spellcasting_ability: {
        index: 'cha',
        name: 'CHA',
        url: '/api/ability-scores/cha',
      },
      info: [
        {
          name: 'Preparing and Casting Spells',
          desc: [
            "The Paladin table shows how many spell slots you have to cast your spells. To cast one of your paladin spells of 1st level or higher, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish a long rest.",
            'You prepare the list of paladin spells that are available for you to cast, choosing from the paladin spell list. When you do so, choose a number of paladin spells equal to your Charisma modifier + half your paladin level, rounded down (minimum of one spell). The spells must be of a level for which you have spell slots.',
            "For example, if you are a 5th-level paladin, you have four 1st-level and two 2nd-level spell slots. With a Charisma of 14, your list of prepared spells can include four spells of 1st or 2nd level, in any combination. If you prepare the 1st-level spell cure wounds, you can cast it using a 1st-level or a 2nd- level slot. Casting the spell doesn't remove it from your list of prepared spells.",
            'You can change your list of prepared spells when you finish a long rest. Preparing a new list of paladin spells requires time spent in prayer and meditation: at least 1 minute per spell level for each spell on your list.',
          ],
        },
        {
          name: 'Spellcasting Ability',
          desc: [
            'Charisma is your spellcasting ability for your paladin spells, since their power derives from the strength of your convictions. You use your Charisma whenever a spell refers to your spellcasting ability. In addition, you use your Charisma modifier when setting the saving throw DC for a paladin spell you cast and when making an attack roll with one.',
            'Spell save DC = 8 + your proficiency bonus + your Charisma modifier.',
            'Spell attack modifier = your proficiency bonus + your Charisma modifier.',
          ],
        },
        {
          name: 'Spellcasting Focus',
          desc: [
            'You can use a holy symbol as a spellcasting focus for your paladin spells.',
          ],
        },
      ],
    },
    experience_points: 315,
  },
  {
    img: 'https://loremflickr.com/640/480/druid?lock=8908187348500480',
    name: 'Felicity Leuschke',
    gender: 'Omnigender',
    class_type: 'druid',
    age: 30,
    hit_points: { max: 5, current: 5 },
    race: 'human',
    alignment_desc:
      'Humans tend toward no particular alignment. The best and the worst are found among them.',
    alignment: 'neutral-good',
    speed: { walk: 30 },
    age_desc:
      'Humans reach adulthood in their late teens and live less than a century.',
    size: 'Medium',
    size_desc:
      'Humans vary widely in height and build, from barely 5 feet to well over 6 feet tall. Regardless of your position in that range, your size is Medium.',
    traits: [],
    proficiencies: [
      {
        index: 'skill-arcana',
        name: 'Skill: Arcana',
        url: '/api/proficiencies/skill-arcana',
      },
      {
        index: 'skill-religion',
        name: 'Skill: Religion',
        url: '/api/proficiencies/skill-religion',
      },
      {
        index: 'light-armor',
        name: 'Light Armor',
        url: '/api/proficiencies/light-armor',
      },
      {
        index: 'medium-armor',
        name: 'Medium Armor',
        url: '/api/proficiencies/medium-armor',
      },
      { index: 'shields', name: 'Shields', url: '/api/proficiencies/shields' },
      { index: 'clubs', name: 'Clubs', url: '/api/proficiencies/clubs' },
      { index: 'daggers', name: 'Daggers', url: '/api/proficiencies/daggers' },
      {
        index: 'javelins',
        name: 'Javelins',
        url: '/api/proficiencies/javelins',
      },
      { index: 'maces', name: 'Maces', url: '/api/proficiencies/maces' },
      {
        index: 'quarterstaffs',
        name: 'Quarterstaffs',
        url: '/api/proficiencies/quarterstaffs',
      },
      { index: 'sickles', name: 'Sickles', url: '/api/proficiencies/sickles' },
      { index: 'spears', name: 'Spears', url: '/api/proficiencies/spears' },
      { index: 'darts', name: 'Darts', url: '/api/proficiencies/darts' },
      { index: 'slings', name: 'Slings', url: '/api/proficiencies/slings' },
      {
        index: 'scimitars',
        name: 'Scimitars',
        url: '/api/proficiencies/scimitars',
      },
      {
        index: 'herbalism-kit',
        name: 'Herbalism Kit',
        url: '/api/proficiencies/herbalism-kit',
      },
      {
        index: 'saving-throw-int',
        name: 'Saving Throw: INT',
        url: '/api/proficiencies/saving-throw-int',
      },
      {
        index: 'saving-throw-wis',
        name: 'Saving Throw: WIS',
        url: '/api/proficiencies/saving-throw-wis',
      },
    ],
    languages: [
      { index: 'common', name: 'Common', url: '/api/languages/common' },
      { index: 'elvish', name: 'Elvish', url: '/api/languages/elvish' },
    ],
    language_desc:
      'You can speak, read, and write Common and one extra language of your choice. Humans typically learn the languages of other peoples they deal with, including obscure dialects. They are fond of sprinkling their speech with words borrowed from other tongues: Orc curses, Elvish musical expressions, Dwarvish military phrases, and so on.',
    strength: 16,
    dexterity: 9,
    constitution: 11,
    intelligence: 12,
    wisdom: 14,
    charisma: 4,
    features: [
      {
        index: 'spellcasting-druid',
        name: 'Spellcasting: Druid',
        url: '/api/features/spellcasting-druid',
      },
      { index: 'druidic', name: 'Druidic', url: '/api/features/druidic' },
    ],
    equipment: [
      {
        name: 'Scimitar',
        index: 'scimitar',
        quantity: 1,
        url: '/api/equipment/scimitar',
      },
      {
        index: 'leather-armor',
        name: 'Leather Armor',
        url: '/api/equipment/leather-armor',
        quantity: 1,
      },
      {
        index: 'explorers-pack',
        name: "Explorer's Pack",
        url: '/api/equipment/explorers-pack',
        quantity: 1,
      },
      {
        index: 'greatclub',
        name: 'Greatclub',
        url: '/api/equipment/greatclub',
      },
      {
        index: 'wooden-staff',
        name: 'Wooden staff',
        url: '/api/equipment/wooden-staff',
      },
    ],
    spells: [
      {
        index: 'druidcraft',
        name: 'Druidcraft',
        level: 0,
        url: '/api/spells/druidcraft',
      },
      {
        index: 'resistance',
        name: 'Resistance',
        level: 0,
        url: '/api/spells/resistance',
      },
      {
        index: 'detect-poison-and-disease',
        name: 'Detect Poison and Disease',
        level: 1,
        url: '/api/spells/detect-poison-and-disease',
      },
      {
        index: 'entangle',
        name: 'Entangle',
        level: 1,
        url: '/api/spells/entangle',
      },
    ],
    level: 1,
    saving_throws: [
      { index: 'int', name: 'INT', url: '/api/ability-scores/int' },
      { index: 'wis', name: 'WIS', url: '/api/ability-scores/wis' },
    ],
    hit_die: 8,
    constitution_modifier: -3,
    cantrips_known: 2,
    spell_slots_level_1: 2,
    spell_slots_level_2: 0,
    spell_slots_level_3: 0,
    spell_slots_level_4: 0,
    spell_slots_level_5: 0,
    spell_slots_level_6: 0,
    spell_slots_level_7: 0,
    spell_slots_level_8: 0,
    spell_slots_level_9: 0,
    ability_score_bonuses: 0,
    prof_bonus: 2,
    class_specific: {
      wild_shape_max_cr: 0,
      wild_shape_swim: false,
      wild_shape_fly: false,
    },
    spellcasting: {
      level: 1,
      spellcasting_ability: {
        index: 'wis',
        name: 'WIS',
        url: '/api/ability-scores/wis',
      },
      info: [
        {
          name: 'Cantrips',
          desc: [
            'At 1st level, you know two cantrips of your choice from the druid spell list. You learn additional druid cantrips of your choice at higher levels, as shown in the Cantrips Known column of the Druid table.',
          ],
        },
        {
          name: 'Preparing and Casting Spells',
          desc: [
            "The Druid table shows how many spell slots you have to cast your spells of 1st level and higher. To cast one of these druid spells, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish a long rest.",
            'You prepare the list of druid spells that are available for you to cast, choosing from the druid spell list. When you do so, choose a number of druid spells equal to your Wisdom modifier + your druid level (minimum of one spell). The spells must be of a level for which you have spell slots.',
            "For example, if you are a 3rd-level druid, you have four 1st-level and two 2nd-level spell slots. With a Wisdom of 16, your list of prepared spells can include six spells of 1st or 2nd level, in any combination. If you prepare the 1st-level spell cure wounds, you can cast it using a 1st-level or 2nd-level slot. Casting the spell doesn't remove it from your list of prepared spells.",
            'You can also change your list of prepared spells when you finish a long rest. Preparing a new list of druid spells requires time spent in prayer and meditation: at least 1 minute per spell level for each spell on your list.',
          ],
        },
        {
          name: 'Spellcasting Ability',
          desc: [
            'Wisdom is your spellcasting ability for your druid spells, since your magic draws upon your devotion and attunement to nature. You use your Wisdom whenever a spell refers to your spellcasting ability. In addition, you use your Wisdom modifier when setting the saving throw DC for a druid spell you cast and when making an attack roll with one.',
            'Spell save DC = 8 + your proficiency bonus + your Wisdom modifier.',
            'Spell attack modifier = your proficiency bonus + your Wisdom modifier.',
          ],
        },
        {
          name: 'Ritual Casting',
          desc: [
            'You can cast a druid spell as a ritual if that spell has the ritual tag and you have the spell prepared.',
          ],
        },
        {
          name: 'Spellcasting Focus',
          desc: [
            'You can use a druidic focus (see chapter 5, "Equipment") as a spellcasting focus for your druid spells.',
          ],
        },
      ],
    },
    experience_points: 216,
  },
  {
    img: 'https://loremflickr.com/640/480/barbarian?lock=5344754250285056',
    name: 'Maci Pfeffer',
    gender: 'male',
    class_type: 'barbarian',
    age: 62,
    hit_points: { max: 21, current: 21 },
    race: 'halfling',
    alignment_desc:
      'Most halflings are lawful good. As a rule, they are good-hearted and kind, hate to see others in pain, and have no tolerance for oppression. They are also very orderly and traditional, leaning heavily on the support of their community and the comfort of their old ways.',
    alignment: 'lawful-good',
    speed: { walk: 25 },
    age_desc:
      'A halfling reaches adulthood at the age of 20 and generally lives into the middle of his or her second century.',
    size: 'Small',
    size_desc:
      'Halflings average about 3 feet tall and weigh about 40 pounds. Your size is Small.',
    traits: [
      {
        index: 'brave',
        name: 'Brave',
        url: '/api/traits/brave',
        desc: 'You have advantage on saving throw against being frightened.',
      },
      {
        index: 'halfling-nimbleness',
        name: 'Halfling Nimbleness',
        url: '/api/traits/halfling-nimbleness',
        desc: 'You can move through the space of any creature that is of a size larger than yours.',
      },
      {
        index: 'lucky',
        name: 'Lucky',
        url: '/api/traits/lucky',
        desc: 'When you roll a 1 on the d20 for an attack roll, ability check, or saving throw, you can reroll the die and must use the new roll.',
      },
    ],
    proficiencies: [
      {
        index: 'skill-survival',
        name: 'Skill: Survival',
        url: '/api/proficiencies/skill-survival',
      },
      {
        index: 'skill-survival',
        name: 'Skill: Survival',
        url: '/api/proficiencies/skill-survival',
      },
      {
        index: 'light-armor',
        name: 'Light Armor',
        url: '/api/proficiencies/light-armor',
      },
      {
        index: 'medium-armor',
        name: 'Medium Armor',
        url: '/api/proficiencies/medium-armor',
      },
      { index: 'shields', name: 'Shields', url: '/api/proficiencies/shields' },
      {
        index: 'simple-weapons',
        name: 'Simple Weapons',
        url: '/api/proficiencies/simple-weapons',
      },
      {
        index: 'martial-weapons',
        name: 'Martial Weapons',
        url: '/api/proficiencies/martial-weapons',
      },
      {
        index: 'saving-throw-str',
        name: 'Saving Throw: STR',
        url: '/api/proficiencies/saving-throw-str',
      },
      {
        index: 'saving-throw-con',
        name: 'Saving Throw: CON',
        url: '/api/proficiencies/saving-throw-con',
      },
    ],
    languages: [
      { index: 'common', name: 'Common', url: '/api/languages/common' },
      { index: 'halfling', name: 'Halfling', url: '/api/languages/halfling' },
    ],
    language_desc:
      "You can speak, read, and write Common and Halfling. The Halfling language isn't secret, but halflings are loath to share it with others. They write very little, so they don't have a rich body of literature. Their oral tradition, however, is very strong. Almost all halflings speak Common to converse with the people in whose lands they dwell or through which they are traveling.",
    dexterity: 10,
    features: [
      { index: 'rage', name: 'Rage', url: '/api/features/rage' },
      {
        index: 'barbarian-unarmored-defense',
        name: 'Unarmored Defense',
        url: '/api/features/barbarian-unarmored-defense',
      },
      {
        index: 'reckless-attack',
        name: 'Reckless Attack',
        url: '/api/features/reckless-attack',
      },
      {
        index: 'danger-sense',
        name: 'Danger Sense',
        url: '/api/features/danger-sense',
      },
    ],
    equipment: [
      {
        name: 'Greataxe',
        index: 'greataxe',
        quantity: 1,
        url: '/api/equipment/greataxe',
      },
      {
        index: 'explorers-pack',
        name: "Explorer's Pack",
        url: '/api/equipment/explorers-pack',
        quantity: 1,
      },
      {
        index: 'javelin',
        name: 'Javelin',
        url: '/api/equipment/javelin',
        quantity: 4,
      },
      { index: 'javelin', name: 'Javelin', url: '/api/equipment/javelin' },
    ],
    spells: [],
    strength: 9,
    constitution: 5,
    intelligence: 11,
    wisdom: 15,
    charisma: 13,
    level: 2,
    saving_throws: [
      { index: 'str', name: 'STR', url: '/api/ability-scores/str' },
      { index: 'con', name: 'CON', url: '/api/ability-scores/con' },
    ],
    hit_die: 12,
    constitution_modifier: -3,
    ability_score_bonuses: 0,
    prof_bonus: 2,
    class_specific: {
      rage_count: 2,
      rage_damage_bonus: 2,
      brutal_critical_dice: 0,
    },
    experience_points: 379,
  },
  {
    img: 'https://loremflickr.com/640/480/fighter?lock=8625988384587776',
    name: 'Kaden Bartoletti',
    gender: 'male',
    class_type: 'fighter',
    age: 78,
    hit_points: { max: 28, current: 28 },
    race: 'tiefling',
    alignment_desc:
      'Tieflings might not have an innate tendency toward evil, but many of them end up there. Evil or not, an independent nature inclines many tieflings toward a chaotic alignment.',
    alignment: 'chaotic-evil',
    speed: { walk: 30 },
    age_desc:
      'Tieflings mature at the same rate as humans but live a few years longer.',
    size: 'Medium',
    size_desc:
      'Tieflings are about the same size and build as humans. Your size is Medium.',
    traits: [
      {
        index: 'darkvision',
        name: 'Darkvision',
        url: '/api/traits/darkvision',
        desc: 'You have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You cannot discern color in darkness, only shades of gray.',
      },
      {
        index: 'hellish-resistance',
        name: 'Hellish Resistance',
        url: '/api/traits/hellish-resistance',
        desc: 'You have resistance to fire damage.',
      },
      {
        index: 'infernal-legacy',
        name: 'Infernal Legacy',
        url: '/api/traits/infernal-legacy',
        desc: 'You know the thaumaturgy cantrip. When you reach 3rd level, you can cast the hellish rebuke spell as a 2nd-level spell once with this trait and regain the ability to do so when you finish a long rest. When you reach 5th level, you can cast the darkness spell once with this trait and regain the ability to do so when you finish a long rest. Charisma is your spellcasting ability for these spells.',
      },
    ],
    proficiencies: [
      {
        index: 'skill-survival',
        name: 'Skill: Survival',
        url: '/api/proficiencies/skill-survival',
      },
      {
        index: 'skill-athletics',
        name: 'Skill: Athletics',
        url: '/api/proficiencies/skill-athletics',
      },
      {
        index: 'all-armor',
        name: 'All armor',
        url: '/api/proficiencies/all-armor',
      },
      { index: 'shields', name: 'Shields', url: '/api/proficiencies/shields' },
      {
        index: 'simple-weapons',
        name: 'Simple Weapons',
        url: '/api/proficiencies/simple-weapons',
      },
      {
        index: 'martial-weapons',
        name: 'Martial Weapons',
        url: '/api/proficiencies/martial-weapons',
      },
      {
        index: 'saving-throw-str',
        name: 'Saving Throw: STR',
        url: '/api/proficiencies/saving-throw-str',
      },
      {
        index: 'saving-throw-con',
        name: 'Saving Throw: CON',
        url: '/api/proficiencies/saving-throw-con',
      },
    ],
    languages: [
      { index: 'common', name: 'Common', url: '/api/languages/common' },
      { index: 'infernal', name: 'Infernal', url: '/api/languages/infernal' },
    ],
    language_desc: 'You can speak, read, and write Common and Infernal.',
    intelligence: 11,
    charisma: 12,
    features: [
      {
        index: 'fighter-fighting-style',
        name: 'Fighting Style',
        url: '/api/features/fighter-fighting-style',
      },
      {
        index: 'second-wind',
        name: 'Second Wind',
        url: '/api/features/second-wind',
      },
      {
        index: 'action-surge-1-use',
        name: 'Action Surge (1 use)',
        url: '/api/features/action-surge-1-use',
      },
      {
        index: 'martial-archetype',
        name: 'Martial Archetype',
        url: '/api/features/martial-archetype',
      },
    ],
    equipment: [
      {
        name: 'Chain Mail',
        index: 'chain-mail',
        quantity: 1,
        url: '/api/equipment/chain-mail',
      },
      {
        name: 'Handaxe',
        index: 'handaxe',
        quantity: 2,
        url: '/api/equipment/handaxe',
      },
      {
        name: "Explorer's Pack",
        index: 'explorers-pack',
        quantity: 1,
        url: '/api/equipment/explorers-pack',
      },
      {
        index: 'shortsword',
        name: 'Shortsword',
        url: '/api/equipment/shortsword',
      },
    ],
    spells: [],
    strength: 11,
    dexterity: 3,
    constitution: 6,
    wisdom: 11,
    level: 3,
    saving_throws: [
      { index: 'str', name: 'STR', url: '/api/ability-scores/str' },
      { index: 'con', name: 'CON', url: '/api/ability-scores/con' },
    ],
    hit_die: 10,
    constitution_modifier: -2,
    ability_score_bonuses: 0,
    prof_bonus: 2,
    class_specific: { action_surges: 1, indomitable_uses: 0, extra_attacks: 0 },
    experience_points: 879,
  },
  {
    img: 'https://loremflickr.com/640/480/druid?lock=6774574584692736',
    name: 'Anika Stracke',
    gender: 'female',
    class_type: 'druid',
    age: 34,
    hit_points: { max: 11, current: 11 },
    race: 'half-elf',
    alignment_desc:
      "Half-elves share the chaotic bent of their elven heritage. They value both personal freedom and creative expression, demonstrating neither love of leaders nor desire for followers. They chafe at rules, resent others' demands, and sometimes prove unreliable, or at least unpredictable.",
    alignment: 'chaotic-good',
    speed: { walk: 30 },
    age_desc:
      'Half-elves mature at the same rate humans do and reach adulthood around the age of 20. They live much longer than humans, however, often exceeding 180 years.',
    size: 'Medium',
    size_desc:
      'Half-elves are about the same size as humans, ranging from 5 to 6 feet tall. Your size is Medium.',
    traits: [
      {
        index: 'darkvision',
        name: 'Darkvision',
        url: '/api/traits/darkvision',
        desc: 'You have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You cannot discern color in darkness, only shades of gray.',
      },
      {
        index: 'fey-ancestry',
        name: 'Fey Ancestry',
        url: '/api/traits/fey-ancestry',
        desc: 'You have advantage on saving throws against being charmed, and magic cannot put you to sleep.',
      },
      {
        index: 'skill-versatility',
        name: 'Skill Versatility',
        url: '/api/traits/skill-versatility',
        desc: 'You gain proficiency in two skills of your choice.',
      },
    ],
    proficiencies: [
      {
        index: 'skill-performance',
        name: 'Skill: Performance',
        url: '/api/proficiencies/skill-performance',
      },
      {
        index: 'skill-religion',
        name: 'Skill: Religion',
        url: '/api/proficiencies/skill-religion',
      },
      {
        index: 'skill-survival',
        name: 'Skill: Survival',
        url: '/api/proficiencies/skill-survival',
      },
      {
        index: 'skill-medicine',
        name: 'Skill: Medicine',
        url: '/api/proficiencies/skill-medicine',
      },
      {
        index: 'light-armor',
        name: 'Light Armor',
        url: '/api/proficiencies/light-armor',
      },
      {
        index: 'medium-armor',
        name: 'Medium Armor',
        url: '/api/proficiencies/medium-armor',
      },
      { index: 'shields', name: 'Shields', url: '/api/proficiencies/shields' },
      { index: 'clubs', name: 'Clubs', url: '/api/proficiencies/clubs' },
      { index: 'daggers', name: 'Daggers', url: '/api/proficiencies/daggers' },
      {
        index: 'javelins',
        name: 'Javelins',
        url: '/api/proficiencies/javelins',
      },
      { index: 'maces', name: 'Maces', url: '/api/proficiencies/maces' },
      {
        index: 'quarterstaffs',
        name: 'Quarterstaffs',
        url: '/api/proficiencies/quarterstaffs',
      },
      { index: 'sickles', name: 'Sickles', url: '/api/proficiencies/sickles' },
      { index: 'spears', name: 'Spears', url: '/api/proficiencies/spears' },
      { index: 'darts', name: 'Darts', url: '/api/proficiencies/darts' },
      { index: 'slings', name: 'Slings', url: '/api/proficiencies/slings' },
      {
        index: 'scimitars',
        name: 'Scimitars',
        url: '/api/proficiencies/scimitars',
      },
      {
        index: 'herbalism-kit',
        name: 'Herbalism Kit',
        url: '/api/proficiencies/herbalism-kit',
      },
      {
        index: 'saving-throw-int',
        name: 'Saving Throw: INT',
        url: '/api/proficiencies/saving-throw-int',
      },
      {
        index: 'saving-throw-wis',
        name: 'Saving Throw: WIS',
        url: '/api/proficiencies/saving-throw-wis',
      },
    ],
    languages: [
      { index: 'common', name: 'Common', url: '/api/languages/common' },
      { index: 'elvish', name: 'Elvish', url: '/api/languages/elvish' },
      {
        index: 'undercommon',
        name: 'Undercommon',
        url: '/api/languages/undercommon',
      },
    ],
    language_desc:
      'You can speak, read, and write Common, Elvish, and one extra language of your choice.',
    ability_bonuses: [
      {
        ability_score: {
          index: 'int',
          name: 'INT',
          url: '/api/ability-scores/int',
        },
        bonus: 1,
      },
    ],
    charisma: 11,
    intelligence: 12,
    features: [
      {
        index: 'spellcasting-druid',
        name: 'Spellcasting: Druid',
        url: '/api/features/spellcasting-druid',
      },
      { index: 'druidic', name: 'Druidic', url: '/api/features/druidic' },
    ],
    equipment: [
      {
        name: 'Shield',
        index: 'shield',
        quantity: 1,
        url: '/api/equipment/shield',
      },
      {
        name: 'Scimitar',
        index: 'scimitar',
        quantity: 1,
        url: '/api/equipment/scimitar',
      },
      {
        index: 'leather-armor',
        name: 'Leather Armor',
        url: '/api/equipment/leather-armor',
        quantity: 1,
      },
      {
        index: 'explorers-pack',
        name: "Explorer's Pack",
        url: '/api/equipment/explorers-pack',
        quantity: 1,
      },
      {
        index: 'wooden-staff',
        name: 'Wooden staff',
        url: '/api/equipment/wooden-staff',
      },
    ],
    spells: [
      {
        index: 'shillelagh',
        name: 'Shillelagh',
        level: 0,
        url: '/api/spells/shillelagh',
      },
      {
        index: 'resistance',
        name: 'Resistance',
        level: 0,
        url: '/api/spells/resistance',
      },
      {
        index: 'purify-food-and-drink',
        name: 'Purify Food and Drink',
        level: 1,
        url: '/api/spells/purify-food-and-drink',
      },
      {
        index: 'charm-person',
        name: 'Charm Person',
        level: 1,
        url: '/api/spells/charm-person',
      },
    ],
    strength: 10,
    dexterity: 18,
    constitution: 16,
    wisdom: 14,
    level: 1,
    saving_throws: [
      { index: 'int', name: 'INT', url: '/api/ability-scores/int' },
      { index: 'wis', name: 'WIS', url: '/api/ability-scores/wis' },
    ],
    hit_die: 8,
    constitution_modifier: 3,
    cantrips_known: 2,
    spell_slots_level_1: 2,
    spell_slots_level_2: 0,
    spell_slots_level_3: 0,
    spell_slots_level_4: 0,
    spell_slots_level_5: 0,
    spell_slots_level_6: 0,
    spell_slots_level_7: 0,
    spell_slots_level_8: 0,
    spell_slots_level_9: 0,
    ability_score_bonuses: 0,
    prof_bonus: 2,
    class_specific: {
      wild_shape_max_cr: 0,
      wild_shape_swim: false,
      wild_shape_fly: false,
    },
    spellcasting: {
      level: 1,
      spellcasting_ability: {
        index: 'wis',
        name: 'WIS',
        url: '/api/ability-scores/wis',
      },
      info: [
        {
          name: 'Cantrips',
          desc: [
            'At 1st level, you know two cantrips of your choice from the druid spell list. You learn additional druid cantrips of your choice at higher levels, as shown in the Cantrips Known column of the Druid table.',
          ],
        },
        {
          name: 'Preparing and Casting Spells',
          desc: [
            "The Druid table shows how many spell slots you have to cast your spells of 1st level and higher. To cast one of these druid spells, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish a long rest.",
            'You prepare the list of druid spells that are available for you to cast, choosing from the druid spell list. When you do so, choose a number of druid spells equal to your Wisdom modifier + your druid level (minimum of one spell). The spells must be of a level for which you have spell slots.',
            "For example, if you are a 3rd-level druid, you have four 1st-level and two 2nd-level spell slots. With a Wisdom of 16, your list of prepared spells can include six spells of 1st or 2nd level, in any combination. If you prepare the 1st-level spell cure wounds, you can cast it using a 1st-level or 2nd-level slot. Casting the spell doesn't remove it from your list of prepared spells.",
            'You can also change your list of prepared spells when you finish a long rest. Preparing a new list of druid spells requires time spent in prayer and meditation: at least 1 minute per spell level for each spell on your list.',
          ],
        },
        {
          name: 'Spellcasting Ability',
          desc: [
            'Wisdom is your spellcasting ability for your druid spells, since your magic draws upon your devotion and attunement to nature. You use your Wisdom whenever a spell refers to your spellcasting ability. In addition, you use your Wisdom modifier when setting the saving throw DC for a druid spell you cast and when making an attack roll with one.',
            'Spell save DC = 8 + your proficiency bonus + your Wisdom modifier.',
            'Spell attack modifier = your proficiency bonus + your Wisdom modifier.',
          ],
        },
        {
          name: 'Ritual Casting',
          desc: [
            'You can cast a druid spell as a ritual if that spell has the ritual tag and you have the spell prepared.',
          ],
        },
        {
          name: 'Spellcasting Focus',
          desc: [
            'You can use a druidic focus (see chapter 5, "Equipment") as a spellcasting focus for your druid spells.',
          ],
        },
      ],
    },
    experience_points: 4,
  },
  {
    img: 'https://loremflickr.com/640/480/paladin?lock=5348736586743808',
    name: 'Magnus Zboncak',
    gender: 'male',
    class_type: 'paladin',
    age: 603,
    hit_points: { max: 7, current: 7 },
    race: 'elf',
    alignment_desc:
      "Elves love freedom, variety, and self-expression, so they lean strongly toward the gentler aspects of chaos. They value and protect others' freedom as well as their own, and they are more often good than not.",
    alignment: 'chaotic-evil',
    speed: { walk: 30 },
    age_desc:
      'Although elves reach physical maturity at about the same age as humans, the elven understanding of adulthood goes beyond physical growth to encompass worldly experience. An elf typically claims adulthood and an adult name around the age of 100 and can live to be 750 years old.',
    size: 'Medium',
    size_desc:
      'Elves range from under 5 to over 6 feet tall and have slender builds. Your size is Medium.',
    traits: [
      {
        index: 'darkvision',
        name: 'Darkvision',
        url: '/api/traits/darkvision',
        desc: 'You have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You cannot discern color in darkness, only shades of gray.',
      },
      {
        index: 'fey-ancestry',
        name: 'Fey Ancestry',
        url: '/api/traits/fey-ancestry',
        desc: 'You have advantage on saving throws against being charmed, and magic cannot put you to sleep.',
      },
      {
        index: 'trance',
        name: 'Trance',
        url: '/api/traits/trance',
        desc: 'Elves do not need to sleep. Instead, they meditate deeply, remaining semiconscious, for 4 hours a day. (The Common word for such meditation is "trance.") While meditating, you can dream after a fashion; such dreams are actually mental exercises that have become reflexive through years of practice. After resting this way, you gain the same benefit that a human does from 8 hours of sleep.',
      },
      {
        index: 'keen-senses',
        name: 'Keen Senses',
        url: '/api/traits/keen-senses',
        desc: 'You have proficiency in the Perception skill.',
      },
    ],
    proficiencies: [
      {
        index: 'skill-perception',
        name: 'Skill: Perception',
        url: '/api/proficiencies/skill-perception',
        desc: [
          'Your Wisdom (Perception) check lets you spot, hear, or otherwise detect the presence of something. It measures your general awareness of your surroundings and the keenness of your senses. For example, you might try to hear a conversation through a closed door, eavesdrop under an open window, or hear monsters moving stealthily in the forest. Or you might try to spot things that are obscured or easy to miss, whether they are orcs lying in ambush on a road, thugs hiding in the shadows of an alley, or candlelight under a closed secret door.',
        ],
        ability_score: {
          index: 'wis',
          name: 'WIS',
          url: '/api/ability-scores/wis',
        },
      },
      {
        index: 'skill-medicine',
        name: 'Skill: Medicine',
        url: '/api/proficiencies/skill-medicine',
      },
      {
        index: 'skill-insight',
        name: 'Skill: Insight',
        url: '/api/proficiencies/skill-insight',
      },
      {
        index: 'all-armor',
        name: 'All armor',
        url: '/api/proficiencies/all-armor',
      },
      { index: 'shields', name: 'Shields', url: '/api/proficiencies/shields' },
      {
        index: 'simple-weapons',
        name: 'Simple Weapons',
        url: '/api/proficiencies/simple-weapons',
      },
      {
        index: 'martial-weapons',
        name: 'Martial Weapons',
        url: '/api/proficiencies/martial-weapons',
      },
      {
        index: 'saving-throw-wis',
        name: 'Saving Throw: WIS',
        url: '/api/proficiencies/saving-throw-wis',
      },
      {
        index: 'saving-throw-cha',
        name: 'Saving Throw: CHA',
        url: '/api/proficiencies/saving-throw-cha',
      },
    ],
    languages: [
      { index: 'common', name: 'Common', url: '/api/languages/common' },
      { index: 'elvish', name: 'Elvish', url: '/api/languages/elvish' },
    ],
    language_desc:
      'You can speak, read, and write Common and Elvish. Elvish is fluid, with subtle intonations and intricate grammar. Elven literature is rich and varied, and their songs and poems are famous among other races. Many bards learn their language so they can add Elvish ballads to their repertoires.',
    dexterity: 17,
    wisdom: 15,
    features: [
      {
        index: 'divine-sense',
        name: 'Divine Sense',
        url: '/api/features/divine-sense',
      },
      {
        index: 'lay-on-hands',
        name: 'Lay on Hands',
        url: '/api/features/lay-on-hands',
      },
    ],
    equipment: [
      {
        name: 'Javelin',
        index: 'javelin',
        quantity: 5,
        url: '/api/equipment/javelin',
      },
      {
        name: "Explorer's Pack",
        index: 'explorers-pack',
        quantity: 1,
        url: '/api/equipment/explorers-pack',
      },
      {
        index: 'chain-mail',
        name: 'Chain Mail',
        url: '/api/equipment/chain-mail',
        quantity: 1,
      },
      { index: 'rapier', name: 'Rapier', url: '/api/equipment/rapier' },
      { index: 'amulet', name: 'Amulet', url: '/api/equipment/amulet' },
    ],
    spells: [],
    strength: 7,
    constitution: 13,
    intelligence: 14,
    charisma: 7,
    level: 1,
    saving_throws: [
      { index: 'wis', name: 'WIS', url: '/api/ability-scores/wis' },
      { index: 'cha', name: 'CHA', url: '/api/ability-scores/cha' },
    ],
    hit_die: 10,
    constitution_modifier: -3,
    spell_slots_level_1: 0,
    spell_slots_level_2: 0,
    spell_slots_level_3: 0,
    spell_slots_level_4: 0,
    spell_slots_level_5: 0,
    ability_score_bonuses: 0,
    prof_bonus: 2,
    class_specific: { aura_range: 0 },
    spellcasting: {
      level: 2,
      spellcasting_ability: {
        index: 'cha',
        name: 'CHA',
        url: '/api/ability-scores/cha',
      },
      info: [
        {
          name: 'Preparing and Casting Spells',
          desc: [
            "The Paladin table shows how many spell slots you have to cast your spells. To cast one of your paladin spells of 1st level or higher, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish a long rest.",
            'You prepare the list of paladin spells that are available for you to cast, choosing from the paladin spell list. When you do so, choose a number of paladin spells equal to your Charisma modifier + half your paladin level, rounded down (minimum of one spell). The spells must be of a level for which you have spell slots.',
            "For example, if you are a 5th-level paladin, you have four 1st-level and two 2nd-level spell slots. With a Charisma of 14, your list of prepared spells can include four spells of 1st or 2nd level, in any combination. If you prepare the 1st-level spell cure wounds, you can cast it using a 1st-level or a 2nd- level slot. Casting the spell doesn't remove it from your list of prepared spells.",
            'You can change your list of prepared spells when you finish a long rest. Preparing a new list of paladin spells requires time spent in prayer and meditation: at least 1 minute per spell level for each spell on your list.',
          ],
        },
        {
          name: 'Spellcasting Ability',
          desc: [
            'Charisma is your spellcasting ability for your paladin spells, since their power derives from the strength of your convictions. You use your Charisma whenever a spell refers to your spellcasting ability. In addition, you use your Charisma modifier when setting the saving throw DC for a paladin spell you cast and when making an attack roll with one.',
            'Spell save DC = 8 + your proficiency bonus + your Charisma modifier.',
            'Spell attack modifier = your proficiency bonus + your Charisma modifier.',
          ],
        },
        {
          name: 'Spellcasting Focus',
          desc: [
            'You can use a holy symbol as a spellcasting focus for your paladin spells.',
          ],
        },
      ],
    },
    experience_points: 223,
  },
  {
    img: 'https://loremflickr.com/640/480/monk?lock=2174719186960384',
    name: 'Donnie Rosenbaum',
    gender: 'Gender questioning',
    class_type: 'monk',
    age: 29,
    hit_points: { max: 5, current: 5 },
    race: 'dragonborn',
    alignment_desc:
      'Dragonborn tend to extremes, making a conscious choice for one side or the other in the cosmic war between good and evil. Most dragonborn are good, but those who side with evil can be terrible villains.',
    alignment: 'lawful-good',
    speed: { walk: 30 },
    age_desc:
      'Young dragonborn grow quickly. They walk hours after hatching, attain the size and development of a 10-year-old human child by the age of 3, and reach adulthood by 15. They live to be around 80.',
    size: 'Medium',
    size_desc:
      'Dragonborn are taller and heavier than humans, standing well over 6 feet tall and averaging almost 250 pounds. Your size is Medium.',
    traits: [
      {
        index: 'draconic-ancestry',
        name: 'Draconic Ancestry',
        url: '/api/traits/draconic-ancestry',
        desc: 'You have draconic ancestry. Choose one type of dragon from the Draconic Ancestry table. Your breath weapon and damage resistance are determined by the dragon type, as shown in the table.',
      },
      {
        index: 'breath-weapon',
        name: 'Breath Weapon',
        url: '/api/traits/breath-weapon',
        desc: 'You can use your action to exhale destructive energy. Your draconic ancestry determines the size, shape, and damage type of the exhalation.',
      },
      {
        index: 'damage-resistance',
        name: 'Damage Resistance',
        url: '/api/traits/damage-resistance',
        desc: 'You have resistance to the damage type associated with your draconic ancestry.',
      },
    ],
    proficiencies: [
      {
        index: 'skill-history',
        name: 'Skill: History',
        url: '/api/proficiencies/skill-history',
      },
      {
        index: 'skill-acrobatics',
        name: 'Skill: Acrobatics',
        url: '/api/proficiencies/skill-acrobatics',
      },
      {
        index: 'simple-weapons',
        name: 'Simple Weapons',
        url: '/api/proficiencies/simple-weapons',
      },
      {
        index: 'shortswords',
        name: 'Shortswords',
        url: '/api/proficiencies/shortswords',
      },
      {
        index: 'saving-throw-dex',
        name: 'Saving Throw: DEX',
        url: '/api/proficiencies/saving-throw-dex',
      },
      {
        index: 'saving-throw-str',
        name: 'Saving Throw: STR',
        url: '/api/proficiencies/saving-throw-str',
      },
    ],
    languages: [
      { index: 'common', name: 'Common', url: '/api/languages/common' },
      { index: 'draconic', name: 'Draconic', url: '/api/languages/draconic' },
    ],
    language_desc:
      'You can speak, read, and write Common and Draconic. Draconic is thought to be one of the oldest languages and is often used in the study of magic. The language sounds harsh to most other creatures and includes numerous hard consonants and sibilants.',
    strength: 9,
    charisma: 13,
    features: [
      {
        index: 'monk-unarmored-defense',
        name: 'Unarmored Defense',
        url: '/api/features/monk-unarmored-defense',
      },
      {
        index: 'martial-arts',
        name: 'Martial Arts',
        url: '/api/features/martial-arts',
      },
    ],
    equipment: [
      {
        name: "Dungeoneer's Pack",
        index: 'dungeoneers-pack',
        quantity: 1,
        url: '/api/equipment/dungeoneers-pack',
      },
      { index: 'dart', name: 'Dart', url: '/api/equipment/dart', quantity: 10 },
      { index: 'javelin', name: 'Javelin', url: '/api/equipment/javelin' },
    ],
    spells: [],
    dexterity: 15,
    constitution: 11,
    intelligence: 15,
    wisdom: 12,
    level: 1,
    saving_throws: [
      { index: 'str', name: 'STR', url: '/api/ability-scores/str' },
      { index: 'dex', name: 'DEX', url: '/api/ability-scores/dex' },
    ],
    hit_die: 8,
    constitution_modifier: -3,
    ability_score_bonuses: 0,
    prof_bonus: 2,
    class_specific: {
      martial_arts: { dice_count: 1, dice_value: 4 },
      ki_points: 0,
      unarmored_movement: 0,
    },
    experience_points: 49,
  },
  {
    img: 'https://loremflickr.com/640/480/cleric?lock=6568528150790144',
    name: 'Abbie Trantow-Ernser',
    gender: 'Genderqueer',
    class_type: 'cleric',
    age: 18,
    hit_points: { max: 13, current: 13 },
    race: 'human',
    alignment_desc:
      'Humans tend toward no particular alignment. The best and the worst are found among them.',
    alignment: 'neutral-evil',
    speed: { walk: 30 },
    age_desc:
      'Humans reach adulthood in their late teens and live less than a century.',
    size: 'Medium',
    size_desc:
      'Humans vary widely in height and build, from barely 5 feet to well over 6 feet tall. Regardless of your position in that range, your size is Medium.',
    traits: [],
    proficiencies: [
      {
        index: 'skill-history',
        name: 'Skill: History',
        url: '/api/proficiencies/skill-history',
      },
      {
        index: 'skill-history',
        name: 'Skill: History',
        url: '/api/proficiencies/skill-history',
      },
      {
        index: 'light-armor',
        name: 'Light Armor',
        url: '/api/proficiencies/light-armor',
      },
      {
        index: 'medium-armor',
        name: 'Medium Armor',
        url: '/api/proficiencies/medium-armor',
      },
      { index: 'shields', name: 'Shields', url: '/api/proficiencies/shields' },
      {
        index: 'simple-weapons',
        name: 'Simple Weapons',
        url: '/api/proficiencies/simple-weapons',
      },
      {
        index: 'saving-throw-wis',
        name: 'Saving Throw: WIS',
        url: '/api/proficiencies/saving-throw-wis',
      },
      {
        index: 'saving-throw-cha',
        name: 'Saving Throw: CHA',
        url: '/api/proficiencies/saving-throw-cha',
      },
    ],
    languages: [
      { index: 'common', name: 'Common', url: '/api/languages/common' },
      {
        index: 'undercommon',
        name: 'Undercommon',
        url: '/api/languages/undercommon',
      },
    ],
    language_desc:
      'You can speak, read, and write Common and one extra language of your choice. Humans typically learn the languages of other peoples they deal with, including obscure dialects. They are fond of sprinkling their speech with words borrowed from other tongues: Orc curses, Elvish musical expressions, Dwarvish military phrases, and so on.',
    strength: 13,
    dexterity: 11,
    constitution: 11,
    intelligence: 6,
    wisdom: 10,
    charisma: 13,
    features: [
      {
        index: 'spellcasting-cleric',
        name: 'Spellcasting: Cleric',
        url: '/api/features/spellcasting-cleric',
      },
      {
        index: 'divine-domain',
        name: 'Divine Domain',
        url: '/api/features/divine-domain',
      },
      {
        index: 'domain-spells-1',
        name: 'Domain Spells',
        url: '/api/features/domain-spells-1',
      },
      {
        index: 'channel-divinity-1-rest',
        name: 'Channel Divinity (1/rest)',
        url: '/api/features/channel-divinity-1-rest',
      },
      {
        index: 'channel-divinity-turn-undead',
        name: 'Channel Divinity: Turn Undead',
        url: '/api/features/channel-divinity-turn-undead',
      },
    ],
    equipment: [
      {
        name: 'Warhammer',
        index: 'warhammer',
        quantity: 1,
        url: '/api/equipment/warhammer',
      },
      {
        name: 'Scale Mail',
        index: 'scale-mail',
        quantity: 1,
        url: '/api/equipment/scale-mail',
      },
      {
        name: "Priest's Pack",
        index: 'priests-pack',
        quantity: 1,
        url: '/api/equipment/priests-pack',
      },
      {
        index: 'shield',
        name: 'Shield',
        url: '/api/equipment/shield',
        quantity: 1,
      },
      { index: 'dagger', name: 'Dagger', url: '/api/equipment/dagger' },
      { index: 'amulet', name: 'Amulet', url: '/api/equipment/amulet' },
    ],
    spells: [
      { index: 'light', name: 'Light', level: 0, url: '/api/spells/light' },
      {
        index: 'spare-the-dying',
        name: 'Spare the Dying',
        level: 0,
        url: '/api/spells/spare-the-dying',
      },
      {
        index: 'mending',
        name: 'Mending',
        level: 0,
        url: '/api/spells/mending',
      },
      {
        index: 'detect-magic',
        name: 'Detect Magic',
        level: 1,
        url: '/api/spells/detect-magic',
      },
      {
        index: 'protection-from-evil-and-good',
        name: 'Protection from Evil and Good',
        level: 1,
        url: '/api/spells/protection-from-evil-and-good',
      },
      { index: 'bless', name: 'Bless', level: 1, url: '/api/spells/bless' },
    ],
    level: 2,
    saving_throws: [
      { index: 'wis', name: 'WIS', url: '/api/ability-scores/wis' },
      { index: 'cha', name: 'CHA', url: '/api/ability-scores/cha' },
    ],
    hit_die: 8,
    constitution_modifier: -3,
    cantrips_known: 3,
    spell_slots_level_1: 3,
    spell_slots_level_2: 0,
    spell_slots_level_3: 0,
    spell_slots_level_4: 0,
    spell_slots_level_5: 0,
    spell_slots_level_6: 0,
    spell_slots_level_7: 0,
    spell_slots_level_8: 0,
    spell_slots_level_9: 0,
    ability_score_bonuses: 0,
    prof_bonus: 2,
    class_specific: { channel_divinity_charges: 1, destroy_undead_cr: 0 },
    spellcasting: {
      level: 1,
      spellcasting_ability: {
        index: 'wis',
        name: 'WIS',
        url: '/api/ability-scores/wis',
      },
      info: [
        {
          name: 'Cantrips',
          desc: [
            'At 1st level, you know three cantrips of your choice from the cleric spell list. You learn additional cleric cantrips of your choice at higher levels, as shown in the Cantrips Known column of the Cleric table.',
          ],
        },
        {
          name: 'Preparing and Casting Spells',
          desc: [
            "The Cleric table shows how many spell slots you have to cast your spells of 1st level and higher. To cast one of these spells, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish a long rest.",
            'You prepare the list of cleric spells that are available for you to cast, choosing from the cleric spell list. When you do so, choose a number of cleric spells equal to your Wisdom modifier + your cleric level (minimum of one spell). The spells must be of a level for which you have spell slots.',
            "For example, if you are a 3rd-level cleric, you have four 1st-level and two 2nd-level spell slots. With a Wisdom of 16, your list of prepared spells can include six spells of 1st or 2nd level, in any combination. If you prepare the 1st-level spell cure wounds, you can cast it using a 1st-level or 2nd-level slot. Casting the spell doesn't remove it from your list of prepared spells.",
            'You can change your list of prepared spells when you finish a long rest. Preparing a new list of cleric spells requires time spent in prayer and meditation: at least 1 minute per spell level for each spell on your list.',
          ],
        },
        {
          name: 'Spellcasting Ability',
          desc: [
            'Wisdom is your spellcasting ability for your cleric spells. The power of your spells comes from your devotion to your deity. You use your Wisdom whenever a cleric spell refers to your spellcasting ability. In addition, you use your Wisdom modifier when setting the saving throw DC for a cleric spell you cast and when making an attack roll with one.',
            'Spell save DC = 8 + your proficiency bonus + your Wisdom modifier',
            'Spell attack modifier = your proficiency bonus + your Wisdom modifier',
          ],
        },
        {
          name: 'Ritual Casting',
          desc: [
            'You can cast a cleric spell as a ritual if that spell has the ritual tag and you have the spell prepared.',
          ],
        },
        {
          name: 'Spellcasting Focus',
          desc: [
            'You can use a holy symbol (see Equipment) as a spellcasting focus for your cleric spells.',
          ],
        },
      ],
    },
    experience_points: 508,
  },
  {
    img: 'https://loremflickr.com/640/480/fighter?lock=8050042342473728',
    name: 'Mellie Leuschke',
    gender: 'Demigender',
    class_type: 'fighter',
    age: 569,
    hit_points: { max: 7, current: 7 },
    race: 'elf',
    alignment_desc:
      "Elves love freedom, variety, and self-expression, so they lean strongly toward the gentler aspects of chaos. They value and protect others' freedom as well as their own, and they are more often good than not.",
    alignment: 'chaotic-good',
    speed: { walk: 30 },
    age_desc:
      'Although elves reach physical maturity at about the same age as humans, the elven understanding of adulthood goes beyond physical growth to encompass worldly experience. An elf typically claims adulthood and an adult name around the age of 100 and can live to be 750 years old.',
    size: 'Medium',
    size_desc:
      'Elves range from under 5 to over 6 feet tall and have slender builds. Your size is Medium.',
    traits: [
      {
        index: 'darkvision',
        name: 'Darkvision',
        url: '/api/traits/darkvision',
        desc: 'You have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You cannot discern color in darkness, only shades of gray.',
      },
      {
        index: 'fey-ancestry',
        name: 'Fey Ancestry',
        url: '/api/traits/fey-ancestry',
        desc: 'You have advantage on saving throws against being charmed, and magic cannot put you to sleep.',
      },
      {
        index: 'trance',
        name: 'Trance',
        url: '/api/traits/trance',
        desc: 'Elves do not need to sleep. Instead, they meditate deeply, remaining semiconscious, for 4 hours a day. (The Common word for such meditation is "trance.") While meditating, you can dream after a fashion; such dreams are actually mental exercises that have become reflexive through years of practice. After resting this way, you gain the same benefit that a human does from 8 hours of sleep.',
      },
      {
        index: 'keen-senses',
        name: 'Keen Senses',
        url: '/api/traits/keen-senses',
        desc: 'You have proficiency in the Perception skill.',
      },
    ],
    proficiencies: [
      {
        index: 'skill-perception',
        name: 'Skill: Perception',
        url: '/api/proficiencies/skill-perception',
        desc: [
          'Your Wisdom (Perception) check lets you spot, hear, or otherwise detect the presence of something. It measures your general awareness of your surroundings and the keenness of your senses. For example, you might try to hear a conversation through a closed door, eavesdrop under an open window, or hear monsters moving stealthily in the forest. Or you might try to spot things that are obscured or easy to miss, whether they are orcs lying in ambush on a road, thugs hiding in the shadows of an alley, or candlelight under a closed secret door.',
        ],
        ability_score: {
          index: 'wis',
          name: 'WIS',
          url: '/api/ability-scores/wis',
        },
      },
      {
        index: 'skill-intimidation',
        name: 'Skill: Intimidation',
        url: '/api/proficiencies/skill-intimidation',
      },
      {
        index: 'skill-acrobatics',
        name: 'Skill: Acrobatics',
        url: '/api/proficiencies/skill-acrobatics',
      },
      {
        index: 'all-armor',
        name: 'All armor',
        url: '/api/proficiencies/all-armor',
      },
      { index: 'shields', name: 'Shields', url: '/api/proficiencies/shields' },
      {
        index: 'simple-weapons',
        name: 'Simple Weapons',
        url: '/api/proficiencies/simple-weapons',
      },
      {
        index: 'martial-weapons',
        name: 'Martial Weapons',
        url: '/api/proficiencies/martial-weapons',
      },
      {
        index: 'saving-throw-str',
        name: 'Saving Throw: STR',
        url: '/api/proficiencies/saving-throw-str',
      },
      {
        index: 'saving-throw-con',
        name: 'Saving Throw: CON',
        url: '/api/proficiencies/saving-throw-con',
      },
    ],
    languages: [
      { index: 'common', name: 'Common', url: '/api/languages/common' },
      { index: 'elvish', name: 'Elvish', url: '/api/languages/elvish' },
    ],
    language_desc:
      'You can speak, read, and write Common and Elvish. Elvish is fluid, with subtle intonations and intricate grammar. Elven literature is rich and varied, and their songs and poems are famous among other races. Many bards learn their language so they can add Elvish ballads to their repertoires.',
    dexterity: 15,
    wisdom: 17,
    features: [
      {
        index: 'fighter-fighting-style',
        name: 'Fighting Style',
        url: '/api/features/fighter-fighting-style',
      },
      {
        index: 'second-wind',
        name: 'Second Wind',
        url: '/api/features/second-wind',
      },
    ],
    equipment: [
      {
        name: 'Chain Mail',
        index: 'chain-mail',
        quantity: 1,
        url: '/api/equipment/chain-mail',
      },
      {
        name: 'Handaxe',
        index: 'handaxe',
        quantity: 2,
        url: '/api/equipment/handaxe',
      },
      {
        name: "Dungeoneer's Pack",
        index: 'dungeoneers-pack',
        quantity: 1,
        url: '/api/equipment/dungeoneers-pack',
      },
      { index: 'greataxe', name: 'Greataxe', url: '/api/equipment/greataxe' },
    ],
    spells: [],
    strength: 10,
    constitution: 15,
    intelligence: 10,
    charisma: 11,
    level: 1,
    saving_throws: [
      { index: 'str', name: 'STR', url: '/api/ability-scores/str' },
      { index: 'con', name: 'CON', url: '/api/ability-scores/con' },
    ],
    hit_die: 10,
    constitution_modifier: -3,
    ability_score_bonuses: 0,
    prof_bonus: 2,
    class_specific: { action_surges: 0, indomitable_uses: 0, extra_attacks: 0 },
    experience_points: 77,
  },
  {
    img: 'https://loremflickr.com/640/480/paladin?lock=6660337084399616',
    name: 'Kennedi Luettgen-Schimmel',
    gender: 'Cis man',
    class_type: 'paladin',
    age: 62,
    hit_points: { max: 8, current: 8 },
    race: 'tiefling',
    alignment_desc:
      'Tieflings might not have an innate tendency toward evil, but many of them end up there. Evil or not, an independent nature inclines many tieflings toward a chaotic alignment.',
    alignment: 'chaotic-neutral',
    speed: { walk: 30 },
    age_desc:
      'Tieflings mature at the same rate as humans but live a few years longer.',
    size: 'Medium',
    size_desc:
      'Tieflings are about the same size and build as humans. Your size is Medium.',
    traits: [
      {
        index: 'darkvision',
        name: 'Darkvision',
        url: '/api/traits/darkvision',
        desc: 'You have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You cannot discern color in darkness, only shades of gray.',
      },
      {
        index: 'hellish-resistance',
        name: 'Hellish Resistance',
        url: '/api/traits/hellish-resistance',
        desc: 'You have resistance to fire damage.',
      },
      {
        index: 'infernal-legacy',
        name: 'Infernal Legacy',
        url: '/api/traits/infernal-legacy',
        desc: 'You know the thaumaturgy cantrip. When you reach 3rd level, you can cast the hellish rebuke spell as a 2nd-level spell once with this trait and regain the ability to do so when you finish a long rest. When you reach 5th level, you can cast the darkness spell once with this trait and regain the ability to do so when you finish a long rest. Charisma is your spellcasting ability for these spells.',
      },
    ],
    proficiencies: [
      {
        index: 'skill-intimidation',
        name: 'Skill: Intimidation',
        url: '/api/proficiencies/skill-intimidation',
      },
      {
        index: 'skill-medicine',
        name: 'Skill: Medicine',
        url: '/api/proficiencies/skill-medicine',
      },
      {
        index: 'all-armor',
        name: 'All armor',
        url: '/api/proficiencies/all-armor',
      },
      { index: 'shields', name: 'Shields', url: '/api/proficiencies/shields' },
      {
        index: 'simple-weapons',
        name: 'Simple Weapons',
        url: '/api/proficiencies/simple-weapons',
      },
      {
        index: 'martial-weapons',
        name: 'Martial Weapons',
        url: '/api/proficiencies/martial-weapons',
      },
      {
        index: 'saving-throw-wis',
        name: 'Saving Throw: WIS',
        url: '/api/proficiencies/saving-throw-wis',
      },
      {
        index: 'saving-throw-cha',
        name: 'Saving Throw: CHA',
        url: '/api/proficiencies/saving-throw-cha',
      },
    ],
    languages: [
      { index: 'common', name: 'Common', url: '/api/languages/common' },
      { index: 'infernal', name: 'Infernal', url: '/api/languages/infernal' },
    ],
    language_desc: 'You can speak, read, and write Common and Infernal.',
    intelligence: 14,
    charisma: 13,
    features: [
      {
        index: 'divine-sense',
        name: 'Divine Sense',
        url: '/api/features/divine-sense',
      },
      {
        index: 'lay-on-hands',
        name: 'Lay on Hands',
        url: '/api/features/lay-on-hands',
      },
    ],
    equipment: [
      {
        name: 'Javelin',
        index: 'javelin',
        quantity: 5,
        url: '/api/equipment/javelin',
      },
      {
        name: "Explorer's Pack",
        index: 'explorers-pack',
        quantity: 1,
        url: '/api/equipment/explorers-pack',
      },
      {
        index: 'chain-mail',
        name: 'Chain Mail',
        url: '/api/equipment/chain-mail',
        quantity: 1,
      },
      { index: 'flail', name: 'Flail', url: '/api/equipment/flail' },
      { index: 'amulet', name: 'Amulet', url: '/api/equipment/amulet' },
    ],
    spells: [],
    strength: 13,
    dexterity: 13,
    constitution: 6,
    wisdom: 10,
    level: 1,
    saving_throws: [
      { index: 'wis', name: 'WIS', url: '/api/ability-scores/wis' },
      { index: 'cha', name: 'CHA', url: '/api/ability-scores/cha' },
    ],
    hit_die: 10,
    constitution_modifier: -2,
    spell_slots_level_1: 0,
    spell_slots_level_2: 0,
    spell_slots_level_3: 0,
    spell_slots_level_4: 0,
    spell_slots_level_5: 0,
    ability_score_bonuses: 0,
    prof_bonus: 2,
    class_specific: { aura_range: 0 },
    spellcasting: {
      level: 2,
      spellcasting_ability: {
        index: 'cha',
        name: 'CHA',
        url: '/api/ability-scores/cha',
      },
      info: [
        {
          name: 'Preparing and Casting Spells',
          desc: [
            "The Paladin table shows how many spell slots you have to cast your spells. To cast one of your paladin spells of 1st level or higher, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish a long rest.",
            'You prepare the list of paladin spells that are available for you to cast, choosing from the paladin spell list. When you do so, choose a number of paladin spells equal to your Charisma modifier + half your paladin level, rounded down (minimum of one spell). The spells must be of a level for which you have spell slots.',
            "For example, if you are a 5th-level paladin, you have four 1st-level and two 2nd-level spell slots. With a Charisma of 14, your list of prepared spells can include four spells of 1st or 2nd level, in any combination. If you prepare the 1st-level spell cure wounds, you can cast it using a 1st-level or a 2nd- level slot. Casting the spell doesn't remove it from your list of prepared spells.",
            'You can change your list of prepared spells when you finish a long rest. Preparing a new list of paladin spells requires time spent in prayer and meditation: at least 1 minute per spell level for each spell on your list.',
          ],
        },
        {
          name: 'Spellcasting Ability',
          desc: [
            'Charisma is your spellcasting ability for your paladin spells, since their power derives from the strength of your convictions. You use your Charisma whenever a spell refers to your spellcasting ability. In addition, you use your Charisma modifier when setting the saving throw DC for a paladin spell you cast and when making an attack roll with one.',
            'Spell save DC = 8 + your proficiency bonus + your Charisma modifier.',
            'Spell attack modifier = your proficiency bonus + your Charisma modifier.',
          ],
        },
        {
          name: 'Spellcasting Focus',
          desc: [
            'You can use a holy symbol as a spellcasting focus for your paladin spells.',
          ],
        },
      ],
    },
    experience_points: 144,
  },
  {
    img: 'https://loremflickr.com/640/480/sorcerer?lock=811472913432576',
    name: 'Lionel Bergstrom',
    gender: 'female',
    class_type: 'sorcerer',
    age: 166,
    hit_points: { max: 7, current: 7 },
    race: 'gnome',
    alignment_desc:
      'Gnomes are most often good. Those who tend toward law are sages, engineers, researchers, scholars, investigators, or inventors. Those who tend toward chaos are minstrels, tricksters, wanderers, or fanciful jewelers. Gnomes are good-hearted, and even the tricksters among them are more playful than vicious.',
    alignment: 'chaotic-good',
    speed: { walk: 25 },
    age_desc:
      'Gnomes mature at the same rate humans do, and most are expected to settle down into an adult life by around age 40. They can live 350 to almost 500 years.',
    size: 'Small',
    size_desc:
      'Gnomes are between 3 and 4 feet tall and average about 40 pounds. Your size is Small.',
    traits: [
      {
        index: 'darkvision',
        name: 'Darkvision',
        url: '/api/traits/darkvision',
        desc: 'You have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You cannot discern color in darkness, only shades of gray.',
      },
      {
        index: 'gnome-cunning',
        name: 'Gnome Cunning',
        url: '/api/traits/gnome-cunning',
        desc: 'You have advantage on all Intelligence, Wisdom, and Charisma saving throws against magic.',
      },
    ],
    proficiencies: [
      {
        index: 'skill-arcana',
        name: 'Skill: Arcana',
        url: '/api/proficiencies/skill-arcana',
      },
      {
        index: 'skill-religion',
        name: 'Skill: Religion',
        url: '/api/proficiencies/skill-religion',
      },
      { index: 'daggers', name: 'Daggers', url: '/api/proficiencies/daggers' },
      { index: 'darts', name: 'Darts', url: '/api/proficiencies/darts' },
      { index: 'slings', name: 'Slings', url: '/api/proficiencies/slings' },
      {
        index: 'quarterstaffs',
        name: 'Quarterstaffs',
        url: '/api/proficiencies/quarterstaffs',
      },
      {
        index: 'crossbows-light',
        name: 'Crossbows, light',
        url: '/api/proficiencies/crossbows-light',
      },
      {
        index: 'saving-throw-con',
        name: 'Saving Throw: CON',
        url: '/api/proficiencies/saving-throw-con',
      },
      {
        index: 'saving-throw-cha',
        name: 'Saving Throw: CHA',
        url: '/api/proficiencies/saving-throw-cha',
      },
    ],
    languages: [
      { index: 'common', name: 'Common', url: '/api/languages/common' },
      { index: 'gnomish', name: 'Gnomish', url: '/api/languages/gnomish' },
    ],
    language_desc:
      'You can speak, read, and write Common and Gnomish. The Gnomish language, which uses the Dwarvish script, is renowned for its technical treatises and its catalogs of knowledge about the natural world.',
    intelligence: 13,
    features: [
      {
        index: 'spellcasting-sorcerer',
        name: 'Spellcasting: Sorcerer',
        url: '/api/features/spellcasting-sorcerer',
      },
      {
        index: 'sorcerous-origin',
        name: 'Sorcerous Origin',
        url: '/api/features/sorcerous-origin',
      },
    ],
    equipment: [
      {
        index: 'crossbow-light',
        name: 'Crossbow, light',
        url: '/api/equipment/crossbow-light',
        quantity: 1,
      },
      {
        index: 'crossbow-bolt',
        name: 'Crossbow bolt',
        url: '/api/equipment/crossbow-bolt',
        quantity: 20,
      },
      {
        name: "Explorer's Pack",
        index: 'explorers-pack',
        quantity: 1,
        url: '/api/equipment/explorers-pack',
      },
      {
        index: 'dagger',
        name: 'Dagger',
        url: '/api/equipment/dagger',
        quantity: 2,
      },
      { index: 'rod', name: 'Rod', url: '/api/equipment/rod' },
    ],
    spells: [
      {
        index: 'dancing-lights',
        name: 'Dancing Lights',
        level: 0,
        url: '/api/spells/dancing-lights',
      },
      {
        index: 'minor-illusion',
        name: 'Minor Illusion',
        level: 0,
        url: '/api/spells/minor-illusion',
      },
      {
        index: 'poison-spray',
        name: 'Poison Spray',
        level: 0,
        url: '/api/spells/poison-spray',
      },
      {
        index: 'acid-splash',
        name: 'Acid Splash',
        level: 0,
        url: '/api/spells/acid-splash',
      },
      {
        index: 'comprehend-languages',
        name: 'Comprehend Languages',
        level: 1,
        url: '/api/spells/comprehend-languages',
      },
      {
        index: 'color-spray',
        name: 'Color Spray',
        level: 1,
        url: '/api/spells/color-spray',
      },
    ],
    strength: 14,
    dexterity: 15,
    constitution: 12,
    wisdom: 12,
    charisma: 15,
    level: 1,
    saving_throws: [
      { index: 'con', name: 'CON', url: '/api/ability-scores/con' },
      { index: 'cha', name: 'CHA', url: '/api/ability-scores/cha' },
    ],
    hit_die: 6,
    constitution_modifier: 1,
    cantrips_known: 4,
    spells_known: 2,
    spell_slots_level_1: 2,
    spell_slots_level_2: 0,
    spell_slots_level_3: 0,
    spell_slots_level_4: 0,
    spell_slots_level_5: 0,
    spell_slots_level_6: 0,
    spell_slots_level_7: 0,
    spell_slots_level_8: 0,
    spell_slots_level_9: 0,
    ability_score_bonuses: 0,
    prof_bonus: 2,
    class_specific: {
      sorcery_points: 0,
      metamagic_known: 0,
      creating_spell_slots: [],
    },
    spellcasting: {
      level: 1,
      spellcasting_ability: {
        index: 'cha',
        name: 'CHA',
        url: '/api/ability-scores/cha',
      },
      info: [
        {
          name: 'Cantrips',
          desc: [
            'At 1st level, you know four cantrips of your choice from the sorcerer spell list. You learn additional sorcerer cantrips of your choice at higher levels, as shown in the Cantrips Known column of the Sorcerer table.',
          ],
        },
        {
          name: 'Spell Slots',
          desc: [
            "The Sorcerer table shows how many spell slots you have to cast your spells of 1st level and higher. To cast one of these sorcerer spells, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish a long rest.",
            'For example, if you know the 1st-level spell burning hands and have a 1st-level and a 2nd-level spell slot available, you can cast burning hands using either slot.',
          ],
        },
        {
          name: 'Spells Known of 1st Level and Higher',
          desc: [
            'You know two 1st-level spells of your choice from the sorcerer spell list.',
            'The Spells Known column of the Sorcerer table shows when you learn more sorcerer spells of your choice. Each of these spells must be of a level for which you have spell slots. For instance, when you reach 3rd level in this class, you can learn one new spell of 1st or 2nd level. ',
            'Additionally, when you gain a level in this class, you can choose one of the sorcerer spells you know and replace it with another spell from the sorcerer spell list, which also must be of a level for which you have spell slots.',
          ],
        },
        {
          name: 'Spellcasting Ability',
          desc: [
            'Charisma is your spellcasting ability for your sorcerer spells, since the power of your magic relies on your ability to project your will into the world. You use your Charisma whenever a spell refers to your spellcasting ability. In addition, you use your Charisma modifier when setting the saving throw DC for a sorcerer spell you cast and when making an attack roll with one.',
            'Spell save DC = 8 + your proficiency bonus + your Charisma modifier.',
            'Spell attack modifier = your proficiency bonus + your Charisma modifier.',
          ],
        },
        {
          name: 'Spellcasting Focus',
          desc: [
            'You can use an arcane focus as a spellcasting focus for your sorcerer spells.',
          ],
        },
      ],
    },
    experience_points: 92,
  },
  {
    img: 'https://loremflickr.com/640/480/warlock?lock=464118685368320',
    name: 'Shaniya Hills',
    gender: 'male',
    class_type: 'warlock',
    age: 74,
    hit_points: { max: 21, current: 21 },
    race: 'tiefling',
    alignment_desc:
      'Tieflings might not have an innate tendency toward evil, but many of them end up there. Evil or not, an independent nature inclines many tieflings toward a chaotic alignment.',
    alignment: 'chaotic-neutral',
    speed: { walk: 30 },
    age_desc:
      'Tieflings mature at the same rate as humans but live a few years longer.',
    size: 'Medium',
    size_desc:
      'Tieflings are about the same size and build as humans. Your size is Medium.',
    traits: [
      {
        index: 'darkvision',
        name: 'Darkvision',
        url: '/api/traits/darkvision',
        desc: 'You have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You cannot discern color in darkness, only shades of gray.',
      },
      {
        index: 'hellish-resistance',
        name: 'Hellish Resistance',
        url: '/api/traits/hellish-resistance',
        desc: 'You have resistance to fire damage.',
      },
      {
        index: 'infernal-legacy',
        name: 'Infernal Legacy',
        url: '/api/traits/infernal-legacy',
        desc: 'You know the thaumaturgy cantrip. When you reach 3rd level, you can cast the hellish rebuke spell as a 2nd-level spell once with this trait and regain the ability to do so when you finish a long rest. When you reach 5th level, you can cast the darkness spell once with this trait and regain the ability to do so when you finish a long rest. Charisma is your spellcasting ability for these spells.',
      },
    ],
    proficiencies: [
      {
        index: 'skill-religion',
        name: 'Skill: Religion',
        url: '/api/proficiencies/skill-religion',
      },
      {
        index: 'skill-investigation',
        name: 'Skill: Investigation',
        url: '/api/proficiencies/skill-investigation',
      },
      {
        index: 'light-armor',
        name: 'Light Armor',
        url: '/api/proficiencies/light-armor',
      },
      {
        index: 'simple-weapons',
        name: 'Simple Weapons',
        url: '/api/proficiencies/simple-weapons',
      },
      {
        index: 'saving-throw-wis',
        name: 'Saving Throw: WIS',
        url: '/api/proficiencies/saving-throw-wis',
      },
      {
        index: 'saving-throw-cha',
        name: 'Saving Throw: CHA',
        url: '/api/proficiencies/saving-throw-cha',
      },
    ],
    languages: [
      { index: 'common', name: 'Common', url: '/api/languages/common' },
      { index: 'infernal', name: 'Infernal', url: '/api/languages/infernal' },
    ],
    language_desc: 'You can speak, read, and write Common and Infernal.',
    intelligence: 14,
    charisma: 18,
    features: [
      {
        index: 'otherworldly-patron',
        name: 'Otherworldly Patron',
        url: '/api/features/otherworldly-patron',
      },
      {
        index: 'pact-magic',
        name: 'Pact Magic',
        url: '/api/features/pact-magic',
      },
      {
        index: 'eldritch-invocations',
        name: 'Eldritch Invocations',
        url: '/api/features/eldritch-invocations',
      },
      { index: 'pact-boon', name: 'Pact Boon', url: '/api/features/pact-boon' },
    ],
    equipment: [
      {
        index: 'crossbow-light',
        name: 'Crossbow, light',
        url: '/api/equipment/crossbow-light',
        quantity: 1,
      },
      {
        index: 'crossbow-bolt',
        name: 'Crossbow bolt',
        url: '/api/equipment/crossbow-bolt',
        quantity: 20,
      },
      {
        name: "Scholar's Pack",
        index: 'scholars-pack',
        quantity: 1,
        url: '/api/equipment/scholars-pack',
      },
      {
        index: 'dagger',
        name: 'Dagger',
        url: '/api/equipment/dagger',
        quantity: 2,
      },
      {
        index: 'leather-armor',
        name: 'Leather Armor',
        url: '/api/equipment/leather-armor',
        quantity: 1,
      },
      { index: 'wand', name: 'Wand', url: '/api/equipment/wand' },
      {
        index: 'quarterstaff',
        name: 'Quarterstaff',
        url: '/api/equipment/quarterstaff',
      },
    ],
    spells: [
      {
        index: 'eldritch-blast',
        name: 'Eldritch Blast',
        level: 0,
        url: '/api/spells/eldritch-blast',
      },
      {
        index: 'poison-spray',
        name: 'Poison Spray',
        level: 0,
        url: '/api/spells/poison-spray',
      },
      {
        index: 'spider-climb',
        name: 'Spider Climb',
        level: 2,
        url: '/api/spells/spider-climb',
      },
      {
        index: 'shatter',
        name: 'Shatter',
        level: 2,
        url: '/api/spells/shatter',
      },
    ],
    strength: 10,
    dexterity: 6,
    constitution: 7,
    wisdom: 17,
    level: 3,
    saving_throws: [
      { index: 'wis', name: 'WIS', url: '/api/ability-scores/wis' },
      { index: 'cha', name: 'CHA', url: '/api/ability-scores/cha' },
    ],
    hit_die: 8,
    constitution_modifier: -3,
    cantrips_known: 2,
    spells_known: 4,
    spell_slots_level_1: 0,
    spell_slots_level_2: 2,
    spell_slots_level_3: 0,
    spell_slots_level_4: 0,
    spell_slots_level_5: 0,
    spell_slots_level_6: 0,
    spell_slots_level_7: 0,
    spell_slots_level_8: 0,
    spell_slots_level_9: 0,
    ability_score_bonuses: 0,
    prof_bonus: 2,
    class_specific: {
      invocations_known: 2,
      mystic_arcanum_level_6: 0,
      mystic_arcanum_level_7: 0,
      mystic_arcanum_level_8: 0,
      mystic_arcanum_level_9: 0,
    },
    spellcasting: {
      level: 1,
      spellcasting_ability: {
        index: 'cha',
        name: 'CHA',
        url: '/api/ability-scores/cha',
      },
      info: [
        {
          name: 'Cantrips',
          desc: [
            'You know two cantrips of your choice from the warlock spell list. You learn additional warlock cantrips of your choice at higher levels, as shown in the Cantrips Known column of the Warlock table.',
          ],
        },
        {
          name: 'Spell Slots',
          desc: [
            'The Warlock table shows how many spell slots you have. The table also shows what the level of those slots is; all of your spell slots are the same level. To cast one of your warlock spells of 1st level or higher, you must expend a spell slot. You regain all expended spell slots when you finish a short or long rest.',
            'For example, when you are 5th level, you have two 3rd-level spell slots. To cast the 1st-level spell thunderwave, you must spend one of those slots, and you cast it as a 3rd-level spell.',
          ],
        },
        {
          name: 'Spells Known of 1st Level and Higher',
          desc: [
            'At 1st level, you know two 1st-level spells of your choice from the warlock spell list.',
            'The Spells Known column of the Warlock table shows when you learn more warlock spells of your choice of 1st level and higher. ',
            "A spell you choose must be of a level no higher than what's shown in the table's Slot Level column for your level. When you reach 6th level, for example, you learn a new warlock spell, which can be 1st, 2nd, or 3rd level.",
            'Additionally, when you gain a level in this class, you can choose one of the warlock spells you know and replace it with another spell from the warlock spell list, which also must be of a level for which you have spell slots.',
          ],
        },
        {
          name: 'Spellcasting Ability',
          desc: [
            'Charisma is your spellcasting ability for your warlock spells, so you use your Charisma whenever a spell refers to your spellcasting ability. In addition, you use your Charisma modifier when setting the saving throw DC for a warlock spell you cast and when making an attack roll with one.',
            'Spell save DC = 8 + your proficiency bonus + your Charisma modifier.',
            'Spell attack modifier = your proficiency bonus + your Charisma modifier.',
          ],
        },
        {
          name: 'Spellcasting Focus',
          desc: [
            'You can use an arcane focus as a spellcasting focus for your warlock spells.',
          ],
        },
      ],
    },
    experience_points: 887,
  },
];

module.exports = characters;
