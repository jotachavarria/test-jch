import { getPrimesNumber } from "../../src/util/numberUtil";
describe("GET /api/math/primes-number/", () => {
    it("1.- Util Generate Primes Number ", async () => {
        const result = getPrimesNumber(15)
      expect(result).toEqual({ result: [13, 11, 7, 5, 3, 2] });
    });
  });
  describe("GET /api/math/primes-number/", () => {
    it("2.- Util Generate Primes Number", async () => {
        const result = getPrimesNumber(7)
      expect(result).toEqual({ result: [7, 5, 3, 2] });
    });
  });