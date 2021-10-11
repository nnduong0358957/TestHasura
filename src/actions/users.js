const api = "https://hasura-amhr.onrender.com/v1/graphql";

const _getResponse = async (getDoc, variables = {}) => {
  let response = await fetch(api, {
    method: "POST",
    body: JSON.stringify({
      query: getDoc,
      variables: variables,
    }),
  });
  response = await response.json();

  return response;
};

// @-----------------------------------------@

export const login = (userName, password) => async (dispatch) => {
  const getDoc = `
        query MyQuery {
            users {
            id
            name
            userName
            password
            }
        }
    `;

  const response = await _getResponse(getDoc);
  const { errors, data } = response;

  const loginUser = data.users.find(
    (user) => userName === user.userName && user.password === password
  );

  if (errors) {
    console.log(errors);
  } else {
    if (loginUser) {
      const token = JSON.stringify(loginUser);
      await localStorage.setItem("token", token);
    } else {
      alert("Sai tài khoản hoặc mật khẩu!");
    }
  }
};

export const register = (name, userName, password) => async (dispatch) => {
  const variables = { name: name, userName: userName, password: password };
  const getDoc = `
      mutation MyMutation($name: String = "", $userName: String = "", $password: String = "") {
        insert_users_one(object: {name: $name, userName: $userName, password: $password}) {
          id
          name
          userName
          password
        }
      }
    `;

  const response = await _getResponse(getDoc, variables);
  const { errors, data } = response;

  if (errors) {
    const duplicateUserName = errors.some(
      (err) =>
        err.message ===
        'Uniqueness violation. duplicate key value violates unique constraint "users_username_key"'
    );

    if (duplicateUserName)
      alert("Tên đăng nhập này đã tồn tại. Vui lòng đổi tên đăng nhập khác!");
    else console.log(errors);
  } else {
    const token = JSON.stringify(data.insert_users_one);
    await localStorage.setItem("token", token);
  }
};
