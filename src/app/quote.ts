import { Title } from "@angular/platform-browser";

export class Quote {
    content:string
    author:string
    name:string
    date:Date
    upVote:number
    downVote:number

    constructor( content:string, author:string, name:string, date:Date, upVote:number, downVote:number){ 

        this.content= content,
        this.author = author,
        this.name = name,
        this.date = date,
        this.upVote = upVote,
        this.downVote = downVote

    
    
    }

}
