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

var VidiunAppTokenStatus = module.exports.VidiunAppTokenStatus = {
DISABLED : 1,
ACTIVE : 2,
DELETED : 3,
};

var VidiunAppearInListType = module.exports.VidiunAppearInListType = {
PARTNER_ONLY : 1,
CATEGORY_MEMBERS_ONLY : 3,
};

var VidiunAssetParamsDeletePolicy = module.exports.VidiunAssetParamsDeletePolicy = {
KEEP : 0,
DELETE : 1,
};

var VidiunAssetParamsOrigin = module.exports.VidiunAssetParamsOrigin = {
CONVERT : 0,
INGEST : 1,
CONVERT_WHEN_MISSING : 2,
};

var VidiunAssetStatus = module.exports.VidiunAssetStatus = {
ERROR : -1,
QUEUED : 0,
READY : 2,
DELETED : 3,
IMPORTING : 7,
EXPORTING : 9,
};

var VidiunAttachmentAssetStatus = module.exports.VidiunAttachmentAssetStatus = {
ERROR : -1,
QUEUED : 0,
READY : 2,
DELETED : 3,
IMPORTING : 7,
EXPORTING : 9,
};

var VidiunAuditTrailChangeXmlNodeType = module.exports.VidiunAuditTrailChangeXmlNodeType = {
CHANGED : 1,
ADDED : 2,
REMOVED : 3,
};

var VidiunAuditTrailContext = module.exports.VidiunAuditTrailContext = {
CLIENT : -1,
SCRIPT : 0,
PS2 : 1,
API_V3 : 2,
};

var VidiunAuditTrailFileSyncType = module.exports.VidiunAuditTrailFileSyncType = {
FILE : 1,
LINK : 2,
URL : 3,
};

var VidiunAuditTrailStatus = module.exports.VidiunAuditTrailStatus = {
PENDING : 1,
READY : 2,
FAILED : 3,
};

var VidiunBatchJobErrorTypes = module.exports.VidiunBatchJobErrorTypes = {
APP : 0,
RUNTIME : 1,
HTTP : 2,
CURL : 3,
VIDIUN_API : 4,
VIDIUN_CLIENT : 5,
};

var VidiunBatchJobStatus = module.exports.VidiunBatchJobStatus = {
PENDING : 0,
QUEUED : 1,
PROCESSING : 2,
PROCESSED : 3,
MOVEFILE : 4,
FINISHED : 5,
FAILED : 6,
ABORTED : 7,
ALMOST_DONE : 8,
RETRY : 9,
FATAL : 10,
DONT_PROCESS : 11,
FINISHED_PARTIALLY : 12,
};

var VidiunBitRateMode = module.exports.VidiunBitRateMode = {
CBR : 1,
VBR : 2,
};

var VidiunBulkUploadCsvVersion = module.exports.VidiunBulkUploadCsvVersion = {
V1 : 1,
V2 : 2,
V3 : 3,
};

var VidiunCaptionAssetStatus = module.exports.VidiunCaptionAssetStatus = {
ERROR : -1,
QUEUED : 0,
READY : 2,
DELETED : 3,
IMPORTING : 7,
EXPORTING : 9,
};

var VidiunCategoryEntryStatus = module.exports.VidiunCategoryEntryStatus = {
PENDING : 1,
ACTIVE : 2,
DELETED : 3,
REJECTED : 4,
};

var VidiunCategoryStatus = module.exports.VidiunCategoryStatus = {
UPDATING : 1,
ACTIVE : 2,
DELETED : 3,
PURGED : 4,
};

var VidiunCategoryUserPermissionLevel = module.exports.VidiunCategoryUserPermissionLevel = {
MANAGER : 0,
MODERATOR : 1,
CONTRIBUTOR : 2,
MEMBER : 3,
NONE : 4,
};

var VidiunCategoryUserStatus = module.exports.VidiunCategoryUserStatus = {
ACTIVE : 1,
PENDING : 2,
NOT_ACTIVE : 3,
DELETED : 4,
};

var VidiunCommercialUseType = module.exports.VidiunCommercialUseType = {
NON_COMMERCIAL_USE : 0,
COMMERCIAL_USE : 1,
};

var VidiunContributionPolicyType = module.exports.VidiunContributionPolicyType = {
ALL : 1,
MEMBERS_WITH_CONTRIBUTION_PERMISSION : 2,
};

var VidiunControlPanelCommandStatus = module.exports.VidiunControlPanelCommandStatus = {
PENDING : 1,
HANDLED : 2,
DONE : 3,
FAILED : 4,
};

var VidiunControlPanelCommandTargetType = module.exports.VidiunControlPanelCommandTargetType = {
DATA_CENTER : 1,
SCHEDULER : 2,
JOB_TYPE : 3,
JOB : 4,
BATCH : 5,
};

var VidiunControlPanelCommandType = module.exports.VidiunControlPanelCommandType = {
KILL : 4,
};

var VidiunCountryRestrictionType = module.exports.VidiunCountryRestrictionType = {
RESTRICT_COUNTRY_LIST : 0,
ALLOW_COUNTRY_LIST : 1,
};

var VidiunCuePointStatus = module.exports.VidiunCuePointStatus = {
READY : 1,
DELETED : 2,
HANDLED : 3,
PENDING : 4,
};

var VidiunDVRStatus = module.exports.VidiunDVRStatus = {
DISABLED : 0,
ENABLED : 1,
};

var VidiunDeleteFlavorsLogicType = module.exports.VidiunDeleteFlavorsLogicType = {
KEEP_LIST_DELETE_OTHERS : 1,
DELETE_LIST : 2,
DELETE_KEEP_SMALLEST : 3,
};

var VidiunDeliveryStatus = module.exports.VidiunDeliveryStatus = {
ACTIVE : 0,
DELETED : 1,
STAGING_IN : 2,
STAGING_OUT : 3,
};

var VidiunDirectoryRestrictionType = module.exports.VidiunDirectoryRestrictionType = {
DONT_DISPLAY : 0,
DISPLAY_WITH_LINK : 1,
};

var VidiunDistributionAction = module.exports.VidiunDistributionAction = {
SUBMIT : 1,
UPDATE : 2,
DELETE : 3,
FETCH_REPORT : 4,
};

var VidiunDistributionErrorType = module.exports.VidiunDistributionErrorType = {
MISSING_FLAVOR : 1,
MISSING_THUMBNAIL : 2,
MISSING_METADATA : 3,
INVALID_DATA : 4,
MISSING_ASSET : 5,
CONDITION_NOT_MET : 6,
};

var VidiunDistributionFieldRequiredStatus = module.exports.VidiunDistributionFieldRequiredStatus = {
NOT_REQUIRED : 0,
REQUIRED_BY_PROVIDER : 1,
REQUIRED_BY_PARTNER : 2,
REQUIRED_FOR_AUTOMATIC_DISTRIBUTION : 3,
};

var VidiunDistributionProfileActionStatus = module.exports.VidiunDistributionProfileActionStatus = {
DISABLED : 1,
AUTOMATIC : 2,
MANUAL : 3,
};

var VidiunDistributionProfileStatus = module.exports.VidiunDistributionProfileStatus = {
DISABLED : 1,
ENABLED : 2,
DELETED : 3,
};

var VidiunDistributionProtocol = module.exports.VidiunDistributionProtocol = {
FTP : 1,
SCP : 2,
SFTP : 3,
HTTP : 4,
HTTPS : 5,
ASPERA : 10,
};

var VidiunDistributionValidationErrorType = module.exports.VidiunDistributionValidationErrorType = {
CUSTOM_ERROR : 0,
STRING_EMPTY : 1,
STRING_TOO_LONG : 2,
STRING_TOO_SHORT : 3,
INVALID_FORMAT : 4,
};

var VidiunDocumentType = module.exports.VidiunDocumentType = {
DOCUMENT : 11,
SWF : 12,
PDF : 13,
};

var VidiunDrmLicenseExpirationPolicy = module.exports.VidiunDrmLicenseExpirationPolicy = {
FIXED_DURATION : 1,
ENTRY_SCHEDULING_END : 2,
UNLIMITED : 3,
};

var VidiunDrmPolicyStatus = module.exports.VidiunDrmPolicyStatus = {
ACTIVE : 1,
DELETED : 2,
};

var VidiunDrmProfileStatus = module.exports.VidiunDrmProfileStatus = {
ACTIVE : 1,
DELETED : 2,
};

var VidiunDropFolderContentFileHandlerMatchPolicy = module.exports.VidiunDropFolderContentFileHandlerMatchPolicy = {
ADD_AS_NEW : 1,
MATCH_EXISTING_OR_ADD_AS_NEW : 2,
MATCH_EXISTING_OR_KEEP_IN_FOLDER : 3,
};

var VidiunDropFolderFileDeletePolicy = module.exports.VidiunDropFolderFileDeletePolicy = {
MANUAL_DELETE : 1,
AUTO_DELETE : 2,
AUTO_DELETE_WHEN_ENTRY_IS_READY : 3,
};

var VidiunDropFolderFileStatus = module.exports.VidiunDropFolderFileStatus = {
UPLOADING : 1,
PENDING : 2,
WAITING : 3,
HANDLED : 4,
IGNORE : 5,
DELETED : 6,
PURGED : 7,
NO_MATCH : 8,
ERROR_HANDLING : 9,
ERROR_DELETING : 10,
DOWNLOADING : 11,
ERROR_DOWNLOADING : 12,
PROCESSING : 13,
PARSED : 14,
DETECTED : 15,
};

var VidiunDropFolderStatus = module.exports.VidiunDropFolderStatus = {
DISABLED : 0,
ENABLED : 1,
DELETED : 2,
ERROR : 3,
};

var VidiunEditorType = module.exports.VidiunEditorType = {
SIMPLE : 1,
ADVANCED : 2,
};

var VidiunEmailIngestionProfileStatus = module.exports.VidiunEmailIngestionProfileStatus = {
INACTIVE : 0,
ACTIVE : 1,
};

var VidiunEmailNotificationTemplatePriority = module.exports.VidiunEmailNotificationTemplatePriority = {
HIGH : 1,
NORMAL : 3,
LOW : 5,
};

var VidiunEntryDistributionFlag = module.exports.VidiunEntryDistributionFlag = {
NONE : 0,
SUBMIT_REQUIRED : 1,
DELETE_REQUIRED : 2,
UPDATE_REQUIRED : 3,
ENABLE_REQUIRED : 4,
DISABLE_REQUIRED : 5,
};

var VidiunEntryDistributionStatus = module.exports.VidiunEntryDistributionStatus = {
PENDING : 0,
QUEUED : 1,
READY : 2,
DELETED : 3,
SUBMITTING : 4,
UPDATING : 5,
DELETING : 6,
ERROR_SUBMITTING : 7,
ERROR_UPDATING : 8,
ERROR_DELETING : 9,
REMOVED : 10,
IMPORT_SUBMITTING : 11,
IMPORT_UPDATING : 12,
};

var VidiunEntryDistributionSunStatus = module.exports.VidiunEntryDistributionSunStatus = {
BEFORE_SUNRISE : 1,
AFTER_SUNRISE : 2,
AFTER_SUNSET : 3,
};

var VidiunEntryModerationStatus = module.exports.VidiunEntryModerationStatus = {
PENDING_MODERATION : 1,
APPROVED : 2,
REJECTED : 3,
FLAGGED_FOR_REVIEW : 5,
AUTO_APPROVED : 6,
};

var VidiunEntryServerNodeStatus = module.exports.VidiunEntryServerNodeStatus = {
STOPPED : 0,
PLAYABLE : 1,
BROADCASTING : 2,
AUTHENTICATED : 3,
MARKED_FOR_DELETION : 4, 
TASK_PENDING : 5,
TASK_QUEUED : 6,
TASK_PROCESSING : 7,
TASK_UPLOADING : 8,
TASK_UPLOADING : 9,
};

var VidiunEventNotificationTemplateStatus = module.exports.VidiunEventNotificationTemplateStatus = {
DISABLED : 1,
ACTIVE : 2,
DELETED : 3,
};

var VidiunFeatureStatusType = module.exports.VidiunFeatureStatusType = {
LOCK_CATEGORY : 1,
CATEGORY : 2,
CATEGORY_ENTRY : 3,
ENTRY : 4,
CATEGORY_USER : 5,
USER : 6,
};

var VidiunFileSyncStatus = module.exports.VidiunFileSyncStatus = {
ERROR : -1,
PENDING : 1,
READY : 2,
DELETED : 3,
PURGED : 4,
};

var VidiunFileSyncType = module.exports.VidiunFileSyncType = {
FILE : 1,
LINK : 2,
URL : 3,
};

var VidiunFlavorAssetStatus = module.exports.VidiunFlavorAssetStatus = {
ERROR : -1,
QUEUED : 0,
CONVERTING : 1,
READY : 2,
DELETED : 3,
NOT_APPLICABLE : 4,
TEMP : 5,
WAIT_FOR_CONVERT : 6,
IMPORTING : 7,
VALIDATING : 8,
EXPORTING : 9,
};

var VidiunFlavorReadyBehaviorType = module.exports.VidiunFlavorReadyBehaviorType = {
NO_IMPACT : 0,
INHERIT_FLAVOR_PARAMS : 0,
REQUIRED : 1,
OPTIONAL : 2,
};

var VidiunGender = module.exports.VidiunGender = {
UNKNOWN : 0,
MALE : 1,
FEMALE : 2,
};

var VidiunGenericDistributionProviderParser = module.exports.VidiunGenericDistributionProviderParser = {
XSL : 1,
XPATH : 2,
REGEX : 3,
};

var VidiunGenericDistributionProviderStatus = module.exports.VidiunGenericDistributionProviderStatus = {
ACTIVE : 2,
DELETED : 3,
};

var VidiunGroupUserStatus = module.exports.VidiunGroupUserStatus = {
ACTIVE : 0,
DELETED : 1,
};

var VidiunHttpNotificationAuthenticationMethod = module.exports.VidiunHttpNotificationAuthenticationMethod = {
ANYSAFE : -18,
ANY : -17,
BASIC : 1,
DIGEST : 2,
GSSNEGOTIATE : 4,
NTLM : 8,
};

var VidiunHttpNotificationMethod = module.exports.VidiunHttpNotificationMethod = {
GET : 1,
POST : 2,
PUT : 3,
DELETE : 4,
};

var VidiunHttpNotificationSslVersion = module.exports.VidiunHttpNotificationSslVersion = {
V2 : 2,
V3 : 3,
};

var VidiunInheritanceType = module.exports.VidiunInheritanceType = {
INHERIT : 1,
MANUAL : 2,
};

var VidiunIpAddressRestrictionType = module.exports.VidiunIpAddressRestrictionType = {
RESTRICT_LIST : 0,
ALLOW_LIST : 1,
};

var VidiunLicenseType = module.exports.VidiunLicenseType = {
UNKNOWN : -1,
NONE : 0,
COPYRIGHTED : 1,
PUBLIC_DOMAIN : 2,
CREATIVECOMMONS_ATTRIBUTION : 3,
CREATIVECOMMONS_ATTRIBUTION_SHARE_ALIKE : 4,
CREATIVECOMMONS_ATTRIBUTION_NO_DERIVATIVES : 5,
CREATIVECOMMONS_ATTRIBUTION_NON_COMMERCIAL : 6,
CREATIVECOMMONS_ATTRIBUTION_NON_COMMERCIAL_SHARE_ALIKE : 7,
CREATIVECOMMONS_ATTRIBUTION_NON_COMMERCIAL_NO_DERIVATIVES : 8,
GFDL : 9,
GPL : 10,
AFFERO_GPL : 11,
LGPL : 12,
BSD : 13,
APACHE : 14,
MOZILLA : 15,
};

var VidiunLimitFlavorsRestrictionType = module.exports.VidiunLimitFlavorsRestrictionType = {
RESTRICT_LIST : 0,
ALLOW_LIST : 1,
};

var VidiunLivePublishStatus = module.exports.VidiunLivePublishStatus = {
DISABLED : 0,
ENABLED : 1,
};

var VidiunLiveReportExportType = module.exports.VidiunLiveReportExportType = {
PARTNER_TOTAL_ALL : 1,
PARTNER_TOTAL_LIVE : 2,
ENTRY_TIME_LINE_ALL : 11,
ENTRY_TIME_LINE_LIVE : 12,
LOCATION_ALL : 21,
LOCATION_LIVE : 22,
SYNDICATION_ALL : 31,
SYNDICATION_LIVE : 32,
};

var VidiunLiveStatsEventType = module.exports.VidiunLiveStatsEventType = {
LIVE : 1,
DVR : 2,
};

var VidiunMailJobStatus = module.exports.VidiunMailJobStatus = {
PENDING : 1,
SENT : 2,
ERROR : 3,
QUEUED : 4,
};

var VidiunMediaType = module.exports.VidiunMediaType = {
VIDEO : 1,
IMAGE : 2,
AUDIO : 5,
LIVE_STREAM_FLASH : 201,
LIVE_STREAM_WINDOWS_MEDIA : 202,
LIVE_STREAM_REAL_MEDIA : 203,
LIVE_STREAM_QUICKTIME : 204,
};

var VidiunMetadataProfileCreateMode = module.exports.VidiunMetadataProfileCreateMode = {
API : 1,
VMC : 2,
APP : 3,
};

var VidiunMetadataProfileStatus = module.exports.VidiunMetadataProfileStatus = {
ACTIVE : 1,
DEPRECATED : 2,
TRANSFORMING : 3,
};

var VidiunMetadataStatus = module.exports.VidiunMetadataStatus = {
VALID : 1,
INVALID : 2,
DELETED : 3,
};

var VidiunModerationFlagType = module.exports.VidiunModerationFlagType = {
SEXUAL_CONTENT : 1,
VIOLENT_REPULSIVE : 2,
HARMFUL_DANGEROUS : 3,
SPAM_COMMERCIALS : 4,
COPYRIGHT : 5,
TERMS_OF_USE_VIOLATION : 6,
};

var VidiunMrssExtensionMode = module.exports.VidiunMrssExtensionMode = {
APPEND : 1,
REPLACE : 2,
};

var VidiunNotificationObjectType = module.exports.VidiunNotificationObjectType = {
ENTRY : 1,
VSHOW : 2,
USER : 3,
BATCH_JOB : 4,
};

var VidiunNotificationStatus = module.exports.VidiunNotificationStatus = {
PENDING : 1,
SENT : 2,
ERROR : 3,
SHOULD_RESEND : 4,
ERROR_RESENDING : 5,
SENT_SYNCH : 6,
QUEUED : 7,
};

var VidiunNotificationType = module.exports.VidiunNotificationType = {
ENTRY_ADD : 1,
ENTR_UPDATE_PERMISSIONS : 2,
ENTRY_DELETE : 3,
ENTRY_BLOCK : 4,
ENTRY_UPDATE : 5,
ENTRY_UPDATE_THUMBNAIL : 6,
ENTRY_UPDATE_MODERATION : 7,
USER_ADD : 21,
USER_BANNED : 26,
};

var VidiunNullableBoolean = module.exports.VidiunNullableBoolean = {
NULL_VALUE : -1,
FALSE_VALUE : 0,
TRUE_VALUE : 1,
};

var VidiunPartnerGroupType = module.exports.VidiunPartnerGroupType = {
PUBLISHER : 1,
VAR_GROUP : 2,
GROUP : 3,
TEMPLATE : 4,
};

var VidiunPartnerStatus = module.exports.VidiunPartnerStatus = {
DELETED : 0,
ACTIVE : 1,
BLOCKED : 2,
FULL_BLOCK : 3,
};

var VidiunPartnerType = module.exports.VidiunPartnerType = {
VMC : 1,
WIKI : 100,
WORDPRESS : 101,
DRUPAL : 102,
DEKIWIKI : 103,
MOODLE : 104,
COMMUNITY_EDITION : 105,
JOOMLA : 106,
BLACKBOARD : 107,
SAKAI : 108,
ADMIN_CONSOLE : 109,
};

var VidiunPermissionStatus = module.exports.VidiunPermissionStatus = {
ACTIVE : 1,
BLOCKED : 2,
DELETED : 3,
};

var VidiunPermissionType = module.exports.VidiunPermissionType = {
NORMAL : 1,
SPECIAL_FEATURE : 2,
PLUGIN : 3,
PARTNER_GROUP : 4,
};

var VidiunPlayReadyAnalogVideoOPL = module.exports.VidiunPlayReadyAnalogVideoOPL = {
MIN_100 : 100,
MIN_150 : 150,
MIN_200 : 200,
};

var VidiunPlayReadyCompressedDigitalVideoOPL = module.exports.VidiunPlayReadyCompressedDigitalVideoOPL = {
MIN_400 : 400,
MIN_500 : 500,
};

var VidiunPlayReadyDigitalAudioOPL = module.exports.VidiunPlayReadyDigitalAudioOPL = {
MIN_100 : 100,
MIN_150 : 150,
MIN_200 : 200,
MIN_250 : 250,
MIN_300 : 300,
};

var VidiunPlayReadyLicenseRemovalPolicy = module.exports.VidiunPlayReadyLicenseRemovalPolicy = {
FIXED_FROM_EXPIRATION : 1,
ENTRY_SCHEDULING_END : 2,
NONE : 3,
};

var VidiunPlayReadyMinimumLicenseSecurityLevel = module.exports.VidiunPlayReadyMinimumLicenseSecurityLevel = {
NON_COMMERCIAL_QUALITY : 150,
COMMERCIAL_QUALITY : 2000,
};

var VidiunPlayReadyUncompressedDigitalVideoOPL = module.exports.VidiunPlayReadyUncompressedDigitalVideoOPL = {
MIN_100 : 100,
MIN_250 : 250,
MIN_270 : 270,
MIN_300 : 300,
};

var VidiunPlaylistType = module.exports.VidiunPlaylistType = {
STATIC_LIST : 3,
DYNAMIC : 10,
EXTERNAL : 101,
};

var VidiunPrivacyType = module.exports.VidiunPrivacyType = {
ALL : 1,
AUTHENTICATED_USERS : 2,
MEMBERS_ONLY : 3,
};

var VidiunQuizOutputType = module.exports.VidiunQuizOutputType = {
PDF : 1,
};

var VidiunRecordStatus = module.exports.VidiunRecordStatus = {
DISABLED : 0,
APPENDED : 1,   
PER_SESSION : 2,
};


var VidiunRecordingStatus = module.exports.VidiunRecordingStatus = {
STOPPED : 0,
PAUSED : 1,
ACTIVE : 2,
DISABLED : 3,
};

var VidiunResponseProfileStatus = module.exports.VidiunResponseProfileStatus = {
DISABLED : 1,
ENABLED : 2,
DELETED : 3,
};

var VidiunResponseProfileType = module.exports.VidiunResponseProfileType = {
INCLUDE_FIELDS : 1,
EXCLUDE_FIELDS : 2,
};

var VidiunResponseType = module.exports.VidiunResponseType = {
RESPONSE_TYPE_JSON : 1,
RESPONSE_TYPE_XML : 2,
RESPONSE_TYPE_PHP : 3,
RESPONSE_TYPE_PHP_ARRAY : 4,
RESPONSE_TYPE_HTML : 7,
RESPONSE_TYPE_MRSS : 8,
RESPONSE_TYPE_JSONP : 9,
};

