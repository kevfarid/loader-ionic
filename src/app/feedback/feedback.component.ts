import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feedback',
  template: `<main>
    <h1>Feedback</h1>
    <ion-button routerLink="/home" color="danger">Return</ion-button>
  </main>`,
  styles: [
    `
      main {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        height: 100%;
        width: 100%;
        gap: 2rem;
      }

      h1 {
        font-size: 3rem;
      }
    `,
  ],
})
export class FeedbackComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
