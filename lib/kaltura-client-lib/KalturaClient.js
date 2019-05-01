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
/**
 * The Vidiun Client - this is the facade through which all service actions should be called.
 * @param config the Vidiun configuration object holding partner credentials (type: VidiunConfiguration).
 */
var util = require('util');
var vidiun = require('./VidiunClientBase');
vidiun.objects = require('./VidiunVO');
vidiun.services = require('./VidiunServices');
vidiun.enums = require('./VidiunTypes');

function VidiunClient(config) {
	this.setApiVersion('3.3.0');
	this.setClientTag('liveController:1.0.0');
	this.init(config);
}

module.exports = vidiun;
module.exports.VidiunClient = VidiunClient;

util.inherits(VidiunClient, vidiun.VidiunClientBase);

/**
 * Manage beacons to server
 * @param vidiun.services.VidiunBeacon
 */
VidiunClient.prototype.beacon = null;
/**
 * Manage access control profiles
 * @param vidiun.services.VidiunAccessControlProfileService
 */
VidiunClient.prototype.accessControlProfile = null;
/**
 * Add & Manage Access Controls
 * @param vidiun.services.VidiunAccessControlService
 */
VidiunClient.prototype.accessControl = null;
/**
 * Manage details for the administrative user
 * @param vidiun.services.VidiunAdminUserService
 */
VidiunClient.prototype.adminUser = null;
/**
 * api for getting analytics data
 * @param vidiun.services.VidiunAnalyticsService
 */
VidiunClient.prototype.analytics = null;
/**
 * Manage application authentication tokens
 * @param vidiun.services.VidiunAppTokenService
 */
VidiunClient.prototype.appToken = null;
/**
 * Base Entry Service
 * @param vidiun.services.VidiunBaseEntryService
 */
VidiunClient.prototype.baseEntry = null;
/**
 * Bulk upload service is used to upload & manage bulk uploads using CSV files.
 * This service manages only entry bulk uploads
 * @param vidiun.services.VidiunBulkUploadService
 */
VidiunClient.prototype.bulkUpload = null;
/**
 * Add & Manage CategoryEntry - assign entry to category
 * @param vidiun.services.VidiunCategoryEntryService
 */
VidiunClient.prototype.categoryEntry = null;
/**
 * Add & Manage Categories
 * @param vidiun.services.VidiunCategoryService
 */
VidiunClient.prototype.category = null;
/**
 * Add & Manage CategoryUser - membership of a user in a category
 * @param vidiun.services.VidiunCategoryUserService
 */
VidiunClient.prototype.categoryUser = null;
/**
 * Manage the connection between Conversion Profiles and Asset Params
 * @param vidiun.services.VidiunConversionProfileAssetParamsService
 */
VidiunClient.prototype.conversionProfileAssetParams = null;
/**
 * Add & Manage Conversion Profiles
 * @param vidiun.services.VidiunConversionProfileService
 */
VidiunClient.prototype.conversionProfile = null;
/**
 * Data service lets you manage data content (textual content)
 * @param vidiun.services.VidiunDataService
 */
VidiunClient.prototype.data = null;
/**
 * delivery service is used to control delivery objects
 * @param vidiun.services.VidiunDeliveryProfileService
 */
VidiunClient.prototype.deliveryProfile = null;
/**
 * Document service
 * @param vidiun.services.VidiunDocumentService
 */
VidiunClient.prototype.document = null;
/**
 * EmailIngestionProfile service lets you manage email ingestion profile records
 * @param vidiun.services.VidiunEmailIngestionProfileService
 */
VidiunClient.prototype.EmailIngestionProfile = null;
/**
 * Base class for entry server node
 * @param vidiun.services.VidiunEntryServerNodeService
 */
VidiunClient.prototype.entryServerNode = null;
/**
 * Manage file assets
 * @param vidiun.services.VidiunFileAssetService
 */
VidiunClient.prototype.fileAsset = null;
/**
 * Retrieve information and invoke actions on Flavor Asset
 * @param vidiun.services.VidiunFlavorAssetService
 */
VidiunClient.prototype.flavorAsset = null;
/**
 * Flavor Params Output service
 * @param vidiun.services.VidiunFlavorParamsOutputService
 */
