!(($) => {
  const dropDowmPage = {
    init() {
      this.initEvents()
    },
    initEvents() {
      $(".dropDown-box-header").on("click",(e) => {
        $(e.target).parent(".dropDown-box-header").siblings(".dropDown-box-body").toggleClass('show');
      });
      $(".dropDown-item").on("click",(e) => {
        console.log($(e.target).text());
        let text="<div class='tag-con'><label>"+$(e.target).text()+"</label> <i class='icon-close'></i></div>"
        $(".tag-area").append(text);
      });
    },
  }
  dropDowmPage.init()
})(jQuery)
