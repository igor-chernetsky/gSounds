export const ADD_FAVORITE = 'ADD_FAVORITE';
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE';

export function addFavorite(item) {
  return {type: ADD_FAVORITE, item}
}

export function removeFavorite(id) {
  return {type: REMOVE_FAVORITE, id}
}
