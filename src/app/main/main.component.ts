import { Component } from '@angular/core';
import { FilterPanelComponent } from "./components/filter-panel/filter-panel.component";
import { ListCardsComponent } from "./components/list-cards/list-cards.component";
import { DetailsCardComponent } from '../shared/details-card/details-card.component';
import { FilterSearchDto } from '@app/core/models/dto/filter.search.dto.model';
import { CardsGalleryListComponent } from './components/cards-gallery/cards-gallery-list.component';

const MODULES = [FilterPanelComponent, CardsGalleryListComponent];

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [...MODULES, ListCardsComponent, DetailsCardComponent],
  template: `
    <main>
      <app-filter-panel
      (searchUserEvent)="handleUserSearch($event)"
      />
      
      <!--
        @if(showList){
          <app-cards-gallery-list></app-cards-gallery-list>
        
      }@else{
        }
        -->
        <app-list-cards (cardSelected)="showCardDetails($event)"></app-list-cards>

    </main>
  `,
  styles: `
  `
})
export class MainComponent {
  showList = true;
  selectedCardId?:any;
  prueba={
    "object": "card",
    "id": "ea1d684e-c4dd-481b-856e-8331d4f64be2",
    "oracle_id": "7ae924fc-ddbc-4729-84cf-982f8fe91208",
    "multiverse_ids": [],
    "arena_id": 85635,
    "name": "A-Asari Captain",
    "lang": "en",
    "released_at": "2022-02-18",
    "uri": "https://api.scryfall.com/cards/ea1d684e-c4dd-481b-856e-8331d4f64be2",
    "scryfall_uri": "https://scryfall.com/card/neo/A-215/a-asari-captain?utm_source=api",
    "layout": "normal",
    "highres_image": false,
    "image_status": "lowres",
    "image_uris": {
      "small": "https://cards.scryfall.io/small/front/e/a/ea1d684e-c4dd-481b-856e-8331d4f64be2.jpg?1681158273",
      "normal": "https://cards.scryfall.io/normal/front/e/a/ea1d684e-c4dd-481b-856e-8331d4f64be2.jpg?1681158273",
      "large": "https://cards.scryfall.io/large/front/e/a/ea1d684e-c4dd-481b-856e-8331d4f64be2.jpg?1681158273",
      "png": "https://cards.scryfall.io/png/front/e/a/ea1d684e-c4dd-481b-856e-8331d4f64be2.png?1681158273",
      "art_crop": "https://cards.scryfall.io/art_crop/front/e/a/ea1d684e-c4dd-481b-856e-8331d4f64be2.jpg?1681158273",
      "border_crop": "https://cards.scryfall.io/border_crop/front/e/a/ea1d684e-c4dd-481b-856e-8331d4f64be2.jpg?1681158273"
    },
    "mana_cost": "{1}{R}{W}",
    "cmc": 3.0,
    "type_line": "Creature — Human Samurai",
    "oracle_text": "Trample, haste\nWhenever a Samurai or Warrior you control attacks alone, it gets +1/+0 until end of turn for each Samurai or Warrior you control.",
    "power": "2",
    "toughness": "1",
    "colors": [
      "R",
      "W"
    ],
    "color_identity": [
      "R",
      "W"
    ],
    "keywords": [
      "Haste",
      "Trample"
    ],
    "all_parts": [
      {
        "object": "related_card",
        "id": "94158fdf-c794-4ce9-a04e-cb6922604d19",
        "component": "combo_piece",
        "name": "Asari Captain",
        "type_line": "Creature — Human Samurai",
        "uri": "https://api.scryfall.com/cards/94158fdf-c794-4ce9-a04e-cb6922604d19"
      },
      {
        "object": "related_card",
        "id": "ea1d684e-c4dd-481b-856e-8331d4f64be2",
        "component": "combo_piece",
        "name": "A-Asari Captain",
        "type_line": "Creature — Human Samurai",
        "uri": "https://api.scryfall.com/cards/ea1d684e-c4dd-481b-856e-8331d4f64be2"
      }
    ],
    "legalities": {
      "standard": "not_legal",
      "future": "not_legal",
      "historic": "legal",
      "timeless": "not_legal",
      "gladiator": "not_legal",
      "pioneer": "not_legal",
      "explorer": "not_legal",
      "modern": "not_legal",
      "legacy": "not_legal",
      "pauper": "not_legal",
      "vintage": "not_legal",
      "penny": "not_legal",
      "commander": "not_legal",
      "oathbreaker": "not_legal",
      "standardbrawl": "not_legal",
      "brawl": "legal",
      "alchemy": "not_legal",
      "paupercommander": "not_legal",
      "duel": "not_legal",
      "oldschool": "not_legal",
      "premodern": "not_legal",
      "predh": "not_legal"
    },
    "games": [
      "arena"
    ],
    "reserved": false,
    "foil": false,
    "nonfoil": true,
    "finishes": [
      "nonfoil"
    ],
    "oversized": false,
    "promo": false,
    "reprint": false,
    "variation": false,
    "set_id": "59a2059f-5482-433f-8761-eb2e17859b71",
    "set": "neo",
    "set_name": "Kamigawa: Neon Dynasty",
    "set_type": "expansion",
    "set_uri": "https://api.scryfall.com/sets/59a2059f-5482-433f-8761-eb2e17859b71",
    "set_search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Aneo&unique=prints",
    "scryfall_set_uri": "https://scryfall.com/sets/neo?utm_source=api",
    "rulings_uri": "https://api.scryfall.com/cards/ea1d684e-c4dd-481b-856e-8331d4f64be2/rulings",
    "prints_search_uri": "https://api.scryfall.com/cards/search?order=released&q=oracleid%3A7ae924fc-ddbc-4729-84cf-982f8fe91208&unique=prints",
    "collector_number": "A-215",
    "digital": true,
    "rarity": "uncommon",
    "card_back_id": "0aeebaf5-8c7d-4636-9e82-8c27447861f7",
    "artist": "Donato Giancola",
    "artist_ids": [
      "90332db2-aecb-4d79-917b-95cbeb8d0cb6"
    ],
    "illustration_id": "8559b786-5d7b-468f-a2ab-3cb703004924",
    "border_color": "black",
    "frame": "2015",
    "security_stamp": "arena",
    "full_art": false,
    "textless": false,
    "booster": false,
    "story_spotlight": false,
    "promo_types": [
      "rebalanced",
      "alchemy"
    ],
    "prices": {
      "usd": null,
      "usd_foil": null,
      "usd_etched": null,
      "eur": null,
      "eur_foil": null,
      "tix": null
    },
    "related_uris": {
      "tcgplayer_infinite_articles": "https://tcgplayer.pxf.io/c/4931599/1830156/21018?subId1=api&trafcat=infinite&u=https%3A%2F%2Finfinite.tcgplayer.com%2Fsearch%3FcontentMode%3Darticle%26game%3Dmagic%26partner%3Dscryfall%26q%3DA-Asari%2BCaptain",
      "tcgplayer_infinite_decks": "https://tcgplayer.pxf.io/c/4931599/1830156/21018?subId1=api&trafcat=infinite&u=https%3A%2F%2Finfinite.tcgplayer.com%2Fsearch%3FcontentMode%3Ddeck%26game%3Dmagic%26partner%3Dscryfall%26q%3DA-Asari%2BCaptain",
      "edhrec": "https://edhrec.com/route/?cc=A-Asari+Captain"
    }
  }

  handleUserSearch(searchCard: FilterSearchDto) {
    console.log(searchCard);
  }

  showCardDetails(card: any) {
    this.selectedCardId = card;
    this.showList = false;
  }

}
