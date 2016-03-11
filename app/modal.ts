import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {NgClass} from 'angular2/common';

//TODO: fade in [attr.aria-hidden]="!isOpen"

@Component({
  selector: 'modal',
  directives: [NgClass],
  styles: [
    `
      .display-block-class {
        display: block;
      }
    `
  ],
  template: `
    <div class="portfolio-modal modal fade" [ngClass]="{in: isOpen, out: !isOpen}" [class.display-block-class]="isOpen" [id]="'portfolioModal'" [attr.aria-hidden]="!isOpen" tabindex="-1" role="dialog">
    <div class="modal-content">
        <div class="close-modal" data-dismiss="modal" (click)="close()">
            <div class="lr">
                <div class="rl">
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-lg-8 col-lg-offset-2">
                    <div class="modal-body">
                        <h2>{{item.title}}</h2>
                        <hr class="star-primary">
                        <img src="{{item.imgSrc}}" class="img-responsive img-centered" alt="">
                        <p [innerHTML]="item.text"></p>
                        <ul class="list-inline item-details">
                            <li>Client:
                                <strong [innerHTML]="item.client">
                                </strong>
                            </li>
                            <li>Date:
                                <strong [innerHTML]="item.date">
                                </strong>
                            </li>
                            <li>Service:
                                <strong [innerHTML]="item.service">
                                </strong>
                            </li>
                        </ul>
                        <button type="button" class="btn btn-default" data-dismiss="modal" (click)="close()"><i class="fa fa-times"></i> Close</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    `
})
export class Modal {
  //@Input('modal-id') id: string;
  @Input('item') item: any;
  @Input() isOpen: boolean;
  @Output() isOpenChange: EventEmitter<boolean> = new EventEmitter();

  constructor() {
    //this.modalId = modalId;
  }

  open() {
    this.isOpen = true;
  }

  close() {
    this.isOpen = false;
    this.isOpenChange.next(this.isOpen);
  }
}
