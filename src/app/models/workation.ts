export interface Workation {
  workationId: string
  employee: string
  origin: string
  destination: string
  startDate: Date
  endDate: Date
  workingDays: number
  risk: 'HIGH' | 'LOW' | 'NO'
}
