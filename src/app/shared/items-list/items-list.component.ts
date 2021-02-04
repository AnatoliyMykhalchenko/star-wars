import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss'],
})
export class ItemsListComponent implements OnInit {
  @Input() items = [];
  @Input() isBtnDisabled = false;
  @Output() loadMoreItems = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  loadMore(): void {
    this.loadMoreItems.emit();
  }
}
