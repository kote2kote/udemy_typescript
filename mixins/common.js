export default {
  data() {
    return {
      viewPortSize: [
        { name: 'isTB', size: 481, is: false },
        { name: 'isPC', size: 769, is: false },
        { name: 'isSM', size: 640, is: false },
        { name: 'isMD', size: 768, is: false },
        { name: 'isLG', size: 1024, is: false },
        { name: 'isXL', size: 1280, is: false },
        { name: 'isWIDE', size: 1600, is: false }
      ],
      windowSizeX: 0,
      isProd: process.env.NODE_ENV === 'production'
    }
  },
  mounted() {
    console.log('common mounted', this.isKote2)
    this.setWindowSize()
    window.addEventListener('resize', this.setWindowSize)
  },
  methods: {
    setWindowSize() {
      this.windowSizeX = window.innerWidth
      this.resetWindowSize()
      const tmp = []
      for (const n of this.viewPortSize) {
        if (n.name === 'isTB') {
          if (this.windowSizeX >= n.size) {
            n.is = true
          }
        }
        if (n.name === 'isPC') {
          if (this.windowSizeX >= n.size) {
            n.is = true
          }
        }
        if (n.name === 'isSM') {
          if (this.windowSizeX >= n.size) {
            n.is = true
          }
        }
        if (n.name === 'isMD') {
          if (this.windowSizeX >= n.size) {
            n.is = true
          }
        }
        if (n.name === 'isLG') {
          if (this.windowSizeX >= n.size) {
            n.is = true
          }
        }
        if (n.name === 'isXL') {
          if (this.windowSizeX >= n.size) {
            n.is = true
          }
        }
        if (n.name === 'isWIDE') {
          if (this.windowSizeX >= n.size) {
            n.is = true
          }
        }
        tmp.push(n)
      }
      this.viewPortSize = []
      this.viewPortSize = tmp
      // console.log('checkViewPortSize', this.checkViewPortSize())
    },
    resetWindowSize() {
      const tmp = []
      for (const n of this.viewPortSize) {
        n.is = false
        tmp.push(n)
      }
      this.viewPortSize = []
      this.viewPortSize = tmp
    },
    checkViewPortSize(name) {
      for (const n of this.viewPortSize) {
        if (name === n.name) {
          return n
        }
      }
    }
  },
  computed: {
    isBusy() {
      return this.$store.getters['commitStatus/isBusy']
    },
    isError() {
      return this.$store.getters['commitStatus/isError']
    },
    message() {
      return this.$store.getters['commitStatus/message']
    }
  }
}
