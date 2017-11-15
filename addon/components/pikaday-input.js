import { isEmpty } from '@ember/utils';
import { get, set } from '@ember/object';
import Component from '@ember/component';
import PikadayMixin from 'ember-pikaday/mixins/pikaday';

export default Component.extend(PikadayMixin, {
  tagName: 'input',

  attributeBindings: [
    'readonly',
    'tabindex',
    'disabled',
    'placeholder',
    'type',
    'name',
    'size',
    'required',
    'title',
    'hidden',
    'autocomplete'
  ],

  type: 'text',

  didInsertElement() {
    set(this, 'field', this.element);
    this.setupPikaday();
  },

  onPikadayOpen() {
    // this.get('onOpen')();
    get(this, 'onOpen')();
  },

  onPikadayClose() {
    if (get(this, 'pikaday').getDate() === null || isEmpty(this.$().val())) {
      // this.set('value', null);
      // this.get('onSelection')(null);
      set(this, 'value', null);
      get(this, 'onSelection')(null);
    }

    // this.get('onClose')();
    get(this, 'onClose')();
  },
});

