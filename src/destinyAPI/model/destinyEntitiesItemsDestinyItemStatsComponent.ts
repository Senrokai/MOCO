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
import { DestinyDestinyStat } from './destinyDestinyStat';


/**
 * If you want the stats on an item\'s instanced data, get this component.  These are stats like Attack, Defense etc... and *not* historical stats.  Note that some stats have additional computation in-game at runtime - for instance, Magazine Size - and thus these stats might not be 100% accurate compared to what you see in-game for some stats. I know, it sucks. I hate it too.
 */
export interface DestinyEntitiesItemsDestinyItemStatsComponent { 
    /**
     * If the item has stats that it provides (damage, defense, etc...), it will be given here.
     */
    stats?: { [key: string]: DestinyDestinyStat; };
}
