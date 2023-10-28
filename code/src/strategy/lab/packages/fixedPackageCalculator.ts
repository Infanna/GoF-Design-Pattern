import { MonthlyCalculator } from "./monthlyCalculator";

export class FixedPackageCalculator implements MonthlyCalculator {
    calculate(totalHours: number): number {
        return 500;
    }
}