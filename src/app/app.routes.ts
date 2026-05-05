import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Login } from './login/login';
import { SignUp } from './sign-up/sign-up';
import { AddTask } from './add-task/add-task';
import { Tasks } from './tasks/tasks';
import { authGuard } from './auth-guard';
import {ErrorComponent} from './error/error'
export const routes: Routes = [
    {
        path: 'home',
        component: Home,
        title: 'Home',
        canActivate: [authGuard]
    },
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: Login,
        title: 'Login'
    },
   
    {
        path: 'signup',
        component: SignUp,
        title: 'Sign Up'
    },
    {
        path: 'addtask',
        component: AddTask,
        title: 'Add Task',
        canActivate: [authGuard]
    },
    {
        path: 'tasks',
        component: Tasks,
        title: 'Tasks',
        canActivate: [authGuard]
    },
    {
        path: '**',
        component: ErrorComponent,
        title: 'Not Found'
    }
];
