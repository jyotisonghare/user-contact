import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../service/data.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  moduleUrl: string | undefined;
  constructor(private dataService: DataService) { }

  getContactList(): Observable<any> {
    this.moduleUrl = '/contacts';
    return this.dataService.getAll(this.moduleUrl, '');
  }
}
