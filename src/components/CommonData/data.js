export const username = localStorage.getItem("email");
export const dataYear = [
  1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002,
  2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015,
  2016, 2017, 2018, 2019, 2020, 2021,
];
export const dataMonth = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
export const dataDay = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31,
];
export const dataHour = [
  "0SA",
  "1SA",
  "2SA",
  "3SA",
  "4SA",
  "5SA",
  "6SA",
  "7SA",
  "8SA",
  "9SA",
  "10SA",
  "11SA",
  "12SA",
  "1CH",
  "2CH",
  "3CH",
  "4CH",
  "5CH",
  "6CH",
  "7CH",
  "8CH",
  "9CH",
  "10CH",
  "11CH",
];
export const header = {
  Authorization: "Bearer " + localStorage.getItem("token"),
  "Content-Type": "application/json",
};
export const dataRecord = [
  { value: 5, label: "5" },
  { value: 10, label: "10" },
  { value: 20, label: "20" },
];
export const dataEquipment = ["Máy tính", "Mobiel"];
