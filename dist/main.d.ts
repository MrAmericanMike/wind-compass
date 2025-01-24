import { CompassPoints } from "./types";
export default class WindCompass {
    private static DIRECTIONS;
    private LONG_FORMAT;
    private SHORT_FORMAT;
    /**
     * Creates an instance of WindUtil.
     * @param {CompassPoints} longFormat - the long format of the compass points - Example: {N: "Norte", NNE: "Nornordeste", ...}
     * @param {CompassPoints} shortFormat - the short format of the compass points - Example: {N: "N.", NNE: "N.N.E.", ...}
     */
    constructor(longFormat?: CompassPoints, shortFormat?: CompassPoints);
    /**
     * Returns a string describing the wind direction based on the given degree.
     * Wind coming from the East (78.75 - 101.25) is represented as "East" or "E" depending on the longFormat parameter.
     * @param {number} degree - the degree of the wind direction - Must be between 0 and 360 (both included)
     * @param {boolean} longFormat - if true, the long format of the compass points will be used. If false, the short format will be used. Defaults to true.
     * @returns {string} - a string describing the wind direction
     */
    getWindFromDirection(degree: number, longFormat?: boolean): string | never;
    /**
     * Returns a string describing the wind direction based on the given degree.
     * Wind coming from the East (78.75 - 101.25) is represented as "E".
     * @param {number} degree - the degree of the wind direction - Must be between 0 and 360 (both included)
     * @returns {string} - a string describing the wind direction
     */
    getShortWindDirection(degree: number): string | never;
    /**
     * Returns a string describing the wind direction based on the given degree.
     * Wind coming from the East (78.75 - 101.25) is represented as "East".
     * @param {number} degree - the degree of the wind direction - Must be between 0 and 360 (both included)
     * @returns {string} - a string describing the wind direction
     */
    getLongWindDirection(degree: number): string | never;
    /**
     * Validates that the CompassPoints object is properly formatted.
     * @param {CompassPoints} compassPoints - the compass points object to validate
     * @param {FormatType} formatType - either "longFormat" or "shortFormat"
     * @throws {Error} - throws error if the format is invalid
     */
    private validateCompassPoints;
}
