import { Routes } from '@angular/router'
import { LoginViewComponent } from './views/login-view/login-view.component'
import { TableViewComponent } from './views/table-view/table-view.component'

export const routes: Routes = [
  {
    path: '',
    component: LoginViewComponent,
  },
  {
    path: 'dashboard',
    component: TableViewComponent,
  },
]