var VidiunScheduleEventClassificationType = module.exports.VidiunScheduleEventClassificationType = {
PUBLIC_EVENT : 1,
PRIVATE_EVENT : 2,
CONFIDENTIAL_EVENT : 3,
};

var VidiunScheduleEventRecurrenceType = module.exports.VidiunScheduleEventRecurrenceType = {
NONE : 0,
RECURRING : 1,
RECURRENCE : 2,
};

var VidiunScheduleEventStatus = module.exports.VidiunScheduleEventStatus = {
CANCELLED : 1,
ACTIVE : 2,
DELETED : 3,
};

var VidiunScheduleEventType = module.exports.VidiunScheduleEventType = {
RECORD : 1,
LIVE_STREAM : 2,
};

var VidiunScheduleResourceStatus = module.exports.VidiunScheduleResourceStatus = {
DISABLED : 1,
ACTIVE : 2,
DELETED : 3,
};

var VidiunScheduledTaskAddOrRemoveType = module.exports.VidiunScheduledTaskAddOrRemoveType = {
ADD : 1,
REMOVE : 2,
};

var VidiunScheduledTaskProfileStatus = module.exports.VidiunScheduledTaskProfileStatus = {
DISABLED : 1,
ACTIVE : 2,
DELETED : 3,
SUSPENDED : 4,
DRY_RUN_ONLY : 5,
};

var VidiunSchedulerStatusType = module.exports.VidiunSchedulerStatusType = {
RUNNING_BATCHES_COUNT : 1,
RUNNING_BATCHES_CPU : 2,
RUNNING_BATCHES_MEMORY : 3,
RUNNING_BATCHES_NETWORK : 4,
RUNNING_BATCHES_DISC_IO : 5,
RUNNING_BATCHES_DISC_SPACE : 6,
RUNNING_BATCHES_IS_RUNNING : 7,
};

var VidiunSearchOperatorType = module.exports.VidiunSearchOperatorType = {
SEARCH_AND : 1,
SEARCH_OR : 2,
};

var VidiunSearchProviderType = module.exports.VidiunSearchProviderType = {
FLICKR : 3,
YOUTUBE : 4,
MYSPACE : 7,
PHOTOBUCKET : 8,
JAMENDO : 9,
CCMIXTER : 10,
NYPL : 11,
CURRENT : 12,
MEDIA_COMMONS : 13,
VIDIUN : 20,
VIDIUN_USER_CLIPS : 21,
ARCHIVE_ORG : 22,
VIDIUN_PARTNER : 23,
METACAFE : 24,
SEARCH_PROXY : 28,
PARTNER_SPECIFIC : 100,
};

var VidiunServerNodeStatus = module.exports.VidiunServerNodeStatus = {
ACTIVE : 1,
DISABLED : 2,
DELETED : 3,
NOT_REGISTERED : 4,
};

var VidiunSessionType = module.exports.VidiunSessionType = {
USER : 0,
ADMIN : 2,
};

var VidiunShortLinkStatus = module.exports.VidiunShortLinkStatus = {
DISABLED : 1,
ENABLED : 2,
DELETED : 3,
};

var VidiunSiteRestrictionType = module.exports.VidiunSiteRestrictionType = {
RESTRICT_SITE_LIST : 0,
ALLOW_SITE_LIST : 1,
};

var VidiunStatsEventType = module.exports.VidiunStatsEventType = {
WIDGET_LOADED : 1,
MEDIA_LOADED : 2,
PLAY : 3,
PLAY_REACHED_25 : 4,
PLAY_REACHED_50 : 5,
PLAY_REACHED_75 : 6,
PLAY_REACHED_100 : 7,
OPEN_EDIT : 8,
OPEN_VIRAL : 9,
OPEN_DOWNLOAD : 10,
OPEN_REPORT : 11,
BUFFER_START : 12,
BUFFER_END : 13,
OPEN_FULL_SCREEN : 14,
CLOSE_FULL_SCREEN : 15,
REPLAY : 16,
SEEK : 17,
OPEN_UPLOAD : 18,
SAVE_PUBLISH : 19,
CLOSE_EDITOR : 20,
PRE_BUMPER_PLAYED : 21,
POST_BUMPER_PLAYED : 22,
BUMPER_CLICKED : 23,
PREROLL_STARTED : 24,
MIDROLL_STARTED : 25,
POSTROLL_STARTED : 26,
OVERLAY_STARTED : 27,
PREROLL_CLICKED : 28,
MIDROLL_CLICKED : 29,
POSTROLL_CLICKED : 30,
OVERLAY_CLICKED : 31,
PREROLL_25 : 32,
PREROLL_50 : 33,
PREROLL_75 : 34,
MIDROLL_25 : 35,
MIDROLL_50 : 36,
MIDROLL_75 : 37,
POSTROLL_25 : 38,
POSTROLL_50 : 39,
POSTROLL_75 : 40,
};

var VidiunStatsFeatureType = module.exports.VidiunStatsFeatureType = {
NONE : 0,
RELATED : 1,
};

var VidiunStatsVmcEventType = module.exports.VidiunStatsVmcEventType = {
CONTENT_PAGE_VIEW : 1001,
CONTENT_ADD_PLAYLIST : 1010,
CONTENT_EDIT_PLAYLIST : 1011,
CONTENT_DELETE_PLAYLIST : 1012,
CONTENT_EDIT_ENTRY : 1013,
CONTENT_CHANGE_THUMBNAIL : 1014,
CONTENT_ADD_TAGS : 1015,
CONTENT_REMOVE_TAGS : 1016,
CONTENT_ADD_ADMIN_TAGS : 1017,
CONTENT_REMOVE_ADMIN_TAGS : 1018,
CONTENT_DOWNLOAD : 1019,
CONTENT_APPROVE_MODERATION : 1020,
CONTENT_REJECT_MODERATION : 1021,
CONTENT_BULK_UPLOAD : 1022,
CONTENT_ADMIN_VCW_UPLOAD : 1023,
ACCOUNT_CHANGE_PARTNER_INFO : 1030,
ACCOUNT_CHANGE_LOGIN_INFO : 1031,
ACCOUNT_CONTACT_US_USAGE : 1032,
ACCOUNT_UPDATE_SERVER_SETTINGS : 1033,
ACCOUNT_ACCOUNT_OVERVIEW : 1034,
ACCOUNT_ACCESS_CONTROL : 1035,
ACCOUNT_TRANSCODING_SETTINGS : 1036,
ACCOUNT_ACCOUNT_UPGRADE : 1037,
ACCOUNT_SAVE_SERVER_SETTINGS : 1038,
ACCOUNT_ACCESS_CONTROL_DELETE : 1039,
ACCOUNT_SAVE_TRANSCODING_SETTINGS : 1040,
LOGIN : 1041,
DASHBOARD_IMPORT_CONTENT : 1042,
DASHBOARD_UPDATE_CONTENT : 1043,
DASHBOARD_ACCOUNT_CONTACT_US : 1044,
DASHBOARD_VIEW_REPORTS : 1045,
DASHBOARD_EMBED_PLAYER : 1046,
DASHBOARD_EMBED_PLAYLIST : 1047,
DASHBOARD_CUSTOMIZE_PLAYERS : 1048,
APP_STUDIO_NEW_PLAYER_SINGLE_VIDEO : 1050,
APP_STUDIO_NEW_PLAYER_PLAYLIST : 1051,
APP_STUDIO_NEW_PLAYER_MULTI_TAB_PLAYLIST : 1052,
APP_STUDIO_EDIT_PLAYER_SINGLE_VIDEO : 1053,
APP_STUDIO_EDIT_PLAYER_PLAYLIST : 1054,
APP_STUDIO_EDIT_PLAYER_MULTI_TAB_PLAYLIST : 1055,
APP_STUDIO_DUPLICATE_PLAYER : 1056,
CONTENT_CONTENT_GO_TO_PAGE : 1057,
CONTENT_DELETE_ITEM : 1058,
CONTENT_DELETE_MIX : 1059,
REPORTS_AND_ANALYTICS_BANDWIDTH_USAGE_TAB : 1070,
REPORTS_AND_ANALYTICS_CONTENT_REPORTS_TAB : 1071,
REPORTS_AND_ANALYTICS_USERS_AND_COMMUNITY_REPORTS_TAB : 1072,
REPORTS_AND_ANALYTICS_TOP_CONTRIBUTORS : 1073,
REPORTS_AND_ANALYTICS_MAP_OVERLAYS : 1074,
REPORTS_AND_ANALYTICS_TOP_SYNDICATIONS : 1075,
REPORTS_AND_ANALYTICS_TOP_CONTENT : 1076,
REPORTS_AND_ANALYTICS_CONTENT_DROPOFF : 1077,
REPORTS_AND_ANALYTICS_CONTENT_INTERACTIONS : 1078,
REPORTS_AND_ANALYTICS_CONTENT_CONTRIBUTIONS : 1079,
REPORTS_AND_ANALYTICS_VIDEO_DRILL_DOWN : 1080,
REPORTS_AND_ANALYTICS_CONTENT_DRILL_DOWN_INTERACTION : 1081,
REPORTS_AND_ANALYTICS_CONTENT_CONTRIBUTIONS_DRILLDOWN : 1082,
REPORTS_AND_ANALYTICS_VIDEO_DRILL_DOWN_DROPOFF : 1083,
REPORTS_AND_ANALYTICS_MAP_OVERLAYS_DRILLDOWN : 1084,
REPORTS_AND_ANALYTICS_TOP_SYNDICATIONS_DRILL_DOWN : 1085,
REPORTS_AND_ANALYTICS_BANDWIDTH_USAGE_VIEW_MONTHLY : 1086,
REPORTS_AND_ANALYTICS_BANDWIDTH_USAGE_VIEW_YEARLY : 1087,
CONTENT_ENTRY_DRILLDOWN : 1088,
CONTENT_OPEN_PREVIEW_AND_EMBED : 1089,
};

var VidiunStorageProfileDeliveryStatus = module.exports.VidiunStorageProfileDeliveryStatus = {
ACTIVE : 1,
BLOCKED : 2,
};

var VidiunStorageProfileReadyBehavior = module.exports.VidiunStorageProfileReadyBehavior = {
NO_IMPACT : 0,
REQUIRED : 1,
};

var VidiunStorageProfileStatus = module.exports.VidiunStorageProfileStatus = {
DISABLED : 1,
AUTOMATIC : 2,
MANUAL : 3,
};

var VidiunStorageServePriority = module.exports.VidiunStorageServePriority = {
VIDIUN_ONLY : 1,
VIDIUN_FIRST : 2,
EXTERNAL_FIRST : 3,
EXTERNAL_ONLY : 4,
};

var VidiunSyndicationFeedStatus = module.exports.VidiunSyndicationFeedStatus = {
DELETED : -1,
ACTIVE : 1,
};

var VidiunSyndicationFeedType = module.exports.VidiunSyndicationFeedType = {
GOOGLE_VIDEO : 1,
YAHOO : 2,
ITUNES : 3,
TUBE_MOGUL : 4,
VIDIUN : 5,
VIDIUN_XSLT : 6,
};

var VidiunThumbAssetStatus = module.exports.VidiunThumbAssetStatus = {
ERROR : -1,
QUEUED : 0,
CAPTURING : 1,
READY : 2,
DELETED : 3,
IMPORTING : 7,
EXPORTING : 9,
};

var VidiunThumbCropType = module.exports.VidiunThumbCropType = {
RESIZE : 1,
RESIZE_WITH_PADDING : 2,
CROP : 3,
CROP_FROM_TOP : 4,
RESIZE_WITH_FORCE : 5,
};

var VidiunThumbCuePointSubType = module.exports.VidiunThumbCuePointSubType = {
SLIDE : 1,
CHAPTER : 2,
};

var VidiunTrackEntryEventType = module.exports.VidiunTrackEntryEventType = {
UPLOADED_FILE : 1,
WEBCAM_COMPLETED : 2,
IMPORT_STARTED : 3,
ADD_ENTRY : 4,
UPDATE_ENTRY : 5,
DELETED_ENTRY : 6,
};

var VidiunUiConfCreationMode = module.exports.VidiunUiConfCreationMode = {
WIZARD : 2,
ADVANCED : 3,
};

var VidiunUiConfObjType = module.exports.VidiunUiConfObjType = {
PLAYER : 1,
CONTRIBUTION_WIZARD : 2,
SIMPLE_EDITOR : 3,
ADVANCED_EDITOR : 4,
PLAYLIST : 5,
APP_STUDIO : 6,
VRECORD : 7,
PLAYER_V3 : 8,
VMC_ACCOUNT : 9,
VMC_ANALYTICS : 10,
VMC_CONTENT : 11,
VMC_DASHBOARD : 12,
VMC_LOGIN : 13,
PLAYER_SL : 14,
CLIENTSIDE_ENCODER : 15,
VMC_GENERAL : 16,
VMC_ROLES_AND_PERMISSIONS : 17,
CLIPPER : 18,
VSR : 19,
VUPLOAD : 20,
WEBCASTING : 21,
};

var VidiunUpdateMethodType = module.exports.VidiunUpdateMethodType = {
MANUAL : 0,
AUTOMATIC : 1,
};

var VidiunUploadErrorCode = module.exports.VidiunUploadErrorCode = {
NO_ERROR : 0,
GENERAL_ERROR : 1,
PARTIAL_UPLOAD : 2,
};

var VidiunUploadTokenStatus = module.exports.VidiunUploadTokenStatus = {
PENDING : 0,
PARTIAL_UPLOAD : 1,
FULL_UPLOAD : 2,
CLOSED : 3,
TIMED_OUT : 4,
DELETED : 5,
};

var VidiunUserAgentRestrictionType = module.exports.VidiunUserAgentRestrictionType = {
RESTRICT_LIST : 0,
ALLOW_LIST : 1,
};

var VidiunUserJoinPolicyType = module.exports.VidiunUserJoinPolicyType = {
AUTO_JOIN : 1,
REQUEST_TO_JOIN : 2,
NOT_ALLOWED : 3,
};

var VidiunUserRoleStatus = module.exports.VidiunUserRoleStatus = {
ACTIVE : 1,
BLOCKED : 2,
DELETED : 3,
};

var VidiunUserStatus = module.exports.VidiunUserStatus = {
BLOCKED : 0,
ACTIVE : 1,
DELETED : 2,
};

var VidiunUserType = module.exports.VidiunUserType = {
USER : 0,
GROUP : 1,
};

var VidiunViewMode = module.exports.VidiunViewMode = {
PREVIEW : 0,
ALLOW_ALL : 1,
};

var VidiunVirusFoundAction = module.exports.VidiunVirusFoundAction = {
NONE : 0,
DELETE : 1,
CLEAN_NONE : 2,
CLEAN_DELETE : 3,
};

var VidiunVirusScanJobResult = module.exports.VidiunVirusScanJobResult = {
SCAN_ERROR : 1,
FILE_IS_CLEAN : 2,
FILE_WAS_CLEANED : 3,
FILE_INFECTED : 4,
};

var VidiunVirusScanProfileStatus = module.exports.VidiunVirusScanProfileStatus = {
DISABLED : 1,
ENABLED : 2,
DELETED : 3,
};

var VidiunWidevineRepositorySyncMode = module.exports.VidiunWidevineRepositorySyncMode = {
MODIFY : 0,
};

var VidiunWidgetSecurityType = module.exports.VidiunWidgetSecurityType = {
NONE : 1,
TIMEHASH : 2,
};

var VidiunAccessControlOrderBy = module.exports.VidiunAccessControlOrderBy = {
CREATED_AT_ASC : '+createdAt',
CREATED_AT_DESC : '-createdAt',
};

var VidiunAccessControlProfileOrderBy = module.exports.VidiunAccessControlProfileOrderBy = {
CREATED_AT_ASC : '+createdAt',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
UPDATED_AT_DESC : '-updatedAt',
};

var VidiunActivitiBusinessProcessServerOrderBy = module.exports.VidiunActivitiBusinessProcessServerOrderBy = {
CREATED_AT_ASC : '+createdAt',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
UPDATED_AT_DESC : '-updatedAt',
};

var VidiunActivitiBusinessProcessServerProtocol = module.exports.VidiunActivitiBusinessProcessServerProtocol = {
HTTP : 'http',
HTTPS : 'https',
};

var VidiunAdCuePointOrderBy = module.exports.VidiunAdCuePointOrderBy = {
CREATED_AT_ASC : '+createdAt',
DURATION_ASC : '+duration',
END_TIME_ASC : '+endTime',
PARTNER_SORT_VALUE_ASC : '+partnerSortValue',
START_TIME_ASC : '+startTime',
TRIGGERED_AT_ASC : '+triggeredAt',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
DURATION_DESC : '-duration',
END_TIME_DESC : '-endTime',
PARTNER_SORT_VALUE_DESC : '-partnerSortValue',
START_TIME_DESC : '-startTime',
TRIGGERED_AT_DESC : '-triggeredAt',
UPDATED_AT_DESC : '-updatedAt',
};

var VidiunAdProtocolType = module.exports.VidiunAdProtocolType = {
CUSTOM : '0',
VAST : '1',
VAST_2_0 : '2',
VPAID : '3',
};

var VidiunAdType = module.exports.VidiunAdType = {
VIDEO : '1',
OVERLAY : '2',
};

var VidiunAdminUserOrderBy = module.exports.VidiunAdminUserOrderBy = {
CREATED_AT_ASC : '+createdAt',
ID_ASC : '+id',
CREATED_AT_DESC : '-createdAt',
ID_DESC : '-id',
};

var VidiunAkamaiUniversalStreamType = module.exports.VidiunAkamaiUniversalStreamType = {
HD_IPHONE_IPAD_LIVE : 'HD iPhone/iPad Live',
UNIVERSAL_STREAMING_LIVE : 'Universal Streaming Live',
};

var VidiunAmazonS3StorageProfileFilesPermissionLevel = module.exports.VidiunAmazonS3StorageProfileFilesPermissionLevel = {
ACL_AUTHENTICATED_READ : 'authenticated-read',
ACL_PRIVATE : 'private',
ACL_PUBLIC_READ : 'public-read',
ACL_PUBLIC_READ_WRITE : 'public-read-write',
};

var VidiunAmazonS3StorageProfileOrderBy = module.exports.VidiunAmazonS3StorageProfileOrderBy = {
CREATED_AT_ASC : '+createdAt',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
UPDATED_AT_DESC : '-updatedAt',
};

var VidiunAnnotationOrderBy = module.exports.VidiunAnnotationOrderBy = {
CREATED_AT_ASC : '+createdAt',
DURATION_ASC : '+duration',
END_TIME_ASC : '+endTime',
PARTNER_SORT_VALUE_ASC : '+partnerSortValue',
START_TIME_ASC : '+startTime',
TRIGGERED_AT_ASC : '+triggeredAt',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
DURATION_DESC : '-duration',
END_TIME_DESC : '-endTime',
PARTNER_SORT_VALUE_DESC : '-partnerSortValue',
START_TIME_DESC : '-startTime',
TRIGGERED_AT_DESC : '-triggeredAt',
UPDATED_AT_DESC : '-updatedAt',
};

var VidiunAnswerCuePointOrderBy = module.exports.VidiunAnswerCuePointOrderBy = {
CREATED_AT_ASC : '+createdAt',
PARTNER_SORT_VALUE_ASC : '+partnerSortValue',
START_TIME_ASC : '+startTime',
TRIGGERED_AT_ASC : '+triggeredAt',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
PARTNER_SORT_VALUE_DESC : '-partnerSortValue',
START_TIME_DESC : '-startTime',
TRIGGERED_AT_DESC : '-triggeredAt',
UPDATED_AT_DESC : '-updatedAt',
};

var VidiunApiActionPermissionItemOrderBy = module.exports.VidiunApiActionPermissionItemOrderBy = {
CREATED_AT_ASC : '+createdAt',
ID_ASC : '+id',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
ID_DESC : '-id',
UPDATED_AT_DESC : '-updatedAt',
};

var VidiunApiParameterPermissionItemAction = module.exports.VidiunApiParameterPermissionItemAction = {
USAGE : 'all',
INSERT : 'insert',
READ : 'read',
UPDATE : 'update',
};

var VidiunApiParameterPermissionItemOrderBy = module.exports.VidiunApiParameterPermissionItemOrderBy = {
CREATED_AT_ASC : '+createdAt',
ID_ASC : '+id',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
ID_DESC : '-id',
UPDATED_AT_DESC : '-updatedAt',
};

var VidiunAppTokenHashType = module.exports.VidiunAppTokenHashType = {
MD5 : 'MD5',
SHA1 : 'SHA1',
SHA256 : 'SHA256',
SHA512 : 'SHA512',
};

var VidiunAppTokenOrderBy = module.exports.VidiunAppTokenOrderBy = {
CREATED_AT_ASC : '+createdAt',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
UPDATED_AT_DESC : '-updatedAt',
};

var VidiunAssetOrderBy = module.exports.VidiunAssetOrderBy = {
CREATED_AT_ASC : '+createdAt',
DELETED_AT_ASC : '+deletedAt',
SIZE_ASC : '+size',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
DELETED_AT_DESC : '-deletedAt',
SIZE_DESC : '-size',
UPDATED_AT_DESC : '-updatedAt',
};

var VidiunAssetParamsOrderBy = module.exports.VidiunAssetParamsOrderBy = {
};

var VidiunAssetParamsOutputOrderBy = module.exports.VidiunAssetParamsOutputOrderBy = {
};

var VidiunAssetType = module.exports.VidiunAssetType = {
ATTACHMENT : 'attachment.Attachment',
CAPTION : 'caption.Caption',
DOCUMENT : 'document.Document',
IMAGE : 'document.Image',
PDF : 'document.PDF',
SWF : 'document.SWF',
TIMED_THUMB_ASSET : 'thumbCuePoint.timedThumb',
TRANSCRIPT : 'transcript.Transcript',
WIDEVINE_FLAVOR : 'widevine.WidevineFlavor',
FLAVOR : '1',
THUMBNAIL : '2',
LIVE : '3',
};

var VidiunAttachmentAssetOrderBy = module.exports.VidiunAttachmentAssetOrderBy = {
CREATED_AT_ASC : '+createdAt',
DELETED_AT_ASC : '+deletedAt',
SIZE_ASC : '+size',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
DELETED_AT_DESC : '-deletedAt',
SIZE_DESC : '-size',
UPDATED_AT_DESC : '-updatedAt',
};

var VidiunAttachmentType = module.exports.VidiunAttachmentType = {
TEXT : '1',
MEDIA : '2',
DOCUMENT : '3',
};

var VidiunAudioCodec = module.exports.VidiunAudioCodec = {
NONE : '',
AAC : 'aac',
AACHE : 'aache',
AC3 : 'ac3',
AMRNB : 'amrnb',
COPY : 'copy',
MP3 : 'mp3',
MPEG2 : 'mpeg2',
PCM : 'pcm',
VORBIS : 'vorbis',
WMA : 'wma',
WMAPRO : 'wmapro',
};

