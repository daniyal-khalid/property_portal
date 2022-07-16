const express = require("express");
const app = express();
const cors = require("cors");
const connectionDB = require("./Connection/connection");
const authRoute = require("./Routes/auth");
const userRoute = require("./Routes/users");
const propertyRoute = require("./Routes/properties");
const cookieparser = require("cookie-parser");
const dotenv = require("dotenv");




var bodyParser = require("body-parser");

//DB connection
connectionDB();
dotenv.config();
app.use(cors());
app.use(cookieparser());
app.use(express.json()); // for json


// app.use(cors({ credentials: true, origin: "http://localhost:3000" }));


app.use("/auth", authRoute);
app.use("/users", userRoute);
app.use("/properties", propertyRoute);

// app.use(bodyParser.urlencoded({ extended: true })) // for form data
// Public Folder

app.use(express.static("./public"));

// app.use(express.urlencoded({ extended: false }));
//middleware error handling

app.use((err, req, res, next) => {
  console.log("i am middleware", req.body);
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

const PORT = 8000;

app.listen(PORT, () => {
  console.log(`app is listen at ${PORT}`);
});
