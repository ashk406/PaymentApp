import { Component, OnInit } from '@angular/core';
import { PaymentDetailFormComponent } from './payment-detail-form/payment-detail-form.component';
import { PaymentDetailService } from '../shared/payment-detail.service';
import { NgForOf } from '@angular/common';
import { PaymentDetail } from '../shared/payment-detail.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-payment-details',
  standalone: true,
  templateUrl: './payment-details.component.html',
  styles: ``,
  imports: [PaymentDetailFormComponent, NgForOf],
})
export class PaymentDetailsComponent implements OnInit {
  constructor(
    public service: PaymentDetailService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.service.refreshList();
  }

  populateForm(selectedRecord: PaymentDetail) {
    this.service.formData = Object.assign({}, selectedRecord);
  }

  onDelete(selectedDRecord: number) {
    if (confirm('Are you sure to delete this record?')) {
      this.service.deletePaymentDetail(selectedDRecord).subscribe({
        next: (res) => {
          console.log(res);
          this.service.refreshList();
          this.toastr.error('Deleted Successfully!', 'Payment Detail Deleted');
        },
        error: (err) => {
          console.log(err);
        },
      });
    }
  }
}
