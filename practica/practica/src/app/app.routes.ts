import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { AcercaDeNosotrosComponent } from './pages/acerca-de-nosotros/acerca-de-nosotros.component';

export const routes: Routes = [
    {path:`inicio`,component:InicioComponent},
    {path:`productos`,component:ProductosComponent},
    {path:`contacto`,component:ContactoComponent},
    {path:`acerca-de-nosotros`,component:AcercaDeNosotrosComponent},
    {path:`**`,component:InicioComponent},
];
