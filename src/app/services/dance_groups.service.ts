import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {DanceGroup} from '../models/dance_group.model';

const baseUrl = 'http://localhost:8080/dance_groups'

@Injectable({
  providedIn: 'root'
})
export class Dance_groupsService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<DanceGroup[]> {
    return this.http.get<DanceGroup[]>(baseUrl);
  }

  get(id: number): Observable<DanceGroup> {
    return this.http.get<DanceGroup>(`${baseUrl}/${id}`);
  }

  create(data: DanceGroup): Observable<DanceGroup> {
    return this.http.post<DanceGroup>(baseUrl, data);
  }

  update(id: any, data: DanceGroup): Observable<DanceGroup> {
    return this.http.put<DanceGroup>(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }
}
