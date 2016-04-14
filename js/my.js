/**
 * Created by Administrator on 2016/3/23.
 */
$('#myExperience button').click(function(){
    $('.panel-body').css('display','none');
    $('#myExperience button').removeClass('btn-info');
    $(this).addClass('btn-info');
    $('#Experience'+$(this).attr('id')).css('display','block')
    $('#myExp').text($(this).text());
});