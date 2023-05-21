import { Component, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { MoneyService } from '../money.service';
import { interval, map, mergeMap } from 'rxjs';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent {
  dataList: Array<{ name: string; money: number }> = [
    {
      name: 'Jack',
      money: 10,
    },
    {
      name: 'Jill',
      money: 15,
    },
  ];

  newUserName: string = '';

  moneyToAdd: number = 10;
  fxLayoutDirection: string = 'column';

  @ViewChildren(ChildComponent) children?: QueryList<ChildComponent>;

  ngOnInit(): void {
    this.moneyService.money$.subscribe((result) => {
      if (result.index > -1) {
        this.dataList[result.index].money += result.money;
      }
    });

    this.functionSolvePoint11();
    this.functionSolvePoint12();
  }

  constructor(private moneyService: MoneyService) {}

  addMoneyToUser(index: number) {
    this.dataList[index].money += this.moneyToAdd;
  }

  getMoneyFromUser(index: number): void {
    this.children?.forEach((child: ChildComponent) => {
      let returnMoney = child.getMoneyFromUser(index);
      if (returnMoney) {
        this.dataList[index].money = parseInt(returnMoney.toString());
      }
    });
  }

  addRequestedMoneyToUser(index: number, requestedMoney: number) {
    this.dataList[index].money += requestedMoney;
  }

  addUser() {
    this.dataList.push({ name: this.newUserName, money: 0 });
    this.newUserName = '';
  }

  functionSolvePoint11() {
    let a1: Point11[] = [
      { a: 1, b: 'a', f: false },
      { a: 2, b: 'b' },
      { a: 3, c: 'c', f: 0 },
    ];

    a1.forEach((x) => {
      if (!x.hasOwnProperty('b')) {
        x.b = 'A';
      }

      if (!x.hasOwnProperty('f')) {
        x.f = 'A';
      }
    });

    a1 = a1.map((obj) => {
      const orderedProperties = Object.entries(obj)
        .sort(([propA], [propB]) => propA.localeCompare(propB))
        .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {});

      return orderedProperties as Point11;
    });

    console.log(a1);
  }

  functionSolvePoint12() {
    let b1: Point12[] = [
      { a: 1, b: 'a' },
      { a: 2, b: 'b' },
      { a: 3, c: 'c' },
    ];
    let b3 = JSON.parse(JSON.stringify(b1));
    b3.map((x: Point12) => (x.a = x.a! + 1));
    let b2 = b3;
    console.log(b1, b2);
  }
}

export interface Point11 {
  a: number;
  b?: string;
  c?: any;
  f?: any;
}

export interface Point12 {
  a?: number;
  b?: string;
  c?: any;
}
