import { Component } from '@angular/core';
import { Appointment } from './models/appointment-list.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-appointment-list',
  imports: [FormsModule, CommonModule],
  templateUrl: './appointment-list.html',
  styleUrl: './appointment-list.scss',
})
export class AppointmentList {

  newAppointmentTitle : string = '';
  newAppointmentDate : Date = new Date();

  appointments : Appointment[] = []

  addAppointment() {
    if (this.newAppointmentTitle.trim() && this.newAppointmentDate) {
      let newAppointment : Appointment = {
        id : this.appointments.length + 1,
        title : this.newAppointmentTitle,
        date : this.newAppointmentDate
      }
      this.appointments.push(newAppointment);
      this.newAppointmentTitle = '';
      this.newAppointmentDate = new Date();
    }
  }
}
