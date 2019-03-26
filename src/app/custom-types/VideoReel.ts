import { IStandard, Definition, Clip, Timecode } from './index';

export class VideoReel {
	name: string;
	standard: IStandard;
	definition: Definition;
	clips: Clip[] = [];
	availableClips: Clip[] = [];


	constructor (standard: IStandard) { 
		this.standard = standard;
	}

	getDuration(): Timecode {
		let duration = 0;

		if (this.clips == null) {
			return new Timecode(0, 0, 0, 0);
		}

		for (let clip of this.clips) {
			duration += this.standard.getDurationMilliseconds(clip.start, clip.end);
		}

		return Timecode.create(duration, this.standard.fps);
	}
}