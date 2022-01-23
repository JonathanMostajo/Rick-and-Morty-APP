import { ActivatedRoute } from '@angular/router';
import { CharacterInterface } from './../../models/Characters';
import { Component, OnInit } from '@angular/core';
import { RequestService } from '../../services/request.service';

@Component({
  selector: 'app-characters-detail',
  templateUrl: './characters-detail.component.html',
  styleUrls: ['./characters-detail.component.scss']
})
export class CharactersDetailComponent implements OnInit {
  public character!: CharacterInterface;

  constructor(private ActivatedRoute: ActivatedRoute, private requestService: RequestService) { }

  ngOnInit(): void {
    this.ActivatedRoute.paramMap.subscribe((params) => {
      const idCharacter = params.get('idCharacter');

      this.requestService.getCharacter(idCharacter).subscribe((data:any) => {
        const apiResult: CharacterInterface = data;
        this.character = apiResult;
      })
    })
  }

}
