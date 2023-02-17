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
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UpdatePerfilComponent } from './componentes/update-perfil/update-perfil.component';
import { UpdateCertificadoComponent } from './componentes/update-certificado/update-certificado.component';
import { UpdateHabilidadComponent } from './componentes/update-habilidad/update-habilidad.component';
import { UpdateProyectoComponent } from './componentes/update-proyecto/update-proyecto.component';
import { AltaCertificadoComponent } from './componentes/alta-certificado/alta-certificado.component';
import { AltaProyectoComponent } from './componentes/alta-proyecto/alta-proyecto.component';


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
    UpdatePerfilComponent,
    UpdateCertificadoComponent,
    UpdateHabilidadComponent,
    UpdateProyectoComponent,
    AltaCertificadoComponent,
    AltaProyectoComponent

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
