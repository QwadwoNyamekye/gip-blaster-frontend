import { ReceivingDashboardModule } from "./dashboard.module";

describe("DashboardModule", () => {
  let dashboardModule: ReceivingDashboardModule;

  beforeEach(() => {
    dashboardModule = new ReceivingDashboardModule();
  });

  it("should create an instance", () => {
    expect(dashboardModule).toBeTruthy();
  });
});
