// All static and resuable data that will be mapped through will be stored in this folder and referenced from this file
import { MessageRes, UserRes } from '@/types';
import { faker } from '@faker-js/faker';
import _ from "lodash"


export const dashBoardIconsMap = {
    staff: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
    </svg>,
    messages: 
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
        </svg>

    ,
    posts: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
    </svg>
,
    // messages: 
    //     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    //         <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
    //     </svg>

    // ,

   
};


export const dummyStaff: UserRes[] = Array.from({ length: 20 }, () => ({
    othernames: faker.person.firstName(),
    surname: faker.person.firstName(),
    email: _.toLower(faker.internet.email()),
    _id: faker.database.mongodbObjectId(),
    createdAt: faker.date.anytime(),
    updatedAt: faker.date.anytime(),
    isFirstLogin: faker.datatype.boolean(),
    pin: faker.internet.password(),
    phone: faker.phone.number(),
    role: "DOCTOR",
    token: "some-string",
    sid: faker.database.mongodbObjectId(),
}));

export const dummyMessages: MessageRes[] = Array.from({ length: 20 }, () => ({
    sender: {
        othernames: faker.person.firstName(),
        surname: faker.person.firstName(),
        email: _.toLower(faker.internet.email()),
        _id: faker.database.mongodbObjectId(),
    },
    reciepient: {
        othernames: faker.person.firstName(),
        surname: faker.person.firstName(),
        email: _.toLower(faker.internet.email()),
        _id: faker.database.mongodbObjectId(),
    },
    message: faker.lorem.paragraphs({
        min: 1,
        max: 5
    }, '<br/>\n'),
    title: faker.lorem.words({min: 2, max: 7}),
    _id: faker.database.mongodbObjectId(),
    createdAt: faker.date.anytime(),
    updatedAt: faker.date.anytime(),
    read: faker.datatype.boolean(),
    replies: Array.from({ length: 5 }, () => ({
        sender: {
            othernames: faker.person.firstName(),
            surname: faker.person.firstName(),
            email: _.toLower(faker.internet.email()),
            _id: faker.database.mongodbObjectId(),
        },
        reciepient: {
            othernames: faker.person.firstName(),
            surname: faker.person.firstName(),
            email: _.toLower(faker.internet.email()),
            _id: faker.database.mongodbObjectId(),
        },
        message: faker.lorem.sentences(2),
        title: faker.lorem.words({ min: 2, max: 7 }),
        _id: faker.database.mongodbObjectId(),
        createdAt: faker.date.anytime(),
        updatedAt: faker.date.anytime(),
        read: faker.datatype.boolean(),
        replies: [],

    })),
   
}));


