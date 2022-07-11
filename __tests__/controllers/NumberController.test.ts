import { server } from "../../src/server";
import request from "supertest";

describe("GET /api/math/primes-number/", () => {
  it("1.- Generate Primes Number", async () => {
    const result = await request(server.app as any).get("/api/math/primes-number/15");
    expect(JSON.parse(result.text)).toEqual({ result: [13, 11, 7, 5, 3, 2] });
    expect(result.statusCode).toEqual(200);
  });
});
describe("GET /api/math/primes-number/", () => {
  it("2.- Generate Primes Number", async () => {
    const result = await request(server.app as any).get("/api/math/primes-number/7");
    expect(JSON.parse(result.text)).toEqual({ result: [7, 5, 3, 2] });
    expect(result.statusCode).toEqual(200);
  });
});
describe("GET /api/math/primes-number/", () => {
  it("3.- Generate Primes Number / Error Case", async () => {
    const result = await request(server.app as any).get("/api/math/primes-number/1");
    expect(JSON.parse(result.text)).toEqual({
      "errors": [
        {
          "location": "params",
          "msg": "The number must be greater than 2",
          "param": "number",
          "value": "1",
        }
      ]
    });
    expect(result.statusCode).toEqual(400);
  });
});
describe("GET /api/math/primes-number/", () => {
  it("4.- Generate Primes Number / Error Case", async () => {
    const result = await request(server.app as any).get("/api/math/primes-number/a");
    expect(JSON.parse(result.text)).toEqual({
      "errors": [
        {
          "location": "params",
          "msg": "Enter only numbers",
          "param": "number",
          "value": "a",
        },
        {
          "location": "params",
          "msg": "The number must be greater than 2",
          "param": "number",
          "value": "a",
        }
      ]
    });
    expect(result.statusCode).toEqual(400);
  });
});