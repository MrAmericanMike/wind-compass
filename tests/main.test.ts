import { describe, expect, it } from "vitest";
import WindCompass from "../src/main";

const validSpanishLongFormat = {
	"N": "Norte",
	"NNE": "Nornordeste",
	"NE": "Nordeste",
	"ENE": "Estenordeste",
	"E": "Este",
	"ESE": "Estesudeste",
	"SE": "Sudeste",
	"SSE": "Sudsudeste",
	"S": "Sur",
	"SSW": "Sudsudoeste",
	"SW": "Suroeste",
	"WSW": "Oesudoeste",
	"W": "Oeste",
	"WNW": "Oestenoroeste",
	"NW": "Noroeste",
	"NNW": "Nornoroeste"
};

const validSpanishShortFormat = {
	"N": "N",
	"NNE": "NNE",
	"NE": "NE",
	"ENE": "ENE",
	"E": "E",
	"ESE": "ESE",
	"SE": "SE",
	"SSE": "SSE",
	"S": "S",
	"SSW": "SSO",
	"SW": "SO",
	"WSW": "OSO",
	"W": "O",
	"WNW": "ONO",
	"NW": "NO",
	"NNW": "NNO"
};

const wrongTypeLongFormat = {
	"N": "Norte",
	"NNE": "Nornordeste",
	"NE": "Nordeste",
	"ENE": "Estenordeste",
	"E": "Este",
	"ESE": "Estesudeste",
	"SE": "Sudeste",
	"SSE": "Sudsudeste",
	"S": 8,
	"SSW": "Sudsudoeste",
	"SW": "Suroeste",
	"WSW": "Oesudoeste",
	"W": "Oeste",
	"WNW": "Oestenoroeste",
	"NW": "Noroeste",
	"NNW": "Nornoroeste"
};

const wrongTypeShortFormat = {
	"N": "N",
	"NNE": "NNE",
	"NE": "NE",
	"ENE": "ENE",
	"E": "E",
	"ESE": "ESE",
	"SE": "SE",
	"SSE": "SSE",
	"S": "S",
	"SSW": "SSO",
	"SW": "SO",
	"WSW": "OSO",
	"W": ["O"],
	"WNW": "ONO",
	"NW": "NO",
	"NNW": "NNO"
};

const invalidLongFormat = {
	"N": "Norte",
	"NNE": "Nornordeste",
	"NE": "Nordeste"
};

const invalidShortFormat = {
	"N": "N",
	"NNE": "NNE",
	"NE": "NE"
};

