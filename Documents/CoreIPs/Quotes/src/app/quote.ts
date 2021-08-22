export class Quote {
    toggleQuote:Boolean;
    constructor(public quotes:string,public author:string,public submittedBy:string,public upvote: number,public downvote:number,public datePosted:Date){
                    this.toggleQuote=false;
                }
}
