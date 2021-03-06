import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { ContactListComponent } from './contact/contact-list/contact-list.component';
import {ContactService} from './contact/contact.service';
import {ContactHttpService} from './contact/contact-list/services/contact-http.service';
import {HttpClientModule} from '@angular/common/http';
import { ContactDetailComponent } from './contact/contact-detail/contact-detail.component';
import {RouterModule, Routes} from '@angular/router';
import {MaterialComponentsModule} from './contact/ui/material-components/material-components.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {AvatarModule} from 'ng2-avatar';
import { TextToColorPipe } from './contact/pipes/text-to-color.pipe';
import {NgPipesModule} from 'ngx-pipes';
import { ToolbarComponent } from './contact/ui/toolbar/toolbar.component';
import {ToolbarService} from './contact/ui/toolbar/toolbar.service';
import {ToolbarOptions} from './contact/ui/toolbar/toolbar-options';
import { LoginComponent } from './user/login/login.component';
import {AuthenticationService} from './user/services/authentication.service';
import {TokenService} from './user/services/token.service';
import {MatSnackBar} from '@angular/material';
import { ErrorDialogComponent } from './error-dialog/error-dialog.component';
import {DialogServiceService} from './user/services/dialog-service.service';



const appRoutes: Routes = [
  { path: 'contacts', component: ContactListComponent},
  { path: 'contacts/new', component: ContactDetailComponent},
  { path: 'contacts/:id', component: ContactDetailComponent},
  {path: 'login', component: LoginComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full'}
]
@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ContactDetailComponent,
    TextToColorPipe,
    ToolbarComponent,
    LoginComponent,
    ErrorDialogComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    MaterialComponentsModule,
    FlexLayoutModule,
    AvatarModule,
    NgPipesModule,

  ],
  providers: [
    ContactService,
    ContactHttpService,
    ToolbarService,
    AuthenticationService,
    TokenService,
    DialogServiceService


  ],
  bootstrap: [AppComponent],
  entryComponents: [ErrorDialogComponent]
})
export class AppModule { }
