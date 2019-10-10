import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  constructor(private miServicio : UserService,private router : Router) { }
  user = {};
  ngOnInit() {
  }
  ingresar(){
    console.log(this.user);
    this.miServicio.setUser(this.user);
    this.router.navigate(["/algo"]);
  }

}
