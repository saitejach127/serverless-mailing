const functions = require("firebase-functions");
const nodemailer = require("nodemailer");
const config = functions.config();

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.sendmail = functions.https.onRequest((req, res) => {
	var data = req.body;
	var transporter = nodemailer.createTransport({
		service: "gmail",
		auth: {
		user: config.sender.email,
		pass: config.sender.pass,
		},
	});

	var info = data.info;
	info += "\n This is an auto generated mail \n Please do not reply to this mail address\n"

	for(let i=0;i<data.recievers.length;i++){
		var mailOptions = {
			from: config.sender.email,
			to: data.recievers[i],
			subject: data.subject,
			text: info
		};

		transporter.sendMail(mailOptions, (error, info) => {
			if (error) {
				res.send({success:false, error:error});
			} else {
			console.log("Email sent: " + info.response);
			}
		});
	}

	res.send({ success: true });
});
