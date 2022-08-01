import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FaceSnap } from '../models/face-snap.models';
import { FaceSnapsService } from '../services/face-snaps.service';
@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;
 buttonText!:string;
 constructor(private faceSnapService:FaceSnapsService,private router:Router){}
 onSnap() {
  if (this.buttonText === 'Oh Snap!') {
      this.faceSnapService.snapFaceSnapById(this.faceSnap.id, 'snap');
      this.buttonText = 'Oops, unSnap!';
  } else {
      this.faceSnapService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
      this.buttonText = 'Oh Snap!';
  }
}

onviewfacesnap(){
  this.router.navigateByUrl(`facesnap/${this.faceSnap.id}`);
}
  ngOnInit() {
    this.buttonText = 'Oh Snap!';
    
     }
}