const request = require("supertest");
const server = require("../index");

describe("Obtener producto, eliminar producto, login y registro", () => {
    it("GET /tienda devuelve el código 200 y array de objetos", async () => {
        const res = await request(server).get("/");
        expect(res.status).toBe(200);
        expect(res.body).toBeInstanceOf(Array);
        expect(res.body.length).toBeGreaterThan(0)
    })

    it("Status code 404 al eliminar producto con id inexistente", async () => {
        const idEliminar = 150;
        const res = await request(server)
          .delete(`/users/1/ventas/${idEliminar}`)
          .send()
        expect(res.status).toBe(404);
      });

      it("Status code 200 al iniciar sesion correctamente", async () => {
        const usuario = {email: "micheal.jennings@example.com", password: "contraseña" };
        const res = await request(server).post("/login").send(usuario);
        expect(res.status).toBe(200);
      });

      it("Status 500 al registrarse con un email que ya esta en uso", async () => {
        const usuario = { nombre: "Felix Sanders", email: "micheal.jennings@example.com", password: "12345", image: "https://randomuser.me/api/portraits/men/74.jpg"};
        const res = await (await request(server).post("/usuarios/registro").send(usuario))
        expect(res.status).toBe(500);
      });
})