var VidiunAuditTrailAction = module.exports.VidiunAuditTrailAction = {
CHANGED : 'CHANGED',
CONTENT_VIEWED : 'CONTENT_VIEWED',
COPIED : 'COPIED',
CREATED : 'CREATED',
DELETED : 'DELETED',
FILE_SYNC_CREATED : 'FILE_SYNC_CREATED',
RELATION_ADDED : 'RELATION_ADDED',
RELATION_REMOVED : 'RELATION_REMOVED',
VIEWED : 'VIEWED',
};

var VidiunAuditTrailObjectType = module.exports.VidiunAuditTrailObjectType = {
BATCH_JOB : 'BatchJob',
EMAIL_INGESTION_PROFILE : 'EmailIngestionProfile',
FILE_SYNC : 'FileSync',
VSHOW_VUSER : 'VshowVuser',
METADATA : 'Metadata',
METADATA_PROFILE : 'MetadataProfile',
PARTNER : 'Partner',
PERMISSION : 'Permission',
UPLOAD_TOKEN : 'UploadToken',
USER_LOGIN_DATA : 'UserLoginData',
USER_ROLE : 'UserRole',
ACCESS_CONTROL : 'accessControl',
CATEGORY : 'category',
CONVERSION_PROFILE_2 : 'conversionProfile2',
ENTRY : 'entry',
FLAVOR_ASSET : 'flavorAsset',
FLAVOR_PARAMS : 'flavorParams',
FLAVOR_PARAMS_CONVERSION_PROFILE : 'flavorParamsConversionProfile',
FLAVOR_PARAMS_OUTPUT : 'flavorParamsOutput',
VSHOW : 'vshow',
VUSER : 'vuser',
MEDIA_INFO : 'mediaInfo',
MODERATION : 'moderation',
ROUGHCUT : 'roughcutEntry',
SYNDICATION : 'syndicationFeed',
THUMBNAIL_ASSET : 'thumbAsset',
THUMBNAIL_PARAMS : 'thumbParams',
THUMBNAIL_PARAMS_OUTPUT : 'thumbParamsOutput',
UI_CONF : 'uiConf',
WIDGET : 'widget',
};

var VidiunAuditTrailOrderBy = module.exports.VidiunAuditTrailOrderBy = {
CREATED_AT_ASC : '+createdAt',
PARSED_AT_ASC : '+parsedAt',
CREATED_AT_DESC : '-createdAt',
PARSED_AT_DESC : '-parsedAt',
};

var VidiunBaseEntryCloneOptions = module.exports.VidiunBaseEntryCloneOptions = {
AD_CUE_POINTS : 'adCuePoint.AD_CUE_POINTS',
ANNOTATION_CUE_POINTS : 'annotation.ANNOTATION_CUE_POINTS',
CODE_CUE_POINTS : 'codeCuePoint.CODE_CUE_POINTS',
THUMB_CUE_POINTS : 'thumbCuePoint.THUMB_CUE_POINTS',
USERS : '1',
CATEGORIES : '2',
};

var VidiunBaseEntryCompareAttribute = module.exports.VidiunBaseEntryCompareAttribute = {
ACCESS_CONTROL_ID : 'accessControlId',
CREATED_AT : 'createdAt',
END_DATE : 'endDate',
MODERATION_COUNT : 'moderationCount',
MODERATION_STATUS : 'moderationStatus',
PARTNER_ID : 'partnerId',
PARTNER_SORT_VALUE : 'partnerSortValue',
RANK : 'rank',
REPLACEMENT_STATUS : 'replacementStatus',
START_DATE : 'startDate',
STATUS : 'status',
TOTAL_RANK : 'totalRank',
TYPE : 'type',
UPDATED_AT : 'updatedAt',
};

var VidiunBaseEntryMatchAttribute = module.exports.VidiunBaseEntryMatchAttribute = {
ADMIN_TAGS : 'adminTags',
CATEGORIES_IDS : 'categoriesIds',
CREATOR_ID : 'creatorId',
DESCRIPTION : 'description',
GROUP_ID : 'groupId',
ID : 'id',
NAME : 'name',
REFERENCE_ID : 'referenceId',
REPLACED_ENTRY_ID : 'replacedEntryId',
REPLACING_ENTRY_ID : 'replacingEntryId',
SEARCH_TEXT : 'searchText',
TAGS : 'tags',
USER_ID : 'userId',
};

var VidiunBaseEntryOrderBy = module.exports.VidiunBaseEntryOrderBy = {
CREATED_AT_ASC : '+createdAt',
END_DATE_ASC : '+endDate',
MODERATION_COUNT_ASC : '+moderationCount',
NAME_ASC : '+name',
PARTNER_SORT_VALUE_ASC : '+partnerSortValue',
RANK_ASC : '+rank',
RECENT_ASC : '+recent',
START_DATE_ASC : '+startDate',
TOTAL_RANK_ASC : '+totalRank',
UPDATED_AT_ASC : '+updatedAt',
WEIGHT_ASC : '+weight',
CREATED_AT_DESC : '-createdAt',
END_DATE_DESC : '-endDate',
MODERATION_COUNT_DESC : '-moderationCount',
NAME_DESC : '-name',
PARTNER_SORT_VALUE_DESC : '-partnerSortValue',
RANK_DESC : '-rank',
RECENT_DESC : '-recent',
START_DATE_DESC : '-startDate',
TOTAL_RANK_DESC : '-totalRank',
UPDATED_AT_DESC : '-updatedAt',
WEIGHT_DESC : '-weight',
};

var VidiunBaseSyndicationFeedOrderBy = module.exports.VidiunBaseSyndicationFeedOrderBy = {
CREATED_AT_ASC : '+createdAt',
NAME_ASC : '+name',
PLAYLIST_ID_ASC : '+playlistId',
TYPE_ASC : '+type',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
NAME_DESC : '-name',
PLAYLIST_ID_DESC : '-playlistId',
TYPE_DESC : '-type',
UPDATED_AT_DESC : '-updatedAt',
};

var VidiunBatchJobObjectType = module.exports.VidiunBatchJobObjectType = {
ENTRY_DISTRIBUTION : 'contentDistribution.EntryDistribution',
DROP_FOLDER_FILE : 'dropFolderXmlBulkUpload.DropFolderFile',
METADATA : 'metadata.Metadata',
METADATA_PROFILE : 'metadata.MetadataProfile',
SCHEDULED_TASK_PROFILE : 'scheduledTask.ScheduledTaskProfile',
ENTRY : '1',
CATEGORY : '2',
FILE_SYNC : '3',
ASSET : '4',
};

var VidiunBatchJobOrderBy = module.exports.VidiunBatchJobOrderBy = {
CREATED_AT_ASC : '+createdAt',
ESTIMATED_EFFORT_ASC : '+estimatedEffort',
EXECUTION_ATTEMPTS_ASC : '+executionAttempts',
FINISH_TIME_ASC : '+finishTime',
LOCK_VERSION_ASC : '+lockVersion',
PRIORITY_ASC : '+priority',
QUEUE_TIME_ASC : '+queueTime',
STATUS_ASC : '+status',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
ESTIMATED_EFFORT_DESC : '-estimatedEffort',
EXECUTION_ATTEMPTS_DESC : '-executionAttempts',
FINISH_TIME_DESC : '-finishTime',
LOCK_VERSION_DESC : '-lockVersion',
PRIORITY_DESC : '-priority',
QUEUE_TIME_DESC : '-queueTime',
STATUS_DESC : '-status',
UPDATED_AT_DESC : '-updatedAt',
};

var VidiunBatchJobType = module.exports.VidiunBatchJobType = {
PARSE_MULTI_LANGUAGE_CAPTION_ASSET : 'caption.parsemultilanguagecaptionasset',
PARSE_CAPTION_ASSET : 'captionSearch.parseCaptionAsset',
DISTRIBUTION_DELETE : 'contentDistribution.DistributionDelete',
DISTRIBUTION_DISABLE : 'contentDistribution.DistributionDisable',
DISTRIBUTION_ENABLE : 'contentDistribution.DistributionEnable',
DISTRIBUTION_FETCH_REPORT : 'contentDistribution.DistributionFetchReport',
DISTRIBUTION_SUBMIT : 'contentDistribution.DistributionSubmit',
DISTRIBUTION_SYNC : 'contentDistribution.DistributionSync',
DISTRIBUTION_UPDATE : 'contentDistribution.DistributionUpdate',
DROP_FOLDER_CONTENT_PROCESSOR : 'dropFolder.DropFolderContentProcessor',
CONVERT : '0',
DROP_FOLDER_WATCHER : 'dropFolder.DropFolderWatcher',
EVENT_NOTIFICATION_HANDLER : 'eventNotification.EventNotificationHandler',
INTEGRATION : 'integration.Integration',
SCHEDULED_TASK : 'scheduledTask.ScheduledTask',
INDEX_TAGS : 'tagSearch.IndexTagsByPrivacyContext',
TAG_RESOLVE : 'tagSearch.TagResolve',
VIRUS_SCAN : 'virusScan.VirusScan',
WIDEVINE_REPOSITORY_SYNC : 'widevine.WidevineRepositorySync',
IMPORT : '1',
DELETE : '2',
FLATTEN : '3',
BULKUPLOAD : '4',
DVDCREATOR : '5',
DOWNLOAD : '6',
OOCONVERT : '7',
CONVERT_PROFILE : '10',
POSTCONVERT : '11',
EXTRACT_MEDIA : '14',
MAIL : '15',
NOTIFICATION : '16',
CLEANUP : '17',
SCHEDULER_HELPER : '18',
BULKDOWNLOAD : '19',
DB_CLEANUP : '20',
PROVISION_PROVIDE : '21',
CONVERT_COLLECTION : '22',
STORAGE_EXPORT : '23',
PROVISION_DELETE : '24',
STORAGE_DELETE : '25',
EMAIL_INGESTION : '26',
METADATA_IMPORT : '27',
METADATA_TRANSFORM : '28',
FILESYNC_IMPORT : '29',
CAPTURE_THUMB : '30',
DELETE_FILE : '31',
INDEX : '32',
MOVE_CATEGORY_ENTRIES : '33',
COPY : '34',
CONCAT : '35',
CONVERT_LIVE_SEGMENT : '36',
COPY_PARTNER : '37',
VALIDATE_LIVE_MEDIA_SERVERS : '38',
SYNC_CATEGORY_PRIVACY_CONTEXT : '39',
LIVE_REPORT_EXPORT : '40',
RECALCULATE_CACHE : '41',
};

var BeaconObjectTypes = module.exports.BeaconObjectTypes = {
    SCHEDULE_RESOURCE_BEACON : '1',
    ENTRY_SERVER_NODE_BEACON : '2',
    SERVER_NODE_BEACON : '3',
    ENTRY_BEACON : '4'
};

var VidiunBulkUploadAction = module.exports.VidiunBulkUploadAction = {
CANCEL : 'scheduleBulkUpload.CANCEL',
ADD : '1',
UPDATE : '2',
DELETE : '3',
REPLACE : '4',
TRANSFORM_XSLT : '5',
ADD_OR_UPDATE : '6',
};

var VidiunBulkUploadObjectType = module.exports.VidiunBulkUploadObjectType = {
SCHEDULE_EVENT : 'scheduleBulkUpload.SCHEDULE_EVENT',
SCHEDULE_RESOURCE : 'scheduleBulkUpload.SCHEDULE_RESOURCE',
ENTRY : '1',
CATEGORY : '2',
USER : '3',
CATEGORY_USER : '4',
CATEGORY_ENTRY : '5',
};

var VidiunBulkUploadOrderBy = module.exports.VidiunBulkUploadOrderBy = {
};

var VidiunBulkUploadResultStatus = module.exports.VidiunBulkUploadResultStatus = {
ERROR : '1',
OK : '2',
IN_PROGRESS : '3',
};

var VidiunBulkUploadType = module.exports.VidiunBulkUploadType = {
CSV : 'bulkUploadCsv.CSV',
FILTER : 'bulkUploadFilter.FILTER',
XML : 'bulkUploadXml.XML',
DROP_FOLDER_XML : 'dropFolderXmlBulkUpload.DROP_FOLDER_XML',
ICAL : 'scheduleBulkUpload.ICAL',
DROP_FOLDER_ICAL : 'scheduleDropFolder.DROP_FOLDER_ICAL',
};

var VidiunBusinessProcessAbortNotificationTemplateOrderBy = module.exports.VidiunBusinessProcessAbortNotificationTemplateOrderBy = {
CREATED_AT_ASC : '+createdAt',
ID_ASC : '+id',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
ID_DESC : '-id',
UPDATED_AT_DESC : '-updatedAt',
};

var VidiunBusinessProcessNotificationTemplateOrderBy = module.exports.VidiunBusinessProcessNotificationTemplateOrderBy = {
CREATED_AT_ASC : '+createdAt',
ID_ASC : '+id',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
ID_DESC : '-id',
UPDATED_AT_DESC : '-updatedAt',
};

var VidiunBusinessProcessProvider = module.exports.VidiunBusinessProcessProvider = {
ACTIVITI : 'activitiBusinessProcessNotification.Activiti',
};

var VidiunBusinessProcessServerOrderBy = module.exports.VidiunBusinessProcessServerOrderBy = {
CREATED_AT_ASC : '+createdAt',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
UPDATED_AT_DESC : '-updatedAt',
};

var VidiunBusinessProcessServerStatus = module.exports.VidiunBusinessProcessServerStatus = {
DISABLED : '1',
ENABLED : '2',
DELETED : '3',
};

var VidiunBusinessProcessSignalNotificationTemplateOrderBy = module.exports.VidiunBusinessProcessSignalNotificationTemplateOrderBy = {
CREATED_AT_ASC : '+createdAt',
ID_ASC : '+id',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
ID_DESC : '-id',
UPDATED_AT_DESC : '-updatedAt',
};

var VidiunBusinessProcessStartNotificationTemplateOrderBy = module.exports.VidiunBusinessProcessStartNotificationTemplateOrderBy = {
CREATED_AT_ASC : '+createdAt',
ID_ASC : '+id',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
ID_DESC : '-id',
UPDATED_AT_DESC : '-updatedAt',
};

var VidiunCameraScheduleResourceOrderBy = module.exports.VidiunCameraScheduleResourceOrderBy = {
CREATED_AT_ASC : '+createdAt',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
UPDATED_AT_DESC : '-updatedAt',
};

var VidiunCaptionAssetOrderBy = module.exports.VidiunCaptionAssetOrderBy = {
CREATED_AT_ASC : '+createdAt',
DELETED_AT_ASC : '+deletedAt',
SIZE_ASC : '+size',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
DELETED_AT_DESC : '-deletedAt',
SIZE_DESC : '-size',
UPDATED_AT_DESC : '-updatedAt',
};

var VidiunCaptionParamsOrderBy = module.exports.VidiunCaptionParamsOrderBy = {
};

var VidiunCaptionType = module.exports.VidiunCaptionType = {
SRT : '1',
DFXP : '2',
WEBVTT : '3',
};

var VidiunCaptureSpaceHashAlgorithm = module.exports.VidiunCaptureSpaceHashAlgorithm = {
MD5 : 'md5',
};

var VidiunCategoryEntryAdvancedOrderBy = module.exports.VidiunCategoryEntryAdvancedOrderBy = {
CREATED_AT_ASC : '+createdAt',
CREATED_AT_DESC : '-createdAt',
};

var VidiunCategoryEntryOrderBy = module.exports.VidiunCategoryEntryOrderBy = {
CREATED_AT_ASC : '+createdAt',
CREATED_AT_DESC : '-createdAt',
};

var VidiunCategoryIdentifierField = module.exports.VidiunCategoryIdentifierField = {
FULL_NAME : 'fullName',
ID : 'id',
REFERENCE_ID : 'referenceId',
};

var VidiunCategoryOrderBy = module.exports.VidiunCategoryOrderBy = {
CREATED_AT_ASC : '+createdAt',
DEPTH_ASC : '+depth',
DIRECT_ENTRIES_COUNT_ASC : '+directEntriesCount',
DIRECT_SUB_CATEGORIES_COUNT_ASC : '+directSubCategoriesCount',
ENTRIES_COUNT_ASC : '+entriesCount',
FULL_NAME_ASC : '+fullName',
MEMBERS_COUNT_ASC : '+membersCount',
NAME_ASC : '+name',
PARTNER_SORT_VALUE_ASC : '+partnerSortValue',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
DEPTH_DESC : '-depth',
DIRECT_ENTRIES_COUNT_DESC : '-directEntriesCount',
DIRECT_SUB_CATEGORIES_COUNT_DESC : '-directSubCategoriesCount',
ENTRIES_COUNT_DESC : '-entriesCount',
FULL_NAME_DESC : '-fullName',
MEMBERS_COUNT_DESC : '-membersCount',
NAME_DESC : '-name',
PARTNER_SORT_VALUE_DESC : '-partnerSortValue',
UPDATED_AT_DESC : '-updatedAt',
};

var VidiunCategoryUserOrderBy = module.exports.VidiunCategoryUserOrderBy = {
CREATED_AT_ASC : '+createdAt',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
UPDATED_AT_DESC : '-updatedAt',
};

var VidiunCielo24Fidelity = module.exports.VidiunCielo24Fidelity = {
MECHANICAL : 'MECHANICAL',
PREMIUM : 'PREMIUM',
PROFESSIONAL : 'PROFESSIONAL',
};

var VidiunCielo24Priority = module.exports.VidiunCielo24Priority = {
PRIORITY : 'PRIORITY',
STANDARD : 'STANDARD',
};

var VidiunCloneComponentSelectorType = module.exports.VidiunCloneComponentSelectorType = {
INCLUDE_COMPONENT : '0',
EXCLUDE_COMPONENT : '1',
};

var VidiunCodeCuePointOrderBy = module.exports.VidiunCodeCuePointOrderBy = {
CREATED_AT_ASC : '+createdAt',
DURATION_ASC : '+duration',
END_TIME_ASC : '+endTime',
PARTNER_SORT_VALUE_ASC : '+partnerSortValue',
START_TIME_ASC : '+startTime',
TRIGGERED_AT_ASC : '+triggeredAt',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
DURATION_DESC : '-duration',
END_TIME_DESC : '-endTime',
PARTNER_SORT_VALUE_DESC : '-partnerSortValue',
START_TIME_DESC : '-startTime',
TRIGGERED_AT_DESC : '-triggeredAt',
UPDATED_AT_DESC : '-updatedAt',
};

var VidiunConditionType = module.exports.VidiunConditionType = {
EVENT_NOTIFICATION_FIELD : 'eventNotification.BooleanField',
EVENT_NOTIFICATION_OBJECT_CHANGED : 'eventNotification.ObjectChanged',
METADATA_FIELD_CHANGED : 'metadata.FieldChanged',
METADATA_FIELD_COMPARE : 'metadata.FieldCompare',
METADATA_FIELD_MATCH : 'metadata.FieldMatch',
AUTHENTICATED : '1',
COUNTRY : '2',
IP_ADDRESS : '3',
SITE : '4',
USER_AGENT : '5',
FIELD_MATCH : '6',
FIELD_COMPARE : '7',
ASSET_PROPERTIES_COMPARE : '8',
USER_ROLE : '9',
GEO_DISTANCE : '10',
OR_OPERATOR : '11',
HASH : '12',
DELIVERY_PROFILE : '13',
ACTIVE_EDGE_VALIDATE : '14',
};

var VidiunConfigurableDistributionProfileOrderBy = module.exports.VidiunConfigurableDistributionProfileOrderBy = {
CREATED_AT_ASC : '+createdAt',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
UPDATED_AT_DESC : '-updatedAt',
};

var VidiunContainerFormat = module.exports.VidiunContainerFormat = {
_3GP : '3gp',
APPLEHTTP : 'applehttp',
AVI : 'avi',
BMP : 'bmp',
COPY : 'copy',
FLV : 'flv',
HLS : 'hls',
ISMA : 'isma',
ISMV : 'ismv',
JPG : 'jpg',
M2TS : 'm2ts',
M4V : 'm4v',
MKV : 'mkv',
MOV : 'mov',
MP3 : 'mp3',
MP4 : 'mp4',
MPEG : 'mpeg',
MPEGTS : 'mpegts',
MXF : 'mxf',
OGG : 'ogg',
OGV : 'ogv',
PDF : 'pdf',
PNG : 'png',
SWF : 'swf',
WAV : 'wav',
WEBM : 'webm',
WMA : 'wma',
WMV : 'wmv',
WVM : 'wvm',
};

var VidiunContextType = module.exports.VidiunContextType = {
PLAY : '1',
DOWNLOAD : '2',
THUMBNAIL : '3',
METADATA : '4',
EXPORT : '5',
SERVE : '6',
};

var VidiunControlPanelCommandOrderBy = module.exports.VidiunControlPanelCommandOrderBy = {
CREATED_AT_ASC : '+createdAt',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
UPDATED_AT_DESC : '-updatedAt',
};

var VidiunConversionProfileAssetParamsOrderBy = module.exports.VidiunConversionProfileAssetParamsOrderBy = {
};

var VidiunConversionProfileOrderBy = module.exports.VidiunConversionProfileOrderBy = {
CREATED_AT_ASC : '+createdAt',
CREATED_AT_DESC : '-createdAt',
};

var VidiunConversionProfileStatus = module.exports.VidiunConversionProfileStatus = {
DISABLED : '1',
ENABLED : '2',
DELETED : '3',
};

var VidiunConversionProfileType = module.exports.VidiunConversionProfileType = {
MEDIA : '1',
LIVE_STREAM : '2',
};

var VidiunCuePointOrderBy = module.exports.VidiunCuePointOrderBy = {
CREATED_AT_ASC : '+createdAt',
PARTNER_SORT_VALUE_ASC : '+partnerSortValue',
START_TIME_ASC : '+startTime',
TRIGGERED_AT_ASC : '+triggeredAt',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
PARTNER_SORT_VALUE_DESC : '-partnerSortValue',
START_TIME_DESC : '-startTime',
TRIGGERED_AT_DESC : '-triggeredAt',
UPDATED_AT_DESC : '-updatedAt',
};

var VidiunCuePointType = module.exports.VidiunCuePointType = {
AD : 'adCuePoint.Ad',
ANNOTATION : 'annotation.Annotation',
CODE : 'codeCuePoint.Code',
EVENT : 'eventCuePoint.Event',
QUIZ_ANSWER : 'quiz.QUIZ_ANSWER',
QUIZ_QUESTION : 'quiz.QUIZ_QUESTION',
THUMB : 'thumbCuePoint.Thumb',
};

var VidiunDataEntryCompareAttribute = module.exports.VidiunDataEntryCompareAttribute = {
ACCESS_CONTROL_ID : 'accessControlId',
CREATED_AT : 'createdAt',
END_DATE : 'endDate',
MODERATION_COUNT : 'moderationCount',
MODERATION_STATUS : 'moderationStatus',
PARTNER_ID : 'partnerId',
PARTNER_SORT_VALUE : 'partnerSortValue',
RANK : 'rank',
REPLACEMENT_STATUS : 'replacementStatus',
START_DATE : 'startDate',
STATUS : 'status',
TOTAL_RANK : 'totalRank',
TYPE : 'type',
UPDATED_AT : 'updatedAt',
};

