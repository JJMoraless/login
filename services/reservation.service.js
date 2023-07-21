import { Reservation } from "../models/reservation.model";
import { Service } from "../models/service.model";

export class ReservationService {
    
  //TODO: falta
  async fetchReservations() {
    const reservationsFound = await Reservation.findAll({
      include: [
        {
          model: Service,
          atributes: ["nameService"],
        },
      ],
    });
    return reservationsFound;
  }

  //TODO: falta 
  async addReservation({ reservation }) {
    const createdReservation = await Reservation.create(reservation);
    return createdReservation;
  }

  //TODO: falta 
  async fetchReservation({ idReservation }) {
    const reservationFound = await Reservation.findByPk(idReservation, {
    });
    return reservationFound;
  }

  //TODO: falta 
  async updateReservation({ idReservation, reservation }) {
    const reservationFound = await Reservation.findByPk(idReservation);
    const reservationSaved = reservationFound.set(reservation).save();
    return reservationSaved;
  }

  //TODO: falta 
  async removeReservation({ idReservation }) {
    await Reservation.destroy({
      where: {
        id: idReservation,
      },
    });
    return true;
  }
}
