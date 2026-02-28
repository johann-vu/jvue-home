import { LitElement, html } from "lit";
import "../components/jvue-project-card.js";
import "../components/jvue-skills-group.js";
import "../components/jvue-skill-item.js";
import { t, tr } from "../scripts/translation.js";

class AppHomePage extends LitElement {
  createRenderRoot() {
    return this;
  }

  renderFavorites() {
    return tr("home.favorites.rich", {
      cafe: html`<a
        href="https://www.kaffeegiesserei.de"
        target="_blank"
        rel="noopener noreferrer"
        >Kaffeegießerei</a
      >`,
      language: html`<a href="https://go.dev" target="_blank" rel="noopener noreferrer"
        >Go</a
      >`,
      book: html`<a
        href="https://app.thestorygraph.com/books/cbe75aae-dcbc-462d-8b5e-323811cac746"
        target="_blank"
        rel="noopener noreferrer"
        >Dark Matter</a
      >`,
      artist: html`<a
        href="https://open.spotify.com/intl-de/artist/2f7f3AmL16mmiAmYnxmmfx"
        target="_blank"
        rel="noopener noreferrer"
        >Provinz</a
      >`,
    });
  }

  renderContact() {
    return tr("home.contact.rich", {
      linkedin: html`<a href="https://linkedin.com/in/jvue" target="_blank" rel="noopener noreferrer"
        >LinkedIn</a
      >`,
      instagram: html`<a
        href="https://www.instagram.com/johann_vu/"
        target="_blank"
        rel="noopener noreferrer"
        >Instagram</a
      >`,
      mail: html`<a href="mailto:mitose_eisenbahn.1c@icloud.com">Mail</a>`,
    });
  }

  render() {
    return html`
      <div class="wrapper">
        <div class="container hero-container">
          <img
            class="image section"
            src="assets/image.png"
            alt=${t("home.hero.imageAlt")}
          />
          <div class="text-container">
            <h2 class="section">
              ${t("home.hero.title")} <span class="hand">👋</span>
            </h2>
            <p class="section">
              ${t("home.hero.description")}
            </p>
          </div>
        </div>
        <div class="container">
          <h2 id="projects" class="section">${t("home.projects.heading")}</h2>
          <jvue-project-card
            class="section"
            title=${t("home.projects.onlineStorage.title")}
            description=${t("home.projects.onlineStorage.description")}
            tags=${t("home.projects.onlineStorage.tags")}
            href="https://online-moebellager.de"
            .linkLabel=${t("project.link")}
          ></jvue-project-card>
          <jvue-project-card
            class="section"
            title=${t("home.projects.ticketSystem.title")}
            description=${t("home.projects.ticketSystem.description")}
            tags=${t("home.projects.ticketSystem.tags")}
          ></jvue-project-card>
          <jvue-project-card
            class="section"
            title=${t("home.projects.eventinator.title")}
            description=${t("home.projects.eventinator.description")}
            tags=${t("home.projects.eventinator.tags")}
          ></jvue-project-card>
          <jvue-project-card
            class="section"
            title=${t("home.projects.musicSpotlight.title")}
            description=${t("home.projects.musicSpotlight.description")}
            tags=${t("home.projects.musicSpotlight.tags")}
            href="https://johann-vu.github.io/music-spotlight/"
            .linkLabel=${t("project.link")}
          ></jvue-project-card>
        </div>
        <div class="container">
          <h2 id="skills" class="section">${t("home.skills.heading")}</h2>
          <jvue-skills-group class="section" title=${t("home.skills.languages.title")}>
            <jvue-skill-item
              icon="assets/icons/go.svg"
              label=${t("home.skills.languages.go")}
            ></jvue-skill-item>
            <jvue-skill-item
              icon="assets/icons/javascript.svg"
              label=${t("home.skills.languages.javascript")}
            ></jvue-skill-item>
            <jvue-skill-item
              icon="assets/icons/typescript.svg"
              label=${t("home.skills.languages.typescript")}
            ></jvue-skill-item>
            <jvue-skill-item
              icon="assets/icons/html5.svg"
              label=${t("home.skills.languages.html")}
            ></jvue-skill-item>
            <jvue-skill-item
              icon="assets/icons/css.svg"
              label=${t("home.skills.languages.css")}
            ></jvue-skill-item>
            <jvue-skill-item
              icon="assets/icons/openjdk.svg"
              label=${t("home.skills.languages.java")}
            ></jvue-skill-item>
            <jvue-skill-item
              icon="assets/icons/python.svg"
              label=${t("home.skills.languages.python")}
            ></jvue-skill-item>
          </jvue-skills-group>
          <jvue-skills-group class="section" title=${t("home.skills.frameworks.title")}>
            <jvue-skill-item
              icon="assets/icons/angular.svg"
              label=${t("home.skills.frameworks.angular")}
            ></jvue-skill-item>
            <jvue-skill-item
              icon="assets/icons/lit.svg"
              label=${t("home.skills.frameworks.lit")}
            ></jvue-skill-item>
            <jvue-skill-item
              icon="assets/icons/pocketbase.svg"
              label=${t("home.skills.frameworks.pocketbase")}
            ></jvue-skill-item>
            <jvue-skill-item
              icon="assets/icons/nicegui.svg"
              label=${t("home.skills.frameworks.nicegui")}
            ></jvue-skill-item>
          </jvue-skills-group>
          <jvue-skills-group class="section" title=${t("home.skills.tools.title")}>
            <jvue-skill-item
              icon="assets/icons/gitlab.svg"
              label=${t("home.skills.tools.gitlab")}
            ></jvue-skill-item>
            <jvue-skill-item
              icon="assets/icons/docker.svg"
              label=${t("home.skills.tools.docker")}
            ></jvue-skill-item>
            <jvue-skill-item
              icon="assets/icons/figma.svg"
              label=${t("home.skills.tools.figma")}
            ></jvue-skill-item>
            <jvue-skill-item
              icon="assets/icons/umami.svg"
              label=${t("home.skills.tools.umami")}
            ></jvue-skill-item>
            <jvue-skill-item
              icon="assets/icons/apachenifi.svg"
              label=${t("home.skills.tools.nifi")}
            ></jvue-skill-item>
          </jvue-skills-group>
        </div>
        <div class="container">
          <h2 class="section">${t("home.favorites.heading")}</h2>
          <p class="section">${this.renderFavorites()}</p>
        </div>
        <div class="container section">${this.renderContact()}</div>
      </div>
    `;
  }
}

customElements.define("jvue-home", AppHomePage);
