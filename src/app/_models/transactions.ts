export class Transactions {
  constructor(
    public id: number,
    public propertyId: number,
    public recieverId: any,
    public bookingId: number,
    public siteFrees: number,
    public amount: number,
    public transferOn: number,
    public currencyId: number,
    public promoCodeId: number,
    public discoundAmt: number,
    public created: null,
    public modified: Date,
    public status: boolean
  ) {}
}
