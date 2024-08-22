import { createSlice } from '@reduxjs/toolkit';

const characterFormSlice = createSlice({
  name: 'character-form',
  initialState: {
    userId: '',
    name: '',
    index: '',
    traits: [],
    class_type: '',
    level: 1,
    gender: '',
    age: 0,
    age_desc: '',
    race: '',
    alignment_desc: '',
    alignment: '',
    experience_points: 0,
    strength: 0,
    dexterity: 0,
    constitution: 0,
    intelligence: 0,
    wisdom: 0,
    charisma: 0,
    size: '',
    size_desc: '',
    proficiencies: [],
    languages: [],
    language_desc: '',
    equipment: [],
    saving_throws: [],
    skills: [],
    class_specific: {},
    armor_class: 0,
    speed_desc: '',
    speed: {
      walk: 0,
    },
    hit_die: 0,
    constitution_modifier: 0,
    hit_points: {
      max: 0,
      current: 0,
    },
    ability_score_bonuses: {},
    prof_bonus: {},
    features: [],
    spells: [],
  },
  reducers: {
    setNameStep(state, action) {
      return {
        name: action.payload.name,
        ...state,
      };
    },
    setRaceStep(state, action) {
      const {
        race,
        traits,
        languages,
        language_desc,
        age_desc,
        ability_score_bonuses,
        speed,
        speed_desc,
        // saving_throws,
        size_desc,
        proficiencies,
        strength,
        dexterity,
        constitution,
        intelligence,
        wisdom,
        charisma,
        alignment_desc,
        alignment,
      } = action.payload;

      return {
        race: race,
        traits: [...state.traits, ...traits],
        languages: [...state.languages, ...languages],
        language_desc: language_desc,
        age_desc: age_desc,
        speed: {
          ...state.speed,
          ...speed,
        },
        speed_desc: speed_desc,
        // saving_throws: [...state.saving_throws, ...saving_throws],
        size_desc: size_desc,
        // state.proficiencies: [...state.proficiencies, ...proficiencies],
        strength: state.strength + strength,
        dexterity: state.dexterity + dexterity,
        constitution: state.constitution + constitution,
        intelligence: state.intelligence + intelligence,
        wisdom: state.wisdom + wisdom,
        charisma: state.charisma + charisma,
        alignment_desc: alignment_desc,
        ...state,
      };
    },

    // setClassStep(state, action) {
    //   return {};
    // },

    // setAbilitiesStep(state, action) {
    //   return {};
    // },
  },
});

export const { setNameStep, setRaceStep } = characterFormSlice.actions;
export const characterFormReducer = characterFormSlice.reducer;
