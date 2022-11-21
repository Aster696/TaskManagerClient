import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/shared/material/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TopNavBarComponent } from './components/navigationComponents/top-nav-bar/top-nav-bar.component';
import { LeftNavBarComponent } from './components/navigationComponents/left-nav-bar/left-nav-bar.component';
import { HomeComponent } from './components/basicComponents/home/home.component';
import { AboutComponent } from './components/basicComponents/about/about.component';
import { ContactComponent } from './components/basicComponents/contact/contact.component';
import { PageNotFoundComponent } from './components/errorComponents/page-not-found/page-not-found.component';
import { FooterComponent } from './components/basicComponents/footer/footer.component';
import { FormComponent } from './components/userComponents/form/form.component';
import { ProfileComponent } from './components/userComponents/profile/profile.component';
import { AddTaskComponent } from './components/taskComponents/add-task/add-task.component';
import { DisplayTasksComponent } from './components/taskComponents/display-tasks/display-tasks.component';
import { UserRouteService } from 'src/shared/services/routes/userRoute/user-route.service';
import { BasicService } from 'src/shared/services/basicService/basic.service';
import { TaskRouteService } from 'src/shared/services/routes/taskRoute/task-route.service';
import { UserControllerService } from 'src/shared/services/controllers/userController/user-controller.service';
import { TaskControllerService } from 'src/shared/services/controllers/taskController/task-controller.service';
import { ForgotPasswordComponent } from './components/basicComponents/forgotPassword/forgot-password/forgot-password.component';
import { ForgotPasswordOtpComponent } from './components/basicComponents/forgotPassword/forgot-password-otp/forgot-password-otp.component';
import { ResetPasswordComponent } from './components/basicComponents/forgotPassword/reset-password/reset-password.component';
import { TokenInterceptorInterceptor } from 'src/tokenInterceptor/token-interceptor.interceptor';
import { UserAuthGuard } from 'src/auth/UserAuth/user-auth.guard';
import { UserLoggedinAuthGuard } from 'src/auth/UserLoggedinAuth/user-loggedin-auth.guard';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AvatarsComponent } from './components/userComponents/avatars/avatars.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    LeftNavBarComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    PageNotFoundComponent,
    FooterComponent,
    FormComponent,
    ProfileComponent,
    AddTaskComponent,
    DisplayTasksComponent,
    ForgotPasswordComponent,
    ForgotPasswordOtpComponent,
    ResetPasswordComponent,
    AvatarsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [
    BasicService,
    UserRouteService,
    TaskRouteService,
    UserControllerService,
    TaskControllerService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorInterceptor,
      multi: true
    },
    UserAuthGuard,
    UserLoggedinAuthGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
