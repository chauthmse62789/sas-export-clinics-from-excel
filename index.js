const express = require("express");
const app = express();
const port = 3000;
var Excel = require("exceljs");
const fs = require("fs");

const { exportReport } = require("./services/clinics.services");

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/clinics/generates", async (req, res) => {
  try {
    const { fileBase64 } = req.body;

    var buf = new Buffer.from(fileBase64, "base64");
    let excelData = await exportReport(buf);

    for (const clinic of excelData) {
    }

    res.send({
      success: true,
      data: excelData,
    });
  } catch (error) {
    throw new Error(error);
  }
});

app.get("/clinics/add-new", async (req, res) => {
  try {
    const addNewClinicsListByLisaCode = [
      "PKDKJHTB",
      "PKDKJHTD",
      "PKDKJHBD",
      "BV175",
    ];

    let raw = fs.readFileSync("exports-clinics.json");
    let data = JSON.parse(raw);

    let tempArr = [];
    addNewClinicsListByLisaCode.map((code) => {
      data.filter((item) => {
        if (code === item.lisaCode) {
          console.log(item);
          tempArr.push(item);
        }
      });
    });

    res.send({
      total: tempArr.length,
      data: tempArr,
    });
  } catch (error) {
    throw new Error(error);
  }
});

app.get("/clinics/delete-2-clinics", async (req, res) => {
  try {
    const addNewClinicsListByLisaCode = ["VIETSING", "NKSO"];

    let raw = fs.readFileSync("exports-clinics-27122022.json");
    let data = JSON.parse(raw);

    let tempArr = [];
    addNewClinicsListByLisaCode.map((code) => {
      data.filter((item) => {
        if (code === item.lisaCode) {
          console.log(item);
          tempArr.push(item);
        }
      });
    });

    res.send({
      total: tempArr.length,
      data: tempArr,
    });
  } catch (error) {
    throw new Error(error);
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
