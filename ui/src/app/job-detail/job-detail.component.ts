import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobService } from '../services/job.service';
import { JobModel } from '../models/job.model';
import { CustomerService } from '../services/customer.service';
import { CustomerModel } from '../models/customer.model';

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.scss']
})
export class JobDetailComponent implements OnInit {

  private jobId: number;
  private customerId: number;
  public job: JobModel;
  public customer: CustomerModel;

  private sub: any;

  constructor(
    private route: ActivatedRoute,
    private jobService: JobService,
    private customerService: CustomerService) {

    this.sub = this.route.queryParams.subscribe(params => {
      this.jobId = +params['jobId'];
      this.customerId = +params['custId'] || 0;
    });
  }

  ngOnInit() {
    this.jobService.GetJob(this.jobId).subscribe(job => this.job = job);
    if (this.customerId > 0)
      this.customerService.GetCustomer(this.customerId).subscribe(customer => this.customer = customer);
  } 
}
