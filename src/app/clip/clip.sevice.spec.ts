import { ClipService } from './clip.service';
import { Standard, Definition, Timecode, Clip } from '../custom-types/index';

describe('the clip service', () => {
	it('should return an empty array when the standard and definition are not set', () => {
		let target = new ClipService();
		let expected: Clip[] = [];

		let actual = target.getAvailableClips(0, 0);

		expect(expected).toEqual(actual)
	});

	it('should return only PAL standard and SD definition clips when asked ', () => {

		let target = new ClipService();
		let expected = [
		{
			name: 'Bud Light',
			description: `A factory is working on the new Bud Light Platinum.`,
			standard: Standard.PAL,
			definition: Definition.SD,
			start: new Timecode(0, 0, 0, 0),
			end: new Timecode(0,0,30,12)
		},
		{
			name: 'Audi',
			description: `A group of vampires are having a party in the woods. The vampire in charge of drinks (blood types) arrives in his Audi. The bright lights of the car kills all of the vampires, with him wondering where everyone went afterwards.`,
			standard: Standard.PAL,
			definition: Definition.SD,
			start: new Timecode(0,0,0,0),
			end: new Timecode(0,1,30,0)
		},
		{
			name: 'Chrysler',
			description: `Clint Eastwood recounts how the automotive industry survived the Great Recession .`,
			standard: Standard.PAL,
			definition: Definition.SD,
			start: new Timecode(0,0,0,0),
			end: new Timecode(0,0,10,14)
		}
		]

		let actual = target.getAvailableClips(Standard.PAL, Definition.SD)

		expect(actual).toEqual(expected);

	});

	it('should return only NTSC standard and HD definition clips when asked ', () => {

		let target = new ClipService();
		let expected = [
		{
			name: 'Volkswagen "Black Beetle"',
			description: `A computer-generated black beetle runs fast, as it is referencing the new Volkswagen model.`,
			standard: Standard.NTSC,
			definition: Definition.HD,
			start: new Timecode(0,0,0,0),
			end: new Timecode(0,0,30,0)
		}
		]

		let actual = target.getAvailableClips(Standard.NTSC, Definition.HD)

		expect(actual).toEqual(expected);

	});

	// TODO: more thorough tests
});