describe("WindCompass 16 Directions Tests", () => {
	it("should return correct wind direction for 0 degrees", () => {
		const WC = new WindCompass();
		expect(WC.getLongWindDirection(0)).toBe("North");
		expect(WC.getLongWindDirection(360)).toBe("North");
		expect(WC.getShortWindDirection(0)).toBe("N");
		expect(WC.getShortWindDirection(360)).toBe("N");

		expect(WC.getWindFromDirection(0)).toBe("North");
		expect(WC.getWindFromDirection(360)).toBe("North");
		expect(WC.getWindFromDirection(0, false)).toBe("N");
		expect(WC.getWindFromDirection(360, false)).toBe("N");
	});

	it("should return correct wind direction for 22.5 degrees", () => {
		const WC = new WindCompass();
		expect(WC.getLongWindDirection(22.5)).toBe("North North East");
		expect(WC.getShortWindDirection(22.5)).toBe("NNE");
		expect(WC.getWindFromDirection(22.5)).toBe("North North East");
		expect(WC.getWindFromDirection(22.5, false)).toBe("NNE");
	});

	it("should return correct wind direction for 45 degrees", () => {
		const WC = new WindCompass();
		expect(WC.getLongWindDirection(45)).toBe("North East");
		expect(WC.getShortWindDirection(45)).toBe("NE");
		expect(WC.getWindFromDirection(45)).toBe("North East");
		expect(WC.getWindFromDirection(45, false)).toBe("NE");
	});

	it("should return correct wind direction for 67.5 degrees", () => {
		const WC = new WindCompass();
		expect(WC.getLongWindDirection(67.5)).toBe("East North East");
		expect(WC.getShortWindDirection(67.5)).toBe("ENE");
		expect(WC.getWindFromDirection(67.5)).toBe("East North East");
		expect(WC.getWindFromDirection(67.5, false)).toBe("ENE");
	});

	it("should return correct wind direction for 90 degrees", () => {
		const WC = new WindCompass();
		expect(WC.getLongWindDirection(90)).toBe("East");
		expect(WC.getShortWindDirection(90)).toBe("E");
		expect(WC.getWindFromDirection(90)).toBe("East");
		expect(WC.getWindFromDirection(90, false)).toBe("E");
	});

	it("should return correct wind direction for 112.5 degrees", () => {
		const WC = new WindCompass();
		expect(WC.getLongWindDirection(112.5)).toBe("East South East");
		expect(WC.getShortWindDirection(112.5)).toBe("ESE");
		expect(WC.getWindFromDirection(112.5)).toBe("East South East");
		expect(WC.getWindFromDirection(112.5, false)).toBe("ESE");
	});

	it("should return correct wind direction for 135 degrees", () => {
		const WC = new WindCompass();
		expect(WC.getLongWindDirection(135)).toBe("South East");
		expect(WC.getShortWindDirection(135)).toBe("SE");
		expect(WC.getWindFromDirection(135)).toBe("South East");
		expect(WC.getWindFromDirection(135, false)).toBe("SE");
	});

	it("should return correct wind direction for 157.5 degrees", () => {
		const WC = new WindCompass();
		expect(WC.getLongWindDirection(157.5)).toBe("South South East");
		expect(WC.getShortWindDirection(157.5)).toBe("SSE");
		expect(WC.getWindFromDirection(157.5)).toBe("South South East");
		expect(WC.getWindFromDirection(157.5, false)).toBe("SSE");
	});

	it("should return correct wind direction for 180 degrees", () => {
		const WC = new WindCompass();
		expect(WC.getLongWindDirection(180)).toBe("South");
		expect(WC.getShortWindDirection(180)).toBe("S");
		expect(WC.getWindFromDirection(180)).toBe("South");
		expect(WC.getWindFromDirection(180, false)).toBe("S");
	});

	it("should return correct wind direction for 202.5 degrees", () => {
		const WC = new WindCompass();
		expect(WC.getLongWindDirection(202.5)).toBe("South South West");
		expect(WC.getShortWindDirection(202.5)).toBe("SSW");
		expect(WC.getWindFromDirection(202.5)).toBe("South South West");
		expect(WC.getWindFromDirection(202.5, false)).toBe("SSW");
	});

	it("should return correct wind direction for 225 degrees", () => {
		const WC = new WindCompass();
		expect(WC.getLongWindDirection(225)).toBe("South West");
		expect(WC.getShortWindDirection(225)).toBe("SW");
		expect(WC.getWindFromDirection(225)).toBe("South West");
		expect(WC.getWindFromDirection(225, false)).toBe("SW");
	});

	it("should return correct wind direction for 247.5 degrees", () => {
		const WC = new WindCompass();
		expect(WC.getLongWindDirection(247.5)).toBe("West South West");
		expect(WC.getShortWindDirection(247.5)).toBe("WSW");
		expect(WC.getWindFromDirection(247.5)).toBe("West South West");
		expect(WC.getWindFromDirection(247.5, false)).toBe("WSW");
	});

	it("should return correct wind direction for 270 degrees", () => {
		const WC = new WindCompass();
		expect(WC.getLongWindDirection(270)).toBe("West");
		expect(WC.getShortWindDirection(270)).toBe("W");
		expect(WC.getWindFromDirection(270)).toBe("West");
		expect(WC.getWindFromDirection(270, false)).toBe("W");
	});

	it("should return correct wind direction for 292.5 degrees", () => {
		const WC = new WindCompass();
		expect(WC.getLongWindDirection(292.5)).toBe("West North West");
		expect(WC.getShortWindDirection(292.5)).toBe("WNW");
		expect(WC.getWindFromDirection(292.5)).toBe("West North West");
		expect(WC.getWindFromDirection(292.5, false)).toBe("WNW");
	});

	it("should return correct wind direction for 315 degrees", () => {
		const WC = new WindCompass();
		expect(WC.getLongWindDirection(315)).toBe("North West");
		expect(WC.getShortWindDirection(315)).toBe("NW");
		expect(WC.getWindFromDirection(315)).toBe("North West");
		expect(WC.getWindFromDirection(315, false)).toBe("NW");
	});

	it("should return correct wind direction for 337.5 degrees", () => {
		const WC = new WindCompass();
		expect(WC.getLongWindDirection(337.5)).toBe("North North West");
		expect(WC.getShortWindDirection(337.5)).toBe("NNW");
		expect(WC.getWindFromDirection(337.5)).toBe("North North West");
		expect(WC.getWindFromDirection(337.5, false)).toBe("NNW");
	});
});

