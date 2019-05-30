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
        let text="<div><label>"+$(e.target).text()+"</label> <i>X</i></div>"
        $(".tag-con").append(text);
      });
    },
  }
  dropDowmPage.init()
})(jQuery)
