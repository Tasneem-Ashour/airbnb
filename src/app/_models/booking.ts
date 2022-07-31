export class Booking {
    constructor(
      public  id: number,
        public propertyId: number,
       public userId: any,
       public  checkInDate: Date,
        public checkOutDate: Date,
        public pricePerDay: number,
        public pricePerStay: number,
        public taxPaid: number,
        public siteFees: number,
        public amountPaid: number,
        public isRefund: boolean,
        public cancelDate:  Date,
        public refundPaid: number,
        public bookingDate: Date,
        public created: Date,
        public modified: Date,
        public status: boolean

    ){}
}
