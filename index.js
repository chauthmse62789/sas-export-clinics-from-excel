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

app.get("/clinics/update", async (req, res) => {
  try {
    const listCodeNeedUpdated = [
      "BVMED",
      "BVTDHN",
      "BVPSAC",
      "BVQDMD",
      "VINMEC",
      "NKKIMSNA",
      "YKVPCL",
      "PKVTBH01",
      "NKPDUONG",
      "PKYKTMTC",
      "NKMOT",
      "PKBVDHYD",
      "NKSTAR",
      "NKNC",
      "CAREPLUS",
      "NKSDTP",
      "MEKOMED",
      "PKQTSGQ7",
      "PKTDNT",
    ];

    let raw = fs.readFileSync("exports-clinics.json");
    let data = JSON.parse(raw);

    let tempArr = [];
    listCodeNeedUpdated.map((code) => {
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

app.get("/clinics/add-new", async (req, res) => {
  try {
    const addNewClinicsListByLisaCode = [
      "MEDICBD",
      "BVSGPR",
      "PK246TH",
      "NKHAIAU",
      "MEDIPTM",
      "BVDATH",
      "PKDKJH",
      "NKBAQ7",
      "BERNARD",
      "MEDICBL",
      "BVDKQTHL",
      "MATSUOKA",
      "BVANVIET",
      "NKKIMQ12",
      "NKKIMQ7",
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

app.get("/clinics/addition-22-clinics", async (req, res) => {
  try {
    const addNewClinicsListByLisaCode = [
      "BVAS", // code from file July excel
      "BVBNDTU", // code from file July excel
      "CAHBD", // code from file July excel
      "BVDHYHP", // code from file July excel
      "BVBDDN", // code from file July excel
      "BVDKDN", // code from file July excel
      "BVGDDN", // code from file July excel
      "BVDKHVT", // code from file July excel
      "BVDKHMBN", // code from file July excel
      "BVHMMH", // code from file July excel
      "BVDKHN", // code from file July excel

      "BVDHYD", // code from file December excel
      "BVDHYD2", // code from file December excel
      "BVHV", // code from file December excel
      "RAFFLESM", // code from file December excel
      "FMPHCM", // code from file December excel
      "CARE1", // code from file December excel
      "PKDKHS", // code from file December excel
      "RAFFLESN", // code from file December excel
      "FMPHN", // code from file December excel
      "PKDKHSHN", // code from file December excel
      "RAFLESVT", // code from file December excel
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

app.get("/clinics/add-new-5-clinics", async (req, res) => {
  try {
    const addNewClinicsListByLisaCode = [
      "PKHNTH",
      "FVC",
      "NKKIMQ6",
      "NKKIMTDM",
      "NKBAQ3",
    ];

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

app.get("/clinics/add-1-delete-6-clinics", async (req, res) => {
  try {
    const addNewClinicsListByLisaCode = ["BVDHYHN"];

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
