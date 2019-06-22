import express from "express";
import { Instance } from "sequelize";

export interface IExpressRequest extends express.Request {
  user?: any;
  session?: any;
}

export interface IUserAttributes {
  uuid?: string;
  email: string;
}

export interface IUserInstance extends Instance<IUserAttributes>, IUserAttributes {

}
