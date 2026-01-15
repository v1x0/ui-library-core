import { CurrencyPipe } from "@angular/common";
import { Component, Input } from "@angular/core";

@Component({
  selector: 'vixo-balance-ui',
  styleUrls: ['./balance.component.scss'],
  templateUrl: './balance.component.html',
  standalone: true,
  imports: [CurrencyPipe]
})
export class VixoBalanceUI {
  @Input() total: number = 0
}