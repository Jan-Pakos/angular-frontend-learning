import { Component } from '@angular/core';
import { Appointment } from './models/appointment-list.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-appointment-list',
  imports: [FormsModule, CommonModule],
  templateUrl: './appointment-list.html',
  styleUrl: './appointment-list.scss',
})
export class AppointmentList implements OnInit {

  newAppointmentTitle : string = '';
  newAppointmentDate : Date = new Date();

  appointments : Appointment[] = []

  ngOnInit() {
    const savedAppointments = localStorage.getItem('appointments');
    if (savedAppointments) {
      this.appointments = JSON.parse(savedAppointments);
    }
  }

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
      this.localstorage();
    }
  }

  deleteAppointment(id : number) {
    const index = this.appointments.findIndex(appointment => appointment.id === id);
    if (index !== -1) {
      this.appointments.splice(index, 1);
      this.localstorage();
    }
  }

  localstorage() {
    localStorage.setItem('appointments', JSON.stringify(this.appointments));
  }
}
