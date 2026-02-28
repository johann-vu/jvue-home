import { LitElement, css, html } from "https://esm.sh/lit@3";

class AppSkillItem extends LitElement {
  static properties = {
    icon: { type: String },
    label: { type: String },
  };

  static styles = css`
    :host {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      gap: 10px;
    }

    img {
      max-height: 1.5rem;
    }

    @media (prefers-color-scheme: dark) {
      img {
        filter: invert(1);
      }
    }
  `;

  connectedCallback() {
    super.connectedCallback();
    this.setAttribute("role", "listitem");
  }

  render() {
    return html`<img src=${this.icon} alt=${`${this.label} icon`} /><span>${this.label}</span>`;
  }
}

customElements.define("app-skill-item", AppSkillItem);
