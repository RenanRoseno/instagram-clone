import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AcessoComponent } from './acesso/acesso.component';
import { BannerComponent } from './acesso/banner/banner.component';
import { LoginComponent } from './acesso/login/login.component';
import { CadastroComponent } from './acesso/cadastro/cadastro.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './service/auth.service';
import { HomeComponent } from './home/home.component';
import { PostsComponent } from './home/posts/posts.component';
import { RouterModule} from '@angular/router';
import { ROUTES } from './app.routes';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { AuthGuardService } from './service/auth-guard.service';
import { AddPostComponent } from './home/add-post/add-post.component';
import { DataService } from './service/data.service';
@NgModule({
  declarations: [
    AppComponent,
    AcessoComponent,
    BannerComponent,
    LoginComponent,
    CadastroComponent,
    HomeComponent,
    PostsComponent,
    AddPostComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    SweetAlert2Module.forRoot(),
    RouterModule.forRoot(ROUTES)
  ],
  providers: [AuthService, AuthGuardService, AcessoComponent, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
