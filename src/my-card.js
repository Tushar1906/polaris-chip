import { LitElement, html, css } from 'lit';

/**
 * Now it's your turn. Here's what we need to try and do:
 * 1. Get you HTML from your card working in here 
 * 2. Get your CSS rescoped as needed to work here
 */

export class MyCard extends LitElement {

  static get tag() {
    return 'my-card';
  }

  constructor() {
    super();
    this.title = "Bryce Harper";
    this.image = "https://img.mlbstatic.com/mlb-photos/image/upload/d_people:generic:headshot:67:current.png/w_426,q_auto:best/v1/people/547180/headshot/67/current";
    this.link = "https://www.mlb.com/player/bryce-harper-547180";
  }

  static get styles() {
    return css`
      :host {
        .card {
            width: 400px;
            height: 400px;
            border: 1px;
            background-color: lightblue;
            text-align: center;
            border-style: solid;
            border-width: 10px;
            border-color: red;
            display: inline-block;
          }

            .card h2 {
              text-align: center;
              color: red;
              font-style: italic;
              font-weight: bold;
              
            }
            .card img {
              width: 100px;
              height: 150px;
            }
            .card p {
              font-size: 1.25vw;
              margin-bottom: 16px;
            }
            button {
              padding: 10px;
              border-radius: 100px;
              border: 1px rigid;
              border-width: 10px;
              font-size: 1vw;
              font-weight: bold;
              margin: 5px 5px 5px 5px;
            }
            button:focus,
            button:hover {
              background-color: blue;
            }

            .Fancy {
              background-color: green;
              color: #ff0099;
            }

      }

    `;
  }

  render() {

    return html`
    <div class="container">
    <div class="card">

    <h2 class="cardheader"><b>${this.title}</b></h2>
    <slot></slot>
    <img src=${this.image} alt=${this.title} />

    
    <p></p>
    <a href=${this.link} target="_blank">
      <button>Details</button>
    </a>
  </div>
</div>
`;
  }

  static get properties() {
    return {
      title: { type: String },
      image: { type: String },
      link: { type: String},

    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
