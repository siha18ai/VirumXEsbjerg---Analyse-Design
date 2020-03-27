import { PolymerElement } from '@polymer/polymer/polymer-element.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
import '@vaadin/vaadin-charts/src/vaadin-chart.js';

{
  class ButtonsBarElement extends PolymerElement {
    static get template() {
      return html`
<style>
      :host {
        flex: none;
        display: flex;
        flex-wrap: wrap;
        transition: box-shadow .2s;
        justify-content: space-between;
        padding-top: var(--lumo-space-s);
        align-items: baseline;
        box-shadow: 0 -3px 3px -3px var(--lumo-shade-20pct);
      }

      :host([no-scroll]) {
        box-shadow: none;
      }

      :host ::slotted([slot=info]),
      .info {
        text-align: right;
        flex: 1;
      }

      ::slotted(vaadin-button) {
        margin: var(--lumo-space-xs);
      }

      @media (max-width: 600px) {
        :host ::slotted([slot=info]) {
          order: -1;
          min-width: 100%;
          flex-basis: 100%;
        }
      }
    </style>
<slot name="left"></slot>
<slot name="info">
 <div class="info"></div>
</slot>
<slot name="right"></slot>
<vaadin-chart type="area" title="Historic and Estimated Worldwide Population Growth by Region" subtitle="Source: Wikipedia.org" categories="[1750, 1800, 1850, 1900, 1950, 1999, 2050]" stacking="normal" no-legend="" tooltip="">
 <vaadin-chart-series title="Asia" values="[502, 635, 809, 947, 1402, 3634, 5268]" unit="Millions"></vaadin-chart-series>
 <vaadin-chart-series title="Africa" values="[106, 107, 111, 133, 221, 767, 1766]" unit="Millions"></vaadin-chart-series>
 <vaadin-chart-series title="Europe" values="[163, 203, 276, 408, 547, 729, 628]" unit="Millions"></vaadin-chart-series>
 <vaadin-chart-series title="America" values="[18, 31, 54, 156, 339, 818, 1201]" unit="Millions"></vaadin-chart-series>
 <vaadin-chart-series title="Oceania" values="[2, 2, 2, 6, 13, 30, 46]" unit="Millions"></vaadin-chart-series>
</vaadin-chart>
`;
    }

    static get is() {
      return 'buttons-bar';
    }
  }

  window.customElements.define(ButtonsBarElement.is, ButtonsBarElement);
}
