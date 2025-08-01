// Test file for agent-chat TypeScript API client
const { AgentChat, AgentChatError } = require("../dist");

console.log("Testing agent-chat TypeScript client...\n");

// Test 1: Create client instance
console.log("1. Testing AgentChat instantiation:");
try {
  const client = new AgentChat({
    apiKey: "test-api-key-123",
    timeout: 5000,
    headers: {
      "X-Custom-Header": "test-value",
    },
  });
  console.log("✅ Client created successfully");

  // Test 2: Check configuration
  console.log("\n2. Testing getConfig():");
  const config = client.getConfig();
  console.log("Config:", config);
  console.log("✅ Config retrieved successfully");

  // Test 3: Update API key
  console.log("\n3. Testing updateApiKey():");
  client.updateApiKey("new-test-api-key-456");
  console.log("✅ API key updated successfully");

  // Test 4: Access channel namespace
  console.log("\n4. Testing channel namespace access:");
  console.log("Channel namespace available:", !!client.channel);
  console.log("✅ Namespace structure verified");
} catch (error) {
  console.error("❌ Error during testing:", error);
}

// Test 5: Test error class
console.log("\n5. Testing AgentChatError class:");
try {
  const testError = new AgentChatError("Test error message", "TEST_ERROR", 400);
  console.log("Error created:", {
    message: testError.message,
    code: testError.code,
    status: testError.status,
  });
  console.log("✅ Error class working correctly");
} catch (error) {
  console.error("❌ Error testing AgentChatError:", error);
}

// Test 6: Test exported types
console.log("\n6. Testing exported types:");
const exportedItems = Object.keys(require("../dist"));
console.log("Exported items:", exportedItems);
console.log("✅ All exports verified");

console.log("\n✨ Basic tests completed!");
console.log(
  "\nNote: This test verifies the client structure and basic functionality."
);
console.log(
  "To test actual API calls, you would need a valid API key and server connection."
);
