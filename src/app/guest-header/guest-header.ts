import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-guest-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './guest-header.html',
  styleUrl: './guest-header.css',
})
export class GuestHeader {}