describe("WindCompass tests with invalid degrees", () => {
	it("should throw error when passed invalid degree", () => {
		const WC = new WindCompass();
		expect(() => {
			WC.getLongWindDirection(-1);
		}).toThrowError("Invalid degree. Degree must be between 0 and 360.");

		expect(() => {
			WC.getLongWindDirection(361);
		}).toThrowError("Invalid degree. Degree must be between 0 and 360.");

		expect(() => {
			/*@ts-expect-error*/
			WC.getLongWindDirection("Chocolate");
		}).toThrowError("Invalid degree. Degree must be between 0 and 360.");
	});
});

describe("WindCompass with Custom Localization Tests", () => {
	it("Should fail when passed invalid longFormat (not an object)", () => {
		expect(() => {
			/*@ts-expect-error*/
			new WindCompass("Chocolate");
		}).toThrowError("longFormat must be an object");
	});

	it("Should fail when passed invalid shortFormat (not an object)", () => {
		expect(() => {
			/*@ts-expect-error*/
			new WindCompass(validSpanishLongFormat, "Chocolate");
		}).toThrowError("shortFormat must be an object");
	});

	it("Should fail when passed invalid longFormat missing keys", () => {
		expect(() => {
			/*@ts-expect-error*/
			new WindCompass(invalidLongFormat);
		}).toThrowError("longFormat is missing a valid direction: ENE");
	});

	it("Should fail when passed invalid shortFormat missing keys", () => {
		expect(() => {
			/*@ts-expect-error*/
			new WindCompass(validSpanishLongFormat, invalidShortFormat);
		}).toThrowError("shortFormat is missing a valid direction: ENE");
	});

	it("Should fail when passed invalid longFormat with wrong keys", () => {
		expect(() => {
			/*@ts-expect-error*/
			new WindCompass({ wrongKey: "Chocolate" });
		}).toThrowError("longFormat contains an invalid compass direction key: wrongKey");
	});

	it("Should fail when passed invalid shortFormat with wrong keys", () => {
		expect(() => {
			/*@ts-expect-error*/
			new WindCompass(validSpanishLongFormat, { wrongKey: "Chocolate" });
		}).toThrowError("shortFormat contains an invalid compass direction key: wrongKey");
	});

	it("Should fail when passed longFormat with correct keys but invalid type", () => {
		expect(() => {
			/*@ts-expect-error*/
			new WindCompass(wrongTypeLongFormat);
		}).toThrowError("longFormat values must be strings, but found number for key: S");
	});

	it("Should fail when passed shortFormat with correct keys but invalid type", () => {
		expect(() => {
			/*@ts-expect-error*/
			new WindCompass(validSpanishLongFormat, wrongTypeShortFormat);
		}).toThrowError("shortFormat values must be strings, but found object for key: W");
	});

	it("Should create  valid WindCompass with custom localization", () => {
		const WC = new WindCompass(validSpanishLongFormat, validSpanishShortFormat);
		expect(WC.getLongWindDirection(0)).toBe("Norte");
		expect(WC.getShortWindDirection(0)).toBe("N");
		expect(WC.getWindFromDirection(0)).toBe("Norte");
		expect(WC.getWindFromDirection(0, false)).toBe("N");

		expect(WC.getLongWindDirection(270)).toBe("Oeste");
		expect(WC.getShortWindDirection(270)).toBe("O");
		expect(WC.getWindFromDirection(270)).toBe("Oeste");
		expect(WC.getWindFromDirection(270, false)).toBe("O");
	});
});
