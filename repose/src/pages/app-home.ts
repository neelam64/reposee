import { LitElement, css, html } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import { resolveRouterPath } from '../router';

import '@shoelace-style/shoelace/dist/components/card/card.js';
import '@shoelace-style/shoelace/dist/components/button/button.js';

import { styles } from '../styles/shared-styles';

@customElement('app-home')
export class AppHome extends LitElement {

  // For more information on using properties and state in lit
  // check out this link https://lit.dev/docs/components/properties/
  @property() message = 'Welcome!';

  static styles = [
    styles,
    css`
.hero {
    height: 90vh;
    min-height: 600px;
    max-height: 900px;
    max-width: 100%;
    max-width: 100vw;
    padding: 0 48px;
    overflow-x: hidden;
    position: relative;
  }

  .hero__inner {
    display: flex;
    flex-direction: column;
    position: relative;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
  }

  .hero__top-content {
    flex: 1 1 0px;
    color: white;
    margin: 4rem 5rem 0;
    text-align: center;
    max-height: 25vh;
  }

  .hero__top-content h1 {
    font-weight: normal;
    font-size: 48px;
  }

  .hero__top-content fluent-anchor {
    margin-top: 1rem;
  }

  .hero__top-content fluent-anchor::part(control) {
    border-radius: 15px;
    color: #107652;
  }

  .hero__top-content fluent-anchor::part(control):hover {
    color: #2E765E;
  }

  .hero__bottom-content {
    flex: 1 1 0px;
    height: 50vh;
  }

  .hero__bottom-content img {
    width: 100%;
    height: 100%;
  }

  @media screen and (max-width: 840px) and (min-width: 625px) {
    .hero__top-content {
      margin: 4rem 2rem 0px;
    }
  }

  @media screen and (max-width: 625px) and (min-width: 480px) {
    .hero__top-content {
      margin: 2rem 2rem 0px;
    }

    .hero__bottom-content {
      margin-top: 7rem;
    }
  }

  @media screen and (max-width: 480px) {
    header {
      margin: 0 2rem;
    }

    .hero {
      padding: 0 1rem;
    }

    .hero__top-content {
      margin: 1rem 0;
    }

    .hero__top-content h1 {
      font-size: 36px;
    }

    .hero__bottom-content {
      margin-top: 7rem;
    }
  }
  `];

  async firstUpdated() {
    // this method is a lifecycle even in lit
    // for more info check out the lit docs https://lit.dev/docs/components/lifecycle/
    console.log('This is your home page');
  }

  share() {
    if ((navigator as any).share) {
      (navigator as any).share({
        title: 'PWABuilder pwa-starter',
        text: 'Check out the PWABuilder pwa-starter!',
        url: 'https://github.com/pwa-builder/pwa-starter',
      });
    }
  }

  render() {
    return html`
      <app-header></app-header>
      <div class="hero">
    <hero-decor></hero-decor>
    <div class="hero__inner">
      <div class="hero__top-content">
        <h1>Intelligent Daily Mood Journal</h1>
        <p>Repose is your personal mood tracking companion that helps you organize and reflect upon your daily thoughts.</p>
        <fluent-anchor href="/journal" appearance="lightweight">Mood check-in</fluent-anchor>
      </div>
      <div class="hero__bottom-content">
      <img src="assets/media/humans.svg" alt="Humans">
      </div>
    </div>
  </div>

      <main>
        <div id="welcomeBar">
          <sl-card id="welcomeCard">
            <div slot="header">
              <h2>${this.message}</h2>
            </div>

            <p>
              For more information on the PWABuilder pwa-starter, check out the
              <a href="https://docs.pwabuilder.com/#/starter/quick-start">
                documentation</a>.
            </p>

            <p id="mainInfo">
              Welcome to the
              <a href="https://pwabuilder.com">PWABuilder</a>
              pwa-starter! Be sure to head back to
              <a href="https://pwabuilder.com">PWABuilder</a>
              when you are ready to ship this PWA to the Microsoft Store, Google Play
              and the Apple App Store!
            </p>

            ${'share' in navigator
              ? html`<sl-button slot="footer" variant="primary" @click="${this.share}">Share this Starter!</sl-button>`
              : null}
          </sl-card>

          <sl-card id="infoCard">
            <h2>Technology Used</h2>

            <ul>
              <li>
                <a href="https://www.typescriptlang.org/">TypeScript</a>
              </li>

              <li>
                <a href="https://lit.dev">lit</a>
              </li>

              <li>
                <a href="https://shoelace.style/">Shoelace</a>
              </li>

              <li>
                <a href="https://github.com/thepassle/app-tools/blob/master/router/README.md"
                  >App Tools Router</a>
              </li>
            </ul>
          </sl-card>

          <sl-button href="${resolveRouterPath('about')}" variant="primary">Navigate to About</sl-button>
        </div>
      </main>
    `;
  }
}
