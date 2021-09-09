import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }
  dvh_message: string[] = [];
  add(dvh_message: string){
    this.dvh_message.push(dvh_message);
  }
  clear(){
    this.dvh_message = [];
  }
}
