export class Timecode {

	constructor (private hours: number, private minutes: number, private seconds: number, private frames: number) {
		if (this.hours < 0) {
			this.hours = 0;
		}

		if (this.minutes < 0) {
			this.minutes = 0;
		}

		if (this.seconds < 0) {
			this.seconds = 0;
		}

		if (this.frames < 0) {
			this.frames = 0;
		}
	}

	private pad(number: number) : string {
		return (number < 10 ? '0' : '') + number
	}

	toString(): string {
		return this.pad(this.hours) + ':' + this.pad(this.minutes) + ':' + this.pad(this.seconds) + ':' + this.pad(this.frames);
	}

	toMilliseconds(fps: number): number {

		return this.hours * 60 * 60 * 1000
				+ this.minutes * 60 * 1000
				+ this.seconds * 1000
				+ (fps <= 0 ? 0 : (this.frames * (1000 / fps)));
	}

	static create(milliseconds: number, fps: number) : Timecode {

		let remainingMilliseconds = milliseconds;

		let frames: number = 0;
		let seconds: number = 0;
		let minutes: number = 0;
		let hours: number = 0;

		if (remainingMilliseconds > 0) {
			frames = ((remainingMilliseconds / 1000) * fps) % fps;
			let framesMilliseconds = (frames / fps) * 1000;
			remainingMilliseconds -= framesMilliseconds;
		}

		if (remainingMilliseconds > 0) {
			seconds = (remainingMilliseconds / 1000) % 60;
			let secondsMilliseconds = seconds * 1000 ;
			remainingMilliseconds -= secondsMilliseconds;
		}

		if (remainingMilliseconds > 0) {
			minutes = (remainingMilliseconds / 1000 / 60) % 60;
			let minutesMilliseconds = minutes * 60 * 1000;
			remainingMilliseconds -= minutesMilliseconds;
		}

		if (remainingMilliseconds > 0) {
			hours = (remainingMilliseconds / 1000 / 60 / 60);
		}

		return new Timecode(Math.round(hours), Math.round(minutes), Math.round(seconds), Math.round(frames));
	}
}