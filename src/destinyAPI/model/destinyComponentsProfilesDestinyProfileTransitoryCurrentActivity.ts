/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * The version of the OpenAPI document: 2.10.0
 * Contact: support@bungie.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * If you are playing in an activity, this is some information about it.  Note that we cannot guarantee any of this resembles what ends up in the PGCR in any way. They are sourced by two entirely separate systems with their own logic, and the one we source this data from should be considered non-authoritative in comparison.
 */
export interface DestinyComponentsProfilesDestinyProfileTransitoryCurrentActivity { 
    /**
     * When the activity started.
     */
    startTime?: string;
    /**
     * If you\'re still in it but it \"ended\" (like when folks are dancing around the loot after they beat a boss), this is when the activity ended.
     */
    endTime?: string;
    /**
     * This is what our non-authoritative source thought the score was.
     */
    score?: number;
    /**
     * If you have human opponents, this is the highest opposing team\'s score.
     */
    highestOpposingFactionScore?: number;
    /**
     * This is how many human or poorly crafted aimbot opponents you have.
     */
    numberOfOpponents?: number;
    /**
     * This is how many human or poorly crafted aimbots are on your team.
     */
    numberOfPlayers?: number;
}

