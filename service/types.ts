import express from "express";

export interface IExpressRequest extends express.Request {
  user?: any;
  session?: any;
}
