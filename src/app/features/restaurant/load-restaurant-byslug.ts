import { RestaurantResponseData } from '@app/app/dtos/restaurant'


export interface LoadRestaurantBySlug{
  loadBySlug(params: LoadRestaurantBySlug.Params):Promise<RestaurantResponseData>
}

export namespace LoadRestaurantBySlug{
  export type Params ={
    slug: string
  }
}
