import { Time } from '@angular/common';

export class Task {
  notification: any;
    // tslint:disable-next-line: max-line-length
    constructor(public title: string,
         public date: Date, 
         public timeStart:Time,
          public location:string, 
           public details: string,
           public track:string,
           public id:number,
           public status:boolean) {}
}
