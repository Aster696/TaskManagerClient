import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { routePath } from 'src/shared/lib/routePath';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/basicComponents/about/about.component';
import { ContactComponent } from './components/basicComponents/contact/contact.component';
import { ForgotPasswordOtpComponent } from './components/basicComponents/forgotPassword/forgot-password-otp/forgot-password-otp.component';
import { ForgotPasswordComponent } from './components/basicComponents/forgotPassword/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './components/basicComponents/forgotPassword/reset-password/reset-password.component';
import { HomeComponent } from './components/basicComponents/home/home.component';
import { PageNotFoundComponent } from './components/errorComponents/page-not-found/page-not-found.component';
import { FormComponent } from './components/userComponents/form/form.component';

const routeP = new routePath();

const routes: Routes = [
  {path: '', redirectTo: routeP.home, pathMatch: 'full'},
   //basic route
   {path: routeP.home, component: HomeComponent},
   {path: routeP.about, component: AboutComponent},
   {path: routeP.contact, component: ContactComponent},
   {path: routeP.forgotPassword, component: ForgotPasswordComponent},
   {path: routeP.forgotPasswordOtp, component: ForgotPasswordOtpComponent},
   {path: routeP.resetPassword, component: ResetPasswordComponent},
   //user route
   {path: routeP.login, component: FormComponent},
   {path: routeP.signup, component: FormComponent},
   //error route
   {path: "**", component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
