import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Laboratoria Memes';
  memes = [
    {
      title: '6 sentido js',
      image: 'https://statics.memondo.com/p/99/ccs/2016/05/CC_2581711_3279a685ee0247abb69433addae1a7b1_meme_otros_solo_programadores_xd.jpg?cb=6607706',
      description: 'Cuando no declaras las variables'
    },
    {
      title: 'ya saben  como me pongo',
      image: 'https://4.bp.blogspot.com/-25kufFKVqWg/Vxet39_4TkI/AAAAAAAAAvc/OzdiQYqKRCAtEYaOCPq1xuriD90SRKZ4ACLcB/s640/12524173_1084250148303422_7360188813809398316_n.jpg',
      description: 'Ya saben como me pongo'
    },
    {
      title: 'Front-end B',
      image: 'https://starecat.com/content/wp-content/uploads/shaved-husky-dog-frontend-backend-explained-comparison.jpg',
      description: 'Backend'
    }
  ];
  onNewMeme(meme){
    this.memes.push(meme)
  }
}
