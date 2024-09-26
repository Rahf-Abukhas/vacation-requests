import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VacationRequestsComponent } from "./vacation-requests/vacation-requests.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, VacationRequestsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'vacation-requests';
}
