import { Component, Input, OnInit } from '@angular/core';
import { ModalService } from 'carbon-components-angular';
import { ModalComponent } from "../modal/modal.component";

@Component({
  selector: 'app-opener',
  templateUrl: './opener.component.html',
  styleUrls: ['./opener.component.scss'],
})
export class OpenerComponent implements OnInit {
  ngOnInit(): void {}

  @Input() modalText = 'Hello, World';

  @Input() size = 'default';

  @Input() showCloseButton = true;

  constructor(protected modalService: ModalService) {}

  openModal() {
    this.modalService.create({
      component: ModalComponent,
      inputs: {
        modalText: this.modalText,
        size: this.size,
        showCloseButton: this.showCloseButton,
      },
    });
  }
}
