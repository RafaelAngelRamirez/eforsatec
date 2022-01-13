import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'inicio',
    loadChildren: () =>
      import('./inicio/inicio.module').then((m) => m.InicioModule),
  },
  {
    path: 'nosotros',
    loadChildren: () =>
      import('./nosotros/nosotros.module').then((m) => m.NosotrosModule),
  },
  {
    path: 'contacto',
    loadChildren: () =>
      import('./contacto/contacto.module').then((m) => m.ContactoModule),
  },
  {
    path: 'productos',
    loadChildren: () =>
      import('./productos/productos.module').then((m) => m.ProductosModule),
  },

  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '/inicio',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
