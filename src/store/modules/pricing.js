const state = {

  plans: [

    {
      name: "Basic",
      price: 39,
      features: [
        "Gimnasio",
        "Clases grupales"
      ]
    },

    {
      name: "Premium",
      price: 79,
      features: [
        "Gimnasio",
        "Clases",
        "Nutrición"
      ]
    },

    {
      name: "Elite",
      price: 129,
      features: [
        "Gimnasio",
        "Clases",
        "Nutrición",
        "Personal Trainer"
      ]
    }

  ]

}

export default {

  namespaced: true,
  state

}
