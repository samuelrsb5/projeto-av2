import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CadastrarComponent } from './pages/cadastrar/cadastrar.component';
import { ListarComponent } from './pages/listar/listar.component';



const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'home/:category', component: HomeComponent
  },
  {
    path: 'cadastrar', component: CadastrarComponent
  },
  {
    path: 'listar', component: ListarComponent
  },
  {
    path: '**', component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { HomeComponent } from './pages/home/home.component';
// import { CadastrarComponent } from './pages/cadastrar/cadastrar.component';

// const routes: Routes = [
//   {
//     path: 'home', component: HomeComponent
//   },
//   {
//     path: 'cadastrar', component: CadastrarComponent
//   }
  
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }
