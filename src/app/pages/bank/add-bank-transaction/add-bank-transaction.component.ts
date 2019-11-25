import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-bank-transaction',
  templateUrl: './add-bank-transaction.component.html',
  styleUrls: ['./add-bank-transaction.component.scss']
})
export class AddBankTransactionComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
  }
  form = this.formBuilder.group({
    //  subAccount: new FormControl({
      // id: new FormControl(''),
      // name: new FormControl('')
   // }),
      id: new FormControl(''),
      nameBank: new FormControl(''),
      accountNumber: new FormControl(''),
      balance: new FormControl(''),
      observations: new FormControl('')
  });
}
