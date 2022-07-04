const OpenTok = require("opentok");
const apiKey = "47530411";
const apiSecret = "35f6268c459cd41f3796ae8deddbe0dbe5e92bb7";
const opentok = new OpenTok(apiKey, apiSecret);
let sessionId = "";

// Creating Sessions
// Create a session that will attempt to transmit streams directly between
// clients. If clients cannot connect, the session uses the OpenTok TURN server:
opentok.createSession(function (err, session) {
    if (err) return console.log(err);
    console.log(session.sessionId);
    sessionId = session.sessionId;
    token = opentok.generateToken(sessionId);
    
    console.log(token);

    console.log(session.generateToken());

    console.log(session.generateToken({
        role: "moderator",
        expireTime: new Date().getTime() / 1000 + 7 * 24 * 60 * 60, // in one week
        data: "name=Johnny",
        initialLayoutClassList: ["focus"],
    }));
});

// follow unfollow swagger
// winning js k like ziada hian to champion h 
