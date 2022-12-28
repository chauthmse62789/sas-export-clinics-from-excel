const ExcelJS = require("exceljs");
const { mappingClinicData } = require("../utils/mapping-clinics");

const exportReport = async (buffer) => {
  let wb = new ExcelJS.Workbook();
  let jsonData = [];
  await wb.xlsx.load(buffer);
  let ws = wb.getWorksheet("ALL");
  ws.eachRow({ includeEmpty: true }, function (row, rowNumber) {
    // excel data start with row 13
    if (rowNumber <= 2) {
      return;
    }
    let data = mappingClinicData(row.values);
    jsonData = [...jsonData, data];
  });
  return jsonData;
};

module.exports = {
  exportReport,
};
