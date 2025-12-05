import React, { useState, useEffect, useRef } from 'react';

interface TerminalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface HistoryEntry {
  command: string;
  output: string;
}

const Terminal: React.FC<TerminalProps> = ({ isOpen, onClose }) => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<HistoryEntry[]>([
    { command: '', output: 'OHissa Terminal v1.0.0\nType "help" for available commands.' }
  ]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const outputRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [history]);

  const executeCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    let output = '';

    switch (trimmedCmd) {
      case '':
        output = '';
        break;
      case 'help':
        output = `Available commands:
  help     - Show this help message
  clear    - Clear the terminal
  echo     - Echo text back
  info     - Show OHissa information
  products - List OHissa products
  exit     - Close terminal`;
        break;
      case 'clear':
        setHistory([]);
        return;
      case 'info':
        output = `OHissa - Così buono che fa bene
Location: Maremma, Toscana
Products: Tonno, Pesce Spada, Salmone, Ricciola
Technology: Ibernazione da fresco (ULT)`;
        break;
      case 'products':
        output = `OHissa Products:
  - Tonno a Pinna Gialla
  - Tonno Alalunga
  - Salmone
  - Pesce Spada`;
        break;
      case 'exit':
        onClose();
        return;
      default:
        if (trimmedCmd.startsWith('echo ')) {
          output = cmd.substring(5);
        } else {
          output = `Command not found: ${cmd}\nType "help" for available commands.`;
        }
    }

    setHistory(prev => [...prev, { command: cmd, output }]);
    setCommandHistory(prev => [...prev, cmd]);
    setHistoryIndex(-1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      executeCommand(input);
      setInput('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex = historyIndex === -1 
          ? commandHistory.length - 1 
          : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        setInput(commandHistory[newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex !== -1) {
        const newIndex = historyIndex + 1;
        if (newIndex >= commandHistory.length) {
          setHistoryIndex(-1);
          setInput('');
        } else {
          setHistoryIndex(newIndex);
          setInput(commandHistory[newIndex]);
        }
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        height: '400px',
        backgroundColor: '#1e1e1e',
        color: '#d4d4d4',
        fontFamily: 'Monaco, Consolas, "Courier New", monospace',
        fontSize: '14px',
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0 -4px 12px rgba(0,0,0,0.3)',
        borderTop: '2px solid #075659',
      }}
    >
      {/* Terminal Header */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '8px 16px',
          backgroundColor: '#075659',
          color: '#fff',
          fontWeight: 600,
        }}
      >
        <span>OHissa Terminal</span>
        <button
          onClick={onClose}
          style={{
            background: 'transparent',
            border: 'none',
            color: '#fff',
            fontSize: '20px',
            cursor: 'pointer',
            padding: '0 8px',
          }}
          aria-label="Close terminal"
        >
          ×
        </button>
      </div>

      {/* Terminal Output */}
      <div
        ref={outputRef}
        style={{
          flex: 1,
          overflowY: 'auto',
          padding: '16px',
          backgroundColor: '#1e1e1e',
        }}
      >
        {history.map((entry, index) => (
          <div key={index} style={{ marginBottom: '12px' }}>
            {entry.command && (
              <div style={{ color: '#4EC9B0' }}>
                <span style={{ color: '#569CD6' }}>$</span> {entry.command}
              </div>
            )}
            {entry.output && (
              <div style={{ whiteSpace: 'pre-wrap', marginTop: '4px' }}>
                {entry.output}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Terminal Input */}
      <form onSubmit={handleSubmit} style={{ padding: '12px 16px', backgroundColor: '#252526' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <span style={{ color: '#569CD6', marginRight: '8px' }}>$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            style={{
              flex: 1,
              background: 'transparent',
              border: 'none',
              color: '#d4d4d4',
              outline: 'none',
              fontFamily: 'inherit',
              fontSize: 'inherit',
            }}
            placeholder="Type a command..."
            aria-label="Terminal input"
          />
        </div>
      </form>
    </div>
  );
};

export default Terminal;
