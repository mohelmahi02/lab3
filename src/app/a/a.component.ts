import { Component } from '@angular/core';

@Component({
  selector: 'app-a',
  standalone: true,
  imports:[AComponent],
  templateUrl: './a.component.html',
  styleUrl: './a.component.css'
})
export class AComponent {

}
