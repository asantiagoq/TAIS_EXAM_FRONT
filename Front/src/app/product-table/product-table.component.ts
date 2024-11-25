import { Component } from '@angular/core';
import { DeleteConfirmationComponent } from "../delete-confirmation/delete-confirmation.component";

@Component({
  selector: 'app-product-table',
  standalone: true,
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.css'],
  imports: [DeleteConfirmationComponent],
})
export class ProductTableComponent {
  selectedItem: string = '';

  prepareDelete(item: string) {
    this.selectedItem = item; 
  }

  onDeleteConfirmed() {
    console.log(`Producto eliminado: ${this.selectedItem}`);
  
  }
}