VidiunClient.prototype.flavorParamsOutput = null;
/**
 * Add & Manage Flavor Params
 * @param vidiun.services.VidiunFlavorParamsService
 */
VidiunClient.prototype.flavorParams = null;
/**
 * Add & Manage GroupUser
 * @param vidiun.services.VidiunGroupUserService
 */
VidiunClient.prototype.groupUser = null;
/**
 * Manage live channel segments
 * @param vidiun.services.VidiunLiveChannelSegmentService
 */
VidiunClient.prototype.liveChannelSegment = null;
/**
 * Live Channel service lets you manage live channels
 * @param vidiun.services.VidiunLiveChannelService
 */
VidiunClient.prototype.liveChannel = null;
/**
 * 
 * @param vidiun.services.VidiunLiveReportsService
 */
VidiunClient.prototype.liveReports = null;
/**
 * Stats Service
 * @param vidiun.services.VidiunLiveStatsService
 */
VidiunClient.prototype.liveStats = null;
/**
 * Live Stream service lets you manage live stream entries
 * @param vidiun.services.VidiunLiveStreamService
 */
VidiunClient.prototype.liveStream = null;
/**
 * Media Info service
 * @param vidiun.services.VidiunMediaInfoService
 */
VidiunClient.prototype.mediaInfo = null;
/**
 * Media service lets you upload and manage media files (images / videos & audio)
 * @param vidiun.services.VidiunMediaService
 */
VidiunClient.prototype.media = null;
/**
 * A Mix is an XML unique format invented by Vidiun, it allows the user to create a mix of videos and images, in and out points, transitions, text overlays, soundtrack, effects and much more...
 * Mixing service lets you create a new mix, manage its metadata and make basic manipulations
 * @param vidiun.services.VidiunMixingService
 */
VidiunClient.prototype.mixing = null;
/**
 * Notification Service
 * @param vidiun.services.VidiunNotificationService
 */
VidiunClient.prototype.notification = null;
/**
 * partner service allows you to change/manage your partner personal details and settings as well
 * @param vidiun.services.VidiunPartnerService
 */
VidiunClient.prototype.partner = null;
/**
 * PermissionItem service lets you create and manage permission items
 * @param vidiun.services.VidiunPermissionItemService
 */
VidiunClient.prototype.permissionItem = null;
/**
 * Permission service lets you create and manage user permissions
 * @param vidiun.services.VidiunPermissionService
 */
VidiunClient.prototype.permission = null;
/**
 * Playlist service lets you create,manage and play your playlists
 * Playlists could be static (containing a fixed list of entries) or dynamic (baseed on a filter)
 * @param vidiun.services.VidiunPlaylistService
 */
VidiunClient.prototype.playlist = null;
/**
 * api for getting reports data by the report type and some inputFilter
 * @param vidiun.services.VidiunReportService
 */
VidiunClient.prototype.report = null;
/**
 * Manage response profiles
 * @param vidiun.services.VidiunResponseProfileService
 */
VidiunClient.prototype.responseProfile = null;
/**
 * Expose the schema definitions for syndication MRSS, bulk upload XML and other schema types
 * @param vidiun.services.VidiunSchemaService
 */
VidiunClient.prototype.schema = null;
/**
 * Search service allows you to search for media in various media providers
 * This service is being used mostly by the CW component
 * @param vidiun.services.VidiunSearchService
 */
VidiunClient.prototype.search = null;
/**
 * Server Node service
 * @param vidiun.services.VidiunServerNodeService
 */
VidiunClient.prototype.serverNode = null;
/**
 * Session service
 * @param vidiun.services.VidiunSessionService
 */
VidiunClient.prototype.session = null;
/**
 * Stats Service
 * @param vidiun.services.VidiunStatsService
 */
VidiunClient.prototype.stats = null;
/**
 * Storage Profiles service
 * @param vidiun.services.VidiunStorageProfileService
 */
VidiunClient.prototype.storageProfile = null;
/**
 * Add & Manage Syndication Feeds
 * @param vidiun.services.VidiunSyndicationFeedService
 */
VidiunClient.prototype.syndicationFeed = null;
/**
 * System service is used for internal system helpers & to retrieve system level information
 * @param vidiun.services.VidiunSystemService
 */
VidiunClient.prototype.system = null;
/**
 * Retrieve information and invoke actions on Thumb Asset
 * @param vidiun.services.VidiunThumbAssetService
 */
