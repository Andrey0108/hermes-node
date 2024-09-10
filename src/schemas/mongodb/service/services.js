import { Schema } from "mongoose";

export const permissionsSchema = Schema({
  id_service: String,
  id_categoryService: String,
  name: String,
  price: String,
  status: String,
});
