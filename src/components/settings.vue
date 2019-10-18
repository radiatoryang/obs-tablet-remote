<template>
	<overlay
		wide
		@close="showSettings(false)"
	>
		<template v-slot:title>
			Global Settings
		</template>

		<div class="flex -mx-2">
			<div class="w-1/2 px-2">
				<div class="field">
					<label
						:for="`settings-theme`"
						class="label"
					>Theme</label>
					<select
						:id="`settings-theme`"
						v-model="theme"
						class="select"
					>
						<option value="default">
							Default
						</option>
						<option value="dark-blue">
							Dark & Blue
						</option>
					</select>
				</div>
			</div>
			<div class="w-1/2 px-2">
				<h3 class="text-xl mb-2">
					Danger Zone
				</h3>
				<button
					class="button is-primary"
					@click="askForReset"
				>
					Reset Layout
				</button>
			</div>
			<div class="w-1/2 px-2">
				<div class="field">
					<label
						:for="`settings-captionURL`"
						class="label"
					>Caption Scrape URL</label>
					<input
						:id="`settings-captionURL`"
						v-model="captionURL"
						class="input"
					>
				</div>
				<div class="field">
					<label
						:for="`settings-captionCSS`"
						class="label"
					>Caption CSS Selector</label>
					<input
						:id="`settings-captionCSS`"
						v-model="captionCSS"
						class="input"
					>
				</div>
			</div>
		</div>
	</overlay>
</template>

<script>
import {mapMutations, mapState} from 'vuex'

import Overlay from '@/components/overlay'

export default {
	components: {
		Overlay
	},
	computed: {
		...mapState(['settings']),
		theme: {
			get({settings}) {
				return settings.theme
			},
			set(value) {
				this.setSetting({key: 'theme', value})
			}
		},
		captionURL: {
			get({settings}) {
				return settings.captionURL
			},
			set(value) {
				this.setSetting({key: 'captionURL', value})
			}
		},
		captionCSS: {
			get({settings}) {
				return settings.captionCSS
			},
			set(value) {
				this.setSetting({key: 'captionCSS', value})
			}
		}

	},
	methods: {
		askForReset() {
			// eslint-disable-next-line no-alert
			if (confirm('Are you sure you want to reset the layout?')) {
				this.resetLayout()
			}
		},
		...mapMutations(['showSettings']),
		...mapMutations('settings', {
			setSetting: 'set'
		}),
		...mapMutations('layout', ['resetLayout'])
	}
}
</script>
