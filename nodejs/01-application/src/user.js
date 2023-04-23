import BusinessLayer from "business";

const create = () => {
    // TODO
    return "Application - " + BusinessLayer.user.create();
}

const user = {
    create,
}

export default user;

