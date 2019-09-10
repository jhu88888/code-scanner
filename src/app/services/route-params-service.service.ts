import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { RequestDeskService } from './request-desk.service';

@Injectable({
  providedIn: 'root'
})
export class RouteParamsServiceService {

  constructor(private requestDeskService: RequestDeskService) { }

  deskId = new BehaviorSubject(undefined);
}
