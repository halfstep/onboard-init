import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum RequestStatus {
  PENDINGRESPONSE = "PENDINGRESPONSE",
  PENDINGRETRIEVAL = "PENDINGRETRIEVAL",
  COMPLETE = "COMPLETE"
}



export declare class DataResponse {
  readonly id: string;
  readonly DataRequest?: DataRequest;
  readonly timestamp: number;
  constructor(init: ModelInit<DataResponse>);
  static copyOf(source: DataResponse, mutator: (draft: MutableModel<DataResponse>) => MutableModel<DataResponse> | void): DataResponse;
}

export declare class DataRequest {
  readonly id: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly emailAddress: string;
  readonly ownerEmailAddress: string;
  readonly requestedData?: DataElement[];
  readonly createTimestamp: number;
  readonly status: RequestStatus | keyof typeof RequestStatus;
  constructor(init: ModelInit<DataRequest>);
  static copyOf(source: DataRequest, mutator: (draft: MutableModel<DataRequest>) => MutableModel<DataRequest> | void): DataRequest;
}

export declare class DataElement {
  readonly id: string;
  readonly key: string;
  readonly label: string;
  readonly dataValue?: string;
  readonly DataType?: DataType;
  readonly datarequestID: string;
  constructor(init: ModelInit<DataElement>);
  static copyOf(source: DataElement, mutator: (draft: MutableModel<DataElement>) => MutableModel<DataElement> | void): DataElement;
}

export declare class DataType {
  readonly id: string;
  readonly key: string;
  readonly version: string;
  readonly validation?: string;
  constructor(init: ModelInit<DataType>);
  static copyOf(source: DataType, mutator: (draft: MutableModel<DataType>) => MutableModel<DataType> | void): DataType;
}