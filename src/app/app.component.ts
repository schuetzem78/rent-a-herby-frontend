import { Component, VERSION } from '@angular/core';
import { version } from './../../package.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  AppVersion = version;

  herbyPictures = [new HerbyPicture(), new Norwegen, new HerbyPicture2, new Norwegen2, new Norwegen3];
}

export class HerbyPicture{  
  image="./../assets/img/Herby1.jpg"
}

export class HerbyPicture2{  
  image="./../assets/img/Herby2.jpg"
}

export class Norwegen{  
  image="./../assets/img/Norwegen.JPG"
}
export class Norwegen2{  
  image="./../assets/img/Norwegen2.jpg"
}
export class Norwegen3{  
  image="./../assets/img/Norwegen3.jpg"
}
