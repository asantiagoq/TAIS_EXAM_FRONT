import { Component } from '@angular/core';
import { HeaderIngresosComponent } from "../header-ingresos/header-ingresos.component";

@Component({
  selector: 'app-ingresos',
  standalone: true,
  imports: [HeaderIngresosComponent],
  templateUrl: './ingresos.component.html',
  styleUrl: './ingresos.component.css'
})
export class IngresosComponent {

}
