// ===================================================================================================
//                           _  __     _ _
//                          | |/ /__ _| | |_ _  _ _ _ __ _
//                          | ' </ _` | |  _| || | '_/ _` |
//                          |_|\_\__,_|_|\__|\_,_|_| \__,_|
//
// This file is part of the Vidiun Collaborative Media Suite which allows users
// to do with audio, video, and animation what Wiki platfroms allow them to do with
// text.
//
// Copyright (C) 2006-2016  Vidiun Inc.
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as
// published by the Free Software Foundation, either version 3 of the
// License, or (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.
//
// @ignore
// ===================================================================================================
var util = require('util');
var vidiun = require('./VidiunClientBase');

/**
 * @param totalCount int  (readOnly).
 */
function VidiunListResponse(){
	VidiunListResponse.super_.call(this);
	this.totalCount = null;
}
module.exports.VidiunListResponse = VidiunListResponse;

util.inherits(VidiunListResponse, vidiun.VidiunObjectBase);


/**
 */
function VidiunBaseRestriction(){
	VidiunBaseRestriction.super_.call(this);
}
module.exports.VidiunBaseRestriction = VidiunBaseRestriction;

util.inherits(VidiunBaseRestriction, vidiun.VidiunObjectBase);


/**
 * @param id int The id of the Access Control Profile (readOnly).
 * @param partnerId int  (readOnly).
 * @param name string The name of the Access Control Profile.
 * @param systemName string System name of the Access Control Profile.
 * @param description string The description of the Access Control Profile.
 * @param createdAt int Creation date as Unix timestamp (In seconds) (readOnly).
 * @param isDefault int True if this Conversion Profile is the default.
 * @param restrictions array Array of Access Control Restrictions.
 * @param containsUnsuportedRestrictions bool Indicates that the access control profile is new and should be handled using VidiunAccessControlProfile object and accessControlProfile service (readOnly).
 */
function VidiunAccessControl(){
	VidiunAccessControl.super_.call(this);
	this.id = null;
	this.partnerId = null;
	this.name = null;
	this.systemName = null;
	this.description = null;
	this.createdAt = null;
	this.isDefault = null;
	this.restrictions = null;
	this.containsUnsuportedRestrictions = null;
}
module.exports.VidiunAccessControl = VidiunAccessControl;

util.inherits(VidiunAccessControl, vidiun.VidiunObjectBase);


/**
 * @param type string The type of the condition context.
 */
function VidiunContextTypeHolder(){
	VidiunContextTypeHolder.super_.call(this);
	this.type = null;
}
module.exports.VidiunContextTypeHolder = VidiunContextTypeHolder;

util.inherits(VidiunContextTypeHolder, vidiun.VidiunObjectBase);


/**
 */
function VidiunAccessControlContextTypeHolder(){
	VidiunAccessControlContextTypeHolder.super_.call(this);
}
module.exports.VidiunAccessControlContextTypeHolder = VidiunAccessControlContextTypeHolder;

util.inherits(VidiunAccessControlContextTypeHolder, VidiunContextTypeHolder);


/**
 * @param type string The type of the action (readOnly).
 */
function VidiunRuleAction(){
	VidiunRuleAction.super_.call(this);
	this.type = null;
}
module.exports.VidiunRuleAction = VidiunRuleAction;

util.inherits(VidiunRuleAction, vidiun.VidiunObjectBase);


/**
 * @param type string The type of the access control condition (readOnly).
 * @param description string .
 * @param not bool .
 */
function VidiunCondition(){
	VidiunCondition.super_.call(this);
	this.type = null;
	this.description = null;
	this.not = null;
}
module.exports.VidiunCondition = VidiunCondition;

util.inherits(VidiunCondition, vidiun.VidiunObjectBase);


/**
 * @param description string Short Rule Description.
 * @param ruleData string Rule Custom Data to allow saving rule specific information.
 * @param message string Message to be thrown to the player in case the rule is fulfilled.
 * @param actions array Actions to be performed by the player in case the rule is fulfilled.
 * @param conditions array Conditions to validate the rule.
 * @param contexts array Indicates what contexts should be tested by this rule.
 * @param stopProcessing bool Indicates that this rule is enough and no need to continue checking the rest of the rules.
 * @param forceAdminValidation int Indicates if we should force vs validation for admin vs users as well.
 */
function VidiunRule(){
	VidiunRule.super_.call(this);
	this.description = null;
	this.ruleData = null;
	this.message = null;
	this.actions = null;
	this.conditions = null;
	this.contexts = null;
	this.stopProcessing = null;
	this.forceAdminValidation = null;
}
module.exports.VidiunRule = VidiunRule;

util.inherits(VidiunRule, vidiun.VidiunObjectBase);


/**
 * @param id int The id of the Access Control Profile (readOnly).
 * @param partnerId int  (readOnly).
 * @param name string The name of the Access Control Profile.
 * @param systemName string System name of the Access Control Profile.
 * @param description string The description of the Access Control Profile.
 * @param createdAt int Creation time as Unix timestamp (In seconds) (readOnly).
 * @param updatedAt int Update time as Unix timestamp (In seconds) (readOnly).
 * @param isDefault int True if this access control profile is the partner default.
 * @param rules array Array of access control rules.
 */
function VidiunAccessControlProfile(){
	VidiunAccessControlProfile.super_.call(this);
	this.id = null;
	this.partnerId = null;
	this.name = null;
	this.systemName = null;
	this.description = null;
	this.createdAt = null;
	this.updatedAt = null;
	this.isDefault = null;
	this.rules = null;
}
module.exports.VidiunAccessControlProfile = VidiunAccessControlProfile;

util.inherits(VidiunAccessControlProfile, vidiun.VidiunObjectBase);


/**
 * @param key string .
 * @param value string .
 */
function VidiunKeyValue(){
	VidiunKeyValue.super_.call(this);
	this.key = null;
	this.value = null;
}
module.exports.VidiunKeyValue = VidiunKeyValue;

util.inherits(VidiunKeyValue, vidiun.VidiunObjectBase);


/**
 * @param referrer string URL to be used to test domain conditions.
 * @param ip string IP to be used to test geographic location conditions.
 * @param vs string Vidiun session to be used to test session and user conditions.
 * @param userAgent string Browser or client application to be used to test agent conditions.
 * @param time int Unix timestamp (In seconds) to be used to test entry scheduling, keep null to use now.
 * @param contexts array Indicates what contexts should be tested. No contexts means any context.
 * @param hashes array Array of hashes to pass to the access control profile scope.
 */
function VidiunAccessControlScope(){
	VidiunAccessControlScope.super_.call(this);
	this.referrer = null;
	this.ip = null;
	this.vs = null;
	this.userAgent = null;
	this.time = null;
	this.contexts = null;
	this.hashes = null;
}
module.exports.VidiunAccessControlScope = VidiunAccessControlScope;

util.inherits(VidiunAccessControlScope, vidiun.VidiunObjectBase);


/**
 */
function VidiunSearchItem(){
	VidiunSearchItem.super_.call(this);
}
module.exports.VidiunSearchItem = VidiunSearchItem;

util.inherits(VidiunSearchItem, vidiun.VidiunObjectBase);


/**
 * @param orderBy string .
 * @param advancedSearch VidiunSearchItem .
 */
function VidiunFilter(){
	VidiunFilter.super_.call(this);
	this.orderBy = null;
	this.advancedSearch = null;
}
module.exports.VidiunFilter = VidiunFilter;

util.inherits(VidiunFilter, vidiun.VidiunObjectBase);


/**
 * @param idEqual int .
 * @param idIn string .
 * @param partnerIdEqual int .
 * @param partnerIdIn string .
 * @param systemNameEqual string .
 * @param systemNameIn string .
 */
function VidiunReportBaseFilter(){
	VidiunReportBaseFilter.super_.call(this);
	this.idEqual = null;
	this.idIn = null;
	this.partnerIdEqual = null;
	this.partnerIdIn = null;
	this.systemNameEqual = null;
	this.systemNameIn = null;
}
module.exports.VidiunReportBaseFilter = VidiunReportBaseFilter;

util.inherits(VidiunReportBaseFilter, VidiunFilter);


/**
 */
function VidiunReportFilter(){
	VidiunReportFilter.super_.call(this);
}
module.exports.VidiunReportFilter = VidiunReportFilter;

util.inherits(VidiunReportFilter, VidiunReportBaseFilter);


/**
 * @param from_time string Query start time (in local time).
 * @param to_time string Query end time (in local time).
 * @param metrics string Comma separated metrics list.
 * @param utcOffset float Timezone offset from UTC (in minutes).
 * @param dimensions string Comma separated dimensions list.
 * @param filters array Array of filters.
 */
function VidiunAnalyticsFilter(){
	VidiunAnalyticsFilter.super_.call(this);
	this.from_time = null;
	this.to_time = null;
	this.metrics = null;
	this.utcOffset = null;
	this.dimensions = null;
	this.filters = null;
}
module.exports.VidiunAnalyticsFilter = VidiunAnalyticsFilter;

util.inherits(VidiunAnalyticsFilter, vidiun.VidiunObjectBase);


/**
 * @param id string  (readOnly).
 * @param cuePointType string  (readOnly).
 * @param status int  (readOnly).
 * @param entryId string  (insertOnly).
 * @param partnerId int  (readOnly).
 * @param createdAt int  (readOnly).
 * @param updatedAt int  (readOnly).
 * @param triggeredAt int .
 * @param tags string .
 * @param startTime int Start time in milliseconds.
 * @param userId string  (readOnly).
 * @param partnerData string .
 * @param partnerSortValue int .
 * @param forceStop int .
 * @param thumbOffset int .
 * @param systemName string .
 */
function VidiunCuePoint(){
	VidiunCuePoint.super_.call(this);
	this.id = null;
	this.cuePointType = null;
	this.status = null;
	this.entryId = null;
	this.partnerId = null;
	this.createdAt = null;
	this.updatedAt = null;
	this.triggeredAt = null;
	this.tags = null;
	this.startTime = null;
	this.userId = null;
	this.partnerData = null;
	this.partnerSortValue = null;
	this.forceStop = null;
	this.thumbOffset = null;
	this.systemName = null;
}
module.exports.VidiunCuePoint = VidiunCuePoint;

util.inherits(VidiunCuePoint, vidiun.VidiunObjectBase);


/**
 * @param parentId string  (insertOnly).
 * @param text string .
 * @param endTime int End time in milliseconds.
 * @param duration int Duration in milliseconds (readOnly).
 * @param depth int Depth in the tree (readOnly).
 * @param childrenCount int Number of all descendants (readOnly).
 * @param directChildrenCount int Number of children, first generation only (readOnly).
 * @param isPublic int Is the annotation public.
 * @param searchableOnEntry int Should the cue point get indexed on the entry.
 */
function VidiunAnnotation(){
	VidiunAnnotation.super_.call(this);
	this.parentId = null;
	this.text = null;
	this.endTime = null;
	this.duration = null;
	this.depth = null;
	this.childrenCount = null;
	this.directChildrenCount = null;
	this.isPublic = null;
	this.searchableOnEntry = null;
}
module.exports.VidiunAnnotation = VidiunAnnotation;

util.inherits(VidiunAnnotation, VidiunCuePoint);


/**
 * @param name string .
 * @param value string .
 */
function VidiunApiExceptionArg(){
	VidiunApiExceptionArg.super_.call(this);
	this.name = null;
	this.value = null;
}
module.exports.VidiunApiExceptionArg = VidiunApiExceptionArg;

util.inherits(VidiunApiExceptionArg, vidiun.VidiunObjectBase);


/**
 * @param id string The id of the application token (readOnly).
 * @param token string The application token (readOnly).
 * @param partnerId int  (readOnly).
 * @param createdAt int Creation time as Unix timestamp (In seconds) (readOnly).
 * @param updatedAt int Update time as Unix timestamp (In seconds) (readOnly).
 * @param status int Application token status (readOnly).
 * @param expiry int Expiry time of current token (unix timestamp in seconds).
 * @param sessionType int Type of VS (Vidiun Session) that created using the current token.
 * @param sessionUserId string User id of VS (Vidiun Session) that created using the current token.
 * @param sessionDuration int Expiry duration of VS (Vidiun Session) that created using the current token (in seconds).
 * @param sessionPrivileges string Comma separated privileges to be applied on VS (Vidiun Session) that created using the current token.
 * @param hashType string .
 */
function VidiunAppToken(){
	VidiunAppToken.super_.call(this);
	this.id = null;
	this.token = null;
	this.partnerId = null;
	this.createdAt = null;
	this.updatedAt = null;
	this.status = null;
	this.expiry = null;
	this.sessionType = null;
	this.sessionUserId = null;
	this.sessionDuration = null;
	this.sessionPrivileges = null;
	this.hashType = null;
}
module.exports.VidiunAppToken = VidiunAppToken;

util.inherits(VidiunAppToken, vidiun.VidiunObjectBase);


/**
 * @param id string The ID of the Flavor Asset (readOnly).
 * @param entryId string The entry ID of the Flavor Asset (readOnly).
 * @param partnerId int  (readOnly).
 * @param version int The version of the Flavor Asset (readOnly).
 * @param size int The size (in KBytes) of the Flavor Asset (readOnly).
 * @param tags string Tags used to identify the Flavor Asset in various scenarios.
 * @param fileExt string The file extension (insertOnly).
 * @param createdAt int  (readOnly).
 * @param updatedAt int  (readOnly).
 * @param deletedAt int  (readOnly).
 * @param description string System description, error message, warnings and failure cause (readOnly).
 * @param partnerData string Partner private data.
 * @param partnerDescription string Partner friendly description.
 * @param actualSourceAssetParamsIds string Comma separated list of source flavor params ids.
 */
function VidiunAsset(){
	VidiunAsset.super_.call(this);
	this.id = null;
	this.entryId = null;
	this.partnerId = null;
	this.version = null;
	this.size = null;
	this.tags = null;
	this.fileExt = null;
	this.createdAt = null;
	this.updatedAt = null;
	this.deletedAt = null;
	this.description = null;
	this.partnerData = null;
	this.partnerDescription = null;
	this.actualSourceAssetParamsIds = null;
}
module.exports.VidiunAsset = VidiunAsset;

util.inherits(VidiunAsset, vidiun.VidiunObjectBase);


/**
 */
function VidiunAssetDistributionCondition(){
	VidiunAssetDistributionCondition.super_.call(this);
}
module.exports.VidiunAssetDistributionCondition = VidiunAssetDistributionCondition;

util.inherits(VidiunAssetDistributionCondition, vidiun.VidiunObjectBase);


/**
 * @param validationError string The validation error description that will be set on the "data" property on VidiunDistributionValidationErrorMissingAsset if rule was not fulfilled.
 * @param assetDistributionConditions array An array of asset distribution conditions.
 */
function VidiunAssetDistributionRule(){
	VidiunAssetDistributionRule.super_.call(this);
	this.validationError = null;
	this.assetDistributionConditions = null;
}
module.exports.VidiunAssetDistributionRule = VidiunAssetDistributionRule;

util.inherits(VidiunAssetDistributionRule, vidiun.VidiunObjectBase);


/**
 * @param value string .
 */
function VidiunString(){
	VidiunString.super_.call(this);
	this.value = null;
}
module.exports.VidiunString = VidiunString;

util.inherits(VidiunString, vidiun.VidiunObjectBase);


/**
 * @param id int The id of the Flavor Params (readOnly).
 * @param partnerId int .
 * @param name string The name of the Flavor Params.
 * @param systemName string System name of the Flavor Params.
 * @param description string The description of the Flavor Params.
 * @param createdAt int Creation date as Unix timestamp (In seconds) (readOnly).
 * @param isSystemDefault int True if those Flavor Params are part of system defaults (readOnly).
 * @param tags string The Flavor Params tags are used to identify the flavor for different usage (e.g. web, hd, mobile).
 * @param requiredPermissions array Array of partner permisison names that required for using this asset params.
 * @param sourceRemoteStorageProfileId int Id of remote storage profile that used to get the source, zero indicates Vidiun data center.
 * @param remoteStorageProfileIds int Comma seperated ids of remote storage profiles that the flavor distributed to, the distribution done by the conversion engine.
 * @param mediaParserType string Media parser type to be used for post-conversion validation.
 * @param sourceAssetParamsIds string Comma seperated ids of source flavor params this flavor is created from.
 */
function VidiunAssetParams(){
	VidiunAssetParams.super_.call(this);
	this.id = null;
	this.partnerId = null;
	this.name = null;
	this.systemName = null;
	this.description = null;
	this.createdAt = null;
	this.isSystemDefault = null;
	this.tags = null;
	this.requiredPermissions = null;
	this.sourceRemoteStorageProfileId = null;
	this.remoteStorageProfileIds = null;
	this.mediaParserType = null;
	this.sourceAssetParamsIds = null;
}
module.exports.VidiunAssetParams = VidiunAssetParams;

util.inherits(VidiunAssetParams, vidiun.VidiunObjectBase);


/**
 */
function VidiunResource(){
	VidiunResource.super_.call(this);
}
module.exports.VidiunResource = VidiunResource;

util.inherits(VidiunResource, vidiun.VidiunObjectBase);


/**
 */
function VidiunContentResource(){
	VidiunContentResource.super_.call(this);
}
module.exports.VidiunContentResource = VidiunContentResource;

util.inherits(VidiunContentResource, VidiunResource);


/**
 * @param resource VidiunContentResource The content resource to associate with asset params.
 * @param assetParamsId int The asset params to associate with the reaource.
 */
function VidiunAssetParamsResourceContainer(){
	VidiunAssetParamsResourceContainer.super_.call(this);
	this.resource = null;
	this.assetParamsId = null;
}
module.exports.VidiunAssetParamsResourceContainer = VidiunAssetParamsResourceContainer;

util.inherits(VidiunAssetParamsResourceContainer, VidiunResource);


/**
 * @param filename string The filename of the attachment asset content.
 * @param title string Attachment asset title.
 * @param format string The attachment format.
 * @param status int The status of the asset (readOnly).
 */
function VidiunAttachmentAsset(){
	VidiunAttachmentAsset.super_.call(this);
	this.filename = null;
	this.title = null;
	this.format = null;
	this.status = null;
}
module.exports.VidiunAttachmentAsset = VidiunAttachmentAsset;

util.inherits(VidiunAttachmentAsset, VidiunAsset);


/**
 */
function VidiunAuditTrailInfo(){
	VidiunAuditTrailInfo.super_.call(this);
}
module.exports.VidiunAuditTrailInfo = VidiunAuditTrailInfo;

util.inherits(VidiunAuditTrailInfo, vidiun.VidiunObjectBase);


/**
 * @param id int  (readOnly).
 * @param createdAt int  (readOnly).
 * @param parsedAt int Indicates when the data was parsed (readOnly).
 * @param status int  (readOnly).
 * @param auditObjectType string .
 * @param objectId string .
 * @param relatedObjectId string .
 * @param relatedObjectType string .
 * @param entryId string .
 * @param masterPartnerId int  (readOnly).
 * @param partnerId int  (readOnly).
 * @param requestId string  (readOnly).
 * @param userId string .
 * @param action string .
 * @param data VidiunAuditTrailInfo .
 * @param vs string  (readOnly).
 * @param context int  (readOnly).
 * @param entryPoint string The API service and action that called and caused this audit (readOnly).
 * @param serverName string  (readOnly).
 * @param ipAddress string  (readOnly).
 * @param userAgent string  (readOnly).
 * @param clientTag string .
 * @param description string .
 * @param errorDescription string  (readOnly).
 */
function VidiunAuditTrail(){
	VidiunAuditTrail.super_.call(this);
	this.id = null;
	this.createdAt = null;
	this.parsedAt = null;
	this.status = null;
	this.auditObjectType = null;
	this.objectId = null;
	this.relatedObjectId = null;
	this.relatedObjectType = null;
	this.entryId = null;
	this.masterPartnerId = null;
	this.partnerId = null;
	this.requestId = null;
	this.userId = null;
	this.action = null;
	this.data = null;
	this.vs = null;
	this.context = null;
	this.entryPoint = null;
	this.serverName = null;
	this.ipAddress = null;
	this.userAgent = null;
	this.clientTag = null;
	this.description = null;
	this.errorDescription = null;
}
module.exports.VidiunAuditTrail = VidiunAuditTrail;

util.inherits(VidiunAuditTrail, vidiun.VidiunObjectBase);


/**
 * @param descriptor string .
 * @param oldValue string .
 * @param newValue string .
 */
function VidiunAuditTrailChangeItem(){
	VidiunAuditTrailChangeItem.super_.call(this);
	this.descriptor = null;
	this.oldValue = null;
	this.newValue = null;
}
module.exports.VidiunAuditTrailChangeItem = VidiunAuditTrailChangeItem;

util.inherits(VidiunAuditTrailChangeItem, vidiun.VidiunObjectBase);


/**
 */
function VidiunOperationAttributes(){
	VidiunOperationAttributes.super_.call(this);
}
module.exports.VidiunOperationAttributes = VidiunOperationAttributes;

util.inherits(VidiunOperationAttributes, vidiun.VidiunObjectBase);


/**
 * @param id string Auto generated 10 characters alphanumeric string (readOnly).
 * @param name string Entry name (Min 1 chars).
 * @param description string Entry description.
 * @param partnerId int  (readOnly).
 * @param userId string The ID of the user who is the owner of this entry.
 * @param creatorId string The ID of the user who created this entry (insertOnly).
 * @param tags string Entry tags.
 * @param adminTags string Entry admin tags can be updated only by administrators.
 * @param categories string Comma separated list of full names of categories to which this entry belongs. Only categories that don't have entitlement (privacy context) are listed, to retrieve the full list of categories, use the categoryEntry.list action.
 * @param categoriesIds string Comma separated list of ids of categories to which this entry belongs. Only categories that don't have entitlement (privacy context) are listed, to retrieve the full list of categories, use the categoryEntry.list action.
 * @param status string  (readOnly).
 * @param moderationStatus int Entry moderation status (readOnly).
 * @param moderationCount int Number of moderation requests waiting for this entry (readOnly).
 * @param type string The type of the entry, this is auto filled by the derived entry object.
 * @param createdAt int Entry creation date as Unix timestamp (In seconds) (readOnly).
 * @param updatedAt int Entry update date as Unix timestamp (In seconds) (readOnly).
 * @param rank float The calculated average rank. rank = totalRank / votes (readOnly).
 * @param totalRank int The sum of all rank values submitted to the baseEntry.anonymousRank action (readOnly).
 * @param votes int A count of all requests made to the baseEntry.anonymousRank action (readOnly).
 * @param groupId int .
 * @param partnerData string Can be used to store various partner related data as a string.
 * @param downloadUrl string Download URL for the entry (readOnly).
 * @param searchText string Indexed search text for full text search (readOnly).
 * @param licenseType int License type used for this entry.
 * @param version int Version of the entry data (readOnly).
 * @param thumbnailUrl string Thumbnail URL (readOnly).
 * @param accessControlId int The Access Control ID assigned to this entry (null when not set, send -1 to remove).
 * @param startDate int Entry scheduling start date (null when not set, send -1 to remove).
 * @param endDate int Entry scheduling end date (null when not set, send -1 to remove).
 * @param referenceId string Entry external reference id.
 * @param replacingEntryId string ID of temporary entry that will replace this entry when it's approved and ready for replacement (readOnly).
 * @param replacedEntryId string ID of the entry that will be replaced when the replacement approved and this entry is ready (readOnly).
 * @param replacementStatus string Status of the replacement readiness and approval (readOnly).
 * @param partnerSortValue int Can be used to store various partner related data as a numeric value.
 * @param conversionProfileId int Override the default ingestion profile.
 * @param redirectEntryId string IF not empty, points to an entry ID the should replace this current entry's id.
 * @param rootEntryId string ID of source root entry, used for clipped, skipped and cropped entries that created from another entry (readOnly).
 * @param parentEntryId string ID of source root entry, used for defining entires association.
 * @param operationAttributes array clipping, skipping and cropping attributes that used to create this entry.
 * @param entitledUsersEdit string list of user ids that are entitled to edit the entry (no server enforcement) The difference between entitledUsersEdit and entitledUsersPublish is applicative only.
 * @param entitledUsersPublish string list of user ids that are entitled to publish the entry (no server enforcement) The difference between entitledUsersEdit and entitledUsersPublish is applicative only.
 * @param capabilities string Comma seperated string of the capabilities of the entry. Any capability needed can be added to this list (readOnly).
 * @param templateEntryId string Template entry id (insertOnly).
 */
function VidiunBaseEntry(){
	VidiunBaseEntry.super_.call(this);
	this.id = null;
	this.name = null;
	this.description = null;
	this.partnerId = null;
	this.userId = null;
	this.creatorId = null;
	this.tags = null;
	this.adminTags = null;
	this.categories = null;
	this.categoriesIds = null;
	this.status = null;
	this.moderationStatus = null;
	this.moderationCount = null;
	this.type = null;
	this.createdAt = null;
	this.updatedAt = null;
	this.rank = null;
	this.totalRank = null;
	this.votes = null;
	this.groupId = null;
	this.partnerData = null;
	this.downloadUrl = null;
	this.searchText = null;
	this.licenseType = null;
	this.version = null;
	this.thumbnailUrl = null;
	this.accessControlId = null;
	this.startDate = null;
	this.endDate = null;
	this.referenceId = null;
	this.replacingEntryId = null;
	this.replacedEntryId = null;
	this.replacementStatus = null;
	this.partnerSortValue = null;
	this.conversionProfileId = null;
	this.redirectEntryId = null;
	this.rootEntryId = null;
	this.parentEntryId = null;
	this.operationAttributes = null;
	this.entitledUsersEdit = null;
	this.entitledUsersPublish = null;
	this.capabilities = null;
	this.templateEntryId = null;
}
module.exports.VidiunBaseEntry = VidiunBaseEntry;

util.inherits(VidiunBaseEntry, vidiun.VidiunObjectBase);


/**
 */
function VidiunBaseEntryCloneOptionItem(){
	VidiunBaseEntryCloneOptionItem.super_.call(this);
}
module.exports.VidiunBaseEntryCloneOptionItem = VidiunBaseEntryCloneOptionItem;

util.inherits(VidiunBaseEntryCloneOptionItem, vidiun.VidiunObjectBase);


/**
 */
function VidiunBaseResponseProfile(){
	VidiunBaseResponseProfile.super_.call(this);
}
module.exports.VidiunBaseResponseProfile = VidiunBaseResponseProfile;

util.inherits(VidiunBaseResponseProfile, vidiun.VidiunObjectBase);


/**
 * @param id string  (readOnly).
 * @param feedUrl string  (readOnly).
 * @param partnerId int  (readOnly).
 * @param playlistId string link a playlist that will set what content the feed will include
 * if empty, all content will be included in feed.
 * @param name string feed name.
 * @param status int feed status (readOnly).
 * @param type int feed type (insertOnly).
 * @param landingPage string Base URL for each video, on the partners site
 * This is required by all syndication types.
 * @param createdAt int Creation date as Unix timestamp (In seconds) (readOnly).
 * @param allowEmbed bool allow_embed tells google OR yahoo weather to allow embedding the video on google OR yahoo video results
 * or just to provide a link to the landing page.
 * it is applied on the video-player_loc property in the XML (google)
 * and addes media-player tag (yahoo).
 * @param playerUiconfId int Select a uiconf ID as player skin to include in the vwidget url.
 * @param flavorParamId int .
 * @param transcodeExistingContent bool .
 * @param addToDefaultConversionProfile bool .
 * @param categories string .
 * @param storageId int .
 * @param entriesOrderBy string .
 * @param enforceEntitlement bool Should enforce entitlement on feed entries.
 * @param privacyContext string Set privacy context for search entries that assiged to private and public categories within a category privacy context.
 * @param updatedAt int Update date as Unix timestamp (In seconds) (readOnly).
 * @param useCategoryEntries bool .
 */
function VidiunBaseSyndicationFeed(){
	VidiunBaseSyndicationFeed.super_.call(this);
	this.id = null;
	this.feedUrl = null;
	this.partnerId = null;
	this.playlistId = null;
	this.name = null;
	this.status = null;
	this.type = null;
	this.landingPage = null;
	this.createdAt = null;
	this.allowEmbed = null;
	this.playerUiconfId = null;
	this.flavorParamId = null;
	this.transcodeExistingContent = null;
	this.addToDefaultConversionProfile = null;
	this.categories = null;
	this.storageId = null;
	this.entriesOrderBy = null;
	this.enforceEntitlement = null;
	this.privacyContext = null;
	this.updatedAt = null;
	this.useCategoryEntries = null;
}
module.exports.VidiunBaseSyndicationFeed = VidiunBaseSyndicationFeed;

util.inherits(VidiunBaseSyndicationFeed, vidiun.VidiunObjectBase);


/**
 * @param schedulerId int .
 * @param workerId int .
 * @param batchIndex int .
 * @param timeStamp int .
 * @param message string .
 * @param errType int .
 * @param errNumber int .
 * @param hostName string .
 * @param sessionId string .
 */
function VidiunBatchHistoryData(){
	VidiunBatchHistoryData.super_.call(this);
	this.schedulerId = null;
	this.workerId = null;
	this.batchIndex = null;
	this.timeStamp = null;
	this.message = null;
	this.errType = null;
	this.errNumber = null;
	this.hostName = null;
	this.sessionId = null;
}
module.exports.VidiunBatchHistoryData = VidiunBatchHistoryData;

util.inherits(VidiunBatchHistoryData, vidiun.VidiunObjectBase);


/**
 */
function VidiunJobData(){
	VidiunJobData.super_.call(this);
}
module.exports.VidiunJobData = VidiunJobData;

util.inherits(VidiunJobData, vidiun.VidiunObjectBase);


/**
 * @param id int  (readOnly).
 * @param partnerId int  (readOnly).
 * @param createdAt int  (readOnly).
 * @param updatedAt int  (readOnly).
 * @param deletedAt int  (readOnly).
 * @param lockExpiration int  (readOnly).
 * @param executionAttempts int  (readOnly).
 * @param lockVersion int  (readOnly).
 * @param entryId string .
 * @param entryName string .
 * @param jobType string  (readOnly).
 * @param jobSubType int .
 * @param data VidiunJobData .
 * @param status int .
 * @param abort int .
 * @param checkAgainTimeout int .
 * @param message string .
 * @param description string .
 * @param priority int .
 * @param history array .
 * @param bulkJobId int The id of the bulk upload job that initiated this job.
 * @param batchVersion int .
 * @param parentJobId int When one job creates another - the parent should set this parentJobId to be its own id.
 * @param rootJobId int The id of the root parent job.
 * @param queueTime int The time that the job was pulled from the queue.
 * @param finishTime int The time that the job was finished or closed as failed.
 * @param errType int .
 * @param errNumber int .
 * @param estimatedEffort int .
 * @param urgency int .
 * @param schedulerId int .
 * @param workerId int .
 * @param batchIndex int .
 * @param lastSchedulerId int .
 * @param lastWorkerId int .
 * @param dc int .
 * @param jobObjectId string .
 * @param jobObjectType int .
 */
function VidiunBatchJob(){
	VidiunBatchJob.super_.call(this);
	this.id = null;
	this.partnerId = null;
	this.createdAt = null;
	this.updatedAt = null;
	this.deletedAt = null;
	this.lockExpiration = null;
	this.executionAttempts = null;
	this.lockVersion = null;
	this.entryId = null;
	this.entryName = null;
	this.jobType = null;
	this.jobSubType = null;
	this.data = null;
	this.status = null;
	this.abort = null;
	this.checkAgainTimeout = null;
	this.message = null;
	this.description = null;
	this.priority = null;
	this.history = null;
	this.bulkJobId = null;
	this.batchVersion = null;
	this.parentJobId = null;
	this.rootJobId = null;
	this.queueTime = null;
	this.finishTime = null;
	this.errType = null;
	this.errNumber = null;
	this.estimatedEffort = null;
	this.urgency = null;
	this.schedulerId = null;
	this.workerId = null;
	this.batchIndex = null;
	this.lastSchedulerId = null;
	this.lastWorkerId = null;
	this.dc = null;
	this.jobObjectId = null;
	this.jobObjectType = null;
}
module.exports.VidiunBatchJob = VidiunBatchJob;

util.inherits(VidiunBatchJob, vidiun.VidiunObjectBase);


/**
 */
function VidiunBulkServiceData(){
	VidiunBulkServiceData.super_.call(this);
}
module.exports.VidiunBulkServiceData = VidiunBulkServiceData;

util.inherits(VidiunBulkServiceData, vidiun.VidiunObjectBase);


/**
 * @param field string .
 * @param value string .
 */
function VidiunBulkUploadPluginData(){
	VidiunBulkUploadPluginData.super_.call(this);
	this.field = null;
	this.value = null;
}
module.exports.VidiunBulkUploadPluginData = VidiunBulkUploadPluginData;

util.inherits(VidiunBulkUploadPluginData, vidiun.VidiunObjectBase);


/**
 * @param id int The id of the result (readOnly).
 * @param bulkUploadJobId int The id of the parent job.
 * @param lineIndex int The index of the line in the CSV.
 * @param partnerId int .
 * @param status string .
 * @param action string .
 * @param objectId string .
 * @param objectStatus int .
 * @param bulkUploadResultObjectType string .
 * @param rowData string The data as recieved in the csv.
 * @param partnerData string .
 * @param objectErrorDescription string .
 * @param pluginsData array .
 * @param errorDescription string .
 * @param errorCode string .
 * @param errorType int .
 */
function VidiunBulkUploadResult(){
	VidiunBulkUploadResult.super_.call(this);
	this.id = null;
	this.bulkUploadJobId = null;
	this.lineIndex = null;
	this.partnerId = null;
	this.status = null;
	this.action = null;
	this.objectId = null;
	this.objectStatus = null;
	this.bulkUploadResultObjectType = null;
	this.rowData = null;
	this.partnerData = null;
	this.objectErrorDescription = null;
	this.pluginsData = null;
	this.errorDescription = null;
	this.errorCode = null;
	this.errorType = null;
}
module.exports.VidiunBulkUploadResult = VidiunBulkUploadResult;

util.inherits(VidiunBulkUploadResult, vidiun.VidiunObjectBase);


/**
 * @param id int .
 * @param uploadedBy string .
 * @param uploadedByUserId string .
 * @param uploadedOn int .
 * @param numOfEntries int .
 * @param status int .
 * @param logFileUrl string .
 * @param csvFileUrl string .
 * @param bulkFileUrl string .
 * @param bulkUploadType string .
 * @param results array .
 * @param error string .
 * @param errorType int .
 * @param errorNumber int .
 * @param fileName string .
 * @param description string .
 * @param numOfObjects int .
 * @param bulkUploadObjectType string .
 */
function VidiunBulkUpload(){
	VidiunBulkUpload.super_.call(this);
	this.id = null;
	this.uploadedBy = null;
	this.uploadedByUserId = null;
	this.uploadedOn = null;
	this.numOfEntries = null;
	this.status = null;
	this.logFileUrl = null;
	this.csvFileUrl = null;
	this.bulkFileUrl = null;
	this.bulkUploadType = null;
	this.results = null;
	this.error = null;
	this.errorType = null;
	this.errorNumber = null;
	this.fileName = null;
	this.description = null;
	this.numOfObjects = null;
	this.bulkUploadObjectType = null;
}
module.exports.VidiunBulkUpload = VidiunBulkUpload;

util.inherits(VidiunBulkUpload, vidiun.VidiunObjectBase);


/**
 */
function VidiunBulkUploadObjectData(){
	VidiunBulkUploadObjectData.super_.call(this);
}
module.exports.VidiunBulkUploadObjectData = VidiunBulkUploadObjectData;

util.inherits(VidiunBulkUploadObjectData, vidiun.VidiunObjectBase);


/**
 * @param id string .
 * @param businessProcessId string .
 * @param businessProcessStartNotificationTemplateId int .
 * @param suspended bool .
 * @param activityId string .
 */
function VidiunBusinessProcessCase(){
	VidiunBusinessProcessCase.super_.call(this);
	this.id = null;
	this.businessProcessId = null;
	this.businessProcessStartNotificationTemplateId = null;
	this.suspended = null;
	this.activityId = null;
}
module.exports.VidiunBusinessProcessCase = VidiunBusinessProcessCase;

util.inherits(VidiunBusinessProcessCase, vidiun.VidiunObjectBase);


/**
 * @param id int Auto generated identifier (readOnly).
 * @param createdAt int Server creation date as Unix timestamp (In seconds) (readOnly).
 * @param updatedAt int Server update date as Unix timestamp (In seconds) (readOnly).
 * @param partnerId int  (readOnly).
 * @param name string .
 * @param systemName string .
 * @param description string .
 * @param status string  (readOnly).
 * @param type string The type of the server, this is auto filled by the derived server object (readOnly).
 */
function VidiunBusinessProcessServer(){
	VidiunBusinessProcessServer.super_.call(this);
	this.id = null;
	this.createdAt = null;
	this.updatedAt = null;
	this.partnerId = null;
	this.name = null;
	this.systemName = null;
	this.description = null;
	this.status = null;
	this.type = null;
}
module.exports.VidiunBusinessProcessServer = VidiunBusinessProcessServer;

util.inherits(VidiunBusinessProcessServer, vidiun.VidiunObjectBase);


/**
 * @param id string  (readOnly).
 * @param partnerId int .
 * @param browser string .
 * @param serverIp string .
 * @param serverOs string .
 * @param phpVersion string .
 * @param ceAdminEmail string .
 * @param type string .
 * @param description string .
 * @param data string .
 */
function VidiunCEError(){
	VidiunCEError.super_.call(this);
	this.id = null;
	this.partnerId = null;
	this.browser = null;
	this.serverIp = null;
	this.serverOs = null;
	this.phpVersion = null;
	this.ceAdminEmail = null;
	this.type = null;
	this.description = null;
	this.data = null;
}
module.exports.VidiunCEError = VidiunCEError;

util.inherits(VidiunCEError, vidiun.VidiunObjectBase);


/**
 * @param captionParamsId int The Caption Params used to create this Caption Asset (insertOnly).
 * @param language string The language of the caption asset content.
 * @param languageCode string The language of the caption asset content (readOnly).
 * @param isDefault int Is default caption asset of the entry.
 * @param label string Friendly label.
 * @param format string The caption format (insertOnly).
 * @param status int The status of the asset (readOnly).
 * @param parentId string The parent id of the asset (insertOnly).
 * @param accuracy int The Accuracy of the caption content.
 */
function VidiunCaptionAsset(){
	VidiunCaptionAsset.super_.call(this);
	this.captionParamsId = null;
	this.language = null;
	this.languageCode = null;
	this.isDefault = null;
	this.label = null;
	this.format = null;
	this.status = null;
	this.parentId = null;
	this.accuracy = null;
}
module.exports.VidiunCaptionAsset = VidiunCaptionAsset;

util.inherits(VidiunCaptionAsset, VidiunAsset);


/**
 * @param asset VidiunCaptionAsset The Caption Asset object.
 * @param entry VidiunBaseEntry The entry object.
 * @param startTime int .
 * @param endTime int .
 * @param content string .
 */
function VidiunCaptionAssetItem(){
	VidiunCaptionAssetItem.super_.call(this);
	this.asset = null;
	this.entry = null;
	this.startTime = null;
	this.endTime = null;
	this.content = null;
}
module.exports.VidiunCaptionAssetItem = VidiunCaptionAssetItem;

util.inherits(VidiunCaptionAssetItem, vidiun.VidiunObjectBase);


/**
 * @param language string The language of the caption content (insertOnly).
 * @param isDefault int Is default caption asset of the entry.
 * @param label string Friendly label.
 * @param format string The caption format (insertOnly).
 * @param sourceParamsId int Id of the caption params or the flavor params to be used as source for the caption creation.
 */
function VidiunCaptionParams(){
	VidiunCaptionParams.super_.call(this);
	this.language = null;
	this.isDefault = null;
	this.label = null;
	this.format = null;
	this.sourceParamsId = null;
}
module.exports.VidiunCaptionParams = VidiunCaptionParams;

util.inherits(VidiunCaptionParams, VidiunAssetParams);


/**
 * @param algorithm string .
 * @param value string .
 */
function VidiunCaptureSpaceUpdateResponseInfoHash(){
	VidiunCaptureSpaceUpdateResponseInfoHash.super_.call(this);
	this.algorithm = null;
	this.value = null;
}
module.exports.VidiunCaptureSpaceUpdateResponseInfoHash = VidiunCaptureSpaceUpdateResponseInfoHash;

util.inherits(VidiunCaptureSpaceUpdateResponseInfoHash, vidiun.VidiunObjectBase);


/**
 * @param url string .
 * @param hash VidiunCaptureSpaceUpdateResponseInfoHash .
 */
function VidiunCaptureSpaceUpdateResponseInfo(){
	VidiunCaptureSpaceUpdateResponseInfo.super_.call(this);
	this.url = null;
	this.hash = null;
}
module.exports.VidiunCaptureSpaceUpdateResponseInfo = VidiunCaptureSpaceUpdateResponseInfo;

util.inherits(VidiunCaptureSpaceUpdateResponseInfo, vidiun.VidiunObjectBase);


/**
 * @param info VidiunCaptureSpaceUpdateResponseInfo .
 */
function VidiunCaptureSpaceUpdateResponse(){
	VidiunCaptureSpaceUpdateResponse.super_.call(this);
	this.info = null;
}
module.exports.VidiunCaptureSpaceUpdateResponse = VidiunCaptureSpaceUpdateResponse;

util.inherits(VidiunCaptureSpaceUpdateResponse, vidiun.VidiunObjectBase);


/**
 * @param id int The id of the Category (readOnly).
 * @param parentId int .
 * @param depth int  (readOnly).
 * @param partnerId int  (readOnly).
 * @param name string The name of the Category.
 * The following characters are not allowed: '<', '>', ','.
 * @param fullName string The full name of the Category (readOnly).
 * @param fullIds string The full ids of the Category (readOnly).
 * @param entriesCount int Number of entries in this Category (including child categories) (readOnly).
 * @param createdAt int Creation date as Unix timestamp (In seconds) (readOnly).
 * @param updatedAt int Update date as Unix timestamp (In seconds) (readOnly).
 * @param description string Category description.
 * @param tags string Category tags.
 * @param appearInList int If category will be returned for list action.
 * @param privacy int defines the privacy of the entries that assigned to this category.
 * @param inheritanceType int If Category members are inherited from parent category or set manualy.
 * @param userJoinPolicy int Who can ask to join this category (readOnly).
 * @param defaultPermissionLevel int Default permissionLevel for new users.
 * @param owner string Category Owner (User id).
 * @param directEntriesCount int Number of entries that belong to this category directly (readOnly).
 * @param referenceId string Category external id, controlled and managed by the partner.
 * @param contributionPolicy int who can assign entries to this category.
 * @param membersCount int Number of active members for this category (readOnly).
 * @param pendingMembersCount int Number of pending members for this category (readOnly).
 * @param privacyContext string Set privacy context for search entries that assiged to private and public categories. the entries will be private if the search context is set with those categories.
 * @param privacyContexts string comma separated parents that defines a privacyContext for search (readOnly).
 * @param status int Status (readOnly).
 * @param inheritedParentId int The category id that this category inherit its members and members permission (for contribution and join) (readOnly).
 * @param partnerSortValue int Can be used to store various partner related data as a numeric value.
 * @param partnerData string Can be used to store various partner related data as a string.
 * @param defaultOrderBy string Enable client side applications to define how to sort the category child categories.
 * @param directSubCategoriesCount int Number of direct children categories (readOnly).
 * @param moderation int Moderation to add entries to this category by users that are not of permission level Manager or Moderator.
 * @param pendingEntriesCount int Nunber of pending moderation entries (readOnly).
 */
function VidiunCategory(){
	VidiunCategory.super_.call(this);
	this.id = null;
	this.parentId = null;
	this.depth = null;
	this.partnerId = null;
	this.name = null;
	this.fullName = null;
	this.fullIds = null;
	this.entriesCount = null;
	this.createdAt = null;
	this.updatedAt = null;
	this.description = null;
	this.tags = null;
	this.appearInList = null;
	this.privacy = null;
	this.inheritanceType = null;
	this.userJoinPolicy = null;
	this.defaultPermissionLevel = null;
	this.owner = null;
	this.directEntriesCount = null;
	this.referenceId = null;
	this.contributionPolicy = null;
	this.membersCount = null;
	this.pendingMembersCount = null;
	this.privacyContext = null;
	this.privacyContexts = null;
	this.status = null;
	this.inheritedParentId = null;
	this.partnerSortValue = null;
	this.partnerData = null;
	this.defaultOrderBy = null;
	this.directSubCategoriesCount = null;
	this.moderation = null;
	this.pendingEntriesCount = null;
}
module.exports.VidiunCategory = VidiunCategory;

util.inherits(VidiunCategory, vidiun.VidiunObjectBase);


/**
 * @param categoryId int .
 * @param entryId string entry id.
 * @param createdAt int Creation date as Unix timestamp (In seconds) (readOnly).
 * @param categoryFullIds string The full ids of the Category (readOnly).
 * @param status int CategroyEntry status (readOnly).
 */
function VidiunCategoryEntry(){
	VidiunCategoryEntry.super_.call(this);
	this.categoryId = null;
	this.entryId = null;
	this.createdAt = null;
	this.categoryFullIds = null;
	this.status = null;
}
module.exports.VidiunCategoryEntry = VidiunCategoryEntry;

util.inherits(VidiunCategoryEntry, vidiun.VidiunObjectBase);


/**
 * @param categoryId int  (insertOnly).
 * @param userId string User id (insertOnly).
 * @param partnerId int Partner id (readOnly).
 * @param permissionLevel int Permission level.
 * @param status int Status (readOnly).
 * @param createdAt int CategoryUser creation date as Unix timestamp (In seconds) (readOnly).
 * @param updatedAt int CategoryUser update date as Unix timestamp (In seconds) (readOnly).
 * @param updateMethod int Update method can be either manual or automatic to distinguish between manual operations (for example in VMC) on automatic - using bulk upload.
 * @param categoryFullIds string The full ids of the Category (readOnly).
 * @param permissionNames string Set of category-related permissions for the current category user.
 */
function VidiunCategoryUser(){
	VidiunCategoryUser.super_.call(this);
	this.categoryId = null;
	this.userId = null;
	this.partnerId = null;
	this.permissionLevel = null;
	this.status = null;
	this.createdAt = null;
	this.updatedAt = null;
	this.updateMethod = null;
	this.categoryFullIds = null;
	this.permissionNames = null;
}
module.exports.VidiunCategoryUser = VidiunCategoryUser;

util.inherits(VidiunCategoryUser, vidiun.VidiunObjectBase);


/**
 * @param clientTag string .
 * @param apiVersion string .
 */
function VidiunClientConfiguration(){
	VidiunClientConfiguration.super_.call(this);
	this.clientTag = null;
	this.apiVersion = null;
}
module.exports.VidiunClientConfiguration = VidiunClientConfiguration;

util.inherits(VidiunClientConfiguration, vidiun.VidiunObjectBase);


/**
 * @param url string The URL where the notification should be sent to.
 * @param data string The serialized notification data to send.
 */
function VidiunClientNotification(){
	VidiunClientNotification.super_.call(this);
	this.url = null;
	this.data = null;
}
module.exports.VidiunClientNotification = VidiunClientNotification;

util.inherits(VidiunClientNotification, vidiun.VidiunObjectBase);


/**
 */
function VidiunContext(){
	VidiunContext.super_.call(this);
}
module.exports.VidiunContext = VidiunContext;

util.inherits(VidiunContext, vidiun.VidiunObjectBase);


/**
 * @param messages array Array of messages as received from the rules that invalidated.
 * @param actions array Array of actions as received from the rules that invalidated.
 */
function VidiunContextDataResult(){
	VidiunContextDataResult.super_.call(this);
	this.messages = null;
	this.actions = null;
}
module.exports.VidiunContextDataResult = VidiunContextDataResult;

util.inherits(VidiunContextDataResult, vidiun.VidiunObjectBase);


/**
 * @param id int The id of the Category (readOnly).
 * @param createdAt int Creation date as Unix timestamp (In seconds) (readOnly).
 * @param createdBy string Creator name.
 * @param updatedAt int Update date as Unix timestamp (In seconds) (readOnly).
 * @param updatedBy string Updater name.
 * @param createdById int Creator id.
 * @param schedulerId int The id of the scheduler that the command refers to.
 * @param workerId int The id of the scheduler worker that the command refers to.
 * @param workerConfiguredId int The id of the scheduler worker as configured in the ini file.
 * @param workerName int The name of the scheduler worker that the command refers to.
 * @param batchIndex int The index of the batch process that the command refers to.
 * @param type int The command type - stop / start / config.
 * @param targetType int The command target type - data center / scheduler / job / job type.
 * @param status int The command status.
 * @param cause string The reason for the command.
 * @param description string Command description.
 * @param errorDescription string Error description.
 */
function VidiunControlPanelCommand(){
	VidiunControlPanelCommand.super_.call(this);
	this.id = null;
	this.createdAt = null;
	this.createdBy = null;
	this.updatedAt = null;
	this.updatedBy = null;
	this.createdById = null;
	this.schedulerId = null;
	this.workerId = null;
	this.workerConfiguredId = null;
	this.workerName = null;
	this.batchIndex = null;
	this.type = null;
	this.targetType = null;
	this.status = null;
	this.cause = null;
	this.description = null;
	this.errorDescription = null;
}
module.exports.VidiunControlPanelCommand = VidiunControlPanelCommand;

util.inherits(VidiunControlPanelCommand, vidiun.VidiunObjectBase);


/**
 * @param flavorParamsId int The id of the flavor params, set to null for source flavor.
 * @param name string Attribute name.
 * @param value string Attribute value.
 */
function VidiunConversionAttribute(){
	VidiunConversionAttribute.super_.call(this);
	this.flavorParamsId = null;
	this.name = null;
	this.value = null;
}
module.exports.VidiunConversionAttribute = VidiunConversionAttribute;

util.inherits(VidiunConversionAttribute, vidiun.VidiunObjectBase);


/**
 * @param left int Crop left point.
 * @param top int Crop top point.
 * @param width int Crop width.
 * @param height int Crop height.
 */
function VidiunCropDimensions(){
	VidiunCropDimensions.super_.call(this);
	this.left = null;
	this.top = null;
	this.width = null;
	this.height = null;
}
module.exports.VidiunCropDimensions = VidiunCropDimensions;

util.inherits(VidiunCropDimensions, vidiun.VidiunObjectBase);


/**
 * @param id int The id of the Conversion Profile (readOnly).
 * @param partnerId int  (readOnly).
 * @param status string .
 * @param type string  (insertOnly).
 * @param name string The name of the Conversion Profile.
 * @param systemName string System name of the Conversion Profile.
 * @param tags string Comma separated tags.
 * @param description string The description of the Conversion Profile.
 * @param defaultEntryId string ID of the default entry to be used for template data.
 * @param createdAt int Creation date as Unix timestamp (In seconds) (readOnly).
 * @param flavorParamsIds string List of included flavor ids (comma separated).
 * @param isDefault int Indicates that this conversion profile is system default.
 * @param isPartnerDefault bool Indicates that this conversion profile is partner default (readOnly).
 * @param cropDimensions VidiunCropDimensions Cropping dimensions.
 * @param clipStart int Clipping start position (in miliseconds).
 * @param clipDuration int Clipping duration (in miliseconds).
 * @param xslTransformation string XSL to transform ingestion MRSS XML.
 * @param storageProfileId int ID of default storage profile to be used for linked net-storage file syncs.
 * @param mediaParserType string Media parser type to be used for extract media.
 */
function VidiunConversionProfile(){
	VidiunConversionProfile.super_.call(this);
	this.id = null;
	this.partnerId = null;
	this.status = null;
	this.type = null;
	this.name = null;
	this.systemName = null;
	this.tags = null;
	this.description = null;
	this.defaultEntryId = null;
	this.createdAt = null;
	this.flavorParamsIds = null;
	this.isDefault = null;
	this.isPartnerDefault = null;
	this.cropDimensions = null;
	this.clipStart = null;
	this.clipDuration = null;
	this.xslTransformation = null;
	this.storageProfileId = null;
	this.mediaParserType = null;
}
module.exports.VidiunConversionProfile = VidiunConversionProfile;

util.inherits(VidiunConversionProfile, vidiun.VidiunObjectBase);


/**
 * @param conversionProfileId int The id of the conversion profile (readOnly).
 * @param assetParamsId int The id of the asset params (readOnly).
 * @param readyBehavior int The ingestion origin of the asset params.
 * @param origin int The ingestion origin of the asset params.
 * @param systemName string Asset params system name.
 * @param forceNoneComplied int Starts conversion even if the decision layer reduced the configuration to comply with the source.
 * @param deletePolicy int Specifies how to treat the flavor after conversion is finished.
 */
function VidiunConversionProfileAssetParams(){
	VidiunConversionProfileAssetParams.super_.call(this);
	this.conversionProfileId = null;
	this.assetParamsId = null;
	this.readyBehavior = null;
	this.origin = null;
	this.systemName = null;
	this.forceNoneComplied = null;
	this.deletePolicy = null;
}
module.exports.VidiunConversionProfileAssetParams = VidiunConversionProfileAssetParams;

util.inherits(VidiunConversionProfileAssetParams, vidiun.VidiunObjectBase);


/**
 * @param flavorAssetId string .
 * @param flavorParamsOutputId int .
 * @param readyBehavior int .
 * @param videoBitrate int .
 * @param audioBitrate int .
 * @param destFileSyncLocalPath string .
 * @param destFileSyncRemoteUrl string .
 */
function VidiunConvertCollectionFlavorData(){
	VidiunConvertCollectionFlavorData.super_.call(this);
	this.flavorAssetId = null;
	this.flavorParamsOutputId = null;
	this.readyBehavior = null;
	this.videoBitrate = null;
	this.audioBitrate = null;
	this.destFileSyncLocalPath = null;
	this.destFileSyncRemoteUrl = null;
}
module.exports.VidiunConvertCollectionFlavorData = VidiunConvertCollectionFlavorData;

util.inherits(VidiunConvertCollectionFlavorData, vidiun.VidiunObjectBase);


/**
 * @param latitude float .
 * @param longitude float .
 * @param name string .
 */
function VidiunCoordinate(){
	VidiunCoordinate.super_.call(this);
	this.latitude = null;
	this.longitude = null;
	this.name = null;
}
module.exports.VidiunCoordinate = VidiunCoordinate;

util.inherits(VidiunCoordinate, vidiun.VidiunObjectBase);


/**
 * @param dataContent string The data of the entry.
 * @param retrieveDataContentByGet bool indicator whether to return the object for get action with the dataContent field (insertOnly).
 */
function VidiunDataEntry(){
	VidiunDataEntry.super_.call(this);
	this.dataContent = null;
	this.retrieveDataContentByGet = null;
}
module.exports.VidiunDataEntry = VidiunDataEntry;

util.inherits(VidiunDataEntry, VidiunBaseEntry);


/**
 * @param hosts string The hosts that are recognized.
 * @param uriPrefix string The URI prefix we use for security.
 */
function VidiunUrlRecognizer(){
	VidiunUrlRecognizer.super_.call(this);
	this.hosts = null;
	this.uriPrefix = null;
}
module.exports.VidiunUrlRecognizer = VidiunUrlRecognizer;

util.inherits(VidiunUrlRecognizer, vidiun.VidiunObjectBase);


/**
 * @param window int Window.
 * @param key string key.
 */
function VidiunUrlTokenizer(){
	VidiunUrlTokenizer.super_.call(this);
	this.window = null;
	this.key = null;
}
module.exports.VidiunUrlTokenizer = VidiunUrlTokenizer;

util.inherits(VidiunUrlTokenizer, vidiun.VidiunObjectBase);


/**
 * @param id int The id of the Delivery (readOnly).
 * @param partnerId int  (readOnly).
 * @param name string The name of the Delivery.
 * @param type string Delivery type.
 * @param systemName string System name of the delivery.
 * @param description string The description of the Delivery.
 * @param createdAt int Creation time as Unix timestamp (In seconds) (readOnly).
 * @param updatedAt int Update time as Unix timestamp (In seconds) (readOnly).
 * @param streamerType string .
 * @param url string .
 * @param hostName string the host part of the url (readOnly).
 * @param status int .
 * @param recognizer VidiunUrlRecognizer .
 * @param tokenizer VidiunUrlTokenizer .
 * @param isDefault int True if this is the systemwide default for the protocol (readOnly).
 * @param parentId int the object from which this object was cloned (or 0) (readOnly).
 * @param mediaProtocols string Comma separated list of supported media protocols. f.i. rtmpe.
 * @param priority int priority used for ordering similar delivery profiles.
 * @param extraParams string Extra query string parameters that should be added to the url.
 */
function VidiunDeliveryProfile(){
	VidiunDeliveryProfile.super_.call(this);
	this.id = null;
	this.partnerId = null;
	this.name = null;
	this.type = null;
	this.systemName = null;
	this.description = null;
	this.createdAt = null;
	this.updatedAt = null;
	this.streamerType = null;
	this.url = null;
	this.hostName = null;
	this.status = null;
	this.recognizer = null;
	this.tokenizer = null;
	this.isDefault = null;
	this.parentId = null;
	this.mediaProtocols = null;
	this.priority = null;
	this.extraParams = null;
}
module.exports.VidiunDeliveryProfile = VidiunDeliveryProfile;

util.inherits(VidiunDeliveryProfile, vidiun.VidiunObjectBase);


/**
 * @param fileSyncLocalPath string .
 * @param fileSyncRemoteUrl string The translated path as used by the scheduler.
 * @param fileSyncObjectSubType int .
 */
function VidiunFileSyncDescriptor(){
	VidiunFileSyncDescriptor.super_.call(this);
	this.fileSyncLocalPath = null;
	this.fileSyncRemoteUrl = null;
	this.fileSyncObjectSubType = null;
}
module.exports.VidiunFileSyncDescriptor = VidiunFileSyncDescriptor;

util.inherits(VidiunFileSyncDescriptor, vidiun.VidiunObjectBase);


/**
 */
function VidiunDestFileSyncDescriptor(){
	VidiunDestFileSyncDescriptor.super_.call(this);
}
module.exports.VidiunDestFileSyncDescriptor = VidiunDestFileSyncDescriptor;

util.inherits(VidiunDestFileSyncDescriptor, VidiunFileSyncDescriptor);


/**
 */
function VidiunRelatedFilter(){
	VidiunRelatedFilter.super_.call(this);
}
module.exports.VidiunRelatedFilter = VidiunRelatedFilter;

util.inherits(VidiunRelatedFilter, VidiunFilter);


/**
 * @param pageSize int The number of objects to retrieve. (Default is 30, maximum page size is 500).
 * @param pageIndex int The page number for which {pageSize} of objects should be retrieved (Default is 1).
 */
function VidiunFilterPager(){
	VidiunFilterPager.super_.call(this);
	this.pageSize = null;
	this.pageIndex = null;
}
module.exports.VidiunFilterPager = VidiunFilterPager;

util.inherits(VidiunFilterPager, vidiun.VidiunObjectBase);


/**
 * @param parentProperty string .
 * @param filterProperty string .
 * @param allowNull bool .
 */
function VidiunResponseProfileMapping(){
	VidiunResponseProfileMapping.super_.call(this);
	this.parentProperty = null;
	this.filterProperty = null;
	this.allowNull = null;
}
module.exports.VidiunResponseProfileMapping = VidiunResponseProfileMapping;

util.inherits(VidiunResponseProfileMapping, vidiun.VidiunObjectBase);


/**
 * @param name string Friendly name.
 * @param type int .
 * @param fields string Comma separated fields list to be included or excluded.
 * @param filter VidiunRelatedFilter .
 * @param pager VidiunFilterPager .
 * @param relatedProfiles array .
 * @param mappings array .
 */
function VidiunDetachedResponseProfile(){
	VidiunDetachedResponseProfile.super_.call(this);
	this.name = null;
	this.type = null;
	this.fields = null;
	this.filter = null;
	this.pager = null;
	this.relatedProfiles = null;
	this.mappings = null;
}
module.exports.VidiunDetachedResponseProfile = VidiunDetachedResponseProfile;

util.inherits(VidiunDetachedResponseProfile, VidiunBaseResponseProfile);


/**
 * @param fieldName string A value taken from a connector field enum which associates the current configuration to that connector field
 * Field enum class should be returned by the provider's getFieldEnumClass function.
 * @param userFriendlyFieldName string A string that will be shown to the user as the field name in error messages related to the current field.
 * @param entryMrssXslt string An XSLT string that extracts the right value from the Vidiun entry MRSS XML.
 * The value of the current connector field will be the one that is returned from transforming the Vidiun entry MRSS XML using this XSLT string.
 * @param isRequired int Is the field required to have a value for submission ?.
 * @param updateOnChange bool Trigger distribution update when this field changes or not ?.
 * @param updateParams array Entry column or metadata xpath that should trigger an update.
 * @param isDefault bool Is this field config is the default for the distribution provider? (readOnly).
 * @param triggerDeleteOnError bool Is an error on this field going to trigger deletion of distributed content?.
 */
function VidiunDistributionFieldConfig(){
	VidiunDistributionFieldConfig.super_.call(this);
	this.fieldName = null;
	this.userFriendlyFieldName = null;
	this.entryMrssXslt = null;
	this.isRequired = null;
	this.updateOnChange = null;
	this.updateParams = null;
	this.isDefault = null;
	this.triggerDeleteOnError = null;
}
module.exports.VidiunDistributionFieldConfig = VidiunDistributionFieldConfig;

util.inherits(VidiunDistributionFieldConfig, vidiun.VidiunObjectBase);


/**
 */
function VidiunDistributionJobProviderData(){
	VidiunDistributionJobProviderData.super_.call(this);
}
module.exports.VidiunDistributionJobProviderData = VidiunDistributionJobProviderData;

util.inherits(VidiunDistributionJobProviderData, vidiun.VidiunObjectBase);


/**
 * @param width int .
 * @param height int .
 */
function VidiunDistributionThumbDimensions(){
	VidiunDistributionThumbDimensions.super_.call(this);
	this.width = null;
	this.height = null;
}
module.exports.VidiunDistributionThumbDimensions = VidiunDistributionThumbDimensions;

util.inherits(VidiunDistributionThumbDimensions, vidiun.VidiunObjectBase);


/**
 * @param id int Auto generated unique id (readOnly).
 * @param createdAt int Profile creation date as Unix timestamp (In seconds) (readOnly).
 * @param updatedAt int Profile last update date as Unix timestamp (In seconds) (readOnly).
 * @param partnerId int  (readOnly).
 * @param providerType string  (insertOnly).
 * @param name string .
 * @param status int .
 * @param submitEnabled int .
 * @param updateEnabled int .
 * @param deleteEnabled int .
 * @param reportEnabled int .
 * @param autoCreateFlavors string Comma separated flavor params ids that should be auto converted.
 * @param autoCreateThumb string Comma separated thumbnail params ids that should be auto generated.
 * @param optionalFlavorParamsIds string Comma separated flavor params ids that should be submitted if ready.
 * @param requiredFlavorParamsIds string Comma separated flavor params ids that required to be ready before submission.
 * @param optionalThumbDimensions array Thumbnail dimensions that should be submitted if ready.
 * @param requiredThumbDimensions array Thumbnail dimensions that required to be readt before submission.
 * @param optionalAssetDistributionRules array Asset Distribution Rules for assets that should be submitted if ready.
 * @param requiredAssetDistributionRules array Assets Asset Distribution Rules for assets that are required to be ready before submission.
 * @param sunriseDefaultOffset int If entry distribution sunrise not specified that will be the default since entry creation time, in seconds.
 * @param sunsetDefaultOffset int If entry distribution sunset not specified that will be the default since entry creation time, in seconds.
 * @param recommendedStorageProfileForDownload int The best external storage to be used to download the asset files from.
 * @param recommendedDcForDownload int The best Vidiun data center to be used to download the asset files to.
 * @param recommendedDcForExecute int The best Vidiun data center to be used to execute the distribution job.
 */
function VidiunDistributionProfile(){
	VidiunDistributionProfile.super_.call(this);
	this.id = null;
	this.createdAt = null;
	this.updatedAt = null;
	this.partnerId = null;
	this.providerType = null;
	this.name = null;
	this.status = null;
	this.submitEnabled = null;
	this.updateEnabled = null;
	this.deleteEnabled = null;
	this.reportEnabled = null;
	this.autoCreateFlavors = null;
	this.autoCreateThumb = null;
	this.optionalFlavorParamsIds = null;
	this.requiredFlavorParamsIds = null;
	this.optionalThumbDimensions = null;
	this.requiredThumbDimensions = null;
	this.optionalAssetDistributionRules = null;
	this.requiredAssetDistributionRules = null;
	this.sunriseDefaultOffset = null;
	this.sunsetDefaultOffset = null;
	this.recommendedStorageProfileForDownload = null;
	this.recommendedDcForDownload = null;
	this.recommendedDcForExecute = null;
}
module.exports.VidiunDistributionProfile = VidiunDistributionProfile;

util.inherits(VidiunDistributionProfile, vidiun.VidiunObjectBase);


/**
 * @param type string  (readOnly).
 * @param name string .
 * @param scheduleUpdateEnabled bool .
 * @param availabilityUpdateEnabled bool .
 * @param deleteInsteadUpdate bool .
 * @param intervalBeforeSunrise int .
 * @param intervalBeforeSunset int .
 * @param updateRequiredEntryFields string .
 * @param updateRequiredMetadataXPaths string .
 */
function VidiunDistributionProvider(){
	VidiunDistributionProvider.super_.call(this);
	this.type = null;
	this.name = null;
	this.scheduleUpdateEnabled = null;
	this.availabilityUpdateEnabled = null;
	this.deleteInsteadUpdate = null;
	this.intervalBeforeSunrise = null;
	this.intervalBeforeSunset = null;
	this.updateRequiredEntryFields = null;
	this.updateRequiredMetadataXPaths = null;
}
module.exports.VidiunDistributionProvider = VidiunDistributionProvider;

util.inherits(VidiunDistributionProvider, vidiun.VidiunObjectBase);


/**
 * @param version string .
 * @param assetId string .
 * @param remoteId string .
 */
function VidiunDistributionRemoteMediaFile(){
	VidiunDistributionRemoteMediaFile.super_.call(this);
	this.version = null;
	this.assetId = null;
	this.remoteId = null;
}
module.exports.VidiunDistributionRemoteMediaFile = VidiunDistributionRemoteMediaFile;

util.inherits(VidiunDistributionRemoteMediaFile, vidiun.VidiunObjectBase);


/**
 * @param action int .
 * @param errorType int .
 * @param description string .
 */
function VidiunDistributionValidationError(){
	VidiunDistributionValidationError.super_.call(this);
	this.action = null;
	this.errorType = null;
	this.description = null;
}
module.exports.VidiunDistributionValidationError = VidiunDistributionValidationError;

util.inherits(VidiunDistributionValidationError, vidiun.VidiunObjectBase);


/**
 * @param documentType int The type of the document (insertOnly).
 * @param assetParamsIds string Comma separated asset params ids that exists for this media entry (readOnly).
 */
function VidiunDocumentEntry(){
	VidiunDocumentEntry.super_.call(this);
	this.documentType = null;
	this.assetParamsIds = null;
}
module.exports.VidiunDocumentEntry = VidiunDocumentEntry;

util.inherits(VidiunDocumentEntry, VidiunBaseEntry);


/**
 * @param policy string Drm policy name.
 * @param duration int movie duration in seconds.
 * @param absolute_duration int playback window in seconds.
 */
function VidiunDrmLicenseAccessDetails(){
	VidiunDrmLicenseAccessDetails.super_.call(this);
	this.policy = null;
	this.duration = null;
	this.absolute_duration = null;
}
module.exports.VidiunDrmLicenseAccessDetails = VidiunDrmLicenseAccessDetails;

util.inherits(VidiunDrmLicenseAccessDetails, vidiun.VidiunObjectBase);


/**
 * @param id int  (readOnly).
 * @param partnerId int  (insertOnly).
 * @param name string .
 * @param systemName string .
 * @param description string .
 * @param provider string .
 * @param status int .
 * @param scenario string .
 * @param licenseType string .
 * @param licenseExpirationPolicy int .
 * @param duration int Duration in days the license is effective.
 * @param createdAt int  (readOnly).
 * @param updatedAt int  (readOnly).
 */
function VidiunDrmPolicy(){
	VidiunDrmPolicy.super_.call(this);
	this.id = null;
	this.partnerId = null;
	this.name = null;
	this.systemName = null;
	this.description = null;
	this.provider = null;
	this.status = null;
	this.scenario = null;
	this.licenseType = null;
	this.licenseExpirationPolicy = null;
	this.duration = null;
	this.createdAt = null;
	this.updatedAt = null;
}
module.exports.VidiunDrmPolicy = VidiunDrmPolicy;

util.inherits(VidiunDrmPolicy, vidiun.VidiunObjectBase);


/**
 * @param id int  (readOnly).
 * @param partnerId int  (insertOnly).
 * @param name string .
 * @param description string .
 * @param provider string .
 * @param status int .
 * @param licenseServerUrl string .
 * @param defaultPolicy string .
 * @param createdAt int  (readOnly).
 * @param updatedAt int  (readOnly).
 * @param signingKey string .
 */
function VidiunDrmProfile(){
	VidiunDrmProfile.super_.call(this);
	this.id = null;
	this.partnerId = null;
	this.name = null;
	this.description = null;
	this.provider = null;
	this.status = null;
	this.licenseServerUrl = null;
	this.defaultPolicy = null;
	this.createdAt = null;
	this.updatedAt = null;
	this.signingKey = null;
}
module.exports.VidiunDrmProfile = VidiunDrmProfile;

util.inherits(VidiunDrmProfile, vidiun.VidiunObjectBase);


/**
 * @param handlerType string  (readOnly).
 */
function VidiunDropFolderFileHandlerConfig(){
	VidiunDropFolderFileHandlerConfig.super_.call(this);
	this.handlerType = null;
}
module.exports.VidiunDropFolderFileHandlerConfig = VidiunDropFolderFileHandlerConfig;

util.inherits(VidiunDropFolderFileHandlerConfig, vidiun.VidiunObjectBase);


/**
 * @param id int  (readOnly).
 * @param partnerId int  (insertOnly).
 * @param name string .
 * @param description string .
 * @param type string .
 * @param status int .
 * @param conversionProfileId int .
 * @param dc int .
 * @param path string .
 * @param fileSizeCheckInterval int The ammount of time, in seconds, that should pass so that a file with no change in size we'll be treated as "finished uploading to folder".
 * @param fileDeletePolicy int .
 * @param autoFileDeleteDays int .
 * @param fileHandlerType string .
 * @param fileNamePatterns string .
 * @param fileHandlerConfig VidiunDropFolderFileHandlerConfig .
 * @param tags string .
 * @param errorCode string .
 * @param errorDescription string .
 * @param ignoreFileNamePatterns string .
 * @param createdAt int  (readOnly).
 * @param updatedAt int  (readOnly).
 * @param lastAccessedAt int .
 * @param incremental bool .
 * @param lastFileTimestamp int .
 * @param metadataProfileId int .
 * @param categoriesMetadataFieldName string .
 * @param enforceEntitlement bool .
 * @param shouldValidateVS bool .
 */
function VidiunDropFolder(){
	VidiunDropFolder.super_.call(this);
	this.id = null;
	this.partnerId = null;
	this.name = null;
	this.description = null;
	this.type = null;
	this.status = null;
	this.conversionProfileId = null;
	this.dc = null;
	this.path = null;
	this.fileSizeCheckInterval = null;
	this.fileDeletePolicy = null;
	this.autoFileDeleteDays = null;
	this.fileHandlerType = null;
	this.fileNamePatterns = null;
	this.fileHandlerConfig = null;
	this.tags = null;
	this.errorCode = null;
	this.errorDescription = null;
	this.ignoreFileNamePatterns = null;
	this.createdAt = null;
	this.updatedAt = null;
	this.lastAccessedAt = null;
	this.incremental = null;
	this.lastFileTimestamp = null;
	this.metadataProfileId = null;
	this.categoriesMetadataFieldName = null;
	this.enforceEntitlement = null;
	this.shouldValidateVS = null;
}
module.exports.VidiunDropFolder = VidiunDropFolder;

util.inherits(VidiunDropFolder, vidiun.VidiunObjectBase);


/**
 * @param id int  (readOnly).
 * @param partnerId int  (readOnly).
 * @param dropFolderId int  (insertOnly).
 * @param fileName string  (insertOnly).
 * @param fileSize float .
 * @param fileSizeLastSetAt int  (readOnly).
 * @param status int  (readOnly).
 * @param type string  (readOnly).
 * @param parsedSlug string .
 * @param parsedFlavor string .
 * @param parsedUserId string .
 * @param leadDropFolderFileId int .
 * @param deletedDropFolderFileId int .
 * @param entryId string .
 * @param errorCode string .
 * @param errorDescription string .
 * @param lastModificationTime string .
 * @param createdAt int  (readOnly).
 * @param updatedAt int  (readOnly).
 * @param uploadStartDetectedAt int .
 * @param uploadEndDetectedAt int .
 * @param importStartedAt int .
 * @param importEndedAt int .
 * @param batchJobId int  (readOnly).
 */
function VidiunDropFolderFile(){
	VidiunDropFolderFile.super_.call(this);
	this.id = null;
	this.partnerId = null;
	this.dropFolderId = null;
	this.fileName = null;
	this.fileSize = null;
	this.fileSizeLastSetAt = null;
	this.status = null;
	this.type = null;
	this.parsedSlug = null;
	this.parsedFlavor = null;
	this.parsedUserId = null;
	this.leadDropFolderFileId = null;
	this.deletedDropFolderFileId = null;
	this.entryId = null;
	this.errorCode = null;
	this.errorDescription = null;
	this.lastModificationTime = null;
	this.createdAt = null;
	this.updatedAt = null;
	this.uploadStartDetectedAt = null;
	this.uploadEndDetectedAt = null;
	this.importStartedAt = null;
	this.importEndedAt = null;
	this.batchJobId = null;
}
module.exports.VidiunDropFolderFile = VidiunDropFolderFile;

util.inherits(VidiunDropFolderFile, vidiun.VidiunObjectBase);


/**
 * @param id int  (readOnly).
 * @param name string .
 * @param description string .
 * @param emailAddress string .
 * @param mailboxId string .
 * @param partnerId int  (readOnly).
 * @param conversionProfile2Id int .
 * @param moderationStatus int .
 * @param status int  (readOnly).
 * @param createdAt string  (readOnly).
 * @param defaultCategory string .
 * @param defaultUserId string .
 * @param defaultTags string .
 * @param defaultAdminTags string .
 * @param maxAttachmentSizeKbytes int .
 * @param maxAttachmentsPerMail int .
 */
function VidiunEmailIngestionProfile(){
	VidiunEmailIngestionProfile.super_.call(this);
	this.id = null;
	this.name = null;
	this.description = null;
	this.emailAddress = null;
	this.mailboxId = null;
	this.partnerId = null;
	this.conversionProfile2Id = null;
	this.moderationStatus = null;
	this.status = null;
	this.createdAt = null;
	this.defaultCategory = null;
	this.defaultUserId = null;
	this.defaultTags = null;
	this.defaultAdminTags = null;
	this.maxAttachmentSizeKbytes = null;
	this.maxAttachmentsPerMail = null;
}
module.exports.VidiunEmailIngestionProfile = VidiunEmailIngestionProfile;

util.inherits(VidiunEmailIngestionProfile, vidiun.VidiunObjectBase);

/**
 * @param relatedObjectType object.
 * @param eventType string
 * @param objectId string
 * @param privateData object
 */
function VidiunBeacon() {
	VidiunBeacon.super_.call(this);
    this.relatedObjectType = null;
    this.eventType = null;
    this.objectId = null;
    this.privateData = null;
}
module.exports.VidiunBeacon = VidiunBeacon;

util.inherits(VidiunBeacon, vidiun.VidiunObjectBase);

/**
 * @param description string .
 */
function VidiunValue(){
	VidiunValue.super_.call(this);
	this.description = null;
}
module.exports.VidiunValue = VidiunValue;

util.inherits(VidiunValue, vidiun.VidiunObjectBase);


/**
 * @param value string .
 */
function VidiunStringValue(){
	VidiunStringValue.super_.call(this);
	this.value = null;
}
module.exports.VidiunStringValue = VidiunStringValue;

util.inherits(VidiunStringValue, VidiunValue);


/**
 * @param email VidiunStringValue Recipient e-mail address.
 * @param name VidiunStringValue Recipient name.
 */
function VidiunEmailNotificationRecipient(){
	VidiunEmailNotificationRecipient.super_.call(this);
	this.email = null;
	this.name = null;
}
module.exports.VidiunEmailNotificationRecipient = VidiunEmailNotificationRecipient;

util.inherits(VidiunEmailNotificationRecipient, vidiun.VidiunObjectBase);


/**
 * @param providerType string Provider type of the job data (readOnly).
 */
function VidiunEmailNotificationRecipientJobData(){
	VidiunEmailNotificationRecipientJobData.super_.call(this);
	this.providerType = null;
}
module.exports.VidiunEmailNotificationRecipientJobData = VidiunEmailNotificationRecipientJobData;

util.inherits(VidiunEmailNotificationRecipientJobData, vidiun.VidiunObjectBase);


/**
 */
function VidiunEmailNotificationRecipientProvider(){
	VidiunEmailNotificationRecipientProvider.super_.call(this);
}
module.exports.VidiunEmailNotificationRecipientProvider = VidiunEmailNotificationRecipientProvider;

util.inherits(VidiunEmailNotificationRecipientProvider, vidiun.VidiunObjectBase);


/**
 * @param id int Auto generated unique id (readOnly).
 * @param createdAt int Entry distribution creation date as Unix timestamp (In seconds) (readOnly).
 * @param updatedAt int Entry distribution last update date as Unix timestamp (In seconds) (readOnly).
 * @param submittedAt int Entry distribution submission date as Unix timestamp (In seconds) (readOnly).
 * @param entryId string  (insertOnly).
 * @param partnerId int  (readOnly).
 * @param distributionProfileId int  (insertOnly).
 * @param status int  (readOnly).
 * @param sunStatus int  (readOnly).
 * @param dirtyStatus int  (readOnly).
 * @param thumbAssetIds string Comma separated thumbnail asset ids.
 * @param flavorAssetIds string Comma separated flavor asset ids.
 * @param assetIds string Comma separated asset ids.
 * @param sunrise int Entry distribution publish time as Unix timestamp (In seconds).
 * @param sunset int Entry distribution un-publish time as Unix timestamp (In seconds).
 * @param remoteId string The id as returned from the distributed destination (readOnly).
 * @param plays int The plays as retrieved from the remote destination reports (readOnly).
 * @param views int The views as retrieved from the remote destination reports (readOnly).
 * @param validationErrors array .
 * @param errorType int  (readOnly).
 * @param errorNumber int  (readOnly).
 * @param errorDescription string  (readOnly).
 * @param hasSubmitResultsLog int  (readOnly).
 * @param hasSubmitSentDataLog int  (readOnly).
 * @param hasUpdateResultsLog int  (readOnly).
 * @param hasUpdateSentDataLog int  (readOnly).
 * @param hasDeleteResultsLog int  (readOnly).
 * @param hasDeleteSentDataLog int  (readOnly).
 */
function VidiunEntryDistribution(){
	VidiunEntryDistribution.super_.call(this);
	this.id = null;
	this.createdAt = null;
	this.updatedAt = null;
	this.submittedAt = null;
	this.entryId = null;
	this.partnerId = null;
	this.distributionProfileId = null;
	this.status = null;
	this.sunStatus = null;
	this.dirtyStatus = null;
	this.thumbAssetIds = null;
	this.flavorAssetIds = null;
	this.assetIds = null;
	this.sunrise = null;
	this.sunset = null;
	this.remoteId = null;
	this.plays = null;
	this.views = null;
	this.validationErrors = null;
	this.errorType = null;
	this.errorNumber = null;
	this.errorDescription = null;
	this.hasSubmitResultsLog = null;
	this.hasSubmitSentDataLog = null;
	this.hasUpdateResultsLog = null;
	this.hasUpdateSentDataLog = null;
	this.hasDeleteResultsLog = null;
	this.hasDeleteSentDataLog = null;
}
module.exports.VidiunEntryDistribution = VidiunEntryDistribution;

util.inherits(VidiunEntryDistribution, vidiun.VidiunObjectBase);


/**
 * @param keepManualThumbnails int If true manually created thumbnails will not be deleted on entry replacement.
 */
function VidiunEntryReplacementOptions(){
	VidiunEntryReplacementOptions.super_.call(this);
	this.keepManualThumbnails = null;
}
module.exports.VidiunEntryReplacementOptions = VidiunEntryReplacementOptions;

util.inherits(VidiunEntryReplacementOptions, vidiun.VidiunObjectBase);


/**
 * @param id int unique auto-generated identifier (readOnly).
 * @param entryId string  (readOnly).
 * @param serverNodeId int  (readOnly).
 * @param partnerId int  (readOnly).
 * @param createdAt int  (readOnly).
 * @param updatedAt int  (readOnly).
 * @param status int  (readOnly).
 * @param serverType string  (readOnly).
 */
function VidiunEntryServerNode(){
	VidiunEntryServerNode.super_.call(this);
	this.id = null;
	this.entryId = null;
	this.serverNodeId = null;
	this.partnerId = null;
	this.createdAt = null;
	this.updatedAt = null;
	this.status = null;
	this.serverType = null;
}
module.exports.VidiunEntryServerNode = VidiunEntryServerNode;

util.inherits(VidiunEntryServerNode, vidiun.VidiunObjectBase);


/**
 * @param key string The key in the subject and body to be replaced with the dynamic value.
 * @param description string .
 * @param value VidiunStringValue The dynamic value to be placed in the final output.
 */
function VidiunEventNotificationParameter(){
	VidiunEventNotificationParameter.super_.call(this);
	this.key = null;
	this.description = null;
	this.value = null;
}
module.exports.VidiunEventNotificationParameter = VidiunEventNotificationParameter;

util.inherits(VidiunEventNotificationParameter, vidiun.VidiunObjectBase);


/**
 * @param id int  (readOnly).
 * @param partnerId int  (readOnly).
 * @param name string .
 * @param systemName string .
 * @param description string .
 * @param type string  (insertOnly).
 * @param status int  (readOnly).
 * @param createdAt int  (readOnly).
 * @param updatedAt int  (readOnly).
 * @param manualDispatchEnabled bool Define that the template could be dispatched manually from the API.
 * @param automaticDispatchEnabled bool Define that the template could be dispatched automatically by the system.
 * @param eventType string Define the event that should trigger this notification.
 * @param eventObjectType string Define the object that raied the event that should trigger this notification.
 * @param eventConditions array Define the conditions that cause this notification to be triggered.
 * @param contentParameters array Define the content dynamic parameters.
 * @param userParameters array Define the content dynamic parameters.
 */
function VidiunEventNotificationTemplate(){
	VidiunEventNotificationTemplate.super_.call(this);
	this.id = null;
	this.partnerId = null;
	this.name = null;
	this.systemName = null;
	this.description = null;
	this.type = null;
	this.status = null;
	this.createdAt = null;
	this.updatedAt = null;
	this.manualDispatchEnabled = null;
	this.automaticDispatchEnabled = null;
	this.eventType = null;
	this.eventObjectType = null;
	this.eventConditions = null;
	this.contentParameters = null;
	this.userParameters = null;
}
module.exports.VidiunEventNotificationTemplate = VidiunEventNotificationTemplate;

util.inherits(VidiunEventNotificationTemplate, vidiun.VidiunObjectBase);


/**
 * @param schedulerId int .
 * @param workerId int .
 * @param batchIndex int .
 */
function VidiunExclusiveLockKey(){
	VidiunExclusiveLockKey.super_.call(this);
	this.schedulerId = null;
	this.workerId = null;
	this.batchIndex = null;
}
module.exports.VidiunExclusiveLockKey = VidiunExclusiveLockKey;

util.inherits(VidiunExclusiveLockKey, vidiun.VidiunObjectBase);


/**
 * @param extendedFeatures string Comma separated string of enum values denoting which features of the item need to be included in the MRSS.
 */
function VidiunObjectIdentifier(){
	VidiunObjectIdentifier.super_.call(this);
	this.extendedFeatures = null;
}
module.exports.VidiunObjectIdentifier = VidiunObjectIdentifier;

util.inherits(VidiunObjectIdentifier, vidiun.VidiunObjectBase);


/**
 * @param xpath string XPath for the extending item.
 * @param identifier VidiunObjectIdentifier Object identifier.
 * @param extensionMode int Mode of extension - append to MRSS or replace the xpath content.
 */
function VidiunExtendingItemMrssParameter(){
	VidiunExtendingItemMrssParameter.super_.call(this);
	this.xpath = null;
	this.identifier = null;
	this.extensionMode = null;
}
module.exports.VidiunExtendingItemMrssParameter = VidiunExtendingItemMrssParameter;

util.inherits(VidiunExtendingItemMrssParameter, vidiun.VidiunObjectBase);


/**
 * @param plays int Number of plays (readOnly).
 * @param views int Number of views (readOnly).
 * @param lastPlayedAt int The last time the entry was played (readOnly).
 * @param width int The width in pixels (readOnly).
 * @param height int The height in pixels (readOnly).
 * @param duration int The duration in seconds (readOnly).
 * @param msDuration int The duration in miliseconds.
 * @param durationType string The duration type (short for 0-4 mins, medium for 4-20 mins, long for 20+ mins) (readOnly).
 */
function VidiunPlayableEntry(){
	VidiunPlayableEntry.super_.call(this);
	this.plays = null;
	this.views = null;
	this.lastPlayedAt = null;
	this.width = null;
	this.height = null;
	this.duration = null;
	this.msDuration = null;
	this.durationType = null;
}
module.exports.VidiunPlayableEntry = VidiunPlayableEntry;

util.inherits(VidiunPlayableEntry, VidiunBaseEntry);


/**
 * @param mediaType int The media type of the entry (insertOnly).
 * @param conversionQuality string Override the default conversion quality (insertOnly).
 * @param sourceType string The source type of the entry (insertOnly).
 * @param searchProviderType int The search provider type used to import this entry (insertOnly).
 * @param searchProviderId string The ID of the media in the importing site (insertOnly).
 * @param creditUserName string The user name used for credits.
 * @param creditUrl string The URL for credits.
 * @param mediaDate int The media date extracted from EXIF data (For images) as Unix timestamp (In seconds) (readOnly).
 * @param dataUrl string The URL used for playback. This is not the download URL (readOnly).
 * @param flavorParamsIds string Comma separated flavor params ids that exists for this media entry (readOnly).
 * @param isTrimDisabled int True if trim action is disabled for this entry (readOnly).
 */
function VidiunMediaEntry(){
	VidiunMediaEntry.super_.call(this);
	this.mediaType = null;
	this.conversionQuality = null;
	this.sourceType = null;
	this.searchProviderType = null;
	this.searchProviderId = null;
	this.creditUserName = null;
	this.creditUrl = null;
	this.mediaDate = null;
	this.dataUrl = null;
	this.flavorParamsIds = null;
	this.isTrimDisabled = null;
}
module.exports.VidiunMediaEntry = VidiunMediaEntry;

util.inherits(VidiunMediaEntry, VidiunPlayableEntry);


/**
 * @param externalSourceType string The source type of the external media (insertOnly).
 * @param assetParamsIds string Comma separated asset params ids that exists for this external media entry (readOnly).
 */
function VidiunExternalMediaEntry(){
	VidiunExternalMediaEntry.super_.call(this);
	this.externalSourceType = null;
	this.assetParamsIds = null;
}
module.exports.VidiunExternalMediaEntry = VidiunExternalMediaEntry;

util.inherits(VidiunExternalMediaEntry, VidiunMediaEntry);


/**
 * @param type int .
 * @param value int .
 */
function VidiunFeatureStatus(){
	VidiunFeatureStatus.super_.call(this);
	this.type = null;
	this.value = null;
}
module.exports.VidiunFeatureStatus = VidiunFeatureStatus;

util.inherits(VidiunFeatureStatus, vidiun.VidiunObjectBase);


/**
 * @param itemXPath string .
 * @param itemPublishDateXPath string .
 * @param itemUniqueIdentifierXPath string .
 * @param itemContentFileSizeXPath string .
 * @param itemContentUrlXPath string .
 * @param itemContentBitrateXPath string .
 * @param itemHashXPath string .
 * @param itemContentXpath string .
 * @param contentBitrateAttributeName string .
 */
function VidiunFeedItemInfo(){
	VidiunFeedItemInfo.super_.call(this);
	this.itemXPath = null;
	this.itemPublishDateXPath = null;
	this.itemUniqueIdentifierXPath = null;
	this.itemContentFileSizeXPath = null;
	this.itemContentUrlXPath = null;
	this.itemContentBitrateXPath = null;
	this.itemHashXPath = null;
	this.itemContentXpath = null;
	this.contentBitrateAttributeName = null;
}
module.exports.VidiunFeedItemInfo = VidiunFeedItemInfo;

util.inherits(VidiunFeedItemInfo, vidiun.VidiunObjectBase);


/**
 * @param id int  (readOnly).
 * @param partnerId int  (readOnly).
 * @param fileAssetObjectType string  (insertOnly).
 * @param objectId string  (insertOnly).
 * @param name string .
 * @param systemName string .
 * @param fileExt string .
 * @param version int  (readOnly).
 * @param createdAt int  (readOnly).
 * @param updatedAt int  (readOnly).
 * @param status string  (readOnly).
 */
function VidiunFileAsset(){
	VidiunFileAsset.super_.call(this);
	this.id = null;
	this.partnerId = null;
	this.fileAssetObjectType = null;
	this.objectId = null;
	this.name = null;
	this.systemName = null;
	this.fileExt = null;
	this.version = null;
	this.createdAt = null;
	this.updatedAt = null;
	this.status = null;
}
module.exports.VidiunFileAsset = VidiunFileAsset;

util.inherits(VidiunFileAsset, vidiun.VidiunObjectBase);


/**
 * @param id int  (readOnly).
 * @param partnerId int  (readOnly).
 * @param fileObjectType string  (readOnly).
 * @param objectId string  (readOnly).
 * @param version string  (readOnly).
 * @param objectSubType int  (readOnly).
 * @param dc string  (readOnly).
 * @param original int  (readOnly).
 * @param createdAt int  (readOnly).
 * @param updatedAt int  (readOnly).
 * @param readyAt int  (readOnly).
 * @param syncTime int  (readOnly).
 * @param status int .
 * @param fileType int  (readOnly).
 * @param linkedId int  (readOnly).
 * @param linkCount int  (readOnly).
 * @param fileRoot string .
 * @param filePath string .
 * @param fileSize float  (readOnly).
 * @param fileUrl string  (readOnly).
 * @param fileContent string  (readOnly).
 * @param fileDiscSize float  (readOnly).
 * @param isCurrentDc bool  (readOnly).
 * @param isDir bool  (readOnly).
 * @param originalId int  (readOnly).
 */
function VidiunFileSync(){
	VidiunFileSync.super_.call(this);
	this.id = null;
	this.partnerId = null;
	this.fileObjectType = null;
	this.objectId = null;
	this.version = null;
	this.objectSubType = null;
	this.dc = null;
	this.original = null;
	this.createdAt = null;
	this.updatedAt = null;
	this.readyAt = null;
	this.syncTime = null;
	this.status = null;
	this.fileType = null;
	this.linkedId = null;
	this.linkCount = null;
	this.fileRoot = null;
	this.filePath = null;
	this.fileSize = null;
	this.fileUrl = null;
	this.fileContent = null;
	this.fileDiscSize = null;
	this.isCurrentDc = null;
	this.isDir = null;
	this.originalId = null;
}
module.exports.VidiunFileSync = VidiunFileSync;

util.inherits(VidiunFileSync, vidiun.VidiunObjectBase);


/**
 * @param flavorParamsId int The Flavor Params used to create this Flavor Asset (insertOnly).
 * @param width int The width of the Flavor Asset (readOnly).
 * @param height int The height of the Flavor Asset (readOnly).
 * @param bitrate int The overall bitrate (in KBits) of the Flavor Asset (readOnly).
 * @param frameRate float The frame rate (in FPS) of the Flavor Asset (readOnly).
 * @param isOriginal bool True if this Flavor Asset is the original source (readOnly).
 * @param isWeb bool True if this Flavor Asset is playable in VDP (readOnly).
 * @param containerFormat string The container format (readOnly).
 * @param videoCodecId string The video codec (readOnly).
 * @param status int The status of the Flavor Asset (readOnly).
 */
function VidiunFlavorAsset(){
	VidiunFlavorAsset.super_.call(this);
	this.flavorParamsId = null;
	this.width = null;
	this.height = null;
	this.bitrate = null;
	this.frameRate = null;
	this.isOriginal = null;
	this.isWeb = null;
	this.containerFormat = null;
	this.videoCodecId = null;
	this.status = null;
}
module.exports.VidiunFlavorAsset = VidiunFlavorAsset;

util.inherits(VidiunFlavorAsset, VidiunAsset);


/**
 * @param fileName string The name of the downloaded file.
 * @param referrer string .
 */
function VidiunFlavorAssetUrlOptions(){
	VidiunFlavorAssetUrlOptions.super_.call(this);
	this.fileName = null;
	this.referrer = null;
}
module.exports.VidiunFlavorAssetUrlOptions = VidiunFlavorAssetUrlOptions;

util.inherits(VidiunFlavorAssetUrlOptions, vidiun.VidiunObjectBase);


/**
 * @param videoCodec string The video codec of the Flavor Params.
 * @param videoBitrate int The video bitrate (in KBits) of the Flavor Params.
 * @param audioCodec string The audio codec of the Flavor Params.
 * @param audioBitrate int The audio bitrate (in KBits) of the Flavor Params.
 * @param audioChannels int The number of audio channels for "downmixing".
 * @param audioSampleRate int The audio sample rate of the Flavor Params.
 * @param width int The desired width of the Flavor Params.
 * @param height int The desired height of the Flavor Params.
 * @param frameRate float The frame rate of the Flavor Params.
 * @param gopSize int The gop size of the Flavor Params.
 * @param conversionEngines string The list of conversion engines (comma separated).
 * @param conversionEnginesExtraParams string The list of conversion engines extra params (separated with "|").
 * @param twoPass bool .
 * @param deinterlice int .
 * @param rotate int .
 * @param operators string .
 * @param engineVersion int .
 * @param format string The container format of the Flavor Params.
 * @param aspectRatioProcessingMode int .
 * @param forceFrameToMultiplication16 int .
 * @param isGopInSec int .
 * @param isAvoidVideoShrinkFramesizeToSource int .
 * @param isAvoidVideoShrinkBitrateToSource int .
 * @param isVideoFrameRateForLowBrAppleHls int .
 * @param multiStream string .
 * @param anamorphicPixels float .
 * @param isAvoidForcedKeyFrames int .
 * @param isCropIMX int .
 * @param optimizationPolicy int .
 * @param maxFrameRate int .
 * @param videoConstantBitrate int .
 * @param videoBitrateTolerance int .
 * @param watermarkData string .
 * @param subtitlesData string .
 * @param isEncrypted int .
 * @param clipOffset int .
 * @param clipDuration int .
 */
function VidiunFlavorParams(){
	VidiunFlavorParams.super_.call(this);
	this.videoCodec = null;
	this.videoBitrate = null;
	this.audioCodec = null;
	this.audioBitrate = null;
	this.audioChannels = null;
	this.audioSampleRate = null;
	this.width = null;
	this.height = null;
	this.frameRate = null;
	this.gopSize = null;
	this.conversionEngines = null;
	this.conversionEnginesExtraParams = null;
	this.twoPass = null;
	this.deinterlice = null;
	this.rotate = null;
	this.operators = null;
	this.engineVersion = null;
	this.format = null;
	this.aspectRatioProcessingMode = null;
	this.forceFrameToMultiplication16 = null;
	this.isGopInSec = null;
	this.isAvoidVideoShrinkFramesizeToSource = null;
	this.isAvoidVideoShrinkBitrateToSource = null;
	this.isVideoFrameRateForLowBrAppleHls = null;
	this.multiStream = null;
	this.anamorphicPixels = null;
	this.isAvoidForcedKeyFrames = null;
	this.isCropIMX = null;
	this.optimizationPolicy = null;
	this.maxFrameRate = null;
	this.videoConstantBitrate = null;
	this.videoBitrateTolerance = null;
	this.watermarkData = null;
	this.subtitlesData = null;
	this.isEncrypted = null;
	this.clipOffset = null;
	this.clipDuration = null;
}
module.exports.VidiunFlavorParams = VidiunFlavorParams;

util.inherits(VidiunFlavorParams, VidiunAssetParams);


/**
 * @param flavorAsset VidiunFlavorAsset The Flavor Asset (Can be null when there are params without asset).
 * @param flavorParams VidiunFlavorParams The Flavor Params.
 * @param entryId string The entry id.
 */
function VidiunFlavorAssetWithParams(){
	VidiunFlavorAssetWithParams.super_.call(this);
	this.flavorAsset = null;
	this.flavorParams = null;
	this.entryId = null;
}
module.exports.VidiunFlavorAssetWithParams = VidiunFlavorAssetWithParams;

util.inherits(VidiunFlavorAssetWithParams, vidiun.VidiunObjectBase);


/**
 * @param flavorParamsId int .
 * @param commandLinesStr string .
 * @param flavorParamsVersion string .
 * @param flavorAssetId string .
 * @param flavorAssetVersion string .
 * @param readyBehavior int .
 */
function VidiunFlavorParamsOutput(){
	VidiunFlavorParamsOutput.super_.call(this);
	this.flavorParamsId = null;
	this.commandLinesStr = null;
	this.flavorParamsVersion = null;
	this.flavorAssetId = null;
	this.flavorAssetVersion = null;
	this.readyBehavior = null;
}
module.exports.VidiunFlavorParamsOutput = VidiunFlavorParamsOutput;

util.inherits(VidiunFlavorParamsOutput, VidiunFlavorParams);


/**
 * @param protocol int .
 * @param serverUrl string .
 * @param serverPath string .
 * @param username string .
 * @param password string .
 * @param ftpPassiveMode bool .
 * @param httpFieldName string .
 * @param httpFileName string .
 */
function VidiunGenericDistributionProfileAction(){
	VidiunGenericDistributionProfileAction.super_.call(this);
	this.protocol = null;
	this.serverUrl = null;
	this.serverPath = null;
	this.username = null;
	this.password = null;
	this.ftpPassiveMode = null;
	this.httpFieldName = null;
	this.httpFileName = null;
}
module.exports.VidiunGenericDistributionProfileAction = VidiunGenericDistributionProfileAction;

util.inherits(VidiunGenericDistributionProfileAction, vidiun.VidiunObjectBase);


/**
 * @param id int Auto generated (readOnly).
 * @param createdAt int Generic distribution provider action creation date as Unix timestamp (In seconds) (readOnly).
 * @param updatedAt int Generic distribution provider action last update date as Unix timestamp (In seconds) (readOnly).
 * @param genericDistributionProviderId int  (insertOnly).
 * @param action int  (insertOnly).
 * @param status int  (readOnly).
 * @param resultsParser int .
 * @param protocol int .
 * @param serverAddress string .
 * @param remotePath string .
 * @param remoteUsername string .
 * @param remotePassword string .
 * @param editableFields string .
 * @param mandatoryFields string .
 * @param mrssTransformer string  (readOnly).
 * @param mrssValidator string  (readOnly).
 * @param resultsTransformer string  (readOnly).
 */
function VidiunGenericDistributionProviderAction(){
	VidiunGenericDistributionProviderAction.super_.call(this);
	this.id = null;
	this.createdAt = null;
	this.updatedAt = null;
	this.genericDistributionProviderId = null;
	this.action = null;
	this.status = null;
	this.resultsParser = null;
	this.protocol = null;
	this.serverAddress = null;
	this.remotePath = null;
	this.remoteUsername = null;
	this.remotePassword = null;
	this.editableFields = null;
	this.mandatoryFields = null;
	this.mrssTransformer = null;
	this.mrssValidator = null;
	this.resultsTransformer = null;
}
module.exports.VidiunGenericDistributionProviderAction = VidiunGenericDistributionProviderAction;

util.inherits(VidiunGenericDistributionProviderAction, vidiun.VidiunObjectBase);


/**
 * @param id int Auto generated (readOnly).
 * @param createdAt int Generic distribution provider creation date as Unix timestamp (In seconds) (readOnly).
 * @param updatedAt int Generic distribution provider last update date as Unix timestamp (In seconds) (readOnly).
 * @param partnerId int  (readOnly).
 * @param isDefault bool .
 * @param status int  (readOnly).
 * @param optionalFlavorParamsIds string .
 * @param requiredFlavorParamsIds string .
 * @param optionalThumbDimensions array .
 * @param requiredThumbDimensions array .
 * @param editableFields string .
 * @param mandatoryFields string .
 */
function VidiunGenericDistributionProvider(){
	VidiunGenericDistributionProvider.super_.call(this);
	this.id = null;
	this.createdAt = null;
	this.updatedAt = null;
	this.partnerId = null;
	this.isDefault = null;
	this.status = null;
	this.optionalFlavorParamsIds = null;
	this.requiredFlavorParamsIds = null;
	this.optionalThumbDimensions = null;
	this.requiredThumbDimensions = null;
	this.editableFields = null;
	this.mandatoryFields = null;
}
module.exports.VidiunGenericDistributionProvider = VidiunGenericDistributionProvider;

util.inherits(VidiunGenericDistributionProvider, VidiunDistributionProvider);


/**
 * @param userId string  (insertOnly).
 * @param groupId string  (insertOnly).
 * @param status int  (readOnly).
 * @param partnerId int  (readOnly).
 * @param createdAt int Creation date as Unix timestamp (In seconds) (readOnly).
 * @param updatedAt int Last update date as Unix timestamp (In seconds) (readOnly).
 */
function VidiunGroupUser(){
	VidiunGroupUser.super_.call(this);
	this.userId = null;
	this.groupId = null;
	this.status = null;
	this.partnerId = null;
	this.createdAt = null;
	this.updatedAt = null;
}
module.exports.VidiunGroupUser = VidiunGroupUser;

util.inherits(VidiunGroupUser, vidiun.VidiunObjectBase);


/**
 */
function VidiunHttpNotificationData(){
	VidiunHttpNotificationData.super_.call(this);
}
module.exports.VidiunHttpNotificationData = VidiunHttpNotificationData;

util.inherits(VidiunHttpNotificationData, vidiun.VidiunObjectBase);


/**
 * @param value int .
 */
function VidiunIntegerValue(){
	VidiunIntegerValue.super_.call(this);
	this.value = null;
}
module.exports.VidiunIntegerValue = VidiunIntegerValue;

util.inherits(VidiunIntegerValue, VidiunValue);


/**
 */
function VidiunIntegrationJobProviderData(){
	VidiunIntegrationJobProviderData.super_.call(this);
}
module.exports.VidiunIntegrationJobProviderData = VidiunIntegrationJobProviderData;

util.inherits(VidiunIntegrationJobProviderData, vidiun.VidiunObjectBase);


/**
 */
function VidiunIntegrationJobTriggerData(){
	VidiunIntegrationJobTriggerData.super_.call(this);
}
module.exports.VidiunIntegrationJobTriggerData = VidiunIntegrationJobTriggerData;

util.inherits(VidiunIntegrationJobTriggerData, vidiun.VidiunObjectBase);


/**
 * @param partner_id int .
 * @param valid_until int .
 * @param partner_pattern string .
 * @param type int .
 * @param error string .
 * @param rand int .
 * @param user string .
 * @param privileges string .
 */
function VidiunInternalToolsSession(){
	VidiunInternalToolsSession.super_.call(this);
	this.partner_id = null;
	this.valid_until = null;
	this.partner_pattern = null;
	this.type = null;
	this.error = null;
	this.rand = null;
	this.user = null;
	this.privileges = null;
}
module.exports.VidiunInternalToolsSession = VidiunInternalToolsSession;

util.inherits(VidiunInternalToolsSession, vidiun.VidiunObjectBase);


/**
 * @param key string .
 * @param value bool .
 */
function VidiunKeyBooleanValue(){
	VidiunKeyBooleanValue.super_.call(this);
	this.key = null;
	this.value = null;
}
module.exports.VidiunKeyBooleanValue = VidiunKeyBooleanValue;

util.inherits(VidiunKeyBooleanValue, vidiun.VidiunObjectBase);


/**
 * @param entryId string The id of the entry that the like belongs to.
 * @param userId string The id of user that the like belongs to.
 * @param createdAt int The date of the like's creation.
 */
function VidiunLike(){
	VidiunLike.super_.call(this);
	this.entryId = null;
	this.userId = null;
	this.createdAt = null;
}
module.exports.VidiunLike = VidiunLike;

util.inherits(VidiunLike, vidiun.VidiunObjectBase);


/**
 * @param protocol string .
 * @param url string .
 * @param publishUrl string .
 * @param backupUrl string .
 * @param streamName string .
 */
function VidiunLiveStreamConfiguration(){
	VidiunLiveStreamConfiguration.super_.call(this);
	this.protocol = null;
	this.url = null;
	this.publishUrl = null;
	this.backupUrl = null;
	this.streamName = null;
}
module.exports.VidiunLiveStreamConfiguration = VidiunLiveStreamConfiguration;

util.inherits(VidiunLiveStreamConfiguration, vidiun.VidiunObjectBase);


/**
 * @param publishUrl string .
 * @param backupPublishUrl string .
 * @param port string .
 */
function VidiunLiveStreamPushPublishConfiguration(){
	VidiunLiveStreamPushPublishConfiguration.super_.call(this);
	this.publishUrl = null;
	this.backupPublishUrl = null;
	this.port = null;
}
module.exports.VidiunLiveStreamPushPublishConfiguration = VidiunLiveStreamPushPublishConfiguration;

util.inherits(VidiunLiveStreamPushPublishConfiguration, vidiun.VidiunObjectBase);


/**
 * @param shouldCopyEntitlement int .
 * @param shouldCopyScheduling int .
 * @param shouldCopyThumbnail int .
 */
function VidiunLiveEntryRecordingOptions(){
	VidiunLiveEntryRecordingOptions.super_.call(this);
	this.shouldCopyEntitlement = null;
	this.shouldCopyScheduling = null;
	this.shouldCopyThumbnail = null;
}
module.exports.VidiunLiveEntryRecordingOptions = VidiunLiveEntryRecordingOptions;

util.inherits(VidiunLiveEntryRecordingOptions, vidiun.VidiunObjectBase);


/**
 * @param offlineMessage string The message to be presented when the stream is offline.
 * @param recordStatus int Recording Status Enabled/Disabled.
 * @param dvrStatus int DVR Status Enabled/Disabled.
 * @param dvrWindow int Window of time which the DVR allows for backwards scrubbing (in minutes).
 * @param lastElapsedRecordingTime int Elapsed recording time (in msec) up to the point where the live stream was last stopped (unpublished).
 * @param liveStreamConfigurations array Array of key value protocol->live stream url objects.
 * @param recordedEntryId string Recorded entry id.
 * @param pushPublishEnabled int Flag denoting whether entry should be published by the media server.
 * @param publishConfigurations array Array of publish configurations.
 * @param firstBroadcast int The first time in which the entry was broadcast (readOnly).
 * @param lastBroadcast int The Last time in which the entry was broadcast (readOnly).
 * @param currentBroadcastStartTime float The time (unix timestamp in milliseconds) in which the entry broadcast started or 0 when the entry is off the air.
 * @param recordingOptions VidiunLiveEntryRecordingOptions .
 * @param liveStatus int the status of the entry of type EntryServerNodeStatus (readOnly).
 */
function VidiunLiveEntry(){
	VidiunLiveEntry.super_.call(this);
	this.offlineMessage = null;
	this.recordStatus = null;
	this.dvrStatus = null;
	this.dvrWindow = null;
	this.lastElapsedRecordingTime = null;
	this.liveStreamConfigurations = null;
	this.recordedEntryId = null;
	this.pushPublishEnabled = null;
	this.publishConfigurations = null;
	this.firstBroadcast = null;
	this.lastBroadcast = null;
	this.currentBroadcastStartTime = null;
	this.recordingOptions = null;
	this.liveStatus = null;
}
module.exports.VidiunLiveEntry = VidiunLiveEntry;

util.inherits(VidiunLiveEntry, VidiunMediaEntry);


/**
 * @param playlistId string Playlist id to be played.
 * @param repeat int Indicates that the segments should be repeated for ever.
 */
function VidiunLiveChannel(){
	VidiunLiveChannel.super_.call(this);
	this.playlistId = null;
	this.repeat = null;
}
module.exports.VidiunLiveChannel = VidiunLiveChannel;

util.inherits(VidiunLiveChannel, VidiunLiveEntry);


/**
 * @param id string Unique identifier (readOnly).
 * @param partnerId int  (readOnly).
 * @param createdAt int Segment creation date as Unix timestamp (In seconds) (readOnly).
 * @param updatedAt int Segment update date as Unix timestamp (In seconds) (readOnly).
 * @param name string Segment name.
 * @param description string Segment description.
 * @param tags string Segment tags.
 * @param type string Segment could be associated with the main stream, as additional stream or as overlay.
 * @param status string  (readOnly).
 * @param channelId string Live channel id.
 * @param entryId string Entry id to be played.
 * @param triggerType string Segment start time trigger type.
 * @param triggerSegmentId string Live channel segment that the trigger relates to.
 * @param startTime float Segment play start time, in mili-seconds, according to trigger type.
 * @param duration float Segment play duration time, in mili-seconds.
 */
function VidiunLiveChannelSegment(){
	VidiunLiveChannelSegment.super_.call(this);
	this.id = null;
	this.partnerId = null;
	this.createdAt = null;
	this.updatedAt = null;
	this.name = null;
	this.description = null;
	this.tags = null;
	this.type = null;
	this.status = null;
	this.channelId = null;
	this.entryId = null;
	this.triggerType = null;
	this.triggerSegmentId = null;
	this.startTime = null;
	this.duration = null;
}
module.exports.VidiunLiveChannelSegment = VidiunLiveChannelSegment;

util.inherits(VidiunLiveChannelSegment, vidiun.VidiunObjectBase);


/**
 * @param entryIds string .
 * @param recpientEmail string .
 * @param timeZoneOffset int Time zone offset in minutes (between client to UTC).
 * @param applicationUrlTemplate string Optional argument that allows controlling the prefix of the exported csv url.
 */
function VidiunLiveReportExportParams(){
	VidiunLiveReportExportParams.super_.call(this);
	this.entryIds = null;
	this.recpientEmail = null;
	this.timeZoneOffset = null;
	this.applicationUrlTemplate = null;
}
module.exports.VidiunLiveReportExportParams = VidiunLiveReportExportParams;

util.inherits(VidiunLiveReportExportParams, vidiun.VidiunObjectBase);


/**
 * @param referenceJobId int .
 * @param reportEmail string .
 */
function VidiunLiveReportExportResponse(){
	VidiunLiveReportExportResponse.super_.call(this);
	this.referenceJobId = null;
	this.reportEmail = null;
}
module.exports.VidiunLiveReportExportResponse = VidiunLiveReportExportResponse;

util.inherits(VidiunLiveReportExportResponse, vidiun.VidiunObjectBase);


/**
 * @param entryIds string .
 * @param fromTime int .
 * @param toTime int .
 * @param live int .
 * @param orderBy string .
 */
function VidiunLiveReportInputFilter(){
	VidiunLiveReportInputFilter.super_.call(this);
	this.entryIds = null;
	this.fromTime = null;
	this.toTime = null;
	this.live = null;
	this.orderBy = null;
}
module.exports.VidiunLiveReportInputFilter = VidiunLiveReportInputFilter;

util.inherits(VidiunLiveReportInputFilter, vidiun.VidiunObjectBase);


/**
 * @param audience int .
 * @param dvrAudience int .
 * @param avgBitrate float .
 * @param bufferTime int .
 * @param plays int .
 * @param secondsViewed int .
 * @param startEvent int .
 * @param timestamp int .
 */
function VidiunLiveStats(){
	VidiunLiveStats.super_.call(this);
	this.audience = null;
	this.dvrAudience = null;
	this.avgBitrate = null;
	this.bufferTime = null;
	this.plays = null;
	this.secondsViewed = null;
	this.startEvent = null;
	this.timestamp = null;
}
module.exports.VidiunLiveStats = VidiunLiveStats;

util.inherits(VidiunLiveStats, vidiun.VidiunObjectBase);


/**
 * @param partnerId int .
 * @param entryId string .
 * @param eventType int an integer representing the type of event being sent from the player.
 * @param sessionId string a unique string generated by the client that will represent the client-side session: the primary component will pass it on to other components that sprout from it.
 * @param eventIndex int incremental sequence of the event.
 * @param bufferTime int buffer time in seconds from the last 10 seconds.
 * @param bitrate int bitrate used in the last 10 seconds.
 * @param referrer string the referrer of the client.
 * @param isLive bool .
 * @param startTime string the event start time as string.
 * @param deliveryType string delivery type used for this stream.
 */
function VidiunLiveStatsEvent(){
	VidiunLiveStatsEvent.super_.call(this);
	this.partnerId = null;
	this.entryId = null;
	this.eventType = null;
	this.sessionId = null;
	this.eventIndex = null;
	this.bufferTime = null;
	this.bitrate = null;
	this.referrer = null;
	this.isLive = null;
	this.startTime = null;
	this.deliveryType = null;
}
module.exports.VidiunLiveStatsEvent = VidiunLiveStatsEvent;

util.inherits(VidiunLiveStatsEvent, vidiun.VidiunObjectBase);


/**
 * @param bitrate int .
 * @param width int .
 * @param height int .
 * @param tags string .
 */
function VidiunLiveStreamBitrate(){
	VidiunLiveStreamBitrate.super_.call(this);
	this.bitrate = null;
	this.width = null;
	this.height = null;
	this.tags = null;
}
module.exports.VidiunLiveStreamBitrate = VidiunLiveStreamBitrate;

util.inherits(VidiunLiveStreamBitrate, vidiun.VidiunObjectBase);


/**
 * @param streamRemoteId string The stream id as provided by the provider (readOnly).
 * @param streamRemoteBackupId string The backup stream id as provided by the provider (readOnly).
 * @param bitrates array Array of supported bitrates.
 * @param primaryBroadcastingUrl string .
 * @param secondaryBroadcastingUrl string .
 * @param primaryRtspBroadcastingUrl string .
 * @param secondaryRtspBroadcastingUrl string .
 * @param streamName string .
 * @param streamUrl string The stream url.
 * @param hlsStreamUrl string HLS URL - URL for live stream playback on mobile device.
 * @param urlManager string URL Manager to handle the live stream URL (for instance, add token).
 * @param encodingIP1 string The broadcast primary ip.
 * @param encodingIP2 string The broadcast secondary ip.
 * @param streamPassword string The broadcast password.
 * @param streamUsername string The broadcast username (readOnly).
 * @param primaryServerNodeId int The Streams primary server node id (readOnly).
 */
function VidiunLiveStreamEntry(){
	VidiunLiveStreamEntry.super_.call(this);
	this.streamRemoteId = null;
	this.streamRemoteBackupId = null;
	this.bitrates = null;
	this.primaryBroadcastingUrl = null;
	this.secondaryBroadcastingUrl = null;
	this.primaryRtspBroadcastingUrl = null;
	this.secondaryRtspBroadcastingUrl = null;
	this.streamName = null;
	this.streamUrl = null;
	this.hlsStreamUrl = null;
	this.urlManager = null;
	this.encodingIP1 = null;
	this.encodingIP2 = null;
	this.streamPassword = null;
	this.streamUsername = null;
	this.primaryServerNodeId = null;
}
module.exports.VidiunLiveStreamEntry = VidiunLiveStreamEntry;

util.inherits(VidiunLiveStreamEntry, VidiunLiveEntry);


/**
 * @param bitrate int Bit rate of the stream. (i.e. 900).
 * @param flavorId string flavor asset id.
 * @param width int Stream's width.
 * @param height int Stream's height.
 * @param codec string Live stream's codec.
 */
function VidiunLiveStreamParams(){
	VidiunLiveStreamParams.super_.call(this);
	this.bitrate = null;
	this.flavorId = null;
	this.width = null;
	this.height = null;
	this.codec = null;
	this.frameRate = null;
	this.keyFrameInterval = null;
    this.language = null;
}
module.exports.VidiunLiveStreamParams = VidiunLiveStreamParams;

util.inherits(VidiunLiveStreamParams, vidiun.VidiunObjectBase);


/**
 * @param fileSyncs array .
 * @param limitReached bool .
 * @param dcSecret string .
 * @param baseUrl string .
 */
function VidiunLockFileSyncsResponse(){
	VidiunLockFileSyncsResponse.super_.call(this);
	this.fileSyncs = null;
	this.limitReached = null;
	this.dcSecret = null;
	this.baseUrl = null;
}
module.exports.VidiunLockFileSyncsResponse = VidiunLockFileSyncsResponse;

util.inherits(VidiunLockFileSyncsResponse, vidiun.VidiunObjectBase);


/**
 * @param idEqual string This filter should be in use for retrieving only a specific entry (identified by its entryId).
 * @param idIn string This filter should be in use for retrieving few specific entries (string should include comma separated list of entryId strings).
 * @param idNotIn string .
 * @param nameLike string This filter should be in use for retrieving specific entries. It should include only one string to search for in entry names (no wildcards, spaces are treated as part of the string).
 * @param nameMultiLikeOr string This filter should be in use for retrieving specific entries. It could include few (comma separated) strings for searching in entry names, while applying an OR logic to retrieve entries that contain at least one input string (no wildcards, spaces are treated as part of the string).
 * @param nameMultiLikeAnd string This filter should be in use for retrieving specific entries. It could include few (comma separated) strings for searching in entry names, while applying an AND logic to retrieve entries that contain all input strings (no wildcards, spaces are treated as part of the string).
 * @param nameEqual string This filter should be in use for retrieving entries with a specific name.
 * @param partnerIdEqual int This filter should be in use for retrieving only entries which were uploaded by/assigned to users of a specific Vidiun Partner (identified by Partner ID).
 * @param partnerIdIn string This filter should be in use for retrieving only entries within Vidiun network which were uploaded by/assigned to users of few Vidiun Partners  (string should include comma separated list of PartnerIDs).
 * @param userIdEqual string This filter parameter should be in use for retrieving only entries, uploaded by/assigned to a specific user (identified by user Id).
 * @param userIdIn string .
 * @param creatorIdEqual string .
 * @param tagsLike string This filter should be in use for retrieving specific entries. It should include only one string to search for in entry tags (no wildcards, spaces are treated as part of the string).
 * @param tagsMultiLikeOr string This filter should be in use for retrieving specific entries. It could include few (comma separated) strings for searching in entry tags, while applying an OR logic to retrieve entries that contain at least one input string (no wildcards, spaces are treated as part of the string).
 * @param tagsMultiLikeAnd string This filter should be in use for retrieving specific entries. It could include few (comma separated) strings for searching in entry tags, while applying an AND logic to retrieve entries that contain all input strings (no wildcards, spaces are treated as part of the string).
 * @param adminTagsLike string This filter should be in use for retrieving specific entries. It should include only one string to search for in entry tags set by an ADMIN user (no wildcards, spaces are treated as part of the string).
 * @param adminTagsMultiLikeOr string This filter should be in use for retrieving specific entries. It could include few (comma separated) strings for searching in entry tags, set by an ADMIN user, while applying an OR logic to retrieve entries that contain at least one input string (no wildcards, spaces are treated as part of the string).
 * @param adminTagsMultiLikeAnd string This filter should be in use for retrieving specific entries. It could include few (comma separated) strings for searching in entry tags, set by an ADMIN user, while applying an AND logic to retrieve entries that contain all input strings (no wildcards, spaces are treated as part of the string).
 * @param categoriesMatchAnd string .
 * @param categoriesMatchOr string All entries within these categories or their child categories.
 * @param categoriesNotContains string .
 * @param categoriesIdsMatchAnd string .
 * @param categoriesIdsMatchOr string All entries of the categories, excluding their child categories.
 * To include entries of the child categories, use categoryAncestorIdIn, or categoriesMatchOr.
 * @param categoriesIdsNotContains string .
 * @param categoriesIdsEmpty int .
 * @param statusEqual string This filter should be in use for retrieving only entries, at a specific {.
 * @param statusNotEqual string This filter should be in use for retrieving only entries, not at a specific {.
 * @param statusIn string This filter should be in use for retrieving only entries, at few specific {.
 * @param statusNotIn string This filter should be in use for retrieving only entries, not at few specific {.
 * @param moderationStatusEqual int .
 * @param moderationStatusNotEqual int .
 * @param moderationStatusIn string .
 * @param moderationStatusNotIn string .
 * @param typeEqual string .
 * @param typeIn string This filter should be in use for retrieving entries of few {.
 * @param createdAtGreaterThanOrEqual int This filter parameter should be in use for retrieving only entries which were created at Vidiun system after a specific time/date (standard timestamp format).
 * @param createdAtLessThanOrEqual int This filter parameter should be in use for retrieving only entries which were created at Vidiun system before a specific time/date (standard timestamp format).
 * @param updatedAtGreaterThanOrEqual int .
 * @param updatedAtLessThanOrEqual int .
 * @param totalRankLessThanOrEqual int .
 * @param totalRankGreaterThanOrEqual int .
 * @param groupIdEqual int .
 * @param searchTextMatchAnd string This filter should be in use for retrieving specific entries while search match the input string within all of the following metadata attributes: name, description, tags, adminTags.
 * @param searchTextMatchOr string This filter should be in use for retrieving specific entries while search match the input string within at least one of the following metadata attributes: name, description, tags, adminTags.
 * @param accessControlIdEqual int .
 * @param accessControlIdIn string .
 * @param startDateGreaterThanOrEqual int .
 * @param startDateLessThanOrEqual int .
 * @param startDateGreaterThanOrEqualOrNull int .
 * @param startDateLessThanOrEqualOrNull int .
 * @param endDateGreaterThanOrEqual int .
 * @param endDateLessThanOrEqual int .
 * @param endDateGreaterThanOrEqualOrNull int .
 * @param endDateLessThanOrEqualOrNull int .
 * @param referenceIdEqual string .
 * @param referenceIdIn string .
 * @param replacingEntryIdEqual string .
 * @param replacingEntryIdIn string .
 * @param replacedEntryIdEqual string .
 * @param replacedEntryIdIn string .
 * @param replacementStatusEqual string .
 * @param replacementStatusIn string .
 * @param partnerSortValueGreaterThanOrEqual int .
 * @param partnerSortValueLessThanOrEqual int .
 * @param rootEntryIdEqual string .
 * @param rootEntryIdIn string .
 * @param parentEntryIdEqual string .
 * @param entitledUsersEditMatchAnd string .
 * @param entitledUsersEditMatchOr string .
 * @param entitledUsersPublishMatchAnd string .
 * @param entitledUsersPublishMatchOr string .
 * @param tagsNameMultiLikeOr string .
 * @param tagsAdminTagsMultiLikeOr string .
 * @param tagsAdminTagsNameMultiLikeOr string .
 * @param tagsNameMultiLikeAnd string .
 * @param tagsAdminTagsMultiLikeAnd string .
 * @param tagsAdminTagsNameMultiLikeAnd string .
 */
function VidiunBaseEntryBaseFilter(){
	VidiunBaseEntryBaseFilter.super_.call(this);
	this.idEqual = null;
	this.idIn = null;
	this.idNotIn = null;
	this.nameLike = null;
	this.nameMultiLikeOr = null;
	this.nameMultiLikeAnd = null;
	this.nameEqual = null;
	this.partnerIdEqual = null;
	this.partnerIdIn = null;
	this.userIdEqual = null;
	this.userIdIn = null;
	this.creatorIdEqual = null;
	this.tagsLike = null;
	this.tagsMultiLikeOr = null;
	this.tagsMultiLikeAnd = null;
	this.adminTagsLike = null;
	this.adminTagsMultiLikeOr = null;
	this.adminTagsMultiLikeAnd = null;
	this.categoriesMatchAnd = null;
	this.categoriesMatchOr = null;
	this.categoriesNotContains = null;
	this.categoriesIdsMatchAnd = null;
	this.categoriesIdsMatchOr = null;
	this.categoriesIdsNotContains = null;
	this.categoriesIdsEmpty = null;
	this.statusEqual = null;
	this.statusNotEqual = null;
	this.statusIn = null;
	this.statusNotIn = null;
	this.moderationStatusEqual = null;
	this.moderationStatusNotEqual = null;
	this.moderationStatusIn = null;
	this.moderationStatusNotIn = null;
	this.typeEqual = null;
	this.typeIn = null;
	this.createdAtGreaterThanOrEqual = null;
	this.createdAtLessThanOrEqual = null;
	this.updatedAtGreaterThanOrEqual = null;
	this.updatedAtLessThanOrEqual = null;
	this.totalRankLessThanOrEqual = null;
	this.totalRankGreaterThanOrEqual = null;
	this.groupIdEqual = null;
	this.searchTextMatchAnd = null;
	this.searchTextMatchOr = null;
	this.accessControlIdEqual = null;
	this.accessControlIdIn = null;
	this.startDateGreaterThanOrEqual = null;
	this.startDateLessThanOrEqual = null;
	this.startDateGreaterThanOrEqualOrNull = null;
	this.startDateLessThanOrEqualOrNull = null;
	this.endDateGreaterThanOrEqual = null;
	this.endDateLessThanOrEqual = null;
	this.endDateGreaterThanOrEqualOrNull = null;
	this.endDateLessThanOrEqualOrNull = null;
	this.referenceIdEqual = null;
	this.referenceIdIn = null;
	this.replacingEntryIdEqual = null;
	this.replacingEntryIdIn = null;
	this.replacedEntryIdEqual = null;
	this.replacedEntryIdIn = null;
	this.replacementStatusEqual = null;
	this.replacementStatusIn = null;
	this.partnerSortValueGreaterThanOrEqual = null;
	this.partnerSortValueLessThanOrEqual = null;
	this.rootEntryIdEqual = null;
	this.rootEntryIdIn = null;
	this.parentEntryIdEqual = null;
	this.entitledUsersEditMatchAnd = null;
	this.entitledUsersEditMatchOr = null;
	this.entitledUsersPublishMatchAnd = null;
	this.entitledUsersPublishMatchOr = null;
	this.tagsNameMultiLikeOr = null;
	this.tagsAdminTagsMultiLikeOr = null;
	this.tagsAdminTagsNameMultiLikeOr = null;
	this.tagsNameMultiLikeAnd = null;
	this.tagsAdminTagsMultiLikeAnd = null;
	this.tagsAdminTagsNameMultiLikeAnd = null;
}
module.exports.VidiunBaseEntryBaseFilter = VidiunBaseEntryBaseFilter;

util.inherits(VidiunBaseEntryBaseFilter, VidiunRelatedFilter);


/**
 * @param freeText string .
 * @param isRoot int .
 * @param categoriesFullNameIn string .
 * @param categoryAncestorIdIn string All entries within this categoy or in child categories.
 * @param redirectFromEntryId string The id of the original entry.
 */
function VidiunBaseEntryFilter(){
	VidiunBaseEntryFilter.super_.call(this);
	this.freeText = null;
	this.isRoot = null;
	this.categoriesFullNameIn = null;
	this.categoryAncestorIdIn = null;
	this.redirectFromEntryId = null;
}
module.exports.VidiunBaseEntryFilter = VidiunBaseEntryFilter;

util.inherits(VidiunBaseEntryFilter, VidiunBaseEntryBaseFilter);


/**
 * @param lastPlayedAtGreaterThanOrEqual int .
 * @param lastPlayedAtLessThanOrEqual int .
 * @param durationLessThan int .
 * @param durationGreaterThan int .
 * @param durationLessThanOrEqual int .
 * @param durationGreaterThanOrEqual int .
 * @param durationTypeMatchOr string .
 */
function VidiunPlayableEntryBaseFilter(){
	VidiunPlayableEntryBaseFilter.super_.call(this);
	this.lastPlayedAtGreaterThanOrEqual = null;
	this.lastPlayedAtLessThanOrEqual = null;
	this.durationLessThan = null;
	this.durationGreaterThan = null;
	this.durationLessThanOrEqual = null;
	this.durationGreaterThanOrEqual = null;
	this.durationTypeMatchOr = null;
}
module.exports.VidiunPlayableEntryBaseFilter = VidiunPlayableEntryBaseFilter;

util.inherits(VidiunPlayableEntryBaseFilter, VidiunBaseEntryFilter);


/**
 */
function VidiunPlayableEntryFilter(){
	VidiunPlayableEntryFilter.super_.call(this);
}
module.exports.VidiunPlayableEntryFilter = VidiunPlayableEntryFilter;

util.inherits(VidiunPlayableEntryFilter, VidiunPlayableEntryBaseFilter);


/**
 * @param mediaTypeEqual int .
 * @param mediaTypeIn string .
 * @param sourceTypeEqual string .
 * @param sourceTypeNotEqual string .
 * @param sourceTypeIn string .
 * @param sourceTypeNotIn string .
 * @param mediaDateGreaterThanOrEqual int .
 * @param mediaDateLessThanOrEqual int .
 * @param flavorParamsIdsMatchOr string .
 * @param flavorParamsIdsMatchAnd string .
 */
function VidiunMediaEntryBaseFilter(){
	VidiunMediaEntryBaseFilter.super_.call(this);
	this.mediaTypeEqual = null;
	this.mediaTypeIn = null;
	this.sourceTypeEqual = null;
	this.sourceTypeNotEqual = null;
	this.sourceTypeIn = null;
	this.sourceTypeNotIn = null;
	this.mediaDateGreaterThanOrEqual = null;
	this.mediaDateLessThanOrEqual = null;
	this.flavorParamsIdsMatchOr = null;
	this.flavorParamsIdsMatchAnd = null;
}
module.exports.VidiunMediaEntryBaseFilter = VidiunMediaEntryBaseFilter;

util.inherits(VidiunMediaEntryBaseFilter, VidiunPlayableEntryFilter);


/**
 */
function VidiunMediaEntryFilter(){
	VidiunMediaEntryFilter.super_.call(this);
}
module.exports.VidiunMediaEntryFilter = VidiunMediaEntryFilter;

util.inherits(VidiunMediaEntryFilter, VidiunMediaEntryBaseFilter);


/**
 * @param limit int .
 */
function VidiunMediaEntryFilterForPlaylist(){
	VidiunMediaEntryFilterForPlaylist.super_.call(this);
	this.limit = null;
}
module.exports.VidiunMediaEntryFilterForPlaylist = VidiunMediaEntryFilterForPlaylist;

util.inherits(VidiunMediaEntryFilterForPlaylist, VidiunMediaEntryFilter);


/**
 * @param id int The id of the media info (readOnly).
 * @param flavorAssetId string The id of the related flavor asset.
 * @param fileSize int The file size.
 * @param containerFormat string The container format.
 * @param containerId string The container id.
 * @param containerProfile string The container profile.
 * @param containerDuration int The container duration.
 * @param containerBitRate int The container bit rate.
 * @param videoFormat string The video format.
 * @param videoCodecId string The video codec id.
 * @param videoDuration int The video duration.
 * @param videoBitRate int The video bit rate.
 * @param videoBitRateMode int The video bit rate mode.
 * @param videoWidth int The video width.
 * @param videoHeight int The video height.
 * @param videoFrameRate float The video frame rate.
 * @param videoDar float The video display aspect ratio (dar).
 * @param videoRotation int .
 * @param audioFormat string The audio format.
 * @param audioCodecId string The audio codec id.
 * @param audioDuration int The audio duration.
 * @param audioBitRate int The audio bit rate.
 * @param audioBitRateMode int The audio bit rate mode.
 * @param audioChannels int The number of audio channels.
 * @param audioSamplingRate int The audio sampling rate.
 * @param audioResolution int The audio resolution.
 * @param writingLib string The writing library.
 * @param rawData string The data as returned by the mediainfo command line.
 * @param multiStreamInfo string .
 * @param scanType int .
 * @param multiStream string .
 * @param isFastStart int .
 * @param contentStreams string .
 */
function VidiunMediaInfo(){
	VidiunMediaInfo.super_.call(this);
	this.id = null;
	this.flavorAssetId = null;
	this.fileSize = null;
	this.containerFormat = null;
	this.containerId = null;
	this.containerProfile = null;
	this.containerDuration = null;
	this.containerBitRate = null;
	this.videoFormat = null;
	this.videoCodecId = null;
	this.videoDuration = null;
	this.videoBitRate = null;
	this.videoBitRateMode = null;
	this.videoWidth = null;
	this.videoHeight = null;
	this.videoFrameRate = null;
	this.videoDar = null;
	this.videoRotation = null;
	this.audioFormat = null;
	this.audioCodecId = null;
	this.audioDuration = null;
	this.audioBitRate = null;
	this.audioBitRateMode = null;
	this.audioChannels = null;
	this.audioSamplingRate = null;
	this.audioResolution = null;
	this.writingLib = null;
	this.rawData = null;
	this.multiStreamInfo = null;
	this.scanType = null;
	this.multiStream = null;
	this.isFastStart = null;
	this.contentStreams = null;
}
module.exports.VidiunMediaInfo = VidiunMediaInfo;

util.inherits(VidiunMediaInfo, vidiun.VidiunObjectBase);


/**
 * @param id int  (readOnly).
 * @param partnerId int  (readOnly).
 * @param metadataProfileId int  (readOnly).
 * @param metadataProfileVersion int  (readOnly).
 * @param metadataObjectType string  (readOnly).
 * @param objectId string  (readOnly).
 * @param version int  (readOnly).
 * @param createdAt int  (readOnly).
 * @param updatedAt int  (readOnly).
 * @param status int  (readOnly).
 * @param xml string  (readOnly).
 */
function VidiunMetadata(){
	VidiunMetadata.super_.call(this);
	this.id = null;
	this.partnerId = null;
	this.metadataProfileId = null;
	this.metadataProfileVersion = null;
	this.metadataObjectType = null;
	this.objectId = null;
	this.version = null;
	this.createdAt = null;
	this.updatedAt = null;
	this.status = null;
	this.xml = null;
}
module.exports.VidiunMetadata = VidiunMetadata;

util.inherits(VidiunMetadata, vidiun.VidiunObjectBase);


/**
 * @param id int  (readOnly).
 * @param partnerId int  (readOnly).
 * @param metadataObjectType string .
 * @param version int  (readOnly).
 * @param name string .
 * @param systemName string .
 * @param description string .
 * @param createdAt int  (readOnly).
 * @param updatedAt int  (readOnly).
 * @param status int  (readOnly).
 * @param xsd string  (readOnly).
 * @param views string  (readOnly).
 * @param xslt string  (readOnly).
 * @param createMode int .
 * @param disableReIndexing bool .
 */
function VidiunMetadataProfile(){
	VidiunMetadataProfile.super_.call(this);
	this.id = null;
	this.partnerId = null;
	this.metadataObjectType = null;
	this.version = null;
	this.name = null;
	this.systemName = null;
	this.description = null;
	this.createdAt = null;
	this.updatedAt = null;
	this.status = null;
	this.xsd = null;
	this.views = null;
	this.xslt = null;
	this.createMode = null;
	this.disableReIndexing = null;
}
module.exports.VidiunMetadataProfile = VidiunMetadataProfile;

util.inherits(VidiunMetadataProfile, vidiun.VidiunObjectBase);


/**
 * @param id int  (readOnly).
 * @param xPath string  (readOnly).
 * @param key string  (readOnly).
 * @param label string  (readOnly).
 */
function VidiunMetadataProfileField(){
	VidiunMetadataProfileField.super_.call(this);
	this.id = null;
	this.xPath = null;
	this.key = null;
	this.label = null;
}
module.exports.VidiunMetadataProfileField = VidiunMetadataProfileField;

util.inherits(VidiunMetadataProfileField, vidiun.VidiunObjectBase);


/**
 * @param hasRealThumbnail bool Indicates whether the user has submited a real thumbnail to the mix (Not the one that was generated automaticaly) (readOnly).
 * @param editorType int The editor type used to edit the metadata.
 * @param dataContent string The xml data of the mix.
 */
function VidiunMixEntry(){
	VidiunMixEntry.super_.call(this);
	this.hasRealThumbnail = null;
	this.editorType = null;
	this.dataContent = null;
}
module.exports.VidiunMixEntry = VidiunMixEntry;

util.inherits(VidiunMixEntry, VidiunPlayableEntry);


/**
 * @param id int Moderation flag id (readOnly).
 * @param partnerId int  (readOnly).
 * @param userId string The user id that added the moderation flag (readOnly).
 * @param moderationObjectType string The type of the moderation flag (entry or user) (readOnly).
 * @param flaggedEntryId string If moderation flag is set for entry, this is the flagged entry id.
 * @param flaggedUserId string If moderation flag is set for user, this is the flagged user id.
 * @param status string The moderation flag status (readOnly).
 * @param comments string The comment that was added to the flag.
 * @param flagType int .
 * @param createdAt int  (readOnly).
 * @param updatedAt int  (readOnly).
 */
function VidiunModerationFlag(){
	VidiunModerationFlag.super_.call(this);
	this.id = null;
	this.partnerId = null;
	this.userId = null;
	this.moderationObjectType = null;
	this.flaggedEntryId = null;
	this.flaggedUserId = null;
	this.status = null;
	this.comments = null;
	this.flagType = null;
	this.createdAt = null;
	this.updatedAt = null;
}
module.exports.VidiunModerationFlag = VidiunModerationFlag;

util.inherits(VidiunModerationFlag, vidiun.VidiunObjectBase);


/**
 * @param relatedObjects map  (readOnly).
 */
function VidiunObject(){
	VidiunObject.super_.call(this);
	this.relatedObjects = null;
}
module.exports.VidiunObject = VidiunObject;

util.inherits(VidiunObject, vidiun.VidiunObjectBase);


/**
 * @param type string  (readOnly).
 * @param stopProcessingOnError bool .
 */
function VidiunObjectTask(){
	VidiunObjectTask.super_.call(this);
	this.type = null;
	this.stopProcessingOnError = null;
}
module.exports.VidiunObjectTask = VidiunObjectTask;

util.inherits(VidiunObjectTask, vidiun.VidiunObjectBase);


/**
 * @param key string .
 * @param text string .
 * @param weight float .
 * @param isCorrect int .
 */
function VidiunOptionalAnswer(){
	VidiunOptionalAnswer.super_.call(this);
	this.key = null;
	this.text = null;
	this.weight = null;
	this.isCorrect = null;
}
module.exports.VidiunOptionalAnswer = VidiunOptionalAnswer;

util.inherits(VidiunOptionalAnswer, vidiun.VidiunObjectBase);


/**
 * @param id string .
 * @param label string .
 * @param flashvars array .
 * @param minVersion string .
 * @param enabledByDefault bool .
 */
function VidiunPlayerDeliveryType(){
	VidiunPlayerDeliveryType.super_.call(this);
	this.id = null;
	this.label = null;
	this.flashvars = null;
	this.minVersion = null;
	this.enabledByDefault = null;
}
module.exports.VidiunPlayerDeliveryType = VidiunPlayerDeliveryType;

util.inherits(VidiunPlayerDeliveryType, vidiun.VidiunObjectBase);


/**
 * @param id string .
 * @param label string .
 * @param entryOnly bool .
 * @param minVersion string .
 */
function VidiunPlayerEmbedCodeType(){
	VidiunPlayerEmbedCodeType.super_.call(this);
	this.id = null;
	this.label = null;
	this.entryOnly = null;
	this.minVersion = null;
}
module.exports.VidiunPlayerEmbedCodeType = VidiunPlayerEmbedCodeType;

util.inherits(VidiunPlayerEmbedCodeType, vidiun.VidiunObjectBase);


/**
 * @param id int  (readOnly).
 * @param name string .
 * @param website string .
 * @param notificationUrl string .
 * @param appearInSearch int .
 * @param createdAt int  (readOnly).
 * @param adminName string deprecated - lastName and firstName replaces this field.
 * @param adminEmail string .
 * @param description string .
 * @param commercialUse int .
 * @param landingPage string .
 * @param userLandingPage string .
 * @param contentCategories string .
 * @param type int .
 * @param phone string .
 * @param describeYourself string .
 * @param adultContent bool .
 * @param defConversionProfileType string .
 * @param notify int .
 * @param status int  (readOnly).
 * @param allowQuickEdit int .
 * @param mergeEntryLists int .
 * @param notificationsConfig string .
 * @param maxUploadSize int .
 * @param partnerPackage int  (readOnly).
 * @param secret string  (readOnly).
 * @param adminSecret string  (readOnly).
 * @param cmsPassword string  (readOnly).
 * @param allowMultiNotification int .
 * @param adminLoginUsersQuota int  (readOnly).
 * @param adminUserId string .
 * @param firstName string firstName and lastName replace the old (deprecated) adminName.
 * @param lastName string lastName and firstName replace the old (deprecated) adminName.
 * @param country string country code (2char) - this field is optional.
 * @param state string state code (2char) - this field is optional.
 * @param additionalParams array  (insertOnly).
 * @param publishersQuota int  (readOnly).
 * @param partnerGroupType int  (readOnly).
 * @param defaultEntitlementEnforcement bool  (readOnly).
 * @param defaultDeliveryType string  (readOnly).
 * @param defaultEmbedCodeType string  (readOnly).
 * @param deliveryTypes array  (readOnly).
 * @param embedCodeTypes array  (readOnly).
 * @param templatePartnerId int  (readOnly).
 * @param ignoreSeoLinks bool  (readOnly).
 * @param host string  (readOnly).
 * @param cdnHost string  (readOnly).
 * @param isFirstLogin bool  (readOnly).
 * @param logoutUrl string  (readOnly).
 * @param partnerParentId int  (readOnly).
 * @param crmId string  (readOnly).
 * @param referenceId string .
 * @param timeAlignedRenditions bool  (readOnly).
 */
function VidiunPartner(){
	VidiunPartner.super_.call(this);
	this.id = null;
	this.name = null;
	this.website = null;
	this.notificationUrl = null;
	this.appearInSearch = null;
	this.createdAt = null;
	this.adminName = null;
	this.adminEmail = null;
	this.description = null;
	this.commercialUse = null;
	this.landingPage = null;
	this.userLandingPage = null;
	this.contentCategories = null;
	this.type = null;
	this.phone = null;
	this.describeYourself = null;
	this.adultContent = null;
	this.defConversionProfileType = null;
	this.notify = null;
	this.status = null;
	this.allowQuickEdit = null;
	this.mergeEntryLists = null;
	this.notificationsConfig = null;
	this.maxUploadSize = null;
	this.partnerPackage = null;
	this.secret = null;
	this.adminSecret = null;
	this.cmsPassword = null;
	this.allowMultiNotification = null;
	this.adminLoginUsersQuota = null;
	this.adminUserId = null;
	this.firstName = null;
	this.lastName = null;
	this.country = null;
	this.state = null;
	this.additionalParams = null;
	this.publishersQuota = null;
	this.partnerGroupType = null;
	this.defaultEntitlementEnforcement = null;
	this.defaultDeliveryType = null;
	this.defaultEmbedCodeType = null;
	this.deliveryTypes = null;
	this.embedCodeTypes = null;
	this.templatePartnerId = null;
	this.ignoreSeoLinks = null;
	this.host = null;
	this.cdnHost = null;
	this.isFirstLogin = null;
	this.logoutUrl = null;
	this.partnerParentId = null;
	this.crmId = null;
	this.referenceId = null;
	this.timeAlignedRenditions = null;
}
module.exports.VidiunPartner = VidiunPartner;

util.inherits(VidiunPartner, vidiun.VidiunObjectBase);


/**
 * @param packageBandwidthAndStorage int Package total allowed bandwidth and storage (readOnly).
 * @param hosting float Partner total hosting in GB on the disk (readOnly).
 * @param bandwidth float Partner total bandwidth in GB (readOnly).
 * @param usage int total usage in GB - including bandwidth and storage (readOnly).
 * @param usagePercent float Percent of usage out of partner's package. if usage is 5GB and package is 10GB, this value will be 50 (readOnly).
 * @param reachedLimitDate int date when partner reached the limit of his package (timestamp) (readOnly).
 */
function VidiunPartnerStatistics(){
	VidiunPartnerStatistics.super_.call(this);
	this.packageBandwidthAndStorage = null;
	this.hosting = null;
	this.bandwidth = null;
	this.usage = null;
	this.usagePercent = null;
	this.reachedLimitDate = null;
}
module.exports.VidiunPartnerStatistics = VidiunPartnerStatistics;

util.inherits(VidiunPartnerStatistics, vidiun.VidiunObjectBase);


/**
 * @param hostingGB float Partner total hosting in GB on the disk (readOnly).
 * @param Percent float percent of usage out of partner's package. if usageGB is 5 and package is 10GB, this value will be 50 (readOnly).
 * @param packageBW int package total BW - actually this is usage, which represents BW+storage (readOnly).
 * @param usageGB float total usage in GB - including bandwidth and storage (readOnly).
 * @param reachedLimitDate int date when partner reached the limit of his package (timestamp) (readOnly).
 * @param usageGraph string a semi-colon separated list of comma-separated key-values to represent a usage graph.
 * keys could be 1-12 for a year view (1,1.2;2,1.1;3,0.9;...;12,1.4;)
 * keys could be 1-[28,29,30,31] depending on the requested month, for a daily view in a given month (1,0.4;2,0.2;...;31,0.1;) (readOnly).
 */
function VidiunPartnerUsage(){
	VidiunPartnerUsage.super_.call(this);
	this.hostingGB = null;
	this.Percent = null;
	this.packageBW = null;
	this.usageGB = null;
	this.reachedLimitDate = null;
	this.usageGraph = null;
}
module.exports.VidiunPartnerUsage = VidiunPartnerUsage;

util.inherits(VidiunPartnerUsage, vidiun.VidiunObjectBase);


/**
 * @param id int  (readOnly).
 * @param type int  (readOnly).
 * @param name string .
 * @param friendlyName string .
 * @param description string .
 * @param status int .
 * @param partnerId int  (readOnly).
 * @param dependsOnPermissionNames string .
 * @param tags string .
 * @param permissionItemsIds string .
 * @param createdAt int  (readOnly).
 * @param updatedAt int  (readOnly).
 * @param partnerGroup string .
 */
function VidiunPermission(){
	VidiunPermission.super_.call(this);
	this.id = null;
	this.type = null;
	this.name = null;
	this.friendlyName = null;
	this.description = null;
	this.status = null;
	this.partnerId = null;
	this.dependsOnPermissionNames = null;
	this.tags = null;
	this.permissionItemsIds = null;
	this.createdAt = null;
	this.updatedAt = null;
	this.partnerGroup = null;
}
module.exports.VidiunPermission = VidiunPermission;

util.inherits(VidiunPermission, vidiun.VidiunObjectBase);


/**
 * @param id int  (readOnly).
 * @param type string  (readOnly).
 * @param partnerId int  (readOnly).
 * @param tags string .
 * @param createdAt int  (readOnly).
 * @param updatedAt int  (readOnly).
 */
function VidiunPermissionItem(){
	VidiunPermissionItem.super_.call(this);
	this.id = null;
	this.type = null;
	this.partnerId = null;
	this.tags = null;
	this.createdAt = null;
	this.updatedAt = null;
}
module.exports.VidiunPermissionItem = VidiunPermissionItem;

util.inherits(VidiunPermissionItem, vidiun.VidiunObjectBase);


/**
 * @param type string The type of the play enabler.
 */
function VidiunPlayReadyAnalogVideoOPIdHolder(){
	VidiunPlayReadyAnalogVideoOPIdHolder.super_.call(this);
	this.type = null;
}
module.exports.VidiunPlayReadyAnalogVideoOPIdHolder = VidiunPlayReadyAnalogVideoOPIdHolder;

util.inherits(VidiunPlayReadyAnalogVideoOPIdHolder, vidiun.VidiunObjectBase);


/**
 * @param keyId string Guid - key id of the specific content.
 * @param contentKey string License content key 64 bit encoded.
 */
function VidiunPlayReadyContentKey(){
	VidiunPlayReadyContentKey.super_.call(this);
	this.keyId = null;
	this.contentKey = null;
}
module.exports.VidiunPlayReadyContentKey = VidiunPlayReadyContentKey;

util.inherits(VidiunPlayReadyContentKey, vidiun.VidiunObjectBase);


/**
 * @param type string The type of the copy enabler.
 */
function VidiunPlayReadyCopyEnablerHolder(){
	VidiunPlayReadyCopyEnablerHolder.super_.call(this);
	this.type = null;
}
module.exports.VidiunPlayReadyCopyEnablerHolder = VidiunPlayReadyCopyEnablerHolder;

util.inherits(VidiunPlayReadyCopyEnablerHolder, vidiun.VidiunObjectBase);


/**
 * @param type string The type of the play enabler.
 */
function VidiunPlayReadyDigitalAudioOPIdHolder(){
	VidiunPlayReadyDigitalAudioOPIdHolder.super_.call(this);
	this.type = null;
}
module.exports.VidiunPlayReadyDigitalAudioOPIdHolder = VidiunPlayReadyDigitalAudioOPIdHolder;

util.inherits(VidiunPlayReadyDigitalAudioOPIdHolder, vidiun.VidiunObjectBase);


/**
 */
function VidiunPlayReadyRight(){
	VidiunPlayReadyRight.super_.call(this);
}
module.exports.VidiunPlayReadyRight = VidiunPlayReadyRight;

util.inherits(VidiunPlayReadyRight, vidiun.VidiunObjectBase);


/**
 * @param gracePeriod int .
 * @param licenseRemovalPolicy int .
 * @param licenseRemovalDuration int .
 * @param minSecurityLevel int .
 * @param rights array .
 */
function VidiunPlayReadyPolicy(){
	VidiunPlayReadyPolicy.super_.call(this);
	this.gracePeriod = null;
	this.licenseRemovalPolicy = null;
	this.licenseRemovalDuration = null;
	this.minSecurityLevel = null;
	this.rights = null;
}
module.exports.VidiunPlayReadyPolicy = VidiunPlayReadyPolicy;

util.inherits(VidiunPlayReadyPolicy, VidiunDrmPolicy);


/**
 * @param policy VidiunPlayReadyPolicy PlayReady policy object.
 * @param beginDate int License begin date.
 * @param expirationDate int License expiration date.
 * @param removalDate int License removal date.
 */
function VidiunPlayReadyLicenseDetails(){
	VidiunPlayReadyLicenseDetails.super_.call(this);
	this.policy = null;
	this.beginDate = null;
	this.expirationDate = null;
	this.removalDate = null;
}
module.exports.VidiunPlayReadyLicenseDetails = VidiunPlayReadyLicenseDetails;

util.inherits(VidiunPlayReadyLicenseDetails, vidiun.VidiunObjectBase);


/**
 * @param type string The type of the play enabler.
 */
function VidiunPlayReadyPlayEnablerHolder(){
	VidiunPlayReadyPlayEnablerHolder.super_.call(this);
	this.type = null;
}
module.exports.VidiunPlayReadyPlayEnablerHolder = VidiunPlayReadyPlayEnablerHolder;

util.inherits(VidiunPlayReadyPlayEnablerHolder, vidiun.VidiunObjectBase);


/**
 * @param playlistContent string Content of the playlist -
 * XML if the playlistType is dynamic
 * text if the playlistType is static
 * url if the playlistType is mRss.
 * @param filters array .
 * @param totalResults int Maximum count of results to be returned in playlist execution.
 * @param playlistType int Type of playlist.
 * @param plays int Number of plays (readOnly).
 * @param views int Number of views (readOnly).
 * @param duration int The duration in seconds (readOnly).
 * @param executeUrl string The url for this playlist (readOnly).
 */
function VidiunPlaylist(){
	VidiunPlaylist.super_.call(this);
	this.playlistContent = null;
	this.filters = null;
	this.totalResults = null;
	this.playlistType = null;
	this.plays = null;
	this.views = null;
	this.duration = null;
	this.executeUrl = null;
}
module.exports.VidiunPlaylist = VidiunPlaylist;

util.inherits(VidiunPlaylist, VidiunBaseEntry);


/**
 */
function VidiunPluginData(){
	VidiunPluginData.super_.call(this);
}
module.exports.VidiunPluginData = VidiunPluginData;

util.inherits(VidiunPluginData, vidiun.VidiunObjectBase);


/**
 * @param key string  (readOnly).
 * @param url string  (readOnly).
 */
function VidiunPushNotificationData(){
	VidiunPushNotificationData.super_.call(this);
	this.key = null;
	this.url = null;
}
module.exports.VidiunPushNotificationData = VidiunPushNotificationData;

util.inherits(VidiunPushNotificationData, vidiun.VidiunObjectBase);


/**
 * @param version int  (readOnly).
 * @param uiAttributes array Array of key value ui related objects.
 * @param showResultOnAnswer int .
 * @param showCorrectKeyOnAnswer int .
 * @param allowAnswerUpdate int .
 * @param showCorrectAfterSubmission int .
 * @param allowDownload int .
 * @param showGradeAfterSubmission int .
 */
function VidiunQuiz(){
	VidiunQuiz.super_.call(this);
	this.version = null;
	this.uiAttributes = null;
	this.showResultOnAnswer = null;
	this.showCorrectKeyOnAnswer = null;
	this.allowAnswerUpdate = null;
	this.showCorrectAfterSubmission = null;
	this.allowDownload = null;
	this.showGradeAfterSubmission = null;
}
module.exports.VidiunQuiz = VidiunQuiz;

util.inherits(VidiunQuiz, vidiun.VidiunObjectBase);


/**
 * @param storageProfileId int  (readOnly).
 * @param uri string  (readOnly).
 */
function VidiunRemotePath(){
	VidiunRemotePath.super_.call(this);
	this.storageProfileId = null;
	this.uri = null;
}
module.exports.VidiunRemotePath = VidiunRemotePath;

util.inherits(VidiunRemotePath, vidiun.VidiunObjectBase);


/**
 * @param url string Remote URL, FTP, HTTP or HTTPS.
 * @param forceAsyncDownload bool Force Import Job.
 */
function VidiunUrlResource(){
	VidiunUrlResource.super_.call(this);
	this.url = null;
	this.forceAsyncDownload = null;
}
module.exports.VidiunUrlResource = VidiunUrlResource;

util.inherits(VidiunUrlResource, VidiunContentResource);


/**
 * @param storageProfileId int ID of storage profile to be associated with the created file sync, used for file serving URL composing.
 */
function VidiunRemoteStorageResource(){
	VidiunRemoteStorageResource.super_.call(this);
	this.storageProfileId = null;
}
module.exports.VidiunRemoteStorageResource = VidiunRemoteStorageResource;

util.inherits(VidiunRemoteStorageResource, VidiunUrlResource);


/**
 * @param id int Report id (readOnly).
 * @param partnerId int Partner id associated with the report.
 * @param name string Report name.
 * @param systemName string Used to identify system reports in a friendly way.
 * @param description string Report description.
 * @param query string Report query.
 * @param createdAt int Creation date as Unix timestamp (In seconds) (readOnly).
 * @param updatedAt int Last update date as Unix timestamp (In seconds) (readOnly).
 */
function VidiunReport(){
	VidiunReport.super_.call(this);
	this.id = null;
	this.partnerId = null;
	this.name = null;
	this.systemName = null;
	this.description = null;
	this.query = null;
	this.createdAt = null;
	this.updatedAt = null;
}
module.exports.VidiunReport = VidiunReport;

util.inherits(VidiunReport, vidiun.VidiunObjectBase);


/**
 * @param id string .
 * @param data string .
 */
function VidiunReportBaseTotal(){
	VidiunReportBaseTotal.super_.call(this);
	this.id = null;
	this.data = null;
}
module.exports.VidiunReportBaseTotal = VidiunReportBaseTotal;

util.inherits(VidiunReportBaseTotal, vidiun.VidiunObjectBase);


/**
 * @param id string .
 * @param data string .
 */
function VidiunReportGraph(){
	VidiunReportGraph.super_.call(this);
	this.id = null;
	this.data = null;
}
module.exports.VidiunReportGraph = VidiunReportGraph;

util.inherits(VidiunReportGraph, vidiun.VidiunObjectBase);


/**
 * @param fromDate int Start date as Unix timestamp (In seconds).
 * @param toDate int End date as Unix timestamp (In seconds).
 * @param fromDay string Start day as string (YYYYMMDD).
 * @param toDay string End date as string (YYYYMMDD).
 */
function VidiunReportInputBaseFilter(){
	VidiunReportInputBaseFilter.super_.call(this);
	this.fromDate = null;
	this.toDate = null;
	this.fromDay = null;
	this.toDay = null;
}
module.exports.VidiunReportInputBaseFilter = VidiunReportInputBaseFilter;

util.inherits(VidiunReportInputBaseFilter, vidiun.VidiunObjectBase);


/**
 * @param columns string .
 * @param results array .
 */
function VidiunReportResponse(){
	VidiunReportResponse.super_.call(this);
	this.columns = null;
	this.results = null;
}
module.exports.VidiunReportResponse = VidiunReportResponse;

util.inherits(VidiunReportResponse, vidiun.VidiunObjectBase);


/**
 * @param header string  (readOnly).
 * @param data string  (readOnly).
 * @param totalCount int  (readOnly).
 */
function VidiunReportTable(){
	VidiunReportTable.super_.call(this);
	this.header = null;
	this.data = null;
	this.totalCount = null;
}
module.exports.VidiunReportTable = VidiunReportTable;

util.inherits(VidiunReportTable, vidiun.VidiunObjectBase);


/**
 * @param header string .
 * @param data string .
 */
function VidiunReportTotal(){
	VidiunReportTotal.super_.call(this);
	this.header = null;
	this.data = null;
}
module.exports.VidiunReportTotal = VidiunReportTotal;

util.inherits(VidiunReportTotal, vidiun.VidiunObjectBase);


/**
 * @param partnerId int Impersonated partner id.
 * @param vs string Vidiun API session.
 * @param responseProfile VidiunBaseResponseProfile Response profile - this attribute will be automatically unset after every API call.
 */
function VidiunRequestConfiguration(){
	VidiunRequestConfiguration.super_.call(this);
	this.partnerId = null;
	this.vs = null;
	this.responseProfile = null;
}
module.exports.VidiunRequestConfiguration = VidiunRequestConfiguration;

util.inherits(VidiunRequestConfiguration, vidiun.VidiunObjectBase);


/**
 * @param id int Auto generated numeric identifier (readOnly).
 * @param systemName string Unique system name.
 * @param partnerId int  (readOnly).
 * @param createdAt int Creation time as Unix timestamp (In seconds) (readOnly).
 * @param updatedAt int Update time as Unix timestamp (In seconds) (readOnly).
 * @param status int  (readOnly).
 * @param version int  (readOnly).
 */
function VidiunResponseProfile(){
	VidiunResponseProfile.super_.call(this);
	this.id = null;
	this.systemName = null;
	this.partnerId = null;
	this.createdAt = null;
	this.updatedAt = null;
	this.status = null;
	this.version = null;
}
module.exports.VidiunResponseProfile = VidiunResponseProfile;

util.inherits(VidiunResponseProfile, VidiunDetachedResponseProfile);


/**
 * @param limit int Maximum number of keys to recalculate.
 * @param cachedObjectType string Class name.
 * @param objectId string .
 * @param startObjectKey string .
 * @param endObjectKey string .
 * @param jobCreatedAt int .
 * @param isFirstLoop bool .
 */
function VidiunResponseProfileCacheRecalculateOptions(){
	VidiunResponseProfileCacheRecalculateOptions.super_.call(this);
	this.limit = null;
	this.cachedObjectType = null;
	this.objectId = null;
	this.startObjectKey = null;
	this.endObjectKey = null;
	this.jobCreatedAt = null;
	this.isFirstLoop = null;
}
module.exports.VidiunResponseProfileCacheRecalculateOptions = VidiunResponseProfileCacheRecalculateOptions;

util.inherits(VidiunResponseProfileCacheRecalculateOptions, vidiun.VidiunObjectBase);


/**
 * @param lastObjectKey string Last recalculated id.
 * @param recalculated int Number of recalculated keys.
 */
function VidiunResponseProfileCacheRecalculateResults(){
	VidiunResponseProfileCacheRecalculateResults.super_.call(this);
	this.lastObjectKey = null;
	this.recalculated = null;
}
module.exports.VidiunResponseProfileCacheRecalculateResults = VidiunResponseProfileCacheRecalculateResults;

util.inherits(VidiunResponseProfileCacheRecalculateResults, vidiun.VidiunObjectBase);


/**
 * @param name string .
 * @param frequency string .
 * @param until int .
 * @param count int .
 * @param interval int .
 * @param bySecond string Comma separated numbers between 0 to 59.
 * @param byMinute string Comma separated numbers between 0 to 59.
 * @param byHour string Comma separated numbers between 0 to 23.
 * @param byDay string Comma separated of VidiunScheduleEventRecurrenceDay
 * Each byDay value can also be preceded by a positive (+n) or negative (-n) integer.
 * If present, this indicates the nth occurrence of the specific day within the MONTHLY or YEARLY RRULE.
 * For example, within a MONTHLY rule, +1MO (or simply 1MO) represents the first Monday within the month, whereas -1MO represents the last Monday of the month.
 * If an integer modifier is not present, it means all days of this type within the specified frequency.
 * For example, within a MONTHLY rule, MO represents all Mondays within the month.
 * @param byMonthDay string Comma separated of numbers between -31 to 31, excluding 0.
 * For example, -10 represents the tenth to the last day of the month.
 * @param byYearDay string Comma separated of numbers between -366 to 366, excluding 0.
 * For example, -1 represents the last day of the year (December 31st) and -306 represents the 306th to the last day of the year (March 1st).
 * @param byWeekNumber string Comma separated of numbers between -53 to 53, excluding 0.
 * This corresponds to weeks according to week numbering.
 * A week is defined as a seven day period, starting on the day of the week defined to be the week start.
 * Week number one of the calendar year is the first week which contains at least four (4) days in that calendar year.
 * This rule part is only valid for YEARLY frequency.
 * For example, 3 represents the third week of the year.
 * @param byMonth string Comma separated numbers between 1 to 12.
 * @param byOffset string Comma separated of numbers between -366 to 366, excluding 0.
 * Corresponds to the nth occurrence within the set of events specified by the rule.
 * It must only be used in conjunction with another byrule part.
 * For example "the last work day of the month" could be represented as: frequency=MONTHLY;byDay=MO,TU,WE,TH,FR;byOffset=-1
 * Each byOffset value can include a positive (+n) or negative (-n) integer.
 * If present, this indicates the nth occurrence of the specific occurrence within the set of events specified by the rule.
 * @param weekStartDay string .
 */
function VidiunScheduleEventRecurrence(){
	VidiunScheduleEventRecurrence.super_.call(this);
	this.name = null;
	this.frequency = null;
	this.until = null;
	this.count = null;
	this.interval = null;
	this.bySecond = null;
	this.byMinute = null;
	this.byHour = null;
	this.byDay = null;
	this.byMonthDay = null;
	this.byYearDay = null;
	this.byWeekNumber = null;
	this.byMonth = null;
	this.byOffset = null;
	this.weekStartDay = null;
}
module.exports.VidiunScheduleEventRecurrence = VidiunScheduleEventRecurrence;

util.inherits(VidiunScheduleEventRecurrence, vidiun.VidiunObjectBase);


/**
 * @param id int Auto-generated unique identifier (readOnly).
 * @param partnerId int  (readOnly).
 * @param parentId int  (readOnly).
 * @param summary string Defines a short summary or subject for the event.
 * @param description string .
 * @param status int  (readOnly).
 * @param startDate int .
 * @param endDate int .
 * @param referenceId string .
 * @param classificationType int .
 * @param geoLatitude float Specifies the global position for the activity.
 * @param geoLongitude float Specifies the global position for the activity.
 * @param location string Defines the intended venue for the activity.
 * @param organizer string .
 * @param ownerId string .
 * @param priority int The value for the priority field.
 * @param sequence int Defines the revision sequence number.
 * @param recurrenceType int  (insertOnly).
 * @param duration int Duration in seconds.
 * @param contact string Used to represent contact information or alternately a reference to contact information.
 * @param comment string Specifies non-processing information intended to provide a comment to the calendar user.
 * @param tags string .
 * @param createdAt int Creation date as Unix timestamp (In seconds) (readOnly).
 * @param updatedAt int Last update as Unix timestamp (In seconds) (readOnly).
 * @param recurrence VidiunScheduleEventRecurrence .
 */
function VidiunScheduleEvent(){
	VidiunScheduleEvent.super_.call(this);
	this.id = null;
	this.partnerId = null;
	this.parentId = null;
	this.summary = null;
	this.description = null;
	this.status = null;
	this.startDate = null;
	this.endDate = null;
	this.referenceId = null;
	this.classificationType = null;
	this.geoLatitude = null;
	this.geoLongitude = null;
	this.location = null;
	this.organizer = null;
	this.ownerId = null;
	this.priority = null;
	this.sequence = null;
	this.recurrenceType = null;
	this.duration = null;
	this.contact = null;
	this.comment = null;
	this.tags = null;
	this.createdAt = null;
	this.updatedAt = null;
	this.recurrence = null;
}
module.exports.VidiunScheduleEvent = VidiunScheduleEvent;

util.inherits(VidiunScheduleEvent, vidiun.VidiunObjectBase);


/**
 * @param eventId int  (insertOnly).
 * @param resourceId int  (insertOnly).
 * @param partnerId int  (readOnly).
 * @param createdAt int Creation date as Unix timestamp (In seconds) (readOnly).
 * @param updatedAt int Last update as Unix timestamp (In seconds) (readOnly).
 */
function VidiunScheduleEventResource(){
	VidiunScheduleEventResource.super_.call(this);
	this.eventId = null;
	this.resourceId = null;
	this.partnerId = null;
	this.createdAt = null;
	this.updatedAt = null;
}
module.exports.VidiunScheduleEventResource = VidiunScheduleEventResource;

util.inherits(VidiunScheduleEventResource, vidiun.VidiunObjectBase);


/**
 * @param id int Auto-generated unique identifier (readOnly).
 * @param parentId int .
 * @param partnerId int  (readOnly).
 * @param name string Defines a short name.
 * @param systemName string Defines a unique system-name.
 * @param description string .
 * @param status int  (readOnly).
 * @param tags string .
 * @param createdAt int Creation date as Unix timestamp (In seconds) (readOnly).
 * @param updatedAt int Last update as Unix timestamp (In seconds) (readOnly).
 */
function VidiunScheduleResource(){
	VidiunScheduleResource.super_.call(this);
	this.id = null;
	this.parentId = null;
	this.partnerId = null;
	this.name = null;
	this.systemName = null;
	this.description = null;
	this.status = null;
	this.tags = null;
	this.createdAt = null;
	this.updatedAt = null;
}
module.exports.VidiunScheduleResource = VidiunScheduleResource;

util.inherits(VidiunScheduleResource, vidiun.VidiunObjectBase);


/**
 * @param id int  (readOnly).
 * @param partnerId int  (readOnly).
 * @param name string .
 * @param systemName string .
 * @param description string .
 * @param status int .
 * @param objectFilterEngineType string The type of engine to use to list objects using the given "objectFilter".
 * @param objectFilter VidiunFilter A filter object (inherits VidiunFilter) that is used to list objects for scheduled tasks.
 * @param objectTasks array A list of tasks to execute on the founded objects.
 * @param createdAt int  (readOnly).
 * @param updatedAt int  (readOnly).
 * @param lastExecutionStartedAt int .
 * @param maxTotalCountAllowed int The maximum number of result count allowed to be processed by this profile per execution.
 */
function VidiunScheduledTaskProfile(){
	VidiunScheduledTaskProfile.super_.call(this);
	this.id = null;
	this.partnerId = null;
	this.name = null;
	this.systemName = null;
	this.description = null;
	this.status = null;
	this.objectFilterEngineType = null;
	this.objectFilter = null;
	this.objectTasks = null;
	this.createdAt = null;
	this.updatedAt = null;
	this.lastExecutionStartedAt = null;
	this.maxTotalCountAllowed = null;
}
module.exports.VidiunScheduledTaskProfile = VidiunScheduledTaskProfile;

util.inherits(VidiunScheduledTaskProfile, vidiun.VidiunObjectBase);


/**
 * @param id int The id of the Category (readOnly).
 * @param schedulerConfiguredId int The configured id of the scheduler.
 * @param workerConfiguredId int The configured id of the job worker.
 * @param workerType string The type of the job worker.
 * @param type int The status type.
 * @param value int The status value.
 * @param schedulerId int The id of the scheduler (readOnly).
 * @param workerId int The id of the worker (readOnly).
 */
function VidiunSchedulerStatus(){
	VidiunSchedulerStatus.super_.call(this);
	this.id = null;
	this.schedulerConfiguredId = null;
	this.workerConfiguredId = null;
	this.workerType = null;
	this.type = null;
	this.value = null;
	this.schedulerId = null;
	this.workerId = null;
}
module.exports.VidiunSchedulerStatus = VidiunSchedulerStatus;

util.inherits(VidiunSchedulerStatus, vidiun.VidiunObjectBase);


/**
 * @param id int The id of the Category (readOnly).
 * @param createdBy string Creator name.
 * @param updatedBy string Updater name.
 * @param commandId string Id of the control panel command that created this config item.
 * @param commandStatus string The status of the control panel command.
 * @param schedulerId int The id of the scheduler.
 * @param schedulerConfiguredId int The configured id of the scheduler.
 * @param schedulerName string The name of the scheduler.
 * @param workerId int The id of the job worker.
 * @param workerConfiguredId int The configured id of the job worker.
 * @param workerName string The name of the job worker.
 * @param variable string The name of the variable.
 * @param variablePart string The part of the variable.
 * @param value string The value of the variable.
 */
function VidiunSchedulerConfig(){
	VidiunSchedulerConfig.super_.call(this);
	this.id = null;
	this.createdBy = null;
	this.updatedBy = null;
	this.commandId = null;
	this.commandStatus = null;
	this.schedulerId = null;
	this.schedulerConfiguredId = null;
	this.schedulerName = null;
	this.workerId = null;
	this.workerConfiguredId = null;
	this.workerName = null;
	this.variable = null;
	this.variablePart = null;
	this.value = null;
}
module.exports.VidiunSchedulerConfig = VidiunSchedulerConfig;

util.inherits(VidiunSchedulerConfig, vidiun.VidiunObjectBase);


/**
 * @param id int The id of the Worker (readOnly).
 * @param configuredId int The id as configured in the batch config.
 * @param schedulerId int The id of the Scheduler.
 * @param schedulerConfiguredId int The id of the scheduler as configured in the batch config.
 * @param type string The worker type.
 * @param typeName string The friendly name of the type.
 * @param name string The scheduler name.
 * @param statuses array Array of the last statuses.
 * @param configs array Array of the last configs.
 * @param lockedJobs array Array of jobs that locked to this worker.
 * @param avgWait int Avarage time between creation and queue time.
 * @param avgWork int Avarage time between queue time end finish time.
 * @param lastStatus int last status time.
 * @param lastStatusStr string last status formated.
 */
function VidiunSchedulerWorker(){
	VidiunSchedulerWorker.super_.call(this);
	this.id = null;
	this.configuredId = null;
	this.schedulerId = null;
	this.schedulerConfiguredId = null;
	this.type = null;
	this.typeName = null;
	this.name = null;
	this.statuses = null;
	this.configs = null;
	this.lockedJobs = null;
	this.avgWait = null;
	this.avgWork = null;
	this.lastStatus = null;
	this.lastStatusStr = null;
}
module.exports.VidiunSchedulerWorker = VidiunSchedulerWorker;

util.inherits(VidiunSchedulerWorker, vidiun.VidiunObjectBase);


/**
 * @param id int The id of the Scheduler (readOnly).
 * @param configuredId int The id as configured in the batch config.
 * @param name string The scheduler name.
 * @param host string The host name.
 * @param statuses array Array of the last statuses (readOnly).
 * @param configs array Array of the last configs (readOnly).
 * @param workers array Array of the workers (readOnly).
 * @param createdAt int creation time (readOnly).
 * @param lastStatus int last status time (readOnly).
 * @param lastStatusStr string last status formated (readOnly).
 */
function VidiunScheduler(){
	VidiunScheduler.super_.call(this);
	this.id = null;
	this.configuredId = null;
	this.name = null;
	this.host = null;
	this.statuses = null;
	this.configs = null;
	this.workers = null;
	this.createdAt = null;
	this.lastStatus = null;
	this.lastStatusStr = null;
}
module.exports.VidiunScheduler = VidiunScheduler;

util.inherits(VidiunScheduler, vidiun.VidiunObjectBase);


/**
 */
function VidiunScope(){
	VidiunScope.super_.call(this);
}
module.exports.VidiunScope = VidiunScope;

util.inherits(VidiunScope, vidiun.VidiunObjectBase);


/**
 * @param keyWords string .
 * @param searchSource int .
 * @param mediaType int .
 * @param extraData string Use this field to pass dynamic data for searching
 * For example - if you set this field to "mymovies_$partner_id"
 * The $partner_id will be automatically replcaed with your real partner Id.
 * @param authData string .
 */
function VidiunSearch(){
	VidiunSearch.super_.call(this);
	this.keyWords = null;
	this.searchSource = null;
	this.mediaType = null;
	this.extraData = null;
	this.authData = null;
}
module.exports.VidiunSearch = VidiunSearch;

util.inherits(VidiunSearch, vidiun.VidiunObjectBase);


/**
 * @param authData string The authentication data that further should be used for search.
 * @param loginUrl string Login URL when user need to sign-in and authorize the search.
 * @param message string Information when there was an error.
 */
function VidiunSearchAuthData(){
	VidiunSearchAuthData.super_.call(this);
	this.authData = null;
	this.loginUrl = null;
	this.message = null;
}
module.exports.VidiunSearchAuthData = VidiunSearchAuthData;

util.inherits(VidiunSearchAuthData, vidiun.VidiunObjectBase);


/**
 * @param id string .
 * @param title string .
 * @param thumbUrl string .
 * @param description string .
 * @param tags string .
 * @param url string .
 * @param sourceLink string .
 * @param credit string .
 * @param licenseType int .
 * @param flashPlaybackType string .
 * @param fileExt string .
 */
function VidiunSearchResult(){
	VidiunSearchResult.super_.call(this);
	this.id = null;
	this.title = null;
	this.thumbUrl = null;
	this.description = null;
	this.tags = null;
	this.url = null;
	this.sourceLink = null;
	this.credit = null;
	this.licenseType = null;
	this.flashPlaybackType = null;
	this.fileExt = null;
}
module.exports.VidiunSearchResult = VidiunSearchResult;

util.inherits(VidiunSearchResult, VidiunSearch);


/**
 * @param objects array  (readOnly).
 * @param needMediaInfo bool  (readOnly).
 */
function VidiunSearchResultResponse(){
	VidiunSearchResultResponse.super_.call(this);
	this.objects = null;
	this.needMediaInfo = null;
}
module.exports.VidiunSearchResultResponse = VidiunSearchResultResponse;

util.inherits(VidiunSearchResultResponse, vidiun.VidiunObjectBase);


/**
 * @param id int  (readOnly).
 * @param partnerId int  (readOnly).
 * @param createdAt int  (readOnly).
 * @param updatedAt int  (readOnly).
 * @param heartbeatTime int  (readOnly).
 * @param name string serverNode name.
 * @param systemName string serverNode uniqe system name.
 * @param description string .
 * @param hostName string serverNode hostName.
 * @param status int  (readOnly).
 * @param type string  (readOnly).
 * @param tags string serverNode tags.
 * @param dc int DC where the serverNode is located (readOnly).
 * @param parentId int Id of the parent serverNode.
 */
function VidiunServerNode(){
	VidiunServerNode.super_.call(this);
	this.id = null;
	this.partnerId = null;
	this.createdAt = null;
	this.updatedAt = null;
	this.heartbeatTime = null;
	this.name = null;
	this.systemName = null;
	this.description = null;
	this.hostName = null;
	this.status = null;
	this.type = null;
	this.tags = null;
	this.dc = null;
	this.parentId = null;
}
module.exports.VidiunServerNode = VidiunServerNode;

util.inherits(VidiunServerNode, vidiun.VidiunObjectBase);


/**
 * @param vs string  (readOnly).
 * @param sessionType int  (readOnly).
 * @param partnerId int  (readOnly).
 * @param userId string  (readOnly).
 * @param expiry int  (readOnly).
 * @param privileges string  (readOnly).
 */
function VidiunSessionInfo(){
	VidiunSessionInfo.super_.call(this);
	this.vs = null;
	this.sessionType = null;
	this.partnerId = null;
	this.userId = null;
	this.expiry = null;
	this.privileges = null;
}
module.exports.VidiunSessionInfo = VidiunSessionInfo;

util.inherits(VidiunSessionInfo, vidiun.VidiunObjectBase);


/**
 * @param id string  (readOnly).
 * @param createdAt int  (readOnly).
 * @param updatedAt int  (readOnly).
 * @param expiresAt int .
 * @param partnerId int  (readOnly).
 * @param userId string .
 * @param name string .
 * @param systemName string .
 * @param fullUrl string .
 * @param status int .
 */
function VidiunShortLink(){
	VidiunShortLink.super_.call(this);
	this.id = null;
	this.createdAt = null;
	this.updatedAt = null;
	this.expiresAt = null;
	this.partnerId = null;
	this.userId = null;
	this.name = null;
	this.systemName = null;
	this.fullUrl = null;
	this.status = null;
}
module.exports.VidiunShortLink = VidiunShortLink;

util.inherits(VidiunShortLink, vidiun.VidiunObjectBase);


/**
 * @param actualFileSyncLocalPath string The translated path as used by the scheduler.
 * @param assetId string .
 * @param assetParamsId int .
 */
function VidiunSourceFileSyncDescriptor(){
	VidiunSourceFileSyncDescriptor.super_.call(this);
	this.actualFileSyncLocalPath = null;
	this.assetId = null;
	this.assetParamsId = null;
}
module.exports.VidiunSourceFileSyncDescriptor = VidiunSourceFileSyncDescriptor;

util.inherits(VidiunSourceFileSyncDescriptor, VidiunFileSyncDescriptor);


/**
 * @param partnerId int  (readOnly).
 * @param vs string  (readOnly).
 * @param userId string  (readOnly).
 */
function VidiunStartWidgetSessionResponse(){
	VidiunStartWidgetSessionResponse.super_.call(this);
	this.partnerId = null;
	this.vs = null;
	this.userId = null;
}
module.exports.VidiunStartWidgetSessionResponse = VidiunStartWidgetSessionResponse;

util.inherits(VidiunStartWidgetSessionResponse, vidiun.VidiunObjectBase);


/**
 * @param clientVer string .
 * @param eventType int .
 * @param eventTimestamp float the client's timestamp of this event.
 * @param sessionId string a unique string generated by the client that will represent the client-side session: the primary component will pass it on to other components that sprout from it.
 * @param partnerId int .
 * @param entryId string .
 * @param uniqueViewer string the UV cookie - creates in the operational system and should be passed on ofr every event.
 * @param widgetId string .
 * @param uiconfId int .
 * @param userId string the partner's user id.
 * @param currentPoint int the timestamp along the video when the event happend.
 * @param duration int the duration of the video in milliseconds - will make it much faster than quering the db for each entry.
 * @param userIp string will be retrieved from the request of the user (readOnly).
 * @param processDuration int the time in milliseconds the event took.
 * @param controlId string the id of the GUI control - will be used in the future to better understand what the user clicked.
 * @param seek bool true if the user ever used seek in this session.
 * @param newPoint int timestamp of the new point on the timeline of the video after the user seeks.
 * @param referrer string the referrer of the client.
 * @param isFirstInSession bool will indicate if the event is thrown for the first video in the session.
 * @param applicationId string vidiun application name.
 * @param contextId int .
 * @param featureType int .
 */
function VidiunStatsEvent(){
	VidiunStatsEvent.super_.call(this);
	this.clientVer = null;
	this.eventType = null;
	this.eventTimestamp = null;
	this.sessionId = null;
	this.partnerId = null;
	this.entryId = null;
	this.uniqueViewer = null;
	this.widgetId = null;
	this.uiconfId = null;
	this.userId = null;
	this.currentPoint = null;
	this.duration = null;
	this.userIp = null;
	this.processDuration = null;
	this.controlId = null;
	this.seek = null;
	this.newPoint = null;
	this.referrer = null;
	this.isFirstInSession = null;
	this.applicationId = null;
	this.contextId = null;
	this.featureType = null;
}
module.exports.VidiunStatsEvent = VidiunStatsEvent;

util.inherits(VidiunStatsEvent, vidiun.VidiunObjectBase);


/**
 * @param clientVer string .
 * @param vmcEventActionPath string .
 * @param vmcEventType int .
 * @param eventTimestamp float the client's timestamp of this event.
 * @param sessionId string a unique string generated by the client that will represent the client-side session: the primary component will pass it on to other components that sprout from it.
 * @param partnerId int .
 * @param entryId string .
 * @param widgetId string .
 * @param uiconfId int .
 * @param userId string the partner's user id.
 * @param userIp string will be retrieved from the request of the user (readOnly).
 */
function VidiunStatsVmcEvent(){
	VidiunStatsVmcEvent.super_.call(this);
	this.clientVer = null;
	this.vmcEventActionPath = null;
	this.vmcEventType = null;
	this.eventTimestamp = null;
	this.sessionId = null;
	this.partnerId = null;
	this.entryId = null;
	this.widgetId = null;
	this.uiconfId = null;
	this.userId = null;
	this.userIp = null;
}
module.exports.VidiunStatsVmcEvent = VidiunStatsVmcEvent;

util.inherits(VidiunStatsVmcEvent, vidiun.VidiunObjectBase);


/**
 * @param id int  (readOnly).
 * @param createdAt int  (readOnly).
 * @param updatedAt int  (readOnly).
 * @param partnerId int  (readOnly).
 * @param name string .
 * @param systemName string .
 * @param desciption string .
 * @param status int .
 * @param protocol string .
 * @param storageUrl string .
 * @param storageBaseDir string .
 * @param storageUsername string .
 * @param storagePassword string .
 * @param storageFtpPassiveMode bool .
 * @param minFileSize int .
 * @param maxFileSize int .
 * @param flavorParamsIds string .
 * @param maxConcurrentConnections int .
 * @param pathManagerClass string .
 * @param pathManagerParams array .
 * @param trigger int No need to create enum for temp field.
 * @param deliveryPriority int Delivery Priority.
 * @param deliveryStatus int .
 * @param readyBehavior int .
 * @param allowAutoDelete int Flag sugnifying that the storage exported content should be deleted when soure entry is deleted.
 * @param createFileLink bool Indicates to the local file transfer manager to create a link to the file instead of copying it.
 * @param rules array Holds storage profile export rules.
 * @param deliveryProfileIds array Delivery profile ids.
 * @param privateKey string .
 * @param publicKey string .
 * @param passPhrase string .
 */
function VidiunStorageProfile(){
	VidiunStorageProfile.super_.call(this);
	this.id = null;
	this.createdAt = null;
	this.updatedAt = null;
	this.partnerId = null;
	this.name = null;
	this.systemName = null;
	this.desciption = null;
	this.status = null;
	this.protocol = null;
	this.storageUrl = null;
	this.storageBaseDir = null;
	this.storageUsername = null;
	this.storagePassword = null;
	this.storageFtpPassiveMode = null;
	this.minFileSize = null;
	this.maxFileSize = null;
	this.flavorParamsIds = null;
	this.maxConcurrentConnections = null;
	this.pathManagerClass = null;
	this.pathManagerParams = null;
	this.trigger = null;
	this.deliveryPriority = null;
	this.deliveryStatus = null;
	this.readyBehavior = null;
	this.allowAutoDelete = null;
	this.createFileLink = null;
	this.rules = null;
	this.deliveryProfileIds = null;
	this.privateKey = null;
	this.publicKey = null;
	this.passPhrase = null;
}
module.exports.VidiunStorageProfile = VidiunStorageProfile;

util.inherits(VidiunStorageProfile, vidiun.VidiunObjectBase);


/**
 * @param totalEntryCount int the total count of entries that should appear in the feed without flavor filtering.
 * @param actualEntryCount int count of entries that will appear in the feed (including all relevant filters).
 * @param requireTranscodingCount int count of entries that requires transcoding in order to be included in feed.
 */
function VidiunSyndicationFeedEntryCount(){
	VidiunSyndicationFeedEntryCount.super_.call(this);
	this.totalEntryCount = null;
	this.actualEntryCount = null;
	this.requireTranscodingCount = null;
}
module.exports.VidiunSyndicationFeedEntryCount = VidiunSyndicationFeedEntryCount;

util.inherits(VidiunSyndicationFeedEntryCount, vidiun.VidiunObjectBase);


/**
 * @param type string .
 * @param max float .
 */
function VidiunSystemPartnerLimit(){
	VidiunSystemPartnerLimit.super_.call(this);
	this.type = null;
	this.max = null;
}
module.exports.VidiunSystemPartnerLimit = VidiunSystemPartnerLimit;

util.inherits(VidiunSystemPartnerLimit, vidiun.VidiunObjectBase);


/**
 * @param id int  (readOnly).
 * @param partnerName string .
 * @param description string .
 * @param adminName string .
 * @param adminEmail string .
 * @param host string .
 * @param cdnHost string .
 * @param cdnHostWhiteList string .
 * @param thumbnailHost string .
 * @param partnerPackage int .
 * @param monitorUsage int .
 * @param moderateContent bool .
 * @param storageDeleteFromVidiun bool .
 * @param storageServePriority int .
 * @param vmcVersion int .
 * @param restrictThumbnailByVs int .
 * @param supportAnimatedThumbnails bool .
 * @param defThumbOffset int .
 * @param defThumbDensity int .
 * @param userSessionRoleId int .
 * @param adminSessionRoleId int .
 * @param alwaysAllowedPermissionNames string .
 * @param importRemoteSourceForConvert bool .
 * @param permissions array .
 * @param notificationsConfig string .
 * @param allowMultiNotification bool .
 * @param loginBlockPeriod int .
 * @param numPrevPassToKeep int .
 * @param passReplaceFreq int .
 * @param isFirstLogin bool .
 * @param partnerGroupType int .
 * @param partnerParentId int .
 * @param limits array .
 * @param streamerType string http/rtmp/hdnetwork.
 * @param mediaProtocol string http/https, rtmp/rtmpe.
 * @param extendedFreeTrailExpiryReason string .
 * @param extendedFreeTrailExpiryDate int Unix timestamp (In seconds).
 * @param extendedFreeTrail int .
 * @param crmId string .
 * @param referenceId string .
 * @param crmLink string .
 * @param verticalClasiffication string .
 * @param partnerPackageClassOfService string .
 * @param enableBulkUploadNotificationsEmails bool .
 * @param deliveryProfileIds string .
 * @param enforceDelivery bool .
 * @param bulkUploadNotificationsEmail string .
 * @param internalUse bool .
 * @param defaultLiveStreamEntrySourceType string .
 * @param liveStreamProvisionParams string .
 * @param autoModerateEntryFilter VidiunBaseEntryFilter .
 * @param logoutUrl string .
 * @param defaultEntitlementEnforcement bool .
 * @param cacheFlavorVersion int .
 * @param apiAccessControlId int .
 * @param defaultDeliveryType string .
 * @param defaultEmbedCodeType string .
 * @param customDeliveryTypes array .
 * @param restrictEntryByMetadata bool .
 * @param language string .
 * @param audioThumbEntryId string .
 * @param liveThumbEntryId string .
 * @param timeAlignedRenditions bool .
 */
function VidiunSystemPartnerConfiguration(){
	VidiunSystemPartnerConfiguration.super_.call(this);
	this.id = null;
	this.partnerName = null;
	this.description = null;
	this.adminName = null;
	this.adminEmail = null;
	this.host = null;
	this.cdnHost = null;
	this.cdnHostWhiteList = null;
	this.thumbnailHost = null;
	this.partnerPackage = null;
	this.monitorUsage = null;
	this.moderateContent = null;
	this.storageDeleteFromVidiun = null;
	this.storageServePriority = null;
	this.vmcVersion = null;
	this.restrictThumbnailByVs = null;
	this.supportAnimatedThumbnails = null;
	this.defThumbOffset = null;
	this.defThumbDensity = null;
	this.userSessionRoleId = null;
	this.adminSessionRoleId = null;
	this.alwaysAllowedPermissionNames = null;
	this.importRemoteSourceForConvert = null;
	this.permissions = null;
	this.notificationsConfig = null;
	this.allowMultiNotification = null;
	this.loginBlockPeriod = null;
	this.numPrevPassToKeep = null;
	this.passReplaceFreq = null;
	this.isFirstLogin = null;
	this.partnerGroupType = null;
	this.partnerParentId = null;
	this.limits = null;
	this.streamerType = null;
	this.mediaProtocol = null;
	this.extendedFreeTrailExpiryReason = null;
	this.extendedFreeTrailExpiryDate = null;
	this.extendedFreeTrail = null;
	this.crmId = null;
	this.referenceId = null;
	this.crmLink = null;
	this.verticalClasiffication = null;
	this.partnerPackageClassOfService = null;
	this.enableBulkUploadNotificationsEmails = null;
	this.deliveryProfileIds = null;
	this.enforceDelivery = null;
	this.bulkUploadNotificationsEmail = null;
	this.internalUse = null;
	this.defaultLiveStreamEntrySourceType = null;
	this.liveStreamProvisionParams = null;
	this.autoModerateEntryFilter = null;
	this.logoutUrl = null;
	this.defaultEntitlementEnforcement = null;
	this.cacheFlavorVersion = null;
	this.apiAccessControlId = null;
	this.defaultDeliveryType = null;
	this.defaultEmbedCodeType = null;
	this.customDeliveryTypes = null;
	this.restrictEntryByMetadata = null;
	this.language = null;
	this.audioThumbEntryId = null;
	this.liveThumbEntryId = null;
	this.timeAlignedRenditions = null;
}
module.exports.VidiunSystemPartnerConfiguration = VidiunSystemPartnerConfiguration;

util.inherits(VidiunSystemPartnerConfiguration, vidiun.VidiunObjectBase);


/**
 * @param id int .
 * @param name string .
 */
function VidiunSystemPartnerPackage(){
	VidiunSystemPartnerPackage.super_.call(this);
	this.id = null;
	this.name = null;
}
module.exports.VidiunSystemPartnerPackage = VidiunSystemPartnerPackage;

util.inherits(VidiunSystemPartnerPackage, vidiun.VidiunObjectBase);


/**
 * @param partnerId int Partner ID.
 * @param partnerName string Partner name.
 * @param partnerStatus int Partner status.
 * @param partnerPackage int Partner package.
 * @param partnerCreatedAt int Partner creation date (Unix timestamp).
 * @param views int Number of player loads in the specific date range.
 * @param plays int Number of plays in the specific date range.
 * @param entriesCount int Number of new entries created during specific date range.
 * @param totalEntriesCount int Total number of entries.
 * @param videoEntriesCount int Number of new video entries created during specific date range.
 * @param imageEntriesCount int Number of new image entries created during specific date range.
 * @param audioEntriesCount int Number of new audio entries created during specific date range.
 * @param mixEntriesCount int Number of new mix entries created during specific date range.
 * @param bandwidth float The total bandwidth usage during the given date range (in MB).
 * @param totalStorage float The total storage consumption (in MB).
 * @param storage float The change in storage consumption (new uploads) during the given date range (in MB).
 * @param peakStorage float The peak amount of storage consumption during the given date range for the specific publisher.
 * @param avgStorage float The average amount of storage consumption during the given date range for the specific publisher.
 * @param combinedBandwidthStorage float The combined amount of bandwidth and storage consumed during the given date range for the specific publisher.
 * @param deletedStorage float Amount of deleted storage in MB.
 * @param transcodingUsage float Amount of transcoding usage in MB.
 */
function VidiunSystemPartnerUsageItem(){
	VidiunSystemPartnerUsageItem.super_.call(this);
	this.partnerId = null;
	this.partnerName = null;
	this.partnerStatus = null;
	this.partnerPackage = null;
	this.partnerCreatedAt = null;
	this.views = null;
	this.plays = null;
	this.entriesCount = null;
	this.totalEntriesCount = null;
	this.videoEntriesCount = null;
	this.imageEntriesCount = null;
	this.audioEntriesCount = null;
	this.mixEntriesCount = null;
	this.bandwidth = null;
	this.totalStorage = null;
	this.storage = null;
	this.peakStorage = null;
	this.avgStorage = null;
	this.combinedBandwidthStorage = null;
	this.deletedStorage = null;
	this.transcodingUsage = null;
}
module.exports.VidiunSystemPartnerUsageItem = VidiunSystemPartnerUsageItem;

util.inherits(VidiunSystemPartnerUsageItem, vidiun.VidiunObjectBase);


/**
 * @param id int  (readOnly).
 * @param tag string  (readOnly).
 * @param taggedObjectType string  (readOnly).
 * @param partnerId int  (readOnly).
 * @param instanceCount int  (readOnly).
 * @param createdAt int  (readOnly).
 * @param updatedAt int  (readOnly).
 */
function VidiunTag(){
	VidiunTag.super_.call(this);
	this.id = null;
	this.tag = null;
	this.taggedObjectType = null;
	this.partnerId = null;
	this.instanceCount = null;
	this.createdAt = null;
	this.updatedAt = null;
}
module.exports.VidiunTag = VidiunTag;

util.inherits(VidiunTag, vidiun.VidiunObjectBase);


/**
 * @param thumbParamsId int The Flavor Params used to create this Flavor Asset (insertOnly).
 * @param width int The width of the Flavor Asset (readOnly).
 * @param height int The height of the Flavor Asset (readOnly).
 * @param status int The status of the asset (readOnly).
 */
function VidiunThumbAsset(){
	VidiunThumbAsset.super_.call(this);
	this.thumbParamsId = null;
	this.width = null;
	this.height = null;
	this.status = null;
}
module.exports.VidiunThumbAsset = VidiunThumbAsset;

util.inherits(VidiunThumbAsset, VidiunAsset);


/**
 * @param cropType int .
 * @param quality int .
 * @param cropX int .
 * @param cropY int .
 * @param cropWidth int .
 * @param cropHeight int .
 * @param videoOffset float .
 * @param width int .
 * @param height int .
 * @param scaleWidth float .
 * @param scaleHeight float .
 * @param backgroundColor string Hexadecimal value.
 * @param sourceParamsId int Id of the flavor params or the thumbnail params to be used as source for the thumbnail creation.
 * @param format string The container format of the Flavor Params.
 * @param density int The image density (dpi) for example: 72 or 96.
 * @param stripProfiles bool Strip profiles and comments.
 * @param videoOffsetInPercentage int Create thumbnail from the videoLengthpercentage second.
 */
function VidiunThumbParams(){
	VidiunThumbParams.super_.call(this);
	this.cropType = null;
	this.quality = null;
	this.cropX = null;
	this.cropY = null;
	this.cropWidth = null;
	this.cropHeight = null;
	this.videoOffset = null;
	this.width = null;
	this.height = null;
	this.scaleWidth = null;
	this.scaleHeight = null;
	this.backgroundColor = null;
	this.sourceParamsId = null;
	this.format = null;
	this.density = null;
	this.stripProfiles = null;
	this.videoOffsetInPercentage = null;
}
module.exports.VidiunThumbParams = VidiunThumbParams;

util.inherits(VidiunThumbParams, VidiunAssetParams);


/**
 * @param thumbParamsId int .
 * @param thumbParamsVersion string .
 * @param thumbAssetId string .
 * @param thumbAssetVersion string .
 * @param rotate int .
 */
function VidiunThumbParamsOutput(){
	VidiunThumbParamsOutput.super_.call(this);
	this.thumbParamsId = null;
	this.thumbParamsVersion = null;
	this.thumbAssetId = null;
	this.thumbAssetVersion = null;
	this.rotate = null;
}
module.exports.VidiunThumbParamsOutput = VidiunThumbParamsOutput;

util.inherits(VidiunThumbParamsOutput, VidiunThumbParams);


/**
 * @param download bool .
 * @param referrer string .
 */
function VidiunThumbnailServeOptions(){
	VidiunThumbnailServeOptions.super_.call(this);
	this.download = null;
	this.referrer = null;
}
module.exports.VidiunThumbnailServeOptions = VidiunThumbnailServeOptions;

util.inherits(VidiunThumbnailServeOptions, vidiun.VidiunObjectBase);


/**
 * @param id int .
 * @param trackEventType int .
 * @param psVersion string .
 * @param context string .
 * @param partnerId int .
 * @param entryId string .
 * @param hostName string .
 * @param userId string .
 * @param changedProperties string .
 * @param paramStr1 string .
 * @param paramStr2 string .
 * @param paramStr3 string .
 * @param vs string .
 * @param description string .
 * @param createdAt int .
 * @param updatedAt int .
 * @param userIp string .
 */
function VidiunTrackEntry(){
	VidiunTrackEntry.super_.call(this);
	this.id = null;
	this.trackEventType = null;
	this.psVersion = null;
	this.context = null;
	this.partnerId = null;
	this.entryId = null;
	this.hostName = null;
	this.userId = null;
	this.changedProperties = null;
	this.paramStr1 = null;
	this.paramStr2 = null;
	this.paramStr3 = null;
	this.vs = null;
	this.description = null;
	this.createdAt = null;
	this.updatedAt = null;
	this.userIp = null;
}
module.exports.VidiunTrackEntry = VidiunTrackEntry;

util.inherits(VidiunTrackEntry, vidiun.VidiunObjectBase);


/**
 * @param accuracy float The accuracy of the transcript - values between 0 and 1.
 * @param humanVerified int Was verified by human or machine.
 * @param language string The language of the transcript.
 */
function VidiunTranscriptAsset(){
	VidiunTranscriptAsset.super_.call(this);
	this.accuracy = null;
	this.humanVerified = null;
	this.language = null;
}
module.exports.VidiunTranscriptAsset = VidiunTranscriptAsset;

util.inherits(VidiunTranscriptAsset, VidiunAttachmentAsset);


/**
 * @param objects array  (readOnly).
 * @param totalCount int  (readOnly).
 * @param lowerVersionCount int  (readOnly).
 */
function VidiunTransformMetadataResponse(){
	VidiunTransformMetadataResponse.super_.call(this);
	this.objects = null;
	this.totalCount = null;
	this.lowerVersionCount = null;
}
module.exports.VidiunTransformMetadataResponse = VidiunTransformMetadataResponse;

util.inherits(VidiunTransformMetadataResponse, vidiun.VidiunObjectBase);


/**
 * @param id int  (readOnly).
 * @param name string Name of the uiConf, this is not a primary key.
 * @param description string .
 * @param partnerId int  (readOnly).
 * @param objType int .
 * @param objTypeAsString string  (readOnly).
 * @param width int .
 * @param height int .
 * @param htmlParams string .
 * @param swfUrl string .
 * @param confFilePath string  (readOnly).
 * @param confFile string .
 * @param confFileFeatures string .
 * @param config string .
 * @param confVars string .
 * @param useCdn bool .
 * @param tags string .
 * @param swfUrlVersion string .
 * @param createdAt int Entry creation date as Unix timestamp (In seconds) (readOnly).
 * @param updatedAt int Entry creation date as Unix timestamp (In seconds) (readOnly).
 * @param creationMode int .
 * @param html5Url string .
 * @param version string UiConf version (readOnly).
 * @param partnerTags string .
 */
function VidiunUiConf(){
	VidiunUiConf.super_.call(this);
	this.id = null;
	this.name = null;
	this.description = null;
	this.partnerId = null;
	this.objType = null;
	this.objTypeAsString = null;
	this.width = null;
	this.height = null;
	this.htmlParams = null;
	this.swfUrl = null;
	this.confFilePath = null;
	this.confFile = null;
	this.confFileFeatures = null;
	this.config = null;
	this.confVars = null;
	this.useCdn = null;
	this.tags = null;
	this.swfUrlVersion = null;
	this.createdAt = null;
	this.updatedAt = null;
	this.creationMode = null;
	this.html5Url = null;
	this.version = null;
	this.partnerTags = null;
}
module.exports.VidiunUiConf = VidiunUiConf;

util.inherits(VidiunUiConf, vidiun.VidiunObjectBase);


/**
 * @param isPublic bool .
 */
function VidiunUiConfAdmin(){
	VidiunUiConfAdmin.super_.call(this);
	this.isPublic = null;
}
module.exports.VidiunUiConfAdmin = VidiunUiConfAdmin;

util.inherits(VidiunUiConfAdmin, VidiunUiConf);


/**
 * @param type int UiConf Type.
 * @param versions array Available versions.
 * @param directory string The direcotry this type is saved at.
 * @param filename string Filename for this UiConf type.
 */
function VidiunUiConfTypeInfo(){
	VidiunUiConfTypeInfo.super_.call(this);
	this.type = null;
	this.versions = null;
	this.directory = null;
	this.filename = null;
}
module.exports.VidiunUiConfTypeInfo = VidiunUiConfTypeInfo;

util.inherits(VidiunUiConfTypeInfo, vidiun.VidiunObjectBase);


/**
 * @param uploadTokenId string .
 * @param fileSize int .
 * @param errorCode int .
 * @param errorDescription string .
 */
function VidiunUploadResponse(){
	VidiunUploadResponse.super_.call(this);
	this.uploadTokenId = null;
	this.fileSize = null;
	this.errorCode = null;
	this.errorDescription = null;
}
module.exports.VidiunUploadResponse = VidiunUploadResponse;

util.inherits(VidiunUploadResponse, vidiun.VidiunObjectBase);


/**
 * @param id string Upload token unique ID (readOnly).
 * @param partnerId int Partner ID of the upload token (readOnly).
 * @param userId string User id for the upload token (readOnly).
 * @param status int Status of the upload token (readOnly).
 * @param fileName string Name of the file for the upload token, can be empty when the upload token is created and will be updated internally after the file is uploaded (insertOnly).
 * @param fileSize float File size in bytes, can be empty when the upload token is created and will be updated internally after the file is uploaded (insertOnly).
 * @param uploadedFileSize float Uploaded file size in bytes, can be used to identify how many bytes were uploaded before resuming (readOnly).
 * @param createdAt int Creation date as Unix timestamp (In seconds) (readOnly).
 * @param updatedAt int Last update date as Unix timestamp (In seconds) (readOnly).
 */
function VidiunUploadToken(){
	VidiunUploadToken.super_.call(this);
	this.id = null;
	this.partnerId = null;
	this.userId = null;
	this.status = null;
	this.fileName = null;
	this.fileSize = null;
	this.uploadedFileSize = null;
	this.createdAt = null;
	this.updatedAt = null;
}
module.exports.VidiunUploadToken = VidiunUploadToken;

util.inherits(VidiunUploadToken, vidiun.VidiunObjectBase);


/**
 * @param id string .
 * @param partnerId int  (readOnly).
 * @param type int .
 * @param screenName string .
 * @param fullName string .
 * @param email string .
 * @param dateOfBirth int .
 * @param country string .
 * @param state string .
 * @param city string .
 * @param zip string .
 * @param thumbnailUrl string .
 * @param description string .
 * @param tags string .
 * @param adminTags string Admin tags can be updated only by using an admin session.
 * @param gender int .
 * @param status int .
 * @param createdAt int Creation date as Unix timestamp (In seconds) (readOnly).
 * @param updatedAt int Last update date as Unix timestamp (In seconds) (readOnly).
 * @param partnerData string Can be used to store various partner related data as a string.
 * @param indexedPartnerDataInt int .
 * @param indexedPartnerDataString string .
 * @param storageSize int  (readOnly).
 * @param password string  (insertOnly).
 * @param firstName string .
 * @param lastName string .
 * @param isAdmin bool .
 * @param language string .
 * @param lastLoginTime int  (readOnly).
 * @param statusUpdatedAt int  (readOnly).
 * @param deletedAt int  (readOnly).
 * @param loginEnabled bool  (readOnly).
 * @param roleIds string .
 * @param roleNames string  (readOnly).
 * @param isAccountOwner bool  (readOnly).
 * @param allowedPartnerIds string .
 * @param allowedPartnerPackages string .
 */
function VidiunUser(){
	VidiunUser.super_.call(this);
	this.id = null;
	this.partnerId = null;
	this.type = null;
	this.screenName = null;
	this.fullName = null;
	this.email = null;
	this.dateOfBirth = null;
	this.country = null;
	this.state = null;
	this.city = null;
	this.zip = null;
	this.thumbnailUrl = null;
	this.description = null;
	this.tags = null;
	this.adminTags = null;
	this.gender = null;
	this.status = null;
	this.createdAt = null;
	this.updatedAt = null;
	this.partnerData = null;
	this.indexedPartnerDataInt = null;
	this.indexedPartnerDataString = null;
	this.storageSize = null;
	this.password = null;
	this.firstName = null;
	this.lastName = null;
	this.isAdmin = null;
	this.language = null;
	this.lastLoginTime = null;
	this.statusUpdatedAt = null;
	this.deletedAt = null;
	this.loginEnabled = null;
	this.roleIds = null;
	this.roleNames = null;
	this.isAccountOwner = null;
	this.allowedPartnerIds = null;
	this.allowedPartnerPackages = null;
}
module.exports.VidiunUser = VidiunUser;

util.inherits(VidiunUser, vidiun.VidiunObjectBase);


/**
 * @param id int unique auto-generated identifier (readOnly).
 * @param entryId string  (insertOnly).
 * @param userId string  (insertOnly).
 * @param partnerId int  (readOnly).
 * @param status string  (readOnly).
 * @param createdAt int  (readOnly).
 * @param updatedAt int  (readOnly).
 * @param type string  (readOnly).
 */
function VidiunUserEntry(){
	VidiunUserEntry.super_.call(this);
	this.id = null;
	this.entryId = null;
	this.userId = null;
	this.partnerId = null;
	this.status = null;
	this.createdAt = null;
	this.updatedAt = null;
	this.type = null;
}
module.exports.VidiunUserEntry = VidiunUserEntry;

util.inherits(VidiunUserEntry, vidiun.VidiunObjectBase);


/**
 * @param id string .
 * @param loginEmail string .
 */
function VidiunUserLoginData(){
	VidiunUserLoginData.super_.call(this);
	this.id = null;
	this.loginEmail = null;
}
module.exports.VidiunUserLoginData = VidiunUserLoginData;

util.inherits(VidiunUserLoginData, vidiun.VidiunObjectBase);


/**
 * @param id int  (readOnly).
 * @param name string .
 * @param systemName string .
 * @param description string .
 * @param status int .
 * @param partnerId int  (readOnly).
 * @param permissionNames string .
 * @param tags string .
 * @param createdAt int  (readOnly).
 * @param updatedAt int  (readOnly).
 */
function VidiunUserRole(){
	VidiunUserRole.super_.call(this);
	this.id = null;
	this.name = null;
	this.systemName = null;
	this.description = null;
	this.status = null;
	this.partnerId = null;
	this.permissionNames = null;
	this.tags = null;
	this.createdAt = null;
	this.updatedAt = null;
}
module.exports.VidiunUserRole = VidiunUserRole;

util.inherits(VidiunUserRole, vidiun.VidiunObjectBase);


/**
 * @param partnerId int Partner ID.
 * @param partnerName string Partner name.
 * @param partnerStatus int Partner status.
 * @param partnerPackage int Partner package.
 * @param partnerCreatedAt int Partner creation date (Unix timestamp).
 * @param views int Number of player loads in the specific date range.
 * @param plays int Number of plays in the specific date range.
 * @param entriesCount int Number of new entries created during specific date range.
 * @param totalEntriesCount int Total number of entries.
 * @param videoEntriesCount int Number of new video entries created during specific date range.
 * @param imageEntriesCount int Number of new image entries created during specific date range.
 * @param audioEntriesCount int Number of new audio entries created during specific date range.
 * @param mixEntriesCount int Number of new mix entries created during specific date range.
 * @param bandwidth float The total bandwidth usage during the given date range (in MB).
 * @param totalStorage float The total storage consumption (in MB).
 * @param storage float The added storage consumption (new uploads) during the given date range (in MB).
 * @param deletedStorage float The deleted storage consumption (new uploads) during the given date range (in MB).
 * @param peakStorage float The peak amount of storage consumption during the given date range for the specific publisher.
 * @param avgStorage float The average amount of storage consumption during the given date range for the specific publisher.
 * @param combinedStorageBandwidth float The combined amount of bandwidth and storage consumed during the given date range for the specific publisher.
 * @param transcodingUsage float Amount of transcoding usage in MB.
 * @param dateId string TGhe date at which the report was taken - Unix Timestamp.
 */
function VidiunVarPartnerUsageItem(){
	VidiunVarPartnerUsageItem.super_.call(this);
	this.partnerId = null;
	this.partnerName = null;
	this.partnerStatus = null;
	this.partnerPackage = null;
	this.partnerCreatedAt = null;
	this.views = null;
	this.plays = null;
	this.entriesCount = null;
	this.totalEntriesCount = null;
	this.videoEntriesCount = null;
	this.imageEntriesCount = null;
	this.audioEntriesCount = null;
	this.mixEntriesCount = null;
	this.bandwidth = null;
	this.totalStorage = null;
	this.storage = null;
	this.deletedStorage = null;
	this.peakStorage = null;
	this.avgStorage = null;
	this.combinedStorageBandwidth = null;
	this.transcodingUsage = null;
	this.dateId = null;
}
module.exports.VidiunVarPartnerUsageItem = VidiunVarPartnerUsageItem;

util.inherits(VidiunVarPartnerUsageItem, vidiun.VidiunObjectBase);


/**
 * @param id int  (readOnly).
 * @param createdAt int  (readOnly).
 * @param updatedAt int  (readOnly).
 * @param partnerId int  (readOnly).
 * @param name string .
 * @param status int .
 * @param engineType string .
 * @param entryFilter VidiunBaseEntryFilter .
 * @param actionIfInfected int .
 */
function VidiunVirusScanProfile(){
	VidiunVirusScanProfile.super_.call(this);
	this.id = null;
	this.createdAt = null;
	this.updatedAt = null;
	this.partnerId = null;
	this.name = null;
	this.status = null;
	this.engineType = null;
	this.entryFilter = null;
	this.actionIfInfected = null;
}
module.exports.VidiunVirusScanProfile = VidiunVirusScanProfile;

util.inherits(VidiunVirusScanProfile, vidiun.VidiunObjectBase);


/**
 * @param id string  (readOnly).
 * @param sourceWidgetId string .
 * @param rootWidgetId string  (readOnly).
 * @param partnerId int  (readOnly).
 * @param entryId string .
 * @param uiConfId int .
 * @param securityType int .
 * @param securityPolicy int .
 * @param createdAt int  (readOnly).
 * @param updatedAt int  (readOnly).
 * @param partnerData string Can be used to store various partner related data as a string.
 * @param widgetHTML string  (readOnly).
 * @param enforceEntitlement bool Should enforce entitlement on feed entries.
 * @param privacyContext string Set privacy context for search entries that assiged to private and public categories within a category privacy context.
 * @param addEmbedHtml5Support bool Addes the HTML5 script line to the widget's embed code.
 * @param roles string .
 */
function VidiunWidget(){
	VidiunWidget.super_.call(this);
	this.id = null;
	this.sourceWidgetId = null;
	this.rootWidgetId = null;
	this.partnerId = null;
	this.entryId = null;
	this.uiConfId = null;
	this.securityType = null;
	this.securityPolicy = null;
	this.createdAt = null;
	this.updatedAt = null;
	this.partnerData = null;
	this.widgetHTML = null;
	this.enforceEntitlement = null;
	this.privacyContext = null;
	this.addEmbedHtml5Support = null;
	this.roles = null;
}
module.exports.VidiunWidget = VidiunWidget;

util.inherits(VidiunWidget, vidiun.VidiunObjectBase);


/**
 */
function VidiunAccessControlBlockAction(){
	VidiunAccessControlBlockAction.super_.call(this);
}
module.exports.VidiunAccessControlBlockAction = VidiunAccessControlBlockAction;

util.inherits(VidiunAccessControlBlockAction, VidiunRuleAction);


/**
 * @param policyId int Drm policy id.
 */
function VidiunAccessControlDrmPolicyAction(){
	VidiunAccessControlDrmPolicyAction.super_.call(this);
	this.policyId = null;
}
module.exports.VidiunAccessControlDrmPolicyAction = VidiunAccessControlDrmPolicyAction;

util.inherits(VidiunAccessControlDrmPolicyAction, VidiunRuleAction);


/**
 * @param deliveryProfileIds string Comma separated list of delivery profile ids.
 * @param isBlockedList bool .
 */
function VidiunAccessControlLimitDeliveryProfilesAction(){
	VidiunAccessControlLimitDeliveryProfilesAction.super_.call(this);
	this.deliveryProfileIds = null;
	this.isBlockedList = null;
}
module.exports.VidiunAccessControlLimitDeliveryProfilesAction = VidiunAccessControlLimitDeliveryProfilesAction;

util.inherits(VidiunAccessControlLimitDeliveryProfilesAction, VidiunRuleAction);


/**
 * @param flavorParamsIds string Comma separated list of flavor ids.
 * @param isBlockedList bool .
 */
function VidiunAccessControlLimitFlavorsAction(){
	VidiunAccessControlLimitFlavorsAction.super_.call(this);
	this.flavorParamsIds = null;
	this.isBlockedList = null;
}
module.exports.VidiunAccessControlLimitFlavorsAction = VidiunAccessControlLimitFlavorsAction;

util.inherits(VidiunAccessControlLimitFlavorsAction, VidiunRuleAction);


/**
 * @param objects array  (readOnly).
 */
function VidiunAccessControlListResponse(){
	VidiunAccessControlListResponse.super_.call(this);
	this.objects = null;
}
module.exports.VidiunAccessControlListResponse = VidiunAccessControlListResponse;

util.inherits(VidiunAccessControlListResponse, VidiunListResponse);


/**
 * @param pattern string Request host regex pattern.
 * @param replacement string Request host regex replacment.
 */
function VidiunAccessControlModifyRequestHostRegexAction(){
	VidiunAccessControlModifyRequestHostRegexAction.super_.call(this);
	this.pattern = null;
	this.replacement = null;
}
module.exports.VidiunAccessControlModifyRequestHostRegexAction = VidiunAccessControlModifyRequestHostRegexAction;

util.inherits(VidiunAccessControlModifyRequestHostRegexAction, VidiunRuleAction);


/**
 * @param limit int .
 */
function VidiunAccessControlPreviewAction(){
	VidiunAccessControlPreviewAction.super_.call(this);
	this.limit = null;
}
module.exports.VidiunAccessControlPreviewAction = VidiunAccessControlPreviewAction;

util.inherits(VidiunAccessControlPreviewAction, VidiunRuleAction);


/**
 * @param objects array  (readOnly).
 */
function VidiunAccessControlProfileListResponse(){
	VidiunAccessControlProfileListResponse.super_.call(this);
	this.objects = null;
}
module.exports.VidiunAccessControlProfileListResponse = VidiunAccessControlProfileListResponse;

util.inherits(VidiunAccessControlProfileListResponse, VidiunListResponse);


/**
 * @param edgeServerIds string Comma separated list of edge servers playBack should be done from.
 */
function VidiunAccessControlServeRemoteEdgeServerAction(){
	VidiunAccessControlServeRemoteEdgeServerAction.super_.call(this);
	this.edgeServerIds = null;
}
module.exports.VidiunAccessControlServeRemoteEdgeServerAction = VidiunAccessControlServeRemoteEdgeServerAction;

util.inherits(VidiunAccessControlServeRemoteEdgeServerAction, VidiunRuleAction);


/**
 * @param host string .
 * @param port int .
 * @param protocol string .
 * @param username string .
 * @param password string .
 */
function VidiunActivitiBusinessProcessServer(){
	VidiunActivitiBusinessProcessServer.super_.call(this);
	this.host = null;
	this.port = null;
	this.protocol = null;
	this.username = null;
	this.password = null;
}
module.exports.VidiunActivitiBusinessProcessServer = VidiunActivitiBusinessProcessServer;

util.inherits(VidiunActivitiBusinessProcessServer, VidiunBusinessProcessServer);


/**
 * @param protocolType string  (insertOnly).
 * @param sourceUrl string .
 * @param adType string .
 * @param title string .
 * @param endTime int .
 * @param duration int Duration in milliseconds.
 */
function VidiunAdCuePoint(){
	VidiunAdCuePoint.super_.call(this);
	this.protocolType = null;
	this.sourceUrl = null;
	this.adType = null;
	this.title = null;
	this.endTime = null;
	this.duration = null;
}
module.exports.VidiunAdCuePoint = VidiunAdCuePoint;

util.inherits(VidiunAdCuePoint, VidiunCuePoint);


/**
 */
function VidiunAdminUser(){
	VidiunAdminUser.super_.call(this);
}
module.exports.VidiunAdminUser = VidiunAdminUser;

util.inherits(VidiunAdminUser, VidiunUser);


/**
 * @param filesPermissionInS3 string .
 * @param s3Region string .
 */
function VidiunAmazonS3StorageProfile(){
	VidiunAmazonS3StorageProfile.super_.call(this);
	this.filesPermissionInS3 = null;
	this.s3Region = null;
}
module.exports.VidiunAmazonS3StorageProfile = VidiunAmazonS3StorageProfile;

util.inherits(VidiunAmazonS3StorageProfile, VidiunStorageProfile);


/**
 * @param objects array  (readOnly).
 */
function VidiunAnnotationListResponse(){
	VidiunAnnotationListResponse.super_.call(this);
	this.objects = null;
}
module.exports.VidiunAnnotationListResponse = VidiunAnnotationListResponse;

util.inherits(VidiunAnnotationListResponse, VidiunListResponse);


/**
 * @param parentId string  (insertOnly).
 * @param quizUserEntryId string  (insertOnly).
 * @param answerKey string .
 * @param isCorrect int  (readOnly).
 * @param correctAnswerKeys array Array of string (readOnly).
 * @param explanation string  (readOnly).
 */
function VidiunAnswerCuePoint(){
	VidiunAnswerCuePoint.super_.call(this);
	this.parentId = null;
	this.quizUserEntryId = null;
	this.answerKey = null;
	this.isCorrect = null;
	this.correctAnswerKeys = null;
	this.explanation = null;
}
module.exports.VidiunAnswerCuePoint = VidiunAnswerCuePoint;

util.inherits(VidiunAnswerCuePoint, VidiunCuePoint);


/**
 * @param service string .
 * @param action string .
 */
function VidiunApiActionPermissionItem(){
	VidiunApiActionPermissionItem.super_.call(this);
	this.service = null;
	this.action = null;
}
module.exports.VidiunApiActionPermissionItem = VidiunApiActionPermissionItem;

util.inherits(VidiunApiActionPermissionItem, VidiunPermissionItem);


/**
 * @param object string .
 * @param parameter string .
 * @param action string .
 */
function VidiunApiParameterPermissionItem(){
	VidiunApiParameterPermissionItem.super_.call(this);
	this.object = null;
	this.parameter = null;
	this.action = null;
}
module.exports.VidiunApiParameterPermissionItem = VidiunApiParameterPermissionItem;

util.inherits(VidiunApiParameterPermissionItem, VidiunPermissionItem);


/**
 * @param idEqual int .
 * @param idIn string .
 * @param createdAtGreaterThanOrEqual int .
 * @param createdAtLessThanOrEqual int .
 * @param updatedAtGreaterThanOrEqual int .
 * @param updatedAtLessThanOrEqual int .
 */
function VidiunAppTokenBaseFilter(){
	VidiunAppTokenBaseFilter.super_.call(this);
	this.idEqual = null;
	this.idIn = null;
	this.createdAtGreaterThanOrEqual = null;
	this.createdAtLessThanOrEqual = null;
	this.updatedAtGreaterThanOrEqual = null;
	this.updatedAtLessThanOrEqual = null;
}
module.exports.VidiunAppTokenBaseFilter = VidiunAppTokenBaseFilter;

util.inherits(VidiunAppTokenBaseFilter, VidiunFilter);


/**
 * @param objects array  (readOnly).
 */
function VidiunAppTokenListResponse(){
	VidiunAppTokenListResponse.super_.call(this);
	this.objects = null;
}
module.exports.VidiunAppTokenListResponse = VidiunAppTokenListResponse;

util.inherits(VidiunAppTokenListResponse, VidiunListResponse);


/**
 * @param propertyName string The property name to look for, this will match to a getter on the asset object.
 * Should be camelCase naming convention (defining "myPropertyName" will look for getMyPropertyName()).
 * @param propertyValue string The value to compare.
 */
function VidiunAssetDistributionPropertyCondition(){
	VidiunAssetDistributionPropertyCondition.super_.call(this);
	this.propertyName = null;
	this.propertyValue = null;
}
module.exports.VidiunAssetDistributionPropertyCondition = VidiunAssetDistributionPropertyCondition;

util.inherits(VidiunAssetDistributionPropertyCondition, VidiunAssetDistributionCondition);


/**
 * @param assetParamsId int .
 * @param assetParamsVersion string .
 * @param assetId string .
 * @param assetVersion string .
 * @param readyBehavior int .
 * @param format string The container format of the Flavor Params.
 */
function VidiunAssetParamsOutput(){
	VidiunAssetParamsOutput.super_.call(this);
	this.assetParamsId = null;
	this.assetParamsVersion = null;
	this.assetId = null;
	this.assetVersion = null;
	this.readyBehavior = null;
	this.format = null;
}
module.exports.VidiunAssetParamsOutput = VidiunAssetParamsOutput;

util.inherits(VidiunAssetParamsOutput, VidiunAssetParams);


/**
 * @param properties array Array of key/value objects that holds the property and the value to find and compare on an asset object.
 */
function VidiunAssetPropertiesCompareCondition(){
	VidiunAssetPropertiesCompareCondition.super_.call(this);
	this.properties = null;
}
module.exports.VidiunAssetPropertiesCompareCondition = VidiunAssetPropertiesCompareCondition;

util.inherits(VidiunAssetPropertiesCompareCondition, VidiunCondition);


/**
 * @param resources array Array of resources associated with asset params ids.
 */
function VidiunAssetsParamsResourceContainers(){
	VidiunAssetsParamsResourceContainers.super_.call(this);
	this.resources = null;
}
module.exports.VidiunAssetsParamsResourceContainers = VidiunAssetsParamsResourceContainers;

util.inherits(VidiunAssetsParamsResourceContainers, VidiunResource);


/**
 * @param objects array  (readOnly).
 */
function VidiunAttachmentAssetListResponse(){
	VidiunAttachmentAssetListResponse.super_.call(this);
	this.objects = null;
}
module.exports.VidiunAttachmentAssetListResponse = VidiunAttachmentAssetListResponse;

util.inherits(VidiunAttachmentAssetListResponse, VidiunListResponse);


/**
 * @param value string .
 */
function VidiunAttributeCondition(){
	VidiunAttributeCondition.super_.call(this);
	this.value = null;
}
module.exports.VidiunAttributeCondition = VidiunAttributeCondition;

util.inherits(VidiunAttributeCondition, VidiunSearchItem);


/**
 * @param changedItems array .
 */
function VidiunAuditTrailChangeInfo(){
	VidiunAuditTrailChangeInfo.super_.call(this);
	this.changedItems = null;
}
module.exports.VidiunAuditTrailChangeInfo = VidiunAuditTrailChangeInfo;

util.inherits(VidiunAuditTrailChangeInfo, VidiunAuditTrailInfo);


/**
 * @param type int .
 */
function VidiunAuditTrailChangeXmlNode(){
	VidiunAuditTrailChangeXmlNode.super_.call(this);
	this.type = null;
}
module.exports.VidiunAuditTrailChangeXmlNode = VidiunAuditTrailChangeXmlNode;

util.inherits(VidiunAuditTrailChangeXmlNode, VidiunAuditTrailChangeItem);


/**
 * @param version string .
 * @param objectSubType int .
 * @param dc int .
 * @param original bool .
 * @param fileType int .
 */
function VidiunAuditTrailFileSyncCreateInfo(){
	VidiunAuditTrailFileSyncCreateInfo.super_.call(this);
	this.version = null;
	this.objectSubType = null;
	this.dc = null;
	this.original = null;
	this.fileType = null;
}
module.exports.VidiunAuditTrailFileSyncCreateInfo = VidiunAuditTrailFileSyncCreateInfo;

util.inherits(VidiunAuditTrailFileSyncCreateInfo, VidiunAuditTrailInfo);


/**
 * @param objects array  (readOnly).
 */
function VidiunAuditTrailListResponse(){
	VidiunAuditTrailListResponse.super_.call(this);
	this.objects = null;
}
module.exports.VidiunAuditTrailListResponse = VidiunAuditTrailListResponse;

util.inherits(VidiunAuditTrailListResponse, VidiunListResponse);


/**
 * @param info string .
 */
function VidiunAuditTrailTextInfo(){
	VidiunAuditTrailTextInfo.super_.call(this);
	this.info = null;
}
module.exports.VidiunAuditTrailTextInfo = VidiunAuditTrailTextInfo;

util.inherits(VidiunAuditTrailTextInfo, VidiunAuditTrailInfo);


/**
 * @param privileges array The privelege needed to remove the restriction.
 */
function VidiunAuthenticatedCondition(){
	VidiunAuthenticatedCondition.super_.call(this);
	this.privileges = null;
}
module.exports.VidiunAuthenticatedCondition = VidiunAuthenticatedCondition;

util.inherits(VidiunAuthenticatedCondition, VidiunCondition);


/**
 * @param itemType string .
 * @param rule string condition rule (include/exclude).
 */
function VidiunBaseEntryCloneOptionComponent(){
	VidiunBaseEntryCloneOptionComponent.super_.call(this);
	this.itemType = null;
	this.rule = null;
}
module.exports.VidiunBaseEntryCloneOptionComponent = VidiunBaseEntryCloneOptionComponent;

util.inherits(VidiunBaseEntryCloneOptionComponent, VidiunBaseEntryCloneOptionItem);


/**
 * @param objects array  (readOnly).
 */
function VidiunBaseEntryListResponse(){
	VidiunBaseEntryListResponse.super_.call(this);
	this.objects = null;
}
module.exports.VidiunBaseEntryListResponse = VidiunBaseEntryListResponse;

util.inherits(VidiunBaseEntryListResponse, VidiunListResponse);


/**
 */
function VidiunBaseSyndicationFeedBaseFilter(){
	VidiunBaseSyndicationFeedBaseFilter.super_.call(this);
}
module.exports.VidiunBaseSyndicationFeedBaseFilter = VidiunBaseSyndicationFeedBaseFilter;

util.inherits(VidiunBaseSyndicationFeedBaseFilter, VidiunFilter);


/**
 * @param objects array  (readOnly).
 */
function VidiunBaseSyndicationFeedListResponse(){
	VidiunBaseSyndicationFeedListResponse.super_.call(this);
	this.objects = null;
}
module.exports.VidiunBaseSyndicationFeedListResponse = VidiunBaseSyndicationFeedListResponse;

util.inherits(VidiunBaseSyndicationFeedListResponse, VidiunListResponse);

/**
 *
 */
function VidiunBeaconListResponse() {
    VidiunBeaconListResponse.super_.call(this);
}
module.exports.VidiunBeaconListResponse = VidiunBeaconListResponse;
util.inherits(VidiunBeaconListResponse, VidiunListResponse);

/**
 * @param idEqual int .
 * @param idGreaterThanOrEqual int .
 * @param partnerIdEqual int .
 * @param partnerIdIn string .
 * @param partnerIdNotIn string .
 * @param createdAtGreaterThanOrEqual int .
 * @param createdAtLessThanOrEqual int .
 * @param updatedAtGreaterThanOrEqual int .
 * @param updatedAtLessThanOrEqual int .
 * @param executionAttemptsGreaterThanOrEqual int .
 * @param executionAttemptsLessThanOrEqual int .
 * @param lockVersionGreaterThanOrEqual int .
 * @param lockVersionLessThanOrEqual int .
 * @param entryIdEqual string .
 * @param jobTypeEqual string .
 * @param jobTypeIn string .
 * @param jobTypeNotIn string .
 * @param jobSubTypeEqual int .
 * @param jobSubTypeIn string .
 * @param jobSubTypeNotIn string .
 * @param statusEqual int .
 * @param statusIn string .
 * @param statusNotIn string .
 * @param priorityGreaterThanOrEqual int .
 * @param priorityLessThanOrEqual int .
 * @param priorityEqual int .
 * @param priorityIn string .
 * @param priorityNotIn string .
 * @param batchVersionGreaterThanOrEqual int .
 * @param batchVersionLessThanOrEqual int .
 * @param batchVersionEqual int .
 * @param queueTimeGreaterThanOrEqual int .
 * @param queueTimeLessThanOrEqual int .
 * @param finishTimeGreaterThanOrEqual int .
 * @param finishTimeLessThanOrEqual int .
 * @param errTypeEqual int .
 * @param errTypeIn string .
 * @param errTypeNotIn string .
 * @param errNumberEqual int .
 * @param errNumberIn string .
 * @param errNumberNotIn string .
 * @param estimatedEffortLessThan int .
 * @param estimatedEffortGreaterThan int .
 * @param urgencyLessThanOrEqual int .
 * @param urgencyGreaterThanOrEqual int .
 */
function VidiunBatchJobBaseFilter(){
	VidiunBatchJobBaseFilter.super_.call(this);
	this.idEqual = null;
	this.idGreaterThanOrEqual = null;
	this.partnerIdEqual = null;
	this.partnerIdIn = null;
	this.partnerIdNotIn = null;
	this.createdAtGreaterThanOrEqual = null;
	this.createdAtLessThanOrEqual = null;
	this.updatedAtGreaterThanOrEqual = null;
	this.updatedAtLessThanOrEqual = null;
	this.executionAttemptsGreaterThanOrEqual = null;
	this.executionAttemptsLessThanOrEqual = null;
	this.lockVersionGreaterThanOrEqual = null;
	this.lockVersionLessThanOrEqual = null;
	this.entryIdEqual = null;
	this.jobTypeEqual = null;
	this.jobTypeIn = null;
	this.jobTypeNotIn = null;
	this.jobSubTypeEqual = null;
	this.jobSubTypeIn = null;
	this.jobSubTypeNotIn = null;
	this.statusEqual = null;
	this.statusIn = null;
	this.statusNotIn = null;
	this.priorityGreaterThanOrEqual = null;
	this.priorityLessThanOrEqual = null;
	this.priorityEqual = null;
	this.priorityIn = null;
	this.priorityNotIn = null;
	this.batchVersionGreaterThanOrEqual = null;
	this.batchVersionLessThanOrEqual = null;
	this.batchVersionEqual = null;
	this.queueTimeGreaterThanOrEqual = null;
	this.queueTimeLessThanOrEqual = null;
	this.finishTimeGreaterThanOrEqual = null;
	this.finishTimeLessThanOrEqual = null;
	this.errTypeEqual = null;
	this.errTypeIn = null;
	this.errTypeNotIn = null;
	this.errNumberEqual = null;
	this.errNumberIn = null;
	this.errNumberNotIn = null;
	this.estimatedEffortLessThan = null;
	this.estimatedEffortGreaterThan = null;
	this.urgencyLessThanOrEqual = null;
	this.urgencyGreaterThanOrEqual = null;
}
module.exports.VidiunBatchJobBaseFilter = VidiunBatchJobBaseFilter;

util.inherits(VidiunBatchJobBaseFilter, VidiunFilter);


/**
 * @param objects array  (readOnly).
 */
function VidiunBatchJobListResponse(){
	VidiunBatchJobListResponse.super_.call(this);
	this.objects = null;
}
module.exports.VidiunBatchJobListResponse = VidiunBatchJobListResponse;

util.inherits(VidiunBatchJobListResponse, VidiunListResponse);


/**
 * @param value bool .
 */
function VidiunBooleanValue(){
	VidiunBooleanValue.super_.call(this);
	this.value = null;
}
module.exports.VidiunBooleanValue = VidiunBooleanValue;

util.inherits(VidiunBooleanValue, VidiunValue);


/**
 * @param templateId int VidiunBusinessProcessNotificationTemplate id.
 * @param businessProcessId string .
 * @param caseId string Execution unique id.
 */
function VidiunBpmEventNotificationIntegrationJobTriggerData(){
	VidiunBpmEventNotificationIntegrationJobTriggerData.super_.call(this);
	this.templateId = null;
	this.businessProcessId = null;
	this.caseId = null;
}
module.exports.VidiunBpmEventNotificationIntegrationJobTriggerData = VidiunBpmEventNotificationIntegrationJobTriggerData;

util.inherits(VidiunBpmEventNotificationIntegrationJobTriggerData, VidiunIntegrationJobTriggerData);


/**
 * @param entryIds string Comma separated list of entry ids.
 * @param flavorParamsId int Flavor params id to use for conversion.
 * @param puserId string The id of the requesting user.
 */
function VidiunBulkDownloadJobData(){
	VidiunBulkDownloadJobData.super_.call(this);
	this.entryIds = null;
	this.flavorParamsId = null;
	this.puserId = null;
}
module.exports.VidiunBulkDownloadJobData = VidiunBulkDownloadJobData;

util.inherits(VidiunBulkDownloadJobData, VidiunJobData);


/**
 * @param filter VidiunFilter Filter for extracting the objects list to upload.
 * @param templateObject VidiunObjectBase Template object for new object creation.
 */
function VidiunBulkServiceFilterData(){
	VidiunBulkServiceFilterData.super_.call(this);
	this.filter = null;
	this.templateObject = null;
}
module.exports.VidiunBulkServiceFilterData = VidiunBulkServiceFilterData;

util.inherits(VidiunBulkServiceFilterData, VidiunBulkServiceData);


/**
 * @param uploadedOnGreaterThanOrEqual int .
 * @param uploadedOnLessThanOrEqual int .
 * @param uploadedOnEqual int .
 * @param statusIn string .
 * @param statusEqual int .
 * @param bulkUploadObjectTypeEqual string .
 * @param bulkUploadObjectTypeIn string .
 */
function VidiunBulkUploadBaseFilter(){
	VidiunBulkUploadBaseFilter.super_.call(this);
	this.uploadedOnGreaterThanOrEqual = null;
	this.uploadedOnLessThanOrEqual = null;
	this.uploadedOnEqual = null;
	this.statusIn = null;
	this.statusEqual = null;
	this.bulkUploadObjectTypeEqual = null;
	this.bulkUploadObjectTypeIn = null;
}
module.exports.VidiunBulkUploadBaseFilter = VidiunBulkUploadBaseFilter;

util.inherits(VidiunBulkUploadBaseFilter, VidiunFilter);


/**
 */
function VidiunBulkUploadCategoryData(){
	VidiunBulkUploadCategoryData.super_.call(this);
}
module.exports.VidiunBulkUploadCategoryData = VidiunBulkUploadCategoryData;

util.inherits(VidiunBulkUploadCategoryData, VidiunBulkUploadObjectData);


/**
 */
function VidiunBulkUploadCategoryEntryData(){
	VidiunBulkUploadCategoryEntryData.super_.call(this);
}
module.exports.VidiunBulkUploadCategoryEntryData = VidiunBulkUploadCategoryEntryData;

util.inherits(VidiunBulkUploadCategoryEntryData, VidiunBulkUploadObjectData);


/**
 */
function VidiunBulkUploadCategoryUserData(){
	VidiunBulkUploadCategoryUserData.super_.call(this);
}
module.exports.VidiunBulkUploadCategoryUserData = VidiunBulkUploadCategoryUserData;

util.inherits(VidiunBulkUploadCategoryUserData, VidiunBulkUploadObjectData);


/**
 * @param conversionProfileId int Selected profile id for all bulk entries.
 */
function VidiunBulkUploadEntryData(){
	VidiunBulkUploadEntryData.super_.call(this);
	this.conversionProfileId = null;
}
module.exports.VidiunBulkUploadEntryData = VidiunBulkUploadEntryData;

util.inherits(VidiunBulkUploadEntryData, VidiunBulkUploadObjectData);


/**
 * @param userId string  (readOnly).
 * @param uploadedBy string The screen name of the user (readOnly).
 * @param conversionProfileId int Selected profile id for all bulk entries (readOnly).
 * @param resultsFileLocalPath string Created by the API (readOnly).
 * @param resultsFileUrl string Created by the API (readOnly).
 * @param numOfEntries int Number of created entries (readOnly).
 * @param numOfObjects int Number of created objects (readOnly).
 * @param filePath string The bulk upload file path (readOnly).
 * @param bulkUploadObjectType string Type of object for bulk upload (readOnly).
 * @param fileName string Friendly name of the file, used to be recognized later in the logs.
 * @param objectData VidiunBulkUploadObjectData Data pertaining to the objects being uploaded (readOnly).
 * @param type string Type of bulk upload (readOnly).
 * @param emailRecipients string Recipients of the email for bulk upload success/failure.
 * @param numOfErrorObjects int Number of objects that finished on error status.
 */
function VidiunBulkUploadJobData(){
	VidiunBulkUploadJobData.super_.call(this);
	this.userId = null;
	this.uploadedBy = null;
	this.conversionProfileId = null;
	this.resultsFileLocalPath = null;
	this.resultsFileUrl = null;
	this.numOfEntries = null;
	this.numOfObjects = null;
	this.filePath = null;
	this.bulkUploadObjectType = null;
	this.fileName = null;
	this.objectData = null;
	this.type = null;
	this.emailRecipients = null;
	this.numOfErrorObjects = null;
}
module.exports.VidiunBulkUploadJobData = VidiunBulkUploadJobData;

util.inherits(VidiunBulkUploadJobData, VidiunJobData);


/**
 * @param objects array  (readOnly).
 */
function VidiunBulkUploadListResponse(){
	VidiunBulkUploadListResponse.super_.call(this);
	this.objects = null;
}
module.exports.VidiunBulkUploadListResponse = VidiunBulkUploadListResponse;

util.inherits(VidiunBulkUploadListResponse, VidiunListResponse);


/**
 * @param relativePath string .
 * @param name string .
 * @param referenceId string .
 * @param description string .
 * @param tags string .
 * @param appearInList int .
 * @param privacy int .
 * @param inheritanceType int .
 * @param userJoinPolicy int .
 * @param defaultPermissionLevel int .
 * @param owner string .
 * @param contributionPolicy int .
 * @param partnerSortValue int .
 * @param moderation bool .
 */
function VidiunBulkUploadResultCategory(){
	VidiunBulkUploadResultCategory.super_.call(this);
	this.relativePath = null;
	this.name = null;
	this.referenceId = null;
	this.description = null;
	this.tags = null;
	this.appearInList = null;
	this.privacy = null;
	this.inheritanceType = null;
	this.userJoinPolicy = null;
	this.defaultPermissionLevel = null;
	this.owner = null;
	this.contributionPolicy = null;
	this.partnerSortValue = null;
	this.moderation = null;
}
module.exports.VidiunBulkUploadResultCategory = VidiunBulkUploadResultCategory;

util.inherits(VidiunBulkUploadResultCategory, VidiunBulkUploadResult);


/**
 * @param categoryId int .
 * @param entryId string .
 */
function VidiunBulkUploadResultCategoryEntry(){
	VidiunBulkUploadResultCategoryEntry.super_.call(this);
	this.categoryId = null;
	this.entryId = null;
}
module.exports.VidiunBulkUploadResultCategoryEntry = VidiunBulkUploadResultCategoryEntry;

util.inherits(VidiunBulkUploadResultCategoryEntry, VidiunBulkUploadResult);


/**
 * @param categoryId int .
 * @param categoryReferenceId string .
 * @param userId string .
 * @param permissionLevel int .
 * @param updateMethod int .
 * @param requiredObjectStatus int .
 */
function VidiunBulkUploadResultCategoryUser(){
	VidiunBulkUploadResultCategoryUser.super_.call(this);
	this.categoryId = null;
	this.categoryReferenceId = null;
	this.userId = null;
	this.permissionLevel = null;
	this.updateMethod = null;
	this.requiredObjectStatus = null;
}
module.exports.VidiunBulkUploadResultCategoryUser = VidiunBulkUploadResultCategoryUser;

util.inherits(VidiunBulkUploadResultCategoryUser, VidiunBulkUploadResult);


/**
 * @param entryId string .
 * @param title string .
 * @param description string .
 * @param tags string .
 * @param url string .
 * @param contentType string .
 * @param conversionProfileId int .
 * @param accessControlProfileId int .
 * @param category string .
 * @param scheduleStartDate int .
 * @param scheduleEndDate int .
 * @param entryStatus int .
 * @param thumbnailUrl string .
 * @param thumbnailSaved bool .
 * @param sshPrivateKey string .
 * @param sshPublicKey string .
 * @param sshKeyPassphrase string .
 * @param creatorId string .
 * @param entitledUsersEdit string .
 * @param entitledUsersPublish string .
 * @param ownerId string .
 * @param referenceId string .
 * @param templateEntryId string .
 */
function VidiunBulkUploadResultEntry(){
	VidiunBulkUploadResultEntry.super_.call(this);
	this.entryId = null;
	this.title = null;
	this.description = null;
	this.tags = null;
	this.url = null;
	this.contentType = null;
	this.conversionProfileId = null;
	this.accessControlProfileId = null;
	this.category = null;
	this.scheduleStartDate = null;
	this.scheduleEndDate = null;
	this.entryStatus = null;
	this.thumbnailUrl = null;
	this.thumbnailSaved = null;
	this.sshPrivateKey = null;
	this.sshPublicKey = null;
	this.sshKeyPassphrase = null;
	this.creatorId = null;
	this.entitledUsersEdit = null;
	this.entitledUsersPublish = null;
	this.ownerId = null;
	this.referenceId = null;
	this.templateEntryId = null;
}
module.exports.VidiunBulkUploadResultEntry = VidiunBulkUploadResultEntry;

util.inherits(VidiunBulkUploadResultEntry, VidiunBulkUploadResult);


/**
 * @param referenceId string .
 */
function VidiunBulkUploadResultScheduleEvent(){
	VidiunBulkUploadResultScheduleEvent.super_.call(this);
	this.referenceId = null;
}
module.exports.VidiunBulkUploadResultScheduleEvent = VidiunBulkUploadResultScheduleEvent;

util.inherits(VidiunBulkUploadResultScheduleEvent, VidiunBulkUploadResult);


/**
 * @param resourceId string .
 * @param name string .
 * @param type string .
 * @param systemName string .
 * @param description string .
 * @param tags string .
 * @param parentType string .
 * @param parentSystemName string .
 */
function VidiunBulkUploadResultScheduleResource(){
	VidiunBulkUploadResultScheduleResource.super_.call(this);
	this.resourceId = null;
	this.name = null;
	this.type = null;
	this.systemName = null;
	this.description = null;
	this.tags = null;
	this.parentType = null;
	this.parentSystemName = null;
}
module.exports.VidiunBulkUploadResultScheduleResource = VidiunBulkUploadResultScheduleResource;

util.inherits(VidiunBulkUploadResultScheduleResource, VidiunBulkUploadResult);


/**
 * @param userId string .
 * @param screenName string .
 * @param email string .
 * @param description string .
 * @param tags string .
 * @param dateOfBirth int .
 * @param country string .
 * @param state string .
 * @param city string .
 * @param zip string .
 * @param gender int .
 * @param firstName string .
 * @param lastName string .
 */
function VidiunBulkUploadResultUser(){
	VidiunBulkUploadResultUser.super_.call(this);
	this.userId = null;
	this.screenName = null;
	this.email = null;
	this.description = null;
	this.tags = null;
	this.dateOfBirth = null;
	this.country = null;
	this.state = null;
	this.city = null;
	this.zip = null;
	this.gender = null;
	this.firstName = null;
	this.lastName = null;
}
module.exports.VidiunBulkUploadResultUser = VidiunBulkUploadResultUser;

util.inherits(VidiunBulkUploadResultUser, VidiunBulkUploadResult);


/**
 */
function VidiunBulkUploadUserData(){
	VidiunBulkUploadUserData.super_.call(this);
}
module.exports.VidiunBulkUploadUserData = VidiunBulkUploadUserData;

util.inherits(VidiunBulkUploadUserData, VidiunBulkUploadObjectData);


/**
 * @param serverId int Define the integrated BPM server id.
 * @param processId string Define the integrated BPM process id.
 * @param mainObjectCode string Code to load the main triggering object.
 */
function VidiunBusinessProcessNotificationTemplate(){
	VidiunBusinessProcessNotificationTemplate.super_.call(this);
	this.serverId = null;
	this.processId = null;
	this.mainObjectCode = null;
}
module.exports.VidiunBusinessProcessNotificationTemplate = VidiunBusinessProcessNotificationTemplate;

util.inherits(VidiunBusinessProcessNotificationTemplate, VidiunEventNotificationTemplate);


/**
 * @param idEqual int .
 * @param idIn string .
 * @param idNotIn string .
 * @param createdAtGreaterThanOrEqual int .
 * @param createdAtLessThanOrEqual int .
 * @param updatedAtGreaterThanOrEqual int .
 * @param updatedAtLessThanOrEqual int .
 * @param partnerIdEqual int .
 * @param partnerIdIn string .
 * @param statusEqual string .
 * @param statusNotEqual string .
 * @param statusIn string .
 * @param statusNotIn string .
 * @param typeEqual string .
 * @param typeIn string .
 */
function VidiunBusinessProcessServerBaseFilter(){
	VidiunBusinessProcessServerBaseFilter.super_.call(this);
	this.idEqual = null;
	this.idIn = null;
	this.idNotIn = null;
	this.createdAtGreaterThanOrEqual = null;
	this.createdAtLessThanOrEqual = null;
	this.updatedAtGreaterThanOrEqual = null;
	this.updatedAtLessThanOrEqual = null;
	this.partnerIdEqual = null;
	this.partnerIdIn = null;
	this.statusEqual = null;
	this.statusNotEqual = null;
	this.statusIn = null;
	this.statusNotIn = null;
	this.typeEqual = null;
	this.typeIn = null;
}
module.exports.VidiunBusinessProcessServerBaseFilter = VidiunBusinessProcessServerBaseFilter;

util.inherits(VidiunBusinessProcessServerBaseFilter, VidiunFilter);


/**
 * @param objects array  (readOnly).
 */
function VidiunBusinessProcessServerListResponse(){
	VidiunBusinessProcessServerListResponse.super_.call(this);
	this.objects = null;
}
module.exports.VidiunBusinessProcessServerListResponse = VidiunBusinessProcessServerListResponse;

util.inherits(VidiunBusinessProcessServerListResponse, VidiunListResponse);


/**
 * @param streamUrl string URL of the stream.
 */
function VidiunCameraScheduleResource(){
	VidiunCameraScheduleResource.super_.call(this);
	this.streamUrl = null;
}
module.exports.VidiunCameraScheduleResource = VidiunCameraScheduleResource;

util.inherits(VidiunCameraScheduleResource, VidiunScheduleResource);


/**
 * @param objects array  (readOnly).
 */
function VidiunCaptionAssetItemListResponse(){
	VidiunCaptionAssetItemListResponse.super_.call(this);
	this.objects = null;
}
module.exports.VidiunCaptionAssetItemListResponse = VidiunCaptionAssetItemListResponse;

util.inherits(VidiunCaptionAssetItemListResponse, VidiunListResponse);


/**
 * @param objects array  (readOnly).
 */
function VidiunCaptionAssetListResponse(){
	VidiunCaptionAssetListResponse.super_.call(this);
	this.objects = null;
}
module.exports.VidiunCaptionAssetListResponse = VidiunCaptionAssetListResponse;

util.inherits(VidiunCaptionAssetListResponse, VidiunListResponse);


/**
 * @param objects array  (readOnly).
 */
function VidiunCaptionParamsListResponse(){
	VidiunCaptionParamsListResponse.super_.call(this);
	this.objects = null;
}
module.exports.VidiunCaptionParamsListResponse = VidiunCaptionParamsListResponse;

util.inherits(VidiunCaptionParamsListResponse, VidiunListResponse);


/**
 * @param srcFileSyncLocalPath string .
 * @param actualSrcFileSyncLocalPath string The translated path as used by the scheduler.
 * @param srcFileSyncRemoteUrl string .
 * @param thumbParamsOutputId int .
 * @param thumbAssetId string .
 * @param srcAssetId string .
 * @param srcAssetType string .
 * @param thumbPath string .
 */
function VidiunCaptureThumbJobData(){
	VidiunCaptureThumbJobData.super_.call(this);
	this.srcFileSyncLocalPath = null;
	this.actualSrcFileSyncLocalPath = null;
	this.srcFileSyncRemoteUrl = null;
	this.thumbParamsOutputId = null;
	this.thumbAssetId = null;
	this.srcAssetId = null;
	this.srcAssetType = null;
	this.thumbPath = null;
}
module.exports.VidiunCaptureThumbJobData = VidiunCaptureThumbJobData;

util.inherits(VidiunCaptureThumbJobData, VidiunJobData);


/**
 * @param categoriesMatchOr string .
 * @param categoryEntryStatusIn string .
 * @param orderBy string .
 * @param categoryIdEqual int .
 */
function VidiunCategoryEntryAdvancedFilter(){
	VidiunCategoryEntryAdvancedFilter.super_.call(this);
	this.categoriesMatchOr = null;
	this.categoryEntryStatusIn = null;
	this.orderBy = null;
	this.categoryIdEqual = null;
}
module.exports.VidiunCategoryEntryAdvancedFilter = VidiunCategoryEntryAdvancedFilter;

util.inherits(VidiunCategoryEntryAdvancedFilter, VidiunSearchItem);


/**
 * @param objects array  (readOnly).
 */
function VidiunCategoryEntryListResponse(){
	VidiunCategoryEntryListResponse.super_.call(this);
	this.objects = null;
}
module.exports.VidiunCategoryEntryListResponse = VidiunCategoryEntryListResponse;

util.inherits(VidiunCategoryEntryListResponse, VidiunListResponse);


/**
 * @param identifier string Identifier of the object.
 */
function VidiunCategoryIdentifier(){
	VidiunCategoryIdentifier.super_.call(this);
	this.identifier = null;
}
module.exports.VidiunCategoryIdentifier = VidiunCategoryIdentifier;

util.inherits(VidiunCategoryIdentifier, VidiunObjectIdentifier);


/**
 * @param objects array  (readOnly).
 */
function VidiunCategoryListResponse(){
	VidiunCategoryListResponse.super_.call(this);
	this.objects = null;
}
module.exports.VidiunCategoryListResponse = VidiunCategoryListResponse;

util.inherits(VidiunCategoryListResponse, VidiunListResponse);


/**
 * @param memberIdEq string .
 * @param memberIdIn string .
 * @param memberPermissionsMatchOr string .
 * @param memberPermissionsMatchAnd string .
 */
function VidiunCategoryUserAdvancedFilter(){
	VidiunCategoryUserAdvancedFilter.super_.call(this);
	this.memberIdEq = null;
	this.memberIdIn = null;
	this.memberPermissionsMatchOr = null;
	this.memberPermissionsMatchAnd = null;
}
module.exports.VidiunCategoryUserAdvancedFilter = VidiunCategoryUserAdvancedFilter;

util.inherits(VidiunCategoryUserAdvancedFilter, VidiunSearchItem);


/**
 * @param objects array  (readOnly).
 */
function VidiunCategoryUserListResponse(){
	VidiunCategoryUserListResponse.super_.call(this);
	this.objects = null;
}
module.exports.VidiunCategoryUserListResponse = VidiunCategoryUserListResponse;

util.inherits(VidiunCategoryUserListResponse, VidiunListResponse);


/**
 * @param userIdEqual string .
 * @param userIdIn string .
 * @param statusEqual int .
 * @param statusIn string .
 * @param createdAtGreaterThanOrEqual int .
 * @param createdAtLessThanOrEqual int .
 * @param updatedAtGreaterThanOrEqual int .
 * @param updatedAtLessThanOrEqual int .
 * @param updateMethodEqual int .
 * @param updateMethodIn string .
 * @param permissionNamesMatchAnd string .
 * @param permissionNamesMatchOr string .
 */
function VidiunCategoryUserProviderFilter(){
	VidiunCategoryUserProviderFilter.super_.call(this);
	this.userIdEqual = null;
	this.userIdIn = null;
	this.statusEqual = null;
	this.statusIn = null;
	this.createdAtGreaterThanOrEqual = null;
	this.createdAtLessThanOrEqual = null;
	this.updatedAtGreaterThanOrEqual = null;
	this.updatedAtLessThanOrEqual = null;
	this.updateMethodEqual = null;
	this.updateMethodIn = null;
	this.permissionNamesMatchAnd = null;
	this.permissionNamesMatchOr = null;
}
module.exports.VidiunCategoryUserProviderFilter = VidiunCategoryUserProviderFilter;

util.inherits(VidiunCategoryUserProviderFilter, VidiunFilter);


/**
 * @param entryId string Entry ID.
 * @param flavorAssetId string Flavor ID.
 * @param captionAssetFormats string Caption formats.
 * @param priority string .
 * @param fidelity string .
 * @param username string Api key for service provider (readOnly).
 * @param password string Api key for service provider (readOnly).
 * @param baseUrl string Base url for service provider (readOnly).
 * @param spokenLanguage string Transcript content language.
 * @param replaceMediaContent bool should replace remote media content.
 */
function VidiunCielo24JobProviderData(){
	VidiunCielo24JobProviderData.super_.call(this);
	this.entryId = null;
	this.flavorAssetId = null;
	this.captionAssetFormats = null;
	this.priority = null;
	this.fidelity = null;
	this.username = null;
	this.password = null;
	this.baseUrl = null;
	this.spokenLanguage = null;
	this.replaceMediaContent = null;
}
module.exports.VidiunCielo24JobProviderData = VidiunCielo24JobProviderData;

util.inherits(VidiunCielo24JobProviderData, VidiunIntegrationJobProviderData);


/**
 * @param offset int Offset in milliseconds.
 * @param duration int Duration in milliseconds.
 */
function VidiunClipAttributes(){
	VidiunClipAttributes.super_.call(this);
	this.offset = null;
	this.duration = null;
}
module.exports.VidiunClipAttributes = VidiunClipAttributes;

util.inherits(VidiunClipAttributes, VidiunOperationAttributes);


/**
 * @param code string .
 * @param description string .
 * @param endTime int .
 * @param duration int Duration in milliseconds (readOnly).
 */
function VidiunCodeCuePoint(){
	VidiunCodeCuePoint.super_.call(this);
	this.code = null;
	this.description = null;
	this.endTime = null;
	this.duration = null;
}
module.exports.VidiunCodeCuePoint = VidiunCodeCuePoint;

util.inherits(VidiunCodeCuePoint, VidiunCuePoint);


/**
 * @param value VidiunIntegerValue Value to evaluate against the field and operator.
 * @param comparison string Comparing operator.
 */
function VidiunCompareCondition(){
	VidiunCompareCondition.super_.call(this);
	this.value = null;
	this.comparison = null;
}
module.exports.VidiunCompareCondition = VidiunCompareCondition;

util.inherits(VidiunCompareCondition, VidiunCondition);


/**
 */
function VidiunDataCenterContentResource(){
	VidiunDataCenterContentResource.super_.call(this);
}
module.exports.VidiunDataCenterContentResource = VidiunDataCenterContentResource;

util.inherits(VidiunDataCenterContentResource, VidiunContentResource);


/**
 * @param resource VidiunDataCenterContentResource The resource to be concatenated.
 */
function VidiunConcatAttributes(){
	VidiunConcatAttributes.super_.call(this);
	this.resource = null;
}
module.exports.VidiunConcatAttributes = VidiunConcatAttributes;

util.inherits(VidiunConcatAttributes, VidiunOperationAttributes);


/**
 * @param srcFiles array Source files to be concatenated.
 * @param destFilePath string Output file.
 * @param flavorAssetId string Flavor asset to be ingested with the output.
 * @param offset float Clipping offset in seconds.
 * @param duration float Clipping duration in seconds.
 * @param concatenatedDuration float duration of the concated video.
 */
function VidiunConcatJobData(){
	VidiunConcatJobData.super_.call(this);
	this.srcFiles = null;
	this.destFilePath = null;
	this.flavorAssetId = null;
	this.offset = null;
	this.duration = null;
	this.concatenatedDuration = null;
}
module.exports.VidiunConcatJobData = VidiunConcatJobData;

util.inherits(VidiunConcatJobData, VidiunJobData);


/**
 * @param fieldValues string .
 */
function VidiunConfigurableDistributionJobProviderData(){
	VidiunConfigurableDistributionJobProviderData.super_.call(this);
	this.fieldValues = null;
}
module.exports.VidiunConfigurableDistributionJobProviderData = VidiunConfigurableDistributionJobProviderData;

util.inherits(VidiunConfigurableDistributionJobProviderData, VidiunDistributionJobProviderData);


/**
 * @param fieldConfigArray array .
 * @param itemXpathsToExtend array .
 * @param useCategoryEntries bool When checking custom XSLT conditions using the fieldConfigArray - address only categories associated with the entry via the categoryEntry object.
 */
function VidiunConfigurableDistributionProfile(){
	VidiunConfigurableDistributionProfile.super_.call(this);
	this.fieldConfigArray = null;
	this.itemXpathsToExtend = null;
	this.useCategoryEntries = null;
}
module.exports.VidiunConfigurableDistributionProfile = VidiunConfigurableDistributionProfile;

util.inherits(VidiunConfigurableDistributionProfile, VidiunDistributionProfile);


/**
 * @param noDistributionProfiles bool .
 * @param distributionProfileId int .
 * @param distributionSunStatus int .
 * @param entryDistributionFlag int .
 * @param entryDistributionStatus int .
 * @param hasEntryDistributionValidationErrors bool .
 * @param entryDistributionValidationErrors string Comma seperated validation error types.
 */
function VidiunContentDistributionSearchItem(){
	VidiunContentDistributionSearchItem.super_.call(this);
	this.noDistributionProfiles = null;
	this.distributionProfileId = null;
	this.distributionSunStatus = null;
	this.entryDistributionFlag = null;
	this.entryDistributionStatus = null;
	this.hasEntryDistributionValidationErrors = null;
	this.entryDistributionValidationErrors = null;
}
module.exports.VidiunContentDistributionSearchItem = VidiunContentDistributionSearchItem;

util.inherits(VidiunContentDistributionSearchItem, VidiunSearchItem);


/**
 * @param idEqual int .
 * @param idIn string .
 * @param createdAtGreaterThanOrEqual int .
 * @param createdAtLessThanOrEqual int .
 * @param createdByIdEqual int .
 * @param typeEqual int .
 * @param typeIn string .
 * @param targetTypeEqual int .
 * @param targetTypeIn string .
 * @param statusEqual int .
 * @param statusIn string .
 */
function VidiunControlPanelCommandBaseFilter(){
	VidiunControlPanelCommandBaseFilter.super_.call(this);
	this.idEqual = null;
	this.idIn = null;
	this.createdAtGreaterThanOrEqual = null;
	this.createdAtLessThanOrEqual = null;
	this.createdByIdEqual = null;
	this.typeEqual = null;
	this.typeIn = null;
	this.targetTypeEqual = null;
	this.targetTypeIn = null;
	this.statusEqual = null;
	this.statusIn = null;
}
module.exports.VidiunControlPanelCommandBaseFilter = VidiunControlPanelCommandBaseFilter;

util.inherits(VidiunControlPanelCommandBaseFilter, VidiunFilter);


/**
 * @param objects array  (readOnly).
 */
function VidiunControlPanelCommandListResponse(){
	VidiunControlPanelCommandListResponse.super_.call(this);
	this.objects = null;
}
module.exports.VidiunControlPanelCommandListResponse = VidiunControlPanelCommandListResponse;

util.inherits(VidiunControlPanelCommandListResponse, VidiunListResponse);


/**
 * @param srcFileSyncLocalPath string .
 * @param actualSrcFileSyncLocalPath string The translated path as used by the scheduler.
 * @param srcFileSyncRemoteUrl string .
 * @param srcFileSyncs array .
 * @param engineVersion int .
 * @param flavorParamsOutputId int .
 * @param flavorParamsOutput VidiunFlavorParamsOutput .
 * @param mediaInfoId int .
 * @param currentOperationSet int .
 * @param currentOperationIndex int .
 * @param pluginData array .
 */
function VidiunConvartableJobData(){
	VidiunConvartableJobData.super_.call(this);
	this.srcFileSyncLocalPath = null;
	this.actualSrcFileSyncLocalPath = null;
	this.srcFileSyncRemoteUrl = null;
	this.srcFileSyncs = null;
	this.engineVersion = null;
	this.flavorParamsOutputId = null;
	this.flavorParamsOutput = null;
	this.mediaInfoId = null;
	this.currentOperationSet = null;
	this.currentOperationIndex = null;
	this.pluginData = null;
}
module.exports.VidiunConvartableJobData = VidiunConvartableJobData;

util.inherits(VidiunConvartableJobData, VidiunJobData);


/**
 * @param objects array  (readOnly).
 */
function VidiunConversionProfileAssetParamsListResponse(){
	VidiunConversionProfileAssetParamsListResponse.super_.call(this);
	this.objects = null;
}
module.exports.VidiunConversionProfileAssetParamsListResponse = VidiunConversionProfileAssetParamsListResponse;

util.inherits(VidiunConversionProfileAssetParamsListResponse, VidiunListResponse);


/**
 * @param objects array  (readOnly).
 */
function VidiunConversionProfileListResponse(){
	VidiunConversionProfileListResponse.super_.call(this);
	this.objects = null;
}
module.exports.VidiunConversionProfileListResponse = VidiunConversionProfileListResponse;

util.inherits(VidiunConversionProfileListResponse, VidiunListResponse);


/**
 * @param flavorParamsIds string Comma separated list of flavor param ids to convert.
 * @param reconvert bool Should reconvert when flavor already exists?.
 */
function VidiunConvertEntryFlavorsObjectTask(){
	VidiunConvertEntryFlavorsObjectTask.super_.call(this);
	this.flavorParamsIds = null;
	this.reconvert = null;
}
module.exports.VidiunConvertEntryFlavorsObjectTask = VidiunConvertEntryFlavorsObjectTask;

util.inherits(VidiunConvertEntryFlavorsObjectTask, VidiunObjectTask);


/**
 * @param entryId string Live stream entry id.
 * @param assetId string .
 * @param mediaServerIndex string Primary or secondary media server.
 * @param fileIndex int The index of the file within the entry.
 * @param srcFilePath string The recorded live media.
 * @param destFilePath string The output file.
 * @param endTime float Duration of the live entry including all recorded segments including the current.
 * @param destDataFilePath string The data output file.
 */
function VidiunConvertLiveSegmentJobData(){
	VidiunConvertLiveSegmentJobData.super_.call(this);
	this.entryId = null;
	this.assetId = null;
	this.mediaServerIndex = null;
	this.fileIndex = null;
	this.srcFilePath = null;
	this.destFilePath = null;
	this.endTime = null;
	this.destDataFilePath = null;
}
module.exports.VidiunConvertLiveSegmentJobData = VidiunConvertLiveSegmentJobData;

util.inherits(VidiunConvertLiveSegmentJobData, VidiunJobData);


/**
 * @param inputFileSyncLocalPath string .
 * @param thumbHeight int The height of last created thumbnail, will be used to comapare if this thumbnail is the best we can have.
 * @param thumbBitrate int The bit rate of last created thumbnail, will be used to comapare if this thumbnail is the best we can have.
 */
function VidiunConvertProfileJobData(){
	VidiunConvertProfileJobData.super_.call(this);
	this.inputFileSyncLocalPath = null;
	this.thumbHeight = null;
	this.thumbBitrate = null;
}
module.exports.VidiunConvertProfileJobData = VidiunConvertProfileJobData;

util.inherits(VidiunConvertProfileJobData, VidiunJobData);


/**
 * @param fromPartnerId int Id of the partner to copy from.
 * @param toPartnerId int Id of the partner to copy to.
 */
function VidiunCopyPartnerJobData(){
	VidiunCopyPartnerJobData.super_.call(this);
	this.fromPartnerId = null;
	this.toPartnerId = null;
}
module.exports.VidiunCopyPartnerJobData = VidiunCopyPartnerJobData;

util.inherits(VidiunCopyPartnerJobData, VidiunJobData);


/**
 * @param countryRestrictionType int Country restriction type (Allow or deny).
 * @param countryList string Comma separated list of country codes to allow to deny.
 */
function VidiunCountryRestriction(){
	VidiunCountryRestriction.super_.call(this);
	this.countryRestrictionType = null;
	this.countryList = null;
}
module.exports.VidiunCountryRestriction = VidiunCountryRestriction;

util.inherits(VidiunCountryRestriction, VidiunBaseRestriction);


/**
 * @param objects array  (readOnly).
 */
function VidiunCuePointListResponse(){
	VidiunCuePointListResponse.super_.call(this);
	this.objects = null;
}
module.exports.VidiunCuePointListResponse = VidiunCuePointListResponse;

util.inherits(VidiunCuePointListResponse, VidiunListResponse);


/**
 * @param objects array  (readOnly).
 */
function VidiunDataListResponse(){
	VidiunDataListResponse.super_.call(this);
	this.objects = null;
}
module.exports.VidiunDataListResponse = VidiunDataListResponse;

util.inherits(VidiunDataListResponse, VidiunListResponse);


/**
 * @param deleteType int The logic to use to choose the flavors for deletion.
 * @param flavorParamsIds string Comma separated list of flavor param ids to delete or keep.
 */
function VidiunDeleteEntryFlavorsObjectTask(){
	VidiunDeleteEntryFlavorsObjectTask.super_.call(this);
	this.deleteType = null;
	this.flavorParamsIds = null;
}
module.exports.VidiunDeleteEntryFlavorsObjectTask = VidiunDeleteEntryFlavorsObjectTask;

util.inherits(VidiunDeleteEntryFlavorsObjectTask, VidiunObjectTask);


/**
 */
function VidiunDeleteEntryObjectTask(){
	VidiunDeleteEntryObjectTask.super_.call(this);
}
module.exports.VidiunDeleteEntryObjectTask = VidiunDeleteEntryObjectTask;

util.inherits(VidiunDeleteEntryObjectTask, VidiunObjectTask);


/**
 * @param localFileSyncPath string .
 */
function VidiunDeleteFileJobData(){
	VidiunDeleteFileJobData.super_.call(this);
	this.localFileSyncPath = null;
}
module.exports.VidiunDeleteFileJobData = VidiunDeleteFileJobData;

util.inherits(VidiunDeleteFileJobData, VidiunJobData);


/**
 * @param filter VidiunFilter The filter should return the list of objects that need to be deleted.
 */
function VidiunDeleteJobData(){
	VidiunDeleteJobData.super_.call(this);
	this.filter = null;
}
module.exports.VidiunDeleteJobData = VidiunDeleteJobData;

util.inherits(VidiunDeleteJobData, VidiunJobData);


/**
 */
function VidiunDeleteLocalContentObjectTask(){
	VidiunDeleteLocalContentObjectTask.super_.call(this);
}
module.exports.VidiunDeleteLocalContentObjectTask = VidiunDeleteLocalContentObjectTask;

util.inherits(VidiunDeleteLocalContentObjectTask, VidiunObjectTask);


/**
 * @param supportClipping bool Should we use timing parameters - clipTo / seekFrom.
 */
function VidiunDeliveryProfileAkamaiAppleHttpManifest(){
	VidiunDeliveryProfileAkamaiAppleHttpManifest.super_.call(this);
	this.supportClipping = null;
}
module.exports.VidiunDeliveryProfileAkamaiAppleHttpManifest = VidiunDeliveryProfileAkamaiAppleHttpManifest;

util.inherits(VidiunDeliveryProfileAkamaiAppleHttpManifest, VidiunDeliveryProfile);


/**
 * @param supportClipping bool Should we use timing parameters - clipTo / seekFrom.
 */
function VidiunDeliveryProfileAkamaiHds(){
	VidiunDeliveryProfileAkamaiHds.super_.call(this);
	this.supportClipping = null;
}
module.exports.VidiunDeliveryProfileAkamaiHds = VidiunDeliveryProfileAkamaiHds;

util.inherits(VidiunDeliveryProfileAkamaiHds, VidiunDeliveryProfile);


/**
 * @param useIntelliseek bool Should we use intelliseek.
 */
function VidiunDeliveryProfileAkamaiHttp(){
	VidiunDeliveryProfileAkamaiHttp.super_.call(this);
	this.useIntelliseek = null;
}
module.exports.VidiunDeliveryProfileAkamaiHttp = VidiunDeliveryProfileAkamaiHttp;

util.inherits(VidiunDeliveryProfileAkamaiHttp, VidiunDeliveryProfile);


/**
 * @param idEqual int .
 * @param idIn string .
 * @param partnerIdEqual int .
 * @param partnerIdIn string .
 * @param systemNameEqual string .
 * @param systemNameIn string .
 * @param createdAtGreaterThanOrEqual int .
 * @param createdAtLessThanOrEqual int .
 * @param updatedAtGreaterThanOrEqual int .
 * @param updatedAtLessThanOrEqual int .
 * @param streamerTypeEqual string .
 * @param statusEqual int .
 * @param statusIn string .
 */
function VidiunDeliveryProfileBaseFilter(){
	VidiunDeliveryProfileBaseFilter.super_.call(this);
	this.idEqual = null;
	this.idIn = null;
	this.partnerIdEqual = null;
	this.partnerIdIn = null;
	this.systemNameEqual = null;
	this.systemNameIn = null;
	this.createdAtGreaterThanOrEqual = null;
	this.createdAtLessThanOrEqual = null;
	this.updatedAtGreaterThanOrEqual = null;
	this.updatedAtLessThanOrEqual = null;
	this.streamerTypeEqual = null;
	this.statusEqual = null;
	this.statusIn = null;
}
module.exports.VidiunDeliveryProfileBaseFilter = VidiunDeliveryProfileBaseFilter;

util.inherits(VidiunDeliveryProfileBaseFilter, VidiunFilter);


/**
 * @param deliveryProfileIds array The delivery ids that are accepted by this condition.
 */
function VidiunDeliveryProfileCondition(){
	VidiunDeliveryProfileCondition.super_.call(this);
	this.deliveryProfileIds = null;
}
module.exports.VidiunDeliveryProfileCondition = VidiunDeliveryProfileCondition;

util.inherits(VidiunDeliveryProfileCondition, VidiunCondition);


/**
 * @param pattern string .
 * @param rendererClass string rendererClass.
 * @param manifestRedirect int Enable to make playManifest redirect to the domain of the delivery profile.
 */
function VidiunDeliveryProfileGenericAppleHttp(){
	VidiunDeliveryProfileGenericAppleHttp.super_.call(this);
	this.pattern = null;
	this.rendererClass = null;
	this.manifestRedirect = null;
}
module.exports.VidiunDeliveryProfileGenericAppleHttp = VidiunDeliveryProfileGenericAppleHttp;

util.inherits(VidiunDeliveryProfileGenericAppleHttp, VidiunDeliveryProfile);


/**
 * @param pattern string .
 * @param rendererClass string rendererClass.
 */
function VidiunDeliveryProfileGenericHds(){
	VidiunDeliveryProfileGenericHds.super_.call(this);
	this.pattern = null;
	this.rendererClass = null;
}
module.exports.VidiunDeliveryProfileGenericHds = VidiunDeliveryProfileGenericHds;

util.inherits(VidiunDeliveryProfileGenericHds, VidiunDeliveryProfile);


/**
 * @param pattern string .
 */
function VidiunDeliveryProfileGenericHttp(){
	VidiunDeliveryProfileGenericHttp.super_.call(this);
	this.pattern = null;
}
module.exports.VidiunDeliveryProfileGenericHttp = VidiunDeliveryProfileGenericHttp;

util.inherits(VidiunDeliveryProfileGenericHttp, VidiunDeliveryProfile);


/**
 * @param pattern string .
 */
function VidiunDeliveryProfileGenericSilverLight(){
	VidiunDeliveryProfileGenericSilverLight.super_.call(this);
	this.pattern = null;
}
module.exports.VidiunDeliveryProfileGenericSilverLight = VidiunDeliveryProfileGenericSilverLight;

util.inherits(VidiunDeliveryProfileGenericSilverLight, VidiunDeliveryProfile);


/**
 * @param objects array  (readOnly).
 */
function VidiunDeliveryProfileListResponse(){
	VidiunDeliveryProfileListResponse.super_.call(this);
	this.objects = null;
}
module.exports.VidiunDeliveryProfileListResponse = VidiunDeliveryProfileListResponse;

util.inherits(VidiunDeliveryProfileListResponse, VidiunListResponse);


/**
 * @param disableExtraAttributes bool .
 * @param forceProxy bool .
 */
function VidiunDeliveryProfileLiveAppleHttp(){
	VidiunDeliveryProfileLiveAppleHttp.super_.call(this);
	this.disableExtraAttributes = null;
	this.forceProxy = null;
}
module.exports.VidiunDeliveryProfileLiveAppleHttp = VidiunDeliveryProfileLiveAppleHttp;

util.inherits(VidiunDeliveryProfileLiveAppleHttp, VidiunDeliveryProfile);


/**
 * @param enforceRtmpe bool enforceRtmpe.
 * @param prefix string a prefix that is added to all stream urls (replaces storageProfile::rtmpPrefix).
 */
function VidiunDeliveryProfileRtmp(){
	VidiunDeliveryProfileRtmp.super_.call(this);
	this.enforceRtmpe = null;
	this.prefix = null;
}
module.exports.VidiunDeliveryProfileRtmp = VidiunDeliveryProfileRtmp;

util.inherits(VidiunDeliveryProfileRtmp, VidiunDeliveryProfile);


/**
 * @param playbackDomain string Delivery server playback Domain.
 */
function VidiunDeliveryServerNode(){
	VidiunDeliveryServerNode.super_.call(this);
	this.playbackDomain = null;
}
module.exports.VidiunDeliveryServerNode = VidiunDeliveryServerNode;

util.inherits(VidiunDeliveryServerNode, VidiunServerNode);


/**
 * @param directoryRestrictionType int Vidiun directory restriction type.
 */
function VidiunDirectoryRestriction(){
	VidiunDirectoryRestriction.super_.call(this);
	this.directoryRestrictionType = null;
}
module.exports.VidiunDirectoryRestriction = VidiunDirectoryRestriction;

util.inherits(VidiunDirectoryRestriction, VidiunBaseRestriction);


/**
 * @param eventNotificationTemplateId int The event notification template id to dispatch.
 */
function VidiunDispatchEventNotificationObjectTask(){
	VidiunDispatchEventNotificationObjectTask.super_.call(this);
	this.eventNotificationTemplateId = null;
}
module.exports.VidiunDispatchEventNotificationObjectTask = VidiunDispatchEventNotificationObjectTask;

util.inherits(VidiunDispatchEventNotificationObjectTask, VidiunObjectTask);


/**
 * @param distributionProfileId string Distribution profile id.
 */
function VidiunDistributeObjectTask(){
	VidiunDistributeObjectTask.super_.call(this);
	this.distributionProfileId = null;
}
module.exports.VidiunDistributeObjectTask = VidiunDistributeObjectTask;

util.inherits(VidiunDistributeObjectTask, VidiunObjectTask);


/**
 * @param distributionProfileId int .
 * @param distributionProfile VidiunDistributionProfile .
 * @param entryDistributionId int .
 * @param entryDistribution VidiunEntryDistribution .
 * @param remoteId string Id of the media in the remote system.
 * @param providerType string .
 * @param providerData VidiunDistributionJobProviderData Additional data that relevant for the provider only.
 * @param results string The results as returned from the remote destination.
 * @param sentData string The data as sent to the remote destination.
 * @param mediaFiles array Stores array of media files that submitted to the destination site
 * Could be used later for media update.
 */
function VidiunDistributionJobData(){
	VidiunDistributionJobData.super_.call(this);
	this.distributionProfileId = null;
	this.distributionProfile = null;
	this.entryDistributionId = null;
	this.entryDistribution = null;
	this.remoteId = null;
	this.providerType = null;
	this.providerData = null;
	this.results = null;
	this.sentData = null;
	this.mediaFiles = null;
}
module.exports.VidiunDistributionJobData = VidiunDistributionJobData;

util.inherits(VidiunDistributionJobData, VidiunJobData);


/**
 * @param idEqual int .
 * @param idIn string .
 * @param createdAtGreaterThanOrEqual int .
 * @param createdAtLessThanOrEqual int .
 * @param updatedAtGreaterThanOrEqual int .
 * @param updatedAtLessThanOrEqual int .
 * @param statusEqual int .
 * @param statusIn string .
 */
function VidiunDistributionProfileBaseFilter(){
	VidiunDistributionProfileBaseFilter.super_.call(this);
	this.idEqual = null;
	this.idIn = null;
	this.createdAtGreaterThanOrEqual = null;
	this.createdAtLessThanOrEqual = null;
	this.updatedAtGreaterThanOrEqual = null;
	this.updatedAtLessThanOrEqual = null;
	this.statusEqual = null;
	this.statusIn = null;
}
module.exports.VidiunDistributionProfileBaseFilter = VidiunDistributionProfileBaseFilter;

util.inherits(VidiunDistributionProfileBaseFilter, VidiunFilter);


/**
 * @param objects array  (readOnly).
 */
function VidiunDistributionProfileListResponse(){
	VidiunDistributionProfileListResponse.super_.call(this);
	this.objects = null;
}
module.exports.VidiunDistributionProfileListResponse = VidiunDistributionProfileListResponse;

util.inherits(VidiunDistributionProfileListResponse, VidiunListResponse);


/**
 * @param typeEqual string .
 * @param typeIn string .
 */
function VidiunDistributionProviderBaseFilter(){
	VidiunDistributionProviderBaseFilter.super_.call(this);
	this.typeEqual = null;
	this.typeIn = null;
}
module.exports.VidiunDistributionProviderBaseFilter = VidiunDistributionProviderBaseFilter;

util.inherits(VidiunDistributionProviderBaseFilter, VidiunFilter);


/**
 * @param objects array  (readOnly).
 */
function VidiunDistributionProviderListResponse(){
	VidiunDistributionProviderListResponse.super_.call(this);
	this.objects = null;
}
module.exports.VidiunDistributionProviderListResponse = VidiunDistributionProviderListResponse;

util.inherits(VidiunDistributionProviderListResponse, VidiunListResponse);


/**
 * @param conditionName string .
 */
function VidiunDistributionValidationErrorConditionNotMet(){
	VidiunDistributionValidationErrorConditionNotMet.super_.call(this);
	this.conditionName = null;
}
module.exports.VidiunDistributionValidationErrorConditionNotMet = VidiunDistributionValidationErrorConditionNotMet;

util.inherits(VidiunDistributionValidationErrorConditionNotMet, VidiunDistributionValidationError);


/**
 * @param fieldName string .
 * @param validationErrorType int .
 * @param validationErrorParam string Parameter of the validation error
 * For example, minimum value for VidiunDistributionValidationErrorType::STRING_TOO_SHORT validation error.
 */
function VidiunDistributionValidationErrorInvalidData(){
	VidiunDistributionValidationErrorInvalidData.super_.call(this);
	this.fieldName = null;
	this.validationErrorType = null;
	this.validationErrorParam = null;
}
module.exports.VidiunDistributionValidationErrorInvalidData = VidiunDistributionValidationErrorInvalidData;

util.inherits(VidiunDistributionValidationErrorInvalidData, VidiunDistributionValidationError);


/**
 * @param data string .
 */
function VidiunDistributionValidationErrorMissingAsset(){
	VidiunDistributionValidationErrorMissingAsset.super_.call(this);
	this.data = null;
}
module.exports.VidiunDistributionValidationErrorMissingAsset = VidiunDistributionValidationErrorMissingAsset;

util.inherits(VidiunDistributionValidationErrorMissingAsset, VidiunDistributionValidationError);


/**
 * @param flavorParamsId string .
 */
function VidiunDistributionValidationErrorMissingFlavor(){
	VidiunDistributionValidationErrorMissingFlavor.super_.call(this);
	this.flavorParamsId = null;
}
module.exports.VidiunDistributionValidationErrorMissingFlavor = VidiunDistributionValidationErrorMissingFlavor;

util.inherits(VidiunDistributionValidationErrorMissingFlavor, VidiunDistributionValidationError);


/**
 * @param fieldName string .
 */
function VidiunDistributionValidationErrorMissingMetadata(){
	VidiunDistributionValidationErrorMissingMetadata.super_.call(this);
	this.fieldName = null;
}
module.exports.VidiunDistributionValidationErrorMissingMetadata = VidiunDistributionValidationErrorMissingMetadata;

util.inherits(VidiunDistributionValidationErrorMissingMetadata, VidiunDistributionValidationError);


/**
 * @param dimensions VidiunDistributionThumbDimensions .
 */
function VidiunDistributionValidationErrorMissingThumbnail(){
	VidiunDistributionValidationErrorMissingThumbnail.super_.call(this);
	this.dimensions = null;
}
module.exports.VidiunDistributionValidationErrorMissingThumbnail = VidiunDistributionValidationErrorMissingThumbnail;

util.inherits(VidiunDistributionValidationErrorMissingThumbnail, VidiunDistributionValidationError);


/**
 * @param objects array  (readOnly).
 */
function VidiunDocumentListResponse(){
	VidiunDocumentListResponse.super_.call(this);
	this.objects = null;
}
module.exports.VidiunDocumentListResponse = VidiunDocumentListResponse;

util.inherits(VidiunDocumentListResponse, VidiunListResponse);


/**
 * @param partnerIdEqual int .
 * @param partnerIdIn string .
 * @param deviceIdLike string .
 * @param providerEqual string .
 * @param providerIn string .
 */
function VidiunDrmDeviceBaseFilter(){
	VidiunDrmDeviceBaseFilter.super_.call(this);
	this.partnerIdEqual = null;
	this.partnerIdIn = null;
	this.deviceIdLike = null;
	this.providerEqual = null;
	this.providerIn = null;
}
module.exports.VidiunDrmDeviceBaseFilter = VidiunDrmDeviceBaseFilter;

util.inherits(VidiunDrmDeviceBaseFilter, VidiunFilter);


/**
 * @param flavorData string For the uDRM we give the drm context data which is a json encoding of an array containing the uDRM data
 * for each flavor that is required from this getContextData request.
 */
function VidiunDrmEntryContextPluginData(){
	VidiunDrmEntryContextPluginData.super_.call(this);
	this.flavorData = null;
}
module.exports.VidiunDrmEntryContextPluginData = VidiunDrmEntryContextPluginData;

util.inherits(VidiunDrmEntryContextPluginData, VidiunPluginData);


/**
 * @param partnerIdEqual int .
 * @param partnerIdIn string .
 * @param nameLike string .
 * @param systemNameLike string .
 * @param providerEqual string .
 * @param providerIn string .
 * @param statusEqual int .
 * @param statusIn string .
 * @param scenarioEqual string .
 * @param scenarioIn string .
 */
function VidiunDrmPolicyBaseFilter(){
	VidiunDrmPolicyBaseFilter.super_.call(this);
	this.partnerIdEqual = null;
	this.partnerIdIn = null;
	this.nameLike = null;
	this.systemNameLike = null;
	this.providerEqual = null;
	this.providerIn = null;
	this.statusEqual = null;
	this.statusIn = null;
	this.scenarioEqual = null;
	this.scenarioIn = null;
}
module.exports.VidiunDrmPolicyBaseFilter = VidiunDrmPolicyBaseFilter;

util.inherits(VidiunDrmPolicyBaseFilter, VidiunFilter);


/**
 * @param objects array  (readOnly).
 */
function VidiunDrmPolicyListResponse(){
	VidiunDrmPolicyListResponse.super_.call(this);
	this.objects = null;
}
module.exports.VidiunDrmPolicyListResponse = VidiunDrmPolicyListResponse;

util.inherits(VidiunDrmPolicyListResponse, VidiunListResponse);


/**
 * @param idEqual int .
 * @param idIn string .
 * @param partnerIdEqual int .
 * @param partnerIdIn string .
 * @param nameLike string .
 * @param providerEqual string .
 * @param providerIn string .
 * @param statusEqual int .
 * @param statusIn string .
 */
function VidiunDrmProfileBaseFilter(){
	VidiunDrmProfileBaseFilter.super_.call(this);
	this.idEqual = null;
	this.idIn = null;
	this.partnerIdEqual = null;
	this.partnerIdIn = null;
	this.nameLike = null;
	this.providerEqual = null;
	this.providerIn = null;
	this.statusEqual = null;
	this.statusIn = null;
}
module.exports.VidiunDrmProfileBaseFilter = VidiunDrmProfileBaseFilter;

util.inherits(VidiunDrmProfileBaseFilter, VidiunFilter);


/**
 * @param objects array  (readOnly).
 */
function VidiunDrmProfileListResponse(){
	VidiunDrmProfileListResponse.super_.call(this);
	this.objects = null;
}
module.exports.VidiunDrmProfileListResponse = VidiunDrmProfileListResponse;

util.inherits(VidiunDrmProfileListResponse, VidiunListResponse);


/**
 * @param idEqual int .
 * @param idIn string .
 * @param partnerIdEqual int .
 * @param partnerIdIn string .
 * @param nameLike string .
 * @param typeEqual string .
 * @param typeIn string .
 * @param statusEqual int .
 * @param statusIn string .
 * @param conversionProfileIdEqual int .
 * @param conversionProfileIdIn string .
 * @param dcEqual int .
 * @param dcIn string .
 * @param pathEqual string .
 * @param pathLike string .
 * @param fileHandlerTypeEqual string .
 * @param fileHandlerTypeIn string .
 * @param fileNamePatternsLike string .
 * @param fileNamePatternsMultiLikeOr string .
 * @param fileNamePatternsMultiLikeAnd string .
 * @param tagsLike string .
 * @param tagsMultiLikeOr string .
 * @param tagsMultiLikeAnd string .
 * @param errorCodeEqual string .
 * @param errorCodeIn string .
 * @param createdAtGreaterThanOrEqual int .
 * @param createdAtLessThanOrEqual int .
 * @param updatedAtGreaterThanOrEqual int .
 * @param updatedAtLessThanOrEqual int .
 */
function VidiunDropFolderBaseFilter(){
	VidiunDropFolderBaseFilter.super_.call(this);
	this.idEqual = null;
	this.idIn = null;
	this.partnerIdEqual = null;
	this.partnerIdIn = null;
	this.nameLike = null;
	this.typeEqual = null;
	this.typeIn = null;
	this.statusEqual = null;
	this.statusIn = null;
	this.conversionProfileIdEqual = null;
	this.conversionProfileIdIn = null;
	this.dcEqual = null;
	this.dcIn = null;
	this.pathEqual = null;
	this.pathLike = null;
	this.fileHandlerTypeEqual = null;
	this.fileHandlerTypeIn = null;
	this.fileNamePatternsLike = null;
	this.fileNamePatternsMultiLikeOr = null;
	this.fileNamePatternsMultiLikeAnd = null;
	this.tagsLike = null;
	this.tagsMultiLikeOr = null;
	this.tagsMultiLikeAnd = null;
	this.errorCodeEqual = null;
	this.errorCodeIn = null;
	this.createdAtGreaterThanOrEqual = null;
	this.createdAtLessThanOrEqual = null;
	this.updatedAtGreaterThanOrEqual = null;
	this.updatedAtLessThanOrEqual = null;
}
module.exports.VidiunDropFolderBaseFilter = VidiunDropFolderBaseFilter;

util.inherits(VidiunDropFolderBaseFilter, VidiunFilter);


/**
 * @param contentMatchPolicy int .
 * @param slugRegex string Regular expression that defines valid file names to be handled.
 * The following might be extracted from the file name and used if defined:
 * - (?P<referenceId>\w+) - will be used as the drop folder file's parsed slug.
 * - (?P<flavorName>\w+)  - will be used as the drop folder file's parsed flavor.
 */
function VidiunDropFolderContentFileHandlerConfig(){
	VidiunDropFolderContentFileHandlerConfig.super_.call(this);
	this.contentMatchPolicy = null;
	this.slugRegex = null;
}
module.exports.VidiunDropFolderContentFileHandlerConfig = VidiunDropFolderContentFileHandlerConfig;

util.inherits(VidiunDropFolderContentFileHandlerConfig, VidiunDropFolderFileHandlerConfig);


/**
 * @param dropFolderId int .
 * @param dropFolderFileIds string .
 * @param parsedSlug string .
 * @param contentMatchPolicy int .
 * @param conversionProfileId int .
 * @param parsedUserId string .
 */
function VidiunDropFolderContentProcessorJobData(){
	VidiunDropFolderContentProcessorJobData.super_.call(this);
	this.dropFolderId = null;
	this.dropFolderFileIds = null;
	this.parsedSlug = null;
	this.contentMatchPolicy = null;
	this.conversionProfileId = null;
	this.parsedUserId = null;
}
module.exports.VidiunDropFolderContentProcessorJobData = VidiunDropFolderContentProcessorJobData;

util.inherits(VidiunDropFolderContentProcessorJobData, VidiunJobData);


/**
 * @param idEqual int .
 * @param idIn string .
 * @param partnerIdEqual int .
 * @param partnerIdIn string .
 * @param dropFolderIdEqual int .
 * @param dropFolderIdIn string .
 * @param fileNameEqual string .
 * @param fileNameIn string .
 * @param fileNameLike string .
 * @param statusEqual int .
 * @param statusIn string .
 * @param statusNotIn string .
 * @param parsedSlugEqual string .
 * @param parsedSlugIn string .
 * @param parsedSlugLike string .
 * @param parsedFlavorEqual string .
 * @param parsedFlavorIn string .
 * @param parsedFlavorLike string .
 * @param leadDropFolderFileIdEqual int .
 * @param deletedDropFolderFileIdEqual int .
 * @param entryIdEqual string .
 * @param errorCodeEqual string .
 * @param errorCodeIn string .
 * @param createdAtGreaterThanOrEqual int .
 * @param createdAtLessThanOrEqual int .
 * @param updatedAtGreaterThanOrEqual int .
 * @param updatedAtLessThanOrEqual int .
 */
function VidiunDropFolderFileBaseFilter(){
	VidiunDropFolderFileBaseFilter.super_.call(this);
	this.idEqual = null;
	this.idIn = null;
	this.partnerIdEqual = null;
	this.partnerIdIn = null;
	this.dropFolderIdEqual = null;
	this.dropFolderIdIn = null;
	this.fileNameEqual = null;
	this.fileNameIn = null;
	this.fileNameLike = null;
	this.statusEqual = null;
	this.statusIn = null;
	this.statusNotIn = null;
	this.parsedSlugEqual = null;
	this.parsedSlugIn = null;
	this.parsedSlugLike = null;
	this.parsedFlavorEqual = null;
	this.parsedFlavorIn = null;
	this.parsedFlavorLike = null;
	this.leadDropFolderFileIdEqual = null;
	this.deletedDropFolderFileIdEqual = null;
	this.entryIdEqual = null;
	this.errorCodeEqual = null;
	this.errorCodeIn = null;
	this.createdAtGreaterThanOrEqual = null;
	this.createdAtLessThanOrEqual = null;
	this.updatedAtGreaterThanOrEqual = null;
	this.updatedAtLessThanOrEqual = null;
}
module.exports.VidiunDropFolderFileBaseFilter = VidiunDropFolderFileBaseFilter;

util.inherits(VidiunDropFolderFileBaseFilter, VidiunFilter);


/**
 * @param objects array  (readOnly).
 */
function VidiunDropFolderFileListResponse(){
	VidiunDropFolderFileListResponse.super_.call(this);
	this.objects = null;
}
module.exports.VidiunDropFolderFileListResponse = VidiunDropFolderFileListResponse;

util.inherits(VidiunDropFolderFileListResponse, VidiunListResponse);


/**
 * @param eventsType int The type of the events that ill be created by this upload.
 */
function VidiunDropFolderICalBulkUploadFileHandlerConfig(){
	VidiunDropFolderICalBulkUploadFileHandlerConfig.super_.call(this);
	this.eventsType = null;
}
module.exports.VidiunDropFolderICalBulkUploadFileHandlerConfig = VidiunDropFolderICalBulkUploadFileHandlerConfig;

util.inherits(VidiunDropFolderICalBulkUploadFileHandlerConfig, VidiunDropFolderFileHandlerConfig);


/**
 * @param objects array  (readOnly).
 */
function VidiunDropFolderListResponse(){
	VidiunDropFolderListResponse.super_.call(this);
	this.objects = null;
}
module.exports.VidiunDropFolderListResponse = VidiunDropFolderListResponse;

util.inherits(VidiunDropFolderListResponse, VidiunListResponse);


/**
 */
function VidiunDropFolderXmlBulkUploadFileHandlerConfig(){
	VidiunDropFolderXmlBulkUploadFileHandlerConfig.super_.call(this);
}
module.exports.VidiunDropFolderXmlBulkUploadFileHandlerConfig = VidiunDropFolderXmlBulkUploadFileHandlerConfig;

util.inherits(VidiunDropFolderXmlBulkUploadFileHandlerConfig, VidiunDropFolderFileHandlerConfig);


/**
 * @param categoryIdEqual int .
 * @param categoryIdIn string .
 * @param userIdEqual string .
 * @param userIdIn string .
 * @param permissionLevelEqual int .
 * @param permissionLevelIn string .
 * @param statusEqual int .
 * @param statusIn string .
 * @param createdAtGreaterThanOrEqual int .
 * @param createdAtLessThanOrEqual int .
 * @param updatedAtGreaterThanOrEqual int .
 * @param updatedAtLessThanOrEqual int .
 * @param updateMethodEqual int .
 * @param updateMethodIn string .
 * @param categoryFullIdsStartsWith string .
 * @param categoryFullIdsEqual string .
 * @param permissionNamesMatchAnd string .
 * @param permissionNamesMatchOr string .
 * @param permissionNamesNotContains string .
 */
function VidiunCategoryUserBaseFilter(){
	VidiunCategoryUserBaseFilter.super_.call(this);
	this.categoryIdEqual = null;
	this.categoryIdIn = null;
	this.userIdEqual = null;
	this.userIdIn = null;
	this.permissionLevelEqual = null;
	this.permissionLevelIn = null;
	this.statusEqual = null;
	this.statusIn = null;
	this.createdAtGreaterThanOrEqual = null;
	this.createdAtLessThanOrEqual = null;
	this.updatedAtGreaterThanOrEqual = null;
	this.updatedAtLessThanOrEqual = null;
	this.updateMethodEqual = null;
	this.updateMethodIn = null;
	this.categoryFullIdsStartsWith = null;
	this.categoryFullIdsEqual = null;
	this.permissionNamesMatchAnd = null;
	this.permissionNamesMatchOr = null;
	this.permissionNamesNotContains = null;
}
module.exports.VidiunCategoryUserBaseFilter = VidiunCategoryUserBaseFilter;

util.inherits(VidiunCategoryUserBaseFilter, VidiunRelatedFilter);


/**
 * @param categoryDirectMembers bool Return the list of categoryUser that are not inherited from parent category - only the direct categoryUsers.
 * @param freeText string Free text search on user id or screen name.
 * @param relatedGroupsByUserId string Return a list of categoryUser that related to the userId in this field by groups.
 */
function VidiunCategoryUserFilter(){
	VidiunCategoryUserFilter.super_.call(this);
	this.categoryDirectMembers = null;
	this.freeText = null;
	this.relatedGroupsByUserId = null;
}
module.exports.VidiunCategoryUserFilter = VidiunCategoryUserFilter;

util.inherits(VidiunCategoryUserFilter, VidiunCategoryUserBaseFilter);


/**
 * @param categoryUserFilter VidiunCategoryUserFilter .
 */
function VidiunEmailNotificationCategoryRecipientJobData(){
	VidiunEmailNotificationCategoryRecipientJobData.super_.call(this);
	this.categoryUserFilter = null;
}
module.exports.VidiunEmailNotificationCategoryRecipientJobData = VidiunEmailNotificationCategoryRecipientJobData;

util.inherits(VidiunEmailNotificationCategoryRecipientJobData, VidiunEmailNotificationRecipientJobData);


/**
 * @param categoryId VidiunStringValue The ID of the category whose subscribers should receive the email notification.
 * @param categoryUserFilter VidiunCategoryUserProviderFilter .
 */
function VidiunEmailNotificationCategoryRecipientProvider(){
	VidiunEmailNotificationCategoryRecipientProvider.super_.call(this);
	this.categoryId = null;
	this.categoryUserFilter = null;
}
module.exports.VidiunEmailNotificationCategoryRecipientProvider = VidiunEmailNotificationCategoryRecipientProvider;

util.inherits(VidiunEmailNotificationCategoryRecipientProvider, VidiunEmailNotificationRecipientProvider);


/**
 */
function VidiunEmailNotificationParameter(){
	VidiunEmailNotificationParameter.super_.call(this);
}
module.exports.VidiunEmailNotificationParameter = VidiunEmailNotificationParameter;

util.inherits(VidiunEmailNotificationParameter, VidiunEventNotificationParameter);


/**
 * @param emailRecipients array Email to emails and names.
 */
function VidiunEmailNotificationStaticRecipientJobData(){
	VidiunEmailNotificationStaticRecipientJobData.super_.call(this);
	this.emailRecipients = null;
}
module.exports.VidiunEmailNotificationStaticRecipientJobData = VidiunEmailNotificationStaticRecipientJobData;

util.inherits(VidiunEmailNotificationStaticRecipientJobData, VidiunEmailNotificationRecipientJobData);


/**
 * @param emailRecipients array Email to emails and names.
 */
function VidiunEmailNotificationStaticRecipientProvider(){
	VidiunEmailNotificationStaticRecipientProvider.super_.call(this);
	this.emailRecipients = null;
}
module.exports.VidiunEmailNotificationStaticRecipientProvider = VidiunEmailNotificationStaticRecipientProvider;

util.inherits(VidiunEmailNotificationStaticRecipientProvider, VidiunEmailNotificationRecipientProvider);


/**
 * @param format string Define the email body format.
 * @param subject string Define the email subject.
 * @param body string Define the email body content.
 * @param fromEmail string Define the email sender email.
 * @param fromName string Define the email sender name.
 * @param to VidiunEmailNotificationRecipientProvider Email recipient emails and names.
 * @param cc VidiunEmailNotificationRecipientProvider Email recipient emails and names.
 * @param bcc VidiunEmailNotificationRecipientProvider Email recipient emails and names.
 * @param replyTo VidiunEmailNotificationRecipientProvider Default email addresses to whom the reply should be sent.
 * @param priority int Define the email priority.
 * @param confirmReadingTo string Email address that a reading confirmation will be sent.
 * @param hostname string Hostname to use in Message-Id and Received headers and as default HELLO string.
 * If empty, the value returned by SERVER_NAME is used or 'localhost.localdomain'.
 * @param messageID string Sets the message ID to be used in the Message-Id header.
 * If empty, a unique id will be generated.
 * @param customHeaders array Adds a e-mail custom header.
 */
function VidiunEmailNotificationTemplate(){
	VidiunEmailNotificationTemplate.super_.call(this);
	this.format = null;
	this.subject = null;
	this.body = null;
	this.fromEmail = null;
	this.fromName = null;
	this.to = null;
	this.cc = null;
	this.bcc = null;
	this.replyTo = null;
	this.priority = null;
	this.confirmReadingTo = null;
	this.hostname = null;
	this.messageID = null;
	this.customHeaders = null;
}
module.exports.VidiunEmailNotificationTemplate = VidiunEmailNotificationTemplate;

util.inherits(VidiunEmailNotificationTemplate, VidiunEventNotificationTemplate);


/**
 * @param partnerIdEqual int .
 * @param typeEqual int .
 * @param typeIn string .
 * @param screenNameLike string .
 * @param screenNameStartsWith string .
 * @param emailLike string .
 * @param emailStartsWith string .
 * @param tagsMultiLikeOr string .
 * @param tagsMultiLikeAnd string .
 * @param statusEqual int .
 * @param statusIn string .
 * @param createdAtGreaterThanOrEqual int .
 * @param createdAtLessThanOrEqual int .
 * @param firstNameStartsWith string .
 * @param lastNameStartsWith string .
 * @param isAdminEqual int .
 */
function VidiunUserBaseFilter(){
	VidiunUserBaseFilter.super_.call(this);
	this.partnerIdEqual = null;
	this.typeEqual = null;
	this.typeIn = null;
	this.screenNameLike = null;
	this.screenNameStartsWith = null;
	this.emailLike = null;
	this.emailStartsWith = null;
	this.tagsMultiLikeOr = null;
	this.tagsMultiLikeAnd = null;
	this.statusEqual = null;
	this.statusIn = null;
	this.createdAtGreaterThanOrEqual = null;
	this.createdAtLessThanOrEqual = null;
	this.firstNameStartsWith = null;
	this.lastNameStartsWith = null;
	this.isAdminEqual = null;
}
module.exports.VidiunUserBaseFilter = VidiunUserBaseFilter;

util.inherits(VidiunUserBaseFilter, VidiunRelatedFilter);


/**
 * @param idOrScreenNameStartsWith string .
 * @param idEqual string .
 * @param idIn string .
 * @param loginEnabledEqual int .
 * @param roleIdEqual string .
 * @param roleIdsEqual string .
 * @param roleIdsIn string .
 * @param firstNameOrLastNameStartsWith string .
 * @param permissionNamesMultiLikeOr string Permission names filter expression.
 * @param permissionNamesMultiLikeAnd string Permission names filter expression.
 */
function VidiunUserFilter(){
	VidiunUserFilter.super_.call(this);
	this.idOrScreenNameStartsWith = null;
	this.idEqual = null;
	this.idIn = null;
	this.loginEnabledEqual = null;
	this.roleIdEqual = null;
	this.roleIdsEqual = null;
	this.roleIdsIn = null;
	this.firstNameOrLastNameStartsWith = null;
	this.permissionNamesMultiLikeOr = null;
	this.permissionNamesMultiLikeAnd = null;
}
module.exports.VidiunUserFilter = VidiunUserFilter;

util.inherits(VidiunUserFilter, VidiunUserBaseFilter);


/**
 * @param filter VidiunUserFilter .
 */
function VidiunEmailNotificationUserRecipientJobData(){
	VidiunEmailNotificationUserRecipientJobData.super_.call(this);
	this.filter = null;
}
module.exports.VidiunEmailNotificationUserRecipientJobData = VidiunEmailNotificationUserRecipientJobData;

util.inherits(VidiunEmailNotificationUserRecipientJobData, VidiunEmailNotificationRecipientJobData);


/**
 * @param filter VidiunUserFilter .
 */
function VidiunEmailNotificationUserRecipientProvider(){
	VidiunEmailNotificationUserRecipientProvider.super_.call(this);
	this.filter = null;
}
module.exports.VidiunEmailNotificationUserRecipientProvider = VidiunEmailNotificationUserRecipientProvider;

util.inherits(VidiunEmailNotificationUserRecipientProvider, VidiunEmailNotificationRecipientProvider);


/**
 * @param contentLike string .
 * @param contentMultiLikeOr string .
 * @param contentMultiLikeAnd string .
 */
function VidiunEntryCaptionAssetSearchItem(){
	VidiunEntryCaptionAssetSearchItem.super_.call(this);
	this.contentLike = null;
	this.contentMultiLikeOr = null;
	this.contentMultiLikeAnd = null;
}
module.exports.VidiunEntryCaptionAssetSearchItem = VidiunEntryCaptionAssetSearchItem;

util.inherits(VidiunEntryCaptionAssetSearchItem, VidiunSearchItem);


/**
 * @param entryId string The entry ID in the context of which the playlist should be built.
 * @param followEntryRedirect int Is this a redirected entry followup?.
 */
function VidiunEntryContext(){
	VidiunEntryContext.super_.call(this);
	this.entryId = null;
	this.followEntryRedirect = null;
}
module.exports.VidiunEntryContext = VidiunEntryContext;

util.inherits(VidiunEntryContext, VidiunContext);


/**
 * @param flavorAssetId string Id of the current flavor.
 * @param flavorTags string The tags of the flavors that should be used for playback.
 * @param streamerType string Playback streamer type: RTMP, HTTP, appleHttps, rtsp, sl.
 * @param mediaProtocol string Protocol of the specific media object.
 */
function VidiunEntryContextDataParams(){
	VidiunEntryContextDataParams.super_.call(this);
	this.flavorAssetId = null;
	this.flavorTags = null;
	this.streamerType = null;
	this.mediaProtocol = null;
}
module.exports.VidiunEntryContextDataParams = VidiunEntryContextDataParams;

util.inherits(VidiunEntryContextDataParams, VidiunAccessControlScope);


/**
 * @param isSiteRestricted bool .
 * @param isCountryRestricted bool .
 * @param isSessionRestricted bool .
 * @param isIpAddressRestricted bool .
 * @param isUserAgentRestricted bool .
 * @param previewLength int .
 * @param isScheduledNow bool .
 * @param isAdmin bool .
 * @param streamerType string http/rtmp/hdnetwork.
 * @param mediaProtocol string http/https, rtmp/rtmpe.
 * @param storageProfilesXML string .
 * @param accessControlMessages array Array of messages as received from the access control rules that invalidated.
 * @param accessControlActions array Array of actions as received from the access control rules that invalidated.
 * @param flavorAssets array Array of allowed flavor assets according to access control limitations and requested tags.
 * @param msDuration int The duration of the entry in milliseconds.
 * @param pluginData map Array of allowed flavor assets according to access control limitations and requested tags.
 */
function VidiunEntryContextDataResult(){
	VidiunEntryContextDataResult.super_.call(this);
	this.isSiteRestricted = null;
	this.isCountryRestricted = null;
	this.isSessionRestricted = null;
	this.isIpAddressRestricted = null;
	this.isUserAgentRestricted = null;
	this.previewLength = null;
	this.isScheduledNow = null;
	this.isAdmin = null;
	this.streamerType = null;
	this.mediaProtocol = null;
	this.storageProfilesXML = null;
	this.accessControlMessages = null;
	this.accessControlActions = null;
	this.flavorAssets = null;
	this.msDuration = null;
	this.pluginData = null;
}
module.exports.VidiunEntryContextDataResult = VidiunEntryContextDataResult;

util.inherits(VidiunEntryContextDataResult, VidiunContextDataResult);


/**
 * @param cuePointsFreeText string .
 * @param cuePointTypeIn string .
 * @param cuePointSubTypeEqual int .
 */
function VidiunEntryCuePointSearchFilter(){
	VidiunEntryCuePointSearchFilter.super_.call(this);
	this.cuePointsFreeText = null;
	this.cuePointTypeIn = null;
	this.cuePointSubTypeEqual = null;
}
module.exports.VidiunEntryCuePointSearchFilter = VidiunEntryCuePointSearchFilter;

util.inherits(VidiunEntryCuePointSearchFilter, VidiunSearchItem);


/**
 * @param objects array  (readOnly).
 */
function VidiunEntryDistributionListResponse(){
	VidiunEntryDistributionListResponse.super_.call(this);
	this.objects = null;
}
module.exports.VidiunEntryDistributionListResponse = VidiunEntryDistributionListResponse;

util.inherits(VidiunEntryDistributionListResponse, VidiunListResponse);


/**
 * @param identifier string Identifier of the object.
 */
function VidiunEntryIdentifier(){
	VidiunEntryIdentifier.super_.call(this);
	this.identifier = null;
}
module.exports.VidiunEntryIdentifier = VidiunEntryIdentifier;

util.inherits(VidiunEntryIdentifier, VidiunObjectIdentifier);


/**
 * @param entryId string .
 * @param peakAudience int .
 * @param peakDvrAudience int .
 */
function VidiunEntryLiveStats(){
	VidiunEntryLiveStats.super_.call(this);
	this.entryId = null;
	this.peakAudience = null;
	this.peakDvrAudience = null;
}
module.exports.VidiunEntryLiveStats = VidiunEntryLiveStats;

util.inherits(VidiunEntryLiveStats, VidiunLiveStats);


/**
 * @param templateEntryId string Entry to be used as template during content ingestion.
 * @param entryIds string Entries that associated with this event.
 * @param categoryIds string Categories that associated with this event.
 */
function VidiunEntryScheduleEvent(){
	VidiunEntryScheduleEvent.super_.call(this);
	this.templateEntryId = null;
	this.entryIds = null;
	this.categoryIds = null;
}
module.exports.VidiunEntryScheduleEvent = VidiunEntryScheduleEvent;

util.inherits(VidiunEntryScheduleEvent, VidiunScheduleEvent);


/**
 * @param objects array  (readOnly).
 */
function VidiunEntryServerNodeListResponse(){
	VidiunEntryServerNodeListResponse.super_.call(this);
	this.objects = null;
}
module.exports.VidiunEntryServerNodeListResponse = VidiunEntryServerNodeListResponse;

util.inherits(VidiunEntryServerNodeListResponse, VidiunListResponse);


/**
 * @param contentLike string .
 * @param contentMultiLikeOr string .
 * @param contentMultiLikeAnd string .
 */
function VidiunEntryTranscriptAssetSearchItem(){
	VidiunEntryTranscriptAssetSearchItem.super_.call(this);
	this.contentLike = null;
	this.contentMultiLikeOr = null;
	this.contentMultiLikeAnd = null;
}
module.exports.VidiunEntryTranscriptAssetSearchItem = VidiunEntryTranscriptAssetSearchItem;

util.inherits(VidiunEntryTranscriptAssetSearchItem, VidiunSearchItem);


/**
 * @param eventType string .
 */
function VidiunEventCuePoint(){
	VidiunEventCuePoint.super_.call(this);
	this.eventType = null;
}
module.exports.VidiunEventCuePoint = VidiunEventCuePoint;

util.inherits(VidiunEventCuePoint, VidiunCuePoint);


/**
 */
function VidiunBooleanField(){
	VidiunBooleanField.super_.call(this);
}
module.exports.VidiunBooleanField = VidiunBooleanField;

util.inherits(VidiunBooleanField, VidiunBooleanValue);


/**
 * @param field VidiunBooleanField The field to be evaluated at runtime.
 */
function VidiunEventFieldCondition(){
	VidiunEventFieldCondition.super_.call(this);
	this.field = null;
}
module.exports.VidiunEventFieldCondition = VidiunEventFieldCondition;

util.inherits(VidiunEventFieldCondition, VidiunCondition);


/**
 * @param values array .
 * @param allowedValues array Used to restrict the values to close list.
 */
function VidiunEventNotificationArrayParameter(){
	VidiunEventNotificationArrayParameter.super_.call(this);
	this.values = null;
	this.allowedValues = null;
}
module.exports.VidiunEventNotificationArrayParameter = VidiunEventNotificationArrayParameter;

util.inherits(VidiunEventNotificationArrayParameter, VidiunEventNotificationParameter);


/**
 * @param templateId int .
 * @param contentParameters array Define the content dynamic parameters.
 */
function VidiunEventNotificationDispatchJobData(){
	VidiunEventNotificationDispatchJobData.super_.call(this);
	this.templateId = null;
	this.contentParameters = null;
}
module.exports.VidiunEventNotificationDispatchJobData = VidiunEventNotificationDispatchJobData;

util.inherits(VidiunEventNotificationDispatchJobData, VidiunJobData);


/**
 * @param objectId string .
 * @param scopeObjectType string .
 */
function VidiunEventNotificationScope(){
	VidiunEventNotificationScope.super_.call(this);
	this.objectId = null;
	this.scopeObjectType = null;
}
module.exports.VidiunEventNotificationScope = VidiunEventNotificationScope;

util.inherits(VidiunEventNotificationScope, VidiunScope);


/**
 * @param idEqual int .
 * @param idIn string .
 * @param partnerIdEqual int .
 * @param partnerIdIn string .
 * @param systemNameEqual string .
 * @param systemNameIn string .
 * @param typeEqual string .
 * @param typeIn string .
 * @param statusEqual int .
 * @param statusIn string .
 * @param createdAtGreaterThanOrEqual int .
 * @param createdAtLessThanOrEqual int .
 * @param updatedAtGreaterThanOrEqual int .
 * @param updatedAtLessThanOrEqual int .
 */
function VidiunEventNotificationTemplateBaseFilter(){
	VidiunEventNotificationTemplateBaseFilter.super_.call(this);
	this.idEqual = null;
	this.idIn = null;
	this.partnerIdEqual = null;
	this.partnerIdIn = null;
	this.systemNameEqual = null;
	this.systemNameIn = null;
	this.typeEqual = null;
	this.typeIn = null;
	this.statusEqual = null;
	this.statusIn = null;
	this.createdAtGreaterThanOrEqual = null;
	this.createdAtLessThanOrEqual = null;
	this.updatedAtGreaterThanOrEqual = null;
	this.updatedAtLessThanOrEqual = null;
}
module.exports.VidiunEventNotificationTemplateBaseFilter = VidiunEventNotificationTemplateBaseFilter;

util.inherits(VidiunEventNotificationTemplateBaseFilter, VidiunFilter);


/**
 * @param objects array  (readOnly).
 */
function VidiunEventNotificationTemplateListResponse(){
	VidiunEventNotificationTemplateListResponse.super_.call(this);
	this.objects = null;
}
module.exports.VidiunEventNotificationTemplateListResponse = VidiunEventNotificationTemplateListResponse;

util.inherits(VidiunEventNotificationTemplateListResponse, VidiunListResponse);


/**
 * @param modifiedColumns string Comma seperated column names to be tested.
 */
function VidiunEventObjectChangedCondition(){
	VidiunEventObjectChangedCondition.super_.call(this);
	this.modifiedColumns = null;
}
module.exports.VidiunEventObjectChangedCondition = VidiunEventObjectChangedCondition;

util.inherits(VidiunEventObjectChangedCondition, VidiunCondition);


/**
 * @param exampleUrl string Just an example.
 */
function VidiunExampleIntegrationJobProviderData(){
	VidiunExampleIntegrationJobProviderData.super_.call(this);
	this.exampleUrl = null;
}
module.exports.VidiunExampleIntegrationJobProviderData = VidiunExampleIntegrationJobProviderData;

util.inherits(VidiunExampleIntegrationJobProviderData, VidiunIntegrationJobProviderData);


/**
 * @param metadataProfileId int Metadata profile id to lookup the metadata object.
 * @param metadataObjectType string Metadata object type to lookup the metadata object.
 * @param xslt string The XSLT to execute.
 */
function VidiunExecuteMetadataXsltObjectTask(){
	VidiunExecuteMetadataXsltObjectTask.super_.call(this);
	this.metadataProfileId = null;
	this.metadataObjectType = null;
	this.xslt = null;
}
module.exports.VidiunExecuteMetadataXsltObjectTask = VidiunExecuteMetadataXsltObjectTask;

util.inherits(VidiunExecuteMetadataXsltObjectTask, VidiunObjectTask);


/**
 * @param objects array  (readOnly).
 */
function VidiunExternalMediaEntryListResponse(){
	VidiunExternalMediaEntryListResponse.super_.call(this);
	this.objects = null;
}
module.exports.VidiunExternalMediaEntryListResponse = VidiunExternalMediaEntryListResponse;

util.inherits(VidiunExternalMediaEntryListResponse, VidiunListResponse);


/**
 * @param publicCertificate string .
 */
function VidiunFairplayDrmProfile(){
	VidiunFairplayDrmProfile.super_.call(this);
	this.publicCertificate = null;
}
module.exports.VidiunFairplayDrmProfile = VidiunFairplayDrmProfile;

util.inherits(VidiunFairplayDrmProfile, VidiunDrmProfile);


/**
 * @param publicCertificate string For fairplay (and maybe in the future other drm providers) we need to return a public certificate to encrypt
 * the request from the player to the server.
 */
function VidiunFairplayEntryContextPluginData(){
	VidiunFairplayEntryContextPluginData.super_.call(this);
	this.publicCertificate = null;
}
module.exports.VidiunFairplayEntryContextPluginData = VidiunFairplayEntryContextPluginData;

util.inherits(VidiunFairplayEntryContextPluginData, VidiunPluginData);


/**
 * @param objects array  (readOnly).
 */
function VidiunFeatureStatusListResponse(){
	VidiunFeatureStatusListResponse.super_.call(this);
	this.objects = null;
}
module.exports.VidiunFeatureStatusListResponse = VidiunFeatureStatusListResponse;

util.inherits(VidiunFeatureStatusListResponse, VidiunListResponse);


/**
 * @param itemHandlingLimit int .
 * @param feedItemInfo VidiunFeedItemInfo .
 */
function VidiunFeedDropFolder(){
	VidiunFeedDropFolder.super_.call(this);
	this.itemHandlingLimit = null;
	this.feedItemInfo = null;
}
module.exports.VidiunFeedDropFolder = VidiunFeedDropFolder;

util.inherits(VidiunFeedDropFolder, VidiunDropFolder);


/**
 * @param hash string MD5 or Sha1 encrypted string.
 * @param feedXmlPath string Path of the original Feed content XML.
 */
function VidiunFeedDropFolderFile(){
	VidiunFeedDropFolderFile.super_.call(this);
	this.hash = null;
	this.feedXmlPath = null;
}
module.exports.VidiunFeedDropFolderFile = VidiunFeedDropFolderFile;

util.inherits(VidiunFeedDropFolderFile, VidiunDropFolderFile);


/**
 * @param objects array  (readOnly).
 */
function VidiunFileAssetListResponse(){
	VidiunFileAssetListResponse.super_.call(this);
	this.objects = null;
}
module.exports.VidiunFileAssetListResponse = VidiunFileAssetListResponse;

util.inherits(VidiunFileAssetListResponse, VidiunListResponse);


/**
 * @param partnerIdEqual int .
 * @param fileObjectTypeEqual string .
 * @param fileObjectTypeIn string .
 * @param objectIdEqual string .
 * @param objectIdIn string .
 * @param versionEqual string .
 * @param versionIn string .
 * @param objectSubTypeEqual int .
 * @param objectSubTypeIn string .
 * @param dcEqual string .
 * @param dcIn string .
 * @param originalEqual int .
 * @param createdAtGreaterThanOrEqual int .
 * @param createdAtLessThanOrEqual int .
 * @param updatedAtGreaterThanOrEqual int .
 * @param updatedAtLessThanOrEqual int .
 * @param readyAtGreaterThanOrEqual int .
 * @param readyAtLessThanOrEqual int .
 * @param syncTimeGreaterThanOrEqual int .
 * @param syncTimeLessThanOrEqual int .
 * @param statusEqual int .
 * @param statusIn string .
 * @param fileTypeEqual int .
 * @param fileTypeIn string .
 * @param linkedIdEqual int .
 * @param linkCountGreaterThanOrEqual int .
 * @param linkCountLessThanOrEqual int .
 * @param fileSizeGreaterThanOrEqual float .
 * @param fileSizeLessThanOrEqual float .
 */
function VidiunFileSyncBaseFilter(){
	VidiunFileSyncBaseFilter.super_.call(this);
	this.partnerIdEqual = null;
	this.fileObjectTypeEqual = null;
	this.fileObjectTypeIn = null;
	this.objectIdEqual = null;
	this.objectIdIn = null;
	this.versionEqual = null;
	this.versionIn = null;
	this.objectSubTypeEqual = null;
	this.objectSubTypeIn = null;
	this.dcEqual = null;
	this.dcIn = null;
	this.originalEqual = null;
	this.createdAtGreaterThanOrEqual = null;
	this.createdAtLessThanOrEqual = null;
	this.updatedAtGreaterThanOrEqual = null;
	this.updatedAtLessThanOrEqual = null;
	this.readyAtGreaterThanOrEqual = null;
	this.readyAtLessThanOrEqual = null;
	this.syncTimeGreaterThanOrEqual = null;
	this.syncTimeLessThanOrEqual = null;
	this.statusEqual = null;
	this.statusIn = null;
	this.fileTypeEqual = null;
	this.fileTypeIn = null;
	this.linkedIdEqual = null;
	this.linkCountGreaterThanOrEqual = null;
	this.linkCountLessThanOrEqual = null;
	this.fileSizeGreaterThanOrEqual = null;
	this.fileSizeLessThanOrEqual = null;
}
module.exports.VidiunFileSyncBaseFilter = VidiunFileSyncBaseFilter;

util.inherits(VidiunFileSyncBaseFilter, VidiunFilter);


/**
 * @param objects array  (readOnly).
 */
function VidiunFileSyncListResponse(){
	VidiunFileSyncListResponse.super_.call(this);
	this.objects = null;
}
module.exports.VidiunFileSyncListResponse = VidiunFileSyncListResponse;

util.inherits(VidiunFileSyncListResponse, VidiunListResponse);


/**
 */
function VidiunFlattenJobData(){
	VidiunFlattenJobData.super_.call(this);
}
module.exports.VidiunFlattenJobData = VidiunFlattenJobData;

util.inherits(VidiunFlattenJobData, VidiunJobData);


/**
 * @param objects array  (readOnly).
 */
function VidiunFlavorAssetListResponse(){
	VidiunFlavorAssetListResponse.super_.call(this);
	this.objects = null;
}
module.exports.VidiunFlavorAssetListResponse = VidiunFlavorAssetListResponse;

util.inherits(VidiunFlavorAssetListResponse, VidiunListResponse);


/**
 * @param objects array  (readOnly).
 */
function VidiunFlavorParamsListResponse(){
	VidiunFlavorParamsListResponse.super_.call(this);
	this.objects = null;
}
module.exports.VidiunFlavorParamsListResponse = VidiunFlavorParamsListResponse;

util.inherits(VidiunFlavorParamsListResponse, VidiunListResponse);


/**
 * @param objects array  (readOnly).
 */
function VidiunFlavorParamsOutputListResponse(){
	VidiunFlavorParamsOutputListResponse.super_.call(this);
	this.objects = null;
}
module.exports.VidiunFlavorParamsOutputListResponse = VidiunFlavorParamsOutputListResponse;

util.inherits(VidiunFlavorParamsOutputListResponse, VidiunListResponse);


/**
 * @param xml string .
 * @param resultParseData string .
 * @param resultParserType int .
 */
function VidiunGenericDistributionJobProviderData(){
	VidiunGenericDistributionJobProviderData.super_.call(this);
	this.xml = null;
	this.resultParseData = null;
	this.resultParserType = null;
}
module.exports.VidiunGenericDistributionJobProviderData = VidiunGenericDistributionJobProviderData;

util.inherits(VidiunGenericDistributionJobProviderData, VidiunDistributionJobProviderData);


/**
 * @param genericProviderId int  (insertOnly).
 * @param submitAction VidiunGenericDistributionProfileAction .
 * @param updateAction VidiunGenericDistributionProfileAction .
 * @param deleteAction VidiunGenericDistributionProfileAction .
 * @param fetchReportAction VidiunGenericDistributionProfileAction .
 * @param updateRequiredEntryFields string .
 * @param updateRequiredMetadataXPaths string .
 */
function VidiunGenericDistributionProfile(){
	VidiunGenericDistributionProfile.super_.call(this);
	this.genericProviderId = null;
	this.submitAction = null;
	this.updateAction = null;
	this.deleteAction = null;
	this.fetchReportAction = null;
	this.updateRequiredEntryFields = null;
	this.updateRequiredMetadataXPaths = null;
}
module.exports.VidiunGenericDistributionProfile = VidiunGenericDistributionProfile;

util.inherits(VidiunGenericDistributionProfile, VidiunDistributionProfile);


/**
 * @param idEqual int .
 * @param idIn string .
 * @param createdAtGreaterThanOrEqual int .
 * @param createdAtLessThanOrEqual int .
 * @param updatedAtGreaterThanOrEqual int .
 * @param updatedAtLessThanOrEqual int .
 * @param genericDistributionProviderIdEqual int .
 * @param genericDistributionProviderIdIn string .
 * @param actionEqual int .
 * @param actionIn string .
 */
function VidiunGenericDistributionProviderActionBaseFilter(){
	VidiunGenericDistributionProviderActionBaseFilter.super_.call(this);
	this.idEqual = null;
	this.idIn = null;
	this.createdAtGreaterThanOrEqual = null;
	this.createdAtLessThanOrEqual = null;
	this.updatedAtGreaterThanOrEqual = null;
	this.updatedAtLessThanOrEqual = null;
	this.genericDistributionProviderIdEqual = null;
	this.genericDistributionProviderIdIn = null;
	this.actionEqual = null;
	this.actionIn = null;
}
module.exports.VidiunGenericDistributionProviderActionBaseFilter = VidiunGenericDistributionProviderActionBaseFilter;

util.inherits(VidiunGenericDistributionProviderActionBaseFilter, VidiunFilter);


/**
 * @param objects array  (readOnly).
 */
function VidiunGenericDistributionProviderActionListResponse(){
	VidiunGenericDistributionProviderActionListResponse.super_.call(this);
	this.objects = null;
}
module.exports.VidiunGenericDistributionProviderActionListResponse = VidiunGenericDistributionProviderActionListResponse;

util.inherits(VidiunGenericDistributionProviderActionListResponse, VidiunListResponse);


/**
 * @param objects array  (readOnly).
 */
function VidiunGenericDistributionProviderListResponse(){
	VidiunGenericDistributionProviderListResponse.super_.call(this);
	this.objects = null;
}
module.exports.VidiunGenericDistributionProviderListResponse = VidiunGenericDistributionProviderListResponse;

util.inherits(VidiunGenericDistributionProviderListResponse, VidiunListResponse);


/**
 * @param feedDescription string feed description.
 * @param feedLandingPage string feed landing page (i.e publisher website).
 */
function VidiunGenericSyndicationFeed(){
	VidiunGenericSyndicationFeed.super_.call(this);
	this.feedDescription = null;
	this.feedLandingPage = null;
}
module.exports.VidiunGenericSyndicationFeed = VidiunGenericSyndicationFeed;

util.inherits(VidiunGenericSyndicationFeed, VidiunBaseSyndicationFeed);


/**
 * @param adultContent string .
 */
function VidiunGoogleVideoSyndicationFeed(){
	VidiunGoogleVideoSyndicationFeed.super_.call(this);
	this.adultContent = null;
}
module.exports.VidiunGoogleVideoSyndicationFeed = VidiunGoogleVideoSyndicationFeed;

util.inherits(VidiunGoogleVideoSyndicationFeed, VidiunBaseSyndicationFeed);


/**
 * @param objects array  (readOnly).
 */
function VidiunGroupUserListResponse(){
	VidiunGroupUserListResponse.super_.call(this);
	this.objects = null;
}
module.exports.VidiunGroupUserListResponse = VidiunGroupUserListResponse;

util.inherits(VidiunGroupUserListResponse, VidiunListResponse);


/**
 * @param hashName string hash name.
 * @param hashSecret string hash secret.
 */
function VidiunHashCondition(){
	VidiunHashCondition.super_.call(this);
	this.hashName = null;
	this.hashSecret = null;
}
module.exports.VidiunHashCondition = VidiunHashCondition;

util.inherits(VidiunHashCondition, VidiunCondition);


/**
 */
function VidiunHttpNotificationDataFields(){
	VidiunHttpNotificationDataFields.super_.call(this);
}
module.exports.VidiunHttpNotificationDataFields = VidiunHttpNotificationDataFields;

util.inherits(VidiunHttpNotificationDataFields, VidiunHttpNotificationData);


/**
 * @param content VidiunStringValue .
 */
function VidiunHttpNotificationDataText(){
	VidiunHttpNotificationDataText.super_.call(this);
	this.content = null;
}
module.exports.VidiunHttpNotificationDataText = VidiunHttpNotificationDataText;

util.inherits(VidiunHttpNotificationDataText, VidiunHttpNotificationData);


/**
 * @param apiObjectType string Vidiun API object type.
 * @param format int Data format.
 * @param ignoreNull bool Ignore null attributes during serialization.
 * @param code string PHP code.
 */
function VidiunHttpNotificationObjectData(){
	VidiunHttpNotificationObjectData.super_.call(this);
	this.apiObjectType = null;
	this.format = null;
	this.ignoreNull = null;
	this.code = null;
}
module.exports.VidiunHttpNotificationObjectData = VidiunHttpNotificationObjectData;

util.inherits(VidiunHttpNotificationObjectData, VidiunHttpNotificationData);


/**
 * @param url string Remote server URL.
 * @param method int Request method.
 * @param data VidiunHttpNotificationData Data to send.
 * @param timeout int The maximum number of seconds to allow cURL functions to execute.
 * @param connectTimeout int The number of seconds to wait while trying to connect.
 * Must be larger than zero.
 * @param username string A username to use for the connection.
 * @param password string A password to use for the connection.
 * @param authenticationMethod int The HTTP authentication method to use.
 * @param sslVersion int The SSL version (2 or 3) to use.
 * By default PHP will try to determine this itself, although in some cases this must be set manually.
 * @param sslCertificate string SSL certificate to verify the peer with.
 * @param sslCertificateType string The format of the certificate.
 * @param sslCertificatePassword string The password required to use the certificate.
 * @param sslEngine string The identifier for the crypto engine of the private SSL key specified in ssl key.
 * @param sslEngineDefault string The identifier for the crypto engine used for asymmetric crypto operations.
 * @param sslKeyType string The key type of the private SSL key specified in ssl key - PEM / DER / ENG.
 * @param sslKey string Private SSL key.
 * @param sslKeyPassword string The secret password needed to use the private SSL key specified in ssl key.
 * @param customHeaders array Adds a e-mail custom header.
 */
function VidiunHttpNotificationTemplate(){
	VidiunHttpNotificationTemplate.super_.call(this);
	this.url = null;
	this.method = null;
	this.data = null;
	this.timeout = null;
	this.connectTimeout = null;
	this.username = null;
	this.password = null;
	this.authenticationMethod = null;
	this.sslVersion = null;
	this.sslCertificate = null;
	this.sslCertificateType = null;
	this.sslCertificatePassword = null;
	this.sslEngine = null;
	this.sslEngineDefault = null;
	this.sslKeyType = null;
	this.sslKey = null;
	this.sslKeyPassword = null;
	this.customHeaders = null;
}
module.exports.VidiunHttpNotificationTemplate = VidiunHttpNotificationTemplate;

util.inherits(VidiunHttpNotificationTemplate, VidiunEventNotificationTemplate);


/**
 * @param feedDescription string feed description.
 * @param language string feed language.
 * @param feedLandingPage string feed landing page (i.e publisher website).
 * @param ownerName string author/publisher name.
 * @param ownerEmail string publisher email.
 * @param feedImageUrl string podcast thumbnail.
 * @param category string  (readOnly).
 * @param adultContent string .
 * @param feedAuthor string .
 * @param enforceOrder int true in case you want to enfore the palylist order on the.
 */
function VidiunITunesSyndicationFeed(){
	VidiunITunesSyndicationFeed.super_.call(this);
	this.feedDescription = null;
	this.language = null;
	this.feedLandingPage = null;
	this.ownerName = null;
	this.ownerEmail = null;
	this.feedImageUrl = null;
	this.category = null;
	this.adultContent = null;
	this.feedAuthor = null;
	this.enforceOrder = null;
}
module.exports.VidiunITunesSyndicationFeed = VidiunITunesSyndicationFeed;

util.inherits(VidiunITunesSyndicationFeed, VidiunBaseSyndicationFeed);


/**
 * @param srcFileUrl string .
 * @param destFileLocalPath string .
 * @param flavorAssetId string .
 * @param fileSize int .
 */
function VidiunImportJobData(){
	VidiunImportJobData.super_.call(this);
	this.srcFileUrl = null;
	this.destFileLocalPath = null;
	this.flavorAssetId = null;
	this.fileSize = null;
}
module.exports.VidiunImportJobData = VidiunImportJobData;

util.inherits(VidiunImportJobData, VidiunJobData);


/**
 * @param srcFileUrl string .
 * @param destFileLocalPath string .
 * @param metadataId int .
 */
function VidiunImportMetadataJobData(){
	VidiunImportMetadataJobData.super_.call(this);
	this.srcFileUrl = null;
	this.destFileLocalPath = null;
	this.metadataId = null;
}
module.exports.VidiunImportMetadataJobData = VidiunImportMetadataJobData;

util.inherits(VidiunImportMetadataJobData, VidiunJobData);


/**
 * @param indexIdGreaterThan int .
 */
function VidiunIndexAdvancedFilter(){
	VidiunIndexAdvancedFilter.super_.call(this);
	this.indexIdGreaterThan = null;
}
module.exports.VidiunIndexAdvancedFilter = VidiunIndexAdvancedFilter;

util.inherits(VidiunIndexAdvancedFilter, VidiunSearchItem);


/**
 * @param filter VidiunFilter The filter should return the list of objects that need to be reindexed.
 * @param lastIndexId int Indicates the last id that reindexed, used when the batch crached, to re-run from the last crash point.
 * @param shouldUpdate bool Indicates that the object columns and attributes values should be recalculated before reindexed.
 */
function VidiunIndexJobData(){
	VidiunIndexJobData.super_.call(this);
	this.filter = null;
	this.lastIndexId = null;
	this.shouldUpdate = null;
}
module.exports.VidiunIndexJobData = VidiunIndexJobData;

util.inherits(VidiunIndexJobData, VidiunJobData);


/**
 * @param changedCategoryId int .
 * @param deletedPrivacyContexts string .
 * @param addedPrivacyContexts string .
 */
function VidiunIndexTagsByPrivacyContextJobData(){
	VidiunIndexTagsByPrivacyContextJobData.super_.call(this);
	this.changedCategoryId = null;
	this.deletedPrivacyContexts = null;
	this.addedPrivacyContexts = null;
}
module.exports.VidiunIndexTagsByPrivacyContextJobData = VidiunIndexTagsByPrivacyContextJobData;

util.inherits(VidiunIndexTagsByPrivacyContextJobData, VidiunJobData);


/**
 * @param callbackNotificationUrl string  (readOnly).
 * @param providerType string .
 * @param providerData VidiunIntegrationJobProviderData Additional data that relevant for the provider only.
 * @param triggerType string .
 * @param triggerData VidiunIntegrationJobTriggerData Additional data that relevant for the trigger only.
 */
function VidiunIntegrationJobData(){
	VidiunIntegrationJobData.super_.call(this);
	this.callbackNotificationUrl = null;
	this.providerType = null;
	this.providerData = null;
	this.triggerType = null;
	this.triggerData = null;
}
module.exports.VidiunIntegrationJobData = VidiunIntegrationJobData;

util.inherits(VidiunIntegrationJobData, VidiunJobData);


/**
 * @param ipAddressRestrictionType int Ip address restriction type (Allow or deny).
 * @param ipAddressList string Comma separated list of ip address to allow to deny.
 */
function VidiunIpAddressRestriction(){
	VidiunIpAddressRestriction.super_.call(this);
	this.ipAddressRestrictionType = null;
	this.ipAddressList = null;
}
module.exports.VidiunIpAddressRestriction = VidiunIpAddressRestriction;

util.inherits(VidiunIpAddressRestriction, VidiunBaseRestriction);


/**
 * @param serviceToken string .
 */
function VidiunKontikiStorageProfile(){
	VidiunKontikiStorageProfile.super_.call(this);
	this.serviceToken = null;
}
module.exports.VidiunKontikiStorageProfile = VidiunKontikiStorageProfile;

util.inherits(VidiunKontikiStorageProfile, VidiunStorageProfile);


/**
 * @param objects array  (readOnly).
 */
function VidiunLikeListResponse(){
	VidiunLikeListResponse.super_.call(this);
	this.objects = null;
}
module.exports.VidiunLikeListResponse = VidiunLikeListResponse;

util.inherits(VidiunLikeListResponse, VidiunListResponse);


/**
 * @param limitFlavorsRestrictionType int Limit flavors restriction type (Allow or deny).
 * @param flavorParamsIds string Comma separated list of flavor params ids to allow to deny.
 */
function VidiunLimitFlavorsRestriction(){
	VidiunLimitFlavorsRestriction.super_.call(this);
	this.limitFlavorsRestrictionType = null;
	this.flavorParamsIds = null;
}
module.exports.VidiunLimitFlavorsRestriction = VidiunLimitFlavorsRestriction;

util.inherits(VidiunLimitFlavorsRestriction, VidiunBaseRestriction);


/**
 * @param objects array  (readOnly).
 */
function VidiunLiveChannelListResponse(){
	VidiunLiveChannelListResponse.super_.call(this);
	this.objects = null;
}
module.exports.VidiunLiveChannelListResponse = VidiunLiveChannelListResponse;

util.inherits(VidiunLiveChannelListResponse, VidiunListResponse);


/**
 * @param objects array  (readOnly).
 */
function VidiunLiveChannelSegmentListResponse(){
	VidiunLiveChannelSegmentListResponse.super_.call(this);
	this.objects = null;
}
module.exports.VidiunLiveChannelSegmentListResponse = VidiunLiveChannelSegmentListResponse;

util.inherits(VidiunLiveChannelSegmentListResponse, VidiunListResponse);


/**
 * @param entryId string .
 */
function VidiunLiveEntryScheduleResource(){
	VidiunLiveEntryScheduleResource.super_.call(this);
	this.entryId = null;
}
module.exports.VidiunLiveEntryScheduleResource = VidiunLiveEntryScheduleResource;

util.inherits(VidiunLiveEntryScheduleResource, VidiunScheduleResource);


/**
 * @param streams array parameters of the stream we got.
 */
function VidiunLiveEntryServerNode(){
	VidiunLiveEntryServerNode.super_.call(this);
	this.streams = null;
}
module.exports.VidiunLiveEntryServerNode = VidiunLiveEntryServerNode;

util.inherits(VidiunLiveEntryServerNode, VidiunEntryServerNode);


/**
 * @param timeReference int .
 * @param timeZoneOffset int .
 * @param entryIds string .
 * @param outputPath string .
 * @param recipientEmail string .
 */
function VidiunLiveReportExportJobData(){
	VidiunLiveReportExportJobData.super_.call(this);
	this.timeReference = null;
	this.timeZoneOffset = null;
	this.entryIds = null;
	this.outputPath = null;
	this.recipientEmail = null;
}
module.exports.VidiunLiveReportExportJobData = VidiunLiveReportExportJobData;

util.inherits(VidiunLiveReportExportJobData, VidiunJobData);


/**
 * @param objects VidiunLiveStats .
 */
function VidiunLiveStatsListResponse(){
	VidiunLiveStatsListResponse.super_.call(this);
	this.objects = null;
}
module.exports.VidiunLiveStatsListResponse = VidiunLiveStatsListResponse;

util.inherits(VidiunLiveStatsListResponse, VidiunListResponse);


/**
 * @param objects array  (readOnly).
 */
function VidiunLiveStreamListResponse(){
	VidiunLiveStreamListResponse.super_.call(this);
	this.objects = null;
}
module.exports.VidiunLiveStreamListResponse = VidiunLiveStreamListResponse;

util.inherits(VidiunLiveStreamListResponse, VidiunListResponse);


/**
 * @param userId string .
 * @param password string .
 * @param streamName string .
 * @param applicationName string .
 */
function VidiunLiveStreamPushPublishRTMPConfiguration(){
	VidiunLiveStreamPushPublishRTMPConfiguration.super_.call(this);
	this.userId = null;
	this.password = null;
	this.streamName = null;
	this.applicationName = null;
}
module.exports.VidiunLiveStreamPushPublishRTMPConfiguration = VidiunLiveStreamPushPublishRTMPConfiguration;

util.inherits(VidiunLiveStreamPushPublishRTMPConfiguration, VidiunLiveStreamPushPublishConfiguration);


/**
 */
function VidiunLocationScheduleResource(){
	VidiunLocationScheduleResource.super_.call(this);
}
module.exports.VidiunLocationScheduleResource = VidiunLocationScheduleResource;

util.inherits(VidiunLocationScheduleResource, VidiunScheduleResource);


/**
 * @param mailType string .
 * @param mailPriority int .
 * @param status int .
 * @param recipientName string .
 * @param recipientEmail string .
 * @param recipientId int vuserId.
 * @param fromName string .
 * @param fromEmail string .
 * @param bodyParams string .
 * @param subjectParams string .
 * @param templatePath string .
 * @param language string .
 * @param campaignId int .
 * @param minSendDate int .
 * @param isHtml bool .
 * @param separator string .
 */
function VidiunMailJobData(){
	VidiunMailJobData.super_.call(this);
	this.mailType = null;
	this.mailPriority = null;
	this.status = null;
	this.recipientName = null;
	this.recipientEmail = null;
	this.recipientId = null;
	this.fromName = null;
	this.fromEmail = null;
	this.bodyParams = null;
	this.subjectParams = null;
	this.templatePath = null;
	this.language = null;
	this.campaignId = null;
	this.minSendDate = null;
	this.isHtml = null;
	this.separator = null;
}
module.exports.VidiunMailJobData = VidiunMailJobData;

util.inherits(VidiunMailJobData, VidiunJobData);


/**
 * @param values array .
 */
function VidiunMatchCondition(){
	VidiunMatchCondition.super_.call(this);
	this.values = null;
}
module.exports.VidiunMatchCondition = VidiunMatchCondition;

util.inherits(VidiunMatchCondition, VidiunCondition);


/**
 * @param flavorAssetIdEqual string .
 */
function VidiunMediaInfoBaseFilter(){
	VidiunMediaInfoBaseFilter.super_.call(this);
	this.flavorAssetIdEqual = null;
}
module.exports.VidiunMediaInfoBaseFilter = VidiunMediaInfoBaseFilter;

util.inherits(VidiunMediaInfoBaseFilter, VidiunFilter);


/**
 * @param objects array  (readOnly).
 */
function VidiunMediaInfoListResponse(){
	VidiunMediaInfoListResponse.super_.call(this);
	this.objects = null;
}
module.exports.VidiunMediaInfoListResponse = VidiunMediaInfoListResponse;

util.inherits(VidiunMediaInfoListResponse, VidiunListResponse);


/**
 * @param objects array  (readOnly).
 */
function VidiunMediaListResponse(){
	VidiunMediaListResponse.super_.call(this);
	this.objects = null;
}
module.exports.VidiunMediaListResponse = VidiunMediaListResponse;

util.inherits(VidiunMediaListResponse, VidiunListResponse);


/**
 * @param objects array  (readOnly).
 */
function VidiunMetadataListResponse(){
	VidiunMetadataListResponse.super_.call(this);
	this.objects = null;
}
module.exports.VidiunMetadataListResponse = VidiunMetadataListResponse;

util.inherits(VidiunMetadataListResponse, VidiunListResponse);


/**
 * @param idEqual int .
 * @param partnerIdEqual int .
 * @param metadataObjectTypeEqual string .
 * @param metadataObjectTypeIn string .
 * @param versionEqual int .
 * @param nameEqual string .
 * @param systemNameEqual string .
 * @param systemNameIn string .
 * @param createdAtGreaterThanOrEqual int .
 * @param createdAtLessThanOrEqual int .
 * @param updatedAtGreaterThanOrEqual int .
 * @param updatedAtLessThanOrEqual int .
 * @param statusEqual int .
 * @param statusIn string .
 * @param createModeEqual int .
 * @param createModeNotEqual int .
 * @param createModeIn string .
 * @param createModeNotIn string .
 */
function VidiunMetadataProfileBaseFilter(){
	VidiunMetadataProfileBaseFilter.super_.call(this);
	this.idEqual = null;
	this.partnerIdEqual = null;
	this.metadataObjectTypeEqual = null;
	this.metadataObjectTypeIn = null;
	this.versionEqual = null;
	this.nameEqual = null;
	this.systemNameEqual = null;
	this.systemNameIn = null;
	this.createdAtGreaterThanOrEqual = null;
	this.createdAtLessThanOrEqual = null;
	this.updatedAtGreaterThanOrEqual = null;
	this.updatedAtLessThanOrEqual = null;
	this.statusEqual = null;
	this.statusIn = null;
	this.createModeEqual = null;
	this.createModeNotEqual = null;
	this.createModeIn = null;
	this.createModeNotIn = null;
}
module.exports.VidiunMetadataProfileBaseFilter = VidiunMetadataProfileBaseFilter;

util.inherits(VidiunMetadataProfileBaseFilter, VidiunFilter);


/**
 * @param objects array  (readOnly).
 */
function VidiunMetadataProfileFieldListResponse(){
	VidiunMetadataProfileFieldListResponse.super_.call(this);
	this.objects = null;
}
module.exports.VidiunMetadataProfileFieldListResponse = VidiunMetadataProfileFieldListResponse;

util.inherits(VidiunMetadataProfileFieldListResponse, VidiunListResponse);


/**
 * @param objects array  (readOnly).
 */
function VidiunMetadataProfileListResponse(){
	VidiunMetadataProfileListResponse.super_.call(this);
	this.objects = null;
}
module.exports.VidiunMetadataProfileListResponse = VidiunMetadataProfileListResponse;

util.inherits(VidiunMetadataProfileListResponse, VidiunListResponse);


/**
 */
function VidiunMetadataResponseProfileMapping(){
	VidiunMetadataResponseProfileMapping.super_.call(this);
}
module.exports.VidiunMetadataResponseProfileMapping = VidiunMetadataResponseProfileMapping;

util.inherits(VidiunMetadataResponseProfileMapping, VidiunResponseProfileMapping);


/**
 * @param objects array  (readOnly).
 */
function VidiunMixListResponse(){
	VidiunMixListResponse.super_.call(this);
	this.objects = null;
}
module.exports.VidiunMixListResponse = VidiunMixListResponse;

util.inherits(VidiunMixListResponse, VidiunListResponse);


/**
 * @param objects array  (readOnly).
 */
function VidiunModerationFlagListResponse(){
	VidiunModerationFlagListResponse.super_.call(this);
	this.objects = null;
}
module.exports.VidiunModerationFlagListResponse = VidiunModerationFlagListResponse;

util.inherits(VidiunModerationFlagListResponse, VidiunListResponse);


/**
 * @param addRemoveType int Should the object task add or remove categories?.
 * @param categoryIds array The list of category ids to add or remove.
 */
function VidiunModifyCategoriesObjectTask(){
	VidiunModifyCategoriesObjectTask.super_.call(this);
	this.addRemoveType = null;
	this.categoryIds = null;
}
module.exports.VidiunModifyCategoriesObjectTask = VidiunModifyCategoriesObjectTask;

util.inherits(VidiunModifyCategoriesObjectTask, VidiunObjectTask);


/**
 * @param srcCategoryId int Source category id.
 * @param destCategoryId int Destination category id.
 * @param lastMovedCategoryId int Saves the last category id that its entries moved completely
 * In case of crash the batch will restart from that point.
 * @param lastMovedCategoryPageIndex int Saves the last page index of the child categories filter pager
 * In case of crash the batch will restart from that point.
 * @param lastMovedCategoryEntryPageIndex int Saves the last page index of the category entries filter pager
 * In case of crash the batch will restart from that point.
 * @param moveFromChildren bool All entries from all child categories will be moved as well.
 * @param destCategoryFullIds string Destination categories fallback ids.
 */
function VidiunMoveCategoryEntriesJobData(){
	VidiunMoveCategoryEntriesJobData.super_.call(this);
	this.srcCategoryId = null;
	this.destCategoryId = null;
	this.lastMovedCategoryId = null;
	this.lastMovedCategoryPageIndex = null;
	this.lastMovedCategoryEntryPageIndex = null;
	this.moveFromChildren = null;
	this.destCategoryFullIds = null;
}
module.exports.VidiunMoveCategoryEntriesJobData = VidiunMoveCategoryEntriesJobData;

util.inherits(VidiunMoveCategoryEntriesJobData, VidiunJobData);


/**
 * @param userId string .
 * @param type int .
 * @param typeAsString string .
 * @param objectId string .
 * @param status int .
 * @param data string .
 * @param numberOfAttempts int .
 * @param notificationResult string .
 * @param objType int .
 */
function VidiunNotificationJobData(){
	VidiunNotificationJobData.super_.call(this);
	this.userId = null;
	this.type = null;
	this.typeAsString = null;
	this.objectId = null;
	this.status = null;
	this.data = null;
	this.numberOfAttempts = null;
	this.notificationResult = null;
	this.objType = null;
}
module.exports.VidiunNotificationJobData = VidiunNotificationJobData;

util.inherits(VidiunNotificationJobData, VidiunJobData);


/**
 * @param objects array  (readOnly).
 */
function VidiunObjectListResponse(){
	VidiunObjectListResponse.super_.call(this);
	this.objects = null;
}
module.exports.VidiunObjectListResponse = VidiunObjectListResponse;

util.inherits(VidiunObjectListResponse, VidiunListResponse);


/**
 * @param conditions array .
 */
function VidiunOrCondition(){
	VidiunOrCondition.super_.call(this);
	this.conditions = null;
}
module.exports.VidiunOrCondition = VidiunOrCondition;

util.inherits(VidiunOrCondition, VidiunCondition);


/**
 * @param captionAssetId string .
 */
function VidiunParseCaptionAssetJobData(){
	VidiunParseCaptionAssetJobData.super_.call(this);
	this.captionAssetId = null;
}
module.exports.VidiunParseCaptionAssetJobData = VidiunParseCaptionAssetJobData;

util.inherits(VidiunParseCaptionAssetJobData, VidiunJobData);


/**
 * @param multiLanaguageCaptionAssetId string .
 * @param entryId string .
 * @param fileLocation string .
 */
function VidiunParseMultiLanguageCaptionAssetJobData(){
	VidiunParseMultiLanguageCaptionAssetJobData.super_.call(this);
	this.multiLanaguageCaptionAssetId = null;
	this.entryId = null;
	this.fileLocation = null;
}
module.exports.VidiunParseMultiLanguageCaptionAssetJobData = VidiunParseMultiLanguageCaptionAssetJobData;

util.inherits(VidiunParseMultiLanguageCaptionAssetJobData, VidiunJobData);


/**
 * @param idEqual int .
 * @param idIn string .
 * @param idNotIn string .
 * @param nameLike string .
 * @param nameMultiLikeOr string .
 * @param nameMultiLikeAnd string .
 * @param nameEqual string .
 * @param statusEqual int .
 * @param statusIn string .
 * @param partnerPackageEqual int .
 * @param partnerPackageGreaterThanOrEqual int .
 * @param partnerPackageLessThanOrEqual int .
 * @param partnerPackageIn string .
 * @param partnerGroupTypeEqual int .
 * @param partnerNameDescriptionWebsiteAdminNameAdminEmailLike string .
 */
function VidiunPartnerBaseFilter(){
	VidiunPartnerBaseFilter.super_.call(this);
	this.idEqual = null;
	this.idIn = null;
	this.idNotIn = null;
	this.nameLike = null;
	this.nameMultiLikeOr = null;
	this.nameMultiLikeAnd = null;
	this.nameEqual = null;
	this.statusEqual = null;
	this.statusIn = null;
	this.partnerPackageEqual = null;
	this.partnerPackageGreaterThanOrEqual = null;
	this.partnerPackageLessThanOrEqual = null;
	this.partnerPackageIn = null;
	this.partnerGroupTypeEqual = null;
	this.partnerNameDescriptionWebsiteAdminNameAdminEmailLike = null;
}
module.exports.VidiunPartnerBaseFilter = VidiunPartnerBaseFilter;

util.inherits(VidiunPartnerBaseFilter, VidiunFilter);


/**
 * @param objects array  (readOnly).
 */
function VidiunPartnerListResponse(){
	VidiunPartnerListResponse.super_.call(this);
	this.objects = null;
}
module.exports.VidiunPartnerListResponse = VidiunPartnerListResponse;

util.inherits(VidiunPartnerListResponse, VidiunListResponse);


/**
 * @param total VidiunVarPartnerUsageItem .
 * @param objects array .
 */
function VidiunPartnerUsageListResponse(){
	VidiunPartnerUsageListResponse.super_.call(this);
	this.total = null;
	this.objects = null;
}
module.exports.VidiunPartnerUsageListResponse = VidiunPartnerUsageListResponse;

util.inherits(VidiunPartnerUsageListResponse, VidiunListResponse);


/**
 * @param objects array  (readOnly).
 */
function VidiunPermissionItemListResponse(){
	VidiunPermissionItemListResponse.super_.call(this);
	this.objects = null;
}
module.exports.VidiunPermissionItemListResponse = VidiunPermissionItemListResponse;

util.inherits(VidiunPermissionItemListResponse, VidiunListResponse);


/**
 * @param objects array  (readOnly).
 */
function VidiunPermissionListResponse(){
	VidiunPermissionListResponse.super_.call(this);
	this.objects = null;
}
module.exports.VidiunPermissionListResponse = VidiunPermissionListResponse;

util.inherits(VidiunPermissionListResponse, VidiunListResponse);


/**
 * @param copyCount int .
 * @param copyEnablers array .
 */
function VidiunPlayReadyCopyRight(){
	VidiunPlayReadyCopyRight.super_.call(this);
	this.copyCount = null;
	this.copyEnablers = null;
}
module.exports.VidiunPlayReadyCopyRight = VidiunPlayReadyCopyRight;

util.inherits(VidiunPlayReadyCopyRight, VidiunPlayReadyRight);


/**
 * @param analogVideoOPL int .
 * @param analogVideoOutputProtectionList array .
 * @param compressedDigitalAudioOPL int .
 * @param compressedDigitalVideoOPL int .
 * @param digitalAudioOutputProtectionList array .
 * @param uncompressedDigitalAudioOPL int .
 * @param uncompressedDigitalVideoOPL int .
 * @param firstPlayExpiration int .
 * @param playEnablers array .
 */
function VidiunPlayReadyPlayRight(){
	VidiunPlayReadyPlayRight.super_.call(this);
	this.analogVideoOPL = null;
	this.analogVideoOutputProtectionList = null;
	this.compressedDigitalAudioOPL = null;
	this.compressedDigitalVideoOPL = null;
	this.digitalAudioOutputProtectionList = null;
	this.uncompressedDigitalAudioOPL = null;
	this.uncompressedDigitalVideoOPL = null;
	this.firstPlayExpiration = null;
	this.playEnablers = null;
}
module.exports.VidiunPlayReadyPlayRight = VidiunPlayReadyPlayRight;

util.inherits(VidiunPlayReadyPlayRight, VidiunPlayReadyRight);


/**
 * @param keySeed string .
 */
function VidiunPlayReadyProfile(){
	VidiunPlayReadyProfile.super_.call(this);
	this.keySeed = null;
}
module.exports.VidiunPlayReadyProfile = VidiunPlayReadyProfile;

util.inherits(VidiunPlayReadyProfile, VidiunDrmProfile);


/**
 * @param objects array  (readOnly).
 */
function VidiunPlaylistListResponse(){
	VidiunPlaylistListResponse.super_.call(this);
	this.objects = null;
}
module.exports.VidiunPlaylistListResponse = VidiunPlaylistListResponse;

util.inherits(VidiunPlaylistListResponse, VidiunListResponse);


/**
 * @param streamID string .
 * @param backupStreamID string .
 * @param rtmp string .
 * @param encoderIP string .
 * @param backupEncoderIP string .
 * @param encoderPassword string .
 * @param encoderUsername string .
 * @param endDate int .
 * @param returnVal string .
 * @param mediaType int .
 * @param primaryBroadcastingUrl string .
 * @param secondaryBroadcastingUrl string .
 * @param streamName string .
 */
function VidiunProvisionJobData(){
	VidiunProvisionJobData.super_.call(this);
	this.streamID = null;
	this.backupStreamID = null;
	this.rtmp = null;
	this.encoderIP = null;
	this.backupEncoderIP = null;
	this.encoderPassword = null;
	this.encoderUsername = null;
	this.endDate = null;
	this.returnVal = null;
	this.mediaType = null;
	this.primaryBroadcastingUrl = null;
	this.secondaryBroadcastingUrl = null;
	this.streamName = null;
}
module.exports.VidiunProvisionJobData = VidiunProvisionJobData;

util.inherits(VidiunProvisionJobData, VidiunJobData);


/**
 * @param apiObjectType string Vidiun API object type.
 * @param objectFormat int Vidiun Object format.
 * @param responseProfileId int Vidiun response-profile id.
 */
function VidiunPushNotificationTemplate(){
	VidiunPushNotificationTemplate.super_.call(this);
	this.apiObjectType = null;
	this.objectFormat = null;
	this.responseProfileId = null;
}
module.exports.VidiunPushNotificationTemplate = VidiunPushNotificationTemplate;

util.inherits(VidiunPushNotificationTemplate, VidiunEventNotificationTemplate);


/**
 * @param optionalAnswers map Array of key value answerKey->optionAnswer objects.
 * @param hint string .
 * @param question string .
 * @param explanation string .
 */
function VidiunQuestionCuePoint(){
	VidiunQuestionCuePoint.super_.call(this);
	this.optionalAnswers = null;
	this.hint = null;
	this.question = null;
	this.explanation = null;
}
module.exports.VidiunQuestionCuePoint = VidiunQuestionCuePoint;

util.inherits(VidiunQuestionCuePoint, VidiunCuePoint);


/**
 * @param isQuiz int .
 */
function VidiunQuizAdvancedFilter(){
	VidiunQuizAdvancedFilter.super_.call(this);
	this.isQuiz = null;
}
module.exports.VidiunQuizAdvancedFilter = VidiunQuizAdvancedFilter;

util.inherits(VidiunQuizAdvancedFilter, VidiunSearchItem);


/**
 * @param objects array  (readOnly).
 */
function VidiunQuizListResponse(){
	VidiunQuizListResponse.super_.call(this);
	this.objects = null;
}
module.exports.VidiunQuizListResponse = VidiunQuizListResponse;

util.inherits(VidiunQuizListResponse, VidiunListResponse);


/**
 * @param score float  (readOnly).
 */
function VidiunQuizUserEntry(){
	VidiunQuizUserEntry.super_.call(this);
	this.score = null;
}
module.exports.VidiunQuizUserEntry = VidiunQuizUserEntry;

util.inherits(VidiunQuizUserEntry, VidiunUserEntry);


/**
 */
function VidiunRecalculateCacheJobData(){
	VidiunRecalculateCacheJobData.super_.call(this);
}
module.exports.VidiunRecalculateCacheJobData = VidiunRecalculateCacheJobData;

util.inherits(VidiunRecalculateCacheJobData, VidiunJobData);


/**
 */
function VidiunRemoteDropFolder(){
	VidiunRemoteDropFolder.super_.call(this);
}
module.exports.VidiunRemoteDropFolder = VidiunRemoteDropFolder;

util.inherits(VidiunRemoteDropFolder, VidiunDropFolder);


/**
 * @param objects array  (readOnly).
 */
function VidiunRemotePathListResponse(){
	VidiunRemotePathListResponse.super_.call(this);
	this.objects = null;
}
module.exports.VidiunRemotePathListResponse = VidiunRemotePathListResponse;

util.inherits(VidiunRemotePathListResponse, VidiunListResponse);


/**
 * @param keywords string Search keywords to filter objects.
 * @param searchInTags bool Search keywords in onjects tags.
 * @param searchInAdminTags bool Search keywords in onjects admin tags.
 * @param categories string Search onjects in specified categories.
 * @param timeZoneOffset int Time zone offset in minutes.
 * @param interval string Aggregated results according to interval.
 */
function VidiunReportInputFilter(){
	VidiunReportInputFilter.super_.call(this);
	this.keywords = null;
	this.searchInTags = null;
	this.searchInAdminTags = null;
	this.categories = null;
	this.timeZoneOffset = null;
	this.interval = null;
}
module.exports.VidiunReportInputFilter = VidiunReportInputFilter;

util.inherits(VidiunReportInputFilter, VidiunReportInputBaseFilter);


/**
 * @param objects array  (readOnly).
 */
function VidiunReportListResponse(){
	VidiunReportListResponse.super_.call(this);
	this.objects = null;
}
module.exports.VidiunReportListResponse = VidiunReportListResponse;

util.inherits(VidiunReportListResponse, VidiunListResponse);


/**
 * @param idEqual int .
 * @param idIn string .
 * @param systemNameEqual string .
 * @param systemNameIn string .
 * @param createdAtGreaterThanOrEqual int .
 * @param createdAtLessThanOrEqual int .
 * @param updatedAtGreaterThanOrEqual int .
 * @param updatedAtLessThanOrEqual int .
 * @param statusEqual int .
 * @param statusIn string .
 */
function VidiunResponseProfileBaseFilter(){
	VidiunResponseProfileBaseFilter.super_.call(this);
	this.idEqual = null;
	this.idIn = null;
	this.systemNameEqual = null;
	this.systemNameIn = null;
	this.createdAtGreaterThanOrEqual = null;
	this.createdAtLessThanOrEqual = null;
	this.updatedAtGreaterThanOrEqual = null;
	this.updatedAtLessThanOrEqual = null;
	this.statusEqual = null;
	this.statusIn = null;
}
module.exports.VidiunResponseProfileBaseFilter = VidiunResponseProfileBaseFilter;

util.inherits(VidiunResponseProfileBaseFilter, VidiunFilter);


/**
 * @param id int Auto generated numeric identifier.
 * @param systemName string Unique system name.
 */
function VidiunResponseProfileHolder(){
	VidiunResponseProfileHolder.super_.call(this);
	this.id = null;
	this.systemName = null;
}
module.exports.VidiunResponseProfileHolder = VidiunResponseProfileHolder;

util.inherits(VidiunResponseProfileHolder, VidiunBaseResponseProfile);


/**
 * @param objects array  (readOnly).
 */
function VidiunResponseProfileListResponse(){
	VidiunResponseProfileListResponse.super_.call(this);
	this.objects = null;
}
module.exports.VidiunResponseProfileListResponse = VidiunResponseProfileListResponse;

util.inherits(VidiunResponseProfileListResponse, VidiunListResponse);


/**
 * @param idEqual int .
 * @param idIn string .
 * @param idNotIn string .
 * @param parentIdEqual int .
 * @param parentIdIn string .
 * @param parentIdNotIn string .
 * @param statusEqual int .
 * @param statusIn string .
 * @param startDateGreaterThanOrEqual int .
 * @param startDateLessThanOrEqual int .
 * @param endDateGreaterThanOrEqual int .
 * @param endDateLessThanOrEqual int .
 * @param referenceIdEqual string .
 * @param referenceIdIn string .
 * @param ownerIdEqual string .
 * @param ownerIdIn string .
 * @param priorityEqual int .
 * @param priorityIn string .
 * @param priorityGreaterThanOrEqual int .
 * @param priorityLessThanOrEqual int .
 * @param recurrenceTypeEqual int .
 * @param recurrenceTypeIn string .
 * @param tagsLike string .
 * @param tagsMultiLikeOr string .
 * @param tagsMultiLikeAnd string .
 * @param createdAtGreaterThanOrEqual int .
 * @param createdAtLessThanOrEqual int .
 * @param updatedAtGreaterThanOrEqual int .
 * @param updatedAtLessThanOrEqual int .
 */
function VidiunScheduleEventBaseFilter(){
	VidiunScheduleEventBaseFilter.super_.call(this);
	this.idEqual = null;
	this.idIn = null;
	this.idNotIn = null;
	this.parentIdEqual = null;
	this.parentIdIn = null;
	this.parentIdNotIn = null;
	this.statusEqual = null;
	this.statusIn = null;
	this.startDateGreaterThanOrEqual = null;
	this.startDateLessThanOrEqual = null;
	this.endDateGreaterThanOrEqual = null;
	this.endDateLessThanOrEqual = null;
	this.referenceIdEqual = null;
	this.referenceIdIn = null;
	this.ownerIdEqual = null;
	this.ownerIdIn = null;
	this.priorityEqual = null;
	this.priorityIn = null;
	this.priorityGreaterThanOrEqual = null;
	this.priorityLessThanOrEqual = null;
	this.recurrenceTypeEqual = null;
	this.recurrenceTypeIn = null;
	this.tagsLike = null;
	this.tagsMultiLikeOr = null;
	this.tagsMultiLikeAnd = null;
	this.createdAtGreaterThanOrEqual = null;
	this.createdAtLessThanOrEqual = null;
	this.updatedAtGreaterThanOrEqual = null;
	this.updatedAtLessThanOrEqual = null;
}
module.exports.VidiunScheduleEventBaseFilter = VidiunScheduleEventBaseFilter;

util.inherits(VidiunScheduleEventBaseFilter, VidiunFilter);


/**
 * @param objects array  (readOnly).
 */
function VidiunScheduleEventListResponse(){
	VidiunScheduleEventListResponse.super_.call(this);
	this.objects = null;
}
module.exports.VidiunScheduleEventListResponse = VidiunScheduleEventListResponse;

util.inherits(VidiunScheduleEventListResponse, VidiunListResponse);


/**
 * @param eventIdEqual int .
 * @param eventIdIn string .
 * @param resourceIdEqual int .
 * @param resourceIdIn string .
 * @param createdAtGreaterThanOrEqual int .
 * @param createdAtLessThanOrEqual int .
 * @param updatedAtGreaterThanOrEqual int .
 * @param updatedAtLessThanOrEqual int .
 */
function VidiunScheduleEventResourceBaseFilter(){
	VidiunScheduleEventResourceBaseFilter.super_.call(this);
	this.eventIdEqual = null;
	this.eventIdIn = null;
	this.resourceIdEqual = null;
	this.resourceIdIn = null;
	this.createdAtGreaterThanOrEqual = null;
	this.createdAtLessThanOrEqual = null;
	this.updatedAtGreaterThanOrEqual = null;
	this.updatedAtLessThanOrEqual = null;
}
module.exports.VidiunScheduleEventResourceBaseFilter = VidiunScheduleEventResourceBaseFilter;

util.inherits(VidiunScheduleEventResourceBaseFilter, VidiunFilter);


/**
 * @param objects array  (readOnly).
 */
function VidiunScheduleEventResourceListResponse(){
	VidiunScheduleEventResourceListResponse.super_.call(this);
	this.objects = null;
}
module.exports.VidiunScheduleEventResourceListResponse = VidiunScheduleEventResourceListResponse;

util.inherits(VidiunScheduleEventResourceListResponse, VidiunListResponse);


/**
 * @param idEqual int .
 * @param idIn string .
 * @param idNotIn string .
 * @param parentIdEqual int .
 * @param parentIdIn string .
 * @param systemNameEqual string .
 * @param systemNameIn string .
 * @param statusEqual int .
 * @param statusIn string .
 * @param tagsLike string .
 * @param tagsMultiLikeOr string .
 * @param tagsMultiLikeAnd string .
 * @param createdAtGreaterThanOrEqual int .
 * @param createdAtLessThanOrEqual int .
 * @param updatedAtGreaterThanOrEqual int .
 * @param updatedAtLessThanOrEqual int .
 */
function VidiunScheduleResourceBaseFilter(){
	VidiunScheduleResourceBaseFilter.super_.call(this);
	this.idEqual = null;
	this.idIn = null;
	this.idNotIn = null;
	this.parentIdEqual = null;
	this.parentIdIn = null;
	this.systemNameEqual = null;
	this.systemNameIn = null;
	this.statusEqual = null;
	this.statusIn = null;
	this.tagsLike = null;
	this.tagsMultiLikeOr = null;
	this.tagsMultiLikeAnd = null;
	this.createdAtGreaterThanOrEqual = null;
	this.createdAtLessThanOrEqual = null;
	this.updatedAtGreaterThanOrEqual = null;
	this.updatedAtLessThanOrEqual = null;
}
module.exports.VidiunScheduleResourceBaseFilter = VidiunScheduleResourceBaseFilter;

util.inherits(VidiunScheduleResourceBaseFilter, VidiunFilter);


/**
 * @param objects array  (readOnly).
 */
function VidiunScheduleResourceListResponse(){
	VidiunScheduleResourceListResponse.super_.call(this);
	this.objects = null;
}
module.exports.VidiunScheduleResourceListResponse = VidiunScheduleResourceListResponse;

util.inherits(VidiunScheduleResourceListResponse, VidiunListResponse);


/**
 * @param maxResults int .
 * @param resultsFilePath string .
 * @param referenceTime int .
 */
function VidiunScheduledTaskJobData(){
	VidiunScheduledTaskJobData.super_.call(this);
	this.maxResults = null;
	this.resultsFilePath = null;
	this.referenceTime = null;
}
module.exports.VidiunScheduledTaskJobData = VidiunScheduledTaskJobData;

util.inherits(VidiunScheduledTaskJobData, VidiunJobData);


/**
 * @param idEqual int .
 * @param idIn string .
 * @param partnerIdEqual int .
 * @param partnerIdIn string .
 * @param systemNameEqual string .
 * @param systemNameIn string .
 * @param statusEqual int .
 * @param statusIn string .
 * @param createdAtGreaterThanOrEqual int .
 * @param createdAtLessThanOrEqual int .
 * @param updatedAtGreaterThanOrEqual int .
 * @param updatedAtLessThanOrEqual int .
 * @param lastExecutionStartedAtGreaterThanOrEqual int .
 * @param lastExecutionStartedAtLessThanOrEqual int .
 */
function VidiunScheduledTaskProfileBaseFilter(){
	VidiunScheduledTaskProfileBaseFilter.super_.call(this);
	this.idEqual = null;
	this.idIn = null;
	this.partnerIdEqual = null;
	this.partnerIdIn = null;
	this.systemNameEqual = null;
	this.systemNameIn = null;
	this.statusEqual = null;
	this.statusIn = null;
	this.createdAtGreaterThanOrEqual = null;
	this.createdAtLessThanOrEqual = null;
	this.updatedAtGreaterThanOrEqual = null;
	this.updatedAtLessThanOrEqual = null;
	this.lastExecutionStartedAtGreaterThanOrEqual = null;
	this.lastExecutionStartedAtLessThanOrEqual = null;
}
module.exports.VidiunScheduledTaskProfileBaseFilter = VidiunScheduledTaskProfileBaseFilter;

util.inherits(VidiunScheduledTaskProfileBaseFilter, VidiunFilter);


/**
 * @param objects array  (readOnly).
 */
function VidiunScheduledTaskProfileListResponse(){
	VidiunScheduledTaskProfileListResponse.super_.call(this);
	this.objects = null;
}
module.exports.VidiunScheduledTaskProfileListResponse = VidiunScheduledTaskProfileListResponse;

util.inherits(VidiunScheduledTaskProfileListResponse, VidiunListResponse);


/**
 * @param objects array  (readOnly).
 */
function VidiunSchedulerListResponse(){
	VidiunSchedulerListResponse.super_.call(this);
	this.objects = null;
}
module.exports.VidiunSchedulerListResponse = VidiunSchedulerListResponse;

util.inherits(VidiunSchedulerListResponse, VidiunListResponse);


/**
 * @param objects array  (readOnly).
 */
function VidiunSchedulerWorkerListResponse(){
	VidiunSchedulerWorkerListResponse.super_.call(this);
	this.objects = null;
}
module.exports.VidiunSchedulerWorkerListResponse = VidiunSchedulerWorkerListResponse;

util.inherits(VidiunSchedulerWorkerListResponse, VidiunListResponse);


/**
 * @param field string .
 * @param value string .
 */
function VidiunSearchCondition(){
	VidiunSearchCondition.super_.call(this);
	this.field = null;
	this.value = null;
}
module.exports.VidiunSearchCondition = VidiunSearchCondition;

util.inherits(VidiunSearchCondition, VidiunSearchItem);


/**
 * @param type int .
 * @param items array .
 */
function VidiunSearchOperator(){
	VidiunSearchOperator.super_.call(this);
	this.type = null;
	this.items = null;
}
module.exports.VidiunSearchOperator = VidiunSearchOperator;

util.inherits(VidiunSearchOperator, VidiunSearchItem);


/**
 * @param idEqual int .
 * @param idIn string .
 * @param createdAtGreaterThanOrEqual int .
 * @param createdAtLessThanOrEqual int .
 * @param updatedAtGreaterThanOrEqual int .
 * @param updatedAtLessThanOrEqual int .
 * @param heartbeatTimeGreaterThanOrEqual int .
 * @param heartbeatTimeLessThanOrEqual int .
 * @param nameEqual string .
 * @param nameIn string .
 * @param systemNameEqual string .
 * @param systemNameIn string .
 * @param hostNameLike string .
 * @param hostNameMultiLikeOr string .
 * @param hostNameMultiLikeAnd string .
 * @param statusEqual int .
 * @param statusIn string .
 * @param typeEqual string .
 * @param typeIn string .
 * @param tagsLike string .
 * @param tagsMultiLikeOr string .
 * @param tagsMultiLikeAnd string .
 * @param dcEqual int .
 * @param dcIn string .
 * @param parentIdEqual int .
 * @param parentIdIn string .
 */
function VidiunServerNodeBaseFilter(){
	VidiunServerNodeBaseFilter.super_.call(this);
	this.idEqual = null;
	this.idIn = null;
	this.createdAtGreaterThanOrEqual = null;
	this.createdAtLessThanOrEqual = null;
	this.updatedAtGreaterThanOrEqual = null;
	this.updatedAtLessThanOrEqual = null;
	this.heartbeatTimeGreaterThanOrEqual = null;
	this.heartbeatTimeLessThanOrEqual = null;
	this.nameEqual = null;
	this.nameIn = null;
	this.systemNameEqual = null;
	this.systemNameIn = null;
	this.hostNameLike = null;
	this.hostNameMultiLikeOr = null;
	this.hostNameMultiLikeAnd = null;
	this.statusEqual = null;
	this.statusIn = null;
	this.typeEqual = null;
	this.typeIn = null;
	this.tagsLike = null;
	this.tagsMultiLikeOr = null;
	this.tagsMultiLikeAnd = null;
	this.dcEqual = null;
	this.dcIn = null;
	this.parentIdEqual = null;
	this.parentIdIn = null;
}
module.exports.VidiunServerNodeBaseFilter = VidiunServerNodeBaseFilter;

util.inherits(VidiunServerNodeBaseFilter, VidiunFilter);


/**
 * @param objects array  (readOnly).
 */
function VidiunServerNodeListResponse(){
	VidiunServerNodeListResponse.super_.call(this);
	this.objects = null;
}
module.exports.VidiunServerNodeListResponse = VidiunServerNodeListResponse;

util.inherits(VidiunServerNodeListResponse, VidiunListResponse);


/**
 */
function VidiunSessionRestriction(){
	VidiunSessionRestriction.super_.call(this);
}
module.exports.VidiunSessionRestriction = VidiunSessionRestriction;

util.inherits(VidiunSessionRestriction, VidiunBaseRestriction);


/**
 * @param idEqual int .
 * @param idIn string .
 * @param createdAtGreaterThanOrEqual int .
 * @param createdAtLessThanOrEqual int .
 * @param updatedAtGreaterThanOrEqual int .
 * @param updatedAtLessThanOrEqual int .
 * @param expiresAtGreaterThanOrEqual int .
 * @param expiresAtLessThanOrEqual int .
 * @param partnerIdEqual int .
 * @param partnerIdIn string .
 * @param userIdEqual string .
 * @param userIdIn string .
 * @param systemNameEqual string .
 * @param systemNameIn string .
 * @param statusEqual int .
 * @param statusIn string .
 */
function VidiunShortLinkBaseFilter(){
	VidiunShortLinkBaseFilter.super_.call(this);
	this.idEqual = null;
	this.idIn = null;
	this.createdAtGreaterThanOrEqual = null;
	this.createdAtLessThanOrEqual = null;
	this.updatedAtGreaterThanOrEqual = null;
	this.updatedAtLessThanOrEqual = null;
	this.expiresAtGreaterThanOrEqual = null;
	this.expiresAtLessThanOrEqual = null;
	this.partnerIdEqual = null;
	this.partnerIdIn = null;
	this.userIdEqual = null;
	this.userIdIn = null;
	this.systemNameEqual = null;
	this.systemNameIn = null;
	this.statusEqual = null;
	this.statusIn = null;
}
module.exports.VidiunShortLinkBaseFilter = VidiunShortLinkBaseFilter;

util.inherits(VidiunShortLinkBaseFilter, VidiunFilter);


/**
 * @param objects array  (readOnly).
 */
function VidiunShortLinkListResponse(){
	VidiunShortLinkListResponse.super_.call(this);
	this.objects = null;
}
module.exports.VidiunShortLinkListResponse = VidiunShortLinkListResponse;

util.inherits(VidiunShortLinkListResponse, VidiunListResponse);


/**
 * @param siteRestrictionType int The site restriction type (allow or deny).
 * @param siteList string Comma separated list of sites (domains) to allow or deny.
 */
function VidiunSiteRestriction(){
	VidiunSiteRestriction.super_.call(this);
	this.siteRestrictionType = null;
	this.siteList = null;
}
module.exports.VidiunSiteRestriction = VidiunSiteRestriction;

util.inherits(VidiunSiteRestriction, VidiunBaseRestriction);


/**
 */
function VidiunStorageAddAction(){
	VidiunStorageAddAction.super_.call(this);
}
module.exports.VidiunStorageAddAction = VidiunStorageAddAction;

util.inherits(VidiunStorageAddAction, VidiunRuleAction);


/**
 * @param storageId string Storage profile id.
 */
function VidiunStorageExportObjectTask(){
	VidiunStorageExportObjectTask.super_.call(this);
	this.storageId = null;
}
module.exports.VidiunStorageExportObjectTask = VidiunStorageExportObjectTask;

util.inherits(VidiunStorageExportObjectTask, VidiunObjectTask);


/**
 * @param serverUrl string .
 * @param serverUsername string .
 * @param serverPassword string .
 * @param serverPrivateKey string .
 * @param serverPublicKey string .
 * @param serverPassPhrase string .
 * @param ftpPassiveMode bool .
 * @param srcFileSyncLocalPath string .
 * @param srcFileSyncId string .
 * @param destFileSyncStoredPath string .
 */
function VidiunStorageJobData(){
	VidiunStorageJobData.super_.call(this);
	this.serverUrl = null;
	this.serverUsername = null;
	this.serverPassword = null;
	this.serverPrivateKey = null;
	this.serverPublicKey = null;
	this.serverPassPhrase = null;
	this.ftpPassiveMode = null;
	this.srcFileSyncLocalPath = null;
	this.srcFileSyncId = null;
	this.destFileSyncStoredPath = null;
}
module.exports.VidiunStorageJobData = VidiunStorageJobData;

util.inherits(VidiunStorageJobData, VidiunJobData);


/**
 * @param idEqual int .
 * @param idIn string .
 * @param createdAtGreaterThanOrEqual int .
 * @param createdAtLessThanOrEqual int .
 * @param updatedAtGreaterThanOrEqual int .
 * @param updatedAtLessThanOrEqual int .
 * @param partnerIdEqual int .
 * @param partnerIdIn string .
 * @param systemNameEqual string .
 * @param systemNameIn string .
 * @param statusEqual int .
 * @param statusIn string .
 * @param protocolEqual string .
 * @param protocolIn string .
 */
function VidiunStorageProfileBaseFilter(){
	VidiunStorageProfileBaseFilter.super_.call(this);
	this.idEqual = null;
	this.idIn = null;
	this.createdAtGreaterThanOrEqual = null;
	this.createdAtLessThanOrEqual = null;
	this.updatedAtGreaterThanOrEqual = null;
	this.updatedAtLessThanOrEqual = null;
	this.partnerIdEqual = null;
	this.partnerIdIn = null;
	this.systemNameEqual = null;
	this.systemNameIn = null;
	this.statusEqual = null;
	this.statusIn = null;
	this.protocolEqual = null;
	this.protocolIn = null;
}
module.exports.VidiunStorageProfileBaseFilter = VidiunStorageProfileBaseFilter;

util.inherits(VidiunStorageProfileBaseFilter, VidiunFilter);


/**
 * @param objects array  (readOnly).
 */
function VidiunStorageProfileListResponse(){
	VidiunStorageProfileListResponse.super_.call(this);
	this.objects = null;
}
module.exports.VidiunStorageProfileListResponse = VidiunStorageProfileListResponse;

util.inherits(VidiunStorageProfileListResponse, VidiunListResponse);


/**
 * @param categoryId int category id.
 * @param lastUpdatedCategoryEntryCreatedAt int Saves the last category entry creation date that was updated
 * In case of crash the batch will restart from that point.
 * @param lastUpdatedCategoryCreatedAt int Saves the last sub category creation date that was updated
 * In case of crash the batch will restart from that point.
 */
function VidiunSyncCategoryPrivacyContextJobData(){
	VidiunSyncCategoryPrivacyContextJobData.super_.call(this);
	this.categoryId = null;
	this.lastUpdatedCategoryEntryCreatedAt = null;
	this.lastUpdatedCategoryCreatedAt = null;
}
module.exports.VidiunSyncCategoryPrivacyContextJobData = VidiunSyncCategoryPrivacyContextJobData;

util.inherits(VidiunSyncCategoryPrivacyContextJobData, VidiunJobData);


/**
 * @param xsl string .
 * @param feedId string  (readOnly).
 */
function VidiunSyndicationDistributionProfile(){
	VidiunSyndicationDistributionProfile.super_.call(this);
	this.xsl = null;
	this.feedId = null;
}
module.exports.VidiunSyndicationDistributionProfile = VidiunSyndicationDistributionProfile;

util.inherits(VidiunSyndicationDistributionProfile, VidiunDistributionProfile);


/**
 */
function VidiunSyndicationDistributionProvider(){
	VidiunSyndicationDistributionProvider.super_.call(this);
}
module.exports.VidiunSyndicationDistributionProvider = VidiunSyndicationDistributionProvider;

util.inherits(VidiunSyndicationDistributionProvider, VidiunDistributionProvider);


/**
 * @param overagePrice float .
 * @param overageUnit float .
 */
function VidiunSystemPartnerOveragedLimit(){
	VidiunSystemPartnerOveragedLimit.super_.call(this);
	this.overagePrice = null;
	this.overageUnit = null;
}
module.exports.VidiunSystemPartnerOveragedLimit = VidiunSystemPartnerOveragedLimit;

util.inherits(VidiunSystemPartnerOveragedLimit, VidiunSystemPartnerLimit);


/**
 * @param fromDate int Date range from.
 * @param toDate int Date range to.
 * @param timezoneOffset int Time zone offset.
 */
function VidiunSystemPartnerUsageFilter(){
	VidiunSystemPartnerUsageFilter.super_.call(this);
	this.fromDate = null;
	this.toDate = null;
	this.timezoneOffset = null;
}
module.exports.VidiunSystemPartnerUsageFilter = VidiunSystemPartnerUsageFilter;

util.inherits(VidiunSystemPartnerUsageFilter, VidiunFilter);


/**
 * @param objects array .
 */
function VidiunSystemPartnerUsageListResponse(){
	VidiunSystemPartnerUsageListResponse.super_.call(this);
	this.objects = null;
}
module.exports.VidiunSystemPartnerUsageListResponse = VidiunSystemPartnerUsageListResponse;

util.inherits(VidiunSystemPartnerUsageListResponse, VidiunListResponse);


/**
 * @param objectTypeEqual string .
 * @param tagEqual string .
 * @param tagStartsWith string .
 * @param instanceCountEqual int .
 * @param instanceCountIn int .
 */
function VidiunTagFilter(){
	VidiunTagFilter.super_.call(this);
	this.objectTypeEqual = null;
	this.tagEqual = null;
	this.tagStartsWith = null;
	this.instanceCountEqual = null;
	this.instanceCountIn = null;
}
module.exports.VidiunTagFilter = VidiunTagFilter;

util.inherits(VidiunTagFilter, VidiunFilter);


/**
 * @param objects array  (readOnly).
 */
function VidiunTagListResponse(){
	VidiunTagListResponse.super_.call(this);
	this.objects = null;
}
module.exports.VidiunTagListResponse = VidiunTagListResponse;

util.inherits(VidiunTagListResponse, VidiunListResponse);


/**
 * @param objects array  (readOnly).
 */
function VidiunThumbAssetListResponse(){
	VidiunThumbAssetListResponse.super_.call(this);
	this.objects = null;
}
module.exports.VidiunThumbAssetListResponse = VidiunThumbAssetListResponse;

util.inherits(VidiunThumbAssetListResponse, VidiunListResponse);


/**
 * @param assetId string .
 * @param description string .
 * @param title string .
 * @param subType int The sub type of the ThumbCuePoint.
 */
function VidiunThumbCuePoint(){
	VidiunThumbCuePoint.super_.call(this);
	this.assetId = null;
	this.description = null;
	this.title = null;
	this.subType = null;
}
module.exports.VidiunThumbCuePoint = VidiunThumbCuePoint;

util.inherits(VidiunThumbCuePoint, VidiunCuePoint);


/**
 * @param objects array  (readOnly).
 */
function VidiunThumbParamsListResponse(){
	VidiunThumbParamsListResponse.super_.call(this);
	this.objects = null;
}
module.exports.VidiunThumbParamsListResponse = VidiunThumbParamsListResponse;

util.inherits(VidiunThumbParamsListResponse, VidiunListResponse);


/**
 * @param objects array  (readOnly).
 */
function VidiunThumbParamsOutputListResponse(){
	VidiunThumbParamsOutputListResponse.super_.call(this);
	this.objects = null;
}
module.exports.VidiunThumbParamsOutputListResponse = VidiunThumbParamsOutputListResponse;

util.inherits(VidiunThumbParamsOutputListResponse, VidiunListResponse);


/**
 * @param objects array  (readOnly).
 */
function VidiunTrackEntryListResponse(){
	VidiunTrackEntryListResponse.super_.call(this);
	this.objects = null;
}
module.exports.VidiunTrackEntryListResponse = VidiunTrackEntryListResponse;

util.inherits(VidiunTrackEntryListResponse, VidiunListResponse);


/**
 * @param objects array  (readOnly).
 */
function VidiunTranscriptAssetListResponse(){
	VidiunTranscriptAssetListResponse.super_.call(this);
	this.objects = null;
}
module.exports.VidiunTranscriptAssetListResponse = VidiunTranscriptAssetListResponse;

util.inherits(VidiunTranscriptAssetListResponse, VidiunListResponse);


/**
 * @param srcXslPath string .
 * @param srcVersion int .
 * @param destVersion int .
 * @param destXsdPath string .
 * @param metadataProfileId int .
 */
function VidiunTransformMetadataJobData(){
	VidiunTransformMetadataJobData.super_.call(this);
	this.srcXslPath = null;
	this.srcVersion = null;
	this.destVersion = null;
	this.destXsdPath = null;
	this.metadataProfileId = null;
}
module.exports.VidiunTransformMetadataJobData = VidiunTransformMetadataJobData;

util.inherits(VidiunTransformMetadataJobData, VidiunJobData);


/**
 * @param category string  (readOnly).
 */
function VidiunTubeMogulSyndicationFeed(){
	VidiunTubeMogulSyndicationFeed.super_.call(this);
	this.category = null;
}
module.exports.VidiunTubeMogulSyndicationFeed = VidiunTubeMogulSyndicationFeed;

util.inherits(VidiunTubeMogulSyndicationFeed, VidiunBaseSyndicationFeed);


/**
 * @param objects array  (readOnly).
 */
function VidiunUiConfAdminListResponse(){
	VidiunUiConfAdminListResponse.super_.call(this);
	this.objects = null;
}
module.exports.VidiunUiConfAdminListResponse = VidiunUiConfAdminListResponse;

util.inherits(VidiunUiConfAdminListResponse, VidiunListResponse);


/**
 * @param idEqual int .
 * @param idIn string .
 * @param nameLike string .
 * @param partnerIdEqual int .
 * @param partnerIdIn string .
 * @param objTypeEqual int .
 * @param objTypeIn string .
 * @param tagsMultiLikeOr string .
 * @param tagsMultiLikeAnd string .
 * @param createdAtGreaterThanOrEqual int .
 * @param createdAtLessThanOrEqual int .
 * @param updatedAtGreaterThanOrEqual int .
 * @param updatedAtLessThanOrEqual int .
 * @param creationModeEqual int .
 * @param creationModeIn string .
 * @param versionEqual string .
 * @param versionMultiLikeOr string .
 * @param versionMultiLikeAnd string .
 * @param partnerTagsMultiLikeOr string .
 * @param partnerTagsMultiLikeAnd string .
 */
function VidiunUiConfBaseFilter(){
	VidiunUiConfBaseFilter.super_.call(this);
	this.idEqual = null;
	this.idIn = null;
	this.nameLike = null;
	this.partnerIdEqual = null;
	this.partnerIdIn = null;
	this.objTypeEqual = null;
	this.objTypeIn = null;
	this.tagsMultiLikeOr = null;
	this.tagsMultiLikeAnd = null;
	this.createdAtGreaterThanOrEqual = null;
	this.createdAtLessThanOrEqual = null;
	this.updatedAtGreaterThanOrEqual = null;
	this.updatedAtLessThanOrEqual = null;
	this.creationModeEqual = null;
	this.creationModeIn = null;
	this.versionEqual = null;
	this.versionMultiLikeOr = null;
	this.versionMultiLikeAnd = null;
	this.partnerTagsMultiLikeOr = null;
	this.partnerTagsMultiLikeAnd = null;
}
module.exports.VidiunUiConfBaseFilter = VidiunUiConfBaseFilter;

util.inherits(VidiunUiConfBaseFilter, VidiunFilter);


/**
 * @param objects array  (readOnly).
 */
function VidiunUiConfListResponse(){
	VidiunUiConfListResponse.super_.call(this);
	this.objects = null;
}
module.exports.VidiunUiConfListResponse = VidiunUiConfListResponse;

util.inherits(VidiunUiConfListResponse, VidiunListResponse);


/**
 * @param idEqual string .
 * @param idIn string .
 * @param userIdEqual string .
 * @param statusEqual int .
 * @param statusIn string .
 * @param fileNameEqual string .
 * @param fileSizeEqual float .
 */
function VidiunUploadTokenBaseFilter(){
	VidiunUploadTokenBaseFilter.super_.call(this);
	this.idEqual = null;
	this.idIn = null;
	this.userIdEqual = null;
	this.statusEqual = null;
	this.statusIn = null;
	this.fileNameEqual = null;
	this.fileSizeEqual = null;
}
module.exports.VidiunUploadTokenBaseFilter = VidiunUploadTokenBaseFilter;

util.inherits(VidiunUploadTokenBaseFilter, VidiunFilter);


/**
 * @param objects array  (readOnly).
 */
function VidiunUploadTokenListResponse(){
	VidiunUploadTokenListResponse.super_.call(this);
	this.objects = null;
}
module.exports.VidiunUploadTokenListResponse = VidiunUploadTokenListResponse;

util.inherits(VidiunUploadTokenListResponse, VidiunListResponse);


/**
 * @param headerData string headerData.
 * @param headerSign string headerSign.
 * @param timeout int timeout.
 * @param salt string salt.
 */
function VidiunUrlRecognizerAkamaiG2O(){
	VidiunUrlRecognizerAkamaiG2O.super_.call(this);
	this.headerData = null;
	this.headerSign = null;
	this.timeout = null;
	this.salt = null;
}
module.exports.VidiunUrlRecognizerAkamaiG2O = VidiunUrlRecognizerAkamaiG2O;

util.inherits(VidiunUrlRecognizerAkamaiG2O, VidiunUrlRecognizer);


/**
 * @param paramName string param.
 * @param rootDir string .
 */
function VidiunUrlTokenizerAkamaiHttp(){
	VidiunUrlTokenizerAkamaiHttp.super_.call(this);
	this.paramName = null;
	this.rootDir = null;
}
module.exports.VidiunUrlTokenizerAkamaiHttp = VidiunUrlTokenizerAkamaiHttp;

util.inherits(VidiunUrlTokenizerAkamaiHttp, VidiunUrlTokenizer);


/**
 * @param profile string profile.
 * @param type string Type.
 * @param aifp string .
 * @param usePrefix bool .
 */
function VidiunUrlTokenizerAkamaiRtmp(){
	VidiunUrlTokenizerAkamaiRtmp.super_.call(this);
	this.profile = null;
	this.type = null;
	this.aifp = null;
	this.usePrefix = null;
}
module.exports.VidiunUrlTokenizerAkamaiRtmp = VidiunUrlTokenizerAkamaiRtmp;

util.inherits(VidiunUrlTokenizerAkamaiRtmp, VidiunUrlTokenizer);


/**
 * @param host string host.
 * @param cpcode int Cp-Code.
 */
function VidiunUrlTokenizerAkamaiRtsp(){
	VidiunUrlTokenizerAkamaiRtsp.super_.call(this);
	this.host = null;
	this.cpcode = null;
}
module.exports.VidiunUrlTokenizerAkamaiRtsp = VidiunUrlTokenizerAkamaiRtsp;

util.inherits(VidiunUrlTokenizerAkamaiRtsp, VidiunUrlTokenizer);


/**
 * @param paramName string .
 * @param aclPostfix string .
 * @param customPostfixes string .
 * @param useCookieHosts string .
 * @param rootDir string .
 */
function VidiunUrlTokenizerAkamaiSecureHd(){
	VidiunUrlTokenizerAkamaiSecureHd.super_.call(this);
	this.paramName = null;
	this.aclPostfix = null;
	this.customPostfixes = null;
	this.useCookieHosts = null;
	this.rootDir = null;
}
module.exports.VidiunUrlTokenizerAkamaiSecureHd = VidiunUrlTokenizerAkamaiSecureHd;

util.inherits(VidiunUrlTokenizerAkamaiSecureHd, VidiunUrlTokenizer);


/**
 * @param hashPatternRegex string hashPatternRegex.
 */
function VidiunUrlTokenizerBitGravity(){
	VidiunUrlTokenizerBitGravity.super_.call(this);
	this.hashPatternRegex = null;
}
module.exports.VidiunUrlTokenizerBitGravity = VidiunUrlTokenizerBitGravity;

util.inherits(VidiunUrlTokenizerBitGravity, VidiunUrlTokenizer);


/**
 * @param keyPairId string .
 * @param rootDir string .
 * @param limitIpAddress bool .
 */
function VidiunUrlTokenizerCloudFront(){
	VidiunUrlTokenizerCloudFront.super_.call(this);
	this.keyPairId = null;
	this.rootDir = null;
	this.limitIpAddress = null;
}
module.exports.VidiunUrlTokenizerCloudFront = VidiunUrlTokenizerCloudFront;

util.inherits(VidiunUrlTokenizerCloudFront, VidiunUrlTokenizer);


/**
 * @param paramName string paramName.
 * @param expiryName string expiryName.
 * @param gen string gen.
 */
function VidiunUrlTokenizerLevel3(){
	VidiunUrlTokenizerLevel3.super_.call(this);
	this.paramName = null;
	this.expiryName = null;
	this.gen = null;
}
module.exports.VidiunUrlTokenizerLevel3 = VidiunUrlTokenizerLevel3;

util.inherits(VidiunUrlTokenizerLevel3, VidiunUrlTokenizer);


/**
 */
function VidiunUrlTokenizerLimeLight(){
	VidiunUrlTokenizerLimeLight.super_.call(this);
}
module.exports.VidiunUrlTokenizerLimeLight = VidiunUrlTokenizerLimeLight;

util.inherits(VidiunUrlTokenizerLimeLight, VidiunUrlTokenizer);


/**
 * @param hdsPaths string hdsPaths.
 * @param paramName string tokenParamName.
 * @param authPrefix string secure URL prefix.
 */
function VidiunUrlTokenizerVelocix(){
	VidiunUrlTokenizerVelocix.super_.call(this);
	this.hdsPaths = null;
	this.paramName = null;
	this.authPrefix = null;
}
module.exports.VidiunUrlTokenizerVelocix = VidiunUrlTokenizerVelocix;

util.inherits(VidiunUrlTokenizerVelocix, VidiunUrlTokenizer);


/**
 * @param tokenizationFormat int .
 */
function VidiunUrlTokenizerVnpt(){
	VidiunUrlTokenizerVnpt.super_.call(this);
	this.tokenizationFormat = null;
}
module.exports.VidiunUrlTokenizerVnpt = VidiunUrlTokenizerVnpt;

util.inherits(VidiunUrlTokenizerVnpt, VidiunUrlTokenizer);


/**
 * @param userAgentRestrictionType int User agent restriction type (Allow or deny).
 * @param userAgentRegexList string A comma seperated list of user agent regular expressions.
 */
function VidiunUserAgentRestriction(){
	VidiunUserAgentRestriction.super_.call(this);
	this.userAgentRestrictionType = null;
	this.userAgentRegexList = null;
}
module.exports.VidiunUserAgentRestriction = VidiunUserAgentRestriction;

util.inherits(VidiunUserAgentRestriction, VidiunBaseRestriction);


/**
 * @param idEqual int .
 * @param idIn string .
 * @param idNotIn string .
 * @param entryIdEqual string .
 * @param entryIdIn string .
 * @param entryIdNotIn string .
 * @param userIdEqual string .
 * @param userIdIn string .
 * @param userIdNotIn string .
 * @param statusEqual string .
 * @param createdAtLessThanOrEqual int .
 * @param createdAtGreaterThanOrEqual int .
 * @param updatedAtLessThanOrEqual int .
 * @param updatedAtGreaterThanOrEqual int .
 * @param typeEqual string .
 */
function VidiunUserEntryBaseFilter(){
	VidiunUserEntryBaseFilter.super_.call(this);
	this.idEqual = null;
	this.idIn = null;
	this.idNotIn = null;
	this.entryIdEqual = null;
	this.entryIdIn = null;
	this.entryIdNotIn = null;
	this.userIdEqual = null;
	this.userIdIn = null;
	this.userIdNotIn = null;
	this.statusEqual = null;
	this.createdAtLessThanOrEqual = null;
	this.createdAtGreaterThanOrEqual = null;
	this.updatedAtLessThanOrEqual = null;
	this.updatedAtGreaterThanOrEqual = null;
	this.typeEqual = null;
}
module.exports.VidiunUserEntryBaseFilter = VidiunUserEntryBaseFilter;

util.inherits(VidiunUserEntryBaseFilter, VidiunFilter);


/**
 * @param objects array  (readOnly).
 */
function VidiunUserEntryListResponse(){
	VidiunUserEntryListResponse.super_.call(this);
	this.objects = null;
}
module.exports.VidiunUserEntryListResponse = VidiunUserEntryListResponse;

util.inherits(VidiunUserEntryListResponse, VidiunListResponse);


/**
 * @param objects array  (readOnly).
 */
function VidiunUserListResponse(){
	VidiunUserListResponse.super_.call(this);
	this.objects = null;
}
module.exports.VidiunUserListResponse = VidiunUserListResponse;

util.inherits(VidiunUserListResponse, VidiunListResponse);


/**
 * @param objects array  (readOnly).
 */
function VidiunUserLoginDataListResponse(){
	VidiunUserLoginDataListResponse.super_.call(this);
	this.objects = null;
}
module.exports.VidiunUserLoginDataListResponse = VidiunUserLoginDataListResponse;

util.inherits(VidiunUserLoginDataListResponse, VidiunListResponse);


/**
 * @param roleIds string Comma separated list of role ids.
 */
function VidiunUserRoleCondition(){
	VidiunUserRoleCondition.super_.call(this);
	this.roleIds = null;
}
module.exports.VidiunUserRoleCondition = VidiunUserRoleCondition;

util.inherits(VidiunUserRoleCondition, VidiunCondition);


/**
 * @param objects array  (readOnly).
 */
function VidiunUserRoleListResponse(){
	VidiunUserRoleListResponse.super_.call(this);
	this.objects = null;
}
module.exports.VidiunUserRoleListResponse = VidiunUserRoleListResponse;

util.inherits(VidiunUserRoleListResponse, VidiunListResponse);


/**
 * @param edgeServerIds string Comma separated list of edge servers to validate are active.
 */
function VidiunValidateActiveEdgeCondition(){
	VidiunValidateActiveEdgeCondition.super_.call(this);
	this.edgeServerIds = null;
}
module.exports.VidiunValidateActiveEdgeCondition = VidiunValidateActiveEdgeCondition;

util.inherits(VidiunValidateActiveEdgeCondition, VidiunCondition);


/**
 */
function VidiunVarPartnerUsageTotalItem(){
	VidiunVarPartnerUsageTotalItem.super_.call(this);
}
module.exports.VidiunVarPartnerUsageTotalItem = VidiunVarPartnerUsageTotalItem;

util.inherits(VidiunVarPartnerUsageTotalItem, VidiunVarPartnerUsageItem);


/**
 * @param srcFilePath string .
 * @param flavorAssetId string .
 * @param scanResult int .
 * @param virusFoundAction int .
 */
function VidiunVirusScanJobData(){
	VidiunVirusScanJobData.super_.call(this);
	this.srcFilePath = null;
	this.flavorAssetId = null;
	this.scanResult = null;
	this.virusFoundAction = null;
}
module.exports.VidiunVirusScanJobData = VidiunVirusScanJobData;

util.inherits(VidiunVirusScanJobData, VidiunJobData);


/**
 * @param idEqual int .
 * @param idIn string .
 * @param createdAtGreaterThanOrEqual int .
 * @param createdAtLessThanOrEqual int .
 * @param updatedAtGreaterThanOrEqual int .
 * @param updatedAtLessThanOrEqual int .
 * @param partnerIdEqual int .
 * @param partnerIdIn string .
 * @param nameEqual string .
 * @param nameLike string .
 * @param statusEqual int .
 * @param statusIn string .
 * @param engineTypeEqual string .
 * @param engineTypeIn string .
 */
function VidiunVirusScanProfileBaseFilter(){
	VidiunVirusScanProfileBaseFilter.super_.call(this);
	this.idEqual = null;
	this.idIn = null;
	this.createdAtGreaterThanOrEqual = null;
	this.createdAtLessThanOrEqual = null;
	this.updatedAtGreaterThanOrEqual = null;
	this.updatedAtLessThanOrEqual = null;
	this.partnerIdEqual = null;
	this.partnerIdIn = null;
	this.nameEqual = null;
	this.nameLike = null;
	this.statusEqual = null;
	this.statusIn = null;
	this.engineTypeEqual = null;
	this.engineTypeIn = null;
}
module.exports.VidiunVirusScanProfileBaseFilter = VidiunVirusScanProfileBaseFilter;

util.inherits(VidiunVirusScanProfileBaseFilter, VidiunFilter);


/**
 * @param objects array  (readOnly).
 */
function VidiunVirusScanProfileListResponse(){
	VidiunVirusScanProfileListResponse.super_.call(this);
	this.objects = null;
}
module.exports.VidiunVirusScanProfileListResponse = VidiunVirusScanProfileListResponse;

util.inherits(VidiunVirusScanProfileListResponse, VidiunListResponse);


/**
 * @param entryId string Entry ID.
 * @param flavorAssetId string Flavor ID.
 * @param transcriptId string input Transcript-asset ID.
 * @param captionAssetFormats string Caption formats.
 * @param apiKey string Api key for service provider (readOnly).
 * @param apiPassword string Api key for service provider (readOnly).
 * @param spokenLanguage string Transcript content language.
 * @param fileLocation string Transcript Content location (readOnly).
 * @param replaceMediaContent bool should replace remote media content.
 */
function VidiunVoicebaseJobProviderData(){
	VidiunVoicebaseJobProviderData.super_.call(this);
	this.entryId = null;
	this.flavorAssetId = null;
	this.transcriptId = null;
	this.captionAssetFormats = null;
	this.apiKey = null;
	this.apiPassword = null;
	this.spokenLanguage = null;
	this.fileLocation = null;
	this.replaceMediaContent = null;
}
module.exports.VidiunVoicebaseJobProviderData = VidiunVoicebaseJobProviderData;

util.inherits(VidiunVoicebaseJobProviderData, VidiunIntegrationJobProviderData);


/**
 * @param webexUserId string .
 * @param webexPassword string .
 * @param webexSiteId int .
 * @param webexPartnerId string .
 * @param webexServiceUrl string .
 * @param webexHostIdMetadataFieldName string .
 */
function VidiunWebexDropFolder(){
	VidiunWebexDropFolder.super_.call(this);
	this.webexUserId = null;
	this.webexPassword = null;
	this.webexSiteId = null;
	this.webexPartnerId = null;
	this.webexServiceUrl = null;
	this.webexHostIdMetadataFieldName = null;
}
module.exports.VidiunWebexDropFolder = VidiunWebexDropFolder;

util.inherits(VidiunWebexDropFolder, VidiunDropFolder);


/**
 * @param recordingId int .
 * @param webexHostId string .
 * @param description string .
 * @param confId string .
 * @param contentUrl string .
 */
function VidiunWebexDropFolderFile(){
	VidiunWebexDropFolderFile.super_.call(this);
	this.recordingId = null;
	this.webexHostId = null;
	this.description = null;
	this.confId = null;
	this.contentUrl = null;
}
module.exports.VidiunWebexDropFolderFile = VidiunWebexDropFolderFile;

util.inherits(VidiunWebexDropFolderFile, VidiunDropFolderFile);


/**
 * @param key string .
 * @param iv string .
 * @param owner string .
 * @param portal string .
 * @param maxGop int .
 * @param regServerHost string .
 */
function VidiunWidevineProfile(){
	VidiunWidevineProfile.super_.call(this);
	this.key = null;
	this.iv = null;
	this.owner = null;
	this.portal = null;
	this.maxGop = null;
	this.regServerHost = null;
}
module.exports.VidiunWidevineProfile = VidiunWidevineProfile;

util.inherits(VidiunWidevineProfile, VidiunDrmProfile);


/**
 * @param syncMode int .
 * @param wvAssetIds string .
 * @param modifiedAttributes string .
 * @param monitorSyncCompletion int .
 */
function VidiunWidevineRepositorySyncJobData(){
	VidiunWidevineRepositorySyncJobData.super_.call(this);
	this.syncMode = null;
	this.wvAssetIds = null;
	this.modifiedAttributes = null;
	this.monitorSyncCompletion = null;
}
module.exports.VidiunWidevineRepositorySyncJobData = VidiunWidevineRepositorySyncJobData;

util.inherits(VidiunWidevineRepositorySyncJobData, VidiunJobData);


/**
 * @param idEqual string .
 * @param idIn string .
 * @param sourceWidgetIdEqual string .
 * @param rootWidgetIdEqual string .
 * @param partnerIdEqual int .
 * @param entryIdEqual string .
 * @param uiConfIdEqual int .
 * @param createdAtGreaterThanOrEqual int .
 * @param createdAtLessThanOrEqual int .
 * @param updatedAtGreaterThanOrEqual int .
 * @param updatedAtLessThanOrEqual int .
 * @param partnerDataLike string .
 */
function VidiunWidgetBaseFilter(){
	VidiunWidgetBaseFilter.super_.call(this);
	this.idEqual = null;
	this.idIn = null;
	this.sourceWidgetIdEqual = null;
	this.rootWidgetIdEqual = null;
	this.partnerIdEqual = null;
	this.entryIdEqual = null;
	this.uiConfIdEqual = null;
	this.createdAtGreaterThanOrEqual = null;
	this.createdAtLessThanOrEqual = null;
	this.updatedAtGreaterThanOrEqual = null;
	this.updatedAtLessThanOrEqual = null;
	this.partnerDataLike = null;
}
module.exports.VidiunWidgetBaseFilter = VidiunWidgetBaseFilter;

util.inherits(VidiunWidgetBaseFilter, VidiunFilter);


/**
 * @param objects array  (readOnly).
 */
function VidiunWidgetListResponse(){
	VidiunWidgetListResponse.super_.call(this);
	this.objects = null;
}
module.exports.VidiunWidgetListResponse = VidiunWidgetListResponse;

util.inherits(VidiunWidgetListResponse, VidiunListResponse);


/**
 * @param category string  (readOnly).
 * @param adultContent string .
 * @param feedDescription string feed description.
 * @param feedLandingPage string feed landing page (i.e publisher website).
 */
function VidiunYahooSyndicationFeed(){
	VidiunYahooSyndicationFeed.super_.call(this);
	this.category = null;
	this.adultContent = null;
	this.feedDescription = null;
	this.feedLandingPage = null;
}
module.exports.VidiunYahooSyndicationFeed = VidiunYahooSyndicationFeed;

util.inherits(VidiunYahooSyndicationFeed, VidiunBaseSyndicationFeed);


/**
 * @param idEqual int .
 * @param idIn string .
 * @param systemNameEqual string .
 * @param systemNameIn string .
 * @param createdAtGreaterThanOrEqual int .
 * @param createdAtLessThanOrEqual int .
 */
function VidiunAccessControlBaseFilter(){
	VidiunAccessControlBaseFilter.super_.call(this);
	this.idEqual = null;
	this.idIn = null;
	this.systemNameEqual = null;
	this.systemNameIn = null;
	this.createdAtGreaterThanOrEqual = null;
	this.createdAtLessThanOrEqual = null;
}
module.exports.VidiunAccessControlBaseFilter = VidiunAccessControlBaseFilter;

util.inherits(VidiunAccessControlBaseFilter, VidiunRelatedFilter);


/**
 * @param idEqual int .
 * @param idIn string .
 * @param systemNameEqual string .
 * @param systemNameIn string .
 * @param createdAtGreaterThanOrEqual int .
 * @param createdAtLessThanOrEqual int .
 * @param updatedAtGreaterThanOrEqual int .
 * @param updatedAtLessThanOrEqual int .
 */
function VidiunAccessControlProfileBaseFilter(){
	VidiunAccessControlProfileBaseFilter.super_.call(this);
	this.idEqual = null;
	this.idIn = null;
	this.systemNameEqual = null;
	this.systemNameIn = null;
	this.createdAtGreaterThanOrEqual = null;
	this.createdAtLessThanOrEqual = null;
	this.updatedAtGreaterThanOrEqual = null;
	this.updatedAtLessThanOrEqual = null;
}
module.exports.VidiunAccessControlProfileBaseFilter = VidiunAccessControlProfileBaseFilter;

util.inherits(VidiunAccessControlProfileBaseFilter, VidiunRelatedFilter);


/**
 * @param wsdlUsername string .
 * @param wsdlPassword string .
 * @param cpcode string .
 * @param emailId string .
 * @param primaryContact string .
 * @param secondaryContact string .
 */
function VidiunAkamaiProvisionJobData(){
	VidiunAkamaiProvisionJobData.super_.call(this);
	this.wsdlUsername = null;
	this.wsdlPassword = null;
	this.cpcode = null;
	this.emailId = null;
	this.primaryContact = null;
	this.secondaryContact = null;
}
module.exports.VidiunAkamaiProvisionJobData = VidiunAkamaiProvisionJobData;

util.inherits(VidiunAkamaiProvisionJobData, VidiunProvisionJobData);


/**
 * @param streamId int .
 * @param systemUserName string .
 * @param systemPassword string .
 * @param domainName string .
 * @param dvrEnabled int .
 * @param dvrWindow int .
 * @param primaryContact string .
 * @param secondaryContact string .
 * @param streamType string .
 * @param notificationEmail string .
 */
function VidiunAkamaiUniversalProvisionJobData(){
	VidiunAkamaiUniversalProvisionJobData.super_.call(this);
	this.streamId = null;
	this.systemUserName = null;
	this.systemPassword = null;
	this.domainName = null;
	this.dvrEnabled = null;
	this.dvrWindow = null;
	this.primaryContact = null;
	this.secondaryContact = null;
	this.streamType = null;
	this.notificationEmail = null;
}
module.exports.VidiunAkamaiUniversalProvisionJobData = VidiunAkamaiUniversalProvisionJobData;

util.inherits(VidiunAkamaiUniversalProvisionJobData, VidiunProvisionJobData);


/**
 */
function VidiunAppTokenFilter(){
	VidiunAppTokenFilter.super_.call(this);
}
module.exports.VidiunAppTokenFilter = VidiunAppTokenFilter;

util.inherits(VidiunAppTokenFilter, VidiunAppTokenBaseFilter);


/**
 * @param idEqual string .
 * @param idIn string .
 * @param entryIdEqual string .
 * @param entryIdIn string .
 * @param partnerIdEqual int .
 * @param partnerIdIn string .
 * @param sizeGreaterThanOrEqual int .
 * @param sizeLessThanOrEqual int .
 * @param tagsLike string .
 * @param tagsMultiLikeOr string .
 * @param tagsMultiLikeAnd string .
 * @param createdAtGreaterThanOrEqual int .
 * @param createdAtLessThanOrEqual int .
 * @param updatedAtGreaterThanOrEqual int .
 * @param updatedAtLessThanOrEqual int .
 * @param deletedAtGreaterThanOrEqual int .
 * @param deletedAtLessThanOrEqual int .
 */
function VidiunAssetBaseFilter(){
	VidiunAssetBaseFilter.super_.call(this);
	this.idEqual = null;
	this.idIn = null;
	this.entryIdEqual = null;
	this.entryIdIn = null;
	this.partnerIdEqual = null;
	this.partnerIdIn = null;
	this.sizeGreaterThanOrEqual = null;
	this.sizeLessThanOrEqual = null;
	this.tagsLike = null;
	this.tagsMultiLikeOr = null;
	this.tagsMultiLikeAnd = null;
	this.createdAtGreaterThanOrEqual = null;
	this.createdAtLessThanOrEqual = null;
	this.updatedAtGreaterThanOrEqual = null;
	this.updatedAtLessThanOrEqual = null;
	this.deletedAtGreaterThanOrEqual = null;
	this.deletedAtLessThanOrEqual = null;
}
module.exports.VidiunAssetBaseFilter = VidiunAssetBaseFilter;

util.inherits(VidiunAssetBaseFilter, VidiunRelatedFilter);


/**
 * @param systemNameEqual string .
 * @param systemNameIn string .
 * @param isSystemDefaultEqual int .
 * @param tagsEqual string .
 * @param idIn string .
 */
function VidiunAssetParamsBaseFilter(){
	VidiunAssetParamsBaseFilter.super_.call(this);
	this.systemNameEqual = null;
	this.systemNameIn = null;
	this.isSystemDefaultEqual = null;
	this.tagsEqual = null;
	this.idIn = null;
}
module.exports.VidiunAssetParamsBaseFilter = VidiunAssetParamsBaseFilter;

util.inherits(VidiunAssetParamsBaseFilter, VidiunRelatedFilter);


/**
 * @param assetId string ID of the source asset.
 */
function VidiunAssetResource(){
	VidiunAssetResource.super_.call(this);
	this.assetId = null;
}
module.exports.VidiunAssetResource = VidiunAssetResource;

util.inherits(VidiunAssetResource, VidiunContentResource);


/**
 * @param idEqual int .
 * @param createdAtGreaterThanOrEqual int .
 * @param createdAtLessThanOrEqual int .
 * @param parsedAtGreaterThanOrEqual int .
 * @param parsedAtLessThanOrEqual int .
 * @param statusEqual int .
 * @param statusIn string .
 * @param auditObjectTypeEqual string .
 * @param auditObjectTypeIn string .
 * @param objectIdEqual string .
 * @param objectIdIn string .
 * @param relatedObjectIdEqual string .
 * @param relatedObjectIdIn string .
 * @param relatedObjectTypeEqual string .
 * @param relatedObjectTypeIn string .
 * @param entryIdEqual string .
 * @param entryIdIn string .
 * @param masterPartnerIdEqual int .
 * @param masterPartnerIdIn string .
 * @param partnerIdEqual int .
 * @param partnerIdIn string .
 * @param requestIdEqual string .
 * @param requestIdIn string .
 * @param userIdEqual string .
 * @param userIdIn string .
 * @param actionEqual string .
 * @param actionIn string .
 * @param vsEqual string .
 * @param contextEqual int .
 * @param contextIn string .
 * @param entryPointEqual string .
 * @param entryPointIn string .
 * @param serverNameEqual string .
 * @param serverNameIn string .
 * @param ipAddressEqual string .
 * @param ipAddressIn string .
 * @param clientTagEqual string .
 */
function VidiunAuditTrailBaseFilter(){
	VidiunAuditTrailBaseFilter.super_.call(this);
	this.idEqual = null;
	this.createdAtGreaterThanOrEqual = null;
	this.createdAtLessThanOrEqual = null;
	this.parsedAtGreaterThanOrEqual = null;
	this.parsedAtLessThanOrEqual = null;
	this.statusEqual = null;
	this.statusIn = null;
	this.auditObjectTypeEqual = null;
	this.auditObjectTypeIn = null;
	this.objectIdEqual = null;
	this.objectIdIn = null;
	this.relatedObjectIdEqual = null;
	this.relatedObjectIdIn = null;
	this.relatedObjectTypeEqual = null;
	this.relatedObjectTypeIn = null;
	this.entryIdEqual = null;
	this.entryIdIn = null;
	this.masterPartnerIdEqual = null;
	this.masterPartnerIdIn = null;
	this.partnerIdEqual = null;
	this.partnerIdIn = null;
	this.requestIdEqual = null;
	this.requestIdIn = null;
	this.userIdEqual = null;
	this.userIdIn = null;
	this.actionEqual = null;
	this.actionIn = null;
	this.vsEqual = null;
	this.contextEqual = null;
	this.contextIn = null;
	this.entryPointEqual = null;
	this.entryPointIn = null;
	this.serverNameEqual = null;
	this.serverNameIn = null;
	this.ipAddressEqual = null;
	this.ipAddressIn = null;
	this.clientTagEqual = null;
}
module.exports.VidiunAuditTrailBaseFilter = VidiunAuditTrailBaseFilter;

util.inherits(VidiunAuditTrailBaseFilter, VidiunRelatedFilter);


/**
 */
function VidiunBaseSyndicationFeedFilter(){
	VidiunBaseSyndicationFeedFilter.super_.call(this);
}
module.exports.VidiunBaseSyndicationFeedFilter = VidiunBaseSyndicationFeedFilter;

util.inherits(VidiunBaseSyndicationFeedFilter, VidiunBaseSyndicationFeedBaseFilter);


/**
 *
 */
function VidiunBeaconBaseFilter() {
    VidiunBeaconBaseFilter.super_.call(this);
    this.relatedObjectTypeEqual = null;
    this.eventTypeEqual = null;
    this.objectIdEqual = null;
    this.privateDataLike = null;
    this.privateDataMultiLikeOr = null;
    this.privateDataMultiLikeAnd = null;
}
module.exports.VidiunBeaconBaseFilter = VidiunBeaconBaseFilter;
util.inherits(VidiunBeaconBaseFilter, VidiunRelatedFilter);

/**
 */
function VidiunBatchJobFilter(){
	VidiunBatchJobFilter.super_.call(this);
}
module.exports.VidiunBatchJobFilter = VidiunBatchJobFilter;

util.inherits(VidiunBatchJobFilter, VidiunBatchJobBaseFilter);


/**
 * @param csvVersion int The version of the csv file (readOnly).
 * @param columns array Array containing CSV headers.
 */
function VidiunBulkUploadCsvJobData(){
	VidiunBulkUploadCsvJobData.super_.call(this);
	this.csvVersion = null;
	this.columns = null;
}
module.exports.VidiunBulkUploadCsvJobData = VidiunBulkUploadCsvJobData;

util.inherits(VidiunBulkUploadCsvJobData, VidiunBulkUploadJobData);


/**
 */
function VidiunBulkUploadFilter(){
	VidiunBulkUploadFilter.super_.call(this);
}
module.exports.VidiunBulkUploadFilter = VidiunBulkUploadFilter;

util.inherits(VidiunBulkUploadFilter, VidiunBulkUploadBaseFilter);


/**
 * @param filter VidiunFilter Filter for extracting the objects list to upload.
 * @param templateObject VidiunObjectBase Template object for new object creation.
 */
function VidiunBulkUploadFilterJobData(){
	VidiunBulkUploadFilterJobData.super_.call(this);
	this.filter = null;
	this.templateObject = null;
}
module.exports.VidiunBulkUploadFilterJobData = VidiunBulkUploadFilterJobData;

util.inherits(VidiunBulkUploadFilterJobData, VidiunBulkUploadJobData);


/**
 * @param eventsType int The type of the events that ill be created by this upload.
 */
function VidiunBulkUploadICalJobData(){
	VidiunBulkUploadICalJobData.super_.call(this);
	this.eventsType = null;
}
module.exports.VidiunBulkUploadICalJobData = VidiunBulkUploadICalJobData;

util.inherits(VidiunBulkUploadICalJobData, VidiunBulkUploadJobData);


/**
 */
function VidiunBulkUploadXmlJobData(){
	VidiunBulkUploadXmlJobData.super_.call(this);
}
module.exports.VidiunBulkUploadXmlJobData = VidiunBulkUploadXmlJobData;

util.inherits(VidiunBulkUploadXmlJobData, VidiunBulkUploadJobData);


/**
 */
function VidiunBusinessProcessAbortNotificationTemplate(){
	VidiunBusinessProcessAbortNotificationTemplate.super_.call(this);
}
module.exports.VidiunBusinessProcessAbortNotificationTemplate = VidiunBusinessProcessAbortNotificationTemplate;

util.inherits(VidiunBusinessProcessAbortNotificationTemplate, VidiunBusinessProcessNotificationTemplate);


/**
 * @param server VidiunBusinessProcessServer .
 * @param caseId string .
 */
function VidiunBusinessProcessNotificationDispatchJobData(){
	VidiunBusinessProcessNotificationDispatchJobData.super_.call(this);
	this.server = null;
	this.caseId = null;
}
module.exports.VidiunBusinessProcessNotificationDispatchJobData = VidiunBusinessProcessNotificationDispatchJobData;

util.inherits(VidiunBusinessProcessNotificationDispatchJobData, VidiunEventNotificationDispatchJobData);


/**
 */
function VidiunBusinessProcessServerFilter(){
	VidiunBusinessProcessServerFilter.super_.call(this);
}
module.exports.VidiunBusinessProcessServerFilter = VidiunBusinessProcessServerFilter;

util.inherits(VidiunBusinessProcessServerFilter, VidiunBusinessProcessServerBaseFilter);


/**
 * @param message string Define the message to be sent.
 * @param eventId string Define the event that waiting to the signal.
 */
function VidiunBusinessProcessSignalNotificationTemplate(){
	VidiunBusinessProcessSignalNotificationTemplate.super_.call(this);
	this.message = null;
	this.eventId = null;
}
module.exports.VidiunBusinessProcessSignalNotificationTemplate = VidiunBusinessProcessSignalNotificationTemplate;

util.inherits(VidiunBusinessProcessSignalNotificationTemplate, VidiunBusinessProcessNotificationTemplate);


/**
 * @param abortOnDeletion bool Abort the process automatically if the triggering object deleted.
 */
function VidiunBusinessProcessStartNotificationTemplate(){
	VidiunBusinessProcessStartNotificationTemplate.super_.call(this);
	this.abortOnDeletion = null;
}
module.exports.VidiunBusinessProcessStartNotificationTemplate = VidiunBusinessProcessStartNotificationTemplate;

util.inherits(VidiunBusinessProcessStartNotificationTemplate, VidiunBusinessProcessNotificationTemplate);


/**
 * @param idEqual int .
 * @param idIn string .
 * @param parentIdEqual int .
 * @param parentIdIn string .
 * @param depthEqual int .
 * @param fullNameEqual string .
 * @param fullNameStartsWith string .
 * @param fullNameIn string .
 * @param fullIdsEqual string .
 * @param fullIdsStartsWith string .
 * @param fullIdsMatchOr string .
 * @param createdAtGreaterThanOrEqual int .
 * @param createdAtLessThanOrEqual int .
 * @param updatedAtGreaterThanOrEqual int .
 * @param updatedAtLessThanOrEqual int .
 * @param tagsLike string .
 * @param tagsMultiLikeOr string .
 * @param tagsMultiLikeAnd string .
 * @param appearInListEqual int .
 * @param privacyEqual int .
 * @param privacyIn string .
 * @param inheritanceTypeEqual int .
 * @param inheritanceTypeIn string .
 * @param referenceIdEqual string .
 * @param referenceIdEmpty int .
 * @param contributionPolicyEqual int .
 * @param membersCountGreaterThanOrEqual int .
 * @param membersCountLessThanOrEqual int .
 * @param pendingMembersCountGreaterThanOrEqual int .
 * @param pendingMembersCountLessThanOrEqual int .
 * @param privacyContextEqual string .
 * @param statusEqual int .
 * @param statusIn string .
 * @param inheritedParentIdEqual int .
 * @param inheritedParentIdIn string .
 * @param partnerSortValueGreaterThanOrEqual int .
 * @param partnerSortValueLessThanOrEqual int .
 */
function VidiunCategoryBaseFilter(){
	VidiunCategoryBaseFilter.super_.call(this);
	this.idEqual = null;
	this.idIn = null;
	this.parentIdEqual = null;
	this.parentIdIn = null;
	this.depthEqual = null;
	this.fullNameEqual = null;
	this.fullNameStartsWith = null;
	this.fullNameIn = null;
	this.fullIdsEqual = null;
	this.fullIdsStartsWith = null;
	this.fullIdsMatchOr = null;
	this.createdAtGreaterThanOrEqual = null;
	this.createdAtLessThanOrEqual = null;
	this.updatedAtGreaterThanOrEqual = null;
	this.updatedAtLessThanOrEqual = null;
	this.tagsLike = null;
	this.tagsMultiLikeOr = null;
	this.tagsMultiLikeAnd = null;
	this.appearInListEqual = null;
	this.privacyEqual = null;
	this.privacyIn = null;
	this.inheritanceTypeEqual = null;
	this.inheritanceTypeIn = null;
	this.referenceIdEqual = null;
	this.referenceIdEmpty = null;
	this.contributionPolicyEqual = null;
	this.membersCountGreaterThanOrEqual = null;
	this.membersCountLessThanOrEqual = null;
	this.pendingMembersCountGreaterThanOrEqual = null;
	this.pendingMembersCountLessThanOrEqual = null;
	this.privacyContextEqual = null;
	this.statusEqual = null;
	this.statusIn = null;
	this.inheritedParentIdEqual = null;
	this.inheritedParentIdIn = null;
	this.partnerSortValueGreaterThanOrEqual = null;
	this.partnerSortValueLessThanOrEqual = null;
}
module.exports.VidiunCategoryBaseFilter = VidiunCategoryBaseFilter;

util.inherits(VidiunCategoryBaseFilter, VidiunRelatedFilter);


/**
 * @param categoryIdEqual int .
 * @param categoryIdIn string .
 * @param entryIdEqual string .
 * @param entryIdIn string .
 * @param createdAtGreaterThanOrEqual int .
 * @param createdAtLessThanOrEqual int .
 * @param categoryFullIdsStartsWith string .
 * @param statusEqual int .
 * @param statusIn string .
 */
function VidiunCategoryEntryBaseFilter(){
	VidiunCategoryEntryBaseFilter.super_.call(this);
	this.categoryIdEqual = null;
	this.categoryIdIn = null;
	this.entryIdEqual = null;
	this.entryIdIn = null;
	this.createdAtGreaterThanOrEqual = null;
	this.createdAtLessThanOrEqual = null;
	this.categoryFullIdsStartsWith = null;
	this.statusEqual = null;
	this.statusIn = null;
}
module.exports.VidiunCategoryEntryBaseFilter = VidiunCategoryEntryBaseFilter;

util.inherits(VidiunCategoryEntryBaseFilter, VidiunRelatedFilter);


/**
 * @param xPath string May contain the full xpath to the field in three formats
 * 1. Slashed xPath, e.g. /metadata/myElementName
 * 2. Using local-name function, e.g. /[local-name()='metadata']/[local-name()='myElementName']
 * 3. Using only the field name, e.g. myElementName, it will be searched as //myElementName.
 * @param profileId int Metadata profile id.
 * @param profileSystemName string Metadata profile system name.
 */
function VidiunCompareMetadataCondition(){
	VidiunCompareMetadataCondition.super_.call(this);
	this.xPath = null;
	this.profileId = null;
	this.profileSystemName = null;
}
module.exports.VidiunCompareMetadataCondition = VidiunCompareMetadataCondition;

util.inherits(VidiunCompareMetadataCondition, VidiunCompareCondition);


/**
 */
function VidiunControlPanelCommandFilter(){
	VidiunControlPanelCommandFilter.super_.call(this);
}
module.exports.VidiunControlPanelCommandFilter = VidiunControlPanelCommandFilter;

util.inherits(VidiunControlPanelCommandFilter, VidiunControlPanelCommandBaseFilter);


/**
 * @param conversionProfileIdEqual int .
 * @param conversionProfileIdIn string .
 * @param assetParamsIdEqual int .
 * @param assetParamsIdIn string .
 * @param readyBehaviorEqual int .
 * @param readyBehaviorIn string .
 * @param originEqual int .
 * @param originIn string .
 * @param systemNameEqual string .
 * @param systemNameIn string .
 */
function VidiunConversionProfileAssetParamsBaseFilter(){
	VidiunConversionProfileAssetParamsBaseFilter.super_.call(this);
	this.conversionProfileIdEqual = null;
	this.conversionProfileIdIn = null;
	this.assetParamsIdEqual = null;
	this.assetParamsIdIn = null;
	this.readyBehaviorEqual = null;
	this.readyBehaviorIn = null;
	this.originEqual = null;
	this.originIn = null;
	this.systemNameEqual = null;
	this.systemNameIn = null;
}
module.exports.VidiunConversionProfileAssetParamsBaseFilter = VidiunConversionProfileAssetParamsBaseFilter;

util.inherits(VidiunConversionProfileAssetParamsBaseFilter, VidiunRelatedFilter);


/**
 * @param idEqual int .
 * @param idIn string .
 * @param statusEqual string .
 * @param statusIn string .
 * @param typeEqual string .
 * @param typeIn string .
 * @param nameEqual string .
 * @param systemNameEqual string .
 * @param systemNameIn string .
 * @param tagsMultiLikeOr string .
 * @param tagsMultiLikeAnd string .
 * @param defaultEntryIdEqual string .
 * @param defaultEntryIdIn string .
 */
function VidiunConversionProfileBaseFilter(){
	VidiunConversionProfileBaseFilter.super_.call(this);
	this.idEqual = null;
	this.idIn = null;
	this.statusEqual = null;
	this.statusIn = null;
	this.typeEqual = null;
	this.typeIn = null;
	this.nameEqual = null;
	this.systemNameEqual = null;
	this.systemNameIn = null;
	this.tagsMultiLikeOr = null;
	this.tagsMultiLikeAnd = null;
	this.defaultEntryIdEqual = null;
	this.defaultEntryIdIn = null;
}
module.exports.VidiunConversionProfileBaseFilter = VidiunConversionProfileBaseFilter;

util.inherits(VidiunConversionProfileBaseFilter, VidiunRelatedFilter);


/**
 * @param destDirLocalPath string .
 * @param destDirRemoteUrl string .
 * @param destFileName string .
 * @param inputXmlLocalPath string .
 * @param inputXmlRemoteUrl string .
 * @param commandLinesStr string .
 * @param flavors array .
 */
function VidiunConvertCollectionJobData(){
	VidiunConvertCollectionJobData.super_.call(this);
	this.destDirLocalPath = null;
	this.destDirRemoteUrl = null;
	this.destFileName = null;
	this.inputXmlLocalPath = null;
	this.inputXmlRemoteUrl = null;
	this.commandLinesStr = null;
	this.flavors = null;
}
module.exports.VidiunConvertCollectionJobData = VidiunConvertCollectionJobData;

util.inherits(VidiunConvertCollectionJobData, VidiunConvartableJobData);


/**
 * @param destFileSyncLocalPath string .
 * @param destFileSyncRemoteUrl string .
 * @param logFileSyncLocalPath string .
 * @param logFileSyncRemoteUrl string .
 * @param flavorAssetId string .
 * @param remoteMediaId string .
 * @param customData string .
 * @param extraDestFileSyncs array .
 * @param engineMessage string .
 */
function VidiunConvertJobData(){
	VidiunConvertJobData.super_.call(this);
	this.destFileSyncLocalPath = null;
	this.destFileSyncRemoteUrl = null;
	this.logFileSyncLocalPath = null;
	this.logFileSyncRemoteUrl = null;
	this.flavorAssetId = null;
	this.remoteMediaId = null;
	this.customData = null;
	this.extraDestFileSyncs = null;
	this.engineMessage = null;
}
module.exports.VidiunConvertJobData = VidiunConvertJobData;

util.inherits(VidiunConvertJobData, VidiunConvartableJobData);


/**
 * @param geoCoderType string The ip geo coder engine to be used.
 */
function VidiunCountryCondition(){
	VidiunCountryCondition.super_.call(this);
	this.geoCoderType = null;
}
module.exports.VidiunCountryCondition = VidiunCountryCondition;

util.inherits(VidiunCountryCondition, VidiunMatchCondition);


/**
 * @param idEqual string .
 * @param idIn string .
 * @param cuePointTypeEqual string .
 * @param cuePointTypeIn string .
 * @param statusEqual int .
 * @param statusIn string .
 * @param entryIdEqual string .
 * @param entryIdIn string .
 * @param createdAtGreaterThanOrEqual int .
 * @param createdAtLessThanOrEqual int .
 * @param updatedAtGreaterThanOrEqual int .
 * @param updatedAtLessThanOrEqual int .
 * @param triggeredAtGreaterThanOrEqual int .
 * @param triggeredAtLessThanOrEqual int .
 * @param tagsLike string .
 * @param tagsMultiLikeOr string .
 * @param tagsMultiLikeAnd string .
 * @param startTimeGreaterThanOrEqual int .
 * @param startTimeLessThanOrEqual int .
 * @param userIdEqual string .
 * @param userIdIn string .
 * @param partnerSortValueEqual int .
 * @param partnerSortValueIn string .
 * @param partnerSortValueGreaterThanOrEqual int .
 * @param partnerSortValueLessThanOrEqual int .
 * @param forceStopEqual int .
 * @param systemNameEqual string .
 * @param systemNameIn string .
 */
function VidiunCuePointBaseFilter(){
	VidiunCuePointBaseFilter.super_.call(this);
	this.idEqual = null;
	this.idIn = null;
	this.cuePointTypeEqual = null;
	this.cuePointTypeIn = null;
	this.statusEqual = null;
	this.statusIn = null;
	this.entryIdEqual = null;
	this.entryIdIn = null;
	this.createdAtGreaterThanOrEqual = null;
	this.createdAtLessThanOrEqual = null;
	this.updatedAtGreaterThanOrEqual = null;
	this.updatedAtLessThanOrEqual = null;
	this.triggeredAtGreaterThanOrEqual = null;
	this.triggeredAtLessThanOrEqual = null;
	this.tagsLike = null;
	this.tagsMultiLikeOr = null;
	this.tagsMultiLikeAnd = null;
	this.startTimeGreaterThanOrEqual = null;
	this.startTimeLessThanOrEqual = null;
	this.userIdEqual = null;
	this.userIdIn = null;
	this.partnerSortValueEqual = null;
	this.partnerSortValueIn = null;
	this.partnerSortValueGreaterThanOrEqual = null;
	this.partnerSortValueLessThanOrEqual = null;
	this.forceStopEqual = null;
	this.systemNameEqual = null;
	this.systemNameIn = null;
}
module.exports.VidiunCuePointBaseFilter = VidiunCuePointBaseFilter;

util.inherits(VidiunCuePointBaseFilter, VidiunRelatedFilter);


/**
 */
function VidiunDeliveryProfileFilter(){
	VidiunDeliveryProfileFilter.super_.call(this);
}
module.exports.VidiunDeliveryProfileFilter = VidiunDeliveryProfileFilter;

util.inherits(VidiunDeliveryProfileFilter, VidiunDeliveryProfileBaseFilter);


/**
 * @param pattern string .
 * @param rendererClass string rendererClass.
 */
function VidiunDeliveryProfileGenericRtmp(){
	VidiunDeliveryProfileGenericRtmp.super_.call(this);
	this.pattern = null;
	this.rendererClass = null;
}
module.exports.VidiunDeliveryProfileGenericRtmp = VidiunDeliveryProfileGenericRtmp;

util.inherits(VidiunDeliveryProfileGenericRtmp, VidiunDeliveryProfileRtmp);


/**
 * @param keepDistributionItem bool Flag signifying that the associated distribution item should not be moved to 'removed' status.
 */
function VidiunDistributionDeleteJobData(){
	VidiunDistributionDeleteJobData.super_.call(this);
	this.keepDistributionItem = null;
}
module.exports.VidiunDistributionDeleteJobData = VidiunDistributionDeleteJobData;

util.inherits(VidiunDistributionDeleteJobData, VidiunDistributionJobData);


/**
 * @param plays int .
 * @param views int .
 */
function VidiunDistributionFetchReportJobData(){
	VidiunDistributionFetchReportJobData.super_.call(this);
	this.plays = null;
	this.views = null;
}
module.exports.VidiunDistributionFetchReportJobData = VidiunDistributionFetchReportJobData;

util.inherits(VidiunDistributionFetchReportJobData, VidiunDistributionJobData);


/**
 */
function VidiunDistributionProfileFilter(){
	VidiunDistributionProfileFilter.super_.call(this);
}
module.exports.VidiunDistributionProfileFilter = VidiunDistributionProfileFilter;

util.inherits(VidiunDistributionProfileFilter, VidiunDistributionProfileBaseFilter);


/**
 */
function VidiunDistributionProviderFilter(){
	VidiunDistributionProviderFilter.super_.call(this);
}
module.exports.VidiunDistributionProviderFilter = VidiunDistributionProviderFilter;

util.inherits(VidiunDistributionProviderFilter, VidiunDistributionProviderBaseFilter);


/**
 */
function VidiunDistributionSubmitJobData(){
	VidiunDistributionSubmitJobData.super_.call(this);
}
module.exports.VidiunDistributionSubmitJobData = VidiunDistributionSubmitJobData;

util.inherits(VidiunDistributionSubmitJobData, VidiunDistributionJobData);


/**
 */
function VidiunDistributionUpdateJobData(){
	VidiunDistributionUpdateJobData.super_.call(this);
}
module.exports.VidiunDistributionUpdateJobData = VidiunDistributionUpdateJobData;

util.inherits(VidiunDistributionUpdateJobData, VidiunDistributionJobData);


/**
 * @param metadataProfileId int .
 */
function VidiunDistributionValidationErrorInvalidMetadata(){
	VidiunDistributionValidationErrorInvalidMetadata.super_.call(this);
	this.metadataProfileId = null;
}
module.exports.VidiunDistributionValidationErrorInvalidMetadata = VidiunDistributionValidationErrorInvalidMetadata;

util.inherits(VidiunDistributionValidationErrorInvalidMetadata, VidiunDistributionValidationErrorInvalidData);


/**
 */
function VidiunDocumentFlavorParams(){
	VidiunDocumentFlavorParams.super_.call(this);
}
module.exports.VidiunDocumentFlavorParams = VidiunDocumentFlavorParams;

util.inherits(VidiunDocumentFlavorParams, VidiunFlavorParams);


/**
 */
function VidiunDrmDeviceFilter(){
	VidiunDrmDeviceFilter.super_.call(this);
}
module.exports.VidiunDrmDeviceFilter = VidiunDrmDeviceFilter;

util.inherits(VidiunDrmDeviceFilter, VidiunDrmDeviceBaseFilter);


/**
 */
function VidiunDrmPolicyFilter(){
	VidiunDrmPolicyFilter.super_.call(this);
}
module.exports.VidiunDrmPolicyFilter = VidiunDrmPolicyFilter;

util.inherits(VidiunDrmPolicyFilter, VidiunDrmPolicyBaseFilter);


/**
 */
function VidiunDrmProfileFilter(){
	VidiunDrmProfileFilter.super_.call(this);
}
module.exports.VidiunDrmProfileFilter = VidiunDrmProfileFilter;

util.inherits(VidiunDrmProfileFilter, VidiunDrmProfileBaseFilter);


/**
 */
function VidiunDropFolderFileFilter(){
	VidiunDropFolderFileFilter.super_.call(this);
}
module.exports.VidiunDropFolderFileFilter = VidiunDropFolderFileFilter;

util.inherits(VidiunDropFolderFileFilter, VidiunDropFolderFileBaseFilter);


/**
 * @param currentDc int .
 */
function VidiunDropFolderFilter(){
	VidiunDropFolderFilter.super_.call(this);
	this.currentDc = null;
}
module.exports.VidiunDropFolderFilter = VidiunDropFolderFilter;

util.inherits(VidiunDropFolderFilter, VidiunDropFolderBaseFilter);


/**
 * @param field string .
 */
function VidiunDynamicObjectSearchItem(){
	VidiunDynamicObjectSearchItem.super_.call(this);
	this.field = null;
}
module.exports.VidiunDynamicObjectSearchItem = VidiunDynamicObjectSearchItem;

util.inherits(VidiunDynamicObjectSearchItem, VidiunSearchOperator);


/**
 * @param deliveryProfileIds array Delivery profile ids.
 * @param config string Overdie edge server default configuration - json format.
 */
function VidiunEdgeServerNode(){
	VidiunEdgeServerNode.super_.call(this);
	this.deliveryProfileIds = null;
	this.config = null;
}
module.exports.VidiunEdgeServerNode = VidiunEdgeServerNode;

util.inherits(VidiunEdgeServerNode, VidiunDeliveryServerNode);


/**
 * @param fromEmail string Define the email sender email.
 * @param fromName string Define the email sender name.
 * @param to VidiunEmailNotificationRecipientJobData Email recipient emails and names, key is mail address and value is the name.
 * @param cc VidiunEmailNotificationRecipientJobData Email cc emails and names, key is mail address and value is the name.
 * @param bcc VidiunEmailNotificationRecipientJobData Email bcc emails and names, key is mail address and value is the name.
 * @param replyTo VidiunEmailNotificationRecipientJobData Email addresses that a replies should be sent to, key is mail address and value is the name.
 * @param priority int Define the email priority.
 * @param confirmReadingTo string Email address that a reading confirmation will be sent to.
 * @param hostname string Hostname to use in Message-Id and Received headers and as default HELO string.
 * If empty, the value returned by SERVER_NAME is used or 'localhost.localdomain'.
 * @param messageID string Sets the message ID to be used in the Message-Id header.
 * If empty, a unique id will be generated.
 * @param customHeaders array Adds a e-mail custom header.
 */
function VidiunEmailNotificationDispatchJobData(){
	VidiunEmailNotificationDispatchJobData.super_.call(this);
	this.fromEmail = null;
	this.fromName = null;
	this.to = null;
	this.cc = null;
	this.bcc = null;
	this.replyTo = null;
	this.priority = null;
	this.confirmReadingTo = null;
	this.hostname = null;
	this.messageID = null;
	this.customHeaders = null;
}
module.exports.VidiunEmailNotificationDispatchJobData = VidiunEmailNotificationDispatchJobData;

util.inherits(VidiunEmailNotificationDispatchJobData, VidiunEventNotificationDispatchJobData);


/**
 * @param application string .
 * @param userIds string .
 * @param playbackContext string .
 * @param ancestorPlaybackContext string .
 */
function VidiunEndUserReportInputFilter(){
	VidiunEndUserReportInputFilter.super_.call(this);
	this.application = null;
	this.userIds = null;
	this.playbackContext = null;
	this.ancestorPlaybackContext = null;
}
module.exports.VidiunEndUserReportInputFilter = VidiunEndUserReportInputFilter;

util.inherits(VidiunEndUserReportInputFilter, VidiunReportInputFilter);


/**
 * @param idEqual int .
 * @param idIn string .
 * @param createdAtGreaterThanOrEqual int .
 * @param createdAtLessThanOrEqual int .
 * @param updatedAtGreaterThanOrEqual int .
 * @param updatedAtLessThanOrEqual int .
 * @param submittedAtGreaterThanOrEqual int .
 * @param submittedAtLessThanOrEqual int .
 * @param entryIdEqual string .
 * @param entryIdIn string .
 * @param distributionProfileIdEqual int .
 * @param distributionProfileIdIn string .
 * @param statusEqual int .
 * @param statusIn string .
 * @param dirtyStatusEqual int .
 * @param dirtyStatusIn string .
 * @param sunriseGreaterThanOrEqual int .
 * @param sunriseLessThanOrEqual int .
 * @param sunsetGreaterThanOrEqual int .
 * @param sunsetLessThanOrEqual int .
 */
function VidiunEntryDistributionBaseFilter(){
	VidiunEntryDistributionBaseFilter.super_.call(this);
	this.idEqual = null;
	this.idIn = null;
	this.createdAtGreaterThanOrEqual = null;
	this.createdAtLessThanOrEqual = null;
	this.updatedAtGreaterThanOrEqual = null;
	this.updatedAtLessThanOrEqual = null;
	this.submittedAtGreaterThanOrEqual = null;
	this.submittedAtLessThanOrEqual = null;
	this.entryIdEqual = null;
	this.entryIdIn = null;
	this.distributionProfileIdEqual = null;
	this.distributionProfileIdIn = null;
	this.statusEqual = null;
	this.statusIn = null;
	this.dirtyStatusEqual = null;
	this.dirtyStatusIn = null;
	this.sunriseGreaterThanOrEqual = null;
	this.sunriseLessThanOrEqual = null;
	this.sunsetGreaterThanOrEqual = null;
	this.sunsetLessThanOrEqual = null;
}
module.exports.VidiunEntryDistributionBaseFilter = VidiunEntryDistributionBaseFilter;

util.inherits(VidiunEntryDistributionBaseFilter, VidiunRelatedFilter);


/**
 * @param referrer string .
 */
function VidiunEntryReferrerLiveStats(){
	VidiunEntryReferrerLiveStats.super_.call(this);
	this.referrer = null;
}
module.exports.VidiunEntryReferrerLiveStats = VidiunEntryReferrerLiveStats;

util.inherits(VidiunEntryReferrerLiveStats, VidiunEntryLiveStats);


/**
 * @param entryId string ID of the source entry.
 * @param flavorParamsId int ID of the source flavor params, set to null to use the source flavor.
 */
function VidiunEntryResource(){
	VidiunEntryResource.super_.call(this);
	this.entryId = null;
	this.flavorParamsId = null;
}
module.exports.VidiunEntryResource = VidiunEntryResource;

util.inherits(VidiunEntryResource, VidiunContentResource);


/**
 * @param entryIdEqual string .
 * @param entryIdIn string .
 * @param serverNodeIdEqual int .
 * @param createdAtGreaterThanOrEqual int .
 * @param createdAtLessThanOrEqual int .
 * @param updatedAtGreaterThanOrEqual int .
 * @param updatedAtLessThanOrEqual int .
 * @param statusEqual int .
 * @param statusIn string .
 * @param serverTypeEqual string .
 * @param serverTypeIn string .
 */
function VidiunEntryServerNodeBaseFilter(){
	VidiunEntryServerNodeBaseFilter.super_.call(this);
	this.entryIdEqual = null;
	this.entryIdIn = null;
	this.serverNodeIdEqual = null;
	this.createdAtGreaterThanOrEqual = null;
	this.createdAtLessThanOrEqual = null;
	this.updatedAtGreaterThanOrEqual = null;
	this.updatedAtLessThanOrEqual = null;
	this.statusEqual = null;
	this.statusIn = null;
	this.serverTypeEqual = null;
	this.serverTypeIn = null;
}
module.exports.VidiunEntryServerNodeBaseFilter = VidiunEntryServerNodeBaseFilter;

util.inherits(VidiunEntryServerNodeBaseFilter, VidiunRelatedFilter);


/**
 */
function VidiunEventNotificationTemplateFilter(){
	VidiunEventNotificationTemplateFilter.super_.call(this);
}
module.exports.VidiunEventNotificationTemplateFilter = VidiunEventNotificationTemplateFilter;

util.inherits(VidiunEventNotificationTemplateFilter, VidiunEventNotificationTemplateBaseFilter);


/**
 * @param flavorAssetId string .
 */
function VidiunExtractMediaJobData(){
	VidiunExtractMediaJobData.super_.call(this);
	this.flavorAssetId = null;
}
module.exports.VidiunExtractMediaJobData = VidiunExtractMediaJobData;

util.inherits(VidiunExtractMediaJobData, VidiunConvartableJobData);


/**
 */
function VidiunIntegerField(){
	VidiunIntegerField.super_.call(this);
}
module.exports.VidiunIntegerField = VidiunIntegerField;

util.inherits(VidiunIntegerField, VidiunIntegerValue);


/**
 * @param field VidiunIntegerField Field to evaluate.
 */
function VidiunFieldCompareCondition(){
	VidiunFieldCompareCondition.super_.call(this);
	this.field = null;
}
module.exports.VidiunFieldCompareCondition = VidiunFieldCompareCondition;

util.inherits(VidiunFieldCompareCondition, VidiunCompareCondition);


/**
 */
function VidiunStringField(){
	VidiunStringField.super_.call(this);
}
module.exports.VidiunStringField = VidiunStringField;

util.inherits(VidiunStringField, VidiunStringValue);


/**
 * @param field VidiunStringField Field to evaluate.
 */
function VidiunFieldMatchCondition(){
	VidiunFieldMatchCondition.super_.call(this);
	this.field = null;
}
module.exports.VidiunFieldMatchCondition = VidiunFieldMatchCondition;

util.inherits(VidiunFieldMatchCondition, VidiunMatchCondition);


/**
 * @param idEqual int .
 * @param idIn string .
 * @param partnerIdEqual int .
 * @param fileAssetObjectTypeEqual string .
 * @param objectIdEqual string .
 * @param objectIdIn string .
 * @param createdAtGreaterThanOrEqual int .
 * @param createdAtLessThanOrEqual int .
 * @param updatedAtGreaterThanOrEqual int .
 * @param updatedAtLessThanOrEqual int .
 * @param statusEqual string .
 * @param statusIn string .
 */
function VidiunFileAssetBaseFilter(){
	VidiunFileAssetBaseFilter.super_.call(this);
	this.idEqual = null;
	this.idIn = null;
	this.partnerIdEqual = null;
	this.fileAssetObjectTypeEqual = null;
	this.objectIdEqual = null;
	this.objectIdIn = null;
	this.createdAtGreaterThanOrEqual = null;
	this.createdAtLessThanOrEqual = null;
	this.updatedAtGreaterThanOrEqual = null;
	this.updatedAtLessThanOrEqual = null;
	this.statusEqual = null;
	this.statusIn = null;
}
module.exports.VidiunFileAssetBaseFilter = VidiunFileAssetBaseFilter;

util.inherits(VidiunFileAssetBaseFilter, VidiunRelatedFilter);


/**
 * @param currentDc int .
 */
function VidiunFileSyncFilter(){
	VidiunFileSyncFilter.super_.call(this);
	this.currentDc = null;
}
module.exports.VidiunFileSyncFilter = VidiunFileSyncFilter;

util.inherits(VidiunFileSyncFilter, VidiunFileSyncBaseFilter);


/**
 * @param fileSyncObjectType int The object type of the file sync object.
 * @param objectSubType int The object sub-type of the file sync object.
 * @param objectId string The object id of the file sync object.
 * @param version string The version of the file sync object.
 */
function VidiunFileSyncResource(){
	VidiunFileSyncResource.super_.call(this);
	this.fileSyncObjectType = null;
	this.objectSubType = null;
	this.objectId = null;
	this.version = null;
}
module.exports.VidiunFileSyncResource = VidiunFileSyncResource;

util.inherits(VidiunFileSyncResource, VidiunContentResource);


/**
 * @param host string .
 * @param port int .
 * @param username string .
 * @param password string .
 */
function VidiunFtpDropFolder(){
	VidiunFtpDropFolder.super_.call(this);
	this.host = null;
	this.port = null;
	this.username = null;
	this.password = null;
}
module.exports.VidiunFtpDropFolder = VidiunFtpDropFolder;

util.inherits(VidiunFtpDropFolder, VidiunRemoteDropFolder);


/**
 */
function VidiunGenericDistributionProviderActionFilter(){
	VidiunGenericDistributionProviderActionFilter.super_.call(this);
}
module.exports.VidiunGenericDistributionProviderActionFilter = VidiunGenericDistributionProviderActionFilter;

util.inherits(VidiunGenericDistributionProviderActionFilter, VidiunGenericDistributionProviderActionBaseFilter);


/**
 * @param xslt string .
 * @param itemXpathsToExtend array .
 */
function VidiunGenericXsltSyndicationFeed(){
	VidiunGenericXsltSyndicationFeed.super_.call(this);
	this.xslt = null;
	this.itemXpathsToExtend = null;
}
module.exports.VidiunGenericXsltSyndicationFeed = VidiunGenericXsltSyndicationFeed;

util.inherits(VidiunGenericXsltSyndicationFeed, VidiunGenericSyndicationFeed);


/**
 * @param geoCoderType string The ip geo coder engine to be used.
 */
function VidiunGeoDistanceCondition(){
	VidiunGeoDistanceCondition.super_.call(this);
	this.geoCoderType = null;
}
module.exports.VidiunGeoDistanceCondition = VidiunGeoDistanceCondition;

util.inherits(VidiunGeoDistanceCondition, VidiunMatchCondition);


/**
 * @param city VidiunCoordinate .
 * @param country VidiunCoordinate .
 */
function VidiunGeoTimeLiveStats(){
	VidiunGeoTimeLiveStats.super_.call(this);
	this.city = null;
	this.country = null;
}
module.exports.VidiunGeoTimeLiveStats = VidiunGeoTimeLiveStats;

util.inherits(VidiunGeoTimeLiveStats, VidiunEntryLiveStats);


/**
 * @param userIdEqual string .
 * @param userIdIn string .
 * @param groupIdEqual string .
 * @param groupIdIn string .
 * @param statusEqual int .
 * @param statusIn string .
 * @param createdAtGreaterThanOrEqual int .
 * @param createdAtLessThanOrEqual int .
 * @param updatedAtGreaterThanOrEqual int .
 * @param updatedAtLessThanOrEqual int .
 */
function VidiunGroupUserBaseFilter(){
	VidiunGroupUserBaseFilter.super_.call(this);
	this.userIdEqual = null;
	this.userIdIn = null;
	this.groupIdEqual = null;
	this.groupIdIn = null;
	this.statusEqual = null;
	this.statusIn = null;
	this.createdAtGreaterThanOrEqual = null;
	this.createdAtLessThanOrEqual = null;
	this.updatedAtGreaterThanOrEqual = null;
	this.updatedAtLessThanOrEqual = null;
}
module.exports.VidiunGroupUserBaseFilter = VidiunGroupUserBaseFilter;

util.inherits(VidiunGroupUserBaseFilter, VidiunRelatedFilter);


/**
 * @param url string Remote server URL.
 * @param method int Request method.
 * @param data string Data to send.
 * @param timeout int The maximum number of seconds to allow cURL functions to execute.
 * @param connectTimeout int The number of seconds to wait while trying to connect.
 * Must be larger than zero.
 * @param username string A username to use for the connection.
 * @param password string A password to use for the connection.
 * @param authenticationMethod int The HTTP authentication method to use.
 * @param sslVersion int The SSL version (2 or 3) to use.
 * By default PHP will try to determine this itself, although in some cases this must be set manually.
 * @param sslCertificate string SSL certificate to verify the peer with.
 * @param sslCertificateType string The format of the certificate.
 * @param sslCertificatePassword string The password required to use the certificate.
 * @param sslEngine string The identifier for the crypto engine of the private SSL key specified in ssl key.
 * @param sslEngineDefault string The identifier for the crypto engine used for asymmetric crypto operations.
 * @param sslKeyType string The key type of the private SSL key specified in ssl key - PEM / DER / ENG.
 * @param sslKey string Private SSL key.
 * @param sslKeyPassword string The secret password needed to use the private SSL key specified in ssl key.
 * @param customHeaders array Adds a e-mail custom header.
 * @param signSecret string The secret to sign the notification with.
 */
function VidiunHttpNotificationDispatchJobData(){
	VidiunHttpNotificationDispatchJobData.super_.call(this);
	this.url = null;
	this.method = null;
	this.data = null;
	this.timeout = null;
	this.connectTimeout = null;
	this.username = null;
	this.password = null;
	this.authenticationMethod = null;
	this.sslVersion = null;
	this.sslCertificate = null;
	this.sslCertificateType = null;
	this.sslCertificatePassword = null;
	this.sslEngine = null;
	this.sslEngineDefault = null;
	this.sslKeyType = null;
	this.sslKey = null;
	this.sslKeyPassword = null;
	this.customHeaders = null;
	this.signSecret = null;
}
module.exports.VidiunHttpNotificationDispatchJobData = VidiunHttpNotificationDispatchJobData;

util.inherits(VidiunHttpNotificationDispatchJobData, VidiunEventNotificationDispatchJobData);


/**
 * @param densityWidth int .
 * @param densityHeight int .
 * @param sizeWidth int .
 * @param sizeHeight int .
 * @param depth int .
 */
function VidiunImageFlavorParams(){
	VidiunImageFlavorParams.super_.call(this);
	this.densityWidth = null;
	this.densityHeight = null;
	this.sizeWidth = null;
	this.sizeHeight = null;
	this.depth = null;
}
module.exports.VidiunImageFlavorParams = VidiunImageFlavorParams;

util.inherits(VidiunImageFlavorParams, VidiunFlavorParams);


/**
 * @param acceptInternalIps bool allow internal ips.
 * @param httpHeader string http header name for extracting the ip.
 */
function VidiunIpAddressCondition(){
	VidiunIpAddressCondition.super_.call(this);
	this.acceptInternalIps = null;
	this.httpHeader = null;
}
module.exports.VidiunIpAddressCondition = VidiunIpAddressCondition;

util.inherits(VidiunIpAddressCondition, VidiunMatchCondition);


/**
 * @param entryIdEqual string .
 * @param entryIdIn string .
 * @param userIdEqual string .
 * @param createdAtGreaterThanOrEqual int .
 * @param createdAtLessThanOrEqual int .
 */
function VidiunLikeBaseFilter(){
	VidiunLikeBaseFilter.super_.call(this);
	this.entryIdEqual = null;
	this.entryIdIn = null;
	this.userIdEqual = null;
	this.createdAtGreaterThanOrEqual = null;
	this.createdAtLessThanOrEqual = null;
}
module.exports.VidiunLikeBaseFilter = VidiunLikeBaseFilter;

util.inherits(VidiunLikeBaseFilter, VidiunRelatedFilter);


/**
 * @param multicastIP string .
 * @param multicastPort int .
 */
function VidiunLiveAsset(){
	VidiunLiveAsset.super_.call(this);
	this.multicastIP = null;
	this.multicastPort = null;
}
module.exports.VidiunLiveAsset = VidiunLiveAsset;

util.inherits(VidiunLiveAsset, VidiunFlavorAsset);


/**
 * @param createdAtGreaterThanOrEqual int .
 * @param createdAtLessThanOrEqual int .
 * @param updatedAtGreaterThanOrEqual int .
 * @param updatedAtLessThanOrEqual int .
 * @param statusEqual string .
 * @param statusIn string .
 * @param channelIdEqual string .
 * @param channelIdIn string .
 * @param startTimeGreaterThanOrEqual float .
 * @param startTimeLessThanOrEqual float .
 */
function VidiunLiveChannelSegmentBaseFilter(){
	VidiunLiveChannelSegmentBaseFilter.super_.call(this);
	this.createdAtGreaterThanOrEqual = null;
	this.createdAtLessThanOrEqual = null;
	this.updatedAtGreaterThanOrEqual = null;
	this.updatedAtLessThanOrEqual = null;
	this.statusEqual = null;
	this.statusIn = null;
	this.channelIdEqual = null;
	this.channelIdIn = null;
	this.startTimeGreaterThanOrEqual = null;
	this.startTimeLessThanOrEqual = null;
}
module.exports.VidiunLiveChannelSegmentBaseFilter = VidiunLiveChannelSegmentBaseFilter;

util.inherits(VidiunLiveChannelSegmentBaseFilter, VidiunRelatedFilter);


/**
 * @param streamSuffix string Suffix to be added to the stream name after the entry id {entry_id}_{stream_suffix}, e.g. for entry id 0_kjdu5jr6 and suffix 1, the stream name will be 0_kjdu5jr6_1.
 */
function VidiunLiveParams(){
	VidiunLiveParams.super_.call(this);
	this.streamSuffix = null;
}
module.exports.VidiunLiveParams = VidiunLiveParams;

util.inherits(VidiunLiveParams, VidiunFlavorParams);


/**
 */
function VidiunLiveStreamScheduleEvent(){
	VidiunLiveStreamScheduleEvent.super_.call(this);
}
module.exports.VidiunLiveStreamScheduleEvent = VidiunLiveStreamScheduleEvent;

util.inherits(VidiunLiveStreamScheduleEvent, VidiunEntryScheduleEvent);


/**
 * @param xPath string May contain the full xpath to the field in three formats
 * 1. Slashed xPath, e.g. /metadata/myElementName
 * 2. Using local-name function, e.g. /[local-name()='metadata']/[local-name()='myElementName']
 * 3. Using only the field name, e.g. myElementName, it will be searched as //myElementName.
 * @param profileId int Metadata profile id.
 * @param profileSystemName string Metadata profile system name.
 */
function VidiunMatchMetadataCondition(){
	VidiunMatchMetadataCondition.super_.call(this);
	this.xPath = null;
	this.profileId = null;
	this.profileSystemName = null;
}
module.exports.VidiunMatchMetadataCondition = VidiunMatchMetadataCondition;

util.inherits(VidiunMatchMetadataCondition, VidiunMatchCondition);


/**
 */
function VidiunMediaFlavorParams(){
	VidiunMediaFlavorParams.super_.call(this);
}
module.exports.VidiunMediaFlavorParams = VidiunMediaFlavorParams;

util.inherits(VidiunMediaFlavorParams, VidiunFlavorParams);


/**
 */
function VidiunMediaInfoFilter(){
	VidiunMediaInfoFilter.super_.call(this);
}
module.exports.VidiunMediaInfoFilter = VidiunMediaInfoFilter;

util.inherits(VidiunMediaInfoFilter, VidiunMediaInfoBaseFilter);


/**
 * @param applicationName string Media server application name.
 * @param mediaServerPortConfig array Media server playback port configuration by protocol and format.
 * @param mediaServerPlaybackDomainConfig array Media server playback Domain configuration by protocol and format.
 */
function VidiunMediaServerNode(){
	VidiunMediaServerNode.super_.call(this);
	this.applicationName = null;
	this.mediaServerPortConfig = null;
	this.mediaServerPlaybackDomainConfig = null;
}
module.exports.VidiunMediaServerNode = VidiunMediaServerNode;

util.inherits(VidiunMediaServerNode, VidiunDeliveryServerNode);


/**
 * @param partnerIdEqual int .
 * @param metadataProfileIdEqual int .
 * @param metadataProfileIdIn string .
 * @param metadataProfileVersionEqual int .
 * @param metadataProfileVersionGreaterThanOrEqual int .
 * @param metadataProfileVersionLessThanOrEqual int .
 * @param metadataObjectTypeEqual string When null, default is VidiunMetadataObjectType::ENTRY.
 * @param objectIdEqual string .
 * @param objectIdIn string .
 * @param versionEqual int .
 * @param versionGreaterThanOrEqual int .
 * @param versionLessThanOrEqual int .
 * @param createdAtGreaterThanOrEqual int .
 * @param createdAtLessThanOrEqual int .
 * @param updatedAtGreaterThanOrEqual int .
 * @param updatedAtLessThanOrEqual int .
 * @param statusEqual int .
 * @param statusIn string .
 */
function VidiunMetadataBaseFilter(){
	VidiunMetadataBaseFilter.super_.call(this);
	this.partnerIdEqual = null;
	this.metadataProfileIdEqual = null;
	this.metadataProfileIdIn = null;
	this.metadataProfileVersionEqual = null;
	this.metadataProfileVersionGreaterThanOrEqual = null;
	this.metadataProfileVersionLessThanOrEqual = null;
	this.metadataObjectTypeEqual = null;
	this.objectIdEqual = null;
	this.objectIdIn = null;
	this.versionEqual = null;
	this.versionGreaterThanOrEqual = null;
	this.versionLessThanOrEqual = null;
	this.createdAtGreaterThanOrEqual = null;
	this.createdAtLessThanOrEqual = null;
	this.updatedAtGreaterThanOrEqual = null;
	this.updatedAtLessThanOrEqual = null;
	this.statusEqual = null;
	this.statusIn = null;
}
module.exports.VidiunMetadataBaseFilter = VidiunMetadataBaseFilter;

util.inherits(VidiunMetadataBaseFilter, VidiunRelatedFilter);


/**
 * @param xPath string May contain the full xpath to the field in three formats
 * 1. Slashed xPath, e.g. /metadata/myElementName
 * 2. Using local-name function, e.g. /[local-name()='metadata']/[local-name()='myElementName']
 * 3. Using only the field name, e.g. myElementName, it will be searched as //myElementName.
 * @param profileId int Metadata profile id.
 * @param profileSystemName string Metadata profile system name.
 * @param versionA string .
 * @param versionB string .
 */
function VidiunMetadataFieldChangedCondition(){
	VidiunMetadataFieldChangedCondition.super_.call(this);
	this.xPath = null;
	this.profileId = null;
	this.profileSystemName = null;
	this.versionA = null;
	this.versionB = null;
}
module.exports.VidiunMetadataFieldChangedCondition = VidiunMetadataFieldChangedCondition;

util.inherits(VidiunMetadataFieldChangedCondition, VidiunMatchCondition);


/**
 */
function VidiunMetadataProfileFilter(){
	VidiunMetadataProfileFilter.super_.call(this);
}
module.exports.VidiunMetadataProfileFilter = VidiunMetadataProfileFilter;

util.inherits(VidiunMetadataProfileFilter, VidiunMetadataProfileBaseFilter);


/**
 * @param metadataProfileId int .
 * @param orderBy string .
 */
function VidiunMetadataSearchItem(){
	VidiunMetadataSearchItem.super_.call(this);
	this.metadataProfileId = null;
	this.orderBy = null;
}
module.exports.VidiunMetadataSearchItem = VidiunMetadataSearchItem;

util.inherits(VidiunMetadataSearchItem, VidiunSearchOperator);


/**
 * @param resource VidiunContentResource Only VidiunEntryResource and VidiunAssetResource are supported.
 * @param operationAttributes array .
 * @param assetParamsId int ID of alternative asset params to be used instead of the system default flavor params.
 */
function VidiunOperationResource(){
	VidiunOperationResource.super_.call(this);
	this.resource = null;
	this.operationAttributes = null;
	this.assetParamsId = null;
}
module.exports.VidiunOperationResource = VidiunOperationResource;

util.inherits(VidiunOperationResource, VidiunContentResource);


/**
 */
function VidiunPartnerFilter(){
	VidiunPartnerFilter.super_.call(this);
}
module.exports.VidiunPartnerFilter = VidiunPartnerFilter;

util.inherits(VidiunPartnerFilter, VidiunPartnerBaseFilter);


/**
 * @param readonly bool .
 */
function VidiunPdfFlavorParams(){
	VidiunPdfFlavorParams.super_.call(this);
	this.readonly = null;
}
module.exports.VidiunPdfFlavorParams = VidiunPdfFlavorParams;

util.inherits(VidiunPdfFlavorParams, VidiunFlavorParams);


/**
 * @param idEqual int .
 * @param idIn string .
 * @param typeEqual int .
 * @param typeIn string .
 * @param nameEqual string .
 * @param nameIn string .
 * @param friendlyNameLike string .
 * @param descriptionLike string .
 * @param statusEqual int .
 * @param statusIn string .
 * @param partnerIdEqual int .
 * @param partnerIdIn string .
 * @param dependsOnPermissionNamesMultiLikeOr string .
 * @param dependsOnPermissionNamesMultiLikeAnd string .
 * @param tagsMultiLikeOr string .
 * @param tagsMultiLikeAnd string .
 * @param createdAtGreaterThanOrEqual int .
 * @param createdAtLessThanOrEqual int .
 * @param updatedAtGreaterThanOrEqual int .
 * @param updatedAtLessThanOrEqual int .
 */
function VidiunPermissionBaseFilter(){
	VidiunPermissionBaseFilter.super_.call(this);
	this.idEqual = null;
	this.idIn = null;
	this.typeEqual = null;
	this.typeIn = null;
	this.nameEqual = null;
	this.nameIn = null;
	this.friendlyNameLike = null;
	this.descriptionLike = null;
	this.statusEqual = null;
	this.statusIn = null;
	this.partnerIdEqual = null;
	this.partnerIdIn = null;
	this.dependsOnPermissionNamesMultiLikeOr = null;
	this.dependsOnPermissionNamesMultiLikeAnd = null;
	this.tagsMultiLikeOr = null;
	this.tagsMultiLikeAnd = null;
	this.createdAtGreaterThanOrEqual = null;
	this.createdAtLessThanOrEqual = null;
	this.updatedAtGreaterThanOrEqual = null;
	this.updatedAtLessThanOrEqual = null;
}
module.exports.VidiunPermissionBaseFilter = VidiunPermissionBaseFilter;

util.inherits(VidiunPermissionBaseFilter, VidiunRelatedFilter);


/**
 * @param idEqual int .
 * @param idIn string .
 * @param typeEqual string .
 * @param typeIn string .
 * @param partnerIdEqual int .
 * @param partnerIdIn string .
 * @param tagsMultiLikeOr string .
 * @param tagsMultiLikeAnd string .
 * @param createdAtGreaterThanOrEqual int .
 * @param createdAtLessThanOrEqual int .
 * @param updatedAtGreaterThanOrEqual int .
 * @param updatedAtLessThanOrEqual int .
 */
function VidiunPermissionItemBaseFilter(){
	VidiunPermissionItemBaseFilter.super_.call(this);
	this.idEqual = null;
	this.idIn = null;
	this.typeEqual = null;
	this.typeIn = null;
	this.partnerIdEqual = null;
	this.partnerIdIn = null;
	this.tagsMultiLikeOr = null;
	this.tagsMultiLikeAnd = null;
	this.createdAtGreaterThanOrEqual = null;
	this.createdAtLessThanOrEqual = null;
	this.updatedAtGreaterThanOrEqual = null;
	this.updatedAtLessThanOrEqual = null;
}
module.exports.VidiunPermissionItemBaseFilter = VidiunPermissionItemBaseFilter;

util.inherits(VidiunPermissionItemBaseFilter, VidiunRelatedFilter);


/**
 * @param flavorAssetId string .
 * @param createThumb bool Indicates if a thumbnail should be created.
 * @param thumbPath string The path of the created thumbnail.
 * @param thumbOffset int The position of the thumbnail in the media file.
 * @param thumbHeight int The height of the movie, will be used to comapare if this thumbnail is the best we can have.
 * @param thumbBitrate int The bit rate of the movie, will be used to comapare if this thumbnail is the best we can have.
 * @param customData string .
 */
function VidiunPostConvertJobData(){
	VidiunPostConvertJobData.super_.call(this);
	this.flavorAssetId = null;
	this.createThumb = null;
	this.thumbPath = null;
	this.thumbOffset = null;
	this.thumbHeight = null;
	this.thumbBitrate = null;
	this.customData = null;
}
module.exports.VidiunPostConvertJobData = VidiunPostConvertJobData;

util.inherits(VidiunPostConvertJobData, VidiunConvartableJobData);


/**
 * @param previewLength int The preview restriction length.
 */
function VidiunPreviewRestriction(){
	VidiunPreviewRestriction.super_.call(this);
	this.previewLength = null;
}
module.exports.VidiunPreviewRestriction = VidiunPreviewRestriction;

util.inherits(VidiunPreviewRestriction, VidiunSessionRestriction);


/**
 * @param entryIdEqual string This filter should be in use for retrieving only a specific quiz entry (identified by its entryId).
 * @param entryIdIn string This filter should be in use for retrieving few specific quiz entries (string should include comma separated list of entryId strings).
 */
function VidiunQuizFilter(){
	VidiunQuizFilter.super_.call(this);
	this.entryIdEqual = null;
	this.entryIdIn = null;
}
module.exports.VidiunQuizFilter = VidiunQuizFilter;

util.inherits(VidiunQuizFilter, VidiunRelatedFilter);


/**
 * @param protocol string http / https.
 * @param vsType int .
 * @param userRoles array .
 * @param cachedObjectType string Class name.
 * @param objectId string .
 * @param startObjectKey string .
 * @param endObjectKey string .
 */
function VidiunRecalculateResponseProfileCacheJobData(){
	VidiunRecalculateResponseProfileCacheJobData.super_.call(this);
	this.protocol = null;
	this.vsType = null;
	this.userRoles = null;
	this.cachedObjectType = null;
	this.objectId = null;
	this.startObjectKey = null;
	this.endObjectKey = null;
}
module.exports.VidiunRecalculateResponseProfileCacheJobData = VidiunRecalculateResponseProfileCacheJobData;

util.inherits(VidiunRecalculateResponseProfileCacheJobData, VidiunRecalculateCacheJobData);


/**
 */
function VidiunRecordScheduleEvent(){
	VidiunRecordScheduleEvent.super_.call(this);
}
module.exports.VidiunRecordScheduleEvent = VidiunRecordScheduleEvent;

util.inherits(VidiunRecordScheduleEvent, VidiunEntryScheduleEvent);


/**
 */
function VidiunRegexCondition(){
	VidiunRegexCondition.super_.call(this);
}
module.exports.VidiunRegexCondition = VidiunRegexCondition;

util.inherits(VidiunRegexCondition, VidiunMatchCondition);


/**
 * @param resources array Array of remote stoage resources.
 */
function VidiunRemoteStorageResources(){
	VidiunRemoteStorageResources.super_.call(this);
	this.resources = null;
}
module.exports.VidiunRemoteStorageResources = VidiunRemoteStorageResources;

util.inherits(VidiunRemoteStorageResources, VidiunContentResource);


/**
 */
function VidiunResponseProfileFilter(){
	VidiunResponseProfileFilter.super_.call(this);
}
module.exports.VidiunResponseProfileFilter = VidiunResponseProfileFilter;

util.inherits(VidiunResponseProfileFilter, VidiunResponseProfileBaseFilter);


/**
 * @param resourceIdsLike string .
 * @param resourceIdsMultiLikeOr string .
 * @param resourceIdsMultiLikeAnd string .
 * @param parentResourceIdsLike string .
 * @param parentResourceIdsMultiLikeOr string .
 * @param parentResourceIdsMultiLikeAnd string .
 */
function VidiunScheduleEventFilter(){
	VidiunScheduleEventFilter.super_.call(this);
	this.resourceIdsLike = null;
	this.resourceIdsMultiLikeOr = null;
	this.resourceIdsMultiLikeAnd = null;
	this.parentResourceIdsLike = null;
	this.parentResourceIdsMultiLikeOr = null;
	this.parentResourceIdsMultiLikeAnd = null;
}
module.exports.VidiunScheduleEventFilter = VidiunScheduleEventFilter;

util.inherits(VidiunScheduleEventFilter, VidiunScheduleEventBaseFilter);


/**
 */
function VidiunScheduleEventResourceFilter(){
	VidiunScheduleEventResourceFilter.super_.call(this);
}
module.exports.VidiunScheduleEventResourceFilter = VidiunScheduleEventResourceFilter;

util.inherits(VidiunScheduleEventResourceFilter, VidiunScheduleEventResourceBaseFilter);


/**
 */
function VidiunScheduleResourceFilter(){
	VidiunScheduleResourceFilter.super_.call(this);
}
module.exports.VidiunScheduleResourceFilter = VidiunScheduleResourceFilter;

util.inherits(VidiunScheduleResourceFilter, VidiunScheduleResourceBaseFilter);


/**
 */
function VidiunScheduledTaskProfileFilter(){
	VidiunScheduledTaskProfileFilter.super_.call(this);
}
module.exports.VidiunScheduledTaskProfileFilter = VidiunScheduledTaskProfileFilter;

util.inherits(VidiunScheduledTaskProfileFilter, VidiunScheduledTaskProfileBaseFilter);


/**
 * @param comparison string .
 */
function VidiunSearchComparableAttributeCondition(){
	VidiunSearchComparableAttributeCondition.super_.call(this);
	this.comparison = null;
}
module.exports.VidiunSearchComparableAttributeCondition = VidiunSearchComparableAttributeCondition;

util.inherits(VidiunSearchComparableAttributeCondition, VidiunAttributeCondition);


/**
 * @param comparison string .
 */
function VidiunSearchComparableCondition(){
	VidiunSearchComparableCondition.super_.call(this);
	this.comparison = null;
}
module.exports.VidiunSearchComparableCondition = VidiunSearchComparableCondition;

util.inherits(VidiunSearchComparableCondition, VidiunSearchCondition);


/**
 * @param not bool .
 */
function VidiunSearchMatchAttributeCondition(){
	VidiunSearchMatchAttributeCondition.super_.call(this);
	this.not = null;
}
module.exports.VidiunSearchMatchAttributeCondition = VidiunSearchMatchAttributeCondition;

util.inherits(VidiunSearchMatchAttributeCondition, VidiunAttributeCondition);


/**
 * @param not bool .
 */
function VidiunSearchMatchCondition(){
	VidiunSearchMatchCondition.super_.call(this);
	this.not = null;
}
module.exports.VidiunSearchMatchCondition = VidiunSearchMatchCondition;

util.inherits(VidiunSearchMatchCondition, VidiunSearchCondition);


/**
 */
function VidiunServerNodeFilter(){
	VidiunServerNodeFilter.super_.call(this);
}
module.exports.VidiunServerNodeFilter = VidiunServerNodeFilter;

util.inherits(VidiunServerNodeFilter, VidiunServerNodeBaseFilter);


/**
 */
function VidiunShortLinkFilter(){
	VidiunShortLinkFilter.super_.call(this);
}
module.exports.VidiunShortLinkFilter = VidiunShortLinkFilter;

util.inherits(VidiunShortLinkFilter, VidiunShortLinkBaseFilter);


/**
 */
function VidiunSiteCondition(){
	VidiunSiteCondition.super_.call(this);
}
module.exports.VidiunSiteCondition = VidiunSiteCondition;

util.inherits(VidiunSiteCondition, VidiunMatchCondition);


/**
 * @param host string .
 * @param port int .
 * @param username string .
 * @param password string .
 * @param privateKey string .
 * @param publicKey string .
 * @param passPhrase string .
 */
function VidiunSshDropFolder(){
	VidiunSshDropFolder.super_.call(this);
	this.host = null;
	this.port = null;
	this.username = null;
	this.password = null;
	this.privateKey = null;
	this.publicKey = null;
	this.passPhrase = null;
}
module.exports.VidiunSshDropFolder = VidiunSshDropFolder;

util.inherits(VidiunSshDropFolder, VidiunRemoteDropFolder);


/**
 * @param privateKey string .
 * @param publicKey string .
 * @param passPhrase string .
 */
function VidiunSshImportJobData(){
	VidiunSshImportJobData.super_.call(this);
	this.privateKey = null;
	this.publicKey = null;
	this.passPhrase = null;
}
module.exports.VidiunSshImportJobData = VidiunSshImportJobData;

util.inherits(VidiunSshImportJobData, VidiunImportJobData);


/**
 */
function VidiunStorageDeleteJobData(){
	VidiunStorageDeleteJobData.super_.call(this);
}
module.exports.VidiunStorageDeleteJobData = VidiunStorageDeleteJobData;

util.inherits(VidiunStorageDeleteJobData, VidiunStorageJobData);


/**
 * @param force bool .
 * @param createLink bool .
 */
function VidiunStorageExportJobData(){
	VidiunStorageExportJobData.super_.call(this);
	this.force = null;
	this.createLink = null;
}
module.exports.VidiunStorageExportJobData = VidiunStorageExportJobData;

util.inherits(VidiunStorageExportJobData, VidiunStorageJobData);


/**
 */
function VidiunStorageProfileFilter(){
	VidiunStorageProfileFilter.super_.call(this);
}
module.exports.VidiunStorageProfileFilter = VidiunStorageProfileFilter;

util.inherits(VidiunStorageProfileFilter, VidiunStorageProfileBaseFilter);


/**
 * @param content string Textual content.
 */
function VidiunStringResource(){
	VidiunStringResource.super_.call(this);
	this.content = null;
}
module.exports.VidiunStringResource = VidiunStringResource;

util.inherits(VidiunStringResource, VidiunContentResource);


/**
 * @param flashVersion int .
 * @param poly2Bitmap bool .
 */
function VidiunSwfFlavorParams(){
	VidiunSwfFlavorParams.super_.call(this);
	this.flashVersion = null;
	this.poly2Bitmap = null;
}
module.exports.VidiunSwfFlavorParams = VidiunSwfFlavorParams;

util.inherits(VidiunSwfFlavorParams, VidiunFlavorParams);


/**
 * @param cuePointId string Associated thumb cue point ID (insertOnly).
 */
function VidiunTimedThumbAsset(){
	VidiunTimedThumbAsset.super_.call(this);
	this.cuePointId = null;
}
module.exports.VidiunTimedThumbAsset = VidiunTimedThumbAsset;

util.inherits(VidiunTimedThumbAsset, VidiunThumbAsset);


/**
 */
function VidiunUiConfFilter(){
	VidiunUiConfFilter.super_.call(this);
}
module.exports.VidiunUiConfFilter = VidiunUiConfFilter;

util.inherits(VidiunUiConfFilter, VidiunUiConfBaseFilter);


/**
 */
function VidiunUploadTokenFilter(){
	VidiunUploadTokenFilter.super_.call(this);
}
module.exports.VidiunUploadTokenFilter = VidiunUploadTokenFilter;

util.inherits(VidiunUploadTokenFilter, VidiunUploadTokenBaseFilter);


/**
 * @param userIdEqualCurrent int .
 * @param isAnonymous int .
 */
function VidiunUserEntryFilter(){
	VidiunUserEntryFilter.super_.call(this);
	this.userIdEqualCurrent = null;
	this.isAnonymous = null;
}
module.exports.VidiunUserEntryFilter = VidiunUserEntryFilter;

util.inherits(VidiunUserEntryFilter, VidiunUserEntryBaseFilter);


/**
 * @param loginEmailEqual string .
 */
function VidiunUserLoginDataBaseFilter(){
	VidiunUserLoginDataBaseFilter.super_.call(this);
	this.loginEmailEqual = null;
}
module.exports.VidiunUserLoginDataBaseFilter = VidiunUserLoginDataBaseFilter;

util.inherits(VidiunUserLoginDataBaseFilter, VidiunRelatedFilter);


/**
 * @param idEqual int .
 * @param idIn string .
 * @param nameEqual string .
 * @param nameIn string .
 * @param systemNameEqual string .
 * @param systemNameIn string .
 * @param descriptionLike string .
 * @param statusEqual int .
 * @param statusIn string .
 * @param partnerIdEqual int .
 * @param partnerIdIn string .
 * @param tagsMultiLikeOr string .
 * @param tagsMultiLikeAnd string .
 * @param createdAtGreaterThanOrEqual int .
 * @param createdAtLessThanOrEqual int .
 * @param updatedAtGreaterThanOrEqual int .
 * @param updatedAtLessThanOrEqual int .
 */
function VidiunUserRoleBaseFilter(){
	VidiunUserRoleBaseFilter.super_.call(this);
	this.idEqual = null;
	this.idIn = null;
	this.nameEqual = null;
	this.nameIn = null;
	this.systemNameEqual = null;
	this.systemNameIn = null;
	this.descriptionLike = null;
	this.statusEqual = null;
	this.statusIn = null;
	this.partnerIdEqual = null;
	this.partnerIdIn = null;
	this.tagsMultiLikeOr = null;
	this.tagsMultiLikeAnd = null;
	this.createdAtGreaterThanOrEqual = null;
	this.createdAtLessThanOrEqual = null;
	this.updatedAtGreaterThanOrEqual = null;
	this.updatedAtLessThanOrEqual = null;
}
module.exports.VidiunUserRoleBaseFilter = VidiunUserRoleBaseFilter;

util.inherits(VidiunUserRoleBaseFilter, VidiunRelatedFilter);


/**
 * @param provisioningParams array .
 * @param userName string .
 * @param password string .
 */
function VidiunVelocixProvisionJobData(){
	VidiunVelocixProvisionJobData.super_.call(this);
	this.provisioningParams = null;
	this.userName = null;
	this.password = null;
}
module.exports.VidiunVelocixProvisionJobData = VidiunVelocixProvisionJobData;

util.inherits(VidiunVelocixProvisionJobData, VidiunProvisionJobData);


/**
 */
function VidiunVirusScanProfileFilter(){
	VidiunVirusScanProfileFilter.super_.call(this);
}
module.exports.VidiunVirusScanProfileFilter = VidiunVirusScanProfileFilter;

util.inherits(VidiunVirusScanProfileFilter, VidiunVirusScanProfileBaseFilter);


/**
 * @param description string .
 * @param webexHostId string .
 */
function VidiunWebexDropFolderContentProcessorJobData(){
	VidiunWebexDropFolderContentProcessorJobData.super_.call(this);
	this.description = null;
	this.webexHostId = null;
}
module.exports.VidiunWebexDropFolderContentProcessorJobData = VidiunWebexDropFolderContentProcessorJobData;

util.inherits(VidiunWebexDropFolderContentProcessorJobData, VidiunDropFolderContentProcessorJobData);


/**
 * @param widevineDistributionStartDate int License distribution window start date.
 * @param widevineDistributionEndDate int License distribution window end date.
 * @param widevineAssetId int Widevine unique asset id.
 */
function VidiunWidevineFlavorAsset(){
	VidiunWidevineFlavorAsset.super_.call(this);
	this.widevineDistributionStartDate = null;
	this.widevineDistributionEndDate = null;
	this.widevineAssetId = null;
}
module.exports.VidiunWidevineFlavorAsset = VidiunWidevineFlavorAsset;

util.inherits(VidiunWidevineFlavorAsset, VidiunFlavorAsset);


/**
 */
function VidiunWidevineFlavorParams(){
	VidiunWidevineFlavorParams.super_.call(this);
}
module.exports.VidiunWidevineFlavorParams = VidiunWidevineFlavorParams;

util.inherits(VidiunWidevineFlavorParams, VidiunFlavorParams);


/**
 */
function VidiunWidgetFilter(){
	VidiunWidgetFilter.super_.call(this);
}
module.exports.VidiunWidgetFilter = VidiunWidgetFilter;

util.inherits(VidiunWidgetFilter, VidiunWidgetBaseFilter);


/**
 */
function VidiunAccessControlFilter(){
	VidiunAccessControlFilter.super_.call(this);
}
module.exports.VidiunAccessControlFilter = VidiunAccessControlFilter;

util.inherits(VidiunAccessControlFilter, VidiunAccessControlBaseFilter);


/**
 */
function VidiunAccessControlProfileFilter(){
	VidiunAccessControlProfileFilter.super_.call(this);
}
module.exports.VidiunAccessControlProfileFilter = VidiunAccessControlProfileFilter;

util.inherits(VidiunAccessControlProfileFilter, VidiunAccessControlProfileBaseFilter);


/**
 */
function VidiunActivitiBusinessProcessServerBaseFilter(){
	VidiunActivitiBusinessProcessServerBaseFilter.super_.call(this);
}
module.exports.VidiunActivitiBusinessProcessServerBaseFilter = VidiunActivitiBusinessProcessServerBaseFilter;

util.inherits(VidiunActivitiBusinessProcessServerBaseFilter, VidiunBusinessProcessServerFilter);


/**
 * @param filesPermissionInS3 string .
 * @param s3Region string .
 */
function VidiunAmazonS3StorageExportJobData(){
	VidiunAmazonS3StorageExportJobData.super_.call(this);
	this.filesPermissionInS3 = null;
	this.s3Region = null;
}
module.exports.VidiunAmazonS3StorageExportJobData = VidiunAmazonS3StorageExportJobData;

util.inherits(VidiunAmazonS3StorageExportJobData, VidiunStorageExportJobData);


/**
 */
function VidiunAmazonS3StorageProfileBaseFilter(){
	VidiunAmazonS3StorageProfileBaseFilter.super_.call(this);
}
module.exports.VidiunAmazonS3StorageProfileBaseFilter = VidiunAmazonS3StorageProfileBaseFilter;

util.inherits(VidiunAmazonS3StorageProfileBaseFilter, VidiunStorageProfileFilter);


/**
 */
function VidiunAssetFilter(){
	VidiunAssetFilter.super_.call(this);
}
module.exports.VidiunAssetFilter = VidiunAssetFilter;

util.inherits(VidiunAssetFilter, VidiunAssetBaseFilter);


/**
 */
function VidiunAssetParamsFilter(){
	VidiunAssetParamsFilter.super_.call(this);
}
module.exports.VidiunAssetParamsFilter = VidiunAssetParamsFilter;

util.inherits(VidiunAssetParamsFilter, VidiunAssetParamsBaseFilter);


/**
 */
function VidiunAuditTrailFilter(){
	VidiunAuditTrailFilter.super_.call(this);
}
module.exports.VidiunAuditTrailFilter = VidiunAuditTrailFilter;

util.inherits(VidiunAuditTrailFilter, VidiunAuditTrailBaseFilter);


/**
 * @param attribute string .
 */
function VidiunBaseEntryCompareAttributeCondition(){
	VidiunBaseEntryCompareAttributeCondition.super_.call(this);
	this.attribute = null;
}
module.exports.VidiunBaseEntryCompareAttributeCondition = VidiunBaseEntryCompareAttributeCondition;

util.inherits(VidiunBaseEntryCompareAttributeCondition, VidiunSearchComparableAttributeCondition);


/**
 * @param attribute string .
 */
function VidiunBaseEntryMatchAttributeCondition(){
	VidiunBaseEntryMatchAttributeCondition.super_.call(this);
	this.attribute = null;
}
module.exports.VidiunBaseEntryMatchAttributeCondition = VidiunBaseEntryMatchAttributeCondition;

util.inherits(VidiunBaseEntryMatchAttributeCondition, VidiunSearchMatchAttributeCondition);


/**
 * @param jobTypeAndSubTypeIn string .
 */
function VidiunBatchJobFilterExt(){
	VidiunBatchJobFilterExt.super_.call(this);
	this.jobTypeAndSubTypeIn = null;
}
module.exports.VidiunBatchJobFilterExt = VidiunBatchJobFilterExt;

util.inherits(VidiunBatchJobFilterExt, VidiunBatchJobFilter);


/**
 */
function VidiunBusinessProcessNotificationTemplateBaseFilter(){
	VidiunBusinessProcessNotificationTemplateBaseFilter.super_.call(this);
}
module.exports.VidiunBusinessProcessNotificationTemplateBaseFilter = VidiunBusinessProcessNotificationTemplateBaseFilter;

util.inherits(VidiunBusinessProcessNotificationTemplateBaseFilter, VidiunEventNotificationTemplateFilter);


/**
 */
function VidiunCameraScheduleResourceBaseFilter(){
	VidiunCameraScheduleResourceBaseFilter.super_.call(this);
}
module.exports.VidiunCameraScheduleResourceBaseFilter = VidiunCameraScheduleResourceBaseFilter;

util.inherits(VidiunCameraScheduleResourceBaseFilter, VidiunScheduleResourceFilter);

/**
 *
 */
function VidiunBeaconFilter() {
    VidiunBeaconFilter.super_.call(this);
}
module.exports.VidiunBeaconFilter = VidiunBeaconFilter;
util.inherits(VidiunBeaconFilter, VidiunBeaconBaseFilter);

/**
 */
function VidiunCategoryEntryFilter(){
	VidiunCategoryEntryFilter.super_.call(this);
}
module.exports.VidiunCategoryEntryFilter = VidiunCategoryEntryFilter;

util.inherits(VidiunCategoryEntryFilter, VidiunCategoryEntryBaseFilter);


/**
 * @param freeText string .
 * @param membersIn string .
 * @param nameOrReferenceIdStartsWith string .
 * @param managerEqual string .
 * @param memberEqual string .
 * @param fullNameStartsWithIn string .
 * @param ancestorIdIn string not includes the category itself (only sub categories).
 * @param idOrInheritedParentIdIn string .
 */
function VidiunCategoryFilter(){
	VidiunCategoryFilter.super_.call(this);
	this.freeText = null;
	this.membersIn = null;
	this.nameOrReferenceIdStartsWith = null;
	this.managerEqual = null;
	this.memberEqual = null;
	this.fullNameStartsWithIn = null;
	this.ancestorIdIn = null;
	this.idOrInheritedParentIdIn = null;
}
module.exports.VidiunCategoryFilter = VidiunCategoryFilter;

util.inherits(VidiunCategoryFilter, VidiunCategoryBaseFilter);


/**
 */
function VidiunConfigurableDistributionProfileBaseFilter(){
	VidiunConfigurableDistributionProfileBaseFilter.super_.call(this);
}
module.exports.VidiunConfigurableDistributionProfileBaseFilter = VidiunConfigurableDistributionProfileBaseFilter;

util.inherits(VidiunConfigurableDistributionProfileBaseFilter, VidiunDistributionProfileFilter);


/**
 */
function VidiunConversionProfileFilter(){
	VidiunConversionProfileFilter.super_.call(this);
}
module.exports.VidiunConversionProfileFilter = VidiunConversionProfileFilter;

util.inherits(VidiunConversionProfileFilter, VidiunConversionProfileBaseFilter);


/**
 * @param conversionProfileIdFilter VidiunConversionProfileFilter .
 * @param assetParamsIdFilter VidiunAssetParamsFilter .
 */
function VidiunConversionProfileAssetParamsFilter(){
	VidiunConversionProfileAssetParamsFilter.super_.call(this);
	this.conversionProfileIdFilter = null;
	this.assetParamsIdFilter = null;
}
module.exports.VidiunConversionProfileAssetParamsFilter = VidiunConversionProfileAssetParamsFilter;

util.inherits(VidiunConversionProfileAssetParamsFilter, VidiunConversionProfileAssetParamsBaseFilter);


/**
 * @param geoCoderType string The ip geo coder engine to be used.
 */
function VidiunCoordinatesContextField(){
	VidiunCoordinatesContextField.super_.call(this);
	this.geoCoderType = null;
}
module.exports.VidiunCoordinatesContextField = VidiunCoordinatesContextField;

util.inherits(VidiunCoordinatesContextField, VidiunStringField);


/**
 * @param geoCoderType string The ip geo coder engine to be used.
 */
function VidiunCountryContextField(){
	VidiunCountryContextField.super_.call(this);
	this.geoCoderType = null;
}
module.exports.VidiunCountryContextField = VidiunCountryContextField;

util.inherits(VidiunCountryContextField, VidiunStringField);


/**
 * @param freeText string .
 * @param userIdEqualCurrent int .
 * @param userIdCurrent int .
 */
function VidiunCuePointFilter(){
	VidiunCuePointFilter.super_.call(this);
	this.freeText = null;
	this.userIdEqualCurrent = null;
	this.userIdCurrent = null;
}
module.exports.VidiunCuePointFilter = VidiunCuePointFilter;

util.inherits(VidiunCuePointFilter, VidiunCuePointBaseFilter);


/**
 * @param attribute string .
 */
function VidiunDataEntryCompareAttributeCondition(){
	VidiunDataEntryCompareAttributeCondition.super_.call(this);
	this.attribute = null;
}
module.exports.VidiunDataEntryCompareAttributeCondition = VidiunDataEntryCompareAttributeCondition;

util.inherits(VidiunDataEntryCompareAttributeCondition, VidiunSearchComparableAttributeCondition);


/**
 * @param attribute string .
 */
function VidiunDataEntryMatchAttributeCondition(){
	VidiunDataEntryMatchAttributeCondition.super_.call(this);
	this.attribute = null;
}
module.exports.VidiunDataEntryMatchAttributeCondition = VidiunDataEntryMatchAttributeCondition;

util.inherits(VidiunDataEntryMatchAttributeCondition, VidiunSearchMatchAttributeCondition);


/**
 */
function VidiunDeliveryProfileAkamaiAppleHttpManifestBaseFilter(){
	VidiunDeliveryProfileAkamaiAppleHttpManifestBaseFilter.super_.call(this);
}
module.exports.VidiunDeliveryProfileAkamaiAppleHttpManifestBaseFilter = VidiunDeliveryProfileAkamaiAppleHttpManifestBaseFilter;

util.inherits(VidiunDeliveryProfileAkamaiAppleHttpManifestBaseFilter, VidiunDeliveryProfileFilter);


/**
 */
function VidiunDeliveryProfileAkamaiHdsBaseFilter(){
	VidiunDeliveryProfileAkamaiHdsBaseFilter.super_.call(this);
}
module.exports.VidiunDeliveryProfileAkamaiHdsBaseFilter = VidiunDeliveryProfileAkamaiHdsBaseFilter;

util.inherits(VidiunDeliveryProfileAkamaiHdsBaseFilter, VidiunDeliveryProfileFilter);


/**
 */
function VidiunDeliveryProfileAkamaiHttpBaseFilter(){
	VidiunDeliveryProfileAkamaiHttpBaseFilter.super_.call(this);
}
module.exports.VidiunDeliveryProfileAkamaiHttpBaseFilter = VidiunDeliveryProfileAkamaiHttpBaseFilter;

util.inherits(VidiunDeliveryProfileAkamaiHttpBaseFilter, VidiunDeliveryProfileFilter);


/**
 */
function VidiunDeliveryProfileGenericAppleHttpBaseFilter(){
	VidiunDeliveryProfileGenericAppleHttpBaseFilter.super_.call(this);
}
module.exports.VidiunDeliveryProfileGenericAppleHttpBaseFilter = VidiunDeliveryProfileGenericAppleHttpBaseFilter;

util.inherits(VidiunDeliveryProfileGenericAppleHttpBaseFilter, VidiunDeliveryProfileFilter);


/**
 */
function VidiunDeliveryProfileGenericHdsBaseFilter(){
	VidiunDeliveryProfileGenericHdsBaseFilter.super_.call(this);
}
module.exports.VidiunDeliveryProfileGenericHdsBaseFilter = VidiunDeliveryProfileGenericHdsBaseFilter;

util.inherits(VidiunDeliveryProfileGenericHdsBaseFilter, VidiunDeliveryProfileFilter);


/**
 */
function VidiunDeliveryProfileGenericHttpBaseFilter(){
	VidiunDeliveryProfileGenericHttpBaseFilter.super_.call(this);
}
module.exports.VidiunDeliveryProfileGenericHttpBaseFilter = VidiunDeliveryProfileGenericHttpBaseFilter;

util.inherits(VidiunDeliveryProfileGenericHttpBaseFilter, VidiunDeliveryProfileFilter);


/**
 */
function VidiunDeliveryProfileGenericSilverLightBaseFilter(){
	VidiunDeliveryProfileGenericSilverLightBaseFilter.super_.call(this);
}
module.exports.VidiunDeliveryProfileGenericSilverLightBaseFilter = VidiunDeliveryProfileGenericSilverLightBaseFilter;

util.inherits(VidiunDeliveryProfileGenericSilverLightBaseFilter, VidiunDeliveryProfileFilter);


/**
 */
function VidiunDeliveryProfileLiveAppleHttpBaseFilter(){
	VidiunDeliveryProfileLiveAppleHttpBaseFilter.super_.call(this);
}
module.exports.VidiunDeliveryProfileLiveAppleHttpBaseFilter = VidiunDeliveryProfileLiveAppleHttpBaseFilter;

util.inherits(VidiunDeliveryProfileLiveAppleHttpBaseFilter, VidiunDeliveryProfileFilter);


/**
 */
function VidiunDeliveryProfileRtmpBaseFilter(){
	VidiunDeliveryProfileRtmpBaseFilter.super_.call(this);
}
module.exports.VidiunDeliveryProfileRtmpBaseFilter = VidiunDeliveryProfileRtmpBaseFilter;

util.inherits(VidiunDeliveryProfileRtmpBaseFilter, VidiunDeliveryProfileFilter);


/**
 * @param playbackDomainLike string .
 * @param playbackDomainMultiLikeOr string .
 * @param playbackDomainMultiLikeAnd string .
 */
function VidiunDeliveryServerNodeBaseFilter(){
	VidiunDeliveryServerNodeBaseFilter.super_.call(this);
	this.playbackDomainLike = null;
	this.playbackDomainMultiLikeOr = null;
	this.playbackDomainMultiLikeAnd = null;
}
module.exports.VidiunDeliveryServerNodeBaseFilter = VidiunDeliveryServerNodeBaseFilter;

util.inherits(VidiunDeliveryServerNodeBaseFilter, VidiunServerNodeFilter);


/**
 */
function VidiunDistributionDisableJobData(){
	VidiunDistributionDisableJobData.super_.call(this);
}
module.exports.VidiunDistributionDisableJobData = VidiunDistributionDisableJobData;

util.inherits(VidiunDistributionDisableJobData, VidiunDistributionUpdateJobData);


/**
 */
function VidiunDistributionEnableJobData(){
	VidiunDistributionEnableJobData.super_.call(this);
}
module.exports.VidiunDistributionEnableJobData = VidiunDistributionEnableJobData;

util.inherits(VidiunDistributionEnableJobData, VidiunDistributionUpdateJobData);


/**
 * @param attribute string .
 */
function VidiunDocumentEntryCompareAttributeCondition(){
	VidiunDocumentEntryCompareAttributeCondition.super_.call(this);
	this.attribute = null;
}
module.exports.VidiunDocumentEntryCompareAttributeCondition = VidiunDocumentEntryCompareAttributeCondition;

util.inherits(VidiunDocumentEntryCompareAttributeCondition, VidiunSearchComparableAttributeCondition);


/**
 * @param attribute string .
 */
function VidiunDocumentEntryMatchAttributeCondition(){
	VidiunDocumentEntryMatchAttributeCondition.super_.call(this);
	this.attribute = null;
}
module.exports.VidiunDocumentEntryMatchAttributeCondition = VidiunDocumentEntryMatchAttributeCondition;

util.inherits(VidiunDocumentEntryMatchAttributeCondition, VidiunSearchMatchAttributeCondition);


/**
 */
function VidiunDocumentFlavorParamsOutput(){
	VidiunDocumentFlavorParamsOutput.super_.call(this);
}
module.exports.VidiunDocumentFlavorParamsOutput = VidiunDocumentFlavorParamsOutput;

util.inherits(VidiunDocumentFlavorParamsOutput, VidiunFlavorParamsOutput);


/**
 * @param dropFolderFileId int Id of the drop folder file object.
 */
function VidiunDropFolderFileResource(){
	VidiunDropFolderFileResource.super_.call(this);
	this.dropFolderFileId = null;
}
module.exports.VidiunDropFolderFileResource = VidiunDropFolderFileResource;

util.inherits(VidiunDropFolderFileResource, VidiunDataCenterContentResource);


/**
 * @param dropFolderFileId int .
 */
function VidiunDropFolderImportJobData(){
	VidiunDropFolderImportJobData.super_.call(this);
	this.dropFolderFileId = null;
}
module.exports.VidiunDropFolderImportJobData = VidiunDropFolderImportJobData;

util.inherits(VidiunDropFolderImportJobData, VidiunSshImportJobData);


/**
 */
function VidiunEmailNotificationTemplateBaseFilter(){
	VidiunEmailNotificationTemplateBaseFilter.super_.call(this);
}
module.exports.VidiunEmailNotificationTemplateBaseFilter = VidiunEmailNotificationTemplateBaseFilter;

util.inherits(VidiunEmailNotificationTemplateBaseFilter, VidiunEventNotificationTemplateFilter);


/**
 */
function VidiunEntryDistributionFilter(){
	VidiunEntryDistributionFilter.super_.call(this);
}
module.exports.VidiunEntryDistributionFilter = VidiunEntryDistributionFilter;

util.inherits(VidiunEntryDistributionFilter, VidiunEntryDistributionBaseFilter);


/**
 * @param entryIdsLike string .
 * @param entryIdsMultiLikeOr string .
 * @param entryIdsMultiLikeAnd string .
 * @param categoryIdsLike string .
 * @param categoryIdsMultiLikeOr string .
 * @param categoryIdsMultiLikeAnd string .
 */
function VidiunEntryScheduleEventBaseFilter(){
	VidiunEntryScheduleEventBaseFilter.super_.call(this);
	this.entryIdsLike = null;
	this.entryIdsMultiLikeOr = null;
	this.entryIdsMultiLikeAnd = null;
	this.categoryIdsLike = null;
	this.categoryIdsMultiLikeOr = null;
	this.categoryIdsMultiLikeAnd = null;
}
module.exports.VidiunEntryScheduleEventBaseFilter = VidiunEntryScheduleEventBaseFilter;

util.inherits(VidiunEntryScheduleEventBaseFilter, VidiunScheduleEventFilter);


/**
 */
function VidiunEntryServerNodeFilter(){
	VidiunEntryServerNodeFilter.super_.call(this);
}
module.exports.VidiunEntryServerNodeFilter = VidiunEntryServerNodeFilter;

util.inherits(VidiunEntryServerNodeFilter, VidiunEntryServerNodeBaseFilter);

/**
 */
function VidiunLiveEntryServerNodeFilter(){
	VidiunLiveEntryServerNodeFilter.super_.call(this);
}
module.exports.VidiunLiveEntryServerNodeFilter = VidiunLiveEntryServerNodeFilter;

util.inherits(VidiunLiveEntryServerNodeFilter, VidiunEntryServerNodeFilter);


/**
 * @param code string PHP code.
 */
function VidiunEvalBooleanField(){
	VidiunEvalBooleanField.super_.call(this);
	this.code = null;
}
module.exports.VidiunEvalBooleanField = VidiunEvalBooleanField;

util.inherits(VidiunEvalBooleanField, VidiunBooleanField);


/**
 * @param code string PHP code.
 */
function VidiunEvalStringField(){
	VidiunEvalStringField.super_.call(this);
	this.code = null;
}
module.exports.VidiunEvalStringField = VidiunEvalStringField;

util.inherits(VidiunEvalStringField, VidiunStringField);


/**
 * @param attribute string .
 */
function VidiunExternalMediaEntryCompareAttributeCondition(){
	VidiunExternalMediaEntryCompareAttributeCondition.super_.call(this);
	this.attribute = null;
}
module.exports.VidiunExternalMediaEntryCompareAttributeCondition = VidiunExternalMediaEntryCompareAttributeCondition;

util.inherits(VidiunExternalMediaEntryCompareAttributeCondition, VidiunSearchComparableAttributeCondition);


/**
 * @param attribute string .
 */
function VidiunExternalMediaEntryMatchAttributeCondition(){
	VidiunExternalMediaEntryMatchAttributeCondition.super_.call(this);
	this.attribute = null;
}
module.exports.VidiunExternalMediaEntryMatchAttributeCondition = VidiunExternalMediaEntryMatchAttributeCondition;

util.inherits(VidiunExternalMediaEntryMatchAttributeCondition, VidiunSearchMatchAttributeCondition);


/**
 */
function VidiunFileAssetFilter(){
	VidiunFileAssetFilter.super_.call(this);
}
module.exports.VidiunFileAssetFilter = VidiunFileAssetFilter;

util.inherits(VidiunFileAssetFilter, VidiunFileAssetBaseFilter);


/**
 */
function VidiunGenericDistributionProfileBaseFilter(){
	VidiunGenericDistributionProfileBaseFilter.super_.call(this);
}
module.exports.VidiunGenericDistributionProfileBaseFilter = VidiunGenericDistributionProfileBaseFilter;

util.inherits(VidiunGenericDistributionProfileBaseFilter, VidiunDistributionProfileFilter);


/**
 * @param idEqual int .
 * @param idIn string .
 * @param createdAtGreaterThanOrEqual int .
 * @param createdAtLessThanOrEqual int .
 * @param updatedAtGreaterThanOrEqual int .
 * @param updatedAtLessThanOrEqual int .
 * @param partnerIdEqual int .
 * @param partnerIdIn string .
 * @param isDefaultEqual int .
 * @param isDefaultIn string .
 * @param statusEqual int .
 * @param statusIn string .
 */
function VidiunGenericDistributionProviderBaseFilter(){
	VidiunGenericDistributionProviderBaseFilter.super_.call(this);
	this.idEqual = null;
	this.idIn = null;
	this.createdAtGreaterThanOrEqual = null;
	this.createdAtLessThanOrEqual = null;
	this.updatedAtGreaterThanOrEqual = null;
	this.updatedAtLessThanOrEqual = null;
	this.partnerIdEqual = null;
	this.partnerIdIn = null;
	this.isDefaultEqual = null;
	this.isDefaultIn = null;
	this.statusEqual = null;
	this.statusIn = null;
}
module.exports.VidiunGenericDistributionProviderBaseFilter = VidiunGenericDistributionProviderBaseFilter;

util.inherits(VidiunGenericDistributionProviderBaseFilter, VidiunDistributionProviderFilter);


/**
 */
function VidiunGenericSyndicationFeedBaseFilter(){
	VidiunGenericSyndicationFeedBaseFilter.super_.call(this);
}
module.exports.VidiunGenericSyndicationFeedBaseFilter = VidiunGenericSyndicationFeedBaseFilter;

util.inherits(VidiunGenericSyndicationFeedBaseFilter, VidiunBaseSyndicationFeedFilter);


/**
 */
function VidiunGoogleVideoSyndicationFeedBaseFilter(){
	VidiunGoogleVideoSyndicationFeedBaseFilter.super_.call(this);
}
module.exports.VidiunGoogleVideoSyndicationFeedBaseFilter = VidiunGoogleVideoSyndicationFeedBaseFilter;

util.inherits(VidiunGoogleVideoSyndicationFeedBaseFilter, VidiunBaseSyndicationFeedFilter);


/**
 */
function VidiunGroupUserFilter(){
	VidiunGroupUserFilter.super_.call(this);
}
module.exports.VidiunGroupUserFilter = VidiunGroupUserFilter;

util.inherits(VidiunGroupUserFilter, VidiunGroupUserBaseFilter);


/**
 */
function VidiunHttpNotificationTemplateBaseFilter(){
	VidiunHttpNotificationTemplateBaseFilter.super_.call(this);
}
module.exports.VidiunHttpNotificationTemplateBaseFilter = VidiunHttpNotificationTemplateBaseFilter;

util.inherits(VidiunHttpNotificationTemplateBaseFilter, VidiunEventNotificationTemplateFilter);


/**
 */
function VidiunITunesSyndicationFeedBaseFilter(){
	VidiunITunesSyndicationFeedBaseFilter.super_.call(this);
}
module.exports.VidiunITunesSyndicationFeedBaseFilter = VidiunITunesSyndicationFeedBaseFilter;

util.inherits(VidiunITunesSyndicationFeedBaseFilter, VidiunBaseSyndicationFeedFilter);


/**
 * @param densityWidth int .
 * @param densityHeight int .
 * @param sizeWidth int .
 * @param sizeHeight int .
 * @param depth int .
 */
function VidiunImageFlavorParamsOutput(){
	VidiunImageFlavorParamsOutput.super_.call(this);
	this.densityWidth = null;
	this.densityHeight = null;
	this.sizeWidth = null;
	this.sizeHeight = null;
	this.depth = null;
}
module.exports.VidiunImageFlavorParamsOutput = VidiunImageFlavorParamsOutput;

util.inherits(VidiunImageFlavorParamsOutput, VidiunFlavorParamsOutput);


/**
 */
function VidiunIpAddressContextField(){
	VidiunIpAddressContextField.super_.call(this);
}
module.exports.VidiunIpAddressContextField = VidiunIpAddressContextField;

util.inherits(VidiunIpAddressContextField, VidiunStringField);


/**
 * @param contentMoid string Unique Kontiki MOID for the content uploaded to Kontiki.
 * @param serviceToken string .
 */
function VidiunKontikiStorageDeleteJobData(){
	VidiunKontikiStorageDeleteJobData.super_.call(this);
	this.contentMoid = null;
	this.serviceToken = null;
}
module.exports.VidiunKontikiStorageDeleteJobData = VidiunKontikiStorageDeleteJobData;

util.inherits(VidiunKontikiStorageDeleteJobData, VidiunStorageDeleteJobData);


/**
 * @param flavorAssetId string Holds the id of the exported asset.
 * @param contentMoid string Unique Kontiki MOID for the content uploaded to Kontiki.
 * @param serviceToken string .
 */
function VidiunKontikiStorageExportJobData(){
	VidiunKontikiStorageExportJobData.super_.call(this);
	this.flavorAssetId = null;
	this.contentMoid = null;
	this.serviceToken = null;
}
module.exports.VidiunKontikiStorageExportJobData = VidiunKontikiStorageExportJobData;

util.inherits(VidiunKontikiStorageExportJobData, VidiunStorageExportJobData);


/**
 */
function VidiunKontikiStorageProfileBaseFilter(){
	VidiunKontikiStorageProfileBaseFilter.super_.call(this);
}
module.exports.VidiunKontikiStorageProfileBaseFilter = VidiunKontikiStorageProfileBaseFilter;

util.inherits(VidiunKontikiStorageProfileBaseFilter, VidiunStorageProfileFilter);


/**
 */
function VidiunLikeFilter(){
	VidiunLikeFilter.super_.call(this);
}
module.exports.VidiunLikeFilter = VidiunLikeFilter;

util.inherits(VidiunLikeFilter, VidiunLikeBaseFilter);


/**
 * @param attribute string .
 */
function VidiunLiveChannelCompareAttributeCondition(){
	VidiunLiveChannelCompareAttributeCondition.super_.call(this);
	this.attribute = null;
}
module.exports.VidiunLiveChannelCompareAttributeCondition = VidiunLiveChannelCompareAttributeCondition;

util.inherits(VidiunLiveChannelCompareAttributeCondition, VidiunSearchComparableAttributeCondition);


/**
 * @param attribute string .
 */
function VidiunLiveChannelMatchAttributeCondition(){
	VidiunLiveChannelMatchAttributeCondition.super_.call(this);
	this.attribute = null;
}
module.exports.VidiunLiveChannelMatchAttributeCondition = VidiunLiveChannelMatchAttributeCondition;

util.inherits(VidiunLiveChannelMatchAttributeCondition, VidiunSearchMatchAttributeCondition);


/**
 */
function VidiunLiveChannelSegmentFilter(){
	VidiunLiveChannelSegmentFilter.super_.call(this);
}
module.exports.VidiunLiveChannelSegmentFilter = VidiunLiveChannelSegmentFilter;

util.inherits(VidiunLiveChannelSegmentFilter, VidiunLiveChannelSegmentBaseFilter);


/**
 * @param attribute string .
 */
function VidiunLiveEntryCompareAttributeCondition(){
	VidiunLiveEntryCompareAttributeCondition.super_.call(this);
	this.attribute = null;
}
module.exports.VidiunLiveEntryCompareAttributeCondition = VidiunLiveEntryCompareAttributeCondition;

util.inherits(VidiunLiveEntryCompareAttributeCondition, VidiunSearchComparableAttributeCondition);


/**
 * @param attribute string .
 */
function VidiunLiveEntryMatchAttributeCondition(){
	VidiunLiveEntryMatchAttributeCondition.super_.call(this);
	this.attribute = null;
}
module.exports.VidiunLiveEntryMatchAttributeCondition = VidiunLiveEntryMatchAttributeCondition;

util.inherits(VidiunLiveEntryMatchAttributeCondition, VidiunSearchMatchAttributeCondition);


/**
 */
function VidiunLiveEntryScheduleResourceBaseFilter(){
	VidiunLiveEntryScheduleResourceBaseFilter.super_.call(this);
}
module.exports.VidiunLiveEntryScheduleResourceBaseFilter = VidiunLiveEntryScheduleResourceBaseFilter;

util.inherits(VidiunLiveEntryScheduleResourceBaseFilter, VidiunScheduleResourceFilter);


/**
 * @param attribute string .
 */
function VidiunLiveStreamAdminEntryCompareAttributeCondition(){
	VidiunLiveStreamAdminEntryCompareAttributeCondition.super_.call(this);
	this.attribute = null;
}
module.exports.VidiunLiveStreamAdminEntryCompareAttributeCondition = VidiunLiveStreamAdminEntryCompareAttributeCondition;

util.inherits(VidiunLiveStreamAdminEntryCompareAttributeCondition, VidiunSearchComparableAttributeCondition);


/**
 * @param attribute string .
 */
function VidiunLiveStreamAdminEntryMatchAttributeCondition(){
	VidiunLiveStreamAdminEntryMatchAttributeCondition.super_.call(this);
	this.attribute = null;
}
module.exports.VidiunLiveStreamAdminEntryMatchAttributeCondition = VidiunLiveStreamAdminEntryMatchAttributeCondition;

util.inherits(VidiunLiveStreamAdminEntryMatchAttributeCondition, VidiunSearchMatchAttributeCondition);


/**
 * @param attribute string .
 */
function VidiunLiveStreamEntryCompareAttributeCondition(){
	VidiunLiveStreamEntryCompareAttributeCondition.super_.call(this);
	this.attribute = null;
}
module.exports.VidiunLiveStreamEntryCompareAttributeCondition = VidiunLiveStreamEntryCompareAttributeCondition;

util.inherits(VidiunLiveStreamEntryCompareAttributeCondition, VidiunSearchComparableAttributeCondition);


/**
 * @param attribute string .
 */
function VidiunLiveStreamEntryMatchAttributeCondition(){
	VidiunLiveStreamEntryMatchAttributeCondition.super_.call(this);
	this.attribute = null;
}
module.exports.VidiunLiveStreamEntryMatchAttributeCondition = VidiunLiveStreamEntryMatchAttributeCondition;

util.inherits(VidiunLiveStreamEntryMatchAttributeCondition, VidiunSearchMatchAttributeCondition);


/**
 */
function VidiunLocationScheduleResourceBaseFilter(){
	VidiunLocationScheduleResourceBaseFilter.super_.call(this);
}
module.exports.VidiunLocationScheduleResourceBaseFilter = VidiunLocationScheduleResourceBaseFilter;

util.inherits(VidiunLocationScheduleResourceBaseFilter, VidiunScheduleResourceFilter);


/**
 * @param attribute string .
 */
function VidiunMediaEntryCompareAttributeCondition(){
	VidiunMediaEntryCompareAttributeCondition.super_.call(this);
	this.attribute = null;
}
module.exports.VidiunMediaEntryCompareAttributeCondition = VidiunMediaEntryCompareAttributeCondition;

util.inherits(VidiunMediaEntryCompareAttributeCondition, VidiunSearchComparableAttributeCondition);


/**
 * @param attribute string .
 */
function VidiunMediaEntryMatchAttributeCondition(){
	VidiunMediaEntryMatchAttributeCondition.super_.call(this);
	this.attribute = null;
}
module.exports.VidiunMediaEntryMatchAttributeCondition = VidiunMediaEntryMatchAttributeCondition;

util.inherits(VidiunMediaEntryMatchAttributeCondition, VidiunSearchMatchAttributeCondition);


/**
 */
function VidiunMediaFlavorParamsOutput(){
	VidiunMediaFlavorParamsOutput.super_.call(this);
}
module.exports.VidiunMediaFlavorParamsOutput = VidiunMediaFlavorParamsOutput;

util.inherits(VidiunMediaFlavorParamsOutput, VidiunFlavorParamsOutput);


/**
 */
function VidiunMetadataFilter(){
	VidiunMetadataFilter.super_.call(this);
}
module.exports.VidiunMetadataFilter = VidiunMetadataFilter;

util.inherits(VidiunMetadataFilter, VidiunMetadataBaseFilter);


/**
 * @param attribute string .
 */
function VidiunMixEntryCompareAttributeCondition(){
	VidiunMixEntryCompareAttributeCondition.super_.call(this);
	this.attribute = null;
}
module.exports.VidiunMixEntryCompareAttributeCondition = VidiunMixEntryCompareAttributeCondition;

util.inherits(VidiunMixEntryCompareAttributeCondition, VidiunSearchComparableAttributeCondition);


/**
 * @param attribute string .
 */
function VidiunMixEntryMatchAttributeCondition(){
	VidiunMixEntryMatchAttributeCondition.super_.call(this);
	this.attribute = null;
}
module.exports.VidiunMixEntryMatchAttributeCondition = VidiunMixEntryMatchAttributeCondition;

util.inherits(VidiunMixEntryMatchAttributeCondition, VidiunSearchMatchAttributeCondition);


/**
 */
function VidiunObjectIdField(){
	VidiunObjectIdField.super_.call(this);
}
module.exports.VidiunObjectIdField = VidiunObjectIdField;

util.inherits(VidiunObjectIdField, VidiunStringField);


/**
 * @param readonly bool .
 */
function VidiunPdfFlavorParamsOutput(){
	VidiunPdfFlavorParamsOutput.super_.call(this);
	this.readonly = null;
}
module.exports.VidiunPdfFlavorParamsOutput = VidiunPdfFlavorParamsOutput;

util.inherits(VidiunPdfFlavorParamsOutput, VidiunFlavorParamsOutput);


/**
 */
function VidiunPermissionFilter(){
	VidiunPermissionFilter.super_.call(this);
}
module.exports.VidiunPermissionFilter = VidiunPermissionFilter;

util.inherits(VidiunPermissionFilter, VidiunPermissionBaseFilter);


/**
 */
function VidiunPermissionItemFilter(){
	VidiunPermissionItemFilter.super_.call(this);
}
module.exports.VidiunPermissionItemFilter = VidiunPermissionItemFilter;

util.inherits(VidiunPermissionItemFilter, VidiunPermissionItemBaseFilter);


/**
 */
function VidiunPlayReadyPolicyBaseFilter(){
	VidiunPlayReadyPolicyBaseFilter.super_.call(this);
}
module.exports.VidiunPlayReadyPolicyBaseFilter = VidiunPlayReadyPolicyBaseFilter;

util.inherits(VidiunPlayReadyPolicyBaseFilter, VidiunDrmPolicyFilter);


/**
 */
function VidiunPlayReadyProfileBaseFilter(){
	VidiunPlayReadyProfileBaseFilter.super_.call(this);
}
module.exports.VidiunPlayReadyProfileBaseFilter = VidiunPlayReadyProfileBaseFilter;

util.inherits(VidiunPlayReadyProfileBaseFilter, VidiunDrmProfileFilter);


/**
 * @param attribute string .
 */
function VidiunPlayableEntryCompareAttributeCondition(){
	VidiunPlayableEntryCompareAttributeCondition.super_.call(this);
	this.attribute = null;
}
module.exports.VidiunPlayableEntryCompareAttributeCondition = VidiunPlayableEntryCompareAttributeCondition;

util.inherits(VidiunPlayableEntryCompareAttributeCondition, VidiunSearchComparableAttributeCondition);


/**
 * @param attribute string .
 */
function VidiunPlayableEntryMatchAttributeCondition(){
	VidiunPlayableEntryMatchAttributeCondition.super_.call(this);
	this.attribute = null;
}
module.exports.VidiunPlayableEntryMatchAttributeCondition = VidiunPlayableEntryMatchAttributeCondition;

util.inherits(VidiunPlayableEntryMatchAttributeCondition, VidiunSearchMatchAttributeCondition);


/**
 * @param attribute string .
 */
function VidiunPlaylistCompareAttributeCondition(){
	VidiunPlaylistCompareAttributeCondition.super_.call(this);
	this.attribute = null;
}
module.exports.VidiunPlaylistCompareAttributeCondition = VidiunPlaylistCompareAttributeCondition;

util.inherits(VidiunPlaylistCompareAttributeCondition, VidiunSearchComparableAttributeCondition);


/**
 * @param attribute string .
 */
function VidiunPlaylistMatchAttributeCondition(){
	VidiunPlaylistMatchAttributeCondition.super_.call(this);
	this.attribute = null;
}
module.exports.VidiunPlaylistMatchAttributeCondition = VidiunPlaylistMatchAttributeCondition;

util.inherits(VidiunPlaylistMatchAttributeCondition, VidiunSearchMatchAttributeCondition);


/**
 */
function VidiunPushNotificationTemplateBaseFilter(){
	VidiunPushNotificationTemplateBaseFilter.super_.call(this);
}
module.exports.VidiunPushNotificationTemplateBaseFilter = VidiunPushNotificationTemplateBaseFilter;

util.inherits(VidiunPushNotificationTemplateBaseFilter, VidiunEventNotificationTemplateFilter);


/**
 */
function VidiunQuizUserEntryBaseFilter(){
	VidiunQuizUserEntryBaseFilter.super_.call(this);
}
module.exports.VidiunQuizUserEntryBaseFilter = VidiunQuizUserEntryBaseFilter;

util.inherits(VidiunQuizUserEntryBaseFilter, VidiunUserEntryFilter);


/**
 */
function VidiunRemoteDropFolderBaseFilter(){
	VidiunRemoteDropFolderBaseFilter.super_.call(this);
}
module.exports.VidiunRemoteDropFolderBaseFilter = VidiunRemoteDropFolderBaseFilter;

util.inherits(VidiunRemoteDropFolderBaseFilter, VidiunDropFolderFilter);


/**
 */
function VidiunScpDropFolder(){
	VidiunScpDropFolder.super_.call(this);
}
module.exports.VidiunScpDropFolder = VidiunScpDropFolder;

util.inherits(VidiunScpDropFolder, VidiunSshDropFolder);


/**
 * @param localFilePath string Full path to the local file.
 */
function VidiunServerFileResource(){
	VidiunServerFileResource.super_.call(this);
	this.localFilePath = null;
}
module.exports.VidiunServerFileResource = VidiunServerFileResource;

util.inherits(VidiunServerFileResource, VidiunDataCenterContentResource);


/**
 */
function VidiunSftpDropFolder(){
	VidiunSftpDropFolder.super_.call(this);
}
module.exports.VidiunSftpDropFolder = VidiunSftpDropFolder;

util.inherits(VidiunSftpDropFolder, VidiunSshDropFolder);


/**
 * @param privateKey string SSH private key.
 * @param publicKey string SSH public key.
 * @param keyPassphrase string Passphrase for SSH keys.
 */
function VidiunSshUrlResource(){
	VidiunSshUrlResource.super_.call(this);
	this.privateKey = null;
	this.publicKey = null;
	this.keyPassphrase = null;
}
module.exports.VidiunSshUrlResource = VidiunSshUrlResource;

util.inherits(VidiunSshUrlResource, VidiunUrlResource);


/**
 * @param flashVersion int .
 * @param poly2Bitmap bool .
 */
function VidiunSwfFlavorParamsOutput(){
	VidiunSwfFlavorParamsOutput.super_.call(this);
	this.flashVersion = null;
	this.poly2Bitmap = null;
}
module.exports.VidiunSwfFlavorParamsOutput = VidiunSwfFlavorParamsOutput;

util.inherits(VidiunSwfFlavorParamsOutput, VidiunFlavorParamsOutput);


/**
 */
function VidiunSyndicationDistributionProfileBaseFilter(){
	VidiunSyndicationDistributionProfileBaseFilter.super_.call(this);
}
module.exports.VidiunSyndicationDistributionProfileBaseFilter = VidiunSyndicationDistributionProfileBaseFilter;

util.inherits(VidiunSyndicationDistributionProfileBaseFilter, VidiunDistributionProfileFilter);


/**
 */
function VidiunSyndicationDistributionProviderBaseFilter(){
	VidiunSyndicationDistributionProviderBaseFilter.super_.call(this);
}
module.exports.VidiunSyndicationDistributionProviderBaseFilter = VidiunSyndicationDistributionProviderBaseFilter;

util.inherits(VidiunSyndicationDistributionProviderBaseFilter, VidiunDistributionProviderFilter);


/**
 * @param partnerParentIdEqual int .
 * @param partnerParentIdIn string .
 */
function VidiunSystemPartnerFilter(){
	VidiunSystemPartnerFilter.super_.call(this);
	this.partnerParentIdEqual = null;
	this.partnerParentIdIn = null;
}
module.exports.VidiunSystemPartnerFilter = VidiunSystemPartnerFilter;

util.inherits(VidiunSystemPartnerFilter, VidiunPartnerFilter);


/**
 * @param offset int Time offset in seconds since current time.
 */
function VidiunTimeContextField(){
	VidiunTimeContextField.super_.call(this);
	this.offset = null;
}
module.exports.VidiunTimeContextField = VidiunTimeContextField;

util.inherits(VidiunTimeContextField, VidiunIntegerField);


/**
 */
function VidiunTubeMogulSyndicationFeedBaseFilter(){
	VidiunTubeMogulSyndicationFeedBaseFilter.super_.call(this);
}
module.exports.VidiunTubeMogulSyndicationFeedBaseFilter = VidiunTubeMogulSyndicationFeedBaseFilter;

util.inherits(VidiunTubeMogulSyndicationFeedBaseFilter, VidiunBaseSyndicationFeedFilter);


/**
 */
function VidiunUiConfAdminBaseFilter(){
	VidiunUiConfAdminBaseFilter.super_.call(this);
}
module.exports.VidiunUiConfAdminBaseFilter = VidiunUiConfAdminBaseFilter;

util.inherits(VidiunUiConfAdminBaseFilter, VidiunUiConfFilter);


/**
 * @param token string Token that returned from upload.upload action or uploadToken.add action.
 */
function VidiunUploadedFileTokenResource(){
	VidiunUploadedFileTokenResource.super_.call(this);
	this.token = null;
}
module.exports.VidiunUploadedFileTokenResource = VidiunUploadedFileTokenResource;

util.inherits(VidiunUploadedFileTokenResource, VidiunDataCenterContentResource);


/**
 */
function VidiunUserAgentCondition(){
	VidiunUserAgentCondition.super_.call(this);
}
module.exports.VidiunUserAgentCondition = VidiunUserAgentCondition;

util.inherits(VidiunUserAgentCondition, VidiunRegexCondition);


/**
 */
function VidiunUserAgentContextField(){
	VidiunUserAgentContextField.super_.call(this);
}
module.exports.VidiunUserAgentContextField = VidiunUserAgentContextField;

util.inherits(VidiunUserAgentContextField, VidiunStringField);


/**
 */
function VidiunUserEmailContextField(){
	VidiunUserEmailContextField.super_.call(this);
}
module.exports.VidiunUserEmailContextField = VidiunUserEmailContextField;

util.inherits(VidiunUserEmailContextField, VidiunStringField);


/**
 */
function VidiunUserLoginDataFilter(){
	VidiunUserLoginDataFilter.super_.call(this);
}
module.exports.VidiunUserLoginDataFilter = VidiunUserLoginDataFilter;

util.inherits(VidiunUserLoginDataFilter, VidiunUserLoginDataBaseFilter);


/**
 */
function VidiunUserRoleFilter(){
	VidiunUserRoleFilter.super_.call(this);
}
module.exports.VidiunUserRoleFilter = VidiunUserRoleFilter;

util.inherits(VidiunUserRoleFilter, VidiunUserRoleBaseFilter);


/**
 * @param groupTypeEq int Eq filter for the partner's group type.
 * @param groupTypeIn string In filter for the partner's group type.
 * @param partnerPermissionsExist string Filter for partner permissions- filter contains comma-separated string of permission names which the returned partners should have.
 */
function VidiunVarConsolePartnerFilter(){
	VidiunVarConsolePartnerFilter.super_.call(this);
	this.groupTypeEq = null;
	this.groupTypeIn = null;
	this.partnerPermissionsExist = null;
}
module.exports.VidiunVarConsolePartnerFilter = VidiunVarConsolePartnerFilter;

util.inherits(VidiunVarConsolePartnerFilter, VidiunPartnerFilter);


/**
 * @param token string Token that returned from media server such as FMS or red5.
 */
function VidiunWebcamTokenResource(){
	VidiunWebcamTokenResource.super_.call(this);
	this.token = null;
}
module.exports.VidiunWebcamTokenResource = VidiunWebcamTokenResource;

util.inherits(VidiunWebcamTokenResource, VidiunDataCenterContentResource);


/**
 */
function VidiunWebexDropFolderBaseFilter(){
	VidiunWebexDropFolderBaseFilter.super_.call(this);
}
module.exports.VidiunWebexDropFolderBaseFilter = VidiunWebexDropFolderBaseFilter;

util.inherits(VidiunWebexDropFolderBaseFilter, VidiunDropFolderFilter);


/**
 */
function VidiunWebexDropFolderFileBaseFilter(){
	VidiunWebexDropFolderFileBaseFilter.super_.call(this);
}
module.exports.VidiunWebexDropFolderFileBaseFilter = VidiunWebexDropFolderFileBaseFilter;

util.inherits(VidiunWebexDropFolderFileBaseFilter, VidiunDropFolderFileFilter);


/**
 * @param widevineDistributionStartDate int License distribution window start date.
 * @param widevineDistributionEndDate int License distribution window end date.
 */
function VidiunWidevineFlavorParamsOutput(){
	VidiunWidevineFlavorParamsOutput.super_.call(this);
	this.widevineDistributionStartDate = null;
	this.widevineDistributionEndDate = null;
}
module.exports.VidiunWidevineFlavorParamsOutput = VidiunWidevineFlavorParamsOutput;

util.inherits(VidiunWidevineFlavorParamsOutput, VidiunFlavorParamsOutput);


/**
 */
function VidiunWidevineProfileBaseFilter(){
	VidiunWidevineProfileBaseFilter.super_.call(this);
}
module.exports.VidiunWidevineProfileBaseFilter = VidiunWidevineProfileBaseFilter;

util.inherits(VidiunWidevineProfileBaseFilter, VidiunDrmProfileFilter);


/**
 * @param appPrefix string Wowza Media server app prefix.
 * @param transcoder string Wowza Media server transcoder configuration overide.
 * @param GPUID int Wowza Media server GPU index id.
 * @param liveServicePort int Live service port.
 * @param liveServiceProtocol string Live service protocol.
 * @param liveServiceInternalDomain string Wowza media server live service internal domain.
 */
function VidiunWowzaMediaServerNode(){
	VidiunWowzaMediaServerNode.super_.call(this);
	this.appPrefix = null;
	this.transcoder = null;
	this.GPUID = null;
	this.liveServicePort = null;
	this.liveServiceProtocol = null;
	this.liveServiceInternalDomain = null;
}
module.exports.VidiunWowzaMediaServerNode = VidiunWowzaMediaServerNode;

util.inherits(VidiunWowzaMediaServerNode, VidiunMediaServerNode);


/**
 */
function VidiunYahooSyndicationFeedBaseFilter(){
	VidiunYahooSyndicationFeedBaseFilter.super_.call(this);
}
module.exports.VidiunYahooSyndicationFeedBaseFilter = VidiunYahooSyndicationFeedBaseFilter;

util.inherits(VidiunYahooSyndicationFeedBaseFilter, VidiunBaseSyndicationFeedFilter);


/**
 */
function VidiunActivitiBusinessProcessServerFilter(){
	VidiunActivitiBusinessProcessServerFilter.super_.call(this);
}
module.exports.VidiunActivitiBusinessProcessServerFilter = VidiunActivitiBusinessProcessServerFilter;

util.inherits(VidiunActivitiBusinessProcessServerFilter, VidiunActivitiBusinessProcessServerBaseFilter);


/**
 * @param protocolTypeEqual string .
 * @param protocolTypeIn string .
 * @param titleLike string .
 * @param titleMultiLikeOr string .
 * @param titleMultiLikeAnd string .
 * @param endTimeGreaterThanOrEqual int .
 * @param endTimeLessThanOrEqual int .
 * @param durationGreaterThanOrEqual int .
 * @param durationLessThanOrEqual int .
 */
function VidiunAdCuePointBaseFilter(){
	VidiunAdCuePointBaseFilter.super_.call(this);
	this.protocolTypeEqual = null;
	this.protocolTypeIn = null;
	this.titleLike = null;
	this.titleMultiLikeOr = null;
	this.titleMultiLikeAnd = null;
	this.endTimeGreaterThanOrEqual = null;
	this.endTimeLessThanOrEqual = null;
	this.durationGreaterThanOrEqual = null;
	this.durationLessThanOrEqual = null;
}
module.exports.VidiunAdCuePointBaseFilter = VidiunAdCuePointBaseFilter;

util.inherits(VidiunAdCuePointBaseFilter, VidiunCuePointFilter);


/**
 */
function VidiunAdminUserBaseFilter(){
	VidiunAdminUserBaseFilter.super_.call(this);
}
module.exports.VidiunAdminUserBaseFilter = VidiunAdminUserBaseFilter;

util.inherits(VidiunAdminUserBaseFilter, VidiunUserFilter);


/**
 */
function VidiunAmazonS3StorageProfileFilter(){
	VidiunAmazonS3StorageProfileFilter.super_.call(this);
}
module.exports.VidiunAmazonS3StorageProfileFilter = VidiunAmazonS3StorageProfileFilter;

util.inherits(VidiunAmazonS3StorageProfileFilter, VidiunAmazonS3StorageProfileBaseFilter);


/**
 * @param parentIdEqual string .
 * @param parentIdIn string .
 * @param textLike string .
 * @param textMultiLikeOr string .
 * @param textMultiLikeAnd string .
 * @param endTimeGreaterThanOrEqual int .
 * @param endTimeLessThanOrEqual int .
 * @param durationGreaterThanOrEqual int .
 * @param durationLessThanOrEqual int .
 * @param isPublicEqual int .
 */
function VidiunAnnotationBaseFilter(){
	VidiunAnnotationBaseFilter.super_.call(this);
	this.parentIdEqual = null;
	this.parentIdIn = null;
	this.textLike = null;
	this.textMultiLikeOr = null;
	this.textMultiLikeAnd = null;
	this.endTimeGreaterThanOrEqual = null;
	this.endTimeLessThanOrEqual = null;
	this.durationGreaterThanOrEqual = null;
	this.durationLessThanOrEqual = null;
	this.isPublicEqual = null;
}
module.exports.VidiunAnnotationBaseFilter = VidiunAnnotationBaseFilter;

util.inherits(VidiunAnnotationBaseFilter, VidiunCuePointFilter);


/**
 * @param parentIdEqual string .
 * @param parentIdIn string .
 * @param quizUserEntryIdEqual string .
 * @param quizUserEntryIdIn string .
 */
function VidiunAnswerCuePointBaseFilter(){
	VidiunAnswerCuePointBaseFilter.super_.call(this);
	this.parentIdEqual = null;
	this.parentIdIn = null;
	this.quizUserEntryIdEqual = null;
	this.quizUserEntryIdIn = null;
}
module.exports.VidiunAnswerCuePointBaseFilter = VidiunAnswerCuePointBaseFilter;

util.inherits(VidiunAnswerCuePointBaseFilter, VidiunCuePointFilter);


/**
 */
function VidiunApiActionPermissionItemBaseFilter(){
	VidiunApiActionPermissionItemBaseFilter.super_.call(this);
}
module.exports.VidiunApiActionPermissionItemBaseFilter = VidiunApiActionPermissionItemBaseFilter;

util.inherits(VidiunApiActionPermissionItemBaseFilter, VidiunPermissionItemFilter);


/**
 */
function VidiunApiParameterPermissionItemBaseFilter(){
	VidiunApiParameterPermissionItemBaseFilter.super_.call(this);
}
module.exports.VidiunApiParameterPermissionItemBaseFilter = VidiunApiParameterPermissionItemBaseFilter;

util.inherits(VidiunApiParameterPermissionItemBaseFilter, VidiunPermissionItemFilter);


/**
 */
function VidiunAssetParamsOutputBaseFilter(){
	VidiunAssetParamsOutputBaseFilter.super_.call(this);
}
module.exports.VidiunAssetParamsOutputBaseFilter = VidiunAssetParamsOutputBaseFilter;

util.inherits(VidiunAssetParamsOutputBaseFilter, VidiunAssetParamsFilter);


/**
 * @param formatEqual string .
 * @param formatIn string .
 * @param statusEqual int .
 * @param statusIn string .
 * @param statusNotIn string .
 */
function VidiunAttachmentAssetBaseFilter(){
	VidiunAttachmentAssetBaseFilter.super_.call(this);
	this.formatEqual = null;
	this.formatIn = null;
	this.statusEqual = null;
	this.statusIn = null;
	this.statusNotIn = null;
}
module.exports.VidiunAttachmentAssetBaseFilter = VidiunAttachmentAssetBaseFilter;

util.inherits(VidiunAttachmentAssetBaseFilter, VidiunAssetFilter);


/**
 */
function VidiunBusinessProcessNotificationTemplateFilter(){
	VidiunBusinessProcessNotificationTemplateFilter.super_.call(this);
}
module.exports.VidiunBusinessProcessNotificationTemplateFilter = VidiunBusinessProcessNotificationTemplateFilter;

util.inherits(VidiunBusinessProcessNotificationTemplateFilter, VidiunBusinessProcessNotificationTemplateBaseFilter);


/**
 *
 */
function VidiunBeaconEnhanceFilter() {
    VidiunBeaconEnhanceFilter.super_.call(this);
    this.externalElasticQueryObject = null;
}
module.exports.VidiunBeaconEnhanceFilter = VidiunBeaconEnhanceFilter;
util.inherits(VidiunBeaconEnhanceFilter, VidiunBeaconFilter);

/**
 */
function VidiunCameraScheduleResourceFilter(){
	VidiunCameraScheduleResourceFilter.super_.call(this);
}
module.exports.VidiunCameraScheduleResourceFilter = VidiunCameraScheduleResourceFilter;

util.inherits(VidiunCameraScheduleResourceFilter, VidiunCameraScheduleResourceBaseFilter);


/**
 * @param captionParamsIdEqual int .
 * @param captionParamsIdIn string .
 * @param formatEqual string .
 * @param formatIn string .
 * @param statusEqual int .
 * @param statusIn string .
 * @param statusNotIn string .
 */
function VidiunCaptionAssetBaseFilter(){
	VidiunCaptionAssetBaseFilter.super_.call(this);
	this.captionParamsIdEqual = null;
	this.captionParamsIdIn = null;
	this.formatEqual = null;
	this.formatIn = null;
	this.statusEqual = null;
	this.statusIn = null;
	this.statusNotIn = null;
}
module.exports.VidiunCaptionAssetBaseFilter = VidiunCaptionAssetBaseFilter;

util.inherits(VidiunCaptionAssetBaseFilter, VidiunAssetFilter);


/**
 * @param formatEqual string .
 * @param formatIn string .
 */
function VidiunCaptionParamsBaseFilter(){
	VidiunCaptionParamsBaseFilter.super_.call(this);
	this.formatEqual = null;
	this.formatIn = null;
}
module.exports.VidiunCaptionParamsBaseFilter = VidiunCaptionParamsBaseFilter;

util.inherits(VidiunCaptionParamsBaseFilter, VidiunAssetParamsFilter);


/**
 * @param codeLike string .
 * @param codeMultiLikeOr string .
 * @param codeMultiLikeAnd string .
 * @param codeEqual string .
 * @param codeIn string .
 * @param descriptionLike string .
 * @param descriptionMultiLikeOr string .
 * @param descriptionMultiLikeAnd string .
 * @param endTimeGreaterThanOrEqual int .
 * @param endTimeLessThanOrEqual int .
 * @param durationGreaterThanOrEqual int .
 * @param durationLessThanOrEqual int .
 */
function VidiunCodeCuePointBaseFilter(){
	VidiunCodeCuePointBaseFilter.super_.call(this);
	this.codeLike = null;
	this.codeMultiLikeOr = null;
	this.codeMultiLikeAnd = null;
	this.codeEqual = null;
	this.codeIn = null;
	this.descriptionLike = null;
	this.descriptionMultiLikeOr = null;
	this.descriptionMultiLikeAnd = null;
	this.endTimeGreaterThanOrEqual = null;
	this.endTimeLessThanOrEqual = null;
	this.durationGreaterThanOrEqual = null;
	this.durationLessThanOrEqual = null;
}
module.exports.VidiunCodeCuePointBaseFilter = VidiunCodeCuePointBaseFilter;

util.inherits(VidiunCodeCuePointBaseFilter, VidiunCuePointFilter);


/**
 */
function VidiunConfigurableDistributionProfileFilter(){
	VidiunConfigurableDistributionProfileFilter.super_.call(this);
}
module.exports.VidiunConfigurableDistributionProfileFilter = VidiunConfigurableDistributionProfileFilter;

util.inherits(VidiunConfigurableDistributionProfileFilter, VidiunConfigurableDistributionProfileBaseFilter);


/**
 */
function VidiunDataEntryBaseFilter(){
	VidiunDataEntryBaseFilter.super_.call(this);
}
module.exports.VidiunDataEntryBaseFilter = VidiunDataEntryBaseFilter;

util.inherits(VidiunDataEntryBaseFilter, VidiunBaseEntryFilter);


/**
 */
function VidiunDeliveryProfileAkamaiAppleHttpManifestFilter(){
	VidiunDeliveryProfileAkamaiAppleHttpManifestFilter.super_.call(this);
}
module.exports.VidiunDeliveryProfileAkamaiAppleHttpManifestFilter = VidiunDeliveryProfileAkamaiAppleHttpManifestFilter;

util.inherits(VidiunDeliveryProfileAkamaiAppleHttpManifestFilter, VidiunDeliveryProfileAkamaiAppleHttpManifestBaseFilter);


/**
 */
function VidiunDeliveryProfileAkamaiHdsFilter(){
	VidiunDeliveryProfileAkamaiHdsFilter.super_.call(this);
}
module.exports.VidiunDeliveryProfileAkamaiHdsFilter = VidiunDeliveryProfileAkamaiHdsFilter;

util.inherits(VidiunDeliveryProfileAkamaiHdsFilter, VidiunDeliveryProfileAkamaiHdsBaseFilter);


/**
 */
function VidiunDeliveryProfileAkamaiHttpFilter(){
	VidiunDeliveryProfileAkamaiHttpFilter.super_.call(this);
}
module.exports.VidiunDeliveryProfileAkamaiHttpFilter = VidiunDeliveryProfileAkamaiHttpFilter;

util.inherits(VidiunDeliveryProfileAkamaiHttpFilter, VidiunDeliveryProfileAkamaiHttpBaseFilter);


/**
 */
function VidiunDeliveryProfileGenericAppleHttpFilter(){
	VidiunDeliveryProfileGenericAppleHttpFilter.super_.call(this);
}
module.exports.VidiunDeliveryProfileGenericAppleHttpFilter = VidiunDeliveryProfileGenericAppleHttpFilter;

util.inherits(VidiunDeliveryProfileGenericAppleHttpFilter, VidiunDeliveryProfileGenericAppleHttpBaseFilter);


/**
 */
function VidiunDeliveryProfileGenericHdsFilter(){
	VidiunDeliveryProfileGenericHdsFilter.super_.call(this);
}
module.exports.VidiunDeliveryProfileGenericHdsFilter = VidiunDeliveryProfileGenericHdsFilter;

util.inherits(VidiunDeliveryProfileGenericHdsFilter, VidiunDeliveryProfileGenericHdsBaseFilter);


/**
 */
function VidiunDeliveryProfileGenericHttpFilter(){
	VidiunDeliveryProfileGenericHttpFilter.super_.call(this);
}
module.exports.VidiunDeliveryProfileGenericHttpFilter = VidiunDeliveryProfileGenericHttpFilter;

util.inherits(VidiunDeliveryProfileGenericHttpFilter, VidiunDeliveryProfileGenericHttpBaseFilter);


/**
 */
function VidiunDeliveryProfileGenericSilverLightFilter(){
	VidiunDeliveryProfileGenericSilverLightFilter.super_.call(this);
}
module.exports.VidiunDeliveryProfileGenericSilverLightFilter = VidiunDeliveryProfileGenericSilverLightFilter;

util.inherits(VidiunDeliveryProfileGenericSilverLightFilter, VidiunDeliveryProfileGenericSilverLightBaseFilter);


/**
 */
function VidiunDeliveryProfileLiveAppleHttpFilter(){
	VidiunDeliveryProfileLiveAppleHttpFilter.super_.call(this);
}
module.exports.VidiunDeliveryProfileLiveAppleHttpFilter = VidiunDeliveryProfileLiveAppleHttpFilter;

util.inherits(VidiunDeliveryProfileLiveAppleHttpFilter, VidiunDeliveryProfileLiveAppleHttpBaseFilter);


/**
 */
function VidiunDeliveryProfileRtmpFilter(){
	VidiunDeliveryProfileRtmpFilter.super_.call(this);
}
module.exports.VidiunDeliveryProfileRtmpFilter = VidiunDeliveryProfileRtmpFilter;

util.inherits(VidiunDeliveryProfileRtmpFilter, VidiunDeliveryProfileRtmpBaseFilter);


/**
 */
function VidiunDeliveryServerNodeFilter(){
	VidiunDeliveryServerNodeFilter.super_.call(this);
}
module.exports.VidiunDeliveryServerNodeFilter = VidiunDeliveryServerNodeFilter;

util.inherits(VidiunDeliveryServerNodeFilter, VidiunDeliveryServerNodeBaseFilter);


/**
 * @param documentTypeEqual int .
 * @param documentTypeIn string .
 * @param assetParamsIdsMatchOr string .
 * @param assetParamsIdsMatchAnd string .
 */
function VidiunDocumentEntryBaseFilter(){
	VidiunDocumentEntryBaseFilter.super_.call(this);
	this.documentTypeEqual = null;
	this.documentTypeIn = null;
	this.assetParamsIdsMatchOr = null;
	this.assetParamsIdsMatchAnd = null;
}
module.exports.VidiunDocumentEntryBaseFilter = VidiunDocumentEntryBaseFilter;

util.inherits(VidiunDocumentEntryBaseFilter, VidiunBaseEntryFilter);


/**
 */
function VidiunEmailNotificationTemplateFilter(){
	VidiunEmailNotificationTemplateFilter.super_.call(this);
}
module.exports.VidiunEmailNotificationTemplateFilter = VidiunEmailNotificationTemplateFilter;

util.inherits(VidiunEmailNotificationTemplateFilter, VidiunEmailNotificationTemplateBaseFilter);


/**
 * @param parentCategoryIdsLike string .
 * @param parentCategoryIdsMultiLikeOr string .
 * @param parentCategoryIdsMultiLikeAnd string .
 */
function VidiunEntryScheduleEventFilter(){
	VidiunEntryScheduleEventFilter.super_.call(this);
	this.parentCategoryIdsLike = null;
	this.parentCategoryIdsMultiLikeOr = null;
	this.parentCategoryIdsMultiLikeAnd = null;
}
module.exports.VidiunEntryScheduleEventFilter = VidiunEntryScheduleEventFilter;

util.inherits(VidiunEntryScheduleEventFilter, VidiunEntryScheduleEventBaseFilter);


/**
 * @param eventTypeEqual string .
 * @param eventTypeIn string .
 */
function VidiunEventCuePointBaseFilter(){
	VidiunEventCuePointBaseFilter.super_.call(this);
	this.eventTypeEqual = null;
	this.eventTypeIn = null;
}
module.exports.VidiunEventCuePointBaseFilter = VidiunEventCuePointBaseFilter;

util.inherits(VidiunEventCuePointBaseFilter, VidiunCuePointFilter);


/**
 * @param flavorParamsIdEqual int .
 * @param flavorParamsIdIn string .
 * @param statusEqual int .
 * @param statusIn string .
 * @param statusNotIn string .
 */
function VidiunFlavorAssetBaseFilter(){
	VidiunFlavorAssetBaseFilter.super_.call(this);
	this.flavorParamsIdEqual = null;
	this.flavorParamsIdIn = null;
	this.statusEqual = null;
	this.statusIn = null;
	this.statusNotIn = null;
}
module.exports.VidiunFlavorAssetBaseFilter = VidiunFlavorAssetBaseFilter;

util.inherits(VidiunFlavorAssetBaseFilter, VidiunAssetFilter);


/**
 * @param formatEqual string .
 */
function VidiunFlavorParamsBaseFilter(){
	VidiunFlavorParamsBaseFilter.super_.call(this);
	this.formatEqual = null;
}
module.exports.VidiunFlavorParamsBaseFilter = VidiunFlavorParamsBaseFilter;

util.inherits(VidiunFlavorParamsBaseFilter, VidiunAssetParamsFilter);


/**
 */
function VidiunGenericDistributionProfileFilter(){
	VidiunGenericDistributionProfileFilter.super_.call(this);
}
module.exports.VidiunGenericDistributionProfileFilter = VidiunGenericDistributionProfileFilter;

util.inherits(VidiunGenericDistributionProfileFilter, VidiunGenericDistributionProfileBaseFilter);


/**
 */
function VidiunGenericDistributionProviderFilter(){
	VidiunGenericDistributionProviderFilter.super_.call(this);
}
module.exports.VidiunGenericDistributionProviderFilter = VidiunGenericDistributionProviderFilter;

util.inherits(VidiunGenericDistributionProviderFilter, VidiunGenericDistributionProviderBaseFilter);


/**
 */
function VidiunGenericSyndicationFeedFilter(){
	VidiunGenericSyndicationFeedFilter.super_.call(this);
}
module.exports.VidiunGenericSyndicationFeedFilter = VidiunGenericSyndicationFeedFilter;

util.inherits(VidiunGenericSyndicationFeedFilter, VidiunGenericSyndicationFeedBaseFilter);


/**
 */
function VidiunGoogleVideoSyndicationFeedFilter(){
	VidiunGoogleVideoSyndicationFeedFilter.super_.call(this);
}
module.exports.VidiunGoogleVideoSyndicationFeedFilter = VidiunGoogleVideoSyndicationFeedFilter;

util.inherits(VidiunGoogleVideoSyndicationFeedFilter, VidiunGoogleVideoSyndicationFeedBaseFilter);


/**
 */
function VidiunHttpNotificationTemplateFilter(){
	VidiunHttpNotificationTemplateFilter.super_.call(this);
}
module.exports.VidiunHttpNotificationTemplateFilter = VidiunHttpNotificationTemplateFilter;

util.inherits(VidiunHttpNotificationTemplateFilter, VidiunHttpNotificationTemplateBaseFilter);


/**
 */
function VidiunITunesSyndicationFeedFilter(){
	VidiunITunesSyndicationFeedFilter.super_.call(this);
}
module.exports.VidiunITunesSyndicationFeedFilter = VidiunITunesSyndicationFeedFilter;

util.inherits(VidiunITunesSyndicationFeedFilter, VidiunITunesSyndicationFeedBaseFilter);


/**
 */
function VidiunKontikiStorageProfileFilter(){
	VidiunKontikiStorageProfileFilter.super_.call(this);
}
module.exports.VidiunKontikiStorageProfileFilter = VidiunKontikiStorageProfileFilter;

util.inherits(VidiunKontikiStorageProfileFilter, VidiunKontikiStorageProfileBaseFilter);


/**
 */
function VidiunLiveEntryScheduleResourceFilter(){
	VidiunLiveEntryScheduleResourceFilter.super_.call(this);
}
module.exports.VidiunLiveEntryScheduleResourceFilter = VidiunLiveEntryScheduleResourceFilter;

util.inherits(VidiunLiveEntryScheduleResourceFilter, VidiunLiveEntryScheduleResourceBaseFilter);


/**
 */
function VidiunLocationScheduleResourceFilter(){
	VidiunLocationScheduleResourceFilter.super_.call(this);
}
module.exports.VidiunLocationScheduleResourceFilter = VidiunLocationScheduleResourceFilter;

util.inherits(VidiunLocationScheduleResourceFilter, VidiunLocationScheduleResourceBaseFilter);


/**
 */
function VidiunPlayReadyPolicyFilter(){
	VidiunPlayReadyPolicyFilter.super_.call(this);
}
module.exports.VidiunPlayReadyPolicyFilter = VidiunPlayReadyPolicyFilter;

util.inherits(VidiunPlayReadyPolicyFilter, VidiunPlayReadyPolicyBaseFilter);


/**
 */
function VidiunPlayReadyProfileFilter(){
	VidiunPlayReadyProfileFilter.super_.call(this);
}
module.exports.VidiunPlayReadyProfileFilter = VidiunPlayReadyProfileFilter;

util.inherits(VidiunPlayReadyProfileFilter, VidiunPlayReadyProfileBaseFilter);


/**
 */
function VidiunPlaylistBaseFilter(){
	VidiunPlaylistBaseFilter.super_.call(this);
}
module.exports.VidiunPlaylistBaseFilter = VidiunPlaylistBaseFilter;

util.inherits(VidiunPlaylistBaseFilter, VidiunBaseEntryFilter);


/**
 */
function VidiunPushNotificationTemplateFilter(){
	VidiunPushNotificationTemplateFilter.super_.call(this);
}
module.exports.VidiunPushNotificationTemplateFilter = VidiunPushNotificationTemplateFilter;

util.inherits(VidiunPushNotificationTemplateFilter, VidiunPushNotificationTemplateBaseFilter);


/**
 * @param questionLike string .
 * @param questionMultiLikeOr string .
 * @param questionMultiLikeAnd string .
 */
function VidiunQuestionCuePointBaseFilter(){
	VidiunQuestionCuePointBaseFilter.super_.call(this);
	this.questionLike = null;
	this.questionMultiLikeOr = null;
	this.questionMultiLikeAnd = null;
}
module.exports.VidiunQuestionCuePointBaseFilter = VidiunQuestionCuePointBaseFilter;

util.inherits(VidiunQuestionCuePointBaseFilter, VidiunCuePointFilter);


/**
 */
function VidiunQuizUserEntryFilter(){
	VidiunQuizUserEntryFilter.super_.call(this);
}
module.exports.VidiunQuizUserEntryFilter = VidiunQuizUserEntryFilter;

util.inherits(VidiunQuizUserEntryFilter, VidiunQuizUserEntryBaseFilter);


/**
 */
function VidiunRemoteDropFolderFilter(){
	VidiunRemoteDropFolderFilter.super_.call(this);
}
module.exports.VidiunRemoteDropFolderFilter = VidiunRemoteDropFolderFilter;

util.inherits(VidiunRemoteDropFolderFilter, VidiunRemoteDropFolderBaseFilter);


/**
 */
function VidiunSyndicationDistributionProfileFilter(){
	VidiunSyndicationDistributionProfileFilter.super_.call(this);
}
module.exports.VidiunSyndicationDistributionProfileFilter = VidiunSyndicationDistributionProfileFilter;

util.inherits(VidiunSyndicationDistributionProfileFilter, VidiunSyndicationDistributionProfileBaseFilter);


/**
 * @param thumbParamsIdEqual int .
 * @param thumbParamsIdIn string .
 * @param statusEqual int .
 * @param statusIn string .
 * @param statusNotIn string .
 */
function VidiunThumbAssetBaseFilter(){
	VidiunThumbAssetBaseFilter.super_.call(this);
	this.thumbParamsIdEqual = null;
	this.thumbParamsIdIn = null;
	this.statusEqual = null;
	this.statusIn = null;
	this.statusNotIn = null;
}
module.exports.VidiunThumbAssetBaseFilter = VidiunThumbAssetBaseFilter;

util.inherits(VidiunThumbAssetBaseFilter, VidiunAssetFilter);


/**
 * @param descriptionLike string .
 * @param descriptionMultiLikeOr string .
 * @param descriptionMultiLikeAnd string .
 * @param titleLike string .
 * @param titleMultiLikeOr string .
 * @param titleMultiLikeAnd string .
 * @param subTypeEqual int .
 * @param subTypeIn string .
 */
function VidiunThumbCuePointBaseFilter(){
	VidiunThumbCuePointBaseFilter.super_.call(this);
	this.descriptionLike = null;
	this.descriptionMultiLikeOr = null;
	this.descriptionMultiLikeAnd = null;
	this.titleLike = null;
	this.titleMultiLikeOr = null;
	this.titleMultiLikeAnd = null;
	this.subTypeEqual = null;
	this.subTypeIn = null;
}
module.exports.VidiunThumbCuePointBaseFilter = VidiunThumbCuePointBaseFilter;

util.inherits(VidiunThumbCuePointBaseFilter, VidiunCuePointFilter);


/**
 * @param formatEqual string .
 */
function VidiunThumbParamsBaseFilter(){
	VidiunThumbParamsBaseFilter.super_.call(this);
	this.formatEqual = null;
}
module.exports.VidiunThumbParamsBaseFilter = VidiunThumbParamsBaseFilter;

util.inherits(VidiunThumbParamsBaseFilter, VidiunAssetParamsFilter);


/**
 */
function VidiunTubeMogulSyndicationFeedFilter(){
	VidiunTubeMogulSyndicationFeedFilter.super_.call(this);
}
module.exports.VidiunTubeMogulSyndicationFeedFilter = VidiunTubeMogulSyndicationFeedFilter;

util.inherits(VidiunTubeMogulSyndicationFeedFilter, VidiunTubeMogulSyndicationFeedBaseFilter);


/**
 */
function VidiunUiConfAdminFilter(){
	VidiunUiConfAdminFilter.super_.call(this);
}
module.exports.VidiunUiConfAdminFilter = VidiunUiConfAdminFilter;

util.inherits(VidiunUiConfAdminFilter, VidiunUiConfAdminBaseFilter);


/**
 */
function VidiunWebexDropFolderFileFilter(){
	VidiunWebexDropFolderFileFilter.super_.call(this);
}
module.exports.VidiunWebexDropFolderFileFilter = VidiunWebexDropFolderFileFilter;

util.inherits(VidiunWebexDropFolderFileFilter, VidiunWebexDropFolderFileBaseFilter);


/**
 */
function VidiunWebexDropFolderFilter(){
	VidiunWebexDropFolderFilter.super_.call(this);
}
module.exports.VidiunWebexDropFolderFilter = VidiunWebexDropFolderFilter;

util.inherits(VidiunWebexDropFolderFilter, VidiunWebexDropFolderBaseFilter);


/**
 */
function VidiunWidevineProfileFilter(){
	VidiunWidevineProfileFilter.super_.call(this);
}
module.exports.VidiunWidevineProfileFilter = VidiunWidevineProfileFilter;

util.inherits(VidiunWidevineProfileFilter, VidiunWidevineProfileBaseFilter);


/**
 */
function VidiunYahooSyndicationFeedFilter(){
	VidiunYahooSyndicationFeedFilter.super_.call(this);
}
module.exports.VidiunYahooSyndicationFeedFilter = VidiunYahooSyndicationFeedFilter;

util.inherits(VidiunYahooSyndicationFeedFilter, VidiunYahooSyndicationFeedBaseFilter);


/**
 */
function VidiunAdCuePointFilter(){
	VidiunAdCuePointFilter.super_.call(this);
}
module.exports.VidiunAdCuePointFilter = VidiunAdCuePointFilter;

util.inherits(VidiunAdCuePointFilter, VidiunAdCuePointBaseFilter);


/**
 */
function VidiunAdminUserFilter(){
	VidiunAdminUserFilter.super_.call(this);
}
module.exports.VidiunAdminUserFilter = VidiunAdminUserFilter;

util.inherits(VidiunAdminUserFilter, VidiunAdminUserBaseFilter);


/**
 */
function VidiunAnnotationFilter(){
	VidiunAnnotationFilter.super_.call(this);
}
module.exports.VidiunAnnotationFilter = VidiunAnnotationFilter;

util.inherits(VidiunAnnotationFilter, VidiunAnnotationBaseFilter);


/**
 */
function VidiunAnswerCuePointFilter(){
	VidiunAnswerCuePointFilter.super_.call(this);
}
module.exports.VidiunAnswerCuePointFilter = VidiunAnswerCuePointFilter;

util.inherits(VidiunAnswerCuePointFilter, VidiunAnswerCuePointBaseFilter);


/**
 */
function VidiunApiActionPermissionItemFilter(){
	VidiunApiActionPermissionItemFilter.super_.call(this);
}
module.exports.VidiunApiActionPermissionItemFilter = VidiunApiActionPermissionItemFilter;

util.inherits(VidiunApiActionPermissionItemFilter, VidiunApiActionPermissionItemBaseFilter);


/**
 */
function VidiunApiParameterPermissionItemFilter(){
	VidiunApiParameterPermissionItemFilter.super_.call(this);
}
module.exports.VidiunApiParameterPermissionItemFilter = VidiunApiParameterPermissionItemFilter;

util.inherits(VidiunApiParameterPermissionItemFilter, VidiunApiParameterPermissionItemBaseFilter);


/**
 */
function VidiunAssetParamsOutputFilter(){
	VidiunAssetParamsOutputFilter.super_.call(this);
}
module.exports.VidiunAssetParamsOutputFilter = VidiunAssetParamsOutputFilter;

util.inherits(VidiunAssetParamsOutputFilter, VidiunAssetParamsOutputBaseFilter);


/**
 */
function VidiunAttachmentAssetFilter(){
	VidiunAttachmentAssetFilter.super_.call(this);
}
module.exports.VidiunAttachmentAssetFilter = VidiunAttachmentAssetFilter;

util.inherits(VidiunAttachmentAssetFilter, VidiunAttachmentAssetBaseFilter);


/**
 */
function VidiunBusinessProcessAbortNotificationTemplateBaseFilter(){
	VidiunBusinessProcessAbortNotificationTemplateBaseFilter.super_.call(this);
}
module.exports.VidiunBusinessProcessAbortNotificationTemplateBaseFilter = VidiunBusinessProcessAbortNotificationTemplateBaseFilter;

util.inherits(VidiunBusinessProcessAbortNotificationTemplateBaseFilter, VidiunBusinessProcessNotificationTemplateFilter);


/**
 */
function VidiunBusinessProcessSignalNotificationTemplateBaseFilter(){
	VidiunBusinessProcessSignalNotificationTemplateBaseFilter.super_.call(this);
}
module.exports.VidiunBusinessProcessSignalNotificationTemplateBaseFilter = VidiunBusinessProcessSignalNotificationTemplateBaseFilter;

util.inherits(VidiunBusinessProcessSignalNotificationTemplateBaseFilter, VidiunBusinessProcessNotificationTemplateFilter);


/**
 */
function VidiunBusinessProcessStartNotificationTemplateBaseFilter(){
	VidiunBusinessProcessStartNotificationTemplateBaseFilter.super_.call(this);
}
module.exports.VidiunBusinessProcessStartNotificationTemplateBaseFilter = VidiunBusinessProcessStartNotificationTemplateBaseFilter;

util.inherits(VidiunBusinessProcessStartNotificationTemplateBaseFilter, VidiunBusinessProcessNotificationTemplateFilter);


/**
 */
function VidiunCaptionAssetFilter(){
	VidiunCaptionAssetFilter.super_.call(this);
}
module.exports.VidiunCaptionAssetFilter = VidiunCaptionAssetFilter;

util.inherits(VidiunCaptionAssetFilter, VidiunCaptionAssetBaseFilter);


/**
 */
function VidiunCaptionParamsFilter(){
	VidiunCaptionParamsFilter.super_.call(this);
}
module.exports.VidiunCaptionParamsFilter = VidiunCaptionParamsFilter;

util.inherits(VidiunCaptionParamsFilter, VidiunCaptionParamsBaseFilter);


/**
 */
function VidiunCodeCuePointFilter(){
	VidiunCodeCuePointFilter.super_.call(this);
}
module.exports.VidiunCodeCuePointFilter = VidiunCodeCuePointFilter;

util.inherits(VidiunCodeCuePointFilter, VidiunCodeCuePointBaseFilter);


/**
 */
function VidiunDataEntryFilter(){
	VidiunDataEntryFilter.super_.call(this);
}
module.exports.VidiunDataEntryFilter = VidiunDataEntryFilter;

util.inherits(VidiunDataEntryFilter, VidiunDataEntryBaseFilter);


/**
 */
function VidiunDeliveryProfileGenericRtmpBaseFilter(){
	VidiunDeliveryProfileGenericRtmpBaseFilter.super_.call(this);
}
module.exports.VidiunDeliveryProfileGenericRtmpBaseFilter = VidiunDeliveryProfileGenericRtmpBaseFilter;

util.inherits(VidiunDeliveryProfileGenericRtmpBaseFilter, VidiunDeliveryProfileRtmpFilter);


/**
 */
function VidiunDocumentEntryFilter(){
	VidiunDocumentEntryFilter.super_.call(this);
}
module.exports.VidiunDocumentEntryFilter = VidiunDocumentEntryFilter;

util.inherits(VidiunDocumentEntryFilter, VidiunDocumentEntryBaseFilter);


/**
 */
function VidiunEdgeServerNodeBaseFilter(){
	VidiunEdgeServerNodeBaseFilter.super_.call(this);
}
module.exports.VidiunEdgeServerNodeBaseFilter = VidiunEdgeServerNodeBaseFilter;

util.inherits(VidiunEdgeServerNodeBaseFilter, VidiunDeliveryServerNodeFilter);


/**
 */
function VidiunEventCuePointFilter(){
	VidiunEventCuePointFilter.super_.call(this);
}
module.exports.VidiunEventCuePointFilter = VidiunEventCuePointFilter;

util.inherits(VidiunEventCuePointFilter, VidiunEventCuePointBaseFilter);


/**
 */
function VidiunFlavorAssetFilter(){
	VidiunFlavorAssetFilter.super_.call(this);
}
module.exports.VidiunFlavorAssetFilter = VidiunFlavorAssetFilter;

util.inherits(VidiunFlavorAssetFilter, VidiunFlavorAssetBaseFilter);


/**
 */
function VidiunFlavorParamsFilter(){
	VidiunFlavorParamsFilter.super_.call(this);
}
module.exports.VidiunFlavorParamsFilter = VidiunFlavorParamsFilter;

util.inherits(VidiunFlavorParamsFilter, VidiunFlavorParamsBaseFilter);


/**
 */
function VidiunFtpDropFolderBaseFilter(){
	VidiunFtpDropFolderBaseFilter.super_.call(this);
}
module.exports.VidiunFtpDropFolderBaseFilter = VidiunFtpDropFolderBaseFilter;

util.inherits(VidiunFtpDropFolderBaseFilter, VidiunRemoteDropFolderFilter);


/**
 */
function VidiunGenericXsltSyndicationFeedBaseFilter(){
	VidiunGenericXsltSyndicationFeedBaseFilter.super_.call(this);
}
module.exports.VidiunGenericXsltSyndicationFeedBaseFilter = VidiunGenericXsltSyndicationFeedBaseFilter;

util.inherits(VidiunGenericXsltSyndicationFeedBaseFilter, VidiunGenericSyndicationFeedFilter);


/**
 */
function VidiunLiveStreamAdminEntry(){
	VidiunLiveStreamAdminEntry.super_.call(this);
}
module.exports.VidiunLiveStreamAdminEntry = VidiunLiveStreamAdminEntry;

util.inherits(VidiunLiveStreamAdminEntry, VidiunLiveStreamEntry);


/**
 */
function VidiunLiveStreamScheduleEventBaseFilter(){
	VidiunLiveStreamScheduleEventBaseFilter.super_.call(this);
}
module.exports.VidiunLiveStreamScheduleEventBaseFilter = VidiunLiveStreamScheduleEventBaseFilter;

util.inherits(VidiunLiveStreamScheduleEventBaseFilter, VidiunEntryScheduleEventFilter);


/**
 */
function VidiunMediaServerNodeBaseFilter(){
	VidiunMediaServerNodeBaseFilter.super_.call(this);
}
module.exports.VidiunMediaServerNodeBaseFilter = VidiunMediaServerNodeBaseFilter;

util.inherits(VidiunMediaServerNodeBaseFilter, VidiunDeliveryServerNodeFilter);


/**
 */
function VidiunPlaylistFilter(){
	VidiunPlaylistFilter.super_.call(this);
}
module.exports.VidiunPlaylistFilter = VidiunPlaylistFilter;

util.inherits(VidiunPlaylistFilter, VidiunPlaylistBaseFilter);


/**
 */
function VidiunQuestionCuePointFilter(){
	VidiunQuestionCuePointFilter.super_.call(this);
}
module.exports.VidiunQuestionCuePointFilter = VidiunQuestionCuePointFilter;

util.inherits(VidiunQuestionCuePointFilter, VidiunQuestionCuePointBaseFilter);


/**
 */
function VidiunRecordScheduleEventBaseFilter(){
	VidiunRecordScheduleEventBaseFilter.super_.call(this);
}
module.exports.VidiunRecordScheduleEventBaseFilter = VidiunRecordScheduleEventBaseFilter;

util.inherits(VidiunRecordScheduleEventBaseFilter, VidiunEntryScheduleEventFilter);


/**
 */
function VidiunSshDropFolderBaseFilter(){
	VidiunSshDropFolderBaseFilter.super_.call(this);
}
module.exports.VidiunSshDropFolderBaseFilter = VidiunSshDropFolderBaseFilter;

util.inherits(VidiunSshDropFolderBaseFilter, VidiunRemoteDropFolderFilter);


/**
 * @param typeIn string .
 */
function VidiunThumbAssetFilter(){
	VidiunThumbAssetFilter.super_.call(this);
	this.typeIn = null;
}
module.exports.VidiunThumbAssetFilter = VidiunThumbAssetFilter;

util.inherits(VidiunThumbAssetFilter, VidiunThumbAssetBaseFilter);


/**
 */
function VidiunThumbCuePointFilter(){
	VidiunThumbCuePointFilter.super_.call(this);
}
module.exports.VidiunThumbCuePointFilter = VidiunThumbCuePointFilter;

util.inherits(VidiunThumbCuePointFilter, VidiunThumbCuePointBaseFilter);


/**
 */
function VidiunThumbParamsFilter(){
	VidiunThumbParamsFilter.super_.call(this);
}
module.exports.VidiunThumbParamsFilter = VidiunThumbParamsFilter;

util.inherits(VidiunThumbParamsFilter, VidiunThumbParamsBaseFilter);


/**
 */
function VidiunBusinessProcessAbortNotificationTemplateFilter(){
	VidiunBusinessProcessAbortNotificationTemplateFilter.super_.call(this);
}
module.exports.VidiunBusinessProcessAbortNotificationTemplateFilter = VidiunBusinessProcessAbortNotificationTemplateFilter;

util.inherits(VidiunBusinessProcessAbortNotificationTemplateFilter, VidiunBusinessProcessAbortNotificationTemplateBaseFilter);


/**
 */
function VidiunBusinessProcessSignalNotificationTemplateFilter(){
	VidiunBusinessProcessSignalNotificationTemplateFilter.super_.call(this);
}
module.exports.VidiunBusinessProcessSignalNotificationTemplateFilter = VidiunBusinessProcessSignalNotificationTemplateFilter;

util.inherits(VidiunBusinessProcessSignalNotificationTemplateFilter, VidiunBusinessProcessSignalNotificationTemplateBaseFilter);


/**
 */
function VidiunBusinessProcessStartNotificationTemplateFilter(){
	VidiunBusinessProcessStartNotificationTemplateFilter.super_.call(this);
}
module.exports.VidiunBusinessProcessStartNotificationTemplateFilter = VidiunBusinessProcessStartNotificationTemplateFilter;

util.inherits(VidiunBusinessProcessStartNotificationTemplateFilter, VidiunBusinessProcessStartNotificationTemplateBaseFilter);


/**
 * @param contentLike string .
 * @param contentMultiLikeOr string .
 * @param contentMultiLikeAnd string .
 * @param partnerDescriptionLike string .
 * @param partnerDescriptionMultiLikeOr string .
 * @param partnerDescriptionMultiLikeAnd string .
 * @param languageEqual string .
 * @param languageIn string .
 * @param labelEqual string .
 * @param labelIn string .
 * @param startTimeGreaterThanOrEqual int .
 * @param startTimeLessThanOrEqual int .
 * @param endTimeGreaterThanOrEqual int .
 * @param endTimeLessThanOrEqual int .
 */
function VidiunCaptionAssetItemFilter(){
	VidiunCaptionAssetItemFilter.super_.call(this);
	this.contentLike = null;
	this.contentMultiLikeOr = null;
	this.contentMultiLikeAnd = null;
	this.partnerDescriptionLike = null;
	this.partnerDescriptionMultiLikeOr = null;
	this.partnerDescriptionMultiLikeAnd = null;
	this.languageEqual = null;
	this.languageIn = null;
	this.labelEqual = null;
	this.labelIn = null;
	this.startTimeGreaterThanOrEqual = null;
	this.startTimeLessThanOrEqual = null;
	this.endTimeGreaterThanOrEqual = null;
	this.endTimeLessThanOrEqual = null;
}
module.exports.VidiunCaptionAssetItemFilter = VidiunCaptionAssetItemFilter;

util.inherits(VidiunCaptionAssetItemFilter, VidiunCaptionAssetFilter);


/**
 */
function VidiunDeliveryProfileGenericRtmpFilter(){
	VidiunDeliveryProfileGenericRtmpFilter.super_.call(this);
}
module.exports.VidiunDeliveryProfileGenericRtmpFilter = VidiunDeliveryProfileGenericRtmpFilter;

util.inherits(VidiunDeliveryProfileGenericRtmpFilter, VidiunDeliveryProfileGenericRtmpBaseFilter);


/**
 */
function VidiunDocumentFlavorParamsBaseFilter(){
	VidiunDocumentFlavorParamsBaseFilter.super_.call(this);
}
module.exports.VidiunDocumentFlavorParamsBaseFilter = VidiunDocumentFlavorParamsBaseFilter;

util.inherits(VidiunDocumentFlavorParamsBaseFilter, VidiunFlavorParamsFilter);


/**
 */
function VidiunEdgeServerNodeFilter(){
	VidiunEdgeServerNodeFilter.super_.call(this);
}
module.exports.VidiunEdgeServerNodeFilter = VidiunEdgeServerNodeFilter;

util.inherits(VidiunEdgeServerNodeFilter, VidiunEdgeServerNodeBaseFilter);


/**
 * @param flavorParamsIdEqual int .
 * @param flavorParamsVersionEqual string .
 * @param flavorAssetIdEqual string .
 * @param flavorAssetVersionEqual string .
 */
function VidiunFlavorParamsOutputBaseFilter(){
	VidiunFlavorParamsOutputBaseFilter.super_.call(this);
	this.flavorParamsIdEqual = null;
	this.flavorParamsVersionEqual = null;
	this.flavorAssetIdEqual = null;
	this.flavorAssetVersionEqual = null;
}
module.exports.VidiunFlavorParamsOutputBaseFilter = VidiunFlavorParamsOutputBaseFilter;

util.inherits(VidiunFlavorParamsOutputBaseFilter, VidiunFlavorParamsFilter);


/**
 */
function VidiunFtpDropFolderFilter(){
	VidiunFtpDropFolderFilter.super_.call(this);
}
module.exports.VidiunFtpDropFolderFilter = VidiunFtpDropFolderFilter;

util.inherits(VidiunFtpDropFolderFilter, VidiunFtpDropFolderBaseFilter);


/**
 */
function VidiunGenericXsltSyndicationFeedFilter(){
	VidiunGenericXsltSyndicationFeedFilter.super_.call(this);
}
module.exports.VidiunGenericXsltSyndicationFeedFilter = VidiunGenericXsltSyndicationFeedFilter;

util.inherits(VidiunGenericXsltSyndicationFeedFilter, VidiunGenericXsltSyndicationFeedBaseFilter);


/**
 */
function VidiunImageFlavorParamsBaseFilter(){
	VidiunImageFlavorParamsBaseFilter.super_.call(this);
}
module.exports.VidiunImageFlavorParamsBaseFilter = VidiunImageFlavorParamsBaseFilter;

util.inherits(VidiunImageFlavorParamsBaseFilter, VidiunFlavorParamsFilter);


/**
 */
function VidiunLiveAssetBaseFilter(){
	VidiunLiveAssetBaseFilter.super_.call(this);
}
module.exports.VidiunLiveAssetBaseFilter = VidiunLiveAssetBaseFilter;

util.inherits(VidiunLiveAssetBaseFilter, VidiunFlavorAssetFilter);


/**
 */
function VidiunLiveParamsBaseFilter(){
	VidiunLiveParamsBaseFilter.super_.call(this);
}
module.exports.VidiunLiveParamsBaseFilter = VidiunLiveParamsBaseFilter;

util.inherits(VidiunLiveParamsBaseFilter, VidiunFlavorParamsFilter);


/**
 */
function VidiunLiveStreamScheduleEventFilter(){
	VidiunLiveStreamScheduleEventFilter.super_.call(this);
}
module.exports.VidiunLiveStreamScheduleEventFilter = VidiunLiveStreamScheduleEventFilter;

util.inherits(VidiunLiveStreamScheduleEventFilter, VidiunLiveStreamScheduleEventBaseFilter);


/**
 */
function VidiunMediaFlavorParamsBaseFilter(){
	VidiunMediaFlavorParamsBaseFilter.super_.call(this);
}
module.exports.VidiunMediaFlavorParamsBaseFilter = VidiunMediaFlavorParamsBaseFilter;

util.inherits(VidiunMediaFlavorParamsBaseFilter, VidiunFlavorParamsFilter);


/**
 */
function VidiunMediaServerNodeFilter(){
	VidiunMediaServerNodeFilter.super_.call(this);
}
module.exports.VidiunMediaServerNodeFilter = VidiunMediaServerNodeFilter;

util.inherits(VidiunMediaServerNodeFilter, VidiunMediaServerNodeBaseFilter);


/**
 */
function VidiunMixEntryBaseFilter(){
	VidiunMixEntryBaseFilter.super_.call(this);
}
module.exports.VidiunMixEntryBaseFilter = VidiunMixEntryBaseFilter;

util.inherits(VidiunMixEntryBaseFilter, VidiunPlayableEntryFilter);


/**
 */
function VidiunPdfFlavorParamsBaseFilter(){
	VidiunPdfFlavorParamsBaseFilter.super_.call(this);
}
module.exports.VidiunPdfFlavorParamsBaseFilter = VidiunPdfFlavorParamsBaseFilter;

util.inherits(VidiunPdfFlavorParamsBaseFilter, VidiunFlavorParamsFilter);


/**
 */
function VidiunRecordScheduleEventFilter(){
	VidiunRecordScheduleEventFilter.super_.call(this);
}
module.exports.VidiunRecordScheduleEventFilter = VidiunRecordScheduleEventFilter;

util.inherits(VidiunRecordScheduleEventFilter, VidiunRecordScheduleEventBaseFilter);


/**
 */
function VidiunSshDropFolderFilter(){
	VidiunSshDropFolderFilter.super_.call(this);
}
module.exports.VidiunSshDropFolderFilter = VidiunSshDropFolderFilter;

util.inherits(VidiunSshDropFolderFilter, VidiunSshDropFolderBaseFilter);


/**
 */
function VidiunSwfFlavorParamsBaseFilter(){
	VidiunSwfFlavorParamsBaseFilter.super_.call(this);
}
module.exports.VidiunSwfFlavorParamsBaseFilter = VidiunSwfFlavorParamsBaseFilter;

util.inherits(VidiunSwfFlavorParamsBaseFilter, VidiunFlavorParamsFilter);


/**
 * @param thumbParamsIdEqual int .
 * @param thumbParamsVersionEqual string .
 * @param thumbAssetIdEqual string .
 * @param thumbAssetVersionEqual string .
 */
function VidiunThumbParamsOutputBaseFilter(){
	VidiunThumbParamsOutputBaseFilter.super_.call(this);
	this.thumbParamsIdEqual = null;
	this.thumbParamsVersionEqual = null;
	this.thumbAssetIdEqual = null;
	this.thumbAssetVersionEqual = null;
}
module.exports.VidiunThumbParamsOutputBaseFilter = VidiunThumbParamsOutputBaseFilter;

util.inherits(VidiunThumbParamsOutputBaseFilter, VidiunThumbParamsFilter);


/**
 */
function VidiunTimedThumbAssetBaseFilter(){
	VidiunTimedThumbAssetBaseFilter.super_.call(this);
}
module.exports.VidiunTimedThumbAssetBaseFilter = VidiunTimedThumbAssetBaseFilter;

util.inherits(VidiunTimedThumbAssetBaseFilter, VidiunThumbAssetFilter);


/**
 */
function VidiunTranscriptAssetBaseFilter(){
	VidiunTranscriptAssetBaseFilter.super_.call(this);
}
module.exports.VidiunTranscriptAssetBaseFilter = VidiunTranscriptAssetBaseFilter;

util.inherits(VidiunTranscriptAssetBaseFilter, VidiunAttachmentAssetFilter);


/**
 */
function VidiunWidevineFlavorAssetBaseFilter(){
	VidiunWidevineFlavorAssetBaseFilter.super_.call(this);
}
module.exports.VidiunWidevineFlavorAssetBaseFilter = VidiunWidevineFlavorAssetBaseFilter;

util.inherits(VidiunWidevineFlavorAssetBaseFilter, VidiunFlavorAssetFilter);


/**
 */
function VidiunWidevineFlavorParamsBaseFilter(){
	VidiunWidevineFlavorParamsBaseFilter.super_.call(this);
}
module.exports.VidiunWidevineFlavorParamsBaseFilter = VidiunWidevineFlavorParamsBaseFilter;

util.inherits(VidiunWidevineFlavorParamsBaseFilter, VidiunFlavorParamsFilter);


/**
 */
function VidiunDocumentFlavorParamsFilter(){
	VidiunDocumentFlavorParamsFilter.super_.call(this);
}
module.exports.VidiunDocumentFlavorParamsFilter = VidiunDocumentFlavorParamsFilter;

util.inherits(VidiunDocumentFlavorParamsFilter, VidiunDocumentFlavorParamsBaseFilter);


/**
 */
function VidiunFlavorParamsOutputFilter(){
	VidiunFlavorParamsOutputFilter.super_.call(this);
}
module.exports.VidiunFlavorParamsOutputFilter = VidiunFlavorParamsOutputFilter;

util.inherits(VidiunFlavorParamsOutputFilter, VidiunFlavorParamsOutputBaseFilter);


/**
 */
function VidiunImageFlavorParamsFilter(){
	VidiunImageFlavorParamsFilter.super_.call(this);
}
module.exports.VidiunImageFlavorParamsFilter = VidiunImageFlavorParamsFilter;

util.inherits(VidiunImageFlavorParamsFilter, VidiunImageFlavorParamsBaseFilter);


/**
 */
function VidiunLiveAssetFilter(){
	VidiunLiveAssetFilter.super_.call(this);
}
module.exports.VidiunLiveAssetFilter = VidiunLiveAssetFilter;

util.inherits(VidiunLiveAssetFilter, VidiunLiveAssetBaseFilter);


/**
 */
function VidiunLiveParamsFilter(){
	VidiunLiveParamsFilter.super_.call(this);
}
module.exports.VidiunLiveParamsFilter = VidiunLiveParamsFilter;

util.inherits(VidiunLiveParamsFilter, VidiunLiveParamsBaseFilter);


/**
 */
function VidiunMediaFlavorParamsFilter(){
	VidiunMediaFlavorParamsFilter.super_.call(this);
}
module.exports.VidiunMediaFlavorParamsFilter = VidiunMediaFlavorParamsFilter;

util.inherits(VidiunMediaFlavorParamsFilter, VidiunMediaFlavorParamsBaseFilter);


/**
 */
function VidiunMixEntryFilter(){
	VidiunMixEntryFilter.super_.call(this);
}
module.exports.VidiunMixEntryFilter = VidiunMixEntryFilter;

util.inherits(VidiunMixEntryFilter, VidiunMixEntryBaseFilter);


/**
 */
function VidiunPdfFlavorParamsFilter(){
	VidiunPdfFlavorParamsFilter.super_.call(this);
}
module.exports.VidiunPdfFlavorParamsFilter = VidiunPdfFlavorParamsFilter;

util.inherits(VidiunPdfFlavorParamsFilter, VidiunPdfFlavorParamsBaseFilter);


/**
 */
function VidiunScpDropFolderBaseFilter(){
	VidiunScpDropFolderBaseFilter.super_.call(this);
}
module.exports.VidiunScpDropFolderBaseFilter = VidiunScpDropFolderBaseFilter;

util.inherits(VidiunScpDropFolderBaseFilter, VidiunSshDropFolderFilter);


/**
 */
function VidiunSftpDropFolderBaseFilter(){
	VidiunSftpDropFolderBaseFilter.super_.call(this);
}
module.exports.VidiunSftpDropFolderBaseFilter = VidiunSftpDropFolderBaseFilter;

util.inherits(VidiunSftpDropFolderBaseFilter, VidiunSshDropFolderFilter);


/**
 */
function VidiunSwfFlavorParamsFilter(){
	VidiunSwfFlavorParamsFilter.super_.call(this);
}
module.exports.VidiunSwfFlavorParamsFilter = VidiunSwfFlavorParamsFilter;

util.inherits(VidiunSwfFlavorParamsFilter, VidiunSwfFlavorParamsBaseFilter);


/**
 */
function VidiunThumbParamsOutputFilter(){
	VidiunThumbParamsOutputFilter.super_.call(this);
}
module.exports.VidiunThumbParamsOutputFilter = VidiunThumbParamsOutputFilter;

util.inherits(VidiunThumbParamsOutputFilter, VidiunThumbParamsOutputBaseFilter);


/**
 */
function VidiunTimedThumbAssetFilter(){
	VidiunTimedThumbAssetFilter.super_.call(this);
}
module.exports.VidiunTimedThumbAssetFilter = VidiunTimedThumbAssetFilter;

util.inherits(VidiunTimedThumbAssetFilter, VidiunTimedThumbAssetBaseFilter);


/**
 */
function VidiunTranscriptAssetFilter(){
	VidiunTranscriptAssetFilter.super_.call(this);
}
module.exports.VidiunTranscriptAssetFilter = VidiunTranscriptAssetFilter;

util.inherits(VidiunTranscriptAssetFilter, VidiunTranscriptAssetBaseFilter);


/**
 */
function VidiunWidevineFlavorAssetFilter(){
	VidiunWidevineFlavorAssetFilter.super_.call(this);
}
module.exports.VidiunWidevineFlavorAssetFilter = VidiunWidevineFlavorAssetFilter;

util.inherits(VidiunWidevineFlavorAssetFilter, VidiunWidevineFlavorAssetBaseFilter);


/**
 */
function VidiunWidevineFlavorParamsFilter(){
	VidiunWidevineFlavorParamsFilter.super_.call(this);
}
module.exports.VidiunWidevineFlavorParamsFilter = VidiunWidevineFlavorParamsFilter;

util.inherits(VidiunWidevineFlavorParamsFilter, VidiunWidevineFlavorParamsBaseFilter);


/**
 */
function VidiunWowzaMediaServerNodeBaseFilter(){
	VidiunWowzaMediaServerNodeBaseFilter.super_.call(this);
}
module.exports.VidiunWowzaMediaServerNodeBaseFilter = VidiunWowzaMediaServerNodeBaseFilter;

util.inherits(VidiunWowzaMediaServerNodeBaseFilter, VidiunMediaServerNodeFilter);


/**
 */
function VidiunDocumentFlavorParamsOutputBaseFilter(){
	VidiunDocumentFlavorParamsOutputBaseFilter.super_.call(this);
}
module.exports.VidiunDocumentFlavorParamsOutputBaseFilter = VidiunDocumentFlavorParamsOutputBaseFilter;

util.inherits(VidiunDocumentFlavorParamsOutputBaseFilter, VidiunFlavorParamsOutputFilter);


/**
 * @param externalSourceTypeEqual string .
 * @param externalSourceTypeIn string .
 * @param assetParamsIdsMatchOr string .
 * @param assetParamsIdsMatchAnd string .
 */
function VidiunExternalMediaEntryBaseFilter(){
	VidiunExternalMediaEntryBaseFilter.super_.call(this);
	this.externalSourceTypeEqual = null;
	this.externalSourceTypeIn = null;
	this.assetParamsIdsMatchOr = null;
	this.assetParamsIdsMatchAnd = null;
}
module.exports.VidiunExternalMediaEntryBaseFilter = VidiunExternalMediaEntryBaseFilter;

util.inherits(VidiunExternalMediaEntryBaseFilter, VidiunMediaEntryFilter);


/**
 */
function VidiunImageFlavorParamsOutputBaseFilter(){
	VidiunImageFlavorParamsOutputBaseFilter.super_.call(this);
}
module.exports.VidiunImageFlavorParamsOutputBaseFilter = VidiunImageFlavorParamsOutputBaseFilter;

util.inherits(VidiunImageFlavorParamsOutputBaseFilter, VidiunFlavorParamsOutputFilter);


/**
 */
function VidiunLiveEntryBaseFilter(){
	VidiunLiveEntryBaseFilter.super_.call(this);
}
module.exports.VidiunLiveEntryBaseFilter = VidiunLiveEntryBaseFilter;

util.inherits(VidiunLiveEntryBaseFilter, VidiunMediaEntryFilter);


/**
 */
function VidiunMediaFlavorParamsOutputBaseFilter(){
	VidiunMediaFlavorParamsOutputBaseFilter.super_.call(this);
}
module.exports.VidiunMediaFlavorParamsOutputBaseFilter = VidiunMediaFlavorParamsOutputBaseFilter;

util.inherits(VidiunMediaFlavorParamsOutputBaseFilter, VidiunFlavorParamsOutputFilter);


/**
 */
function VidiunPdfFlavorParamsOutputBaseFilter(){
	VidiunPdfFlavorParamsOutputBaseFilter.super_.call(this);
}
module.exports.VidiunPdfFlavorParamsOutputBaseFilter = VidiunPdfFlavorParamsOutputBaseFilter;

util.inherits(VidiunPdfFlavorParamsOutputBaseFilter, VidiunFlavorParamsOutputFilter);


/**
 */
function VidiunScpDropFolderFilter(){
	VidiunScpDropFolderFilter.super_.call(this);
}
module.exports.VidiunScpDropFolderFilter = VidiunScpDropFolderFilter;

util.inherits(VidiunScpDropFolderFilter, VidiunScpDropFolderBaseFilter);


/**
 */
function VidiunSftpDropFolderFilter(){
	VidiunSftpDropFolderFilter.super_.call(this);
}
module.exports.VidiunSftpDropFolderFilter = VidiunSftpDropFolderFilter;

util.inherits(VidiunSftpDropFolderFilter, VidiunSftpDropFolderBaseFilter);


/**
 */
function VidiunSwfFlavorParamsOutputBaseFilter(){
	VidiunSwfFlavorParamsOutputBaseFilter.super_.call(this);
}
module.exports.VidiunSwfFlavorParamsOutputBaseFilter = VidiunSwfFlavorParamsOutputBaseFilter;

util.inherits(VidiunSwfFlavorParamsOutputBaseFilter, VidiunFlavorParamsOutputFilter);


/**
 */
function VidiunWidevineFlavorParamsOutputBaseFilter(){
	VidiunWidevineFlavorParamsOutputBaseFilter.super_.call(this);
}
module.exports.VidiunWidevineFlavorParamsOutputBaseFilter = VidiunWidevineFlavorParamsOutputBaseFilter;

util.inherits(VidiunWidevineFlavorParamsOutputBaseFilter, VidiunFlavorParamsOutputFilter);


/**
 */
function VidiunWowzaMediaServerNodeFilter(){
	VidiunWowzaMediaServerNodeFilter.super_.call(this);
}
module.exports.VidiunWowzaMediaServerNodeFilter = VidiunWowzaMediaServerNodeFilter;

util.inherits(VidiunWowzaMediaServerNodeFilter, VidiunWowzaMediaServerNodeBaseFilter);


/**
 */
function VidiunDocumentFlavorParamsOutputFilter(){
	VidiunDocumentFlavorParamsOutputFilter.super_.call(this);
}
module.exports.VidiunDocumentFlavorParamsOutputFilter = VidiunDocumentFlavorParamsOutputFilter;

util.inherits(VidiunDocumentFlavorParamsOutputFilter, VidiunDocumentFlavorParamsOutputBaseFilter);


/**
 */
function VidiunExternalMediaEntryFilter(){
	VidiunExternalMediaEntryFilter.super_.call(this);
}
module.exports.VidiunExternalMediaEntryFilter = VidiunExternalMediaEntryFilter;

util.inherits(VidiunExternalMediaEntryFilter, VidiunExternalMediaEntryBaseFilter);


/**
 */
function VidiunImageFlavorParamsOutputFilter(){
	VidiunImageFlavorParamsOutputFilter.super_.call(this);
}
module.exports.VidiunImageFlavorParamsOutputFilter = VidiunImageFlavorParamsOutputFilter;

util.inherits(VidiunImageFlavorParamsOutputFilter, VidiunImageFlavorParamsOutputBaseFilter);


/**
 * @param isLive int .
 * @param isRecordedEntryIdEmpty int .
 * @param hasMediaServerHostname string .
 */
function VidiunLiveEntryFilter(){
	VidiunLiveEntryFilter.super_.call(this);
	this.isLive = null;
	this.isRecordedEntryIdEmpty = null;
	this.hasMediaServerHostname = null;
}
module.exports.VidiunLiveEntryFilter = VidiunLiveEntryFilter;

util.inherits(VidiunLiveEntryFilter, VidiunLiveEntryBaseFilter);


/**
 */
function VidiunMediaFlavorParamsOutputFilter(){
	VidiunMediaFlavorParamsOutputFilter.super_.call(this);
}
module.exports.VidiunMediaFlavorParamsOutputFilter = VidiunMediaFlavorParamsOutputFilter;

util.inherits(VidiunMediaFlavorParamsOutputFilter, VidiunMediaFlavorParamsOutputBaseFilter);


/**
 */
function VidiunPdfFlavorParamsOutputFilter(){
	VidiunPdfFlavorParamsOutputFilter.super_.call(this);
}
module.exports.VidiunPdfFlavorParamsOutputFilter = VidiunPdfFlavorParamsOutputFilter;

util.inherits(VidiunPdfFlavorParamsOutputFilter, VidiunPdfFlavorParamsOutputBaseFilter);


/**
 */
function VidiunSwfFlavorParamsOutputFilter(){
	VidiunSwfFlavorParamsOutputFilter.super_.call(this);
}
module.exports.VidiunSwfFlavorParamsOutputFilter = VidiunSwfFlavorParamsOutputFilter;

util.inherits(VidiunSwfFlavorParamsOutputFilter, VidiunSwfFlavorParamsOutputBaseFilter);


/**
 */
function VidiunWidevineFlavorParamsOutputFilter(){
	VidiunWidevineFlavorParamsOutputFilter.super_.call(this);
}
module.exports.VidiunWidevineFlavorParamsOutputFilter = VidiunWidevineFlavorParamsOutputFilter;

util.inherits(VidiunWidevineFlavorParamsOutputFilter, VidiunWidevineFlavorParamsOutputBaseFilter);


/**
 */
function VidiunLiveChannelBaseFilter(){
	VidiunLiveChannelBaseFilter.super_.call(this);
}
module.exports.VidiunLiveChannelBaseFilter = VidiunLiveChannelBaseFilter;

util.inherits(VidiunLiveChannelBaseFilter, VidiunLiveEntryFilter);


/**
 */
function VidiunLiveStreamEntryBaseFilter(){
	VidiunLiveStreamEntryBaseFilter.super_.call(this);
}
module.exports.VidiunLiveStreamEntryBaseFilter = VidiunLiveStreamEntryBaseFilter;

util.inherits(VidiunLiveStreamEntryBaseFilter, VidiunLiveEntryFilter);


/**
 */
function VidiunLiveChannelFilter(){
	VidiunLiveChannelFilter.super_.call(this);
}
module.exports.VidiunLiveChannelFilter = VidiunLiveChannelFilter;

util.inherits(VidiunLiveChannelFilter, VidiunLiveChannelBaseFilter);


/**
 */
function VidiunLiveStreamEntryFilter(){
	VidiunLiveStreamEntryFilter.super_.call(this);
}
module.exports.VidiunLiveStreamEntryFilter = VidiunLiveStreamEntryFilter;

util.inherits(VidiunLiveStreamEntryFilter, VidiunLiveStreamEntryBaseFilter);


/**
 */
function VidiunLiveStreamAdminEntryBaseFilter(){
	VidiunLiveStreamAdminEntryBaseFilter.super_.call(this);
}
module.exports.VidiunLiveStreamAdminEntryBaseFilter = VidiunLiveStreamAdminEntryBaseFilter;

util.inherits(VidiunLiveStreamAdminEntryBaseFilter, VidiunLiveStreamEntryFilter);


/**
 */
function VidiunLiveStreamAdminEntryFilter(){
	VidiunLiveStreamAdminEntryFilter.super_.call(this);
}
module.exports.VidiunLiveStreamAdminEntryFilter = VidiunLiveStreamAdminEntryFilter;

util.inherits(VidiunLiveStreamAdminEntryFilter, VidiunLiveStreamAdminEntryBaseFilter);


