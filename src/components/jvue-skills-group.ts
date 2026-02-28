import { LitElement, css, html } from "lit";

class AppSkillsGroup extends LitElement {
  title = "";
  columns = 4;

  static properties = {
    title: { type: String },
    columns: { type: Number },
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
      <div
        class="skills-list"
        role="list"
        aria-label=${this.title}
        style="grid-template-columns: repeat(${this.columns || 4}, 1fr);"
      >
        <slot></slot>
      </div>
    `;
  }
}

customElements.define("jvue-skills-group", AppSkillsGroup);
