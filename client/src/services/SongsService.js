import Api from '@/services/Api'

export default {
  getAllSongs () {
    return Api().get('songs')
  },
  post (song) {
    return Api().post('songs', song)
  }
}
