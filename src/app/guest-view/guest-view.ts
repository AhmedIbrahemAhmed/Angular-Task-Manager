import { Component } from '@angular/core';
import { GuestHeader } from "../guest-header/guest-header";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-guest-view',
  imports: [GuestHeader, RouterOutlet],
  templateUrl: './guest-view.html',
  styleUrl: './guest-view.css',
})
export class GuestView {}
