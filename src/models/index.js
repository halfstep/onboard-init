// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const RequestStatus = {
  "PENDINGRESPONSE": "PENDINGRESPONSE",
  "PENDINGRETRIEVAL": "PENDINGRETRIEVAL",
  "COMPLETE": "COMPLETE"
};

const { DataResponse, DataRequest, DataElement, DataType } = initSchema(schema);

export {
  DataResponse,
  DataRequest,
  DataElement,
  DataType,
  RequestStatus
};