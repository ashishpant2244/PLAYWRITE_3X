# Source Code vs Bytecode vs Binary Code

**File:** `Chapter_1/Hello.js` → `console.log("Hello Ashish");`

---

| Aspect | Source Code | Bytecode | Binary / Machine Code |
|--------|-------------|----------|----------------------|
| **What it is** | Human-readable code written in a programming language. | Intermediate representation between source and machine code. Executed by a virtual machine (e.g., V8, JVM). | Raw CPU instructions (1s and 0s) that the processor executes directly. |
| **Example** | `console.log("Hello Ashish");` | V8 ignition bytecode (not saved to disk) | `10101000 11001101 ...` or `.exe` / `.o` / ELF files |
| **Who reads it** | Humans (developers) | Virtual machine interpreter (e.g., V8, JVM) | CPU hardware |
| **File extension** | `.js`, `.py`, `.c`, `.java` etc. | None (in-memory), or `.class` (Java), `.pyc` (Python) | `.exe`, `.dll`, `.so`, `.o`, `.bin` |
| **Size (this example)** | **27 bytes** | ~200–400 bytes (in-memory V8 bytecode) | **~88 MB** (Node.exe binary — includes runtime + libraries) |
| **Hex dump** | `63 6f 6e 73 6f 6c 65 2e 6c 6f 67 28 22 48 65 6c 6c 6f 20 41 73 68 69 73 68 22 29 3b` | Internal V8 format (produced via `--print-bytecode` flag) | Binary ELF/PE format — machine instructions for x86-64 CPU |
| **Readability** | ✅ Highly readable | ❌ Hard to read (opcodes + registers) | ❌ Nearly impossible without disassembler |
| **Portability** | ✅ Cross-platform (runs anywhere Node is installed) | ⚠️ Platform-independent within same VM version | ❌ Platform-specific (Windows vs Linux vs macOS) |
| **Execution speed** | Slowest (parsed + compiled at runtime) | Fast (interpreted by VM) | Fastest (direct CPU execution) |
| **How it runs** | Node.js reads `.js` → parses to AST → compiles to bytecode → | V8 interprets bytecode → Hot code is JIT-compiled to machine code | CPU fetches, decodes, and executes machine instructions |
| **Transformation** | *Source Code* → **Parser** → *AST* → **Ignition (V8)** → *Bytecode* → **TurboFan (JIT)** → *Machine Code* | | |

---

## Visual Flow for `console.log("Hello Ashish");`

```
┌─────────────────────────────────────────────────────────────┐
│  SOURCE CODE          console.log("Hello Ashish");          │  ← You write this
│                     (27 bytes of UTF-8 text)                │
└──────────────────────┬──────────────────────────────────────┘
                       │
                       ▼
┌─────────────────────────────────────────────────────────────┐
│  PARSER (V8/Node.js)                                        │
│  Converts text → Abstract Syntax Tree (AST)                 │
└──────────────────────┬──────────────────────────────────────┘
                       │
                       ▼
┌─────────────────────────────────────────────────────────────┐
│  BYTECODE (Ignition Interpreter)                            │
│  LdaConstant [0]         # Load "Hello Ashish"              │
│  GetProperty [1]         # Get console.log function         │
│  CallUndefinedReceiver1  # Call it                          │
│  Return                  # Return undefined                  │
└──────────────────────┬──────────────────────────────────────┘
                       │
                       ▼ (Hot code gets JIT-compiled)
┌─────────────────────────────────────────────────────────────┐
│  MACHINE CODE (TurboFan Optimizer)                          │
│  mov rcx, [rsp+...]                                         │
│  call [node.dll+0xABCD]   # Call console.log implementation │
│  add rsp, 0x28                                              │
│  ret                                                        │
└─────────────────────────────────────────────────────────────┘
```

## Key Takeaway

| Layer | Analogy |
|-------|---------|
| **Source Code** (`.js`) | Recipe written in English |
| **Bytecode** | Translated cooking steps (still readable by chef) |
| **Binary/Machine Code** | Robot arm movements (raw electrical signals to motors) |

> **Source code** is for **humans**. **Machine code** is for **CPUs**. **Bytecode** sits in between — it's optimized for the virtual machine to interpret quickly while staying portable.
