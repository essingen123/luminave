import { Element as PolymerElement } from '/node_modules/@polymer/polymer/polymer-element.js'
import ReduxMixin from '../../reduxStore.js'
import { setLive } from '../../actions/index.js'

/*
 * Handle the LIVE mode
 */
class LiveMode extends ReduxMixin(PolymerElement) {

  static get properties() {
    return {
      live: {
        type: Boolean,
        statePath: 'live'
      },
      liveLabel: {
        type: String,
        computed: 'computeLiveLabel(live)'
      }
    }
  }

  computeLiveLabel() {
    return this.live ? 'Live' : 'edit'
  }

  handleLive() {
    this.dispatch(setLive(!this.live))
  }

  static get template() {
    return `
      <div>
        Mode: <button on-click="handleLive">[[liveLabel]]</button>
      </div>
    `
  }
}

customElements.define('live-mode', LiveMode)
