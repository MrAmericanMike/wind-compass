![License MIT](https://img.shields.io/badge/license-MIT-blue)

# WindCompass

Wind coming from direction from degree to compass point

## Description:

Convert wind coming from direction (in degrees) to compass points with short/long formats and internationalization for localized names.
Example: 0 degrees is North, 90 degrees is East, 180 degrees is South, and 270 degrees is West.

---

### Installation:

```sh
npm install wind-compass
```

---

### Usage:

```js
import WindCompass from "wind-compass";

const WC = new WindCompass();

// Example usage - Default methods
console.log(WC.getWindFromDirection(0)); // North
console.log(WC.getWindFromDirection(0), false); // N

// Example usage - Long format
console.log(WC.getLongWindDirection(0)); // North
console.log(WC.getLongWindDirection(45)); // North East

// Example usage - Short format
console.log(WC.getShortWindDirection(270)); // W
console.log(WC.getShortWindDirection(180)); // S
```

With internationalization

```js
const WindCompass = require("wind-compass");

// Spanish localized compass points (long format)
const spanishLongFormat = {
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

// Spanish localized compass points (short format)
const spanishShortFormat = {
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

// Create an instance of WindCompass with Spanish internationalization
const WC = new WindCompass(spanishLongFormat, spanishShortFormat);

// Example usage
console.log(WC.getLongWindDirection(45)); // Nordeste
console.log(WC.getShortWindDirection(45)); // NNE

console.log(WC.getLongWindDirection(270)); // Oeste
console.log(WC.getShortWindDirection(270)); // O
```

