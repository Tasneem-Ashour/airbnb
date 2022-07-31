export class PromoCode {
    constructor(
     public   id: number,
     public    title: string,
     public  description: string,
     public code: number,
     public discount: number,
        public created: Date,
        public  modified: Date,
        public  status: boolean
    ){}
}
