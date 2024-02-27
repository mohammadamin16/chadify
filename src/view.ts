import { input, select } from "@inquirer/prompts";
import core from "./core";

async function login() {
  const phoneNumber = await input({ message: "Enter your phone number" });
  await core.sendOTP(phoneNumber);
  const otp = await input({ message: "Enter OTP" });
  await core.verifyOTP(phoneNumber, otp);
}

enum CHOICES {
  GET_A_RIDE = "Get a Ride",
  EXIT = "Exit",
}
async function show_menu() {
  const choices: { name: string; value: string; description?: string }[] =
    Object.values(CHOICES).map((choice) => ({
      name: choice,
      value: choice,
    }));
  const answer = await select({
    message: "Please select an option, Chad!",
    choices,
  });
  switch (answer) {
    case CHOICES.GET_A_RIDE:
      console.log("Getting a ride...");
      break;
    case CHOICES.EXIT:
      console.log("Goodbye!");
      break;
  }
  console.log(answer);
}

export default {
  login,
  show_menu,
};
