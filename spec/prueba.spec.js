// describe("demo", function () {
//   it("Este test debe pasar siempre", function () {
//     expect(4 + 2).toBe(6);
//   });
// });


const {Repository, Activity} = require("../scripts/index");

describe("Activity", () =>{
  it("debe ser una clase",()=>{
    expect(typeof Activity.prototype.constructor).toBe("function");
  });
  it("inicializacion de datos", () => {
    const activity = new Activity(1, title, description, imgUrl)

    expect(activity.id).toBe(1);
    expect(activity.title).toBe("title");
    expect(activity.description).toBe("descripcion");
    expect(activity.imgUrl).toBe("imgUrl")
  })
})

describe("Repository", () =>{
  it("debe ser una clase",()=>{
    expect(typeof Activity.prototype.constructor).toBe("function");
  });

  it("debe tener implementado el metodo getAllactivity()", ()=>{
    const repository = new Repository();
    expect(repository.getAllActivities).ToBeDefinided();
  });

  it("debe tener implementado el metodo createActivity()", ()=>{
    const repository = new Repository();
    expect(repository.createActivity).ToBeDefinided();
  });

  it("debe tener implementado el metodo deleteActivity()", ()=>{
    const repository = new Repository();
    expect(repository.deleteActivity).ToBeDefinided();
  });

  it("el metodo getAllActivities() debe devolver un array", ()=>{
    const activity = new Activity(1, title, description, imgUrl);
    expect(Array.isArray(activity.getAllActivities())).toBeTrue();
  });

  it("el metodo createActivities() debe agregar un nuevo elemento", ()=>{
    const activity = new Activity();
    activity.createActivity(2,"laburar", "estoy laburando", "ddslsslaa");
    expect(lista.getAllActivities()).toContain(2,"laburar", "estoy laburando", "ddslsslaa");
  });

  it("el metodo deleteActivity() debe eliminar el ultimo elemento",() =>{
    const activity = new TodoList();
    activity.addTodo(1,"laburar", "estoy laburando", "ddslsslaa");
    activity.addTodo(2,"bañarse", "me estoy bañando", "fgtgtgt");
    activity.addTodo(3,"correr", "estoy corriendo", "fffrrrttyhjj");
    activity.deleteActivity(3);
    expect(activity.getTodos()).toContain(1,"laburar", "estoy laburando", "ddslsslaa");
    expect(activity.getTodos()).toContain(2,"bañarse", "me estoy bañando", "fgtgtgt");
    expect(activity.getTodos()).not.toContain(3,"correr", "estoy corriendo", "fffrrrttyhjj");
});
});
