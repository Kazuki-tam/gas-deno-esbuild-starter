/**
 * main function
 */
declare const global: {
  [x: string]: () => void;
};

function main() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName("シート1");
  console.log(sheet);
}

global.main = main;
