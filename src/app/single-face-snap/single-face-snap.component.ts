import { Component, Input } from '@angular/core';
import { FaceSnapsService } from '../services/face-snaps.service';
import { FaceSnap } from '../models/face-snap';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-single-face-snap',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './single-face-snap.component.html',
  styleUrl: './single-face-snap.component.scss'
})
export class SingleFaceSnapComponent {
  snapButtonText!: string;
  userHasSnapped!:boolean;
   faceSnap!:FaceSnap;

constructor(private faceSnapservice:FaceSnapsService,private activateRoute:ActivatedRoute)
{

}
  ngOnInit(): void {
 
    this.prepareInterface();
    this.getFaceSnap();
  }

  onSnap(): void {
    if (this.userHasSnapped) {
      this.unSnap();
    } else {
      this.snap();
    }
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

private prepareInterface() {
  this.snapButtonText = 'Oh Snap!';
  this.userHasSnapped = false;
}

private getFaceSnap() {
  const faceSnapId = this.activateRoute.snapshot.params['id'];
  this.faceSnap = this.faceSnapservice.getFaceSnapById(faceSnapId);
}
}
