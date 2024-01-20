import { ComponentFixture, TestBed } from '@angular/core/testing'

import { LoginViewComponent } from './login-view.component'
import { ToastrModule, ToastrService } from 'ngx-toastr'
import { FormsModule } from '@angular/forms'
import { Router } from '@angular/router'
import { DASHBOARD_PATH } from '../../constants'

describe('LoginViewComponent', () => {
  let component: LoginViewComponent
  let fixture: ComponentFixture<LoginViewComponent>
  let router: Router
  let toastrService: ToastrService

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginViewComponent, ToastrModule.forRoot(), FormsModule],
      providers: [ToastrService],
    }).compileComponents()

    fixture = TestBed.createComponent(LoginViewComponent)
    component = fixture.componentInstance
    router = TestBed.inject(Router)
    toastrService = TestBed.inject(ToastrService)
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should not login', async () => {
    const navigateSpy = spyOn(router, 'navigate')
    const toastrSpy = spyOn(toastrService, 'error')
    const email = 'admin@example.com'
    const password = 'password'

    component.email = email
    component.password = password
    fixture.detectChanges()

    const button = fixture.nativeElement.querySelectorAll('.btn')
    expect(button.length).toBe(1)

    await component.onSubmit()
    expect(toastrSpy).toHaveBeenCalledWith('Login failed!')
  })

  it('should login', async () => {
    const navigateSpy = spyOn(router, 'navigate')
    const toastrSpy = spyOn(toastrService, 'success')
    const email = 'admin@lejdiprifti.com'
    const password = 'password'

    component.email = email
    component.password = password
    fixture.detectChanges()

    const button = fixture.nativeElement.querySelectorAll('.btn')
    expect(button.length).toBe(1)

    await component.onSubmit()
    expect(navigateSpy).toHaveBeenCalledWith([DASHBOARD_PATH])
    expect(toastrSpy).toHaveBeenCalledWith('Login successful!')
  })
})
