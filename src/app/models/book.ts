import { Author } from "./author";
import { Customer } from "./customer";

export class Book{
    id:number;
    title:string;

    author:Author;
    authorId:number;

    customerBorrower:Customer;
    borrowerId:number;

    publisher:string;
    pageNumber:number;
    publicationDate:Date;
}