import { Component } from '@angular/core';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
login=true
register=false
loginStyle="light"
regStyle="primary"
pressLogin()
{
  this.login=true
  this.loginStyle="light"
  this.register=false
  this.regStyle="primary"
}

pressRegister()
{
  this.login=false
  this.loginStyle="primary"
  this.register=true
  this.regStyle="light"
}
}
