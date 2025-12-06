# OHissa Terminal

A built-in terminal component for the OHissa website that provides an interactive command-line interface.

## Usage

### Opening the Terminal

Press **`Ctrl + \``** (or **`Cmd + \``** on Mac) to toggle the terminal window.

Alternatively, you can close the terminal by:
- Clicking the **×** button in the terminal header
- Running the `exit` command
- Pressing **`Ctrl + \``** again

### Available Commands

- **`help`** - Display all available commands
- **`info`** - Show OHissa company information
- **`products`** - List all OHissa products
- **`echo [text]`** - Echo the provided text back to the terminal
- **`clear`** - Clear the terminal history
- **`exit`** - Close the terminal window

### Features

- ✅ **Keyboard Shortcut**: Quick toggle with `Ctrl + \``
- ✅ **Command History**: Navigate previous commands using ↑ and ↓ arrow keys
- ✅ **Auto-focus**: Terminal input is automatically focused when opened
- ✅ **Auto-scroll**: Terminal output automatically scrolls to show latest commands
- ✅ **OHissa Themed**: Matches the OHissa brand colors and design

## Examples

```bash
$ help
Available commands:
  help     - Show this help message
  clear    - Clear the terminal
  echo     - Echo text back
  info     - Show OHissa information
  products - List OHissa products
  exit     - Close terminal

$ info
OHissa - Così buono che fa bene
Location: Maremma, Toscana
Products: Tonno, Pesce Spada, Salmone, Ricciola
Technology: Ibernazione da fresco (ULT)

$ products
OHissa Products:
  - Tonno a Pinna Gialla
  - Tonno Alalunga
  - Salmone
  - Pesce Spada

$ echo Hello OHissa!
Hello OHissa!
```

## Technical Details

### Component Location
- **File**: `src/components/Terminal.tsx`
- **Integration**: Added to `App.jsx` with global keyboard listener

### Styling
- **Theme**: Dark theme matching VS Code aesthetic
- **Colors**: OHissa teal (#075659) for header and accents
- **Position**: Fixed at bottom of viewport
- **Height**: 400px
- **Z-index**: 9999 (appears above all other content)

### State Management
- Terminal state is managed in the main App component
- Command history is maintained within the Terminal component
- Terminal visibility persists across page navigation within the app

## Browser Support

The terminal works in all modern browsers that support:
- ES6+ JavaScript
- React 19
- CSS3 flexbox
- Keyboard events

Tested on:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

## Development

To modify the terminal:

1. Edit `src/components/Terminal.tsx` to add new commands or change styling
2. Update `src/App.jsx` if you need to change the keyboard shortcut
3. Run `npm run lint` to check for any issues
4. Test the terminal by running `npm run dev`

### Adding New Commands

To add a new command, edit the `executeCommand` function in `Terminal.tsx`:

```typescript
switch (trimmedCmd) {
  // ... existing cases ...
  case 'yournewcommand':
    output = 'Your command output here';
    break;
}
```
