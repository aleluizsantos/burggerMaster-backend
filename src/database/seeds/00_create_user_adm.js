exports.seed = async function (knex) {
  await knex("users").insert([
    {
      name: "User Burger",
      email: "burger@gmail.com",
      phone: "(17) xxxx-xxxx",
      password: "$2a$10$ag3gNBv9wXR43I0FOjY6weW9pBkSytFavLxUdkf7EWB75BDyKmvPm",
      typeUser: "admin",
      blocked: "false",
    },
  ]);

  await knex("deliveryType").insert([
    { description: "Delivery" },
    { description: "Retirada" },
  ]);

  await knex("operation").insert([{ open_close: false }]);
};
