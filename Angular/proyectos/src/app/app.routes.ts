import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () => import('./dashboard/dashboard.component'),
    children: [
      {
        path: 'CV',
        title: 'Curriculum',
        loadComponent: () => import('./dashboard/proyectos/curriculum/curriculum.component'),
      },
      {
        path: 'VT',
        title: 'View Transition',
        loadComponent: () => import('./dashboard/proyectos/view-transition1/view-transition1.component'),
      },
      {
        path: 'VT 2',
        title: 'View Transition 2',
        loadComponent: () => import('./dashboard/proyectos/view-transition2/view-transition2.component'),
      },
      {
        path: 'C',
        title: 'Crud',
        loadComponent: () => import('./dashboard/proyectos/crud/crud.component'),
      },
      {
        path: 'usuario/:id',
        title: 'Listado API2',
        loadComponent: () => import('./dashboard/proyectos/lista/lista.component'),
      },
      {
        path: 'API',
        title: 'Listado API',
        loadComponent: () => import('./dashboard/proyectos/listado/listado.component'),
      },
      {
        path: '@',
        title: 'Contacto',
        loadComponent: () => import('./dashboard/proyectos/contacto/contacto.component'),
      },
      {
        path:'',
        redirectTo:'CV',
        pathMatch: 'full',
      },
    ]
  },
  {
    path: '',
    redirectTo: '/dashboard/CV',
    pathMatch: 'full'
  }
];
