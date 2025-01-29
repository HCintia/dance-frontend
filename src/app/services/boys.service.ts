import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Boy} from '../models/boy.model';

const baseUrl = 'http://localhost:8080/boys'

@Injectable({
  providedIn: 'root'
})
export class BoysService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Boy[]> {
    return this.http.get<Boy[]>(baseUrl);
  }

  get(id: number): Observable<Boy> {
    return this.http.get<Boy>(`${baseUrl}/${id}`);
  }

  create(data: Boy): Observable<Boy> {
    return this.http.post<Boy>(baseUrl, data);
  }

  update(id: any, data: Boy): Observable<Boy> {
    return this.http.put<Boy>(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }
}
