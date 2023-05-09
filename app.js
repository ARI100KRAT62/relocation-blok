let t = null
$(document).ready(function() {
    
    $(document).mouseup(function(e){
        t = null
    })
    $("#test").mousedown(function(e){
        t = this
    })
    $(document).mousemove(function(e){
        if (t != null) {
            $(t).offset({left:e.pageX});
            $(t).offset({top:e.pageY});
        }
    })
    
});