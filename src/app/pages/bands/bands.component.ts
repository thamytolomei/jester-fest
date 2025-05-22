import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bands',
  templateUrl: './bands.component.html',
  styleUrls: ['./bands.component.scss']
})
export class BandsComponent{

  constructor(
    private router: Router,
  ) { }

  redirectToSpotify(artist: string) {
    if(artist === 'marcos')window.open('https://open.spotify.com/intl-pt/artist/6ASlWKKXb9MaNKSaqO45Hz?si=YPT8kH1BT5SbJCQVGuyPBw', '_blank');
    if(artist === 'peach')window.open('https://open.spotify.com/intl-pt/artist/6FgH2SOdyVedZHM1RcBmcZ?si=ooZaYucFTFiXkqiP7DxsOQ', '_blank');
    if(artist === 'pepler')window.open('https://open.spotify.com/intl-pt/artist/3NZz58X0JVwy9wWIUkUmCj?si=KsMaPtZgRSOxbLOWbNsmew', '_blank');
    if(artist === 'portokali')window.open('https://open.spotify.com/intl-pt/artist/6KQleahKGQBJc1j3nby1OM?si=Xqq0mP8HRoyXx1WFKwBLPg', '_blank');
  }
}
