export class FavoritesService {
  constructor(axios) {
    this.$axios = axios;
  }

  async getFavorites () {
    return this.$axios.$get(
      'https://lh-real-estates-challenge-api.herokuapp.com/real-estates'
    )
    .then((res) => this.mapFavoriteItems(res));
  }

  mapFavoriteItems(response) {
    const { data, included } = response;

    if (!Array.isArray(data)) {
      return response;
    }

    return data.map((favorite) => {
      const id = favorite.id;
      const name = favorite.attributes.name;
      const items = this.getFavoriteItems(favorite, included);

      return { id, name, items };
    });
  }

  getFavoriteItems(favorite, items) {
    const realEstateIds = !!favorite.attributes ? favorite.attributes.real_estate_ids : null;

    if (
      !Array.isArray(items) ||
      !Array.isArray(realEstateIds) ||
      !realEstateIds.length
    ) {
      return [];
    }

    return items.filter((item) => realEstateIds.indexOf(+item.id) > -1);
  }
}
