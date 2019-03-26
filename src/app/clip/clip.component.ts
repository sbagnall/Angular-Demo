import { Component, Input, Output, EventEmitter } from '@angular/core'
import { Standard, Definition, Timecode, Clip } from '../custom-types/index'

@Component({
	selector: 'clip',
	template: `
	<div class="cursor-pointer well" (click)="clicked()">
		<div class="row">
    		<div class="col-md-11">
      			<h4>{{ clip.name }}</h4>
    		</div>
  		</div>

  		<div class="row">
	    <div class="col-md-12">
	    	<div><strong>Description:</strong> {{clip.description}}</div>
	    	<div><strong>Standard:</strong> {{getStandardDescription(clip.standard)}}</div>
	    	<div><strong>Definition:</strong> {{getDefinitionDescription(clip.definition)}}</div>
	    	<div><strong>Start:</strong> {{clip.start}}</div>
	    	<div><strong>End:</strong> {{clip.end}}</div>
			
	    </div>
	
</div>
	`,
	styles: [`
		.well { background-color: #292929; margin-top: 20px }
		.cursor-pointer { cursor: pointer }
	`]
})
export class ClipComponent {
	@Input() clip:Clip;
	@Output() clipClicked: EventEmitter<Clip> = new EventEmitter<Clip>();

	clicked() {
		this.clipClicked.emit(this.clip);
	}

	getStandardDescription(value: number) {
		return this.getEnumName(Standard, value);
	}
	
	getDefinitionDescription(value: number) {
		return this.getEnumName(Definition, value);

	}

	private getEnumName(type: any, value: number) {
		for (let enumMember in type) {
   			var isValueProperty = parseInt(enumMember, 10) >= 0
   			if (isValueProperty) {
      			return type[enumMember];
   			}
		}
	}
}