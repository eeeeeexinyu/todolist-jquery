$(function(){
 'use strict';

 var $form_add_task = $('.task-add'),
   $del_item,
    task_list={};
    init();
//获取用户输入的值给new_task
    $form_add_task.on('submit',function(e){
        var new_task={};
        e.preventDefault();//禁止默认事件发生，此处是禁止表单提交
        var $input=$(this).find('input');
        // console.log('$input',$input);
        new_task.content= $input.val();
        console.log('new_task.content',new_task.content);
        if(!new_task.content) return;
        if(add_task(new_task)){
           // render_item_list();
            $input.val(null);
        };//**相当于执行了add_task(new_task)；和if中的语句****add_task(new_task)return true了，所以这个可以执行且
    }) 

//添加new_task到task_list中
    function add_task(new_task){
        task_list.push(new_task); 
        refresh_localstore();
        return true;
    }

// 数据初始化
    function init(){
        // store.clear();
        task_list=store.get('task_list')||[];
        if(task_list.length) render_item_list();
    }

//删除并更新模板
    function delete_item(index){
        if(index==null||!task_list[index]) return;
        console.log(task_list[index]);
        delete task_list[index];
        refresh_localstore();
    }

//刷新localstore并渲染list模板
    function refresh_localstore(){
        store.set('task_list',task_list);
        render_item_list();
    }

//item模板
    function render_item_tpl(new_task,index){
        if(!index||!new_task) return;
        var tpl= '<div class="task-item clearfix" data-index="'+index+'">'+
                        '<input type="checkbox">'+
                        '<span class="task-content">'+new_task.content+'</span>'+
                       ' <div class="fr btnbox">'+
                            '<button class="del">删除</button>'+
                            '<button class="detail">详情</button>'+
                         '</div>'+   
                    '</div>'
            // var $item_list=$('.taks-item-list');
            // $item_list.append(new_task);
            return $(tpl);    
    }
//监听删除事件
    function listen_del(){
            $del_item.on('click',function(){
            var $this=$(this);
            var $item=$this.parent().parent();
            var index=$item.data('index');
            var tmp=confirm('sure?');
            tmp?delete_item(index):null;           

    }) 
    }

 //渲染item_list
    function render_item_list(){
        var $item_list=$('.taks-item-list');
        $item_list.html('');
        for (var i = 0; i <task_list.length; i++) {
            var $item=render_item_tpl(task_list[i],i)
            $item_list.append($item);
        }
        var $del_item = $('.del');
        var $detail_item=$('.detail');
        listen_del();
    }
//渲染详情页
   function render_detail(data){
        var detail_tpl= '<div class="title">title</div>'+
                        '<div class="desc">123123</div>'+
                        '<div class="remainder">'+'<input type="date" name="">'+'</div>'+
                        '<button>submit</button>'
        return detail_tpl;
   }
 

});



