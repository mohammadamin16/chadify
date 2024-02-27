import { Routes } from "./core/snapp";
import { RequestGetConfig } from "./core/snapp/types/config";
import { getValue } from "./db/db";
import { sendRequest } from "./request";
import { getCleanPhoneNumber } from "./utils";

const defaultHeaders = {
  authority: "app.snapp.taxi",
  accept: "*/*",
  "accept-language": "en-US,en;q=0.7",
  "app-version": "pwa",
  baggage:
    "sentry-environment=production,sentry-release=passenger-pwa%40v17.12.1,sentry-public_key=b86c19afb49347ae808c64dc42f7e213,sentry-trace_id=8c574f06d3e64c02aa6177ef0c8f9334",
  "content-type": "application/json",
  locale: "fa-IR",
};

function getToken(): string {
  const token = getValue("token");
  return token;
}
async function sendOTP(phone: string): Promise<void> {
  console.log(`Sending OTP to ${phone}`);
  const data: RequestMutOTP = {
    cellphone: getCleanPhoneNumber(phone),
    attestation: {
      method: "skip",
      platform: "skip",
    },
    extra_methods: [],
  };
  await sendRequest(
    {
      route: Routes.mutotp,
      method: "POST",
      body: JSON.stringify(data),
      headers: { ...defaultHeaders },
    },
    "sendOTP",
  );
}

async function verifyOTP(phone: string, otp: string): Promise<void> {
  console.log(`Verifying OTP ${otp} for ${phone}`);
}

async function getConfig() {
  const data: RequestGetConfig = {
    locale: "fa-IR",
    device_type: 6,
    version_code: 2,
    os_version: "Android",
    device_name: "Chrome",
    referrer: 0,
  };
  const res = await sendRequest({
    route: Routes.config,
    method: "POST",
    body: JSON.stringify(data),
    headers: { ...defaultHeaders, Authorization: `Bearer ${getToken()}` },
  });
  console.log(res);
}
export default {
  sendOTP,
  verifyOTP,
  getConfig,
};
