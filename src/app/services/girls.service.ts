import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Girl } from '../models/girl.model';

const baseUrl = 'http://localhost:8080/girls'

@Injectable({
  providedIn: 'root'
})
export class GirlsService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Girl[]> {
    return this.http.get<Girl[]>(baseUrl);
  }

  get(id: number): Observable<Girl> {
    return this.http.get<Girl>(`${baseUrl}/${id}`);
  }

  create(data: Girl): Observable<Girl> {
    return this.http.post<Girl>(baseUrl, data);
  }

  update(id: any, data: Girl): Observable<Girl> {
    return this.http.put<Girl>(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }
}
