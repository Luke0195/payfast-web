export interface DomainMapper<Input, Output>{
  mapToDomain(data:Input):Output;
}

export interface PersistMapper<Input, Output>{
  mapToPersist(data:Input):Output
}