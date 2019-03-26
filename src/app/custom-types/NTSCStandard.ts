import { StandardBase } from './StandardBase';
import { Standard } from './Standard';
import { Timecode } from './Timecode';

export class NTSCStandard extends StandardBase {
	fps = 30;
	type = Standard.NTSC;
	description = "NTSC"

	getDurationMilliseconds(start: Timecode, end: Timecode): number {
		return super.getDurationMilliseconds(start, end);
	}
}