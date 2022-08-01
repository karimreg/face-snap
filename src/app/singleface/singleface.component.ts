import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FaceSnap } from '../models/face-snap.models';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-singleface',
  templateUrl: './singleface.component.html',
  styleUrls: ['./singleface.component.scss']
})
export class SinglefaceComponent implements OnInit {
   faceSnap!: FaceSnap;
 text1!:number;
  buttonText!: string;
 constructor(private faceSnapService:FaceSnapsService, private route :ActivatedRoute){}
 onSnap() {
  if (this.buttonText === 'Oh Snap!') {
      this.faceSnapService.snapFaceSnapById(this.faceSnap.id, 'snap');
      this.buttonText = 'Oops, unSnap!';
  } else {
      this.faceSnapService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
      this.buttonText = 'Oh Snap!';
  }
}
  ngOnInit() {
    this.buttonText = 'Oh Snap!';
    const snapId = +this.route.snapshot.params['id'];
    this.text1=snapId;
    this.faceSnap = this.faceSnapService.getFaceSnapById(snapId);
  }
}
