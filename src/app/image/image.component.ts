import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  @Input()
  imgSrc: string = 'assets/ns.png';

  @Input()
  altTxt?: string = 'The super fast beast bike';

  @Input()
  figCaptionTxt?: string =
    'The massive sport looks';

  @Input()
  imgOpacity?: number = 1;

  constructor() {}

  ngOnInit(): void {}

}
