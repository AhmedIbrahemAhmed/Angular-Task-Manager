import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Login } from './login/login';
import { SignUp } from './sign-up/sign-up';
import { AddTask } from './add-task/add-task';
import { Tasks } from './tasks/tasks';
import { authGuard } from './auth-guard';
import {ErrorComponent} from './error/error'
import { TaskView } from './task-view/task-view';
import { GuestView } from './guest-view/guest-view';
export const routes: Routes = [
    {
        path: 'tasks',
        component: TaskView,
        title: 'tasks',
        canActivate: [authGuard],
        children: [
            {
                path: '',
                redirectTo: 'home',
                pathMatch: 'full'
            },
            {
                path: 'addtask',
                component: AddTask,
                title: 'Add Task'
            },
            {
                path: 'tasks',
                component: Tasks,
                title: 'Tasks'
            },
            {
                path: 'home',
                component: Home,
                title: 'Home'
            },
            {
                path: '**',
                component: ErrorComponent,
                title: 'Not Found'
            }
        ]

    },
    {
        path: '',
        component: GuestView,
        title: 'Login',
        children: [
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
                path: '',
                redirectTo: 'login',
                pathMatch: 'full'
            },
            {
                path: '**',
                component: ErrorComponent,
                title: 'Not Found'
            }
        ]
    },
    {
        path: '**',
        component: ErrorComponent,
        title: 'Not Found'
    }
];
