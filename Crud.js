import React, { useRef, useState, useEffect } from "react";
import axios from "axios";


const Student = () => {
  const [product, setProduct] = useState([]);
  const username = useRef("");
  const password = useRef("");
  const idd = useRef('')

  useEffect(() => {
    getApi();
  }, []);

  const deleteProduct = (id) => {
    axios.delete(`http://localhost:3000/std/${id}`).then((res) => {
      getApi();
    });
  };


  const getApi = () => {
    axios.get("http://localhost:3000/std").then((productList) => {
      setProduct(productList.data);
    });
  };

  const addData = () => {
    if (idd.current.value) {
      // console.log(idd.current.value)
      axios.put(`http://localhost:3000/std/${idd.current.value}`, {
        username: username.current.value,
        password: password.current.value,
        idd: idd.current.value,
      })
    } else {
      axios.post('http://localhost:3000/std', {
        username: username.current.value,
        password: password.current.value,
      idd:idd.current.value,
      })
     
    }
        username.current.value = "";
        password.current.value = "";
        idd.current.value = "";
        getApi();
      
  };

  const editProduct = (id) => {
    axios.get(`http://localhost:3000/std/${id}`).then((res) => {
      username.current.value = res.data.username
      password.current.value = res.data.password
      idd.current.value = res.data.id
    })
  }
  const showAlert = () => {
    window.alert("Form submitted successfully!");
  };

  return (
    <div>
       <input ref={username} type="text" id="username" />
      <input ref={password} type="text" id="password" />
      <input type="hidden" ref={idd} />
      <button
        onClick={() => {
          addData()
        }}
      >
        Add / edit Product
      </button>
 <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal"
  data-bs-whatever="@mdo">Open modal for @mdo</button>


<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">New message</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form>
          <div class="mb-3">
            <label for="recipient-name" class="col-form-label"  id="username" name="username">Recipient:</label>
            <input type="text" class="form-control"ref={username} id="recipient-name"/>
          </div>
          <div class="mb-3">
            <label for="message-text" class="col-form-label" id="password" name="password">Message:</label>
            <textarea class="form-control"  ref={password}id="message-text"></textarea>
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button
                    type="submit"
                    onClick={() => {
                      addData();
                    }}
                    className="btn btn-primary btn-lg btn-block login-btn"
                    data-dismiss="modal"
                  >
                    Login
                  </button>   
      </div>
    </div>
  </div>
</div>

      <div>
        <h2>Submitted Form Data:</h2>
        <ul>
          {product.map((data, index) => (
            <li key={index}>
              <strong>Username:</strong> {data.username}
              <br />
              <strong>Password:</strong> {data.password}
              <br/>
              <button
                  onClick={() => {
                    deleteProduct(data.id);
                  }}
                >
                  Delete
                </button>
                <button type="button" class="btn btn-secondary"
                  onClick={() => {
                    editProduct(data.id);
                  }}
                  data-bs-toggle="modal" data-bs-target="#exampleModal"
                >

                
                  Edit 
                                 </button>
            </li>
            
          ))} 
          
        </ul>
      </div>
    </div>
  );
};

export default Student;
// import React, { useRef, useState, useEffect } from "react";
// import axios from "axios";
// import "./Style.css";

// const Student = () => {
//   const [product, setProduct] = useState([]);
//   const username = useRef("");
//   const password = useRef("");

//   useEffect(() => {
//     getApi();
//   }, []);

//   const deleteProduct = (id) => {
//     axios.delete(`http://localhost:3000/std/${id}`).then((res) => {
//       getApi();
//     });
//   };


//   const getApi = () => {
//     axios.get("http://localhost:3000/std").then((productList) => {
//       setProduct(productList.data);
//     });
//   };

//   const addData = () => {
//     axios
//       .post("http://localhost:3000/std", {
//         username: username.current.value,
//         password: password.current.value,
//       })
//       .then((res) => {
//         console.log(res);
//         getApi();
//         username.current.value = "";
//         password.current.value = "";
//         showAlert();
//       });
//   };

//   const showAlert = () => {
//     window.alert("Form submitted successfully!");
//   };

//   return (
//     <div>
//       <div className="text-center">
//         <a href="#myModal" className="trigger-btn" data-toggle="modal">
//           Click to Open Login Form
//         </a>
//       </div>

//       <div id="myModal" className="modal fade">
//         <div className="modal-dialog modal-login">
//           <div className="modal-content">
//             <div className="modal-header">
//               <div className="avatar">
//                 {/* <img
//                   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJmaSgpaGw9kYpF2pUuaqC499tYd_lNByji_i0wEI&s"
//                   alt="Avatar"
//                 /> */}
//               </div>
//               <h4 className="modal-title">Member Login</h4>
//               <button
//                 type="button"
//                 className="close"
//                 data-dismiss="modal"
//                 aria-hidden="true"
//               >
//                 &times;
//               </button>
//             </div>
//             <div className="modal-body">
//               <form action="/examples/actions/confirmation.php" method="post">
//                 <div className="form-group">
//                   <input
//                     type="text"
//                     ref={username}
//                     className="form-control"
//                     name="username"
//                     placeholder="Username"
//                     required="required"
//                     autoComplete="off"
//                   />
//                 </div>
//                 <div className="form-group">
//                   <input
//                     type="password"
//                     autocomplete="off"
//                     ref={password}
//                     className="form-control"
//                     name="password"
//                     placeholder="Password"
//                     required="required"
//                     autoComplete="off"
//                   />
//                 </div>
//                 <div className="form-group">
//                   <button
//                     type="submit"
//                     onClick={() => {
//                       addData();
//                     }}
//                     className="btn btn-primary btn-lg btn-block login-btn"
//                     data-dismiss="modal"
//                   >
//                     Login
//                   </button>
//                 </div>
//               </form>
//             </div>
//             <div className="modal-footer">
//               <a href="#">Forgot Password?</a>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div>
//         <h2>Submitted Form Data:</h2>
//         <ul>
//           {product.map((std, index) => (
//             <li key={index}>
//               <strong>Username:</strong> {std.username}
//               <br />
//               <strong>Password:</strong> {std.password}
//               <br/>
//               <button
//                   onClick={() => {
//                     deleteProduct(std.id);
//                   }}
//                 >
//                   Delete
//                 </button>
//             </li>
            
//           ))}
          
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Student;