import { Component, OnInit, OnChanges, SimpleChanges, Input, Output, EventEmitter } from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';

import { Question } from '../../interfaces/Question';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit, OnChanges {
  @Output() answer = new EventEmitter<string>();
  @Output() form: FormGroup | undefined;
  @Input() question: Question | undefined;
  option = '';

  constructor(private builder: FormBuilder) {
    this.form = this.builder.group({
      answer: [null, Validators.required]
    })
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.question && changes.question.currentValue && !changes.question.firstChange) {
      this.form?.patchValue({answer: ''});
    }
  }

  radioChange(answer: string) {
    // @ts-ignore
    this.question.selectedOption = answer;
    this.answer.emit(answer);
  }

  onSubmit() {
    this.form?.reset({answer: null});
  }
}
