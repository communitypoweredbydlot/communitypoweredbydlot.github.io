import { Component, Watch, Vue } from 'nuxt-property-decorator'

@Component
export default class LanguageSelectLogic extends Vue {
  isOpen = false

  get availableLocales () {
    const locales = this.$i18n.locales || []
    return []
    /* return locales.filter((i: string | any) => {
      const code = i instanceof String ? i : i.code
      return code !== this.$i18n.locale
    }) */
  }

  onClickOutside () {
    if (this.isOpen) {
      this.isOpen = false
    }
  }

  @Watch('$route')
  afterRouteChanged () {
    this.isOpen = false
  }
}
