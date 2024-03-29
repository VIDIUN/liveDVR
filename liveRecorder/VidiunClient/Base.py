# ===================================================================================================
#                           _  __     _ _
#                          | |/ /__ _| | |_ _  _ _ _ __ _
#                          | ' </ _` | |  _| || | '_/ _` |
#                          |_|\_\__,_|_|\__|\_,_|_| \__,_|
#
# This file is part of the Vidiun Collaborative Media Suite which allows users
# to do with audio, video, and animation what Wiki platfroms allow them to do with
# text.
#
# Copyright (C) 2006-2011  Vidiun Inc.
#
# This program is free software: you can redistribute it and/or modify
# it under the terms of the GNU Affero General Public License as
# published by the Free Software Foundation, either version 3 of the
# License, or (at your option) any later version.
#
# This program is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU Affero General Public License for more details.
#
# You should have received a copy of the GNU Affero General Public License
# along with this program.  If not, see <http:#www.gnu.org/licenses/>.
#
# @ignore
# ===================================================================================================
import hashlib
import json

# Service response formats
VIDIUN_SERVICE_FORMAT_JSON = 1
VIDIUN_SERVICE_FORMAT_XML  = 2
VIDIUN_SERVICE_FORMAT_PHP  = 3

# Xml utility functions
def getXmlNodeText(xmlNode):
    if xmlNode.firstChild == None:
        return ''
    return xmlNode.firstChild.nodeValue

def getXmlNodeBool(xmlNode):
    text = getXmlNodeText(xmlNode)
    if text == '0':
        return False
    elif text == '1':
        return True
    return None

def getXmlNodeInt(xmlNode):
    text = getXmlNodeText(xmlNode)
    if text == '':
        return None
    try:
        return int(text)
    except ValueError:
        return None

def getXmlNodeFloat(xmlNode):
    text = getXmlNodeText(xmlNode)
    if text == '':
        return None
    try:
        return float(text)
    except ValueError:
        return None

def getChildNodeByXPath(node, nodePath):
    for curName in nodePath.split('/'):
        nextChild = None
        for childNode in node.childNodes:
            if childNode.nodeName == curName:
                nextChild = childNode
                break
        if nextChild == None:
            return None
        node = nextChild
    return node

# Request parameters container
class VidiunParams(object):
    def __init__(self):
        self.params = {}

    def get(self):
        return self.params

    def put(self, key, value = None):
        if value == None:
            self.params[key + '__null'] = ''
        elif isinstance(value, unicode):
            self.params[key] = value.encode('utf8')
        else:
            self.params[key] = str(value)

    def update(self, props):
        self.params.update(props)

    def add(self, key, objectProps):
        self.params[key] = objectProps

    def addObjectIfDefined(self, key, obj):
        if obj == NotImplemented:
            return
        if obj == None:
            self.put(key)
            return
        self.add(key, obj.toParams().get())

    def addArrayIfDefined(self, key, array):
        if array == NotImplemented:
            return
        if array == None:
            self.put(key)
            return
        if len(array) == 0:
            self.params[key] = {'-': ''}
        else:
            arr = []
            for curIndex in xrange(len(array)):
                arr.append(array[curIndex].toParams().get())
            self.params[key] = arr

    def addStringIfDefined(self, key, value):
        if value != NotImplemented:
            self.put(key, value)

    def addIntIfDefined(self, key, value):
        if value != NotImplemented:
            self.put(key, value)

    def addStringEnumIfDefined(self, key, value):
        if value == NotImplemented:
            return
        if value == None:
            self.put(key)
            return
        if type(value) == str:
            self.addStringIfDefined(key, value)
        else:
            self.addStringIfDefined(key, value.getValue())

    def addIntEnumIfDefined(self, key, value):
        if value == NotImplemented:
            return
        if value == None:
            self.put(key)
            return
        if type(value) == int:
            self.addIntIfDefined(key, value)
        else:
            self.addIntIfDefined(key, value.getValue())

    def addFloatIfDefined(self, key, value):
        if value != NotImplemented:
            self.put(key, value)

    def addBoolIfDefined(self, key, value):
        if value == NotImplemented:
            return
        if value == None:
            self.put(key)
            return
        if value:
            self.put(key, '1')
        else:
            self.put(key, '0')

    def sort(self, params):
        for key in params:
            if isinstance(params[key], dict):
                params[key] = self.sort(params[key])
                
        sortedKeys = sorted(params.keys())
        sortedDict = {}
        for key in sortedKeys:
            sortedDict[key] = params[key]
            
        return sortedDict
        
    def toJson(self):
        return json.dumps(self.params)
        
    def signature(self, params = None):
        if params == None:
            params = self.params
        params = self.sort(params)
        return self.md5(self.toJson())

    @staticmethod
    def md5(str):
        m = hashlib.md5()
        m.update(str)
        return m.digest().encode('hex')

# Request files container
class VidiunFiles(object):
    def __init__(self):
        self.params = {}

    def get(self):
        return self.params

    def put(self, key, value):
        self.params[key] = value

    def update(self, props):
        self.params.update(props)

