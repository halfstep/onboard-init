/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createDataResponse = /* GraphQL */ `
  mutation CreateDataResponse(
    $input: CreateDataResponseInput!
    $condition: ModelDataResponseConditionInput
  ) {
    createDataResponse(input: $input, condition: $condition) {
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
export const updateDataResponse = /* GraphQL */ `
  mutation UpdateDataResponse(
    $input: UpdateDataResponseInput!
    $condition: ModelDataResponseConditionInput
  ) {
    updateDataResponse(input: $input, condition: $condition) {
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
export const deleteDataResponse = /* GraphQL */ `
  mutation DeleteDataResponse(
    $input: DeleteDataResponseInput!
    $condition: ModelDataResponseConditionInput
  ) {
    deleteDataResponse(input: $input, condition: $condition) {
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
export const createDataRequest = /* GraphQL */ `
  mutation CreateDataRequest(
    $input: CreateDataRequestInput!
    $condition: ModelDataRequestConditionInput
  ) {
    createDataRequest(input: $input, condition: $condition) {
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
export const updateDataRequest = /* GraphQL */ `
  mutation UpdateDataRequest(
    $input: UpdateDataRequestInput!
    $condition: ModelDataRequestConditionInput
  ) {
    updateDataRequest(input: $input, condition: $condition) {
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
export const deleteDataRequestDup = /* GraphQL */ `
  mutation DeleteDataRequest(
    $input: DeleteDataRequestInput!
    $condition: ModelDataRequestConditionInput
  ) {
    deleteDataRequest(input: $input, condition: $condition) {
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
export const createDataElement = /* GraphQL */ `
  mutation CreateDataElement(
    $input: CreateDataElementInput!
    $condition: ModelDataElementConditionInput
  ) {
    createDataElement(input: $input, condition: $condition) {
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
export const updateDataElement = /* GraphQL */ `
  mutation UpdateDataElement(
    $input: UpdateDataElementInput!
    $condition: ModelDataElementConditionInput
  ) {
    updateDataElement(input: $input, condition: $condition) {
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
export const deleteDataElement = /* GraphQL */ `
  mutation DeleteDataElement(
    $input: DeleteDataElementInput!
    $condition: ModelDataElementConditionInput
  ) {
    deleteDataElement(input: $input, condition: $condition) {
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
export const createDataType = /* GraphQL */ `
  mutation CreateDataType(
    $input: CreateDataTypeInput!
    $condition: ModelDataTypeConditionInput
  ) {
    createDataType(input: $input, condition: $condition) {
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
export const updateDataType = /* GraphQL */ `
  mutation UpdateDataType(
    $input: UpdateDataTypeInput!
    $condition: ModelDataTypeConditionInput
  ) {
    updateDataType(input: $input, condition: $condition) {
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
export const deleteDataType = /* GraphQL */ `
  mutation DeleteDataType(
    $input: DeleteDataTypeInput!
    $condition: ModelDataTypeConditionInput
  ) {
    deleteDataType(input: $input, condition: $condition) {
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
