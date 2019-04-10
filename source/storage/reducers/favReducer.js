import {ADD_FAVORITE, REMOVE_FAVORITE} from '../actions/favActions';
import {getDefaultSounds} from '../../data/collections';

const initialState = {
  favorites: getDefaultSounds()
};

export default function favoritesReducer(state = initialState, action) {
  switch(action.type) {
    case ADD_FAVORITE:
      return Object.assign({}, state, {
        favorites: [
          ...state.favorites,
          action.item
        ]
      });
    case REMOVE_FAVORITE:
      return Object.assign({}, state, {
        favorites: state.favorites.filter(f => f.id !== action.id)
      });
  }
  return state;
}