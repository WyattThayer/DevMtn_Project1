let TestData = [
  { id: 0, description: "dinner with ben", place: "park", time: "12:00pm" },
];

let globalId = 1;

const handlerFunctions = {
  getEvent: (req, res) => {
    res.send(TestData);
  },

  addEvent: (req, res) => {
    const { description, place, time } = req.body;

    const newObj = {
      id: globalId,
      description: description,
      place: place,
      time: time,
    };
    TestData.push(newObj);

    globalId++;

    res.send(newObj);
  },

  deleteEvent: (req, res) => {
    const id = req.params.id;
    const index = TestData.findIndex((event) => event.id === +id);

    if (index === -1) {
      res.status(404).send("Event not found");
    } else {
      TestData = TestData.filter((event) => event.id !== +id);
      res.send("Event deleted");
    }
  },

  editEvent: (req, res) => {
    const { id } = req.params;
    const { description, place, time } = req.body;

    const index = TestData.findIndex((event) => event.id === +id);

    const eventItem = TestData[index];
    eventItem.description = description;
    eventItem.place = place;
    eventItem.time = time;
    res.send(eventItem);
  },
};

export default handlerFunctions;
