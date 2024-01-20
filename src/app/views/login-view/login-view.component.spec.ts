import { ComponentFixture, TestBed } from '@angular/core/testing'

import { LoginViewComponent } from './login-view.component'
import { ToastrModule } from 'ngx-toastr'
import { FormsModule } from '@angular/forms'

describe('LoginViewComponent', () => {
  let component: LoginViewComponent
  let fixture: ComponentFixture<LoginViewComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginViewComponent, ToastrModule.forRoot(), FormsModule],
    }).compileComponents()

    fixture = TestBed.createComponent(LoginViewComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
