import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { VideoReel, IStandard, PALStandard, NTSCStandard, Definition } from '../custom-types/index';
import { ClipService } from '../clip/clip.service'


@Injectable()
export class ReelService {

	constructor(private clipService: ClipService) { }

	getReel(standard: string, definition: string) {

		let isValidInput: boolean = false
		let reel: VideoReel;

		isValidInput = (!!standard && !!definition);

		if (isValidInput) {

			let std: IStandard;

			switch (standard) {
				case "PAL":
				std = new PALStandard();
				break;

				case "NTSC":
				std = new NTSCStandard();
				break;
			}

			reel = new VideoReel(std);
			reel.definition = (definition === "SD") ? Definition.SD : Definition.HD;
			reel.clips = [];
			reel.availableClips = this.clipService.getAvailableClips(reel.standard.type, reel.definition);

			return reel;
		}

		return null;
		

	}

}

