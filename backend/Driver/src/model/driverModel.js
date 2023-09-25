import mongoose from "mongoose";


/*
        API for Driver Registrations    (/driver/registration)
- User ID
- Choose your lisence type (dropdown)
- Enter your lisence number
- Enter your KYC number (adher )


*/



const driverSchema = new mongoose.Schema({

    userId: mongoose.Schema.Types.ObjectId,
    licenceType: String,
    kycDocument: String,
    documentId: String

});

const DriverModel = mongoose.model('DriverModel', driverSchema);

export default DriverModel;
