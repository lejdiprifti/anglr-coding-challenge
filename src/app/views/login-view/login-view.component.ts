import { Component } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { Router } from '@angular/router'
import axios from 'axios'
import { ToastrModule, ToastrService } from 'ngx-toastr'

@Component({
  selector: 'app-login-view',
  standalone: true,
  imports: [FormsModule, ToastrModule],
  templateUrl: './login-view.component.html',
  styleUrl: './login-view.component.sass',
})
export class LoginViewComponent {
  email: string = ''
  password: string = ''

  constructor(
    private toastr: ToastrService,
    private router: Router,
  ) {}

  async onSubmit() {
    await axios
      .post(LOGIN_URL, {
        email: this.email,
        password: this.password,
      })
      .then(() => {
        this.toastr.success('Login successful!')
        this.router.navigate([DASHBOARD_PATH])
      })
      .catch(() => {
        this.toastr.error('Login failed!')
      })
  }
}
