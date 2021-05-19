class Log {
  private defaults: Services.Log.CSS = {
    backgroundColor: '#282a36',
    color: '#bd93f9',
    size: 14
  }

  print(message: string) {
    console.log(message)
  }

  c(message: string, css: Services.Log.CSS = this.defaults) {
    css = { ...this.defaults, ...css }
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