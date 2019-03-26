import { Component, EventEmitter, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
	selector: 'reel-nav',
	template: `
	<div class="row reel-nav well">
		<div class="col-md-offset-1 col-md-10">
			<form #navForm="ngForm" autocomplete="off" (ngSubmit)="createReel(navForm.value)">
				<div class="form-group">
					<div class="col-md-3">
						<label for="standard"><strong>Standard:</strong></label>
						<select #standardSelect (ngModel)="standard" id="standard" name="standard">
		            		<option value=""></option>
		            		<option [selected]="standard === activeStandard" *ngFor="let standard of standards" [value]="standard">{{standard}}</option>
		        		</select>
		        	</div>
		        	<div class="col-md-3">
		        		<label for="definition"><strong>Definition:</strong></label>
						<select #definitionSelect (ngModel)="definition" id="definition" name="definition">
		            		<option value=""></option>
		            		<option [selected]="definition === activeDefinition" *ngFor="let definition of definitions" [value]="definition">{{definition}}</option>
		        		</select>
		        	</div>

					<div class="col-md-6">
						<button [disabled]="!definitionSelect.value || !standardSelect.value" type="submit" class="btn btn-primary">Begin</button> 
					</div>
				</div>
			</form>
		</div>
	</div>
	`,
	styles: [
		'.reel-nav { margin-top: 20px; padding: 15px; }',
		'button { margin-left: 50px; width: 250px }',
		'.form-group { font-size: 2em; }'
	]
})
export class NavComponent {

	standards = [ 'PAL', 'NTSC' ];
	definitions = [ 'SD', 'HD' ];
	activeStandard = '';
	activeDefinition = ''

	constructor(private router: Router, private route: ActivatedRoute) { }

	
	createReel(formValues: any) {

		if (!!formValues.standard && !!formValues.definition)
		{
			let route = '/reel/' + formValues.standard + '/' + formValues.definition;
			this.router.navigate([route]);
		} 
		else {
			this.router.navigate(['/reel']);
		}
	}

	isValid() {
		return !!this.activeStandard && !!this.activeDefinition;
	}

}
