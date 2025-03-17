import { Validator } from '../validators/validator'
 
export class Formmatter{

  constructor(private readonly validator:Validator){}

  notEmptyStringOrDefault(value:any):string{
    return this.validator.isString(value) ? value : '-';
  }

  numberOrDefault(value:any):number{
    return this.validator.isNumber(value) ? value : 0;
  }


}
