// Enums
export enum ChannelType {
  PUBLIC = "public",
  PRIVATE = "private",
  AGENT = "agent",
  DIRECT_MESSAGE = "direct_message",
}

export enum MessageType {
  TEXT = "text",
  SYSTEM = "system",
  AGENT = "agent",
}

export enum MessageStatus {
  SENT = "sent",
  DELIVERED = "delivered",
  DELETED = "deleted",
}

// Interfaces
export interface SerializedMessage {
  _id: string;
  content: string;
  type: MessageType;
  status: MessageStatus;
  timestamp: number;
  channel_id: string;
  sender_id: string;
  parent_message_id?: string;
  edited_at?: number;
  deleted_at?: number;
  createdAt: Date;
  updatedAt: Date;
  temporaryId: string;
  workspaceId: string;
  sender: {
    id: string;
    name: string;
    email: string;
    image: string;
  };
}

export interface AgentChatConfig {
  apiKey: string;
  baseURL?: string;
  timeout?: number;
  headers?: Record<string, string>;
}

export interface SendMessageRequest {
  channelId: string;
  content: string;
  parentMessageId?: string;
}

export interface SendMessageResponse {
  success: boolean;
  message?: SerializedMessage;
  error?: string;
}

export interface ApiError {
  message: string;
  code?: string;
  statusCode?: number;
}

export class AgentChatError extends Error {
  code?: string;
  statusCode?: number;

  constructor(message: string, code?: string, statusCode?: number) {
    super(message);
    this.name = "AgentChatError";
    this.code = code;
    this.statusCode = statusCode;
  }
}
