import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HighlightPipe } from "../highlight.pipe";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vacation-requests',
  standalone: true,
  imports: [FormsModule, FontAwesomeModule, HighlightPipe,CommonModule],
  templateUrl: './vacation-requests.component.html',
  styleUrl: './vacation-requests.component.css'
})
export class VacationRequestsComponent {
[x: string]: any;

  
  pageTitle: string = 'Vacation Requests';
  userImage = 'assets/images/user-avatar.jpg'; 
  searchTerm: string = '';

  constructor (){
    employeesArr = [
      { id: 1, name: 'Ahmad Attar', 'Submitted on': '1/9/2024', Duration: '2 Weeks (1/4/2023 – 14/4/2023)', Salary: '1000 AED' },
      { id: 2, name: 'Zead', 'Submitted on': '1/9/2024', Duration: '2 Weeks (1/4/2023 – 14/4/2023)', Salary: '1000 AED' },
      { id: 3, name: 'Mohamed', 'Submitted on': '1/9/2024', Duration: '2 Weeks (1/4/2023 – 14/4/2023)', Salary: '1000 AED' },
      { id: 4, name: 'abdallah', 'Submitted on': '1/9/2024', Duration: '2 Weeks (1/4/2023 – 14/4/2023)', Salary: '1000 AED' },
      { id: 5, name: 'Own', 'Submitted on': '1/9/2024', Duration: '2 Weeks (1/4/2023 – 14/4/2023)', Salary: '1000 AED' },
      { id: 6, name: 'Omar', 'Submitted on': '1/9/2024', Duration: '2 Weeks (1/4/2023 – 14/4/2023)', Salary: '1000 AED' },
      { id: 7, name: 'khalil', 'Submitted on': '1/9/2024', Duration: '2 Weeks (1/4/2023 – 14/4/2023)', Salary: '1000 AED' },
      { id: 8, name: 'Adam', 'Submitted on': '1/9/2024', Duration: '2 Weeks (1/4/2023 – 14/4/2023)', Salary: '1000 AED' },
      { id: 9, name: 'Ahmad Attar', 'Submitted on': '1/9/2024', Duration: '2 Weeks (1/4/2023 – 14/4/2023)', Salary: '1000 AED' },
      { id: 10, name: 'Ahmad Attar', 'Submitted on': '1/9/2024', Duration: '2 Weeks (1/4/2023 – 14/4/2023)', Salary: '1000 AED' },
      { id: 11, name: 'Ahmad Attar', 'Submitted on': '1/9/2024', Duration: '2 Weeks (1/4/2023 – 14/4/2023)', Salary: '1000 AED' },
      { id: 12, name: 'Ahmad Attar', 'Submitted on': '1/9/2024', Duration: '2 Weeks (1/4/2023 – 14/4/2023)', Salary: '1000 AED' }
    ];
    

  }
}
