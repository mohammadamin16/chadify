import fs from "fs";
const FILE_NAME = "./db.json";

interface CacheData {
  token: string;
  name: string;
}

type CacheKey = keyof CacheData;

export function getCache(): CacheData {
  try {
    const data = fs.readFileSync(FILE_NAME, "utf8");
    return JSON.parse(data);
  } catch (e) {
    console.error(e);
    throw e;
  }
}

export function updateCache(newData: CacheData): void {
  try {
    const data = fs.readFileSync(FILE_NAME, "utf8");
    const parsedData = JSON.parse(data);
    fs.writeFileSync(FILE_NAME, JSON.stringify({ ...parsedData, ...newData }));
  } catch (e) {
    console.error(e);
  }
}

export function updateValue(key: CacheKey, value: string): void {
  try {
    const data = fs.readFileSync(FILE_NAME, "utf8");
    const parsedData = JSON.parse(data);
    fs.writeFileSync(
      FILE_NAME,
      JSON.stringify({ ...parsedData, [key]: value }),
    );
  } catch (e) {
    console.error(e);
  }
}

export function getValue(key: CacheKey): string {
  try {
    const data = fs.readFileSync(FILE_NAME, "utf8");
    const parsedData = JSON.parse(data);
    return parsedData[key];
  } catch (e) {
    console.error(e);
    throw e;
  }
}

function doesDBExist(): boolean {
  const result = fs.existsSync(FILE_NAME);
  console.log("DB exists?", result);
  return result;
}

export function initCache(): void {
  if (doesDBExist()) return;
  try {
    const stream = fs.createWriteStream(FILE_NAME);
    stream.write(JSON.stringify({}));
    stream.end();
    console.log("DB initialized!");
  } catch (e) {
    console.error(e);
  }
}
