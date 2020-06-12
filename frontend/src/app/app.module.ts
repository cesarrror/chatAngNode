import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { routing, appRoutingProviders } from "./app.routing";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ChatComponent } from './components/chat/chat.component';
import { RegistroComponent } from './components/registro/registro.component';
import { AmigosComponent } from './components/amigos/amigos.component';
import { MensajesComponent } from './components/mensajes/mensajes.component';
import { EncabezadoComponent } from './components/encabezado/encabezado.component';
import { FormularioMensajeComponent } from './components/formulario-mensaje/formulario-mensaje.component';
import { ErrorNfComponent } from './components/error-nf/error-nf.component';
import { SocketioService } from './services/socketio.service';

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
    ErrorNfComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpClientModule
  ],
  providers: [
    appRoutingProviders,
    SocketioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
