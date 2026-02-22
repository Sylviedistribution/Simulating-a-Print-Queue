class Job {
  constructor(name, numberPages) {
    this.name = name;
    this.numberPages = numberPages;
  }
}

class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(value) {
    this.items.push(value); // Add to end
  }

  dequeue() {
    if (this.isEmpty()) return null;
    return this.items.shift(); // Remove from front
  }

  peek() {
    return this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  printQueue() {
    console.log("Queue State:");
    this.items.forEach((job, index) => {
      console.log(
        `Job ${index + 1} -> Name: ${job.name}, Pages: ${job.numberPages}`,
      );
    });
  }
}

class PrinterQueue extends Queue {
  constructor() {
    super();
  }

  addJob(job) {
    this.enqueue(job);
  }
  processJobs() {
    while (!this.isEmpty()) {
      const job = this.peek();

      console.log(
        `Processing job -> Name: ${job.name}, Pages: ${job.numberPages}`,
      );

      this.dequeue();
    }

    console.log("All jobs are processed.");
  }
}

/* ===== Simulation Debug Menu ===== */

function debugMenu() {
  const printer = new PrinterQueue();

  printer.addJob(new Job("Document_A", 5));
  printer.addJob(new Job("Document_B", 3));
  printer.addJob(new Job("Document_C", 10));

  console.log("\n=== Initial Queue ===");
  printer.printQueue();

  console.log("\n=== Processing Jobs ===");
  printer.processJobs();

  console.log("\n=== Queue After Processing ===");
  printer.printQueue();
}

// Run simulation
debugMenu();
