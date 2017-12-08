'use strict';

import express = require('express');
const router = express.Router();
import * as admin from 'firebase-admin';

router.post('/buying', (req: express.Request, res: express.Response, next: Function) => {
    const brand = req.body.brand;
    const quantity = req.body.quantity;
    const brands = ['Patricia', 'Corona', 'Zilertal', 'Pilsen'];
    const db = admin.database();
    let ref = db.ref('beers/' + brand + '/price');
    ref.transaction((value: number) => {
        return value + quantity;
    });
    for (let i = 0; i < brands.length; i++) {
        if (brands[i] !== brand) {
            ref = db.ref('beers/' + brands[i] + '/price');
            ref.transaction((value: number) => {
                return value - quantity / (brands.length - 1);
            });
        }
    }

    res.send();
});

module.exports = router;
