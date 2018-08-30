import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  photos = [
    {
      url: 'https://img.pokemondb.net/artwork/large/arcanine.jpg',
      description: 'Arcanine'
    },
    {
      url: 'https://img.pokemondb.net/artwork/large/feraligatr.jpg',
      description: 'Feraligatr'
    }
  ];
}
