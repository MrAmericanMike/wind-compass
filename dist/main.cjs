'use strict';

var FormatType;
(function (FormatType) {
    FormatType["LONG"] = "longFormat";
    FormatType["SHORT"] = "shortFormat";
})(FormatType || (FormatType = {}));

class WindCompass {
    /**
     * Creates an instance of WindUtil.
     * @param {CompassPoints} longFormat - the long format of the compass points - Example: {N: "Norte", NNE: "Nornordeste", ...}
     * @param {CompassPoints} shortFormat - the short format of the compass points - Example: {N: "N.", NNE: "N.N.E.", ...}
     */
    constructor(longFormat, shortFormat) {
        this.LONG_FORMAT = {
            "N": "North",
            "NNE": "North North East",
            "NE": "North East",
            "ENE": "East North East",
            "E": "East",
            "ESE": "East South East",
            "SE": "South East",
            "SSE": "South South East",
            "S": "South",
            "SSW": "South South West",
            "SW": "South West",
            "WSW": "West South West",
            "W": "West",
            "WNW": "West North West",
            "NW": "North West",
            "NNW": "North North West"
        };
        this.SHORT_FORMAT = {
            "N": "N",
            "NNE": "NNE",
            "NE": "NE",
            "ENE": "ENE",
            "E": "E",
            "ESE": "ESE",
            "SE": "SE",
            "SSE": "SSE",
            "S": "S",
            "SSW": "SSW",
            "SW": "SW",
            "WSW": "WSW",
            "W": "W",
            "WNW": "WNW",
            "NW": "NW",
            "NNW": "NNW"
        };
        if (longFormat) {
            this.validateCompassPoints(longFormat, FormatType.LONG);
            this.LONG_FORMAT = longFormat;
        }
        if (shortFormat) {
            this.validateCompassPoints(shortFormat, FormatType.SHORT);
            this.SHORT_FORMAT = shortFormat;
        }
    }
    /**
     * Returns a string describing the wind direction based on the given degree.
     * Wind coming from the East (78.75 - 101.25) is represented as "East" or "E" depending on the longFormat parameter.
     * @param {number} degree - the degree of the wind direction - Must be between 0 and 360 (both included)
     * @param {boolean} longFormat - if true, the long format of the compass points will be used. If false, the short format will be used. Defaults to true.
     * @returns {string} - a string describing the wind direction
     */
    getWindFromDirection(degree, longFormat = true) {
        if (degree < 0 || degree > 360) {
            throw new Error("Invalid degree. Degree must be between 0 and 360.");
        }
        const DIRECTION = WindCompass.DIRECTIONS.find((d) => {
            return (degree >= d.range[0] && degree < d.range[1]) || (degree === 360 && d.range[0] === 0);
        });
        if (!DIRECTION) {
            throw new Error("Invalid degree. Degree must be between 0 and 360.");
        }
        return longFormat ? this.LONG_FORMAT[DIRECTION.point] : this.SHORT_FORMAT[DIRECTION.point];
    }
    /**
     * Returns a string describing the wind direction based on the given degree.
     * Wind coming from the East (78.75 - 101.25) is represented as "E".
     * @param {number} degree - the degree of the wind direction - Must be between 0 and 360 (both included)
     * @returns {string} - a string describing the wind direction
     */
    getShortWindDirection(degree) {
        return this.getWindFromDirection(degree, false);
    }
    /**
     * Returns a string describing the wind direction based on the given degree.
     * Wind coming from the East (78.75 - 101.25) is represented as "East".
     * @param {number} degree - the degree of the wind direction - Must be between 0 and 360 (both included)
     * @returns {string} - a string describing the wind direction
     */
    getLongWindDirection(degree) {
        return this.getWindFromDirection(degree, true);
    }
    /**
     * Validates that the CompassPoints object is properly formatted.
     * @param {CompassPoints} compassPoints - the compass points object to validate
     * @param {FormatType} formatType - either "longFormat" or "shortFormat"
     * @throws {Error} - throws error if the format is invalid
     */
    validateCompassPoints(compassPoints, formatType) {
        if (typeof compassPoints !== "object" || compassPoints === null) {
            throw new Error(`${formatType} must be an object`);
        }
        const VALID_KEYS = Object.keys(this.LONG_FORMAT);
        const CHECK_KEYS = Object.keys(compassPoints);
        for (const KEY of CHECK_KEYS) {
            if (!VALID_KEYS.includes(KEY)) {
                throw new Error(`${formatType} contains an invalid compass direction key: ${KEY}`);
            }
            if (typeof compassPoints[KEY] !== "string") {
                throw new Error(`${formatType} values must be strings, but found ${typeof compassPoints[KEY]} for key: ${KEY}`);
            }
        }
        for (const VALID_KEY of VALID_KEYS) {
            if (!(VALID_KEY in compassPoints)) {
                throw new Error(`${formatType} is missing a valid direction: ${VALID_KEY}`);
            }
        }
    }
}
WindCompass.DIRECTIONS = [
    { range: [0, 11.25], point: "N" },
    { range: [11.25, 33.75], point: "NNE" },
    { range: [33.75, 56.25], point: "NE" },
    { range: [56.25, 78.75], point: "ENE" },
    { range: [78.75, 101.25], point: "E" },
    { range: [101.25, 123.75], point: "ESE" },
    { range: [123.75, 146.25], point: "SE" },
    { range: [146.25, 168.75], point: "SSE" },
    { range: [168.75, 191.25], point: "S" },
    { range: [191.25, 213.75], point: "SSW" },
    { range: [213.75, 236.25], point: "SW" },
    { range: [236.25, 258.75], point: "WSW" },
    { range: [258.75, 281.25], point: "W" },
    { range: [281.25, 303.75], point: "WNW" },
    { range: [303.75, 326.25], point: "NW" },
    { range: [326.25, 348.75], point: "NNW" },
    { range: [348.75, 360], point: "N" }
];

module.exports = WindCompass;
//# sourceMappingURL=main.cjs.map
