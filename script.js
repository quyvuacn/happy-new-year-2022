$('.check').click(function() {
  $(this).children('.circle-loader').toggleClass('load-complete')
  $(this).children('.circle-loader').children('.checkmark').toggle()
  $(this).children('.content').toggleClass('active')
});

var animate = 0

$('#check1').click(function(){
  if( $('#text1').hasClass('active')){
    $('#text1').html('Quyết tâm <del>có người yêu</del> ế')
    animate++
    go()
  }
  else{
    $('#text1').html('Quyết tâm có người yêu')
    animate--
  }
})

$('#check2').click(function(){
  if( $('#text2').hasClass('active')){
    $('#text2').html('Tiết kiệm 2.000.<del>000.000</del>')
    animate++
    go()
  }
  else{
    $('#text2').html('Tiết kiệm 2.000.000.000')
    animate--
  }
})


$('#check3').click(function(){
  if( $('#text3').hasClass('active')){
    $('#text3').html('Thay ốp điện thoại mới')
    animate++
    go()
  }
  else{
    $('#text3').html('Thay điện thoại mới')
    animate--
  }
})

$('#check4').click(function(){
  if( $('#text4').hasClass('active')){
    $('#text4').html('Tăng cân thành công 1.0kg')
    animate++
    go()
  }
  else{
    $('#text4').html('Tăng cân thành công 10kg')
    animate--
  }
})

$('#check5').click(function(){
  if( $('#text5').hasClass('active')){
    $('#text5').html('Sống <del>cuộc sống an nhàn</del>')
    animate++
    go()
  }
  else{
    $('#text5').html('Tăng cân thành công 10kg')
    animate--
  }
})

function go(){
  if(animate==5){
    $('.list').animate(
      {
        top: '-30%'
      }
      ,4000,function(){
        $('.list').toggle()
        $('.Show').toggle()
        $('.Show').animate({
          opacity: 1
        },1000)

      }

    )

    $('.balloon').animate(
      {
        top: '-30%'
      }
      ,2000,function(){
        $('.balloon').toggle()
      }
    )
  }
}

  
