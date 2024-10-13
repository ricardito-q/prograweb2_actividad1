import { Routes,RouterModule } from '@angular/router';
import { CardproductosComponent } from './components/cardproductos/cardproductos.component';
import { CardproductoComponent } from './components/cardproducto/cardproducto.component';
import { CardbuscadorComponent } from './components/cardbuscador/cardbuscador.component';


export const routes: Routes = [
    {path:'productos',component:CardproductosComponent},
    {path:'producto/:id',component:CardproductoComponent},
    {path: `buscar/:termino`,component:CardbuscadorComponent},
];

