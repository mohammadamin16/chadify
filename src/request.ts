import axios, { AxiosError, AxiosHeaders, AxiosResponse } from "axios";
import { IRequest } from "./core/types";

export async function sendRequest(
  req: IRequest,
  name?: string,
): Promise<AxiosResponse> {
  try {
    const response = await axios({
      method: req.method,
      url: req.route,
      data: req.body,
      headers: req.headers as AxiosHeaders,
    });
    if (name) {
      console.log(`Request to ${name} was successful!`);
      console.log(response.data);
    }
    console.log("data>", response.data);
    return response.data;
  } catch (e) {
    const error = e as AxiosError;
    const data = error.response?.data;
    try {
      console.error((data as any).message);
    } catch {
      if (data) {
        console.error(data);
      } else {
        console.error(e);
      }
    }
    throw e;
  }
}
