import { MonthlyCalculator } from "./monthlyCalculator";

export class  HourflexPackageCalculator implements MonthlyCalculator {

    public calculate(totalHours: number): number {
        return totalHours * 50;
    }
}