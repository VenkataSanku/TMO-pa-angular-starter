import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-dream-app';
  showForm = false;
  showlist = false;
  message = true;
  data: Array<string> = [];
  displayList: any;
  hadleError: string;

  restarentForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.restarentForm = this.fb.group(
      {
        item: new FormControl(''),
        description: new FormControl(''),
    });
    }
    onSubmit() {
      const info = {
        item: this.restarentForm.value.item,
        description: this.restarentForm.value.description,
      };
      this.showList(info);
      this.showmessage();
      this.hideForm();
     }
    
     showList(info:any) {
      if (info.item && info.description) {
      this.data.push(info);
      this.displayList = this.data;
      this.showrecipes();
    } else {
      this.hadleError = 'recipe-name and recipe instructions are requried';
    }
    }
    showrecipes(){
      this.showlist = true;
    }
    showmessage(){
      this.message = false;
    }
    hideForm(){
      this.showForm = false;
    }

    addRecipes(){
      this.showForm = true;
      this.showlist = false;
    }
  }