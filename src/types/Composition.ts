export type Role = 'Composer' | 'Lyricist';

export type Contributor = {
	id: string;
	roles: Role[];
};

export type Composition = {
	id: string;
	created: string;
	title: string;
	creationYear: number;
	contributors: Contributor[];
};
