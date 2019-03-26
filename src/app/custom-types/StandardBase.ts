import { Standard } from './Standard';
import { Timecode } from './Timecode';
import { IStandard } from './IStandard';

export class StandardBase implements IStandard {
	
	// implement these properties in extending types
	fps: number
	type: Standard;
	description: string;

	getDurationMilliseconds(start: Timecode, end: Timecode): number {
		if (this.fps <= 0) {
			throw new RangeError('please implement the property "fps"')
		}

		return end.toMilliseconds(this.fps) - start.toMilliseconds(this.fps);
	}
}