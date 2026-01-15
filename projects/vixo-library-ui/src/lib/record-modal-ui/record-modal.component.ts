import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { MatCard, MatCardHeader, MatCardSubtitle, MatCardTitle, MatCardTitleGroup } from '@angular/material/card';
import { RecordModalI } from "./record-modal.interface";
import { CurrencyPipe, NgClass } from "@angular/common";

@Component({
    selector: 'vixo-record-modal-ui',
    imports: [MatCard, MatCardHeader, MatCardTitle, MatCardSubtitle, MatCardTitleGroup, NgClass, CurrencyPipe],
    templateUrl: './record-modal.component.html',
    styleUrls: ['./record-modal.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecordModalComponent {
  @Input('data') data!: RecordModalI;
}
