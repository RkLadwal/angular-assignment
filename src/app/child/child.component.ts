import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MoneyService } from '../money.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent {
  @Input() name: string = '';
  @Input() money: number = 0;
  @Input() recordIndex?: number = -1;
  @Output() addMoney: EventEmitter<number> = new EventEmitter<number>();

  moneyToSubtract: number = 10;
  moneyToRequest: number = 5;

  constructor(private moneyService: MoneyService) {}

  getMoneyFromUser(index: number): number | boolean {
    if (index == this.recordIndex) {
      if (this.money < this.moneyToSubtract) {
        alert(
          "Insufficient funds: User's current balance is insufficient to complete the requested subtraction."
        );
      } else {
        this.money -= this.moneyToSubtract;
        return this.money;
      }
    }
    return false;
  }

  returnCurrentChildMoney(): number {
    return this.money;
  }

  getMoney(): void {
    this.addMoney.emit(this.moneyToRequest);
  }

  sendMoneyToParent(): void {
    this.moneyService.sendMoney(this.recordIndex!, 10);
  }

  receiveMoneyFromParent(): void {
    this.moneyService.receiveMoney(this.recordIndex!, 10);
  }
}
