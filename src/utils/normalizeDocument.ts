import { Document } from "mongoose";

export function normalizeDocument<T extends Document>(doc: T): Omit<T, "_id" | "__v"> & { id: string } {
  const obj = doc.toObject();
  const { _id, __v, ...rest } = obj;
  return { ...rest, id: _id.toString() };
}
