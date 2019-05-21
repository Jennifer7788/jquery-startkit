!(($) => {
  const IndexPage = {
    // 是否在加载更多数据中
    loadingMore: false,

    init() {
      this.initEvents()
    },

    initEvents() {
      // 距离底部多少的时候触发加载更多
      const TO_BOTTOM_DISTANCE = 30;

      $('#indexContainer').scroll(e => {
        if (this.loadingMore) {
          return false;
        }

        // 判断是否滚动到底部: 页面已经滚动到上面的长度 + 页面显示中的长度 > 页面的总长度 - 距离底部多少距离
        // 事实上，页面的总长度 = 页面已经滚动到屏幕上面的长度 + 页面显示中的长度
        // 这个 “距离底部多少距离” 意思是页面滚动距离底部还有30像素的时候就认为滚动到底部
        if (e.target.scrollTop + e.target.clientHeight > e.target.scrollHeight - TO_BOTTOM_DISTANCE) {
          this.loadingMore = true;

          // 延迟一秒模拟异步请求
          setTimeout(() => {
            const itemContent = [...new Array(10)].map((_, index) => {
              if (index % 2 === 0) {
                return `
                  <a href="./pages/article.html" class="list-item">
                    <div class="item-left">
                      <div class="item-img"
                        style="background-image: url(https://www.volanews.com/upload/portal/20190520/d01310d5be9b51a83f5a84961fd137c0.jpg)">
                      </div>
                    </div>
                    <div class="item-right">
                      <div class="item-title">Smartphone companies launched a price war in India</div>
                      <div class="item-bottom">
                        <span>by Olivia</span>
                        <span>
                          <img src="./images/date.png" width="10">
                          <i class="time">7 hours ago</i>
                        </span>
                      </div>
                    </div>
                  </a>
                `
              } else {
                return `
                  <a href="./pages/article.html" class="list-item">
                    <div class="item-left">
                      <div class="item-img"
                        style="background-image: url(https://www.volanews.com/upload/portal/20190520/eb6ee8fa731970078f54379da12ae525.png)">
                      </div>
                    </div>
                    <div class="item-right">
                      <div class="item-title">2019 Fintech Trends to Watch</div>
                      <div class="item-bottom">
                        <span>by Kyle</span>
                        <span>
                          <img src="./images/date.png" width="10">
                          <i class="time">7 hours ago </i>
                        </span>
                      </div>
                    </div>
                  </a>
                `
              }
            })

            $('#smallList').append(itemContent);
            
            this.loadingMore = false;
          }, 1000);
        }
      })
    }
  }

  IndexPage.init()
})(jQuery)
