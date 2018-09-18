export function loadContacts() {
  return function(dispatch) {
    fetch("/contacts")
      .then(response => {
        return response.json();
      })
      .then(contacts => {
        //this line means the fetch call is done, so dispatch to the action load users.
        //The data users is available and I need to put it in the redux store.
        dispatch(contactsLoaded(contacts));
      });
  };
}

//the action above is returning a function with one parameter, dispatch SOP
//redux cannot handle returning a function and why we use thunk

//the action below is returning an object
export function contactsLoaded(contacts) {
  return {
    type: "CONTACTS_LOADED",
    value: contacts
  };
}

//always 2 actions for 1 fetch call
export function loadVehicles() {
  return function(dispatch) {
    fetch("/vehicles")
      .then(response => {
        return response.json();
      })

      .then(vehicles => {
        //this line means the fetch call is done, so dispatch to the action load users.
        //The data users is available and I need to put it in the redux store.
        dispatch(vehiclesLoaded(vehicles));
      });
  };
}

//the action above is returning a function with one parameter, dispatch SOP
//redux cannot handle returning a function and why we use thunk

//the action below is returning an object
export function vehiclesLoaded(vehicles) {
  return {
    type: "VEHICLES_LOADED",
    value: vehicles
  };
}

//always 2 actions for 1 fetch call
export function loadComments() {
  return function(dispatch) {
    fetch("/comments")
      .then(response => {
        return response.json();
      })

      .then(comments => {
        //this line means the fetch call is done, so dispatch to the action load users.
        //The data users is available and I need to put it in the redux store.
        dispatch(commentsLoaded(comments));
      });
  };
}

//the action above is returning a function with one parameter, dispatch SOP
//redux cannot handle returning a function and why we use thunk

//the action below is returning an object
export function commentsLoaded(comments) {
  return {
    type: "COMMENTS_LOADED",
    value: comments
  };
}

//always 2 actions for 1 fetch call
export function loadProducts() {
  return function(dispatch) {
    fetch("/products")
      .then(response => {
        return response.json();
      })

      .then(products => {
        //this line means the fetch call is done, so dispatch to the action load users.
        //The data users is available and I need to put it in the redux store.
        dispatch(productsLoaded(products));
      });
  };
}

//the action above is returning a function with one parameter, dispatch SOP
//redux cannot handle returning a function and why we use thunk

//the action below is returning an object
export function productsLoaded(products) {
  return {
    type: "PRODUCTS_LOADED",
    value: products
  };
}
