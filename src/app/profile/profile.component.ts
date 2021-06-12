import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  title = 'Profile Page Title';

  imageUrl = 'https://image.shutterstock.com/image-vector/male-user-account-profile-circle-600w-467503055.jpg';
  
  viewCount1 = 0;

  name = "Fatima";
  
  constructor() { }

  ngOnInit(): void {
  }

  incrementCount()
{
  this.viewCount1++;
}
}
