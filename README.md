# agent-chat

A simple chat agent library for Node.js applications.

## Installation

```bash
npm install agent-chat
```

## Usage

```javascript
const AgentChat = require('agent-chat');

// Create a new agent
const agent = new AgentChat({ name: 'MyAgent' });

// Send messages
agent.send('Hello, world!');
agent.send('How can I help you today?');

// Get all messages
const messages = agent.getMessages();
console.log(messages);

// Get message count
console.log(`Total messages: ${agent.getMessageCount()}`);

// Clear messages
agent.clear();
```

## API

### `new AgentChat(options)`

Creates a new AgentChat instance.

- `options.name` (String): The name of the agent (default: 'Agent')

### `send(message)`

Sends a message and returns the message object with timestamp.

### `getMessages()`

Returns an array of all messages.

### `getMessageCount()`

Returns the total number of messages.

### `clear()`

Clears all messages.

## License

ISC