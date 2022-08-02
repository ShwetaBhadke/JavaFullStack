import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {
  user = [
    {
      UserId: '1087645212',
      Name:'John Andrew',
      emailID: 'john@gmail.com',
      mobileNumber: "9876543216",
      companyName:'MNC-RED Technology',
      companyCity:'Pune'
    },
    {
      UserId: '1987545232',
      Name:'Alice Kinderly',
      emailID: 'sharma@gmail.com',
      mobileNumber: "8765432193",
      companyName:'MIYS Technology',
      companyCity:'Mumbai'
    }
  ]
  constructor(
    private router: Router,
    public userService: UserService
  ) { }

  ngOnInit(): void {
    // this.getAllUser();
  }

  getAllUser() {
    this.userService.getAllUserDetails().subscribe((res: any) => {
      console.log(res)
      this.user = res.data.map((singleData: any) => {
        singleData.createdDate = new Date(singleData.createdDate);
        console.log(singleData)
        return singleData;
      });
    })
  }
  goBack(){
    this.router.navigate(['/']); 
  }
}
