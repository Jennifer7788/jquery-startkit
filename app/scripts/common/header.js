!(($) => {
  const Header = {
    /**
     * 初始化头部滚动事件
     */
    eventHandlers() {
      $('#indexContainer').scroll(e => {
        this.headerBehavior(e.target.scrollTop)
      })

      $('.menuIcon').click(() => {
        this.openSlide()
      })

      $('#closeBtn').click(() => {
        this.closeSlide()
      })
    },

    // 头部动画
    headerBehavior(scrollTop) {
      if (scrollTop > 0) {
        $('#pageHeader').removeClass('static')
        $('#pageHeader').addClass('fixed')
      } else {
        $('#pageHeader').removeClass('fixed')
        $('#pageHeader').addClass('static')
      }
    },

    // 弹出侧滑框
    openSlide() {
      $('#slideMenu').addClass('show')
    },

    // 关闭侧滑框
    closeSlide() {
      $('#slideMenu').removeClass('show')
    },

    /**
     * 其他函数，记得函数后面要加逗号
     */
    test() {}
  }

  Header.eventHandlers()
})(jQuery)
