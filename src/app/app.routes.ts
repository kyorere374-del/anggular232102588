import { RouterModule, Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
import { Login } from './login/login';
import { NgModule } from '@angular/core';
import { Admin } from './admin/admin';
import { Dashboard2 } from './dashboard2/dashboard2';

export const routes: Routes = [
    { path: "", redirectTo: "login", pathMatch: "full"},
    { path:"dashboard", component: Dashboard},
    { path: "dashboard2", component: Dashboard2},
    { path: "login", component: Login},
    { path: "admin", component: Admin},
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule]
})
export class AppRoutes {}
