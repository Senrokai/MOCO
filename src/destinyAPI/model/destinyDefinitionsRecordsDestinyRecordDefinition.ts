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
import { DestinyDefinitionsCommonDestinyDisplayPropertiesDefinition } from './destinyDefinitionsCommonDestinyDisplayPropertiesDefinition';
import { DestinyDefinitionsRecordsDestinyRecordIntervalBlock } from './destinyDefinitionsRecordsDestinyRecordIntervalBlock';
import { DestinyDefinitionsRecordsDestinyRecordCompletionBlock } from './destinyDefinitionsRecordsDestinyRecordCompletionBlock';
import { DestinyDefinitionsRecordsDestinyRecordTitleBlock } from './destinyDefinitionsRecordsDestinyRecordTitleBlock';
import { DestinyDefinitionsPresentationDestinyPresentationChildBlock } from './destinyDefinitionsPresentationDestinyPresentationChildBlock';
import { DestinyDefinitionsRecordsSchemaRecordStateBlock } from './destinyDefinitionsRecordsSchemaRecordStateBlock';
import { DestinyDefinitionsRecordsDestinyRecordExpirationBlock } from './destinyDefinitionsRecordsDestinyRecordExpirationBlock';
import { DestinyDefinitionsPresentationDestinyPresentationNodeRequirementsBlock } from './destinyDefinitionsPresentationDestinyPresentationNodeRequirementsBlock';
import { DestinyDestinyItemQuantity } from './destinyDestinyItemQuantity';


export interface DestinyDefinitionsRecordsDestinyRecordDefinition { 
    displayProperties?: DestinyDefinitionsCommonDestinyDisplayPropertiesDefinition;
    /**
     * Indicates whether this Record\'s state is determined on a per-character or on an account-wide basis.
     */
    scope?: number;
    presentationInfo?: DestinyDefinitionsPresentationDestinyPresentationChildBlock;
    loreHash?: number;
    objectiveHashes?: Array<number>;
    recordValueStyle?: number;
    forTitleGilding?: boolean;
    titleInfo?: DestinyDefinitionsRecordsDestinyRecordTitleBlock;
    completionInfo?: DestinyDefinitionsRecordsDestinyRecordCompletionBlock;
    stateInfo?: DestinyDefinitionsRecordsSchemaRecordStateBlock;
    requirements?: DestinyDefinitionsPresentationDestinyPresentationNodeRequirementsBlock;
    expirationInfo?: DestinyDefinitionsRecordsDestinyRecordExpirationBlock;
    /**
     * Some records have multiple \'interval\' objectives, and the record may be claimed at each completed interval
     */
    intervalInfo?: DestinyDefinitionsRecordsDestinyRecordIntervalBlock;
    /**
     * If there is any publicly available information about rewards earned for achieving this record, this is the list of those items.   However, note that some records intentionally have \"hidden\" rewards. These will not be returned in this list.
     */
    rewardItems?: Array<DestinyDestinyItemQuantity>;
    presentationNodeType?: number;
    traitIds?: Array<string>;
    traitHashes?: Array<number>;
    /**
     * A quick reference to presentation nodes that have this node as a child. Presentation nodes can be parented under multiple parents.
     */
    parentNodeHashes?: Array<number>;
    /**
     * The unique identifier for this entity. Guaranteed to be unique for the type of entity, but not globally.  When entities refer to each other in Destiny content, it is this hash that they are referring to.
     */
    hash?: number;
    /**
     * The index of the entity as it was found in the investment tables.
     */
    index?: number;
    /**
     * If this is true, then there is an entity with this identifier/type combination, but BNet is not yet allowed to show it. Sorry!
     */
    redacted?: boolean;
}

