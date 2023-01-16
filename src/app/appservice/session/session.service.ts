import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor() { }


  setsession(name:any,value:any){
    sessionStorage.setItem(name,value)
  }

  getsession(name:any){
    return sessionStorage.getItem(name)
  }

  clearparticularsession(name:any){
    sessionStorage.removeItem(name)
  }

  clearallsession(){
    sessionStorage.clear()
  }

  clearallsessionandlocal(){
    this.clearallsession()
    this.clearalllocal()
  }

  clearalllocal(){
    localStorage.clear()
  }
}
