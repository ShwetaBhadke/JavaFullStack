import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-user-company',
  templateUrl: './add-user-company.component.html',
  styleUrls: ['./add-user-company.component.scss']
})
export class AddUserCompanyComponent implements OnInit {
  userform!: FormGroup;
  submitResponseData: any;

  constructor(
    private userService: UserService,
    private router: Router
    ) { }
  isLoading = false;

  ngOnInit() {

    this.userform = new FormGroup({
      'firstName': new FormControl(null, Validators.required),
      'lastName': new FormControl(null, Validators.required),
      'companyName': new FormControl(null, Validators.required),
      'companyCity': new FormControl(null, Validators.required),
      'emailID': new FormControl(null, [Validators.required, Validators.email]),
      'tel': new FormControl(
        null,
        [
          Validators.required,
          Validators.pattern('^\\s*(?:\\+?(\\d{1,3}))?[-. (]*(\\d{3})[-. )]*(\\d{3})[-. ]*(\\d{4})(?: *x(\\d+))?\\s*$')
        ]),
      'cCode': new FormControl(null, Validators.required),
      'message': new FormControl(null, [Validators.required, Validators.minLength(10)])
    });
    this.userform.patchValue({
      cCode: "91"
    });
  }
  get f() {

    return this.userform.controls;

  }
  clicksub() {
    this.isLoading = true;
    let requestBody = {
      "firstName": this.userform.value.firstName,
      "lastName": this.userform.value.lastName,
      "companyName": this.userform.value.companyName,
      "companyCity": this.userform.value.companyCity,
      "emailID": this.userform.value.emailID,
      "stdCode": this.userform.value.cCode,
      "mobileNumber": this.userform.value.tel,
      "messageDetails": this.userform.value.message
    }
    console.log("final req body: ", requestBody)
    this.router.navigate(['list']);
    this.userService.addUserDetails(requestBody).subscribe((data: any) => {
      this.isLoading = false;
      this.submitResponseData = data;
      this.router.navigate(['/list']);
    })
  }

}

