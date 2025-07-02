import { sum } from "./sum";
let sumResult: number

describe("sum", () => {
    beforeAll(() => {
        sumResult = 10
        console.log("EXECUTANDO ANTES DOS TESTE", sumResult)
    })

    afterAll(() => {
        sumResult = 0
        console.log("EXECUTANDO DEPOIS DOS TESTE", sumResult)
    })

    it("should do sum of 3 + 7 must be 10", () => {
        const result = sum(3, 7)
        expect(result).toBe(sumResult)
    })

    test("sum of 2 + 2 must be 4", () => {
        const result = sum(2, 2)
        expect(result).toBe(4)
    })
})

