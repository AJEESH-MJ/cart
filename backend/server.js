const express = require("express");
const path = require("path");
const { notFound, errorHandler } = require("./middleware/error.middleware");

// Start Express Server
const app = express();
const port = process.env.PORT || 5000;

// Configurations
require("colors");
require("dotenv").config({ path: "./backend/.env" });

require("./config/db");

// Express Middleware Services
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// API Routes
app.use("/api/staff", require("./routes/staff.routes"));
app.use("/api/customer", require("./routes/customer.routes"));
app.use("/api/garment", require("./routes/garment.routes"));
app.use("/api/template", require("./routes/template.routes"));
app.use("/api/order", require("./routes/order.routes"));
app.use("/api/invoice", require("./routes/invoice.routes"));

// ------------------------
// Serve Frontend in Production
// ------------------------
if (process.env.NODE_ENV === "production") {
  const __dirname = path.resolve();
  app.use(express.static(path.join(__dirname, "/frontend/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("Server is running...");
  });
}

// Error Handling Middleware
app.use(notFound);
app.use(errorHandler);

// Listen to Express Server
app.listen(port, (err) => {
  if (err) console.log(`Listening error : ${err.message}`.bgRed);
  console.log(`Server listening on http://localhost:${port}`.blue);
});
