import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './homepage/header/header.component';
import { NewsComponent } from './homepage/news/news.component';
import { NavLeftComponent } from './homepage/nav-left/nav-left.component';
import { NavRightComponent } from './homepage/nav-right/nav-right.component';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CreateComponent } from './create/create.component';
import { FooterComponent } from './homepage/footer/footer.component';
import { PopStatusComponent } from './homepage/pop-status/pop-status.component';
import {MatDialogModule} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NewsComponent,
    NavLeftComponent,
    NavRightComponent,
    LoginComponent,
    HomepageComponent,
    CreateComponent,
    FooterComponent,
    PopStatusComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  providers: [  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
