import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  private http = inject(HttpClient);

  private jsonUrl = '../../assets/index.json';

  getJsonData() {
    return this.http.get(this.jsonUrl).pipe(
      map((r : any) => r.main)
    );
  }
}
