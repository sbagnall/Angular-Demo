import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'
import { ShowReelAppComponent }  from './showreel-app.component';
import { ReelComponent }  from './reel/reel.component';
import { ClipComponent }  from './clip/clip.component';
import { NavComponent }  from './nav/nav.component';
import { ClipListComponent }  from './clip/clip-list.component';
import { ClipService }  from './clip/clip.service';
import { appRoutes } from './routes';
import { ReelService } from './reel/reel.service';

@NgModule({
  imports:      [ 
  	BrowserModule, 
    FormsModule,
	  RouterModule.forRoot(appRoutes)
  ],

  declarations: [ 
  	ShowReelAppComponent,
  	ReelComponent,
  	ClipComponent,
  	NavComponent,
    ClipListComponent
  ],

  providers: [ 
    ClipService,
    ReelService
  ],
  bootstrap:    [ ShowReelAppComponent ]
})
export class AppModule { }
