export class FavoritesService {
  constructor(axios) {
    this.$axios = axios;
  }

  async getFavorites () {
    return this.$axios.$get(
      'https://lh-real-estates-challenge-api.herokuapp.com/real-estates'
    );
  }
}
