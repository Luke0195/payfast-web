
export interface AddRestaurant{
  add(params: AddRestaurant.Params):Promise<void>
}

export  namespace AddRestaurant{
  export type Params = {
    name: string,
    slug: string,
    description: string,
    avatarImageUrl: string,
    coverImageUrl: string;
  }
}