import { DashboardComponent } from './dash/dashboard/dashboard.component';
import { DashMainComponent } from './dash/dash-main/dash-main.component';
import { AboutComponent } from './about/about.component';
import { PricingComponent } from './pricing/pricing.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LandingComponent } from './components/landing/landing.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import {
  canActivate,
  redirectLoggedInTo,
  redirectUnauthorizedTo,
} from '@angular/fire/auth-guard';
import { ProfileComponent } from './components/profile/profile.component';
import { MainHomeComponent } from './main-home/main-home.component';
import { ContactComponent } from './contact/contact.component';

/* const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
const redirectLoggedInToHome = () => redirectLoggedInTo(['']); */

const routes: Routes = [
  {path:'main-home',component:MainHomeComponent},
/*   {path:'dashboard',component:DashboardComponent},
 */  {path:'pricing',component:PricingComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'profile',component:ProfileComponent},
  {
    path: '',
    pathMatch: 'full',
    component: MainHomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
/*     ...canActivate(redirectLoggedInToHome),
 */   },
  {
    path: 'sign-up',
    component: SignUpComponent,
/*     ...canActivate(redirectLoggedInToHome),
 */   },
  {
    path: 'dashboard',
    component: DashboardComponent,
/*      ...canActivate(redirectUnauthorizedToLogin),
 */   },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
