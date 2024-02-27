import { AxiosHeaders } from "axios";

export interface IRequest {
  route: string;
  method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
  body: Object;
  headers?: Partial<AxiosHeaders>;
}
