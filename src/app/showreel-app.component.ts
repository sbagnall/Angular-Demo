
import { Component } from '@angular/core';

@Component({
	selector: 'showreel-app',
	template: `
	<div class="row">
		<reel-nav></reel-nav>
	</div>
	<div class="row">
		<div class="col-md-offset-1 col-md-10">
			<router-outlet></router-outlet>
		</div>
	</div>
	`
})
export class ShowReelAppComponent {


}