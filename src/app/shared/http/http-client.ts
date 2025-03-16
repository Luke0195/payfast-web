
interface HttpRequestParams  {
  url: string,
  method: string,
  headers?:any
  body?:any
}

interface HttpResponse {
  statusCode: number,
  body:any
}

interface HttpClient{
  request(params: HttpRequestParams):Promise<HttpResponse>
}

export class HttpClientService implements HttpClient{
  
  async request(params: HttpRequestParams): Promise<HttpResponse> {
    console.log(params.url);
    const response = await fetch(`${params.url}`, { 
      body: params.body !== null ? JSON.stringify(params.body) : null,
      headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      method: params.method ?? 'GET'
    })
    return {
      statusCode: response.status,
      body: response.json()
    }
  }
}

