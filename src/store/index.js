import { createStore } from 'vuex'

import blog from './modules/blog'
import pricing from './modules/pricing'

export default createStore({

  modules: {
    blog,
    pricing
  }

})
