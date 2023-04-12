import { useState, useEffect } from "react";

function Main() {
  const [product, setProduct] = useState([
    {
      name: "iPhone 12",
      price: 999,
    },
    {
      name: "iPhone 13",
      price: 1999,
    },
    {
      name: "iPhone 14",
      price: 2999,
    },
  ]);

  // const newList = productList.map((item, index) => (
  //   <div className="product-item" key={index}>
  //     <h2>{item.name}</h2>
  //     <h3>{item.price}</h3>
  //   </div>
  // ));

  const handleBuyProduct = (e, name) => {
    console.log(`buy ${name}`);
  };
  const notiAhihi = (e) => {
    console.log(e.target.value);
  };

  const renderProductList = () => {
    return product.map((item, index) => {
      return (
        <div key={index} className="product-item">
          <h2>{item.name}</h2>
          <h3>{item.price}</h3>
          <button onClick={(e) => handleBuyProduct(e, item.name)}>Buy</button>
          <button onClick={(e) => notiAhihi(e)}>Ahihi</button>
        </div>
      );
    });
  };
  const [info, setInfo] = useState({
    abc: "Nguyen Van A",
    city: "Da nang",
    age: 18,
  });
  const handleUpdate = () => {
    setInfo({
      ...info,
      bio: "Yêu màu hồng ^^'",
    });
  };
  const [count, setCount] = useState(0);
  const handlePlus = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    document.title = `You clicked ${count} times`;
    console.log("ok");
  }, [count]);

  const handleMinus = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  const [search, setSearch] = useState("");
  const handleChangeSearchKey = (e) => {
    setSearch(e.target.value);
  };
  const handleAddProduct = () => {
    setProduct([
      ...product,
      {
        name: "iPhone 20",
        price: 99999,
      },
    ]);
  };
  const [show, setShow] = useState(false);

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => {
        setUsers(users);
      });
  }, [show]);

  return (
    <div className="main">
      <input name="searchKey" onChange={(e) => handleChangeSearchKey(e)} />
      <span>{search}</span>
      {renderProductList()}
      <button onClick={() => handleAddProduct()}>Plus</button>
      <div className="App">
        <h1>{JSON.stringify(info)}</h1>
        <button onClick={handleUpdate}>Update</button>
        <div>
          <h2>{count}</h2>
          <button onClick={handleMinus}>Minus</button>
          <button onClick={handlePlus}>Add</button>
        </div>
        <div style={{ padding: 20 }}>
          <button onClick={() => setShow(!show)}>Toggle</button>
          {show}
        </div>
        <div>
          <ul style={{ color: "black" }}>
            {users.map((user) => (
              <li key={user.id}>{user.title}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Main;
