

const screenWidthMixin = {
    data(){
        return {
            windowWidth: 0
        }
    },
    created () {
        if (process.browser) {
            window.addEventListener('resize', this.handleResize)
            this.handleResize()
        }
    },
    destroyed () {
        if (process.browser) {
        window.removeEventListener('resize', this.handleResize)
        }
    },
    methods : {
        handleResize () {
            this.windowWidth = window.innerWidth
        }
    }
}

export default screenWidthMixin