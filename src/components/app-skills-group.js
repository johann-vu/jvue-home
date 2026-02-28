import { LitElement, css, html } from "https://esm.sh/lit@3";

class AppSkillsGroup extends LitElement {
  static properties = {
    title: { type: String },
  };

  static styles = css`
    :host {
      display: block;
      max-width: 500px;
      width: 100%;
    }

    .skills-list {
      list-style: none;
      margin: 0;
      padding: 0 10px 10px 10px;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      gap: 35px;
    }

    @media screen and (max-width: 500px) {
      .skills-list {
        grid-template-columns: 1fr 1fr 1fr;
        gap: 20px;
      }
    }
  `;

  render() {
    return html`
      <h3>${this.title}</h3>
      <div class="skills-list" role="list" aria-label=${this.title}>
        <slot></slot>
      </div>
    `;
  }
}

customElements.define("app-skills-group", AppSkillsGroup);
