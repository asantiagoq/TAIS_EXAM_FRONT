import { Component } from '@angular/core';
import { DeleteConfirmationComponent } from "../delete-confirmation/delete-confirmation.component";
import { HeaderIngresosComponent } from "../header-ingresos/header-ingresos.component";
import { HeaderComponent } from "../header/header.component";
import { HeaderSalidasComponent } from "../header-salidas/header-salidas.component";

@Component({
  selector: 'app-salidas',
  standalone: true,
  templateUrl: './salidas.component.html',
  styleUrls: ['./salidas.component.css'],
  imports: [DeleteConfirmationComponent, HeaderIngresosComponent, HeaderComponent, HeaderSalidasComponent],
})
export class SalidasComponent {

  salidas = [
    { id: 1, producto: 'Libro 1', cantidadTotal: 2, precioTotal: 20.0 },
    { id: 2, producto: 'Libro 2', cantidadTotal: 2, precioTotal: 50.0 },
    { id: 3, producto: 'Libro 3', cantidadTotal: 2, precioTotal: 40.0 },
    { id: 4, producto: 'Libro 6', cantidadTotal: 2, precioTotal: 100.0 },
    { id: 5, producto: 'Libro 8', cantidadTotal: 1, precioTotal: 55.0 },
  ];


  deleteMessage: string = '';
  salidaAEliminar: number | null = null;

  openDeleteConfirmation(id: number) {
    this.salidaAEliminar = id;
    this.deleteMessage = `¿Está seguro de que desea eliminar la nota de salida con ID "${id}"?`;
  }

  onDeleteConfirmed() {
    if (this.salidaAEliminar !== null) {
      this.salidas = this.salidas.filter((salida) => salida.id !== this.salidaAEliminar);
      this.salidaAEliminar = null;
      alert('Nota de salida eliminada con éxito.');
    }
  }
}
