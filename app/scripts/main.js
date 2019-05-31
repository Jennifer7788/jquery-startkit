!(($) => {
  const dropDowmPage = {
    init() {
      this.initEvents()
    },
    initEvents() {
      //弹出下拉框
      $('.dropDown-box-header').on('click',(e) => {
        $(e.target).parent('.dropDown-box-header').siblings('.dropDown-box-body').toggleClass('show');
      });

      $(document).on('click', e => {
        //点击下拉框的其他地方隐藏下拉框
        if (
          $(e.target).parents('.dropDown-box-body').length === 0 &&
          $(e.target).parents('.dropDown-box-header').length === 0
        ) {
          $('.dropDown-box-body').removeClass('show');
        }
      });

      //下拉框选项点击事件
      $('.dropDown-item').on('click',(e) => {
        let value = $(e.target).text();
        if(value===''){
          value = $(e.target).parent('.dropDown-item').text();
          if ($(e.target).parent('.dropDown-item').hasClass('checked')) {
            this.removeItem(value);
          } else {
            this.selectItem(value);
          }
        }else{
          if ($(e.target).hasClass('checked')) {
            this.removeItem(value);
          } else {
            this.selectItem(value);
          }
        }

      });

      //已选列表点击某一项移除该项
      $('.tag-area').on('click', '.tag-con', e => {
        if (e.target.textContent=='') {
          this.removeItem($(e.target).parent('.tag-con').text().trim());
        }else{
          this.removeItem(e.target.textContent);
        }

      });

      //下拉框可模糊搜索
      var search_input = $('.dropDown-box-search input');
      $(search_input).bind("input propertychange",(e)=>{
        var input_value =$(e.target).val();
        var dropDown_item =$(e.target).parent('.dropDown-box-search').siblings('.dropDown-box-main').find("li");

        $(dropDown_item).each((index, item) => {
          if (input_value===''){
            $(item).show();
          }else{
            if (item.textContent.toLowerCase().indexOf(input_value.toLowerCase())>=0) {
              $(item).show();
            } else{
              $(item).hide();
            }
          }

        });
      });
    },

    //移除选中下拉项
    removeItem(value) {
      //移除已选列表中的value的项
      $('.tag-area .tag-con label').each((index, item) => {
        if (item.textContent === value) {
          $('.tag-area .tag-con').eq(index).remove();
        }
      });

      //移除已选的项到已选列表
      $('.dropDown-item').each((index, item) => {
        if (item.textContent === value) {
          $(item).removeClass('checked');
        }
      });
    },

    //添加选中菜单项
    selectItem(value) {
      //下拉列表中选中内容是value的
      $('.dropDown-item').each((index, item) => {
        if (item.textContent === value) {
          $(item).addClass('checked');
        }
      });

      //添加已选的项到已选列表
      let text=`
        <div class='tag-con'>
          <label>${value}</label>
          <i class='icon-close'></i>
        </div>
      `;

      $('.tag-area').append(text);
    }



  };
  dropDowmPage.init()
})(jQuery);
