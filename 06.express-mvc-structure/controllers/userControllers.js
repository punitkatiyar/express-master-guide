const getUser = (req, res) => {
    res.send({
        success: true,
        messgae: "This is data sourse"
    })
}

module.exports = { getUser };