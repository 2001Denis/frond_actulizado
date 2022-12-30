import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NuevocertificadoComponent } from './componentes/nuevocertificado/nuevocertificado.component';
import { NuevoproyectoComponent } from './componentes/nuevoproyecto/nuevoproyecto.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [

  { path:'home', component:HomeComponent},
  { path:'login', component:LoginComponent},
  { path:'register', component:RegisterComponent},
  { path:'proyecto', component:NuevoproyectoComponent},
  { path:'certificado', component:NuevocertificadoComponent},
  { path:'**', redirectTo:'home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
