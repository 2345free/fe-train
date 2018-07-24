$(function () {

    $('#table').DataTable({
        "processing": true, // 必须加上这个才能显示加载中的效果
        "serverSide": false,
        "stateSave": true,
        "paging": true, // 是否开启本地分页
        "pagingType": "full_numbers",
        "lengthMenu": [[5, 10, 25, 50, -1], [5, 10, 25, 50, "All"]], // 定义每页显示数据数量
        "displayLength": 5,
        "ordering": true,
        "info": true,
        "autoWidth": true,
        "language": {
            // 这里很重要，如果你的"加载中"是文字，则直接写上文字即可，如果是gif的图片，使用img标签就可以加载
            "processing": "<img src='/js/lib/dataTables/media/images/loading.gif'>",
            "lengthMenu": "显示 _MENU_ 项结果",
            "zeroRecords": "没有匹配结果",
            "info": "显示第 _START_ 至 _END_ 项结果,共 _TOTAL_ 项",
            "infoEmpty": "显示第 0 至 0 项结果，共 0 项",
            "infoFiltered": "(由 _MAX_ 项结果过滤)",
            "search": "搜索:",
            "emptyTable": "表中数据为空",
            "loadingRecords": "载入中...",
            "paginate": {
                "first": "首页",
                "previous": "上一页",
                "next": "下一页",
                "last": "末页"
            },
            "aria": {
                "sortAscending": ": 以升序排列此列",
                "sortDescending": ": 以降序排列此列"
            }

        },
        "ajax": {
            "url": "/data.json",
            // "contentType": "application/json",
            "type": "GET",
            "dataSrc": "data",
            "data": function (param) {
                param.timestamp = new Date().getTime();
                // return JSON.stringify(param); // post请求
            }
        },
        //使用对象数组，一定要配置columns，告诉 DataTables 每列对应的属性
        //data 这里是固定不变的，name，position，salary，office 为你数据里对应的属性
        "columns": [
            {
                data: 'name',
                title: '姓名',
                defaultContent: ''
            },
            {
                data: 'position',
                title: '职位',
                defaultContent: ''
            },
            {
                data: 'salary',
                title: '工资',
                render: function (data, type, full, meta) {
                    return data || '';
                }
            },
            {
                data: 'office',
                title: '办公地点',
                defaultContent: ''
            }
        ]
    });

});