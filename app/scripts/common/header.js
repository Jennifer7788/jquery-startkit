!(($) => {

  const Header = {
    /**
     * 初始化头部滚动事件
     */
    eventHandlers() {
      // 滚动事件
      $(document.body).scroll(e => {
        this.headerBehavior(e.target.scrollTop, e.target.scrollLeft);
      });

      // 点击menu item事件
      $('#menu li').click(function (e) {
        $('#menu li').removeClass('check');
        $(this).addClass('check');
      });
    },
    // 头部动画
    headerBehavior(scrollTop, scrollLeft) {
      // header横向滚动同步
      $('#pageHeader').css('transform', `translateX(-${scrollLeft}px)`);

      // 滚动的时候缩小header的高度
      if (scrollTop > 0) {
        $('#pageHeader').addClass('mini');
      } else {
        $('#pageHeader').removeClass('mini');
      }
    },
  }

  Header.eventHandlers()
})(jQuery)