var VidiunDataEntryMatchAttribute = module.exports.VidiunDataEntryMatchAttribute = {
ADMIN_TAGS : 'adminTags',
CATEGORIES_IDS : 'categoriesIds',
CREATOR_ID : 'creatorId',
DESCRIPTION : 'description',
GROUP_ID : 'groupId',
ID : 'id',
NAME : 'name',
REFERENCE_ID : 'referenceId',
REPLACED_ENTRY_ID : 'replacedEntryId',
REPLACING_ENTRY_ID : 'replacingEntryId',
SEARCH_TEXT : 'searchText',
TAGS : 'tags',
USER_ID : 'userId',
};

var VidiunDataEntryOrderBy = module.exports.VidiunDataEntryOrderBy = {
CREATED_AT_ASC : '+createdAt',
END_DATE_ASC : '+endDate',
MODERATION_COUNT_ASC : '+moderationCount',
NAME_ASC : '+name',
PARTNER_SORT_VALUE_ASC : '+partnerSortValue',
RANK_ASC : '+rank',
RECENT_ASC : '+recent',
START_DATE_ASC : '+startDate',
TOTAL_RANK_ASC : '+totalRank',
UPDATED_AT_ASC : '+updatedAt',
WEIGHT_ASC : '+weight',
CREATED_AT_DESC : '-createdAt',
END_DATE_DESC : '-endDate',
MODERATION_COUNT_DESC : '-moderationCount',
NAME_DESC : '-name',
PARTNER_SORT_VALUE_DESC : '-partnerSortValue',
RANK_DESC : '-rank',
RECENT_DESC : '-recent',
START_DATE_DESC : '-startDate',
TOTAL_RANK_DESC : '-totalRank',
UPDATED_AT_DESC : '-updatedAt',
WEIGHT_DESC : '-weight',
};

var VidiunDeliveryProfileAkamaiAppleHttpManifestOrderBy = module.exports.VidiunDeliveryProfileAkamaiAppleHttpManifestOrderBy = {
CREATED_AT_ASC : '+createdAt',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
UPDATED_AT_DESC : '-updatedAt',
};

var VidiunDeliveryProfileAkamaiHdsOrderBy = module.exports.VidiunDeliveryProfileAkamaiHdsOrderBy = {
CREATED_AT_ASC : '+createdAt',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
UPDATED_AT_DESC : '-updatedAt',
};

var VidiunDeliveryProfileAkamaiHttpOrderBy = module.exports.VidiunDeliveryProfileAkamaiHttpOrderBy = {
CREATED_AT_ASC : '+createdAt',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
UPDATED_AT_DESC : '-updatedAt',
};

var VidiunDeliveryProfileGenericAppleHttpOrderBy = module.exports.VidiunDeliveryProfileGenericAppleHttpOrderBy = {
CREATED_AT_ASC : '+createdAt',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
UPDATED_AT_DESC : '-updatedAt',
};

var VidiunDeliveryProfileGenericHdsOrderBy = module.exports.VidiunDeliveryProfileGenericHdsOrderBy = {
CREATED_AT_ASC : '+createdAt',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
UPDATED_AT_DESC : '-updatedAt',
};

var VidiunDeliveryProfileGenericHttpOrderBy = module.exports.VidiunDeliveryProfileGenericHttpOrderBy = {
CREATED_AT_ASC : '+createdAt',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
UPDATED_AT_DESC : '-updatedAt',
};

var VidiunDeliveryProfileGenericRtmpOrderBy = module.exports.VidiunDeliveryProfileGenericRtmpOrderBy = {
CREATED_AT_ASC : '+createdAt',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
UPDATED_AT_DESC : '-updatedAt',
};

var VidiunDeliveryProfileGenericSilverLightOrderBy = module.exports.VidiunDeliveryProfileGenericSilverLightOrderBy = {
CREATED_AT_ASC : '+createdAt',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
UPDATED_AT_DESC : '-updatedAt',
};

var VidiunDeliveryProfileLiveAppleHttpOrderBy = module.exports.VidiunDeliveryProfileLiveAppleHttpOrderBy = {
CREATED_AT_ASC : '+createdAt',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
UPDATED_AT_DESC : '-updatedAt',
};

var VidiunDeliveryProfileOrderBy = module.exports.VidiunDeliveryProfileOrderBy = {
CREATED_AT_ASC : '+createdAt',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
UPDATED_AT_DESC : '-updatedAt',
};

var VidiunDeliveryProfileRtmpOrderBy = module.exports.VidiunDeliveryProfileRtmpOrderBy = {
CREATED_AT_ASC : '+createdAt',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
UPDATED_AT_DESC : '-updatedAt',
};

var VidiunDeliveryProfileType = module.exports.VidiunDeliveryProfileType = {
EDGE_CAST_HTTP : 'edgeCast.EDGE_CAST_HTTP',
EDGE_CAST_RTMP : 'edgeCast.EDGE_CAST_RTMP',
KONTIKI_HTTP : 'kontiki.KONTIKI_HTTP',
VELOCIX_HDS : 'velocix.VELOCIX_HDS',
VELOCIX_HLS : 'velocix.VELOCIX_HLS',
APPLE_HTTP : '1',
HDS : '3',
HTTP : '4',
RTMP : '5',
RTSP : '6',
SILVER_LIGHT : '7',
AKAMAI_HLS_DIRECT : '10',
AKAMAI_HLS_MANIFEST : '11',
AKAMAI_HD : '12',
AKAMAI_HDS : '13',
AKAMAI_HTTP : '14',
AKAMAI_RTMP : '15',
AKAMAI_RTSP : '16',
AKAMAI_SS : '17',
GENERIC_HLS : '21',
GENERIC_HDS : '23',
GENERIC_HTTP : '24',
GENERIC_HLS_MANIFEST : '25',
GENERIC_HDS_MANIFEST : '26',
GENERIC_SS : '27',
GENERIC_RTMP : '28',
LEVEL3_HLS : '31',
LEVEL3_HTTP : '34',
LEVEL3_RTMP : '35',
LIMELIGHT_HTTP : '44',
LIMELIGHT_RTMP : '45',
LOCAL_PATH_APPLE_HTTP : '51',
LOCAL_PATH_HDS : '53',
LOCAL_PATH_HTTP : '54',
LOCAL_PATH_RTMP : '55',
VOD_PACKAGER_HLS : '61',
VOD_PACKAGER_HDS : '63',
VOD_PACKAGER_MSS : '67',
VOD_PACKAGER_DASH : '68',
LIVE_HLS : '1001',
LIVE_HDS : '1002',
LIVE_DASH : '1003',
LIVE_RTMP : '1005',
LIVE_HLS_TO_MULTICAST : '1006',
LIVE_AKAMAI_HDS : '1013',
};

var VidiunDeliveryServerNodeOrderBy = module.exports.VidiunDeliveryServerNodeOrderBy = {
CREATED_AT_ASC : '+createdAt',
HEARTBEAT_TIME_ASC : '+heartbeatTime',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
HEARTBEAT_TIME_DESC : '-heartbeatTime',
UPDATED_AT_DESC : '-updatedAt',
};

var VidiunDistributionProfileOrderBy = module.exports.VidiunDistributionProfileOrderBy = {
CREATED_AT_ASC : '+createdAt',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
UPDATED_AT_DESC : '-updatedAt',
};

var VidiunDistributionProviderOrderBy = module.exports.VidiunDistributionProviderOrderBy = {
};

var VidiunDistributionProviderType = module.exports.VidiunDistributionProviderType = {
ATT_UVERSE : 'attUverseDistribution.ATT_UVERSE',
AVN : 'avnDistribution.AVN',
COMCAST_MRSS : 'comcastMrssDistribution.COMCAST_MRSS',
CROSS_VIDIUN : 'crossVidiunDistribution.CROSS_VIDIUN',
DAILYMOTION : 'dailymotionDistribution.DAILYMOTION',
DOUBLECLICK : 'doubleClickDistribution.DOUBLECLICK',
FACEBOOK : 'facebookDistribution.FACEBOOK',
FREEWHEEL : 'freewheelDistribution.FREEWHEEL',
FREEWHEEL_GENERIC : 'freewheelGenericDistribution.FREEWHEEL_GENERIC',
FTP : 'ftpDistribution.FTP',
FTP_SCHEDULED : 'ftpDistribution.FTP_SCHEDULED',
HULU : 'huluDistribution.HULU',
IDETIC : 'ideticDistribution.IDETIC',
METRO_PCS : 'metroPcsDistribution.METRO_PCS',
MSN : 'msnDistribution.MSN',
NDN : 'ndnDistribution.NDN',
PODCAST : 'podcastDistribution.PODCAST',
QUICKPLAY : 'quickPlayDistribution.QUICKPLAY',
SYNACOR_HBO : 'synacorHboDistribution.SYNACOR_HBO',
TIME_WARNER : 'timeWarnerDistribution.TIME_WARNER',
TVCOM : 'tvComDistribution.TVCOM',
TVINCI : 'tvinciDistribution.TVINCI',
UNICORN : 'unicornDistribution.UNICORN',
UVERSE_CLICK_TO_ORDER : 'uverseClickToOrderDistribution.UVERSE_CLICK_TO_ORDER',
UVERSE : 'uverseDistribution.UVERSE',
VERIZON_VCAST : 'verizonVcastDistribution.VERIZON_VCAST',
YAHOO : 'yahooDistribution.YAHOO',
YOUTUBE : 'youTubeDistribution.YOUTUBE',
YOUTUBE_API : 'youtubeApiDistribution.YOUTUBE_API',
GENERIC : '1',
SYNDICATION : '2',
};

var VidiunDocumentEntryCompareAttribute = module.exports.VidiunDocumentEntryCompareAttribute = {
ACCESS_CONTROL_ID : 'accessControlId',
CREATED_AT : 'createdAt',
END_DATE : 'endDate',
MODERATION_COUNT : 'moderationCount',
MODERATION_STATUS : 'moderationStatus',
PARTNER_ID : 'partnerId',
PARTNER_SORT_VALUE : 'partnerSortValue',
RANK : 'rank',
REPLACEMENT_STATUS : 'replacementStatus',
START_DATE : 'startDate',
STATUS : 'status',
TOTAL_RANK : 'totalRank',
TYPE : 'type',
UPDATED_AT : 'updatedAt',
};

var VidiunDocumentEntryMatchAttribute = module.exports.VidiunDocumentEntryMatchAttribute = {
ADMIN_TAGS : 'adminTags',
CATEGORIES_IDS : 'categoriesIds',
CREATOR_ID : 'creatorId',
DESCRIPTION : 'description',
GROUP_ID : 'groupId',
ID : 'id',
NAME : 'name',
REFERENCE_ID : 'referenceId',
REPLACED_ENTRY_ID : 'replacedEntryId',
REPLACING_ENTRY_ID : 'replacingEntryId',
SEARCH_TEXT : 'searchText',
TAGS : 'tags',
USER_ID : 'userId',
};

var VidiunDocumentEntryOrderBy = module.exports.VidiunDocumentEntryOrderBy = {
CREATED_AT_ASC : '+createdAt',
END_DATE_ASC : '+endDate',
MODERATION_COUNT_ASC : '+moderationCount',
NAME_ASC : '+name',
PARTNER_SORT_VALUE_ASC : '+partnerSortValue',
RANK_ASC : '+rank',
RECENT_ASC : '+recent',
START_DATE_ASC : '+startDate',
TOTAL_RANK_ASC : '+totalRank',
UPDATED_AT_ASC : '+updatedAt',
WEIGHT_ASC : '+weight',
CREATED_AT_DESC : '-createdAt',
END_DATE_DESC : '-endDate',
MODERATION_COUNT_DESC : '-moderationCount',
NAME_DESC : '-name',
PARTNER_SORT_VALUE_DESC : '-partnerSortValue',
RANK_DESC : '-rank',
RECENT_DESC : '-recent',
START_DATE_DESC : '-startDate',
TOTAL_RANK_DESC : '-totalRank',
UPDATED_AT_DESC : '-updatedAt',
WEIGHT_DESC : '-weight',
};

var VidiunDocumentFlavorParamsOrderBy = module.exports.VidiunDocumentFlavorParamsOrderBy = {
};

var VidiunDocumentFlavorParamsOutputOrderBy = module.exports.VidiunDocumentFlavorParamsOutputOrderBy = {
};

var VidiunDrmDeviceOrderBy = module.exports.VidiunDrmDeviceOrderBy = {
CREATED_AT_ASC : '+createdAt',
CREATED_AT_DESC : '-createdAt',
};

var VidiunDrmLicenseScenario = module.exports.VidiunDrmLicenseScenario = {
PROTECTION : 'playReady.PROTECTION',
PURCHASE : 'playReady.PURCHASE',
RENTAL : 'playReady.RENTAL',
SUBSCRIPTION : 'playReady.SUBSCRIPTION',
};

var VidiunDrmLicenseType = module.exports.VidiunDrmLicenseType = {
NON_PERSISTENT : 'playReady.NON_PERSISTENT',
PERSISTENT : 'playReady.PERSISTENT',
};

var VidiunDrmPolicyOrderBy = module.exports.VidiunDrmPolicyOrderBy = {
};

var VidiunDrmProfileOrderBy = module.exports.VidiunDrmProfileOrderBy = {
ID_ASC : '+id',
NAME_ASC : '+name',
ID_DESC : '-id',
NAME_DESC : '-name',
};

var VidiunDrmProviderType = module.exports.VidiunDrmProviderType = {
FAIRPLAY : 'fairplay.FAIRPLAY',
PLAY_READY : 'playReady.PLAY_READY',
WIDEVINE : 'widevine.WIDEVINE',
CENC : '1',
};

var VidiunDropFolderErrorCode = module.exports.VidiunDropFolderErrorCode = {
ERROR_CONNECT : '1',
ERROR_AUTENTICATE : '2',
ERROR_GET_PHISICAL_FILE_LIST : '3',
ERROR_GET_DB_FILE_LIST : '4',
DROP_FOLDER_APP_ERROR : '5',
CONTENT_MATCH_POLICY_UNDEFINED : '6',
};

var VidiunDropFolderFileErrorCode = module.exports.VidiunDropFolderFileErrorCode = {
ERROR_ADDING_BULK_UPLOAD : 'dropFolderXmlBulkUpload.ERROR_ADDING_BULK_UPLOAD',
ERROR_ADD_CONTENT_RESOURCE : 'dropFolderXmlBulkUpload.ERROR_ADD_CONTENT_RESOURCE',
ERROR_IN_BULK_UPLOAD : 'dropFolderXmlBulkUpload.ERROR_IN_BULK_UPLOAD',
ERROR_WRITING_TEMP_FILE : 'dropFolderXmlBulkUpload.ERROR_WRITING_TEMP_FILE',
LOCAL_FILE_WRONG_CHECKSUM : 'dropFolderXmlBulkUpload.LOCAL_FILE_WRONG_CHECKSUM',
LOCAL_FILE_WRONG_SIZE : 'dropFolderXmlBulkUpload.LOCAL_FILE_WRONG_SIZE',
MALFORMED_XML_FILE : 'dropFolderXmlBulkUpload.MALFORMED_XML_FILE',
XML_FILE_SIZE_EXCEED_LIMIT : 'dropFolderXmlBulkUpload.XML_FILE_SIZE_EXCEED_LIMIT',
ERROR_UPDATE_ENTRY : '1',
ERROR_ADD_ENTRY : '2',
FLAVOR_NOT_FOUND : '3',
FLAVOR_MISSING_IN_FILE_NAME : '4',
SLUG_REGEX_NO_MATCH : '5',
ERROR_READING_FILE : '6',
ERROR_DOWNLOADING_FILE : '7',
ERROR_UPDATE_FILE : '8',
ERROR_ADDING_CONTENT_PROCESSOR : '10',
ERROR_IN_CONTENT_PROCESSOR : '11',
ERROR_DELETING_FILE : '12',
FILE_NO_MATCH : '13',
};

var VidiunDropFolderFileHandlerType = module.exports.VidiunDropFolderFileHandlerType = {
XML : 'dropFolderXmlBulkUpload.XML',
ICAL : 'scheduleDropFolder.ICAL',
CONTENT : '1',
};

var VidiunDropFolderFileOrderBy = module.exports.VidiunDropFolderFileOrderBy = {
CREATED_AT_ASC : '+createdAt',
FILE_NAME_ASC : '+fileName',
FILE_SIZE_ASC : '+fileSize',
FILE_SIZE_LAST_SET_AT_ASC : '+fileSizeLastSetAt',
ID_ASC : '+id',
PARSED_FLAVOR_ASC : '+parsedFlavor',
PARSED_SLUG_ASC : '+parsedSlug',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
FILE_NAME_DESC : '-fileName',
FILE_SIZE_DESC : '-fileSize',
FILE_SIZE_LAST_SET_AT_DESC : '-fileSizeLastSetAt',
ID_DESC : '-id',
PARSED_FLAVOR_DESC : '-parsedFlavor',
PARSED_SLUG_DESC : '-parsedSlug',
UPDATED_AT_DESC : '-updatedAt',
};

var VidiunDropFolderOrderBy = module.exports.VidiunDropFolderOrderBy = {
CREATED_AT_ASC : '+createdAt',
ID_ASC : '+id',
NAME_ASC : '+name',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
ID_DESC : '-id',
NAME_DESC : '-name',
UPDATED_AT_DESC : '-updatedAt',
};

var VidiunDropFolderType = module.exports.VidiunDropFolderType = {
FEED : 'FeedDropFolder.FEED',
WEBEX : 'WebexDropFolder.WEBEX',
LOCAL : '1',
FTP : '2',
SCP : '3',
SFTP : '4',
S3 : '6',
};

var VidiunDurationType = module.exports.VidiunDurationType = {
LONG : 'long',
MEDIUM : 'medium',
NOT_AVAILABLE : 'notavailable',
SHORT : 'short',
};

var VidiunDynamicEnum = module.exports.VidiunDynamicEnum = {
};

var VidiunEdgeServerNodeOrderBy = module.exports.VidiunEdgeServerNodeOrderBy = {
CREATED_AT_ASC : '+createdAt',
HEARTBEAT_TIME_ASC : '+heartbeatTime',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
HEARTBEAT_TIME_DESC : '-heartbeatTime',
UPDATED_AT_DESC : '-updatedAt',
};

var VidiunEmailNotificationFormat = module.exports.VidiunEmailNotificationFormat = {
HTML : '1',
TEXT : '2',
};

var VidiunEmailNotificationRecipientProviderType = module.exports.VidiunEmailNotificationRecipientProviderType = {
STATIC_LIST : '1',
CATEGORY : '2',
USER : '3',
};

var VidiunEmailNotificationTemplateOrderBy = module.exports.VidiunEmailNotificationTemplateOrderBy = {
CREATED_AT_ASC : '+createdAt',
ID_ASC : '+id',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
ID_DESC : '-id',
UPDATED_AT_DESC : '-updatedAt',
};

var VidiunEntryDistributionOrderBy = module.exports.VidiunEntryDistributionOrderBy = {
CREATED_AT_ASC : '+createdAt',
SUBMITTED_AT_ASC : '+submittedAt',
SUNRISE_ASC : '+sunrise',
SUNSET_ASC : '+sunset',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
SUBMITTED_AT_DESC : '-submittedAt',
SUNRISE_DESC : '-sunrise',
SUNSET_DESC : '-sunset',
UPDATED_AT_DESC : '-updatedAt',
};

var VidiunEntryIdentifierField = module.exports.VidiunEntryIdentifierField = {
ID : 'id',
REFERENCE_ID : 'referenceId',
};

var VidiunEntryReplacementStatus = module.exports.VidiunEntryReplacementStatus = {
NONE : '0',
APPROVED_BUT_NOT_READY : '1',
READY_BUT_NOT_APPROVED : '2',
NOT_READY_AND_NOT_APPROVED : '3',
FAILED : '4',
};

var VidiunEntryScheduleEventOrderBy = module.exports.VidiunEntryScheduleEventOrderBy = {
CREATED_AT_ASC : '+createdAt',
END_DATE_ASC : '+endDate',
PRIORITY_ASC : '+priority',
START_DATE_ASC : '+startDate',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
END_DATE_DESC : '-endDate',
PRIORITY_DESC : '-priority',
START_DATE_DESC : '-startDate',
UPDATED_AT_DESC : '-updatedAt',
};

var VidiunEntryServerNodeOrderBy = module.exports.VidiunEntryServerNodeOrderBy = {
CREATED_AT_ASC : '+createdAt',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
UPDATED_AT_DESC : '-updatedAt',
};

var VidiunEntryServerNodeType = module.exports.VidiunEntryServerNodeType = {
LIVE_PRIMARY : '0',
LIVE_BACKUP : '1',
LIVE_CLIPPING_TASK : '2',
};

var VidiunEntryStatus = module.exports.VidiunEntryStatus = {
ERROR_IMPORTING : '-2',
ERROR_CONVERTING : '-1',
SCAN_FAILURE : 'virusScan.ScanFailure',
IMPORT : '0',
INFECTED : 'virusScan.Infected',
PRECONVERT : '1',
READY : '2',
DELETED : '3',
PENDING : '4',
MODERATE : '5',
BLOCKED : '6',
NO_CONTENT : '7',
};

var VidiunEntryType = module.exports.VidiunEntryType = {
AUTOMATIC : '-1',
EXTERNAL_MEDIA : 'externalMedia.externalMedia',
MEDIA_CLIP : '1',
MIX : '2',
PLAYLIST : '5',
DATA : '6',
LIVE_STREAM : '7',
LIVE_CHANNEL : '8',
DOCUMENT : '10',
};

var VidiunEventCuePointOrderBy = module.exports.VidiunEventCuePointOrderBy = {
CREATED_AT_ASC : '+createdAt',
PARTNER_SORT_VALUE_ASC : '+partnerSortValue',
START_TIME_ASC : '+startTime',
TRIGGERED_AT_ASC : '+triggeredAt',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
PARTNER_SORT_VALUE_DESC : '-partnerSortValue',
START_TIME_DESC : '-startTime',
TRIGGERED_AT_DESC : '-triggeredAt',
UPDATED_AT_DESC : '-updatedAt',
};

