const functions = require('firebase-functions');
//const express = require('express'); 
//const app = express(); 

exports.VisitorPass = functions.https.onRequest((req, res) => {
    const {challenge} = req.body; 

    res.send({challenge})
}); 

exports.slashCommand = functions.https.onRequest(async (req, res) => {

    const viewData = {
        "type": "modal",
	        "title": {
		        "type": "plain_text",
		        "text": "Visitor Pass Request",
		        "emoji": true
	        },
	        "submit": {
		        "type": "plain_text",
		        "text": "Submit",
		        "emoji": true
	        },
	        "close": {
		        "type": "plain_text",
		        "text": "Cancel",
		        "emoji": true
	        },
        "blocks": [
            {
            "type": "section",
			"text": {
				"type": "mrkdwn",
				"text": "*Hi <fakelink.toUser.com|@David>!* Please fill out the form to submit a Visitors Pass"
			}
		},
		{
			"type": "divider"
		},
		{
			"type": "section",
			"text": {
				"type": "mrkdwn",
				"text": "Urgency"
			},
			"accessory": {
				"type": "static_select",
				"placeholder": {
					"type": "plain_text",
					"text": "Select an item",
					"emoji": true
				},
				"options": [
					{
						"text": {
							"type": "plain_text",
							"text": "🔴 Urgent",
							"emoji": true
						},
						"value": "value-0"
					},
					{
						"text": {
							"type": "plain_text",
							"text": "🔵 Timely",
							"emoji": true
						},
						"value": "value-1"
					},
					{
						"text": {
							"type": "plain_text",
							"text": "⚪️ Not Urgent",
							"emoji": true
						},
						"value": "value-2"
					}
				]
			}
		},
		{
			"type": "input",
			"element": {
				"type": "plain_text_input"
			},
			"label": {
				"type": "plain_text",
				"text": "Number of Passes",
				"emoji": true
			}
		},
		{
			"type": "input",
			"element": {
				"type": "plain_text_input"
			},
			"label": {
				"type": "plain_text",
				"text": "Requester: Last Name, First Name",
				"emoji": true
			}
		},
		{
			"type": "input",
			"element": {
				"type": "plain_text_input"
			},
			"label": {
				"type": "plain_text",
				"text": "Requested: Last Name, First Name",
				"emoji": true
			}
		},
		{
			"type": "input",
			"element": {
				"type": "plain_text_input"
			},
			"label": {
				"type": "plain_text",
				"text": "Visitor Destination",
				"emoji": true
			}
		},
		{
			"type": "input",
			"element": {
				"type": "plain_text_input"
			},
			"label": {
				"type": "plain_text",
				"text": "Parking Location",
				"emoji": true
			}
		},
		{
			"type": "section",
			"text": {
				"type": "mrkdwn",
				"text": "Date of Visitor Arrival"
			},
			"accessory": {
				"type": "datepicker",
				"initial_date": "2020-04-28",
				"placeholder": {
					"type": "plain_text",
					"text": "Select a date",
					"emoji": true
				}
			}
		},
		{
			"type": "input",
			"element": {
				"type": "plain_text_input"
			},
			"label": {
				"type": "plain_text",
				"text": "Time of Visitor Arrival",
				"emoji": true
			}
		},
		{
			"type": "input",
			"element": {
				"type": "plain_text_input"
			},
			"label": {
				"type": "plain_text",
				"text": "Event Name (if applicable)",
				"emoji": true
			}
		},
		{
			"type": "input",
			"element": {
				"type": "checkboxes",
				"options": [
					{
						"text": {
							"type": "plain_text",
							"text": "Yes",
							"emoji": true
						},
						"value": "value-0"
					},
					{
						"text": {
							"type": "plain_text",
							"text": "No",
							"emoji": true
						},
						"value": "value-1"
					}
				]
			},
			"label": {
				"type": "plain_text",
				"text": "Email of pass creation and arrival of EACH guest?",
				"emoji": true
			}
		},
		{
			"type": "input",
			"element": {
				"type": "plain_text_input",
				"multiline": true
			},
			"label": {
				"type": "plain_text",
				"text": "Additional Notes?",
				"emoji": true
			}
		}
     ]   
    };    

    const message = {
         response_type: 'in_channel', 
         blocks: viewData,
     };

    res.json(message); 
});

