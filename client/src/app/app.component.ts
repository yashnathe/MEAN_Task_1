import { Component, OnInit } from '@angular/core';
import { MarvellousService } from './marvellous.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  message : any;

  constructor(public service : MarvellousService) { }

  ngOnInit() {
    
    this.service.getBatches().subscribe(data => {

      this.message = data;

    })

  }
}
