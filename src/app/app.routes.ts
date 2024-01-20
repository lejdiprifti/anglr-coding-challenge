import { Routes } from '@angular/router'
import { LoginViewComponent } from './views/login-view/login-view.component'
import { TableViewComponent } from './views/table-view/table-view.component'
import { BASE_PATH, DASHBOARD_PATH } from './constants'

export const routes: Routes = [
  {
    path: BASE_PATH,
    component: LoginViewComponent,
  },
  {
    path: DASHBOARD_PATH,
    component: TableViewComponent,
  },
]
