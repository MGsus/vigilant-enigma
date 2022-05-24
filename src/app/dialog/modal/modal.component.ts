import { Component, Inject, OnInit } from '@angular/core';
import {
  BaseModal,
  ModalButtonType,
  ModalService,
} from 'carbon-components-angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent extends BaseModal implements OnInit {
  constructor(
    @Inject('modalText') public modalText: any,
    @Inject('size') public size: any,
    @Inject('showCloseButton') public showCloseButton = true,
    protected modalService: ModalService
  ) {
    super();
  }

  showSecondaryModal() {
    this.modalService.show({
      label: 'Secondary header label',
      title: 'Sample secondary modal works.',
      content: this.modalText,
      size: this.size,
      buttons: [
        {
          text: 'Cancel',
          type: ModalButtonType.secondary,
        },
        {
          text: 'OK',
          type: ModalButtonType.primary,
          click: () => alert('OK button clicked'),
        },
      ],
    });
  }

  ngOnInit(): void {}
}
