import { Component, h } from '@stencil/core';
import {TicTacToeClient} from './ttt.js'


@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
})
export class AppHome {

  client: any

  connectedCallback() {
      new TicTacToeClient({playerID: 'user'+Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5)})
      new TicTacToeClient({playerID: 'user'+Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5)})
  }

  render() {
    return [
      <ion-header>
        <ion-toolbar color="primary">
          <ion-title>Home</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content class="ion-padding">
        <p>
          Welcome to the PWA Toolkit. You can use this starter to build entire apps with web components using Stencil and ionic/core! Check out the README for everything that comes
          in this starter out of the box and check out our docs on <a href="https://stenciljs.com">stenciljs.com</a> to get started.
        </p>

        <ion-button href="/profile/ionic" expand="block">
          Profile page
        </ion-button>
      </ion-content>,
    ];
  }
}
