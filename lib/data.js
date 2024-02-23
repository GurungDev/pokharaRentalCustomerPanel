export const nav_data = [
    {
      id: "home",
      title: "Home",
      url: "/",
      hasSubMenu: false,
    },
    {
      id: "Stores",
      title: "Listings",
      img_url: "/store",
      img_title: "Find listings Near you !!",
      img_desc:
        "We can find the nearest rental store available near you using our GPS.",
      url: "#",
      hasSubMenu: true,
      subMenu: [
        {
          bg: "linear-gradient(90deg, rgba(40,198,235,1) 21%, rgba(3,4,6,0.9220938375350141) 100%)",
          id: "Boats",
          title: "Boats",
          header: "Rent a boat from us and set sail on your next adventure, creating memories that will last a lifetime.",
          img: "/boat.png",
          url: "/boats",
        },
        {
          id: "Cycles",
          bg: "linear-gradient(90deg, rgba(238,174,202,1) 0%, rgba(36,82,136,0.8632703081232493) 100%)",
          title: "Cycles",
          header: "Explore your surroundings at your own pace with our reliable cycle rental services.",
          img: "/cycle.png",
          url: "/cycles",
        },
      ],
    },
    {
      id: "Store near me",
      title: "Store Near Me",
      url: "/store",
      hasSubMenu: false,
    },
    {
      id: "who-we-are",
      title: "About Us",
      url: "/aboutUs",
      hasSubMenu: false,
    },
    {
      id: "Login",
      title: "Login",
      url: "/auth",
      showDuringLoggedIn: false,
      showDuringBoth: false,
      hasSubMenu: false,
    },
    {
      id: "Contact",
      title: "Contact Us",
      url: "/contact",
      hasSubMenu: false,
    },
  ];


  export const nav_data_auth = [
    {
      id: "home",
      title: "Home",
      url: "/",

      hasSubMenu: false,
    },
    {
      id: "Stores",
      title: "Listings",
      img_url: "/store",
      img_title: "Find listings Near you !!",
      img_desc:
        "We can find the nearest rental store available near you using our GPS.",
      url: "#",
      hasSubMenu: true,
      subMenu: [
        {
          bg: "linear-gradient(90deg, rgba(40,198,235,1) 21%, rgba(3,4,6,0.9220938375350141) 100%)",
          id: "Boats",
          title: "Boats",
          header: "Rent a boat from us and set sail on your next adventure, creating memories that will last a lifetime.",
          img: "/boat.png",
          url: "/boats",
        },
        {
          id: "Cycles",
          bg: "linear-gradient(90deg, rgba(238,174,202,1) 0%, rgba(36,82,136,0.8632703081232493) 100%)",
          title: "Cycles",
          header: "Explore your surroundings at your own pace with our reliable cycle rental services.",
          img: "/cycle.png",
          url: "/cycles",
        },
      ],
    },
    {
      id: "Store near me",
      title: "Store Near Me",
      url: "/store",

      hasSubMenu: false,
    },
    {
      id: "who-we-are",
      title: "About Us",
      url: "/aboutUs",

      hasSubMenu: false,
    },

    {
      id: "Contact",
      title: "Contact Us",
      url: "/contact",
      hasSubMenu: false,
    },
  ];

  export const  OtpPurpose = {
    SIGNUP_STORE :"signupStore",
    FORGOT_PASSWORD_STORE : "forgotPasswordStore",
    SIGNUP_CUSTOMER :"signupCustomer",
    FORGOT_PASSWORD_CUSTOMER : "forgotPasswordCustomer",
  };

  export const RatingForEnum ={
    STORE : "store",
    BOAT : "boat",
    CYCLE : "cycle"
  }
  

  export const NotificationTypeEnum =  {
    NEW_BOAT : "new_boat",
    NEW_CYCLE : "new_cycle",
    UPDATE_BOAT : "update_boat",
    UPDATE_CYCLE : "update_cycle"
  }