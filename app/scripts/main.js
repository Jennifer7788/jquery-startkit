!(($) => {
  const IndexPage = {


    init() {
      this.initEvents()
    },

    initEvents() {
      $(document.body).scroll(e => {
        // 业务模块滚动动画
        this.businessSectorAnimation();

        // 核心优势滚动动画
        this.businessModuleAnimation('#brandPremiun');
        this.businessModuleAnimation('#withAbundantCapital');

        // -------------------------
        let $professionalManagement = $('#professionalManagement')[0].getBoundingClientRect();
        if ($(document.body).innerHeight() - $professionalManagement.top > $professionalManagement.height / 3) {
          $('#professionalManagement .bg-img1').addClass('active');
          setTimeout(() => {
            $('#professionalManagement .text-area').addClass('active');
            setTimeout(() => {
              $('#professionalManagement .title').addClass('active');
              $('#professionalManagement .horizontal-line').addClass('active');
              setTimeout(() => {
                $('#professionalManagement .EN-text-area').addClass('active');
              }, 300);
            }, 300);
          }, 200);
        } else {
          $('#professionalManagement .title').removeClass('active');
          $('#professionalManagement .text-area').removeClass('active');
          $('#professionalManagement .bg-img1').removeClass('active');
          $('#professionalManagement .horizontal-line').removeClass('active');
          $('#professionalManagement .EN-text-area').removeClass('active');
        }
      });
    },

    // 核心优势动画通用封装
    businessModuleAnimation(targetId) {
      let $dom = $(targetId)[0].getBoundingClientRect();
      if ($(document.body).innerHeight() - $dom.top > $dom.height / 3) {
        $(`${targetId} .row-content`).addClass('active');
      } else {
        $(`${targetId} .row-content`).removeClass('active');
      }
    },

    // 业务模块动画通用封装
    businessSectorAnimation() {
      let $businessSector = $('#businessSector')[0].getBoundingClientRect();

      if ($(document.body).innerHeight() - $businessSector.top > $businessSector.height / 3) {
        $('#businessModule .img-con').addClass('active');
      } else {
        $('#businessModule .img-con').removeClass('active');
      }
    }
  }

  IndexPage.init()
})(jQuery)
