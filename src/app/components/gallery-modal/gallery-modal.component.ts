import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-gallery-modal',
  templateUrl: './gallery-modal.component.html',
  styleUrls: ['./gallery-modal.component.scss']
})
export class GalleryModalComponent {

  @Input()
  photoViewing: any = null;

  @Output()
  emitClose: EventEmitter<void> = new EventEmitter<void>();

  closeModal(){
    this.emitClose.emit();
  }
}
