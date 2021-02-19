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
import { UserEmailViewDefinition } from './userEmailViewDefinition';
import { UserEmailOptInDefinition } from './userEmailOptInDefinition';
import { UserEmailSubscriptionDefinition } from './userEmailSubscriptionDefinition';


/**
 * The set of all email subscription/opt-in settings and definitions.
 */
export interface UserEmailSettings { 
    /**
     * Keyed by the name identifier of the opt-in definition.
     */
    optInDefinitions?: { [key: string]: UserEmailOptInDefinition; };
    /**
     * Keyed by the name identifier of the Subscription definition.
     */
    subscriptionDefinitions?: { [key: string]: UserEmailSubscriptionDefinition; };
    /**
     * Keyed by the name identifier of the View definition.
     */
    views?: { [key: string]: UserEmailViewDefinition; };
}

