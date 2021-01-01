/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateDataResponse = /* GraphQL */ `
  subscription OnCreateDataResponse {
    onCreateDataResponse {
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
export const onUpdateDataResponse = /* GraphQL */ `
  subscription OnUpdateDataResponse {
    onUpdateDataResponse {
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
export const onDeleteDataResponse = /* GraphQL */ `
  subscription OnDeleteDataResponse {
    onDeleteDataResponse {
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
export const onCreateDataRequest = /* GraphQL */ `
  subscription OnCreateDataRequest {
    onCreateDataRequest {
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
export const onUpdateDataRequest = /* GraphQL */ `
  subscription OnUpdateDataRequest {
    onUpdateDataRequest {
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
export const onDeleteDataRequest = /* GraphQL */ `
  subscription OnDeleteDataRequest {
    onDeleteDataRequest {
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
export const onCreateDataElement = /* GraphQL */ `
  subscription OnCreateDataElement {
    onCreateDataElement {
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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const onUpdateDataElement = /* GraphQL */ `
  subscription OnUpdateDataElement {
    onUpdateDataElement {
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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const onDeleteDataElement = /* GraphQL */ `
  subscription OnDeleteDataElement {
    onDeleteDataElement {
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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const onCreateDataType = /* GraphQL */ `
  subscription OnCreateDataType {
    onCreateDataType {
      id
      key
      version
      validation
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateDataType = /* GraphQL */ `
  subscription OnUpdateDataType {
    onUpdateDataType {
      id
      key
      version
      validation
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteDataType = /* GraphQL */ `
  subscription OnDeleteDataType {
    onDeleteDataType {
      id
      key
      version
      validation
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
