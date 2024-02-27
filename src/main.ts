// import core from "./core";
import core from "./core";
import { initCache, updateValue } from "./db/db";

export async function main() {
  start();
}

async function start() {
  //  console.log("Welcome Chad!");
  //  try {
  //    await view.login();
  //  } catch {
  //    await view.login();
  //  }

  initCache();
  updateValue(
    "token",
    "eyJhbGciOiJFUzI1NiIsImtpZCI6IjQ1NFFSWTV0V1N6NDlrdzJaT05JQk5vVURYUGYyQlVWWGt4SzZlUHlnakUiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOlsicGFzc2VuZ2VyIl0sImV4cCI6MTcxMDIzMTIwNCwiaWF0IjoxNzA5MDIxNjA0LCJpc3MiOjEsImp0aSI6IkU5LzgyZFZJRWU2bUJZWXBKR043T1FiOEs0UEY2a1ZjblVyUCtxcHNhVlEiLCJzaWQiOiIyY3dUTnVCRG9hRU9XZzVvNHJUNlJwclBGWjAiLCJzdWIiOiI0eE0xMlhFd3hOUmpRYTMifQ.dmkQZheJJ9pPAl5r_lxU-AyH4-47EyeDwo--unR84MwPB9YfusEOb54Rh9dgSdiAB3WN1oa8dmpLMcA6fDU7OQ",
  );
  core.getConfig();
}
