const request = require("supertest");
const app = require("../index");

describe("GET /", () => {
it("should return Hello CI/CD World!", async () => {
    const res = await request(app).get("/");
    expect(res.text).toBe("Hello CI/CD World!");
});
});