VidiunClient.prototype.thumbAsset = null;
/**
 * Thumbnail Params Output service
 * @param vidiun.services.VidiunThumbParamsOutputService
 */
VidiunClient.prototype.thumbParamsOutput = null;
/**
 * Add & Manage Thumb Params
 * @param vidiun.services.VidiunThumbParamsService
 */
VidiunClient.prototype.thumbParams = null;
/**
 * UiConf service lets you create and manage your UIConfs for the various flash components
 * This service is used by the VMC-ApplicationStudio
 * @param vidiun.services.VidiunUiConfService
 */
VidiunClient.prototype.uiConf = null;
/**
 * 
 * @param vidiun.services.VidiunUploadService
 */
VidiunClient.prototype.upload = null;
/**
 * 
 * @param vidiun.services.VidiunUploadTokenService
 */
VidiunClient.prototype.uploadToken = null;
/**
 * 
 * @param vidiun.services.VidiunUserEntryService
 */
VidiunClient.prototype.userEntry = null;
/**
 * UserRole service lets you create and manage user roles
 * @param vidiun.services.VidiunUserRoleService
 */
VidiunClient.prototype.userRole = null;
/**
 * Manage partner users on Vidiun's side
 * The userId in vidiun is the unique Id in the partner's system, and the [partnerId,Id] couple are unique key in vidiun's DB
 * @param vidiun.services.VidiunUserService
 */
VidiunClient.prototype.user = null;
/**
 * widget service for full widget management
 * @param vidiun.services.VidiunWidgetService
 */
VidiunClient.prototype.widget = null;
/**
 * Internal Service is used for actions that are used internally in Vidiun applications and might be changed in the future without any notice
 * @param vidiun.services.VidiunXInternalService
 */
VidiunClient.prototype.xInternal = null;
/**
 * Metadata service
 * @param vidiun.services.VidiunMetadataService
 */
VidiunClient.prototype.metadata = null;
/**
 * Metadata Profile service
 * @param vidiun.services.VidiunMetadataProfileService
 */
VidiunClient.prototype.metadataProfile = null;
/**
 * 
 * @param vidiun.services.VidiunMetadataBatchService
 */
VidiunClient.prototype.metadataBatch = null;
/**
 * Document service lets you upload and manage document files
 * @param vidiun.services.VidiunDocumentsService
 */
VidiunClient.prototype.documents = null;
/**
 * Annotation service - Video Annotation
 * @param vidiun.services.VidiunAnnotationService
 */
VidiunClient.prototype.annotation = null;
/**
 * Aspera service
 * @param vidiun.services.VidiunAsperaService
 */
VidiunClient.prototype.aspera = null;
/**
 * Retrieve information and invoke actions on attachment Asset
 * @param vidiun.services.VidiunAttachmentAssetService
 */
VidiunClient.prototype.attachmentAsset = null;
/**
 * Audit Trail service
 * @param vidiun.services.VidiunAuditTrailService
 */
VidiunClient.prototype.auditTrail = null;
/**
 * Bulk upload service is used to upload & manage bulk uploads
 * @param vidiun.services.VidiunBulkService
 */
VidiunClient.prototype.bulk = null;
/**
 * Retrieve information and invoke actions on caption Asset
 * @param vidiun.services.VidiunCaptionAssetService
 */
VidiunClient.prototype.captionAsset = null;
/**
 * Add & Manage Caption Params
 * @param vidiun.services.VidiunCaptionParamsService
 */
VidiunClient.prototype.captionParams = null;
/**
 * Search caption asset items
 * @param vidiun.services.VidiunCaptionAssetItemService
 */
VidiunClient.prototype.captionAssetItem = null;
/**
 * 
 * @param vidiun.services.VidiunCaptureSpaceService
 */
VidiunClient.prototype.captureSpace = null;
/**
 * Distribution Profile service
 * @param vidiun.services.VidiunDistributionProfileService
 */
VidiunClient.prototype.distributionProfile = null;
/**
 * Entry Distribution service
 * @param vidiun.services.VidiunEntryDistributionService
 */
VidiunClient.prototype.entryDistribution = null;
/**
 * Distribution Provider service
 * @param vidiun.services.VidiunDistributionProviderService
 */
