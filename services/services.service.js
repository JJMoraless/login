import {Service} from "../models/service.model";


export class ServicesService {
  //TODO: falta 
  async fetchServices() {
    const servicesFound = await Service.findAll({
    });
    return servicesFound;
  }

  //TODO: falta 
  async addService({ service }) {
    const createdService = await Service.create(service);
    return createdService;
  }

  //TODO: falta 
  async fetchService({ idService }) {
    const serviceFound = await Service.findByPk(idService, {
    });
    return serviceFound;
  }


  //TODO: falta 
  async updateService({ idService, service }) {
    const serviceFound = await Service.findByPk(idService);
    const serviceSaved = serviceFound.set(service).save();
    return serviceSaved;
  }

  //TODO: falta 
  async removeService({ idService }) {
    await Service.destroy({
      where: {
        id: idService,
      },
    });
    return true;
  }
}