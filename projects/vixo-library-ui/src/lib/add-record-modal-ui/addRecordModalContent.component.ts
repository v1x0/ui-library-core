import { ChangeDetectionStrategy, Component, inject, Input, model } from "@angular/core";
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';

@Component({
    selector: 'vixo-add-record-form-content-ui',
    templateUrl: './addRecordModalContent.component.html',
    imports: [
        MatFormFieldModule,
        MatInputModule,
        MatRadioModule,
        FormsModule,
        ReactiveFormsModule,
        MatDialogModule,
        MatButtonModule
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['./addRecordModalContent.component.scss']
})
export class AddRecordContentComponent {
  dialogRef = inject(MatDialogRef<AddRecordContentComponent>)
  readonly data = inject<any>(MAT_DIALOG_DATA);
  readonly formData: FormGroup;


  constructor(private fb: FormBuilder) {
    this.formData = this.fb.group({
      name: [''],
      category: [''],
      amount: [''],
      type: ['expense']
    })
  }

  onCancelButtonClick() {
    this.dialogRef.close()
  }

  onAddButtonClick() {
    this.dialogRef.close(this.formData.value)
  }
}
