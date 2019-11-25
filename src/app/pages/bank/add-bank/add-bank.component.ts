import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { BankFormService } from '../../services/bank-form.service';
import { MatDialogRef } from '@angular/material';

export interface User {
  name: string;
}

@Component({
  selector: 'app-add-bank',
  templateUrl: './add-bank.component.html',
  styleUrls: ['./add-bank.component.sass']
})
export class AddBankComponent implements OnInit {

  myControl = new FormControl();
  options: User[] = [
    {name: 'Mary'},
    {name: 'Shelley'},
    {name: 'Igor'}
  ];
  filteredOptions: Observable<User[]>;

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
