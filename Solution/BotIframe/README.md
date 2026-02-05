# Bot Iframe PCF Control

Embeds the Copilot Studio Website channel via an iframe in Power Apps.

## Prerequisites

1. **Node.js** (v18 or later) - https://nodejs.org
2. **Power Platform CLI** - Install via:
   ```
   npm install -g pac
   ```
   Or download from: https://aka.ms/PowerAppsCLI

## Quick Start (Build & Deploy)

### Step 1: Install dependencies
```bash
cd BotIframe
npm install
```

### Step 2: Build the control
```bash
npm run build
```

### Step 3: Create Solution Package

```bash
# Create Solution folder (one level up)
mkdir -p ../Solution
cd ../Solution

# Initialize solution
pac solution init --publisher-name DemoPublisher --publisher-prefix demo

# Add reference to PCF control
pac solution add-reference --path ../BotIframe

# Build the solution zip (requires .NET SDK)
dotnet build --configuration Release
```

The zip file will be at: `bin/Release/Solution.zip`

### Alternative: Push directly to environment (for testing)
```bash
cd BotIframe
pac auth create   # Login to your environment
pac pcf push --publisher-prefix demo
```

## Usage in Power Apps

### Option 1: Environment Variable (Recommended)
1. Create Environment Variable `EV__BOT_URL` (Type: Text)
2. Set value to your Copilot Website channel URL
3. Add control to Canvas App
4. Bind `Bot URL` property to the environment variable

### Option 2: App Variable
```
// In App.OnStart
Set(BOT_URL, "https://your-copilot-website-channel-url");
```
Then bind the control's `Bot URL` property to `BOT_URL`.

## Getting the Website Channel URL

1. Go to Copilot Studio
2. Open your bot
3. Go to **Channels** > **Website**
4. Publish the bot
5. Copy the embed URL

## Styling

- Monochrome design (white background, black text, 1px borders)
- No shadows
- Container stretches to fill parent

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Blank iframe | Bot not published, or blocked by CSP. Check DevTools Console. |
| Mixed content | Ensure URL is HTTPS |
| Error banner shows | Check URL is correct and bot is published |

## Files

- `ControlManifest.Input.xml` - Control definition
- `index.ts` - TypeScript logic
- `styles.css` - Monochrome CSS
- `strings/BotIframe.1033.resx` - Localization strings
