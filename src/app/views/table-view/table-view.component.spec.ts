import { ComponentFixture, TestBed } from '@angular/core/testing'

import { TableViewComponent } from './table-view.component'

describe('TableViewComponent', () => {
  let component: TableViewComponent
  let fixture: ComponentFixture<TableViewComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableViewComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(TableViewComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should display workations data in the table', () => {
    const workations = [
      {
        workationId: 'w1',
        employee: 'Name Surname',
        origin: 'City A',
        destination: 'City B',
        startDate: new Date('2022-01-01'),
        endDate: new Date('2022-01-10'),
        workingDays: 10,
        risk: 'LOW' as any,
      },
    ]

    component.workations = workations
    fixture.detectChanges()

    const tableRows = fixture.nativeElement.querySelectorAll('tbody tr')
    expect(tableRows.length).toBe(workations.length)

    tableRows.forEach((row: { textContent: any }, index: string | number) => {
      const rowData = workations[index as any]

      expect(row.textContent).toContain(rowData.employee)
      expect(row.textContent).toContain(rowData.origin)
      expect(row.textContent).toContain(rowData.destination)
    })
  })
})