var VidiunEventNotificationEventObjectType = module.exports.VidiunEventNotificationEventObjectType = {
AD_CUE_POINT : 'adCuePointEventNotifications.AdCuePoint',
ANNOTATION : 'annotationEventNotifications.Annotation',
ATTACHMENT_ASSET : 'attachmentAssetEventNotifications.AttachmentAsset',
CAPTION_ASSET : 'captionAssetEventNotifications.CaptionAsset',
CODE_CUE_POINT : 'codeCuePointEventNotifications.CodeCuePoint',
DISTRIBUTION_PROFILE : 'contentDistributionEventNotifications.DistributionProfile',
ENTRY_DISTRIBUTION : 'contentDistributionEventNotifications.EntryDistribution',
CUE_POINT : 'cuePointEventNotifications.CuePoint',
DROP_FOLDER : 'dropFolderEventNotifications.DropFolder',
DROP_FOLDER_FILE : 'dropFolderEventNotifications.DropFolderFile',
METADATA : 'metadataEventNotifications.Metadata',
TRANSCRIPT_ASSET : 'transcriptAssetEventNotifications.TranscriptAsset',
ENTRY : '1',
CATEGORY : '2',
ASSET : '3',
FLAVORASSET : '4',
THUMBASSET : '5',
VUSER : '8',
ACCESSCONTROL : '9',
BATCHJOB : '10',
BULKUPLOADRESULT : '11',
CATEGORYVUSER : '12',
CONVERSIONPROFILE2 : '14',
FLAVORPARAMS : '15',
FLAVORPARAMSCONVERSIONPROFILE : '16',
FLAVORPARAMSOUTPUT : '17',
GENERICSYNDICATIONFEED : '18',
VUSERTOUSERROLE : '19',
PARTNER : '20',
PERMISSION : '21',
PERMISSIONITEM : '22',
PERMISSIONTOPERMISSIONITEM : '23',
SCHEDULER : '24',
SCHEDULERCONFIG : '25',
SCHEDULERSTATUS : '26',
SCHEDULERWORKER : '27',
STORAGEPROFILE : '28',
SYNDICATIONFEED : '29',
THUMBPARAMS : '31',
THUMBPARAMSOUTPUT : '32',
UPLOADTOKEN : '33',
USERLOGINDATA : '34',
USERROLE : '35',
WIDGET : '36',
CATEGORYENTRY : '37',
};

var VidiunEventNotificationEventType = module.exports.VidiunEventNotificationEventType = {
INTEGRATION_JOB_CLOSED : 'integrationEventNotifications.INTEGRATION_JOB_CLOSED',
BATCH_JOB_STATUS : '1',
OBJECT_ADDED : '2',
OBJECT_CHANGED : '3',
OBJECT_COPIED : '4',
OBJECT_CREATED : '5',
OBJECT_DATA_CHANGED : '6',
OBJECT_DELETED : '7',
OBJECT_ERASED : '8',
OBJECT_READY_FOR_REPLACMENT : '9',
OBJECT_SAVED : '10',
OBJECT_UPDATED : '11',
OBJECT_REPLACED : '12',
OBJECT_READY_FOR_INDEX : '13',
};

var VidiunEventNotificationTemplateOrderBy = module.exports.VidiunEventNotificationTemplateOrderBy = {
CREATED_AT_ASC : '+createdAt',
ID_ASC : '+id',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
ID_DESC : '-id',
UPDATED_AT_DESC : '-updatedAt',
};

var VidiunEventNotificationTemplateType = module.exports.VidiunEventNotificationTemplateType = {
BPM_ABORT : 'businessProcessNotification.BusinessProcessAbort',
BPM_SIGNAL : 'businessProcessNotification.BusinessProcessSignal',
BPM_START : 'businessProcessNotification.BusinessProcessStart',
EMAIL : 'emailNotification.Email',
HTTP : 'httpNotification.Http',
PUSH : 'pushNotification.Push',
};

var VidiunEventType = module.exports.VidiunEventType = {
BROADCAST_START : '1',
BROADCAST_END : '2',
};

var VidiunExternalMediaEntryCompareAttribute = module.exports.VidiunExternalMediaEntryCompareAttribute = {
ACCESS_CONTROL_ID : 'accessControlId',
CREATED_AT : 'createdAt',
END_DATE : 'endDate',
LAST_PLAYED_AT : 'lastPlayedAt',
MEDIA_DATE : 'mediaDate',
MEDIA_TYPE : 'mediaType',
MODERATION_COUNT : 'moderationCount',
MODERATION_STATUS : 'moderationStatus',
MS_DURATION : 'msDuration',
PARTNER_ID : 'partnerId',
PARTNER_SORT_VALUE : 'partnerSortValue',
PLAYS : 'plays',
RANK : 'rank',
REPLACEMENT_STATUS : 'replacementStatus',
START_DATE : 'startDate',
STATUS : 'status',
TOTAL_RANK : 'totalRank',
TYPE : 'type',
UPDATED_AT : 'updatedAt',
VIEWS : 'views',
};

var VidiunExternalMediaEntryMatchAttribute = module.exports.VidiunExternalMediaEntryMatchAttribute = {
ADMIN_TAGS : 'adminTags',
CATEGORIES_IDS : 'categoriesIds',
CREATOR_ID : 'creatorId',
DESCRIPTION : 'description',
DURATION_TYPE : 'durationType',
FLAVOR_PARAMS_IDS : 'flavorParamsIds',
GROUP_ID : 'groupId',
ID : 'id',
NAME : 'name',
REFERENCE_ID : 'referenceId',
REPLACED_ENTRY_ID : 'replacedEntryId',
REPLACING_ENTRY_ID : 'replacingEntryId',
SEARCH_TEXT : 'searchText',
TAGS : 'tags',
USER_ID : 'userId',
};

var VidiunExternalMediaEntryOrderBy = module.exports.VidiunExternalMediaEntryOrderBy = {
CREATED_AT_ASC : '+createdAt',
DURATION_ASC : '+duration',
END_DATE_ASC : '+endDate',
LAST_PLAYED_AT_ASC : '+lastPlayedAt',
MEDIA_TYPE_ASC : '+mediaType',
MODERATION_COUNT_ASC : '+moderationCount',
NAME_ASC : '+name',
PARTNER_SORT_VALUE_ASC : '+partnerSortValue',
PLAYS_ASC : '+plays',
RANK_ASC : '+rank',
RECENT_ASC : '+recent',
START_DATE_ASC : '+startDate',
TOTAL_RANK_ASC : '+totalRank',
UPDATED_AT_ASC : '+updatedAt',
VIEWS_ASC : '+views',
WEIGHT_ASC : '+weight',
CREATED_AT_DESC : '-createdAt',
DURATION_DESC : '-duration',
END_DATE_DESC : '-endDate',
LAST_PLAYED_AT_DESC : '-lastPlayedAt',
MEDIA_TYPE_DESC : '-mediaType',
MODERATION_COUNT_DESC : '-moderationCount',
NAME_DESC : '-name',
PARTNER_SORT_VALUE_DESC : '-partnerSortValue',
PLAYS_DESC : '-plays',
RANK_DESC : '-rank',
RECENT_DESC : '-recent',
START_DATE_DESC : '-startDate',
TOTAL_RANK_DESC : '-totalRank',
UPDATED_AT_DESC : '-updatedAt',
VIEWS_DESC : '-views',
WEIGHT_DESC : '-weight',
};

var VidiunExternalMediaSourceType = module.exports.VidiunExternalMediaSourceType = {
INTERCALL : 'InterCall',
YOUTUBE : 'YouTube',
};

var VidiunFileAssetObjectType = module.exports.VidiunFileAssetObjectType = {
UI_CONF : '2',
};

var VidiunFileAssetOrderBy = module.exports.VidiunFileAssetOrderBy = {
CREATED_AT_ASC : '+createdAt',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
UPDATED_AT_DESC : '-updatedAt',
};

var VidiunFileAssetStatus = module.exports.VidiunFileAssetStatus = {
PENDING : '0',
UPLOADING : '1',
READY : '2',
DELETED : '3',
ERROR : '4',
};

var VidiunFileSyncObjectType = module.exports.VidiunFileSyncObjectType = {
DISTRIBUTION_PROFILE : 'contentDistribution.DistributionProfile',
ENTRY_DISTRIBUTION : 'contentDistribution.EntryDistribution',
GENERIC_DISTRIBUTION_ACTION : 'contentDistribution.GenericDistributionAction',
EMAIL_NOTIFICATION_TEMPLATE : 'emailNotification.EmailNotificationTemplate',
HTTP_NOTIFICATION_TEMPLATE : 'httpNotification.HttpNotificationTemplate',
ENTRY : '1',
UICONF : '2',
BATCHJOB : '3',
ASSET : '4',
FLAVOR_ASSET : '4',
METADATA : '5',
METADATA_PROFILE : '6',
SYNDICATION_FEED : '7',
CONVERSION_PROFILE : '8',
FILE_ASSET : '9',
};

var VidiunFileSyncOrderBy = module.exports.VidiunFileSyncOrderBy = {
CREATED_AT_ASC : '+createdAt',
FILE_SIZE_ASC : '+fileSize',
READY_AT_ASC : '+readyAt',
SYNC_TIME_ASC : '+syncTime',
UPDATED_AT_ASC : '+updatedAt',
VERSION_ASC : '+version',
CREATED_AT_DESC : '-createdAt',
FILE_SIZE_DESC : '-fileSize',
READY_AT_DESC : '-readyAt',
SYNC_TIME_DESC : '-syncTime',
UPDATED_AT_DESC : '-updatedAt',
VERSION_DESC : '-version',
};

var VidiunFlavorAssetOrderBy = module.exports.VidiunFlavorAssetOrderBy = {
CREATED_AT_ASC : '+createdAt',
DELETED_AT_ASC : '+deletedAt',
SIZE_ASC : '+size',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
DELETED_AT_DESC : '-deletedAt',
SIZE_DESC : '-size',
UPDATED_AT_DESC : '-updatedAt',
};

var VidiunFlavorParamsOrderBy = module.exports.VidiunFlavorParamsOrderBy = {
};

var VidiunFlavorParamsOutputOrderBy = module.exports.VidiunFlavorParamsOutputOrderBy = {
};

var VidiunFtpDropFolderOrderBy = module.exports.VidiunFtpDropFolderOrderBy = {
CREATED_AT_ASC : '+createdAt',
ID_ASC : '+id',
NAME_ASC : '+name',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
ID_DESC : '-id',
NAME_DESC : '-name',
UPDATED_AT_DESC : '-updatedAt',
};

var VidiunGenericDistributionProfileOrderBy = module.exports.VidiunGenericDistributionProfileOrderBy = {
CREATED_AT_ASC : '+createdAt',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
UPDATED_AT_DESC : '-updatedAt',
};

var VidiunGenericDistributionProviderActionOrderBy = module.exports.VidiunGenericDistributionProviderActionOrderBy = {
CREATED_AT_ASC : '+createdAt',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
UPDATED_AT_DESC : '-updatedAt',
};

var VidiunGenericDistributionProviderOrderBy = module.exports.VidiunGenericDistributionProviderOrderBy = {
CREATED_AT_ASC : '+createdAt',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
UPDATED_AT_DESC : '-updatedAt',
};

var VidiunGenericSyndicationFeedOrderBy = module.exports.VidiunGenericSyndicationFeedOrderBy = {
CREATED_AT_ASC : '+createdAt',
NAME_ASC : '+name',
PLAYLIST_ID_ASC : '+playlistId',
TYPE_ASC : '+type',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
NAME_DESC : '-name',
PLAYLIST_ID_DESC : '-playlistId',
TYPE_DESC : '-type',
UPDATED_AT_DESC : '-updatedAt',
};

var VidiunGenericXsltSyndicationFeedOrderBy = module.exports.VidiunGenericXsltSyndicationFeedOrderBy = {
CREATED_AT_ASC : '+createdAt',
NAME_ASC : '+name',
PLAYLIST_ID_ASC : '+playlistId',
TYPE_ASC : '+type',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
NAME_DESC : '-name',
PLAYLIST_ID_DESC : '-playlistId',
TYPE_DESC : '-type',
UPDATED_AT_DESC : '-updatedAt',
};

var VidiunGeoCoderType = module.exports.VidiunGeoCoderType = {
VIDIUN : '1',
};

var VidiunGoogleSyndicationFeedAdultValues = module.exports.VidiunGoogleSyndicationFeedAdultValues = {
NO : 'No',
YES : 'Yes',
};

var VidiunGoogleVideoSyndicationFeedOrderBy = module.exports.VidiunGoogleVideoSyndicationFeedOrderBy = {
CREATED_AT_ASC : '+createdAt',
NAME_ASC : '+name',
PLAYLIST_ID_ASC : '+playlistId',
TYPE_ASC : '+type',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
NAME_DESC : '-name',
PLAYLIST_ID_DESC : '-playlistId',
TYPE_DESC : '-type',
UPDATED_AT_DESC : '-updatedAt',
};

var VidiunGroupUserOrderBy = module.exports.VidiunGroupUserOrderBy = {
CREATED_AT_ASC : '+createdAt',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
UPDATED_AT_DESC : '-updatedAt',
};

var VidiunHttpNotificationCertificateType = module.exports.VidiunHttpNotificationCertificateType = {
DER : 'DER',
ENG : 'ENG',
PEM : 'PEM',
};

var VidiunHttpNotificationSslKeyType = module.exports.VidiunHttpNotificationSslKeyType = {
DER : 'DER',
ENG : 'ENG',
PEM : 'PEM',
};

var VidiunHttpNotificationTemplateOrderBy = module.exports.VidiunHttpNotificationTemplateOrderBy = {
CREATED_AT_ASC : '+createdAt',
ID_ASC : '+id',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
ID_DESC : '-id',
UPDATED_AT_DESC : '-updatedAt',
};

var VidiunITunesSyndicationFeedAdultValues = module.exports.VidiunITunesSyndicationFeedAdultValues = {
CLEAN : 'clean',
NO : 'no',
YES : 'yes',
};

var VidiunITunesSyndicationFeedCategories = module.exports.VidiunITunesSyndicationFeedCategories = {
ARTS : 'Arts',
ARTS_DESIGN : 'Arts/Design',
ARTS_FASHION_BEAUTY : 'Arts/Fashion &amp; Beauty',
ARTS_FOOD : 'Arts/Food',
ARTS_LITERATURE : 'Arts/Literature',
ARTS_PERFORMING_ARTS : 'Arts/Performing Arts',
ARTS_VISUAL_ARTS : 'Arts/Visual Arts',
BUSINESS : 'Business',
BUSINESS_BUSINESS_NEWS : 'Business/Business News',
BUSINESS_CAREERS : 'Business/Careers',
BUSINESS_INVESTING : 'Business/Investing',
BUSINESS_MANAGEMENT_MARKETING : 'Business/Management &amp; Marketing',
BUSINESS_SHOPPING : 'Business/Shopping',
COMEDY : 'Comedy',
EDUCATION : 'Education',
EDUCATION_TECHNOLOGY : 'Education/Education Technology',
EDUCATION_HIGHER_EDUCATION : 'Education/Higher Education',
EDUCATION_K_12 : 'Education/K-12',
EDUCATION_LANGUAGE_COURSES : 'Education/Language Courses',
EDUCATION_TRAINING : 'Education/Training',
GAMES_HOBBIES : 'Games &amp; Hobbies',
GAMES_HOBBIES_AUTOMOTIVE : 'Games &amp; Hobbies/Automotive',
GAMES_HOBBIES_AVIATION : 'Games &amp; Hobbies/Aviation',
GAMES_HOBBIES_HOBBIES : 'Games &amp; Hobbies/Hobbies',
GAMES_HOBBIES_OTHER_GAMES : 'Games &amp; Hobbies/Other Games',
GAMES_HOBBIES_VIDEO_GAMES : 'Games &amp; Hobbies/Video Games',
GOVERNMENT_ORGANIZATIONS : 'Government &amp; Organizations',
GOVERNMENT_ORGANIZATIONS_LOCAL : 'Government &amp; Organizations/Local',
GOVERNMENT_ORGANIZATIONS_NATIONAL : 'Government &amp; Organizations/National',
GOVERNMENT_ORGANIZATIONS_NON_PROFIT : 'Government &amp; Organizations/Non-Profit',
GOVERNMENT_ORGANIZATIONS_REGIONAL : 'Government &amp; Organizations/Regional',
HEALTH : 'Health',
HEALTH_ALTERNATIVE_HEALTH : 'Health/Alternative Health',
HEALTH_FITNESS_NUTRITION : 'Health/Fitness &amp; Nutrition',
HEALTH_SELF_HELP : 'Health/Self-Help',
HEALTH_SEXUALITY : 'Health/Sexuality',
KIDS_FAMILY : 'Kids &amp; Family',
MUSIC : 'Music',
NEWS_POLITICS : 'News &amp; Politics',
RELIGION_SPIRITUALITY : 'Religion &amp; Spirituality',
RELIGION_SPIRITUALITY_BUDDHISM : 'Religion &amp; Spirituality/Buddhism',
RELIGION_SPIRITUALITY_CHRISTIANITY : 'Religion &amp; Spirituality/Christianity',
RELIGION_SPIRITUALITY_HINDUISM : 'Religion &amp; Spirituality/Hinduism',
RELIGION_SPIRITUALITY_ISLAM : 'Religion &amp; Spirituality/Islam',
RELIGION_SPIRITUALITY_JUDAISM : 'Religion &amp; Spirituality/Judaism',
RELIGION_SPIRITUALITY_OTHER : 'Religion &amp; Spirituality/Other',
RELIGION_SPIRITUALITY_SPIRITUALITY : 'Religion &amp; Spirituality/Spirituality',
SCIENCE_MEDICINE : 'Science &amp; Medicine',
SCIENCE_MEDICINE_MEDICINE : 'Science &amp; Medicine/Medicine',
SCIENCE_MEDICINE_NATURAL_SCIENCES : 'Science &amp; Medicine/Natural Sciences',
SCIENCE_MEDICINE_SOCIAL_SCIENCES : 'Science &amp; Medicine/Social Sciences',
SOCIETY_CULTURE : 'Society &amp; Culture',
SOCIETY_CULTURE_HISTORY : 'Society &amp; Culture/History',
SOCIETY_CULTURE_PERSONAL_JOURNALS : 'Society &amp; Culture/Personal Journals',
SOCIETY_CULTURE_PHILOSOPHY : 'Society &amp; Culture/Philosophy',
SOCIETY_CULTURE_PLACES_TRAVEL : 'Society &amp; Culture/Places &amp; Travel',
SPORTS_RECREATION : 'Sports &amp; Recreation',
SPORTS_RECREATION_AMATEUR : 'Sports &amp; Recreation/Amateur',
SPORTS_RECREATION_COLLEGE_HIGH_SCHOOL : 'Sports &amp; Recreation/College &amp; High School',
SPORTS_RECREATION_OUTDOOR : 'Sports &amp; Recreation/Outdoor',
SPORTS_RECREATION_PROFESSIONAL : 'Sports &amp; Recreation/Professional',
TV_FILM : 'TV &amp; Film',
TECHNOLOGY : 'Technology',
TECHNOLOGY_GADGETS : 'Technology/Gadgets',
TECHNOLOGY_PODCASTING : 'Technology/Podcasting',
TECHNOLOGY_SOFTWARE_HOW_TO : 'Technology/Software How-To',
TECHNOLOGY_TECH_NEWS : 'Technology/Tech News',
};

var VidiunITunesSyndicationFeedOrderBy = module.exports.VidiunITunesSyndicationFeedOrderBy = {
CREATED_AT_ASC : '+createdAt',
NAME_ASC : '+name',
PLAYLIST_ID_ASC : '+playlistId',
TYPE_ASC : '+type',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
NAME_DESC : '-name',
PLAYLIST_ID_DESC : '-playlistId',
TYPE_DESC : '-type',
UPDATED_AT_DESC : '-updatedAt',
};

var VidiunImageFlavorParamsOrderBy = module.exports.VidiunImageFlavorParamsOrderBy = {
};

var VidiunImageFlavorParamsOutputOrderBy = module.exports.VidiunImageFlavorParamsOutputOrderBy = {
};

var VidiunIntegrationProviderType = module.exports.VidiunIntegrationProviderType = {
CIELO24 : 'cielo24.Cielo24',
EXAMPLE : 'exampleIntegration.Example',
VOICEBASE : 'voicebase.Voicebase',
};

var VidiunIntegrationTriggerType = module.exports.VidiunIntegrationTriggerType = {
BPM_EVENT_NOTIFICATION : 'bpmEventNotificationIntegration.BpmEventNotification',
MANUAL : '1',
};

var VidiunKontikiStorageProfileOrderBy = module.exports.VidiunKontikiStorageProfileOrderBy = {
CREATED_AT_ASC : '+createdAt',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
UPDATED_AT_DESC : '-updatedAt',
};

var VidiunLanguage = module.exports.VidiunLanguage = {
AB : 'Abkhazian',
AA : 'Afar',
AF : 'Afrikaans',
SQ : 'Albanian',
AM : 'Amharic',
AR : 'Arabic',
HY : 'Armenian',
AS_ : 'Assamese',
AY : 'Aymara',
AZ : 'Azerbaijani',
BA : 'Bashkir',
EU : 'Basque',
BN : 'Bengali (Bangla)',
DZ : 'Bhutani',
BH : 'Bihari',
BI : 'Bislama',
BR : 'Breton',
BG : 'Bulgarian',
MY : 'Burmese',
BE : 'Byelorussian (Belarusian)',
KM : 'Cambodian',
CA : 'Catalan',
ZH : 'Chinese',
CO : 'Corsican',
HR : 'Croatian',
CS : 'Czech',
DA : 'Danish',
NL : 'Dutch',
EN : 'English',
EN_US : 'English (American)',
EN_GB : 'English (British)',
EO : 'Esperanto',
ET : 'Estonian',
FO : 'Faeroese',
FA : 'Farsi',
FJ : 'Fiji',
FI : 'Finnish',
FR : 'French',
FY : 'Frisian',
GV : 'Gaelic (Manx)',
GD : 'Gaelic (Scottish)',
GL : 'Galician',
KA : 'Georgian',
DE : 'German',
EL : 'Greek',
KL : 'Greenlandic',
GN : 'Guarani',
GU : 'Gujarati',
HA : 'Hausa',
HE : 'Hebrew',
IW : 'Hebrew',
HI : 'Hindi',
HU : 'Hungarian',
IS : 'Icelandic',
ID : 'Indonesian',
IN : 'Indonesian',
IA : 'Interlingua',
IE : 'Interlingue',
IU : 'Inuktitut',
IK : 'Inupiak',
GA : 'Irish',
IT : 'Italian',
JA : 'Japanese',
JV : 'Javanese',
KN : 'Kannada',
VS : 'Kashmiri',
KK : 'Kazakh',
RW : 'Kinyarwanda (Ruanda)',
KY : 'Kirghiz',
RN : 'Kirundi (Rundi)',
KO : 'Korean',
KU : 'Kurdish',
LO : 'Laothian',
LA : 'Latin',
LV : 'Latvian (Lettish)',
LI : 'Limburgish ( Limburger)',
LN : 'Lingala',
LT : 'Lithuanian',
MK : 'Macedonian',
MG : 'Malagasy',
MS : 'Malay',
ML : 'Malayalam',
MT : 'Maltese',
MI : 'Maori',
MR : 'Marathi',
MO : 'Moldavian',
MN : 'Mongolian',
MU : 'Multilingual',
NA : 'Nauru',
NE : 'Nepali',
NO : 'Norwegian',
OC : 'Occitan',
OR_ : 'Oriya',
OM : 'Oromo (Afan, Galla)',
PS : 'Pashto (Pushto)',
PL : 'Polish',
PT : 'Portuguese',
PA : 'Punjabi',
QU : 'Quechua',
RM : 'Rhaeto-Romance',
RO : 'Romanian',
RU : 'Russian',
SM : 'Samoan',
SG : 'Sangro',
SA : 'Sanskrit',
SR : 'Serbian',
SH : 'Serbo-Croatian',
ST : 'Sesotho',
TN : 'Setswana',
SN : 'Shona',
SD : 'Sindhi',
SI : 'Sinhalese',
SS : 'Siswati',
SK : 'Slovak',
SL : 'Slovenian',
SO : 'Somali',
ES : 'Spanish',
SU : 'Sundanese',
SW : 'Swahili (Kiswahili)',
SV : 'Swedish',
TL : 'Tagalog',
TG : 'Tajik',
TA : 'Tamil',
TT : 'Tatar',
TE : 'Telugu',
TH : 'Thai',
BO : 'Tibetan',
TI : 'Tigrinya',
TO : 'Tonga',
TS : 'Tsonga',
TR : 'Turkish',
TK : 'Turkmen',
TW : 'Twi',
UG : 'Uighur',
UK : 'Ukrainian',
UR : 'Urdu',
UZ : 'Uzbek',
VI : 'Vietnamese',
VO : 'Volapuk',
CY : 'Welsh',
WO : 'Wolof',
XH : 'Xhosa',
JI : 'Yiddish',
YI : 'Yiddish',
YO : 'Yoruba',
ZU : 'Zulu',
};

