import { Component, OnInit } from '@angular/core';
import {ITweet} from '../core'
import {ActivatedRoute} from '@angular/router'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  tweets:Array<ITweet>

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.tweets = this.route.snapshot.data['tweets']   
  }

}