VidiunClient.prototype.distributionProvider = null;
/**
 * Generic Distribution Provider service
 * @param vidiun.services.VidiunGenericDistributionProviderService
 */
VidiunClient.prototype.genericDistributionProvider = null;
/**
 * Generic Distribution Provider Actions service
 * @param vidiun.services.VidiunGenericDistributionProviderActionService
 */
VidiunClient.prototype.genericDistributionProviderAction = null;
/**
 * 
 * @param vidiun.services.VidiunContentDistributionBatchService
 */
VidiunClient.prototype.contentDistributionBatch = null;
/**
 * Cue Point service
 * @param vidiun.services.VidiunCuePointService
 */
VidiunClient.prototype.cuePoint = null;
/**
 * DropFolder service lets you create and manage drop folders
 * @param vidiun.services.VidiunDropFolderService
 */
VidiunClient.prototype.dropFolder = null;
/**
 * DropFolderFile service lets you create and manage drop folder files
 * @param vidiun.services.VidiunDropFolderFileService
 */
VidiunClient.prototype.dropFolderFile = null;
/**
 * Event notification template service lets you create and manage event notification templates
 * @param vidiun.services.VidiunEventNotificationTemplateService
 */
VidiunClient.prototype.eventNotificationTemplate = null;
/**
 * System user service
 * @param vidiun.services.VidiunFileSyncService
 */
VidiunClient.prototype.fileSync = null;
/**
 * Allows user to 'like' or 'unlike' and entry
 * @param vidiun.services.VidiunLikeService
 */
VidiunClient.prototype.like = null;
/**
 * 
 * @param vidiun.services.VidiunFilesyncImportBatchService
 */
VidiunClient.prototype.filesyncImportBatch = null;
/**
 * Short link service
 * @param vidiun.services.VidiunShortLinkService
 */
VidiunClient.prototype.shortLink = null;
/**
 * Search object tags
 * @param vidiun.services.VidiunTagService
 */
VidiunClient.prototype.tag = null;
/**
 * Utility service for the Multi-publishers console
 * @param vidiun.services.VidiunVarConsoleService
 */
VidiunClient.prototype.varConsole = null;
/**
 * Virus scan profile service
 * @param vidiun.services.VidiunVirusScanProfileService
 */
VidiunClient.prototype.virusScanProfile = null;
/**
 * External media service lets you upload and manage embed codes and external playable content
 * @param vidiun.services.VidiunExternalMediaService
 */
VidiunClient.prototype.externalMedia = null;
/**
 * 
 * @param vidiun.services.VidiunDrmPolicyService
 */
VidiunClient.prototype.drmPolicy = null;
/**
 * 
 * @param vidiun.services.VidiunDrmProfileService
 */
VidiunClient.prototype.drmProfile = null;
/**
 * Retrieve information and invoke actions on Flavor Asset
 * @param vidiun.services.VidiunDrmLicenseAccessService
 */
VidiunClient.prototype.drmLicenseAccess = null;
/**
 * WidevineDrmService serves as a license proxy to a Widevine license server
 * @param vidiun.services.VidiunWidevineDrmService
 */
VidiunClient.prototype.widevineDrm = null;
/**
 * Enable serving live conversion profile to the Wowza servers as XML
 * @param vidiun.services.VidiunLiveConversionProfileService
 */
VidiunClient.prototype.liveConversionProfile = null;
/**
 * Schedule task service lets you create and manage scheduled task profiles
 * @param vidiun.services.VidiunScheduledTaskProfileService
 */
VidiunClient.prototype.scheduledTaskProfile = null;
/**
 * 
 * @param vidiun.services.VidiunPlayReadyDrmService
 */
VidiunClient.prototype.playReadyDrm = null;
/**
 * Integration service lets you dispatch integration tasks
 * @param vidiun.services.VidiunIntegrationService
 */
VidiunClient.prototype.integration = null;
/**
 * Business-Process server service lets you create and manage servers
 * @param vidiun.services.VidiunBusinessProcessServerService
 */
VidiunClient.prototype.businessProcessServer = null;
/**
 * Business-process case service lets you get information about processes
 * @param vidiun.services.VidiunBusinessProcessCaseService
 */
VidiunClient.prototype.businessProcessCase = null;
/**
 * Allows user to handle quizzes
 * @param vidiun.services.VidiunQuizService
 */
