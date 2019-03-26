import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClipService } from '../clip/clip.service';
import { ReelService } from './reel.service';
import { Standard, Definition, Timecode, VideoReel, IStandard, PALStandard, NTSCStandard, Clip } from '../custom-types/index'
import { ClipListComponent }  from '../clip/clip-list.component';

declare let _: any;

@Component({
	template: `
	<div *ngIf="!reel">
		<span>Please enter a standard and definition and click 'Begin'</span>
	</div>
	<div *ngIf="reel">
		<div class="jumbotron">
			<div class="row">
				<div class="col-md-offset-1 col-md-4">
					<div>
						<div><h3>Available Clips</h3></div>
						<clip-list (clipClicked)="addClip($event)" #availableClips [(clips)]="reel.availableClips"></clip-list>
					</div>
				</div>
				<div class="col-md-offset-1 col-md-5">
					<form #reelNameForm="ngForm" autocomplete="off">
						<h1>
							<input class="form-control" [(ngModel)]="reelName" name="reelName" id="reelName" type="text" class="form-control" placeholder="Enter reel name ..." />
						</h1>
					</form>
					<div>			
						<div><strong>Standard:</strong> {{ reel.standard.description }}</div>
						<div><strong>Definition:</strong> {{ Definition[reel.definition] }}</div>
						<div><strong>Duration:</strong> {{ reel.getDuration() }}</div>
					</div>
					

					<div>
						<span *ngIf="reel.clips.length === 0"><em>No clips selected [click on the available clips to the left to add]</em></span>
						<clip-list (clipClicked)="removeClip($event)" *ngIf="reel.clips.length > 0" #clips [clips]="reel.clips"></clip-list>
					</div>
					
				</div>
			</div>
		</div>
	</div>
	
	`,
	styles: [`
	.jumbotron { margin-top: 20px; }
	input { font-size: 0.8em; height: 50px; }

	`]
})
export class ReelComponent implements OnInit{

	reel: VideoReel;
	Definition: typeof Definition = Definition;
	

	constructor (private route: ActivatedRoute, private clipService: ClipService, private reelService: ReelService) { }

	ngOnInit() {

		this.route.params.subscribe((params: any) => {
			this.createNew(params.standard, params.definition);
			
		});
	}

	createNew(standard: string, definition: string) {
		this.reel = this.reelService.getReel(standard, definition);
	}

	addClip(clip: Clip) {
		if (!_.includes(this.reel.clips, clip) && _.includes(this.reel.availableClips, clip)) {
			_.pull(this.reel.availableClips, clip);
			this.reel.clips.push(clip);
		}
	}

	removeClip(clip: Clip) {
		if (_.includes(this.reel.clips, clip) && !_.includes(this.reel.availableClips, clip)) {
			_.pull(this.reel.clips, clip);
			this.reel.availableClips.push(clip);
		}
	}

	getAvailableClips(): Clip[] {
		return this.clipService.getAvailableClips(this.reel.standard.type, this.reel.definition)
	}
}