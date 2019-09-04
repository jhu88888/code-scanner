import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RouteParamsServiceService {

  constructor() { }

  deskId = new BehaviorSubject(undefined);
}
