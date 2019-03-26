import { Clip } from './Clip';
import { Timecode } from './Timecode';

describe('the Clip type', () => {


	it('should have sensible values for start and end when first created', () => {

		let target = new Clip();

		expect(target.start == null).toBeFalsy();
		expect(target.end == null).toBeFalsy();
	});
});
