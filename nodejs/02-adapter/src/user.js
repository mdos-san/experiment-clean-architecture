import Application from "application";

const user = {
    create: () => "Adapter - " + Application.user.create(),
}

export default user;
