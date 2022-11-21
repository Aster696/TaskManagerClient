import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserAuthGuard } from 'src/auth/UserAuth/user-auth.guard';
import { UserLoggedinAuthGuard } from 'src/auth/UserLoggedinAuth/user-loggedin-auth.guard';
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
import { ProfileComponent } from './components/userComponents/profile/profile.component';

const routeP = new routePath();

const routes: Routes = [
  {path: '', redirectTo: routeP.home, pathMatch: 'full'},
   //basic route
   {path: routeP.home, component: HomeComponent},
   {path: routeP.about, component: AboutComponent},
   {path: routeP.contact, component: ContactComponent},
   {path: routeP.profile, component: ProfileComponent, canActivate: [UserAuthGuard]},
   {path: routeP.forgotPassword, component: ForgotPasswordComponent, canActivate: [UserLoggedinAuthGuard]},
   {path: `${routeP.forgotPasswordOtp}:token`, component: ForgotPasswordOtpComponent, canActivate: [UserLoggedinAuthGuard]},
   {path: `${routeP.resetPassword}:id`, component: ResetPasswordComponent},
   //user route
   {path: routeP.login, component: FormComponent, canActivate: [UserLoggedinAuthGuard]},
   {path: routeP.signup, component: FormComponent, canActivate: [UserLoggedinAuthGuard]},
   //error route
   {path: "**", component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
