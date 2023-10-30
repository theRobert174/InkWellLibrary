import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CloudService {

  private http = inject(HttpClient)

  constructor() { }

  md(){
    return this.http.get(`https://inkwelllibrary-37c85-default-rtdb.firebaseio.com/An%20Introduction%20to%20Philosophy/dedication.json`)
  }
}
