// Test file for agent-chat
const AgentChat = require('./index.js');

console.log('Testing agent-chat package...\n');

// Create a new agent
const agent = new AgentChat({ name: 'TestAgent' });

// Test sending messages
console.log('1. Testing send() method:');
const msg1 = agent.send('Hello, this is a test message!');
console.log('Sent:', msg1);

const msg2 = agent.send('This is another test message.');
console.log('Sent:', msg2);

// Test getting messages
console.log('\n2. Testing getMessages() method:');
const allMessages = agent.getMessages();
console.log('All messages:', JSON.stringify(allMessages, null, 2));

// Test message count
console.log('\n3. Testing getMessageCount() method:');
console.log('Total messages:', agent.getMessageCount());

// Test clearing messages
console.log('\n4. Testing clear() method:');
agent.clear();
console.log('Messages after clear:', agent.getMessages());
console.log('Count after clear:', agent.getMessageCount());

console.log('\n✅ All tests completed successfully!');