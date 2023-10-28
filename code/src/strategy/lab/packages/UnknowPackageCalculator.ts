import { MonthlyCalculator } from "./monthlyCalculator";

export class UnknowPackageCalculator implements MonthlyCalculator {

    public calculate(totalHours: number): number {
        return 0;
    }
}