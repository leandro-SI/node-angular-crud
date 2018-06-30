import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from "./app.component";
import { Routes, RouterModule } from '@angular/router';
import { importType } from '@angular/compiler/src/output/output_ast';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MessageService } from './shared/message.service';
import { HttpClientModule } from '@angular/common/http';
import { ListComponent } from './components/list.component';
import { CreateUpdateComponent } from './components/create-update.component';
import { FormsModule } from '@angular/forms';

const appRoutes:Routes=[
    {path:'',component:ListComponent},
    {path:'createUpdate',component:CreateUpdateComponent}
]

@NgModule({
    declarations: [
        AppComponent,
        ListComponent,
        NavbarComponent,
        CreateUpdateComponent
    ],
    imports: [BrowserModule,
        RouterModule.forRoot(appRoutes),
        HttpClientModule,
        FormsModule
        
    ],
    providers: [MessageService],
    bootstrap: [AppComponent]
})
export class AppModule {

}