/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getDataResponse = /* GraphQL */ `
  query GetDataResponse($id: ID!) {
    getDataResponse(id: $id) {
      id
      timestamp
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      DataRequest {
        id
        firstName
        lastName
        emailAddress
        ownerEmailAddress
        createTimestamp
        status
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const listDataResponses = /* GraphQL */ `
  query ListDataResponses(
    $filter: ModelDataResponseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDataResponses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        timestamp
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncDataResponses = /* GraphQL */ `
  query SyncDataResponses(
    $filter: ModelDataResponseFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncDataResponses(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        timestamp
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const listDataRequests = /* GraphQL */ `
  query ListDataRequests(
    $filter: ModelDataRequestFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDataRequests(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        firstName
        lastName
        emailAddress
        ownerEmailAddress
        createTimestamp
        status
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getDataRequest = /* GraphQL */ `
  query GetDataRequest($id: ID!) {
    getDataRequest(id: $id) {
      id
      firstName
      lastName
      emailAddress
      ownerEmailAddress
      createTimestamp
      status
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      requestedData {
        nextToken
        startedAt
      }
    }
  }
`;
export const syncDataRequests = /* GraphQL */ `
  query SyncDataRequests(
    $filter: ModelDataRequestFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncDataRequests(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        firstName
        lastName
        emailAddress
        ownerEmailAddress
        createTimestamp
        status
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getDataElement = /* GraphQL */ `
  query GetDataElement($id: ID!) {
    getDataElement(id: $id) {
      id
      key
      label
      dataValue
      datarequestID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      DataType {
        id
        key
        version
        validation
        label
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const listDataElements = /* GraphQL */ `
  query ListDataElements(
    $filter: ModelDataElementFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDataElements(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        key
        label
        dataValue
        datarequestID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncDataElements = /* GraphQL */ `
  query SyncDataElements(
    $filter: ModelDataElementFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncDataElements(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        key
        label
        dataValue
        datarequestID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const listDataTypes = /* GraphQL */ `
  query ListDataTypes(
    $filter: ModelDataTypeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDataTypes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        key
        version
        validation
        label
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getDataType = /* GraphQL */ `
  query GetDataType($id: ID!) {
    getDataType(id: $id) {
      id
      key
      version
      validation
      label
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const syncDataTypes = /* GraphQL */ `
  query SyncDataTypes(
    $filter: ModelDataTypeFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncDataTypes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        key
        version
        validation
        label
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
