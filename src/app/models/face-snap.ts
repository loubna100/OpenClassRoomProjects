export class FaceSnap {
    title: string;
    description: string;
    createdDate: Date;
    snaps: number;
    imageUrl: string;
    location?: string;
     id:string;
    constructor(title: string, description: string, imageUrl: string, createdDate: Date, snaps: number) {
      this.title = title;
      this.description = description;
      this.imageUrl = imageUrl;
      this.createdDate = createdDate;
      this.snaps = snaps;
      this.id = crypto.randomUUID().substring(0, 8);

    }

    withLocation(location: string): FaceSnap {
      this.setLocation(location);
      return this;
    }
      
        addSnap(): void {
          this.snaps++;
        }
      
        removeSnap(): void {
          this.snaps--;
        }
        setLocation(location: string): void {
          this.location = location;
        }


       
  }