# Vidiun objects factory
class VidiunObjectFactory(object):
    objectFactories = {}

    @staticmethod
    def create(objectNode, expectedType):
        objTypeNode = getChildNodeByXPath(objectNode, 'objectType')
        if objTypeNode == None:
            return None
        objType = getXmlNodeText(objTypeNode)
        if not VidiunObjectFactory.objectFactories.has_key(objType):
            objType = expectedType.__name__        
        result = VidiunObjectFactory.objectFactories[objType]()
        if not isinstance(result, expectedType):
            raise VidiunClientException("Unexpected object type '%s'" % objType, VidiunClientException.ERROR_INVALID_OBJECT_TYPE)
        result.fromXml(objectNode)
        return result

    @staticmethod
    def createArray(arrayNode, expectedElemType):
        results = []
        for arrayElemNode in arrayNode.childNodes:
            results.append(VidiunObjectFactory.create(arrayElemNode, expectedElemType))
        return results

    @staticmethod
    def createMap(mapNode, expectedElemType):
        results = {}
        for mapElemNode in mapNode.childNodes:
            keyNode = getChildNodeByXPath(mapElemNode, 'itemKey')
            key = getXmlNodeText(keyNode)
            results[key] = VidiunObjectFactory.create(mapElemNode, expectedElemType)
        return results

    @staticmethod
    def registerObjects(objs):
        VidiunObjectFactory.objectFactories.update(objs)

# Abstract base class for all client objects
class VidiunObjectBase(object):
    def __init__(self, 
            relatedObjects=NotImplemented):

        # @var map of VidiunListResponse
        # @readonly
        self.relatedObjects = relatedObjects
        
        from VidiunClient.Plugins.Core import VidiunListResponse
        VidiunObjectBase.PROPERTY_LOADERS = {
            'relatedObjects': (VidiunObjectFactory.createMap, VidiunListResponse) 
        }
    
    def fromXmlImpl(self, node, propList):
        for childNode in node.childNodes:
            nodeName = childNode.nodeName
            if not propList.has_key(nodeName):
                continue
            propLoader = propList[nodeName]
            if type(propLoader) == tuple:
                (func, param) = propLoader
                loadedValue = func(childNode, param)
            else:
                func = propLoader
                loadedValue = func(childNode)
            setattr(self, nodeName, loadedValue)

    def fromXml(self, node):
        self.fromXmlImpl(node, VidiunObjectBase.PROPERTY_LOADERS)
        pass
    
    def toParams(self):
        result = VidiunParams()
        result.put('objectType', 'VidiunObjectBase')
        return result

    def getRelatedObjects(self):
        return self.relatedObjects

    def setRelatedObjects(self, newRelatedObjects):
        self.relatedObjects = newRelatedObjects

# Abstract base class for all client services
class VidiunServiceBase(object):
    def __init__(self, client = None):
        self.client = client
        
    def setClient(self, client):
        self.client = client

# Exception class for server errors
class VidiunException(Exception):
    def __init__(self, message, code, header = None):
        self.code = code
        self.message = message
        self.header = header

    def __str__(self):
        return "%s (%s) \n Header: %s" % (self.message, self.code, self.header)

# Exception class for client errors
class VidiunClientException(Exception):
    ERROR_GENERIC = -1
    ERROR_INVALID_XML = -2
    ERROR_FORMAT_NOT_SUPPORTED = -3
    ERROR_CONNECTION_FAILED = -4
    ERROR_READ_FAILED = -5
    ERROR_INVALID_PARTNER_ID = -6
    ERROR_INVALID_OBJECT_TYPE = -7
    ERROR_RESULT_NOT_FOUND = -8
    ERROR_READ_TIMEOUT = -9
    ERROR_READ_GZIP_FAILED = -10
  
    def __init__(self, message, code):
        self.code = code
        self.message = message

    def __str__(self):
        return "%s (%s)" % (self.message, self.code)

# Client configuration class
class VidiunConfiguration(object):
    # Constructs new Vidiun configuration object
    def __init__(self, serviceUrl = "http://www.vidiun.com", logger = None):
        self.logger                     = logger
        self.serviceUrl                 = serviceUrl
        self.format                     = VIDIUN_SERVICE_FORMAT_XML
        self.requestTimeout             = 120
        
    # Set logger to get vidiun client debug logs
    def setLogger(self, log):
        self.logger = log
        
    # Gets the logger (internal client use)
    def getLogger(self):
        return self.logger

# Client plugin interface class
class IVidiunClientPlugin(object):
    # @return VidiunClientPlugin
    @staticmethod
    def get():
        raise NotImplementedError
        
    # @return array<VidiunServiceBase>
    def getServices(self):
        raise NotImplementedError
        
    # @return string
    def getName(self):
        raise NotImplementedError
        
# Client plugin base class
class VidiunClientPlugin(IVidiunClientPlugin):
    pass

# Vidiun enums factory
class VidiunEnumsFactory(object):
    enumFactories = {}

    @staticmethod
    def create(enumValue, enumType):
        if not VidiunEnumsFactory.enumFactories.has_key(enumType):
            raise VidiunClientException("Unrecognized enum '%s'" % enumType, VidiunClientException.ERROR_INVALID_OBJECT_TYPE)
        return VidiunEnumsFactory.enumFactories[enumType](enumValue)

    @staticmethod
    def createInt(enumNode, enumType):
        enumValue = getXmlNodeInt(enumNode)
        if enumValue == None:
            return None
        return VidiunEnumsFactory.create(enumValue, enumType)

    @staticmethod
    def createString(enumNode, enumType):
        enumValue = getXmlNodeText(enumNode)
        if enumValue == '':
            return None
        return VidiunEnumsFactory.create(enumValue, enumType)

    @staticmethod
    def registerEnums(objs):
        VidiunEnumsFactory.enumFactories.update(objs)

# Implement to get Vidiun Client logs
class IVidiunLogger(object):
    def log(self, msg):
        raise NotImplementedError
