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
import { ContentModelsTagMetadataItem } from './contentModelsTagMetadataItem';


export interface ContentModelsTagMetadataDefinition { 
    description?: string;
    order?: number;
    items?: Array<ContentModelsTagMetadataItem>;
    datatype?: string;
    name?: string;
    isRequired?: boolean;
}
