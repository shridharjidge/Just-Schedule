import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Task } from '../pages.model';
import { TaskService } from '../pages.service';
import { ToastController } from '@ionic/angular';
import { ConferenceData } from '../../providers/conference-data';
import { Time } from '@angular/common';

@Component({
  selector: 'page-new',
  templateUrl: './new.page.html',
  styleUrls: ['./new.page.scss'],
})
export class NewPage implements OnInit {
  minDate: Date = new Date();
  newArray = [];
  selectedEvents: any = [];
  eventList: any = [
    {eventID: 1, eventName: 'Daily', ischecked: false},
    {eventID: 2, eventName: 'Meeting', ischecked: false},
    {eventID: 3, eventName: 'Food', ischecked: false},
    {eventID: 4, eventName: 'Travell', ischecked: false},
    {eventID: 5, eventName: 'Conference', ischecked: false},
  ];
  constructor(private router: Router,
              private taskService: TaskService,
              private toastController: ToastController) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.minDate = new Date();
  }

  selectMember(data) {
    console.log(data);
    // tslint:disable-next-line: triple-equals
    if (data['ischecked'] == false) {
      console.log('if' + data.ischecked);
      this.selectedEvents.push(data);
    } else {
      console.log(data.ischecked);
      this.newArray = this.selectedEvents.filter(el => {
        return el.eventID !== data.eventID;
      });
      this.selectedEvents = this.newArray;
    }
    console.log(this.selectedEvents);
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    if (!value.details) {
      value.details = '';
    }
    const task: Task = new Task(value.title, new Date(value.Date), value.timeStart, value.location, value.details,value.track,value.id ,value.status);
    this.taskService.addTask(task);
    this.presentToast();
    form.reset();
    this.router.navigate(['/', 'app', 'tabs', 'schedule']);
  }

  onClosePress(form: NgForm) {
    form.reset();
    this.router.navigate(['./', 'app', 'tabs', 'schedule']);
  }

  async presentToast() {
    const toast = await this.toastController.create({
    message: 'Task saved successfully!',
    duration: 2000
    });
    toast.present();
  }

}
