export default {
	state: {
		defaultHost: '',
		defaultPort: 4444,
		hasEdited: false,
		theme: 'default',
		captionURL: 'https://www.streamtext.net/player/transcript?event=IHaveADream',
		captionCSS: '#streamTextPlayer.streamtext-cart-player p',
		version: 1
	},
	mutations: {
		set(state, {key, value}) {
			state[key] = value
		}
	},
	namespaced: true
}
