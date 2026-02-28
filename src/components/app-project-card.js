import { LitElement, css, html } from "https://esm.sh/lit@3";

class AppProjectCard extends LitElement {
  static properties = {
    title: { type: String },
    description: { type: String },
    tags: { type: String },
    href: { type: String },
    linkLabel: { type: String, attribute: "link-label" },
  };

  static styles = css`
    :host {
      display: block;
      max-width: 500px;
      width: 100%;
    }

    h3 {
      margin-bottom: 0.5rem;
    }

    p {
      margin-top: 0;
    }

    .tag-container {
      display: flex;
      align-items: center;
      gap: 10px;
      width: 100%;
      flex-wrap: wrap;
      padding-bottom: 5px;
    }

    .tag {
      text-transform: uppercase;
      font-size: 0.8rem;
      font-weight: 700;
      opacity: 0.7;
    }

    a {
      color: inherit;
      font-size: 0.8rem;
      font-weight: 700;
      opacity: 0.7;
      transition: opacity 0.3s;
      margin-left: auto;
    }

    a:hover {
      opacity: 1;
    }
  `;

  renderTags() {
    const tags = (this.tags || "")
      .split(",")
      .map((tag) => tag.trim())
      .filter(Boolean);

    return tags.map((tag) => html`<span class="tag">${tag}</span>`);
  }

  renderLink() {
    if (!this.href) return null;
    return html`<a href=${this.href}>${this.linkLabel || "Zum Projekt"}</a>`;
  }

  render() {
    return html`
      <h3>${this.title}</h3>
      <p>${this.description}</p>
      <div class="tag-container">
        ${this.renderTags()} ${this.renderLink()}
      </div>
    `;
  }
}

customElements.define("app-project-card", AppProjectCard);
