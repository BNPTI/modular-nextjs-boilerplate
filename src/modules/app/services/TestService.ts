import { ServiceBuilder } from "@/shared/contants/service.constant";

class TestService extends ServiceBuilder {
  readOne(dto: { id: string }) {
    return dto.id;
  }
}

export const testService = new TestService();
