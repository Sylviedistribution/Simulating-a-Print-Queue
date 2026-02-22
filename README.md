# Printer Queue Simulation

## Overview

This project implements a simple **Printer Queue Simulation** using JavaScript classes. The system mimics how a real printer processes print jobs using the **FIFO (First-In-First-Out)** principle with a queue data structure.

## Features

- Queue implementation with basic operations:
  - enqueue()
  - dequeue()
  - peek()
  - isEmpty()
- Printer queue simulation
- Job processing in order of arrival
- Debug simulation menu

## Classes

### Job Class
Represents a print job containing:
- `name`: Document name
- `numberPages`: Number of pages to print

### Queue Class
Implements a basic queue structure supporting:
- Adding elements to the queue
- Removing elements from the queue
- Viewing the front element
- Checking if the queue is empty

### PrinterQueue Class
Extends the Queue class and adds printer-specific behavior:
- Add print jobs
- Process jobs sequentially

## How to Run

```bash
node printerQueue.js
```

## Testing the Simulation

The `debugMenu()` function automatically:

1. Creates a printer queue
2. Adds sample print jobs
3. Displays the initial queue state
4. Processes all jobs
5. Displays the queue after processing

## Example Output

```
=== Initial Queue ===
Queue State:
Job 1 -> Name: Document_A, Pages: 5
Job 2 -> Name: Document_B, Pages: 3
Job 3 -> Name: Document_C, Pages: 10

=== Processing Jobs ===
Processing job -> Name: Document_A, Pages: 5
Processing job -> Name: Document_B, Pages: 3
Processing job -> Name: Document_C, Pages: 10

All jobs are processed.

=== Queue After Processing ===
Queue State:
```

## Complexity

- Enqueue: O(1)
- Dequeue (using shift): O(n)
- Peek: O(1)

## Author

Sylvestre IBOMBO GAKOSSO

