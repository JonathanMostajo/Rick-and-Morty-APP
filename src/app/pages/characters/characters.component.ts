import { RequestService } from './services/request.service';
import { CharacterInterface, CharacterResponseInterface } from './models/Characters';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
})
export class CharactersComponent implements OnInit {
  public characterList: CharacterInterface[] = [];

  constructor(private requestService: RequestService) {}

  ngOnInit() {
    this.requestService.getCharacters().subscribe((data: CharacterResponseInterface) => {
      const results: CharacterInterface[] = data.results.map(({ id, name, status, species, gender, origin, location, image }) => ({
        id, name, status, species, gender, origin, location, image
      }));
      this.characterList = results
      console.log(data);
      
    }
    );
  }
}
