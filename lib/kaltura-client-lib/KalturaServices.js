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
 *Class definition for the Vidiun service: beacon.
 * The available service actions:
 * @action add Add new beacon to database.
 * @action enhanceSearch.
 * @action getLast.
 */
function VidiunBeacon(client){
    VidiunBeacon.super_.call(this);
    this.init(client);
}

util.inherits(VidiunBeacon, vidiun.VidiunServiceBase);
module.exports.VidiunBeacon = VidiunBeacon;

/**
 * Add new access control profile.
 * @param beacon Beacon
 * @param shouldLog int  (optional, enum: VidiunNullableBoolean)
 * @param ttl int  (optional, default: 600)
 * @return bool
 */
VidiunBeacon.prototype.add = function(callback, beacon, shouldLog = 0, ttl = 600) {
    let vparams = {};
    this.client.addParam(vparams, 'beacon', vidiun.toParams(beacon));
    this.client.addParam(vparams, 'shouldLog', shouldLog);
    this.client.addParam(vparams, 'ttl', ttl);
    this.client.queueServiceActionCall('beacon_beacon', 'add', vparams);
    if (!this.client.isMultiRequest()){
        this.client.doQueue(callback);
    }
};

/**
 * .
 * @param filter BeaconEnhanceFilter  (optional, default: null)
 * @param pager FilterPager  (optional, default: null)
 * @return VidiunBeaconListResponse
 */
VidiunBeacon.prototype.enhanceSearch = function(callback, filter = null, pager = null) {
	let vparams = {};
    if (filter !== null){
        this.client.addParam(vparams, 'filter', vidiun.toParams(filter));
    }
    if (pager !== null){
        this.client.addParam(vparams, 'pager', vidiun.toParams(pager));
    }
    this.client.queueServiceActionCall('beacon_beacon', 'enhanceSearch', vparams);
    if (!this.client.isMultiRequest()){
        this.client.doQueue(callback);
    }
};

/**
 * .
 * @param filter BeaconFilter  (optional, default: null)
 * @param pager FilterPager  (optional, default: null)
 * @return VidiunBeaconListResponse
 */
VidiunBeacon.prototype.enhanceSearch = function(callback, filter = null, pager = null) {
    let vparams = {};
    if (filter !== null){
        this.client.addParam(vparams, 'filter', vidiun.toParams(filter));
    }
    if (pager !== null){
        this.client.addParam(vparams, 'pager', vidiun.toParams(pager));
    }
    this.client.queueServiceActionCall('beacon_beacon', 'getLast', vparams);
    if (!this.client.isMultiRequest()){
        this.client.doQueue(callback);
    }
};

/**
 *Class definition for the Vidiun service: accessControlProfile.
 * The available service actions:
 * @action add Add new access control profile.
 * @action get Get access control profile by id.
 * @action update Update access control profile by id.
 * @action delete Delete access control profile by id.
 * @action list List access control profiles by filter and pager.
 */
function VidiunAccessControlProfileService(client){
	VidiunAccessControlProfileService.super_.call(this);
	this.init(client);
}

util.inherits(VidiunAccessControlProfileService, vidiun.VidiunServiceBase);
module.exports.VidiunAccessControlProfileService = VidiunAccessControlProfileService;

/**
 * Add new access control profile.
 * @param accessControlProfile VidiunAccessControlProfile  (optional).
 * @return VidiunAccessControlProfile.
 */
VidiunAccessControlProfileService.prototype.add = function(callback, accessControlProfile){
	var vparams = {};
	this.client.addParam(vparams, 'accessControlProfile', vidiun.toParams(accessControlProfile));
	this.client.queueServiceActionCall('accesscontrolprofile', 'add', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Get access control profile by id.
 * @param id int  (optional).
 * @return VidiunAccessControlProfile.
 */
VidiunAccessControlProfileService.prototype.get = function(callback, id){
	var vparams = {};
	this.client.addParam(vparams, 'id', id);
	this.client.queueServiceActionCall('accesscontrolprofile', 'get', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Update access control profile by id.
 * @param id int  (optional).
 * @param accessControlProfile VidiunAccessControlProfile  (optional).
 * @return VidiunAccessControlProfile.
 */
VidiunAccessControlProfileService.prototype.update = function(callback, id, accessControlProfile){
	var vparams = {};
	this.client.addParam(vparams, 'id', id);
	this.client.addParam(vparams, 'accessControlProfile', vidiun.toParams(accessControlProfile));
	this.client.queueServiceActionCall('accesscontrolprofile', 'update', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Delete access control profile by id.
 * @param id int  (optional).
 * @return .
 */
VidiunAccessControlProfileService.prototype.deleteAction = function(callback, id){
	var vparams = {};
	this.client.addParam(vparams, 'id', id);
	this.client.queueServiceActionCall('accesscontrolprofile', 'delete', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * List access control profiles by filter and pager.
 * @param filter VidiunAccessControlProfileFilter  (optional, default: null).
 * @param pager VidiunFilterPager  (optional, default: null).
 * @return VidiunAccessControlProfileListResponse.
 */
VidiunAccessControlProfileService.prototype.listAction = function(callback, filter, pager){
	if(!filter){
		filter = null;
	}
	if(!pager){
		pager = null;
	}
	var vparams = {};
	if (filter !== null){
		this.client.addParam(vparams, 'filter', vidiun.toParams(filter));
	}
	if (pager !== null){
		this.client.addParam(vparams, 'pager', vidiun.toParams(pager));
	}
	this.client.queueServiceActionCall('accesscontrolprofile', 'list', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Vidiun service: accessControl.
 * The available service actions:
 * @action add Add new Access Control Profile.
 * @action get Get Access Control Profile by id.
 * @action update Update Access Control Profile by id.
 * @action delete Delete Access Control Profile by id.
 * @action list List Access Control Profiles by filter and pager.
 */
function VidiunAccessControlService(client){
	VidiunAccessControlService.super_.call(this);
	this.init(client);
}

util.inherits(VidiunAccessControlService, vidiun.VidiunServiceBase);
module.exports.VidiunAccessControlService = VidiunAccessControlService;

/**
 * Add new Access Control Profile.
 * @param accessControl VidiunAccessControl  (optional).
 * @return VidiunAccessControl.
 */
VidiunAccessControlService.prototype.add = function(callback, accessControl){
	var vparams = {};
	this.client.addParam(vparams, 'accessControl', vidiun.toParams(accessControl));
	this.client.queueServiceActionCall('accesscontrol', 'add', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Get Access Control Profile by id.
 * @param id int  (optional).
 * @return VidiunAccessControl.
 */
VidiunAccessControlService.prototype.get = function(callback, id){
	var vparams = {};
	this.client.addParam(vparams, 'id', id);
	this.client.queueServiceActionCall('accesscontrol', 'get', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Update Access Control Profile by id.
 * @param id int  (optional).
 * @param accessControl VidiunAccessControl  (optional).
 * @return VidiunAccessControl.
 */
VidiunAccessControlService.prototype.update = function(callback, id, accessControl){
	var vparams = {};
	this.client.addParam(vparams, 'id', id);
	this.client.addParam(vparams, 'accessControl', vidiun.toParams(accessControl));
	this.client.queueServiceActionCall('accesscontrol', 'update', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Delete Access Control Profile by id.
 * @param id int  (optional).
 * @return .
 */
VidiunAccessControlService.prototype.deleteAction = function(callback, id){
	var vparams = {};
	this.client.addParam(vparams, 'id', id);
	this.client.queueServiceActionCall('accesscontrol', 'delete', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * List Access Control Profiles by filter and pager.
 * @param filter VidiunAccessControlFilter  (optional, default: null).
 * @param pager VidiunFilterPager  (optional, default: null).
 * @return VidiunAccessControlListResponse.
 */
VidiunAccessControlService.prototype.listAction = function(callback, filter, pager){
	if(!filter){
		filter = null;
	}
	if(!pager){
		pager = null;
	}
	var vparams = {};
	if (filter !== null){
		this.client.addParam(vparams, 'filter', vidiun.toParams(filter));
	}
	if (pager !== null){
		this.client.addParam(vparams, 'pager', vidiun.toParams(pager));
	}
	this.client.queueServiceActionCall('accesscontrol', 'list', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Vidiun service: adminUser.
 * The available service actions:
 * @action updatePassword Update admin user password and email.
 * @action resetPassword Reset admin user password and send it to the users email address.
 * @action login Get an admin session using admin email and password (Used for login to the VMC application).
 * @action setInitialPassword Set initial users password.
 */
function VidiunAdminUserService(client){
	VidiunAdminUserService.super_.call(this);
	this.init(client);
}

util.inherits(VidiunAdminUserService, vidiun.VidiunServiceBase);
module.exports.VidiunAdminUserService = VidiunAdminUserService;

/**
 * Update admin user password and email.
 * @param email string  (optional).
 * @param password string  (optional).
 * @param newEmail string Optional, provide only when you want to update the email (optional).
 * @param newPassword string  (optional).
 * @return VidiunAdminUser.
 */
VidiunAdminUserService.prototype.updatePassword = function(callback, email, password, newEmail, newPassword){
	if(!newEmail){
		newEmail = '';
	}
	if(!newPassword){
		newPassword = '';
	}
	var vparams = {};
	this.client.addParam(vparams, 'email', email);
	this.client.addParam(vparams, 'password', password);
	this.client.addParam(vparams, 'newEmail', newEmail);
	this.client.addParam(vparams, 'newPassword', newPassword);
	this.client.queueServiceActionCall('adminuser', 'updatePassword', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Reset admin user password and send it to the users email address.
 * @param email string  (optional).
 * @return .
 */
VidiunAdminUserService.prototype.resetPassword = function(callback, email){
	var vparams = {};
	this.client.addParam(vparams, 'email', email);
	this.client.queueServiceActionCall('adminuser', 'resetPassword', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Get an admin session using admin email and password (Used for login to the VMC application).
 * @param email string  (optional).
 * @param password string  (optional).
 * @param partnerId int  (optional, default: null).
 * @return string.
 */
VidiunAdminUserService.prototype.login = function(callback, email, password, partnerId){
	if(!partnerId){
		partnerId = null;
	}
	var vparams = {};
	this.client.addParam(vparams, 'email', email);
	this.client.addParam(vparams, 'password', password);
	this.client.addParam(vparams, 'partnerId', partnerId);
	this.client.queueServiceActionCall('adminuser', 'login', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Set initial users password.
 * @param hashKey string  (optional).
 * @param newPassword string new password to set (optional).
 * @return .
 */
VidiunAdminUserService.prototype.setInitialPassword = function(callback, hashKey, newPassword){
	var vparams = {};
	this.client.addParam(vparams, 'hashKey', hashKey);
	this.client.addParam(vparams, 'newPassword', newPassword);
	this.client.queueServiceActionCall('adminuser', 'setInitialPassword', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Vidiun service: analytics.
 * The available service actions:
 * @action query report query action allows to get a analytics data for specific query dimensions, metrics and filters.
 */
function VidiunAnalyticsService(client){
	VidiunAnalyticsService.super_.call(this);
	this.init(client);
}

util.inherits(VidiunAnalyticsService, vidiun.VidiunServiceBase);
module.exports.VidiunAnalyticsService = VidiunAnalyticsService;

/**
 * report query action allows to get a analytics data for specific query dimensions, metrics and filters.
 * @param filter VidiunAnalyticsFilter the analytics query filter (optional).
 * @return VidiunReportResponse.
 */
VidiunAnalyticsService.prototype.query = function(callback, filter){
	var vparams = {};
	this.client.addParam(vparams, 'filter', vidiun.toParams(filter));
	this.client.queueServiceActionCall('analytics', 'query', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Vidiun service: appToken.
 * The available service actions:
 * @action add Add new application authentication token.
 * @action get Get application authentication token by id.
 * @action update Update application authentication token by id.
 * @action delete Delete application authentication token by id.
 * @action list List application authentication tokens by filter and pager.
 * @action startSession Starts a new VS (vidiun Session) based on application authentication token id.
 */
function VidiunAppTokenService(client){
	VidiunAppTokenService.super_.call(this);
	this.init(client);
}

util.inherits(VidiunAppTokenService, vidiun.VidiunServiceBase);
module.exports.VidiunAppTokenService = VidiunAppTokenService;

/**
 * Add new application authentication token.
 * @param appToken VidiunAppToken  (optional).
 * @return VidiunAppToken.
 */
VidiunAppTokenService.prototype.add = function(callback, appToken){
	var vparams = {};
	this.client.addParam(vparams, 'appToken', vidiun.toParams(appToken));
	this.client.queueServiceActionCall('apptoken', 'add', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Get application authentication token by id.
 * @param id string  (optional).
 * @return VidiunAppToken.
 */
VidiunAppTokenService.prototype.get = function(callback, id){
	var vparams = {};
	this.client.addParam(vparams, 'id', id);
	this.client.queueServiceActionCall('apptoken', 'get', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Update application authentication token by id.
 * @param id string  (optional).
 * @param appToken VidiunAppToken  (optional).
 * @return VidiunAppToken.
 */
VidiunAppTokenService.prototype.update = function(callback, id, appToken){
	var vparams = {};
	this.client.addParam(vparams, 'id', id);
	this.client.addParam(vparams, 'appToken', vidiun.toParams(appToken));
	this.client.queueServiceActionCall('apptoken', 'update', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Delete application authentication token by id.
 * @param id string  (optional).
 * @return .
 */
VidiunAppTokenService.prototype.deleteAction = function(callback, id){
	var vparams = {};
	this.client.addParam(vparams, 'id', id);
	this.client.queueServiceActionCall('apptoken', 'delete', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * List application authentication tokens by filter and pager.
 * @param filter VidiunAppTokenFilter  (optional, default: null).
 * @param pager VidiunFilterPager  (optional, default: null).
 * @return VidiunAppTokenListResponse.
 */
VidiunAppTokenService.prototype.listAction = function(callback, filter, pager){
	if(!filter){
		filter = null;
	}
	if(!pager){
		pager = null;
	}
	var vparams = {};
	if (filter !== null){
		this.client.addParam(vparams, 'filter', vidiun.toParams(filter));
	}
	if (pager !== null){
		this.client.addParam(vparams, 'pager', vidiun.toParams(pager));
	}
	this.client.queueServiceActionCall('apptoken', 'list', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Starts a new VS (vidiun Session) based on application authentication token id.
 * @param id string application token id (optional).
 * @param tokenHash string hashed token, built of sha1 on current VS concatenated with the application token (optional).
 * @param userId string session user id, will be ignored if a different user id already defined on the application token (optional, default: null).
 * @param type int session type, will be ignored if a different session type already defined on the application token (optional, enum: VidiunSessionType, default: null).
 * @param expiry int session expiry (in seconds), could be overwritten by shorter expiry of the application token and the session-expiry that defined on the application token (optional, default: null).
 * @return VidiunSessionInfo.
 */
VidiunAppTokenService.prototype.startSession = function(callback, id, tokenHash, userId, type, expiry){
	if(!userId){
		userId = null;
	}
	if(!type){
		type = null;
	}
	if(!expiry){
		expiry = null;
	}
	var vparams = {};
	this.client.addParam(vparams, 'id', id);
	this.client.addParam(vparams, 'tokenHash', tokenHash);
	this.client.addParam(vparams, 'userId', userId);
	this.client.addParam(vparams, 'type', type);
	this.client.addParam(vparams, 'expiry', expiry);
	this.client.queueServiceActionCall('apptoken', 'startSession', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Vidiun service: baseEntry.
 * The available service actions:
 * @action add Generic add entry, should be used when the uploaded entry type is not known.
 * @action addContent Attach content resource to entry in status NO_MEDIA.
 * @action addFromUploadedFile Generic add entry using an uploaded file, should be used when the uploaded entry type is not known.
 * @action get Get base entry by ID.
 * @action getRemotePaths Get remote storage existing paths for the asset.
 * @action update Update base entry. Only the properties that were set will be updated.
 * @action updateContent Update the content resource associated with the entry.
 * @action getByIds Get an array of VidiunBaseEntry objects by a comma-separated list of ids.
 * @action delete Delete an entry.
 * @action list List base entries by filter with paging support.
 * @action listByReferenceId List base entries by filter according to reference id.
 * @action count Count base entries by filter.
 * @action upload Upload a file to Vidiun, that can be used to create an entry.
 * @action updateThumbnailJpeg Update entry thumbnail using a raw jpeg file.
 * @action updateThumbnailFromUrl Update entry thumbnail using url.
 * @action updateThumbnailFromSourceEntry Update entry thumbnail from a different entry by a specified time offset (in seconds).
 * @action flag Flag inappropriate entry for moderation.
 * @action reject Reject the entry and mark the pending flags (if any) as moderated (this will make the entry non-playable).
 * @action approve Approve the entry and mark the pending flags (if any) as moderated (this will make the entry playable).
 * @action listFlags List all pending flags for the entry.
 * @action anonymousRank Anonymously rank an entry, no validation is done on duplicate rankings.
 * @action getContextData This action delivers entry-related data, based on the user's context: access control, restriction, playback format and storage information.
 * @action export .
 * @action index Index an entry by id.
 * @action clone Clone an entry with optional attributes to apply to the clone.
 */
function VidiunBaseEntryService(client){
	VidiunBaseEntryService.super_.call(this);
	this.init(client);
}

util.inherits(VidiunBaseEntryService, vidiun.VidiunServiceBase);
module.exports.VidiunBaseEntryService = VidiunBaseEntryService;

/**
 * Generic add entry, should be used when the uploaded entry type is not known.
 * @param entry VidiunBaseEntry  (optional).
 * @param type string  (optional, enum: VidiunEntryType, default: null).
 * @return VidiunBaseEntry.
 */
VidiunBaseEntryService.prototype.add = function(callback, entry, type){
	if(!type){
		type = null;
	}
	var vparams = {};
	this.client.addParam(vparams, 'entry', vidiun.toParams(entry));
	this.client.addParam(vparams, 'type', type);
	this.client.queueServiceActionCall('baseentry', 'add', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Attach content resource to entry in status NO_MEDIA.
 * @param entryId string  (optional).
 * @param resource VidiunResource  (optional).
 * @return VidiunBaseEntry.
 */
VidiunBaseEntryService.prototype.addContent = function(callback, entryId, resource){
	var vparams = {};
	this.client.addParam(vparams, 'entryId', entryId);
	this.client.addParam(vparams, 'resource', vidiun.toParams(resource));
	this.client.queueServiceActionCall('baseentry', 'addContent', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Generic add entry using an uploaded file, should be used when the uploaded entry type is not known.
 * @param entry VidiunBaseEntry  (optional).
 * @param uploadTokenId string  (optional).
 * @param type string  (optional, enum: VidiunEntryType, default: null).
 * @return VidiunBaseEntry.
 */
VidiunBaseEntryService.prototype.addFromUploadedFile = function(callback, entry, uploadTokenId, type){
	if(!type){
		type = null;
	}
	var vparams = {};
	this.client.addParam(vparams, 'entry', vidiun.toParams(entry));
	this.client.addParam(vparams, 'uploadTokenId', uploadTokenId);
	this.client.addParam(vparams, 'type', type);
	this.client.queueServiceActionCall('baseentry', 'addFromUploadedFile', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Get base entry by ID.
 * @param entryId string Entry id (optional).
 * @param version int Desired version of the data (optional, default: -1).
 * @return VidiunBaseEntry.
 */
VidiunBaseEntryService.prototype.get = function(callback, entryId, version){
	if(!version){
		version = -1;
	}
	var vparams = {};
	this.client.addParam(vparams, 'entryId', entryId);
	this.client.addParam(vparams, 'version', version);
	this.client.queueServiceActionCall('baseentry', 'get', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Get remote storage existing paths for the asset.
 * @param entryId string  (optional).
 * @return VidiunRemotePathListResponse.
 */
VidiunBaseEntryService.prototype.getRemotePaths = function(callback, entryId){
	var vparams = {};
	this.client.addParam(vparams, 'entryId', entryId);
	this.client.queueServiceActionCall('baseentry', 'getRemotePaths', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Update base entry. Only the properties that were set will be updated.
 * @param entryId string Entry id to update (optional).
 * @param baseEntry VidiunBaseEntry Base entry metadata to update (optional).
 * @return VidiunBaseEntry.
 */
VidiunBaseEntryService.prototype.update = function(callback, entryId, baseEntry){
	var vparams = {};
	this.client.addParam(vparams, 'entryId', entryId);
	this.client.addParam(vparams, 'baseEntry', vidiun.toParams(baseEntry));
	this.client.queueServiceActionCall('baseentry', 'update', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Update the content resource associated with the entry.
 * @param entryId string Entry id to update (optional).
 * @param resource VidiunResource Resource to be used to replace entry content (optional).
 * @param conversionProfileId int The conversion profile id to be used on the entry (optional, default: null).
 * @param advancedOptions VidiunEntryReplacementOptions Additional update content options (optional, default: null).
 * @return VidiunBaseEntry.
 */
VidiunBaseEntryService.prototype.updateContent = function(callback, entryId, resource, conversionProfileId, advancedOptions){
	if(!conversionProfileId){
		conversionProfileId = null;
	}
	if(!advancedOptions){
		advancedOptions = null;
	}
	var vparams = {};
	this.client.addParam(vparams, 'entryId', entryId);
	this.client.addParam(vparams, 'resource', vidiun.toParams(resource));
	this.client.addParam(vparams, 'conversionProfileId', conversionProfileId);
	if (advancedOptions !== null){
		this.client.addParam(vparams, 'advancedOptions', vidiun.toParams(advancedOptions));
	}
	this.client.queueServiceActionCall('baseentry', 'updateContent', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Get an array of VidiunBaseEntry objects by a comma-separated list of ids.
 * @param entryIds string Comma separated string of entry ids (optional).
 * @return array.
 */
VidiunBaseEntryService.prototype.getByIds = function(callback, entryIds){
	var vparams = {};
	this.client.addParam(vparams, 'entryIds', entryIds);
	this.client.queueServiceActionCall('baseentry', 'getByIds', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Delete an entry.
 * @param entryId string Entry id to delete (optional).
 * @return .
 */
VidiunBaseEntryService.prototype.deleteAction = function(callback, entryId){
	var vparams = {};
	this.client.addParam(vparams, 'entryId', entryId);
	this.client.queueServiceActionCall('baseentry', 'delete', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * List base entries by filter with paging support.
 * @param filter VidiunBaseEntryFilter Entry filter (optional, default: null).
 * @param pager VidiunFilterPager Pager (optional, default: null).
 * @return VidiunBaseEntryListResponse.
 */
VidiunBaseEntryService.prototype.listAction = function(callback, filter, pager){
	if(!filter){
		filter = null;
	}
	if(!pager){
		pager = null;
	}
	var vparams = {};
	if (filter !== null){
		this.client.addParam(vparams, 'filter', vidiun.toParams(filter));
	}
	if (pager !== null){
		this.client.addParam(vparams, 'pager', vidiun.toParams(pager));
	}
	this.client.queueServiceActionCall('baseentry', 'list', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * List base entries by filter according to reference id.
 * @param refId string Entry Reference ID (optional).
 * @param pager VidiunFilterPager Pager (optional, default: null).
 * @return VidiunBaseEntryListResponse.
 */
VidiunBaseEntryService.prototype.listByReferenceId = function(callback, refId, pager){
	if(!pager){
		pager = null;
	}
	var vparams = {};
	this.client.addParam(vparams, 'refId', refId);
	if (pager !== null){
		this.client.addParam(vparams, 'pager', vidiun.toParams(pager));
	}
	this.client.queueServiceActionCall('baseentry', 'listByReferenceId', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Count base entries by filter.
 * @param filter VidiunBaseEntryFilter Entry filter (optional, default: null).
 * @return int.
 */
VidiunBaseEntryService.prototype.count = function(callback, filter){
	if(!filter){
		filter = null;
	}
	var vparams = {};
	if (filter !== null){
		this.client.addParam(vparams, 'filter', vidiun.toParams(filter));
	}
	this.client.queueServiceActionCall('baseentry', 'count', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Upload a file to Vidiun, that can be used to create an entry.
 * @param fileData file The file data (optional).
 * @return string.
 */
VidiunBaseEntryService.prototype.upload = function(callback, fileData){
	var vparams = {};
	var vfiles = {};
	this.client.addParam(vfiles, 'fileData', fileData);
	this.client.queueServiceActionCall('baseentry', 'upload', vparams, vfiles);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Update entry thumbnail using a raw jpeg file.
 * @param entryId string Media entry id (optional).
 * @param fileData file Jpeg file data (optional).
 * @return VidiunBaseEntry.
 */
VidiunBaseEntryService.prototype.updateThumbnailJpeg = function(callback, entryId, fileData){
	var vparams = {};
	this.client.addParam(vparams, 'entryId', entryId);
	var vfiles = {};
	this.client.addParam(vfiles, 'fileData', fileData);
	this.client.queueServiceActionCall('baseentry', 'updateThumbnailJpeg', vparams, vfiles);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Update entry thumbnail using url.
 * @param entryId string Media entry id (optional).
 * @param url string file url (optional).
 * @return VidiunBaseEntry.
 */
VidiunBaseEntryService.prototype.updateThumbnailFromUrl = function(callback, entryId, url){
	var vparams = {};
	this.client.addParam(vparams, 'entryId', entryId);
	this.client.addParam(vparams, 'url', url);
	this.client.queueServiceActionCall('baseentry', 'updateThumbnailFromUrl', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Update entry thumbnail from a different entry by a specified time offset (in seconds).
 * @param entryId string Media entry id (optional).
 * @param sourceEntryId string Media entry id (optional).
 * @param timeOffset int Time offset (in seconds) (optional).
 * @return VidiunBaseEntry.
 */
VidiunBaseEntryService.prototype.updateThumbnailFromSourceEntry = function(callback, entryId, sourceEntryId, timeOffset){
	var vparams = {};
	this.client.addParam(vparams, 'entryId', entryId);
	this.client.addParam(vparams, 'sourceEntryId', sourceEntryId);
	this.client.addParam(vparams, 'timeOffset', timeOffset);
	this.client.queueServiceActionCall('baseentry', 'updateThumbnailFromSourceEntry', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Flag inappropriate entry for moderation.
 * @param moderationFlag VidiunModerationFlag  (optional).
 * @return .
 */
VidiunBaseEntryService.prototype.flag = function(callback, moderationFlag){
	var vparams = {};
	this.client.addParam(vparams, 'moderationFlag', vidiun.toParams(moderationFlag));
	this.client.queueServiceActionCall('baseentry', 'flag', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Reject the entry and mark the pending flags (if any) as moderated (this will make the entry non-playable).
 * @param entryId string  (optional).
 * @return .
 */
VidiunBaseEntryService.prototype.reject = function(callback, entryId){
	var vparams = {};
	this.client.addParam(vparams, 'entryId', entryId);
	this.client.queueServiceActionCall('baseentry', 'reject', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Approve the entry and mark the pending flags (if any) as moderated (this will make the entry playable).
 * @param entryId string  (optional).
 * @return .
 */
VidiunBaseEntryService.prototype.approve = function(callback, entryId){
	var vparams = {};
	this.client.addParam(vparams, 'entryId', entryId);
	this.client.queueServiceActionCall('baseentry', 'approve', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * List all pending flags for the entry.
 * @param entryId string  (optional).
 * @param pager VidiunFilterPager  (optional, default: null).
 * @return VidiunModerationFlagListResponse.
 */
VidiunBaseEntryService.prototype.listFlags = function(callback, entryId, pager){
	if(!pager){
		pager = null;
	}
	var vparams = {};
	this.client.addParam(vparams, 'entryId', entryId);
	if (pager !== null){
		this.client.addParam(vparams, 'pager', vidiun.toParams(pager));
	}
	this.client.queueServiceActionCall('baseentry', 'listFlags', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Anonymously rank an entry, no validation is done on duplicate rankings.
 * @param entryId string  (optional).
 * @param rank int  (optional).
 * @return .
 */
VidiunBaseEntryService.prototype.anonymousRank = function(callback, entryId, rank){
	var vparams = {};
	this.client.addParam(vparams, 'entryId', entryId);
	this.client.addParam(vparams, 'rank', rank);
	this.client.queueServiceActionCall('baseentry', 'anonymousRank', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * This action delivers entry-related data, based on the user's context: access control, restriction, playback format and storage information.
 * @param entryId string  (optional).
 * @param contextDataParams VidiunEntryContextDataParams  (optional).
 * @return VidiunEntryContextDataResult.
 */
VidiunBaseEntryService.prototype.getContextData = function(callback, entryId, contextDataParams){
	var vparams = {};
	this.client.addParam(vparams, 'entryId', entryId);
	this.client.addParam(vparams, 'contextDataParams', vidiun.toParams(contextDataParams));
	this.client.queueServiceActionCall('baseentry', 'getContextData', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * .
 * @param entryId string  (optional).
 * @param storageProfileId int  (optional).
 * @return VidiunBaseEntry.
 */
VidiunBaseEntryService.prototype.exportAction = function(callback, entryId, storageProfileId){
	var vparams = {};
	this.client.addParam(vparams, 'entryId', entryId);
	this.client.addParam(vparams, 'storageProfileId', storageProfileId);
	this.client.queueServiceActionCall('baseentry', 'export', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Index an entry by id.
 * @param id string  (optional).
 * @param shouldUpdate bool  (optional, default: true).
 * @return int.
 */
VidiunBaseEntryService.prototype.index = function(callback, id, shouldUpdate){
	if(!shouldUpdate){
		shouldUpdate = true;
	}
	var vparams = {};
	this.client.addParam(vparams, 'id', id);
	this.client.addParam(vparams, 'shouldUpdate', shouldUpdate);
	this.client.queueServiceActionCall('baseentry', 'index', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Clone an entry with optional attributes to apply to the clone.
 * @param entryId string Id of entry to clone (optional).
 * @param cloneOptions array  (optional, default: null).
 * @return VidiunBaseEntry.
 */
VidiunBaseEntryService.prototype.cloneAction = function(callback, entryId, cloneOptions){
	if(!cloneOptions){
		cloneOptions = null;
	}
	var vparams = {};
	this.client.addParam(vparams, 'entryId', entryId);
	if(cloneOptions !== null){
	for(var index in cloneOptions)
	{
		var obj = cloneOptions[index];
		this.client.addParam(vparams, 'cloneOptions:' + index, vidiun.toParams(obj));
	}
	}
	this.client.queueServiceActionCall('baseentry', 'clone', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Vidiun service: bulkUpload.
 * The available service actions:
 * @action add Add new bulk upload batch job
 * Conversion profile id can be specified in the API or in the CSV file, the one in the CSV file will be stronger.
 * If no conversion profile was specified, partner's default will be used.
 * @action get Get bulk upload batch job by id.
 * @action list List bulk upload batch jobs.
 * @action abort Aborts the bulk upload and all its child jobs.
 */
function VidiunBulkUploadService(client){
	VidiunBulkUploadService.super_.call(this);
	this.init(client);
}

util.inherits(VidiunBulkUploadService, vidiun.VidiunServiceBase);
module.exports.VidiunBulkUploadService = VidiunBulkUploadService;

/**
 * Add new bulk upload batch job
 * Conversion profile id can be specified in the API or in the CSV file, the one in the CSV file will be stronger.
 * If no conversion profile was specified, partner's default will be used.
 * @param conversionProfileId int Convertion profile id to use for converting the current bulk (-1 to use partner's default) (optional).
 * @param csvFileData file bulk upload file (optional).
 * @param bulkUploadType string  (optional, enum: VidiunBulkUploadType, default: null).
 * @param uploadedBy string  (optional, default: null).
 * @param fileName string Friendly name of the file, used to be recognized later in the logs (optional, default: null).
 * @return VidiunBulkUpload.
 */
VidiunBulkUploadService.prototype.add = function(callback, conversionProfileId, csvFileData, bulkUploadType, uploadedBy, fileName){
	if(!bulkUploadType){
		bulkUploadType = null;
	}
	if(!uploadedBy){
		uploadedBy = null;
	}
	if(!fileName){
		fileName = null;
	}
	var vparams = {};
	this.client.addParam(vparams, 'conversionProfileId', conversionProfileId);
	var vfiles = {};
	this.client.addParam(vfiles, 'csvFileData', csvFileData);
	this.client.addParam(vparams, 'bulkUploadType', bulkUploadType);
	this.client.addParam(vparams, 'uploadedBy', uploadedBy);
	this.client.addParam(vparams, 'fileName', fileName);
	this.client.queueServiceActionCall('bulkupload', 'add', vparams, vfiles);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Get bulk upload batch job by id.
 * @param id int  (optional).
 * @return VidiunBulkUpload.
 */
VidiunBulkUploadService.prototype.get = function(callback, id){
	var vparams = {};
	this.client.addParam(vparams, 'id', id);
	this.client.queueServiceActionCall('bulkupload', 'get', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * List bulk upload batch jobs.
 * @param pager VidiunFilterPager  (optional, default: null).
 * @return VidiunBulkUploadListResponse.
 */
VidiunBulkUploadService.prototype.listAction = function(callback, pager){
	if(!pager){
		pager = null;
	}
	var vparams = {};
	if (pager !== null){
		this.client.addParam(vparams, 'pager', vidiun.toParams(pager));
	}
	this.client.queueServiceActionCall('bulkupload', 'list', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Aborts the bulk upload and all its child jobs.
 * @param id int job id (optional).
 * @return VidiunBulkUpload.
 */
VidiunBulkUploadService.prototype.abort = function(callback, id){
	var vparams = {};
	this.client.addParam(vparams, 'id', id);
	this.client.queueServiceActionCall('bulkupload', 'abort', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Vidiun service: categoryEntry.
 * The available service actions:
 * @action add Add new CategoryEntry.
 * @action delete Delete CategoryEntry.
 * @action list List all categoryEntry.
 * @action index Index CategoryEntry by Id.
 * @action activate activate CategoryEntry when it is pending moderation.
 * @action reject activate CategoryEntry when it is pending moderation.
 * @action syncPrivacyContext update privacy context from the category.
 * @action addFromBulkUpload .
 */
function VidiunCategoryEntryService(client){
	VidiunCategoryEntryService.super_.call(this);
	this.init(client);
}

util.inherits(VidiunCategoryEntryService, vidiun.VidiunServiceBase);
module.exports.VidiunCategoryEntryService = VidiunCategoryEntryService;

/**
 * Add new CategoryEntry.
 * @param categoryEntry VidiunCategoryEntry  (optional).
 * @return VidiunCategoryEntry.
 */
VidiunCategoryEntryService.prototype.add = function(callback, categoryEntry){
	var vparams = {};
	this.client.addParam(vparams, 'categoryEntry', vidiun.toParams(categoryEntry));
	this.client.queueServiceActionCall('categoryentry', 'add', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Delete CategoryEntry.
 * @param entryId string  (optional).
 * @param categoryId int  (optional).
 * @return .
 */
VidiunCategoryEntryService.prototype.deleteAction = function(callback, entryId, categoryId){
	var vparams = {};
	this.client.addParam(vparams, 'entryId', entryId);
	this.client.addParam(vparams, 'categoryId', categoryId);
	this.client.queueServiceActionCall('categoryentry', 'delete', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * List all categoryEntry.
 * @param filter VidiunCategoryEntryFilter  (optional, default: null).
 * @param pager VidiunFilterPager  (optional, default: null).
 * @return VidiunCategoryEntryListResponse.
 */
VidiunCategoryEntryService.prototype.listAction = function(callback, filter, pager){
	if(!filter){
		filter = null;
	}
	if(!pager){
		pager = null;
	}
	var vparams = {};
	if (filter !== null){
		this.client.addParam(vparams, 'filter', vidiun.toParams(filter));
	}
	if (pager !== null){
		this.client.addParam(vparams, 'pager', vidiun.toParams(pager));
	}
	this.client.queueServiceActionCall('categoryentry', 'list', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Index CategoryEntry by Id.
 * @param entryId string  (optional).
 * @param categoryId int  (optional).
 * @param shouldUpdate bool  (optional, default: true).
 * @return int.
 */
VidiunCategoryEntryService.prototype.index = function(callback, entryId, categoryId, shouldUpdate){
	if(!shouldUpdate){
		shouldUpdate = true;
	}
	var vparams = {};
	this.client.addParam(vparams, 'entryId', entryId);
	this.client.addParam(vparams, 'categoryId', categoryId);
	this.client.addParam(vparams, 'shouldUpdate', shouldUpdate);
	this.client.queueServiceActionCall('categoryentry', 'index', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * activate CategoryEntry when it is pending moderation.
 * @param entryId string  (optional).
 * @param categoryId int  (optional).
 * @return .
 */
VidiunCategoryEntryService.prototype.activate = function(callback, entryId, categoryId){
	var vparams = {};
	this.client.addParam(vparams, 'entryId', entryId);
	this.client.addParam(vparams, 'categoryId', categoryId);
	this.client.queueServiceActionCall('categoryentry', 'activate', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * activate CategoryEntry when it is pending moderation.
 * @param entryId string  (optional).
 * @param categoryId int  (optional).
 * @return .
 */
VidiunCategoryEntryService.prototype.reject = function(callback, entryId, categoryId){
	var vparams = {};
	this.client.addParam(vparams, 'entryId', entryId);
	this.client.addParam(vparams, 'categoryId', categoryId);
	this.client.queueServiceActionCall('categoryentry', 'reject', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * update privacy context from the category.
 * @param entryId string  (optional).
 * @param categoryId int  (optional).
 * @return .
 */
VidiunCategoryEntryService.prototype.syncPrivacyContext = function(callback, entryId, categoryId){
	var vparams = {};
	this.client.addParam(vparams, 'entryId', entryId);
	this.client.addParam(vparams, 'categoryId', categoryId);
	this.client.queueServiceActionCall('categoryentry', 'syncPrivacyContext', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * .
 * @param bulkUploadData VidiunBulkServiceData  (optional).
 * @param bulkUploadCategoryEntryData VidiunBulkUploadCategoryEntryData  (optional, default: null).
 * @return VidiunBulkUpload.
 */
VidiunCategoryEntryService.prototype.addFromBulkUpload = function(callback, bulkUploadData, bulkUploadCategoryEntryData){
	if(!bulkUploadCategoryEntryData){
		bulkUploadCategoryEntryData = null;
	}
	var vparams = {};
	this.client.addParam(vparams, 'bulkUploadData', vidiun.toParams(bulkUploadData));
	if (bulkUploadCategoryEntryData !== null){
		this.client.addParam(vparams, 'bulkUploadCategoryEntryData', vidiun.toParams(bulkUploadCategoryEntryData));
	}
	this.client.queueServiceActionCall('categoryentry', 'addFromBulkUpload', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Vidiun service: category.
 * The available service actions:
 * @action add Add new Category.
 * @action get Get Category by id.
 * @action update Update Category.
 * @action delete Delete a Category.
 * @action list List all categories.
 * @action index Index Category by id.
 * @action move Move categories that belong to the same parent category to a target categroy - enabled only for vs with disable entitlement.
 * @action unlockCategories Unlock categories.
 * @action addFromBulkUpload .
 */
function VidiunCategoryService(client){
	VidiunCategoryService.super_.call(this);
	this.init(client);
}

util.inherits(VidiunCategoryService, vidiun.VidiunServiceBase);
module.exports.VidiunCategoryService = VidiunCategoryService;

/**
 * Add new Category.
 * @param category VidiunCategory  (optional).
 * @return VidiunCategory.
 */
VidiunCategoryService.prototype.add = function(callback, category){
	var vparams = {};
	this.client.addParam(vparams, 'category', vidiun.toParams(category));
	this.client.queueServiceActionCall('category', 'add', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Get Category by id.
 * @param id int  (optional).
 * @return VidiunCategory.
 */
VidiunCategoryService.prototype.get = function(callback, id){
	var vparams = {};
	this.client.addParam(vparams, 'id', id);
	this.client.queueServiceActionCall('category', 'get', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Update Category.
 * @param id int  (optional).
 * @param category VidiunCategory  (optional).
 * @return VidiunCategory.
 */
VidiunCategoryService.prototype.update = function(callback, id, category){
	var vparams = {};
	this.client.addParam(vparams, 'id', id);
	this.client.addParam(vparams, 'category', vidiun.toParams(category));
	this.client.queueServiceActionCall('category', 'update', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Delete a Category.
 * @param id int  (optional).
 * @param moveEntriesToParentCategory int  (optional, enum: VidiunNullableBoolean, default: 1).
 * @return .
 */
VidiunCategoryService.prototype.deleteAction = function(callback, id, moveEntriesToParentCategory){
	if(!moveEntriesToParentCategory){
		moveEntriesToParentCategory = 1;
	}
	var vparams = {};
	this.client.addParam(vparams, 'id', id);
	this.client.addParam(vparams, 'moveEntriesToParentCategory', moveEntriesToParentCategory);
	this.client.queueServiceActionCall('category', 'delete', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * List all categories.
 * @param filter VidiunCategoryFilter  (optional, default: null).
 * @param pager VidiunFilterPager  (optional, default: null).
 * @return VidiunCategoryListResponse.
 */
VidiunCategoryService.prototype.listAction = function(callback, filter, pager){
	if(!filter){
		filter = null;
	}
	if(!pager){
		pager = null;
	}
	var vparams = {};
	if (filter !== null){
		this.client.addParam(vparams, 'filter', vidiun.toParams(filter));
	}
	if (pager !== null){
		this.client.addParam(vparams, 'pager', vidiun.toParams(pager));
	}
	this.client.queueServiceActionCall('category', 'list', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Index Category by id.
 * @param id int  (optional).
 * @param shouldUpdate bool  (optional, default: true).
 * @return int.
 */
VidiunCategoryService.prototype.index = function(callback, id, shouldUpdate){
	if(!shouldUpdate){
		shouldUpdate = true;
	}
	var vparams = {};
	this.client.addParam(vparams, 'id', id);
	this.client.addParam(vparams, 'shouldUpdate', shouldUpdate);
	this.client.queueServiceActionCall('category', 'index', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Move categories that belong to the same parent category to a target categroy - enabled only for vs with disable entitlement.
 * @param categoryIds string  (optional).
 * @param targetCategoryParentId int  (optional).
 * @return VidiunCategoryListResponse.
 */
VidiunCategoryService.prototype.move = function(callback, categoryIds, targetCategoryParentId){
	var vparams = {};
	this.client.addParam(vparams, 'categoryIds', categoryIds);
	this.client.addParam(vparams, 'targetCategoryParentId', targetCategoryParentId);
	this.client.queueServiceActionCall('category', 'move', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Unlock categories.
 * @return .
 */
VidiunCategoryService.prototype.unlockCategories = function(callback){
	var vparams = {};
	this.client.queueServiceActionCall('category', 'unlockCategories', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * .
 * @param fileData file  (optional).
 * @param bulkUploadData VidiunBulkUploadJobData  (optional, default: null).
 * @param bulkUploadCategoryData VidiunBulkUploadCategoryData  (optional, default: null).
 * @return VidiunBulkUpload.
 */
VidiunCategoryService.prototype.addFromBulkUpload = function(callback, fileData, bulkUploadData, bulkUploadCategoryData){
	if(!bulkUploadData){
		bulkUploadData = null;
	}
	if(!bulkUploadCategoryData){
		bulkUploadCategoryData = null;
	}
	var vparams = {};
	var vfiles = {};
	this.client.addParam(vfiles, 'fileData', fileData);
	if (bulkUploadData !== null){
		this.client.addParam(vparams, 'bulkUploadData', vidiun.toParams(bulkUploadData));
	}
	if (bulkUploadCategoryData !== null){
		this.client.addParam(vparams, 'bulkUploadCategoryData', vidiun.toParams(bulkUploadCategoryData));
	}
	this.client.queueServiceActionCall('category', 'addFromBulkUpload', vparams, vfiles);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Vidiun service: categoryUser.
 * The available service actions:
 * @action add Add new CategoryUser.
 * @action get Get CategoryUser by id.
 * @action update Update CategoryUser by id.
 * @action delete Delete a CategoryUser.
 * @action activate activate CategoryUser.
 * @action deactivate reject CategoryUser.
 * @action list List all categories.
 * @action copyFromCategory Copy all memeber from parent category.
 * @action index Index CategoryUser by userid and category id.
 * @action addFromBulkUpload .
 */
function VidiunCategoryUserService(client){
	VidiunCategoryUserService.super_.call(this);
	this.init(client);
}

util.inherits(VidiunCategoryUserService, vidiun.VidiunServiceBase);
module.exports.VidiunCategoryUserService = VidiunCategoryUserService;

/**
 * Add new CategoryUser.
 * @param categoryUser VidiunCategoryUser  (optional).
 * @return VidiunCategoryUser.
 */
VidiunCategoryUserService.prototype.add = function(callback, categoryUser){
	var vparams = {};
	this.client.addParam(vparams, 'categoryUser', vidiun.toParams(categoryUser));
	this.client.queueServiceActionCall('categoryuser', 'add', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Get CategoryUser by id.
 * @param categoryId int  (optional).
 * @param userId string  (optional).
 * @return VidiunCategoryUser.
 */
VidiunCategoryUserService.prototype.get = function(callback, categoryId, userId){
	var vparams = {};
	this.client.addParam(vparams, 'categoryId', categoryId);
	this.client.addParam(vparams, 'userId', userId);
	this.client.queueServiceActionCall('categoryuser', 'get', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Update CategoryUser by id.
 * @param categoryId int  (optional).
 * @param userId string  (optional).
 * @param categoryUser VidiunCategoryUser  (optional).
 * @param override bool - to override manual changes (optional, default: false).
 * @return VidiunCategoryUser.
 */
VidiunCategoryUserService.prototype.update = function(callback, categoryId, userId, categoryUser, override){
	if(!override){
		override = false;
	}
	var vparams = {};
	this.client.addParam(vparams, 'categoryId', categoryId);
	this.client.addParam(vparams, 'userId', userId);
	this.client.addParam(vparams, 'categoryUser', vidiun.toParams(categoryUser));
	this.client.addParam(vparams, 'override', override);
	this.client.queueServiceActionCall('categoryuser', 'update', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Delete a CategoryUser.
 * @param categoryId int  (optional).
 * @param userId string  (optional).
 * @return .
 */
VidiunCategoryUserService.prototype.deleteAction = function(callback, categoryId, userId){
	var vparams = {};
	this.client.addParam(vparams, 'categoryId', categoryId);
	this.client.addParam(vparams, 'userId', userId);
	this.client.queueServiceActionCall('categoryuser', 'delete', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * activate CategoryUser.
 * @param categoryId int  (optional).
 * @param userId string  (optional).
 * @return VidiunCategoryUser.
 */
VidiunCategoryUserService.prototype.activate = function(callback, categoryId, userId){
	var vparams = {};
	this.client.addParam(vparams, 'categoryId', categoryId);
	this.client.addParam(vparams, 'userId', userId);
	this.client.queueServiceActionCall('categoryuser', 'activate', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * reject CategoryUser.
 * @param categoryId int  (optional).
 * @param userId string  (optional).
 * @return VidiunCategoryUser.
 */
VidiunCategoryUserService.prototype.deactivate = function(callback, categoryId, userId){
	var vparams = {};
	this.client.addParam(vparams, 'categoryId', categoryId);
	this.client.addParam(vparams, 'userId', userId);
	this.client.queueServiceActionCall('categoryuser', 'deactivate', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * List all categories.
 * @param filter VidiunCategoryUserFilter  (optional, default: null).
 * @param pager VidiunFilterPager  (optional, default: null).
 * @return VidiunCategoryUserListResponse.
 */
VidiunCategoryUserService.prototype.listAction = function(callback, filter, pager){
	if(!filter){
		filter = null;
	}
	if(!pager){
		pager = null;
	}
	var vparams = {};
	if (filter !== null){
		this.client.addParam(vparams, 'filter', vidiun.toParams(filter));
	}
	if (pager !== null){
		this.client.addParam(vparams, 'pager', vidiun.toParams(pager));
	}
	this.client.queueServiceActionCall('categoryuser', 'list', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Copy all memeber from parent category.
 * @param categoryId int  (optional).
 * @return .
 */
VidiunCategoryUserService.prototype.copyFromCategory = function(callback, categoryId){
	var vparams = {};
	this.client.addParam(vparams, 'categoryId', categoryId);
	this.client.queueServiceActionCall('categoryuser', 'copyFromCategory', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Index CategoryUser by userid and category id.
 * @param userId string  (optional).
 * @param categoryId int  (optional).
 * @param shouldUpdate bool  (optional, default: true).
 * @return int.
 */
VidiunCategoryUserService.prototype.index = function(callback, userId, categoryId, shouldUpdate){
	if(!shouldUpdate){
		shouldUpdate = true;
	}
	var vparams = {};
	this.client.addParam(vparams, 'userId', userId);
	this.client.addParam(vparams, 'categoryId', categoryId);
	this.client.addParam(vparams, 'shouldUpdate', shouldUpdate);
	this.client.queueServiceActionCall('categoryuser', 'index', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * .
 * @param fileData file  (optional).
 * @param bulkUploadData VidiunBulkUploadJobData  (optional, default: null).
 * @param bulkUploadCategoryUserData VidiunBulkUploadCategoryUserData  (optional, default: null).
 * @return VidiunBulkUpload.
 */
VidiunCategoryUserService.prototype.addFromBulkUpload = function(callback, fileData, bulkUploadData, bulkUploadCategoryUserData){
	if(!bulkUploadData){
		bulkUploadData = null;
	}
	if(!bulkUploadCategoryUserData){
		bulkUploadCategoryUserData = null;
	}
	var vparams = {};
	var vfiles = {};
	this.client.addParam(vfiles, 'fileData', fileData);
	if (bulkUploadData !== null){
		this.client.addParam(vparams, 'bulkUploadData', vidiun.toParams(bulkUploadData));
	}
	if (bulkUploadCategoryUserData !== null){
		this.client.addParam(vparams, 'bulkUploadCategoryUserData', vidiun.toParams(bulkUploadCategoryUserData));
	}
	this.client.queueServiceActionCall('categoryuser', 'addFromBulkUpload', vparams, vfiles);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Vidiun service: conversionProfileAssetParams.
 * The available service actions:
 * @action list Lists asset parmas of conversion profile by ID.
 * @action update Update asset parmas of conversion profile by ID.
 */
function VidiunConversionProfileAssetParamsService(client){
	VidiunConversionProfileAssetParamsService.super_.call(this);
	this.init(client);
}

util.inherits(VidiunConversionProfileAssetParamsService, vidiun.VidiunServiceBase);
module.exports.VidiunConversionProfileAssetParamsService = VidiunConversionProfileAssetParamsService;

/**
 * Lists asset parmas of conversion profile by ID.
 * @param filter VidiunConversionProfileAssetParamsFilter  (optional, default: null).
 * @param pager VidiunFilterPager  (optional, default: null).
 * @return VidiunConversionProfileAssetParamsListResponse.
 */
VidiunConversionProfileAssetParamsService.prototype.listAction = function(callback, filter, pager){
	if(!filter){
		filter = null;
	}
	if(!pager){
		pager = null;
	}
	var vparams = {};
	if (filter !== null){
		this.client.addParam(vparams, 'filter', vidiun.toParams(filter));
	}
	if (pager !== null){
		this.client.addParam(vparams, 'pager', vidiun.toParams(pager));
	}
	this.client.queueServiceActionCall('conversionprofileassetparams', 'list', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Update asset parmas of conversion profile by ID.
 * @param conversionProfileId int  (optional).
 * @param assetParamsId int  (optional).
 * @param conversionProfileAssetParams VidiunConversionProfileAssetParams  (optional).
 * @return VidiunConversionProfileAssetParams.
 */
VidiunConversionProfileAssetParamsService.prototype.update = function(callback, conversionProfileId, assetParamsId, conversionProfileAssetParams){
	var vparams = {};
	this.client.addParam(vparams, 'conversionProfileId', conversionProfileId);
	this.client.addParam(vparams, 'assetParamsId', assetParamsId);
	this.client.addParam(vparams, 'conversionProfileAssetParams', vidiun.toParams(conversionProfileAssetParams));
	this.client.queueServiceActionCall('conversionprofileassetparams', 'update', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Vidiun service: conversionProfile.
 * The available service actions:
 * @action setAsDefault Set Conversion Profile to be the partner default.
 * @action getDefault Get the partner's default conversion profile.
 * @action add Add new Conversion Profile.
 * @action get Get Conversion Profile by ID.
 * @action update Update Conversion Profile by ID.
 * @action delete Delete Conversion Profile by ID.
 * @action list List Conversion Profiles by filter with paging support.
 */
function VidiunConversionProfileService(client){
	VidiunConversionProfileService.super_.call(this);
	this.init(client);
}

util.inherits(VidiunConversionProfileService, vidiun.VidiunServiceBase);
module.exports.VidiunConversionProfileService = VidiunConversionProfileService;

/**
 * Set Conversion Profile to be the partner default.
 * @param id int  (optional).
 * @return VidiunConversionProfile.
 */
VidiunConversionProfileService.prototype.setAsDefault = function(callback, id){
	var vparams = {};
	this.client.addParam(vparams, 'id', id);
	this.client.queueServiceActionCall('conversionprofile', 'setAsDefault', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Get the partner's default conversion profile.
 * @param type string  (optional, enum: VidiunConversionProfileType, default: null).
 * @return VidiunConversionProfile.
 */
VidiunConversionProfileService.prototype.getDefault = function(callback, type){
	if(!type){
		type = null;
	}
	var vparams = {};
	this.client.addParam(vparams, 'type', type);
	this.client.queueServiceActionCall('conversionprofile', 'getDefault', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Add new Conversion Profile.
 * @param conversionProfile VidiunConversionProfile  (optional).
 * @return VidiunConversionProfile.
 */
VidiunConversionProfileService.prototype.add = function(callback, conversionProfile){
	var vparams = {};
	this.client.addParam(vparams, 'conversionProfile', vidiun.toParams(conversionProfile));
	this.client.queueServiceActionCall('conversionprofile', 'add', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Get Conversion Profile by ID.
 * @param id int  (optional).
 * @return VidiunConversionProfile.
 */
VidiunConversionProfileService.prototype.get = function(callback, id){
	var vparams = {};
	this.client.addParam(vparams, 'id', id);
	this.client.queueServiceActionCall('conversionprofile', 'get', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Update Conversion Profile by ID.
 * @param id int  (optional).
 * @param conversionProfile VidiunConversionProfile  (optional).
 * @return VidiunConversionProfile.
 */
VidiunConversionProfileService.prototype.update = function(callback, id, conversionProfile){
	var vparams = {};
	this.client.addParam(vparams, 'id', id);
	this.client.addParam(vparams, 'conversionProfile', vidiun.toParams(conversionProfile));
	this.client.queueServiceActionCall('conversionprofile', 'update', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Delete Conversion Profile by ID.
 * @param id int  (optional).
 * @return .
 */
VidiunConversionProfileService.prototype.deleteAction = function(callback, id){
	var vparams = {};
	this.client.addParam(vparams, 'id', id);
	this.client.queueServiceActionCall('conversionprofile', 'delete', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * List Conversion Profiles by filter with paging support.
 * @param filter VidiunConversionProfileFilter  (optional, default: null).
 * @param pager VidiunFilterPager  (optional, default: null).
 * @return VidiunConversionProfileListResponse.
 */
VidiunConversionProfileService.prototype.listAction = function(callback, filter, pager){
	if(!filter){
		filter = null;
	}
	if(!pager){
		pager = null;
	}
	var vparams = {};
	if (filter !== null){
		this.client.addParam(vparams, 'filter', vidiun.toParams(filter));
	}
	if (pager !== null){
		this.client.addParam(vparams, 'pager', vidiun.toParams(pager));
	}
	this.client.queueServiceActionCall('conversionprofile', 'list', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Vidiun service: data.
 * The available service actions:
 * @action add Adds a new data entry.
 * @action get Get data entry by ID.
 * @action update Update data entry. Only the properties that were set will be updated.
 * @action delete Delete a data entry.
 * @action list List data entries by filter with paging support.
 */
function VidiunDataService(client){
	VidiunDataService.super_.call(this);
	this.init(client);
}

util.inherits(VidiunDataService, vidiun.VidiunServiceBase);
module.exports.VidiunDataService = VidiunDataService;

/**
 * Adds a new data entry.
 * @param dataEntry VidiunDataEntry Data entry (optional).
 * @return VidiunDataEntry.
 */
VidiunDataService.prototype.add = function(callback, dataEntry){
	var vparams = {};
	this.client.addParam(vparams, 'dataEntry', vidiun.toParams(dataEntry));
	this.client.queueServiceActionCall('data', 'add', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Get data entry by ID.
 * @param entryId string Data entry id (optional).
 * @param version int Desired version of the data (optional, default: -1).
 * @return VidiunDataEntry.
 */
VidiunDataService.prototype.get = function(callback, entryId, version){
	if(!version){
		version = -1;
	}
	var vparams = {};
	this.client.addParam(vparams, 'entryId', entryId);
	this.client.addParam(vparams, 'version', version);
	this.client.queueServiceActionCall('data', 'get', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Update data entry. Only the properties that were set will be updated.
 * @param entryId string Data entry id to update (optional).
 * @param documentEntry VidiunDataEntry Data entry metadata to update (optional).
 * @return VidiunDataEntry.
 */
VidiunDataService.prototype.update = function(callback, entryId, documentEntry){
	var vparams = {};
	this.client.addParam(vparams, 'entryId', entryId);
	this.client.addParam(vparams, 'documentEntry', vidiun.toParams(documentEntry));
	this.client.queueServiceActionCall('data', 'update', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Delete a data entry.
 * @param entryId string Data entry id to delete (optional).
 * @return .
 */
VidiunDataService.prototype.deleteAction = function(callback, entryId){
	var vparams = {};
	this.client.addParam(vparams, 'entryId', entryId);
	this.client.queueServiceActionCall('data', 'delete', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * List data entries by filter with paging support.
 * @param filter VidiunDataEntryFilter Document entry filter (optional, default: null).
 * @param pager VidiunFilterPager Pager (optional, default: null).
 * @return VidiunDataListResponse.
 */
VidiunDataService.prototype.listAction = function(callback, filter, pager){
	if(!filter){
		filter = null;
	}
	if(!pager){
		pager = null;
	}
	var vparams = {};
	if (filter !== null){
		this.client.addParam(vparams, 'filter', vidiun.toParams(filter));
	}
	if (pager !== null){
		this.client.addParam(vparams, 'pager', vidiun.toParams(pager));
	}
	this.client.queueServiceActionCall('data', 'list', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Vidiun service: deliveryProfile.
 * The available service actions:
 * @action add Add new delivery.
 * @action update Update exisiting delivery.
 * @action get Get delivery by id.
 * @action clone Add delivery based on existing delivery.
 * Must provide valid sourceDeliveryId.
 * @action list Retrieve a list of available delivery depends on the filter given.
 */
function VidiunDeliveryProfileService(client){
	VidiunDeliveryProfileService.super_.call(this);
	this.init(client);
}

util.inherits(VidiunDeliveryProfileService, vidiun.VidiunServiceBase);
module.exports.VidiunDeliveryProfileService = VidiunDeliveryProfileService;

/**
 * Add new delivery.
 * @param delivery VidiunDeliveryProfile  (optional).
 * @return VidiunDeliveryProfile.
 */
VidiunDeliveryProfileService.prototype.add = function(callback, delivery){
	var vparams = {};
	this.client.addParam(vparams, 'delivery', vidiun.toParams(delivery));
	this.client.queueServiceActionCall('deliveryprofile', 'add', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Update exisiting delivery.
 * @param id string  (optional).
 * @param delivery VidiunDeliveryProfile  (optional).
 * @return VidiunDeliveryProfile.
 */
VidiunDeliveryProfileService.prototype.update = function(callback, id, delivery){
	var vparams = {};
	this.client.addParam(vparams, 'id', id);
	this.client.addParam(vparams, 'delivery', vidiun.toParams(delivery));
	this.client.queueServiceActionCall('deliveryprofile', 'update', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Get delivery by id.
 * @param id string  (optional).
 * @return VidiunDeliveryProfile.
 */
VidiunDeliveryProfileService.prototype.get = function(callback, id){
	var vparams = {};
	this.client.addParam(vparams, 'id', id);
	this.client.queueServiceActionCall('deliveryprofile', 'get', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Add delivery based on existing delivery.
 * Must provide valid sourceDeliveryId.
 * @param deliveryId int  (optional).
 * @return VidiunDeliveryProfile.
 */
VidiunDeliveryProfileService.prototype.cloneAction = function(callback, deliveryId){
	var vparams = {};
	this.client.addParam(vparams, 'deliveryId', deliveryId);
	this.client.queueServiceActionCall('deliveryprofile', 'clone', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Retrieve a list of available delivery depends on the filter given.
 * @param filter VidiunDeliveryProfileFilter  (optional, default: null).
 * @param pager VidiunFilterPager  (optional, default: null).
 * @return VidiunDeliveryProfileListResponse.
 */
VidiunDeliveryProfileService.prototype.listAction = function(callback, filter, pager){
	if(!filter){
		filter = null;
	}
	if(!pager){
		pager = null;
	}
	var vparams = {};
	if (filter !== null){
		this.client.addParam(vparams, 'filter', vidiun.toParams(filter));
	}
	if (pager !== null){
		this.client.addParam(vparams, 'pager', vidiun.toParams(pager));
	}
	this.client.queueServiceActionCall('deliveryprofile', 'list', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Vidiun service: document.
 * The available service actions:
 * @action addFromUploadedFile Add new document entry after the specific document file was uploaded and the upload token id exists.
 * @action addFromEntry Copy entry into new entry.
 * @action addFromFlavorAsset Copy flavor asset into new entry.
 * @action convert Convert entry.
 * @action get Get document entry by ID.
 * @action update Update document entry. Only the properties that were set will be updated.
 * @action delete Delete a document entry.
 * @action list List document entries by filter with paging support.
 * @action upload Upload a document file to Vidiun, then the file can be used to create a document entry.
 * @action convertPptToSwf This will queue a batch job for converting the document file to swf
 * Returns the URL where the new swf will be available.
 * @action updateContent Replace content associated with the given document entry.
 * @action approveReplace Approves document replacement.
 * @action cancelReplace Cancels document replacement.
 */
function VidiunDocumentService(client){
	VidiunDocumentService.super_.call(this);
	this.init(client);
}

util.inherits(VidiunDocumentService, vidiun.VidiunServiceBase);
module.exports.VidiunDocumentService = VidiunDocumentService;

/**
 * Add new document entry after the specific document file was uploaded and the upload token id exists.
 * @param documentEntry VidiunDocumentEntry Document entry metadata (optional).
 * @param uploadTokenId string Upload token id (optional).
 * @return VidiunDocumentEntry.
 */
VidiunDocumentService.prototype.addFromUploadedFile = function(callback, documentEntry, uploadTokenId){
	var vparams = {};
	this.client.addParam(vparams, 'documentEntry', vidiun.toParams(documentEntry));
	this.client.addParam(vparams, 'uploadTokenId', uploadTokenId);
	this.client.queueServiceActionCall('document', 'addFromUploadedFile', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Copy entry into new entry.
 * @param sourceEntryId string Document entry id to copy from (optional).
 * @param documentEntry VidiunDocumentEntry Document entry metadata (optional, default: null).
 * @param sourceFlavorParamsId int The flavor to be used as the new entry source, source flavor will be used if not specified (optional, default: null).
 * @return VidiunDocumentEntry.
 */
VidiunDocumentService.prototype.addFromEntry = function(callback, sourceEntryId, documentEntry, sourceFlavorParamsId){
	if(!documentEntry){
		documentEntry = null;
	}
	if(!sourceFlavorParamsId){
		sourceFlavorParamsId = null;
	}
	var vparams = {};
	this.client.addParam(vparams, 'sourceEntryId', sourceEntryId);
	if (documentEntry !== null){
		this.client.addParam(vparams, 'documentEntry', vidiun.toParams(documentEntry));
	}
	this.client.addParam(vparams, 'sourceFlavorParamsId', sourceFlavorParamsId);
	this.client.queueServiceActionCall('document', 'addFromEntry', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Copy flavor asset into new entry.
 * @param sourceFlavorAssetId string Flavor asset id to be used as the new entry source (optional).
 * @param documentEntry VidiunDocumentEntry Document entry metadata (optional, default: null).
 * @return VidiunDocumentEntry.
 */
VidiunDocumentService.prototype.addFromFlavorAsset = function(callback, sourceFlavorAssetId, documentEntry){
	if(!documentEntry){
		documentEntry = null;
	}
	var vparams = {};
	this.client.addParam(vparams, 'sourceFlavorAssetId', sourceFlavorAssetId);
	if (documentEntry !== null){
		this.client.addParam(vparams, 'documentEntry', vidiun.toParams(documentEntry));
	}
	this.client.queueServiceActionCall('document', 'addFromFlavorAsset', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Convert entry.
 * @param entryId string Document entry id (optional).
 * @param conversionProfileId int  (optional, default: null).
 * @param dynamicConversionAttributes array  (optional, default: null).
 * @return bigint.
 */
VidiunDocumentService.prototype.convert = function(callback, entryId, conversionProfileId, dynamicConversionAttributes){
	if(!conversionProfileId){
		conversionProfileId = null;
	}
	if(!dynamicConversionAttributes){
		dynamicConversionAttributes = null;
	}
	var vparams = {};
	this.client.addParam(vparams, 'entryId', entryId);
	this.client.addParam(vparams, 'conversionProfileId', conversionProfileId);
	if(dynamicConversionAttributes !== null){
	for(var index in dynamicConversionAttributes)
	{
		var obj = dynamicConversionAttributes[index];
		this.client.addParam(vparams, 'dynamicConversionAttributes:' + index, vidiun.toParams(obj));
	}
	}
	this.client.queueServiceActionCall('document', 'convert', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Get document entry by ID.
 * @param entryId string Document entry id (optional).
 * @param version int Desired version of the data (optional, default: -1).
 * @return VidiunDocumentEntry.
 */
VidiunDocumentService.prototype.get = function(callback, entryId, version){
	if(!version){
		version = -1;
	}
	var vparams = {};
	this.client.addParam(vparams, 'entryId', entryId);
	this.client.addParam(vparams, 'version', version);
	this.client.queueServiceActionCall('document', 'get', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Update document entry. Only the properties that were set will be updated.
 * @param entryId string Document entry id to update (optional).
 * @param documentEntry VidiunDocumentEntry Document entry metadata to update (optional).
 * @return VidiunDocumentEntry.
 */
VidiunDocumentService.prototype.update = function(callback, entryId, documentEntry){
	var vparams = {};
	this.client.addParam(vparams, 'entryId', entryId);
	this.client.addParam(vparams, 'documentEntry', vidiun.toParams(documentEntry));
	this.client.queueServiceActionCall('document', 'update', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Delete a document entry.
 * @param entryId string Document entry id to delete (optional).
 * @return .
 */
VidiunDocumentService.prototype.deleteAction = function(callback, entryId){
	var vparams = {};
	this.client.addParam(vparams, 'entryId', entryId);
	this.client.queueServiceActionCall('document', 'delete', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * List document entries by filter with paging support.
 * @param filter VidiunDocumentEntryFilter Document entry filter (optional, default: null).
 * @param pager VidiunFilterPager Pager (optional, default: null).
 * @return VidiunDocumentListResponse.
 */
VidiunDocumentService.prototype.listAction = function(callback, filter, pager){
	if(!filter){
		filter = null;
	}
	if(!pager){
		pager = null;
	}
	var vparams = {};
	if (filter !== null){
		this.client.addParam(vparams, 'filter', vidiun.toParams(filter));
	}
	if (pager !== null){
		this.client.addParam(vparams, 'pager', vidiun.toParams(pager));
	}
	this.client.queueServiceActionCall('document', 'list', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Upload a document file to Vidiun, then the file can be used to create a document entry.
 * @param fileData file The file data (optional).
 * @return string.
 */
VidiunDocumentService.prototype.upload = function(callback, fileData){
	var vparams = {};
	var vfiles = {};
	this.client.addParam(vfiles, 'fileData', fileData);
	this.client.queueServiceActionCall('document', 'upload', vparams, vfiles);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * This will queue a batch job for converting the document file to swf
 * Returns the URL where the new swf will be available.
 * @param entryId string  (optional).
 * @return string.
 */
VidiunDocumentService.prototype.convertPptToSwf = function(callback, entryId){
	var vparams = {};
	this.client.addParam(vparams, 'entryId', entryId);
	this.client.queueServiceActionCall('document', 'convertPptToSwf', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Replace content associated with the given document entry.
 * @param entryId string document entry id to update (optional).
 * @param resource VidiunResource Resource to be used to replace entry doc content (optional).
 * @param conversionProfileId int The conversion profile id to be used on the entry (optional, default: null).
 * @return VidiunDocumentEntry.
 */
VidiunDocumentService.prototype.updateContent = function(callback, entryId, resource, conversionProfileId){
	if(!conversionProfileId){
		conversionProfileId = null;
	}
	var vparams = {};
	this.client.addParam(vparams, 'entryId', entryId);
	this.client.addParam(vparams, 'resource', vidiun.toParams(resource));
	this.client.addParam(vparams, 'conversionProfileId', conversionProfileId);
	this.client.queueServiceActionCall('document', 'updateContent', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Approves document replacement.
 * @param entryId string document entry id to replace (optional).
 * @return VidiunDocumentEntry.
 */
VidiunDocumentService.prototype.approveReplace = function(callback, entryId){
	var vparams = {};
	this.client.addParam(vparams, 'entryId', entryId);
	this.client.queueServiceActionCall('document', 'approveReplace', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Cancels document replacement.
 * @param entryId string Document entry id to cancel (optional).
 * @return VidiunDocumentEntry.
 */
VidiunDocumentService.prototype.cancelReplace = function(callback, entryId){
	var vparams = {};
	this.client.addParam(vparams, 'entryId', entryId);
	this.client.queueServiceActionCall('document', 'cancelReplace', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Vidiun service: EmailIngestionProfile.
 * The available service actions:
 * @action add EmailIngestionProfile Add action allows you to add a EmailIngestionProfile to Vidiun DB.
 * @action getByEmailAddress Retrieve a EmailIngestionProfile by email address.
 * @action get Retrieve a EmailIngestionProfile by id.
 * @action update Update an existing EmailIngestionProfile.
 * @action delete Delete an existing EmailIngestionProfile.
 * @action addMediaEntry add VidiunMediaEntry from email ingestion.
 */
function VidiunEmailIngestionProfileService(client){
	VidiunEmailIngestionProfileService.super_.call(this);
	this.init(client);
}

util.inherits(VidiunEmailIngestionProfileService, vidiun.VidiunServiceBase);
module.exports.VidiunEmailIngestionProfileService = VidiunEmailIngestionProfileService;

/**
 * EmailIngestionProfile Add action allows you to add a EmailIngestionProfile to Vidiun DB.
 * @param EmailIP VidiunEmailIngestionProfile Mandatory input parameter of type VidiunEmailIngestionProfile (optional).
 * @return VidiunEmailIngestionProfile.
 */
VidiunEmailIngestionProfileService.prototype.add = function(callback, EmailIP){
	var vparams = {};
	this.client.addParam(vparams, 'EmailIP', vidiun.toParams(EmailIP));
	this.client.queueServiceActionCall('emailingestionprofile', 'add', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Retrieve a EmailIngestionProfile by email address.
 * @param emailAddress string  (optional).
 * @return VidiunEmailIngestionProfile.
 */
VidiunEmailIngestionProfileService.prototype.getByEmailAddress = function(callback, emailAddress){
	var vparams = {};
	this.client.addParam(vparams, 'emailAddress', emailAddress);
	this.client.queueServiceActionCall('emailingestionprofile', 'getByEmailAddress', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Retrieve a EmailIngestionProfile by id.
 * @param id int  (optional).
 * @return VidiunEmailIngestionProfile.
 */
VidiunEmailIngestionProfileService.prototype.get = function(callback, id){
	var vparams = {};
	this.client.addParam(vparams, 'id', id);
	this.client.queueServiceActionCall('emailingestionprofile', 'get', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Update an existing EmailIngestionProfile.
 * @param id int  (optional).
 * @param EmailIP VidiunEmailIngestionProfile  (optional).
 * @return VidiunEmailIngestionProfile.
 */
VidiunEmailIngestionProfileService.prototype.update = function(callback, id, EmailIP){
	var vparams = {};
	this.client.addParam(vparams, 'id', id);
	this.client.addParam(vparams, 'EmailIP', vidiun.toParams(EmailIP));
	this.client.queueServiceActionCall('emailingestionprofile', 'update', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Delete an existing EmailIngestionProfile.
 * @param id int  (optional).
 * @return .
 */
VidiunEmailIngestionProfileService.prototype.deleteAction = function(callback, id){
	var vparams = {};
	this.client.addParam(vparams, 'id', id);
	this.client.queueServiceActionCall('emailingestionprofile', 'delete', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * add VidiunMediaEntry from email ingestion.
 * @param mediaEntry VidiunMediaEntry Media entry metadata (optional).
 * @param uploadTokenId string Upload token id (optional).
 * @param emailProfId int  (optional).
 * @param fromAddress string  (optional).
 * @param emailMsgId string  (optional).
 * @return VidiunMediaEntry.
 */
VidiunEmailIngestionProfileService.prototype.addMediaEntry = function(callback, mediaEntry, uploadTokenId, emailProfId, fromAddress, emailMsgId){
	var vparams = {};
	this.client.addParam(vparams, 'mediaEntry', vidiun.toParams(mediaEntry));
	this.client.addParam(vparams, 'uploadTokenId', uploadTokenId);
	this.client.addParam(vparams, 'emailProfId', emailProfId);
	this.client.addParam(vparams, 'fromAddress', fromAddress);
	this.client.addParam(vparams, 'emailMsgId', emailMsgId);
	this.client.queueServiceActionCall('emailingestionprofile', 'addMediaEntry', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Vidiun service: entryServerNode.
 * The available service actions:
 * @action update .
 * @action updateStatus Update response profile status by id.
 * @action list .
 * @action get .
 */
function VidiunEntryServerNodeService(client){
	VidiunEntryServerNodeService.super_.call(this);
	this.init(client);
}

util.inherits(VidiunEntryServerNodeService, vidiun.VidiunServiceBase);
module.exports.VidiunEntryServerNodeService = VidiunEntryServerNodeService;

/**
 * .
 * @param id int  (optional).
 * @param entryServerNode VidiunEntryServerNode  (optional).
 * @return VidiunEntryServerNode.
 */
VidiunEntryServerNodeService.prototype.update = function(callback, id, entryServerNode){
	var vparams = {};
	this.client.addParam(vparams, 'id', id);
	this.client.addParam(vparams, 'entryServerNode', vidiun.toParams(entryServerNode));
	this.client.queueServiceActionCall('entryservernode', 'update', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 * .
 * @param id int 
 * @param status int  (optional, enum: VidiunEntryServerNodeStatus).
 * @return VidiunEntryServerNode.
 */
VidiunEntryServerNodeService.prototype.updateStatus = function(callback, id, entryServerNodeStatus){
	var vparams = {};
	this.client.addParam(vparams, 'id', id);
	this.client.addParam(vparams, 'status', entryServerNodeStatus);
	this.client.queueServiceActionCall('entryservernode', 'updateStatus', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * .
 * @param filter VidiunEntryServerNodeFilter  (optional, default: null).
 * @param pager VidiunFilterPager  (optional, default: null).
 * @return VidiunEntryServerNodeListResponse.
 */
VidiunEntryServerNodeService.prototype.listAction = function(callback, filter, pager){
	if(!filter){
		filter = null;
	}
	if(!pager){
		pager = null;
	}
	var vparams = {};
	if (filter !== null){
		this.client.addParam(vparams, 'filter', vidiun.toParams(filter));
	}
	if (pager !== null){
		this.client.addParam(vparams, 'pager', vidiun.toParams(pager));
	}
	this.client.queueServiceActionCall('entryservernode', 'list', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * .
 * @param id string  (optional).
 * @return VidiunEntryServerNode.
 */
VidiunEntryServerNodeService.prototype.get = function(callback, id){
	var vparams = {};
	this.client.addParam(vparams, 'id', id);
	this.client.queueServiceActionCall('entryservernode', 'get', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Vidiun service: fileAsset.
 * The available service actions:
 * @action add Add new file asset.
 * @action get Get file asset by id.
 * @action update Update file asset by id.
 * @action delete Delete file asset by id.
 * @action setContent Set content of file asset.
 * @action list List file assets by filter and pager.
 */
function VidiunFileAssetService(client){
	VidiunFileAssetService.super_.call(this);
	this.init(client);
}

util.inherits(VidiunFileAssetService, vidiun.VidiunServiceBase);
module.exports.VidiunFileAssetService = VidiunFileAssetService;

/**
 * Add new file asset.
 * @param fileAsset VidiunFileAsset  (optional).
 * @return VidiunFileAsset.
 */
VidiunFileAssetService.prototype.add = function(callback, fileAsset){
	var vparams = {};
	this.client.addParam(vparams, 'fileAsset', vidiun.toParams(fileAsset));
	this.client.queueServiceActionCall('fileasset', 'add', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Get file asset by id.
 * @param id int  (optional).
 * @return VidiunFileAsset.
 */
VidiunFileAssetService.prototype.get = function(callback, id){
	var vparams = {};
	this.client.addParam(vparams, 'id', id);
	this.client.queueServiceActionCall('fileasset', 'get', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Update file asset by id.
 * @param id int  (optional).
 * @param fileAsset VidiunFileAsset  (optional).
 * @return VidiunFileAsset.
 */
VidiunFileAssetService.prototype.update = function(callback, id, fileAsset){
	var vparams = {};
	this.client.addParam(vparams, 'id', id);
	this.client.addParam(vparams, 'fileAsset', vidiun.toParams(fileAsset));
	this.client.queueServiceActionCall('fileasset', 'update', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Delete file asset by id.
 * @param id int  (optional).
 * @return .
 */
VidiunFileAssetService.prototype.deleteAction = function(callback, id){
	var vparams = {};
	this.client.addParam(vparams, 'id', id);
	this.client.queueServiceActionCall('fileasset', 'delete', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Set content of file asset.
 * @param id string  (optional).
 * @param contentResource VidiunContentResource  (optional).
 * @return VidiunFileAsset.
 */
VidiunFileAssetService.prototype.setContent = function(callback, id, contentResource){
	var vparams = {};
	this.client.addParam(vparams, 'id', id);
	this.client.addParam(vparams, 'contentResource', vidiun.toParams(contentResource));
	this.client.queueServiceActionCall('fileasset', 'setContent', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * List file assets by filter and pager.
 * @param filter VidiunFileAssetFilter  (optional).
 * @param pager VidiunFilterPager  (optional, default: null).
 * @return VidiunFileAssetListResponse.
 */
VidiunFileAssetService.prototype.listAction = function(callback, filter, pager){
	if(!pager){
		pager = null;
	}
	var vparams = {};
	this.client.addParam(vparams, 'filter', vidiun.toParams(filter));
	if (pager !== null){
		this.client.addParam(vparams, 'pager', vidiun.toParams(pager));
	}
	this.client.queueServiceActionCall('fileasset', 'list', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Vidiun service: flavorAsset.
 * The available service actions:
 * @action add Add flavor asset.
 * @action update Update flavor asset.
 * @action setContent Update content of flavor asset.
 * @action get Get Flavor Asset by ID.
 * @action getByEntryId Get Flavor Assets for Entry.
 * @action list List Flavor Assets by filter and pager.
 * @action getWebPlayableByEntryId Get web playable Flavor Assets for Entry.
 * @action convert Add and convert new Flavor Asset for Entry with specific Flavor Params.
 * @action reconvert Reconvert Flavor Asset by ID.
 * @action delete Delete Flavor Asset by ID.
 * @action getUrl Get download URL for the asset.
 * @action getRemotePaths Get remote storage existing paths for the asset.
 * @action getDownloadUrl Get download URL for the Flavor Asset.
 * @action getFlavorAssetsWithParams Get Flavor Asset with the relevant Flavor Params (Flavor Params can exist without Flavor Asset & vice versa).
 * @action export manually export an asset.
 * @action setAsSource Set a given flavor as the original flavor.
 * @action deleteLocalContent delete all local file syncs for this asset.
 */
function VidiunFlavorAssetService(client){
	VidiunFlavorAssetService.super_.call(this);
	this.init(client);
}

util.inherits(VidiunFlavorAssetService, vidiun.VidiunServiceBase);
module.exports.VidiunFlavorAssetService = VidiunFlavorAssetService;

/**
 * Add flavor asset.
 * @param entryId string  (optional).
 * @param flavorAsset VidiunFlavorAsset  (optional).
 * @return VidiunFlavorAsset.
 */
VidiunFlavorAssetService.prototype.add = function(callback, entryId, flavorAsset){
	var vparams = {};
	this.client.addParam(vparams, 'entryId', entryId);
	this.client.addParam(vparams, 'flavorAsset', vidiun.toParams(flavorAsset));
	this.client.queueServiceActionCall('flavorasset', 'add', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Update flavor asset.
 * @param id string  (optional).
 * @param flavorAsset VidiunFlavorAsset  (optional).
 * @return VidiunFlavorAsset.
 */
VidiunFlavorAssetService.prototype.update = function(callback, id, flavorAsset){
	var vparams = {};
	this.client.addParam(vparams, 'id', id);
	this.client.addParam(vparams, 'flavorAsset', vidiun.toParams(flavorAsset));
	this.client.queueServiceActionCall('flavorasset', 'update', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Update content of flavor asset.
 * @param id string  (optional).
 * @param contentResource VidiunContentResource  (optional).
 * @return VidiunFlavorAsset.
 */
VidiunFlavorAssetService.prototype.setContent = function(callback, id, contentResource){
	var vparams = {};
	this.client.addParam(vparams, 'id', id);
	this.client.addParam(vparams, 'contentResource', vidiun.toParams(contentResource));
	this.client.queueServiceActionCall('flavorasset', 'setContent', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Get Flavor Asset by ID.
 * @param id string  (optional).
 * @return VidiunFlavorAsset.
 */
VidiunFlavorAssetService.prototype.get = function(callback, id){
	var vparams = {};
	this.client.addParam(vparams, 'id', id);
	this.client.queueServiceActionCall('flavorasset', 'get', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Get Flavor Assets for Entry.
 * @param entryId string  (optional).
 * @return array.
 */
VidiunFlavorAssetService.prototype.getByEntryId = function(callback, entryId){
	var vparams = {};
	this.client.addParam(vparams, 'entryId', entryId);
	this.client.queueServiceActionCall('flavorasset', 'getByEntryId', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * List Flavor Assets by filter and pager.
 * @param filter VidiunAssetFilter  (optional, default: null).
 * @param pager VidiunFilterPager  (optional, default: null).
 * @return VidiunFlavorAssetListResponse.
 */
VidiunFlavorAssetService.prototype.listAction = function(callback, filter, pager){
	if(!filter){
		filter = null;
	}
	if(!pager){
		pager = null;
	}
	var vparams = {};
	if (filter !== null){
		this.client.addParam(vparams, 'filter', vidiun.toParams(filter));
	}
	if (pager !== null){
		this.client.addParam(vparams, 'pager', vidiun.toParams(pager));
	}
	this.client.queueServiceActionCall('flavorasset', 'list', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Get web playable Flavor Assets for Entry.
 * @param entryId string  (optional).
 * @return array.
 */
VidiunFlavorAssetService.prototype.getWebPlayableByEntryId = function(callback, entryId){
	var vparams = {};
	this.client.addParam(vparams, 'entryId', entryId);
	this.client.queueServiceActionCall('flavorasset', 'getWebPlayableByEntryId', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Add and convert new Flavor Asset for Entry with specific Flavor Params.
 * @param entryId string  (optional).
 * @param flavorParamsId int  (optional).
 * @param priority int  (optional).
 * @return .
 */
VidiunFlavorAssetService.prototype.convert = function(callback, entryId, flavorParamsId, priority){
	if(!priority){
		priority = 0;
	}
	var vparams = {};
	this.client.addParam(vparams, 'entryId', entryId);
	this.client.addParam(vparams, 'flavorParamsId', flavorParamsId);
	this.client.addParam(vparams, 'priority', priority);
	this.client.queueServiceActionCall('flavorasset', 'convert', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Reconvert Flavor Asset by ID.
 * @param id string Flavor Asset ID (optional).
 * @return .
 */
VidiunFlavorAssetService.prototype.reconvert = function(callback, id){
	var vparams = {};
	this.client.addParam(vparams, 'id', id);
	this.client.queueServiceActionCall('flavorasset', 'reconvert', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Delete Flavor Asset by ID.
 * @param id string  (optional).
 * @return .
 */
VidiunFlavorAssetService.prototype.deleteAction = function(callback, id){
	var vparams = {};
	this.client.addParam(vparams, 'id', id);
	this.client.queueServiceActionCall('flavorasset', 'delete', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Get download URL for the asset.
 * @param id string  (optional).
 * @param storageId int  (optional, default: null).
 * @param forceProxy bool  (optional, default: false).
 * @param options VidiunFlavorAssetUrlOptions  (optional, default: null).
 * @return string.
 */
VidiunFlavorAssetService.prototype.getUrl = function(callback, id, storageId, forceProxy, options){
	if(!storageId){
		storageId = null;
	}
	if(!forceProxy){
		forceProxy = false;
	}
	if(!options){
		options = null;
	}
	var vparams = {};
	this.client.addParam(vparams, 'id', id);
	this.client.addParam(vparams, 'storageId', storageId);
	this.client.addParam(vparams, 'forceProxy', forceProxy);
	if (options !== null){
		this.client.addParam(vparams, 'options', vidiun.toParams(options));
	}
	this.client.queueServiceActionCall('flavorasset', 'getUrl', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Get remote storage existing paths for the asset.
 * @param id string  (optional).
 * @return VidiunRemotePathListResponse.
 */
VidiunFlavorAssetService.prototype.getRemotePaths = function(callback, id){
	var vparams = {};
	this.client.addParam(vparams, 'id', id);
	this.client.queueServiceActionCall('flavorasset', 'getRemotePaths', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Get download URL for the Flavor Asset.
 * @param id string  (optional).
 * @param useCdn bool  (optional, default: false).
 * @return string.
 */
VidiunFlavorAssetService.prototype.getDownloadUrl = function(callback, id, useCdn){
	if(!useCdn){
		useCdn = false;
	}
	var vparams = {};
	this.client.addParam(vparams, 'id', id);
	this.client.addParam(vparams, 'useCdn', useCdn);
	this.client.queueServiceActionCall('flavorasset', 'getDownloadUrl', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Get Flavor Asset with the relevant Flavor Params (Flavor Params can exist without Flavor Asset & vice versa).
 * @param entryId string  (optional).
 * @return array.
 */
VidiunFlavorAssetService.prototype.getFlavorAssetsWithParams = function(callback, entryId){
	var vparams = {};
	this.client.addParam(vparams, 'entryId', entryId);
	this.client.queueServiceActionCall('flavorasset', 'getFlavorAssetsWithParams', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * manually export an asset.
 * @param assetId string  (optional).
 * @param storageProfileId int  (optional).
 * @return VidiunFlavorAsset.
 */
VidiunFlavorAssetService.prototype.exportAction = function(callback, assetId, storageProfileId){
	var vparams = {};
	this.client.addParam(vparams, 'assetId', assetId);
	this.client.addParam(vparams, 'storageProfileId', storageProfileId);
	this.client.queueServiceActionCall('flavorasset', 'export', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Set a given flavor as the original flavor.
 * @param assetId string  (optional).
 * @return .
 */
VidiunFlavorAssetService.prototype.setAsSource = function(callback, assetId){
	var vparams = {};
	this.client.addParam(vparams, 'assetId', assetId);
	this.client.queueServiceActionCall('flavorasset', 'setAsSource', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * delete all local file syncs for this asset.
 * @param assetId string  (optional).
 * @return .
 */
VidiunFlavorAssetService.prototype.deleteLocalContent = function(callback, assetId){
	var vparams = {};
	this.client.addParam(vparams, 'assetId', assetId);
	this.client.queueServiceActionCall('flavorasset', 'deleteLocalContent', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Vidiun service: flavorParamsOutput.
 * The available service actions:
 * @action get Get flavor params output object by ID.
 * @action list List flavor params output objects by filter and pager.
 */
function VidiunFlavorParamsOutputService(client){
	VidiunFlavorParamsOutputService.super_.call(this);
	this.init(client);
}

util.inherits(VidiunFlavorParamsOutputService, vidiun.VidiunServiceBase);
module.exports.VidiunFlavorParamsOutputService = VidiunFlavorParamsOutputService;

/**
 * Get flavor params output object by ID.
 * @param id int  (optional).
 * @return VidiunFlavorParamsOutput.
 */
VidiunFlavorParamsOutputService.prototype.get = function(callback, id){
	var vparams = {};
	this.client.addParam(vparams, 'id', id);
	this.client.queueServiceActionCall('flavorparamsoutput', 'get', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * List flavor params output objects by filter and pager.
 * @param filter VidiunFlavorParamsOutputFilter  (optional, default: null).
 * @param pager VidiunFilterPager  (optional, default: null).
 * @return VidiunFlavorParamsOutputListResponse.
 */
VidiunFlavorParamsOutputService.prototype.listAction = function(callback, filter, pager){
	if(!filter){
		filter = null;
	}
	if(!pager){
		pager = null;
	}
	var vparams = {};
	if (filter !== null){
		this.client.addParam(vparams, 'filter', vidiun.toParams(filter));
	}
	if (pager !== null){
		this.client.addParam(vparams, 'pager', vidiun.toParams(pager));
	}
	this.client.queueServiceActionCall('flavorparamsoutput', 'list', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Vidiun service: flavorParams.
 * The available service actions:
 * @action add Add new Flavor Params.
 * @action get Get Flavor Params by ID.
 * @action update Update Flavor Params by ID.
 * @action delete Delete Flavor Params by ID.
 * @action list List Flavor Params by filter with paging support (By default - all system default params will be listed too).
 * @action getByConversionProfileId Get Flavor Params by Conversion Profile ID.
 */
function VidiunFlavorParamsService(client){
	VidiunFlavorParamsService.super_.call(this);
	this.init(client);
}

util.inherits(VidiunFlavorParamsService, vidiun.VidiunServiceBase);
module.exports.VidiunFlavorParamsService = VidiunFlavorParamsService;

/**
 * Add new Flavor Params.
 * @param flavorParams VidiunFlavorParams  (optional).
 * @return VidiunFlavorParams.
 */
VidiunFlavorParamsService.prototype.add = function(callback, flavorParams){
	var vparams = {};
	this.client.addParam(vparams, 'flavorParams', vidiun.toParams(flavorParams));
	this.client.queueServiceActionCall('flavorparams', 'add', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Get Flavor Params by ID.
 * @param id int  (optional).
 * @return VidiunFlavorParams.
 */
VidiunFlavorParamsService.prototype.get = function(callback, id){
	var vparams = {};
	this.client.addParam(vparams, 'id', id);
	this.client.queueServiceActionCall('flavorparams', 'get', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Update Flavor Params by ID.
 * @param id int  (optional).
 * @param flavorParams VidiunFlavorParams  (optional).
 * @return VidiunFlavorParams.
 */
VidiunFlavorParamsService.prototype.update = function(callback, id, flavorParams){
	var vparams = {};
	this.client.addParam(vparams, 'id', id);
	this.client.addParam(vparams, 'flavorParams', vidiun.toParams(flavorParams));
	this.client.queueServiceActionCall('flavorparams', 'update', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Delete Flavor Params by ID.
 * @param id int  (optional).
 * @return .
 */
VidiunFlavorParamsService.prototype.deleteAction = function(callback, id){
	var vparams = {};
	this.client.addParam(vparams, 'id', id);
	this.client.queueServiceActionCall('flavorparams', 'delete', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * List Flavor Params by filter with paging support (By default - all system default params will be listed too).
 * @param filter VidiunFlavorParamsFilter  (optional, default: null).
 * @param pager VidiunFilterPager  (optional, default: null).
 * @return VidiunFlavorParamsListResponse.
 */
VidiunFlavorParamsService.prototype.listAction = function(callback, filter, pager){
	if(!filter){
		filter = null;
	}
	if(!pager){
		pager = null;
	}
	var vparams = {};
	if (filter !== null){
		this.client.addParam(vparams, 'filter', vidiun.toParams(filter));
	}
	if (pager !== null){
		this.client.addParam(vparams, 'pager', vidiun.toParams(pager));
	}
	this.client.queueServiceActionCall('flavorparams', 'list', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Get Flavor Params by Conversion Profile ID.
 * @param conversionProfileId int  (optional).
 * @return array.
 */
VidiunFlavorParamsService.prototype.getByConversionProfileId = function(callback, conversionProfileId){
	var vparams = {};
	this.client.addParam(vparams, 'conversionProfileId', conversionProfileId);
	this.client.queueServiceActionCall('flavorparams', 'getByConversionProfileId', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Vidiun service: groupUser.
 * The available service actions:
 * @action add Add new GroupUser.
 * @action delete delete by userId and groupId.
 * @action list List all GroupUsers.
 */
function VidiunGroupUserService(client){
	VidiunGroupUserService.super_.call(this);
	this.init(client);
}

util.inherits(VidiunGroupUserService, vidiun.VidiunServiceBase);
module.exports.VidiunGroupUserService = VidiunGroupUserService;

/**
 * Add new GroupUser.
 * @param groupUser VidiunGroupUser  (optional).
 * @return VidiunGroupUser.
 */
VidiunGroupUserService.prototype.add = function(callback, groupUser){
	var vparams = {};
	this.client.addParam(vparams, 'groupUser', vidiun.toParams(groupUser));
	this.client.queueServiceActionCall('groupuser', 'add', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * delete by userId and groupId.
 * @param userId string  (optional).
 * @param groupId string  (optional).
 * @return .
 */
VidiunGroupUserService.prototype.deleteAction = function(callback, userId, groupId){
	var vparams = {};
	this.client.addParam(vparams, 'userId', userId);
	this.client.addParam(vparams, 'groupId', groupId);
	this.client.queueServiceActionCall('groupuser', 'delete', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * List all GroupUsers.
 * @param filter VidiunGroupUserFilter  (optional, default: null).
 * @param pager VidiunFilterPager  (optional, default: null).
 * @return VidiunGroupUserListResponse.
 */
VidiunGroupUserService.prototype.listAction = function(callback, filter, pager){
	if(!filter){
		filter = null;
	}
	if(!pager){
		pager = null;
	}
	var vparams = {};
	if (filter !== null){
		this.client.addParam(vparams, 'filter', vidiun.toParams(filter));
	}
	if (pager !== null){
		this.client.addParam(vparams, 'pager', vidiun.toParams(pager));
	}
	this.client.queueServiceActionCall('groupuser', 'list', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Vidiun service: liveChannelSegment.
 * The available service actions:
 * @action add Add new live channel segment.
 * @action get Get live channel segment by id.
 * @action update Update live channel segment by id.
 * @action delete Delete live channel segment by id.
 * @action list List live channel segments by filter and pager.
 */
function VidiunLiveChannelSegmentService(client){
	VidiunLiveChannelSegmentService.super_.call(this);
	this.init(client);
}

util.inherits(VidiunLiveChannelSegmentService, vidiun.VidiunServiceBase);
module.exports.VidiunLiveChannelSegmentService = VidiunLiveChannelSegmentService;

/**
 * Add new live channel segment.
 * @param liveChannelSegment VidiunLiveChannelSegment  (optional).
 * @return VidiunLiveChannelSegment.
 */
VidiunLiveChannelSegmentService.prototype.add = function(callback, liveChannelSegment){
	var vparams = {};
	this.client.addParam(vparams, 'liveChannelSegment', vidiun.toParams(liveChannelSegment));
	this.client.queueServiceActionCall('livechannelsegment', 'add', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Get live channel segment by id.
 * @param id int  (optional).
 * @return VidiunLiveChannelSegment.
 */
VidiunLiveChannelSegmentService.prototype.get = function(callback, id){
	var vparams = {};
	this.client.addParam(vparams, 'id', id);
	this.client.queueServiceActionCall('livechannelsegment', 'get', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Update live channel segment by id.
 * @param id int  (optional).
 * @param liveChannelSegment VidiunLiveChannelSegment  (optional).
 * @return VidiunLiveChannelSegment.
 */
VidiunLiveChannelSegmentService.prototype.update = function(callback, id, liveChannelSegment){
	var vparams = {};
	this.client.addParam(vparams, 'id', id);
	this.client.addParam(vparams, 'liveChannelSegment', vidiun.toParams(liveChannelSegment));
	this.client.queueServiceActionCall('livechannelsegment', 'update', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Delete live channel segment by id.
 * @param id int  (optional).
 * @return .
 */
VidiunLiveChannelSegmentService.prototype.deleteAction = function(callback, id){
	var vparams = {};
	this.client.addParam(vparams, 'id', id);
	this.client.queueServiceActionCall('livechannelsegment', 'delete', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * List live channel segments by filter and pager.
 * @param filter VidiunLiveChannelSegmentFilter  (optional, default: null).
 * @param pager VidiunFilterPager  (optional, default: null).
 * @return VidiunLiveChannelSegmentListResponse.
 */
VidiunLiveChannelSegmentService.prototype.listAction = function(callback, filter, pager){
	if(!filter){
		filter = null;
	}
	if(!pager){
		pager = null;
	}
	var vparams = {};
	if (filter !== null){
		this.client.addParam(vparams, 'filter', vidiun.toParams(filter));
	}
	if (pager !== null){
		this.client.addParam(vparams, 'pager', vidiun.toParams(pager));
	}
	this.client.queueServiceActionCall('livechannelsegment', 'list', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Vidiun service: liveChannel.
 * The available service actions:
 * @action add Adds new live channel.
 * @action get Get live channel by ID.
 * @action update Update live channel. Only the properties that were set will be updated.
 * @action delete Delete a live channel.
 * @action list List live channels by filter with paging support.
 * @action isLive Delivering the status of a live channel (on-air/offline).
 * @action appendRecording Append recorded video to live entry.
 * @action registerMediaServer Register media server to live entry.
 * @action unregisterMediaServer Unregister media server from live entry.
 * @action validateRegisteredMediaServers Validates all registered media servers.
 */
function VidiunLiveChannelService(client){
	VidiunLiveChannelService.super_.call(this);
	this.init(client);
}

util.inherits(VidiunLiveChannelService, vidiun.VidiunServiceBase);
module.exports.VidiunLiveChannelService = VidiunLiveChannelService;

/**
 * Adds new live channel.
 * @param liveChannel VidiunLiveChannel Live channel metadata (optional).
 * @return VidiunLiveChannel.
 */
VidiunLiveChannelService.prototype.add = function(callback, liveChannel){
	var vparams = {};
	this.client.addParam(vparams, 'liveChannel', vidiun.toParams(liveChannel));
	this.client.queueServiceActionCall('livechannel', 'add', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Get live channel by ID.
 * @param id string Live channel id (optional).
 * @return VidiunLiveChannel.
 */
VidiunLiveChannelService.prototype.get = function(callback, id){
	var vparams = {};
	this.client.addParam(vparams, 'id', id);
	this.client.queueServiceActionCall('livechannel', 'get', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Update live channel. Only the properties that were set will be updated.
 * @param id string Live channel id to update (optional).
 * @param liveChannel VidiunLiveChannel Live channel metadata to update (optional).
 * @return VidiunLiveChannel.
 */
VidiunLiveChannelService.prototype.update = function(callback, id, liveChannel){
	var vparams = {};
	this.client.addParam(vparams, 'id', id);
	this.client.addParam(vparams, 'liveChannel', vidiun.toParams(liveChannel));
	this.client.queueServiceActionCall('livechannel', 'update', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Delete a live channel.
 * @param id string Live channel id to delete (optional).
 * @return .
 */
VidiunLiveChannelService.prototype.deleteAction = function(callback, id){
	var vparams = {};
	this.client.addParam(vparams, 'id', id);
	this.client.queueServiceActionCall('livechannel', 'delete', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * List live channels by filter with paging support.
 * @param filter VidiunLiveChannelFilter live channel filter (optional, default: null).
 * @param pager VidiunFilterPager Pager (optional, default: null).
 * @return VidiunLiveChannelListResponse.
 */
VidiunLiveChannelService.prototype.listAction = function(callback, filter, pager){
	if(!filter){
		filter = null;
	}
	if(!pager){
		pager = null;
	}
	var vparams = {};
	if (filter !== null){
		this.client.addParam(vparams, 'filter', vidiun.toParams(filter));
	}
	if (pager !== null){
		this.client.addParam(vparams, 'pager', vidiun.toParams(pager));
	}
	this.client.queueServiceActionCall('livechannel', 'list', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Delivering the status of a live channel (on-air/offline).
 * @param id string ID of the live channel (optional).
 * @return bool.
 */
VidiunLiveChannelService.prototype.isLive = function(callback, id){
	var vparams = {};
	this.client.addParam(vparams, 'id', id);
	this.client.queueServiceActionCall('livechannel', 'isLive', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Append recorded video to live entry.
 * @param entryId string Live entry id (optional).
 * @param assetId string Live asset id (optional).
 * @param mediaServerIndex string  (optional, enum: VidiunEntryServerNodeType).
 * @param resource VidiunDataCenterContentResource  (optional).
 * @param duration float in seconds (optional).
 * @param isLastChunk bool Is this the last recorded chunk in the current session (i.e. following a stream stop event) (optional, default: false).
 * @return VidiunLiveEntry.
 */
VidiunLiveChannelService.prototype.appendRecording = function(callback, entryId, assetId, mediaServerIndex, resource, duration, isLastChunk){
	if(!isLastChunk){
		isLastChunk = false;
	}
	var vparams = {};
	this.client.addParam(vparams, 'entryId', entryId);
	this.client.addParam(vparams, 'assetId', assetId);
	this.client.addParam(vparams, 'mediaServerIndex', mediaServerIndex);
	this.client.addParam(vparams, 'resource', vidiun.toParams(resource));
	this.client.addParam(vparams, 'duration', duration);
	this.client.addParam(vparams, 'isLastChunk', isLastChunk);
	this.client.queueServiceActionCall('livechannel', 'appendRecording', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Register media server to live entry.
 * @param entryId string Live entry id (optional).
 * @param hostname string Media server host name (optional).
 * @param mediaServerIndex string Media server index primary / secondary (optional, enum: VidiunEntryServerNodeType).
 * @param applicationName string the application to which entry is being broadcast (optional, default: null).
 * @param liveEntryStatus int the status VidiunEntryServerNodeStatus::PLAYABLE | VidiunEntryServerNodeStatus::BROADCASTING (optional, enum: VidiunEntryServerNodeStatus, default: 1).
 * @return VidiunLiveEntry.
 */
VidiunLiveChannelService.prototype.registerMediaServer = function(callback, entryId, hostname, mediaServerIndex, applicationName, liveEntryStatus){
	if(!applicationName){
		applicationName = null;
	}
	if(!liveEntryStatus){
		liveEntryStatus = 1;
	}
	var vparams = {};
	this.client.addParam(vparams, 'entryId', entryId);
	this.client.addParam(vparams, 'hostname', hostname);
	this.client.addParam(vparams, 'mediaServerIndex', mediaServerIndex);
	this.client.addParam(vparams, 'applicationName', applicationName);
	this.client.addParam(vparams, 'liveEntryStatus', liveEntryStatus);
	this.client.queueServiceActionCall('livechannel', 'registerMediaServer', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Unregister media server from live entry.
 * @param entryId string Live entry id (optional).
 * @param hostname string Media server host name (optional).
 * @param mediaServerIndex string Media server index primary / secondary (optional, enum: VidiunEntryServerNodeType).
 * @return VidiunLiveEntry.
 */
VidiunLiveChannelService.prototype.unregisterMediaServer = function(callback, entryId, hostname, mediaServerIndex){
	var vparams = {};
	this.client.addParam(vparams, 'entryId', entryId);
	this.client.addParam(vparams, 'hostname', hostname);
	this.client.addParam(vparams, 'mediaServerIndex', mediaServerIndex);
	this.client.queueServiceActionCall('livechannel', 'unregisterMediaServer', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Validates all registered media servers.
 * @param entryId string Live entry id (optional).
 * @return .
 */
VidiunLiveChannelService.prototype.validateRegisteredMediaServers = function(callback, entryId){
	var vparams = {};
	this.client.addParam(vparams, 'entryId', entryId);
	this.client.queueServiceActionCall('livechannel', 'validateRegisteredMediaServers', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Vidiun service: liveReports.
 * The available service actions:
 * @action getEvents .
 * @action getReport .
 * @action exportToCsv .
 * @action serveReport Will serve a requested report.
 */
function VidiunLiveReportsService(client){
	VidiunLiveReportsService.super_.call(this);
	this.init(client);
}

util.inherits(VidiunLiveReportsService, vidiun.VidiunServiceBase);
module.exports.VidiunLiveReportsService = VidiunLiveReportsService;

/**
 * .
 * @param reportType string  (optional, enum: VidiunLiveReportType).
 * @param filter VidiunLiveReportInputFilter  (optional, default: null).
 * @param pager VidiunFilterPager  (optional, default: null).
 * @return array.
 */
VidiunLiveReportsService.prototype.getEvents = function(callback, reportType, filter, pager){
	if(!filter){
		filter = null;
	}
	if(!pager){
		pager = null;
	}
	var vparams = {};
	this.client.addParam(vparams, 'reportType', reportType);
	if (filter !== null){
		this.client.addParam(vparams, 'filter', vidiun.toParams(filter));
	}
	if (pager !== null){
		this.client.addParam(vparams, 'pager', vidiun.toParams(pager));
	}
	this.client.queueServiceActionCall('livereports', 'getEvents', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * .
 * @param reportType string  (optional, enum: VidiunLiveReportType).
 * @param filter VidiunLiveReportInputFilter  (optional, default: null).
 * @param pager VidiunFilterPager  (optional, default: null).
 * @return VidiunLiveStatsListResponse.
 */
VidiunLiveReportsService.prototype.getReport = function(callback, reportType, filter, pager){
	if(!filter){
		filter = null;
	}
	if(!pager){
		pager = null;
	}
	var vparams = {};
	this.client.addParam(vparams, 'reportType', reportType);
	if (filter !== null){
		this.client.addParam(vparams, 'filter', vidiun.toParams(filter));
	}
	if (pager !== null){
		this.client.addParam(vparams, 'pager', vidiun.toParams(pager));
	}
	this.client.queueServiceActionCall('livereports', 'getReport', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * .
 * @param reportType int  (optional, enum: VidiunLiveReportExportType).
 * @param params VidiunLiveReportExportParams  (optional).
 * @return VidiunLiveReportExportResponse.
 */
VidiunLiveReportsService.prototype.exportToCsv = function(callback, reportType, params){
	var vparams = {};
	this.client.addParam(vparams, 'reportType', reportType);
	this.client.addParam(vparams, 'params', vidiun.toParams(params));
	this.client.queueServiceActionCall('livereports', 'exportToCsv', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Will serve a requested report.
 * @param id string - the requested id (optional).
 * @return string.
 */
VidiunLiveReportsService.prototype.serveReport = function(callback, id){
	var vparams = {};
	this.client.addParam(vparams, 'id', id);
	this.client.queueServiceActionCall('livereports', 'serveReport', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Vidiun service: liveStats.
 * The available service actions:
 * @action collect Will write to the event log a single line representing the event
 * VidiunStatsEvent $event.
 */
function VidiunLiveStatsService(client){
	VidiunLiveStatsService.super_.call(this);
	this.init(client);
}

util.inherits(VidiunLiveStatsService, vidiun.VidiunServiceBase);
module.exports.VidiunLiveStatsService = VidiunLiveStatsService;

/**
 * Will write to the event log a single line representing the event
 * VidiunStatsEvent $event.
 * @param event VidiunLiveStatsEvent  (optional).
 * @return bool.
 */
VidiunLiveStatsService.prototype.collect = function(callback, event){
	var vparams = {};
	this.client.addParam(vparams, 'event', vidiun.toParams(event));
	this.client.queueServiceActionCall('livestats', 'collect', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Vidiun service: liveStream.
 * The available service actions:
 * @action add Adds new live stream entry.
 * The entry will be queued for provision.
 * @action get Get live stream entry by ID.
 * @action authenticate Authenticate live-stream entry against stream token and partner limitations.
 * @action update Update live stream entry. Only the properties that were set will be updated.
 * @action delete Delete a live stream entry.
 * @action list List live stream entries by filter with paging support.
 * @action updateOfflineThumbnailJpeg Update live stream entry thumbnail using a raw jpeg file.
 * @action updateOfflineThumbnailFromUrl Update entry thumbnail using url.
 * @action isLive Delivering the status of a live stream (on-air/offline) if it is possible.
 * @action addLiveStreamPushPublishConfiguration Add new pushPublish configuration to entry.
 * @action removeLiveStreamPushPublishConfiguration Remove push publish configuration from entry.
 * @action appendRecording Append recorded video to live entry.
 * @action registerMediaServer Register media server to live entry.
 * @action unregisterMediaServer Unregister media server from live entry.
 * @action validateRegisteredMediaServers Validates all registered media servers.
 * @action createPeriodicSyncPoints Creates perioding metadata sync-point events on a live stream.
 */
function VidiunLiveStreamService(client){
	VidiunLiveStreamService.super_.call(this);
	this.init(client);
}

util.inherits(VidiunLiveStreamService, vidiun.VidiunServiceBase);
module.exports.VidiunLiveStreamService = VidiunLiveStreamService;

/**
 * Adds new live stream entry.
 * The entry will be queued for provision.
 * @param liveStreamEntry VidiunLiveStreamEntry Live stream entry metadata (optional).
 * @param sourceType string Live stream source type (optional, enum: VidiunSourceType, default: null).
 * @return VidiunLiveStreamEntry.
 */
VidiunLiveStreamService.prototype.add = function(callback, liveStreamEntry, sourceType){
	if(!sourceType){
		sourceType = null;
	}
	var vparams = {};
	this.client.addParam(vparams, 'liveStreamEntry', vidiun.toParams(liveStreamEntry));
	this.client.addParam(vparams, 'sourceType', sourceType);
	this.client.queueServiceActionCall('livestream', 'add', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Get live stream entry by ID.
 * @param entryId string Live stream entry id (optional).
 * @param version int Desired version of the data (optional, default: -1).
 * @return VidiunLiveStreamEntry.
 */
VidiunLiveStreamService.prototype.get = function(callback, entryId, version){
	if(!version){
		version = -1;
	}
	var vparams = {};
	this.client.addParam(vparams, 'entryId', entryId);
	this.client.addParam(vparams, 'version', version);
	this.client.queueServiceActionCall('livestream', 'get', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Authenticate live-stream entry against stream token and partner limitations.
 * @param entryId string Live stream entry id (optional).
 * @param token string Live stream broadcasting token (optional).
 * @param hostname string Media server host name (optional, default: null).
 * @param mediaServerIndex string Media server index primary / secondary (optional, enum: VidiunEntryServerNodeType, default: null).
 * @param applicationName string the application to which entry is being broadcast (optional, default: null).
 * @return VidiunLiveStreamEntry.
 */
VidiunLiveStreamService.prototype.authenticate = function(callback, entryId, token, hostname, mediaServerIndex, applicationName){
	if(!hostname){
		hostname = null;
	}
	if(!mediaServerIndex){
		mediaServerIndex = null;
	}
	if(!applicationName){
		applicationName = null;
	}
	var vparams = {};
	this.client.addParam(vparams, 'entryId', entryId);
	this.client.addParam(vparams, 'token', token);
	this.client.addParam(vparams, 'hostname', hostname);
	this.client.addParam(vparams, 'mediaServerIndex', mediaServerIndex);
	this.client.addParam(vparams, 'applicationName', applicationName);
	this.client.queueServiceActionCall('livestream', 'authenticate', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Update live stream entry. Only the properties that were set will be updated.
 * @param entryId string Live stream entry id to update (optional).
 * @param liveStreamEntry VidiunLiveStreamEntry Live stream entry metadata to update (optional).
 * @return VidiunLiveStreamEntry.
 */
VidiunLiveStreamService.prototype.update = function(callback, entryId, liveStreamEntry){
	var vparams = {};
	this.client.addParam(vparams, 'entryId', entryId);
	this.client.addParam(vparams, 'liveStreamEntry', vidiun.toParams(liveStreamEntry));
	this.client.queueServiceActionCall('livestream', 'update', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Delete a live stream entry.
 * @param entryId string Live stream entry id to delete (optional).
 * @return .
 */
VidiunLiveStreamService.prototype.deleteAction = function(callback, entryId){
	var vparams = {};
	this.client.addParam(vparams, 'entryId', entryId);
	this.client.queueServiceActionCall('livestream', 'delete', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * List live stream entries by filter with paging support.
 * @param filter VidiunLiveStreamEntryFilter live stream entry filter (optional, default: null).
 * @param pager VidiunFilterPager Pager (optional, default: null).
 * @return VidiunLiveStreamListResponse.
 */
VidiunLiveStreamService.prototype.listAction = function(callback, filter, pager){
	if(!filter){
		filter = null;
	}
	if(!pager){
		pager = null;
	}
	var vparams = {};
	if (filter !== null){
		this.client.addParam(vparams, 'filter', vidiun.toParams(filter));
	}
	if (pager !== null){
		this.client.addParam(vparams, 'pager', vidiun.toParams(pager));
	}
	this.client.queueServiceActionCall('livestream', 'list', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Update live stream entry thumbnail using a raw jpeg file.
 * @param entryId string live stream entry id (optional).
 * @param fileData file Jpeg file data (optional).
 * @return VidiunLiveStreamEntry.
 */
VidiunLiveStreamService.prototype.updateOfflineThumbnailJpeg = function(callback, entryId, fileData){
	var vparams = {};
	this.client.addParam(vparams, 'entryId', entryId);
	var vfiles = {};
	this.client.addParam(vfiles, 'fileData', fileData);
	this.client.queueServiceActionCall('livestream', 'updateOfflineThumbnailJpeg', vparams, vfiles);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Update entry thumbnail using url.
 * @param entryId string live stream entry id (optional).
 * @param url string file url (optional).
 * @return VidiunLiveStreamEntry.
 */
VidiunLiveStreamService.prototype.updateOfflineThumbnailFromUrl = function(callback, entryId, url){
	var vparams = {};
	this.client.addParam(vparams, 'entryId', entryId);
	this.client.addParam(vparams, 'url', url);
	this.client.queueServiceActionCall('livestream', 'updateOfflineThumbnailFromUrl', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Delivering the status of a live stream (on-air/offline) if it is possible.
 * @param id string ID of the live stream (optional).
 * @param protocol string protocol of the stream to test (optional, enum: VidiunPlaybackProtocol).
 * @return bool.
 */
VidiunLiveStreamService.prototype.isLive = function(callback, id, protocol){
	var vparams = {};
	this.client.addParam(vparams, 'id', id);
	this.client.addParam(vparams, 'protocol', protocol);
	this.client.queueServiceActionCall('livestream', 'isLive', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Add new pushPublish configuration to entry.
 * @param entryId string  (optional).
 * @param protocol string  (optional, enum: VidiunPlaybackProtocol).
 * @param url string  (optional, default: null).
 * @param liveStreamConfiguration VidiunLiveStreamConfiguration  (optional, default: null).
 * @return VidiunLiveStreamEntry.
 */
VidiunLiveStreamService.prototype.addLiveStreamPushPublishConfiguration = function(callback, entryId, protocol, url, liveStreamConfiguration){
	if(!url){
		url = null;
	}
	if(!liveStreamConfiguration){
		liveStreamConfiguration = null;
	}
	var vparams = {};
	this.client.addParam(vparams, 'entryId', entryId);
	this.client.addParam(vparams, 'protocol', protocol);
	this.client.addParam(vparams, 'url', url);
	if (liveStreamConfiguration !== null){
		this.client.addParam(vparams, 'liveStreamConfiguration', vidiun.toParams(liveStreamConfiguration));
	}
	this.client.queueServiceActionCall('livestream', 'addLiveStreamPushPublishConfiguration', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Remove push publish configuration from entry.
 * @param entryId string  (optional).
 * @param protocol string  (optional, enum: VidiunPlaybackProtocol).
 * @return VidiunLiveStreamEntry.
 */
VidiunLiveStreamService.prototype.removeLiveStreamPushPublishConfiguration = function(callback, entryId, protocol){
	var vparams = {};
	this.client.addParam(vparams, 'entryId', entryId);
	this.client.addParam(vparams, 'protocol', protocol);
	this.client.queueServiceActionCall('livestream', 'removeLiveStreamPushPublishConfiguration', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Append recorded video to live entry.
 * @param entryId string Live entry id (optional).
 * @param assetId string Live asset id (optional).
 * @param mediaServerIndex string  (optional, enum: VidiunEntryServerNodeType).
 * @param resource VidiunDataCenterContentResource  (optional).
 * @param duration float in seconds (optional).
 * @param isLastChunk bool Is this the last recorded chunk in the current session (i.e. following a stream stop event) (optional, default: false).
 * @return VidiunLiveEntry.
 */
VidiunLiveStreamService.prototype.appendRecording = function(callback, entryId, assetId, mediaServerIndex, resource, duration, isLastChunk){
	if(!isLastChunk){
		isLastChunk = false;
	}
	var vparams = {};
	this.client.addParam(vparams, 'entryId', entryId);
	this.client.addParam(vparams, 'assetId', assetId);
	this.client.addParam(vparams, 'mediaServerIndex', mediaServerIndex);
	this.client.addParam(vparams, 'resource', vidiun.toParams(resource));
	this.client.addParam(vparams, 'duration', duration);
	this.client.addParam(vparams, 'isLastChunk', isLastChunk);
	this.client.queueServiceActionCall('livestream', 'appendRecording', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Register media server to live entry.
 * @param entryId string Live entry id (optional).
 * @param hostname string Media server host name (optional).
 * @param mediaServerIndex string Media server index primary / secondary (optional, enum: VidiunEntryServerNodeType).
 * @param applicationName string the application to which entry is being broadcast (optional, default: null).
 * @param liveEntryStatus int the status VidiunEntryServerNodeStatus::PLAYABLE | VidiunEntryServerNodeStatus::BROADCASTING (optional, enum: VidiunEntryServerNodeStatus, default: 1).
 * @param bool $shouldCreateRecordedEntry
 * @return VidiunLiveEntry.
 */
VidiunLiveStreamService.prototype.registerMediaServer = function(callback, entryId, hostname, mediaServerIndex, applicationName, liveEntryStatus, shouldCreateRecordedEntry){
	if(!applicationName){
		applicationName = null;
	}
	if(!liveEntryStatus){
		liveEntryStatus = 1;
	}
	var vparams = {};
	this.client.addParam(vparams, 'entryId', entryId);
	this.client.addParam(vparams, 'hostname', hostname);
	this.client.addParam(vparams, 'mediaServerIndex', mediaServerIndex);
	this.client.addParam(vparams, 'applicationName', applicationName);
	this.client.addParam(vparams, 'liveEntryStatus', liveEntryStatus);
	this.client.addParam(vparams, 'shouldCreateRecordedEntry', shouldCreateRecordedEntry);
	this.client.queueServiceActionCall('livestream', 'registerMediaServer', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Unregister media server from live entry.
 * @param entryId string Live entry id (optional).
 * @param hostname string Media server host name (optional).
 * @param mediaServerIndex string Media server index primary / secondary (optional, enum: VidiunEntryServerNodeType).
 * @return VidiunLiveEntry.
 */
VidiunLiveStreamService.prototype.unregisterMediaServer = function(callback, entryId, hostname, mediaServerIndex){
	var vparams = {};
	this.client.addParam(vparams, 'entryId', entryId);
	this.client.addParam(vparams, 'hostname', hostname);
	this.client.addParam(vparams, 'mediaServerIndex', mediaServerIndex);
	this.client.queueServiceActionCall('livestream', 'unregisterMediaServer', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Validates all registered media servers.
 * @param entryId string Live entry id (optional).
 * @return .
 */
VidiunLiveStreamService.prototype.validateRegisteredMediaServers = function(callback, entryId){
	var vparams = {};
	this.client.addParam(vparams, 'entryId', entryId);
	this.client.queueServiceActionCall('livestream', 'validateRegisteredMediaServers', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Creates perioding metadata sync-point events on a live stream.
 * @param entryId string Vidiun live-stream entry id (optional).
 * @param interval int Events interval in seconds (optional).
 * @param duration int Duration in seconds (optional).
 * @return .
 */
VidiunLiveStreamService.prototype.createPeriodicSyncPoints = function(callback, entryId, interval, duration){
	var vparams = {};
	this.client.addParam(vparams, 'entryId', entryId);
	this.client.addParam(vparams, 'interval', interval);
	this.client.addParam(vparams, 'duration', duration);
	this.client.queueServiceActionCall('livestream', 'createPeriodicSyncPoints', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Vidiun service: mediaInfo.
 * The available service actions:
 * @action list List media info objects by filter and pager.
 */
function VidiunMediaInfoService(client){
	VidiunMediaInfoService.super_.call(this);
	this.init(client);
}

util.inherits(VidiunMediaInfoService, vidiun.VidiunServiceBase);
module.exports.VidiunMediaInfoService = VidiunMediaInfoService;

/**
 * List media info objects by filter and pager.
 * @param filter VidiunMediaInfoFilter  (optional, default: null).
 * @param pager VidiunFilterPager  (optional, default: null).
 * @return VidiunMediaInfoListResponse.
 */
VidiunMediaInfoService.prototype.listAction = function(callback, filter, pager){
	if(!filter){
		filter = null;
	}
	if(!pager){
		pager = null;
	}
	var vparams = {};
	if (filter !== null){
		this.client.addParam(vparams, 'filter', vidiun.toParams(filter));
	}
	if (pager !== null){
		this.client.addParam(vparams, 'pager', vidiun.toParams(pager));
	}
	this.client.queueServiceActionCall('mediainfo', 'list', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Vidiun service: media.
 * The available service actions:
 * @action add Add entry.
 * @action addContent Add content to media entry which is not yet associated with content (therefore is in status NO_CONTENT).
 * If the requirement is to replace the entry's associated content, use action updateContent.
 * @action addFromUrl Adds new media entry by importing an HTTP or FTP URL.
 * The entry will be queued for import and then for conversion.
 * @action addFromSearchResult Adds new media entry by importing the media file from a search provider.
 * This action should be used with the search service result.
 * @action addFromUploadedFile Add new entry after the specific media file was uploaded and the upload token id exists.
 * @action addFromRecordedWebcam Add new entry after the file was recored on the server and the token id exists.
 * @action addFromEntry Copy entry into new entry.
 * @action addFromFlavorAsset Copy flavor asset into new entry.
 * @action convert Convert entry.
 * @action get Get media entry by ID.
 * @action getMrss Get MRSS by entry id
 * XML will return as an escaped string.
 * @action update Update media entry. Only the properties that were set will be updated.
 * @action updateContent Replace content associated with the media entry.
 * @action delete Delete a media entry.
 * @action approveReplace Approves media replacement.
 * @action cancelReplace Cancels media replacement.
 * @action list List media entries by filter with paging support.
 * @action count Count media entries by filter.
 * @action upload Upload a media file to Vidiun, then the file can be used to create a media entry.
 * @action updateThumbnail Update media entry thumbnail by a specified time offset (In seconds)
 * If flavor params id not specified, source flavor will be used by default.
 * @action updateThumbnailFromSourceEntry Update media entry thumbnail from a different entry by a specified time offset (In seconds)
 * If flavor params id not specified, source flavor will be used by default.
 * @action updateThumbnailJpeg Update media entry thumbnail using a raw jpeg file.
 * @action updateThumbnailFromUrl Update entry thumbnail using url.
 * @action requestConversion Request a new conversion job, this can be used to convert the media entry to a different format.
 * @action flag Flag inappropriate media entry for moderation.
 * @action reject Reject the media entry and mark the pending flags (if any) as moderated (this will make the entry non playable).
 * @action approve Approve the media entry and mark the pending flags (if any) as moderated (this will make the entry playable).
 * @action listFlags List all pending flags for the media entry.
 * @action anonymousRank Anonymously rank a media entry, no validation is done on duplicate rankings.
 * @action bulkUploadAdd Add new bulk upload batch job
 * Conversion profile id can be specified in the API or in the CSV file, the one in the CSV file will be stronger.
 * If no conversion profile was specified, partner's default will be used.
 */
function VidiunMediaService(client){
	VidiunMediaService.super_.call(this);
	this.init(client);
}

util.inherits(VidiunMediaService, vidiun.VidiunServiceBase);
module.exports.VidiunMediaService = VidiunMediaService;

/**
 * Add entry.
 * @param entry VidiunMediaEntry  (optional).
 * @return VidiunMediaEntry.
 */
VidiunMediaService.prototype.add = function(callback, entry){
	var vparams = {};
	this.client.addParam(vparams, 'entry', vidiun.toParams(entry));
	this.client.queueServiceActionCall('media', 'add', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Add content to media entry which is not yet associated with content (therefore is in status NO_CONTENT).
 * If the requirement is to replace the entry's associated content, use action updateContent.
 * @param entryId string  (optional).
 * @param resource VidiunResource  (optional, default: null).
 * @return VidiunMediaEntry.
 */
VidiunMediaService.prototype.addContent = function(callback, entryId, resource){
	if(!resource){
		resource = null;
	}
	var vparams = {};
	this.client.addParam(vparams, 'entryId', entryId);
	if (resource !== null){
		this.client.addParam(vparams, 'resource', vidiun.toParams(resource));
	}
	this.client.queueServiceActionCall('media', 'addContent', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Adds new media entry by importing an HTTP or FTP URL.
 * The entry will be queued for import and then for conversion.
 * @param mediaEntry VidiunMediaEntry Media entry metadata (optional).
 * @param url string An HTTP or FTP URL (optional).
 * @return VidiunMediaEntry.
 */
VidiunMediaService.prototype.addFromUrl = function(callback, mediaEntry, url){
	var vparams = {};
	this.client.addParam(vparams, 'mediaEntry', vidiun.toParams(mediaEntry));
	this.client.addParam(vparams, 'url', url);
	this.client.queueServiceActionCall('media', 'addFromUrl', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Adds new media entry by importing the media file from a search provider.
 * This action should be used with the search service result.
 * @param mediaEntry VidiunMediaEntry Media entry metadata (optional, default: null).
 * @param searchResult VidiunSearchResult Result object from search service (optional, default: null).
 * @return VidiunMediaEntry.
 */
VidiunMediaService.prototype.addFromSearchResult = function(callback, mediaEntry, searchResult){
	if(!mediaEntry){
		mediaEntry = null;
	}
	if(!searchResult){
		searchResult = null;
	}
	var vparams = {};
	if (mediaEntry !== null){
		this.client.addParam(vparams, 'mediaEntry', vidiun.toParams(mediaEntry));
	}
	if (searchResult !== null){
		this.client.addParam(vparams, 'searchResult', vidiun.toParams(searchResult));
	}
	this.client.queueServiceActionCall('media', 'addFromSearchResult', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Add new entry after the specific media file was uploaded and the upload token id exists.
 * @param mediaEntry VidiunMediaEntry Media entry metadata (optional).
 * @param uploadTokenId string Upload token id (optional).
 * @return VidiunMediaEntry.
 */
VidiunMediaService.prototype.addFromUploadedFile = function(callback, mediaEntry, uploadTokenId){
	var vparams = {};
	this.client.addParam(vparams, 'mediaEntry', vidiun.toParams(mediaEntry));
	this.client.addParam(vparams, 'uploadTokenId', uploadTokenId);
	this.client.queueServiceActionCall('media', 'addFromUploadedFile', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Add new entry after the file was recored on the server and the token id exists.
 * @param mediaEntry VidiunMediaEntry Media entry metadata (optional).
 * @param webcamTokenId string Token id for the recored webcam file (optional).
 * @return VidiunMediaEntry.
 */
VidiunMediaService.prototype.addFromRecordedWebcam = function(callback, mediaEntry, webcamTokenId){
	var vparams = {};
	this.client.addParam(vparams, 'mediaEntry', vidiun.toParams(mediaEntry));
	this.client.addParam(vparams, 'webcamTokenId', webcamTokenId);
	this.client.queueServiceActionCall('media', 'addFromRecordedWebcam', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Copy entry into new entry.
 * @param sourceEntryId string Media entry id to copy from (optional).
 * @param mediaEntry VidiunMediaEntry Media entry metadata (optional, default: null).
 * @param sourceFlavorParamsId int The flavor to be used as the new entry source, source flavor will be used if not specified (optional, default: null).
 * @return VidiunMediaEntry.
 */
VidiunMediaService.prototype.addFromEntry = function(callback, sourceEntryId, mediaEntry, sourceFlavorParamsId){
	if(!mediaEntry){
		mediaEntry = null;
	}
	if(!sourceFlavorParamsId){
		sourceFlavorParamsId = null;
	}
	var vparams = {};
	this.client.addParam(vparams, 'sourceEntryId', sourceEntryId);
	if (mediaEntry !== null){
		this.client.addParam(vparams, 'mediaEntry', vidiun.toParams(mediaEntry));
	}
	this.client.addParam(vparams, 'sourceFlavorParamsId', sourceFlavorParamsId);
	this.client.queueServiceActionCall('media', 'addFromEntry', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Copy flavor asset into new entry.
 * @param sourceFlavorAssetId string Flavor asset id to be used as the new entry source (optional).
 * @param mediaEntry VidiunMediaEntry Media entry metadata (optional, default: null).
 * @return VidiunMediaEntry.
 */
VidiunMediaService.prototype.addFromFlavorAsset = function(callback, sourceFlavorAssetId, mediaEntry){
	if(!mediaEntry){
		mediaEntry = null;
	}
	var vparams = {};
	this.client.addParam(vparams, 'sourceFlavorAssetId', sourceFlavorAssetId);
	if (mediaEntry !== null){
		this.client.addParam(vparams, 'mediaEntry', vidiun.toParams(mediaEntry));
	}
	this.client.queueServiceActionCall('media', 'addFromFlavorAsset', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Convert entry.
 * @param entryId string Media entry id (optional).
 * @param conversionProfileId int  (optional, default: null).
 * @param dynamicConversionAttributes array  (optional, default: null).
 * @return bigint.
 */
VidiunMediaService.prototype.convert = function(callback, entryId, conversionProfileId, dynamicConversionAttributes){
	if(!conversionProfileId){
		conversionProfileId = null;
	}
	if(!dynamicConversionAttributes){
		dynamicConversionAttributes = null;
	}
	var vparams = {};
	this.client.addParam(vparams, 'entryId', entryId);
	this.client.addParam(vparams, 'conversionProfileId', conversionProfileId);
	if(dynamicConversionAttributes !== null){
	for(var index in dynamicConversionAttributes)
	{
		var obj = dynamicConversionAttributes[index];
		this.client.addParam(vparams, 'dynamicConversionAttributes:' + index, vidiun.toParams(obj));
	}
	}
	this.client.queueServiceActionCall('media', 'convert', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Get media entry by ID.
 * @param entryId string Media entry id (optional).
 * @param version int Desired version of the data (optional, default: -1).
 * @return VidiunMediaEntry.
 */
VidiunMediaService.prototype.get = function(callback, entryId, version){
	if(!version){
		version = -1;
	}
	var vparams = {};
	this.client.addParam(vparams, 'entryId', entryId);
	this.client.addParam(vparams, 'version', version);
	this.client.queueServiceActionCall('media', 'get', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Get MRSS by entry id
 * XML will return as an escaped string.
 * @param entryId string Entry id (optional).
 * @param extendingItemsArray array  (optional, default: null).
 * @param features string  (optional, default: null).
 * @return string.
 */
VidiunMediaService.prototype.getMrss = function(callback, entryId, extendingItemsArray, features){
	if(!extendingItemsArray){
		extendingItemsArray = null;
	}
	if(!features){
		features = null;
	}
	var vparams = {};
	this.client.addParam(vparams, 'entryId', entryId);
	if(extendingItemsArray !== null){
	for(var index in extendingItemsArray)
	{
		var obj = extendingItemsArray[index];
		this.client.addParam(vparams, 'extendingItemsArray:' + index, vidiun.toParams(obj));
	}
	}
	this.client.addParam(vparams, 'features', features);
	this.client.queueServiceActionCall('media', 'getMrss', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Update media entry. Only the properties that were set will be updated.
 * @param entryId string Media entry id to update (optional).
 * @param mediaEntry VidiunMediaEntry Media entry metadata to update (optional).
 * @return VidiunMediaEntry.
 */
VidiunMediaService.prototype.update = function(callback, entryId, mediaEntry){
	var vparams = {};
	this.client.addParam(vparams, 'entryId', entryId);
	this.client.addParam(vparams, 'mediaEntry', vidiun.toParams(mediaEntry));
	this.client.queueServiceActionCall('media', 'update', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Replace content associated with the media entry.
 * @param entryId string Media entry id to update (optional).
 * @param resource VidiunResource Resource to be used to replace entry media content (optional).
 * @param conversionProfileId int The conversion profile id to be used on the entry (optional, default: null).
 * @param advancedOptions VidiunEntryReplacementOptions Additional update content options (optional, default: null).
 * @return VidiunMediaEntry.
 */
VidiunMediaService.prototype.updateContent = function(callback, entryId, resource, conversionProfileId, advancedOptions){
	if(!conversionProfileId){
		conversionProfileId = null;
	}
	if(!advancedOptions){
		advancedOptions = null;
	}
	var vparams = {};
	this.client.addParam(vparams, 'entryId', entryId);
	this.client.addParam(vparams, 'resource', vidiun.toParams(resource));
	this.client.addParam(vparams, 'conversionProfileId', conversionProfileId);
	if (advancedOptions !== null){
		this.client.addParam(vparams, 'advancedOptions', vidiun.toParams(advancedOptions));
	}
	this.client.queueServiceActionCall('media', 'updateContent', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Delete a media entry.
 * @param entryId string Media entry id to delete (optional).
 * @return .
 */
VidiunMediaService.prototype.deleteAction = function(callback, entryId){
	var vparams = {};
	this.client.addParam(vparams, 'entryId', entryId);
	this.client.queueServiceActionCall('media', 'delete', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Approves media replacement.
 * @param entryId string Media entry id to replace (optional).
 * @return VidiunMediaEntry.
 */
VidiunMediaService.prototype.approveReplace = function(callback, entryId){
	var vparams = {};
	this.client.addParam(vparams, 'entryId', entryId);
	this.client.queueServiceActionCall('media', 'approveReplace', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Cancels media replacement.
 * @param entryId string Media entry id to cancel (optional).
 * @return VidiunMediaEntry.
 */
VidiunMediaService.prototype.cancelReplace = function(callback, entryId){
	var vparams = {};
	this.client.addParam(vparams, 'entryId', entryId);
	this.client.queueServiceActionCall('media', 'cancelReplace', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * List media entries by filter with paging support.
 * @param filter VidiunMediaEntryFilter Media entry filter (optional, default: null).
 * @param pager VidiunFilterPager Pager (optional, default: null).
 * @return VidiunMediaListResponse.
 */
VidiunMediaService.prototype.listAction = function(callback, filter, pager){
	if(!filter){
		filter = null;
	}
	if(!pager){
		pager = null;
	}
	var vparams = {};
	if (filter !== null){
		this.client.addParam(vparams, 'filter', vidiun.toParams(filter));
	}
	if (pager !== null){
		this.client.addParam(vparams, 'pager', vidiun.toParams(pager));
	}
	this.client.queueServiceActionCall('media', 'list', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Count media entries by filter.
 * @param filter VidiunMediaEntryFilter Media entry filter (optional, default: null).
 * @return int.
 */
VidiunMediaService.prototype.count = function(callback, filter){
	if(!filter){
		filter = null;
	}
	var vparams = {};
	if (filter !== null){
		this.client.addParam(vparams, 'filter', vidiun.toParams(filter));
	}
	this.client.queueServiceActionCall('media', 'count', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Upload a media file to Vidiun, then the file can be used to create a media entry.
 * @param fileData file The file data (optional).
 * @return string.
 */
VidiunMediaService.prototype.upload = function(callback, fileData){
	var vparams = {};
	var vfiles = {};
	this.client.addParam(vfiles, 'fileData', fileData);
	this.client.queueServiceActionCall('media', 'upload', vparams, vfiles);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Update media entry thumbnail by a specified time offset (In seconds)
 * If flavor params id not specified, source flavor will be used by default.
 * @param entryId string Media entry id (optional).
 * @param timeOffset int Time offset (in seconds) (optional).
 * @param flavorParamsId int The flavor params id to be used (optional, default: null).
 * @return VidiunMediaEntry.
 */
VidiunMediaService.prototype.updateThumbnail = function(callback, entryId, timeOffset, flavorParamsId){
	if(!flavorParamsId){
		flavorParamsId = null;
	}
	var vparams = {};
	this.client.addParam(vparams, 'entryId', entryId);
	this.client.addParam(vparams, 'timeOffset', timeOffset);
	this.client.addParam(vparams, 'flavorParamsId', flavorParamsId);
	this.client.queueServiceActionCall('media', 'updateThumbnail', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Update media entry thumbnail from a different entry by a specified time offset (In seconds)
 * If flavor params id not specified, source flavor will be used by default.
 * @param entryId string Media entry id (optional).
 * @param sourceEntryId string Media entry id (optional).
 * @param timeOffset int Time offset (in seconds) (optional).
 * @param flavorParamsId int The flavor params id to be used (optional, default: null).
 * @return VidiunMediaEntry.
 */
VidiunMediaService.prototype.updateThumbnailFromSourceEntry = function(callback, entryId, sourceEntryId, timeOffset, flavorParamsId){
	if(!flavorParamsId){
		flavorParamsId = null;
	}
	var vparams = {};
	this.client.addParam(vparams, 'entryId', entryId);
	this.client.addParam(vparams, 'sourceEntryId', sourceEntryId);
	this.client.addParam(vparams, 'timeOffset', timeOffset);
	this.client.addParam(vparams, 'flavorParamsId', flavorParamsId);
	this.client.queueServiceActionCall('media', 'updateThumbnailFromSourceEntry', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Update media entry thumbnail using a raw jpeg file.
 * @param entryId string Media entry id (optional).
 * @param fileData file Jpeg file data (optional).
 * @return VidiunMediaEntry.
 */
VidiunMediaService.prototype.updateThumbnailJpeg = function(callback, entryId, fileData){
	var vparams = {};
	this.client.addParam(vparams, 'entryId', entryId);
	var vfiles = {};
	this.client.addParam(vfiles, 'fileData', fileData);
	this.client.queueServiceActionCall('media', 'updateThumbnailJpeg', vparams, vfiles);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Update entry thumbnail using url.
 * @param entryId string Media entry id (optional).
 * @param url string file url (optional).
 * @return VidiunBaseEntry.
 */
VidiunMediaService.prototype.updateThumbnailFromUrl = function(callback, entryId, url){
	var vparams = {};
	this.client.addParam(vparams, 'entryId', entryId);
	this.client.addParam(vparams, 'url', url);
	this.client.queueServiceActionCall('media', 'updateThumbnailFromUrl', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Request a new conversion job, this can be used to convert the media entry to a different format.
 * @param entryId string Media entry id (optional).
 * @param fileFormat string Format to convert (optional).
 * @return int.
 */
VidiunMediaService.prototype.requestConversion = function(callback, entryId, fileFormat){
	var vparams = {};
	this.client.addParam(vparams, 'entryId', entryId);
	this.client.addParam(vparams, 'fileFormat', fileFormat);
	this.client.queueServiceActionCall('media', 'requestConversion', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Flag inappropriate media entry for moderation.
 * @param moderationFlag VidiunModerationFlag  (optional).
 * @return .
 */
VidiunMediaService.prototype.flag = function(callback, moderationFlag){
	var vparams = {};
	this.client.addParam(vparams, 'moderationFlag', vidiun.toParams(moderationFlag));
	this.client.queueServiceActionCall('media', 'flag', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Reject the media entry and mark the pending flags (if any) as moderated (this will make the entry non playable).
 * @param entryId string  (optional).
 * @return .
 */
VidiunMediaService.prototype.reject = function(callback, entryId){
	var vparams = {};
	this.client.addParam(vparams, 'entryId', entryId);
	this.client.queueServiceActionCall('media', 'reject', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Approve the media entry and mark the pending flags (if any) as moderated (this will make the entry playable).
 * @param entryId string  (optional).
 * @return .
 */
VidiunMediaService.prototype.approve = function(callback, entryId){
	var vparams = {};
	this.client.addParam(vparams, 'entryId', entryId);
	this.client.queueServiceActionCall('media', 'approve', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * List all pending flags for the media entry.
 * @param entryId string  (optional).
 * @param pager VidiunFilterPager  (optional, default: null).
 * @return VidiunModerationFlagListResponse.
 */
VidiunMediaService.prototype.listFlags = function(callback, entryId, pager){
	if(!pager){
		pager = null;
	}
	var vparams = {};
	this.client.addParam(vparams, 'entryId', entryId);
	if (pager !== null){
		this.client.addParam(vparams, 'pager', vidiun.toParams(pager));
	}
	this.client.queueServiceActionCall('media', 'listFlags', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Anonymously rank a media entry, no validation is done on duplicate rankings.
 * @param entryId string  (optional).
 * @param rank int  (optional).
 * @return .
 */
VidiunMediaService.prototype.anonymousRank = function(callback, entryId, rank){
	var vparams = {};
	this.client.addParam(vparams, 'entryId', entryId);
	this.client.addParam(vparams, 'rank', rank);
	this.client.queueServiceActionCall('media', 'anonymousRank', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Add new bulk upload batch job
 * Conversion profile id can be specified in the API or in the CSV file, the one in the CSV file will be stronger.
 * If no conversion profile was specified, partner's default will be used.
 * @param fileData file  (optional).
 * @param bulkUploadData VidiunBulkUploadJobData  (optional, default: null).
 * @param bulkUploadEntryData VidiunBulkUploadEntryData  (optional, default: null).
 * @return VidiunBulkUpload.
 */
VidiunMediaService.prototype.bulkUploadAdd = function(callback, fileData, bulkUploadData, bulkUploadEntryData){
	if(!bulkUploadData){
		bulkUploadData = null;
	}
	if(!bulkUploadEntryData){
		bulkUploadEntryData = null;
	}
	var vparams = {};
	var vfiles = {};
	this.client.addParam(vfiles, 'fileData', fileData);
	if (bulkUploadData !== null){
		this.client.addParam(vparams, 'bulkUploadData', vidiun.toParams(bulkUploadData));
	}
	if (bulkUploadEntryData !== null){
		this.client.addParam(vparams, 'bulkUploadEntryData', vidiun.toParams(bulkUploadEntryData));
	}
	this.client.queueServiceActionCall('media', 'bulkUploadAdd', vparams, vfiles);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Vidiun service: mixing.
 * The available service actions:
 * @action add Adds a new mix.
 * If the dataContent is null, a default timeline will be created.
 * @action get Get mix entry by id.
 * @action update Update mix entry. Only the properties that were set will be updated.
 * @action delete Delete a mix entry.
 * @action list List entries by filter with paging support.
 * Return parameter is an array of mix entries.
 * @action count Count mix entries by filter.
 * @action clone Clones an existing mix.
 * @action appendMediaEntry Appends a media entry to a the end of the mix timeline, this will save the mix timeline as a new version.
 * @action getMixesByMediaId Get the mixes in which the media entry is included.
 * @action getReadyMediaEntries Get all ready media entries that exist in the given mix id.
 * @action anonymousRank Anonymously rank a mix entry, no validation is done on duplicate rankings.
 */
function VidiunMixingService(client){
	VidiunMixingService.super_.call(this);
	this.init(client);
}

util.inherits(VidiunMixingService, vidiun.VidiunServiceBase);
module.exports.VidiunMixingService = VidiunMixingService;

/**
 * Adds a new mix.
 * If the dataContent is null, a default timeline will be created.
 * @param mixEntry VidiunMixEntry Mix entry metadata (optional).
 * @return VidiunMixEntry.
 */
VidiunMixingService.prototype.add = function(callback, mixEntry){
	var vparams = {};
	this.client.addParam(vparams, 'mixEntry', vidiun.toParams(mixEntry));
	this.client.queueServiceActionCall('mixing', 'add', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Get mix entry by id.
 * @param entryId string Mix entry id (optional).
 * @param version int Desired version of the data (optional, default: -1).
 * @return VidiunMixEntry.
 */
VidiunMixingService.prototype.get = function(callback, entryId, version){
	if(!version){
		version = -1;
	}
	var vparams = {};
	this.client.addParam(vparams, 'entryId', entryId);
	this.client.addParam(vparams, 'version', version);
	this.client.queueServiceActionCall('mixing', 'get', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Update mix entry. Only the properties that were set will be updated.
 * @param entryId string Mix entry id to update (optional).
 * @param mixEntry VidiunMixEntry Mix entry metadata to update (optional).
 * @return VidiunMixEntry.
 */
VidiunMixingService.prototype.update = function(callback, entryId, mixEntry){
	var vparams = {};
	this.client.addParam(vparams, 'entryId', entryId);
	this.client.addParam(vparams, 'mixEntry', vidiun.toParams(mixEntry));
	this.client.queueServiceActionCall('mixing', 'update', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Delete a mix entry.
 * @param entryId string Mix entry id to delete (optional).
 * @return .
 */
VidiunMixingService.prototype.deleteAction = function(callback, entryId){
	var vparams = {};
	this.client.addParam(vparams, 'entryId', entryId);
	this.client.queueServiceActionCall('mixing', 'delete', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * List entries by filter with paging support.
 * Return parameter is an array of mix entries.
 * @param filter VidiunMixEntryFilter Mix entry filter (optional, default: null).
 * @param pager VidiunFilterPager Pager (optional, default: null).
 * @return VidiunMixListResponse.
 */
VidiunMixingService.prototype.listAction = function(callback, filter, pager){
	if(!filter){
		filter = null;
	}
	if(!pager){
		pager = null;
	}
	var vparams = {};
	if (filter !== null){
		this.client.addParam(vparams, 'filter', vidiun.toParams(filter));
	}
	if (pager !== null){
		this.client.addParam(vparams, 'pager', vidiun.toParams(pager));
	}
	this.client.queueServiceActionCall('mixing', 'list', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Count mix entries by filter.
 * @param filter VidiunMediaEntryFilter Media entry filter (optional, default: null).
 * @return int.
 */
VidiunMixingService.prototype.count = function(callback, filter){
	if(!filter){
		filter = null;
	}
	var vparams = {};
	if (filter !== null){
		this.client.addParam(vparams, 'filter', vidiun.toParams(filter));
	}
	this.client.queueServiceActionCall('mixing', 'count', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Clones an existing mix.
 * @param entryId string Mix entry id to clone (optional).
 * @return VidiunMixEntry.
 */
VidiunMixingService.prototype.cloneAction = function(callback, entryId){
	var vparams = {};
	this.client.addParam(vparams, 'entryId', entryId);
	this.client.queueServiceActionCall('mixing', 'clone', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Appends a media entry to a the end of the mix timeline, this will save the mix timeline as a new version.
 * @param mixEntryId string Mix entry to append to its timeline (optional).
 * @param mediaEntryId string Media entry to append to the timeline (optional).
 * @return VidiunMixEntry.
 */
VidiunMixingService.prototype.appendMediaEntry = function(callback, mixEntryId, mediaEntryId){
	var vparams = {};
	this.client.addParam(vparams, 'mixEntryId', mixEntryId);
	this.client.addParam(vparams, 'mediaEntryId', mediaEntryId);
	this.client.queueServiceActionCall('mixing', 'appendMediaEntry', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Get the mixes in which the media entry is included.
 * @param mediaEntryId string  (optional).
 * @return array.
 */
VidiunMixingService.prototype.getMixesByMediaId = function(callback, mediaEntryId){
	var vparams = {};
	this.client.addParam(vparams, 'mediaEntryId', mediaEntryId);
	this.client.queueServiceActionCall('mixing', 'getMixesByMediaId', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Get all ready media entries that exist in the given mix id.
 * @param mixId string  (optional).
 * @param version int Desired version to get the data from (optional, default: -1).
 * @return array.
 */
VidiunMixingService.prototype.getReadyMediaEntries = function(callback, mixId, version){
	if(!version){
		version = -1;
	}
	var vparams = {};
	this.client.addParam(vparams, 'mixId', mixId);
	this.client.addParam(vparams, 'version', version);
	this.client.queueServiceActionCall('mixing', 'getReadyMediaEntries', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Anonymously rank a mix entry, no validation is done on duplicate rankings.
 * @param entryId string  (optional).
 * @param rank int  (optional).
 * @return .
 */
VidiunMixingService.prototype.anonymousRank = function(callback, entryId, rank){
	var vparams = {};
	this.client.addParam(vparams, 'entryId', entryId);
	this.client.addParam(vparams, 'rank', rank);
	this.client.queueServiceActionCall('mixing', 'anonymousRank', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Vidiun service: notification.
 * The available service actions:
 * @action getClientNotification Return the notifications for a specific entry id and type.
 */
function VidiunNotificationService(client){
	VidiunNotificationService.super_.call(this);
	this.init(client);
}

util.inherits(VidiunNotificationService, vidiun.VidiunServiceBase);
module.exports.VidiunNotificationService = VidiunNotificationService;

/**
 * Return the notifications for a specific entry id and type.
 * @param entryId string  (optional).
 * @param type int  (optional, enum: VidiunNotificationType).
 * @return VidiunClientNotification.
 */
VidiunNotificationService.prototype.getClientNotification = function(callback, entryId, type){
	var vparams = {};
	this.client.addParam(vparams, 'entryId', entryId);
	this.client.addParam(vparams, 'type', type);
	this.client.queueServiceActionCall('notification', 'getClientNotification', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Vidiun service: partner.
 * The available service actions:
 * @action register Create a new Partner object.
 * @action update Update details and settings of an existing partner.
 * @action get Retrieve partner object by Id.
 * @action getSecrets Retrieve partner secret and admin secret.
 * @action getInfo Retrieve all info attributed to the partner
 * This action expects no parameters. It returns information for the current VS partnerId.
 * @action getUsage Get usage statistics for a partner
 * Calculation is done according to partner's package
 * Additional data returned is a graph points of streaming usage in a timeframe
 * The resolution can be "days" or "months".
 * @action getStatistics Get usage statistics for a partner
 * Calculation is done according to partner's package.
 * @action listPartnersForUser Retrieve a list of partner objects which the current user is allowed to access.
 * @action list List partners by filter with paging support
 * Current implementation will only list the sub partners of the partner initiating the api call (using the current VS).
 * This action is only partially implemented to support listing sub partners of a VAR partner.
 * @action listFeatureStatus List partner's current processes' statuses.
 * @action count Count partner's existing sub-publishers (count includes the partner itself).
 */
function VidiunPartnerService(client){
	VidiunPartnerService.super_.call(this);
	this.init(client);
}

util.inherits(VidiunPartnerService, vidiun.VidiunServiceBase);
module.exports.VidiunPartnerService = VidiunPartnerService;

/**
 * Create a new Partner object.
 * @param partner VidiunPartner  (optional).
 * @param cmsPassword string  (optional).
 * @param templatePartnerId int  (optional, default: null).
 * @param silent bool  (optional, default: false).
 * @return VidiunPartner.
 */
VidiunPartnerService.prototype.register = function(callback, partner, cmsPassword, templatePartnerId, silent){
	if(!cmsPassword){
		cmsPassword = '';
	}
	if(!templatePartnerId){
		templatePartnerId = null;
	}
	if(!silent){
		silent = false;
	}
	var vparams = {};
	this.client.addParam(vparams, 'partner', vidiun.toParams(partner));
	this.client.addParam(vparams, 'cmsPassword', cmsPassword);
	this.client.addParam(vparams, 'templatePartnerId', templatePartnerId);
	this.client.addParam(vparams, 'silent', silent);
	this.client.queueServiceActionCall('partner', 'register', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Update details and settings of an existing partner.
 * @param partner VidiunPartner  (optional).
 * @param allowEmpty bool  (optional, default: false).
 * @return VidiunPartner.
 */
VidiunPartnerService.prototype.update = function(callback, partner, allowEmpty){
	if(!allowEmpty){
		allowEmpty = false;
	}
	var vparams = {};
	this.client.addParam(vparams, 'partner', vidiun.toParams(partner));
	this.client.addParam(vparams, 'allowEmpty', allowEmpty);
	this.client.queueServiceActionCall('partner', 'update', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Retrieve partner object by Id.
 * @param id int  (optional, default: null).
 * @return VidiunPartner.
 */
VidiunPartnerService.prototype.get = function(callback, id){
	if(!id){
		id = null;
	}
	var vparams = {};
	this.client.addParam(vparams, 'id', id);
	this.client.queueServiceActionCall('partner', 'get', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Retrieve partner secret and admin secret.
 * @param partnerId int  (optional).
 * @param adminEmail string  (optional).
 * @param cmsPassword string  (optional).
 * @return VidiunPartner.
 */
VidiunPartnerService.prototype.getSecrets = function(callback, partnerId, adminEmail, cmsPassword){
	var vparams = {};
	this.client.addParam(vparams, 'partnerId', partnerId);
	this.client.addParam(vparams, 'adminEmail', adminEmail);
	this.client.addParam(vparams, 'cmsPassword', cmsPassword);
	this.client.queueServiceActionCall('partner', 'getSecrets', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Retrieve all info attributed to the partner
 * This action expects no parameters. It returns information for the current VS partnerId.
 * @return VidiunPartner.
 */
VidiunPartnerService.prototype.getInfo = function(callback){
	var vparams = {};
	this.client.queueServiceActionCall('partner', 'getInfo', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Get usage statistics for a partner
 * Calculation is done according to partner's package
 * Additional data returned is a graph points of streaming usage in a timeframe
 * The resolution can be "days" or "months".
 * @param year int  (optional).
 * @param month int  (optional, default: 1).
 * @param resolution string  (optional, enum: VidiunReportInterval, default: null).
 * @return VidiunPartnerUsage.
 */
VidiunPartnerService.prototype.getUsage = function(callback, year, month, resolution){
	if(!year){
		year = '';
	}
	if(!month){
		month = 1;
	}
	if(!resolution){
		resolution = null;
	}
	var vparams = {};
	this.client.addParam(vparams, 'year', year);
	this.client.addParam(vparams, 'month', month);
	this.client.addParam(vparams, 'resolution', resolution);
	this.client.queueServiceActionCall('partner', 'getUsage', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Get usage statistics for a partner
 * Calculation is done according to partner's package.
 * @return VidiunPartnerStatistics.
 */
VidiunPartnerService.prototype.getStatistics = function(callback){
	var vparams = {};
	this.client.queueServiceActionCall('partner', 'getStatistics', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Retrieve a list of partner objects which the current user is allowed to access.
 * @param partnerFilter VidiunPartnerFilter  (optional, default: null).
 * @param pager VidiunFilterPager  (optional, default: null).
 * @return VidiunPartnerListResponse.
 */
VidiunPartnerService.prototype.listPartnersForUser = function(callback, partnerFilter, pager){
	if(!partnerFilter){
		partnerFilter = null;
	}
	if(!pager){
		pager = null;
	}
	var vparams = {};
	if (partnerFilter !== null){
		this.client.addParam(vparams, 'partnerFilter', vidiun.toParams(partnerFilter));
	}
	if (pager !== null){
		this.client.addParam(vparams, 'pager', vidiun.toParams(pager));
	}
	this.client.queueServiceActionCall('partner', 'listPartnersForUser', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * List partners by filter with paging support
 * Current implementation will only list the sub partners of the partner initiating the api call (using the current VS).
 * This action is only partially implemented to support listing sub partners of a VAR partner.
 * @param filter VidiunPartnerFilter  (optional, default: null).
 * @param pager VidiunFilterPager  (optional, default: null).
 * @return VidiunPartnerListResponse.
 */
VidiunPartnerService.prototype.listAction = function(callback, filter, pager){
	if(!filter){
		filter = null;
	}
	if(!pager){
		pager = null;
	}
	var vparams = {};
	if (filter !== null){
		this.client.addParam(vparams, 'filter', vidiun.toParams(filter));
	}
	if (pager !== null){
		this.client.addParam(vparams, 'pager', vidiun.toParams(pager));
	}
	this.client.queueServiceActionCall('partner', 'list', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * List partner's current processes' statuses.
 * @return VidiunFeatureStatusListResponse.
 */
VidiunPartnerService.prototype.listFeatureStatus = function(callback){
	var vparams = {};
	this.client.queueServiceActionCall('partner', 'listFeatureStatus', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Count partner's existing sub-publishers (count includes the partner itself).
 * @param filter VidiunPartnerFilter  (optional, default: null).
 * @return int.
 */
VidiunPartnerService.prototype.count = function(callback, filter){
	if(!filter){
		filter = null;
	}
	var vparams = {};
	if (filter !== null){
		this.client.addParam(vparams, 'filter', vidiun.toParams(filter));
	}
	this.client.queueServiceActionCall('partner', 'count', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Vidiun service: permissionItem.
 * The available service actions:
 * @action add Adds a new permission item object to the account.
 * This action is available only to Vidiun system administrators.
 * @action get Retrieves a permission item object using its ID.
 * @action update Updates an existing permission item object.
 * This action is available only to Vidiun system administrators.
 * @action delete Deletes an existing permission item object.
 * This action is available only to Vidiun system administrators.
 * @action list Lists permission item objects that are associated with an account.
 */
function VidiunPermissionItemService(client){
	VidiunPermissionItemService.super_.call(this);
	this.init(client);
}

util.inherits(VidiunPermissionItemService, vidiun.VidiunServiceBase);
module.exports.VidiunPermissionItemService = VidiunPermissionItemService;

/**
 * Adds a new permission item object to the account.
 * This action is available only to Vidiun system administrators.
 * @param permissionItem VidiunPermissionItem The new permission item (optional).
 * @return VidiunPermissionItem.
 */
VidiunPermissionItemService.prototype.add = function(callback, permissionItem){
	var vparams = {};
	this.client.addParam(vparams, 'permissionItem', vidiun.toParams(permissionItem));
	this.client.queueServiceActionCall('permissionitem', 'add', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Retrieves a permission item object using its ID.
 * @param permissionItemId int The permission item's unique identifier (optional).
 * @return VidiunPermissionItem.
 */
VidiunPermissionItemService.prototype.get = function(callback, permissionItemId){
	var vparams = {};
	this.client.addParam(vparams, 'permissionItemId', permissionItemId);
	this.client.queueServiceActionCall('permissionitem', 'get', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Updates an existing permission item object.
 * This action is available only to Vidiun system administrators.
 * @param permissionItemId int The permission item's unique identifier (optional).
 * @param permissionItem VidiunPermissionItem Id The permission item's unique identifier (optional).
 * @return VidiunPermissionItem.
 */
VidiunPermissionItemService.prototype.update = function(callback, permissionItemId, permissionItem){
	var vparams = {};
	this.client.addParam(vparams, 'permissionItemId', permissionItemId);
	this.client.addParam(vparams, 'permissionItem', vidiun.toParams(permissionItem));
	this.client.queueServiceActionCall('permissionitem', 'update', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Deletes an existing permission item object.
 * This action is available only to Vidiun system administrators.
 * @param permissionItemId int The permission item's unique identifier (optional).
 * @return VidiunPermissionItem.
 */
VidiunPermissionItemService.prototype.deleteAction = function(callback, permissionItemId){
	var vparams = {};
	this.client.addParam(vparams, 'permissionItemId', permissionItemId);
	this.client.queueServiceActionCall('permissionitem', 'delete', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Lists permission item objects that are associated with an account.
 * @param filter VidiunPermissionItemFilter A filter used to exclude specific types of permission items (optional, default: null).
 * @param pager VidiunFilterPager A limit for the number of records to display on a page (optional, default: null).
 * @return VidiunPermissionItemListResponse.
 */
VidiunPermissionItemService.prototype.listAction = function(callback, filter, pager){
	if(!filter){
		filter = null;
	}
	if(!pager){
		pager = null;
	}
	var vparams = {};
	if (filter !== null){
		this.client.addParam(vparams, 'filter', vidiun.toParams(filter));
	}
	if (pager !== null){
		this.client.addParam(vparams, 'pager', vidiun.toParams(pager));
	}
	this.client.queueServiceActionCall('permissionitem', 'list', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Vidiun service: permission.
 * The available service actions:
 * @action add Adds a new permission object to the account.
 * @action get Retrieves a permission object using its ID.
 * @action update Updates an existing permission object.
 * @action delete Deletes an existing permission object.
 * @action list Lists permission objects that are associated with an account.
 * Blocked permissions are listed unless you use a filter to exclude them.
 * Blocked permissions are listed unless you use a filter to exclude them.
 * @action getCurrentPermissions Retrieves a list of permissions that apply to the current VS.
 */
function VidiunPermissionService(client){
	VidiunPermissionService.super_.call(this);
	this.init(client);
}

util.inherits(VidiunPermissionService, vidiun.VidiunServiceBase);
module.exports.VidiunPermissionService = VidiunPermissionService;

/**
 * Adds a new permission object to the account.
 * @param permission VidiunPermission The new permission (optional).
 * @return VidiunPermission.
 */
VidiunPermissionService.prototype.add = function(callback, permission){
	var vparams = {};
	this.client.addParam(vparams, 'permission', vidiun.toParams(permission));
	this.client.queueServiceActionCall('permission', 'add', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Retrieves a permission object using its ID.
 * @param permissionName string The name assigned to the permission (optional).
 * @return VidiunPermission.
 */
VidiunPermissionService.prototype.get = function(callback, permissionName){
	var vparams = {};
	this.client.addParam(vparams, 'permissionName', permissionName);
	this.client.queueServiceActionCall('permission', 'get', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Updates an existing permission object.
 * @param permissionName string The name assigned to the permission (optional).
 * @param permission VidiunPermission Name The name assigned to the permission (optional).
 * @return VidiunPermission.
 */
VidiunPermissionService.prototype.update = function(callback, permissionName, permission){
	var vparams = {};
	this.client.addParam(vparams, 'permissionName', permissionName);
	this.client.addParam(vparams, 'permission', vidiun.toParams(permission));
	this.client.queueServiceActionCall('permission', 'update', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Deletes an existing permission object.
 * @param permissionName string The name assigned to the permission (optional).
 * @return VidiunPermission.
 */
VidiunPermissionService.prototype.deleteAction = function(callback, permissionName){
	var vparams = {};
	this.client.addParam(vparams, 'permissionName', permissionName);
	this.client.queueServiceActionCall('permission', 'delete', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Lists permission objects that are associated with an account.
 * Blocked permissions are listed unless you use a filter to exclude them.
 * Blocked permissions are listed unless you use a filter to exclude them.
 * @param filter VidiunPermissionFilter A filter used to exclude specific types of permissions (optional, default: null).
 * @param pager VidiunFilterPager A limit for the number of records to display on a page (optional, default: null).
 * @return VidiunPermissionListResponse.
 */
VidiunPermissionService.prototype.listAction = function(callback, filter, pager){
	if(!filter){
		filter = null;
	}
	if(!pager){
		pager = null;
	}
	var vparams = {};
	if (filter !== null){
		this.client.addParam(vparams, 'filter', vidiun.toParams(filter));
	}
	if (pager !== null){
		this.client.addParam(vparams, 'pager', vidiun.toParams(pager));
	}
	this.client.queueServiceActionCall('permission', 'list', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Retrieves a list of permissions that apply to the current VS.
 * @return string.
 */
VidiunPermissionService.prototype.getCurrentPermissions = function(callback){
	var vparams = {};
	this.client.queueServiceActionCall('permission', 'getCurrentPermissions', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Vidiun service: playlist.
 * The available service actions:
 * @action add Add new playlist
 * Note that all entries used in a playlist will become public and may appear in VidiunNetwork.
 * @action get Retrieve a playlist.
 * @action update Update existing playlist
 * Note - you cannot change playlist type. updated playlist must be of the same type.
 * @action delete Delete existing playlist.
 * @action clone Clone an existing playlist.
 * @action list List available playlists.
 * @action execute Retrieve playlist for playing purpose.
 * @action executeFromContent Retrieve playlist for playing purpose, based on content.
 * @action executeFromFilters Revrieve playlist for playing purpose, based on media entry filters.
 * @action getStatsFromContent Retrieve playlist statistics.
 */
function VidiunPlaylistService(client){
	VidiunPlaylistService.super_.call(this);
	this.init(client);
}

util.inherits(VidiunPlaylistService, vidiun.VidiunServiceBase);
module.exports.VidiunPlaylistService = VidiunPlaylistService;

/**
 * Add new playlist
 * Note that all entries used in a playlist will become public and may appear in VidiunNetwork.
 * @param playlist VidiunPlaylist  (optional).
 * @param updateStats bool indicates that the playlist statistics attributes should be updated synchronously now (optional, default: false).
 * @return VidiunPlaylist.
 */
VidiunPlaylistService.prototype.add = function(callback, playlist, updateStats){
	if(!updateStats){
		updateStats = false;
	}
	var vparams = {};
	this.client.addParam(vparams, 'playlist', vidiun.toParams(playlist));
	this.client.addParam(vparams, 'updateStats', updateStats);
	this.client.queueServiceActionCall('playlist', 'add', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Retrieve a playlist.
 * @param id string  (optional).
 * @param version int Desired version of the data (optional, default: -1).
 * @return VidiunPlaylist.
 */
VidiunPlaylistService.prototype.get = function(callback, id, version){
	if(!version){
		version = -1;
	}
	var vparams = {};
	this.client.addParam(vparams, 'id', id);
	this.client.addParam(vparams, 'version', version);
	this.client.queueServiceActionCall('playlist', 'get', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Update existing playlist
 * Note - you cannot change playlist type. updated playlist must be of the same type.
 * @param id string  (optional).
 * @param playlist VidiunPlaylist  (optional).
 * @param updateStats bool  (optional, default: false).
 * @return VidiunPlaylist.
 */
VidiunPlaylistService.prototype.update = function(callback, id, playlist, updateStats){
	if(!updateStats){
		updateStats = false;
	}
	var vparams = {};
	this.client.addParam(vparams, 'id', id);
	this.client.addParam(vparams, 'playlist', vidiun.toParams(playlist));
	this.client.addParam(vparams, 'updateStats', updateStats);
	this.client.queueServiceActionCall('playlist', 'update', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Delete existing playlist.
 * @param id string  (optional).
 * @return .
 */
VidiunPlaylistService.prototype.deleteAction = function(callback, id){
	var vparams = {};
	this.client.addParam(vparams, 'id', id);
	this.client.queueServiceActionCall('playlist', 'delete', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Clone an existing playlist.
 * @param id string Id of the playlist to clone (optional).
 * @param newPlaylist VidiunPlaylist Parameters defined here will override the ones in the cloned playlist (optional, default: null).
 * @return VidiunPlaylist.
 */
VidiunPlaylistService.prototype.cloneAction = function(callback, id, newPlaylist){
	if(!newPlaylist){
		newPlaylist = null;
	}
	var vparams = {};
	this.client.addParam(vparams, 'id', id);
	if (newPlaylist !== null){
		this.client.addParam(vparams, 'newPlaylist', vidiun.toParams(newPlaylist));
	}
	this.client.queueServiceActionCall('playlist', 'clone', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * List available playlists.
 * @param filter VidiunPlaylistFilter  (optional, default: null).
 * @param pager VidiunFilterPager  (optional, default: null).
 * @return VidiunPlaylistListResponse.
 */
VidiunPlaylistService.prototype.listAction = function(callback, filter, pager){
	if(!filter){
		filter = null;
	}
	if(!pager){
		pager = null;
	}
	var vparams = {};
	if (filter !== null){
		this.client.addParam(vparams, 'filter', vidiun.toParams(filter));
	}
	if (pager !== null){
		this.client.addParam(vparams, 'pager', vidiun.toParams(pager));
	}
	this.client.queueServiceActionCall('playlist', 'list', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Retrieve playlist for playing purpose.
 * @param id string  (optional).
 * @param detailed string  (optional).
 * @param playlistContext VidiunContext  (optional, default: null).
 * @param filter VidiunMediaEntryFilterForPlaylist  (optional, default: null).
 * @param pager VidiunFilterPager  (optional, default: null).
 * @return array.
 */
VidiunPlaylistService.prototype.execute = function(callback, id, detailed, playlistContext, filter, pager){
	if(!detailed){
		detailed = '';
	}
	if(!playlistContext){
		playlistContext = null;
	}
	if(!filter){
		filter = null;
	}
	if(!pager){
		pager = null;
	}
	var vparams = {};
	this.client.addParam(vparams, 'id', id);
	this.client.addParam(vparams, 'detailed', detailed);
	if (playlistContext !== null){
		this.client.addParam(vparams, 'playlistContext', vidiun.toParams(playlistContext));
	}
	if (filter !== null){
		this.client.addParam(vparams, 'filter', vidiun.toParams(filter));
	}
	if (pager !== null){
		this.client.addParam(vparams, 'pager', vidiun.toParams(pager));
	}
	this.client.queueServiceActionCall('playlist', 'execute', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Retrieve playlist for playing purpose, based on content.
 * @param playlistType int  (optional, enum: VidiunPlaylistType).
 * @param playlistContent string  (optional).
 * @param detailed string  (optional).
 * @param pager VidiunFilterPager  (optional, default: null).
 * @return array.
 */
VidiunPlaylistService.prototype.executeFromContent = function(callback, playlistType, playlistContent, detailed, pager){
	if(!detailed){
		detailed = '';
	}
	if(!pager){
		pager = null;
	}
	var vparams = {};
	this.client.addParam(vparams, 'playlistType', playlistType);
	this.client.addParam(vparams, 'playlistContent', playlistContent);
	this.client.addParam(vparams, 'detailed', detailed);
	if (pager !== null){
		this.client.addParam(vparams, 'pager', vidiun.toParams(pager));
	}
	this.client.queueServiceActionCall('playlist', 'executeFromContent', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Revrieve playlist for playing purpose, based on media entry filters.
 * @param filters array  (optional).
 * @param totalResults int  (optional).
 * @param detailed string  (optional, default: 1).
 * @param pager VidiunFilterPager  (optional, default: null).
 * @return array.
 */
VidiunPlaylistService.prototype.executeFromFilters = function(callback, filters, totalResults, detailed, pager){
	if(!detailed){
		detailed = 1;
	}
	if(!pager){
		pager = null;
	}
	var vparams = {};
for(var index in filters)
{
	var obj = filters[index];
	this.client.addParam(vparams, 'filters:' + index, vidiun.toParams(obj));
}
	this.client.addParam(vparams, 'totalResults', totalResults);
	this.client.addParam(vparams, 'detailed', detailed);
	if (pager !== null){
		this.client.addParam(vparams, 'pager', vidiun.toParams(pager));
	}
	this.client.queueServiceActionCall('playlist', 'executeFromFilters', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Retrieve playlist statistics.
 * @param playlistType int  (optional, enum: VidiunPlaylistType).
 * @param playlistContent string  (optional).
 * @return VidiunPlaylist.
 */
VidiunPlaylistService.prototype.getStatsFromContent = function(callback, playlistType, playlistContent){
	var vparams = {};
	this.client.addParam(vparams, 'playlistType', playlistType);
	this.client.addParam(vparams, 'playlistContent', playlistContent);
	this.client.queueServiceActionCall('playlist', 'getStatsFromContent', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Vidiun service: report.
 * The available service actions:
 * @action getGraphs report getGraphs action allows to get a graph data for a specific report.
 * @action getTotal report getTotal action allows to get a graph data for a specific report.
 * @action getBaseTotal report getBaseTotal action allows to get a the total base for storage reports.
 * @action getTable report getTable action allows to get a graph data for a specific report.
 * @action getUrlForReportAsCsv will create a Csv file for the given report and return the URL to access it.
 * @action serve Will serve a requested report.
 * @action execute .
 */
function VidiunReportService(client){
	VidiunReportService.super_.call(this);
	this.init(client);
}

util.inherits(VidiunReportService, vidiun.VidiunServiceBase);
module.exports.VidiunReportService = VidiunReportService;

/**
 * report getGraphs action allows to get a graph data for a specific report.
 * @param reportType string  (optional, enum: VidiunReportType).
 * @param reportInputFilter VidiunReportInputFilter  (optional).
 * @param dimension string  (optional, default: null).
 * @param objectIds string - one ID or more (separated by ',') of specific objects to query (optional, default: null).
 * @return array.
 */
VidiunReportService.prototype.getGraphs = function(callback, reportType, reportInputFilter, dimension, objectIds){
	if(!dimension){
		dimension = null;
	}
	if(!objectIds){
		objectIds = null;
	}
	var vparams = {};
	this.client.addParam(vparams, 'reportType', reportType);
	this.client.addParam(vparams, 'reportInputFilter', vidiun.toParams(reportInputFilter));
	this.client.addParam(vparams, 'dimension', dimension);
	this.client.addParam(vparams, 'objectIds', objectIds);
	this.client.queueServiceActionCall('report', 'getGraphs', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * report getTotal action allows to get a graph data for a specific report.
 * @param reportType string  (optional, enum: VidiunReportType).
 * @param reportInputFilter VidiunReportInputFilter  (optional).
 * @param objectIds string - one ID or more (separated by ',') of specific objects to query (optional, default: null).
 * @return VidiunReportTotal.
 */
VidiunReportService.prototype.getTotal = function(callback, reportType, reportInputFilter, objectIds){
	if(!objectIds){
		objectIds = null;
	}
	var vparams = {};
	this.client.addParam(vparams, 'reportType', reportType);
	this.client.addParam(vparams, 'reportInputFilter', vidiun.toParams(reportInputFilter));
	this.client.addParam(vparams, 'objectIds', objectIds);
	this.client.queueServiceActionCall('report', 'getTotal', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * report getBaseTotal action allows to get a the total base for storage reports.
 * @param reportType string  (optional, enum: VidiunReportType).
 * @param reportInputFilter VidiunReportInputFilter  (optional).
 * @param objectIds string - one ID or more (separated by ',') of specific objects to query (optional, default: null).
 * @return array.
 */
VidiunReportService.prototype.getBaseTotal = function(callback, reportType, reportInputFilter, objectIds){
	if(!objectIds){
		objectIds = null;
	}
	var vparams = {};
	this.client.addParam(vparams, 'reportType', reportType);
	this.client.addParam(vparams, 'reportInputFilter', vidiun.toParams(reportInputFilter));
	this.client.addParam(vparams, 'objectIds', objectIds);
	this.client.queueServiceActionCall('report', 'getBaseTotal', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * report getTable action allows to get a graph data for a specific report.
 * @param reportType string  (optional, enum: VidiunReportType).
 * @param reportInputFilter VidiunReportInputFilter  (optional).
 * @param pager VidiunFilterPager  (optional).
 * @param order string  (optional, default: null).
 * @param objectIds string - one ID or more (separated by ',') of specific objects to query (optional, default: null).
 * @return VidiunReportTable.
 */
VidiunReportService.prototype.getTable = function(callback, reportType, reportInputFilter, pager, order, objectIds){
	if(!order){
		order = null;
	}
	if(!objectIds){
		objectIds = null;
	}
	var vparams = {};
	this.client.addParam(vparams, 'reportType', reportType);
	this.client.addParam(vparams, 'reportInputFilter', vidiun.toParams(reportInputFilter));
	this.client.addParam(vparams, 'pager', vidiun.toParams(pager));
	this.client.addParam(vparams, 'order', order);
	this.client.addParam(vparams, 'objectIds', objectIds);
	this.client.queueServiceActionCall('report', 'getTable', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * will create a Csv file for the given report and return the URL to access it.
 * @param reportTitle string The title of the report to display at top of CSV (optional).
 * @param reportText string The text of the filter of the report (optional).
 * @param headers string The headers of the columns - a map between the enumerations on the server side and the their display text (optional).
 * @param reportType string  (optional, enum: VidiunReportType).
 * @param reportInputFilter VidiunReportInputFilter  (optional).
 * @param dimension string  (optional, default: null).
 * @param pager VidiunFilterPager  (optional, default: null).
 * @param order string  (optional, default: null).
 * @param objectIds string - one ID or more (separated by ',') of specific objects to query (optional, default: null).
 * @return string.
 */
VidiunReportService.prototype.getUrlForReportAsCsv = function(callback, reportTitle, reportText, headers, reportType, reportInputFilter, dimension, pager, order, objectIds){
	if(!dimension){
		dimension = null;
	}
	if(!pager){
		pager = null;
	}
	if(!order){
		order = null;
	}
	if(!objectIds){
		objectIds = null;
	}
	var vparams = {};
	this.client.addParam(vparams, 'reportTitle', reportTitle);
	this.client.addParam(vparams, 'reportText', reportText);
	this.client.addParam(vparams, 'headers', headers);
	this.client.addParam(vparams, 'reportType', reportType);
	this.client.addParam(vparams, 'reportInputFilter', vidiun.toParams(reportInputFilter));
	this.client.addParam(vparams, 'dimension', dimension);
	if (pager !== null){
		this.client.addParam(vparams, 'pager', vidiun.toParams(pager));
	}
	this.client.addParam(vparams, 'order', order);
	this.client.addParam(vparams, 'objectIds', objectIds);
	this.client.queueServiceActionCall('report', 'getUrlForReportAsCsv', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Will serve a requested report.
 * @param id string - the requested id (optional).
 * @return string.
 */
VidiunReportService.prototype.serve = function(callback, id){
	var vparams = {};
	this.client.addParam(vparams, 'id', id);
	this.client.queueServiceActionCall('report', 'serve', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * .
 * @param id int  (optional).
 * @param params array  (optional, default: null).
 * @return VidiunReportResponse.
 */
VidiunReportService.prototype.execute = function(callback, id, params){
	if(!params){
		params = null;
	}
	var vparams = {};
	this.client.addParam(vparams, 'id', id);
	if(params !== null){
	for(var index in params)
	{
		var obj = params[index];
		this.client.addParam(vparams, 'params:' + index, vidiun.toParams(obj));
	}
	}
	this.client.queueServiceActionCall('report', 'execute', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Vidiun service: responseProfile.
 * The available service actions:
 * @action add Add new response profile.
 * @action get Get response profile by id.
 * @action update Update response profile by id.
 * @action updateStatus Update response profile status by id.
 * @action delete Delete response profile by id.
 * @action list List response profiles by filter and pager.
 * @action recalculate Recalculate response profile cached objects.
 * @action clone Clone an existing response profile.
 */
function VidiunResponseProfileService(client){
	VidiunResponseProfileService.super_.call(this);
	this.init(client);
}

util.inherits(VidiunResponseProfileService, vidiun.VidiunServiceBase);
module.exports.VidiunResponseProfileService = VidiunResponseProfileService;

/**
 * Add new response profile.
 * @param addResponseProfile VidiunResponseProfile  (optional).
 * @return VidiunResponseProfile.
 */
VidiunResponseProfileService.prototype.add = function(callback, addResponseProfile){
	var vparams = {};
	this.client.addParam(vparams, 'addResponseProfile', vidiun.toParams(addResponseProfile));
	this.client.queueServiceActionCall('responseprofile', 'add', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Get response profile by id.
 * @param id int  (optional).
 * @return VidiunResponseProfile.
 */
VidiunResponseProfileService.prototype.get = function(callback, id){
	var vparams = {};
	this.client.addParam(vparams, 'id', id);
	this.client.queueServiceActionCall('responseprofile', 'get', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Update response profile by id.
 * @param id int  (optional).
 * @param updateResponseProfile VidiunResponseProfile  (optional).
 * @return VidiunResponseProfile.
 */
VidiunResponseProfileService.prototype.update = function(callback, id, updateResponseProfile){
	var vparams = {};
	this.client.addParam(vparams, 'id', id);
	this.client.addParam(vparams, 'updateResponseProfile', vidiun.toParams(updateResponseProfile));
	this.client.queueServiceActionCall('responseprofile', 'update', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Update response profile status by id.
 * @param id int  (optional).
 * @param status int  (optional, enum: VidiunResponseProfileStatus).
 * @return VidiunResponseProfile.
 */
VidiunResponseProfileService.prototype.updateStatus = function(callback, id, status){
	var vparams = {};
	this.client.addParam(vparams, 'id', id);
	this.client.addParam(vparams, 'status', status);
	this.client.queueServiceActionCall('responseprofile', 'updateStatus', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Delete response profile by id.
 * @param id int  (optional).
 * @return .
 */
VidiunResponseProfileService.prototype.deleteAction = function(callback, id){
	var vparams = {};
	this.client.addParam(vparams, 'id', id);
	this.client.queueServiceActionCall('responseprofile', 'delete', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * List response profiles by filter and pager.
 * @param filter VidiunResponseProfileFilter  (optional, default: null).
 * @param pager VidiunFilterPager  (optional, default: null).
 * @return VidiunResponseProfileListResponse.
 */
VidiunResponseProfileService.prototype.listAction = function(callback, filter, pager){
	if(!filter){
		filter = null;
	}
	if(!pager){
		pager = null;
	}
	var vparams = {};
	if (filter !== null){
		this.client.addParam(vparams, 'filter', vidiun.toParams(filter));
	}
	if (pager !== null){
		this.client.addParam(vparams, 'pager', vidiun.toParams(pager));
	}
	this.client.queueServiceActionCall('responseprofile', 'list', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Recalculate response profile cached objects.
 * @param options VidiunResponseProfileCacheRecalculateOptions  (optional).
 * @return VidiunResponseProfileCacheRecalculateResults.
 */
VidiunResponseProfileService.prototype.recalculate = function(callback, options){
	var vparams = {};
	this.client.addParam(vparams, 'options', vidiun.toParams(options));
	this.client.queueServiceActionCall('responseprofile', 'recalculate', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Clone an existing response profile.
 * @param id int  (optional).
 * @param profile VidiunResponseProfile  (optional).
 * @return VidiunResponseProfile.
 */
VidiunResponseProfileService.prototype.cloneAction = function(callback, id, profile){
	var vparams = {};
	this.client.addParam(vparams, 'id', id);
	this.client.addParam(vparams, 'profile', vidiun.toParams(profile));
	this.client.queueServiceActionCall('responseprofile', 'clone', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Vidiun service: schema.
 * The available service actions:
 */
function VidiunSchemaService(client){
	VidiunSchemaService.super_.call(this);
	this.init(client);
}

util.inherits(VidiunSchemaService, vidiun.VidiunServiceBase);
module.exports.VidiunSchemaService = VidiunSchemaService;


/**
 *Class definition for the Vidiun service: search.
 * The available service actions:
 * @action search Search for media in one of the supported media providers.
 * @action getMediaInfo Retrieve extra information about media found in search action
 * Some providers return only part of the fields needed to create entry from, use this action to get the rest of the fields.
 * @action searchUrl Search for media given a specific URL
 * Vidiun supports a searchURL action on some of the media providers.
 * This action will return a VidiunSearchResult object based on a given URL (assuming the media provider is supported).
 * @action externalLogin .
 */
function VidiunSearchService(client){
	VidiunSearchService.super_.call(this);
	this.init(client);
}

util.inherits(VidiunSearchService, vidiun.VidiunServiceBase);
module.exports.VidiunSearchService = VidiunSearchService;

/**
 * Search for media in one of the supported media providers.
 * @param search VidiunSearch A VidiunSearch object contains the search keywords, media provider and media type (optional).
 * @param pager VidiunFilterPager  (optional, default: null).
 * @return VidiunSearchResultResponse.
 */
VidiunSearchService.prototype.search = function(callback, search, pager){
	if(!pager){
		pager = null;
	}
	var vparams = {};
	this.client.addParam(vparams, 'search', vidiun.toParams(search));
	if (pager !== null){
		this.client.addParam(vparams, 'pager', vidiun.toParams(pager));
	}
	this.client.queueServiceActionCall('search', 'search', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Retrieve extra information about media found in search action
 * Some providers return only part of the fields needed to create entry from, use this action to get the rest of the fields.
 * @param searchResult VidiunSearchResult VidiunSearchResult object extends VidiunSearch and has all fields required for media:add (optional).
 * @return VidiunSearchResult.
 */
VidiunSearchService.prototype.getMediaInfo = function(callback, searchResult){
	var vparams = {};
	this.client.addParam(vparams, 'searchResult', vidiun.toParams(searchResult));
	this.client.queueServiceActionCall('search', 'getMediaInfo', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Search for media given a specific URL
 * Vidiun supports a searchURL action on some of the media providers.
 * This action will return a VidiunSearchResult object based on a given URL (assuming the media provider is supported).
 * @param mediaType int  (optional, enum: VidiunMediaType).
 * @param url string  (optional).
 * @return VidiunSearchResult.
 */
VidiunSearchService.prototype.searchUrl = function(callback, mediaType, url){
	var vparams = {};
	this.client.addParam(vparams, 'mediaType', mediaType);
	this.client.addParam(vparams, 'url', url);
	this.client.queueServiceActionCall('search', 'searchUrl', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * .
 * @param searchSource int  (optional, enum: VidiunSearchProviderType).
 * @param userName string  (optional).
 * @param password string  (optional).
 * @return VidiunSearchAuthData.
 */
VidiunSearchService.prototype.externalLogin = function(callback, searchSource, userName, password){
	var vparams = {};
	this.client.addParam(vparams, 'searchSource', searchSource);
	this.client.addParam(vparams, 'userName', userName);
	this.client.addParam(vparams, 'password', password);
	this.client.queueServiceActionCall('search', 'externalLogin', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Vidiun service: serverNode.
 * The available service actions:
 * @action add Adds a server node to the Vidiun DB.
 * @action get Get server node by id.
 * @action update Update server node by id.
 * @action delete delete server node by id.
 * @action disable Disable server node by id.
 * @action enable Enable server node by id.
 * @action list .
 * @action reportStatus Update server node status.
 */
function VidiunServerNodeService(client){
	VidiunServerNodeService.super_.call(this);
	this.init(client);
}

util.inherits(VidiunServerNodeService, vidiun.VidiunServiceBase);
module.exports.VidiunServerNodeService = VidiunServerNodeService;

/**
 * Adds a server node to the Vidiun DB.
 * @param serverNode VidiunServerNode  (optional).
 * @return VidiunServerNode.
 */
VidiunServerNodeService.prototype.add = function(callback, serverNode){
	var vparams = {};
	this.client.addParam(vparams, 'serverNode', vidiun.toParams(serverNode));
	this.client.queueServiceActionCall('servernode', 'add', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Get server node by id.
 * @param serverNodeId int  (optional).
 * @return VidiunServerNode.
 */
VidiunServerNodeService.prototype.get = function(callback, serverNodeId){
	var vparams = {};
	this.client.addParam(vparams, 'serverNodeId', serverNodeId);
	this.client.queueServiceActionCall('servernode', 'get', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Update server node by id.
 * @param serverNodeId int  (optional).
 * @param serverNode VidiunServerNode Id (optional).
 * @return VidiunServerNode.
 */
VidiunServerNodeService.prototype.update = function(callback, serverNodeId, serverNode){
	var vparams = {};
	this.client.addParam(vparams, 'serverNodeId', serverNodeId);
	this.client.addParam(vparams, 'serverNode', vidiun.toParams(serverNode));
	this.client.queueServiceActionCall('servernode', 'update', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * delete server node by id.
 * @param serverNodeId string  (optional).
 * @return .
 */
VidiunServerNodeService.prototype.deleteAction = function(callback, serverNodeId){
	var vparams = {};
	this.client.addParam(vparams, 'serverNodeId', serverNodeId);
	this.client.queueServiceActionCall('servernode', 'delete', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Disable server node by id.
 * @param serverNodeId string  (optional).
 * @return VidiunServerNode.
 */
VidiunServerNodeService.prototype.disable = function(callback, serverNodeId){
	var vparams = {};
	this.client.addParam(vparams, 'serverNodeId', serverNodeId);
	this.client.queueServiceActionCall('servernode', 'disable', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Enable server node by id.
 * @param serverNodeId string  (optional).
 * @return VidiunServerNode.
 */
VidiunServerNodeService.prototype.enable = function(callback, serverNodeId){
	var vparams = {};
	this.client.addParam(vparams, 'serverNodeId', serverNodeId);
	this.client.queueServiceActionCall('servernode', 'enable', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * .
 * @param filter VidiunServerNodeFilter  (optional, default: null).
 * @param pager VidiunFilterPager  (optional, default: null).
 * @return VidiunServerNodeListResponse.
 */
VidiunServerNodeService.prototype.listAction = function(callback, filter, pager){
	if(!filter){
		filter = null;
	}
	if(!pager){
		pager = null;
	}
	var vparams = {};
	if (filter !== null){
		this.client.addParam(vparams, 'filter', vidiun.toParams(filter));
	}
	if (pager !== null){
		this.client.addParam(vparams, 'pager', vidiun.toParams(pager));
	}
	this.client.queueServiceActionCall('servernode', 'list', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Update server node status.
 * @param hostName string  (optional).
 * @param serverNode VidiunServerNode  (optional, default: null).
 * @return VidiunServerNode.
 */
VidiunServerNodeService.prototype.reportStatus = function(callback, hostName, serverNode){
	if(!serverNode){
		serverNode = null;
	}
	var vparams = {};
	this.client.addParam(vparams, 'hostName', hostName);
	if (serverNode !== null){
		this.client.addParam(vparams, 'serverNode', vidiun.toParams(serverNode));
	}
	this.client.queueServiceActionCall('servernode', 'reportStatus', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Vidiun service: session.
 * The available service actions:
 * @action start Start a session with Vidiun's server.
 * The result VS is the session key that you should pass to all services that requires a ticket.
 * @action end End a session with the Vidiun server, making the current VS invalid.
 * @action impersonate Start an impersonated session with Vidiun's server.
 * The result VS is the session key that you should pass to all services that requires a ticket.
 * @action impersonateByVs Start an impersonated session with Vidiun's server.
 * The result VS info contains the session key that you should pass to all services that requires a ticket.
 * Type, expiry and privileges won't be changed if they're not set.
 * @action get Parse session key and return its info.
 * @action startWidgetSession Start a session for Vidiun's flash widgets.
 */
function VidiunSessionService(client){
	VidiunSessionService.super_.call(this);
	this.init(client);
}

util.inherits(VidiunSessionService, vidiun.VidiunServiceBase);
module.exports.VidiunSessionService = VidiunSessionService;

/**
 * Start a session with Vidiun's server.
 * The result VS is the session key that you should pass to all services that requires a ticket.
 * @param secret string Remember to provide the correct secret according to the sessionType you want (optional).
 * @param userId string  (optional).
 * @param type int Regular session or Admin session (optional, enum: VidiunSessionType).
 * @param partnerId int  (optional, default: null).
 * @param expiry int VS expiry time in seconds (optional, default: 86400).
 * @param privileges string  (optional, default: null).
 * @return string.
 */
VidiunSessionService.prototype.start = function(callback, secret, userId, type, partnerId, expiry, privileges){
	if(!userId){
		userId = '';
	}
	if(!type){
		type = 0;
	}
	if(!partnerId){
		partnerId = null;
	}
	if(!expiry){
		expiry = 86400;
	}
	if(!privileges){
		privileges = null;
	}
	var vparams = {};
	this.client.addParam(vparams, 'secret', secret);
	this.client.addParam(vparams, 'userId', userId);
	this.client.addParam(vparams, 'type', type);
	this.client.addParam(vparams, 'partnerId', partnerId);
	this.client.addParam(vparams, 'expiry', expiry);
	this.client.addParam(vparams, 'privileges', privileges);
	this.client.queueServiceActionCall('session', 'start', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * End a session with the Vidiun server, making the current VS invalid.
 * @return .
 */
VidiunSessionService.prototype.end = function(callback){
	var vparams = {};
	this.client.queueServiceActionCall('session', 'end', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Start an impersonated session with Vidiun's server.
 * The result VS is the session key that you should pass to all services that requires a ticket.
 * @param secret string - should be the secret (admin or user) of the original partnerId (not impersonatedPartnerId) (optional).
 * @param impersonatedPartnerId int  (optional).
 * @param userId string - impersonated userId (optional).
 * @param type int  (optional, enum: VidiunSessionType).
 * @param partnerId int  (optional, default: null).
 * @param expiry int VS expiry time in seconds (optional, default: 86400).
 * @param privileges string  (optional, default: null).
 * @return string.
 */
VidiunSessionService.prototype.impersonate = function(callback, secret, impersonatedPartnerId, userId, type, partnerId, expiry, privileges){
	if(!userId){
		userId = '';
	}
	if(!type){
		type = 0;
	}
	if(!partnerId){
		partnerId = null;
	}
	if(!expiry){
		expiry = 86400;
	}
	if(!privileges){
		privileges = null;
	}
	var vparams = {};
	this.client.addParam(vparams, 'secret', secret);
	this.client.addParam(vparams, 'impersonatedPartnerId', impersonatedPartnerId);
	this.client.addParam(vparams, 'userId', userId);
	this.client.addParam(vparams, 'type', type);
	this.client.addParam(vparams, 'partnerId', partnerId);
	this.client.addParam(vparams, 'expiry', expiry);
	this.client.addParam(vparams, 'privileges', privileges);
	this.client.queueServiceActionCall('session', 'impersonate', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Start an impersonated session with Vidiun's server.
 * The result VS info contains the session key that you should pass to all services that requires a ticket.
 * Type, expiry and privileges won't be changed if they're not set.
 * @param session string The old VS of the impersonated partner (optional).
 * @param type int Type of the new VS (optional, enum: VidiunSessionType, default: null).
 * @param expiry int Expiry time in seconds of the new VS (optional, default: null).
 * @param privileges string Privileges of the new VS (optional, default: null).
 * @return VidiunSessionInfo.
 */
VidiunSessionService.prototype.impersonateByVs = function(callback, session, type, expiry, privileges){
	if(!type){
		type = null;
	}
	if(!expiry){
		expiry = null;
	}
	if(!privileges){
		privileges = null;
	}
	var vparams = {};
	this.client.addParam(vparams, 'session', session);
	this.client.addParam(vparams, 'type', type);
	this.client.addParam(vparams, 'expiry', expiry);
	this.client.addParam(vparams, 'privileges', privileges);
	this.client.queueServiceActionCall('session', 'impersonateByVs', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Parse session key and return its info.
 * @param session string The VS to be parsed, keep it empty to use current session (optional, default: null).
 * @return VidiunSessionInfo.
 */
VidiunSessionService.prototype.get = function(callback, session){
	if(!session){
		session = null;
	}
	var vparams = {};
	this.client.addParam(vparams, 'session', session);
	this.client.queueServiceActionCall('session', 'get', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Start a session for Vidiun's flash widgets.
 * @param widgetId string  (optional).
 * @param expiry int  (optional, default: 86400).
 * @return VidiunStartWidgetSessionResponse.
 */
VidiunSessionService.prototype.startWidgetSession = function(callback, widgetId, expiry){
	if(!expiry){
		expiry = 86400;
	}
	var vparams = {};
	this.client.addParam(vparams, 'widgetId', widgetId);
	this.client.addParam(vparams, 'expiry', expiry);
	this.client.queueServiceActionCall('session', 'startWidgetSession', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Vidiun service: stats.
 * The available service actions:
 * @action collect Will write to the event log a single line representing the event
 * client version - will help interprete the line structure. different client versions might have slightly different data/data formats in the line
 * event_id - number is the row number in yuval's excel
 * datetime - same format as MySql's datetime - can change and should reflect the time zone
 * session id - can be some big random number or guid
 * partner id
 * entry id
 * unique viewer
 * widget id
 * ui_conf id
 * uid - the puser id as set by the ppartner
 * current point - in milliseconds
 * duration - milliseconds
 * user ip
 * process duration - in milliseconds
 * control id
 * seek
 * new point
 * referrer
 * 
 * 
 * VidiunStatsEvent $event.
 * @action vmcCollect Will collect the vmcEvent sent form the VMC client
 * // this will actually be an empty function because all events will be sent using GET and will anyway be logged in the apache log.
 * @action reportVceError .
 * @action reportError Use this action to report errors to the vidiun server.
 */
function VidiunStatsService(client){
	VidiunStatsService.super_.call(this);
	this.init(client);
}

util.inherits(VidiunStatsService, vidiun.VidiunServiceBase);
module.exports.VidiunStatsService = VidiunStatsService;

/**
 * Will write to the event log a single line representing the event
 * client version - will help interprete the line structure. different client versions might have slightly different data/data formats in the line
 * event_id - number is the row number in yuval's excel
 * datetime - same format as MySql's datetime - can change and should reflect the time zone
 * session id - can be some big random number or guid
 * partner id
 * entry id
 * unique viewer
 * widget id
 * ui_conf id
 * uid - the puser id as set by the ppartner
 * current point - in milliseconds
 * duration - milliseconds
 * user ip
 * process duration - in milliseconds
 * control id
 * seek
 * new point
 * referrer
 * 
 * 
 * VidiunStatsEvent $event.
 * @param event VidiunStatsEvent  (optional).
 * @return bool.
 */
VidiunStatsService.prototype.collect = function(callback, event){
	var vparams = {};
	this.client.addParam(vparams, 'event', vidiun.toParams(event));
	this.client.queueServiceActionCall('stats', 'collect', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Will collect the vmcEvent sent form the VMC client
 * // this will actually be an empty function because all events will be sent using GET and will anyway be logged in the apache log.
 * @param vmcEvent VidiunStatsVmcEvent  (optional).
 * @return .
 */
VidiunStatsService.prototype.vmcCollect = function(callback, vmcEvent){
	var vparams = {};
	this.client.addParam(vparams, 'vmcEvent', vidiun.toParams(vmcEvent));
	this.client.queueServiceActionCall('stats', 'vmcCollect', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * .
 * @param vidiunCEError VidiunCEError  (optional).
 * @return VidiunCEError.
 */
VidiunStatsService.prototype.reportVceError = function(callback, vidiunCEError){
	var vparams = {};
	this.client.addParam(vparams, 'vidiunCEError', vidiun.toParams(vidiunCEError));
	this.client.queueServiceActionCall('stats', 'reportVceError', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Use this action to report errors to the vidiun server.
 * @param errorCode string  (optional).
 * @param errorMessage string  (optional).
 * @return .
 */
VidiunStatsService.prototype.reportError = function(callback, errorCode, errorMessage){
	var vparams = {};
	this.client.addParam(vparams, 'errorCode', errorCode);
	this.client.addParam(vparams, 'errorMessage', errorMessage);
	this.client.queueServiceActionCall('stats', 'reportError', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Vidiun service: storageProfile.
 * The available service actions:
 * @action add Adds a storage profile to the Vidiun DB.
 * @action updateStatus .
 * @action get Get storage profile by id.
 * @action update Update storage profile by id.
 * @action list .
 */
function VidiunStorageProfileService(client){
	VidiunStorageProfileService.super_.call(this);
	this.init(client);
}

util.inherits(VidiunStorageProfileService, vidiun.VidiunServiceBase);
module.exports.VidiunStorageProfileService = VidiunStorageProfileService;

/**
 * Adds a storage profile to the Vidiun DB.
 * @param storageProfile VidiunStorageProfile  (optional).
 * @return VidiunStorageProfile.
 */
VidiunStorageProfileService.prototype.add = function(callback, storageProfile){
	var vparams = {};
	this.client.addParam(vparams, 'storageProfile', vidiun.toParams(storageProfile));
	this.client.queueServiceActionCall('storageprofile', 'add', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * .
 * @param storageId int  (optional).
 * @param status int  (optional, enum: VidiunStorageProfileStatus).
 * @return .
 */
VidiunStorageProfileService.prototype.updateStatus = function(callback, storageId, status){
	var vparams = {};
	this.client.addParam(vparams, 'storageId', storageId);
	this.client.addParam(vparams, 'status', status);
	this.client.queueServiceActionCall('storageprofile', 'updateStatus', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Get storage profile by id.
 * @param storageProfileId int  (optional).
 * @return VidiunStorageProfile.
 */
VidiunStorageProfileService.prototype.get = function(callback, storageProfileId){
	var vparams = {};
	this.client.addParam(vparams, 'storageProfileId', storageProfileId);
	this.client.queueServiceActionCall('storageprofile', 'get', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Update storage profile by id.
 * @param storageProfileId int  (optional).
 * @param storageProfile VidiunStorageProfile Id (optional).
 * @return VidiunStorageProfile.
 */
VidiunStorageProfileService.prototype.update = function(callback, storageProfileId, storageProfile){
	var vparams = {};
	this.client.addParam(vparams, 'storageProfileId', storageProfileId);
	this.client.addParam(vparams, 'storageProfile', vidiun.toParams(storageProfile));
	this.client.queueServiceActionCall('storageprofile', 'update', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * .
 * @param filter VidiunStorageProfileFilter  (optional, default: null).
 * @param pager VidiunFilterPager  (optional, default: null).
 * @return VidiunStorageProfileListResponse.
 */
VidiunStorageProfileService.prototype.listAction = function(callback, filter, pager){
	if(!filter){
		filter = null;
	}
	if(!pager){
		pager = null;
	}
	var vparams = {};
	if (filter !== null){
		this.client.addParam(vparams, 'filter', vidiun.toParams(filter));
	}
	if (pager !== null){
		this.client.addParam(vparams, 'pager', vidiun.toParams(pager));
	}
	this.client.queueServiceActionCall('storageprofile', 'list', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Vidiun service: syndicationFeed.
 * The available service actions:
 * @action add Add new Syndication Feed.
 * @action get Get Syndication Feed by ID.
 * @action update Update Syndication Feed by ID.
 * @action delete Delete Syndication Feed by ID.
 * @action list List Syndication Feeds by filter with paging support.
 * @action getEntryCount get entry count for a syndication feed.
 * @action requestConversion request conversion for all entries that doesnt have the required flavor param
 * returns a comma-separated ids of conversion jobs.
 */
function VidiunSyndicationFeedService(client){
	VidiunSyndicationFeedService.super_.call(this);
	this.init(client);
}

util.inherits(VidiunSyndicationFeedService, vidiun.VidiunServiceBase);
module.exports.VidiunSyndicationFeedService = VidiunSyndicationFeedService;

/**
 * Add new Syndication Feed.
 * @param syndicationFeed VidiunBaseSyndicationFeed  (optional).
 * @return VidiunBaseSyndicationFeed.
 */
VidiunSyndicationFeedService.prototype.add = function(callback, syndicationFeed){
	var vparams = {};
	this.client.addParam(vparams, 'syndicationFeed', vidiun.toParams(syndicationFeed));
	this.client.queueServiceActionCall('syndicationfeed', 'add', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Get Syndication Feed by ID.
 * @param id string  (optional).
 * @return VidiunBaseSyndicationFeed.
 */
VidiunSyndicationFeedService.prototype.get = function(callback, id){
	var vparams = {};
	this.client.addParam(vparams, 'id', id);
	this.client.queueServiceActionCall('syndicationfeed', 'get', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Update Syndication Feed by ID.
 * @param id string  (optional).
 * @param syndicationFeed VidiunBaseSyndicationFeed  (optional).
 * @return VidiunBaseSyndicationFeed.
 */
VidiunSyndicationFeedService.prototype.update = function(callback, id, syndicationFeed){
	var vparams = {};
	this.client.addParam(vparams, 'id', id);
	this.client.addParam(vparams, 'syndicationFeed', vidiun.toParams(syndicationFeed));
	this.client.queueServiceActionCall('syndicationfeed', 'update', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Delete Syndication Feed by ID.
 * @param id string  (optional).
 * @return .
 */
VidiunSyndicationFeedService.prototype.deleteAction = function(callback, id){
	var vparams = {};
	this.client.addParam(vparams, 'id', id);
	this.client.queueServiceActionCall('syndicationfeed', 'delete', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * List Syndication Feeds by filter with paging support.
 * @param filter VidiunBaseSyndicationFeedFilter  (optional, default: null).
 * @param pager VidiunFilterPager  (optional, default: null).
 * @return VidiunBaseSyndicationFeedListResponse.
 */
VidiunSyndicationFeedService.prototype.listAction = function(callback, filter, pager){
	if(!filter){
		filter = null;
	}
	if(!pager){
		pager = null;
	}
	var vparams = {};
	if (filter !== null){
		this.client.addParam(vparams, 'filter', vidiun.toParams(filter));
	}
	if (pager !== null){
		this.client.addParam(vparams, 'pager', vidiun.toParams(pager));
	}
	this.client.queueServiceActionCall('syndicationfeed', 'list', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * get entry count for a syndication feed.
 * @param feedId string  (optional).
 * @return VidiunSyndicationFeedEntryCount.
 */
VidiunSyndicationFeedService.prototype.getEntryCount = function(callback, feedId){
	var vparams = {};
	this.client.addParam(vparams, 'feedId', feedId);
	this.client.queueServiceActionCall('syndicationfeed', 'getEntryCount', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * request conversion for all entries that doesnt have the required flavor param
 * returns a comma-separated ids of conversion jobs.
 * @param feedId string  (optional).
 * @return string.
 */
VidiunSyndicationFeedService.prototype.requestConversion = function(callback, feedId){
	var vparams = {};
	this.client.addParam(vparams, 'feedId', feedId);
	this.client.queueServiceActionCall('syndicationfeed', 'requestConversion', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Vidiun service: system.
 * The available service actions:
 * @action ping .
 * @action pingDatabase .
 * @action getTime .
 * @action getVersion .
 */
function VidiunSystemService(client){
	VidiunSystemService.super_.call(this);
	this.init(client);
}

util.inherits(VidiunSystemService, vidiun.VidiunServiceBase);
module.exports.VidiunSystemService = VidiunSystemService;

/**
 * .
 * @return bool.
 */
VidiunSystemService.prototype.ping = function(callback){
	var vparams = {};
	this.client.queueServiceActionCall('system', 'ping', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * .
 * @return bool.
 */
VidiunSystemService.prototype.pingDatabase = function(callback){
	var vparams = {};
	this.client.queueServiceActionCall('system', 'pingDatabase', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * .
 * @return int.
 */
VidiunSystemService.prototype.getTime = function(callback){
	var vparams = {};
	this.client.queueServiceActionCall('system', 'getTime', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * .
 * @return string.
 */
VidiunSystemService.prototype.getVersion = function(callback){
	var vparams = {};
	this.client.queueServiceActionCall('system', 'getVersion', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Vidiun service: thumbAsset.
 * The available service actions:
 * @action add Add thumbnail asset.
 * @action setContent Update content of thumbnail asset.
 * @action update Update thumbnail asset.
 * @action setAsDefault Tags the thumbnail as DEFAULT_THUMB and removes that tag from all other thumbnail assets of the entry.
 * Create a new file sync link on the entry thumbnail that points to the thumbnail asset file sync.
 * @action generateByEntryId .
 * @action generate .
 * @action regenerate .
 * @action get .
 * @action getByEntryId .
 * @action list List Thumbnail Assets by filter and pager.
 * @action addFromUrl .
 * @action addFromImage .
 * @action delete .
 * @action getUrl Get download URL for the asset.
 * @action getRemotePaths Get remote storage existing paths for the asset.
 */
function VidiunThumbAssetService(client){
	VidiunThumbAssetService.super_.call(this);
	this.init(client);
}

util.inherits(VidiunThumbAssetService, vidiun.VidiunServiceBase);
module.exports.VidiunThumbAssetService = VidiunThumbAssetService;

/**
 * Add thumbnail asset.
 * @param entryId string  (optional).
 * @param thumbAsset VidiunThumbAsset  (optional).
 * @return VidiunThumbAsset.
 */
VidiunThumbAssetService.prototype.add = function(callback, entryId, thumbAsset){
	var vparams = {};
	this.client.addParam(vparams, 'entryId', entryId);
	this.client.addParam(vparams, 'thumbAsset', vidiun.toParams(thumbAsset));
	this.client.queueServiceActionCall('thumbasset', 'add', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Update content of thumbnail asset.
 * @param id string  (optional).
 * @param contentResource VidiunContentResource  (optional).
 * @return VidiunThumbAsset.
 */
VidiunThumbAssetService.prototype.setContent = function(callback, id, contentResource){
	var vparams = {};
	this.client.addParam(vparams, 'id', id);
	this.client.addParam(vparams, 'contentResource', vidiun.toParams(contentResource));
	this.client.queueServiceActionCall('thumbasset', 'setContent', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Update thumbnail asset.
 * @param id string  (optional).
 * @param thumbAsset VidiunThumbAsset  (optional).
 * @return VidiunThumbAsset.
 */
VidiunThumbAssetService.prototype.update = function(callback, id, thumbAsset){
	var vparams = {};
	this.client.addParam(vparams, 'id', id);
	this.client.addParam(vparams, 'thumbAsset', vidiun.toParams(thumbAsset));
	this.client.queueServiceActionCall('thumbasset', 'update', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Tags the thumbnail as DEFAULT_THUMB and removes that tag from all other thumbnail assets of the entry.
 * Create a new file sync link on the entry thumbnail that points to the thumbnail asset file sync.
 * @param thumbAssetId string  (optional).
 * @return .
 */
VidiunThumbAssetService.prototype.setAsDefault = function(callback, thumbAssetId){
	var vparams = {};
	this.client.addParam(vparams, 'thumbAssetId', thumbAssetId);
	this.client.queueServiceActionCall('thumbasset', 'setAsDefault', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * .
 * @param entryId string  (optional).
 * @param destThumbParamsId int indicate the id of the ThumbParams to be generate this thumbnail by (optional).
 * @return VidiunThumbAsset.
 */
VidiunThumbAssetService.prototype.generateByEntryId = function(callback, entryId, destThumbParamsId){
	var vparams = {};
	this.client.addParam(vparams, 'entryId', entryId);
	this.client.addParam(vparams, 'destThumbParamsId', destThumbParamsId);
	this.client.queueServiceActionCall('thumbasset', 'generateByEntryId', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * .
 * @param entryId string  (optional).
 * @param thumbParams VidiunThumbParams  (optional).
 * @param sourceAssetId string id of the source asset (flavor or thumbnail) to be used as source for the thumbnail generation (optional, default: null).
 * @return VidiunThumbAsset.
 */
VidiunThumbAssetService.prototype.generate = function(callback, entryId, thumbParams, sourceAssetId){
	if(!sourceAssetId){
		sourceAssetId = null;
	}
	var vparams = {};
	this.client.addParam(vparams, 'entryId', entryId);
	this.client.addParam(vparams, 'thumbParams', vidiun.toParams(thumbParams));
	this.client.addParam(vparams, 'sourceAssetId', sourceAssetId);
	this.client.queueServiceActionCall('thumbasset', 'generate', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * .
 * @param thumbAssetId string  (optional).
 * @return VidiunThumbAsset.
 */
VidiunThumbAssetService.prototype.regenerate = function(callback, thumbAssetId){
	var vparams = {};
	this.client.addParam(vparams, 'thumbAssetId', thumbAssetId);
	this.client.queueServiceActionCall('thumbasset', 'regenerate', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * .
 * @param thumbAssetId string  (optional).
 * @return VidiunThumbAsset.
 */
VidiunThumbAssetService.prototype.get = function(callback, thumbAssetId){
	var vparams = {};
	this.client.addParam(vparams, 'thumbAssetId', thumbAssetId);
	this.client.queueServiceActionCall('thumbasset', 'get', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * .
 * @param entryId string  (optional).
 * @return array.
 */
VidiunThumbAssetService.prototype.getByEntryId = function(callback, entryId){
	var vparams = {};
	this.client.addParam(vparams, 'entryId', entryId);
	this.client.queueServiceActionCall('thumbasset', 'getByEntryId', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * List Thumbnail Assets by filter and pager.
 * @param filter VidiunAssetFilter  (optional, default: null).
 * @param pager VidiunFilterPager  (optional, default: null).
 * @return VidiunThumbAssetListResponse.
 */
VidiunThumbAssetService.prototype.listAction = function(callback, filter, pager){
	if(!filter){
		filter = null;
	}
	if(!pager){
		pager = null;
	}
	var vparams = {};
	if (filter !== null){
		this.client.addParam(vparams, 'filter', vidiun.toParams(filter));
	}
	if (pager !== null){
		this.client.addParam(vparams, 'pager', vidiun.toParams(pager));
	}
	this.client.queueServiceActionCall('thumbasset', 'list', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * .
 * @param entryId string  (optional).
 * @param url string  (optional).
 * @return VidiunThumbAsset.
 */
VidiunThumbAssetService.prototype.addFromUrl = function(callback, entryId, url){
	var vparams = {};
	this.client.addParam(vparams, 'entryId', entryId);
	this.client.addParam(vparams, 'url', url);
	this.client.queueServiceActionCall('thumbasset', 'addFromUrl', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * .
 * @param entryId string  (optional).
 * @param fileData file  (optional).
 * @return VidiunThumbAsset.
 */
VidiunThumbAssetService.prototype.addFromImage = function(callback, entryId, fileData){
	var vparams = {};
	this.client.addParam(vparams, 'entryId', entryId);
	var vfiles = {};
	this.client.addParam(vfiles, 'fileData', fileData);
	this.client.queueServiceActionCall('thumbasset', 'addFromImage', vparams, vfiles);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * .
 * @param thumbAssetId string  (optional).
 * @return .
 */
VidiunThumbAssetService.prototype.deleteAction = function(callback, thumbAssetId){
	var vparams = {};
	this.client.addParam(vparams, 'thumbAssetId', thumbAssetId);
	this.client.queueServiceActionCall('thumbasset', 'delete', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Get download URL for the asset.
 * @param id string  (optional).
 * @param storageId int  (optional, default: null).
 * @param thumbParams VidiunThumbParams  (optional, default: null).
 * @return string.
 */
VidiunThumbAssetService.prototype.getUrl = function(callback, id, storageId, thumbParams){
	if(!storageId){
		storageId = null;
	}
	if(!thumbParams){
		thumbParams = null;
	}
	var vparams = {};
	this.client.addParam(vparams, 'id', id);
	this.client.addParam(vparams, 'storageId', storageId);
	if (thumbParams !== null){
		this.client.addParam(vparams, 'thumbParams', vidiun.toParams(thumbParams));
	}
	this.client.queueServiceActionCall('thumbasset', 'getUrl', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Get remote storage existing paths for the asset.
 * @param id string  (optional).
 * @return VidiunRemotePathListResponse.
 */
VidiunThumbAssetService.prototype.getRemotePaths = function(callback, id){
	var vparams = {};
	this.client.addParam(vparams, 'id', id);
	this.client.queueServiceActionCall('thumbasset', 'getRemotePaths', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Vidiun service: thumbParamsOutput.
 * The available service actions:
 * @action get Get thumb params output object by ID.
 * @action list List thumb params output objects by filter and pager.
 */
function VidiunThumbParamsOutputService(client){
	VidiunThumbParamsOutputService.super_.call(this);
	this.init(client);
}

util.inherits(VidiunThumbParamsOutputService, vidiun.VidiunServiceBase);
module.exports.VidiunThumbParamsOutputService = VidiunThumbParamsOutputService;

/**
 * Get thumb params output object by ID.
 * @param id int  (optional).
 * @return VidiunThumbParamsOutput.
 */
VidiunThumbParamsOutputService.prototype.get = function(callback, id){
	var vparams = {};
	this.client.addParam(vparams, 'id', id);
	this.client.queueServiceActionCall('thumbparamsoutput', 'get', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * List thumb params output objects by filter and pager.
 * @param filter VidiunThumbParamsOutputFilter  (optional, default: null).
 * @param pager VidiunFilterPager  (optional, default: null).
 * @return VidiunThumbParamsOutputListResponse.
 */
VidiunThumbParamsOutputService.prototype.listAction = function(callback, filter, pager){
	if(!filter){
		filter = null;
	}
	if(!pager){
		pager = null;
	}
	var vparams = {};
	if (filter !== null){
		this.client.addParam(vparams, 'filter', vidiun.toParams(filter));
	}
	if (pager !== null){
		this.client.addParam(vparams, 'pager', vidiun.toParams(pager));
	}
	this.client.queueServiceActionCall('thumbparamsoutput', 'list', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Vidiun service: thumbParams.
 * The available service actions:
 * @action add Add new Thumb Params.
 * @action get Get Thumb Params by ID.
 * @action update Update Thumb Params by ID.
 * @action delete Delete Thumb Params by ID.
 * @action list List Thumb Params by filter with paging support (By default - all system default params will be listed too).
 * @action getByConversionProfileId Get Thumb Params by Conversion Profile ID.
 */
function VidiunThumbParamsService(client){
	VidiunThumbParamsService.super_.call(this);
	this.init(client);
}

util.inherits(VidiunThumbParamsService, vidiun.VidiunServiceBase);
module.exports.VidiunThumbParamsService = VidiunThumbParamsService;

/**
 * Add new Thumb Params.
 * @param thumbParams VidiunThumbParams  (optional).
 * @return VidiunThumbParams.
 */
VidiunThumbParamsService.prototype.add = function(callback, thumbParams){
	var vparams = {};
	this.client.addParam(vparams, 'thumbParams', vidiun.toParams(thumbParams));
	this.client.queueServiceActionCall('thumbparams', 'add', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Get Thumb Params by ID.
 * @param id int  (optional).
 * @return VidiunThumbParams.
 */
VidiunThumbParamsService.prototype.get = function(callback, id){
	var vparams = {};
	this.client.addParam(vparams, 'id', id);
	this.client.queueServiceActionCall('thumbparams', 'get', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Update Thumb Params by ID.
 * @param id int  (optional).
 * @param thumbParams VidiunThumbParams  (optional).
 * @return VidiunThumbParams.
 */
VidiunThumbParamsService.prototype.update = function(callback, id, thumbParams){
	var vparams = {};
	this.client.addParam(vparams, 'id', id);
	this.client.addParam(vparams, 'thumbParams', vidiun.toParams(thumbParams));
	this.client.queueServiceActionCall('thumbparams', 'update', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Delete Thumb Params by ID.
 * @param id int  (optional).
 * @return .
 */
VidiunThumbParamsService.prototype.deleteAction = function(callback, id){
	var vparams = {};
	this.client.addParam(vparams, 'id', id);
	this.client.queueServiceActionCall('thumbparams', 'delete', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * List Thumb Params by filter with paging support (By default - all system default params will be listed too).
 * @param filter VidiunThumbParamsFilter  (optional, default: null).
 * @param pager VidiunFilterPager  (optional, default: null).
 * @return VidiunThumbParamsListResponse.
 */
VidiunThumbParamsService.prototype.listAction = function(callback, filter, pager){
	if(!filter){
		filter = null;
	}
	if(!pager){
		pager = null;
	}
	var vparams = {};
	if (filter !== null){
		this.client.addParam(vparams, 'filter', vidiun.toParams(filter));
	}
	if (pager !== null){
		this.client.addParam(vparams, 'pager', vidiun.toParams(pager));
	}
	this.client.queueServiceActionCall('thumbparams', 'list', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Get Thumb Params by Conversion Profile ID.
 * @param conversionProfileId int  (optional).
 * @return array.
 */
VidiunThumbParamsService.prototype.getByConversionProfileId = function(callback, conversionProfileId){
	var vparams = {};
	this.client.addParam(vparams, 'conversionProfileId', conversionProfileId);
	this.client.queueServiceActionCall('thumbparams', 'getByConversionProfileId', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Vidiun service: uiConf.
 * The available service actions:
 * @action add UIConf Add action allows you to add a UIConf to Vidiun DB.
 * @action update Update an existing UIConf.
 * @action get Retrieve a UIConf by id.
 * @action delete Delete an existing UIConf.
 * @action clone Clone an existing UIConf.
 * @action listTemplates retrieve a list of available template UIConfs.
 * @action list Retrieve a list of available UIConfs.
 * @action getAvailableTypes Retrieve a list of all available versions by object type.
 */
function VidiunUiConfService(client){
	VidiunUiConfService.super_.call(this);
	this.init(client);
}

util.inherits(VidiunUiConfService, vidiun.VidiunServiceBase);
module.exports.VidiunUiConfService = VidiunUiConfService;

/**
 * UIConf Add action allows you to add a UIConf to Vidiun DB.
 * @param uiConf VidiunUiConf Mandatory input parameter of type VidiunUiConf (optional).
 * @return VidiunUiConf.
 */
VidiunUiConfService.prototype.add = function(callback, uiConf){
	var vparams = {};
	this.client.addParam(vparams, 'uiConf', vidiun.toParams(uiConf));
	this.client.queueServiceActionCall('uiconf', 'add', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Update an existing UIConf.
 * @param id int  (optional).
 * @param uiConf VidiunUiConf  (optional).
 * @return VidiunUiConf.
 */
VidiunUiConfService.prototype.update = function(callback, id, uiConf){
	var vparams = {};
	this.client.addParam(vparams, 'id', id);
	this.client.addParam(vparams, 'uiConf', vidiun.toParams(uiConf));
	this.client.queueServiceActionCall('uiconf', 'update', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Retrieve a UIConf by id.
 * @param id int  (optional).
 * @return VidiunUiConf.
 */
VidiunUiConfService.prototype.get = function(callback, id){
	var vparams = {};
	this.client.addParam(vparams, 'id', id);
	this.client.queueServiceActionCall('uiconf', 'get', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Delete an existing UIConf.
 * @param id int  (optional).
 * @return .
 */
VidiunUiConfService.prototype.deleteAction = function(callback, id){
	var vparams = {};
	this.client.addParam(vparams, 'id', id);
	this.client.queueServiceActionCall('uiconf', 'delete', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Clone an existing UIConf.
 * @param id int  (optional).
 * @return VidiunUiConf.
 */
VidiunUiConfService.prototype.cloneAction = function(callback, id){
	var vparams = {};
	this.client.addParam(vparams, 'id', id);
	this.client.queueServiceActionCall('uiconf', 'clone', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * retrieve a list of available template UIConfs.
 * @param filter VidiunUiConfFilter  (optional, default: null).
 * @param pager VidiunFilterPager  (optional, default: null).
 * @return VidiunUiConfListResponse.
 */
VidiunUiConfService.prototype.listTemplates = function(callback, filter, pager){
	if(!filter){
		filter = null;
	}
	if(!pager){
		pager = null;
	}
	var vparams = {};
	if (filter !== null){
		this.client.addParam(vparams, 'filter', vidiun.toParams(filter));
	}
	if (pager !== null){
		this.client.addParam(vparams, 'pager', vidiun.toParams(pager));
	}
	this.client.queueServiceActionCall('uiconf', 'listTemplates', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Retrieve a list of available UIConfs.
 * @param filter VidiunUiConfFilter  (optional, default: null).
 * @param pager VidiunFilterPager  (optional, default: null).
 * @return VidiunUiConfListResponse.
 */
VidiunUiConfService.prototype.listAction = function(callback, filter, pager){
	if(!filter){
		filter = null;
	}
	if(!pager){
		pager = null;
	}
	var vparams = {};
	if (filter !== null){
		this.client.addParam(vparams, 'filter', vidiun.toParams(filter));
	}
	if (pager !== null){
		this.client.addParam(vparams, 'pager', vidiun.toParams(pager));
	}
	this.client.queueServiceActionCall('uiconf', 'list', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Retrieve a list of all available versions by object type.
 * @return array.
 */
VidiunUiConfService.prototype.getAvailableTypes = function(callback){
	var vparams = {};
	this.client.queueServiceActionCall('uiconf', 'getAvailableTypes', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Vidiun service: upload.
 * The available service actions:
 * @action upload .
 * @action getUploadedFileTokenByFileName .
 */
function VidiunUploadService(client){
	VidiunUploadService.super_.call(this);
	this.init(client);
}

util.inherits(VidiunUploadService, vidiun.VidiunServiceBase);
module.exports.VidiunUploadService = VidiunUploadService;

/**
 * .
 * @param fileData file The file data (optional).
 * @return string.
 */
VidiunUploadService.prototype.upload = function(callback, fileData){
	var vparams = {};
	var vfiles = {};
	this.client.addParam(vfiles, 'fileData', fileData);
	this.client.queueServiceActionCall('upload', 'upload', vparams, vfiles);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * .
 * @param fileName string  (optional).
 * @return VidiunUploadResponse.
 */
VidiunUploadService.prototype.getUploadedFileTokenByFileName = function(callback, fileName){
	var vparams = {};
	this.client.addParam(vparams, 'fileName', fileName);
	this.client.queueServiceActionCall('upload', 'getUploadedFileTokenByFileName', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Vidiun service: uploadToken.
 * The available service actions:
 * @action add Adds new upload token to upload a file.
 * @action get Get upload token by id.
 * @action upload Upload a file using the upload token id, returns an error on failure (an exception will be thrown when using one of the Vidiun clients)
 * Chunks can be uploaded in parallel and they will be appended according to their resumeAt position.
 * A parallel upload session should have three stages:
 * 1. A single upload with resume=false and finalChunk=false
 * 2. Parallel upload requests each with resume=true,finalChunk=false and the expected resumetAt position.
 * If a chunk fails to upload it can be re-uploaded.
 * 3. After all of the chunks have been uploaded a final chunk (can be of zero size) should be uploaded
 * with resume=true, finalChunk=true and the expected resumeAt position. In case an UPLOAD_TOKEN_CANNOT_MATCH_EXPECTED_SIZE exception
 * has been returned (indicating not all of the chunks were appended yet) the final request can be retried.
 * @action delete Deletes the upload token by upload token id.
 * @action list List upload token by filter with pager support.
 * When using a user session the service will be restricted to users objects only.
 */
function VidiunUploadTokenService(client){
	VidiunUploadTokenService.super_.call(this);
	this.init(client);
}

util.inherits(VidiunUploadTokenService, vidiun.VidiunServiceBase);
module.exports.VidiunUploadTokenService = VidiunUploadTokenService;

/**
 * Adds new upload token to upload a file.
 * @param uploadToken VidiunUploadToken  (optional, default: null).
 * @return VidiunUploadToken.
 */
VidiunUploadTokenService.prototype.add = function(callback, uploadToken){
	if(!uploadToken){
		uploadToken = null;
	}
	var vparams = {};
	if (uploadToken !== null){
		this.client.addParam(vparams, 'uploadToken', vidiun.toParams(uploadToken));
	}
	this.client.queueServiceActionCall('uploadtoken', 'add', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Get upload token by id.
 * @param uploadTokenId string  (optional).
 * @return VidiunUploadToken.
 */
VidiunUploadTokenService.prototype.get = function(callback, uploadTokenId){
	var vparams = {};
	this.client.addParam(vparams, 'uploadTokenId', uploadTokenId);
	this.client.queueServiceActionCall('uploadtoken', 'get', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Upload a file using the upload token id, returns an error on failure (an exception will be thrown when using one of the Vidiun clients)
 * Chunks can be uploaded in parallel and they will be appended according to their resumeAt position.
 * A parallel upload session should have three stages:
 * 1. A single upload with resume=false and finalChunk=false
 * 2. Parallel upload requests each with resume=true,finalChunk=false and the expected resumetAt position.
 * If a chunk fails to upload it can be re-uploaded.
 * 3. After all of the chunks have been uploaded a final chunk (can be of zero size) should be uploaded
 * with resume=true, finalChunk=true and the expected resumeAt position. In case an UPLOAD_TOKEN_CANNOT_MATCH_EXPECTED_SIZE exception
 * has been returned (indicating not all of the chunks were appended yet) the final request can be retried.
 * @param uploadTokenId string  (optional).
 * @param fileData file  (optional).
 * @param resume bool  (optional, default: false).
 * @param finalChunk bool  (optional, default: true).
 * @param resumeAt float  (optional, default: -1).
 * @return VidiunUploadToken.
 */
VidiunUploadTokenService.prototype.upload = function(callback, uploadTokenId, fileData, resume, finalChunk, resumeAt){
	if(!resume){
		resume = false;
	}
	if(!finalChunk){
		finalChunk = true;
	}
	if(!resumeAt){
		resumeAt = -1;
	}
	var vparams = {};
	this.client.addParam(vparams, 'uploadTokenId', uploadTokenId);
	var vfiles = {};
	this.client.addParam(vfiles, 'fileData', fileData);
	this.client.addParam(vparams, 'resume', resume);
	this.client.addParam(vparams, 'finalChunk', finalChunk);
	this.client.addParam(vparams, 'resumeAt', resumeAt);
	this.client.queueServiceActionCall('uploadtoken', 'upload', vparams, vfiles);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Deletes the upload token by upload token id.
 * @param uploadTokenId string  (optional).
 * @return .
 */
VidiunUploadTokenService.prototype.deleteAction = function(callback, uploadTokenId){
	var vparams = {};
	this.client.addParam(vparams, 'uploadTokenId', uploadTokenId);
	this.client.queueServiceActionCall('uploadtoken', 'delete', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * List upload token by filter with pager support.
 * When using a user session the service will be restricted to users objects only.
 * @param filter VidiunUploadTokenFilter  (optional, default: null).
 * @param pager VidiunFilterPager  (optional, default: null).
 * @return VidiunUploadTokenListResponse.
 */
VidiunUploadTokenService.prototype.listAction = function(callback, filter, pager){
	if(!filter){
		filter = null;
	}
	if(!pager){
		pager = null;
	}
	var vparams = {};
	if (filter !== null){
		this.client.addParam(vparams, 'filter', vidiun.toParams(filter));
	}
	if (pager !== null){
		this.client.addParam(vparams, 'pager', vidiun.toParams(pager));
	}
	this.client.queueServiceActionCall('uploadtoken', 'list', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Vidiun service: userEntry.
 * The available service actions:
 * @action add Adds a user_entry to the Vidiun DB.
 * @action update .
 * @action delete .
 * @action list .
 * @action get .
 * @action submitQuiz Submits the quiz so that it's status will be submitted and calculates the score for the quiz.
 */
function VidiunUserEntryService(client){
	VidiunUserEntryService.super_.call(this);
	this.init(client);
}

util.inherits(VidiunUserEntryService, vidiun.VidiunServiceBase);
module.exports.VidiunUserEntryService = VidiunUserEntryService;

/**
 * Adds a user_entry to the Vidiun DB.
 * @param userEntry VidiunUserEntry  (optional).
 * @return VidiunUserEntry.
 */
VidiunUserEntryService.prototype.add = function(callback, userEntry){
	var vparams = {};
	this.client.addParam(vparams, 'userEntry', vidiun.toParams(userEntry));
	this.client.queueServiceActionCall('userentry', 'add', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * .
 * @param id int  (optional).
 * @param userEntry VidiunUserEntry  (optional).
 * @return .
 */
VidiunUserEntryService.prototype.update = function(callback, id, userEntry){
	var vparams = {};
	this.client.addParam(vparams, 'id', id);
	this.client.addParam(vparams, 'userEntry', vidiun.toParams(userEntry));
	this.client.queueServiceActionCall('userentry', 'update', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * .
 * @param id int  (optional).
 * @return VidiunUserEntry.
 */
VidiunUserEntryService.prototype.deleteAction = function(callback, id){
	var vparams = {};
	this.client.addParam(vparams, 'id', id);
	this.client.queueServiceActionCall('userentry', 'delete', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * .
 * @param filter VidiunUserEntryFilter  (optional).
 * @param pager VidiunFilterPager  (optional, default: null).
 * @return VidiunUserEntryListResponse.
 */
VidiunUserEntryService.prototype.listAction = function(callback, filter, pager){
	if(!pager){
		pager = null;
	}
	var vparams = {};
	this.client.addParam(vparams, 'filter', vidiun.toParams(filter));
	if (pager !== null){
		this.client.addParam(vparams, 'pager', vidiun.toParams(pager));
	}
	this.client.queueServiceActionCall('userentry', 'list', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * .
 * @param id string  (optional).
 * @return VidiunUserEntry.
 */
VidiunUserEntryService.prototype.get = function(callback, id){
	var vparams = {};
	this.client.addParam(vparams, 'id', id);
	this.client.queueServiceActionCall('userentry', 'get', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Submits the quiz so that it's status will be submitted and calculates the score for the quiz.
 * @param id int  (optional).
 * @return VidiunQuizUserEntry.
 */
VidiunUserEntryService.prototype.submitQuiz = function(callback, id){
	var vparams = {};
	this.client.addParam(vparams, 'id', id);
	this.client.queueServiceActionCall('userentry', 'submitQuiz', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Vidiun service: userRole.
 * The available service actions:
 * @action add Adds a new user role object to the account.
 * @action get Retrieves a user role object using its ID.
 * @action update Updates an existing user role object.
 * @action delete Deletes an existing user role object.
 * @action list Lists user role objects that are associated with an account.
 * Blocked user roles are listed unless you use a filter to exclude them.
 * Deleted user roles are not listed unless you use a filter to include them.
 * @action clone Creates a new user role object that is a duplicate of an existing role.
 */
function VidiunUserRoleService(client){
	VidiunUserRoleService.super_.call(this);
	this.init(client);
}

util.inherits(VidiunUserRoleService, vidiun.VidiunServiceBase);
module.exports.VidiunUserRoleService = VidiunUserRoleService;

/**
 * Adds a new user role object to the account.
 * @param userRole VidiunUserRole A new role (optional).
 * @return VidiunUserRole.
 */
VidiunUserRoleService.prototype.add = function(callback, userRole){
	var vparams = {};
	this.client.addParam(vparams, 'userRole', vidiun.toParams(userRole));
	this.client.queueServiceActionCall('userrole', 'add', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Retrieves a user role object using its ID.
 * @param userRoleId int The user role's unique identifier (optional).
 * @return VidiunUserRole.
 */
VidiunUserRoleService.prototype.get = function(callback, userRoleId){
	var vparams = {};
	this.client.addParam(vparams, 'userRoleId', userRoleId);
	this.client.queueServiceActionCall('userrole', 'get', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Updates an existing user role object.
 * @param userRoleId int The user role's unique identifier (optional).
 * @param userRole VidiunUserRole Id The user role's unique identifier (optional).
 * @return VidiunUserRole.
 */
VidiunUserRoleService.prototype.update = function(callback, userRoleId, userRole){
	var vparams = {};
	this.client.addParam(vparams, 'userRoleId', userRoleId);
	this.client.addParam(vparams, 'userRole', vidiun.toParams(userRole));
	this.client.queueServiceActionCall('userrole', 'update', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Deletes an existing user role object.
 * @param userRoleId int The user role's unique identifier (optional).
 * @return VidiunUserRole.
 */
VidiunUserRoleService.prototype.deleteAction = function(callback, userRoleId){
	var vparams = {};
	this.client.addParam(vparams, 'userRoleId', userRoleId);
	this.client.queueServiceActionCall('userrole', 'delete', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Lists user role objects that are associated with an account.
 * Blocked user roles are listed unless you use a filter to exclude them.
 * Deleted user roles are not listed unless you use a filter to include them.
 * @param filter VidiunUserRoleFilter A filter used to exclude specific types of user roles (optional, default: null).
 * @param pager VidiunFilterPager A limit for the number of records to display on a page (optional, default: null).
 * @return VidiunUserRoleListResponse.
 */
VidiunUserRoleService.prototype.listAction = function(callback, filter, pager){
	if(!filter){
		filter = null;
	}
	if(!pager){
		pager = null;
	}
	var vparams = {};
	if (filter !== null){
		this.client.addParam(vparams, 'filter', vidiun.toParams(filter));
	}
	if (pager !== null){
		this.client.addParam(vparams, 'pager', vidiun.toParams(pager));
	}
	this.client.queueServiceActionCall('userrole', 'list', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Creates a new user role object that is a duplicate of an existing role.
 * @param userRoleId int The user role's unique identifier (optional).
 * @return VidiunUserRole.
 */
VidiunUserRoleService.prototype.cloneAction = function(callback, userRoleId){
	var vparams = {};
	this.client.addParam(vparams, 'userRoleId', userRoleId);
	this.client.queueServiceActionCall('userrole', 'clone', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Vidiun service: user.
 * The available service actions:
 * @action add Adds a new user to an existing account in the Vidiun database.
 * Input param $id is the unique identifier in the partner's system.
 * @action update Updates an existing user object.
 * You can also use this action to update the userId.
 * @action get Retrieves a user object for a specified user ID.
 * @action getByLoginId Retrieves a user object for a user's login ID and partner ID.
 * A login ID is the email address used by a user to log into the system.
 * @action delete Deletes a user from a partner account.
 * @action list Lists user objects that are associated with an account.
 * Blocked users are listed unless you use a filter to exclude them.
 * Deleted users are not listed unless you use a filter to include them.
 * @action notifyBan Notifies that a user is banned from an account.
 * @action login Logs a user into a partner account with a partner ID, a partner user ID (puser), and a user password.
 * @action loginByLoginId Logs a user into a partner account with a user login ID and a user password.
 * @action updateLoginData Updates a user's login data: email, password, name.
 * @action resetPassword Reset user's password and send the user an email to generate a new one.
 * @action setInitialPassword Set initial users password.
 * @action enableLogin Enables a user to log into a partner account using an email address and a password.
 * @action disableLogin Disables a user's ability to log into a partner account using an email address and a password.
 * You may use either a userId or a loginId parameter for this action.
 * @action index Index an entry by id.
 * @action addFromBulkUpload .
 * @action checkLoginDataExists Action which checks whther user login.
 */
function VidiunUserService(client){
	VidiunUserService.super_.call(this);
	this.init(client);
}

util.inherits(VidiunUserService, vidiun.VidiunServiceBase);
module.exports.VidiunUserService = VidiunUserService;

/**
 * Adds a new user to an existing account in the Vidiun database.
 * Input param $id is the unique identifier in the partner's system.
 * @param user VidiunUser The new user (optional).
 * @return VidiunUser.
 */
VidiunUserService.prototype.add = function(callback, user){
	var vparams = {};
	this.client.addParam(vparams, 'user', vidiun.toParams(user));
	this.client.queueServiceActionCall('user', 'add', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Updates an existing user object.
 * You can also use this action to update the userId.
 * @param userId string The user's unique identifier in the partner's system (optional).
 * @param user VidiunUser Id The user's unique identifier in the partner's system (optional).
 * @return VidiunUser.
 */
VidiunUserService.prototype.update = function(callback, userId, user){
	var vparams = {};
	this.client.addParam(vparams, 'userId', userId);
	this.client.addParam(vparams, 'user', vidiun.toParams(user));
	this.client.queueServiceActionCall('user', 'update', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Retrieves a user object for a specified user ID.
 * @param userId string The user's unique identifier in the partner's system (optional, default: null).
 * @return VidiunUser.
 */
VidiunUserService.prototype.get = function(callback, userId){
	if(!userId){
		userId = null;
	}
	var vparams = {};
	this.client.addParam(vparams, 'userId', userId);
	this.client.queueServiceActionCall('user', 'get', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Retrieves a user object for a user's login ID and partner ID.
 * A login ID is the email address used by a user to log into the system.
 * @param loginId string The user's email address that identifies the user for login (optional).
 * @return VidiunUser.
 */
VidiunUserService.prototype.getByLoginId = function(callback, loginId){
	var vparams = {};
	this.client.addParam(vparams, 'loginId', loginId);
	this.client.queueServiceActionCall('user', 'getByLoginId', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Deletes a user from a partner account.
 * @param userId string The user's unique identifier in the partner's system (optional).
 * @return VidiunUser.
 */
VidiunUserService.prototype.deleteAction = function(callback, userId){
	var vparams = {};
	this.client.addParam(vparams, 'userId', userId);
	this.client.queueServiceActionCall('user', 'delete', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Lists user objects that are associated with an account.
 * Blocked users are listed unless you use a filter to exclude them.
 * Deleted users are not listed unless you use a filter to include them.
 * @param filter VidiunUserFilter A filter used to exclude specific types of users (optional, default: null).
 * @param pager VidiunFilterPager A limit for the number of records to display on a page (optional, default: null).
 * @return VidiunUserListResponse.
 */
VidiunUserService.prototype.listAction = function(callback, filter, pager){
	if(!filter){
		filter = null;
	}
	if(!pager){
		pager = null;
	}
	var vparams = {};
	if (filter !== null){
		this.client.addParam(vparams, 'filter', vidiun.toParams(filter));
	}
	if (pager !== null){
		this.client.addParam(vparams, 'pager', vidiun.toParams(pager));
	}
	this.client.queueServiceActionCall('user', 'list', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Notifies that a user is banned from an account.
 * @param userId string The user's unique identifier in the partner's system (optional).
 * @return .
 */
VidiunUserService.prototype.notifyBan = function(callback, userId){
	var vparams = {};
	this.client.addParam(vparams, 'userId', userId);
	this.client.queueServiceActionCall('user', 'notifyBan', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Logs a user into a partner account with a partner ID, a partner user ID (puser), and a user password.
 * @param partnerId int The identifier of the partner account (optional).
 * @param userId string The user's unique identifier in the partner's system (optional).
 * @param password string The user's password (optional).
 * @param expiry int The requested time (in seconds) before the generated VS expires (By default, a VS expires after 24 hours) (optional, default: 86400).
 * @param privileges string Special privileges (optional, default: *).
 * @return string.
 */
VidiunUserService.prototype.login = function(callback, partnerId, userId, password, expiry, privileges){
	if(!expiry){
		expiry = 86400;
	}
	if(!privileges){
		privileges = '*';
	}
	var vparams = {};
	this.client.addParam(vparams, 'partnerId', partnerId);
	this.client.addParam(vparams, 'userId', userId);
	this.client.addParam(vparams, 'password', password);
	this.client.addParam(vparams, 'expiry', expiry);
	this.client.addParam(vparams, 'privileges', privileges);
	this.client.queueServiceActionCall('user', 'login', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Logs a user into a partner account with a user login ID and a user password.
 * @param loginId string The user's email address that identifies the user for login (optional).
 * @param password string The user's password (optional).
 * @param partnerId int The identifier of the partner account (optional, default: null).
 * @param expiry int The requested time (in seconds) before the generated VS expires (By default, a VS expires after 24 hours) (optional, default: 86400).
 * @param privileges string Special privileges (optional, default: *).
 * @return string.
 */
VidiunUserService.prototype.loginByLoginId = function(callback, loginId, password, partnerId, expiry, privileges){
	if(!partnerId){
		partnerId = null;
	}
	if(!expiry){
		expiry = 86400;
	}
	if(!privileges){
		privileges = '*';
	}
	var vparams = {};
	this.client.addParam(vparams, 'loginId', loginId);
	this.client.addParam(vparams, 'password', password);
	this.client.addParam(vparams, 'partnerId', partnerId);
	this.client.addParam(vparams, 'expiry', expiry);
	this.client.addParam(vparams, 'privileges', privileges);
	this.client.queueServiceActionCall('user', 'loginByLoginId', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Updates a user's login data: email, password, name.
 * @param oldLoginId string The user's current email address that identified the user for login (optional).
 * @param password string The user's current email address that identified the user for login (optional).
 * @param newLoginId string Optional, The user's email address that will identify the user for login (optional).
 * @param newPassword string Optional, The user's new password (optional).
 * @param newFirstName string Optional, The user's new first name (optional, default: null).
 * @param newLastName string Optional, The user's new last name (optional, default: null).
 * @return .
 */
VidiunUserService.prototype.updateLoginData = function(callback, oldLoginId, password, newLoginId, newPassword, newFirstName, newLastName){
	if(!newLoginId){
		newLoginId = '';
	}
	if(!newPassword){
		newPassword = '';
	}
	if(!newFirstName){
		newFirstName = null;
	}
	if(!newLastName){
		newLastName = null;
	}
	var vparams = {};
	this.client.addParam(vparams, 'oldLoginId', oldLoginId);
	this.client.addParam(vparams, 'password', password);
	this.client.addParam(vparams, 'newLoginId', newLoginId);
	this.client.addParam(vparams, 'newPassword', newPassword);
	this.client.addParam(vparams, 'newFirstName', newFirstName);
	this.client.addParam(vparams, 'newLastName', newLastName);
	this.client.queueServiceActionCall('user', 'updateLoginData', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Reset user's password and send the user an email to generate a new one.
 * @param email string The user's email address (login email) (optional).
 * @return .
 */
VidiunUserService.prototype.resetPassword = function(callback, email){
	var vparams = {};
	this.client.addParam(vparams, 'email', email);
	this.client.queueServiceActionCall('user', 'resetPassword', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Set initial users password.
 * @param hashKey string The hash key used to identify the user (retrieved by email) (optional).
 * @param newPassword string The new password to set for the user (optional).
 * @return .
 */
VidiunUserService.prototype.setInitialPassword = function(callback, hashKey, newPassword){
	var vparams = {};
	this.client.addParam(vparams, 'hashKey', hashKey);
	this.client.addParam(vparams, 'newPassword', newPassword);
	this.client.queueServiceActionCall('user', 'setInitialPassword', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Enables a user to log into a partner account using an email address and a password.
 * @param userId string The user's unique identifier in the partner's system (optional).
 * @param loginId string The user's email address that identifies the user for login (optional).
 * @param password string The user's password (optional, default: null).
 * @return VidiunUser.
 */
VidiunUserService.prototype.enableLogin = function(callback, userId, loginId, password){
	if(!password){
		password = null;
	}
	var vparams = {};
	this.client.addParam(vparams, 'userId', userId);
	this.client.addParam(vparams, 'loginId', loginId);
	this.client.addParam(vparams, 'password', password);
	this.client.queueServiceActionCall('user', 'enableLogin', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Disables a user's ability to log into a partner account using an email address and a password.
 * You may use either a userId or a loginId parameter for this action.
 * @param userId string The user's unique identifier in the partner's system (optional, default: null).
 * @param loginId string The user's email address that identifies the user for login (optional, default: null).
 * @return VidiunUser.
 */
VidiunUserService.prototype.disableLogin = function(callback, userId, loginId){
	if(!userId){
		userId = null;
	}
	if(!loginId){
		loginId = null;
	}
	var vparams = {};
	this.client.addParam(vparams, 'userId', userId);
	this.client.addParam(vparams, 'loginId', loginId);
	this.client.queueServiceActionCall('user', 'disableLogin', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Index an entry by id.
 * @param id string  (optional).
 * @param shouldUpdate bool  (optional, default: true).
 * @return string.
 */
VidiunUserService.prototype.index = function(callback, id, shouldUpdate){
	if(!shouldUpdate){
		shouldUpdate = true;
	}
	var vparams = {};
	this.client.addParam(vparams, 'id', id);
	this.client.addParam(vparams, 'shouldUpdate', shouldUpdate);
	this.client.queueServiceActionCall('user', 'index', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * .
 * @param fileData file  (optional).
 * @param bulkUploadData VidiunBulkUploadJobData  (optional, default: null).
 * @param bulkUploadUserData VidiunBulkUploadUserData  (optional, default: null).
 * @return VidiunBulkUpload.
 */
VidiunUserService.prototype.addFromBulkUpload = function(callback, fileData, bulkUploadData, bulkUploadUserData){
	if(!bulkUploadData){
		bulkUploadData = null;
	}
	if(!bulkUploadUserData){
		bulkUploadUserData = null;
	}
	var vparams = {};
	var vfiles = {};
	this.client.addParam(vfiles, 'fileData', fileData);
	if (bulkUploadData !== null){
		this.client.addParam(vparams, 'bulkUploadData', vidiun.toParams(bulkUploadData));
	}
	if (bulkUploadUserData !== null){
		this.client.addParam(vparams, 'bulkUploadUserData', vidiun.toParams(bulkUploadUserData));
	}
	this.client.queueServiceActionCall('user', 'addFromBulkUpload', vparams, vfiles);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Action which checks whther user login.
 * @param filter VidiunUserLoginDataFilter  (optional).
 * @return bool.
 */
VidiunUserService.prototype.checkLoginDataExists = function(callback, filter){
	var vparams = {};
	this.client.addParam(vparams, 'filter', vidiun.toParams(filter));
	this.client.queueServiceActionCall('user', 'checkLoginDataExists', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Vidiun service: widget.
 * The available service actions:
 * @action add Add new widget, can be attached to entry or vshow
 * SourceWidget is ignored.
 * @action update Update exisiting widget.
 * @action get Get widget by id.
 * @action clone Add widget based on existing widget.
 * Must provide valid sourceWidgetId.
 * @action list Retrieve a list of available widget depends on the filter given.
 */
function VidiunWidgetService(client){
	VidiunWidgetService.super_.call(this);
	this.init(client);
}

util.inherits(VidiunWidgetService, vidiun.VidiunServiceBase);
module.exports.VidiunWidgetService = VidiunWidgetService;

/**
 * Add new widget, can be attached to entry or vshow
 * SourceWidget is ignored.
 * @param widget VidiunWidget  (optional).
 * @return VidiunWidget.
 */
VidiunWidgetService.prototype.add = function(callback, widget){
	var vparams = {};
	this.client.addParam(vparams, 'widget', vidiun.toParams(widget));
	this.client.queueServiceActionCall('widget', 'add', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Update exisiting widget.
 * @param id string  (optional).
 * @param widget VidiunWidget  (optional).
 * @return VidiunWidget.
 */
VidiunWidgetService.prototype.update = function(callback, id, widget){
	var vparams = {};
	this.client.addParam(vparams, 'id', id);
	this.client.addParam(vparams, 'widget', vidiun.toParams(widget));
	this.client.queueServiceActionCall('widget', 'update', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Get widget by id.
 * @param id string  (optional).
 * @return VidiunWidget.
 */
VidiunWidgetService.prototype.get = function(callback, id){
	var vparams = {};
	this.client.addParam(vparams, 'id', id);
	this.client.queueServiceActionCall('widget', 'get', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Add widget based on existing widget.
 * Must provide valid sourceWidgetId.
 * @param widget VidiunWidget  (optional).
 * @return VidiunWidget.
 */
VidiunWidgetService.prototype.cloneAction = function(callback, widget){
	var vparams = {};
	this.client.addParam(vparams, 'widget', vidiun.toParams(widget));
	this.client.queueServiceActionCall('widget', 'clone', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Retrieve a list of available widget depends on the filter given.
 * @param filter VidiunWidgetFilter  (optional, default: null).
 * @param pager VidiunFilterPager  (optional, default: null).
 * @return VidiunWidgetListResponse.
 */
VidiunWidgetService.prototype.listAction = function(callback, filter, pager){
	if(!filter){
		filter = null;
	}
	if(!pager){
		pager = null;
	}
	var vparams = {};
	if (filter !== null){
		this.client.addParam(vparams, 'filter', vidiun.toParams(filter));
	}
	if (pager !== null){
		this.client.addParam(vparams, 'pager', vidiun.toParams(pager));
	}
	this.client.queueServiceActionCall('widget', 'list', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Vidiun service: xInternal.
 * The available service actions:
 * @action xAddBulkDownload Creates new download job for multiple entry ids (comma separated), an email will be sent when the job is done
 * This sevice support the following entries:
 * - MediaEntry
 * - Video will be converted using the flavor params id
 * - Audio will be downloaded as MP3
 * - Image will be downloaded as Jpeg
 * - MixEntry will be flattened using the flavor params id
 * - Other entry types are not supported
 * Returns the admin email that the email message will be sent to.
 */
function VidiunXInternalService(client){
	VidiunXInternalService.super_.call(this);
	this.init(client);
}

util.inherits(VidiunXInternalService, vidiun.VidiunServiceBase);
module.exports.VidiunXInternalService = VidiunXInternalService;

/**
 * Creates new download job for multiple entry ids (comma separated), an email will be sent when the job is done
 * This sevice support the following entries:
 * - MediaEntry
 * - Video will be converted using the flavor params id
 * - Audio will be downloaded as MP3
 * - Image will be downloaded as Jpeg
 * - MixEntry will be flattened using the flavor params id
 * - Other entry types are not supported
 * Returns the admin email that the email message will be sent to.
 * @param entryIds string Comma separated list of entry ids (optional).
 * @param flavorParamsId string  (optional).
 * @return string.
 */
VidiunXInternalService.prototype.xAddBulkDownload = function(callback, entryIds, flavorParamsId){
	if(!flavorParamsId){
		flavorParamsId = '';
	}
	var vparams = {};
	this.client.addParam(vparams, 'entryIds', entryIds);
	this.client.addParam(vparams, 'flavorParamsId', flavorParamsId);
	this.client.queueServiceActionCall('xinternal', 'xAddBulkDownload', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Vidiun service: metadata.
 * The available service actions:
 * @action add Allows you to add a metadata object and metadata content associated with Vidiun object.
 * @action addFromFile Allows you to add a metadata object and metadata file associated with Vidiun object.
 * @action addFromUrl Allows you to add a metadata xml data from remote URL.
 * @action addFromBulk Allows you to add a metadata xml data from remote URL.
 * Enables different permissions than addFromUrl action.
 * @action get Retrieve a metadata object by id.
 * @action update Update an existing metadata object with new XML content.
 * @action updateFromFile Update an existing metadata object with new XML file.
 * @action list List metadata objects by filter and pager.
 * @action delete Delete an existing metadata.
 * @action invalidate Mark existing metadata as invalid
 * Used by batch metadata transform.
 * @action index Index metadata by id, will also index the related object.
 * @action updateFromXSL Action transforms current metadata object XML using a provided XSL.
 */
function VidiunMetadataService(client){
	VidiunMetadataService.super_.call(this);
	this.init(client);
}

util.inherits(VidiunMetadataService, vidiun.VidiunServiceBase);
module.exports.VidiunMetadataService = VidiunMetadataService;

/**
 * Allows you to add a metadata object and metadata content associated with Vidiun object.
 * @param metadataProfileId int  (optional).
 * @param objectType string  (optional, enum: VidiunMetadataObjectType).
 * @param objectId string  (optional).
 * @param xmlData string XML metadata (optional).
 * @return VidiunMetadata.
 */
VidiunMetadataService.prototype.add = function(callback, metadataProfileId, objectType, objectId, xmlData){
	var vparams = {};
	this.client.addParam(vparams, 'metadataProfileId', metadataProfileId);
	this.client.addParam(vparams, 'objectType', objectType);
	this.client.addParam(vparams, 'objectId', objectId);
	this.client.addParam(vparams, 'xmlData', xmlData);
	this.client.queueServiceActionCall('metadata_metadata', 'add', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Allows you to add a metadata object and metadata file associated with Vidiun object.
 * @param metadataProfileId int  (optional).
 * @param objectType string  (optional, enum: VidiunMetadataObjectType).
 * @param objectId string  (optional).
 * @param xmlFile file XML metadata (optional).
 * @return VidiunMetadata.
 */
VidiunMetadataService.prototype.addFromFile = function(callback, metadataProfileId, objectType, objectId, xmlFile){
	var vparams = {};
	this.client.addParam(vparams, 'metadataProfileId', metadataProfileId);
	this.client.addParam(vparams, 'objectType', objectType);
	this.client.addParam(vparams, 'objectId', objectId);
	var vfiles = {};
	this.client.addParam(vfiles, 'xmlFile', xmlFile);
	this.client.queueServiceActionCall('metadata_metadata', 'addFromFile', vparams, vfiles);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Allows you to add a metadata xml data from remote URL.
 * @param metadataProfileId int  (optional).
 * @param objectType string  (optional, enum: VidiunMetadataObjectType).
 * @param objectId string  (optional).
 * @param url string XML metadata remote url (optional).
 * @return VidiunMetadata.
 */
VidiunMetadataService.prototype.addFromUrl = function(callback, metadataProfileId, objectType, objectId, url){
	var vparams = {};
	this.client.addParam(vparams, 'metadataProfileId', metadataProfileId);
	this.client.addParam(vparams, 'objectType', objectType);
	this.client.addParam(vparams, 'objectId', objectId);
	this.client.addParam(vparams, 'url', url);
	this.client.queueServiceActionCall('metadata_metadata', 'addFromUrl', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Allows you to add a metadata xml data from remote URL.
 * Enables different permissions than addFromUrl action.
 * @param metadataProfileId int  (optional).
 * @param objectType string  (optional, enum: VidiunMetadataObjectType).
 * @param objectId string  (optional).
 * @param url string XML metadata remote url (optional).
 * @return VidiunMetadata.
 */
VidiunMetadataService.prototype.addFromBulk = function(callback, metadataProfileId, objectType, objectId, url){
	var vparams = {};
	this.client.addParam(vparams, 'metadataProfileId', metadataProfileId);
	this.client.addParam(vparams, 'objectType', objectType);
	this.client.addParam(vparams, 'objectId', objectId);
	this.client.addParam(vparams, 'url', url);
	this.client.queueServiceActionCall('metadata_metadata', 'addFromBulk', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Retrieve a metadata object by id.
 * @param id int  (optional).
 * @return VidiunMetadata.
 */
VidiunMetadataService.prototype.get = function(callback, id){
	var vparams = {};
	this.client.addParam(vparams, 'id', id);
	this.client.queueServiceActionCall('metadata_metadata', 'get', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Update an existing metadata object with new XML content.
 * @param id int  (optional).
 * @param xmlData string XML metadata (optional, default: null).
 * @param version int Enable update only if the metadata object version did not change by other process (optional, default: null).
 * @return VidiunMetadata.
 */
VidiunMetadataService.prototype.update = function(callback, id, xmlData, version){
	if(!xmlData){
		xmlData = null;
	}
	if(!version){
		version = null;
	}
	var vparams = {};
	this.client.addParam(vparams, 'id', id);
	this.client.addParam(vparams, 'xmlData', xmlData);
	this.client.addParam(vparams, 'version', version);
	this.client.queueServiceActionCall('metadata_metadata', 'update', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Update an existing metadata object with new XML file.
 * @param id int  (optional).
 * @param xmlFile file XML metadata (optional, default: null).
 * @return VidiunMetadata.
 */
VidiunMetadataService.prototype.updateFromFile = function(callback, id, xmlFile){
	if(!xmlFile){
		xmlFile = null;
	}
	var vparams = {};
	this.client.addParam(vparams, 'id', id);
	var vfiles = {};
	this.client.addParam(vfiles, 'xmlFile', xmlFile);
	this.client.queueServiceActionCall('metadata_metadata', 'updateFromFile', vparams, vfiles);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * List metadata objects by filter and pager.
 * @param filter VidiunMetadataFilter  (optional, default: null).
 * @param pager VidiunFilterPager  (optional, default: null).
 * @return VidiunMetadataListResponse.
 */
VidiunMetadataService.prototype.listAction = function(callback, filter, pager){
	if(!filter){
		filter = null;
	}
	if(!pager){
		pager = null;
	}
	var vparams = {};
	if (filter !== null){
		this.client.addParam(vparams, 'filter', vidiun.toParams(filter));
	}
	if (pager !== null){
		this.client.addParam(vparams, 'pager', vidiun.toParams(pager));
	}
	this.client.queueServiceActionCall('metadata_metadata', 'list', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Delete an existing metadata.
 * @param id int  (optional).
 * @return .
 */
VidiunMetadataService.prototype.deleteAction = function(callback, id){
	var vparams = {};
	this.client.addParam(vparams, 'id', id);
	this.client.queueServiceActionCall('metadata_metadata', 'delete', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Mark existing metadata as invalid
 * Used by batch metadata transform.
 * @param id int  (optional).
 * @param version int Enable update only if the metadata object version did not change by other process (optional, default: null).
 * @return .
 */
VidiunMetadataService.prototype.invalidate = function(callback, id, version){
	if(!version){
		version = null;
	}
	var vparams = {};
	this.client.addParam(vparams, 'id', id);
	this.client.addParam(vparams, 'version', version);
	this.client.queueServiceActionCall('metadata_metadata', 'invalidate', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Index metadata by id, will also index the related object.
 * @param id string  (optional).
 * @param shouldUpdate bool  (optional).
 * @return int.
 */
VidiunMetadataService.prototype.index = function(callback, id, shouldUpdate){
	var vparams = {};
	this.client.addParam(vparams, 'id', id);
	this.client.addParam(vparams, 'shouldUpdate', shouldUpdate);
	this.client.queueServiceActionCall('metadata_metadata', 'index', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Action transforms current metadata object XML using a provided XSL.
 * @param id int  (optional).
 * @param xslFile file  (optional).
 * @return VidiunMetadata.
 */
VidiunMetadataService.prototype.updateFromXSL = function(callback, id, xslFile){
	var vparams = {};
	this.client.addParam(vparams, 'id', id);
	var vfiles = {};
	this.client.addParam(vfiles, 'xslFile', xslFile);
	this.client.queueServiceActionCall('metadata_metadata', 'updateFromXSL', vparams, vfiles);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Vidiun service: metadataProfile.
 * The available service actions:
 * @action add Allows you to add a metadata profile object and metadata profile content associated with Vidiun object type.
 * @action addFromFile Allows you to add a metadata profile object and metadata profile file associated with Vidiun object type.
 * @action get Retrieve a metadata profile object by id.
 * @action update Update an existing metadata object.
 * @action list List metadata profile objects by filter and pager.
 * @action listFields List metadata profile fields by metadata profile id.
 * @action delete Delete an existing metadata profile.
 * @action revert Update an existing metadata object definition file.
 * @action updateDefinitionFromFile Update an existing metadata object definition file.
 * @action updateViewsFromFile Update an existing metadata object views file.
 * @action updateTransformationFromFile Update an existing metadata object xslt file.
 */
function VidiunMetadataProfileService(client){
	VidiunMetadataProfileService.super_.call(this);
	this.init(client);
}

util.inherits(VidiunMetadataProfileService, vidiun.VidiunServiceBase);
module.exports.VidiunMetadataProfileService = VidiunMetadataProfileService;

/**
 * Allows you to add a metadata profile object and metadata profile content associated with Vidiun object type.
 * @param metadataProfile VidiunMetadataProfile  (optional).
 * @param xsdData string XSD metadata definition (optional).
 * @param viewsData string UI views definition (optional, default: null).
 * @return VidiunMetadataProfile.
 */
VidiunMetadataProfileService.prototype.add = function(callback, metadataProfile, xsdData, viewsData){
	if(!viewsData){
		viewsData = null;
	}
	var vparams = {};
	this.client.addParam(vparams, 'metadataProfile', vidiun.toParams(metadataProfile));
	this.client.addParam(vparams, 'xsdData', xsdData);
	this.client.addParam(vparams, 'viewsData', viewsData);
	this.client.queueServiceActionCall('metadata_metadataprofile', 'add', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Allows you to add a metadata profile object and metadata profile file associated with Vidiun object type.
 * @param metadataProfile VidiunMetadataProfile  (optional).
 * @param xsdFile file XSD metadata definition (optional).
 * @param viewsFile file UI views definition (optional, default: null).
 * @return VidiunMetadataProfile.
 */
VidiunMetadataProfileService.prototype.addFromFile = function(callback, metadataProfile, xsdFile, viewsFile){
	if(!viewsFile){
		viewsFile = null;
	}
	var vparams = {};
	this.client.addParam(vparams, 'metadataProfile', vidiun.toParams(metadataProfile));
	var vfiles = {};
	this.client.addParam(vfiles, 'xsdFile', xsdFile);
	this.client.addParam(vfiles, 'viewsFile', viewsFile);
	this.client.queueServiceActionCall('metadata_metadataprofile', 'addFromFile', vparams, vfiles);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Retrieve a metadata profile object by id.
 * @param id int  (optional).
 * @return VidiunMetadataProfile.
 */
VidiunMetadataProfileService.prototype.get = function(callback, id){
	var vparams = {};
	this.client.addParam(vparams, 'id', id);
	this.client.queueServiceActionCall('metadata_metadataprofile', 'get', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Update an existing metadata object.
 * @param id int  (optional).
 * @param metadataProfile VidiunMetadataProfile  (optional).
 * @param xsdData string XSD metadata definition (optional, default: null).
 * @param viewsData string UI views definition (optional, default: null).
 * @return VidiunMetadataProfile.
 */
VidiunMetadataProfileService.prototype.update = function(callback, id, metadataProfile, xsdData, viewsData){
	if(!xsdData){
		xsdData = null;
	}
	if(!viewsData){
		viewsData = null;
	}
	var vparams = {};
	this.client.addParam(vparams, 'id', id);
	this.client.addParam(vparams, 'metadataProfile', vidiun.toParams(metadataProfile));
	this.client.addParam(vparams, 'xsdData', xsdData);
	this.client.addParam(vparams, 'viewsData', viewsData);
	this.client.queueServiceActionCall('metadata_metadataprofile', 'update', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * List metadata profile objects by filter and pager.
 * @param filter VidiunMetadataProfileFilter  (optional, default: null).
 * @param pager VidiunFilterPager  (optional, default: null).
 * @return VidiunMetadataProfileListResponse.
 */
VidiunMetadataProfileService.prototype.listAction = function(callback, filter, pager){
	if(!filter){
		filter = null;
	}
	if(!pager){
		pager = null;
	}
	var vparams = {};
	if (filter !== null){
		this.client.addParam(vparams, 'filter', vidiun.toParams(filter));
	}
	if (pager !== null){
		this.client.addParam(vparams, 'pager', vidiun.toParams(pager));
	}
	this.client.queueServiceActionCall('metadata_metadataprofile', 'list', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * List metadata profile fields by metadata profile id.
 * @param metadataProfileId int  (optional).
 * @return VidiunMetadataProfileFieldListResponse.
 */
VidiunMetadataProfileService.prototype.listFields = function(callback, metadataProfileId){
	var vparams = {};
	this.client.addParam(vparams, 'metadataProfileId', metadataProfileId);
	this.client.queueServiceActionCall('metadata_metadataprofile', 'listFields', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Delete an existing metadata profile.
 * @param id int  (optional).
 * @return .
 */
VidiunMetadataProfileService.prototype.deleteAction = function(callback, id){
	var vparams = {};
	this.client.addParam(vparams, 'id', id);
	this.client.queueServiceActionCall('metadata_metadataprofile', 'delete', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Update an existing metadata object definition file.
 * @param id int  (optional).
 * @param toVersion int  (optional).
 * @return VidiunMetadataProfile.
 */
VidiunMetadataProfileService.prototype.revert = function(callback, id, toVersion){
	var vparams = {};
	this.client.addParam(vparams, 'id', id);
	this.client.addParam(vparams, 'toVersion', toVersion);
	this.client.queueServiceActionCall('metadata_metadataprofile', 'revert', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Update an existing metadata object definition file.
 * @param id int  (optional).
 * @param xsdFile file XSD metadata definition (optional).
 * @return VidiunMetadataProfile.
 */
VidiunMetadataProfileService.prototype.updateDefinitionFromFile = function(callback, id, xsdFile){
	var vparams = {};
	this.client.addParam(vparams, 'id', id);
	var vfiles = {};
	this.client.addParam(vfiles, 'xsdFile', xsdFile);
	this.client.queueServiceActionCall('metadata_metadataprofile', 'updateDefinitionFromFile', vparams, vfiles);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Update an existing metadata object views file.
 * @param id int  (optional).
 * @param viewsFile file UI views file (optional).
 * @return VidiunMetadataProfile.
 */
VidiunMetadataProfileService.prototype.updateViewsFromFile = function(callback, id, viewsFile){
	var vparams = {};
	this.client.addParam(vparams, 'id', id);
	var vfiles = {};
	this.client.addParam(vfiles, 'viewsFile', viewsFile);
	this.client.queueServiceActionCall('metadata_metadataprofile', 'updateViewsFromFile', vparams, vfiles);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Update an existing metadata object xslt file.
 * @param id int  (optional).
 * @param xsltFile file XSLT file, will be executed on every metadata add/update (optional).
 * @return VidiunMetadataProfile.
 */
VidiunMetadataProfileService.prototype.updateTransformationFromFile = function(callback, id, xsltFile){
	var vparams = {};
	this.client.addParam(vparams, 'id', id);
	var vfiles = {};
	this.client.addParam(vfiles, 'xsltFile', xsltFile);
	this.client.queueServiceActionCall('metadata_metadataprofile', 'updateTransformationFromFile', vparams, vfiles);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Vidiun service: metadataBatch.
 * The available service actions:
 * @action getExclusiveTransformMetadataJobs batch getExclusiveTransformMetadataJob action allows to get a BatchJob of type METADATA_TRANSFORM.
 * @action getTransformMetadataObjects batch getTransformMetadataObjects action retrieve all metadata objects that requires upgrade and the total count.
 */
function VidiunMetadataBatchService(client){
	VidiunMetadataBatchService.super_.call(this);
	this.init(client);
}

util.inherits(VidiunMetadataBatchService, vidiun.VidiunServiceBase);
module.exports.VidiunMetadataBatchService = VidiunMetadataBatchService;

/**
 * batch getExclusiveTransformMetadataJob action allows to get a BatchJob of type METADATA_TRANSFORM.
 * @param lockKey VidiunExclusiveLockKey The unique lock key from the batch-process. Is used for the locking mechanism (optional).
 * @param maxExecutionTime int The maximum time in seconds the job reguarly take. Is used for the locking mechanism when determining an unexpected termination of a batch-process (optional).
 * @param numberOfJobs int The maximum number of jobs to return (optional).
 * @param filter VidiunBatchJobFilter Set of rules to fetch only rartial list of jobs (optional, default: null).
 * @param maxOffset int The maximum offset we accept for the distance from the best result (optional, default: null).
 * @return array.
 */
VidiunMetadataBatchService.prototype.getExclusiveTransformMetadataJobs = function(callback, lockKey, maxExecutionTime, numberOfJobs, filter, maxOffset){
	if(!filter){
		filter = null;
	}
	if(!maxOffset){
		maxOffset = null;
	}
	var vparams = {};
	this.client.addParam(vparams, 'lockKey', vidiun.toParams(lockKey));
	this.client.addParam(vparams, 'maxExecutionTime', maxExecutionTime);
	this.client.addParam(vparams, 'numberOfJobs', numberOfJobs);
	if (filter !== null){
		this.client.addParam(vparams, 'filter', vidiun.toParams(filter));
	}
	this.client.addParam(vparams, 'maxOffset', maxOffset);
	this.client.queueServiceActionCall('metadata_metadatabatch', 'getExclusiveTransformMetadataJobs', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * batch getTransformMetadataObjects action retrieve all metadata objects that requires upgrade and the total count.
 * @param metadataProfileId int The id of the metadata profile (optional).
 * @param srcVersion int The old metadata profile version (optional).
 * @param destVersion int The new metadata profile version (optional).
 * @param pager VidiunFilterPager  (optional, default: null).
 * @return VidiunTransformMetadataResponse.
 */
VidiunMetadataBatchService.prototype.getTransformMetadataObjects = function(callback, metadataProfileId, srcVersion, destVersion, pager){
	if(!pager){
		pager = null;
	}
	var vparams = {};
	this.client.addParam(vparams, 'metadataProfileId', metadataProfileId);
	this.client.addParam(vparams, 'srcVersion', srcVersion);
	this.client.addParam(vparams, 'destVersion', destVersion);
	if (pager !== null){
		this.client.addParam(vparams, 'pager', vidiun.toParams(pager));
	}
	this.client.queueServiceActionCall('metadata_metadatabatch', 'getTransformMetadataObjects', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Vidiun service: documents.
 * The available service actions:
 * @action addFromUploadedFile Add new document entry after the specific document file was uploaded and the upload token id exists.
 * @action addFromEntry Copy entry into new entry.
 * @action addFromFlavorAsset Copy flavor asset into new entry.
 * @action convert Convert entry.
 * @action get Get document entry by ID.
 * @action update Update document entry. Only the properties that were set will be updated.
 * @action delete Delete a document entry.
 * @action list List document entries by filter with paging support.
 * @action upload Upload a document file to Vidiun, then the file can be used to create a document entry.
 * @action convertPptToSwf This will queue a batch job for converting the document file to swf
 * Returns the URL where the new swf will be available.
 * @action updateContent Replace content associated with the given document entry.
 * @action approveReplace Approves document replacement.
 * @action cancelReplace Cancels document replacement.
 */
function VidiunDocumentsService(client){
	VidiunDocumentsService.super_.call(this);
	this.init(client);
}

util.inherits(VidiunDocumentsService, vidiun.VidiunServiceBase);
module.exports.VidiunDocumentsService = VidiunDocumentsService;

/**
 * Add new document entry after the specific document file was uploaded and the upload token id exists.
 * @param documentEntry VidiunDocumentEntry Document entry metadata (optional).
 * @param uploadTokenId string Upload token id (optional).
 * @return VidiunDocumentEntry.
 */
VidiunDocumentsService.prototype.addFromUploadedFile = function(callback, documentEntry, uploadTokenId){
	var vparams = {};
	this.client.addParam(vparams, 'documentEntry', vidiun.toParams(documentEntry));
	this.client.addParam(vparams, 'uploadTokenId', uploadTokenId);
	this.client.queueServiceActionCall('document_documents', 'addFromUploadedFile', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Copy entry into new entry.
 * @param sourceEntryId string Document entry id to copy from (optional).
 * @param documentEntry VidiunDocumentEntry Document entry metadata (optional, default: null).
 * @param sourceFlavorParamsId int The flavor to be used as the new entry source, source flavor will be used if not specified (optional, default: null).
 * @return VidiunDocumentEntry.
 */
VidiunDocumentsService.prototype.addFromEntry = function(callback, sourceEntryId, documentEntry, sourceFlavorParamsId){
	if(!documentEntry){
		documentEntry = null;
	}
	if(!sourceFlavorParamsId){
		sourceFlavorParamsId = null;
	}
	var vparams = {};
	this.client.addParam(vparams, 'sourceEntryId', sourceEntryId);
	if (documentEntry !== null){
		this.client.addParam(vparams, 'documentEntry', vidiun.toParams(documentEntry));
	}
	this.client.addParam(vparams, 'sourceFlavorParamsId', sourceFlavorParamsId);
	this.client.queueServiceActionCall('document_documents', 'addFromEntry', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Copy flavor asset into new entry.
 * @param sourceFlavorAssetId string Flavor asset id to be used as the new entry source (optional).
 * @param documentEntry VidiunDocumentEntry Document entry metadata (optional, default: null).
 * @return VidiunDocumentEntry.
 */
VidiunDocumentsService.prototype.addFromFlavorAsset = function(callback, sourceFlavorAssetId, documentEntry){
	if(!documentEntry){
		documentEntry = null;
	}
	var vparams = {};
	this.client.addParam(vparams, 'sourceFlavorAssetId', sourceFlavorAssetId);
	if (documentEntry !== null){
		this.client.addParam(vparams, 'documentEntry', vidiun.toParams(documentEntry));
	}
	this.client.queueServiceActionCall('document_documents', 'addFromFlavorAsset', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Convert entry.
 * @param entryId string Document entry id (optional).
 * @param conversionProfileId int  (optional, default: null).
 * @param dynamicConversionAttributes array  (optional, default: null).
 * @return bigint.
 */
VidiunDocumentsService.prototype.convert = function(callback, entryId, conversionProfileId, dynamicConversionAttributes){
	if(!conversionProfileId){
		conversionProfileId = null;
	}
	if(!dynamicConversionAttributes){
		dynamicConversionAttributes = null;
	}
	var vparams = {};
	this.client.addParam(vparams, 'entryId', entryId);
	this.client.addParam(vparams, 'conversionProfileId', conversionProfileId);
	if(dynamicConversionAttributes !== null){
	for(var index in dynamicConversionAttributes)
	{
		var obj = dynamicConversionAttributes[index];
		this.client.addParam(vparams, 'dynamicConversionAttributes:' + index, vidiun.toParams(obj));
	}
	}
	this.client.queueServiceActionCall('document_documents', 'convert', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Get document entry by ID.
 * @param entryId string Document entry id (optional).
 * @param version int Desired version of the data (optional, default: -1).
 * @return VidiunDocumentEntry.
 */
VidiunDocumentsService.prototype.get = function(callback, entryId, version){
	if(!version){
		version = -1;
	}
	var vparams = {};
	this.client.addParam(vparams, 'entryId', entryId);
	this.client.addParam(vparams, 'version', version);
	this.client.queueServiceActionCall('document_documents', 'get', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Update document entry. Only the properties that were set will be updated.
 * @param entryId string Document entry id to update (optional).
 * @param documentEntry VidiunDocumentEntry Document entry metadata to update (optional).
 * @return VidiunDocumentEntry.
 */
VidiunDocumentsService.prototype.update = function(callback, entryId, documentEntry){
	var vparams = {};
	this.client.addParam(vparams, 'entryId', entryId);
	this.client.addParam(vparams, 'documentEntry', vidiun.toParams(documentEntry));
	this.client.queueServiceActionCall('document_documents', 'update', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Delete a document entry.
 * @param entryId string Document entry id to delete (optional).
 * @return .
 */
VidiunDocumentsService.prototype.deleteAction = function(callback, entryId){
	var vparams = {};
	this.client.addParam(vparams, 'entryId', entryId);
	this.client.queueServiceActionCall('document_documents', 'delete', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * List document entries by filter with paging support.
 * @param filter VidiunDocumentEntryFilter Document entry filter (optional, default: null).
 * @param pager VidiunFilterPager Pager (optional, default: null).
 * @return VidiunDocumentListResponse.
 */
VidiunDocumentsService.prototype.listAction = function(callback, filter, pager){
	if(!filter){
		filter = null;
	}
	if(!pager){
		pager = null;
	}
	var vparams = {};
	if (filter !== null){
		this.client.addParam(vparams, 'filter', vidiun.toParams(filter));
	}
	if (pager !== null){
		this.client.addParam(vparams, 'pager', vidiun.toParams(pager));
	}
	this.client.queueServiceActionCall('document_documents', 'list', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Upload a document file to Vidiun, then the file can be used to create a document entry.
 * @param fileData file The file data (optional).
 * @return string.
 */
VidiunDocumentsService.prototype.upload = function(callback, fileData){
	var vparams = {};
	var vfiles = {};
	this.client.addParam(vfiles, 'fileData', fileData);
	this.client.queueServiceActionCall('document_documents', 'upload', vparams, vfiles);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * This will queue a batch job for converting the document file to swf
 * Returns the URL where the new swf will be available.
 * @param entryId string  (optional).
 * @return string.
 */
VidiunDocumentsService.prototype.convertPptToSwf = function(callback, entryId){
	var vparams = {};
	this.client.addParam(vparams, 'entryId', entryId);
	this.client.queueServiceActionCall('document_documents', 'convertPptToSwf', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Replace content associated with the given document entry.
 * @param entryId string document entry id to update (optional).
 * @param resource VidiunResource Resource to be used to replace entry doc content (optional).
 * @param conversionProfileId int The conversion profile id to be used on the entry (optional, default: null).
 * @return VidiunDocumentEntry.
 */
VidiunDocumentsService.prototype.updateContent = function(callback, entryId, resource, conversionProfileId){
	if(!conversionProfileId){
		conversionProfileId = null;
	}
	var vparams = {};
	this.client.addParam(vparams, 'entryId', entryId);
	this.client.addParam(vparams, 'resource', vidiun.toParams(resource));
	this.client.addParam(vparams, 'conversionProfileId', conversionProfileId);
	this.client.queueServiceActionCall('document_documents', 'updateContent', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Approves document replacement.
 * @param entryId string document entry id to replace (optional).
 * @return VidiunDocumentEntry.
 */
VidiunDocumentsService.prototype.approveReplace = function(callback, entryId){
	var vparams = {};
	this.client.addParam(vparams, 'entryId', entryId);
	this.client.queueServiceActionCall('document_documents', 'approveReplace', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Cancels document replacement.
 * @param entryId string Document entry id to cancel (optional).
 * @return VidiunDocumentEntry.
 */
VidiunDocumentsService.prototype.cancelReplace = function(callback, entryId){
	var vparams = {};
	this.client.addParam(vparams, 'entryId', entryId);
	this.client.queueServiceActionCall('document_documents', 'cancelReplace', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Vidiun service: annotation.
 * The available service actions:
 * @action add Allows you to add an annotation object associated with an entry.
 * @action update Update annotation by id.
 * @action list List annotation objects by filter and pager.
 * @action addFromBulk Allows you to add multiple cue points objects by uploading XML that contains multiple cue point definitions.
 * @action get Retrieve an CuePoint object by id.
 * @action count count cue point objects by filter.
 * @action delete delete cue point by id, and delete all children cue points.
 * @action updateStatus Update cuePoint status by id.
 */
function VidiunAnnotationService(client){
	VidiunAnnotationService.super_.call(this);
	this.init(client);
}

util.inherits(VidiunAnnotationService, vidiun.VidiunServiceBase);
module.exports.VidiunAnnotationService = VidiunAnnotationService;

/**
 * Allows you to add an annotation object associated with an entry.
 * @param annotation VidiunCuePoint  (optional).
 * @return VidiunAnnotation.
 */
VidiunAnnotationService.prototype.add = function(callback, annotation){
	var vparams = {};
	this.client.addParam(vparams, 'annotation', vidiun.toParams(annotation));
	this.client.queueServiceActionCall('annotation_annotation', 'add', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Update annotation by id.
 * @param id string  (optional).
 * @param annotation VidiunCuePoint  (optional).
 * @return VidiunAnnotation.
 */
VidiunAnnotationService.prototype.update = function(callback, id, annotation){
	var vparams = {};
	this.client.addParam(vparams, 'id', id);
	this.client.addParam(vparams, 'annotation', vidiun.toParams(annotation));
	this.client.queueServiceActionCall('annotation_annotation', 'update', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * List annotation objects by filter and pager.
 * @param filter VidiunCuePointFilter  (optional, default: null).
 * @param pager VidiunFilterPager  (optional, default: null).
 * @return VidiunAnnotationListResponse.
 */
VidiunAnnotationService.prototype.listAction = function(callback, filter, pager){
	if(!filter){
		filter = null;
	}
	if(!pager){
		pager = null;
	}
	var vparams = {};
	if (filter !== null){
		this.client.addParam(vparams, 'filter', vidiun.toParams(filter));
	}
	if (pager !== null){
		this.client.addParam(vparams, 'pager', vidiun.toParams(pager));
	}
	this.client.queueServiceActionCall('annotation_annotation', 'list', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Allows you to add multiple cue points objects by uploading XML that contains multiple cue point definitions.
 * @param fileData file  (optional).
 * @return VidiunCuePointListResponse.
 */
VidiunAnnotationService.prototype.addFromBulk = function(callback, fileData){
	var vparams = {};
	var vfiles = {};
	this.client.addParam(vfiles, 'fileData', fileData);
	this.client.queueServiceActionCall('annotation_annotation', 'addFromBulk', vparams, vfiles);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Retrieve an CuePoint object by id.
 * @param id string  (optional).
 * @return VidiunCuePoint.
 */
VidiunAnnotationService.prototype.get = function(callback, id){
	var vparams = {};
	this.client.addParam(vparams, 'id', id);
	this.client.queueServiceActionCall('annotation_annotation', 'get', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * count cue point objects by filter.
 * @param filter VidiunCuePointFilter  (optional, default: null).
 * @return int.
 */
VidiunAnnotationService.prototype.count = function(callback, filter){
	if(!filter){
		filter = null;
	}
	var vparams = {};
	if (filter !== null){
		this.client.addParam(vparams, 'filter', vidiun.toParams(filter));
	}
	this.client.queueServiceActionCall('annotation_annotation', 'count', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * delete cue point by id, and delete all children cue points.
 * @param id string  (optional).
 * @return .
 */
VidiunAnnotationService.prototype.deleteAction = function(callback, id){
	var vparams = {};
	this.client.addParam(vparams, 'id', id);
	this.client.queueServiceActionCall('annotation_annotation', 'delete', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Update cuePoint status by id.
 * @param id string  (optional).
 * @param status int  (optional, enum: VidiunCuePointStatus).
 * @return .
 */
VidiunAnnotationService.prototype.updateStatus = function(callback, id, status){
	var vparams = {};
	this.client.addParam(vparams, 'id', id);
	this.client.addParam(vparams, 'status', status);
	this.client.queueServiceActionCall('annotation_annotation', 'updateStatus', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Vidiun service: aspera.
 * The available service actions:
 * @action getFaspUrl .
 */
function VidiunAsperaService(client){
	VidiunAsperaService.super_.call(this);
	this.init(client);
}

util.inherits(VidiunAsperaService, vidiun.VidiunServiceBase);
module.exports.VidiunAsperaService = VidiunAsperaService;

/**
 * .
 * @param flavorAssetId string  (optional).
 * @return string.
 */
VidiunAsperaService.prototype.getFaspUrl = function(callback, flavorAssetId){
	var vparams = {};
	this.client.addParam(vparams, 'flavorAssetId', flavorAssetId);
	this.client.queueServiceActionCall('aspera_aspera', 'getFaspUrl', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Vidiun service: attachmentAsset.
 * The available service actions:
 * @action add Add attachment asset.
 * @action setContent Update content of attachment asset.
 * @action update Update attachment asset.
 * @action getUrl Get download URL for the asset.
 * @action getRemotePaths Get remote storage existing paths for the asset.
 * @action get .
 * @action list List attachment Assets by filter and pager.
 * @action delete .
 */
function VidiunAttachmentAssetService(client){
	VidiunAttachmentAssetService.super_.call(this);
	this.init(client);
}

util.inherits(VidiunAttachmentAssetService, vidiun.VidiunServiceBase);
module.exports.VidiunAttachmentAssetService = VidiunAttachmentAssetService;

/**
 * Add attachment asset.
 * @param entryId string  (optional).
 * @param attachmentAsset VidiunAttachmentAsset  (optional).
 * @return VidiunAttachmentAsset.
 */
VidiunAttachmentAssetService.prototype.add = function(callback, entryId, attachmentAsset){
	var vparams = {};
	this.client.addParam(vparams, 'entryId', entryId);
	this.client.addParam(vparams, 'attachmentAsset', vidiun.toParams(attachmentAsset));
	this.client.queueServiceActionCall('attachment_attachmentasset', 'add', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Update content of attachment asset.
 * @param id string  (optional).
 * @param contentResource VidiunContentResource  (optional).
 * @return VidiunAttachmentAsset.
 */
VidiunAttachmentAssetService.prototype.setContent = function(callback, id, contentResource){
	var vparams = {};
	this.client.addParam(vparams, 'id', id);
	this.client.addParam(vparams, 'contentResource', vidiun.toParams(contentResource));
	this.client.queueServiceActionCall('attachment_attachmentasset', 'setContent', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Update attachment asset.
 * @param id string  (optional).
 * @param attachmentAsset VidiunAttachmentAsset  (optional).
 * @return VidiunAttachmentAsset.
 */
VidiunAttachmentAssetService.prototype.update = function(callback, id, attachmentAsset){
	var vparams = {};
	this.client.addParam(vparams, 'id', id);
	this.client.addParam(vparams, 'attachmentAsset', vidiun.toParams(attachmentAsset));
	this.client.queueServiceActionCall('attachment_attachmentasset', 'update', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Get download URL for the asset.
 * @param id string  (optional).
 * @param storageId int  (optional, default: null).
 * @return string.
 */
VidiunAttachmentAssetService.prototype.getUrl = function(callback, id, storageId){
	if(!storageId){
		storageId = null;
	}
	var vparams = {};
	this.client.addParam(vparams, 'id', id);
	this.client.addParam(vparams, 'storageId', storageId);
	this.client.queueServiceActionCall('attachment_attachmentasset', 'getUrl', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Get remote storage existing paths for the asset.
 * @param id string  (optional).
 * @return VidiunRemotePathListResponse.
 */
VidiunAttachmentAssetService.prototype.getRemotePaths = function(callback, id){
	var vparams = {};
	this.client.addParam(vparams, 'id', id);
	this.client.queueServiceActionCall('attachment_attachmentasset', 'getRemotePaths', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * .
 * @param attachmentAssetId string  (optional).
 * @return VidiunAttachmentAsset.
 */
VidiunAttachmentAssetService.prototype.get = function(callback, attachmentAssetId){
	var vparams = {};
	this.client.addParam(vparams, 'attachmentAssetId', attachmentAssetId);
	this.client.queueServiceActionCall('attachment_attachmentasset', 'get', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * List attachment Assets by filter and pager.
 * @param filter VidiunAssetFilter  (optional, default: null).
 * @param pager VidiunFilterPager  (optional, default: null).
 * @return VidiunAttachmentAssetListResponse.
 */
VidiunAttachmentAssetService.prototype.listAction = function(callback, filter, pager){
	if(!filter){
		filter = null;
	}
	if(!pager){
		pager = null;
	}
	var vparams = {};
	if (filter !== null){
		this.client.addParam(vparams, 'filter', vidiun.toParams(filter));
	}
	if (pager !== null){
		this.client.addParam(vparams, 'pager', vidiun.toParams(pager));
	}
	this.client.queueServiceActionCall('attachment_attachmentasset', 'list', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * .
 * @param attachmentAssetId string  (optional).
 * @return .
 */
VidiunAttachmentAssetService.prototype.deleteAction = function(callback, attachmentAssetId){
	var vparams = {};
	this.client.addParam(vparams, 'attachmentAssetId', attachmentAssetId);
	this.client.queueServiceActionCall('attachment_attachmentasset', 'delete', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Vidiun service: auditTrail.
 * The available service actions:
 * @action add Allows you to add an audit trail object and audit trail content associated with Vidiun object.
 * @action get Retrieve an audit trail object by id.
 * @action list List audit trail objects by filter and pager.
 */
function VidiunAuditTrailService(client){
	VidiunAuditTrailService.super_.call(this);
	this.init(client);
}

util.inherits(VidiunAuditTrailService, vidiun.VidiunServiceBase);
module.exports.VidiunAuditTrailService = VidiunAuditTrailService;

/**
 * Allows you to add an audit trail object and audit trail content associated with Vidiun object.
 * @param auditTrail VidiunAuditTrail  (optional).
 * @return VidiunAuditTrail.
 */
VidiunAuditTrailService.prototype.add = function(callback, auditTrail){
	var vparams = {};
	this.client.addParam(vparams, 'auditTrail', vidiun.toParams(auditTrail));
	this.client.queueServiceActionCall('audit_audittrail', 'add', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Retrieve an audit trail object by id.
 * @param id int  (optional).
 * @return VidiunAuditTrail.
 */
VidiunAuditTrailService.prototype.get = function(callback, id){
	var vparams = {};
	this.client.addParam(vparams, 'id', id);
	this.client.queueServiceActionCall('audit_audittrail', 'get', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * List audit trail objects by filter and pager.
 * @param filter VidiunAuditTrailFilter  (optional, default: null).
 * @param pager VidiunFilterPager  (optional, default: null).
 * @return VidiunAuditTrailListResponse.
 */
VidiunAuditTrailService.prototype.listAction = function(callback, filter, pager){
	if(!filter){
		filter = null;
	}
	if(!pager){
		pager = null;
	}
	var vparams = {};
	if (filter !== null){
		this.client.addParam(vparams, 'filter', vidiun.toParams(filter));
	}
	if (pager !== null){
		this.client.addParam(vparams, 'pager', vidiun.toParams(pager));
	}
	this.client.queueServiceActionCall('audit_audittrail', 'list', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Vidiun service: bulk.
 * The available service actions:
 * @action get Get bulk upload batch job by id.
 * @action list List bulk upload batch jobs.
 * @action abort Aborts the bulk upload and all its child jobs.
 */
function VidiunBulkService(client){
	VidiunBulkService.super_.call(this);
	this.init(client);
}

util.inherits(VidiunBulkService, vidiun.VidiunServiceBase);
module.exports.VidiunBulkService = VidiunBulkService;

/**
 * Get bulk upload batch job by id.
 * @param id int  (optional).
 * @return VidiunBulkUpload.
 */
VidiunBulkService.prototype.get = function(callback, id){
	var vparams = {};
	this.client.addParam(vparams, 'id', id);
	this.client.queueServiceActionCall('bulkupload_bulk', 'get', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * List bulk upload batch jobs.
 * @param bulkUploadFilter VidiunBulkUploadFilter  (optional, default: null).
 * @param pager VidiunFilterPager  (optional, default: null).
 * @return VidiunBulkUploadListResponse.
 */
VidiunBulkService.prototype.listAction = function(callback, bulkUploadFilter, pager){
	if(!bulkUploadFilter){
		bulkUploadFilter = null;
	}
	if(!pager){
		pager = null;
	}
	var vparams = {};
	if (bulkUploadFilter !== null){
		this.client.addParam(vparams, 'bulkUploadFilter', vidiun.toParams(bulkUploadFilter));
	}
	if (pager !== null){
		this.client.addParam(vparams, 'pager', vidiun.toParams(pager));
	}
	this.client.queueServiceActionCall('bulkupload_bulk', 'list', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Aborts the bulk upload and all its child jobs.
 * @param id int job id (optional).
 * @return VidiunBulkUpload.
 */
VidiunBulkService.prototype.abort = function(callback, id){
	var vparams = {};
	this.client.addParam(vparams, 'id', id);
	this.client.queueServiceActionCall('bulkupload_bulk', 'abort', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Vidiun service: captionAsset.
 * The available service actions:
 * @action add Add caption asset.
 * @action setContent Update content of caption asset.
 * @action update Update caption asset.
 * @action getUrl Get download URL for the asset.
 * @action getRemotePaths Get remote storage existing paths for the asset.
 * @action setAsDefault Markss the caption as default and removes that mark from all other caption assets of the entry.
 * @action get .
 * @action list List caption Assets by filter and pager.
 * @action delete .
 */
function VidiunCaptionAssetService(client){
	VidiunCaptionAssetService.super_.call(this);
	this.init(client);
}

util.inherits(VidiunCaptionAssetService, vidiun.VidiunServiceBase);
module.exports.VidiunCaptionAssetService = VidiunCaptionAssetService;

/**
 * Add caption asset.
 * @param entryId string  (optional).
 * @param captionAsset VidiunCaptionAsset  (optional).
 * @return VidiunCaptionAsset.
 */
VidiunCaptionAssetService.prototype.add = function(callback, entryId, captionAsset){
	var vparams = {};
	this.client.addParam(vparams, 'entryId', entryId);
	this.client.addParam(vparams, 'captionAsset', vidiun.toParams(captionAsset));
	this.client.queueServiceActionCall('caption_captionasset', 'add', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Update content of caption asset.
 * @param id string  (optional).
 * @param contentResource VidiunContentResource  (optional).
 * @return VidiunCaptionAsset.
 */
VidiunCaptionAssetService.prototype.setContent = function(callback, id, contentResource){
	var vparams = {};
	this.client.addParam(vparams, 'id', id);
	this.client.addParam(vparams, 'contentResource', vidiun.toParams(contentResource));
	this.client.queueServiceActionCall('caption_captionasset', 'setContent', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Update caption asset.
 * @param id string  (optional).
 * @param captionAsset VidiunCaptionAsset  (optional).
 * @return VidiunCaptionAsset.
 */
VidiunCaptionAssetService.prototype.update = function(callback, id, captionAsset){
	var vparams = {};
	this.client.addParam(vparams, 'id', id);
	this.client.addParam(vparams, 'captionAsset', vidiun.toParams(captionAsset));
	this.client.queueServiceActionCall('caption_captionasset', 'update', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Get download URL for the asset.
 * @param id string  (optional).
 * @param storageId int  (optional, default: null).
 * @return string.
 */
VidiunCaptionAssetService.prototype.getUrl = function(callback, id, storageId){
	if(!storageId){
		storageId = null;
	}
	var vparams = {};
	this.client.addParam(vparams, 'id', id);
	this.client.addParam(vparams, 'storageId', storageId);
	this.client.queueServiceActionCall('caption_captionasset', 'getUrl', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Get remote storage existing paths for the asset.
 * @param id string  (optional).
 * @return VidiunRemotePathListResponse.
 */
VidiunCaptionAssetService.prototype.getRemotePaths = function(callback, id){
	var vparams = {};
	this.client.addParam(vparams, 'id', id);
	this.client.queueServiceActionCall('caption_captionasset', 'getRemotePaths', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Markss the caption as default and removes that mark from all other caption assets of the entry.
 * @param captionAssetId string  (optional).
 * @return .
 */
VidiunCaptionAssetService.prototype.setAsDefault = function(callback, captionAssetId){
	var vparams = {};
	this.client.addParam(vparams, 'captionAssetId', captionAssetId);
	this.client.queueServiceActionCall('caption_captionasset', 'setAsDefault', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * .
 * @param captionAssetId string  (optional).
 * @return VidiunCaptionAsset.
 */
VidiunCaptionAssetService.prototype.get = function(callback, captionAssetId){
	var vparams = {};
	this.client.addParam(vparams, 'captionAssetId', captionAssetId);
	this.client.queueServiceActionCall('caption_captionasset', 'get', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * List caption Assets by filter and pager.
 * @param filter VidiunAssetFilter  (optional, default: null).
 * @param pager VidiunFilterPager  (optional, default: null).
 * @return VidiunCaptionAssetListResponse.
 */
VidiunCaptionAssetService.prototype.listAction = function(callback, filter, pager){
	if(!filter){
		filter = null;
	}
	if(!pager){
		pager = null;
	}
	var vparams = {};
	if (filter !== null){
		this.client.addParam(vparams, 'filter', vidiun.toParams(filter));
	}
	if (pager !== null){
		this.client.addParam(vparams, 'pager', vidiun.toParams(pager));
	}
	this.client.queueServiceActionCall('caption_captionasset', 'list', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * .
 * @param captionAssetId string  (optional).
 * @return .
 */
VidiunCaptionAssetService.prototype.deleteAction = function(callback, captionAssetId){
	var vparams = {};
	this.client.addParam(vparams, 'captionAssetId', captionAssetId);
	this.client.queueServiceActionCall('caption_captionasset', 'delete', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Vidiun service: captionParams.
 * The available service actions:
 * @action add Add new Caption Params.
 * @action get Get Caption Params by ID.
 * @action update Update Caption Params by ID.
 * @action delete Delete Caption Params by ID.
 * @action list List Caption Params by filter with paging support (By default - all system default params will be listed too).
 */
function VidiunCaptionParamsService(client){
	VidiunCaptionParamsService.super_.call(this);
	this.init(client);
}

util.inherits(VidiunCaptionParamsService, vidiun.VidiunServiceBase);
module.exports.VidiunCaptionParamsService = VidiunCaptionParamsService;

/**
 * Add new Caption Params.
 * @param captionParams VidiunCaptionParams  (optional).
 * @return VidiunCaptionParams.
 */
VidiunCaptionParamsService.prototype.add = function(callback, captionParams){
	var vparams = {};
	this.client.addParam(vparams, 'captionParams', vidiun.toParams(captionParams));
	this.client.queueServiceActionCall('caption_captionparams', 'add', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Get Caption Params by ID.
 * @param id int  (optional).
 * @return VidiunCaptionParams.
 */
VidiunCaptionParamsService.prototype.get = function(callback, id){
	var vparams = {};
	this.client.addParam(vparams, 'id', id);
	this.client.queueServiceActionCall('caption_captionparams', 'get', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Update Caption Params by ID.
 * @param id int  (optional).
 * @param captionParams VidiunCaptionParams  (optional).
 * @return VidiunCaptionParams.
 */
VidiunCaptionParamsService.prototype.update = function(callback, id, captionParams){
	var vparams = {};
	this.client.addParam(vparams, 'id', id);
	this.client.addParam(vparams, 'captionParams', vidiun.toParams(captionParams));
	this.client.queueServiceActionCall('caption_captionparams', 'update', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Delete Caption Params by ID.
 * @param id int  (optional).
 * @return .
 */
VidiunCaptionParamsService.prototype.deleteAction = function(callback, id){
	var vparams = {};
	this.client.addParam(vparams, 'id', id);
	this.client.queueServiceActionCall('caption_captionparams', 'delete', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * List Caption Params by filter with paging support (By default - all system default params will be listed too).
 * @param filter VidiunCaptionParamsFilter  (optional, default: null).
 * @param pager VidiunFilterPager  (optional, default: null).
 * @return VidiunCaptionParamsListResponse.
 */
VidiunCaptionParamsService.prototype.listAction = function(callback, filter, pager){
	if(!filter){
		filter = null;
	}
	if(!pager){
		pager = null;
	}
	var vparams = {};
	if (filter !== null){
		this.client.addParam(vparams, 'filter', vidiun.toParams(filter));
	}
	if (pager !== null){
		this.client.addParam(vparams, 'pager', vidiun.toParams(pager));
	}
	this.client.queueServiceActionCall('caption_captionparams', 'list', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Vidiun service: captionAssetItem.
 * The available service actions:
 * @action parse Parse content of caption asset and index it.
 * @action search Search caption asset items by filter, pager and free text.
 * @action searchEntries Search caption asset items by filter, pager and free text.
 */
function VidiunCaptionAssetItemService(client){
	VidiunCaptionAssetItemService.super_.call(this);
	this.init(client);
}

util.inherits(VidiunCaptionAssetItemService, vidiun.VidiunServiceBase);
module.exports.VidiunCaptionAssetItemService = VidiunCaptionAssetItemService;

/**
 * Parse content of caption asset and index it.
 * @param captionAssetId string  (optional).
 * @return .
 */
VidiunCaptionAssetItemService.prototype.parse = function(callback, captionAssetId){
	var vparams = {};
	this.client.addParam(vparams, 'captionAssetId', captionAssetId);
	this.client.queueServiceActionCall('captionsearch_captionassetitem', 'parse', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Search caption asset items by filter, pager and free text.
 * @param entryFilter VidiunBaseEntryFilter  (optional, default: null).
 * @param captionAssetItemFilter VidiunCaptionAssetItemFilter  (optional, default: null).
 * @param captionAssetItemPager VidiunFilterPager  (optional, default: null).
 * @return VidiunCaptionAssetItemListResponse.
 */
VidiunCaptionAssetItemService.prototype.search = function(callback, entryFilter, captionAssetItemFilter, captionAssetItemPager){
	if(!entryFilter){
		entryFilter = null;
	}
	if(!captionAssetItemFilter){
		captionAssetItemFilter = null;
	}
	if(!captionAssetItemPager){
		captionAssetItemPager = null;
	}
	var vparams = {};
	if (entryFilter !== null){
		this.client.addParam(vparams, 'entryFilter', vidiun.toParams(entryFilter));
	}
	if (captionAssetItemFilter !== null){
		this.client.addParam(vparams, 'captionAssetItemFilter', vidiun.toParams(captionAssetItemFilter));
	}
	if (captionAssetItemPager !== null){
		this.client.addParam(vparams, 'captionAssetItemPager', vidiun.toParams(captionAssetItemPager));
	}
	this.client.queueServiceActionCall('captionsearch_captionassetitem', 'search', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Search caption asset items by filter, pager and free text.
 * @param entryFilter VidiunBaseEntryFilter  (optional, default: null).
 * @param captionAssetItemFilter VidiunCaptionAssetItemFilter  (optional, default: null).
 * @param captionAssetItemPager VidiunFilterPager  (optional, default: null).
 * @return VidiunBaseEntryListResponse.
 */
VidiunCaptionAssetItemService.prototype.searchEntries = function(callback, entryFilter, captionAssetItemFilter, captionAssetItemPager){
	if(!entryFilter){
		entryFilter = null;
	}
	if(!captionAssetItemFilter){
		captionAssetItemFilter = null;
	}
	if(!captionAssetItemPager){
		captionAssetItemPager = null;
	}
	var vparams = {};
	if (entryFilter !== null){
		this.client.addParam(vparams, 'entryFilter', vidiun.toParams(entryFilter));
	}
	if (captionAssetItemFilter !== null){
		this.client.addParam(vparams, 'captionAssetItemFilter', vidiun.toParams(captionAssetItemFilter));
	}
	if (captionAssetItemPager !== null){
		this.client.addParam(vparams, 'captionAssetItemPager', vidiun.toParams(captionAssetItemPager));
	}
	this.client.queueServiceActionCall('captionsearch_captionassetitem', 'searchEntries', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Vidiun service: captureSpace.
 * The available service actions:
 * @action clientUpdates Returns latest version and URL.
 */
function VidiunCaptureSpaceService(client){
	VidiunCaptureSpaceService.super_.call(this);
	this.init(client);
}

util.inherits(VidiunCaptureSpaceService, vidiun.VidiunServiceBase);
module.exports.VidiunCaptureSpaceService = VidiunCaptureSpaceService;

/**
 * Returns latest version and URL.
 * @param os string  (optional).
 * @param version string  (optional).
 * @return VidiunCaptureSpaceUpdateResponse.
 */
VidiunCaptureSpaceService.prototype.clientUpdates = function(callback, os, version){
	var vparams = {};
	this.client.addParam(vparams, 'os', os);
	this.client.addParam(vparams, 'version', version);
	this.client.queueServiceActionCall('capturespace_capturespace', 'clientUpdates', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Vidiun service: distributionProfile.
 * The available service actions:
 * @action add Add new Distribution Profile.
 * @action get Get Distribution Profile by id.
 * @action update Update Distribution Profile by id.
 * @action updateStatus Update Distribution Profile status by id.
 * @action delete Delete Distribution Profile by id.
 * @action list List all distribution providers.
 * @action listByPartner .
 */
function VidiunDistributionProfileService(client){
	VidiunDistributionProfileService.super_.call(this);
	this.init(client);
}

util.inherits(VidiunDistributionProfileService, vidiun.VidiunServiceBase);
module.exports.VidiunDistributionProfileService = VidiunDistributionProfileService;

/**
 * Add new Distribution Profile.
 * @param distributionProfile VidiunDistributionProfile  (optional).
 * @return VidiunDistributionProfile.
 */
VidiunDistributionProfileService.prototype.add = function(callback, distributionProfile){
	var vparams = {};
	this.client.addParam(vparams, 'distributionProfile', vidiun.toParams(distributionProfile));
	this.client.queueServiceActionCall('contentdistribution_distributionprofile', 'add', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Get Distribution Profile by id.
 * @param id int  (optional).
 * @return VidiunDistributionProfile.
 */
VidiunDistributionProfileService.prototype.get = function(callback, id){
	var vparams = {};
	this.client.addParam(vparams, 'id', id);
	this.client.queueServiceActionCall('contentdistribution_distributionprofile', 'get', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Update Distribution Profile by id.
 * @param id int  (optional).
 * @param distributionProfile VidiunDistributionProfile  (optional).
 * @return VidiunDistributionProfile.
 */
VidiunDistributionProfileService.prototype.update = function(callback, id, distributionProfile){
	var vparams = {};
	this.client.addParam(vparams, 'id', id);
	this.client.addParam(vparams, 'distributionProfile', vidiun.toParams(distributionProfile));
	this.client.queueServiceActionCall('contentdistribution_distributionprofile', 'update', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Update Distribution Profile status by id.
 * @param id int  (optional).
 * @param status int  (optional, enum: VidiunDistributionProfileStatus).
 * @return VidiunDistributionProfile.
 */
VidiunDistributionProfileService.prototype.updateStatus = function(callback, id, status){
	var vparams = {};
	this.client.addParam(vparams, 'id', id);
	this.client.addParam(vparams, 'status', status);
	this.client.queueServiceActionCall('contentdistribution_distributionprofile', 'updateStatus', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Delete Distribution Profile by id.
 * @param id int  (optional).
 * @return .
 */
VidiunDistributionProfileService.prototype.deleteAction = function(callback, id){
	var vparams = {};
	this.client.addParam(vparams, 'id', id);
	this.client.queueServiceActionCall('contentdistribution_distributionprofile', 'delete', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * List all distribution providers.
 * @param filter VidiunDistributionProfileFilter  (optional, default: null).
 * @param pager VidiunFilterPager  (optional, default: null).
 * @return VidiunDistributionProfileListResponse.
 */
VidiunDistributionProfileService.prototype.listAction = function(callback, filter, pager){
	if(!filter){
		filter = null;
	}
	if(!pager){
		pager = null;
	}
	var vparams = {};
	if (filter !== null){
		this.client.addParam(vparams, 'filter', vidiun.toParams(filter));
	}
	if (pager !== null){
		this.client.addParam(vparams, 'pager', vidiun.toParams(pager));
	}
	this.client.queueServiceActionCall('contentdistribution_distributionprofile', 'list', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * .
 * @param filter VidiunPartnerFilter  (optional, default: null).
 * @param pager VidiunFilterPager  (optional, default: null).
 * @return VidiunDistributionProfileListResponse.
 */
VidiunDistributionProfileService.prototype.listByPartner = function(callback, filter, pager){
	if(!filter){
		filter = null;
	}
	if(!pager){
		pager = null;
	}
	var vparams = {};
	if (filter !== null){
		this.client.addParam(vparams, 'filter', vidiun.toParams(filter));
	}
	if (pager !== null){
		this.client.addParam(vparams, 'pager', vidiun.toParams(pager));
	}
	this.client.queueServiceActionCall('contentdistribution_distributionprofile', 'listByPartner', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Vidiun service: entryDistribution.
 * The available service actions:
 * @action add Add new Entry Distribution.
 * @action get Get Entry Distribution by id.
 * @action validate Validates Entry Distribution by id for submission.
 * @action update Update Entry Distribution by id.
 * @action delete Delete Entry Distribution by id.
 * @action list List all distribution providers.
 * @action submitAdd Submits Entry Distribution to the remote destination.
 * @action submitUpdate Submits Entry Distribution changes to the remote destination.
 * @action submitFetchReport Submits Entry Distribution report request.
 * @action submitDelete Deletes Entry Distribution from the remote destination.
 * @action retrySubmit Retries last submit action.
 */
function VidiunEntryDistributionService(client){
	VidiunEntryDistributionService.super_.call(this);
	this.init(client);
}

util.inherits(VidiunEntryDistributionService, vidiun.VidiunServiceBase);
module.exports.VidiunEntryDistributionService = VidiunEntryDistributionService;

/**
 * Add new Entry Distribution.
 * @param entryDistribution VidiunEntryDistribution  (optional).
 * @return VidiunEntryDistribution.
 */
VidiunEntryDistributionService.prototype.add = function(callback, entryDistribution){
	var vparams = {};
	this.client.addParam(vparams, 'entryDistribution', vidiun.toParams(entryDistribution));
	this.client.queueServiceActionCall('contentdistribution_entrydistribution', 'add', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Get Entry Distribution by id.
 * @param id int  (optional).
 * @return VidiunEntryDistribution.
 */
VidiunEntryDistributionService.prototype.get = function(callback, id){
	var vparams = {};
	this.client.addParam(vparams, 'id', id);
	this.client.queueServiceActionCall('contentdistribution_entrydistribution', 'get', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Validates Entry Distribution by id for submission.
 * @param id int  (optional).
 * @return VidiunEntryDistribution.
 */
VidiunEntryDistributionService.prototype.validate = function(callback, id){
	var vparams = {};
	this.client.addParam(vparams, 'id', id);
	this.client.queueServiceActionCall('contentdistribution_entrydistribution', 'validate', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Update Entry Distribution by id.
 * @param id int  (optional).
 * @param entryDistribution VidiunEntryDistribution  (optional).
 * @return VidiunEntryDistribution.
 */
VidiunEntryDistributionService.prototype.update = function(callback, id, entryDistribution){
	var vparams = {};
	this.client.addParam(vparams, 'id', id);
	this.client.addParam(vparams, 'entryDistribution', vidiun.toParams(entryDistribution));
	this.client.queueServiceActionCall('contentdistribution_entrydistribution', 'update', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Delete Entry Distribution by id.
 * @param id int  (optional).
 * @return .
 */
VidiunEntryDistributionService.prototype.deleteAction = function(callback, id){
	var vparams = {};
	this.client.addParam(vparams, 'id', id);
	this.client.queueServiceActionCall('contentdistribution_entrydistribution', 'delete', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * List all distribution providers.
 * @param filter VidiunEntryDistributionFilter  (optional, default: null).
 * @param pager VidiunFilterPager  (optional, default: null).
 * @return VidiunEntryDistributionListResponse.
 */
VidiunEntryDistributionService.prototype.listAction = function(callback, filter, pager){
	if(!filter){
		filter = null;
	}
	if(!pager){
		pager = null;
	}
	var vparams = {};
	if (filter !== null){
		this.client.addParam(vparams, 'filter', vidiun.toParams(filter));
	}
	if (pager !== null){
		this.client.addParam(vparams, 'pager', vidiun.toParams(pager));
	}
	this.client.queueServiceActionCall('contentdistribution_entrydistribution', 'list', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Submits Entry Distribution to the remote destination.
 * @param id int  (optional).
 * @param submitWhenReady bool  (optional, default: false).
 * @return VidiunEntryDistribution.
 */
VidiunEntryDistributionService.prototype.submitAdd = function(callback, id, submitWhenReady){
	if(!submitWhenReady){
		submitWhenReady = false;
	}
	var vparams = {};
	this.client.addParam(vparams, 'id', id);
	this.client.addParam(vparams, 'submitWhenReady', submitWhenReady);
	this.client.queueServiceActionCall('contentdistribution_entrydistribution', 'submitAdd', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Submits Entry Distribution changes to the remote destination.
 * @param id int  (optional).
 * @return VidiunEntryDistribution.
 */
VidiunEntryDistributionService.prototype.submitUpdate = function(callback, id){
	var vparams = {};
	this.client.addParam(vparams, 'id', id);
	this.client.queueServiceActionCall('contentdistribution_entrydistribution', 'submitUpdate', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Submits Entry Distribution report request.
 * @param id int  (optional).
 * @return VidiunEntryDistribution.
 */
VidiunEntryDistributionService.prototype.submitFetchReport = function(callback, id){
	var vparams = {};
	this.client.addParam(vparams, 'id', id);
	this.client.queueServiceActionCall('contentdistribution_entrydistribution', 'submitFetchReport', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Deletes Entry Distribution from the remote destination.
 * @param id int  (optional).
 * @return VidiunEntryDistribution.
 */
VidiunEntryDistributionService.prototype.submitDelete = function(callback, id){
	var vparams = {};
	this.client.addParam(vparams, 'id', id);
	this.client.queueServiceActionCall('contentdistribution_entrydistribution', 'submitDelete', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Retries last submit action.
 * @param id int  (optional).
 * @return VidiunEntryDistribution.
 */
VidiunEntryDistributionService.prototype.retrySubmit = function(callback, id){
	var vparams = {};
	this.client.addParam(vparams, 'id', id);
	this.client.queueServiceActionCall('contentdistribution_entrydistribution', 'retrySubmit', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Vidiun service: distributionProvider.
 * The available service actions:
 * @action list List all distribution providers.
 */
function VidiunDistributionProviderService(client){
	VidiunDistributionProviderService.super_.call(this);
	this.init(client);
}

util.inherits(VidiunDistributionProviderService, vidiun.VidiunServiceBase);
module.exports.VidiunDistributionProviderService = VidiunDistributionProviderService;

/**
 * List all distribution providers.
 * @param filter VidiunDistributionProviderFilter  (optional, default: null).
 * @param pager VidiunFilterPager  (optional, default: null).
 * @return VidiunDistributionProviderListResponse.
 */
VidiunDistributionProviderService.prototype.listAction = function(callback, filter, pager){
	if(!filter){
		filter = null;
	}
	if(!pager){
		pager = null;
	}
	var vparams = {};
	if (filter !== null){
		this.client.addParam(vparams, 'filter', vidiun.toParams(filter));
	}
	if (pager !== null){
		this.client.addParam(vparams, 'pager', vidiun.toParams(pager));
	}
	this.client.queueServiceActionCall('contentdistribution_distributionprovider', 'list', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Vidiun service: genericDistributionProvider.
 * The available service actions:
 * @action add Add new Generic Distribution Provider.
 * @action get Get Generic Distribution Provider by id.
 * @action update Update Generic Distribution Provider by id.
 * @action delete Delete Generic Distribution Provider by id.
 * @action list List all distribution providers.
 */
function VidiunGenericDistributionProviderService(client){
	VidiunGenericDistributionProviderService.super_.call(this);
	this.init(client);
}

util.inherits(VidiunGenericDistributionProviderService, vidiun.VidiunServiceBase);
module.exports.VidiunGenericDistributionProviderService = VidiunGenericDistributionProviderService;

/**
 * Add new Generic Distribution Provider.
 * @param genericDistributionProvider VidiunGenericDistributionProvider  (optional).
 * @return VidiunGenericDistributionProvider.
 */
VidiunGenericDistributionProviderService.prototype.add = function(callback, genericDistributionProvider){
	var vparams = {};
	this.client.addParam(vparams, 'genericDistributionProvider', vidiun.toParams(genericDistributionProvider));
	this.client.queueServiceActionCall('contentdistribution_genericdistributionprovider', 'add', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Get Generic Distribution Provider by id.
 * @param id int  (optional).
 * @return VidiunGenericDistributionProvider.
 */
VidiunGenericDistributionProviderService.prototype.get = function(callback, id){
	var vparams = {};
	this.client.addParam(vparams, 'id', id);
	this.client.queueServiceActionCall('contentdistribution_genericdistributionprovider', 'get', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Update Generic Distribution Provider by id.
 * @param id int  (optional).
 * @param genericDistributionProvider VidiunGenericDistributionProvider  (optional).
 * @return VidiunGenericDistributionProvider.
 */
VidiunGenericDistributionProviderService.prototype.update = function(callback, id, genericDistributionProvider){
	var vparams = {};
	this.client.addParam(vparams, 'id', id);
	this.client.addParam(vparams, 'genericDistributionProvider', vidiun.toParams(genericDistributionProvider));
	this.client.queueServiceActionCall('contentdistribution_genericdistributionprovider', 'update', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Delete Generic Distribution Provider by id.
 * @param id int  (optional).
 * @return .
 */
VidiunGenericDistributionProviderService.prototype.deleteAction = function(callback, id){
	var vparams = {};
	this.client.addParam(vparams, 'id', id);
	this.client.queueServiceActionCall('contentdistribution_genericdistributionprovider', 'delete', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * List all distribution providers.
 * @param filter VidiunGenericDistributionProviderFilter  (optional, default: null).
 * @param pager VidiunFilterPager  (optional, default: null).
 * @return VidiunGenericDistributionProviderListResponse.
 */
VidiunGenericDistributionProviderService.prototype.listAction = function(callback, filter, pager){
	if(!filter){
		filter = null;
	}
	if(!pager){
		pager = null;
	}
	var vparams = {};
	if (filter !== null){
		this.client.addParam(vparams, 'filter', vidiun.toParams(filter));
	}
	if (pager !== null){
		this.client.addParam(vparams, 'pager', vidiun.toParams(pager));
	}
	this.client.queueServiceActionCall('contentdistribution_genericdistributionprovider', 'list', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Vidiun service: genericDistributionProviderAction.
 * The available service actions:
 * @action add Add new Generic Distribution Provider Action.
 * @action addMrssTransform Add MRSS transform file to generic distribution provider action.
 * @action addMrssTransformFromFile Add MRSS transform file to generic distribution provider action.
 * @action addMrssValidate Add MRSS validate file to generic distribution provider action.
 * @action addMrssValidateFromFile Add MRSS validate file to generic distribution provider action.
 * @action addResultsTransform Add results transform file to generic distribution provider action.
 * @action addResultsTransformFromFile Add MRSS transform file to generic distribution provider action.
 * @action get Get Generic Distribution Provider Action by id.
 * @action getByProviderId Get Generic Distribution Provider Action by provider id.
 * @action updateByProviderId Update Generic Distribution Provider Action by provider id.
 * @action update Update Generic Distribution Provider Action by id.
 * @action delete Delete Generic Distribution Provider Action by id.
 * @action deleteByProviderId Delete Generic Distribution Provider Action by provider id.
 * @action list List all distribution providers.
 */
function VidiunGenericDistributionProviderActionService(client){
	VidiunGenericDistributionProviderActionService.super_.call(this);
	this.init(client);
}

util.inherits(VidiunGenericDistributionProviderActionService, vidiun.VidiunServiceBase);
module.exports.VidiunGenericDistributionProviderActionService = VidiunGenericDistributionProviderActionService;

/**
 * Add new Generic Distribution Provider Action.
 * @param genericDistributionProviderAction VidiunGenericDistributionProviderAction  (optional).
 * @return VidiunGenericDistributionProviderAction.
 */
VidiunGenericDistributionProviderActionService.prototype.add = function(callback, genericDistributionProviderAction){
	var vparams = {};
	this.client.addParam(vparams, 'genericDistributionProviderAction', vidiun.toParams(genericDistributionProviderAction));
	this.client.queueServiceActionCall('contentdistribution_genericdistributionprovideraction', 'add', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Add MRSS transform file to generic distribution provider action.
 * @param id int the id of the generic distribution provider action (optional).
 * @param xslData string XSL MRSS transformation data (optional).
 * @return VidiunGenericDistributionProviderAction.
 */
VidiunGenericDistributionProviderActionService.prototype.addMrssTransform = function(callback, id, xslData){
	var vparams = {};
	this.client.addParam(vparams, 'id', id);
	this.client.addParam(vparams, 'xslData', xslData);
	this.client.queueServiceActionCall('contentdistribution_genericdistributionprovideraction', 'addMrssTransform', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Add MRSS transform file to generic distribution provider action.
 * @param id int the id of the generic distribution provider action (optional).
 * @param xslFile file XSL MRSS transformation file (optional).
 * @return VidiunGenericDistributionProviderAction.
 */
VidiunGenericDistributionProviderActionService.prototype.addMrssTransformFromFile = function(callback, id, xslFile){
	var vparams = {};
	this.client.addParam(vparams, 'id', id);
	var vfiles = {};
	this.client.addParam(vfiles, 'xslFile', xslFile);
	this.client.queueServiceActionCall('contentdistribution_genericdistributionprovideraction', 'addMrssTransformFromFile', vparams, vfiles);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Add MRSS validate file to generic distribution provider action.
 * @param id int the id of the generic distribution provider action (optional).
 * @param xsdData string XSD MRSS validatation data (optional).
 * @return VidiunGenericDistributionProviderAction.
 */
VidiunGenericDistributionProviderActionService.prototype.addMrssValidate = function(callback, id, xsdData){
	var vparams = {};
	this.client.addParam(vparams, 'id', id);
	this.client.addParam(vparams, 'xsdData', xsdData);
	this.client.queueServiceActionCall('contentdistribution_genericdistributionprovideraction', 'addMrssValidate', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Add MRSS validate file to generic distribution provider action.
 * @param id int the id of the generic distribution provider action (optional).
 * @param xsdFile file XSD MRSS validatation file (optional).
 * @return VidiunGenericDistributionProviderAction.
 */
VidiunGenericDistributionProviderActionService.prototype.addMrssValidateFromFile = function(callback, id, xsdFile){
	var vparams = {};
	this.client.addParam(vparams, 'id', id);
	var vfiles = {};
	this.client.addParam(vfiles, 'xsdFile', xsdFile);
	this.client.queueServiceActionCall('contentdistribution_genericdistributionprovideraction', 'addMrssValidateFromFile', vparams, vfiles);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Add results transform file to generic distribution provider action.
 * @param id int the id of the generic distribution provider action (optional).
 * @param transformData string transformation data xsl, xPath or regex (optional).
 * @return VidiunGenericDistributionProviderAction.
 */
VidiunGenericDistributionProviderActionService.prototype.addResultsTransform = function(callback, id, transformData){
	var vparams = {};
	this.client.addParam(vparams, 'id', id);
	this.client.addParam(vparams, 'transformData', transformData);
	this.client.queueServiceActionCall('contentdistribution_genericdistributionprovideraction', 'addResultsTransform', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Add MRSS transform file to generic distribution provider action.
 * @param id int the id of the generic distribution provider action (optional).
 * @param transformFile file transformation file xsl, xPath or regex (optional).
 * @return VidiunGenericDistributionProviderAction.
 */
VidiunGenericDistributionProviderActionService.prototype.addResultsTransformFromFile = function(callback, id, transformFile){
	var vparams = {};
	this.client.addParam(vparams, 'id', id);
	var vfiles = {};
	this.client.addParam(vfiles, 'transformFile', transformFile);
	this.client.queueServiceActionCall('contentdistribution_genericdistributionprovideraction', 'addResultsTransformFromFile', vparams, vfiles);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Get Generic Distribution Provider Action by id.
 * @param id int  (optional).
 * @return VidiunGenericDistributionProviderAction.
 */
VidiunGenericDistributionProviderActionService.prototype.get = function(callback, id){
	var vparams = {};
	this.client.addParam(vparams, 'id', id);
	this.client.queueServiceActionCall('contentdistribution_genericdistributionprovideraction', 'get', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Get Generic Distribution Provider Action by provider id.
 * @param genericDistributionProviderId int  (optional).
 * @param actionType int  (optional, enum: VidiunDistributionAction).
 * @return VidiunGenericDistributionProviderAction.
 */
VidiunGenericDistributionProviderActionService.prototype.getByProviderId = function(callback, genericDistributionProviderId, actionType){
	var vparams = {};
	this.client.addParam(vparams, 'genericDistributionProviderId', genericDistributionProviderId);
	this.client.addParam(vparams, 'actionType', actionType);
	this.client.queueServiceActionCall('contentdistribution_genericdistributionprovideraction', 'getByProviderId', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Update Generic Distribution Provider Action by provider id.
 * @param genericDistributionProviderId int  (optional).
 * @param actionType int  (optional, enum: VidiunDistributionAction).
 * @param genericDistributionProviderAction VidiunGenericDistributionProviderAction  (optional).
 * @return VidiunGenericDistributionProviderAction.
 */
VidiunGenericDistributionProviderActionService.prototype.updateByProviderId = function(callback, genericDistributionProviderId, actionType, genericDistributionProviderAction){
	var vparams = {};
	this.client.addParam(vparams, 'genericDistributionProviderId', genericDistributionProviderId);
	this.client.addParam(vparams, 'actionType', actionType);
	this.client.addParam(vparams, 'genericDistributionProviderAction', vidiun.toParams(genericDistributionProviderAction));
	this.client.queueServiceActionCall('contentdistribution_genericdistributionprovideraction', 'updateByProviderId', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Update Generic Distribution Provider Action by id.
 * @param id int  (optional).
 * @param genericDistributionProviderAction VidiunGenericDistributionProviderAction  (optional).
 * @return VidiunGenericDistributionProviderAction.
 */
VidiunGenericDistributionProviderActionService.prototype.update = function(callback, id, genericDistributionProviderAction){
	var vparams = {};
	this.client.addParam(vparams, 'id', id);
	this.client.addParam(vparams, 'genericDistributionProviderAction', vidiun.toParams(genericDistributionProviderAction));
	this.client.queueServiceActionCall('contentdistribution_genericdistributionprovideraction', 'update', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Delete Generic Distribution Provider Action by id.
 * @param id int  (optional).
 * @return .
 */
VidiunGenericDistributionProviderActionService.prototype.deleteAction = function(callback, id){
	var vparams = {};
	this.client.addParam(vparams, 'id', id);
	this.client.queueServiceActionCall('contentdistribution_genericdistributionprovideraction', 'delete', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Delete Generic Distribution Provider Action by provider id.
 * @param genericDistributionProviderId int  (optional).
 * @param actionType int  (optional, enum: VidiunDistributionAction).
 * @return .
 */
VidiunGenericDistributionProviderActionService.prototype.deleteByProviderId = function(callback, genericDistributionProviderId, actionType){
	var vparams = {};
	this.client.addParam(vparams, 'genericDistributionProviderId', genericDistributionProviderId);
	this.client.addParam(vparams, 'actionType', actionType);
	this.client.queueServiceActionCall('contentdistribution_genericdistributionprovideraction', 'deleteByProviderId', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * List all distribution providers.
 * @param filter VidiunGenericDistributionProviderActionFilter  (optional, default: null).
 * @param pager VidiunFilterPager  (optional, default: null).
 * @return VidiunGenericDistributionProviderActionListResponse.
 */
VidiunGenericDistributionProviderActionService.prototype.listAction = function(callback, filter, pager){
	if(!filter){
		filter = null;
	}
	if(!pager){
		pager = null;
	}
	var vparams = {};
	if (filter !== null){
		this.client.addParam(vparams, 'filter', vidiun.toParams(filter));
	}
	if (pager !== null){
		this.client.addParam(vparams, 'pager', vidiun.toParams(pager));
	}
	this.client.queueServiceActionCall('contentdistribution_genericdistributionprovideraction', 'list', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Vidiun service: contentDistributionBatch.
 * The available service actions:
 * @action updateSunStatus updates entry distribution sun status in the search engine.
 * @action createRequiredJobs creates all required jobs according to entry distribution dirty flags.
 * @action getAssetUrl returns absolute valid url for asset file.
 */
function VidiunContentDistributionBatchService(client){
	VidiunContentDistributionBatchService.super_.call(this);
	this.init(client);
}

util.inherits(VidiunContentDistributionBatchService, vidiun.VidiunServiceBase);
module.exports.VidiunContentDistributionBatchService = VidiunContentDistributionBatchService;

/**
 * updates entry distribution sun status in the search engine.
 * @return .
 */
VidiunContentDistributionBatchService.prototype.updateSunStatus = function(callback){
	var vparams = {};
	this.client.queueServiceActionCall('contentdistribution_contentdistributionbatch', 'updateSunStatus', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * creates all required jobs according to entry distribution dirty flags.
 * @return .
 */
VidiunContentDistributionBatchService.prototype.createRequiredJobs = function(callback){
	var vparams = {};
	this.client.queueServiceActionCall('contentdistribution_contentdistributionbatch', 'createRequiredJobs', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * returns absolute valid url for asset file.
 * @param assetId string  (optional).
 * @return string.
 */
VidiunContentDistributionBatchService.prototype.getAssetUrl = function(callback, assetId){
	var vparams = {};
	this.client.addParam(vparams, 'assetId', assetId);
	this.client.queueServiceActionCall('contentdistribution_contentdistributionbatch', 'getAssetUrl', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Vidiun service: cuePoint.
 * The available service actions:
 * @action add Allows you to add an cue point object associated with an entry.
 * @action addFromBulk Allows you to add multiple cue points objects by uploading XML that contains multiple cue point definitions.
 * @action get Retrieve an CuePoint object by id.
 * @action list List cue point objects by filter and pager.
 * @action count count cue point objects by filter.
 * @action update Update cue point by id.
 * @action delete delete cue point by id, and delete all children cue points.
 * @action updateStatus Update cuePoint status by id.
 */
function VidiunCuePointService(client){
	VidiunCuePointService.super_.call(this);
	this.init(client);
}

util.inherits(VidiunCuePointService, vidiun.VidiunServiceBase);
module.exports.VidiunCuePointService = VidiunCuePointService;

/**
 * Allows you to add an cue point object associated with an entry.
 * @param cuePoint VidiunCuePoint  (optional).
 * @return VidiunCuePoint.
 */
VidiunCuePointService.prototype.add = function(callback, cuePoint){
	var vparams = {};
	this.client.addParam(vparams, 'cuePoint', vidiun.toParams(cuePoint));
	this.client.queueServiceActionCall('cuepoint_cuepoint', 'add', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Allows you to add multiple cue points objects by uploading XML that contains multiple cue point definitions.
 * @param fileData file  (optional).
 * @return VidiunCuePointListResponse.
 */
VidiunCuePointService.prototype.addFromBulk = function(callback, fileData){
	var vparams = {};
	var vfiles = {};
	this.client.addParam(vfiles, 'fileData', fileData);
	this.client.queueServiceActionCall('cuepoint_cuepoint', 'addFromBulk', vparams, vfiles);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Retrieve an CuePoint object by id.
 * @param id string  (optional).
 * @return VidiunCuePoint.
 */
VidiunCuePointService.prototype.get = function(callback, id){
	var vparams = {};
	this.client.addParam(vparams, 'id', id);
	this.client.queueServiceActionCall('cuepoint_cuepoint', 'get', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * List cue point objects by filter and pager.
 * @param filter VidiunCuePointFilter  (optional, default: null).
 * @param pager VidiunFilterPager  (optional, default: null).
 * @return VidiunCuePointListResponse.
 */
VidiunCuePointService.prototype.listAction = function(callback, filter, pager){
	if(!filter){
		filter = null;
	}
	if(!pager){
		pager = null;
	}
	var vparams = {};
	if (filter !== null){
		this.client.addParam(vparams, 'filter', vidiun.toParams(filter));
	}
	if (pager !== null){
		this.client.addParam(vparams, 'pager', vidiun.toParams(pager));
	}
	this.client.queueServiceActionCall('cuepoint_cuepoint', 'list', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * count cue point objects by filter.
 * @param filter VidiunCuePointFilter  (optional, default: null).
 * @return int.
 */
VidiunCuePointService.prototype.count = function(callback, filter){
	if(!filter){
		filter = null;
	}
	var vparams = {};
	if (filter !== null){
		this.client.addParam(vparams, 'filter', vidiun.toParams(filter));
	}
	this.client.queueServiceActionCall('cuepoint_cuepoint', 'count', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Update cue point by id.
 * @param id string  (optional).
 * @param cuePoint VidiunCuePoint  (optional).
 * @return VidiunCuePoint.
 */
VidiunCuePointService.prototype.update = function(callback, id, cuePoint){
	var vparams = {};
	this.client.addParam(vparams, 'id', id);
	this.client.addParam(vparams, 'cuePoint', vidiun.toParams(cuePoint));
	this.client.queueServiceActionCall('cuepoint_cuepoint', 'update', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * delete cue point by id, and delete all children cue points.
 * @param id string  (optional).
 * @return .
 */
VidiunCuePointService.prototype.deleteAction = function(callback, id){
	var vparams = {};
	this.client.addParam(vparams, 'id', id);
	this.client.queueServiceActionCall('cuepoint_cuepoint', 'delete', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Update cuePoint status by id.
 * @param id string  (optional).
 * @param status int  (optional, enum: VidiunCuePointStatus).
 * @return .
 */
VidiunCuePointService.prototype.updateStatus = function(callback, id, status){
	var vparams = {};
	this.client.addParam(vparams, 'id', id);
	this.client.addParam(vparams, 'status', status);
	this.client.queueServiceActionCall('cuepoint_cuepoint', 'updateStatus', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Vidiun service: dropFolder.
 * The available service actions:
 * @action add Allows you to add a new VidiunDropFolder object.
 * @action get Retrieve a VidiunDropFolder object by ID.
 * @action update Update an existing VidiunDropFolder object.
 * @action delete Mark the VidiunDropFolder object as deleted.
 * @action list List VidiunDropFolder objects.
 */
function VidiunDropFolderService(client){
	VidiunDropFolderService.super_.call(this);
	this.init(client);
}

util.inherits(VidiunDropFolderService, vidiun.VidiunServiceBase);
module.exports.VidiunDropFolderService = VidiunDropFolderService;

/**
 * Allows you to add a new VidiunDropFolder object.
 * @param dropFolder VidiunDropFolder  (optional).
 * @return VidiunDropFolder.
 */
VidiunDropFolderService.prototype.add = function(callback, dropFolder){
	var vparams = {};
	this.client.addParam(vparams, 'dropFolder', vidiun.toParams(dropFolder));
	this.client.queueServiceActionCall('dropfolder_dropfolder', 'add', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Retrieve a VidiunDropFolder object by ID.
 * @param dropFolderId int  (optional).
 * @return VidiunDropFolder.
 */
VidiunDropFolderService.prototype.get = function(callback, dropFolderId){
	var vparams = {};
	this.client.addParam(vparams, 'dropFolderId', dropFolderId);
	this.client.queueServiceActionCall('dropfolder_dropfolder', 'get', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Update an existing VidiunDropFolder object.
 * @param dropFolderId int  (optional).
 * @param dropFolder VidiunDropFolder Id (optional).
 * @return VidiunDropFolder.
 */
VidiunDropFolderService.prototype.update = function(callback, dropFolderId, dropFolder){
	var vparams = {};
	this.client.addParam(vparams, 'dropFolderId', dropFolderId);
	this.client.addParam(vparams, 'dropFolder', vidiun.toParams(dropFolder));
	this.client.queueServiceActionCall('dropfolder_dropfolder', 'update', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Mark the VidiunDropFolder object as deleted.
 * @param dropFolderId int  (optional).
 * @return VidiunDropFolder.
 */
VidiunDropFolderService.prototype.deleteAction = function(callback, dropFolderId){
	var vparams = {};
	this.client.addParam(vparams, 'dropFolderId', dropFolderId);
	this.client.queueServiceActionCall('dropfolder_dropfolder', 'delete', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * List VidiunDropFolder objects.
 * @param filter VidiunDropFolderFilter  (optional, default: null).
 * @param pager VidiunFilterPager  (optional, default: null).
 * @return VidiunDropFolderListResponse.
 */
VidiunDropFolderService.prototype.listAction = function(callback, filter, pager){
	if(!filter){
		filter = null;
	}
	if(!pager){
		pager = null;
	}
	var vparams = {};
	if (filter !== null){
		this.client.addParam(vparams, 'filter', vidiun.toParams(filter));
	}
	if (pager !== null){
		this.client.addParam(vparams, 'pager', vidiun.toParams(pager));
	}
	this.client.queueServiceActionCall('dropfolder_dropfolder', 'list', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Vidiun service: dropFolderFile.
 * The available service actions:
 * @action add Allows you to add a new VidiunDropFolderFile object.
 * @action get Retrieve a VidiunDropFolderFile object by ID.
 * @action update Update an existing VidiunDropFolderFile object.
 * @action updateStatus Update status of VidiunDropFolderFile.
 * @action delete Mark the VidiunDropFolderFile object as deleted.
 * @action list List VidiunDropFolderFile objects.
 * @action ignore Set the VidiunDropFolderFile status to ignore (VidiunDropFolderFileStatus::IGNORE).
 */
function VidiunDropFolderFileService(client){
	VidiunDropFolderFileService.super_.call(this);
	this.init(client);
}

util.inherits(VidiunDropFolderFileService, vidiun.VidiunServiceBase);
module.exports.VidiunDropFolderFileService = VidiunDropFolderFileService;

/**
 * Allows you to add a new VidiunDropFolderFile object.
 * @param dropFolderFile VidiunDropFolderFile  (optional).
 * @return VidiunDropFolderFile.
 */
VidiunDropFolderFileService.prototype.add = function(callback, dropFolderFile){
	var vparams = {};
	this.client.addParam(vparams, 'dropFolderFile', vidiun.toParams(dropFolderFile));
	this.client.queueServiceActionCall('dropfolder_dropfolderfile', 'add', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Retrieve a VidiunDropFolderFile object by ID.
 * @param dropFolderFileId int  (optional).
 * @return VidiunDropFolderFile.
 */
VidiunDropFolderFileService.prototype.get = function(callback, dropFolderFileId){
	var vparams = {};
	this.client.addParam(vparams, 'dropFolderFileId', dropFolderFileId);
	this.client.queueServiceActionCall('dropfolder_dropfolderfile', 'get', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Update an existing VidiunDropFolderFile object.
 * @param dropFolderFileId int  (optional).
 * @param dropFolderFile VidiunDropFolderFile Id (optional).
 * @return VidiunDropFolderFile.
 */
VidiunDropFolderFileService.prototype.update = function(callback, dropFolderFileId, dropFolderFile){
	var vparams = {};
	this.client.addParam(vparams, 'dropFolderFileId', dropFolderFileId);
	this.client.addParam(vparams, 'dropFolderFile', vidiun.toParams(dropFolderFile));
	this.client.queueServiceActionCall('dropfolder_dropfolderfile', 'update', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Update status of VidiunDropFolderFile.
 * @param dropFolderFileId int  (optional).
 * @param status int  (optional, enum: VidiunDropFolderFileStatus).
 * @return VidiunDropFolderFile.
 */
VidiunDropFolderFileService.prototype.updateStatus = function(callback, dropFolderFileId, status){
	var vparams = {};
	this.client.addParam(vparams, 'dropFolderFileId', dropFolderFileId);
	this.client.addParam(vparams, 'status', status);
	this.client.queueServiceActionCall('dropfolder_dropfolderfile', 'updateStatus', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Mark the VidiunDropFolderFile object as deleted.
 * @param dropFolderFileId int  (optional).
 * @return VidiunDropFolderFile.
 */
VidiunDropFolderFileService.prototype.deleteAction = function(callback, dropFolderFileId){
	var vparams = {};
	this.client.addParam(vparams, 'dropFolderFileId', dropFolderFileId);
	this.client.queueServiceActionCall('dropfolder_dropfolderfile', 'delete', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * List VidiunDropFolderFile objects.
 * @param filter VidiunDropFolderFileFilter  (optional, default: null).
 * @param pager VidiunFilterPager  (optional, default: null).
 * @return VidiunDropFolderFileListResponse.
 */
VidiunDropFolderFileService.prototype.listAction = function(callback, filter, pager){
	if(!filter){
		filter = null;
	}
	if(!pager){
		pager = null;
	}
	var vparams = {};
	if (filter !== null){
		this.client.addParam(vparams, 'filter', vidiun.toParams(filter));
	}
	if (pager !== null){
		this.client.addParam(vparams, 'pager', vidiun.toParams(pager));
	}
	this.client.queueServiceActionCall('dropfolder_dropfolderfile', 'list', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Set the VidiunDropFolderFile status to ignore (VidiunDropFolderFileStatus::IGNORE).
 * @param dropFolderFileId int  (optional).
 * @return VidiunDropFolderFile.
 */
VidiunDropFolderFileService.prototype.ignore = function(callback, dropFolderFileId){
	var vparams = {};
	this.client.addParam(vparams, 'dropFolderFileId', dropFolderFileId);
	this.client.queueServiceActionCall('dropfolder_dropfolderfile', 'ignore', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Vidiun service: eventNotificationTemplate.
 * The available service actions:
 * @action add This action allows for the creation of new backend event types in the system. This action requires access to the Vidiun server Admin Console. If you're looking to register to existing event types, please use the clone action instead.
 * @action clone This action allows registering to various backend event. Use this action to create notifications that will react to events such as new video was uploaded or metadata field was updated. To see the list of available event types, call the listTemplates action.
 * @action get Retrieve an event notification template object by id.
 * @action update Update an existing event notification template object.
 * @action updateStatus Update event notification template status by id.
 * @action delete Delete an event notification template object.
 * @action list list event notification template objects.
 * @action listByPartner .
 * @action dispatch Dispatch event notification object by id.
 * @action listTemplates Action lists the template partner event notification templates.
 * @action register Register to a queue from which event messages will be provided according to given template. Queue will be created if not already exists.
 */
function VidiunEventNotificationTemplateService(client){
	VidiunEventNotificationTemplateService.super_.call(this);
	this.init(client);
}

util.inherits(VidiunEventNotificationTemplateService, vidiun.VidiunServiceBase);
module.exports.VidiunEventNotificationTemplateService = VidiunEventNotificationTemplateService;

/**
 * This action allows for the creation of new backend event types in the system. This action requires access to the Vidiun server Admin Console. If you're looking to register to existing event types, please use the clone action instead.
 * @param eventNotificationTemplate VidiunEventNotificationTemplate  (optional).
 * @return VidiunEventNotificationTemplate.
 */
VidiunEventNotificationTemplateService.prototype.add = function(callback, eventNotificationTemplate){
	var vparams = {};
	this.client.addParam(vparams, 'eventNotificationTemplate', vidiun.toParams(eventNotificationTemplate));
	this.client.queueServiceActionCall('eventnotification_eventnotificationtemplate', 'add', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * This action allows registering to various backend event. Use this action to create notifications that will react to events such as new video was uploaded or metadata field was updated. To see the list of available event types, call the listTemplates action.
 * @param id int source template to clone (optional).
 * @param eventNotificationTemplate VidiunEventNotificationTemplate overwrite configuration object (optional, default: null).
 * @return VidiunEventNotificationTemplate.
 */
VidiunEventNotificationTemplateService.prototype.cloneAction = function(callback, id, eventNotificationTemplate){
	if(!eventNotificationTemplate){
		eventNotificationTemplate = null;
	}
	var vparams = {};
	this.client.addParam(vparams, 'id', id);
	if (eventNotificationTemplate !== null){
		this.client.addParam(vparams, 'eventNotificationTemplate', vidiun.toParams(eventNotificationTemplate));
	}
	this.client.queueServiceActionCall('eventnotification_eventnotificationtemplate', 'clone', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Retrieve an event notification template object by id.
 * @param id int  (optional).
 * @return VidiunEventNotificationTemplate.
 */
VidiunEventNotificationTemplateService.prototype.get = function(callback, id){
	var vparams = {};
	this.client.addParam(vparams, 'id', id);
	this.client.queueServiceActionCall('eventnotification_eventnotificationtemplate', 'get', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Update an existing event notification template object.
 * @param id int  (optional).
 * @param eventNotificationTemplate VidiunEventNotificationTemplate  (optional).
 * @return VidiunEventNotificationTemplate.
 */
VidiunEventNotificationTemplateService.prototype.update = function(callback, id, eventNotificationTemplate){
	var vparams = {};
	this.client.addParam(vparams, 'id', id);
	this.client.addParam(vparams, 'eventNotificationTemplate', vidiun.toParams(eventNotificationTemplate));
	this.client.queueServiceActionCall('eventnotification_eventnotificationtemplate', 'update', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Update event notification template status by id.
 * @param id int  (optional).
 * @param status int  (optional, enum: VidiunEventNotificationTemplateStatus).
 * @return VidiunEventNotificationTemplate.
 */
VidiunEventNotificationTemplateService.prototype.updateStatus = function(callback, id, status){
	var vparams = {};
	this.client.addParam(vparams, 'id', id);
	this.client.addParam(vparams, 'status', status);
	this.client.queueServiceActionCall('eventnotification_eventnotificationtemplate', 'updateStatus', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Delete an event notification template object.
 * @param id int  (optional).
 * @return .
 */
VidiunEventNotificationTemplateService.prototype.deleteAction = function(callback, id){
	var vparams = {};
	this.client.addParam(vparams, 'id', id);
	this.client.queueServiceActionCall('eventnotification_eventnotificationtemplate', 'delete', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * list event notification template objects.
 * @param filter VidiunEventNotificationTemplateFilter  (optional, default: null).
 * @param pager VidiunFilterPager  (optional, default: null).
 * @return VidiunEventNotificationTemplateListResponse.
 */
VidiunEventNotificationTemplateService.prototype.listAction = function(callback, filter, pager){
	if(!filter){
		filter = null;
	}
	if(!pager){
		pager = null;
	}
	var vparams = {};
	if (filter !== null){
		this.client.addParam(vparams, 'filter', vidiun.toParams(filter));
	}
	if (pager !== null){
		this.client.addParam(vparams, 'pager', vidiun.toParams(pager));
	}
	this.client.queueServiceActionCall('eventnotification_eventnotificationtemplate', 'list', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * .
 * @param filter VidiunPartnerFilter  (optional, default: null).
 * @param pager VidiunFilterPager  (optional, default: null).
 * @return VidiunEventNotificationTemplateListResponse.
 */
VidiunEventNotificationTemplateService.prototype.listByPartner = function(callback, filter, pager){
	if(!filter){
		filter = null;
	}
	if(!pager){
		pager = null;
	}
	var vparams = {};
	if (filter !== null){
		this.client.addParam(vparams, 'filter', vidiun.toParams(filter));
	}
	if (pager !== null){
		this.client.addParam(vparams, 'pager', vidiun.toParams(pager));
	}
	this.client.queueServiceActionCall('eventnotification_eventnotificationtemplate', 'listByPartner', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Dispatch event notification object by id.
 * @param id int  (optional).
 * @param scope VidiunEventNotificationScope  (optional).
 * @return int.
 */
VidiunEventNotificationTemplateService.prototype.dispatch = function(callback, id, scope){
	var vparams = {};
	this.client.addParam(vparams, 'id', id);
	this.client.addParam(vparams, 'scope', vidiun.toParams(scope));
	this.client.queueServiceActionCall('eventnotification_eventnotificationtemplate', 'dispatch', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Action lists the template partner event notification templates.
 * @param filter VidiunEventNotificationTemplateFilter  (optional, default: null).
 * @param pager VidiunFilterPager  (optional, default: null).
 * @return VidiunEventNotificationTemplateListResponse.
 */
VidiunEventNotificationTemplateService.prototype.listTemplates = function(callback, filter, pager){
	if(!filter){
		filter = null;
	}
	if(!pager){
		pager = null;
	}
	var vparams = {};
	if (filter !== null){
		this.client.addParam(vparams, 'filter', vidiun.toParams(filter));
	}
	if (pager !== null){
		this.client.addParam(vparams, 'pager', vidiun.toParams(pager));
	}
	this.client.queueServiceActionCall('eventnotification_eventnotificationtemplate', 'listTemplates', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Register to a queue from which event messages will be provided according to given template. Queue will be created if not already exists.
 * @param notificationTemplateSystemName string Existing push notification template system name (optional).
 * @param pushNotificationParams array User params (optional).
 * @return VidiunPushNotificationData.
 */
VidiunEventNotificationTemplateService.prototype.register = function(callback, notificationTemplateSystemName, pushNotificationParams){
	var vparams = {};
	this.client.addParam(vparams, 'notificationTemplateSystemName', notificationTemplateSystemName);
	this.client.addParam(vparams, "pushNotificationParams", vidiun.toParams(pushNotificationParams));
	this.client.queueServiceActionCall('eventnotification_eventnotificationtemplate', 'register', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Vidiun service: fileSync.
 * The available service actions:
 * @action list List file syce objects by filter and pager.
 * @action update Update file sync by id.
 */
function VidiunFileSyncService(client){
	VidiunFileSyncService.super_.call(this);
	this.init(client);
}

util.inherits(VidiunFileSyncService, vidiun.VidiunServiceBase);
module.exports.VidiunFileSyncService = VidiunFileSyncService;

/**
 * List file syce objects by filter and pager.
 * @param filter VidiunFileSyncFilter  (optional, default: null).
 * @param pager VidiunFilterPager  (optional, default: null).
 * @return VidiunFileSyncListResponse.
 */
VidiunFileSyncService.prototype.listAction = function(callback, filter, pager){
	if(!filter){
		filter = null;
	}
	if(!pager){
		pager = null;
	}
	var vparams = {};
	if (filter !== null){
		this.client.addParam(vparams, 'filter', vidiun.toParams(filter));
	}
	if (pager !== null){
		this.client.addParam(vparams, 'pager', vidiun.toParams(pager));
	}
	this.client.queueServiceActionCall('filesync_filesync', 'list', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Update file sync by id.
 * @param id int  (optional).
 * @param fileSync VidiunFileSync  (optional).
 * @return VidiunFileSync.
 */
VidiunFileSyncService.prototype.update = function(callback, id, fileSync){
	var vparams = {};
	this.client.addParam(vparams, 'id', id);
	this.client.addParam(vparams, 'fileSync', vidiun.toParams(fileSync));
	this.client.queueServiceActionCall('filesync_filesync', 'update', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Vidiun service: like.
 * The available service actions:
 * @action like .
 * @action unlike .
 * @action checkLikeExists .
 * @action list .
 */
function VidiunLikeService(client){
	VidiunLikeService.super_.call(this);
	this.init(client);
}

util.inherits(VidiunLikeService, vidiun.VidiunServiceBase);
module.exports.VidiunLikeService = VidiunLikeService;

/**
 * .
 * @param entryId string  (optional).
 * @return bool.
 */
VidiunLikeService.prototype.like = function(callback, entryId){
	var vparams = {};
	this.client.addParam(vparams, 'entryId', entryId);
	this.client.queueServiceActionCall('like_like', 'like', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * .
 * @param entryId string  (optional).
 * @return bool.
 */
VidiunLikeService.prototype.unlike = function(callback, entryId){
	var vparams = {};
	this.client.addParam(vparams, 'entryId', entryId);
	this.client.queueServiceActionCall('like_like', 'unlike', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * .
 * @param entryId string  (optional).
 * @param userId string  (optional, default: null).
 * @return bool.
 */
VidiunLikeService.prototype.checkLikeExists = function(callback, entryId, userId){
	if(!userId){
		userId = null;
	}
	var vparams = {};
	this.client.addParam(vparams, 'entryId', entryId);
	this.client.addParam(vparams, 'userId', userId);
	this.client.queueServiceActionCall('like_like', 'checkLikeExists', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * .
 * @param filter VidiunLikeFilter  (optional, default: null).
 * @param pager VidiunFilterPager  (optional, default: null).
 * @return VidiunLikeListResponse.
 */
VidiunLikeService.prototype.listAction = function(callback, filter, pager){
	if(!filter){
		filter = null;
	}
	if(!pager){
		pager = null;
	}
	var vparams = {};
	if (filter !== null){
		this.client.addParam(vparams, 'filter', vidiun.toParams(filter));
	}
	if (pager !== null){
		this.client.addParam(vparams, 'pager', vidiun.toParams(pager));
	}
	this.client.queueServiceActionCall('like_like', 'list', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Vidiun service: filesyncImportBatch.
 * The available service actions:
 * @action lockPendingFileSyncs batch lockPendingFileSyncs action locks file syncs for import by the file sync periodic worker.
 * @action extendFileSyncLock batch extendFileSyncLock action extends the expiration of a file sync lock.
 */
function VidiunFilesyncImportBatchService(client){
	VidiunFilesyncImportBatchService.super_.call(this);
	this.init(client);
}

util.inherits(VidiunFilesyncImportBatchService, vidiun.VidiunServiceBase);
module.exports.VidiunFilesyncImportBatchService = VidiunFilesyncImportBatchService;

/**
 * batch lockPendingFileSyncs action locks file syncs for import by the file sync periodic worker.
 * @param filter VidiunFileSyncFilter  (optional).
 * @param workerId int The id of the file sync import worker (optional).
 * @param sourceDc int The id of the DC from which the file syncs should be pulled (optional).
 * @param maxCount int The maximum number of file syncs that should be returned (optional).
 * @param maxSize int The maximum total size of file syncs that should be returned, this limit may be exceeded by one file sync (optional, default: null).
 * @return VidiunLockFileSyncsResponse.
 */
VidiunFilesyncImportBatchService.prototype.lockPendingFileSyncs = function(callback, filter, workerId, sourceDc, maxCount, maxSize){
	if(!maxSize){
		maxSize = null;
	}
	var vparams = {};
	this.client.addParam(vparams, 'filter', vidiun.toParams(filter));
	this.client.addParam(vparams, 'workerId', workerId);
	this.client.addParam(vparams, 'sourceDc', sourceDc);
	this.client.addParam(vparams, 'maxCount', maxCount);
	this.client.addParam(vparams, 'maxSize', maxSize);
	this.client.queueServiceActionCall('multicenters_filesyncimportbatch', 'lockPendingFileSyncs', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * batch extendFileSyncLock action extends the expiration of a file sync lock.
 * @param id int The id of the file sync (optional).
 * @return .
 */
VidiunFilesyncImportBatchService.prototype.extendFileSyncLock = function(callback, id){
	var vparams = {};
	this.client.addParam(vparams, 'id', id);
	this.client.queueServiceActionCall('multicenters_filesyncimportbatch', 'extendFileSyncLock', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Vidiun service: shortLink.
 * The available service actions:
 * @action list List short link objects by filter and pager.
 * @action add Allows you to add a short link object.
 * @action get Retrieve an short link object by id.
 * @action update Update exisitng short link.
 * @action delete Mark the short link as deleted.
 */
function VidiunShortLinkService(client){
	VidiunShortLinkService.super_.call(this);
	this.init(client);
}

util.inherits(VidiunShortLinkService, vidiun.VidiunServiceBase);
module.exports.VidiunShortLinkService = VidiunShortLinkService;

/**
 * List short link objects by filter and pager.
 * @param filter VidiunShortLinkFilter  (optional, default: null).
 * @param pager VidiunFilterPager  (optional, default: null).
 * @return VidiunShortLinkListResponse.
 */
VidiunShortLinkService.prototype.listAction = function(callback, filter, pager){
	if(!filter){
		filter = null;
	}
	if(!pager){
		pager = null;
	}
	var vparams = {};
	if (filter !== null){
		this.client.addParam(vparams, 'filter', vidiun.toParams(filter));
	}
	if (pager !== null){
		this.client.addParam(vparams, 'pager', vidiun.toParams(pager));
	}
	this.client.queueServiceActionCall('shortlink_shortlink', 'list', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Allows you to add a short link object.
 * @param shortLink VidiunShortLink  (optional).
 * @return VidiunShortLink.
 */
VidiunShortLinkService.prototype.add = function(callback, shortLink){
	var vparams = {};
	this.client.addParam(vparams, 'shortLink', vidiun.toParams(shortLink));
	this.client.queueServiceActionCall('shortlink_shortlink', 'add', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Retrieve an short link object by id.
 * @param id string  (optional).
 * @return VidiunShortLink.
 */
VidiunShortLinkService.prototype.get = function(callback, id){
	var vparams = {};
	this.client.addParam(vparams, 'id', id);
	this.client.queueServiceActionCall('shortlink_shortlink', 'get', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Update exisitng short link.
 * @param id string  (optional).
 * @param shortLink VidiunShortLink  (optional).
 * @return VidiunShortLink.
 */
VidiunShortLinkService.prototype.update = function(callback, id, shortLink){
	var vparams = {};
	this.client.addParam(vparams, 'id', id);
	this.client.addParam(vparams, 'shortLink', vidiun.toParams(shortLink));
	this.client.queueServiceActionCall('shortlink_shortlink', 'update', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Mark the short link as deleted.
 * @param id string  (optional).
 * @return VidiunShortLink.
 */
VidiunShortLinkService.prototype.deleteAction = function(callback, id){
	var vparams = {};
	this.client.addParam(vparams, 'id', id);
	this.client.queueServiceActionCall('shortlink_shortlink', 'delete', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Vidiun service: tag.
 * The available service actions:
 * @action search .
 * @action deletePending Action goes over all tags with instanceCount==0 and checks whether they need to be removed from the DB. Returns number of removed tags.
 * @action indexCategoryEntryTags .
 */
function VidiunTagService(client){
	VidiunTagService.super_.call(this);
	this.init(client);
}

util.inherits(VidiunTagService, vidiun.VidiunServiceBase);
module.exports.VidiunTagService = VidiunTagService;

/**
 * .
 * @param tagFilter VidiunTagFilter  (optional).
 * @param pager VidiunFilterPager  (optional, default: null).
 * @return VidiunTagListResponse.
 */
VidiunTagService.prototype.search = function(callback, tagFilter, pager){
	if(!pager){
		pager = null;
	}
	var vparams = {};
	this.client.addParam(vparams, 'tagFilter', vidiun.toParams(tagFilter));
	if (pager !== null){
		this.client.addParam(vparams, 'pager', vidiun.toParams(pager));
	}
	this.client.queueServiceActionCall('tagsearch_tag', 'search', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Action goes over all tags with instanceCount==0 and checks whether they need to be removed from the DB. Returns number of removed tags.
 * @return int.
 */
VidiunTagService.prototype.deletePending = function(callback){
	var vparams = {};
	this.client.queueServiceActionCall('tagsearch_tag', 'deletePending', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * .
 * @param categoryId int  (optional).
 * @param pcToDecrement string  (optional).
 * @param pcToIncrement string  (optional).
 * @return .
 */
VidiunTagService.prototype.indexCategoryEntryTags = function(callback, categoryId, pcToDecrement, pcToIncrement){
	var vparams = {};
	this.client.addParam(vparams, 'categoryId', categoryId);
	this.client.addParam(vparams, 'pcToDecrement', pcToDecrement);
	this.client.addParam(vparams, 'pcToIncrement', pcToIncrement);
	this.client.queueServiceActionCall('tagsearch_tag', 'indexCategoryEntryTags', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Vidiun service: varConsole.
 * The available service actions:
 * @action getPartnerUsage Function which calulates partner usage of a group of a VAR's sub-publishers.
 * @action updateStatus Function to change a sub-publisher's status.
 */
function VidiunVarConsoleService(client){
	VidiunVarConsoleService.super_.call(this);
	this.init(client);
}

util.inherits(VidiunVarConsoleService, vidiun.VidiunServiceBase);
module.exports.VidiunVarConsoleService = VidiunVarConsoleService;

/**
 * Function which calulates partner usage of a group of a VAR's sub-publishers.
 * @param partnerFilter VidiunPartnerFilter  (optional, default: null).
 * @param usageFilter VidiunReportInputFilter  (optional, default: null).
 * @param pager VidiunFilterPager  (optional, default: null).
 * @return VidiunPartnerUsageListResponse.
 */
VidiunVarConsoleService.prototype.getPartnerUsage = function(callback, partnerFilter, usageFilter, pager){
	if(!partnerFilter){
		partnerFilter = null;
	}
	if(!usageFilter){
		usageFilter = null;
	}
	if(!pager){
		pager = null;
	}
	var vparams = {};
	if (partnerFilter !== null){
		this.client.addParam(vparams, 'partnerFilter', vidiun.toParams(partnerFilter));
	}
	if (usageFilter !== null){
		this.client.addParam(vparams, 'usageFilter', vidiun.toParams(usageFilter));
	}
	if (pager !== null){
		this.client.addParam(vparams, 'pager', vidiun.toParams(pager));
	}
	this.client.queueServiceActionCall('varconsole_varconsole', 'getPartnerUsage', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Function to change a sub-publisher's status.
 * @param id int  (optional).
 * @param status int  (optional, enum: VidiunPartnerStatus).
 * @return .
 */
VidiunVarConsoleService.prototype.updateStatus = function(callback, id, status){
	var vparams = {};
	this.client.addParam(vparams, 'id', id);
	this.client.addParam(vparams, 'status', status);
	this.client.queueServiceActionCall('varconsole_varconsole', 'updateStatus', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Vidiun service: virusScanProfile.
 * The available service actions:
 * @action list List virus scan profile objects by filter and pager.
 * @action add Allows you to add an virus scan profile object and virus scan profile content associated with Vidiun object.
 * @action get Retrieve an virus scan profile object by id.
 * @action update Update exisitng virus scan profile, it is possible to update the virus scan profile id too.
 * @action delete Mark the virus scan profile as deleted.
 * @action scan Scan flavor asset according to virus scan profile.
 */
function VidiunVirusScanProfileService(client){
	VidiunVirusScanProfileService.super_.call(this);
	this.init(client);
}

util.inherits(VidiunVirusScanProfileService, vidiun.VidiunServiceBase);
module.exports.VidiunVirusScanProfileService = VidiunVirusScanProfileService;

/**
 * List virus scan profile objects by filter and pager.
 * @param filter VidiunVirusScanProfileFilter  (optional, default: null).
 * @param pager VidiunFilterPager  (optional, default: null).
 * @return VidiunVirusScanProfileListResponse.
 */
VidiunVirusScanProfileService.prototype.listAction = function(callback, filter, pager){
	if(!filter){
		filter = null;
	}
	if(!pager){
		pager = null;
	}
	var vparams = {};
	if (filter !== null){
		this.client.addParam(vparams, 'filter', vidiun.toParams(filter));
	}
	if (pager !== null){
		this.client.addParam(vparams, 'pager', vidiun.toParams(pager));
	}
	this.client.queueServiceActionCall('virusscan_virusscanprofile', 'list', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Allows you to add an virus scan profile object and virus scan profile content associated with Vidiun object.
 * @param virusScanProfile VidiunVirusScanProfile  (optional).
 * @return VidiunVirusScanProfile.
 */
VidiunVirusScanProfileService.prototype.add = function(callback, virusScanProfile){
	var vparams = {};
	this.client.addParam(vparams, 'virusScanProfile', vidiun.toParams(virusScanProfile));
	this.client.queueServiceActionCall('virusscan_virusscanprofile', 'add', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Retrieve an virus scan profile object by id.
 * @param virusScanProfileId int  (optional).
 * @return VidiunVirusScanProfile.
 */
VidiunVirusScanProfileService.prototype.get = function(callback, virusScanProfileId){
	var vparams = {};
	this.client.addParam(vparams, 'virusScanProfileId', virusScanProfileId);
	this.client.queueServiceActionCall('virusscan_virusscanprofile', 'get', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Update exisitng virus scan profile, it is possible to update the virus scan profile id too.
 * @param virusScanProfileId int  (optional).
 * @param virusScanProfile VidiunVirusScanProfile Id (optional).
 * @return VidiunVirusScanProfile.
 */
VidiunVirusScanProfileService.prototype.update = function(callback, virusScanProfileId, virusScanProfile){
	var vparams = {};
	this.client.addParam(vparams, 'virusScanProfileId', virusScanProfileId);
	this.client.addParam(vparams, 'virusScanProfile', vidiun.toParams(virusScanProfile));
	this.client.queueServiceActionCall('virusscan_virusscanprofile', 'update', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Mark the virus scan profile as deleted.
 * @param virusScanProfileId int  (optional).
 * @return VidiunVirusScanProfile.
 */
VidiunVirusScanProfileService.prototype.deleteAction = function(callback, virusScanProfileId){
	var vparams = {};
	this.client.addParam(vparams, 'virusScanProfileId', virusScanProfileId);
	this.client.queueServiceActionCall('virusscan_virusscanprofile', 'delete', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Scan flavor asset according to virus scan profile.
 * @param flavorAssetId string  (optional).
 * @param virusScanProfileId int  (optional, default: null).
 * @return int.
 */
VidiunVirusScanProfileService.prototype.scan = function(callback, flavorAssetId, virusScanProfileId){
	if(!virusScanProfileId){
		virusScanProfileId = null;
	}
	var vparams = {};
	this.client.addParam(vparams, 'flavorAssetId', flavorAssetId);
	this.client.addParam(vparams, 'virusScanProfileId', virusScanProfileId);
	this.client.queueServiceActionCall('virusscan_virusscanprofile', 'scan', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Vidiun service: externalMedia.
 * The available service actions:
 * @action add Add external media entry.
 * @action get Get external media entry by ID.
 * @action update Update external media entry. Only the properties that were set will be updated.
 * @action delete Delete a external media entry.
 * @action list List media entries by filter with paging support.
 * @action count Count media entries by filter.
 */
function VidiunExternalMediaService(client){
	VidiunExternalMediaService.super_.call(this);
	this.init(client);
}

util.inherits(VidiunExternalMediaService, vidiun.VidiunServiceBase);
module.exports.VidiunExternalMediaService = VidiunExternalMediaService;

/**
 * Add external media entry.
 * @param entry VidiunExternalMediaEntry  (optional).
 * @return VidiunExternalMediaEntry.
 */
VidiunExternalMediaService.prototype.add = function(callback, entry){
	var vparams = {};
	this.client.addParam(vparams, 'entry', vidiun.toParams(entry));
	this.client.queueServiceActionCall('externalmedia_externalmedia', 'add', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Get external media entry by ID.
 * @param id string External media entry id (optional).
 * @return VidiunExternalMediaEntry.
 */
VidiunExternalMediaService.prototype.get = function(callback, id){
	var vparams = {};
	this.client.addParam(vparams, 'id', id);
	this.client.queueServiceActionCall('externalmedia_externalmedia', 'get', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Update external media entry. Only the properties that were set will be updated.
 * @param id string External media entry id to update (optional).
 * @param entry VidiunExternalMediaEntry External media entry object to update (optional).
 * @return VidiunExternalMediaEntry.
 */
VidiunExternalMediaService.prototype.update = function(callback, id, entry){
	var vparams = {};
	this.client.addParam(vparams, 'id', id);
	this.client.addParam(vparams, 'entry', vidiun.toParams(entry));
	this.client.queueServiceActionCall('externalmedia_externalmedia', 'update', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Delete a external media entry.
 * @param id string External media entry id to delete (optional).
 * @return .
 */
VidiunExternalMediaService.prototype.deleteAction = function(callback, id){
	var vparams = {};
	this.client.addParam(vparams, 'id', id);
	this.client.queueServiceActionCall('externalmedia_externalmedia', 'delete', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * List media entries by filter with paging support.
 * @param filter VidiunExternalMediaEntryFilter External media entry filter (optional, default: null).
 * @param pager VidiunFilterPager Pager (optional, default: null).
 * @return VidiunExternalMediaEntryListResponse.
 */
VidiunExternalMediaService.prototype.listAction = function(callback, filter, pager){
	if(!filter){
		filter = null;
	}
	if(!pager){
		pager = null;
	}
	var vparams = {};
	if (filter !== null){
		this.client.addParam(vparams, 'filter', vidiun.toParams(filter));
	}
	if (pager !== null){
		this.client.addParam(vparams, 'pager', vidiun.toParams(pager));
	}
	this.client.queueServiceActionCall('externalmedia_externalmedia', 'list', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Count media entries by filter.
 * @param filter VidiunExternalMediaEntryFilter External media entry filter (optional, default: null).
 * @return int.
 */
VidiunExternalMediaService.prototype.count = function(callback, filter){
	if(!filter){
		filter = null;
	}
	var vparams = {};
	if (filter !== null){
		this.client.addParam(vparams, 'filter', vidiun.toParams(filter));
	}
	this.client.queueServiceActionCall('externalmedia_externalmedia', 'count', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Vidiun service: drmPolicy.
 * The available service actions:
 * @action add Allows you to add a new DrmPolicy object.
 * @action get Retrieve a VidiunDrmPolicy object by ID.
 * @action update Update an existing VidiunDrmPolicy object.
 * @action delete Mark the VidiunDrmPolicy object as deleted.
 * @action list List VidiunDrmPolicy objects.
 */
function VidiunDrmPolicyService(client){
	VidiunDrmPolicyService.super_.call(this);
	this.init(client);
}

util.inherits(VidiunDrmPolicyService, vidiun.VidiunServiceBase);
module.exports.VidiunDrmPolicyService = VidiunDrmPolicyService;

/**
 * Allows you to add a new DrmPolicy object.
 * @param drmPolicy VidiunDrmPolicy  (optional).
 * @return VidiunDrmPolicy.
 */
VidiunDrmPolicyService.prototype.add = function(callback, drmPolicy){
	var vparams = {};
	this.client.addParam(vparams, 'drmPolicy', vidiun.toParams(drmPolicy));
	this.client.queueServiceActionCall('drm_drmpolicy', 'add', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Retrieve a VidiunDrmPolicy object by ID.
 * @param drmPolicyId int  (optional).
 * @return VidiunDrmPolicy.
 */
VidiunDrmPolicyService.prototype.get = function(callback, drmPolicyId){
	var vparams = {};
	this.client.addParam(vparams, 'drmPolicyId', drmPolicyId);
	this.client.queueServiceActionCall('drm_drmpolicy', 'get', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Update an existing VidiunDrmPolicy object.
 * @param drmPolicyId int  (optional).
 * @param drmPolicy VidiunDrmPolicy Id (optional).
 * @return VidiunDrmPolicy.
 */
VidiunDrmPolicyService.prototype.update = function(callback, drmPolicyId, drmPolicy){
	var vparams = {};
	this.client.addParam(vparams, 'drmPolicyId', drmPolicyId);
	this.client.addParam(vparams, 'drmPolicy', vidiun.toParams(drmPolicy));
	this.client.queueServiceActionCall('drm_drmpolicy', 'update', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Mark the VidiunDrmPolicy object as deleted.
 * @param drmPolicyId int  (optional).
 * @return VidiunDrmPolicy.
 */
VidiunDrmPolicyService.prototype.deleteAction = function(callback, drmPolicyId){
	var vparams = {};
	this.client.addParam(vparams, 'drmPolicyId', drmPolicyId);
	this.client.queueServiceActionCall('drm_drmpolicy', 'delete', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * List VidiunDrmPolicy objects.
 * @param filter VidiunDrmPolicyFilter  (optional, default: null).
 * @param pager VidiunFilterPager  (optional, default: null).
 * @return VidiunDrmPolicyListResponse.
 */
VidiunDrmPolicyService.prototype.listAction = function(callback, filter, pager){
	if(!filter){
		filter = null;
	}
	if(!pager){
		pager = null;
	}
	var vparams = {};
	if (filter !== null){
		this.client.addParam(vparams, 'filter', vidiun.toParams(filter));
	}
	if (pager !== null){
		this.client.addParam(vparams, 'pager', vidiun.toParams(pager));
	}
	this.client.queueServiceActionCall('drm_drmpolicy', 'list', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Vidiun service: drmProfile.
 * The available service actions:
 * @action add Allows you to add a new DrmProfile object.
 * @action get Retrieve a VidiunDrmProfile object by ID.
 * @action update Update an existing VidiunDrmProfile object.
 * @action delete Mark the VidiunDrmProfile object as deleted.
 * @action list List VidiunDrmProfile objects.
 * @action getByProvider Retrieve a VidiunDrmProfile object by provider, if no specific profile defined return default profile.
 */
function VidiunDrmProfileService(client){
	VidiunDrmProfileService.super_.call(this);
	this.init(client);
}

util.inherits(VidiunDrmProfileService, vidiun.VidiunServiceBase);
module.exports.VidiunDrmProfileService = VidiunDrmProfileService;

/**
 * Allows you to add a new DrmProfile object.
 * @param drmProfile VidiunDrmProfile  (optional).
 * @return VidiunDrmProfile.
 */
VidiunDrmProfileService.prototype.add = function(callback, drmProfile){
	var vparams = {};
	this.client.addParam(vparams, 'drmProfile', vidiun.toParams(drmProfile));
	this.client.queueServiceActionCall('drm_drmprofile', 'add', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Retrieve a VidiunDrmProfile object by ID.
 * @param drmProfileId int  (optional).
 * @return VidiunDrmProfile.
 */
VidiunDrmProfileService.prototype.get = function(callback, drmProfileId){
	var vparams = {};
	this.client.addParam(vparams, 'drmProfileId', drmProfileId);
	this.client.queueServiceActionCall('drm_drmprofile', 'get', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Update an existing VidiunDrmProfile object.
 * @param drmProfileId int  (optional).
 * @param drmProfile VidiunDrmProfile Id (optional).
 * @return VidiunDrmProfile.
 */
VidiunDrmProfileService.prototype.update = function(callback, drmProfileId, drmProfile){
	var vparams = {};
	this.client.addParam(vparams, 'drmProfileId', drmProfileId);
	this.client.addParam(vparams, 'drmProfile', vidiun.toParams(drmProfile));
	this.client.queueServiceActionCall('drm_drmprofile', 'update', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Mark the VidiunDrmProfile object as deleted.
 * @param drmProfileId int  (optional).
 * @return VidiunDrmProfile.
 */
VidiunDrmProfileService.prototype.deleteAction = function(callback, drmProfileId){
	var vparams = {};
	this.client.addParam(vparams, 'drmProfileId', drmProfileId);
	this.client.queueServiceActionCall('drm_drmprofile', 'delete', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * List VidiunDrmProfile objects.
 * @param filter VidiunDrmProfileFilter  (optional, default: null).
 * @param pager VidiunFilterPager  (optional, default: null).
 * @return VidiunDrmProfileListResponse.
 */
VidiunDrmProfileService.prototype.listAction = function(callback, filter, pager){
	if(!filter){
		filter = null;
	}
	if(!pager){
		pager = null;
	}
	var vparams = {};
	if (filter !== null){
		this.client.addParam(vparams, 'filter', vidiun.toParams(filter));
	}
	if (pager !== null){
		this.client.addParam(vparams, 'pager', vidiun.toParams(pager));
	}
	this.client.queueServiceActionCall('drm_drmprofile', 'list', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Retrieve a VidiunDrmProfile object by provider, if no specific profile defined return default profile.
 * @param provider string  (optional, enum: VidiunDrmProviderType).
 * @return VidiunDrmProfile.
 */
VidiunDrmProfileService.prototype.getByProvider = function(callback, provider){
	var vparams = {};
	this.client.addParam(vparams, 'provider', provider);
	this.client.queueServiceActionCall('drm_drmprofile', 'getByProvider', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Vidiun service: drmLicenseAccess.
 * The available service actions:
 * @action getAccess getAccessAction
 * input: flavor ids, drmProvider
 * Get Access Action.
 */
function VidiunDrmLicenseAccessService(client){
	VidiunDrmLicenseAccessService.super_.call(this);
	this.init(client);
}

util.inherits(VidiunDrmLicenseAccessService, vidiun.VidiunServiceBase);
module.exports.VidiunDrmLicenseAccessService = VidiunDrmLicenseAccessService;

/**
 * getAccessAction
 * input: flavor ids, drmProvider
 * Get Access Action.
 * @param entryId string  (optional).
 * @param flavorIds string  (optional).
 * @param referrer string  (optional).
 * @return VidiunDrmLicenseAccessDetails.
 */
VidiunDrmLicenseAccessService.prototype.getAccess = function(callback, entryId, flavorIds, referrer){
	var vparams = {};
	this.client.addParam(vparams, 'entryId', entryId);
	this.client.addParam(vparams, 'flavorIds', flavorIds);
	this.client.addParam(vparams, 'referrer', referrer);
	this.client.queueServiceActionCall('drm_drmlicenseaccess', 'getAccess', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Vidiun service: widevineDrm.
 * The available service actions:
 * @action getLicense Get license for encrypted content playback.
 */
function VidiunWidevineDrmService(client){
	VidiunWidevineDrmService.super_.call(this);
	this.init(client);
}

util.inherits(VidiunWidevineDrmService, vidiun.VidiunServiceBase);
module.exports.VidiunWidevineDrmService = VidiunWidevineDrmService;

/**
 * Get license for encrypted content playback.
 * @param flavorAssetId string  (optional).
 * @param referrer string 64base encoded (optional, default: null).
 * @return string.
 */
VidiunWidevineDrmService.prototype.getLicense = function(callback, flavorAssetId, referrer){
	if(!referrer){
		referrer = null;
	}
	var vparams = {};
	this.client.addParam(vparams, 'flavorAssetId', flavorAssetId);
	this.client.addParam(vparams, 'referrer', referrer);
	this.client.queueServiceActionCall('widevine_widevinedrm', 'getLicense', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Vidiun service: liveConversionProfile.
 * The available service actions:
 */
function VidiunLiveConversionProfileService(client){
	VidiunLiveConversionProfileService.super_.call(this);
	this.init(client);
}

util.inherits(VidiunLiveConversionProfileService, vidiun.VidiunServiceBase);
module.exports.VidiunLiveConversionProfileService = VidiunLiveConversionProfileService;


/**
 *Class definition for the Vidiun service: scheduledTaskProfile.
 * The available service actions:
 * @action add Add a new scheduled task profile.
 * @action get Retrieve a scheduled task profile by id.
 * @action update Update an existing scheduled task profile.
 * @action delete Delete a scheduled task profile.
 * @action list List scheduled task profiles.
 * @action requestDryRun .
 * @action getDryRunResults .
 */
function VidiunScheduledTaskProfileService(client){
	VidiunScheduledTaskProfileService.super_.call(this);
	this.init(client);
}

util.inherits(VidiunScheduledTaskProfileService, vidiun.VidiunServiceBase);
module.exports.VidiunScheduledTaskProfileService = VidiunScheduledTaskProfileService;

/**
 * Add a new scheduled task profile.
 * @param scheduledTaskProfile VidiunScheduledTaskProfile  (optional).
 * @return VidiunScheduledTaskProfile.
 */
VidiunScheduledTaskProfileService.prototype.add = function(callback, scheduledTaskProfile){
	var vparams = {};
	this.client.addParam(vparams, 'scheduledTaskProfile', vidiun.toParams(scheduledTaskProfile));
	this.client.queueServiceActionCall('scheduledtask_scheduledtaskprofile', 'add', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Retrieve a scheduled task profile by id.
 * @param id int  (optional).
 * @return VidiunScheduledTaskProfile.
 */
VidiunScheduledTaskProfileService.prototype.get = function(callback, id){
	var vparams = {};
	this.client.addParam(vparams, 'id', id);
	this.client.queueServiceActionCall('scheduledtask_scheduledtaskprofile', 'get', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Update an existing scheduled task profile.
 * @param id int  (optional).
 * @param scheduledTaskProfile VidiunScheduledTaskProfile  (optional).
 * @return VidiunScheduledTaskProfile.
 */
VidiunScheduledTaskProfileService.prototype.update = function(callback, id, scheduledTaskProfile){
	var vparams = {};
	this.client.addParam(vparams, 'id', id);
	this.client.addParam(vparams, 'scheduledTaskProfile', vidiun.toParams(scheduledTaskProfile));
	this.client.queueServiceActionCall('scheduledtask_scheduledtaskprofile', 'update', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Delete a scheduled task profile.
 * @param id int  (optional).
 * @return .
 */
VidiunScheduledTaskProfileService.prototype.deleteAction = function(callback, id){
	var vparams = {};
	this.client.addParam(vparams, 'id', id);
	this.client.queueServiceActionCall('scheduledtask_scheduledtaskprofile', 'delete', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * List scheduled task profiles.
 * @param filter VidiunScheduledTaskProfileFilter  (optional, default: null).
 * @param pager VidiunFilterPager  (optional, default: null).
 * @return VidiunScheduledTaskProfileListResponse.
 */
VidiunScheduledTaskProfileService.prototype.listAction = function(callback, filter, pager){
	if(!filter){
		filter = null;
	}
	if(!pager){
		pager = null;
	}
	var vparams = {};
	if (filter !== null){
		this.client.addParam(vparams, 'filter', vidiun.toParams(filter));
	}
	if (pager !== null){
		this.client.addParam(vparams, 'pager', vidiun.toParams(pager));
	}
	this.client.queueServiceActionCall('scheduledtask_scheduledtaskprofile', 'list', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * .
 * @param scheduledTaskProfileId int  (optional).
 * @param maxResults int  (optional, default: 500).
 * @return int.
 */
VidiunScheduledTaskProfileService.prototype.requestDryRun = function(callback, scheduledTaskProfileId, maxResults){
	if(!maxResults){
		maxResults = 500;
	}
	var vparams = {};
	this.client.addParam(vparams, 'scheduledTaskProfileId', scheduledTaskProfileId);
	this.client.addParam(vparams, 'maxResults', maxResults);
	this.client.queueServiceActionCall('scheduledtask_scheduledtaskprofile', 'requestDryRun', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * .
 * @param requestId int  (optional).
 * @return VidiunObjectListResponse.
 */
VidiunScheduledTaskProfileService.prototype.getDryRunResults = function(callback, requestId){
	var vparams = {};
	this.client.addParam(vparams, 'requestId', requestId);
	this.client.queueServiceActionCall('scheduledtask_scheduledtaskprofile', 'getDryRunResults', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Vidiun service: playReadyDrm.
 * The available service actions:
 * @action generateKey Generate key id and content key for PlayReady encryption.
 * @action getContentKeys Get content keys for input key ids.
 * @action getEntryContentKey Get content key and key id for the given entry.
 * @action getLicenseDetails Get Play Ready policy and dates for license creation.
 */
function VidiunPlayReadyDrmService(client){
	VidiunPlayReadyDrmService.super_.call(this);
	this.init(client);
}

util.inherits(VidiunPlayReadyDrmService, vidiun.VidiunServiceBase);
module.exports.VidiunPlayReadyDrmService = VidiunPlayReadyDrmService;

/**
 * Generate key id and content key for PlayReady encryption.
 * @return VidiunPlayReadyContentKey.
 */
VidiunPlayReadyDrmService.prototype.generateKey = function(callback){
	var vparams = {};
	this.client.queueServiceActionCall('playready_playreadydrm', 'generateKey', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Get content keys for input key ids.
 * @param keyIds string - comma separated key id's (optional).
 * @return array.
 */
VidiunPlayReadyDrmService.prototype.getContentKeys = function(callback, keyIds){
	var vparams = {};
	this.client.addParam(vparams, 'keyIds', keyIds);
	this.client.queueServiceActionCall('playready_playreadydrm', 'getContentKeys', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Get content key and key id for the given entry.
 * @param entryId string  (optional).
 * @param createIfMissing bool  (optional, default: false).
 * @return VidiunPlayReadyContentKey.
 */
VidiunPlayReadyDrmService.prototype.getEntryContentKey = function(callback, entryId, createIfMissing){
	if(!createIfMissing){
		createIfMissing = false;
	}
	var vparams = {};
	this.client.addParam(vparams, 'entryId', entryId);
	this.client.addParam(vparams, 'createIfMissing', createIfMissing);
	this.client.queueServiceActionCall('playready_playreadydrm', 'getEntryContentKey', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Get Play Ready policy and dates for license creation.
 * @param keyId string  (optional).
 * @param deviceId string  (optional).
 * @param deviceType int  (optional).
 * @param entryId string  (optional, default: null).
 * @param referrer string 64base encoded (optional, default: null).
 * @return VidiunPlayReadyLicenseDetails.
 */
VidiunPlayReadyDrmService.prototype.getLicenseDetails = function(callback, keyId, deviceId, deviceType, entryId, referrer){
	if(!entryId){
		entryId = null;
	}
	if(!referrer){
		referrer = null;
	}
	var vparams = {};
	this.client.addParam(vparams, 'keyId', keyId);
	this.client.addParam(vparams, 'deviceId', deviceId);
	this.client.addParam(vparams, 'deviceType', deviceType);
	this.client.addParam(vparams, 'entryId', entryId);
	this.client.addParam(vparams, 'referrer', referrer);
	this.client.queueServiceActionCall('playready_playreadydrm', 'getLicenseDetails', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Vidiun service: integration.
 * The available service actions:
 * @action dispatch Dispatch integration task.
 * @action notify .
 */
function VidiunIntegrationService(client){
	VidiunIntegrationService.super_.call(this);
	this.init(client);
}

util.inherits(VidiunIntegrationService, vidiun.VidiunServiceBase);
module.exports.VidiunIntegrationService = VidiunIntegrationService;

/**
 * Dispatch integration task.
 * @param data VidiunIntegrationJobData  (optional).
 * @param objectType string  (optional, enum: VidiunBatchJobObjectType).
 * @param objectId string  (optional).
 * @return int.
 */
VidiunIntegrationService.prototype.dispatch = function(callback, data, objectType, objectId){
	var vparams = {};
	this.client.addParam(vparams, 'data', vidiun.toParams(data));
	this.client.addParam(vparams, 'objectType', objectType);
	this.client.addParam(vparams, 'objectId', objectId);
	this.client.queueServiceActionCall('integration_integration', 'dispatch', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * .
 * @param id int integration job id (optional).
 * @return .
 */
VidiunIntegrationService.prototype.notify = function(callback, id){
	var vparams = {};
	this.client.addParam(vparams, 'id', id);
	this.client.queueServiceActionCall('integration_integration', 'notify', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Vidiun service: businessProcessServer.
 * The available service actions:
 * @action add Allows you to add a new Business-Process server object.
 * @action get Retrieve an Business-Process server object by id.
 * @action update Update an existing Business-Process server object.
 * @action updateStatus Update Business-Process server status by id.
 * @action delete Delete an Business-Process server object.
 * @action list list Business-Process server objects.
 */
function VidiunBusinessProcessServerService(client){
	VidiunBusinessProcessServerService.super_.call(this);
	this.init(client);
}

util.inherits(VidiunBusinessProcessServerService, vidiun.VidiunServiceBase);
module.exports.VidiunBusinessProcessServerService = VidiunBusinessProcessServerService;

/**
 * Allows you to add a new Business-Process server object.
 * @param businessProcessServer VidiunBusinessProcessServer  (optional).
 * @return VidiunBusinessProcessServer.
 */
VidiunBusinessProcessServerService.prototype.add = function(callback, businessProcessServer){
	var vparams = {};
	this.client.addParam(vparams, 'businessProcessServer', vidiun.toParams(businessProcessServer));
	this.client.queueServiceActionCall('businessprocessnotification_businessprocessserver', 'add', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Retrieve an Business-Process server object by id.
 * @param id int  (optional).
 * @return VidiunBusinessProcessServer.
 */
VidiunBusinessProcessServerService.prototype.get = function(callback, id){
	var vparams = {};
	this.client.addParam(vparams, 'id', id);
	this.client.queueServiceActionCall('businessprocessnotification_businessprocessserver', 'get', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Update an existing Business-Process server object.
 * @param id int  (optional).
 * @param businessProcessServer VidiunBusinessProcessServer  (optional).
 * @return VidiunBusinessProcessServer.
 */
VidiunBusinessProcessServerService.prototype.update = function(callback, id, businessProcessServer){
	var vparams = {};
	this.client.addParam(vparams, 'id', id);
	this.client.addParam(vparams, 'businessProcessServer', vidiun.toParams(businessProcessServer));
	this.client.queueServiceActionCall('businessprocessnotification_businessprocessserver', 'update', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Update Business-Process server status by id.
 * @param id int  (optional).
 * @param status string  (optional, enum: VidiunBusinessProcessServerStatus).
 * @return VidiunBusinessProcessServer.
 */
VidiunBusinessProcessServerService.prototype.updateStatus = function(callback, id, status){
	var vparams = {};
	this.client.addParam(vparams, 'id', id);
	this.client.addParam(vparams, 'status', status);
	this.client.queueServiceActionCall('businessprocessnotification_businessprocessserver', 'updateStatus', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Delete an Business-Process server object.
 * @param id int  (optional).
 * @return .
 */
VidiunBusinessProcessServerService.prototype.deleteAction = function(callback, id){
	var vparams = {};
	this.client.addParam(vparams, 'id', id);
	this.client.queueServiceActionCall('businessprocessnotification_businessprocessserver', 'delete', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * list Business-Process server objects.
 * @param filter VidiunBusinessProcessServerFilter  (optional, default: null).
 * @param pager VidiunFilterPager  (optional, default: null).
 * @return VidiunBusinessProcessServerListResponse.
 */
VidiunBusinessProcessServerService.prototype.listAction = function(callback, filter, pager){
	if(!filter){
		filter = null;
	}
	if(!pager){
		pager = null;
	}
	var vparams = {};
	if (filter !== null){
		this.client.addParam(vparams, 'filter', vidiun.toParams(filter));
	}
	if (pager !== null){
		this.client.addParam(vparams, 'pager', vidiun.toParams(pager));
	}
	this.client.queueServiceActionCall('businessprocessnotification_businessprocessserver', 'list', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Vidiun service: businessProcessCase.
 * The available service actions:
 * @action abort Abort business-process case.
 * @action list list business-process cases.
 */
function VidiunBusinessProcessCaseService(client){
	VidiunBusinessProcessCaseService.super_.call(this);
	this.init(client);
}

util.inherits(VidiunBusinessProcessCaseService, vidiun.VidiunServiceBase);
module.exports.VidiunBusinessProcessCaseService = VidiunBusinessProcessCaseService;

/**
 * Abort business-process case.
 * @param objectType string  (optional, enum: VidiunEventNotificationEventObjectType).
 * @param objectId string  (optional).
 * @param businessProcessStartNotificationTemplateId int  (optional).
 * @return .
 */
VidiunBusinessProcessCaseService.prototype.abort = function(callback, objectType, objectId, businessProcessStartNotificationTemplateId){
	var vparams = {};
	this.client.addParam(vparams, 'objectType', objectType);
	this.client.addParam(vparams, 'objectId', objectId);
	this.client.addParam(vparams, 'businessProcessStartNotificationTemplateId', businessProcessStartNotificationTemplateId);
	this.client.queueServiceActionCall('businessprocessnotification_businessprocesscase', 'abort', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * list business-process cases.
 * @param objectType string  (optional, enum: VidiunEventNotificationEventObjectType).
 * @param objectId string  (optional).
 * @return array.
 */
VidiunBusinessProcessCaseService.prototype.listAction = function(callback, objectType, objectId){
	var vparams = {};
	this.client.addParam(vparams, 'objectType', objectType);
	this.client.addParam(vparams, 'objectId', objectId);
	this.client.queueServiceActionCall('businessprocessnotification_businessprocesscase', 'list', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Vidiun service: quiz.
 * The available service actions:
 * @action add Allows to add a quiz to an entry.
 * @action update Allows to update a quiz.
 * @action get Allows to get a quiz.
 * @action list List quiz objects by filter and pager.
 * @action getUrl sends a with an api request for pdf from quiz object.
 */
function VidiunQuizService(client){
	VidiunQuizService.super_.call(this);
	this.init(client);
}

util.inherits(VidiunQuizService, vidiun.VidiunServiceBase);
module.exports.VidiunQuizService = VidiunQuizService;

/**
 * Allows to add a quiz to an entry.
 * @param entryId string  (optional).
 * @param quiz VidiunQuiz  (optional).
 * @return VidiunQuiz.
 */
VidiunQuizService.prototype.add = function(callback, entryId, quiz){
	var vparams = {};
	this.client.addParam(vparams, 'entryId', entryId);
	this.client.addParam(vparams, 'quiz', vidiun.toParams(quiz));
	this.client.queueServiceActionCall('quiz_quiz', 'add', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Allows to update a quiz.
 * @param entryId string  (optional).
 * @param quiz VidiunQuiz  (optional).
 * @return VidiunQuiz.
 */
VidiunQuizService.prototype.update = function(callback, entryId, quiz){
	var vparams = {};
	this.client.addParam(vparams, 'entryId', entryId);
	this.client.addParam(vparams, 'quiz', vidiun.toParams(quiz));
	this.client.queueServiceActionCall('quiz_quiz', 'update', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Allows to get a quiz.
 * @param entryId string  (optional).
 * @return VidiunQuiz.
 */
VidiunQuizService.prototype.get = function(callback, entryId){
	var vparams = {};
	this.client.addParam(vparams, 'entryId', entryId);
	this.client.queueServiceActionCall('quiz_quiz', 'get', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * List quiz objects by filter and pager.
 * @param filter VidiunQuizFilter  (optional, default: null).
 * @param pager VidiunFilterPager  (optional, default: null).
 * @return VidiunQuizListResponse.
 */
VidiunQuizService.prototype.listAction = function(callback, filter, pager){
	if(!filter){
		filter = null;
	}
	if(!pager){
		pager = null;
	}
	var vparams = {};
	if (filter !== null){
		this.client.addParam(vparams, 'filter', vidiun.toParams(filter));
	}
	if (pager !== null){
		this.client.addParam(vparams, 'pager', vidiun.toParams(pager));
	}
	this.client.queueServiceActionCall('quiz_quiz', 'list', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * sends a with an api request for pdf from quiz object.
 * @param entryId string  (optional).
 * @param quizOutputType int  (optional, enum: VidiunQuizOutputType).
 * @return string.
 */
VidiunQuizService.prototype.getUrl = function(callback, entryId, quizOutputType){
	var vparams = {};
	this.client.addParam(vparams, 'entryId', entryId);
	this.client.addParam(vparams, 'quizOutputType', quizOutputType);
	this.client.queueServiceActionCall('quiz_quiz', 'getUrl', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Vidiun service: scheduleEvent.
 * The available service actions:
 * @action add Allows you to add a new VidiunScheduleEvent object.
 * @action get Retrieve a VidiunScheduleEvent object by ID.
 * @action update Update an existing VidiunScheduleEvent object.
 * @action delete Mark the VidiunScheduleEvent object as deleted.
 * @action cancel Mark the VidiunScheduleEvent object as cancelled.
 * @action list List VidiunScheduleEvent objects.
 * @action addFromBulkUpload Add new bulk upload batch job.
 */
function VidiunScheduleEventService(client){
	VidiunScheduleEventService.super_.call(this);
	this.init(client);
}

util.inherits(VidiunScheduleEventService, vidiun.VidiunServiceBase);
module.exports.VidiunScheduleEventService = VidiunScheduleEventService;

/**
 * Allows you to add a new VidiunScheduleEvent object.
 * @param scheduleEvent VidiunScheduleEvent  (optional).
 * @return VidiunScheduleEvent.
 */
VidiunScheduleEventService.prototype.add = function(callback, scheduleEvent){
	var vparams = {};
	this.client.addParam(vparams, 'scheduleEvent', vidiun.toParams(scheduleEvent));
	this.client.queueServiceActionCall('schedule_scheduleevent', 'add', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Retrieve a VidiunScheduleEvent object by ID.
 * @param scheduleEventId int  (optional).
 * @return VidiunScheduleEvent.
 */
VidiunScheduleEventService.prototype.get = function(callback, scheduleEventId){
	var vparams = {};
	this.client.addParam(vparams, 'scheduleEventId', scheduleEventId);
	this.client.queueServiceActionCall('schedule_scheduleevent', 'get', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Update an existing VidiunScheduleEvent object.
 * @param scheduleEventId int  (optional).
 * @param scheduleEvent VidiunScheduleEvent Id (optional).
 * @return VidiunScheduleEvent.
 */
VidiunScheduleEventService.prototype.update = function(callback, scheduleEventId, scheduleEvent){
	var vparams = {};
	this.client.addParam(vparams, 'scheduleEventId', scheduleEventId);
	this.client.addParam(vparams, 'scheduleEvent', vidiun.toParams(scheduleEvent));
	this.client.queueServiceActionCall('schedule_scheduleevent', 'update', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Mark the VidiunScheduleEvent object as deleted.
 * @param scheduleEventId int  (optional).
 * @return VidiunScheduleEvent.
 */
VidiunScheduleEventService.prototype.deleteAction = function(callback, scheduleEventId){
	var vparams = {};
	this.client.addParam(vparams, 'scheduleEventId', scheduleEventId);
	this.client.queueServiceActionCall('schedule_scheduleevent', 'delete', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Mark the VidiunScheduleEvent object as cancelled.
 * @param scheduleEventId int  (optional).
 * @return VidiunScheduleEvent.
 */
VidiunScheduleEventService.prototype.cancel = function(callback, scheduleEventId){
	var vparams = {};
	this.client.addParam(vparams, 'scheduleEventId', scheduleEventId);
	this.client.queueServiceActionCall('schedule_scheduleevent', 'cancel', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * List VidiunScheduleEvent objects.
 * @param filter VidiunScheduleEventFilter  (optional, default: null).
 * @param pager VidiunFilterPager  (optional, default: null).
 * @return VidiunScheduleEventListResponse.
 */
VidiunScheduleEventService.prototype.listAction = function(callback, filter, pager){
	if(!filter){
		filter = null;
	}
	if(!pager){
		pager = null;
	}
	var vparams = {};
	if (filter !== null){
		this.client.addParam(vparams, 'filter', vidiun.toParams(filter));
	}
	if (pager !== null){
		this.client.addParam(vparams, 'pager', vidiun.toParams(pager));
	}
	this.client.queueServiceActionCall('schedule_scheduleevent', 'list', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Add new bulk upload batch job.
 * @param fileData file  (optional).
 * @param bulkUploadData VidiunBulkUploadICalJobData  (optional, default: null).
 * @return VidiunBulkUpload.
 */
VidiunScheduleEventService.prototype.addFromBulkUpload = function(callback, fileData, bulkUploadData){
	if(!bulkUploadData){
		bulkUploadData = null;
	}
	var vparams = {};
	var vfiles = {};
	this.client.addParam(vfiles, 'fileData', fileData);
	if (bulkUploadData !== null){
		this.client.addParam(vparams, 'bulkUploadData', vidiun.toParams(bulkUploadData));
	}
	this.client.queueServiceActionCall('schedule_scheduleevent', 'addFromBulkUpload', vparams, vfiles);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Vidiun service: scheduleResource.
 * The available service actions:
 * @action add Allows you to add a new VidiunScheduleResource object.
 * @action get Retrieve a VidiunScheduleResource object by ID.
 * @action update Update an existing VidiunScheduleResource object.
 * @action delete Mark the VidiunScheduleResource object as deleted.
 * @action list List VidiunScheduleResource objects.
 * @action addFromBulkUpload Add new bulk upload batch job.
 */
function VidiunScheduleResourceService(client){
	VidiunScheduleResourceService.super_.call(this);
	this.init(client);
}

util.inherits(VidiunScheduleResourceService, vidiun.VidiunServiceBase);
module.exports.VidiunScheduleResourceService = VidiunScheduleResourceService;

/**
 * Allows you to add a new VidiunScheduleResource object.
 * @param scheduleResource VidiunScheduleResource  (optional).
 * @return VidiunScheduleResource.
 */
VidiunScheduleResourceService.prototype.add = function(callback, scheduleResource){
	var vparams = {};
	this.client.addParam(vparams, 'scheduleResource', vidiun.toParams(scheduleResource));
	this.client.queueServiceActionCall('schedule_scheduleresource', 'add', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Retrieve a VidiunScheduleResource object by ID.
 * @param scheduleResourceId int  (optional).
 * @return VidiunScheduleResource.
 */
VidiunScheduleResourceService.prototype.get = function(callback, scheduleResourceId){
	var vparams = {};
	this.client.addParam(vparams, 'scheduleResourceId', scheduleResourceId);
	this.client.queueServiceActionCall('schedule_scheduleresource', 'get', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Update an existing VidiunScheduleResource object.
 * @param scheduleResourceId int  (optional).
 * @param scheduleResource VidiunScheduleResource Id (optional).
 * @return VidiunScheduleResource.
 */
VidiunScheduleResourceService.prototype.update = function(callback, scheduleResourceId, scheduleResource){
	var vparams = {};
	this.client.addParam(vparams, 'scheduleResourceId', scheduleResourceId);
	this.client.addParam(vparams, 'scheduleResource', vidiun.toParams(scheduleResource));
	this.client.queueServiceActionCall('schedule_scheduleresource', 'update', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Mark the VidiunScheduleResource object as deleted.
 * @param scheduleResourceId int  (optional).
 * @return VidiunScheduleResource.
 */
VidiunScheduleResourceService.prototype.deleteAction = function(callback, scheduleResourceId){
	var vparams = {};
	this.client.addParam(vparams, 'scheduleResourceId', scheduleResourceId);
	this.client.queueServiceActionCall('schedule_scheduleresource', 'delete', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * List VidiunScheduleResource objects.
 * @param filter VidiunScheduleResourceFilter  (optional, default: null).
 * @param pager VidiunFilterPager  (optional, default: null).
 * @return VidiunScheduleResourceListResponse.
 */
VidiunScheduleResourceService.prototype.listAction = function(callback, filter, pager){
	if(!filter){
		filter = null;
	}
	if(!pager){
		pager = null;
	}
	var vparams = {};
	if (filter !== null){
		this.client.addParam(vparams, 'filter', vidiun.toParams(filter));
	}
	if (pager !== null){
		this.client.addParam(vparams, 'pager', vidiun.toParams(pager));
	}
	this.client.queueServiceActionCall('schedule_scheduleresource', 'list', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Add new bulk upload batch job.
 * @param fileData file  (optional).
 * @param bulkUploadData VidiunBulkUploadCsvJobData  (optional, default: null).
 * @return VidiunBulkUpload.
 */
VidiunScheduleResourceService.prototype.addFromBulkUpload = function(callback, fileData, bulkUploadData){
	if(!bulkUploadData){
		bulkUploadData = null;
	}
	var vparams = {};
	var vfiles = {};
	this.client.addParam(vfiles, 'fileData', fileData);
	if (bulkUploadData !== null){
		this.client.addParam(vparams, 'bulkUploadData', vidiun.toParams(bulkUploadData));
	}
	this.client.queueServiceActionCall('schedule_scheduleresource', 'addFromBulkUpload', vparams, vfiles);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Vidiun service: scheduleEventResource.
 * The available service actions:
 * @action add Allows you to add a new VidiunScheduleEventResource object.
 * @action get Retrieve a VidiunScheduleEventResource object by ID.
 * @action update Update an existing VidiunScheduleEventResource object.
 * @action delete Mark the VidiunScheduleEventResource object as deleted.
 * @action list List VidiunScheduleEventResource objects.
 */
function VidiunScheduleEventResourceService(client){
	VidiunScheduleEventResourceService.super_.call(this);
	this.init(client);
}

util.inherits(VidiunScheduleEventResourceService, vidiun.VidiunServiceBase);
module.exports.VidiunScheduleEventResourceService = VidiunScheduleEventResourceService;

/**
 * Allows you to add a new VidiunScheduleEventResource object.
 * @param scheduleEventResource VidiunScheduleEventResource  (optional).
 * @return VidiunScheduleEventResource.
 */
VidiunScheduleEventResourceService.prototype.add = function(callback, scheduleEventResource){
	var vparams = {};
	this.client.addParam(vparams, 'scheduleEventResource', vidiun.toParams(scheduleEventResource));
	this.client.queueServiceActionCall('schedule_scheduleeventresource', 'add', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Retrieve a VidiunScheduleEventResource object by ID.
 * @param scheduleEventId int  (optional).
 * @param scheduleResourceId int  (optional).
 * @return VidiunScheduleEventResource.
 */
VidiunScheduleEventResourceService.prototype.get = function(callback, scheduleEventId, scheduleResourceId){
	var vparams = {};
	this.client.addParam(vparams, 'scheduleEventId', scheduleEventId);
	this.client.addParam(vparams, 'scheduleResourceId', scheduleResourceId);
	this.client.queueServiceActionCall('schedule_scheduleeventresource', 'get', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Update an existing VidiunScheduleEventResource object.
 * @param scheduleEventId int  (optional).
 * @param scheduleResourceId int  (optional).
 * @param scheduleEventResource VidiunScheduleEventResource  (optional).
 * @return VidiunScheduleEventResource.
 */
VidiunScheduleEventResourceService.prototype.update = function(callback, scheduleEventId, scheduleResourceId, scheduleEventResource){
	var vparams = {};
	this.client.addParam(vparams, 'scheduleEventId', scheduleEventId);
	this.client.addParam(vparams, 'scheduleResourceId', scheduleResourceId);
	this.client.addParam(vparams, 'scheduleEventResource', vidiun.toParams(scheduleEventResource));
	this.client.queueServiceActionCall('schedule_scheduleeventresource', 'update', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Mark the VidiunScheduleEventResource object as deleted.
 * @param scheduleEventId int  (optional).
 * @param scheduleResourceId int  (optional).
 * @return .
 */
VidiunScheduleEventResourceService.prototype.deleteAction = function(callback, scheduleEventId, scheduleResourceId){
	var vparams = {};
	this.client.addParam(vparams, 'scheduleEventId', scheduleEventId);
	this.client.addParam(vparams, 'scheduleResourceId', scheduleResourceId);
	this.client.queueServiceActionCall('schedule_scheduleeventresource', 'delete', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * List VidiunScheduleEventResource objects.
 * @param filter VidiunScheduleEventResourceFilter  (optional, default: null).
 * @param pager VidiunFilterPager  (optional, default: null).
 * @return VidiunScheduleEventResourceListResponse.
 */
VidiunScheduleEventResourceService.prototype.listAction = function(callback, filter, pager){
	if(!filter){
		filter = null;
	}
	if(!pager){
		pager = null;
	}
	var vparams = {};
	if (filter !== null){
		this.client.addParam(vparams, 'filter', vidiun.toParams(filter));
	}
	if (pager !== null){
		this.client.addParam(vparams, 'pager', vidiun.toParams(pager));
	}
	this.client.queueServiceActionCall('schedule_scheduleeventresource', 'list', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Vidiun service: systemPartner.
 * The available service actions:
 * @action get Retrieve all info about partner
 * This service gets partner id as parameter and accessable to the admin console partner only.
 * @action getUsage .
 * @action list .
 * @action updateStatus .
 * @action getAdminSession .
 * @action updateConfiguration .
 * @action getConfiguration .
 * @action getPackages .
 * @action getPackagesClassOfService .
 * @action getPackagesVertical .
 * @action getPlayerEmbedCodeTypes .
 * @action getPlayerDeliveryTypes .
 * @action resetUserPassword .
 * @action listUserLoginData .
 */
function VidiunSystemPartnerService(client){
	VidiunSystemPartnerService.super_.call(this);
	this.init(client);
}

util.inherits(VidiunSystemPartnerService, vidiun.VidiunServiceBase);
module.exports.VidiunSystemPartnerService = VidiunSystemPartnerService;

/**
 * Retrieve all info about partner
 * This service gets partner id as parameter and accessable to the admin console partner only.
 * @param partnerId int X (optional).
 * @return VidiunPartner.
 */
VidiunSystemPartnerService.prototype.get = function(callback, partnerId){
	var vparams = {};
	this.client.addParam(vparams, 'partnerId', partnerId);
	this.client.queueServiceActionCall('systempartner_systempartner', 'get', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * .
 * @param partnerFilter VidiunPartnerFilter  (optional, default: null).
 * @param usageFilter VidiunSystemPartnerUsageFilter  (optional, default: null).
 * @param pager VidiunFilterPager  (optional, default: null).
 * @return VidiunSystemPartnerUsageListResponse.
 */
VidiunSystemPartnerService.prototype.getUsage = function(callback, partnerFilter, usageFilter, pager){
	if(!partnerFilter){
		partnerFilter = null;
	}
	if(!usageFilter){
		usageFilter = null;
	}
	if(!pager){
		pager = null;
	}
	var vparams = {};
	if (partnerFilter !== null){
		this.client.addParam(vparams, 'partnerFilter', vidiun.toParams(partnerFilter));
	}
	if (usageFilter !== null){
		this.client.addParam(vparams, 'usageFilter', vidiun.toParams(usageFilter));
	}
	if (pager !== null){
		this.client.addParam(vparams, 'pager', vidiun.toParams(pager));
	}
	this.client.queueServiceActionCall('systempartner_systempartner', 'getUsage', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * .
 * @param filter VidiunPartnerFilter  (optional, default: null).
 * @param pager VidiunFilterPager  (optional, default: null).
 * @return VidiunPartnerListResponse.
 */
VidiunSystemPartnerService.prototype.listAction = function(callback, filter, pager){
	if(!filter){
		filter = null;
	}
	if(!pager){
		pager = null;
	}
	var vparams = {};
	if (filter !== null){
		this.client.addParam(vparams, 'filter', vidiun.toParams(filter));
	}
	if (pager !== null){
		this.client.addParam(vparams, 'pager', vidiun.toParams(pager));
	}
	this.client.queueServiceActionCall('systempartner_systempartner', 'list', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * .
 * @param id int  (optional).
 * @param status int  (optional, enum: VidiunPartnerStatus).
 * @param reason string  (optional).
 * @return .
 */
VidiunSystemPartnerService.prototype.updateStatus = function(callback, id, status, reason){
	var vparams = {};
	this.client.addParam(vparams, 'id', id);
	this.client.addParam(vparams, 'status', status);
	this.client.addParam(vparams, 'reason', reason);
	this.client.queueServiceActionCall('systempartner_systempartner', 'updateStatus', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * .
 * @param partnerId int  (optional).
 * @param userId string  (optional, default: null).
 * @return string.
 */
VidiunSystemPartnerService.prototype.getAdminSession = function(callback, partnerId, userId){
	if(!userId){
		userId = null;
	}
	var vparams = {};
	this.client.addParam(vparams, 'partnerId', partnerId);
	this.client.addParam(vparams, 'userId', userId);
	this.client.queueServiceActionCall('systempartner_systempartner', 'getAdminSession', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * .
 * @param partnerId int  (optional).
 * @param configuration VidiunSystemPartnerConfiguration  (optional).
 * @return .
 */
VidiunSystemPartnerService.prototype.updateConfiguration = function(callback, partnerId, configuration){
	var vparams = {};
	this.client.addParam(vparams, 'partnerId', partnerId);
	this.client.addParam(vparams, 'configuration', vidiun.toParams(configuration));
	this.client.queueServiceActionCall('systempartner_systempartner', 'updateConfiguration', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * .
 * @param partnerId int  (optional).
 * @return VidiunSystemPartnerConfiguration.
 */
VidiunSystemPartnerService.prototype.getConfiguration = function(callback, partnerId){
	var vparams = {};
	this.client.addParam(vparams, 'partnerId', partnerId);
	this.client.queueServiceActionCall('systempartner_systempartner', 'getConfiguration', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * .
 * @return array.
 */
VidiunSystemPartnerService.prototype.getPackages = function(callback){
	var vparams = {};
	this.client.queueServiceActionCall('systempartner_systempartner', 'getPackages', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * .
 * @return array.
 */
VidiunSystemPartnerService.prototype.getPackagesClassOfService = function(callback){
	var vparams = {};
	this.client.queueServiceActionCall('systempartner_systempartner', 'getPackagesClassOfService', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * .
 * @return array.
 */
VidiunSystemPartnerService.prototype.getPackagesVertical = function(callback){
	var vparams = {};
	this.client.queueServiceActionCall('systempartner_systempartner', 'getPackagesVertical', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * .
 * @return array.
 */
VidiunSystemPartnerService.prototype.getPlayerEmbedCodeTypes = function(callback){
	var vparams = {};
	this.client.queueServiceActionCall('systempartner_systempartner', 'getPlayerEmbedCodeTypes', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * .
 * @return array.
 */
VidiunSystemPartnerService.prototype.getPlayerDeliveryTypes = function(callback){
	var vparams = {};
	this.client.queueServiceActionCall('systempartner_systempartner', 'getPlayerDeliveryTypes', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * .
 * @param userId string  (optional).
 * @param partnerId int  (optional).
 * @param newPassword string  (optional).
 * @return .
 */
VidiunSystemPartnerService.prototype.resetUserPassword = function(callback, userId, partnerId, newPassword){
	var vparams = {};
	this.client.addParam(vparams, 'userId', userId);
	this.client.addParam(vparams, 'partnerId', partnerId);
	this.client.addParam(vparams, 'newPassword', newPassword);
	this.client.queueServiceActionCall('systempartner_systempartner', 'resetUserPassword', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * .
 * @param filter VidiunUserLoginDataFilter  (optional, default: null).
 * @param pager VidiunFilterPager  (optional, default: null).
 * @return VidiunUserLoginDataListResponse.
 */
VidiunSystemPartnerService.prototype.listUserLoginData = function(callback, filter, pager){
	if(!filter){
		filter = null;
	}
	if(!pager){
		pager = null;
	}
	var vparams = {};
	if (filter !== null){
		this.client.addParam(vparams, 'filter', vidiun.toParams(filter));
	}
	if (pager !== null){
		this.client.addParam(vparams, 'pager', vidiun.toParams(pager));
	}
	this.client.queueServiceActionCall('systempartner_systempartner', 'listUserLoginData', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Vidiun service: entryAdmin.
 * The available service actions:
 * @action get Get base entry by ID with no filters.
 * @action getByFlavorId Get base entry by flavor ID with no filters.
 * @action getTracks Get base entry by ID with no filters.
 * @action restoreDeletedEntry Restore deleted entry.
 */
function VidiunEntryAdminService(client){
	VidiunEntryAdminService.super_.call(this);
	this.init(client);
}

util.inherits(VidiunEntryAdminService, vidiun.VidiunServiceBase);
module.exports.VidiunEntryAdminService = VidiunEntryAdminService;

/**
 * Get base entry by ID with no filters.
 * @param entryId string Entry id (optional).
 * @param version int Desired version of the data (optional, default: -1).
 * @return VidiunBaseEntry.
 */
VidiunEntryAdminService.prototype.get = function(callback, entryId, version){
	if(!version){
		version = -1;
	}
	var vparams = {};
	this.client.addParam(vparams, 'entryId', entryId);
	this.client.addParam(vparams, 'version', version);
	this.client.queueServiceActionCall('adminconsole_entryadmin', 'get', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Get base entry by flavor ID with no filters.
 * @param flavorId string  (optional).
 * @param version int Desired version of the data (optional, default: -1).
 * @return VidiunBaseEntry.
 */
VidiunEntryAdminService.prototype.getByFlavorId = function(callback, flavorId, version){
	if(!version){
		version = -1;
	}
	var vparams = {};
	this.client.addParam(vparams, 'flavorId', flavorId);
	this.client.addParam(vparams, 'version', version);
	this.client.queueServiceActionCall('adminconsole_entryadmin', 'getByFlavorId', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Get base entry by ID with no filters.
 * @param entryId string Entry id (optional).
 * @return VidiunTrackEntryListResponse.
 */
VidiunEntryAdminService.prototype.getTracks = function(callback, entryId){
	var vparams = {};
	this.client.addParam(vparams, 'entryId', entryId);
	this.client.queueServiceActionCall('adminconsole_entryadmin', 'getTracks', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Restore deleted entry.
 * @param entryId string  (optional).
 * @return VidiunBaseEntry.
 */
VidiunEntryAdminService.prototype.restoreDeletedEntry = function(callback, entryId){
	var vparams = {};
	this.client.addParam(vparams, 'entryId', entryId);
	this.client.queueServiceActionCall('adminconsole_entryadmin', 'restoreDeletedEntry', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Vidiun service: uiConfAdmin.
 * The available service actions:
 * @action add Adds new UIConf with no partner limitation.
 * @action update Update an existing UIConf with no partner limitation.
 * @action get Retrieve a UIConf by id with no partner limitation.
 * @action delete Delete an existing UIConf with no partner limitation.
 * @action list Retrieve a list of available UIConfs  with no partner limitation.
 */
function VidiunUiConfAdminService(client){
	VidiunUiConfAdminService.super_.call(this);
	this.init(client);
}

util.inherits(VidiunUiConfAdminService, vidiun.VidiunServiceBase);
module.exports.VidiunUiConfAdminService = VidiunUiConfAdminService;

/**
 * Adds new UIConf with no partner limitation.
 * @param uiConf VidiunUiConfAdmin  (optional).
 * @return VidiunUiConfAdmin.
 */
VidiunUiConfAdminService.prototype.add = function(callback, uiConf){
	var vparams = {};
	this.client.addParam(vparams, 'uiConf', vidiun.toParams(uiConf));
	this.client.queueServiceActionCall('adminconsole_uiconfadmin', 'add', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Update an existing UIConf with no partner limitation.
 * @param id int  (optional).
 * @param uiConf VidiunUiConfAdmin  (optional).
 * @return VidiunUiConfAdmin.
 */
VidiunUiConfAdminService.prototype.update = function(callback, id, uiConf){
	var vparams = {};
	this.client.addParam(vparams, 'id', id);
	this.client.addParam(vparams, 'uiConf', vidiun.toParams(uiConf));
	this.client.queueServiceActionCall('adminconsole_uiconfadmin', 'update', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Retrieve a UIConf by id with no partner limitation.
 * @param id int  (optional).
 * @return VidiunUiConfAdmin.
 */
VidiunUiConfAdminService.prototype.get = function(callback, id){
	var vparams = {};
	this.client.addParam(vparams, 'id', id);
	this.client.queueServiceActionCall('adminconsole_uiconfadmin', 'get', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Delete an existing UIConf with no partner limitation.
 * @param id int  (optional).
 * @return .
 */
VidiunUiConfAdminService.prototype.deleteAction = function(callback, id){
	var vparams = {};
	this.client.addParam(vparams, 'id', id);
	this.client.queueServiceActionCall('adminconsole_uiconfadmin', 'delete', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * Retrieve a list of available UIConfs  with no partner limitation.
 * @param filter VidiunUiConfFilter  (optional, default: null).
 * @param pager VidiunFilterPager  (optional, default: null).
 * @return VidiunUiConfAdminListResponse.
 */
VidiunUiConfAdminService.prototype.listAction = function(callback, filter, pager){
	if(!filter){
		filter = null;
	}
	if(!pager){
		pager = null;
	}
	var vparams = {};
	if (filter !== null){
		this.client.addParam(vparams, 'filter', vidiun.toParams(filter));
	}
	if (pager !== null){
		this.client.addParam(vparams, 'pager', vidiun.toParams(pager));
	}
	this.client.queueServiceActionCall('adminconsole_uiconfadmin', 'list', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Vidiun service: reportAdmin.
 * The available service actions:
 * @action add .
 * @action get .
 * @action list .
 * @action update .
 * @action delete .
 * @action executeDebug .
 * @action getParameters .
 * @action getCsvUrl .
 */
function VidiunReportAdminService(client){
	VidiunReportAdminService.super_.call(this);
	this.init(client);
}

util.inherits(VidiunReportAdminService, vidiun.VidiunServiceBase);
module.exports.VidiunReportAdminService = VidiunReportAdminService;

/**
 * .
 * @param report VidiunReport  (optional).
 * @return VidiunReport.
 */
VidiunReportAdminService.prototype.add = function(callback, report){
	var vparams = {};
	this.client.addParam(vparams, 'report', vidiun.toParams(report));
	this.client.queueServiceActionCall('adminconsole_reportadmin', 'add', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * .
 * @param id int  (optional).
 * @return VidiunReport.
 */
VidiunReportAdminService.prototype.get = function(callback, id){
	var vparams = {};
	this.client.addParam(vparams, 'id', id);
	this.client.queueServiceActionCall('adminconsole_reportadmin', 'get', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * .
 * @param filter VidiunReportFilter  (optional, default: null).
 * @param pager VidiunFilterPager  (optional, default: null).
 * @return VidiunReportListResponse.
 */
VidiunReportAdminService.prototype.listAction = function(callback, filter, pager){
	if(!filter){
		filter = null;
	}
	if(!pager){
		pager = null;
	}
	var vparams = {};
	if (filter !== null){
		this.client.addParam(vparams, 'filter', vidiun.toParams(filter));
	}
	if (pager !== null){
		this.client.addParam(vparams, 'pager', vidiun.toParams(pager));
	}
	this.client.queueServiceActionCall('adminconsole_reportadmin', 'list', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * .
 * @param id int  (optional).
 * @param report VidiunReport  (optional).
 * @return VidiunReport.
 */
VidiunReportAdminService.prototype.update = function(callback, id, report){
	var vparams = {};
	this.client.addParam(vparams, 'id', id);
	this.client.addParam(vparams, 'report', vidiun.toParams(report));
	this.client.queueServiceActionCall('adminconsole_reportadmin', 'update', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * .
 * @param id int  (optional).
 * @return .
 */
VidiunReportAdminService.prototype.deleteAction = function(callback, id){
	var vparams = {};
	this.client.addParam(vparams, 'id', id);
	this.client.queueServiceActionCall('adminconsole_reportadmin', 'delete', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * .
 * @param id int  (optional).
 * @param params array  (optional, default: null).
 * @return VidiunReportResponse.
 */
VidiunReportAdminService.prototype.executeDebug = function(callback, id, params){
	if(!params){
		params = null;
	}
	var vparams = {};
	this.client.addParam(vparams, 'id', id);
	if(params !== null){
	for(var index in params)
	{
		var obj = params[index];
		this.client.addParam(vparams, 'params:' + index, vidiun.toParams(obj));
	}
	}
	this.client.queueServiceActionCall('adminconsole_reportadmin', 'executeDebug', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * .
 * @param id int  (optional).
 * @return array.
 */
VidiunReportAdminService.prototype.getParameters = function(callback, id){
	var vparams = {};
	this.client.addParam(vparams, 'id', id);
	this.client.queueServiceActionCall('adminconsole_reportadmin', 'getParameters', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * .
 * @param id int  (optional).
 * @param reportPartnerId int  (optional).
 * @return string.
 */
VidiunReportAdminService.prototype.getCsvUrl = function(callback, id, reportPartnerId){
	var vparams = {};
	this.client.addParam(vparams, 'id', id);
	this.client.addParam(vparams, 'reportPartnerId', reportPartnerId);
	this.client.queueServiceActionCall('adminconsole_reportadmin', 'getCsvUrl', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

/**
 *Class definition for the Vidiun service: vidiunInternalToolsSystemHelper.
 * The available service actions:
 * @action fromSecureString VS from Secure String.
 * @action iptocountry from ip to country.
 * @action getRemoteAddress .
 */
function VidiunVidiunInternalToolsSystemHelperService(client){
	VidiunVidiunInternalToolsSystemHelperService.super_.call(this);
	this.init(client);
}

util.inherits(VidiunVidiunInternalToolsSystemHelperService, vidiun.VidiunServiceBase);
module.exports.VidiunVidiunInternalToolsSystemHelperService = VidiunVidiunInternalToolsSystemHelperService;

/**
 * VS from Secure String.
 * @param str string  (optional).
 * @return VidiunInternalToolsSession.
 */
VidiunVidiunInternalToolsSystemHelperService.prototype.fromSecureString = function(callback, str){
	var vparams = {};
	this.client.addParam(vparams, 'str', str);
	this.client.queueServiceActionCall('vidiuninternaltools_vidiuninternaltoolssystemhelper', 'fromSecureString', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * from ip to country.
 * @param remote_addr string  (optional).
 * @return string.
 */
VidiunVidiunInternalToolsSystemHelperService.prototype.iptocountry = function(callback, remote_addr){
	var vparams = {};
	this.client.addParam(vparams, 'remote_addr', remote_addr);
	this.client.queueServiceActionCall('vidiuninternaltools_vidiuninternaltoolssystemhelper', 'iptocountry', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};
/**
 * .
 * @return string.
 */
VidiunVidiunInternalToolsSystemHelperService.prototype.getRemoteAddress = function(callback){
	var vparams = {};
	this.client.queueServiceActionCall('vidiuninternaltools_vidiuninternaltoolssystemhelper', 'getRemoteAddress', vparams);
	if (!this.client.isMultiRequest()){
		this.client.doQueue(callback);
	}
};

