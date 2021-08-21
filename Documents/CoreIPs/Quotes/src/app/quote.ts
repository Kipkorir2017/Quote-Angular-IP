export class Quote {
    toggleQuote:Boolean;
    constructor(public quotes:string,public author:string,public submittedBy:string,public datePosted:Date){
                    this.toggleQuote=false;
                }
}
