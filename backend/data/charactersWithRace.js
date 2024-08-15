const characters = [
  {
    id: '17fcab197b5a443fbb188d861933a861',
    img: 'https://loremflickr.com/640/480/druid?lock=8908187348500480',
    userId: 'f57dfc7534b34f15b750ee11bbf3f520',
    name: 'Felicity Leuschke',
    gender: 'Omnigender',
    class_type: 'druid',
    age: 30,
    hit_points: 20,
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
    proficiencies: [],
    languages: [
      { index: 'common', name: 'Common', url: '/api/languages/common' },
      { index: 'elvish', name: 'Elvish', url: '/api/languages/elvish' },
    ],
    language_desc:
      'You can speak, read, and write Common and one extra language of your choice. Humans typically learn the languages of other peoples they deal with, including obscure dialects. They are fond of sprinkling their speech with words borrowed from other tongues: Orc curses, Elvish musical expressions, Dwarvish military phrases, and so on.',
    strength: 1,
    dexterity: 1,
    constitution: 1,
    intelligence: 1,
    wisdom: 1,
    charisma: 1,
  },
  {
    id: '77487dabb99c4ae2827970d24ce5a4b9',
    img: 'https://loremflickr.com/640/480/rogue?lock=4447791795404800',
    userId: 'f57dfc7534b34f15b750ee11bbf3f520',
    name: 'Ferne Kuhn',
    gender: 'Demigender',
    class_type: 'rogue',
    age: 46,
    hit_points: 23,
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
    proficiencies: [],
    languages: [
      { index: 'common', name: 'Common', url: '/api/languages/common' },
      { index: 'gnomish', name: 'Gnomish', url: '/api/languages/gnomish' },
    ],
    language_desc:
      'You can speak, read, and write Common and one extra language of your choice. Humans typically learn the languages of other peoples they deal with, including obscure dialects. They are fond of sprinkling their speech with words borrowed from other tongues: Orc curses, Elvish musical expressions, Dwarvish military phrases, and so on.',
    strength: 1,
    dexterity: 1,
    constitution: 1,
    intelligence: 1,
    wisdom: 1,
    charisma: 1,
  },
  {
    id: 'e6f616c972914204a735bc44b8bd2dcd',
    img: 'https://loremflickr.com/640/480/cleric?lock=6568528150790144',
    userId: 'd20f715a96304c0f9a3b8722b052648a',
    name: 'Abbie Trantow-Ernser',
    gender: 'Genderqueer',
    class_type: 'cleric',
    age: 18,
    hit_points: 19,
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
    proficiencies: [],
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
    strength: 1,
    dexterity: 1,
    constitution: 1,
    intelligence: 1,
    wisdom: 1,
    charisma: 1,
  },
  {
    id: '0c18cda4709043398ba6fd371f00fc89',
    img: 'https://loremflickr.com/640/480/rogue?lock=8233124141989888',
    userId: '4dae82ef90104b2eba57628e5efd7e21',
    name: 'Missouri Schmeler',
    gender: 'Genderflux',
    class_type: 'rogue',
    age: 52,
    hit_points: 34,
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
    proficiencies: [],
    languages: [
      { index: 'common', name: 'Common', url: '/api/languages/common' },
      { index: 'sylvan', name: 'Sylvan', url: '/api/languages/sylvan' },
    ],
    language_desc:
      'You can speak, read, and write Common and one extra language of your choice. Humans typically learn the languages of other peoples they deal with, including obscure dialects. They are fond of sprinkling their speech with words borrowed from other tongues: Orc curses, Elvish musical expressions, Dwarvish military phrases, and so on.',
    strength: 1,
    dexterity: 1,
    constitution: 1,
    intelligence: 1,
    wisdom: 1,
    charisma: 1,
  },
  {
    id: '9c6165ea247c43c7ba0eac81da756ed1',
    img: 'https://loremflickr.com/640/480/paladin?lock=7609078547218432',
    userId: 'fe0007f2bbe3438c9b8130f2b92adede',
    name: 'Blaise Orn',
    gender: 'Transexual female',
    class_type: 'paladin',
    age: 21,
    hit_points: 29,
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
    proficiencies: [],
    languages: [
      { index: 'common', name: 'Common', url: '/api/languages/common' },
      { index: 'infernal', name: 'Infernal', url: '/api/languages/infernal' },
    ],
    language_desc:
      'You can speak, read, and write Common and one extra language of your choice. Humans typically learn the languages of other peoples they deal with, including obscure dialects. They are fond of sprinkling their speech with words borrowed from other tongues: Orc curses, Elvish musical expressions, Dwarvish military phrases, and so on.',
    strength: 1,
    dexterity: 1,
    constitution: 1,
    intelligence: 1,
    wisdom: 1,
    charisma: 1,
  },
  {
    id: '4b3b4958ed7f488c8476d149d51d7597',
    img: 'https://loremflickr.com/640/480/fighter?lock=8625988384587776',
    userId: '53b0b4a8da8643e2966e13ab91ef5428',
    name: 'Kaden Bartoletti',
    gender: 'male',
    class_type: 'fighter',
    age: 78,
    hit_points: 12,
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
    proficiencies: [],
    languages: [
      { index: 'common', name: 'Common', url: '/api/languages/common' },
      { index: 'infernal', name: 'Infernal', url: '/api/languages/infernal' },
    ],
    language_desc: 'You can speak, read, and write Common and Infernal.',
    intelligence: 1,
    charisma: 2,
  },
  {
    id: '9b1e2de6713b4ba7b602081eed36ed56',
    img: 'https://loremflickr.com/640/480/druid?lock=1939276266733568',
    userId: '53b0b4a8da8643e2966e13ab91ef5428',
    name: 'Sidney Rempel',
    gender: 'male',
    class_type: 'druid',
    age: 37,
    hit_points: 25,
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
    proficiencies: [],
    languages: [
      { index: 'common', name: 'Common', url: '/api/languages/common' },
      { index: 'infernal', name: 'Infernal', url: '/api/languages/infernal' },
    ],
    language_desc: 'You can speak, read, and write Common and Infernal.',
    intelligence: 1,
    charisma: 2,
  },
  {
    id: 'ee61f27697d049d5b8c2d11220be1ee6',
    img: 'https://loremflickr.com/640/480/bard?lock=1325166695022592',
    userId: 'd20f715a96304c0f9a3b8722b052648a',
    name: 'Emie Berge',
    gender: 'Female to male transsexual man',
    class_type: 'bard',
    age: 57,
    hit_points: 31,
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
    proficiencies: [],
    languages: [
      { index: 'common', name: 'Common', url: '/api/languages/common' },
      { index: 'draconic', name: 'Draconic', url: '/api/languages/draconic' },
    ],
    language_desc:
      'You can speak, read, and write Common and Draconic. Draconic is thought to be one of the oldest languages and is often used in the study of magic. The language sounds harsh to most other creatures and includes numerous hard consonants and sibilants.',
    strength: 2,
    charisma: 1,
  },
  {
    id: '459c3d7ceb414731996fff510f6fa76d',
    img: 'https://loremflickr.com/640/480/rogue?lock=4953745077043200',
    userId: '53b0b4a8da8643e2966e13ab91ef5428',
    name: 'Baylee Howell',
    gender: 'male',
    class_type: 'rogue',
    age: 101,
    hit_points: 15,
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
    proficiencies: [],
    languages: [
      { index: 'common', name: 'Common', url: '/api/languages/common' },
      { index: 'gnomish', name: 'Gnomish', url: '/api/languages/gnomish' },
    ],
    language_desc:
      'You can speak, read, and write Common and Gnomish. The Gnomish language, which uses the Dwarvish script, is renowned for its technical treatises and its catalogs of knowledge about the natural world.',
    intelligence: 2,
  },
  {
    id: 'a76724093a704bbd9c986e89616d2fa2',
    img: 'https://loremflickr.com/640/480/sorcerer?lock=7022263975018496',
    userId: '85bee1f005694d2c851278c2523d15b4',
    name: 'Christ Orn',
    gender: 'Man',
    class_type: 'sorcerer',
    age: 96,
    hit_points: 14,
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
    charisma: 2,
    wisdom: 1,
  },
  {
    id: '385ef7ed49514c5ba02729932ec51c8a',
    img: 'https://loremflickr.com/640/480/warlock?lock=464118685368320',
    userId: 'd890f5e2b2c54aa6a3b1848e3dfc4722',
    name: 'Shaniya Hills',
    gender: 'male',
    class_type: 'warlock',
    age: 74,
    hit_points: 31,
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
    proficiencies: [],
    languages: [
      { index: 'common', name: 'Common', url: '/api/languages/common' },
      { index: 'infernal', name: 'Infernal', url: '/api/languages/infernal' },
    ],
    language_desc: 'You can speak, read, and write Common and Infernal.',
    intelligence: 1,
    charisma: 2,
  },
  {
    id: '27f0f9af8504430dba7c500e11b2b6fe',
    img: 'https://loremflickr.com/640/480/druid?lock=6774574584692736',
    userId: 'a94d04c307144149adab97006a760d99',
    name: 'Anika Stracke',
    gender: 'female',
    class_type: 'druid',
    age: 34,
    hit_points: 17,
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
    charisma: 2,
    intelligence: 1,
  },
  {
    id: 'f4ce7b19debb4fc6a41156dce97bb1e0',
    img: 'https://loremflickr.com/640/480/barbarian?lock=5344754250285056',
    userId: 'b60651d629444b56bb025d4df571a6ee',
    name: 'Maci Pfeffer',
    gender: 'male',
    class_type: 'barbarian',
    age: 62,
    hit_points: 20,
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
    proficiencies: [],
    languages: [
      { index: 'common', name: 'Common', url: '/api/languages/common' },
      { index: 'halfling', name: 'Halfling', url: '/api/languages/halfling' },
    ],
    language_desc:
      "You can speak, read, and write Common and Halfling. The Halfling language isn't secret, but halflings are loath to share it with others. They write very little, so they don't have a rich body of literature. Their oral tradition, however, is very strong. Almost all halflings speak Common to converse with the people in whose lands they dwell or through which they are traveling.",
    dexterity: 2,
  },
  {
    id: 'b6c5972468a94300ae0e884062f29b7c',
    img: 'https://loremflickr.com/640/480/wizard?lock=8354091119935488',
    userId: 'a94d04c307144149adab97006a760d99',
    name: 'Marina Wehner',
    gender: 'male',
    class_type: 'wizard',
    age: 107,
    hit_points: 24,
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
    proficiencies: [],
    languages: [
      { index: 'common', name: 'Common', url: '/api/languages/common' },
      { index: 'halfling', name: 'Halfling', url: '/api/languages/halfling' },
    ],
    language_desc:
      "You can speak, read, and write Common and Halfling. The Halfling language isn't secret, but halflings are loath to share it with others. They write very little, so they don't have a rich body of literature. Their oral tradition, however, is very strong. Almost all halflings speak Common to converse with the people in whose lands they dwell or through which they are traveling.",
    dexterity: 2,
  },
  {
    id: 'c8f3eed189964cec8aca613ce34417b4',
    img: 'https://loremflickr.com/640/480/paladin?lock=6660337084399616',
    userId: '4dae82ef90104b2eba57628e5efd7e21',
    name: 'Kennedi Luettgen-Schimmel',
    gender: 'Cis man',
    class_type: 'paladin',
    age: 62,
    hit_points: 28,
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
    proficiencies: [],
    languages: [
      { index: 'common', name: 'Common', url: '/api/languages/common' },
      { index: 'infernal', name: 'Infernal', url: '/api/languages/infernal' },
    ],
    language_desc: 'You can speak, read, and write Common and Infernal.',
    intelligence: 1,
    charisma: 2,
  },
  {
    id: '23be0c74691d4df3a3bde0f576781a79',
    img: 'https://loremflickr.com/640/480/sorcerer?lock=811472913432576',
    userId: 'a94d04c307144149adab97006a760d99',
    name: 'Lionel Bergstrom',
    gender: 'female',
    class_type: 'sorcerer',
    age: 166,
    hit_points: 18,
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
    proficiencies: [],
    languages: [
      { index: 'common', name: 'Common', url: '/api/languages/common' },
      { index: 'gnomish', name: 'Gnomish', url: '/api/languages/gnomish' },
    ],
    language_desc:
      'You can speak, read, and write Common and Gnomish. The Gnomish language, which uses the Dwarvish script, is renowned for its technical treatises and its catalogs of knowledge about the natural world.',
    intelligence: 2,
  },
  {
    id: '0158feb28e894555b1b261932b704610',
    img: 'https://loremflickr.com/640/480/ranger?lock=2788320759250944',
    userId: '85bee1f005694d2c851278c2523d15b4',
    name: 'Dorothea Smith',
    gender: 'M2F',
    class_type: 'ranger',
    age: 16,
    hit_points: 18,
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
    ],
    languages: [
      { index: 'common', name: 'Common', url: '/api/languages/common' },
      { index: 'orc', name: 'Orc', url: '/api/languages/orc' },
    ],
    language_desc:
      'You can speak, read, and write Common and Orc. Orc is a harsh, grating language with hard consonants. It has no script of its own but is written in the Dwarvish script.',
    strength: 2,
    constitution: 1,
    charisma: 1,
  },
  {
    id: 'ffe26e7c74ea49618772b94222560edd',
    img: 'https://loremflickr.com/640/480/monk?lock=2174719186960384',
    userId: '85bee1f005694d2c851278c2523d15b4',
    name: 'Donnie Rosenbaum',
    gender: 'Gender questioning',
    class_type: 'monk',
    age: 29,
    hit_points: 15,
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
    proficiencies: [],
    languages: [
      { index: 'common', name: 'Common', url: '/api/languages/common' },
      { index: 'draconic', name: 'Draconic', url: '/api/languages/draconic' },
    ],
    language_desc:
      'You can speak, read, and write Common and Draconic. Draconic is thought to be one of the oldest languages and is often used in the study of magic. The language sounds harsh to most other creatures and includes numerous hard consonants and sibilants.',
    strength: 2,
    charisma: 1,
  },
  {
    id: '1fdf169c1829448aaddd6e461a9631db',
    img: 'https://loremflickr.com/640/480/fighter?lock=7959325995696128',
    userId: 'd890f5e2b2c54aa6a3b1848e3dfc4722',
    name: 'Tanner Gerlach',
    gender: 'male',
    class_type: 'fighter',
    age: 389,
    hit_points: 28,
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
    ],
    languages: [
      { index: 'common', name: 'Common', url: '/api/languages/common' },
      { index: 'elvish', name: 'Elvish', url: '/api/languages/elvish' },
    ],
    language_desc:
      'You can speak, read, and write Common and Elvish. Elvish is fluid, with subtle intonations and intricate grammar. Elven literature is rich and varied, and their songs and poems are famous among other races. Many bards learn their language so they can add Elvish ballads to their repertoires.',
    dexterity: 2,
    wisdom: 1,
  },
  {
    id: '75e7060d2a7548ec9de2dd4b30eab7e6',
    img: 'https://loremflickr.com/640/480/fighter?lock=8050042342473728',
    userId: '4dae82ef90104b2eba57628e5efd7e21',
    name: 'Mellie Leuschke',
    gender: 'Demigender',
    class_type: 'fighter',
    age: 569,
    hit_points: 17,
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
    ],
    languages: [
      { index: 'common', name: 'Common', url: '/api/languages/common' },
      { index: 'elvish', name: 'Elvish', url: '/api/languages/elvish' },
    ],
    language_desc:
      'You can speak, read, and write Common and Elvish. Elvish is fluid, with subtle intonations and intricate grammar. Elven literature is rich and varied, and their songs and poems are famous among other races. Many bards learn their language so they can add Elvish ballads to their repertoires.',
    dexterity: 2,
    wisdom: 1,
  },
  {
    id: 'd9e3714c3fc2462ea16ea994fdb629d0',
    img: 'https://loremflickr.com/640/480/paladin?lock=5348736586743808',
    userId: 'f414a1c903014ff0b3aeed911f37d4b4',
    name: 'Magnus Zboncak',
    gender: 'male',
    class_type: 'paladin',
    age: 603,
    hit_points: 18,
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
    ],
    languages: [
      { index: 'common', name: 'Common', url: '/api/languages/common' },
      { index: 'elvish', name: 'Elvish', url: '/api/languages/elvish' },
    ],
    language_desc:
      'You can speak, read, and write Common and Elvish. Elvish is fluid, with subtle intonations and intricate grammar. Elven literature is rich and varied, and their songs and poems are famous among other races. Many bards learn their language so they can add Elvish ballads to their repertoires.',
    dexterity: 2,
    wisdom: 1,
  },
  {
    id: '84fc55f044be4f0789b70f8f23769da4',
    img: 'https://loremflickr.com/640/480/bard?lock=5482154662297600',
    userId: 'd20f715a96304c0f9a3b8722b052648a',
    name: 'London Bailey',
    gender: 'Intersex woman',
    class_type: 'bard',
    age: 498,
    hit_points: 17,
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
    ],
    languages: [
      { index: 'common', name: 'Common', url: '/api/languages/common' },
      { index: 'elvish', name: 'Elvish', url: '/api/languages/elvish' },
    ],
    language_desc:
      'You can speak, read, and write Common and Elvish. Elvish is fluid, with subtle intonations and intricate grammar. Elven literature is rich and varied, and their songs and poems are famous among other races. Many bards learn their language so they can add Elvish ballads to their repertoires.',
    dexterity: 2,
    wisdom: 1,
  },
];

module.exports = characters;
