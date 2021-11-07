import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = {
    username: '',
    password: ''
  };

  editClicked :Boolean = false;
  name = "amier"
  users :any = [];
  constructor() { }

  ngOnInit(): void {
  }

  save(){
    this.users.push(this.loginForm);

    this.loginForm = {
      username: '',
      password: ''
    } 

  
  }

  delete(index:any){
    this.users.splice(index,1);
  }
  
  edit(obj:any){
    console.log(obj);
  this.editClicked = true;
   const foundUser = this.users.find((d:any)=>{
        if(d.username == obj.username){
           return d;
        }
    });

  // this.loginForm.username = foundUser.username;
  // this.loginForm.password = foundUser.password;

  // deep copy of found users
  this.loginForm = {...foundUser};


  }

  update(){

   console.log("===========ALLL UPDATED USERS==================",this.users)
   
  }


}
