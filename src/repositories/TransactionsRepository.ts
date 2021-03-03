import Appointment from '../models/Appointments';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Appointment)
class AppointmentsRepository extends Repository<Appointment> {
  public async findByDate(date: Date): Appointment | null {{
    const findAppointment = await this.findOne({
      where: { date },
    });

    return findAppointment || null;
  }
}

// const response = awaiti findByDate(date)

export default AppointmentsRepository;
