import { Response } from "express";
import { ValidationError } from "../Response/Error/ValidationError";
import { AuthorizationError } from "../Response/Error/AuthorizationError";
import { HTTP_STATUS_CODE } from "./StatusCode";

export abstract class AbstractController {
  protected generateErrorResponse<T>(error: unknown, res: Response<T>) {
    console.log(error);
    if (error instanceof ValidationError) {
      return res.status(error.getStatus()).send(error.getError());
    }
    if (error instanceof AuthorizationError) {
      return res.status(error.getStatus()).send(error.getError());
    }
    return res.status(HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR).send();
  }

  protected generateSingleResponse(res: Response, resource: any) {
    return res.status(HTTP_STATUS_CODE.OK).send({
      resource: resource,
    });
  }
}
