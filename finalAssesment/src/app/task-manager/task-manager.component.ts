import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-task-manager',
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.css']
})
export class TaskManagerComponent implements OnInit {
  tasks =[];
  constructor() { }

  ngOnInit() {
  }
  printForm(taskForm :NgForm)
  {
    console.log(taskForm.value);
    this.tasks.push(taskForm.value);
    taskForm.reset();
  }
  deleteTask(task){
    this.tasks.splice(task,1,)
  }

}
