const menuData = [
  {
    title: "Dashboard",
    isDropdown: true,
    children: [
      {
        title: "Dashboard",
        isDropdown: true,
        children: [
          {
            label: "Open Dashboard",
            mainTitle: "Dashboard Test",
            cards: [
              { title: "Load Test", url: "reports/dashboard/home/load-test-openDashboard.html" },
              { title: "Stress Test", url: "reports/dashboard/home/stress-test-openDashboard.html" }
            ]
          }
        ]
      },
      {
        title: "Dashboard Noc",
        isDropdown: true,
        children: [
          {
            label: "Open Dashboard Noc",
            mainTitle: "Dashboard Noc Test",
            cards: [
              { title: "Load Test", url: "reports/dashboard/noc/load-test-openDashboardNoc.html" },
              { title: "Stress Test", url: "reports/dashboard/noc/stress-test-openDashboardNoc.html" }
            ]
          }
        ]
      },
      {
        title: "Dashboard Finance",
        isDropdown: true,
        children: [
          {
            label: "Open Dashboard Finance",
            mainTitle: "Dashboard Finance Test",
            cards: [
              { title: "Load Test", url: "reports/dashboard/finance/load-test-openDashboardFinance.html" },
              { title: "Stress Test", url: "reports/dashboard/finance/stress-test-openDashboardFinance.html" }
            ]
          }
        ]
      }
    ]
  },
  {
    title: "CRM",
    isDropdown: true,
    children: [
      {
        title: "Sales Client Data",
        isDropdown: true,
        children: [
          {
            title: "New Client Data",
            isDropdown: true,
            children: [
              {
                label: "Open Test",
                mainTitle: "Open Menu New Client Sales",
                cards: [
                  { title: "Load Test", url: "reports/crm/sales-client-data/new-client-sales/load-test-openNewClientSales.html" },
                  { title: "Stress Test", url: "reports/crm/sales-client-data/new-client-sales/stress-test-openNewClientSales.html" }
                ]
              },
              {
                label: "Submit Form Test",
                mainTitle: "Submit Form New Client Sales",
                cards: [
                  { title: "Load Test", url: "reports/crm/sales-client-data/new-client-sales/load-test-saveNewClientSales.html" },
                  { title: "Stress Test", url: "reports/crm/sales-client-data/new-client-sales/stress-test-saveNewClientSales.html" }
                ]
              }
            ]
          },
          {
            title: "Change Client Data",
            isDropdown: true,
            children: [
              {
                label: "Open Test",
                mainTitle: "Open Menu Change Client Sales",
                cards: [
                  { title: "Load Test", url: "reports/crm/sales-client-data/change-client-sales/load-test-openChangeClientSales.html" },
                  { title: "Stress Test", url: "reports/crm/sales-client-data/change-client-sales/stress-test-openChangeClientSales.html" }
                ]
              },
              {
                label: "Change Data Test",
                mainTitle: "Update Data Client Sales",
                cards: [
                  { title: "Load Test", url: "reports/crm/sales-client-data/change-client-sales/load-test-updateClientSales.html" },
                  { title: "Stress Test", url: "reports/crm/sales-client-data/change-client-sales/stress-test-updateClientSales.html" }
                ]
              }
            ]
          },
          {
            title: "Delete Client Data",
            isDropdown: true,
            children: [
              {
                label: "Open Test",
                mainTitle: "Open Menu Delete Client Sales",
                cards: [
                  { title: "Load Test", url: "reports/crm/sales-client-data/delete-client-sales/load-test-openDeleteClientSales.html" },
                  { title: "Stress Test", url: "reports/crm/sales-client-data/delete-client-sales/stress-test-openDeleteClientSales.html" }
                ]
              }
            ]
          },
          {
            title: "View Client Data",
            isDropdown: true,
            children: [
              {
                label: "Open Test",
                mainTitle: "Open Menu View Client Sales",
                cards: [
                  { title: "Load Test", url: "reports/crm/sales-client-data/view-client-sales/load-test-openViewClientSales.html" },
                  { title: "Stress Test", url: "reports/crm/sales-client-data/view-client-sales/stress-test-openViewClientSales.html" }
                ]
              }
            ]
          },
          {
            title: "Export Client Data",
            isDropdown: true,
            children: [
              {
                label: "Open Test",
                mainTitle: "Open Menu Export Client Sales",
                cards: [
                  { title: "Load Test", url: "reports/crm/sales-client-data/export-client-sales/load-test-openExportClientSales.html" },
                  { title: "Stress Test", url: "reports/crm/sales-client-data/export-client-sales/stress-test-openExportClientSales.html" }
                ]
              }
            ]
          },
          {
            title: "Import Client Data",
            isDropdown: true,
            children: [
              {
                label: "Open Test",
                mainTitle: "Open Menu Import Client Sales",
                cards: [
                  { title: "Load Test", url: "reports/crm/sales-client-data/import-client-sales/load-test-openImportClientSales.html" },
                  { title: "Stress Test", url: "reports/crm/sales-client-data/import-client-sales/stress-test-openImportClientSales.html" }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
];