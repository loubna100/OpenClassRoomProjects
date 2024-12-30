import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { DatePipe, LowerCasePipe, NgClass, NgStyle, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { FaceSnapsService } from '../services/face-snaps.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [NgStyle,NgClass,UpperCasePipe,TitleCasePipe,DatePipe],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent  implements OnInit{

  snapButtonText!: string;
  userHasSnapped!:boolean;
  @Input() faceSnap!:FaceSnap;



constructor(private faceSnapservice:FaceSnapsService,private router:Router)
{

}
  ngOnInit(): void {
    this.snapButtonText="snaps and";
    
  }

  onSnap(): void {
    if (this.userHasSnapped) {
      this.unSnap();
    } else {
      this.snap();
    }
  }

  onViewSnap()
  {
this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`);
  }

unSnap() {
  this.faceSnapservice.snapFaceSnapById(this.faceSnap.id,'unsnap');

    this.snapButtonText = 'Oh Snap!';
    this.userHasSnapped = false;
}

snap() {
  this.faceSnapservice.snapFaceSnapById(this.faceSnap.id,'snap');

    this.snapButtonText = 'Oops, unSnap!';
    this.userHasSnapped = true;
}
}
