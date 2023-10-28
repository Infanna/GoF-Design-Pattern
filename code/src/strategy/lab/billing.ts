import { UnknowPackageCalculator } from './packages/UnknowPackageCalculator';
import { FixedPackageCalculator } from './packages/fixedPackageCalculator';
import { HourflexPackageCalculator } from './packages/hourflexPackageCalculator';
import { MonthlyCalculator } from './packages/monthlyCalculator';
import { PackageFactory } from './packages/packageFactory';
import { PackageType } from './packages/packageType';
import { StppingPackageCalculator } from './packages/stppingPackageCalculator';

export class Billing {
  private vatRate = 7.0;
  private totalHours: number;
  private packageType: PackageType;

  constructor(totalHours: number, packageType: PackageType) {
    this.totalHours = totalHours;
    this.packageType = packageType;
  }

  public monthlyBill(): number {
    var total = PackageFactory.createPackage(this.packageType).calculate(this.totalHours);
    return this.totalWithVate(total);
  }

  private totalWithVate(total: number): number {
    return total + (total * this.vatRate) / 100;
  }
}
