export class Quote {
    toggleDetails:boolean;
    constructor(public quote:string,
                public author:string,
                public submittedBy:string,
                public upvote:number,
                public downvote:number,
                public datePosted:Date){
                    this.toggleDetails=false;
                }
}
