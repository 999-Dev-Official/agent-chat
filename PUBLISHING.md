# Publishing agent-chat to npm

## Prerequisites

1. **Create an npm account** (if you don't have one):
   - Visit https://www.npmjs.com/signup
   - Create your account with username, email, and password

2. **Verify your email**:
   - Check your email for the verification link from npm
   - Click the link to verify your account

## Publishing Steps

### 1. Login to npm

Run the following command and enter your npm credentials:

```bash
npm login
```

You'll be prompted for:
- Username
- Password
- Email
- One-time password (if 2FA is enabled)

### 2. Verify you're logged in

```bash
npm whoami
```

This should display your npm username.

### 3. Final checks before publishing

- Ensure your package.json has all necessary fields
- Test your package one more time: `npm test`
- Check the files that will be included: `npm pack --dry-run`

### 4. Publish your package

```bash
npm publish
```

### 5. Verify publication

After publishing, your package will be available at:
https://www.npmjs.com/package/agent-chat

You can also verify by running:
```bash
npm view agent-chat
```

## Updating Your Package

When you make changes and want to publish a new version:

1. Update the version in package.json:
   - Patch release (bug fixes): `npm version patch`
   - Minor release (new features): `npm version minor`
   - Major release (breaking changes): `npm version major`

2. Publish the new version:
   ```bash
   npm publish
   ```

## Additional Security (Recommended)

### Enable 2FA for publishing:

```bash
npm profile enable-2fa auth-and-writes
```

This will require a one-time password from an authenticator app when publishing.

## Troubleshooting

- **E403 Forbidden**: The package name might be taken or you don't have permission
- **E401 Unauthorized**: You need to login with `npm login`
- **E402 Payment Required**: Private packages require a paid npm account

## Best Practices

1. Always test before publishing
2. Use semantic versioning
3. Keep your README up to date
4. Add a CHANGELOG.md for version history
5. Consider adding a LICENSE file
6. Use `npm publish --dry-run` to preview what will be published