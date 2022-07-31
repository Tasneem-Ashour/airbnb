export class Disputes {

    constructor(
     public   id: number,
     public    propertyId: number,
     public    bookingId: number,
     public   userId: any,
     public   title: string,
     public   description: string,
        public created: Date,
        public  modified: Date,
        public  status: boolean
    ){}
}
