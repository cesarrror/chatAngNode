import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { TooltipModule } from 'ngx-bootstrap/'

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ChatComponent } from './components/chat/chat.component';
import { RegistroComponent } from './components/registro/registro.component';
import { AmigosComponent } from './components/amigos/amigos.component';
import { MensajesComponent } from './components/mensajes/mensajes.component';
import { EncabezadoComponent } from './components/encabezado/encabezado.component';
import { FormularioMensajeComponent } from './components/formulario-mensaje/formulario-mensaje.component';
import { ErrorNfComponent } from './components/error-nf/error-nf.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ChatComponent,
    RegistroComponent,
    AmigosComponent,
    MensajesComponent,
    EncabezadoComponent,
    FormularioMensajeComponent,
    ErrorNfComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
