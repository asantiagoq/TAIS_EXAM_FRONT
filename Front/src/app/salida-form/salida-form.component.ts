import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-salida-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './salida-form.component.html',
  styleUrls: ['./salida-form.component.css'],
})
export class SalidaFormComponent {
  codigoSalida: string = '';
  fechaSalida: string = '';
  productoSeleccionado: string = 'Libro 1';
  cantidad: number = 0;
  productosAgregados: any[] = [];
  cantidadTotal: number = 0;
  precioTotal: number = 0;

  preciosProductos: { [key: string]: number } = {
    'Libro 1': 10,
    'Libro 2': 20,
    'Libro 3': 30,
    'Libro 4': 40,
  };

  get productosDisponibles() {
    return Object.keys(this.preciosProductos);
  }

  addProducto() {
    if (this.cantidad > 0 && this.productoSeleccionado) {
      const precioUnitario = this.preciosProductos[this.productoSeleccionado] || 0;
      const totalProducto = this.cantidad * precioUnitario;

      this.productosAgregados.push({
        producto: this.productoSeleccionado,
        cantidad: this.cantidad,
        precio: totalProducto,
      });

      this.calcularTotales();

      // Resetear los campos después de añadir
      this.cantidad = 0;
      this.productoSeleccionado = 'Libro 1';
    }
  }

  eliminarProducto(index: number) {
    this.productosAgregados.splice(index, 1);
    this.calcularTotales();
  }

  calcularTotales() {
    this.cantidadTotal = this.productosAgregados.reduce((sum, item) => sum + item.cantidad, 0);
    this.precioTotal = this.productosAgregados.reduce((sum, item) => sum + item.precio, 0);
  }
}
