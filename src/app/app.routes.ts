import { Routes } from '@angular/router'
import { LoginViewComponent } from './login-view/login-view.component'
import { TableViewComponent } from './table-view/table-view.component'

export const routes: Routes = [
  {
    path: '',
    component: LoginViewComponent,
  },
  {
    path: 'dashboard',
    component: TableViewComponent
  }
]
