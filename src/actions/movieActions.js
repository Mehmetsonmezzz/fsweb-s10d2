export const DELETE_MOVIE = "DELETE_MOVIE";
export const MOVIES = "MOVIES";

export const deleteMovie = (id) => {
  return { type: DELETE_MOVIE, payload: id };
};

export const movies = () => {
  return { type: MOVIES };
};
