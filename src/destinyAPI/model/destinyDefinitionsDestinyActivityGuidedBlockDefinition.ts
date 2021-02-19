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
 * Guided Game information for this activity.
 */
export interface DestinyDefinitionsDestinyActivityGuidedBlockDefinition { 
    /**
     * The maximum amount of people that can be in the waiting lobby.
     */
    guidedMaxLobbySize?: number;
    /**
     * The minimum amount of people that can be in the waiting lobby.
     */
    guidedMinLobbySize?: number;
    /**
     * If -1, the guided group cannot be disbanded. Otherwise, take the total # of players in the activity and subtract this number: that is the total # of votes needed for the guided group to disband.
     */
    guidedDisbandCount?: number;
}

