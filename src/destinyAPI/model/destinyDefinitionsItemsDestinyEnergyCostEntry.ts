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
 * Some plugs cost Energy, which is a stat on the item that can be increased by other plugs (that, at least in Armor 2.0, have a \"masterworks-like\" mechanic for upgrading). If a plug has costs, the details of that cost are defined here.
 */
export interface DestinyDefinitionsItemsDestinyEnergyCostEntry { 
    /**
     * The Energy cost for inserting this plug.
     */
    energyCost?: number;
    /**
     * The type of energy that this plug costs, as a reference to the DestinyEnergyTypeDefinition of the energy type.
     */
    energyTypeHash?: number;
    /**
     * The type of energy that this plug costs, in enum form.
     */
    energyType?: number;
}
