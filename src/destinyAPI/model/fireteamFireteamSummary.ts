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


export interface FireteamFireteamSummary { 
    fireteamId?: number;
    groupId?: number;
    platform?: number;
    activityType?: number;
    isImmediate?: boolean;
    scheduledTime?: string;
    ownerMembershipId?: number;
    playerSlotCount?: number;
    alternateSlotCount?: number;
    availablePlayerSlotCount?: number;
    availableAlternateSlotCount?: number;
    title?: string;
    dateCreated?: string;
    dateModified?: string;
    isPublic?: boolean;
    locale?: string;
    isValid?: boolean;
    datePlayerModified?: string;
    titleBeforeModeration?: string;
}

