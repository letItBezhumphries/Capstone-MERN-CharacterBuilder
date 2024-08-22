import {
  MONSTER_LIST_FAIL,
  TOGGLE_MONSTER_FAVORITE,
  SHOW_FAVORITE_MONSTERS,
  GET_NEXT_MONSTER_PAGE_REQUEST,
  GET_NEXT_MONSTER_PAGE_SUCCESS,
  MONSTER_LIST_SUCCESS,
  MONSTER_LIST_REQUEST,
} from '../constants/monstersConstants';

export const monsterListReducer = (state = { monsters: [] }, action) => {
  switch (action.type) {
    case MONSTER_LIST_REQUEST:
      return {
        loading: true,
        monsters: [],
      };
    case MONSTER_LIST_SUCCESS:
      return {
        loading: false,
        monsters: action.payload.results,
        next: action.payload.next,
        prev: action.payload.previous,
        // pages: action.payload.pages,
        // page: action.payload.page,
      };
    case GET_NEXT_MONSTER_PAGE_REQUEST:
      return {
        loading: true,
        ...state,
      };
    case GET_NEXT_MONSTER_PAGE_SUCCESS:
      return {
        loading: false,
        monsters: action.payload.monsters,
        next: action.payload.next,
        prev: action.payload.previous,
      };
    case SHOW_FAVORITE_MONSTERS:
      return {
        loading: false,
        favorites: state.monsters.filter((monster) => monster.isFav === true),
        ...state,
      };
    case TOGGLE_MONSTER_FAVORITE:
      let monsterIndex = state.monsters.findIndex(
        (monster) => monster.slug === action.payload
      );
      let favStatus = !state.monsters[monsterIndex].isFav;

      let updatedMonsters = state.monsters.map((monster, index) => {
        if (monster.slug === action.payload) {
          return {
            ...monster,
            isFav: favStatus,
          };
        }
        return monster;
      });

      return {
        monsters: updatedMonsters,
        ...state,
      };
    case MONSTER_LIST_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
