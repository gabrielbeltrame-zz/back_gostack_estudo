import { Appointment } from '../models/Appointment';
import { isEqual } from 'date-fns';

interface CreateAppointmentDTO {
  provider: string;
  date: Date;
}

export class AppointmentsRepository {

  private appointments: Array<Appointment>;

  constructor() {
    this.appointments = [];
  }

  public all(): Appointment[] {
    return this.appointments;
  }

  public create({ provider, date }: CreateAppointmentDTO): Appointment {

    const appointment: Appointment = new Appointment({ provider, date })

    this.appointments.push(appointment);

    return appointment;
  }

  public findByDate(date: Date): Appointment | null {
    return this.appointments.find(appointment => isEqual(date, appointment.date)) || null
  }
}
