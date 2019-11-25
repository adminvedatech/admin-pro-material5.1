import { Injectable } from '@angular/core';
import { Bank } from '../models/models';
import { FormBuilder, FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class BankFormService {

  bank: Bank;

  constructor(private formBuilder: FormBuilder) { }

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
