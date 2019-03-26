import { StandardBase } from './StandardBase';
import { Standard } from './Standard';
import { Timecode } from './Timecode';

export class PALStandard extends StandardBase {
	fps = 25;
	type = Standard.PAL;
	description = "PAL"

	getDurationMilliseconds(start: Timecode, end: Timecode): number {
		return super.getDurationMilliseconds(start, end);
	}
}