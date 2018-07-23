$(function () {
    $('#table').bootstrapTable({
        toolbar: '#toolbar',             //工具按钮用哪个容器
        iconsPrefix: 'glyphicon',
        icons: {
            "paginationSwitchDown": "glyphicon-collapse-down icon-chevron-down",
            "paginationSwitchUp": "glyphicon-collapse-up icon-chevron-up",
            "refresh": "glyphicon-refresh icon-refresh",
            "toggle": "glyphicon-list-alt icon-list-alt",
            "columns": "glyphicon-th icon-th",
            "detailOpen": "glyphicon-plus icon-plus",
            "detailClose": "glyphicon-minus icon-minus",
            "export": "glyphicon-export icon-share"
        },
        striped: true,                   //是否显示行间隔色
        cache: false,                    //是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
        pagination: true,                //是否显示分页（*）
        sortable: true,                  //是否启用排序
        sortOrder: "asc",                //排序方式
        sidePagination: "client",        //分页方式：client客户端分页，server服务端分页（*）
        pageNumber: 1,                   //初始化加载第一页，默认第一页,并记录
        pageSize: 5,                     //每页的记录行数（*）
        pageList: [5, 10, 25, 50, 100],  //可供选择的每页的行数（*）
        showPaginationSwitch: true,
        search: false,                   //是否显示表格搜索
        strictSearch: true,
        showColumns: true,               //是否显示所有的列（选择显示的列）
        showRefresh: true,               //是否显示刷新按钮
        minimumCountColumns: 2,          //最少允许的列数
        clickToSelect: true,             //是否启用点击选中行
        //height: 500,                   //行高，如果没有设置height属性，表格自动根据记录条数觉得表格高度
        uniqueId: "id",                  //每一行的唯一标识，一般为主键列
        showToggle: true,                //是否显示详细视图和列表视图的切换按钮
        cardView: false,                 //是否显示详细视图
        detailView: false,               //是否显示父子表
        checkboxHeader: true,            // 设置 false 将在列头隐藏全选复选框
        // 导出 (Use Plugin: tableExport.jquery.plugin)
        showExport: true, // to show export button in toolbar
        exportDataType: 'selected', // support: 'basic', 'all', 'selected'
        exportTypes: ['json', 'xml', 'png', 'csv', 'txt', 'sql', 'doc', 'excel', 'xlsx', 'pdf'], //  support types: 'json', 'xml', 'png', 'csv', 'txt', 'sql', 'doc', 'excel', 'xlsx', 'pdf'
        exportOptions: {
            fileName: 'indexTableExport'
        },
        columns: [
            {
                field: 'state',
                title: '全选',
                showSelectTitle: true,   // checkboxHeader: true时此项无效
                checkbox: true,
                align: 'center',
                valign: 'middle'
            }, {
                field: 'id',
                title: 'Item ID'
            }, {
                field: 'name',
                title: 'Item Name'
            }, {
                field: 'price',
                title: 'Item Price'
            }],
        data: [{
            state: true,
            id: 1,
            name: 'Item 1',
            price: '$1'
        }, {
            state: false,
            id: 2,
            name: 'Item 2',
            price: '$2'
        }, {
            state: false,
            id: 3,
            name: 'Item 2',
            price: '$2'
        }, {
            state: false,
            id: 4,
            name: 'Item 2',
            price: '$2'
        }, {
            state: false,
            id: 5,
            name: 'Item 2',
            price: '$2'
        }, {
            state: false,
            id: 6,
            name: 'Item 2',
            price: '$2'
        }],
        onLoadSuccess: function () {
            console.log("load success");
        },
        onLoadError: function () {
            alert("数据加载失败！");
        },
        onDblClickRow: function (row, $element) {
            alert(JSON.stringify(row, null, "\t"));
        }
    });
});