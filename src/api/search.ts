import { Composition } from '../types/Composition';

const compositions = require('../compositions.json').compositions as Composition[];

const searchMusic = (text: string) =>
	compositions.filter((e) => e.title.toLocaleLowerCase().includes(text.toLocaleLowerCase()));

export const APIClient = {
	searchMusic,
};