VidiunClient.prototype.quiz = null;
/**
 * ScheduleEvent service lets you create and manage schedule events
 * @param vidiun.services.VidiunScheduleEventService
 */
VidiunClient.prototype.scheduleEvent = null;
/**
 * ScheduleResource service lets you create and manage schedule events
 * @param vidiun.services.VidiunScheduleResourceService
 */
VidiunClient.prototype.scheduleResource = null;
/**
 * ScheduleEventResource service lets you create and manage connections between events and resources
 * @param vidiun.services.VidiunScheduleEventResourceService
 */
VidiunClient.prototype.scheduleEventResource = null;
/**
 * System partner service
 * @param vidiun.services.VidiunSystemPartnerService
 */
VidiunClient.prototype.systemPartner = null;
/**
 * Entry Admin service
 * @param vidiun.services.VidiunEntryAdminService
 */
VidiunClient.prototype.entryAdmin = null;
/**
 * UiConf Admin service
 * @param vidiun.services.VidiunUiConfAdminService
 */
VidiunClient.prototype.uiConfAdmin = null;
/**
 * 
 * @param vidiun.services.VidiunReportAdminService
 */
VidiunClient.prototype.reportAdmin = null;
/**
 * Internal Tools Service
 * @param vidiun.services.VidiunVidiunInternalToolsSystemHelperService
 */
VidiunClient.prototype.vidiunInternalToolsSystemHelper = null;
/**
 * The client constructor.
 * @param config the Vidiun configuration object holding partner credentials (type: VidiunConfiguration).
 */
