import { Component, OnInit } from '@angular/core';
import { IProfile } from '../interface/i-profile';
import { ProfileService} from '../service/profile.service';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profile: IProfile;
  data: FormGroup;

  constructor(private profileService: ProfileService,
              private fb: FormBuilder) {}

  ngOnInit() {
    // this.data = this.fb.group({
    //   id: '',
    //   name: '',
    //   email: ''
    // });
    this.profileService.getOneAccToken().subscribe( next => {
      this.profile = next;
      console.log(next);
      // this.data.patchValue(this.profile);
      }
    );
  }

}
