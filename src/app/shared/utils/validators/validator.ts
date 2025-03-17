export class Validator{

  isString(value: any):boolean{
    return typeof value === 'string'
  }

  isNumber(value:any):boolean{
    return typeof value === 'number'
  }

  isObject(value:any):boolean{
    return typeof value === 'object'
  }

  isBoolean(value: any):boolean{
    return typeof value === 'boolean';
  }
}