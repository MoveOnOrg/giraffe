class FormsInputBlock {

  constructor($inputBlock) {

     this.$element = $($inputBlock);
     this.bindLabelActiveClass();
  }

  bindLabelActiveClass() {
      
      let $block = this.$element;
      let $inputs = $block.find('input, select, textarea');

      
      $inputs.each(function() {
        let $input = $(this);
         $input.focus(function() {
          $(this).parents('.input-block:first').addClass('active');
        });
        $input.blur(function() {
          $(this).parents('.input-block:first').removeClass('active');
        });
        
      });

  }

}



export default {

  init() {
    
    let $input_blocks = $('.input-block');

    $input_blocks.each(function (index, input_block) {
      let _input_block = new FormsInputBlock(input_block);
    });

  }

}




