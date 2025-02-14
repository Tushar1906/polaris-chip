import { LitElement, html, css } from 'lit';
import { ref } from 'lit/directives/ref.js';

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
    this.fancy = false;
    this.text = "Bryce Harper is a professional baseball player for the Philadelphia Phillies. He has won the National League MVP award and has been selected to multiple All-Star games. Harper is known for his power hitting and strong arm in the outfield.";
  }

  static get styles() {
    return css`
      :host([fancy]) {
        display: block;
        background-color: pink;
        border: 2px solid fuchsia;
        box-shadow: 10px 5px 5px red;
      }
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

      

    `;
  }

  render() {

    return html`
    <div class="container">
    <div class="card">

    <h2 class="cardheader"><b>${this.title}</b></h2>
    
    <img src=${this.image} alt=${this.title} />
    
    <details ?open="${this.fancy}" @toggle="${this.openChanged}">
      <summary>Description</summary>
      <div>
        <slot>${this.text}</slot>
      </div>
    </details>
    
    <p></p>
    <a href=${this.link} target="_blank">
      <button>Learn More</button>
    </a>
  </div>
</div>
`;
  }

  
  openChanged(e) {
    console.log(e.newState);
    if (e.newState === "open") {
      this.fancy = true;
    }
    else {
      this.fancy = false;
    }
  }

  static get properties() {
    return {
      fancy: { type: Boolean, reflect: true },
      title: { type: String },
      image: { type: String },
      link: { type: String},
      text: { type: String},
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
