export class SubCategory {
    constructor(

    public    id: number,
     public   name: string,
     public   categoryId: number,
     public   description: string,
     public   created: Date,
     public   modified: Date,
    public    status: boolean
    ){}
}
