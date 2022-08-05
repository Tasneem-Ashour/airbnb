import { Arusers } from "./arusers";
import { Booking } from "./booking";
import { Category } from "./category";
import { Cities } from "./cities";
import { Countries } from "./countries";
import { Currencies } from "./currencies";
import { HostProperties } from "./host-properties";
import { PropertyImages } from "./property-images";
import { PropertyTypes } from "./property-types";
import { ProprtyReviwes } from "./proprty-reviwes";
import { RoomType } from "./room-type";

export class PropetyById {
    constructor(){}

        id:number= 0;
        name:string= '';
        userId:string='';
        description: string='';
        propertyTypeId: number=0;
        roomTypeId: number=0;
        categoryId: number=0;
        countryId: number=0;
        stateId: number=0;
        cityId: number=0;
        address: string='';
        latitude: string='';
        longitude: string='';
        bedroomCount: number=0;
        bedCount: number=0;
        bathroomCount: number=0;
        accomodatesCount: number=0;
        availabilityType:boolean= true;
        startDate:Date=new Date;
        endDate: Date=new Date   ;
             price: number=0;
        currencyId: number=0;
        priceType: number=0;
        minimumStay: string='';
        minimumStayType: number=0;
        refundType:boolean= true;
        created: Date=new Date;
        modified: Date=new Date;
        status:boolean= true;
        arPropertyImages: PropertyImages []=[]  ;
        arPropertyReviews: ProprtyReviwes  []=[];
     //   arTransactions: [];
        arBookings: Booking[]=[];
       // arDisputes: [];
        category: Category|null=null;
        city:Cities|null=null;
        country: Countries|null=null;
        currency: Currencies|null=null;
        propertyType: PropertyTypes[]=[];
        roomType:RoomType[]=[];
        user:Arusers|null=null;
    
}
