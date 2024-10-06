export type CompassPoints = {
	"N": string;
	"NNE": string;
	"NE": string;
	"ENE": string;
	"E": string;
	"ESE": string;
	"SE": string;
	"SSE": string;
	"S": string;
	"SSW": string;
	"SW": string;
	"WSW": string;
	"W": string;
	"WNW": string;
	"NW": string;
	"NNW": string;
};

export type WindDirectionRange = {
	range: [number, number];
	point: keyof CompassPoints;
};

export enum FormatType {
	LONG = "longFormat",
	SHORT = "shortFormat"
}
