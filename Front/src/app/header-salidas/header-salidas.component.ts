import { Component } from '@angular/core';
import { SalidaFormComponent } from "../salida-form/salida-form.component";

@Component({
  selector: 'app-header-salidas',
  standalone: true,
  templateUrl: './header-salidas.component.html',
  styleUrls: ['./header-salidas.component.css'],
  imports: [SalidaFormComponent],
})
export class HeaderSalidasComponent {}
