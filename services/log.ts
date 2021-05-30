class Log {
  private defaults: Services.Log.CSS = {
    backgroundColor: '#282a36',
    color: '#bd93f9',
    size: 14
  }
  private pattern: Services.Log.CSS = this.defaults

  set color(color: string) { this.pattern.color = color }
  set backgroundColor(backgroundColor: string) { this.pattern.backgroundColor = backgroundColor }
  set size(size: number) { this.pattern.size = size}
  set settings(settings: Services.Log.CSS) { this.pattern = { ...this.pattern, ...this.settings } }

  public print(message: string) {
    console.log(message)
  }

  public colored(...message: string[]) {
    const css = { ...this.defaults, ...this.pattern }
    console.log(
      `%c${message}`,
      `
        background-color: ${css.backgroundColor};
        color: ${css.color};
        font-size: ${typeof css.size === 'string' ? css.size : css.size + 'px'};
      `
    )
  }
}

export default new Log()