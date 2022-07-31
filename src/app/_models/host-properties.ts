export class HostProperties {

    constructor(
    public    name: string,
     public   description: string,
    public    propertyTypeId: number,
    public    roomTypeId: number,
     public   categoryId: number,
    public    subcategoryId: number,
     public   countryId: number,
     public   stateId: any,
      public  cityId: number,
    public    address: string,
    public    latitude: string,
    public   longitude: string,
      public  bedroomCount: number,
      public  bedCount: number,
     public   bathroomCount: number,
      public  accomodatesCount: number,
     public   availabilityType: boolean,
     public   startDate: Date,
      public  endDate: Date,
      public  price: number,
      public  currencyId: number,
      public  priceType: any,
      public  minimumStay: number,
       public minimumStayType: any,
       public refundType: boolean,
      public  created: any,
      public  modified: any,
      public  status: boolean
    ){}
}
