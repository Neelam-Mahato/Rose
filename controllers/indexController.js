const asyncHandler = require("express-async-handler");

exports.index = asyncHandler(async (req, res) => {
    return res.render("pages/index", {
    });
});


