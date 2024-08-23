import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userId: '',
  name: '',
  index: '',
  traits: [],
  class_type: '',
  race: '',
  strength: 0,
  dexterity: 0,
  constitution: 0,
  intelligence: 0,
  wisdom: 0,
  charisma: 0,
  proficiencies: [],
  equipment: [],
  skills: [],
  class_specific: {},
  hit_points: {
    max: 0,
    current: 0,
  },
  ability_score_bonuses: {},
};

const characterFormStepSlice = createSlice({
  name: 'character-form-step',
  initialState: initialState,
  reducers: {
    addNameStep(state, action) {
      return {
        name: action.payload,
        ...state,
      };
    },
    updateNameStep(state, action) {
      return {
        name: action.payload,
        ...state,
      };
    },
    addRaceStep(state, action) {
      const {
        race,
        traits,
        ability_score_bonuses,
        strength,
        dexterity,
        constitution,
        intelligence,
        wisdom,
        charisma,
      } = action.payload;

      return {
        race: race,
        traits: [...state.traits, ...traits],
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
    updateRaceStep(state, action) {
      const {
        race,
        traits,
        strength,
        dexterity,
        constitution,
        intelligence,
        wisdom,
        charisma,
      } = action.payload;
      return {
        race: race,
        traits: [...state.traits, ...traits],
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
    // addClassStep(state, action) {
    //   const {
    //     class_type,
    //     equipment,
    //     skills,
    //     class_specific,
    //     traits,
    //     ability_score_bonuses,
    //     proficiencies,
    //     strength,
    //     dexterity,
    //     constitution,
    //     intelligence,
    //     wisdom,
    //     charisma,
    //   } = action.payload;
    //   return {
    //     class_type: c
    //     ...state
    //   };
    // },

    // addAbilitiesStep(state, action) {
    //   const {
    //     race,
    //     traits,
    //     ability_score_bonuses,
    //     proficiencies,
    //     strength,
    //     dexterity,
    //     constitution,
    //     intelligence,
    //     wisdom,
    //     charisma,
    //   } = action.payload;
    //   return {};
    // },
  },
});

export const {
  addNameStep,
  addRaceStep,
  addClassStep,
  // addAbilitiesStep,
  // createCharacter,
} = characterFormStepSlice.actions;
export const characterFormStepReducer = characterFormStepSlice.reducer;
