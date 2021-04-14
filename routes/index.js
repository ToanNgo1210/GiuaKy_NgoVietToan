module.exports = {
    getHomePage: (req, res) => {
        const search = req.query.search;
        //console.log(search);
        let query = "";

        if(search){
            query = "SELECT * FROM `product` where name like '%" + search + "%' ORDER BY STT ASC";
        }else {
            query = "SELECT * FROM `product` ORDER BY STT ASC"; // query database to get all the players
        }
        

        // execute query
        db.query(query, (err, result) => {
            if (err) {
                res.redirect('/');
            }
            res.render('index.ejs', {
                title: 'Cửa hàng bán nón bảo hiểm'
                ,product: result
            });
        });
    },
};