

// driverController

//  (http://carbooking/v0.1/ )



/*
        API for Driver Registrations    (/driver/registration)
- User ID
- Choose your lisence type (dropdown)
- Enter your lisence number
- Enter your KYC number (adher )


*/

const registration = async (req, res) => {

    try {

        const {
            userId,
            licenceType,
            kycDocument,
            documentId
        } = req.body

        //storing into Database
        const driverRegistration = new DriveModel({
            userId,
            licenceType,
            kycDocument,
            documentId
        })
        await driverRegistration.save();
        // sent response to client

        return res(201).send({
            message: 'Driver Registration successfull',
            success: true,
            data: driverRegistration
        });


    } catch (error) {

        return res(500).send({
            message: 'Internal Server Error',
            success: false,
            error
        });
    }
}






/*
        API for Driver Status      ( /driver/ride )

- Driver status (online, offline, booking)
- Choose from and to (sourcr and Destination) (dropdown)




*/

/*
        API for Driver get request     ( /driver/request )      ???

- Get all request for driver posted by car owner
- Show Available rides (for now in table format)(from, to, car details, action buttons) (frontend)



*/







export { registration } 