import {Component, Input, Output, EventEmitter} from 'angular2/core';

//TODO: fade in

@Component({
  selector: 'portfolio-item',
  host: {
    '(mouseenter)': 'onMouseEnter()',
    '(mouseleave)': 'onMouseLeave()',
    '(click)': 'onClick()'
  },
  template: `
    <div class="col-sm-4 portfolio-item">
      <a  class="portfolio-link">
        <div class="caption">
            <div class="caption-content">
                <i class="fa fa-search-plus fa-3x"></i>
            </div>
        </div>
        <img src="{{item.imgSrc}}" class="img-responsive" alt="">
      </a>
    </div>
    `
})

export class PortfolioItem {
  private _overlay: boolean = false;

  @Input('portfolio-id') id: string;
  @Input('item') item: any;
  @Output() private openModal:EventEmitter<any> = new EventEmitter();

  constructor() {
  }

  onMouseEnter() { this._overlay = true; }
  onMouseLeave() { this._overlay = false; }
  onClick() {
    this.openModal.next(this.id);
  }
}
