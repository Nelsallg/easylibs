export function getMimeType(base64String: string, get: string = "both"): string {
  const extension = base64String
    .split(",")[0]
    .split(":")[1]
    .split(";")[0]
    .split("/")[1];
  const fileType = base64String
    .split(",")[0]
    .split(":")[1]
    .split(";")[0]
    .split("/")[0];

  if ("type" === get) {
    return fileType;
  }
  if ("extension" === get) {
    return extension;
  }
  return fileType + "/" + extension;
}
