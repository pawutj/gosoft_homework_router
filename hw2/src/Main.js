const Main = () => {
  const createData = async (todo, detail) => {
    try {
      const res = await fetch("https://todo.showkhun.co/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          todo,
          detail,
        }),
      });
      if (res.ok) {
        console.log(res);
      }
    } catch (err) {
      console.log(err, "err");
    }
  };

  return (
    <div>
      <button onClick={() => createData("", "")}> test </button>
      <h1>test</h1>
    </div>
  );
};

export default Main;
