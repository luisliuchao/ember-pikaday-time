/* eslint-disable no-console, ember/alias-model-in-controller */
import { computed } from '@ember/object';

import Controller from '@ember/controller';

export default Controller.extend({
  maxDate: computed('startDate', function() {
    let maxDate = new Date();
    let startDate = this.get('startDate');
    maxDate.setDate(startDate.getDate() + 7);
    maxDate.setHours(23);
    maxDate.setMinutes(59);
    maxDate.setSeconds(59);
    return maxDate;
  }),

  actions: {
    clearStartDate() {
      this.set('startDate', new Date());
    },
    doSomethingWithSelectedValue(value) {
      console.log(value);
    }
  },

  startDate: new Date(),
  minDate: new Date()
});
