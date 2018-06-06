//On submit, take email entry from onboard.html

//add to floor.adv google group
POST https://www.googleapis.com/admin/directory/v1/groups/floor.adv@ustwo.com/members

{
   "email": "test@email.com",
    "role": "MEMBER"
}

//add to slack
POST https://slack.com/api/users.admin.invite?token=xoxp-88175372023-177385201444-376073087520-b77596767a5fe21803d91f3c15787129&email=test@email.com&channels=C000000001,C000000002

//add to robin
YPeeAJ6B2DcGQ2jglRbRIUFuLVdpxwmnaZ9m7BrB45Wrczg96BVKEODoogx8YQli5SrBFzbOokEJQsauyQucFzUsJwQFtqxtLFkUt4Q99eV3LCFxz18TTQF2h1KRJEz2

POST https://api.robinpowered.com/v1.0/organizations/:id/users

//add to Adventure mailchimp list
Request('https://us15.api.mailchimp.com/3.0/lists/152871/members', {
                method: 'POST',
                mode: 'no-cors',
                json: {
                    "email_address": "test@email.com",
                    "status": "pending",
                },
                redirect: 'follow',
                headers: new Headers({
                    'Content-Type': 'application/json',
                    'Authorization': 'Basic apikey'
                }),
                auth: {
                    'user': 'ustwoadventure',
                    'pass': '5b72871c009800d1182f1b47d7d9abfc-us15'
                }
            });
