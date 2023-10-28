import { UnknowPackageCalculator } from "./UnknowPackageCalculator";
import { FixedPackageCalculator } from "./fixedPackageCalculator";
import { HourflexPackageCalculator } from "./hourflexPackageCalculator";
import { MonthlyCalculator } from "./monthlyCalculator";
import { PackageType } from "./packageType";
import { StppingPackageCalculator } from "./stppingPackageCalculator";

export class PackageFactory {
    static createPackage(packageType: PackageType): MonthlyCalculator {
        switch (packageType) {
            case PackageType.FIXED:
                return new FixedPackageCalculator();
            case PackageType.HOUR_FLEX:
                return new HourflexPackageCalculator();
            case PackageType.STEPPING:
                return new StppingPackageCalculator();
            default:
                return new UnknowPackageCalculator();
        }
    }
}