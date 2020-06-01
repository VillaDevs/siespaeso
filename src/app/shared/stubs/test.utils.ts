import {BusinessModel} from "../models/business.model";


export class TestUtils {
    static ID = 1;
    static NAME = 'Copacabana Beach';
    static ADDRESS = 'Calle 18 #5-21';
    static OPENING_TIME = '8am';
    static CLOSING_TIME = '12pm';
    static DESCRIPTION = "From sexy Ipanema and Copacabana, to more secluded and slightly lesser-known stretches of sand, like Prainha Beach, Brazil's Rio de Janeiro is best known for its beaches. Grab your sunscreen and Brazilian bikinis and head to the sunny shores of Rio's best beaches.";
    static LOCATION = [4.6603384, -74.1150088];
    static IMAGE = 'https://ionicframework.com/docs/demos/api/card/madison.jpg';
    static TAGS = [
        'Empanadas',
        'Comida'
    ];

    static BUSINESS_RESPONSE: BusinessModel[] = [{
        id: TestUtils.ID,
        name: TestUtils.NAME,
        address: TestUtils.ADDRESS,
        opening_time: TestUtils.OPENING_TIME,
        closing_time: TestUtils.CLOSING_TIME,
        description: TestUtils.DESCRIPTION,
        location: TestUtils.LOCATION,
        image: TestUtils.IMAGE,
        tags: TestUtils.TAGS
    }];
}
