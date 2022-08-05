export class HostProperties {
  constructor() {}
  id: number = 0;
  name: string = '';
  userId: number = 0;
  description: string = '';
  propertyTypeId: number = 0;
  roomTypeId: number = 0;
  categoryId: number = 0;
  // subcategoryId: number = 0;
  countryId: number = 0;
  stateId: any;
  cityId: number = 0;
  address: string = '';
  latitude: string = '';
  longitude: string = '';
  bedroomCount: number = 0;
  bedCount: number = 0;
  bathroomCount: number = 0;
  accomodatesCount: number = 0;
  availabilityType: boolean = true;
  // wrwq
  price: number = 0;
  currencyId: number = 0;
  priceType: any;
  // minimumStay: number = 0;
  // minimumStayType: any;
  refundType: boolean = true;
  created: Date = new Date();
  modified: Date = new Date();
  status: boolean = true;
  Url: string = '';
}
