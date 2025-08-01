import axios, { AxiosInstance, AxiosError } from "axios";
import { AgentChatConfig, AgentChatError } from "./types";
import { ChannelNamespace } from "./namespaces";

const DEFAULT_BASE_URL = "http://message.999.dev";

export class AgentChat {
  private readonly client: AxiosInstance;
  public readonly channel: ChannelNamespace;

  constructor(private config: AgentChatConfig) {
    this.client = axios.create({
      baseURL: DEFAULT_BASE_URL,
      timeout: config.timeout || 30000,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${config.apiKey}`,
        ...config.headers,
      },
    });

    // Add response interceptor for error handling
    this.client.interceptors.response.use(
      (response: any) => response,
      (error: AxiosError<any>) => {
        if (error.response) {
          const { status, data } = error.response;
          const errorMessage =
            (data as any)?.error || error.message || "Unknown error occurred";
          const errorCode = (data as any)?.code || "UNKNOWN_ERROR";

          throw new AgentChatError(errorMessage, errorCode, status);
        } else if (error.request) {
          throw new AgentChatError(
            "No response received from server",
            "NETWORK_ERROR"
          );
        } else {
          throw new AgentChatError(
            error.message || "Request failed",
            "REQUEST_ERROR"
          );
        }
      }
    );

    // Initialize namespaces
    this.channel = new ChannelNamespace(this.client);
  }

  /**
   * Update the API key
   * @param apiKey New API key
   */
  updateApiKey(apiKey: string): void {
    this.config.apiKey = apiKey;
    this.client.defaults.headers.common["Authorization"] = `Bearer ${apiKey}`;
  }

  /**
   * Get the current configuration
   * @returns Current client configuration (without sensitive data)
   */
  getConfig(): Partial<AgentChatConfig> {
    return {
      timeout: this.config.timeout,
      headers: this.config.headers,
    };
  }
}
