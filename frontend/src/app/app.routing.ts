import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { LoginComponent } from './components/login/login.component';
import { ErrorNfComponent } from './components/error-nf/error-nf.component';
import { ChatComponent } from './components/chat/chat.component';

const appRoutes: Routes = [
    {
        path : '',
        component : LoginComponent,
        pathMatch : 'full'
    },
    {
        path : 'chat',
        component : ChatComponent
    },
    {
        path : '**',
        component : ErrorNfComponent 
    }
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);