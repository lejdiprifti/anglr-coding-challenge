import { Component } from '@angular/core'
import { Workation } from '../../models/workation'
import axios from 'axios'
import { CommonModule, DatePipe } from '@angular/common'

@Component({
  selector: 'app-table-view',
  standalone: true,
  imports: [DatePipe, CommonModule],
  templateUrl: './table-view.component.html',
  styleUrl: './table-view.component.sass',
})
export class TableViewComponent {
  public workations: Workation[] = []

  async ngOnInit() {
    await this.loadWorkations()
  }

  async loadWorkations() {
    const response = await axios.get(WORKATIONS_URL)
    this.workations = await response.data
    console.log(this.workations)
  }
}
