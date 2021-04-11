export const replaceCommasInFields = (fields: string): string => {
  return fields.replace(/\,/g, " ").replace("password", "");
};
