export class Category {
    constructor(
        public id: number,

        public name: string,
        public description: string,
        public created: Date,
        public modified: Date,
        public status: boolean,
        ) { }
        
        arSubcategories:[]=[];
}
