/**
 * Created by yyg on 2016/12/29.
 */
$('.y_select select').select2();
$("#pagination").pagination(56, {
    num_edge_entries: 2,
    num_display_entries: 4,
    prev_text:'<',
    next_text:'>',
    callback: function(){},
    items_per_page:1
});