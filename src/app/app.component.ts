import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {            //class which has variables inside it
  title = 'reg_app';
  constructor(){
    // setTimeout(()=>{
    //   this.title ="Changed Title"
    // },2000);

  }

}


