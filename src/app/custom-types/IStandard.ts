import { Standard } from './Standard';
import { Timecode } from './Timecode';

export interface IStandard {
	fps: number;
	type: Standard;
	description: string;
	getDurationMilliseconds(start: Timecode, end: Timecode): number;
}