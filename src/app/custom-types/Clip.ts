import { Standard, Definition, Timecode } from '../custom-types/index';

export class Clip {
	name: string;
	description: string;
	standard: Standard;
	definition: Definition;
	start: Timecode = new Timecode(0, 0, 0, 0);
	end: Timecode = new Timecode(0, 0, 0, 0);
}
