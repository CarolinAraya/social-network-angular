import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-meme',
  templateUrl: './meme.component.html',
  styleUrls: ['./meme.component.css']
})
export class MemeComponent implements OnInit {
  @Input() titulo: string;
  @Input() image: string;
  @Input() description: string;

  constructor() { }

  ngOnInit() {
  }

}
