import { Injectable } from '@angular/core'
import { Standard, Definition, Clip, Timecode } from '../custom-types/index';


@Injectable()
export class ClipService {

	
	getAvailableClips(standard: Standard, definition: Definition) {

		let clips: Clip[] = [];

		for (let clip of ALL_CLIPS) {
			if (clip.standard === standard && clip.definition === definition) {
				clips.push(clip);
			}
		}

		return clips;
	}

	
}

const  ALL_CLIPS: Clip[] = [
{
	name: 'Bud Light',
	description: `A factory is working on the new Bud Light Platinum.`,
	standard: Standard.PAL,
	definition: Definition.SD,
	start: new Timecode(0, 0, 0, 0),
	end: new Timecode(0,0,30,12)
},
{
	name: "M&M's",
	description: `At a party, a brown-shelled M&M is mistaken for being naked. As a result, the red M&M tears off its skin and dances to " Sexy and I Know It " by LMFAO .`,
	standard: Standard.NTSC,
	definition: Definition.SD,
	start: new Timecode(0,0,0,0),
	end: new Timecode(0,0,15,27)
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
},
{
	name: 'Best Buy',
	description: `An ad featuring the creators of the cameraphone, Siri , and the first text message . The creators of Words with Friends also appear parodying the incident involving Alec Baldwin playing the game on an airplane.`,
	standard: Standard.PAL,
	definition: Definition.HD,
	start: new Timecode(0,0,0,0),
	end: new Timecode(0,0,10,5)
},
{
	name: 'Captain America: The First Avenger',
	description: `Video Promo`,
	standard: Standard.PAL,
	definition: Definition.HD,
	start: new Timecode(0,0,0,0),
	end: new Timecode(0,0,20,10)
},
{
	name: 'Volkswagen "Black Beetle"',
	description: `A computer-generated black beetle runs fast, as it is referencing the new Volkswagen model.`,
	standard: Standard.NTSC,
	definition: Definition.HD,
	start: new Timecode(0,0,0,0),
	end: new Timecode(0,0,30,0)
}
]