VidiunClient.prototype.init = function(config){
	//call the super constructor:
	vidiun.VidiunClientBase.prototype.init.apply(this, arguments);
	//initialize client services:
	this.beacon = new vidiun.services.VidiunBeacon(this);
	this.accessControlProfile = new vidiun.services.VidiunAccessControlProfileService(this);
	this.accessControl = new vidiun.services.VidiunAccessControlService(this);
	this.adminUser = new vidiun.services.VidiunAdminUserService(this);
	this.analytics = new vidiun.services.VidiunAnalyticsService(this);
	this.appToken = new vidiun.services.VidiunAppTokenService(this);
	this.baseEntry = new vidiun.services.VidiunBaseEntryService(this);
	this.bulkUpload = new vidiun.services.VidiunBulkUploadService(this);
	this.categoryEntry = new vidiun.services.VidiunCategoryEntryService(this);
	this.category = new vidiun.services.VidiunCategoryService(this);
	this.categoryUser = new vidiun.services.VidiunCategoryUserService(this);
	this.conversionProfileAssetParams = new vidiun.services.VidiunConversionProfileAssetParamsService(this);
	this.conversionProfile = new vidiun.services.VidiunConversionProfileService(this);
	this.data = new vidiun.services.VidiunDataService(this);
	this.deliveryProfile = new vidiun.services.VidiunDeliveryProfileService(this);
	this.document = new vidiun.services.VidiunDocumentService(this);
	this.EmailIngestionProfile = new vidiun.services.VidiunEmailIngestionProfileService(this);
	this.entryServerNode = new vidiun.services.VidiunEntryServerNodeService(this);
	this.fileAsset = new vidiun.services.VidiunFileAssetService(this);
	this.flavorAsset = new vidiun.services.VidiunFlavorAssetService(this);
	this.flavorParamsOutput = new vidiun.services.VidiunFlavorParamsOutputService(this);
	this.flavorParams = new vidiun.services.VidiunFlavorParamsService(this);
	this.groupUser = new vidiun.services.VidiunGroupUserService(this);
	this.liveChannelSegment = new vidiun.services.VidiunLiveChannelSegmentService(this);
	this.liveChannel = new vidiun.services.VidiunLiveChannelService(this);
	this.liveReports = new vidiun.services.VidiunLiveReportsService(this);
	this.liveStats = new vidiun.services.VidiunLiveStatsService(this);
	this.liveStream = new vidiun.services.VidiunLiveStreamService(this);
	this.mediaInfo = new vidiun.services.VidiunMediaInfoService(this);
	this.media = new vidiun.services.VidiunMediaService(this);
	this.mixing = new vidiun.services.VidiunMixingService(this);
	this.notification = new vidiun.services.VidiunNotificationService(this);
	this.partner = new vidiun.services.VidiunPartnerService(this);
	this.permissionItem = new vidiun.services.VidiunPermissionItemService(this);
	this.permission = new vidiun.services.VidiunPermissionService(this);
	this.playlist = new vidiun.services.VidiunPlaylistService(this);
	this.report = new vidiun.services.VidiunReportService(this);
	this.responseProfile = new vidiun.services.VidiunResponseProfileService(this);
	this.schema = new vidiun.services.VidiunSchemaService(this);
	this.search = new vidiun.services.VidiunSearchService(this);
	this.serverNode = new vidiun.services.VidiunServerNodeService(this);
	this.session = new vidiun.services.VidiunSessionService(this);
	this.stats = new vidiun.services.VidiunStatsService(this);
	this.storageProfile = new vidiun.services.VidiunStorageProfileService(this);
	this.syndicationFeed = new vidiun.services.VidiunSyndicationFeedService(this);
	this.system = new vidiun.services.VidiunSystemService(this);
	this.thumbAsset = new vidiun.services.VidiunThumbAssetService(this);
	this.thumbParamsOutput = new vidiun.services.VidiunThumbParamsOutputService(this);
	this.thumbParams = new vidiun.services.VidiunThumbParamsService(this);
	this.uiConf = new vidiun.services.VidiunUiConfService(this);
	this.upload = new vidiun.services.VidiunUploadService(this);
	this.uploadToken = new vidiun.services.VidiunUploadTokenService(this);
	this.userEntry = new vidiun.services.VidiunUserEntryService(this);
	this.userRole = new vidiun.services.VidiunUserRoleService(this);
	this.user = new vidiun.services.VidiunUserService(this);
	this.widget = new vidiun.services.VidiunWidgetService(this);
	this.xInternal = new vidiun.services.VidiunXInternalService(this);
	this.metadata = new vidiun.services.VidiunMetadataService(this);
	this.metadataProfile = new vidiun.services.VidiunMetadataProfileService(this);
	this.metadataBatch = new vidiun.services.VidiunMetadataBatchService(this);
	this.documents = new vidiun.services.VidiunDocumentsService(this);
	this.annotation = new vidiun.services.VidiunAnnotationService(this);
	this.aspera = new vidiun.services.VidiunAsperaService(this);
	this.attachmentAsset = new vidiun.services.VidiunAttachmentAssetService(this);
	this.auditTrail = new vidiun.services.VidiunAuditTrailService(this);
	this.bulk = new vidiun.services.VidiunBulkService(this);
	this.captionAsset = new vidiun.services.VidiunCaptionAssetService(this);
	this.captionParams = new vidiun.services.VidiunCaptionParamsService(this);
	this.captionAssetItem = new vidiun.services.VidiunCaptionAssetItemService(this);
	this.captureSpace = new vidiun.services.VidiunCaptureSpaceService(this);
	this.distributionProfile = new vidiun.services.VidiunDistributionProfileService(this);
	this.entryDistribution = new vidiun.services.VidiunEntryDistributionService(this);
	this.distributionProvider = new vidiun.services.VidiunDistributionProviderService(this);
	this.genericDistributionProvider = new vidiun.services.VidiunGenericDistributionProviderService(this);
	this.genericDistributionProviderAction = new vidiun.services.VidiunGenericDistributionProviderActionService(this);
	this.contentDistributionBatch = new vidiun.services.VidiunContentDistributionBatchService(this);
	this.cuePoint = new vidiun.services.VidiunCuePointService(this);
	this.dropFolder = new vidiun.services.VidiunDropFolderService(this);
	this.dropFolderFile = new vidiun.services.VidiunDropFolderFileService(this);
	this.eventNotificationTemplate = new vidiun.services.VidiunEventNotificationTemplateService(this);
	this.fileSync = new vidiun.services.VidiunFileSyncService(this);
	this.like = new vidiun.services.VidiunLikeService(this);
	this.filesyncImportBatch = new vidiun.services.VidiunFilesyncImportBatchService(this);
	this.shortLink = new vidiun.services.VidiunShortLinkService(this);
	this.tag = new vidiun.services.VidiunTagService(this);
	this.varConsole = new vidiun.services.VidiunVarConsoleService(this);
	this.virusScanProfile = new vidiun.services.VidiunVirusScanProfileService(this);
	this.externalMedia = new vidiun.services.VidiunExternalMediaService(this);
	this.drmPolicy = new vidiun.services.VidiunDrmPolicyService(this);
	this.drmProfile = new vidiun.services.VidiunDrmProfileService(this);
	this.drmLicenseAccess = new vidiun.services.VidiunDrmLicenseAccessService(this);
	this.widevineDrm = new vidiun.services.VidiunWidevineDrmService(this);
	this.liveConversionProfile = new vidiun.services.VidiunLiveConversionProfileService(this);
	this.scheduledTaskProfile = new vidiun.services.VidiunScheduledTaskProfileService(this);
	this.playReadyDrm = new vidiun.services.VidiunPlayReadyDrmService(this);
	this.integration = new vidiun.services.VidiunIntegrationService(this);
	this.businessProcessServer = new vidiun.services.VidiunBusinessProcessServerService(this);
	this.businessProcessCase = new vidiun.services.VidiunBusinessProcessCaseService(this);
	this.quiz = new vidiun.services.VidiunQuizService(this);
	this.scheduleEvent = new vidiun.services.VidiunScheduleEventService(this);
	this.scheduleResource = new vidiun.services.VidiunScheduleResourceService(this);
	this.scheduleEventResource = new vidiun.services.VidiunScheduleEventResourceService(this);
	this.systemPartner = new vidiun.services.VidiunSystemPartnerService(this);
	this.entryAdmin = new vidiun.services.VidiunEntryAdminService(this);
	this.uiConfAdmin = new vidiun.services.VidiunUiConfAdminService(this);
	this.reportAdmin = new vidiun.services.VidiunReportAdminService(this);
	this.vidiunInternalToolsSystemHelper = new vidiun.services.VidiunVidiunInternalToolsSystemHelperService(this);
	this.clientConfiguration = {};
	this.requestConfiguration = {};
};
/**
 * @param string clientTag
 */
