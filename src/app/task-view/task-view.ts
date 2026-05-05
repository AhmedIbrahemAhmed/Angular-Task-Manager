import { Component } from '@angular/core';
import { RouterOutlet } from "@angular/router";
import { Header } from "../header/header";
@Component({
  selector: 'app-task-view',
  imports: [RouterOutlet, Header],
  templateUrl: './task-view.html',
  styleUrl: './task-view.css',
})
export class TaskView {
  
}


