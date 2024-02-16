{
    "Layout" : 'horizontal',
    "name" : 'Dataset Filters',
    "filters": [
        {
        "Label": "Type",
        "values": ["IDP","RDS", "ISON", "CSV"],
        "helpText": "Select one of the values",
        "required": true,
        "type": "SELECT",
        "multiSelect": false
        },
        {
            "Label": "Assigned To",
            "values": ["Client", "Broker"],
            "helpText": "Select one of the values",
            "required": true,
            "type": "CHECKBOX"
        },
        {
            "Label": "Filter",
            "values": ["All","Active", "Drafts", "Favorites"],
            "helpText": "Select one of the values",
            "required": true,
            "type": "TOGGLE"
        },
        {
            "Label": "Search by name",
            "values": "",
            "helpText": "Enter title",
            "required": true,
            "type": "SEARCH",
            "icon": true
        },
        {
            "label": "Download",
            "type" : "BUTTON",
            "onclick": (filters, event) => {}
        },
        {
            "label": "Refresh",
            "type" : "BUTTON",
            "onclick": (filters, event) => {}
        },
        {
            "label": "Sorting",
            "type" : "BUTTON",
            "onclick": (filters, event) => {}
        }


    ]
}



 







