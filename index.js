// agent-chat - A simple chat agent library
// Main entry point

class AgentChat {
  constructor(options = {}) {
    this.name = options.name || 'Agent';
    this.messages = [];
  }

  // Send a message
  send(message) {
    const msg = {
      sender: this.name,
      message: message,
      timestamp: new Date().toISOString()
    };
    this.messages.push(msg);
    return msg;
  }

  // Get all messages
  getMessages() {
    return this.messages;
  }

  // Clear all messages
  clear() {
    this.messages = [];
  }

  // Get message count
  getMessageCount() {
    return this.messages.length;
  }
}

module.exports = AgentChat;