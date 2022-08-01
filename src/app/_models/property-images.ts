export class PropertyImages {
  constructor(
    public id: number,
    public propertyId: number,
    public addedByUser: any,
    public image: string,
    public created: Date,
    public status: boolean
  ) {}
}