var VidiunLanguageCode = module.exports.VidiunLanguageCode = {
AA : 'aa',
AB : 'ab',
AF : 'af',
AM : 'am',
AR : 'ar',
AS_ : 'as',
AY : 'ay',
AZ : 'az',
BA : 'ba',
BE : 'be',
BG : 'bg',
BH : 'bh',
BI : 'bi',
BN : 'bn',
BO : 'bo',
BR : 'br',
CA : 'ca',
CO : 'co',
CS : 'cs',
CY : 'cy',
DA : 'da',
DE : 'de',
DZ : 'dz',
EL : 'el',
EN : 'en',
EN_GB : 'en_gb',
EN_US : 'en_us',
EO : 'eo',
ES : 'es',
ET : 'et',
EU : 'eu',
FA : 'fa',
FI : 'fi',
FJ : 'fj',
FO : 'fo',
FR : 'fr',
FY : 'fy',
GA : 'ga',
GD : 'gd',
GL : 'gl',
GN : 'gn',
GU : 'gu',
GV : 'gv',
HA : 'ha',
HE : 'he',
HI : 'hi',
HR : 'hr',
HU : 'hu',
HY : 'hy',
IA : 'ia',
ID : 'id',
IE : 'ie',
IK : 'ik',
IN : 'in',
IS : 'is',
IT : 'it',
IU : 'iu',
IW : 'iw',
JA : 'ja',
JI : 'ji',
JV : 'jv',
KA : 'ka',
KK : 'kk',
KL : 'kl',
KM : 'km',
KN : 'kn',
KO : 'ko',
VS : 'ks',
KU : 'ku',
KY : 'ky',
LA : 'la',
LI : 'li',
LN : 'ln',
LO : 'lo',
LT : 'lt',
LV : 'lv',
MG : 'mg',
MI : 'mi',
MK : 'mk',
ML : 'ml',
MN : 'mn',
MO : 'mo',
MR : 'mr',
MS : 'ms',
MT : 'mt',
MU : 'multilingual',
MY : 'my',
NA : 'na',
NE : 'ne',
NL : 'nl',
NO : 'no',
OC : 'oc',
OM : 'om',
OR_ : 'or',
PA : 'pa',
PL : 'pl',
PS : 'ps',
PT : 'pt',
QU : 'qu',
RM : 'rm',
RN : 'rn',
RO : 'ro',
RU : 'ru',
RW : 'rw',
SA : 'sa',
SD : 'sd',
SG : 'sg',
SH : 'sh',
SI : 'si',
SK : 'sk',
SL : 'sl',
SM : 'sm',
SN : 'sn',
SO : 'so',
SQ : 'sq',
SR : 'sr',
SS : 'ss',
ST : 'st',
SU : 'su',
SV : 'sv',
SW : 'sw',
TA : 'ta',
TE : 'te',
TG : 'tg',
TH : 'th',
TI : 'ti',
TK : 'tk',
TL : 'tl',
TN : 'tn',
TO : 'to',
TR : 'tr',
TS : 'ts',
TT : 'tt',
TW : 'tw',
UG : 'ug',
UK : 'uk',
UR : 'ur',
UZ : 'uz',
VI : 'vi',
VO : 'vo',
WO : 'wo',
XH : 'xh',
YI : 'yi',
YO : 'yo',
ZH : 'zh',
ZU : 'zu',
};

var VidiunLikeOrderBy = module.exports.VidiunLikeOrderBy = {
};

var VidiunLiveAssetOrderBy = module.exports.VidiunLiveAssetOrderBy = {
CREATED_AT_ASC : '+createdAt',
DELETED_AT_ASC : '+deletedAt',
SIZE_ASC : '+size',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
DELETED_AT_DESC : '-deletedAt',
SIZE_DESC : '-size',
UPDATED_AT_DESC : '-updatedAt',
};

var VidiunLiveChannelCompareAttribute = module.exports.VidiunLiveChannelCompareAttribute = {
ACCESS_CONTROL_ID : 'accessControlId',
CREATED_AT : 'createdAt',
END_DATE : 'endDate',
LAST_PLAYED_AT : 'lastPlayedAt',
MEDIA_DATE : 'mediaDate',
MEDIA_TYPE : 'mediaType',
MODERATION_COUNT : 'moderationCount',
MODERATION_STATUS : 'moderationStatus',
MS_DURATION : 'msDuration',
PARTNER_ID : 'partnerId',
PARTNER_SORT_VALUE : 'partnerSortValue',
PLAYS : 'plays',
RANK : 'rank',
REPLACEMENT_STATUS : 'replacementStatus',
START_DATE : 'startDate',
STATUS : 'status',
TOTAL_RANK : 'totalRank',
TYPE : 'type',
UPDATED_AT : 'updatedAt',
VIEWS : 'views',
};

var VidiunLiveChannelMatchAttribute = module.exports.VidiunLiveChannelMatchAttribute = {
ADMIN_TAGS : 'adminTags',
CATEGORIES_IDS : 'categoriesIds',
CREATOR_ID : 'creatorId',
DESCRIPTION : 'description',
DURATION_TYPE : 'durationType',
FLAVOR_PARAMS_IDS : 'flavorParamsIds',
GROUP_ID : 'groupId',
ID : 'id',
NAME : 'name',
REFERENCE_ID : 'referenceId',
REPLACED_ENTRY_ID : 'replacedEntryId',
REPLACING_ENTRY_ID : 'replacingEntryId',
SEARCH_TEXT : 'searchText',
TAGS : 'tags',
USER_ID : 'userId',
};

var VidiunLiveChannelOrderBy = module.exports.VidiunLiveChannelOrderBy = {
CREATED_AT_ASC : '+createdAt',
DURATION_ASC : '+duration',
END_DATE_ASC : '+endDate',
FIRST_BROADCAST_ASC : '+firstBroadcast',
LAST_BROADCAST_ASC : '+lastBroadcast',
LAST_PLAYED_AT_ASC : '+lastPlayedAt',
MEDIA_TYPE_ASC : '+mediaType',
MODERATION_COUNT_ASC : '+moderationCount',
NAME_ASC : '+name',
PARTNER_SORT_VALUE_ASC : '+partnerSortValue',
PLAYS_ASC : '+plays',
RANK_ASC : '+rank',
RECENT_ASC : '+recent',
START_DATE_ASC : '+startDate',
TOTAL_RANK_ASC : '+totalRank',
UPDATED_AT_ASC : '+updatedAt',
VIEWS_ASC : '+views',
WEIGHT_ASC : '+weight',
CREATED_AT_DESC : '-createdAt',
DURATION_DESC : '-duration',
END_DATE_DESC : '-endDate',
FIRST_BROADCAST_DESC : '-firstBroadcast',
LAST_BROADCAST_DESC : '-lastBroadcast',
LAST_PLAYED_AT_DESC : '-lastPlayedAt',
MEDIA_TYPE_DESC : '-mediaType',
MODERATION_COUNT_DESC : '-moderationCount',
NAME_DESC : '-name',
PARTNER_SORT_VALUE_DESC : '-partnerSortValue',
PLAYS_DESC : '-plays',
RANK_DESC : '-rank',
RECENT_DESC : '-recent',
START_DATE_DESC : '-startDate',
TOTAL_RANK_DESC : '-totalRank',
UPDATED_AT_DESC : '-updatedAt',
VIEWS_DESC : '-views',
WEIGHT_DESC : '-weight',
};

var VidiunLiveChannelSegmentOrderBy = module.exports.VidiunLiveChannelSegmentOrderBy = {
CREATED_AT_ASC : '+createdAt',
START_TIME_ASC : '+startTime',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
START_TIME_DESC : '-startTime',
UPDATED_AT_DESC : '-updatedAt',
};

var VidiunLiveChannelSegmentStatus = module.exports.VidiunLiveChannelSegmentStatus = {
ACTIVE : '2',
DELETED : '3',
};

var VidiunLiveChannelSegmentTriggerType = module.exports.VidiunLiveChannelSegmentTriggerType = {
CHANNEL_RELATIVE : '1',
ABSOLUTE_TIME : '2',
SEGMENT_START_RELATIVE : '3',
SEGMENT_END_RELATIVE : '4',
};

var VidiunLiveChannelSegmentType = module.exports.VidiunLiveChannelSegmentType = {
VIDEO_AND_AUDIO : '1',
};

var VidiunLiveEntryCompareAttribute = module.exports.VidiunLiveEntryCompareAttribute = {
ACCESS_CONTROL_ID : 'accessControlId',
CREATED_AT : 'createdAt',
END_DATE : 'endDate',
LAST_PLAYED_AT : 'lastPlayedAt',
MEDIA_DATE : 'mediaDate',
MEDIA_TYPE : 'mediaType',
MODERATION_COUNT : 'moderationCount',
MODERATION_STATUS : 'moderationStatus',
MS_DURATION : 'msDuration',
PARTNER_ID : 'partnerId',
PARTNER_SORT_VALUE : 'partnerSortValue',
PLAYS : 'plays',
RANK : 'rank',
REPLACEMENT_STATUS : 'replacementStatus',
START_DATE : 'startDate',
STATUS : 'status',
TOTAL_RANK : 'totalRank',
TYPE : 'type',
UPDATED_AT : 'updatedAt',
VIEWS : 'views',
};

var VidiunLiveEntryMatchAttribute = module.exports.VidiunLiveEntryMatchAttribute = {
ADMIN_TAGS : 'adminTags',
CATEGORIES_IDS : 'categoriesIds',
CREATOR_ID : 'creatorId',
DESCRIPTION : 'description',
DURATION_TYPE : 'durationType',
FLAVOR_PARAMS_IDS : 'flavorParamsIds',
GROUP_ID : 'groupId',
ID : 'id',
NAME : 'name',
REFERENCE_ID : 'referenceId',
REPLACED_ENTRY_ID : 'replacedEntryId',
REPLACING_ENTRY_ID : 'replacingEntryId',
SEARCH_TEXT : 'searchText',
TAGS : 'tags',
USER_ID : 'userId',
};

var VidiunLiveEntryOrderBy = module.exports.VidiunLiveEntryOrderBy = {
CREATED_AT_ASC : '+createdAt',
DURATION_ASC : '+duration',
END_DATE_ASC : '+endDate',
FIRST_BROADCAST_ASC : '+firstBroadcast',
LAST_BROADCAST_ASC : '+lastBroadcast',
LAST_PLAYED_AT_ASC : '+lastPlayedAt',
MEDIA_TYPE_ASC : '+mediaType',
MODERATION_COUNT_ASC : '+moderationCount',
NAME_ASC : '+name',
PARTNER_SORT_VALUE_ASC : '+partnerSortValue',
PLAYS_ASC : '+plays',
RANK_ASC : '+rank',
RECENT_ASC : '+recent',
START_DATE_ASC : '+startDate',
TOTAL_RANK_ASC : '+totalRank',
UPDATED_AT_ASC : '+updatedAt',
VIEWS_ASC : '+views',
WEIGHT_ASC : '+weight',
CREATED_AT_DESC : '-createdAt',
DURATION_DESC : '-duration',
END_DATE_DESC : '-endDate',
FIRST_BROADCAST_DESC : '-firstBroadcast',
LAST_BROADCAST_DESC : '-lastBroadcast',
LAST_PLAYED_AT_DESC : '-lastPlayedAt',
MEDIA_TYPE_DESC : '-mediaType',
MODERATION_COUNT_DESC : '-moderationCount',
NAME_DESC : '-name',
PARTNER_SORT_VALUE_DESC : '-partnerSortValue',
PLAYS_DESC : '-plays',
RANK_DESC : '-rank',
RECENT_DESC : '-recent',
START_DATE_DESC : '-startDate',
TOTAL_RANK_DESC : '-totalRank',
UPDATED_AT_DESC : '-updatedAt',
VIEWS_DESC : '-views',
WEIGHT_DESC : '-weight',
};

var VidiunLiveEntryScheduleResourceOrderBy = module.exports.VidiunLiveEntryScheduleResourceOrderBy = {
CREATED_AT_ASC : '+createdAt',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
UPDATED_AT_DESC : '-updatedAt',
};

var VidiunLiveParamsOrderBy = module.exports.VidiunLiveParamsOrderBy = {
};

var VidiunLiveReportOrderBy = module.exports.VidiunLiveReportOrderBy = {
NAME_ASC : '+name',
AUDIENCE_DESC : '-audience',
EVENT_TIME_DESC : '-eventTime',
PLAYS_DESC : '-plays',
};

var VidiunLiveReportType = module.exports.VidiunLiveReportType = {
ENTRY_GEO_TIME_LINE : 'ENTRY_GEO_TIME_LINE',
ENTRY_SYNDICATION_TOTAL : 'ENTRY_SYNDICATION_TOTAL',
ENTRY_TIME_LINE : 'ENTRY_TIME_LINE',
ENTRY_TOTAL : 'ENTRY_TOTAL',
PARTNER_TOTAL : 'PARTNER_TOTAL',
};

var VidiunLiveStreamAdminEntryCompareAttribute = module.exports.VidiunLiveStreamAdminEntryCompareAttribute = {
ACCESS_CONTROL_ID : 'accessControlId',
CREATED_AT : 'createdAt',
END_DATE : 'endDate',
LAST_PLAYED_AT : 'lastPlayedAt',
MEDIA_DATE : 'mediaDate',
MEDIA_TYPE : 'mediaType',
MODERATION_COUNT : 'moderationCount',
MODERATION_STATUS : 'moderationStatus',
MS_DURATION : 'msDuration',
PARTNER_ID : 'partnerId',
PARTNER_SORT_VALUE : 'partnerSortValue',
PLAYS : 'plays',
RANK : 'rank',
REPLACEMENT_STATUS : 'replacementStatus',
START_DATE : 'startDate',
STATUS : 'status',
TOTAL_RANK : 'totalRank',
TYPE : 'type',
UPDATED_AT : 'updatedAt',
VIEWS : 'views',
};

var VidiunLiveStreamAdminEntryMatchAttribute = module.exports.VidiunLiveStreamAdminEntryMatchAttribute = {
ADMIN_TAGS : 'adminTags',
CATEGORIES_IDS : 'categoriesIds',
CREATOR_ID : 'creatorId',
DESCRIPTION : 'description',
DURATION_TYPE : 'durationType',
FLAVOR_PARAMS_IDS : 'flavorParamsIds',
GROUP_ID : 'groupId',
ID : 'id',
NAME : 'name',
REFERENCE_ID : 'referenceId',
REPLACED_ENTRY_ID : 'replacedEntryId',
REPLACING_ENTRY_ID : 'replacingEntryId',
SEARCH_TEXT : 'searchText',
TAGS : 'tags',
USER_ID : 'userId',
};

var VidiunLiveStreamAdminEntryOrderBy = module.exports.VidiunLiveStreamAdminEntryOrderBy = {
CREATED_AT_ASC : '+createdAt',
DURATION_ASC : '+duration',
END_DATE_ASC : '+endDate',
FIRST_BROADCAST_ASC : '+firstBroadcast',
LAST_BROADCAST_ASC : '+lastBroadcast',
LAST_PLAYED_AT_ASC : '+lastPlayedAt',
MEDIA_TYPE_ASC : '+mediaType',
MODERATION_COUNT_ASC : '+moderationCount',
NAME_ASC : '+name',
PARTNER_SORT_VALUE_ASC : '+partnerSortValue',
PLAYS_ASC : '+plays',
RANK_ASC : '+rank',
RECENT_ASC : '+recent',
START_DATE_ASC : '+startDate',
TOTAL_RANK_ASC : '+totalRank',
UPDATED_AT_ASC : '+updatedAt',
VIEWS_ASC : '+views',
WEIGHT_ASC : '+weight',
CREATED_AT_DESC : '-createdAt',
DURATION_DESC : '-duration',
END_DATE_DESC : '-endDate',
FIRST_BROADCAST_DESC : '-firstBroadcast',
LAST_BROADCAST_DESC : '-lastBroadcast',
LAST_PLAYED_AT_DESC : '-lastPlayedAt',
MEDIA_TYPE_DESC : '-mediaType',
MODERATION_COUNT_DESC : '-moderationCount',
NAME_DESC : '-name',
PARTNER_SORT_VALUE_DESC : '-partnerSortValue',
PLAYS_DESC : '-plays',
RANK_DESC : '-rank',
RECENT_DESC : '-recent',
START_DATE_DESC : '-startDate',
TOTAL_RANK_DESC : '-totalRank',
UPDATED_AT_DESC : '-updatedAt',
VIEWS_DESC : '-views',
WEIGHT_DESC : '-weight',
};

var VidiunLiveStreamEntryCompareAttribute = module.exports.VidiunLiveStreamEntryCompareAttribute = {
ACCESS_CONTROL_ID : 'accessControlId',
CREATED_AT : 'createdAt',
END_DATE : 'endDate',
LAST_PLAYED_AT : 'lastPlayedAt',
MEDIA_DATE : 'mediaDate',
MEDIA_TYPE : 'mediaType',
MODERATION_COUNT : 'moderationCount',
MODERATION_STATUS : 'moderationStatus',
MS_DURATION : 'msDuration',
PARTNER_ID : 'partnerId',
PARTNER_SORT_VALUE : 'partnerSortValue',
PLAYS : 'plays',
RANK : 'rank',
REPLACEMENT_STATUS : 'replacementStatus',
START_DATE : 'startDate',
STATUS : 'status',
TOTAL_RANK : 'totalRank',
TYPE : 'type',
UPDATED_AT : 'updatedAt',
VIEWS : 'views',
};

var VidiunLiveStreamEntryMatchAttribute = module.exports.VidiunLiveStreamEntryMatchAttribute = {
ADMIN_TAGS : 'adminTags',
CATEGORIES_IDS : 'categoriesIds',
CREATOR_ID : 'creatorId',
DESCRIPTION : 'description',
DURATION_TYPE : 'durationType',
FLAVOR_PARAMS_IDS : 'flavorParamsIds',
GROUP_ID : 'groupId',
ID : 'id',
NAME : 'name',
REFERENCE_ID : 'referenceId',
REPLACED_ENTRY_ID : 'replacedEntryId',
REPLACING_ENTRY_ID : 'replacingEntryId',
SEARCH_TEXT : 'searchText',
TAGS : 'tags',
USER_ID : 'userId',
};

var VidiunLiveStreamEntryOrderBy = module.exports.VidiunLiveStreamEntryOrderBy = {
CREATED_AT_ASC : '+createdAt',
DURATION_ASC : '+duration',
END_DATE_ASC : '+endDate',
FIRST_BROADCAST_ASC : '+firstBroadcast',
LAST_BROADCAST_ASC : '+lastBroadcast',
LAST_PLAYED_AT_ASC : '+lastPlayedAt',
MEDIA_TYPE_ASC : '+mediaType',
MODERATION_COUNT_ASC : '+moderationCount',
NAME_ASC : '+name',
PARTNER_SORT_VALUE_ASC : '+partnerSortValue',
PLAYS_ASC : '+plays',
RANK_ASC : '+rank',
RECENT_ASC : '+recent',
START_DATE_ASC : '+startDate',
TOTAL_RANK_ASC : '+totalRank',
UPDATED_AT_ASC : '+updatedAt',
VIEWS_ASC : '+views',
WEIGHT_ASC : '+weight',
CREATED_AT_DESC : '-createdAt',
DURATION_DESC : '-duration',
END_DATE_DESC : '-endDate',
FIRST_BROADCAST_DESC : '-firstBroadcast',
LAST_BROADCAST_DESC : '-lastBroadcast',
LAST_PLAYED_AT_DESC : '-lastPlayedAt',
MEDIA_TYPE_DESC : '-mediaType',
MODERATION_COUNT_DESC : '-moderationCount',
NAME_DESC : '-name',
PARTNER_SORT_VALUE_DESC : '-partnerSortValue',
PLAYS_DESC : '-plays',
RANK_DESC : '-rank',
RECENT_DESC : '-recent',
START_DATE_DESC : '-startDate',
TOTAL_RANK_DESC : '-totalRank',
UPDATED_AT_DESC : '-updatedAt',
VIEWS_DESC : '-views',
WEIGHT_DESC : '-weight',
};

var VidiunLiveStreamScheduleEventOrderBy = module.exports.VidiunLiveStreamScheduleEventOrderBy = {
CREATED_AT_ASC : '+createdAt',
END_DATE_ASC : '+endDate',
PRIORITY_ASC : '+priority',
START_DATE_ASC : '+startDate',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
END_DATE_DESC : '-endDate',
PRIORITY_DESC : '-priority',
START_DATE_DESC : '-startDate',
UPDATED_AT_DESC : '-updatedAt',
};

var VidiunLocationScheduleResourceOrderBy = module.exports.VidiunLocationScheduleResourceOrderBy = {
CREATED_AT_ASC : '+createdAt',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
UPDATED_AT_DESC : '-updatedAt',
};

