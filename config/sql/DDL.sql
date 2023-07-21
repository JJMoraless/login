
drop database softwaredream5;
create database softwaredream5;
use softwaredream5;

CREATE TABLE hotel (  # 🐌
    nitHotel VARCHAR(20) NOT NULL,
    nameHotel VARCHAR(40) NOT NULL,
    adressHotel VARCHAR(40) NOT NULL,
    phoneHotel INT NOT NULL,
    PRIMARY KEY (nitHotel)
);

CREATE TABLE task (   # 🐌
    idTask INT NOT NULL,
    nameTask VARCHAR(20) NOT NULL,
    checkTask BOOLEAN NOT NULL,
    PRIMARY KEY (idTask)
);

CREATE TABLE roomType (   # 🥕
    idRoomType INT NOT NULL,
    nameRoomType VARCHAR(20) NOT NULL,
    PRIMARY KEY (idRoomType)
);

CREATE TABLE room (   # 🥕
    idRoom INT NOT NULL,
    idRoomType INT NOT NULL,
    numberRoom INT NOT NULL,
    pricePerNightRoom INT NOT NULL,
    floorRoom INT NOT NULL,
    avaibleRoom BOOLEAN NOT NULL,
    capacityRoom INT NOT NULL,
    PRIMARY KEY (idRoom),
    FOREIGN KEY (idRoomType)
        REFERENCES roomType (idRoomType)
);

CREATE TABLE product (  # 🐌
    idProduct INT NOT NULL,
    nameProduct VARCHAR(20) NOT NULL,
    typeProduct VARCHAR(20) NOT NULL,
    desciptionProduct VARCHAR(60) NOT NULL,
    priceSingleProduct INT NOT NULL,
    PRIMARY KEY (idProduct)
);

CREATE TABLE stock (  # 🐌
    idRoom INT NOT NULL,
    idProduct INT NOT NULL,
    cantityStock INT NOT NULL,
    PRIMARY KEY (idRoom , idProduct),
    FOREIGN KEY (idRoom)
        REFERENCES room (idRoom),
    FOREIGN KEY (idProduct)
        REFERENCES product (idProduct)
);

CREATE TABLE service (  # 🐇
    idService INT NOT NULL,
    descriptionService VARCHAR(100) NOT NULL,
    costService INT NOT NULL,
    PRIMARY KEY (idService)
);

CREATE TABLE reservationStatus (    # 🐇
    idStatus INT NOT NULL,
    nameStatus VARCHAR(20) NOT NULL,
    PRIMARY KEY (idStatus)
);

CREATE TABLE userRol (    # 🐇
    idRol INT NOT NULL,
    nameRol VARCHAR(20) NOT NULL,
    PRIMARY KEY (idRol)
);

CREATE TABLE userHotel (   # 🐇
    idUser INT NOT NULL,
    idRol INT NOT NULL,
    nameUser VARCHAR(60) NOT NULL,
    groupUser INT NOT NULL,
    addressUser VARCHAR(40) NOT NULL,
    emailUser VARCHAR(40) NOT NULL,
    passwordUser VARCHAR(20) NOT NULL,
    activeUser BOOLEAN NOT NULL,
    PRIMARY KEY (idUser),
    FOREIGN KEY (idRol)
        REFERENCES userRol (idRol)
);

CREATE TABLE assistance (  # 🐌
    countAssistance INT AUTO_INCREMENT NOT NULL,
    idUser INT NOT NULL,
    dateAssistance DATE NOT NULL,
    loginTimeAssistance TIME NOT NULL,
    logOutTimeAssistance TIME NOT NULL,
    HourCountAssistance INT NOT NULL,
    PRIMARY KEY (countAssistance),
    FOREIGN KEY (idUser)
        REFERENCES userHotel (idUser)
);

CREATE TABLE note (   #🐌
    idNote INT NOT NULL,
    idUser INT NOT NULL,
    createAtNote DATE NOT NULL,
    createByNote INT NOT NULL,
    modifyAtNote DATE,
    modifyByNote INT,
    titleNote VARCHAR(20) NOT NULL,
    contentNote VARCHAR(200) NOT NULL,
    PRIMARY KEY (idNote),
    FOREIGN KEY (idUser)
        REFERENCES userHotel (idUser)
);

CREATE TABLE country (  #🐌
    idCountry INT NOT NULL,
    nameCountry VARCHAR(20) NOT NULL,
    PRIMARY KEY (idCountry)
);

CREATE TABLE city (    # 🐇
    idCity INT NOT NULL,
    idCountry INT NOT NULL,
    nameCity VARCHAR(20) NOT NULL,
    PRIMARY KEY (idCity),
    FOREIGN KEY (idCountry)
        REFERENCES country (idCountry)
);

CREATE TABLE customer (     # 🐇
    idCustomer INT NOT NULL,
    idCity INT NOT NULL,
    TypeIdCustomer VARCHAR(20) NOT NULL,
    nameCustomer VARCHAR(60) NOT NULL,
    birthdateCustomer DATE NOT NULL,
    addressCustomer VARCHAR(40) NOT NULL,
    emailCustomer VARCHAR(40) NOT NULL,
    phoneCustomer INT NOT NULL,
    jobCustomer VARCHAR(20) NOT NULL,
    companyCustomer VARCHAR(20) NOT NULL,
    PRIMARY KEY (idCustomer),
    FOREIGN KEY (idCity)
        REFERENCES city (idCity)
);

CREATE TABLE reservation (   # 🐇
    idReservation INT NOT NULL,
    idUser INT NOT NULL,
    idRoom INT NOT NULL,
    idStatus INT NOT NULL,
    idCustomer INT NOT NULL,
    checkInDateReservation DATE NOT NULL,
    checkInTimeReservation TIME,
    checkOutDateReservation DATE NOT NULL,
    checkOutTimeReservation TIME,
    daysReservation INT NOT NULL,
    companionReservation BOOLEAN NOT NULL,
    createAtReservation DATE NOT NULL,
    reasonReservation VARCHAR(20),
    securityDepositReservation INT,
    PRIMARY KEY (idReservation),
    FOREIGN KEY (idUser)
        REFERENCES userHotel (idUser),
    FOREIGN KEY (idRoom)
        REFERENCES room (idRoom),
    FOREIGN KEY (idStatus)
        REFERENCES reservationStatus (idStatus)
);

CREATE TABLE servicexReservation (      # 🐇
    idService INT NOT NULL,
    idReservation INT NOT NULL,
    PRIMARY KEY (idService , idReservation),
    FOREIGN KEY (idService)
        REFERENCES service (idService),
    FOREIGN KEY (idReservation)
        REFERENCES reservation (idReservation)
);

CREATE TABLE bill (   # 🐇
    idBill INT NOT NULL,
    idReservation INT NOT NULL, 
    totalPerNightBill INT NOT NULL,  # numero de noches por persona
    totalPerServiceBill INT NOT NULL, # total servicios consumidos
    discountBill INT NOT NULL,
    chargesBill INT NOT NULL,
    totalBruteBill INT NOT NULL,
    toPayBill INT NOT NULL,
    PRIMARY KEY (idBill),
    FOREIGN KEY (idReservation)
        REFERENCES reservation (idReservation)
);



