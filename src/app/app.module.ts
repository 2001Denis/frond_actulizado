import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';
import { CertificadosComponent } from './componentes/certificados/certificados.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { HabilidadesComponent } from './componentes/habilidades/habilidades.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NuevoproyectoComponent } from './componentes/nuevoproyecto/nuevoproyecto.component';
import { NuevocertificadoComponent } from './componentes/nuevocertificado/nuevocertificado.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PerfilComponent,
    CertificadosComponent,
    ProyectosComponent,
    HabilidadesComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    NuevoproyectoComponent,
    NuevocertificadoComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
