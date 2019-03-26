import { Component, Input, Output, EventEmitter } from '@angular/core'
import { Clip } from '../custom-types/index'

@Component({
	selector: 'clip-list',
	template: `
		<div class="row" *ngFor="let clip of clips">
			<clip (clipClicked)="clicked(clip)" [clip]=clip></clip>
		</div>
	`,
	styles: [`
		
	`]
})
export class ClipListComponent {
	@Input() clips: Clip[];
	@Output() clipClicked: EventEmitter<Clip> = new EventEmitter<Clip>();

	clicked(clip: Clip) {
		this.clipClicked.emit(clip);
	}
}