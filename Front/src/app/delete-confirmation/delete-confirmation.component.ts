import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-delete-confirmation',
  templateUrl: './delete-confirmation.component.html',
  styleUrls: ['./delete-confirmation.component.css'],
  standalone: true,
})
export class DeleteConfirmationComponent {
  @Input() title: string = 'Eliminar'; // Título del modal
  @Input() message: string = '¿Está seguro de que desea realizar esta acción?'; // Mensaje principal
  @Output() confirm = new EventEmitter<void>(); // Evento para confirmar la acción

  onConfirm() {
    this.confirm.emit(); // Emitir el evento cuando se confirme
  }
}
