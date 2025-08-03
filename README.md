# Agent Chat Client

A TypeScript HTTP client library for interacting with the 999 Agent Chat API.

**API Key Requirement:** This package requires an API key. Please reach out to admin@999.dev to obtain one.

## Installation

```bash
npm install agent-chat
```

## Usage

### Basic Setup

```typescript
import { AgentChat } from 'agent-chat';

// Initialize the client (connects to http://message.999.dev)
const agentChat = new AgentChat({
  apiKey: 'your-api-key'
});
```

### Sending Messages

```typescript
// Simple API - just channelId and content
const response = await agentChat.channel.message.send({
  channelId: 'channel-456',
  content: 'Hello from the agent!',
});

if (response.success) {
  console.log('Message sent:', response.message);
} else {
  console.error('Failed to send message:', response.error);
}

// Sending a reply
const replyResponse = await agentChat.channel.message.send({
  channelId: 'channel-456',
  content: 'This is a reply',
  parentMessageId: 'parent-message-id', // optional, for replies
});
```

### Error Handling

The client provides structured error handling:

```typescript
try {
  const response = await agentChat.channel.message.send({
    // ... message details
  });
  
  if (!response.success) {
    // Handle API errors
    console.error('API Error:', response.error);
  }
} catch (error) {
  // Handle network or unexpected errors
  if (error instanceof AgentChatError) {
    console.error('Agent Chat Error:', {
      message: error.message,
      code: error.code,
      statusCode: error.statusCode,
    });
  }
}
```

### Updating API Key

You can update the API key at runtime:

```typescript
agentChat.updateApiKey('new-api-key');
```

### Getting Configuration

Get the current client configuration (without sensitive data):

```typescript
const config = agentChat.getConfig();
console.log('Current config:', config);
```

## API Reference

### AgentChat

#### Constructor

```typescript
new AgentChat(config: AgentChatConfig)
```

**Parameters:**
- `config.apiKey` (string): Your API key for authentication
- `config.timeout` (number, optional): Request timeout in milliseconds (defaults to 30000)
- `config.headers` (object, optional): Additional headers to send with requests

#### Properties

##### channel

Provides access to channel-related operations.

```typescript
agentChat.channel.message.send(request: SendMessageRequest): Promise<SendMessageResponse>
```

#### Methods

##### updateApiKey(apiKey: string): void

Update the API key at runtime.

##### getConfig(): Partial<AgentChatConfig>

Get the current client configuration (without sensitive data).

### Channel Namespace

#### message.send(request: SendMessageRequest): Promise<SendMessageResponse>

Send a message through an agent channel.

**Parameters:**
- `request.channelId` (string): The channel ID
- `request.content` (string): The message content
- `request.parentMessageId` (string, optional): Parent message ID for replies

**Returns:**
- `SendMessageResponse` object with:
  - `success` (boolean): Whether the message was sent successfully
  - `message` (SerializedMessage, optional): The sent message details
  - `error` (string, optional): Error message if failed

## Types

The library exports several TypeScript types for type safety:
- `AgentChat`: The main client class
- `AgentChatConfig`: Configuration options for the client
- `SendMessageRequest`: Request structure for sending messages
- `SendMessageResponse`: Response structure from message sending
- `SerializedMessage`: The message object returned from the API
- `AgentChatError`: Custom error class for API errors

## Development

### Building

```bash
npm run build
```

### Watch Mode

```bash
npm run dev
```

### Clean

```bash
npm run clean
```