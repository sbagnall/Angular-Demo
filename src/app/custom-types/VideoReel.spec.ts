import { VideoReel } from './VideoReel';
import { Clip } from './Clip';
import { Timecode } from './Timecode';
import { IStandard } from './IStandard';
import { PALStandard } from './PALStandard';
import { NTSCStandard } from './NTSCStandard';
import { Standard } from './Standard';
import { Definition } from './Definition';

describe('the VideoReel type', () => {

	let defaultClip: Clip;
	let palStandard: IStandard;
	let ntscStandard: IStandard;
	let palSdClips: Clip[];
	let ntscSdClips: Clip[];

	beforeEach(() => {
		defaultClip = new Clip();
		
		palStandard = new PALStandard();
		ntscStandard = new NTSCStandard();

		palSdClips = [
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
		}];


		ntscSdClips = [
		{
			name: "M&M's",
			description: `At a party, a brown-shelled M&M is mistaken for being naked. As a result, the red M&M tears off its skin and dances to " Sexy and I Know It " by LMFAO .`,
			standard: Standard.NTSC,
			definition: Definition.SD,
			start: new Timecode(0,0,0,0),
			end: new Timecode(0,0,15,27)
		},
		{
			name: 'Fiat',
			description: `A man walks through a street to discover a beautiful woman ( Catrinel Menghia ) standing on a parking space, who proceeds to approach and seduce him, when successfully doing so he then discovered he was about to kiss a Fiat 500 Abarth .`,
			standard: Standard.NTSC,
			definition: Definition.SD,
			start: new Timecode(0,0,0,0),
			end: new Timecode(0,0,18,11)
		},
		{
			name: 'Pepsi',
			description: `People in the Middles Ages try to entertain their king ( Elton John ) for a Pepsi. While the first person fails, a mysterious person ( Season 1 X Factor winner Melanie Amaro ) wins the Pepsi by singing Aretha Franklin 's " Respect "." After she wins, she overthrows the king and gives Pepsi to all the town.`,
			standard: Standard.NTSC,
			definition: Definition.SD,
			start: new Timecode(0,0,0,0),
			end: new Timecode(0,0,20,0)
		}];
	});

	it('should return a sensible value for when getDurationInMilliseconds is called on a default instance', () => {

		let target = new VideoReel(palStandard);
		let expected = new Timecode(0, 0, 0, 0);

		let actual = target.getDuration();

		expect(actual).toEqual(expected);
	});

	it('should have an empty array of clips when first created', () => {	

		let target = new VideoReel(palStandard);

		expect(target.clips == null).toBeFalsy();
		expect(target.clips.length).toEqual(0) ;

	});

	it('should allow adding a clip', () => {

		let target = new VideoReel(palStandard);
		
		target.clips.push(defaultClip);

		expect(target.clips.length).toEqual(1) ;
	});

	it('should return the correct duration with only a default clip added', () => {

		let target = new VideoReel(palStandard);
		
		target.clips.push(defaultClip);

		let expected = new Timecode(0, 0, 0, 0);
		
		let actual = target.getDuration();

		expect(actual).toEqual(expected);
	});

	it('should return the correct duration with all PAL SD clips added', () => {

		let target = new VideoReel(palStandard);

		for (let clip of palSdClips) {
			target.clips.push(clip);
		}
		
		let expected = new Timecode(0, 2, 11, 1);
		
		let actual = target.getDuration();

		expect(actual).toEqual(expected);
	});

	it('should return the correct duration with all NTSD SD clips added', () => {
		let tolerance = 0.001;
		let target = new VideoReel(ntscStandard);

		for (let clip of ntscSdClips) {
			target.clips.push(clip);	
		}

		let expected = new Timecode(0, 0, 54, 8);
		let actual = target.getDuration();

		expect(actual).toEqual(expected);
	});

});

