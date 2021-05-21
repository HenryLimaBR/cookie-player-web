class Track {
  public id = ''
  public url = ''
  public title = ''
  public description = ''
  public cover = {
    thumbnail: '',
    image: ''
  }
  public duration = {
    timestamp: '0:00',
    seconds: 0
  }
  public ago = ''
  public views = 0
  public author = {
    name: '',
    url: ''
  }
  private date = new Date

  constructor(data: any) {
    this.id = data.id
    this.url = data.url
    this.title = data.title
    this.description = data.description
    this.cover = data.cover
    this.duration = data.duration
    this.ago = data.ago
    this.views = data.views
    this.author = data.author
    this.date = data.date
  }
}

export default Track