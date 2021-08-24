import { FavoritesService } from '../services/favorites';

export default ({ app: { $axios } }, inject) => {
  const favorites = new FavoritesService($axios);

  inject('favorites', favorites);
}
