import bodyParser from "body-parser";
import express from "express";
import connectDB from "../config/database";
import OrganizationConfig from "./routes/OrganizationConfig.routes";
import ProtocolConfig from './routes/ProtocolConfig.routes';
import ProtocolCollateralConfig from './routes/ProtocolCollateralConfig.routes';
import LenderConfig from "./routes/LenderConfig.routes";
import LenderApi from "./routes/LenderApi.routes";
import Product from "./routes/Product.routes";
import LoanApplicationRequest from "./routes/LoanApplicationRequest.routes";

const app = express();

// Connect to MongoDB
connectDB();

// Express configuration
app.set("port", process.env.PORT || 5000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// @route   GET /
// @desc    Test Base API
// @access  Public
app.get("/", (_req, res) => {
  res.send("API Running success");
});

app.use("/OrganizationConfig", OrganizationConfig);
app.use("/ProtocolConfig",ProtocolConfig);
app.use("/ProtocolCollateralConfig",ProtocolCollateralConfig);
app.use("/LenderConfig",LenderConfig);
app.use("/LenderApi",LenderApi);
app.use("/Product",Product);
app.use("/LoanApplicationRequest",LoanApplicationRequest);

const port = app.get("port");
const server = app.listen(port, () =>
  console.log(`Server started on port ${port}`)
);

export default server;
