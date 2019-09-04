import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

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
    corpId: ['', Validators.required]
  })

  constructor(
    private _route: ActivatedRoute,
    private _fb: FormBuilder
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

  submit() {
    console.log(this.mainForm.value);
    this.request_sent = true;
  }

}
