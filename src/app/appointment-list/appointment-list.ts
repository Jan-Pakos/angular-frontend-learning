import { Component } from '@angular/core';
import { Appointment } from './models/appointment-list.model';

@Component({
  selector: 'app-appointment-list',
  imports: [],
  templateUrl: './appointment-list.html',
  styleUrl: './appointment-list.scss',
})
export class AppointmentList {

  appointment : Appointment = {
    id: 1,
    title: "TESTING",
    date: new Date('2024-06-01')
  };
}
