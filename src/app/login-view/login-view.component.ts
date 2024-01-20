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
  constructor(
    private toastr: ToastrService,
    private router: Router,
  ) {}

  LOGIN_URL = 'http://localhost:8080/auth/login'

  email: string = ''
  password: string = ''

  onSubmit() {
    axios
      .post(this.LOGIN_URL, {
        email: this.email,
        password: this.password,
      })
      .then(() => {
        this.toastr.success('Login successful!')
        this.router.navigate(['dashboard'])
      })
      .catch(() => {
        this.toastr.error('Login failed!')
      })
  }
}
