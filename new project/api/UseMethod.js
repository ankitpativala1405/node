export const UserMethod = {
  Get: async () => {
    let req = await fetch("http://localhost:4000/user");
    return req;
  },
  Post: async (data) => {
    let req = await fetch("http://localhost:4000/user", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return req
  },
};
