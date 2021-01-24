const express = require("express");
const connectDB = require("./config/db");
const PORT = process.env.PORT || 5000;
const app = express();

// middleware
app.use(express.json({ extended: false }));

// Connect Database
connectDB();

// Define routes
app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/contacts", require("./routes/contacts"));

app.listen(PORT, () =>
    console.log(`Server listening at http://localhost:${PORT}`)
);
