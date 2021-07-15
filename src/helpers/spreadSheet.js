import { GoogleSpreadsheet } from "google-spreadsheet";
import {
  CLIENT_EMAIL,
  SPREADSHEET_ID,
  SHEET_ID,
  PRIVATE_KEY,
  userData,
} from "../api-config";
export const addRow = async (rowInfo) => {
  const doc = new GoogleSpreadsheet(SPREADSHEET_ID);
  await doc.useServiceAccountAuth({
    client_email: CLIENT_EMAIL,
    private_key: PRIVATE_KEY,
  });
  await doc.loadInfo();
  const sheet = doc.sheetsById[SHEET_ID];
  await sheet.addRow({ ...userData, ...rowInfo });
};
