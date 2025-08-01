import { AxiosInstance } from "axios";
import { MessageNamespace } from "./message";

export class ChannelNamespace {
  public readonly message: MessageNamespace;

  constructor(client: AxiosInstance) {
    this.message = new MessageNamespace(client);
  }
}