var VidiunMailType = module.exports.VidiunMailType = {
MAIL_TYPE_VIDIUN_NEWSLETTER : '10',
MAIL_TYPE_ADDED_TO_FAVORITES : '11',
MAIL_TYPE_ADDED_TO_CLIP_FAVORITES : '12',
MAIL_TYPE_NEW_COMMENT_IN_PROFILE : '13',
MAIL_TYPE_CLIP_ADDED_YOUR_VIDIUN : '20',
MAIL_TYPE_VIDEO_ADDED : '21',
MAIL_TYPE_ROUGHCUT_CREATED : '22',
MAIL_TYPE_ADDED_VIDIUN_TO_YOUR_FAVORITES : '23',
MAIL_TYPE_NEW_COMMENT_IN_VIDIUN : '24',
MAIL_TYPE_CLIP_ADDED : '30',
MAIL_TYPE_VIDEO_CREATED : '31',
MAIL_TYPE_ADDED_VIDIUN_TO_HIS_FAVORITES : '32',
MAIL_TYPE_NEW_COMMENT_IN_VIDIUN_YOU_CONTRIBUTED : '33',
MAIL_TYPE_CLIP_CONTRIBUTED : '40',
MAIL_TYPE_ROUGHCUT_CREATED_SUBSCRIBED : '41',
MAIL_TYPE_ADDED_VIDIUN_TO_HIS_FAVORITES_SUBSCRIBED : '42',
MAIL_TYPE_NEW_COMMENT_IN_VIDIUN_YOU_SUBSCRIBED : '43',
MAIL_TYPE_REGISTER_CONFIRM : '50',
MAIL_TYPE_PASSWORD_RESET : '51',
MAIL_TYPE_LOGIN_MAIL_RESET : '52',
MAIL_TYPE_REGISTER_CONFIRM_VIDEO_SERVICE : '54',
MAIL_TYPE_VIDEO_READY : '60',
MAIL_TYPE_VIDEO_IS_READY : '62',
MAIL_TYPE_BULK_DOWNLOAD_READY : '63',
MAIL_TYPE_BULKUPLOAD_FINISHED : '64',
MAIL_TYPE_BULKUPLOAD_FAILED : '65',
MAIL_TYPE_BULKUPLOAD_ABORTED : '66',
MAIL_TYPE_NOTIFY_ERR : '70',
MAIL_TYPE_ACCOUNT_UPGRADE_CONFIRM : '80',
MAIL_TYPE_VIDEO_SERVICE_NOTICE : '81',
MAIL_TYPE_VIDEO_SERVICE_NOTICE_LIMIT_REACHED : '82',
MAIL_TYPE_VIDEO_SERVICE_NOTICE_ACCOUNT_LOCKED : '83',
MAIL_TYPE_VIDEO_SERVICE_NOTICE_ACCOUNT_DELETED : '84',
MAIL_TYPE_VIDEO_SERVICE_NOTICE_UPGRADE_OFFER : '85',
MAIL_TYPE_ACCOUNT_REACTIVE_CONFIRM : '86',
MAIL_TYPE_SYSTEM_USER_RESET_PASSWORD : '110',
MAIL_TYPE_SYSTEM_USER_RESET_PASSWORD_SUCCESS : '111',
MAIL_TYPE_SYSTEM_USER_NEW_PASSWORD : '112',
MAIL_TYPE_SYSTEM_USER_CREDENTIALS_SAVED : '113',
MAIL_TYPE_LIVE_REPORT_EXPORT_SUCCESS : '130',
MAIL_TYPE_LIVE_REPORT_EXPORT_FAILURE : '131',
MAIL_TYPE_LIVE_REPORT_EXPORT_ABORT : '132',
};

var VidiunMediaEntryCompareAttribute = module.exports.VidiunMediaEntryCompareAttribute = {
ACCESS_CONTROL_ID : 'accessControlId',
CREATED_AT : 'createdAt',
END_DATE : 'endDate',
LAST_PLAYED_AT : 'lastPlayedAt',
MEDIA_DATE : 'mediaDate',
MEDIA_TYPE : 'mediaType',
MODERATION_COUNT : 'moderationCount',
MODERATION_STATUS : 'moderationStatus',
MS_DURATION : 'msDuration',
PARTNER_ID : 'partnerId',
PARTNER_SORT_VALUE : 'partnerSortValue',
PLAYS : 'plays',
RANK : 'rank',
REPLACEMENT_STATUS : 'replacementStatus',
START_DATE : 'startDate',
STATUS : 'status',
TOTAL_RANK : 'totalRank',
TYPE : 'type',
UPDATED_AT : 'updatedAt',
VIEWS : 'views',
};

var VidiunMediaEntryMatchAttribute = module.exports.VidiunMediaEntryMatchAttribute = {
ADMIN_TAGS : 'adminTags',
CATEGORIES_IDS : 'categoriesIds',
CREATOR_ID : 'creatorId',
DESCRIPTION : 'description',
DURATION_TYPE : 'durationType',
FLAVOR_PARAMS_IDS : 'flavorParamsIds',
GROUP_ID : 'groupId',
ID : 'id',
NAME : 'name',
REFERENCE_ID : 'referenceId',
REPLACED_ENTRY_ID : 'replacedEntryId',
REPLACING_ENTRY_ID : 'replacingEntryId',
SEARCH_TEXT : 'searchText',
TAGS : 'tags',
USER_ID : 'userId',
};

var VidiunMediaEntryOrderBy = module.exports.VidiunMediaEntryOrderBy = {
CREATED_AT_ASC : '+createdAt',
DURATION_ASC : '+duration',
END_DATE_ASC : '+endDate',
LAST_PLAYED_AT_ASC : '+lastPlayedAt',
MEDIA_TYPE_ASC : '+mediaType',
MODERATION_COUNT_ASC : '+moderationCount',
NAME_ASC : '+name',
PARTNER_SORT_VALUE_ASC : '+partnerSortValue',
PLAYS_ASC : '+plays',
RANK_ASC : '+rank',
RECENT_ASC : '+recent',
START_DATE_ASC : '+startDate',
TOTAL_RANK_ASC : '+totalRank',
UPDATED_AT_ASC : '+updatedAt',
VIEWS_ASC : '+views',
WEIGHT_ASC : '+weight',
CREATED_AT_DESC : '-createdAt',
DURATION_DESC : '-duration',
END_DATE_DESC : '-endDate',
LAST_PLAYED_AT_DESC : '-lastPlayedAt',
MEDIA_TYPE_DESC : '-mediaType',
MODERATION_COUNT_DESC : '-moderationCount',
NAME_DESC : '-name',
PARTNER_SORT_VALUE_DESC : '-partnerSortValue',
PLAYS_DESC : '-plays',
RANK_DESC : '-rank',
RECENT_DESC : '-recent',
START_DATE_DESC : '-startDate',
TOTAL_RANK_DESC : '-totalRank',
UPDATED_AT_DESC : '-updatedAt',
VIEWS_DESC : '-views',
WEIGHT_DESC : '-weight',
};

var VidiunMediaFlavorParamsOrderBy = module.exports.VidiunMediaFlavorParamsOrderBy = {
};

var VidiunMediaFlavorParamsOutputOrderBy = module.exports.VidiunMediaFlavorParamsOutputOrderBy = {
};

var VidiunMediaInfoOrderBy = module.exports.VidiunMediaInfoOrderBy = {
};

var VidiunMediaParserType = module.exports.VidiunMediaParserType = {
MEDIAINFO : '0',
FFMPEG : '1',
};

var VidiunMediaServerNodeOrderBy = module.exports.VidiunMediaServerNodeOrderBy = {
CREATED_AT_ASC : '+createdAt',
HEARTBEAT_TIME_ASC : '+heartbeatTime',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
HEARTBEAT_TIME_DESC : '-heartbeatTime',
UPDATED_AT_DESC : '-updatedAt',
};

var VidiunMetadataObjectType = module.exports.VidiunMetadataObjectType = {
AD_CUE_POINT : 'adCuePointMetadata.AdCuePoint',
ANNOTATION : 'annotationMetadata.Annotation',
CODE_CUE_POINT : 'codeCuePointMetadata.CodeCuePoint',
THUMB_CUE_POINT : 'thumbCuePointMetadata.thumbCuePoint',
ENTRY : '1',
CATEGORY : '2',
USER : '3',
PARTNER : '4',
DYNAMIC_OBJECT : '5',
};

var VidiunMetadataOrderBy = module.exports.VidiunMetadataOrderBy = {
CREATED_AT_ASC : '+createdAt',
METADATA_PROFILE_VERSION_ASC : '+metadataProfileVersion',
UPDATED_AT_ASC : '+updatedAt',
VERSION_ASC : '+version',
CREATED_AT_DESC : '-createdAt',
METADATA_PROFILE_VERSION_DESC : '-metadataProfileVersion',
UPDATED_AT_DESC : '-updatedAt',
VERSION_DESC : '-version',
};

var VidiunMetadataProfileOrderBy = module.exports.VidiunMetadataProfileOrderBy = {
CREATED_AT_ASC : '+createdAt',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
UPDATED_AT_DESC : '-updatedAt',
};

var VidiunMixEntryCompareAttribute = module.exports.VidiunMixEntryCompareAttribute = {
ACCESS_CONTROL_ID : 'accessControlId',
CREATED_AT : 'createdAt',
END_DATE : 'endDate',
LAST_PLAYED_AT : 'lastPlayedAt',
MODERATION_COUNT : 'moderationCount',
MODERATION_STATUS : 'moderationStatus',
MS_DURATION : 'msDuration',
PARTNER_ID : 'partnerId',
PARTNER_SORT_VALUE : 'partnerSortValue',
PLAYS : 'plays',
RANK : 'rank',
REPLACEMENT_STATUS : 'replacementStatus',
START_DATE : 'startDate',
STATUS : 'status',
TOTAL_RANK : 'totalRank',
TYPE : 'type',
UPDATED_AT : 'updatedAt',
VIEWS : 'views',
};

var VidiunMixEntryMatchAttribute = module.exports.VidiunMixEntryMatchAttribute = {
ADMIN_TAGS : 'adminTags',
CATEGORIES_IDS : 'categoriesIds',
CREATOR_ID : 'creatorId',
DESCRIPTION : 'description',
DURATION_TYPE : 'durationType',
GROUP_ID : 'groupId',
ID : 'id',
NAME : 'name',
REFERENCE_ID : 'referenceId',
REPLACED_ENTRY_ID : 'replacedEntryId',
REPLACING_ENTRY_ID : 'replacingEntryId',
SEARCH_TEXT : 'searchText',
TAGS : 'tags',
USER_ID : 'userId',
};

var VidiunMixEntryOrderBy = module.exports.VidiunMixEntryOrderBy = {
CREATED_AT_ASC : '+createdAt',
DURATION_ASC : '+duration',
END_DATE_ASC : '+endDate',
LAST_PLAYED_AT_ASC : '+lastPlayedAt',
MODERATION_COUNT_ASC : '+moderationCount',
NAME_ASC : '+name',
PARTNER_SORT_VALUE_ASC : '+partnerSortValue',
PLAYS_ASC : '+plays',
RANK_ASC : '+rank',
RECENT_ASC : '+recent',
START_DATE_ASC : '+startDate',
TOTAL_RANK_ASC : '+totalRank',
UPDATED_AT_ASC : '+updatedAt',
VIEWS_ASC : '+views',
WEIGHT_ASC : '+weight',
CREATED_AT_DESC : '-createdAt',
DURATION_DESC : '-duration',
END_DATE_DESC : '-endDate',
LAST_PLAYED_AT_DESC : '-lastPlayedAt',
MODERATION_COUNT_DESC : '-moderationCount',
NAME_DESC : '-name',
PARTNER_SORT_VALUE_DESC : '-partnerSortValue',
PLAYS_DESC : '-plays',
RANK_DESC : '-rank',
RECENT_DESC : '-recent',
START_DATE_DESC : '-startDate',
TOTAL_RANK_DESC : '-totalRank',
UPDATED_AT_DESC : '-updatedAt',
VIEWS_DESC : '-views',
WEIGHT_DESC : '-weight',
};

var VidiunModerationFlagStatus = module.exports.VidiunModerationFlagStatus = {
PENDING : '1',
MODERATED : '2',
};

var VidiunModerationObjectType = module.exports.VidiunModerationObjectType = {
ENTRY : '2',
USER : '3',
};

var VidiunObjectFilterEngineType = module.exports.VidiunObjectFilterEngineType = {
ENTRY : '1',
};

var VidiunObjectTaskType = module.exports.VidiunObjectTaskType = {
DISTRIBUTE : 'scheduledTaskContentDistribution.Distribute',
DISPATCH_EVENT_NOTIFICATION : 'scheduledTaskEventNotification.DispatchEventNotification',
EXECUTE_METADATA_XSLT : 'scheduledTaskMetadata.ExecuteMetadataXslt',
DELETE_ENTRY : '1',
MODIFY_CATEGORIES : '2',
DELETE_ENTRY_FLAVORS : '3',
CONVERT_ENTRY_FLAVORS : '4',
DELETE_LOCAL_CONTENT : '5',
STORAGE_EXPORT : '6',
};

var VidiunPartnerOrderBy = module.exports.VidiunPartnerOrderBy = {
ADMIN_EMAIL_ASC : '+adminEmail',
ADMIN_NAME_ASC : '+adminName',
CREATED_AT_ASC : '+createdAt',
ID_ASC : '+id',
NAME_ASC : '+name',
STATUS_ASC : '+status',
WEBSITE_ASC : '+website',
ADMIN_EMAIL_DESC : '-adminEmail',
ADMIN_NAME_DESC : '-adminName',
CREATED_AT_DESC : '-createdAt',
ID_DESC : '-id',
NAME_DESC : '-name',
STATUS_DESC : '-status',
WEBSITE_DESC : '-website',
};

var VidiunPdfFlavorParamsOrderBy = module.exports.VidiunPdfFlavorParamsOrderBy = {
};

var VidiunPdfFlavorParamsOutputOrderBy = module.exports.VidiunPdfFlavorParamsOutputOrderBy = {
};

var VidiunPermissionItemOrderBy = module.exports.VidiunPermissionItemOrderBy = {
CREATED_AT_ASC : '+createdAt',
ID_ASC : '+id',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
ID_DESC : '-id',
UPDATED_AT_DESC : '-updatedAt',
};

var VidiunPermissionItemType = module.exports.VidiunPermissionItemType = {
API_ACTION_ITEM : 'vApiActionPermissionItem',
API_PARAMETER_ITEM : 'vApiParameterPermissionItem',
};

var VidiunPermissionOrderBy = module.exports.VidiunPermissionOrderBy = {
CREATED_AT_ASC : '+createdAt',
ID_ASC : '+id',
NAME_ASC : '+name',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
ID_DESC : '-id',
NAME_DESC : '-name',
UPDATED_AT_DESC : '-updatedAt',
};

var VidiunPlayReadyAnalogVideoOPId = module.exports.VidiunPlayReadyAnalogVideoOPId = {
EXPLICIT_ANALOG_TV : '2098DE8D-7DDD-4BAB-96C6-32EBB6FABEA3',
BEST_EFFORT_EXPLICIT_ANALOG_TV : '225CD36F-F132-49EF-BA8C-C91EA28E4369',
IMAGE_CONSTRAINT_VIDEO : '811C5110-46C8-4C6E-8163-C0482A15D47E',
AGC_AND_COLOR_STRIPE : 'C3FD11C6-F8B7-4D20-B008-1DB17D61F2DA',
IMAGE_CONSTRAINT_MONITOR : 'D783A191-E083-4BAF-B2DA-E69F910B3772',
};

var VidiunPlayReadyCopyEnablerType = module.exports.VidiunPlayReadyCopyEnablerType = {
CSS : '3CAF2814-A7AB-467C-B4DF-54ACC56C66DC',
PRINTER : '3CF2E054-F4D5-46cd-85A6-FCD152AD5FBE',
DEVICE : '6848955D-516B-4EB0-90E8-8F6D5A77B85F',
CLIPBOARD : '6E76C588-C3A9-47ea-A875-546D5209FF38',
SDC : '79F78A0D-0B69-401e-8A90-8BEF30BCE192',
SDC_PREVIEW : '81BD9AD4-A720-4ea1-B510-5D4E6FFB6A4D',
AACS : 'C3CF56E0-7FF2-4491-809F-53E21D3ABF07',
HELIX : 'CCB0B4E3-8B46-409e-A998-82556E3F5AF4',
CPRM : 'CDD801AD-A577-48DB-950E-46D5F1592FAE',
PC : 'CE480EDE-516B-40B3-90E1-D6CFC47630C5',
SDC_LIMITED : 'E6785609-64CC-4bfa-B82D-6B619733B746',
ORANGE_BOOK_CD : 'EC930B7D-1F2D-4682-A38B-8AB977721D0D',
};

var VidiunPlayReadyDigitalAudioOPId = module.exports.VidiunPlayReadyDigitalAudioOPId = {
SCMS : '6D5CFA59-C250-4426-930E-FAC72C8FCFA6',
};

var VidiunPlayReadyPlayEnablerType = module.exports.VidiunPlayReadyPlayEnablerType = {
HELIX : '002F9772-38A0-43E5-9F79-0F6361DCC62A',
HDCP_WIVU : '1B4542E3-B5CF-4C99-B3BA-829AF46C92F8',
AIRPLAY : '5ABF0F0D-DC29-4B82-9982-FD8E57525BFC',
UNKNOWN : '786627D8-C2A6-44BE-8F88-08AE255B01A',
HDCP_MIRACAST : 'A340C256-0941-4D4C-AD1D-0B6735C0CB24',
UNKNOWN_520 : 'B621D91F-EDCC-4035-8D4B-DC71760D43E9',
DTCP : 'D685030B-0F4F-43A6-BBAD-356F1EA0049A',
};

var VidiunPlayReadyPolicyOrderBy = module.exports.VidiunPlayReadyPolicyOrderBy = {
};

var VidiunPlayReadyProfileOrderBy = module.exports.VidiunPlayReadyProfileOrderBy = {
ID_ASC : '+id',
NAME_ASC : '+name',
ID_DESC : '-id',
NAME_DESC : '-name',
};

var VidiunPlayableEntryCompareAttribute = module.exports.VidiunPlayableEntryCompareAttribute = {
ACCESS_CONTROL_ID : 'accessControlId',
CREATED_AT : 'createdAt',
END_DATE : 'endDate',
LAST_PLAYED_AT : 'lastPlayedAt',
MODERATION_COUNT : 'moderationCount',
MODERATION_STATUS : 'moderationStatus',
MS_DURATION : 'msDuration',
PARTNER_ID : 'partnerId',
PARTNER_SORT_VALUE : 'partnerSortValue',
PLAYS : 'plays',
RANK : 'rank',
REPLACEMENT_STATUS : 'replacementStatus',
START_DATE : 'startDate',
STATUS : 'status',
TOTAL_RANK : 'totalRank',
TYPE : 'type',
UPDATED_AT : 'updatedAt',
VIEWS : 'views',
};

var VidiunPlayableEntryMatchAttribute = module.exports.VidiunPlayableEntryMatchAttribute = {
ADMIN_TAGS : 'adminTags',
CATEGORIES_IDS : 'categoriesIds',
CREATOR_ID : 'creatorId',
DESCRIPTION : 'description',
DURATION_TYPE : 'durationType',
GROUP_ID : 'groupId',
ID : 'id',
NAME : 'name',
REFERENCE_ID : 'referenceId',
REPLACED_ENTRY_ID : 'replacedEntryId',
REPLACING_ENTRY_ID : 'replacingEntryId',
SEARCH_TEXT : 'searchText',
TAGS : 'tags',
USER_ID : 'userId',
};

var VidiunPlayableEntryOrderBy = module.exports.VidiunPlayableEntryOrderBy = {
CREATED_AT_ASC : '+createdAt',
DURATION_ASC : '+duration',
END_DATE_ASC : '+endDate',
LAST_PLAYED_AT_ASC : '+lastPlayedAt',
MODERATION_COUNT_ASC : '+moderationCount',
NAME_ASC : '+name',
PARTNER_SORT_VALUE_ASC : '+partnerSortValue',
PLAYS_ASC : '+plays',
RANK_ASC : '+rank',
RECENT_ASC : '+recent',
START_DATE_ASC : '+startDate',
TOTAL_RANK_ASC : '+totalRank',
UPDATED_AT_ASC : '+updatedAt',
VIEWS_ASC : '+views',
WEIGHT_ASC : '+weight',
CREATED_AT_DESC : '-createdAt',
DURATION_DESC : '-duration',
END_DATE_DESC : '-endDate',
LAST_PLAYED_AT_DESC : '-lastPlayedAt',
MODERATION_COUNT_DESC : '-moderationCount',
NAME_DESC : '-name',
PARTNER_SORT_VALUE_DESC : '-partnerSortValue',
PLAYS_DESC : '-plays',
RANK_DESC : '-rank',
RECENT_DESC : '-recent',
START_DATE_DESC : '-startDate',
TOTAL_RANK_DESC : '-totalRank',
UPDATED_AT_DESC : '-updatedAt',
VIEWS_DESC : '-views',
WEIGHT_DESC : '-weight',
};

var VidiunPlaybackProtocol = module.exports.VidiunPlaybackProtocol = {
APPLE_HTTP : 'applehttp',
APPLE_HTTP_TO_MC : 'applehttp_to_mc',
AUTO : 'auto',
AKAMAI_HD : 'hdnetwork',
AKAMAI_HDS : 'hdnetworkmanifest',
HDS : 'hds',
HLS : 'hls',
HTTP : 'http',
MPEG_DASH : 'mpegdash',
MULTICAST_SL : 'multicast_silverlight',
RTMP : 'rtmp',
RTSP : 'rtsp',
SILVER_LIGHT : 'sl',
};

var VidiunPlaylistCompareAttribute = module.exports.VidiunPlaylistCompareAttribute = {
ACCESS_CONTROL_ID : 'accessControlId',
CREATED_AT : 'createdAt',
END_DATE : 'endDate',
MODERATION_COUNT : 'moderationCount',
MODERATION_STATUS : 'moderationStatus',
PARTNER_ID : 'partnerId',
PARTNER_SORT_VALUE : 'partnerSortValue',
RANK : 'rank',
REPLACEMENT_STATUS : 'replacementStatus',
START_DATE : 'startDate',
STATUS : 'status',
TOTAL_RANK : 'totalRank',
TYPE : 'type',
UPDATED_AT : 'updatedAt',
};

var VidiunPlaylistMatchAttribute = module.exports.VidiunPlaylistMatchAttribute = {
ADMIN_TAGS : 'adminTags',
CATEGORIES_IDS : 'categoriesIds',
CREATOR_ID : 'creatorId',
DESCRIPTION : 'description',
GROUP_ID : 'groupId',
ID : 'id',
NAME : 'name',
REFERENCE_ID : 'referenceId',
REPLACED_ENTRY_ID : 'replacedEntryId',
REPLACING_ENTRY_ID : 'replacingEntryId',
SEARCH_TEXT : 'searchText',
TAGS : 'tags',
USER_ID : 'userId',
};

var VidiunPlaylistOrderBy = module.exports.VidiunPlaylistOrderBy = {
CREATED_AT_ASC : '+createdAt',
END_DATE_ASC : '+endDate',
MODERATION_COUNT_ASC : '+moderationCount',
NAME_ASC : '+name',
PARTNER_SORT_VALUE_ASC : '+partnerSortValue',
RANK_ASC : '+rank',
RECENT_ASC : '+recent',
START_DATE_ASC : '+startDate',
TOTAL_RANK_ASC : '+totalRank',
UPDATED_AT_ASC : '+updatedAt',
WEIGHT_ASC : '+weight',
CREATED_AT_DESC : '-createdAt',
END_DATE_DESC : '-endDate',
MODERATION_COUNT_DESC : '-moderationCount',
NAME_DESC : '-name',
PARTNER_SORT_VALUE_DESC : '-partnerSortValue',
RANK_DESC : '-rank',
RECENT_DESC : '-recent',
START_DATE_DESC : '-startDate',
TOTAL_RANK_DESC : '-totalRank',
UPDATED_AT_DESC : '-updatedAt',
WEIGHT_DESC : '-weight',
};

var VidiunPushNotificationTemplateOrderBy = module.exports.VidiunPushNotificationTemplateOrderBy = {
CREATED_AT_ASC : '+createdAt',
ID_ASC : '+id',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
ID_DESC : '-id',
UPDATED_AT_DESC : '-updatedAt',
};

