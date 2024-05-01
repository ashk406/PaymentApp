import { Component, OnInit } from '@angular/core';
import { PaymentDetailFormComponent } from './payment-detail-form/payment-detail-form.component';
import { PaymentDetailService } from '../shared/payment-detail.service';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-payment-details',
  standalone: true,
  templateUrl: './payment-details.component.html',
  styles: ``,
  imports: [PaymentDetailFormComponent, NgForOf],
})
export class PaymentDetailsComponent implements OnInit {
  constructor(public service: PaymentDetailService) {}

  ngOnInit(): void {
    this.service.refreshList();
  }
}
