import { Routes,RouterModule } from '@angular/router';
import { CardproductosComponent } from './components/cardproductos/cardproductos.component';
import { CardproductoComponent } from './components/cardproducto/cardproducto.component';
import { CardbuscadorComponent } from './components/cardbuscador/cardbuscador.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { combineLatest } from 'rxjs';
import { Component } from '@angular/core';
import { AcercaDeNosotrosComponent } from './pages/acerca-de-nosotros/acerca-de-nosotros.component';
import { ContactoComponent } from './pages/contacto/contacto.component';


export const routes: Routes = [
    {path:'productos',component:CardproductosComponent},
    {path:'producto/:id',component:CardproductoComponent},
    {path: `buscar/:termino`,component:CardbuscadorComponent},
    {path:`inicio`,component:InicioComponent},
    {path:`acerca-de-nosotros`,component:AcercaDeNosotrosComponent},
    {path:`contacto`,component:ContactoComponent},
    {path:`**`,component:InicioComponent},
    
];