var VidiunQuestionCuePointOrderBy = module.exports.VidiunQuestionCuePointOrderBy = {
CREATED_AT_ASC : '+createdAt',
PARTNER_SORT_VALUE_ASC : '+partnerSortValue',
START_TIME_ASC : '+startTime',
TRIGGERED_AT_ASC : '+triggeredAt',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
PARTNER_SORT_VALUE_DESC : '-partnerSortValue',
START_TIME_DESC : '-startTime',
TRIGGERED_AT_DESC : '-triggeredAt',
UPDATED_AT_DESC : '-updatedAt',
};

var VidiunQuizUserEntryOrderBy = module.exports.VidiunQuizUserEntryOrderBy = {
CREATED_AT_ASC : '+createdAt',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
UPDATED_AT_DESC : '-updatedAt',
};

var VidiunRecordScheduleEventOrderBy = module.exports.VidiunRecordScheduleEventOrderBy = {
CREATED_AT_ASC : '+createdAt',
END_DATE_ASC : '+endDate',
PRIORITY_ASC : '+priority',
START_DATE_ASC : '+startDate',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
END_DATE_DESC : '-endDate',
PRIORITY_DESC : '-priority',
START_DATE_DESC : '-startDate',
UPDATED_AT_DESC : '-updatedAt',
};

var VidiunRemoteDropFolderOrderBy = module.exports.VidiunRemoteDropFolderOrderBy = {
CREATED_AT_ASC : '+createdAt',
ID_ASC : '+id',
NAME_ASC : '+name',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
ID_DESC : '-id',
NAME_DESC : '-name',
UPDATED_AT_DESC : '-updatedAt',
};

var VidiunReportInterval = module.exports.VidiunReportInterval = {
DAYS : 'days',
MONTHS : 'months',
};

var VidiunReportOrderBy = module.exports.VidiunReportOrderBy = {
CREATED_AT_ASC : '+createdAt',
CREATED_AT_DESC : '-createdAt',
};

var VidiunReportType = module.exports.VidiunReportType = {
QUIZ : 'quiz.QUIZ',
QUIZ_AGGREGATE_BY_QUESTION : 'quiz.QUIZ_AGGREGATE_BY_QUESTION',
QUIZ_USER_AGGREGATE_BY_QUESTION : 'quiz.QUIZ_USER_AGGREGATE_BY_QUESTION',
QUIZ_USER_PERCENTAGE : 'quiz.QUIZ_USER_PERCENTAGE',
TOP_CONTENT : '1',
CONTENT_DROPOFF : '2',
CONTENT_INTERACTIONS : '3',
MAP_OVERLAY : '4',
TOP_CONTRIBUTORS : '5',
TOP_SYNDICATION : '6',
CONTENT_CONTRIBUTIONS : '7',
USER_ENGAGEMENT : '11',
SPEFICIC_USER_ENGAGEMENT : '12',
USER_TOP_CONTENT : '13',
USER_CONTENT_DROPOFF : '14',
USER_CONTENT_INTERACTIONS : '15',
APPLICATIONS : '16',
USER_USAGE : '17',
SPECIFIC_USER_USAGE : '18',
VAR_USAGE : '19',
TOP_CREATORS : '20',
PLATFORMS : '21',
OPERATION_SYSTEM : '22',
BROWSERS : '23',
LIVE : '24',
TOP_PLAYBACK_CONTEXT : '25',
VPAAS_USAGE : '26',
PARTNER_USAGE : '201',
};

var VidiunResponseProfileOrderBy = module.exports.VidiunResponseProfileOrderBy = {
CREATED_AT_ASC : '+createdAt',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
UPDATED_AT_DESC : '-updatedAt',
};

var VidiunRuleActionType = module.exports.VidiunRuleActionType = {
DRM_POLICY : 'drm.DRM_POLICY',
BLOCK : '1',
PREVIEW : '2',
LIMIT_FLAVORS : '3',
ADD_TO_STORAGE : '4',
LIMIT_DELIVERY_PROFILES : '5',
SERVE_FROM_REMOTE_SERVER : '6',
REQUEST_HOST_REGEX : '7',
};

var VidiunScheduleEventOrderBy = module.exports.VidiunScheduleEventOrderBy = {
CREATED_AT_ASC : '+createdAt',
END_DATE_ASC : '+endDate',
PRIORITY_ASC : '+priority',
START_DATE_ASC : '+startDate',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
END_DATE_DESC : '-endDate',
PRIORITY_DESC : '-priority',
START_DATE_DESC : '-startDate',
UPDATED_AT_DESC : '-updatedAt',
};

var VidiunScheduleEventRecurrenceDay = module.exports.VidiunScheduleEventRecurrenceDay = {
FRIDAY : 'FR',
MONDAY : 'MO',
SATURDAY : 'SA',
SUNDAY : 'SU',
THURSDAY : 'TH',
TUESDAY : 'TU',
WEDNESDAY : 'WE',
};

var VidiunScheduleEventRecurrenceFrequency = module.exports.VidiunScheduleEventRecurrenceFrequency = {
DAILY : 'days',
HOURLY : 'hours',
MINUTELY : 'minutes',
MONTHLY : 'months',
SECONDLY : 'seconds',
WEEKLY : 'weeks',
YEARLY : 'years',
};

var VidiunScheduleEventResourceOrderBy = module.exports.VidiunScheduleEventResourceOrderBy = {
CREATED_AT_ASC : '+createdAt',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
UPDATED_AT_DESC : '-updatedAt',
};

var VidiunScheduleResourceOrderBy = module.exports.VidiunScheduleResourceOrderBy = {
CREATED_AT_ASC : '+createdAt',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
UPDATED_AT_DESC : '-updatedAt',
};

var VidiunScheduledTaskProfileOrderBy = module.exports.VidiunScheduledTaskProfileOrderBy = {
CREATED_AT_ASC : '+createdAt',
ID_ASC : '+id',
LAST_EXECUTION_STARTED_AT_ASC : '+lastExecutionStartedAt',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
ID_DESC : '-id',
LAST_EXECUTION_STARTED_AT_DESC : '-lastExecutionStartedAt',
UPDATED_AT_DESC : '-updatedAt',
};

var VidiunSchemaType = module.exports.VidiunSchemaType = {
BULK_UPLOAD_RESULT_XML : 'bulkUploadXml.bulkUploadResultXML',
BULK_UPLOAD_XML : 'bulkUploadXml.bulkUploadXML',
INGEST_API : 'cuePoint.ingestAPI',
SERVE_API : 'cuePoint.serveAPI',
DROP_FOLDER_XML : 'dropFolderXmlBulkUpload.dropFolderXml',
SYNDICATION : 'syndication',
};

var VidiunScpDropFolderOrderBy = module.exports.VidiunScpDropFolderOrderBy = {
CREATED_AT_ASC : '+createdAt',
ID_ASC : '+id',
NAME_ASC : '+name',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
ID_DESC : '-id',
NAME_DESC : '-name',
UPDATED_AT_DESC : '-updatedAt',
};

var VidiunSearchConditionComparison = module.exports.VidiunSearchConditionComparison = {
EQUAL : '1',
GREATER_THAN : '2',
GREATER_THAN_OR_EQUAL : '3',
LESS_THAN : '4',
LESS_THAN_OR_EQUAL : '5',
NOT_EQUAL : '6',
};

var VidiunServerNodeOrderBy = module.exports.VidiunServerNodeOrderBy = {
CREATED_AT_ASC : '+createdAt',
HEARTBEAT_TIME_ASC : '+heartbeatTime',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
HEARTBEAT_TIME_DESC : '-heartbeatTime',
UPDATED_AT_DESC : '-updatedAt',
};

var VidiunServerNodeType = module.exports.VidiunServerNodeType = {
WOWZA_MEDIA_SERVER : 'wowza.WOWZA_MEDIA_SERVER',
EDGE : '1',
};

var VidiunSftpDropFolderOrderBy = module.exports.VidiunSftpDropFolderOrderBy = {
CREATED_AT_ASC : '+createdAt',
ID_ASC : '+id',
NAME_ASC : '+name',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
ID_DESC : '-id',
NAME_DESC : '-name',
UPDATED_AT_DESC : '-updatedAt',
};

var VidiunShortLinkOrderBy = module.exports.VidiunShortLinkOrderBy = {
CREATED_AT_ASC : '+createdAt',
EXPIRES_AT_ASC : '+expiresAt',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
EXPIRES_AT_DESC : '-expiresAt',
UPDATED_AT_DESC : '-updatedAt',
};

var VidiunSourceType = module.exports.VidiunSourceType = {
LIMELIGHT_LIVE : 'limeLight.LIVE_STREAM',
VELOCIX_LIVE : 'velocix.VELOCIX_LIVE',
FILE : '1',
WEBCAM : '2',
URL : '5',
SEARCH_PROVIDER : '6',
AKAMAI_LIVE : '29',
MANUAL_LIVE_STREAM : '30',
AKAMAI_UNIVERSAL_LIVE : '31',
LIVE_STREAM : '32',
LIVE_CHANNEL : '33',
RECORDED_LIVE : '34',
CLIP : '35',
LIVE_STREAM_ONTEXTDATA_CAPTIONS : '42',
};

var VidiunSshDropFolderOrderBy = module.exports.VidiunSshDropFolderOrderBy = {
CREATED_AT_ASC : '+createdAt',
ID_ASC : '+id',
NAME_ASC : '+name',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
ID_DESC : '-id',
NAME_DESC : '-name',
UPDATED_AT_DESC : '-updatedAt',
};

var VidiunStorageProfileOrderBy = module.exports.VidiunStorageProfileOrderBy = {
CREATED_AT_ASC : '+createdAt',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
UPDATED_AT_DESC : '-updatedAt',
};

var VidiunStorageProfileProtocol = module.exports.VidiunStorageProfileProtocol = {
KONTIKI : 'kontiki.KONTIKI',
VIDIUN_DC : '0',
FTP : '1',
SCP : '2',
SFTP : '3',
S3 : '6',
LOCAL : '7',
};

var VidiunSwfFlavorParamsOrderBy = module.exports.VidiunSwfFlavorParamsOrderBy = {
};

var VidiunSwfFlavorParamsOutputOrderBy = module.exports.VidiunSwfFlavorParamsOutputOrderBy = {
};

var VidiunSyndicationDistributionProfileOrderBy = module.exports.VidiunSyndicationDistributionProfileOrderBy = {
CREATED_AT_ASC : '+createdAt',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
UPDATED_AT_DESC : '-updatedAt',
};

var VidiunSyndicationFeedEntriesOrderBy = module.exports.VidiunSyndicationFeedEntriesOrderBy = {
CREATED_AT_DESC : '-createdAt',
RECENT : 'recent',
};

var VidiunSystemPartnerLimitType = module.exports.VidiunSystemPartnerLimitType = {
ACCESS_CONTROLS : 'ACCESS_CONTROLS',
ADMIN_LOGIN_USERS : 'ADMIN_LOGIN_USERS',
BULK_SIZE : 'BULK_SIZE',
END_USERS : 'END_USERS',
ENTRIES : 'ENTRIES',
LIVE_STREAM_INPUTS : 'LIVE_STREAM_INPUTS',
LIVE_STREAM_OUTPUTS : 'LIVE_STREAM_OUTPUTS',
LOGIN_USERS : 'LOGIN_USERS',
MONTHLY_BANDWIDTH : 'MONTHLY_BANDWIDTH',
MONTHLY_STORAGE : 'MONTHLY_STORAGE',
MONTHLY_STORAGE_AND_BANDWIDTH : 'MONTHLY_STORAGE_AND_BANDWIDTH',
MONTHLY_STREAM_ENTRIES : 'MONTHLY_STREAM_ENTRIES',
PUBLISHERS : 'PUBLISHERS',
USER_LOGIN_ATTEMPTS : 'USER_LOGIN_ATTEMPTS',
};

var VidiunTaggedObjectType = module.exports.VidiunTaggedObjectType = {
ENTRY : '1',
CATEGORY : '2',
};

var VidiunThumbAssetOrderBy = module.exports.VidiunThumbAssetOrderBy = {
CREATED_AT_ASC : '+createdAt',
DELETED_AT_ASC : '+deletedAt',
SIZE_ASC : '+size',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
DELETED_AT_DESC : '-deletedAt',
SIZE_DESC : '-size',
UPDATED_AT_DESC : '-updatedAt',
};

var VidiunThumbCuePointOrderBy = module.exports.VidiunThumbCuePointOrderBy = {
CREATED_AT_ASC : '+createdAt',
PARTNER_SORT_VALUE_ASC : '+partnerSortValue',
START_TIME_ASC : '+startTime',
TRIGGERED_AT_ASC : '+triggeredAt',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
PARTNER_SORT_VALUE_DESC : '-partnerSortValue',
START_TIME_DESC : '-startTime',
TRIGGERED_AT_DESC : '-triggeredAt',
UPDATED_AT_DESC : '-updatedAt',
};

var VidiunThumbParamsOrderBy = module.exports.VidiunThumbParamsOrderBy = {
};

var VidiunThumbParamsOutputOrderBy = module.exports.VidiunThumbParamsOutputOrderBy = {
};

var VidiunTimedThumbAssetOrderBy = module.exports.VidiunTimedThumbAssetOrderBy = {
CREATED_AT_ASC : '+createdAt',
DELETED_AT_ASC : '+deletedAt',
SIZE_ASC : '+size',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
DELETED_AT_DESC : '-deletedAt',
SIZE_DESC : '-size',
UPDATED_AT_DESC : '-updatedAt',
};

var VidiunTranscriptAssetOrderBy = module.exports.VidiunTranscriptAssetOrderBy = {
CREATED_AT_ASC : '+createdAt',
DELETED_AT_ASC : '+deletedAt',
SIZE_ASC : '+size',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
DELETED_AT_DESC : '-deletedAt',
SIZE_DESC : '-size',
UPDATED_AT_DESC : '-updatedAt',
};

var VidiunTubeMogulSyndicationFeedCategories = module.exports.VidiunTubeMogulSyndicationFeedCategories = {
ANIMALS_AND_PETS : 'Animals &amp; Pets',
ARTS_AND_ANIMATION : 'Arts &amp; Animation',
AUTOS : 'Autos',
COMEDY : 'Comedy',
COMMERCIALS_PROMOTIONAL : 'Commercials/Promotional',
ENTERTAINMENT : 'Entertainment',
FAMILY_AND_KIDS : 'Family &amp; Kids',
HOW_TO_INSTRUCTIONAL_DIY : 'How To/Instructional/DIY',
MUSIC : 'Music',
NEWS_AND_BLOGS : 'News &amp; Blogs',
SCIENCE_AND_TECHNOLOGY : 'Science &amp; Technology',
SPORTS : 'Sports',
TRAVEL_AND_PLACES : 'Travel &amp; Places',
VIDEO_GAMES : 'Video Games',
VLOGS_PEOPLE : 'Vlogs &amp; People',
};

var VidiunTubeMogulSyndicationFeedOrderBy = module.exports.VidiunTubeMogulSyndicationFeedOrderBy = {
CREATED_AT_ASC : '+createdAt',
NAME_ASC : '+name',
PLAYLIST_ID_ASC : '+playlistId',
TYPE_ASC : '+type',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
NAME_DESC : '-name',
PLAYLIST_ID_DESC : '-playlistId',
TYPE_DESC : '-type',
UPDATED_AT_DESC : '-updatedAt',
};

var VidiunUiConfAdminOrderBy = module.exports.VidiunUiConfAdminOrderBy = {
CREATED_AT_ASC : '+createdAt',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
UPDATED_AT_DESC : '-updatedAt',
};

var VidiunUiConfOrderBy = module.exports.VidiunUiConfOrderBy = {
CREATED_AT_ASC : '+createdAt',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
UPDATED_AT_DESC : '-updatedAt',
};

var VidiunUploadTokenOrderBy = module.exports.VidiunUploadTokenOrderBy = {
CREATED_AT_ASC : '+createdAt',
CREATED_AT_DESC : '-createdAt',
};

var VidiunUserEntryOrderBy = module.exports.VidiunUserEntryOrderBy = {
CREATED_AT_ASC : '+createdAt',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
UPDATED_AT_DESC : '-updatedAt',
};

var VidiunUserEntryStatus = module.exports.VidiunUserEntryStatus = {
QUIZ_SUBMITTED : 'quiz.3',
ACTIVE : '1',
DELETED : '2',
};

var VidiunUserEntryType = module.exports.VidiunUserEntryType = {
QUIZ : 'quiz.QUIZ',
};

var VidiunUserLoginDataOrderBy = module.exports.VidiunUserLoginDataOrderBy = {
};

var VidiunUserOrderBy = module.exports.VidiunUserOrderBy = {
CREATED_AT_ASC : '+createdAt',
ID_ASC : '+id',
CREATED_AT_DESC : '-createdAt',
ID_DESC : '-id',
};

var VidiunUserRoleOrderBy = module.exports.VidiunUserRoleOrderBy = {
CREATED_AT_ASC : '+createdAt',
ID_ASC : '+id',
NAME_ASC : '+name',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
ID_DESC : '-id',
NAME_DESC : '-name',
UPDATED_AT_DESC : '-updatedAt',
};

var VidiunVideoCodec = module.exports.VidiunVideoCodec = {
NONE : '',
APCH : 'apch',
APCN : 'apcn',
APCO : 'apco',
APCS : 'apcs',
COPY : 'copy',
DNXHD : 'dnxhd',
DV : 'dv',
FLV : 'flv',
H263 : 'h263',
H264 : 'h264',
H264B : 'h264b',
H264H : 'h264h',
H264M : 'h264m',
H265 : 'h265',
MPEG2 : 'mpeg2',
MPEG4 : 'mpeg4',
THEORA : 'theora',
VP6 : 'vp6',
VP8 : 'vp8',
VP9 : 'vp9',
WMV2 : 'wmv2',
WMV3 : 'wmv3',
WVC1A : 'wvc1a',
};

var VidiunVirusScanEngineType = module.exports.VidiunVirusScanEngineType = {
CLAMAV_SCAN_ENGINE : 'clamAVScanEngine.ClamAV',
SYMANTEC_SCAN_DIRECT_ENGINE : 'symantecScanEngine.SymantecScanDirectEngine',
SYMANTEC_SCAN_ENGINE : 'symantecScanEngine.SymantecScanEngine',
SYMANTEC_SCAN_JAVA_ENGINE : 'symantecScanEngine.SymantecScanJavaEngine',
};

var VidiunVirusScanProfileOrderBy = module.exports.VidiunVirusScanProfileOrderBy = {
CREATED_AT_ASC : '+createdAt',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
UPDATED_AT_DESC : '-updatedAt',
};

var VidiunWebexDropFolderFileOrderBy = module.exports.VidiunWebexDropFolderFileOrderBy = {
CREATED_AT_ASC : '+createdAt',
FILE_NAME_ASC : '+fileName',
FILE_SIZE_ASC : '+fileSize',
FILE_SIZE_LAST_SET_AT_ASC : '+fileSizeLastSetAt',
ID_ASC : '+id',
PARSED_FLAVOR_ASC : '+parsedFlavor',
PARSED_SLUG_ASC : '+parsedSlug',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
FILE_NAME_DESC : '-fileName',
FILE_SIZE_DESC : '-fileSize',
FILE_SIZE_LAST_SET_AT_DESC : '-fileSizeLastSetAt',
ID_DESC : '-id',
PARSED_FLAVOR_DESC : '-parsedFlavor',
PARSED_SLUG_DESC : '-parsedSlug',
UPDATED_AT_DESC : '-updatedAt',
};

var VidiunWebexDropFolderOrderBy = module.exports.VidiunWebexDropFolderOrderBy = {
CREATED_AT_ASC : '+createdAt',
ID_ASC : '+id',
NAME_ASC : '+name',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
ID_DESC : '-id',
NAME_DESC : '-name',
UPDATED_AT_DESC : '-updatedAt',
};

var VidiunWidevineFlavorAssetOrderBy = module.exports.VidiunWidevineFlavorAssetOrderBy = {
CREATED_AT_ASC : '+createdAt',
DELETED_AT_ASC : '+deletedAt',
SIZE_ASC : '+size',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
DELETED_AT_DESC : '-deletedAt',
SIZE_DESC : '-size',
UPDATED_AT_DESC : '-updatedAt',
};

var VidiunWidevineFlavorParamsOrderBy = module.exports.VidiunWidevineFlavorParamsOrderBy = {
};

var VidiunWidevineFlavorParamsOutputOrderBy = module.exports.VidiunWidevineFlavorParamsOutputOrderBy = {
};

var VidiunWidevineProfileOrderBy = module.exports.VidiunWidevineProfileOrderBy = {
ID_ASC : '+id',
NAME_ASC : '+name',
ID_DESC : '-id',
NAME_DESC : '-name',
};

var VidiunWidgetOrderBy = module.exports.VidiunWidgetOrderBy = {
CREATED_AT_ASC : '+createdAt',
CREATED_AT_DESC : '-createdAt',
};

var VidiunWowzaMediaServerNodeOrderBy = module.exports.VidiunWowzaMediaServerNodeOrderBy = {
CREATED_AT_ASC : '+createdAt',
HEARTBEAT_TIME_ASC : '+heartbeatTime',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
HEARTBEAT_TIME_DESC : '-heartbeatTime',
UPDATED_AT_DESC : '-updatedAt',
};

var VidiunYahooSyndicationFeedAdultValues = module.exports.VidiunYahooSyndicationFeedAdultValues = {
ADULT : 'adult',
NON_ADULT : 'nonadult',
};

var VidiunYahooSyndicationFeedCategories = module.exports.VidiunYahooSyndicationFeedCategories = {
ACTION : 'Action',
ANIMALS : 'Animals',
ART_AND_ANIMATION : 'Art &amp; Animation',
COMMERCIALS : 'Commercials',
ENTERTAINMENT_AND_TV : 'Entertainment &amp; TV',
FAMILY : 'Family',
FOOD : 'Food',
FUNNY_VIDEOS : 'Funny Videos',
GAMES : 'Games',
HEALTH_AND_BEAUTY : 'Health &amp; Beauty',
HOW_TO : 'How-To',
MOVIES_AND_SHORTS : 'Movies &amp; Shorts',
MUSIC : 'Music',
NEWS_AND_POLITICS : 'News &amp; Politics',
PEOPLE_AND_VLOGS : 'People &amp; Vlogs',
PRODUCTS_AND_TECH : 'Products &amp; Tech.',
SCIENCE_AND_ENVIRONMENT : 'Science &amp; Environment',
SPORTS : 'Sports',
TRANSPORTATION : 'Transportation',
TRAVEL : 'Travel',
};

var VidiunYahooSyndicationFeedOrderBy = module.exports.VidiunYahooSyndicationFeedOrderBy = {
CREATED_AT_ASC : '+createdAt',
NAME_ASC : '+name',
PLAYLIST_ID_ASC : '+playlistId',
TYPE_ASC : '+type',
UPDATED_AT_ASC : '+updatedAt',
CREATED_AT_DESC : '-createdAt',
NAME_DESC : '-name',
PLAYLIST_ID_DESC : '-playlistId',
TYPE_DESC : '-type',
UPDATED_AT_DESC : '-updatedAt',
};
