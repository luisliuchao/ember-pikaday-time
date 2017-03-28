/* eslint no-console: 0 */
import Ember from 'ember';

export default Ember.Controller.extend({
  startDate: new Date(),
  minDate: new Date(),
  maxDate: Ember.computed('startDate', function() {
    let maxDate = new Date();
    let startDate = this.get('startDate');
    maxDate.setDate(startDate.getDate() + 7);
    maxDate.setHours(23);
    maxDate.setMinutes(59);
    maxDate.setSeconds(59);
    return maxDate;
  }),
  actions: {
    clearStartDate: function() {
      this.set('startDate', new Date());
    },
    doSomethingWithSelectedValue(value) {
      console.log(value);
    }
  },
});
