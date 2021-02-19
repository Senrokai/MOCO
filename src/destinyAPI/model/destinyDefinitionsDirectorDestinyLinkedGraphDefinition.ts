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
import { DestinyDefinitionsDestinyUnlockExpressionDefinition } from './destinyDefinitionsDestinyUnlockExpressionDefinition';
import { DestinyDefinitionsDirectorDestinyLinkedGraphEntryDefinition } from './destinyDefinitionsDirectorDestinyLinkedGraphEntryDefinition';


/**
 * This describes links between the current graph and others, as well as when that link is relevant.
 */
export interface DestinyDefinitionsDirectorDestinyLinkedGraphDefinition { 
    description?: string;
    name?: string;
    unlockExpression?: DestinyDefinitionsDestinyUnlockExpressionDefinition;
    linkedGraphId?: number;
    linkedGraphs?: Array<DestinyDefinitionsDirectorDestinyLinkedGraphEntryDefinition>;
    overview?: string;
}

