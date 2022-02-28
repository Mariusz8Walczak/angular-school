import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-ratio-button',
  templateUrl: './ratio-button.component.html',
  styleUrls: ['./ratio-button.component.scss']
})
export class RatioButtonComponent implements OnInit {

  @Input() test = 'test';
  @Output() testExample: EventEmitter<string>=new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  emitEvent(){
    this.testExample.emit('test333');
    console.log(1111);
  }

}
