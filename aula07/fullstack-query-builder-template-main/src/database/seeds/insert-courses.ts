import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    // await knex("table_name").del();

    // Inserts seed entries
    await knex("courses").insert([
        // { id: 1, colName: "rowValue1" },
        { name: "CSS"},
        { name: "React"},
        { name: "Node.js"},
        { name: "Git"},
        { name: "Github"},
        { name: "Typescript"},
        { name: "Express.js"},
        { name: "Banco de Dados"},
    ]);
};
