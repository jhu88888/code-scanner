import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { RequestDeskService } from 'src/app/services/request-desk.service';

@Component({
  selector: 'app-submit-page',
  templateUrl: './submit-page.component.html',
  styleUrls: ['./submit-page.component.scss']
})
export class SubmitPageComponent implements OnInit {
  scanned_desk_id;
  request_sent: boolean;
  mainForm = this._fb.group({
    desk_id: ['', Validators.required],
    employee_id: ['', Validators.required]
  })

  constructor(
    private _route: ActivatedRoute,
    private _fb: FormBuilder,
    private _requestDeskService: RequestDeskService,
  ) { }

  ngOnInit() {
    this.request_sent = false;
    this._route.params.subscribe(params => {
      if (params && params['desk_id']) {
        this.scanned_desk_id = params['desk_id']
        this.mainForm.patchValue({
          desk_id: params['desk_id']
        })
      }
    })
  }

  reserve() {
    console.log(this.mainForm.value);
    this.request_sent = true;
    this._requestDeskService.reserve(this.mainForm.value).subscribe(
      data => {
        console.log(data);
      }
    );
  }

}
