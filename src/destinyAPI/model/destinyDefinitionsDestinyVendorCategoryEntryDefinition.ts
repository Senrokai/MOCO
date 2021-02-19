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
import { DestinyDefinitionsDestinyVendorCategoryOverlayDefinition } from './destinyDefinitionsDestinyVendorCategoryOverlayDefinition';


/**
 * This is the definition for a single Vendor Category, into which Sale Items are grouped.
 */
export interface DestinyDefinitionsDestinyVendorCategoryEntryDefinition { 
    /**
     * The index of the category in the original category definitions for the vendor.
     */
    categoryIndex?: number;
    /**
     * Used in sorting items in vendors... but there\'s a lot more to it. Just go with the order provided in the itemIndexes property on the DestinyVendorCategoryComponent instead, it should be more reliable than trying to recalculate it yourself.
     */
    sortValue?: number;
    /**
     * The hashed identifier for the category.
     */
    categoryHash?: number;
    /**
     * The amount of items that will be available when this category is shown.
     */
    quantityAvailable?: number;
    /**
     * If items aren\'t up for sale in this category, should we still show them (greyed out)?
     */
    showUnavailableItems?: boolean;
    /**
     * If you don\'t have the currency required to buy items from this category, should the items be hidden?
     */
    hideIfNoCurrency?: boolean;
    /**
     * True if this category doesn\'t allow purchases.
     */
    hideFromRegularPurchase?: boolean;
    /**
     * The localized string for making purchases from this category, if it is different from the vendor\'s string for purchasing.
     */
    buyStringOverride?: string;
    /**
     * If the category is disabled, this is the localized description to show.
     */
    disabledDescription?: string;
    /**
     * The localized title of the category.
     */
    displayTitle?: string;
    /**
     * If this category has an overlay prompt that should appear, this contains the details of that prompt.
     */
    overlay?: DestinyDefinitionsDestinyVendorCategoryOverlayDefinition;
    /**
     * A shortcut for the vendor item indexes sold under this category. Saves us from some expensive reorganization at runtime.
     */
    vendorItemIndexes?: Array<number>;
    /**
     * Sometimes a category isn\'t actually used to sell items, but rather to preview them. This implies different UI (and manual placement of the category in the UI) in the game, and special treatment.
     */
    isPreview?: boolean;
    /**
     * If true, this category only displays items: you can\'t purchase anything in them.
     */
    isDisplayOnly?: boolean;
    resetIntervalMinutesOverride?: number;
    resetOffsetMinutesOverride?: number;
}

