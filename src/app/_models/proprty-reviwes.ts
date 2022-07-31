export class ProprtyReviwes {
    constructor(

   public     id: number,
    public    propertyId: number,
     public   reviewByUser: string,
     public   bookingId: number,
    public    comment: string,
     public   rating: number,
     public   created: Date,
     public   modified: Date,
     public   status: boolean
    ){}
}
