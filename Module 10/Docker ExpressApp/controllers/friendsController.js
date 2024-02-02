const friends = require("../models/friends");

module.exports.get_all = (req, res) => {
    res.json(friends);
};

module.exports.get_filter = (req, res) => {
    console.log(req.query);
    let filterGender = req.query.gender;
    let matchingFriends = [...friends];

    if (filterGender) {
        matchingFriends = matchingFriends.filter(
            (friend) => friend.gender == filterGender
        );
    }

    if (matchingFriends.length > 0) {
        // return valid data when the gender matches
        return res.status(200).json(matchingFriends);
    } else {
        // and an error response when there are no matches
        return res
            .status(404)
            .json({ error: "No friends matching gender " + filterGender });
    }
};

module.exports.get_filterLetter = (req, res) => {
    console.log(req.query);
    console.log(req.props);
    let filterLetter = req.props.letter.toLowerCase();
    let matchingFriends = [...friends];

    if (filterLetter) {
        matchingFriends = matchingFriends.filter(
            (friend) => friend.name[0].toLowerCase() == filterLetter
        );
    }

    if (matchingFriends.length > 0) {
        // return valid data when the gender matches
        res.status(200).json(matchingFriends);
    } else {
        // and an error response when there are no matches
        res.status(404).json({
            error: "No friends matching letter " + filterLetter,
        });
    }
};

module.exports.get_info = (req, res) => {
    console.log(req.headers);

    // Modify this response to just return info on the user-agent, content-type and accept headers
    // res.json(req.headers);

    const result = {
        "user-agent": req.headers["user-agent"],
        "content-type": req.headers["content-type"],
        accept: req.headers.accept,
    };

    res.json(result);
};

module.exports.get_id = (req, res) => {
    console.log(req.props);
    let friendId = req.props.id; // 'id' here will be a value matching anything after the / in the request path

    // Modify this function to find and return the friend matching the given ID, or a 404 if not found
    const foundFriend = friends.find((friend) => friend.id == friendId);

    if (foundFriend) {
        // Modify this response with the matched friend, or a 404 if not found
        res.status(200).json({
            result: `Found friend with ID ${friendId} :  ${foundFriend.name}, ${foundFriend.gender} `,
        });
    } else {
        res.status(404).json({ error: "No friends matching id " + friendId });
    }
};

module.exports.post_newFriend = (req, res) => {
    let newFriend = req.body; // FIRST add this line to index.js: app.use(express.json());
    console.log(newFriend); // 'body' will now be an object containing data sent via the request body

    // we can add some validation here to make sure the new friend object matches the right pattern
    if (!newFriend.name || !newFriend.gender) {
        res.status(500).json({
            error: "Friend object must contain a name and gender",
        });
        return;
    } else if (!newFriend.id) {
        newFriend.id = friends.length + 1; // generate an ID if one is not present
    }

    // if the new friend is valid, add them to the list and return the successfully added object
    friends.push(newFriend);
    res.status(200).json(newFriend);
};

module.exports.put_updateById = (req, res) => {
    let friendId = req.props.id;
    let updatedFriend = req.body;

    // Replace the old friend data for friendId with the new data from updatedFriend
    const foundFriend = friends.find((friend) => friend.id == friendId);

    if (foundFriend) {
        foundFriend.name = updatedFriend.name;
        foundFriend.gender = updatedFriend.gender;
        // Modify this response with the updated friend, or a 404 if not found
        res.status(200).json({
            result: "Updated friend with ID " + friendId,
            data: foundFriend,
        });
    } else {
        res.status(404).json({ error: "No friends matching id " + friendId });
    }
};