VidiunClient.prototype.setClientTag = function(clientTag){
	this.clientConfiguration['clientTag'] = clientTag;
};

/**
 * @return string
 */
VidiunClient.prototype.getClientTag = function(){
	return this.clientConfiguration['clientTag'];
};

/**
 * @param string apiVersion
 */
VidiunClient.prototype.setApiVersion = function(apiVersion){
	this.clientConfiguration['apiVersion'] = apiVersion;
};

/**
 * @return string
 */
VidiunClient.prototype.getApiVersion = function(){
	return this.clientConfiguration['apiVersion'];
};

/**
 * Impersonated partner id
 * 
 * @param int partnerId
 */
VidiunClient.prototype.setPartnerId = function(partnerId){
	this.requestConfiguration['partnerId'] = partnerId;
};

/**
 * Impersonated partner id
 * 
 * @return int
 */
VidiunClient.prototype.getPartnerId = function(){
	return this.requestConfiguration['partnerId'];
};

/**
 * Vidiun API session
 * 
 * @param string vs
 */
VidiunClient.prototype.setVs = function(vs){
	this.requestConfiguration['vs'] = vs;
};

/**
 * Vidiun API session
 * 
 * @return string
 */
VidiunClient.prototype.getVs = function(){
	return this.requestConfiguration['vs'];
};

/**
 * Vidiun API session
 * 
 * @param string sessionId
 */
VidiunClient.prototype.setSessionId = function(sessionId){
	this.requestConfiguration['vs'] = sessionId;
};

/**
 * Vidiun API session
 * 
 * @return string
 */
VidiunClient.prototype.getSessionId = function(){
	return this.requestConfiguration['vs'];
};

/**
 * Response profile - this attribute will be automatically unset after every API call.
 * 
 * @param VidiunBaseResponseProfile responseProfile
 */
VidiunClient.prototype.setResponseProfile = function(responseProfile){
	this.requestConfiguration['responseProfile'] = responseProfile;
};

/**
 * Response profile - this attribute will be automatically unset after every API call.
 * 
 * @return VidiunBaseResponseProfile
 */
VidiunClient.prototype.getResponseProfile = function(){
	return this.requestConfiguration['responseProfile'];
};

/**
 * Clear all volatile configuration parameters
 */
VidiunClient.prototype.resetRequest = function(){
	delete this.requestConfiguration['responseProfile'];
};

