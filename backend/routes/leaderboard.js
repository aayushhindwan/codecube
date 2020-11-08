const express = require('express');
const router = express.Router();
var leaderboard_database = require('../models/leader_model');
var leaders = [{ name: "Aayush Hindwan", score: 300, rank: 0 }];
var ind = 0;
router.get('/', async function (req, res) {
    let i = 0;
    ind = 0;
    leaders = [];
    await leaderboard_database.find({}, { returnOriginal: false }, function (err, Leaders) {
        if (err) {
            console.log(err);
        }
        else if (Leaders != null) {
            try {
                Leaders.forEach(function (leader) {
                    if (leader != null) {
                        var xx = {
                            score: leader.score,
                            name: leader.name,
                            rank: 0
                        }
                        leaders.push(xx);
                        ind++;
                    }
                });
            } catch (err) {
                console.log(err);
            }
        }
    });
    leaders.sort(function (x, y) {
        if (x.score > y.score)
            return -1;
        if (x.score < y.score)
            return 1;
        return 0;
    });
    while (i < ind) {
        leaders[i].rank = i + 1;
        i++;
    }
    res.render("leaderboard", { leaders: leaders });
});
module.exports = router;