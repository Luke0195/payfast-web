import { RestaurantResponseData } from '@app/app/dtos/restaurant';
import { LoadRestaurantBySlug } from '@app/app/features/restaurant/load-restaurant-byslug'
import { HttpClientService } from '@app/app/shared/http/http-client';


class RestaurantService implements LoadRestaurantBySlug{

  constructor(private readonly httpClientService: HttpClientService){ }

  async loadBySlug({ slug }: LoadRestaurantBySlug.Params): Promise<RestaurantResponseData> {
    const response = await this.httpClientService.request({ url: `http://localhost:8080/api/restaurants?slug=${slug}`, method: 'GET'});
    if(response.statusCode !== 200) throw new Error('O ocorreu um erro ao processar essa requisição')
    console.log(response.body);
    return response.body
   }
}

const restaurantService = new RestaurantService(new HttpClientService());
export { restaurantService }