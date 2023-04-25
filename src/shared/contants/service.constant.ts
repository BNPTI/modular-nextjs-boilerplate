/* eslint-disable @typescript-eslint/no-unused-vars */
export abstract class ServiceBuilder {
  readOne(dto: Record<string, any>) {
    throw new Error("Missing implementation");
  }
  readList(dto: Record<string, any>) {
    throw new Error("Missing implementation");
  }
  update(dto: Record<string, any>) {
    throw new Error("Missing implementation");
  }
  create(dto: Record<string, any>) {
    throw new Error("Missing implementation");
  }
  delete(dto: Record<string, any>) {
    throw new Error("Missing implementation");
  }
}
