$(function(){
 'use strict';

 var $form_add_task = $('.task-add'),
   
    task_list={};
    init();
    $form_add_task.on('submit',function(e){
        var new_task={};
        e.preventDefault();//禁止默认事件发生，此处是禁止表单提交
        var $input=$(this).find('input');
        console.log('$input',$input);
        new_task.content= $input.val();
        console.log('new_task.content',new_task.content);
    })

    // 数据初始化
    function init(){
        // store.clear();
        task_list=store.get('task_list')||[];
        if(task_list.length) render_item_list();
    }
    function render_item_tpl(new_task,index){
        var tpl= '123';
        // '<div class="task-item clearfix" data-index="'+index+'">'+
        //                 '<input type="checkbox">'+
        //                 '<span class="task-content">'+new_task.content+'</span>'+
        //                ' <div class="fr btnbox">'+
        //                     '<button class="del">删除</button>'+
        //                     '<button class="detail">详情</button>'+
        //                  '</div>'+   
        //             '</div>'
            // var $item_list=$('.taks-item-list');
            // $item_list.append(new_task);
            return $(tpl);    
    }
    function render_item_list(){
        // var $item_list=$('.taks-item-list');
        // // $item_list.html('');
        // for (var i = 0; i <task_list.length; i++) {
        //     var $item=render_item_tpl(task_list[i],i)
        //     $item_list.append($item);
        // }
        // var $del_item = $('.del');
    }
})