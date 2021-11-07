import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userType : string = "super_user";
  roleId : number = 55;
  countArray :any;

  
  constructor() {
    console.log('HomeComponent');
    // for(let i=0;i<10;i++){
    //   this.countArray.push(i);
    // }
    // fill the array with the count of the array
    this.countArray = Array(100).fill(0)
    console.log(this.countArray);

   
    

   }

  ngOnInit(): void {
  }

}
