import { 
	Component,
	OnInit, 
	Input, 
	ViewEncapsulation, 
	OnChanges,
	SimpleChanges,
  ViewChild, 
  ElementRef
	} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated, // None, Native
})
export class ServerElementComponent implements OnInit, OnChanges {
	@Input('srvElement') element: {type: string, name: string, content: string};
  @ViewChild('heading') header: ElementRef;

  constructor() {
  	console.log("contructor called!");
  }

  ngOnInit() {
  	console.log("ngOnit called!");
  }

  ngOnChanges(changes: SimpleChanges){
  	console.log("ngOnChanges called!");
  	console.log(changes);
  }

}
