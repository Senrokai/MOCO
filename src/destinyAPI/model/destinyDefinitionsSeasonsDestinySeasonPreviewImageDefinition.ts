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
 * Defines the thumbnail icon, high-res image, and video link for promotional images
 */
export interface DestinyDefinitionsSeasonsDestinySeasonPreviewImageDefinition { 
    /**
     * A thumbnail icon path to preview seasonal content, probably 480x270.
     */
    thumbnailImage?: string;
    /**
     * An optional path to a high-resolution image, probably 1920x1080.
     */
    highResImage?: string;
}

