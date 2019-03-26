import { Timecode } from './Timecode';
import { Standard } from './Standard';
import { NTSCStandard } from './NTSCStandard';
import { PALStandard } from './PALStandard';

describe('the Timecode type', () => {

	let palFps: number;
	let ntscFps: number;

	beforeEach(() => {

		palFps = (new PALStandard()).fps;
		ntscFps = (new NTSCStandard()).fps;
	});

	it('should return a sensible value with null values passed in', () => {

		let target = new Timecode(0, 0, 0, 0);
		let expected = 0;

		let actual = target.toMilliseconds(0);

		expect(actual).toEqual(expected);
	});

	it('should return a sensible value with negative values passed in', () => {

		let target = new Timecode(-1, -10, -30, -25);
		let expected = 0;

		let actual = target.toMilliseconds(palFps);

		expect(actual).toEqual(expected);
	});

	it('should return the correct value with a PAL framerate', () => {

		let target = new Timecode(0, 0, 0, 1);
		let expected = 40;

		let actual = target.toMilliseconds(palFps);

		expect(actual).toEqual(expected);
	});

	it('should return the correct value with a NTSC framerate', () => {
		let tolerance = 0.001
		let target = new Timecode(0, 0, 0, 1);
		let expected = 33.3334;

		let actual = target.toMilliseconds(ntscFps);

		expect(Math.abs(expected - actual)).toBeLessThan(tolerance);
	});

	it('should return the correct value for PAL in general', () => {

		let target = new Timecode(1, 10, 30, 25);
		let expected = 4231000;

		let actual = target.toMilliseconds(palFps);

		expect(actual).toEqual(expected);
	});

	it('should return the correct value for NTSC in general', () => {
		let target = new Timecode(1, 10, 30, 30);
		let expected = 4231000;

		let actual = target.toMilliseconds(ntscFps);

		expect(actual).toEqual(expected);
	});

	it('ignores the framerate if it is negative', () => {
		let target = new Timecode(1, 10, 30, 30);
		let expected = 4230000;

		let actual = target.toMilliseconds(-30);

		expect(actual).toEqual(expected);
	});


	it('should return the correct milliseconds for Bud Light', () => {
		let target = new Timecode(0, 0, 30, 12);
		let expected = 30480;

		let actual = target.toMilliseconds(palFps);

		expect(actual).toEqual(expected);
	});

	it('should return the correct milliseconds for Audi', () => {
		let target = new Timecode(0, 1, 30, 0);
		let expected = 90000;

		let actual = target.toMilliseconds(palFps);

		expect(actual).toEqual(expected);
	});

	it('should return the correct milliseconds for Chrysler', () => {
		let target = new Timecode(0, 0, 10, 14);
		let expected = 10560;

		let actual = target.toMilliseconds(palFps);

		expect(actual).toEqual(expected);
	});


	it('should return the correct timecode', () => {

		var expected = new Timecode(0, 2, 11, 1);
		var actual = Timecode.create(30480 + 90000 + 10560, palFps);

		expect(actual).toEqual(expected);

	});

	it ('should return the correct string for a default timecode', () => {

		let target = new Timecode(0, 0, 0, 0);

		var expected = '00:00:00:00';

		var actual = target.toString();

		expect(actual).toEqual(expected);

	});

	it ('should return the correct string for a sensible timecode', () => {

		let target = new Timecode(1, 30, 12, 5);

		var expected = '01:30:12:05';

		var actual = target.toString();

		expect(actual).toEqual(expected);

	});
});