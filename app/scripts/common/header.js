!(($) => {

  const Header = {
    /**
     * 初始化头部滚动事件
     */
    eventHandlers() {
      $(document.body).scroll(e => {
        this.headerBehavior(e.target.scrollTop, e.target.scrollLeft);
      });

    },
    // 头部动画
    headerBehavior(scrollTop, scrollLeft) {
      // header横向滚动同步
      $('#pageHeader').css('transform', `translateX(-${scrollLeft}px)`);
    },
  }

  Header.eventHandlers()
})(jQuery)
