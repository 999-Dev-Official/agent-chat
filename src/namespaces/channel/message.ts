import { AxiosInstance } from "axios";
import {
  SendMessageRequest,
  SendMessageResponse,
  AgentChatError,
} from "../../types";

export class MessageNamespace {
  constructor(private client: AxiosInstance) {}

  /**
   * Send a message through an agent channel
   * @param request SendMessageRequest object containing message details
   * @returns Promise<SendMessageResponse> containing the sent message or error
   */
  async send(request: SendMessageRequest): Promise<SendMessageResponse> {
    try {
      // Generate a temporary ID for the message (client-side)
      const temporaryId = `temp_${Date.now()}_${Math.random()
        .toString(36)
        .substr(2, 9)}`;

      const payload = {
        channelId: request.channelId,
        content: request.content,
        parentMessageId: request.parentMessageId,
        temporaryId,
        timestamp: Date.now(),
      };

      const response = await this.client.post<SendMessageResponse>(
        "/api/agent/channel/message",
        payload
      );

      return response.data;
    } catch (error) {
      if (error instanceof AgentChatError) {
        return {
          success: false,
          error: error.message,
        };
      }

      // Unexpected error
      return {
        success: false,
        error: "An unexpected error occurred",
      };
    }
  }
}
