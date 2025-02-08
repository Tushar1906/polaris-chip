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
    this.title = "My card";
    this.image = "https://media.gq.com/photos/64249f0e187153589604b1f2/master/w_1920,c_limit/brycerld.jpg";
    
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
@media (min-width: 500px) and (max-width: 800px) {
  .card button {
    display: button;
  }
}

@media (max-width: 500px) {
  .card {
    width: 90%;
    padding: 12px;
  }

  .card img {
    max-width: 90%;
  }

  .card h2 {
    font-size: 1vw;
  }

  .card p {
    font-size: 0.8vw;
  }
}

      }

    `;
  }

  render() {
    return html`
    <div class="container">
  <div class="card">

    <h2>Bryce Harper</h2>
    <p>A first baseman for the philadelphia Phillies. A 2 time MVP still loking for his first world series </p>
    <img src="https://img.mlbstatic.com/mlb-photos/image/upload/d_people:generic:headshot:67:current.png/w_426,q_auto:best/v1/people/547180/headshot/67/current">
    
    <p></p>
    <a href="https://hax.psu.edu/">
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

    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
