import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';

const routes: Routes = [
  {
    path: 'inicio',
    component: IndexComponent    
  },
  {
    path: '**', redirectTo:"/inicio"  
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
