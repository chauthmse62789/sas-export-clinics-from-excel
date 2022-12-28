// key mapping in clinic table
const fieldsClinic = [
  "lisaCode",
  "category",
  "name",
  "address",
  "district",
  "phoneNumber",
  "workHours",
  "note",
  "city",
  "engName",
  "engAddress",
  "engDistrict",
  "engPhoneNumber",
  "engWorkHours",
  "engNote",
  "engCity",
  "website",
  "isDentistry",
  "isOutpatient",
  "isBoarding",
  "isSalaryAdvance",
  "isHealthInsuranceCard",
  "latitude",
  "longitude",
  "postalCode",
  "formattedAddress",
  "engFormattedAddress",
  "country",
  "countryCode",
];

/**
 * Convert 2 array, one with key, and one with value
 * @example
 * zip(['a','b'],['1','2']) ={ a:1, b:2 }
 */
function zip(arr1, arr2, result = {}) {
  arr1.forEach((key, i) => (result[key] = arr2[i]));
  return result;
}

const mappingClinicField = (item) => {
  if (!item) {
    return;
  }
  //  website type object : {text:'',hyperlink:'},
  //  website type string : ''
  const district = item?.district ? item?.district.toString() : "";
  const engDistrict = item?.engDistrict ? item?.engDistrict.toString() : "";
  const address = item?.address ? item?.address.toString() : "";
  const engAddress = item?.engAddress ? item?.engAddress.toString() : "";
  const note = item?.note ? item?.note.toString().trim() : "";
  const engNote = item?.engNote ? item?.engNote.toString().trim() : "";

  const city = item?.city ? item?.city.toString() : "";
  const engCity = item?.engCity ? item?.engCity.toString() : "";
  const phoneNumber = item?.phoneNumber ? item?.phoneNumber.toString() : "";
  const engPhoneNumber = item?.engPhoneNumber
    ? item?.engPhoneNumber.toString()
    : "";
  const website =
    typeof item?.website === "object" && item?.website !== null
      ? item?.website.text
      : item?.website;
  const csytNote =
    typeof item?.csytNote === "object" && item?.csytNote !== null
      ? item?.csytNote.result
      : item?.csytNote;
  const medicalNote =
    typeof item?.medicalNote === "object" && item?.medicalNote !== null
      ? item?.medicalNote.result
      : item?.csytNote;
  const isDentistry =
    typeof item?.isDentistry === "string" &&
    item?.isDentistry !== null &&
    item?.isDentistry === "Có"
      ? true
      : false;
  const isOutpatient =
    typeof item?.isOutpatient === "string" &&
    item?.isOutpatient !== null &&
    item?.isOutpatient === "Có"
      ? true
      : false;
  const isBoarding =
    typeof item?.isBoarding === "string" &&
    item?.isBoarding !== null &&
    item?.isBoarding === "Có"
      ? true
      : false;
  const isSalaryAdvance =
    typeof item?.isSalaryAdvance === "string" &&
    item?.isSalaryAdvance !== null &&
    item?.isSalaryAdvance === "Có"
      ? true
      : false;
  const isHealthInsuranceCard =
    typeof item?.isHealthInsuranceCard === "string" &&
    item?.isHealthInsuranceCard !== null &&
    item?.isHealthInsuranceCard === "Có"
      ? true
      : false;
  const geo = [
    item?.latitude ? Number(item?.latitude) : 0,
    item?.longitude ? Number(item?.longitude) : 0,
  ];

  const postalCode = item?.postalCode ? item?.postalCode.toString() : "";

  const latitude = item?.latitude ? item?.latitude.toString().trim() : "";
  const longitude = item?.longitude ? item?.longitude.toString().trim() : "";
  return {
    ...item,
    note: note,
    city: city,
    address: address,
    phoneNumber: phoneNumber,
    engAddress: engAddress,
    engPhoneNumber: engPhoneNumber,
    engCity: engCity,
    engDistrict: engDistrict,
    district: district,
    website: website,
    csytNote: csytNote,
    medicalNote: medicalNote,
    isDentistry: isDentistry,
    isOutpatient: isOutpatient,
    isBoarding: isBoarding,
    isSalaryAdvance: isSalaryAdvance,
    isHealthInsuranceCard: isHealthInsuranceCard,
    geo: geo,
    latitude: latitude,
    longitude: longitude,
    postalCode: postalCode,
    engNote: engNote,
  };
};

const mappingClinicData = (clinicData) => {
  // 2 field empty skip at first
  clinicData.splice(0, 1);
  const clinic = zip(fieldsClinic, clinicData);
  const mappingClinic = mappingClinicField(clinic);

  return mappingClinic;
};

module.exports = {
  mappingClinicData,
};
