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
        this.businessModuleAnimation('#professionalManagement');
        this.businessModuleAnimation('#highQualityProducts');
        this.businessModuleAnimation('#industrialSupporting');
      });
    },

    // 核心优势动画通用封装
     businessModuleAnimation(targetId) {
       // -------------------------
       let $professionalManagement = $(targetId)[0].getBoundingClientRect();
       if ($(document.body).innerHeight() - $professionalManagement.top > $professionalManagement.height / 3) {
         $(targetId).addClass('active');
       } else {
         $(targetId).removeClass('active');
       }
    },
    businessModuleAnimation1(targetId) {
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
   /* businessSectorAnimation() {
      let $businessSector = $('#businessSector')[0].getBoundingClientRect();

      if ($(document.body).innerHeight() - $businessSector.top > $businessSector.height / 3) {
        $('#businessModule .img-con').addClass('active');
      } else {
        $('#businessModule .img-con').removeClass('active');
      }
    }*/
  }

  IndexPage.init()
})(jQuery)
