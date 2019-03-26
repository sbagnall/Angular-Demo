import { Routes } from '@angular/router';
import { ReelComponent } from './reel/reel.component';

export const appRoutes: Routes = [
	{ path: 'reel', component: ReelComponent },
	{ path: 'reel/:standard/:definition', component: ReelComponent },
	{ path: '', redirectTo: '/reel', pathMatch: 'full' }
]