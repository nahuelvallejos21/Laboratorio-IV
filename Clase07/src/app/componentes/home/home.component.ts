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
  cliente = {cliente : {user :"" , pass : ""}};
  ngOnInit() {
    localStorage.removeItem("token");
  }
  // ingresar(){
  //  console.log(this.user);
  //   this.miServicio.setUser(this.user);
  //   // this.router.navigate(["/algo"]);
  //   // this.miServicio.login(this.user);
  //   this.router.navigate(["/algo"]);
  // }
  agregarCliente(){
    if(this.cliente.cliente.pass != "" && this.cliente.cliente.user != ""){
      this.miServicio.htttpAgregar(this.cliente);
    }
    else{
      console.log("Campos vacios");
    }
  }
  autenticar(){
    this.miServicio.httpAutenticar(this.cliente);
  }

}
