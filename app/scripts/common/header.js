!(($) => {

  const Header = {
    /**
     * 初始化头部滚动事件
     */
    eventHandlers() {
      $('#indexContainer').scroll(e => {
        this.headerBehavior(e.target.scrollTop)
      })
    },
    // 头部动画
    headerBehavior(scrollTop) {
      /*if (scrollTop >10) {
        $('#pageHeader').removeClass('static')
        $('#pageHeader').addClass('fixed')
      } else {
        $('#pageHeader').removeClass('fixed')
        $('#pageHeader').addClass('static')
      }*/
    },
  }

  console.log('in')
  Header.eventHandlers()
})(jQuery)
