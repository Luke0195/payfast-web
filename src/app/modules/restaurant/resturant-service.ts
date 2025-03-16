import { RestaurantResponseData } from '@app/app/dtos/restaurant';
import { LoadRestaurantBySlug } from '@app/app/features/restaurant/load-restaurant-byslug'


class RestaurantService implements LoadRestaurantBySlug{

  async loadBySlug({ slug }: LoadRestaurantBySlug.Params): Promise<RestaurantResponseData> {
    const response = await fetch(`http://localhost:8080/api/restaurants?slug=${slug}`, {
      headers: {
        'ContentType': 'application/json',
        'Accept': 'application/json'
      },
      method: 'GET'
    })
    if(response.status !== 200) throw new Error('O ocorreu um erro ao processar essa requisição')
    return response.json();
   }
}

const restaurantService = new RestaurantService();
export { restaurantService }