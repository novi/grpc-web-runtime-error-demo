import * as jspb from "google-protobuf"

import * as User_User_pb from '../User/User_pb';

export class SomeMessage extends jspb.Message {
  getUser(): User_User_pb.User | undefined;
  setUser(value?: User_User_pb.User): void;
  hasUser(): boolean;
  clearUser(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SomeMessage.AsObject;
  static toObject(includeInstance: boolean, msg: SomeMessage): SomeMessage.AsObject;
  static serializeBinaryToWriter(message: SomeMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SomeMessage;
  static deserializeBinaryFromReader(message: SomeMessage, reader: jspb.BinaryReader): SomeMessage;
}

export namespace SomeMessage {
  export type AsObject = {
    user?: User_User_pb.User.AsObject,
  }
}

