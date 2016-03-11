export class ToolbarTemplate {
  dataSource = {
    type: 'odata',
    transport: {
      read: '//demos.telerik.com/kendo-ui/service/Northwind.svc/Products'
    },
    pageSize: 20,
    serverPaging: true,
    serverSorting: true,
    serverFiltering: true
  };

  test() {
    alert('test');
  }
}
