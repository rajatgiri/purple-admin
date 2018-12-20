import { Component, OnInit,OnDestroy } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[LoginService]
})
export class LoginComponent implements OnInit,OnDestroy
 {
  myForm:FormGroup;
  submitForm;
  submitData;
  resData;
  errMsg;
  constructor(private fb:FormBuilder,private ls:LoginService,private router:Router) { }

  ngOnInit() {
    this.Validate()
  }
  Validate()
  {
     this.myForm=this.fb.group(
       {
         'email':['',Validators.required],
         'password':['',Validators.required]
       }
     )
  }
  
  loginSubmit()
  {
    const formData=this.myForm.getRawValue();
    this.submitData=this.ls.adminLogin(formData)
    .subscribe(res=>
    {
     this.resData=res;
     if(this.resData.err==0)
     {
       localStorage.setItem('uid',this.resData.ulogin);
       setTimeout(()=>
         {
           this.router.navigate(['/dashboard'])
         },2000)
       
     }
     else
     {
       this.errMsg=this.resData.msg;
     }
    },err=>{}) 
  }
  ngOnDestroy()
  {
    if(this.submitData)
    {
      this.submitData.unsubscribe();
    }
  }
}
