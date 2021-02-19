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
import { DestinyEntitiesItemsDestinyItemInstanceEnergy } from './destinyEntitiesItemsDestinyItemInstanceEnergy';


/**
 * If an item is \"instanced\", this will contain information about the item\'s instance that doesn\'t fit easily into other components. One might say this is the \"essential\" instance data for the item.  Items are instanced if they require information or state that can vary. For instance, weapons are Instanced: they are given a unique identifier, uniquely generated stats, and can have their properties altered. Non-instanced items have none of these things: for instance, Glimmer has no unique properties aside from how much of it you own.  You can tell from an item\'s definition whether it will be instanced or not by looking at the DestinyInventoryItemDefinition\'s definition.inventory.isInstanceItem property.
 */
export interface DestinyEntitiesItemsDestinyItemInstanceComponent { 
    /**
     * If the item has a damage type, this is the item\'s current damage type.
     */
    damageType?: number;
    /**
     * The current damage type\'s hash, so you can look up localized info and icons for it.
     */
    damageTypeHash?: number;
    /**
     * The item stat that we consider to be \"primary\" for the item. For instance, this would be \"Attack\" for Weapons or \"Defense\" for armor.
     */
    primaryStat?: DestinyDestinyStat;
    /**
     * The Item\'s \"Level\" has the most significant bearing on its stats, such as Light and Power.
     */
    itemLevel?: number;
    /**
     * The \"Quality\" of the item has a lesser - but still impactful - bearing on stats like Light and Power.
     */
    quality?: number;
    /**
     * Is the item currently equipped on the given character?
     */
    isEquipped?: boolean;
    /**
     * If this is an equippable item, you can check it here. There are permanent as well as transitory reasons why an item might not be able to be equipped: check cannotEquipReason for details.
     */
    canEquip?: boolean;
    /**
     * If the item cannot be equipped until you reach a certain level, that level will be reflected here.
     */
    equipRequiredLevel?: number;
    /**
     * Sometimes, there are limitations to equipping that are represented by character-level flags called \"unlocks\".  This is a list of flags that they need in order to equip the item that the character has not met. Use these to look up the descriptions to show in your UI by looking up the relevant DestinyUnlockDefinitions for the hashes.
     */
    unlockHashesRequiredToEquip?: Array<number>;
    /**
     * If you cannot equip the item, this is a flags enum that enumerates all of the reasons why you couldn\'t equip the item. You may need to refine your UI further by using unlockHashesRequiredToEquip and equipRequiredLevel.
     */
    cannotEquipReason?: number;
    /**
     * If populated, this item has a breaker type corresponding to the given value. See DestinyBreakerTypeDefinition for more details.
     */
    breakerType?: DestinyEntitiesItemsDestinyItemInstanceComponent.BreakerTypeEnum;
    /**
     * If populated, this is the hash identifier for the item\'s breaker type. See DestinyBreakerTypeDefinition for more details.
     */
    breakerTypeHash?: number;
    /**
     * IF populated, this item supports Energy mechanics (i.e. Armor 2.0), and these are the current details of its energy type and available capacity to spend energy points.
     */
    energy?: DestinyEntitiesItemsDestinyItemInstanceEnergy;
}
export namespace DestinyEntitiesItemsDestinyItemInstanceComponent {
    export type BreakerTypeEnum = 0 | 1 | 2 | 3;
    export const BreakerTypeEnum = {
        NUMBER_0: 0 as BreakerTypeEnum,
        NUMBER_1: 1 as BreakerTypeEnum,
        NUMBER_2: 2 as BreakerTypeEnum,
        NUMBER_3: 3 as BreakerTypeEnum
    };
}

