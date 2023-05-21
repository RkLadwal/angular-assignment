import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MoneyService {
  private moneySubject: BehaviorSubject<{ index: number; money: number }> =
    new BehaviorSubject<{ index: number; money: number }>({
      index: -1,
      money: 0,
    });
  public money$: Observable<{ index: number; money: number }> =
    this.moneySubject.asObservable();

  constructor() {}

  sendMoney(index: number, amount: number): void {
    this.moneySubject.next({ index: index, money: -amount });
  }

  receiveMoney(index: number, amount: number): void {
    this.moneySubject.next({ index: index, money: amount });
  }
}
