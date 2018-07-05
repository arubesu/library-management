import { InMemoryDbService } from "angular-in-memory-web-api";

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const books = [
            { id: 1, title: "PhD", author: null, authorId: 1, customerBorrower: null, borrowerId: null, publisher: "Sleek", pageNumber: 300, publicationDate:"2016-01-05" }
            // { id: 2, title: "Global Markets Architect", author: "Eliane", authorId: 2, customerBorrower: "Carolanne", borrowerId: null, publisher: "Gorgeous", pageNumber: 200, publicationDate: "2016-01-05" },
            // { id: 3, title: "Future Brand Architect", author: "Reanna", authorId: 3, customerBorrower: "Raquel", borrowerId: null, publisher: "Incredible", pageNumber: 125, publicationDate: "1980-02-05" },
            // { id: 4, title: "Future Interactions Representative", author: "Deshaun", authorId: 4, customerBorrower: "Bradly", borrowerId: null, publisher: "Handmade", pageNumber: 256, publicationDate: "2000-08-05" },
            // { id: 5, title: "Dynamic Operations Executive", author: "Donny", authorId: 5, customerBorrower: "Audrey", borrowerId: null, publisher: "Gorgeous", pageNumber: 126, publicationDate: "2011-20-05" }
        ];
        return {books};
    }
}