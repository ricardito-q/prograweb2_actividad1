import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent  implements OnInit {

  constructor(private  router:Router){}


  ngOnInit(): void {
  }
  buscarProducto(termino:string){
    this.router.navigateByUrl(`/buscar/`+termino);
  }

}

